// Compiled by ClojureScript 0.0-2913 {}
goog.provide('mentionmyfollowers.core');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('domina');
goog.require('om.core');
goog.require('clojure.string');
mentionmyfollowers.core.api_get_followers = "http://dragon-alien.codio.io:3000/api/followers";
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Mention My Followers Chrome Extenssion");
if(typeof mentionmyfollowers.core.app_state !== 'undefined'){
} else {
mentionmyfollowers.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null),new cljs.core.Keyword(null,"accounts","accounts",-935308676),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"followers","followers",1992141885),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null)], null)], null));
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
mentionmyfollowers.core.show_user_id = (function show_user_id(p__258357,owner){
var map__258362 = p__258357;
var map__258362__$1 = ((cljs.core.seq_QMARK_.call(null,map__258362))?cljs.core.apply.call(null,cljs.core.hash_map,map__258362):map__258362);
var user_id = cljs.core.get.call(null,map__258362__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t258363 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t258363 = (function (user_id,map__258362,owner,p__258357,show_user_id,meta258364){
this.user_id = user_id;
this.map__258362 = map__258362;
this.owner = owner;
this.p__258357 = p__258357;
this.show_user_id = show_user_id;
this.meta258364 = meta258364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t258363.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t258363.prototype.om$core$IRender$render$arity$1 = ((function (map__258362,map__258362__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__258362,map__258362__$1,user_id))
;

mentionmyfollowers.core.t258363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__258362,map__258362__$1,user_id){
return (function (_258365){
var self__ = this;
var _258365__$1 = this;
return self__.meta258364;
});})(map__258362,map__258362__$1,user_id))
;

mentionmyfollowers.core.t258363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__258362,map__258362__$1,user_id){
return (function (_258365,meta258364__$1){
var self__ = this;
var _258365__$1 = this;
return (new mentionmyfollowers.core.t258363(self__.user_id,self__.map__258362,self__.owner,self__.p__258357,self__.show_user_id,meta258364__$1));
});})(map__258362,map__258362__$1,user_id))
;

mentionmyfollowers.core.t258363.cljs$lang$type = true;

mentionmyfollowers.core.t258363.cljs$lang$ctorStr = "mentionmyfollowers.core/t258363";

mentionmyfollowers.core.t258363.cljs$lang$ctorPrWriter = ((function (map__258362,map__258362__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t258363");
});})(map__258362,map__258362__$1,user_id))
;

mentionmyfollowers.core.__GT_t258363 = ((function (map__258362,map__258362__$1,user_id){
return (function __GT_t258363(user_id__$1,map__258362__$2,owner__$1,p__258357__$1,show_user_id__$1,meta258364){
return (new mentionmyfollowers.core.t258363(user_id__$1,map__258362__$2,owner__$1,p__258357__$1,show_user_id__$1,meta258364));
});})(map__258362,map__258362__$1,user_id))
;

}

