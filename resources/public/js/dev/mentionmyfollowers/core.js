// Compiled by ClojureScript 0.0-2913 {}
goog.provide('mentionmyfollowers.core');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
document.write("<h1>Hello world</h1>");
if(typeof mentionmyfollowers.core.app_state !== 'undefined'){
} else {
mentionmyfollowers.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null));
}
mentionmyfollowers.core.show_user_id = (function show_user_id(p__6599,owner){
var map__6604 = p__6599;
var map__6604__$1 = ((cljs.core.seq_QMARK_.call(null,map__6604))?cljs.core.apply.call(null,cljs.core.hash_map,map__6604):map__6604);
var user_id = cljs.core.get.call(null,map__6604__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t6605 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t6605 = (function (user_id,map__6604,owner,p__6599,show_user_id,meta6606){
this.user_id = user_id;
this.map__6604 = map__6604;
this.owner = owner;
this.p__6599 = p__6599;
this.show_user_id = show_user_id;
this.meta6606 = meta6606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t6605.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t6605.prototype.om$core$IRender$render$arity$1 = ((function (map__6604,map__6604__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__6604,map__6604__$1,user_id))
;

mentionmyfollowers.core.t6605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__6604,map__6604__$1,user_id){
return (function (_6607){
var self__ = this;
var _6607__$1 = this;
return self__.meta6606;
});})(map__6604,map__6604__$1,user_id))
;

mentionmyfollowers.core.t6605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__6604,map__6604__$1,user_id){
return (function (_6607,meta6606__$1){
var self__ = this;
var _6607__$1 = this;
return (new mentionmyfollowers.core.t6605(self__.user_id,self__.map__6604,self__.owner,self__.p__6599,self__.show_user_id,meta6606__$1));
});})(map__6604,map__6604__$1,user_id))
;

mentionmyfollowers.core.t6605.cljs$lang$type = true;

mentionmyfollowers.core.t6605.cljs$lang$ctorStr = "mentionmyfollowers.core/t6605";

mentionmyfollowers.core.t6605.cljs$lang$ctorPrWriter = ((function (map__6604,map__6604__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t6605");
});})(map__6604,map__6604__$1,user_id))
;

mentionmyfollowers.core.__GT_t6605 = ((function (map__6604,map__6604__$1,user_id){
return (function __GT_t6605(user_id__$1,map__6604__$2,owner__$1,p__6599__$1,show_user_id__$1,meta6606){
return (new mentionmyfollowers.core.t6605(user_id__$1,map__6604__$2,owner__$1,p__6599__$1,show_user_id__$1,meta6606));
});})(map__6604,map__6604__$1,user_id))
;

}

return (new mentionmyfollowers.core.t6605(user_id,map__6604__$1,owner,p__6599,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.show_user_id,mentionmyfollowers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.css.sel.call(null,"#app")], null));
