(defproject mentionmyfollowers "0.1.0-SNAPSHOT"
  :description "Mention My Followers Chrome extension"
  :url "http://http://dragon-alien.codio.io:3000/"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2913"]
                 [org.omcljs/om "0.8.8"]
                 [domina "1.0.3"]
                 [cljs-ajax "0.3.10"]]
  :plugins [[lein-cljsbuild "1.0.5"]]

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/dev"
                                   :source-map "resources/public/js/main.js.map"
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       {:id "prod"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/prod"
                                   :source-map "resources/public/js/main.js.map"
                                   :optiomiztions :advanced}}]})