return (new mentionmyfollowers.core.t258363(user_id,map__258362__$1,owner,p__258357,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* A form to enter the accounts whose followers you want to mention
*/
mentionmyfollowers.core.accounts_form = (function accounts_form(accounts,owner,p__258366){
var map__258373 = p__258366;
var map__258373__$1 = ((cljs.core.seq_QMARK_.call(null,map__258373))?cljs.core.apply.call(null,cljs.core.hash_map,map__258373):map__258373);
var on_get_followers = cljs.core.get.call(null,map__258373__$1,new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518));
if(typeof mentionmyfollowers.core.t258374 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t258374 = (function (on_get_followers,map__258373,p__258366,owner,accounts,accounts_form,meta258375){
this.on_get_followers = on_get_followers;
this.map__258373 = map__258373;
this.p__258366 = p__258366;
this.owner = owner;
this.accounts = accounts;
this.accounts_form = accounts_form;
this.meta258375 = meta258375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t258374.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t258374.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__258373,map__258373__$1,on_get_followers){
return (function (_,p__258377){
var self__ = this;
var map__258378 = p__258377;
var map__258378__$1 = ((cljs.core.seq_QMARK_.call(null,map__258378))?cljs.core.apply.call(null,cljs.core.hash_map,map__258378):map__258378);
var text = cljs.core.get.call(null,map__258378__$1,new cljs.core.Keyword(null,"accounts","accounts",-935308676));
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "accounts-input"},"Accounts:"),om.dom.textarea.call(null,{"onChange": ((function (___$1,map__258378,map__258378__$1,text,map__258373,map__258373__$1,on_get_followers){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"accounts","accounts",-935308676),e.target.value);
});})(___$1,map__258378,map__258378__$1,text,map__258373,map__258373__$1,on_get_followers))
, "value": text, "rows": "3", "className": "form-control", "id": "accounts-input"})),React.DOM.button({"onClick": ((function (___$1,map__258378,map__258378__$1,text,map__258373,map__258373__$1,on_get_followers){
return (function (e){
e.preventDefault();

cljs.core.println.call(null,"Get followers button clicked");

var new_accounts = clojure.string.split.call(null,text,/ /);
om.core.update_BANG_.call(null,self__.accounts,new_accounts);

return self__.on_get_followers.call(null,new_accounts);
});})(___$1,map__258378,map__258378__$1,text,map__258373,map__258373__$1,on_get_followers))
, "className": "btn btn-primary"},"Get Followers"));
});})(map__258373,map__258373__$1,on_get_followers))
;

mentionmyfollowers.core.t258374.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t258374.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__258373,map__258373__$1,on_get_followers){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),clojure.string.join.call(null," ",self__.accounts)], null);
});})(map__258373,map__258373__$1,on_get_followers))
;

mentionmyfollowers.core.t258374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__258373,map__258373__$1,on_get_followers){
return (function (_258376){
var self__ = this;
var _258376__$1 = this;
return self__.meta258375;
});})(map__258373,map__258373__$1,on_get_followers))
;

mentionmyfollowers.core.t258374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__258373,map__258373__$1,on_get_followers){
return (function (_258376,meta258375__$1){
var self__ = this;
var _258376__$1 = this;
return (new mentionmyfollowers.core.t258374(self__.on_get_followers,self__.map__258373,self__.p__258366,self__.owner,self__.accounts,self__.accounts_form,meta258375__$1));
});})(map__258373,map__258373__$1,on_get_followers))
;

mentionmyfollowers.core.t258374.cljs$lang$type = true;

mentionmyfollowers.core.t258374.cljs$lang$ctorStr = "mentionmyfollowers.core/t258374";

mentionmyfollowers.core.t258374.cljs$lang$ctorPrWriter = ((function (map__258373,map__258373__$1,on_get_followers){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t258374");
});})(map__258373,map__258373__$1,on_get_followers))
;

mentionmyfollowers.core.__GT_t258374 = ((function (map__258373,map__258373__$1,on_get_followers){
return (function __GT_t258374(on_get_followers__$1,map__258373__$2,p__258366__$1,owner__$1,accounts__$1,accounts_form__$1,meta258375){
return (new mentionmyfollowers.core.t258374(on_get_followers__$1,map__258373__$2,p__258366__$1,owner__$1,accounts__$1,accounts_form__$1,meta258375));
});})(map__258373,map__258373__$1,on_get_followers))
;

}

