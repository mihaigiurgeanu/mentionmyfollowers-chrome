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
mentionmyfollowers.core.show_user_id = (function show_user_id(p__266193,owner){
var map__266198 = p__266193;
var map__266198__$1 = ((cljs.core.seq_QMARK_.call(null,map__266198))?cljs.core.apply.call(null,cljs.core.hash_map,map__266198):map__266198);
var user_id = cljs.core.get.call(null,map__266198__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t266199 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t266199 = (function (user_id,map__266198,owner,p__266193,show_user_id,meta266200){
this.user_id = user_id;
this.map__266198 = map__266198;
this.owner = owner;
this.p__266193 = p__266193;
this.show_user_id = show_user_id;
this.meta266200 = meta266200;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t266199.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t266199.prototype.om$core$IRender$render$arity$1 = ((function (map__266198,map__266198__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__266198,map__266198__$1,user_id))
;

mentionmyfollowers.core.t266199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__266198,map__266198__$1,user_id){
return (function (_266201){
var self__ = this;
var _266201__$1 = this;
return self__.meta266200;
});})(map__266198,map__266198__$1,user_id))
;

mentionmyfollowers.core.t266199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__266198,map__266198__$1,user_id){
return (function (_266201,meta266200__$1){
var self__ = this;
var _266201__$1 = this;
return (new mentionmyfollowers.core.t266199(self__.user_id,self__.map__266198,self__.owner,self__.p__266193,self__.show_user_id,meta266200__$1));
});})(map__266198,map__266198__$1,user_id))
;

mentionmyfollowers.core.t266199.cljs$lang$type = true;

mentionmyfollowers.core.t266199.cljs$lang$ctorStr = "mentionmyfollowers.core/t266199";

mentionmyfollowers.core.t266199.cljs$lang$ctorPrWriter = ((function (map__266198,map__266198__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t266199");
});})(map__266198,map__266198__$1,user_id))
;

mentionmyfollowers.core.__GT_t266199 = ((function (map__266198,map__266198__$1,user_id){
return (function __GT_t266199(user_id__$1,map__266198__$2,owner__$1,p__266193__$1,show_user_id__$1,meta266200){
return (new mentionmyfollowers.core.t266199(user_id__$1,map__266198__$2,owner__$1,p__266193__$1,show_user_id__$1,meta266200));
});})(map__266198,map__266198__$1,user_id))
;

}

return (new mentionmyfollowers.core.t266199(user_id,map__266198__$1,owner,p__266193,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* A form to enter the accounts whose followers you want to mention
*/
mentionmyfollowers.core.accounts_form = (function accounts_form(accounts,owner,p__266202){
var map__266209 = p__266202;
var map__266209__$1 = ((cljs.core.seq_QMARK_.call(null,map__266209))?cljs.core.apply.call(null,cljs.core.hash_map,map__266209):map__266209);
var on_get_followers = cljs.core.get.call(null,map__266209__$1,new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518));
if(typeof mentionmyfollowers.core.t266210 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t266210 = (function (on_get_followers,map__266209,p__266202,owner,accounts,accounts_form,meta266211){
this.on_get_followers = on_get_followers;
this.map__266209 = map__266209;
this.p__266202 = p__266202;
this.owner = owner;
this.accounts = accounts;
this.accounts_form = accounts_form;
this.meta266211 = meta266211;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t266210.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t266210.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__266209,map__266209__$1,on_get_followers){
return (function (_,p__266213){
var self__ = this;
var map__266214 = p__266213;
var map__266214__$1 = ((cljs.core.seq_QMARK_.call(null,map__266214))?cljs.core.apply.call(null,cljs.core.hash_map,map__266214):map__266214);
var text = cljs.core.get.call(null,map__266214__$1,new cljs.core.Keyword(null,"accounts","accounts",-935308676));
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "accounts-input"},"Accounts:"),om.dom.textarea.call(null,{"onChange": ((function (___$1,map__266214,map__266214__$1,text,map__266209,map__266209__$1,on_get_followers){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"accounts","accounts",-935308676),e.target.value);
});})(___$1,map__266214,map__266214__$1,text,map__266209,map__266209__$1,on_get_followers))
, "value": text, "rows": "3", "className": "form-control", "id": "accounts-input"})),React.DOM.button({"onClick": ((function (___$1,map__266214,map__266214__$1,text,map__266209,map__266209__$1,on_get_followers){
return (function (e){
e.preventDefault();

cljs.core.println.call(null,"Get followers button clicked");

var new_accounts = clojure.string.split.call(null,text,/ /);
om.core.update_BANG_.call(null,self__.accounts,new_accounts);

return self__.on_get_followers.call(null,new_accounts);
});})(___$1,map__266214,map__266214__$1,text,map__266209,map__266209__$1,on_get_followers))
, "className": "btn btn-primary"},"Get Followers"));
});})(map__266209,map__266209__$1,on_get_followers))
;

