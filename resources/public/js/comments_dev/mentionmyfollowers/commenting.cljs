(ns mentionmyfollowers.commenting
  (:use [domina :only [nodes single-node]])
  (:require [domina.css :as css]))

(enable-console-print!)
(println "Commenting script inserted in Instagram page")

(defn comment-forms []
  (css/sel "form.timelineCommentForm"))

(defn comment-input [form]
  (single-node (css/sel form "input.timelineCommentTextField")))

