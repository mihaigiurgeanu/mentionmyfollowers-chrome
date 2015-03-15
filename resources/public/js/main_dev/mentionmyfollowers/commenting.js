// Compiled by ClojureScript 0.0-2913 {}
goog.provide('mentionmyfollowers.commenting');
goog.require('cljs.core');
goog.require('mentionmyfollowers.data');
mentionmyfollowers.commenting.make_response = (function (){var method_table__4878__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4879__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4880__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4881__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4882__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"mentionmyfollowers.commenting","make-response"),((function (method_table__4878__auto__,prefer_table__4879__auto__,method_cache__4880__auto__,cached_hierarchy__4881__auto__,hierarchy__4882__auto__){
return (function (p1__42628_SHARP_){
var t = p1__42628_SHARP_.type;
if(cljs.core.truth_(t)){
return cljs.core.keyword.call(null,t);
} else {
return null;
}
});})(method_table__4878__auto__,prefer_table__4879__auto__,method_cache__4880__auto__,cached_hierarchy__4881__auto__,hierarchy__4882__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4882__auto__,method_table__4878__auto__,prefer_table__4879__auto__,method_cache__4880__auto__,cached_hierarchy__4881__auto__));
})();
cljs.core._add_method.call(null,mentionmyfollowers.commenting.make_response,new cljs.core.Keyword(null,"followers","followers",1992141885),(function (_){
return mentionmyfollowers.data.selected_followers.call(null);
}));
cljs.core._add_method.call(null,mentionmyfollowers.commenting.make_response,new cljs.core.Keyword(null,"temoplates","temoplates",2047628314),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Comment 1","Comment 2"], null);
}));
/**
* A listener to communicate with the content page.
*/
mentionmyfollowers.commenting.content_listener = (function content_listener(request,sender,send_response){
cljs.core.println.call(null,"Received request from",(cljs.core.truth_(sender.tab)?sender.tab.url:"extension"));

return send_response.call(null,mentionmyfollowers.commenting.clj_js.call(null,mentionmyfollowers.commenting.make_response.call(null,request)));
});
