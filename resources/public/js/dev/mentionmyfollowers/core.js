// Compiled by ClojureScript 0.0-2913 {}
goog.provide('mentionmyfollowers.core');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('om.dom');
goog.require('om.core');
goog.require('domina');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Mention My Followers Chrome Extenssion");
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
cljs.core.println.call(null,"querying ds_user_id cookie");

return chrome.cookies.get(query,((function (query){
return (function (cookie){
cljs.core.println.call(null,"Got value for ds_user_id cookie",cookie.value);

return f.call(null,cookie.value);
});})(query))
);
});
mentionmyfollowers.core.show_user_id = (function show_user_id(p__80547,owner){
var map__80552 = p__80547;
var map__80552__$1 = ((cljs.core.seq_QMARK_.call(null,map__80552))?cljs.core.apply.call(null,cljs.core.hash_map,map__80552):map__80552);
var user_id = cljs.core.get.call(null,map__80552__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t80553 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t80553 = (function (user_id,map__80552,owner,p__80547,show_user_id,meta80554){
this.user_id = user_id;
this.map__80552 = map__80552;
this.owner = owner;
this.p__80547 = p__80547;
this.show_user_id = show_user_id;
this.meta80554 = meta80554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t80553.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t80553.prototype.om$core$IRender$render$arity$1 = ((function (map__80552,map__80552__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__80552,map__80552__$1,user_id))
;

mentionmyfollowers.core.t80553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__80552,map__80552__$1,user_id){
return (function (_80555){
var self__ = this;
var _80555__$1 = this;
return self__.meta80554;
});})(map__80552,map__80552__$1,user_id))
;

mentionmyfollowers.core.t80553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__80552,map__80552__$1,user_id){
return (function (_80555,meta80554__$1){
var self__ = this;
var _80555__$1 = this;
return (new mentionmyfollowers.core.t80553(self__.user_id,self__.map__80552,self__.owner,self__.p__80547,self__.show_user_id,meta80554__$1));
});})(map__80552,map__80552__$1,user_id))
;

mentionmyfollowers.core.t80553.cljs$lang$type = true;

mentionmyfollowers.core.t80553.cljs$lang$ctorStr = "mentionmyfollowers.core/t80553";

mentionmyfollowers.core.t80553.cljs$lang$ctorPrWriter = ((function (map__80552,map__80552__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t80553");
});})(map__80552,map__80552__$1,user_id))
;

mentionmyfollowers.core.__GT_t80553 = ((function (map__80552,map__80552__$1,user_id){
return (function __GT_t80553(user_id__$1,map__80552__$2,owner__$1,p__80547__$1,show_user_id__$1,meta80554){
return (new mentionmyfollowers.core.t80553(user_id__$1,map__80552__$2,owner__$1,p__80547__$1,show_user_id__$1,meta80554));
});})(map__80552,map__80552__$1,user_id))
;

}

return (new mentionmyfollowers.core.t80553(user_id,map__80552__$1,owner,p__80547,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.application = (function application(data,owner){
if(typeof mentionmyfollowers.core.t80560 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t80560 = (function (owner,data,application,meta80561){
this.owner = owner;
this.data = data;
this.application = application;
this.meta80561 = meta80561;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t80560.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t80560.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - render");

return om.core.build.call(null,mentionmyfollowers.core.show_user_id,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(self__.data));
});

mentionmyfollowers.core.t80560.prototype.om$core$IDidMount$ = true;

mentionmyfollowers.core.t80560.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"application - Did Mount");
});

mentionmyfollowers.core.t80560.prototype.om$core$IWillMount$ = true;

mentionmyfollowers.core.t80560.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - Will Mount");

return mentionmyfollowers.core.read_user_id.call(null,((function (___$1){
return (function (p1__80556_SHARP_){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),((function (___$1){
return (function (user){
return cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"user-id","user-id",-206822291),p1__80556_SHARP_);
});})(___$1))
);
});})(___$1))
);
});

mentionmyfollowers.core.t80560.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80562){
var self__ = this;
var _80562__$1 = this;
return self__.meta80561;
});

mentionmyfollowers.core.t80560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80562,meta80561__$1){
var self__ = this;
var _80562__$1 = this;
return (new mentionmyfollowers.core.t80560(self__.owner,self__.data,self__.application,meta80561__$1));
});

mentionmyfollowers.core.t80560.cljs$lang$type = true;

mentionmyfollowers.core.t80560.cljs$lang$ctorStr = "mentionmyfollowers.core/t80560";

mentionmyfollowers.core.t80560.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t80560");
});

mentionmyfollowers.core.__GT_t80560 = (function __GT_t80560(owner__$1,data__$1,application__$1,meta80561){
return (new mentionmyfollowers.core.t80560(owner__$1,data__$1,application__$1,meta80561));
});

}

return (new mentionmyfollowers.core.t80560(owner,data,application,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.application,mentionmyfollowers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
