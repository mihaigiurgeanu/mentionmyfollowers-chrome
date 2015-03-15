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
mentionmyfollowers.core.show_user_id = (function show_user_id(p__289970,owner){
var map__289975 = p__289970;
var map__289975__$1 = ((cljs.core.seq_QMARK_.call(null,map__289975))?cljs.core.apply.call(null,cljs.core.hash_map,map__289975):map__289975);
var user_id = cljs.core.get.call(null,map__289975__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t289976 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t289976 = (function (user_id,map__289975,owner,p__289970,show_user_id,meta289977){
this.user_id = user_id;
this.map__289975 = map__289975;
this.owner = owner;
this.p__289970 = p__289970;
this.show_user_id = show_user_id;
this.meta289977 = meta289977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t289976.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t289976.prototype.om$core$IRender$render$arity$1 = ((function (map__289975,map__289975__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__289975,map__289975__$1,user_id))
;

mentionmyfollowers.core.t289976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__289975,map__289975__$1,user_id){
return (function (_289978){
var self__ = this;
var _289978__$1 = this;
return self__.meta289977;
});})(map__289975,map__289975__$1,user_id))
;

mentionmyfollowers.core.t289976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__289975,map__289975__$1,user_id){
return (function (_289978,meta289977__$1){
var self__ = this;
var _289978__$1 = this;
return (new mentionmyfollowers.core.t289976(self__.user_id,self__.map__289975,self__.owner,self__.p__289970,self__.show_user_id,meta289977__$1));
});})(map__289975,map__289975__$1,user_id))
;

mentionmyfollowers.core.t289976.cljs$lang$type = true;

mentionmyfollowers.core.t289976.cljs$lang$ctorStr = "mentionmyfollowers.core/t289976";

mentionmyfollowers.core.t289976.cljs$lang$ctorPrWriter = ((function (map__289975,map__289975__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t289976");
});})(map__289975,map__289975__$1,user_id))
;

mentionmyfollowers.core.__GT_t289976 = ((function (map__289975,map__289975__$1,user_id){
return (function __GT_t289976(user_id__$1,map__289975__$2,owner__$1,p__289970__$1,show_user_id__$1,meta289977){
return (new mentionmyfollowers.core.t289976(user_id__$1,map__289975__$2,owner__$1,p__289970__$1,show_user_id__$1,meta289977));
});})(map__289975,map__289975__$1,user_id))
;

}

return (new mentionmyfollowers.core.t289976(user_id,map__289975__$1,owner,p__289970,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* A form to enter the accounts whose followers you want to mention
*/
mentionmyfollowers.core.accounts_form = (function accounts_form(accounts,owner,p__289979){
var map__289986 = p__289979;
var map__289986__$1 = ((cljs.core.seq_QMARK_.call(null,map__289986))?cljs.core.apply.call(null,cljs.core.hash_map,map__289986):map__289986);
var on_get_followers = cljs.core.get.call(null,map__289986__$1,new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518));
if(typeof mentionmyfollowers.core.t289987 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t289987 = (function (on_get_followers,map__289986,p__289979,owner,accounts,accounts_form,meta289988){
this.on_get_followers = on_get_followers;
this.map__289986 = map__289986;
this.p__289979 = p__289979;
this.owner = owner;
this.accounts = accounts;
this.accounts_form = accounts_form;
this.meta289988 = meta289988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t289987.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t289987.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__289986,map__289986__$1,on_get_followers){
return (function (_,p__289990){
var self__ = this;
var map__289991 = p__289990;
var map__289991__$1 = ((cljs.core.seq_QMARK_.call(null,map__289991))?cljs.core.apply.call(null,cljs.core.hash_map,map__289991):map__289991);
var text = cljs.core.get.call(null,map__289991__$1,new cljs.core.Keyword(null,"accounts","accounts",-935308676));
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "accounts-input"},"Accounts:"),om.dom.textarea.call(null,{"onChange": ((function (___$1,map__289991,map__289991__$1,text,map__289986,map__289986__$1,on_get_followers){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"accounts","accounts",-935308676),e.target.value);
});})(___$1,map__289991,map__289991__$1,text,map__289986,map__289986__$1,on_get_followers))
, "value": text, "rows": "3", "className": "form-control", "id": "accounts-input"})),React.DOM.button({"onClick": ((function (___$1,map__289991,map__289991__$1,text,map__289986,map__289986__$1,on_get_followers){
return (function (e){
e.preventDefault();

cljs.core.println.call(null,"Get followers button clicked");

var new_accounts = clojure.string.split.call(null,text,/ /);
om.core.update_BANG_.call(null,self__.accounts,new_accounts);

return self__.on_get_followers.call(null,new_accounts);
});})(___$1,map__289991,map__289991__$1,text,map__289986,map__289986__$1,on_get_followers))
, "className": "btn btn-primary"},"Get Followers"));
});})(map__289986,map__289986__$1,on_get_followers))
;

