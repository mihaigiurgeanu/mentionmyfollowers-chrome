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

(.. js/chrome -runtime (sendMessage #js {:type :followers}
                                    #(println "Content script - Got followers:" (string/join " " (js->clj %)))))

#_(let [inputs (map comment-input (comment-forms))]
    (doall (map #(set! (.-value %) "Example comment") inputs)))

