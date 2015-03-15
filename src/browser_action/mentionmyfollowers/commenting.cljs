(ns mentionmyfollowers.commenting
  (:require [mentionmyfollowers.data :as data]))


(defmulti make-response #(let [t (.-type %)] (when t (keyword t))))
(defmethod make-response :followers [_] (data/selected-followers))
(defmethod make-response :temoplates [_] ["Comment 1" "Comment 2"])

(defn content-listener
  "A listener to communicate with the content page."
  [request sender send-response]
  (println "Received request from" (if (.-tab sender) (.. sender -tab -url) "extension" "of type" (.-type request)))
  (send-response (clj-js (make-response request))))