mentionmyfollowers.core.t289987.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t289987.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__289986,map__289986__$1,on_get_followers){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),clojure.string.join.call(null," ",self__.accounts)], null);
});})(map__289986,map__289986__$1,on_get_followers))
;

mentionmyfollowers.core.t289987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__289986,map__289986__$1,on_get_followers){
return (function (_289989){
var self__ = this;
var _289989__$1 = this;
return self__.meta289988;
});})(map__289986,map__289986__$1,on_get_followers))
;

mentionmyfollowers.core.t289987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__289986,map__289986__$1,on_get_followers){
return (function (_289989,meta289988__$1){
var self__ = this;
var _289989__$1 = this;
return (new mentionmyfollowers.core.t289987(self__.on_get_followers,self__.map__289986,self__.p__289979,self__.owner,self__.accounts,self__.accounts_form,meta289988__$1));
});})(map__289986,map__289986__$1,on_get_followers))
;

mentionmyfollowers.core.t289987.cljs$lang$type = true;

mentionmyfollowers.core.t289987.cljs$lang$ctorStr = "mentionmyfollowers.core/t289987";

mentionmyfollowers.core.t289987.cljs$lang$ctorPrWriter = ((function (map__289986,map__289986__$1,on_get_followers){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t289987");
});})(map__289986,map__289986__$1,on_get_followers))
;

mentionmyfollowers.core.__GT_t289987 = ((function (map__289986,map__289986__$1,on_get_followers){
return (function __GT_t289987(on_get_followers__$1,map__289986__$2,p__289979__$1,owner__$1,accounts__$1,accounts_form__$1,meta289988){
return (new mentionmyfollowers.core.t289987(on_get_followers__$1,map__289986__$2,p__289979__$1,owner__$1,accounts__$1,accounts_form__$1,meta289988));
});})(map__289986,map__289986__$1,on_get_followers))
;

}

return (new mentionmyfollowers.core.t289987(on_get_followers,map__289986__$1,p__289979,owner,accounts,accounts_form,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Reports an error of restful api call.
*/
mentionmyfollowers.core.report_error_BANG_ = (function report_error_BANG_(p__289992){
var map__289994 = p__289992;
var map__289994__$1 = ((cljs.core.seq_QMARK_.call(null,map__289994))?cljs.core.apply.call(null,cljs.core.hash_map,map__289994):map__289994);
var error = map__289994__$1;
var failure = cljs.core.get.call(null,map__289994__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
var status_text = cljs.core.get.call(null,map__289994__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var status = cljs.core.get.call(null,map__289994__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.println.call(null,error);
});
mentionmyfollowers.core.loading_followers = (function loading_followers(_,___$1){
if(typeof mentionmyfollowers.core.t289998 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t289998 = (function (_,loading_followers,meta289999){
this._ = _;
this.loading_followers = loading_followers;
this.meta289999 = meta289999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t289998.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t289998.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return React.DOM.div({"className": "progress"},React.DOM.div({"aria-valuemax": "100", "aria-valuemin": "0", "aria-valuenow": "75", "role": "progressbar", "className": "progress-bar progress-bar-striped active"}));
});

mentionmyfollowers.core.t289998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_290000){
var self__ = this;
var _290000__$1 = this;
return self__.meta289999;
});

mentionmyfollowers.core.t289998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_290000,meta289999__$1){
var self__ = this;
var _290000__$1 = this;
return (new mentionmyfollowers.core.t289998(self__._,self__.loading_followers,meta289999__$1));
});

mentionmyfollowers.core.t289998.cljs$lang$type = true;

mentionmyfollowers.core.t289998.cljs$lang$ctorStr = "mentionmyfollowers.core/t289998";

mentionmyfollowers.core.t289998.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t289998");
});

mentionmyfollowers.core.__GT_t289998 = (function __GT_t289998(___$2,loading_followers__$1,meta289999){
return (new mentionmyfollowers.core.t289998(___$2,loading_followers__$1,meta289999));
});

}

return (new mentionmyfollowers.core.t289998(___$1,loading_followers,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.selection_form = (function selection_form(selection,owner){
if(typeof mentionmyfollowers.core.t290006 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t290006 = (function (owner,selection,selection_form,meta290007){
this.owner = owner;
this.selection = selection;
this.selection_form = selection_form;
this.meta290007 = meta290007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t290006.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t290006.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-from"},"From"),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__290001_SHARP_){
return om.core.update_BANG_.call(null,self__.selection,new cljs.core.Keyword(null,"from","from",1815293044),p1__290001_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(self__.selection), "id": "selection-from", "className": "form-control", "type": "text"})),React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-to"},"To"),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__290002_SHARP_){
return om.core.update_BANG_.call(null,self__.selection,new cljs.core.Keyword(null,"to","to",192099007),p1__290002_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(self__.selection), "id": "selection-to", "className": "form-control", "type": "text"})));
});

mentionmyfollowers.core.t290006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_290008){
var self__ = this;
var _290008__$1 = this;
return self__.meta290007;
});

