// Compiled by ClojureScript 0.0-2913 {}
goog.provide('mentionmyfollowers.data');
goog.require('cljs.core');
goog.require('ajax.core');
if(typeof mentionmyfollowers.data.app_state !== 'undefined'){
} else {
mentionmyfollowers.data.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null),new cljs.core.Keyword(null,"accounts","accounts",-935308676),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"followers","followers",1992141885),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null)], null)], null));
}
mentionmyfollowers.data.api_get_followers = "http://dragon-alien.codio.io:3000/api/followers";
mentionmyfollowers.data.api_get_templates = "http://dragon-alien.codio.io:3000/templates.edn";
mentionmyfollowers.data.selected_followers = (function selected_followers(){
var current_state = cljs.core.deref.call(null,mentionmyfollowers.data.app_state);
var followers = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188),new cljs.core.Keyword(null,"followers","followers",1992141885)], null));
var from = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"from","from",1815293044)], null));
var to = cljs.core.get_in.call(null,current_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"to","to",192099007)], null));
if(cljs.core.truth_(from)){
var to_SINGLEQUOTE_ = (((to == null))?cljs.core.count.call(null,followers):(to + (1)));
var cnt = (to_SINGLEQUOTE_ - from);
cljs.core.println.call(null,"Count of selected followers",cnt,from,to_SINGLEQUOTE_,to);

return cljs.core.take.call(null,cnt,cljs.core.drop.call(null,from,followers));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
* Load followers from the server passing the authenticated user-id
* and the user-names for which we want followers.
*/
mentionmyfollowers.data.load_followers = (function load_followers(on_complete,on_error){
var curr_state = cljs.core.deref.call(null,mentionmyfollowers.data.app_state);
var user_id = cljs.core.get_in.call(null,curr_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"user-id","user-id",-206822291)], null));
var user_names = cljs.core.get_in.call(null,curr_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"accounts","accounts",-935308676)], null));
return ajax.core.POST.call(null,mentionmyfollowers.data.api_get_followers,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"user-names","user-names",-1553852069),user_names], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"handler","handler",-195596612),on_complete,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),on_error], null));
});
/**
* Loads message templates from the server
*/
mentionmyfollowers.data.load_templates = (function load_templates(on_complete,on_error){
return ajax.core.GET.call(null,mentionmyfollowers.data.api_get_templates,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"handler","handler",-195596612),on_complete,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),on_error], null));
});
