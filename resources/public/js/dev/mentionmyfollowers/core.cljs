(ns mentionmyfollowers.core
  (:use [domina :only [single-node]])
  (:require[om.core :as om :include-macros true]
           [om.dom :as dom :include-macros true]
           [domina.css :as css]))

(enable-console-print!)

(println "Mention My Followers Chrome Extenssion")

(defonce app-state (atom {:user {:user-id nil}
                          :accounts-form {}}))

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
  [data owner]
  (reify
    om/IRender
    (render [_]
            (dom/form
             nil
             (dom/div
              #js {:className "form-group"}
              (dom/label
               #js {:htmlFor "accounts-input"}
               "Accounts:")
              (dom/textarea
               #js {:id "accounts-input"
                    :value (:accounts data)
                    :onChange (fn [e] (om/transact! data #(assoc % :accounts (.. e -target -value))))}))
             (dom/button
              #js {:className "btn btn-primary"
                   :onClick (fn [e]
                              (.preventDefault e)
                              (println "Get followers button clicked"))}
              "Get Followers")))))

(defn application [data owner]
  (reify
    om/IWillMount
    (will-mount [_]
                (println "application - Will Mount")
                (read-user-id
                 #(om/transact! data :user (fn [user] (assoc user :user-id %)))))
    om/IDidMount
    (did-mount [_] (println "application - Did Mount"))
    om/IRender
    (render [_]
            (println "application - render")
            (om/build accounts-form (:accounts-form data)))))

(om/root
 application
 app-state
 {:target (single-node (css/sel "#app"))})
