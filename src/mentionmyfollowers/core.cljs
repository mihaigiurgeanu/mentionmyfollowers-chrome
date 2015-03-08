(ns mentionmyfollowers.core
  (:use [domina :only [single-node]])
  (:require[om.core :as om :include-macros true]
           [om.dom :as dom :include-macros true]
           [domina.css :as css]))

(enable-console-print!)

(defonce app-state (atom {:user {:user-id nil}}))

(defn- read-user-id
  "Reads the Instagram user id from the cookie. It needs
  the user to be logged in into his/her Instagram account."
  [f]
  (let [query #js {:url "https://instagram.com/"
                   :name "ds_user_id"}]
    (.. js/chorme cookies
        (get query (fn [cookie]
                     (f (.-value cookie)))))))

(defn show-user-id [{:keys [user-id]} owner]
  (reify om/IRender
    (render
     [_]
     (dom/p
      nil
      (str "User-id is "(if user-id user-id "Not Available"))))))

(defn application [data owner]
  (reify om/IWillMount
    (will-mount
     [_]
     (read-user-id
      #(om/transact! data :user (fn [user] (assoc user :user-id %))))))
  (reify om/IRender
    (render
     [_]
     (om/build show-user-id (:user data)))))

(om/root
 application
 app-state
 {:target (single-node (css/sel "#app"))})