mentionmyfollowers.core.t290006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_290008,meta290007__$1){
var self__ = this;
var _290008__$1 = this;
return (new mentionmyfollowers.core.t290006(self__.owner,self__.selection,self__.selection_form,meta290007__$1));
});

mentionmyfollowers.core.t290006.cljs$lang$type = true;

mentionmyfollowers.core.t290006.cljs$lang$ctorStr = "mentionmyfollowers.core/t290006";

mentionmyfollowers.core.t290006.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t290006");
});

mentionmyfollowers.core.__GT_t290006 = (function __GT_t290006(owner__$1,selection__$1,selection_form__$1,meta290007){
return (new mentionmyfollowers.core.t290006(owner__$1,selection__$1,selection_form__$1,meta290007));
});

}

return (new mentionmyfollowers.core.t290006(owner,selection,selection_form,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.update_selection = (function update_selection(p__290009,idx){
var map__290011 = p__290009;
var map__290011__$1 = ((cljs.core.seq_QMARK_.call(null,map__290011))?cljs.core.apply.call(null,cljs.core.hash_map,map__290011):map__290011);
var selection = map__290011__$1;
var to = cljs.core.get.call(null,map__290011__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__290011__$1,new cljs.core.Keyword(null,"from","from",1815293044));
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
mentionmyfollowers.core.is_selected_QMARK_ = (function is_selected_QMARK_(i,p__290012){
var map__290014 = p__290012;
var map__290014__$1 = ((cljs.core.seq_QMARK_.call(null,map__290014))?cljs.core.apply.call(null,cljs.core.hash_map,map__290014):map__290014);
var to = cljs.core.get.call(null,map__290014__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__290014__$1,new cljs.core.Keyword(null,"from","from",1815293044));
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
mentionmyfollowers.core.follower_item = (function follower_item(followers_and_selection,owner,p__290015){
var map__290020 = p__290015;
var map__290020__$1 = ((cljs.core.seq_QMARK_.call(null,map__290020))?cljs.core.apply.call(null,cljs.core.hash_map,map__290020):map__290020);
var idx = cljs.core.get.call(null,map__290020__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(typeof mentionmyfollowers.core.t290021 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t290021 = (function (idx,map__290020,p__290015,owner,followers_and_selection,follower_item,meta290022){
this.idx = idx;
this.map__290020 = map__290020;
this.p__290015 = p__290015;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.follower_item = follower_item;
this.meta290022 = meta290022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t290021.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t290021.prototype.om$core$IRender$render$arity$1 = ((function (map__290020,map__290020__$1,idx){
return (function (_){
var self__ = this;
var ___$1 = this;
var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var selection = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var is_this_selected_QMARK_ = mentionmyfollowers.core.is_selected_QMARK_.call(null,self__.idx,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection));
var on_click = ((function (followers,selection,is_this_selected_QMARK_,___$1,map__290020,map__290020__$1,idx){
return (function (e){
e.preventDefault();

return om.core.transact_BANG_.call(null,self__.followers_and_selection,new cljs.core.Keyword(null,"selection","selection",975998651),((function (followers,selection,is_this_selected_QMARK_,___$1,map__290020,map__290020__$1,idx){
return (function (s){
return mentionmyfollowers.core.update_selection.call(null,s,self__.idx);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__290020,map__290020__$1,idx))
);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__290020,map__290020__$1,idx))
;
return React.DOM.a({"onClick": on_click, "className": [cljs.core.str("list-group-item"),cljs.core.str((cljs.core.truth_(is_this_selected_QMARK_)?" active":null))].join(''), "href": "#"},cljs.core.get.call(null,followers,self__.idx));
});})(map__290020,map__290020__$1,idx))
;

mentionmyfollowers.core.t290021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__290020,map__290020__$1,idx){
return (function (_290023){
var self__ = this;
var _290023__$1 = this;
return self__.meta290022;
});})(map__290020,map__290020__$1,idx))
;

mentionmyfollowers.core.t290021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__290020,map__290020__$1,idx){
return (function (_290023,meta290022__$1){
var self__ = this;
var _290023__$1 = this;
return (new mentionmyfollowers.core.t290021(self__.idx,self__.map__290020,self__.p__290015,self__.owner,self__.followers_and_selection,self__.follower_item,meta290022__$1));
});})(map__290020,map__290020__$1,idx))
;

mentionmyfollowers.core.t290021.cljs$lang$type = true;

mentionmyfollowers.core.t290021.cljs$lang$ctorStr = "mentionmyfollowers.core/t290021";

mentionmyfollowers.core.t290021.cljs$lang$ctorPrWriter = ((function (map__290020,map__290020__$1,idx){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t290021");
});})(map__290020,map__290020__$1,idx))
;

mentionmyfollowers.core.__GT_t290021 = ((function (map__290020,map__290020__$1,idx){
return (function __GT_t290021(idx__$1,map__290020__$2,p__290015__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta290022){
return (new mentionmyfollowers.core.t290021(idx__$1,map__290020__$2,p__290015__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta290022));
});})(map__290020,map__290020__$1,idx))
;

}

return (new mentionmyfollowers.core.t290021(idx,map__290020__$1,p__290015,owner,followers_and_selection,follower_item,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers_list = (function select_followers_list(followers_and_selection,owner){
if(typeof mentionmyfollowers.core.t290028 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t290028 = (function (owner,followers_and_selection,select_followers_list,meta290029){
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers_list = select_followers_list;
this.meta290029 = meta290029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t290028.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t290028.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"className": "list-group"},(function (){var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
return cljs.core.map.call(null,((function (followers,___$1){
return (function (p1__290024_SHARP_){
return om.core.build.call(null,mentionmyfollowers.core.follower_item,self__.followers_and_selection,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),p1__290024_SHARP_], null)], null));
});})(followers,___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,followers)));
})()),om.core.build.call(null,mentionmyfollowers.core.selection_form,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection)));
});

mentionmyfollowers.core.t290028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_290030){
var self__ = this;
var _290030__$1 = this;
return self__.meta290029;
});

mentionmyfollowers.core.t290028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_290030,meta290029__$1){
var self__ = this;
var _290030__$1 = this;
return (new mentionmyfollowers.core.t290028(self__.owner,self__.followers_and_selection,self__.select_followers_list,meta290029__$1));
});