mentionmyfollowers.core.t266210.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t266210.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__266209,map__266209__$1,on_get_followers){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),clojure.string.join.call(null," ",self__.accounts)], null);
});})(map__266209,map__266209__$1,on_get_followers))
;

mentionmyfollowers.core.t266210.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__266209,map__266209__$1,on_get_followers){
return (function (_266212){
var self__ = this;
var _266212__$1 = this;
return self__.meta266211;
});})(map__266209,map__266209__$1,on_get_followers))
;

mentionmyfollowers.core.t266210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__266209,map__266209__$1,on_get_followers){
return (function (_266212,meta266211__$1){
var self__ = this;
var _266212__$1 = this;
return (new mentionmyfollowers.core.t266210(self__.on_get_followers,self__.map__266209,self__.p__266202,self__.owner,self__.accounts,self__.accounts_form,meta266211__$1));
});})(map__266209,map__266209__$1,on_get_followers))
;

mentionmyfollowers.core.t266210.cljs$lang$type = true;

mentionmyfollowers.core.t266210.cljs$lang$ctorStr = "mentionmyfollowers.core/t266210";

mentionmyfollowers.core.t266210.cljs$lang$ctorPrWriter = ((function (map__266209,map__266209__$1,on_get_followers){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t266210");
});})(map__266209,map__266209__$1,on_get_followers))
;

mentionmyfollowers.core.__GT_t266210 = ((function (map__266209,map__266209__$1,on_get_followers){
return (function __GT_t266210(on_get_followers__$1,map__266209__$2,p__266202__$1,owner__$1,accounts__$1,accounts_form__$1,meta266211){
return (new mentionmyfollowers.core.t266210(on_get_followers__$1,map__266209__$2,p__266202__$1,owner__$1,accounts__$1,accounts_form__$1,meta266211));
});})(map__266209,map__266209__$1,on_get_followers))
;

}

