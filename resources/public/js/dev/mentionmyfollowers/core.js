// Compiled by ClojureScript 0.0-2913 {}
goog.provide('mentionmyfollowers.core');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('om.dom');
goog.require('om.core');
goog.require('domina');
cljs.core.enable_console_print_BANG_.call(null);
document.write("<h1>Hello world</h1>");
if(typeof mentionmyfollowers.core.app_state !== 'undefined'){
} else {
mentionmyfollowers.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null));
}
mentionmyfollowers.core.show_user_id = (function show_user_id(p__13979,owner){
var map__13984 = p__13979;
var map__13984__$1 = ((cljs.core.seq_QMARK_.call(null,map__13984))?cljs.core.apply.call(null,cljs.core.hash_map,map__13984):map__13984);
var user_id = cljs.core.get.call(null,map__13984__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t13985 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t13985 = (function (user_id,map__13984,owner,p__13979,show_user_id,meta13986){
this.user_id = user_id;
this.map__13984 = map__13984;
this.owner = owner;
this.p__13979 = p__13979;
this.show_user_id = show_user_id;
this.meta13986 = meta13986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t13985.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t13985.prototype.om$core$IRender$render$arity$1 = ((function (map__13984,map__13984__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__13984,map__13984__$1,user_id))
;

mentionmyfollowers.core.t13985.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13984,map__13984__$1,user_id){
return (function (_13987){
var self__ = this;
var _13987__$1 = this;
return self__.meta13986;
});})(map__13984,map__13984__$1,user_id))
;

mentionmyfollowers.core.t13985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13984,map__13984__$1,user_id){
return (function (_13987,meta13986__$1){
var self__ = this;
var _13987__$1 = this;
return (new mentionmyfollowers.core.t13985(self__.user_id,self__.map__13984,self__.owner,self__.p__13979,self__.show_user_id,meta13986__$1));
});})(map__13984,map__13984__$1,user_id))
;

mentionmyfollowers.core.t13985.cljs$lang$type = true;

mentionmyfollowers.core.t13985.cljs$lang$ctorStr = "mentionmyfollowers.core/t13985";

mentionmyfollowers.core.t13985.cljs$lang$ctorPrWriter = ((function (map__13984,map__13984__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t13985");
});})(map__13984,map__13984__$1,user_id))
;

mentionmyfollowers.core.__GT_t13985 = ((function (map__13984,map__13984__$1,user_id){
return (function __GT_t13985(user_id__$1,map__13984__$2,owner__$1,p__13979__$1,show_user_id__$1,meta13986){
return (new mentionmyfollowers.core.t13985(user_id__$1,map__13984__$2,owner__$1,p__13979__$1,show_user_id__$1,meta13986));
});})(map__13984,map__13984__$1,user_id))
;

}

return (new mentionmyfollowers.core.t13985(user_id,map__13984__$1,owner,p__13979,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.show_user_id,mentionmyfollowers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