mentionmyfollowers.core.t290028.cljs$lang$type = true;

mentionmyfollowers.core.t290028.cljs$lang$ctorStr = "mentionmyfollowers.core/t290028";

mentionmyfollowers.core.t290028.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t290028");
});

mentionmyfollowers.core.__GT_t290028 = (function __GT_t290028(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta290029){
return (new mentionmyfollowers.core.t290028(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta290029));
});

}

return (new mentionmyfollowers.core.t290028(owner,followers_and_selection,select_followers_list,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers = (function select_followers(followers_and_selection,owner,p__290031){
var map__290036 = p__290031;
var map__290036__$1 = ((cljs.core.seq_QMARK_.call(null,map__290036))?cljs.core.apply.call(null,cljs.core.hash_map,map__290036):map__290036);
var on_cancel = cljs.core.get.call(null,map__290036__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
if(typeof mentionmyfollowers.core.t290037 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t290037 = (function (on_cancel,map__290036,p__290031,owner,followers_and_selection,select_followers,meta290038){
this.on_cancel = on_cancel;
this.map__290036 = map__290036;
this.p__290031 = p__290031;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers = select_followers;
this.meta290038 = meta290038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t290037.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t290037.prototype.om$core$IRender$render$arity$1 = ((function (map__290036,map__290036__$1,on_cancel){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,mentionmyfollowers.core.select_followers_list,self__.followers_and_selection),React.DOM.button({"className": "btn btn-primary"},"Go"),React.DOM.button({"onClick": self__.on_cancel, "className": "btn btn-danger"},"Cancel"));
});})(map__290036,map__290036__$1,on_cancel))
;

mentionmyfollowers.core.t290037.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__290036,map__290036__$1,on_cancel){
return (function (_290039){
var self__ = this;
var _290039__$1 = this;
return self__.meta290038;
});})(map__290036,map__290036__$1,on_cancel))
;

mentionmyfollowers.core.t290037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__290036,map__290036__$1,on_cancel){
return (function (_290039,meta290038__$1){
var self__ = this;
var _290039__$1 = this;
return (new mentionmyfollowers.core.t290037(self__.on_cancel,self__.map__290036,self__.p__290031,self__.owner,self__.followers_and_selection,self__.select_followers,meta290038__$1));
});})(map__290036,map__290036__$1,on_cancel))
;

