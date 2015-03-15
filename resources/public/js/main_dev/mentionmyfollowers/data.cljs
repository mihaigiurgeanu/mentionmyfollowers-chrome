(ns mentionmyfollowers.data
  (:require [ajax.core :refer [GET POST]]))

(defonce app-state (atom {:user {:user-id nil}
                          :accounts []
                          :followers-and-selection {:followers []
                                                    :selection {:from nil :to nil}}}))

(def api-get-followers "http://dragon-alien.codio.io:3000/api/followers")
(def api-get-templates "http://dragon-alien.codio.io:3000/templates.edn")


(defn selected-followers []
  (let [current-state @app-state
        followers (get-in current-state [:followers-and-selection :followers])
        from (get-in current-state [:followers-and-selection :selection :from])
        to (get-in current-state [:followers-and-selection :selection :to])]
    (if from
      (let [to' (if (nil? to) (count followers) (+ to 1))
            cnt (- to' from)]
        (println "Count of selected followers" cnt from to' to)
        (->>
         followers
         (drop from)
         (take cnt)))
      [])))

(defn load-followers
  "Load followers from the server passing the authenticated user-id
  and the user-names for which we want followers."
  [on-complete on-error]
  (let [curr-state @app-state
        user-id (get-in curr-state [:user :user-id])
        user-names (get-in curr-state [:accounts])]
    (POST api-get-followers {:params {:user-id user-id,
                                      :user-names user-names}
                             :format :edn
                             :response-format :edn
                             :handler on-complete
                             :error-handler on-error})))

(defn load-templates
  "Loads message templates from the server"
  [on-complete on-error]
  (GET api-get-templates {:response-format :edn
                          :handler on-complete
                          :error-handler on-error}))