return (new mentionmyfollowers.core.t266210(on_get_followers,map__266209__$1,p__266202,owner,accounts,accounts_form,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Reports an error of restful api call.
*/
mentionmyfollowers.core.report_error_BANG_ = (function report_error_BANG_(p__266215){
var map__266217 = p__266215;
var map__266217__$1 = ((cljs.core.seq_QMARK_.call(null,map__266217))?cljs.core.apply.call(null,cljs.core.hash_map,map__266217):map__266217);
var error = map__266217__$1;
var failure = cljs.core.get.call(null,map__266217__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
var status_text = cljs.core.get.call(null,map__266217__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var status = cljs.core.get.call(null,map__266217__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.println.call(null,error);
});
mentionmyfollowers.core.loading_followers = (function loading_followers(_,___$1){
if(typeof mentionmyfollowers.core.t266221 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t266221 = (function (_,loading_followers,meta266222){
this._ = _;
this.loading_followers = loading_followers;
this.meta266222 = meta266222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t266221.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t266221.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return React.DOM.div({"className": "progress"},React.DOM.div({"aria-valuemax": "100", "aria-valuemin": "0", "aria-valuenow": "75", "role": "progressbar", "className": "progress-bar progress-bar-striped active"}));
});

mentionmyfollowers.core.t266221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_266223){
var self__ = this;
var _266223__$1 = this;
return self__.meta266222;
});

mentionmyfollowers.core.t266221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_266223,meta266222__$1){
var self__ = this;
var _266223__$1 = this;
return (new mentionmyfollowers.core.t266221(self__._,self__.loading_followers,meta266222__$1));
});

mentionmyfollowers.core.t266221.cljs$lang$type = true;

mentionmyfollowers.core.t266221.cljs$lang$ctorStr = "mentionmyfollowers.core/t266221";

mentionmyfollowers.core.t266221.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t266221");
});

mentionmyfollowers.core.__GT_t266221 = (function __GT_t266221(___$2,loading_followers__$1,meta266222){
return (new mentionmyfollowers.core.t266221(___$2,loading_followers__$1,meta266222));
});

}

return (new mentionmyfollowers.core.t266221(___$1,loading_followers,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.selection_form = (function selection_form(selection,owner){
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-from"},"From"),om.dom.input.call(null,{"onChange": (function (p1__266224_SHARP_){
return om.core.update_BANG_.call(null,selection,new cljs.core.Keyword(null,"from","from",1815293044),p1__266224_SHARP_.target.value);
}), "value": new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(selection), "id": "selection-from", "type": "text"})),React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-to"},"To"),om.dom.input.call(null,{"onChange": (function (p1__266225_SHARP_){
return om.core.update_BANG_.call(null,selection,new cljs.core.Keyword(null,"to","to",192099007),p1__266225_SHARP_.target.value);
}), "value": new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(selection), "id": "selection-to", "type": "text"})));
});
mentionmyfollowers.core.update_selection = (function update_selection(p__266226,idx){
var map__266228 = p__266226;
var map__266228__$1 = ((cljs.core.seq_QMARK_.call(null,map__266228))?cljs.core.apply.call(null,cljs.core.hash_map,map__266228):map__266228);
var selection = map__266228__$1;
var to = cljs.core.get.call(null,map__266228__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__266228__$1,new cljs.core.Keyword(null,"from","from",1815293044));
cljs.core.println.call(null,"Setting selection",idx,"->",from,to);

if(((from == null)) || ((idx < from))){
return cljs.core.assoc.call(null,selection,new cljs.core.Keyword(null,"from","from",1815293044),idx);
} else {
if((idx > from)){
return cljs.core.assoc.call(null,selection,new cljs.core.Keyword(null,"to","to",192099007),idx);
} else {
return cljs.core.merge.call(null,selection,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null));

}
}
});
mentionmyfollowers.core.is_selected_QMARK_ = (function is_selected_QMARK_(i,p__266229){
var map__266231 = p__266229;
var map__266231__$1 = ((cljs.core.seq_QMARK_.call(null,map__266231))?cljs.core.apply.call(null,cljs.core.hash_map,map__266231):map__266231);
var to = cljs.core.get.call(null,map__266231__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__266231__$1,new cljs.core.Keyword(null,"from","from",1815293044));
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
mentionmyfollowers.core.follower_item = (function follower_item(followers_and_selection,owner,p__266232){
var map__266237 = p__266232;
var map__266237__$1 = ((cljs.core.seq_QMARK_.call(null,map__266237))?cljs.core.apply.call(null,cljs.core.hash_map,map__266237):map__266237);
var idx = cljs.core.get.call(null,map__266237__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(typeof mentionmyfollowers.core.t266238 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t266238 = (function (idx,map__266237,p__266232,owner,followers_and_selection,follower_item,meta266239){
this.idx = idx;
this.map__266237 = map__266237;
this.p__266232 = p__266232;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.follower_item = follower_item;
this.meta266239 = meta266239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t266238.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t266238.prototype.om$core$IRender$render$arity$1 = ((function (map__266237,map__266237__$1,idx){
return (function (_){
var self__ = this;
var ___$1 = this;
var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var selection = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var is_this_selected_QMARK_ = mentionmyfollowers.core.is_selected_QMARK_.call(null,self__.idx,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection));
var on_click = ((function (followers,selection,is_this_selected_QMARK_,___$1,map__266237,map__266237__$1,idx){
return (function (e){
e.preventDefault();

return om.core.transact_BANG_.call(null,self__.followers_and_selection,new cljs.core.Keyword(null,"selection","selection",975998651),((function (followers,selection,is_this_selected_QMARK_,___$1,map__266237,map__266237__$1,idx){
return (function (s){
return mentionmyfollowers.core.update_selection.call(null,s,self__.idx);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__266237,map__266237__$1,idx))
);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__266237,map__266237__$1,idx))
;
return React.DOM.a({"onClick": on_click, "className": [cljs.core.str("list-group-item"),cljs.core.str((cljs.core.truth_(is_this_selected_QMARK_)?" active":null))].join(''), "href": "#"},cljs.core.get.call(null,followers,self__.idx));
});})(map__266237,map__266237__$1,idx))
;

mentionmyfollowers.core.t266238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__266237,map__266237__$1,idx){
return (function (_266240){
var self__ = this;
var _266240__$1 = this;
return self__.meta266239;
});})(map__266237,map__266237__$1,idx))
;

mentionmyfollowers.core.t266238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__266237,map__266237__$1,idx){
return (function (_266240,meta266239__$1){
var self__ = this;
var _266240__$1 = this;
return (new mentionmyfollowers.core.t266238(self__.idx,self__.map__266237,self__.p__266232,self__.owner,self__.followers_and_selection,self__.follower_item,meta266239__$1));
});})(map__266237,map__266237__$1,idx))
;

mentionmyfollowers.core.t266238.cljs$lang$type = true;

mentionmyfollowers.core.t266238.cljs$lang$ctorStr = "mentionmyfollowers.core/t266238";

mentionmyfollowers.core.t266238.cljs$lang$ctorPrWriter = ((function (map__266237,map__266237__$1,idx){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t266238");
});})(map__266237,map__266237__$1,idx))
;

mentionmyfollowers.core.__GT_t266238 = ((function (map__266237,map__266237__$1,idx){
return (function __GT_t266238(idx__$1,map__266237__$2,p__266232__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta266239){
return (new mentionmyfollowers.core.t266238(idx__$1,map__266237__$2,p__266232__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta266239));
});})(map__266237,map__266237__$1,idx))
;

}

return (new mentionmyfollowers.core.t266238(idx,map__266237__$1,p__266232,owner,followers_and_selection,follower_item,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers_list = (function select_followers_list(followers_and_selection,owner){
if(typeof mentionmyfollowers.core.t266245 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t266245 = (function (owner,followers_and_selection,select_followers_list,meta266246){
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers_list = select_followers_list;
this.meta266246 = meta266246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t266245.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t266245.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"className": "list-group"},(function (){var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
return cljs.core.map.call(null,((function (followers,___$1){
return (function (p1__266241_SHARP_){
return om.core.build.call(null,mentionmyfollowers.core.follower_item,self__.followers_and_selection,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),p1__266241_SHARP_], null)], null));
});})(followers,___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,followers)));
})()),om.core.build.call(null,mentionmyfollowers.core.selection_form,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection)));
});

