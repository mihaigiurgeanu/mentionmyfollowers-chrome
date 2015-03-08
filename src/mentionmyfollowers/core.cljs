(ns mentionmyfollowers.core
    (:require[om.core :as om :include-macros true]
             [om.dom :as dom :include-macros true]
             [domina.css :as css]))

(enable-console-print!)

(.write js/document "<h1>Hello world</h1>")

(defonce app-state (atom {:user-id nil}))

(defn show-user-id [{:keys [user-id]} owner]
    (reify om/IRender
        (render [_]
                (dom/p 
                    nil
                    (str "User-id is "(if user-id user-id "Not Available"))))))

(om/root
    show-user-id
    app-state
    {:target (css/sel "#app")})
