// Compiled by ClojureScript 0.0-2913 {}
goog.provide('mentionmyfollowers.core');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('om.dom');
goog.require('om.core');
goog.require('domina');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof mentionmyfollowers.core.app_state !== 'undefined'){
} else {
mentionmyfollowers.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null)], null));
}
/**
* Reads the Instagram user id from the cookie. It needs
* the user to be logged in into his/her Instagram account.
*/
mentionmyfollowers.core.read_user_id = (function read_user_id(f){
var query = {"name": "ds_user_id", "url": "https://instagram.com/"};
return chorme.cookies().get(query,((function (query){
return (function (cookie){
return f.call(null,cookie.value);
});})(query))
);
});
mentionmyfollowers.core.application = (function application(data,owner){
if(typeof mentionmyfollowers.core.t14014 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t14014 = (function (owner,data,application,meta14015){
this.owner = owner;
this.data = data;
this.application = application;
this.meta14015 = meta14015;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t14014.prototype.om$core$IWillMount$ = true;

mentionmyfollowers.core.t14014.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return mentionmyfollowers.core.read_user_id.call(null,((function (___$1){
return (function (p1__14010_SHARP_){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),p1__14010_SHARP_], null));
});})(___$1))
);
});

mentionmyfollowers.core.t14014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14016){
var self__ = this;
var _14016__$1 = this;
return self__.meta14015;
});

mentionmyfollowers.core.t14014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14016,meta14015__$1){
var self__ = this;
var _14016__$1 = this;
return (new mentionmyfollowers.core.t14014(self__.owner,self__.data,self__.application,meta14015__$1));
});

mentionmyfollowers.core.t14014.cljs$lang$type = true;

mentionmyfollowers.core.t14014.cljs$lang$ctorStr = "mentionmyfollowers.core/t14014";

mentionmyfollowers.core.t14014.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t14014");
});

mentionmyfollowers.core.__GT_t14014 = (function __GT_t14014(owner__$1,data__$1,application__$1,meta14015){
return (new mentionmyfollowers.core.t14014(owner__$1,data__$1,application__$1,meta14015));
});

}

return (new mentionmyfollowers.core.t14014(owner,data,application,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.show_user_id = (function show_user_id(p__14017,owner){
var map__14022 = p__14017;
var map__14022__$1 = ((cljs.core.seq_QMARK_.call(null,map__14022))?cljs.core.apply.call(null,cljs.core.hash_map,map__14022):map__14022);
var user_id = cljs.core.get.call(null,map__14022__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t14023 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t14023 = (function (user_id,map__14022,owner,p__14017,show_user_id,meta14024){
this.user_id = user_id;
this.map__14022 = map__14022;
this.owner = owner;
this.p__14017 = p__14017;
this.show_user_id = show_user_id;
this.meta14024 = meta14024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t14023.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t14023.prototype.om$core$IRender$render$arity$1 = ((function (map__14022,map__14022__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__14022,map__14022__$1,user_id))
;

mentionmyfollowers.core.t14023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14022,map__14022__$1,user_id){
return (function (_14025){
var self__ = this;
var _14025__$1 = this;
return self__.meta14024;
});})(map__14022,map__14022__$1,user_id))
;

mentionmyfollowers.core.t14023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14022,map__14022__$1,user_id){
return (function (_14025,meta14024__$1){
var self__ = this;
var _14025__$1 = this;
return (new mentionmyfollowers.core.t14023(self__.user_id,self__.map__14022,self__.owner,self__.p__14017,self__.show_user_id,meta14024__$1));
});})(map__14022,map__14022__$1,user_id))
;

mentionmyfollowers.core.t14023.cljs$lang$type = true;

mentionmyfollowers.core.t14023.cljs$lang$ctorStr = "mentionmyfollowers.core/t14023";

mentionmyfollowers.core.t14023.cljs$lang$ctorPrWriter = ((function (map__14022,map__14022__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t14023");
});})(map__14022,map__14022__$1,user_id))
;

mentionmyfollowers.core.__GT_t14023 = ((function (map__14022,map__14022__$1,user_id){
return (function __GT_t14023(user_id__$1,map__14022__$2,owner__$1,p__14017__$1,show_user_id__$1,meta14024){
return (new mentionmyfollowers.core.t14023(user_id__$1,map__14022__$2,owner__$1,p__14017__$1,show_user_id__$1,meta14024));
});})(map__14022,map__14022__$1,user_id))
;

}

return (new mentionmyfollowers.core.t14023(user_id,map__14022__$1,owner,p__14017,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.show_user_id,mentionmyfollowers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
