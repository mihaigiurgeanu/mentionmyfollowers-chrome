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

  :cljsbuild {:builds [{:id "browseraction_dev"
                        :source-paths ["src/browser_action"]
                        :compiler {:output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/main_dev"
                                   :source-map "resources/public/js/main.js.map"
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       {:id "browseraction_prod"
                        :source-paths ["src/browser_action"]
                        :compiler {:output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/main_prod"
                                   :source-map "resources/public/js/main.js.map"
                                   :optiomiztions :advanced}}
                       {:id "content_dev"
                        :source-paths ["src/content"]
                        :compiler {:output-to "resources/public/js/commenting.js"
                                   :output-dir "resources/public/js/commenting_dev"
                                   :source-map "resources/public/js/commenting.js.map"
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       {:id "content_prod"
                        :source-paths ["src/content"]
                        :compiler {:output-to "resources/public/js/commenting.js"
                                   :output-dir "resources/public/js/commenting_prod"
                                   :source-map "resources/public/js/commenting.js.map"
                                   :optiomiztions :advanced}}]})

