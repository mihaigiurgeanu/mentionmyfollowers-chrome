// Compiled by ClojureScript 0.0-2913 {}
goog.provide('mentionmyfollowers.commenting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.css');
goog.require('domina');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Commenting script inserted in Instagram page");
mentionmyfollowers.commenting.comment_forms = (function comment_forms(){
return domina.nodes.call(null,domina.css.sel.call(null,"form.timelineCommentForm"));
});
mentionmyfollowers.commenting.comment_input = (function comment_input(form){
return domina.single_node.call(null,domina.css.sel.call(null,form,"input.timelineCommentTextField"));
});
chrome.runtime.sendMessage({"type": new cljs.core.Keyword(null,"followers","followers",1992141885)},(function (p1__69143_SHARP_){
return cljs.core.println.call(null,"Content script - Got followers:",clojure.string.join.call(null," ",cljs.core.js__GT_clj.call(null,p1__69143_SHARP_)));
}));
