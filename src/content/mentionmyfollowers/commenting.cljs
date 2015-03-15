(ns mentionmyfollowers.commenting
  (:use [domina :only [nodes single-node]])
  (:require [domina.css :as css]
            [clojure.string :as string]))

(enable-console-print!)
(println "Commenting script inserted in Instagram page")

(defn comment-forms []
  (nodes (css/sel "form.timelineCommentForm")))

(defn comment-input [form]
  (single-node (css/sel form "input.timelineCommentTextField")))

(defn mention [followers]
  (string/join " " (map #(str "@" %) followers)))

(defn make-comment!
  [form template followers]
  (let [input (comment-input form)]
    (set! (.-value input) (str template " " (mention followers))))
  (.submit form))

(.. js/chrome -runtime -onMessage
    (addListener
     (fn [request sender send-response]
       (println "Comments request" (.stringify js/JSON request))
       (println "Got followers" (string/join " " (js->clj (.-followers request))))
       (println "Got templates" (string/join "\n" (js->clj (.-templates request))))
       (let [send-comment (fn next-comment [forms templates followers]
                            (if (not-empty followers)
                              (do
                                (make-comment! (first forms) (first templates) (first followers))
                                (.setTimeout js/window (fn [] (next-comment (rest forms) (rest templates) (rest followers))) 600))
                              (send-response #js {:message "Done"})))]
         (let [forms (cycle (comment-forms))
               templates (cycle (.-templates request))
               followers (partition-all 5 (.-followers request))]
           (send-comment forms templates followers))))))

#_(let [inputs (map comment-input (comment-forms))]
    (doall (map #(set! (.-value %) "Example comment") inputs)))

