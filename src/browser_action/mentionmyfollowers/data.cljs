(ns mentionmyfollowers.data)

(defonce app-state (atom {:user {:user-id nil}
                          :accounts []
                          :followers-and-selection {:followers []
                                                    :selection {:from nil :to nil}}}))

(def selected-followers []
  (let [followers (get-in @app-state [:followers-and-selection :followers])
        from (get-in @app-state [:followers-and-selection :selection :from])
        to (get-in @app-state [:followers-and-selection :followers :to])]
    (if from
      (let [to' (if (nil? to) (count followers) (+ to 1))
            cnt (- to from)]
        (->>
         followers
         (drop from)
         (take cnt)))
      [])))


