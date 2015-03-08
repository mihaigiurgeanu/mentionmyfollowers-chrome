(defproject mentionmyfollowers "0.1.0-SNAPSHOT"
  :description "Mention My Followers Chrome extension"
  :url "http://http://dragon-alien.codio.io:3000/"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2913"]]
  :plugins [[lein-cljsbuild "1.0.5"]]
  
  :cljsbuild {:builds [{:source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/core.js"}}]})