return (new mentionmyfollowers.core.t258374(on_get_followers,map__258373__$1,p__258366,owner,accounts,accounts_form,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Reports an error of restful api call.
*/
mentionmyfollowers.core.report_error_BANG_ = (function report_error_BANG_(p__258379){
var map__258381 = p__258379;
var map__258381__$1 = ((cljs.core.seq_QMARK_.call(null,map__258381))?cljs.core.apply.call(null,cljs.core.hash_map,map__258381):map__258381);
var error = map__258381__$1;
var failure = cljs.core.get.call(null,map__258381__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
var status_text = cljs.core.get.call(null,map__258381__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var status = cljs.core.get.call(null,map__258381__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.println.call(null,error);
});
mentionmyfollowers.core.loading_followers = (function loading_followers(_,___$1){
if(typeof mentionmyfollowers.core.t258385 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t258385 = (function (_,loading_followers,meta258386){
this._ = _;
this.loading_followers = loading_followers;
this.meta258386 = meta258386;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t258385.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t258385.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return React.DOM.div({"className": "progress"},React.DOM.div({"aria-valuemax": "100", "aria-valuemin": "0", "aria-valuenow": "75", "role": "progressbar", "className": "progress-bar progress-bar-striped active"}));
});

mentionmyfollowers.core.t258385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_258387){
var self__ = this;
var _258387__$1 = this;
return self__.meta258386;
});

mentionmyfollowers.core.t258385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_258387,meta258386__$1){
var self__ = this;
var _258387__$1 = this;
return (new mentionmyfollowers.core.t258385(self__._,self__.loading_followers,meta258386__$1));
});

mentionmyfollowers.core.t258385.cljs$lang$type = true;

mentionmyfollowers.core.t258385.cljs$lang$ctorStr = "mentionmyfollowers.core/t258385";

mentionmyfollowers.core.t258385.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t258385");
});

mentionmyfollowers.core.__GT_t258385 = (function __GT_t258385(___$2,loading_followers__$1,meta258386){
return (new mentionmyfollowers.core.t258385(___$2,loading_followers__$1,meta258386));
});

}

return (new mentionmyfollowers.core.t258385(___$1,loading_followers,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.selection_form = (function selection_form(selection,owner){
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-from"},"From"),om.dom.input.call(null,{"onChange": (function (p1__258388_SHARP_){
return om.core.update_BANG_.call(null,selection,new cljs.core.Keyword(null,"from","from",1815293044),p1__258388_SHARP_.target.value);
}), "value": new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(selection), "id": "selection-from", "type": "text"})),React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-to"},"To"),om.dom.input.call(null,{"onChange": (function (p1__258389_SHARP_){
return om.core.update_BANG_.call(null,selection,new cljs.core.Keyword(null,"to","to",192099007),p1__258389_SHARP_.target.value);
}), "value": new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(selection), "id": "selection-to", "type": "text"})));
});
mentionmyfollowers.core.update_selection = (function update_selection(p__258390,idx){
var map__258392 = p__258390;
var map__258392__$1 = ((cljs.core.seq_QMARK_.call(null,map__258392))?cljs.core.apply.call(null,cljs.core.hash_map,map__258392):map__258392);
var selection = map__258392__$1;
var to = cljs.core.get.call(null,map__258392__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__258392__$1,new cljs.core.Keyword(null,"from","from",1815293044));
cljs.core.println.call(null,"Setting selection",idx,"->",from,to);

if(((from == null)) || ((idx <= from))){
return cljs.core.assoc.call(null,selection,new cljs.core.Keyword(null,"from","from",1815293044),idx);
} else {
return cljs.core.assoc.call(null,selection,new cljs.core.Keyword(null,"to","to",192099007),idx);

}
});
mentionmyfollowers.core.is_selected_QMARK_ = (function is_selected_QMARK_(i,p__258393){
var map__258395 = p__258393;
var map__258395__$1 = ((cljs.core.seq_QMARK_.call(null,map__258395))?cljs.core.apply.call(null,cljs.core.hash_map,map__258395):map__258395);
var to = cljs.core.get.call(null,map__258395__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__258395__$1,new cljs.core.Keyword(null,"from","from",1815293044));
if(cljs.core.not.call(null,(function (){var or__3981__auto__ = from;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return to;
}
})())){
return false;
} else {
if(cljs.core.truth_((function (){var and__3969__auto__ = from;
if(cljs.core.truth_(and__3969__auto__)){
return to;
} else {
return and__3969__auto__;
}
})())){
return ((i >= from)) && ((i <= to));
} else {
if(cljs.core.truth_(from)){
return (i >= from);
} else {
if(cljs.core.truth_(to)){
return (i <= to);
} else {
return null;
}
}
}
}
});
mentionmyfollowers.core.follower_item = (function follower_item(followers_and_selection,owner,p__258396){
var map__258401 = p__258396;
var map__258401__$1 = ((cljs.core.seq_QMARK_.call(null,map__258401))?cljs.core.apply.call(null,cljs.core.hash_map,map__258401):map__258401);
var idx = cljs.core.get.call(null,map__258401__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(typeof mentionmyfollowers.core.t258402 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t258402 = (function (idx,map__258401,p__258396,owner,followers_and_selection,follower_item,meta258403){
this.idx = idx;
this.map__258401 = map__258401;
this.p__258396 = p__258396;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.follower_item = follower_item;
this.meta258403 = meta258403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t258402.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t258402.prototype.om$core$IRender$render$arity$1 = ((function (map__258401,map__258401__$1,idx){
return (function (_){
var self__ = this;
var ___$1 = this;
var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var selection = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var is_this_selected_QMARK_ = mentionmyfollowers.core.is_selected_QMARK_.call(null,self__.idx,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection));
var on_click = ((function (followers,selection,is_this_selected_QMARK_,___$1,map__258401,map__258401__$1,idx){
return (function (e){
e.preventDefault();

return om.core.transact_BANG_.call(null,self__.followers_and_selection,new cljs.core.Keyword(null,"selection","selection",975998651),((function (followers,selection,is_this_selected_QMARK_,___$1,map__258401,map__258401__$1,idx){
return (function (s){
return mentionmyfollowers.core.update_selection.call(null,s,self__.idx);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__258401,map__258401__$1,idx))
);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__258401,map__258401__$1,idx))
;
return React.DOM.a({"onClick": on_click, "className": [cljs.core.str("list-group-item"),cljs.core.str((cljs.core.truth_(is_this_selected_QMARK_)?" active":null))].join(''), "href": "#"},cljs.core.get.call(null,followers,self__.idx));
});})(map__258401,map__258401__$1,idx))
;

mentionmyfollowers.core.t258402.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__258401,map__258401__$1,idx){
return (function (_258404){
var self__ = this;
var _258404__$1 = this;
return self__.meta258403;
});})(map__258401,map__258401__$1,idx))
;

mentionmyfollowers.core.t258402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__258401,map__258401__$1,idx){
return (function (_258404,meta258403__$1){
var self__ = this;
var _258404__$1 = this;
return (new mentionmyfollowers.core.t258402(self__.idx,self__.map__258401,self__.p__258396,self__.owner,self__.followers_and_selection,self__.follower_item,meta258403__$1));
});})(map__258401,map__258401__$1,idx))
;

mentionmyfollowers.core.t258402.cljs$lang$type = true;

mentionmyfollowers.core.t258402.cljs$lang$ctorStr = "mentionmyfollowers.core/t258402";

mentionmyfollowers.core.t258402.cljs$lang$ctorPrWriter = ((function (map__258401,map__258401__$1,idx){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t258402");
});})(map__258401,map__258401__$1,idx))
;

mentionmyfollowers.core.__GT_t258402 = ((function (map__258401,map__258401__$1,idx){
return (function __GT_t258402(idx__$1,map__258401__$2,p__258396__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta258403){
return (new mentionmyfollowers.core.t258402(idx__$1,map__258401__$2,p__258396__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta258403));
});})(map__258401,map__258401__$1,idx))
;

}

return (new mentionmyfollowers.core.t258402(idx,map__258401__$1,p__258396,owner,followers_and_selection,follower_item,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers_list = (function select_followers_list(followers_and_selection,owner){
if(typeof mentionmyfollowers.core.t258409 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t258409 = (function (owner,followers_and_selection,select_followers_list,meta258410){
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers_list = select_followers_list;
this.meta258410 = meta258410;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t258409.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t258409.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"className": "list-group"},(function (){var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
return cljs.core.map.call(null,((function (followers,___$1){
return (function (p1__258405_SHARP_){
return om.core.build.call(null,mentionmyfollowers.core.follower_item,self__.followers_and_selection,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),p1__258405_SHARP_], null)], null));
});})(followers,___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,followers)));
})()),om.core.build.call(null,mentionmyfollowers.core.selection_form,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection)));
});

