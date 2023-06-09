(ns mentionmyfollowers.core
  (:use [domina :only [single-node]])
  (:require[om.core :as om :include-macros true]
           [om.dom :as dom :include-macros true]
           [domina.css :as css]
           [clojure.string :as string]
           [mentionmyfollowers.data :as data]))

(enable-console-print!)

(println "Mention My Followers Chrome Extenssion")

(defn report-error!
  "Reports an error of restful api call."
  [{:keys [status status-text failure] :as error}]
  (println error))


(defn create-comments
  "Sends the create_comments command to the content script."
  []
  (.. js/chrome -tabs (query #js {:active true, :currentWindow true}
                             (fn [tabs]
                               (data/load-templates
                                (fn [templates]
                                  (.. js/chrome -tabs
                                      (sendMessage (.-id (aget tabs 0))
                                                   #js {:followers (clj->js (data/selected-followers))
                                                        :templates (clj->js templates)},
                                                   (fn [response]
                                                     (println "Response received from content script:"
                                                              (if response (.-message response) "no-response"))))))
                                (fn [error]
                                  (report-error! error)))))))

(defn read-user-id
  "Reads the Instagram user id from the cookie. It needs
  the user to be logged in into his/her Instagram account."
  [f]
  (let [query #js {:url "https://instagram.com/"
                   :name "ds_user_id"}]
    (println "querying ds_user_id cookie")
    (.. js/chrome -cookies
        (get query (fn [cookie]
                     (println "Got value for ds_user_id cookie" (.-value cookie))
                     (f (.-value cookie)))))))

(defn show-user-id [{:keys [user-id]} owner]
  (reify om/IRender
    (render
     [_]
     (dom/p
      nil
      (str "User-id is "(if user-id user-id "Not Available"))))))

(defn accounts-form
  "A form to enter the accounts whose followers you want to mention"
  [accounts owner {on-get-followers :on-get-followers}]
  (reify
    om/IInitState
    (init-state [_]
                {:accounts (string/join " " accounts)})
    om/IRenderState
    (render-state [_ {text :accounts}]
                  (dom/form
                   nil
                   (dom/div
                    #js {:className "form-group"}
                    (dom/label
                     #js {:htmlFor "accounts-input"}
                     "Accounts:")
                    (dom/textarea
                     #js {:id "accounts-input"
                          :className "form-control"
                          :rows "11"
                          :value text
                          :onChange (fn [e] (om/set-state! owner :accounts (.. e -target -value)))}))
                   (dom/button
                    #js {:className "btn btn-primary"
                         :onClick (fn [e]
                                    (.preventDefault e)
                                    (println "Get followers button clicked")
                                    (let [new-accounts (string/split text #" ")]
                                      (om/update! accounts new-accounts)
                                      (on-get-followers new-accounts)))}
                    "Get Followers")))))

