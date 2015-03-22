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
                        :notify-command ["cp" "target/main.js" "target/main.js.map" "resources/public/js"]
                        :compiler {:output-to "target/main.js"
                                   :output-dir "target/main_dev"
                                   :source-map "target/main.js.map"
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       {:id "browseraction_prod"
                        :notify-command ["cp" "target/main.js" "target/main.js.map" "resources/public/js"]
                        :source-paths ["src/browser_action"]
                        :compiler {:output-to "target/main.js"
                                   :output-dir "target/main_prod"
                                   :source-map "target/main.js.map"
                                   :optiomiztions :advanced}}
                       {:id "content_dev"
                        :notify-command ["cp" "target/commenting.js" "target/commenting.js.map" "resources/public/js"]
                        :source-paths ["src/content"]
                        :compiler {:output-to "target/commenting.js"
                                   :output-dir "target/commenting_dev"
                                   :source-map "target/commenting.js.map"
                                   :optimizations :whitespace
                                   :pretty-print true}}
                       {:id "content_prod"
                        :notify-command ["cp" "target/commenting.js" "target/commenting.js.map" "resources/public/js"]
                        :source-paths ["src/content"]
                        :compiler {:output-to "target/commenting.js"
                                   :output-dir "target/commenting_prod"
                                   :source-map "target/commenting.js.map"
                                   :optiomiztions :advanced}}]})