mentionmyfollowers.core.t258409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_258411){
var self__ = this;
var _258411__$1 = this;
return self__.meta258410;
});

mentionmyfollowers.core.t258409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_258411,meta258410__$1){
var self__ = this;
var _258411__$1 = this;
return (new mentionmyfollowers.core.t258409(self__.owner,self__.followers_and_selection,self__.select_followers_list,meta258410__$1));
});

mentionmyfollowers.core.t258409.cljs$lang$type = true;

mentionmyfollowers.core.t258409.cljs$lang$ctorStr = "mentionmyfollowers.core/t258409";

mentionmyfollowers.core.t258409.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t258409");
});

mentionmyfollowers.core.__GT_t258409 = (function __GT_t258409(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta258410){
return (new mentionmyfollowers.core.t258409(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta258410));
});

}

return (new mentionmyfollowers.core.t258409(owner,followers_and_selection,select_followers_list,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers = (function select_followers(followers_and_selection,owner,p__258412){
var map__258417 = p__258412;
var map__258417__$1 = ((cljs.core.seq_QMARK_.call(null,map__258417))?cljs.core.apply.call(null,cljs.core.hash_map,map__258417):map__258417);
var on_cancel = cljs.core.get.call(null,map__258417__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
if(typeof mentionmyfollowers.core.t258418 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t258418 = (function (on_cancel,map__258417,p__258412,owner,followers_and_selection,select_followers,meta258419){
this.on_cancel = on_cancel;
this.map__258417 = map__258417;
this.p__258412 = p__258412;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers = select_followers;
this.meta258419 = meta258419;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t258418.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t258418.prototype.om$core$IRender$render$arity$1 = ((function (map__258417,map__258417__$1,on_cancel){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,mentionmyfollowers.core.select_followers_list,self__.followers_and_selection),React.DOM.button({"className": "btn btn-primary"},"Go"),React.DOM.button({"onClick": self__.on_cancel, "className": "btn btn-danger"},"Cancel"));
});})(map__258417,map__258417__$1,on_cancel))
;

mentionmyfollowers.core.t258418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__258417,map__258417__$1,on_cancel){
return (function (_258420){
var self__ = this;
var _258420__$1 = this;
return self__.meta258419;
});})(map__258417,map__258417__$1,on_cancel))
;

mentionmyfollowers.core.t258418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__258417,map__258417__$1,on_cancel){
return (function (_258420,meta258419__$1){
var self__ = this;
var _258420__$1 = this;
return (new mentionmyfollowers.core.t258418(self__.on_cancel,self__.map__258417,self__.p__258412,self__.owner,self__.followers_and_selection,self__.select_followers,meta258419__$1));
});})(map__258417,map__258417__$1,on_cancel))
;