mentionmyfollowers.core.t266245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_266247){
var self__ = this;
var _266247__$1 = this;
return self__.meta266246;
});

mentionmyfollowers.core.t266245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_266247,meta266246__$1){
var self__ = this;
var _266247__$1 = this;
return (new mentionmyfollowers.core.t266245(self__.owner,self__.followers_and_selection,self__.select_followers_list,meta266246__$1));
});

mentionmyfollowers.core.t266245.cljs$lang$type = true;

mentionmyfollowers.core.t266245.cljs$lang$ctorStr = "mentionmyfollowers.core/t266245";

mentionmyfollowers.core.t266245.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t266245");
});

mentionmyfollowers.core.__GT_t266245 = (function __GT_t266245(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta266246){
return (new mentionmyfollowers.core.t266245(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta266246));
});

}

return (new mentionmyfollowers.core.t266245(owner,followers_and_selection,select_followers_list,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers = (function select_followers(followers_and_selection,owner,p__266248){
var map__266253 = p__266248;
var map__266253__$1 = ((cljs.core.seq_QMARK_.call(null,map__266253))?cljs.core.apply.call(null,cljs.core.hash_map,map__266253):map__266253);
var on_cancel = cljs.core.get.call(null,map__266253__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
if(typeof mentionmyfollowers.core.t266254 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t266254 = (function (on_cancel,map__266253,p__266248,owner,followers_and_selection,select_followers,meta266255){
this.on_cancel = on_cancel;
this.map__266253 = map__266253;
this.p__266248 = p__266248;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers = select_followers;
this.meta266255 = meta266255;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t266254.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t266254.prototype.om$core$IRender$render$arity$1 = ((function (map__266253,map__266253__$1,on_cancel){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,mentionmyfollowers.core.select_followers_list,self__.followers_and_selection),React.DOM.button({"className": "btn btn-primary"},"Go"),React.DOM.button({"onClick": self__.on_cancel, "className": "btn btn-danger"},"Cancel"));
});})(map__266253,map__266253__$1,on_cancel))
;

mentionmyfollowers.core.t266254.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__266253,map__266253__$1,on_cancel){
return (function (_266256){
var self__ = this;
var _266256__$1 = this;
return self__.meta266255;
});})(map__266253,map__266253__$1,on_cancel))
;

mentionmyfollowers.core.t266254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__266253,map__266253__$1,on_cancel){
return (function (_266256,meta266255__$1){
var self__ = this;
var _266256__$1 = this;
return (new mentionmyfollowers.core.t266254(self__.on_cancel,self__.map__266253,self__.p__266248,self__.owner,self__.followers_and_selection,self__.select_followers,meta266255__$1));
});})(map__266253,map__266253__$1,on_cancel))
;