(defn loading-followers [_ _]
  (reify
    om/IRender
    (render [_]
            (dom/div
             #js {:className "progress"}
             (dom/div
              #js {:className "progress-bar progress-bar-striped active"
                   :role "progressbar"
                   :aria-valuenow "100"
                   :aria-valuemin "0"
                   :aria-valuemax "100"
                   :style #js {:width "100%"}})))))

(defn statistics [followers owner]
  (reify
    om/IRender
    (render [_]
            (dom/div
             #js {:className "alert alert-success"}
             "Loaded "
             (dom/strong nil (count followers))
             " followers"))))

(defn selection-form [selection owner]
  (reify
    om/IRender
    (render [_]
            (dom/form
             nil
             (dom/div
              #js {:className "form-group"}
              (dom/label
               #js {:htmlFor "selection-from"}
               "From")
              (dom/input
               #js {:type "text"
                    :className "form-control"
                    :id "selection-from"
                    :value (:from selection)
                    :onChange #(om/update! selection :from (-> % .-target .-value (- 0)))}))
             (dom/div
              #js {:className "form-group"}
              (dom/label
               #js {:htmlFor "selection-to"}
               "To")
              (dom/input
               #js {:type "text"
                    :className "form-control"
                    :id "selection-to"
                    :value (:to selection)
                    :onChange #(om/update! selection :to (-> % .-target .-value (- 0)))}))))))

(defn update-selection [{:keys [from to] :as selection} idx]
  (println "Setting selection" idx "->" from to)
  (cond
   (nil? from) (merge selection {:from idx :to idx})
   (< idx from) (assoc selection :from idx)
   (> idx from) (assoc selection :to idx)
   true (merge selection {:from nil :to nil})))

(defn is-selected? [i {:keys [from to]}]
  (cond
   (not (or from to)) false
   (and from to) (and (>= i from)
                      (<= i to))
   from (>= i from)
   to (<= i to)))

(defn follower-item [followers-and-selection owner {:keys [idx]}]
  (reify
    om/IRender
    (render [_]
            (let [followers (:followers followers-and-selection)
                  selection (:selection followers-and-selection)
                  is-this-selected? (is-selected? idx (:selection followers-and-selection))
                  on-click (fn [e]
                             (.preventDefault e)
                             (om/transact!
                              followers-and-selection
                              :selection
                              (fn [s] (update-selection s idx))))]
              (dom/a #js {:href "#"
                          :className (str "list-group-item"
                                          (when is-this-selected? " active"))
                          :onClick on-click}
                     (get followers idx))))))

(defn select-followers-list [followers-and-selection owner]
  (reify
    om/IRender
    (render [_]
            (dom/div
             nil
             (apply dom/div #js {:className "list-group"}
                    (let [followers (:followers followers-and-selection)]
                      (map
                       #(om/build follower-item
                                  followers-and-selection
                                  {:opts {:idx %}})
                       (range (count followers)))))
             (om/build selection-form (:selection followers-and-selection))))))

(defn select-followers [followers-and-selection owner {:keys [on-cancel on-go]}]
  (reify
    om/IRender
    (render [_]
            (dom/div
             nil
             (om/build statistics (:followers followers-and-selection))
             (om/build select-followers-list followers-and-selection)
             (dom/button #js{:className "btn btn-primary", :onClick on-go} "Go")
             (dom/button #js{:className "btn btn-danger" :onClick on-cancel} "Cancel")))))

(defn application
  "The main application component"
  [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
                (println "application - Will Mount")
                (read-user-id
                 #(om/transact! data :user (fn [user] (assoc user :user-id %)))))
    om/IInitState
    (init-state [_]
                {:view :accounts-form})
    om/IRenderState
    (render-state [_ state]
            (let [handle-get-followers (fn [accounts]
                                         (om/set-state! owner :view :loading-followers)
                                         (data/load-followers
                                          (fn [followers]
                                            (println "Received followers: " (count followers))
                                            (om/update! data [:followers-and-selection :followers] (vec followers))
                                            (om/set-state! owner :view :select-followers))
                                          (fn [error]
                                            (report-error! error)
                                            (om/set-state! owner :view :accounts-form))))]
              (dom/div
               #js {:className "container"}
               (condp = (:view state)
                 :accounts-form (om/build accounts-form (:accounts data) {:opts {:on-get-followers handle-get-followers}})
                 :loading-followers (om/build loading-followers nil)
                 :select-followers (om/build select-followers (:followers-and-selection data)
                                             {:opts {:on-cancel (fn [e]
                                                                  (println "Cancel in select-followers view")
                                                                  (.preventDefault e)
                                                                  (om/set-state! owner :view :accounts-form))
                                                     :on-go (fn [e]
                                                              (println "Go")
                                                              (.preventDefault e)
                                                              (create-comments))}})))))))

  (om/root
   application
   data/app-state
   {:target (single-node (css/sel "#app"))})