mentionmyfollowers.core.t258418.cljs$lang$type = true;

mentionmyfollowers.core.t258418.cljs$lang$ctorStr = "mentionmyfollowers.core/t258418";

mentionmyfollowers.core.t258418.cljs$lang$ctorPrWriter = ((function (map__258417,map__258417__$1,on_cancel){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t258418");
});})(map__258417,map__258417__$1,on_cancel))
;

mentionmyfollowers.core.__GT_t258418 = ((function (map__258417,map__258417__$1,on_cancel){
return (function __GT_t258418(on_cancel__$1,map__258417__$2,p__258412__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta258419){
return (new mentionmyfollowers.core.t258418(on_cancel__$1,map__258417__$2,p__258412__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta258419));
});})(map__258417,map__258417__$1,on_cancel))
;

}

return (new mentionmyfollowers.core.t258418(on_cancel,map__258417__$1,p__258412,owner,followers_and_selection,select_followers,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* The main application component
*/
mentionmyfollowers.core.application = (function application(data,owner){
if(typeof mentionmyfollowers.core.t258428 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t258428 = (function (owner,data,application,meta258429){
this.owner = owner;
this.data = data;
this.application = application;
this.meta258429 = meta258429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t258428.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t258428.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var handle_get_followers = ((function (___$1){
return (function (accounts){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"loading-followers","loading-followers",1692268659));

return ajax.core.POST.call(null,mentionmyfollowers.core.api_get_followers,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"user-id","user-id",-206822291)], null)),new cljs.core.Keyword(null,"user-names","user-names",-1553852069),accounts], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"edn","edn",1317840885),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (___$1){
return (function (followers){
cljs.core.println.call(null,"Received followers",followers);

om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188),new cljs.core.Keyword(null,"followers","followers",1992141885)], null),cljs.core.vec.call(null,followers));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"select-followers","select-followers",-1421776266));
});})(___$1))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (___$1){
return (function (error){
mentionmyfollowers.core.report_error_BANG_.call(null,error);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534));
});})(___$1))
], null));
});})(___$1))
;
return React.DOM.div({"className": "container"},(function (){var pred__258431 = cljs.core._EQ_;
var expr__258432 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__258431.call(null,new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534),expr__258432))){
return om.core.build.call(null,mentionmyfollowers.core.accounts_form,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518),handle_get_followers], null)], null));
} else {
if(cljs.core.truth_(pred__258431.call(null,new cljs.core.Keyword(null,"loading-followers","loading-followers",1692268659),expr__258432))){
return om.core.build.call(null,mentionmyfollowers.core.loading_followers,null);
} else {
if(cljs.core.truth_(pred__258431.call(null,new cljs.core.Keyword(null,"select-followers","select-followers",-1421776266),expr__258432))){
return om.core.build.call(null,mentionmyfollowers.core.select_followers,new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (pred__258431,expr__258432,handle_get_followers,___$1){
return (function (e){
cljs.core.println.call(null,"Cancel in select-followers view");

e.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534));
});})(pred__258431,expr__258432,handle_get_followers,___$1))
], null)], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__258432)].join('')));
}
}
}
})());
});