mentionmyfollowers.core.t290037.cljs$lang$type = true;

mentionmyfollowers.core.t290037.cljs$lang$ctorStr = "mentionmyfollowers.core/t290037";

mentionmyfollowers.core.t290037.cljs$lang$ctorPrWriter = ((function (map__290036,map__290036__$1,on_cancel){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t290037");
});})(map__290036,map__290036__$1,on_cancel))
;

mentionmyfollowers.core.__GT_t290037 = ((function (map__290036,map__290036__$1,on_cancel){
return (function __GT_t290037(on_cancel__$1,map__290036__$2,p__290031__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta290038){
return (new mentionmyfollowers.core.t290037(on_cancel__$1,map__290036__$2,p__290031__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta290038));
});})(map__290036,map__290036__$1,on_cancel))
;

}

return (new mentionmyfollowers.core.t290037(on_cancel,map__290036__$1,p__290031,owner,followers_and_selection,select_followers,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* The main application component
*/
mentionmyfollowers.core.application = (function application(data,owner){
if(typeof mentionmyfollowers.core.t290047 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t290047 = (function (owner,data,application,meta290048){
this.owner = owner;
this.data = data;
this.application = application;
this.meta290048 = meta290048;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t290047.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t290047.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
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
return React.DOM.div({"className": "container"},(function (){var pred__290050 = cljs.core._EQ_;
var expr__290051 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__290050.call(null,new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534),expr__290051))){
return om.core.build.call(null,mentionmyfollowers.core.accounts_form,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518),handle_get_followers], null)], null));
} else {
if(cljs.core.truth_(pred__290050.call(null,new cljs.core.Keyword(null,"loading-followers","loading-followers",1692268659),expr__290051))){
return om.core.build.call(null,mentionmyfollowers.core.loading_followers,null);
} else {
if(cljs.core.truth_(pred__290050.call(null,new cljs.core.Keyword(null,"select-followers","select-followers",-1421776266),expr__290051))){
return om.core.build.call(null,mentionmyfollowers.core.select_followers,new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (pred__290050,expr__290051,handle_get_followers,___$1){
return (function (e){
cljs.core.println.call(null,"Cancel in select-followers view");

e.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534));
});})(pred__290050,expr__290051,handle_get_followers,___$1))
], null)], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__290051)].join('')));
}
}
}
})());
});

mentionmyfollowers.core.t290047.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t290047.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534)], null);
});

mentionmyfollowers.core.t290047.prototype.om$core$IWillMount$ = true;

mentionmyfollowers.core.t290047.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - Will Mount");

return mentionmyfollowers.core.read_user_id.call(null,((function (___$1){
return (function (p1__290040_SHARP_){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),((function (___$1){
return (function (user){
return cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"user-id","user-id",-206822291),p1__290040_SHARP_);
});})(___$1))
);
});})(___$1))
);
});

mentionmyfollowers.core.t290047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_290049){
var self__ = this;
var _290049__$1 = this;
return self__.meta290048;
});

mentionmyfollowers.core.t290047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_290049,meta290048__$1){
var self__ = this;
var _290049__$1 = this;
return (new mentionmyfollowers.core.t290047(self__.owner,self__.data,self__.application,meta290048__$1));
});

mentionmyfollowers.core.t290047.cljs$lang$type = true;

mentionmyfollowers.core.t290047.cljs$lang$ctorStr = "mentionmyfollowers.core/t290047";

mentionmyfollowers.core.t290047.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t290047");
});

mentionmyfollowers.core.__GT_t290047 = (function __GT_t290047(owner__$1,data__$1,application__$1,meta290048){
return (new mentionmyfollowers.core.t290047(owner__$1,data__$1,application__$1,meta290048));
});

}

return (new mentionmyfollowers.core.t290047(owner,data,application,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.application,mentionmyfollowers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