mentionmyfollowers.core.t266254.cljs$lang$type = true;

mentionmyfollowers.core.t266254.cljs$lang$ctorStr = "mentionmyfollowers.core/t266254";

mentionmyfollowers.core.t266254.cljs$lang$ctorPrWriter = ((function (map__266253,map__266253__$1,on_cancel){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t266254");
});})(map__266253,map__266253__$1,on_cancel))
;

mentionmyfollowers.core.__GT_t266254 = ((function (map__266253,map__266253__$1,on_cancel){
return (function __GT_t266254(on_cancel__$1,map__266253__$2,p__266248__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta266255){
return (new mentionmyfollowers.core.t266254(on_cancel__$1,map__266253__$2,p__266248__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta266255));
});})(map__266253,map__266253__$1,on_cancel))
;

}

return (new mentionmyfollowers.core.t266254(on_cancel,map__266253__$1,p__266248,owner,followers_and_selection,select_followers,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* The main application component
*/
mentionmyfollowers.core.application = (function application(data,owner){
if(typeof mentionmyfollowers.core.t266264 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t266264 = (function (owner,data,application,meta266265){
this.owner = owner;
this.data = data;
this.application = application;
this.meta266265 = meta266265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t266264.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t266264.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
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
return React.DOM.div({"className": "container"},(function (){var pred__266267 = cljs.core._EQ_;
var expr__266268 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__266267.call(null,new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534),expr__266268))){
return om.core.build.call(null,mentionmyfollowers.core.accounts_form,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518),handle_get_followers], null)], null));
} else {
if(cljs.core.truth_(pred__266267.call(null,new cljs.core.Keyword(null,"loading-followers","loading-followers",1692268659),expr__266268))){
return om.core.build.call(null,mentionmyfollowers.core.loading_followers,null);
} else {
if(cljs.core.truth_(pred__266267.call(null,new cljs.core.Keyword(null,"select-followers","select-followers",-1421776266),expr__266268))){
return om.core.build.call(null,mentionmyfollowers.core.select_followers,new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (pred__266267,expr__266268,handle_get_followers,___$1){
return (function (e){
cljs.core.println.call(null,"Cancel in select-followers view");

e.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534));
});})(pred__266267,expr__266268,handle_get_followers,___$1))
], null)], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__266268)].join('')));
}
}
}
})());
});

mentionmyfollowers.core.t266264.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t266264.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534)], null);
});

mentionmyfollowers.core.t266264.prototype.om$core$IWillMount$ = true;

mentionmyfollowers.core.t266264.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - Will Mount");

return mentionmyfollowers.core.read_user_id.call(null,((function (___$1){
return (function (p1__266257_SHARP_){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),((function (___$1){
return (function (user){
return cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"user-id","user-id",-206822291),p1__266257_SHARP_);
});})(___$1))
);
});})(___$1))
);
});

mentionmyfollowers.core.t266264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_266266){
var self__ = this;
var _266266__$1 = this;
return self__.meta266265;
});

mentionmyfollowers.core.t266264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_266266,meta266265__$1){
var self__ = this;
var _266266__$1 = this;
return (new mentionmyfollowers.core.t266264(self__.owner,self__.data,self__.application,meta266265__$1));
});

mentionmyfollowers.core.t266264.cljs$lang$type = true;

mentionmyfollowers.core.t266264.cljs$lang$ctorStr = "mentionmyfollowers.core/t266264";

mentionmyfollowers.core.t266264.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t266264");
});

mentionmyfollowers.core.__GT_t266264 = (function __GT_t266264(owner__$1,data__$1,application__$1,meta266265){
return (new mentionmyfollowers.core.t266264(owner__$1,data__$1,application__$1,meta266265));
});

}

return (new mentionmyfollowers.core.t266264(owner,data,application,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.application,mentionmyfollowers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