mentionmyfollowers.core.t258428.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t258428.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534)], null);
});

mentionmyfollowers.core.t258428.prototype.om$core$IWillMount$ = true;

mentionmyfollowers.core.t258428.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - Will Mount");

return mentionmyfollowers.core.read_user_id.call(null,((function (___$1){
return (function (p1__258421_SHARP_){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),((function (___$1){
return (function (user){
return cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"user-id","user-id",-206822291),p1__258421_SHARP_);
});})(___$1))
);
});})(___$1))
);
});

mentionmyfollowers.core.t258428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_258430){
var self__ = this;
var _258430__$1 = this;
return self__.meta258429;
});

mentionmyfollowers.core.t258428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_258430,meta258429__$1){
var self__ = this;
var _258430__$1 = this;
return (new mentionmyfollowers.core.t258428(self__.owner,self__.data,self__.application,meta258429__$1));
});

mentionmyfollowers.core.t258428.cljs$lang$type = true;

mentionmyfollowers.core.t258428.cljs$lang$ctorStr = "mentionmyfollowers.core/t258428";

mentionmyfollowers.core.t258428.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t258428");
});

mentionmyfollowers.core.__GT_t258428 = (function __GT_t258428(owner__$1,data__$1,application__$1,meta258429){
return (new mentionmyfollowers.core.t258428(owner__$1,data__$1,application__$1,meta258429));
});

}

return (new mentionmyfollowers.core.t258428(owner,data,application,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.application,mentionmyfollowers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
