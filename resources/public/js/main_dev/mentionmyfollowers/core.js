// Compiled by ClojureScript 0.0-2913 {}
goog.provide('mentionmyfollowers.core');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('om.dom');
goog.require('mentionmyfollowers.data');
goog.require('domina');
goog.require('clojure.string');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Mention My Followers Chrome Extenssion");
/**
* Reports an error of restful api call.
*/
mentionmyfollowers.core.report_error_BANG_ = (function report_error_BANG_(p__343909){
var map__343911 = p__343909;
var map__343911__$1 = ((cljs.core.seq_QMARK_.call(null,map__343911))?cljs.core.apply.call(null,cljs.core.hash_map,map__343911):map__343911);
var error = map__343911__$1;
var failure = cljs.core.get.call(null,map__343911__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
var status_text = cljs.core.get.call(null,map__343911__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var status = cljs.core.get.call(null,map__343911__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.println.call(null,error);
});
/**
* Sends the create_comments command to the content script.
*/
mentionmyfollowers.core.create_comments = (function create_comments(){
return chrome.tabs.query({"currentWindow": true, "active": true},(function (tabs){
return mentionmyfollowers.data.load_templates.call(null,(function (templates){
return chrome.tabs.sendMessage((tabs[(0)]).id,{"templates": cljs.core.clj__GT_js.call(null,templates), "followers": cljs.core.clj__GT_js.call(null,mentionmyfollowers.data.selected_followers.call(null))},(function (response){
return cljs.core.println.call(null,"Response received from content script:",response.message);
}));
}),(function (error){
return mentionmyfollowers.core.report_error_BANG_.call(null,error);
}));
}));
});
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
mentionmyfollowers.core.show_user_id = (function show_user_id(p__343912,owner){
var map__343917 = p__343912;
var map__343917__$1 = ((cljs.core.seq_QMARK_.call(null,map__343917))?cljs.core.apply.call(null,cljs.core.hash_map,map__343917):map__343917);
var user_id = cljs.core.get.call(null,map__343917__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t343918 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t343918 = (function (user_id,map__343917,owner,p__343912,show_user_id,meta343919){
this.user_id = user_id;
this.map__343917 = map__343917;
this.owner = owner;
this.p__343912 = p__343912;
this.show_user_id = show_user_id;
this.meta343919 = meta343919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t343918.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t343918.prototype.om$core$IRender$render$arity$1 = ((function (map__343917,map__343917__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__343917,map__343917__$1,user_id))
;

mentionmyfollowers.core.t343918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__343917,map__343917__$1,user_id){
return (function (_343920){
var self__ = this;
var _343920__$1 = this;
return self__.meta343919;
});})(map__343917,map__343917__$1,user_id))
;

mentionmyfollowers.core.t343918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__343917,map__343917__$1,user_id){
return (function (_343920,meta343919__$1){
var self__ = this;
var _343920__$1 = this;
return (new mentionmyfollowers.core.t343918(self__.user_id,self__.map__343917,self__.owner,self__.p__343912,self__.show_user_id,meta343919__$1));
});})(map__343917,map__343917__$1,user_id))
;

mentionmyfollowers.core.t343918.cljs$lang$type = true;

mentionmyfollowers.core.t343918.cljs$lang$ctorStr = "mentionmyfollowers.core/t343918";

mentionmyfollowers.core.t343918.cljs$lang$ctorPrWriter = ((function (map__343917,map__343917__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t343918");
});})(map__343917,map__343917__$1,user_id))
;

mentionmyfollowers.core.__GT_t343918 = ((function (map__343917,map__343917__$1,user_id){
return (function __GT_t343918(user_id__$1,map__343917__$2,owner__$1,p__343912__$1,show_user_id__$1,meta343919){
return (new mentionmyfollowers.core.t343918(user_id__$1,map__343917__$2,owner__$1,p__343912__$1,show_user_id__$1,meta343919));
});})(map__343917,map__343917__$1,user_id))
;

}

return (new mentionmyfollowers.core.t343918(user_id,map__343917__$1,owner,p__343912,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* A form to enter the accounts whose followers you want to mention
*/
mentionmyfollowers.core.accounts_form = (function accounts_form(accounts,owner,p__343921){
var map__343928 = p__343921;
var map__343928__$1 = ((cljs.core.seq_QMARK_.call(null,map__343928))?cljs.core.apply.call(null,cljs.core.hash_map,map__343928):map__343928);
var on_get_followers = cljs.core.get.call(null,map__343928__$1,new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518));
if(typeof mentionmyfollowers.core.t343929 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t343929 = (function (on_get_followers,map__343928,p__343921,owner,accounts,accounts_form,meta343930){
this.on_get_followers = on_get_followers;
this.map__343928 = map__343928;
this.p__343921 = p__343921;
this.owner = owner;
this.accounts = accounts;
this.accounts_form = accounts_form;
this.meta343930 = meta343930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t343929.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t343929.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__343928,map__343928__$1,on_get_followers){
return (function (_,p__343932){
var self__ = this;
var map__343933 = p__343932;
var map__343933__$1 = ((cljs.core.seq_QMARK_.call(null,map__343933))?cljs.core.apply.call(null,cljs.core.hash_map,map__343933):map__343933);
var text = cljs.core.get.call(null,map__343933__$1,new cljs.core.Keyword(null,"accounts","accounts",-935308676));
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "accounts-input"},"Accounts:"),om.dom.textarea.call(null,{"onChange": ((function (___$1,map__343933,map__343933__$1,text,map__343928,map__343928__$1,on_get_followers){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"accounts","accounts",-935308676),e.target.value);
});})(___$1,map__343933,map__343933__$1,text,map__343928,map__343928__$1,on_get_followers))
, "value": text, "rows": "3", "className": "form-control", "id": "accounts-input"})),React.DOM.button({"onClick": ((function (___$1,map__343933,map__343933__$1,text,map__343928,map__343928__$1,on_get_followers){
return (function (e){
e.preventDefault();

cljs.core.println.call(null,"Get followers button clicked");

var new_accounts = clojure.string.split.call(null,text,/ /);
om.core.update_BANG_.call(null,self__.accounts,new_accounts);

return self__.on_get_followers.call(null,new_accounts);
});})(___$1,map__343933,map__343933__$1,text,map__343928,map__343928__$1,on_get_followers))
, "className": "btn btn-primary"},"Get Followers"));
});})(map__343928,map__343928__$1,on_get_followers))
;

mentionmyfollowers.core.t343929.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t343929.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__343928,map__343928__$1,on_get_followers){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),clojure.string.join.call(null," ",self__.accounts)], null);
});})(map__343928,map__343928__$1,on_get_followers))
;

mentionmyfollowers.core.t343929.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__343928,map__343928__$1,on_get_followers){
return (function (_343931){
var self__ = this;
var _343931__$1 = this;
return self__.meta343930;
});})(map__343928,map__343928__$1,on_get_followers))
;

mentionmyfollowers.core.t343929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__343928,map__343928__$1,on_get_followers){
return (function (_343931,meta343930__$1){
var self__ = this;
var _343931__$1 = this;
return (new mentionmyfollowers.core.t343929(self__.on_get_followers,self__.map__343928,self__.p__343921,self__.owner,self__.accounts,self__.accounts_form,meta343930__$1));
});})(map__343928,map__343928__$1,on_get_followers))
;

mentionmyfollowers.core.t343929.cljs$lang$type = true;

mentionmyfollowers.core.t343929.cljs$lang$ctorStr = "mentionmyfollowers.core/t343929";

mentionmyfollowers.core.t343929.cljs$lang$ctorPrWriter = ((function (map__343928,map__343928__$1,on_get_followers){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t343929");
});})(map__343928,map__343928__$1,on_get_followers))
;

mentionmyfollowers.core.__GT_t343929 = ((function (map__343928,map__343928__$1,on_get_followers){
return (function __GT_t343929(on_get_followers__$1,map__343928__$2,p__343921__$1,owner__$1,accounts__$1,accounts_form__$1,meta343930){
return (new mentionmyfollowers.core.t343929(on_get_followers__$1,map__343928__$2,p__343921__$1,owner__$1,accounts__$1,accounts_form__$1,meta343930));
});})(map__343928,map__343928__$1,on_get_followers))
;

}

return (new mentionmyfollowers.core.t343929(on_get_followers,map__343928__$1,p__343921,owner,accounts,accounts_form,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.loading_followers = (function loading_followers(_,___$1){
if(typeof mentionmyfollowers.core.t343937 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t343937 = (function (_,loading_followers,meta343938){
this._ = _;
this.loading_followers = loading_followers;
this.meta343938 = meta343938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t343937.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t343937.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return React.DOM.div({"className": "progress"},React.DOM.div({"aria-valuemax": "100", "aria-valuemin": "0", "aria-valuenow": "75", "role": "progressbar", "className": "progress-bar progress-bar-striped active"}));
});

mentionmyfollowers.core.t343937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_343939){
var self__ = this;
var _343939__$1 = this;
return self__.meta343938;
});

mentionmyfollowers.core.t343937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_343939,meta343938__$1){
var self__ = this;
var _343939__$1 = this;
return (new mentionmyfollowers.core.t343937(self__._,self__.loading_followers,meta343938__$1));
});

mentionmyfollowers.core.t343937.cljs$lang$type = true;

mentionmyfollowers.core.t343937.cljs$lang$ctorStr = "mentionmyfollowers.core/t343937";

mentionmyfollowers.core.t343937.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t343937");
});

mentionmyfollowers.core.__GT_t343937 = (function __GT_t343937(___$2,loading_followers__$1,meta343938){
return (new mentionmyfollowers.core.t343937(___$2,loading_followers__$1,meta343938));
});

}

return (new mentionmyfollowers.core.t343937(___$1,loading_followers,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.statistics = (function statistics(followers,owner){
if(typeof mentionmyfollowers.core.t343943 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t343943 = (function (owner,followers,statistics,meta343944){
this.owner = owner;
this.followers = followers;
this.statistics = statistics;
this.meta343944 = meta343944;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t343943.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t343943.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "alert alert-success"},"Loaded ",React.DOM.strong(null,cljs.core.count.call(null,self__.followers))," followers");
});

mentionmyfollowers.core.t343943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_343945){
var self__ = this;
var _343945__$1 = this;
return self__.meta343944;
});

mentionmyfollowers.core.t343943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_343945,meta343944__$1){
var self__ = this;
var _343945__$1 = this;
return (new mentionmyfollowers.core.t343943(self__.owner,self__.followers,self__.statistics,meta343944__$1));
});

mentionmyfollowers.core.t343943.cljs$lang$type = true;

mentionmyfollowers.core.t343943.cljs$lang$ctorStr = "mentionmyfollowers.core/t343943";

mentionmyfollowers.core.t343943.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t343943");
});

mentionmyfollowers.core.__GT_t343943 = (function __GT_t343943(owner__$1,followers__$1,statistics__$1,meta343944){
return (new mentionmyfollowers.core.t343943(owner__$1,followers__$1,statistics__$1,meta343944));
});

}

return (new mentionmyfollowers.core.t343943(owner,followers,statistics,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.selection_form = (function selection_form(selection,owner){
if(typeof mentionmyfollowers.core.t343951 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t343951 = (function (owner,selection,selection_form,meta343952){
this.owner = owner;
this.selection = selection;
this.selection_form = selection_form;
this.meta343952 = meta343952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t343951.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t343951.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-from"},"From"),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__343946_SHARP_){
return om.core.update_BANG_.call(null,self__.selection,new cljs.core.Keyword(null,"from","from",1815293044),p1__343946_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(self__.selection), "id": "selection-from", "className": "form-control", "type": "text"})),React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-to"},"To"),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__343947_SHARP_){
return om.core.update_BANG_.call(null,self__.selection,new cljs.core.Keyword(null,"to","to",192099007),p1__343947_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(self__.selection), "id": "selection-to", "className": "form-control", "type": "text"})));
});

mentionmyfollowers.core.t343951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_343953){
var self__ = this;
var _343953__$1 = this;
return self__.meta343952;
});

mentionmyfollowers.core.t343951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_343953,meta343952__$1){
var self__ = this;
var _343953__$1 = this;
return (new mentionmyfollowers.core.t343951(self__.owner,self__.selection,self__.selection_form,meta343952__$1));
});

mentionmyfollowers.core.t343951.cljs$lang$type = true;

mentionmyfollowers.core.t343951.cljs$lang$ctorStr = "mentionmyfollowers.core/t343951";

mentionmyfollowers.core.t343951.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t343951");
});

mentionmyfollowers.core.__GT_t343951 = (function __GT_t343951(owner__$1,selection__$1,selection_form__$1,meta343952){
return (new mentionmyfollowers.core.t343951(owner__$1,selection__$1,selection_form__$1,meta343952));
});

}

return (new mentionmyfollowers.core.t343951(owner,selection,selection_form,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.update_selection = (function update_selection(p__343954,idx){
var map__343956 = p__343954;
var map__343956__$1 = ((cljs.core.seq_QMARK_.call(null,map__343956))?cljs.core.apply.call(null,cljs.core.hash_map,map__343956):map__343956);
var selection = map__343956__$1;
var to = cljs.core.get.call(null,map__343956__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__343956__$1,new cljs.core.Keyword(null,"from","from",1815293044));
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
mentionmyfollowers.core.is_selected_QMARK_ = (function is_selected_QMARK_(i,p__343957){
var map__343959 = p__343957;
var map__343959__$1 = ((cljs.core.seq_QMARK_.call(null,map__343959))?cljs.core.apply.call(null,cljs.core.hash_map,map__343959):map__343959);
var to = cljs.core.get.call(null,map__343959__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__343959__$1,new cljs.core.Keyword(null,"from","from",1815293044));
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
mentionmyfollowers.core.follower_item = (function follower_item(followers_and_selection,owner,p__343960){
var map__343965 = p__343960;
var map__343965__$1 = ((cljs.core.seq_QMARK_.call(null,map__343965))?cljs.core.apply.call(null,cljs.core.hash_map,map__343965):map__343965);
var idx = cljs.core.get.call(null,map__343965__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(typeof mentionmyfollowers.core.t343966 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t343966 = (function (idx,map__343965,p__343960,owner,followers_and_selection,follower_item,meta343967){
this.idx = idx;
this.map__343965 = map__343965;
this.p__343960 = p__343960;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.follower_item = follower_item;
this.meta343967 = meta343967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t343966.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t343966.prototype.om$core$IRender$render$arity$1 = ((function (map__343965,map__343965__$1,idx){
return (function (_){
var self__ = this;
var ___$1 = this;
var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var selection = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var is_this_selected_QMARK_ = mentionmyfollowers.core.is_selected_QMARK_.call(null,self__.idx,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection));
var on_click = ((function (followers,selection,is_this_selected_QMARK_,___$1,map__343965,map__343965__$1,idx){
return (function (e){
e.preventDefault();

return om.core.transact_BANG_.call(null,self__.followers_and_selection,new cljs.core.Keyword(null,"selection","selection",975998651),((function (followers,selection,is_this_selected_QMARK_,___$1,map__343965,map__343965__$1,idx){
return (function (s){
return mentionmyfollowers.core.update_selection.call(null,s,self__.idx);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__343965,map__343965__$1,idx))
);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__343965,map__343965__$1,idx))
;
return React.DOM.a({"onClick": on_click, "className": [cljs.core.str("list-group-item"),cljs.core.str((cljs.core.truth_(is_this_selected_QMARK_)?" active":null))].join(''), "href": "#"},cljs.core.get.call(null,followers,self__.idx));
});})(map__343965,map__343965__$1,idx))
;

mentionmyfollowers.core.t343966.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__343965,map__343965__$1,idx){
return (function (_343968){
var self__ = this;
var _343968__$1 = this;
return self__.meta343967;
});})(map__343965,map__343965__$1,idx))
;

mentionmyfollowers.core.t343966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__343965,map__343965__$1,idx){
return (function (_343968,meta343967__$1){
var self__ = this;
var _343968__$1 = this;
return (new mentionmyfollowers.core.t343966(self__.idx,self__.map__343965,self__.p__343960,self__.owner,self__.followers_and_selection,self__.follower_item,meta343967__$1));
});})(map__343965,map__343965__$1,idx))
;

mentionmyfollowers.core.t343966.cljs$lang$type = true;

mentionmyfollowers.core.t343966.cljs$lang$ctorStr = "mentionmyfollowers.core/t343966";

mentionmyfollowers.core.t343966.cljs$lang$ctorPrWriter = ((function (map__343965,map__343965__$1,idx){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t343966");
});})(map__343965,map__343965__$1,idx))
;

mentionmyfollowers.core.__GT_t343966 = ((function (map__343965,map__343965__$1,idx){
return (function __GT_t343966(idx__$1,map__343965__$2,p__343960__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta343967){
return (new mentionmyfollowers.core.t343966(idx__$1,map__343965__$2,p__343960__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta343967));
});})(map__343965,map__343965__$1,idx))
;

}

return (new mentionmyfollowers.core.t343966(idx,map__343965__$1,p__343960,owner,followers_and_selection,follower_item,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers_list = (function select_followers_list(followers_and_selection,owner){
if(typeof mentionmyfollowers.core.t343973 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t343973 = (function (owner,followers_and_selection,select_followers_list,meta343974){
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers_list = select_followers_list;
this.meta343974 = meta343974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t343973.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t343973.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"className": "list-group"},(function (){var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
return cljs.core.map.call(null,((function (followers,___$1){
return (function (p1__343969_SHARP_){
return om.core.build.call(null,mentionmyfollowers.core.follower_item,self__.followers_and_selection,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),p1__343969_SHARP_], null)], null));
});})(followers,___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,followers)));
})()),om.core.build.call(null,mentionmyfollowers.core.selection_form,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection)));
});

mentionmyfollowers.core.t343973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_343975){
var self__ = this;
var _343975__$1 = this;
return self__.meta343974;
});

mentionmyfollowers.core.t343973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_343975,meta343974__$1){
var self__ = this;
var _343975__$1 = this;
return (new mentionmyfollowers.core.t343973(self__.owner,self__.followers_and_selection,self__.select_followers_list,meta343974__$1));
});

mentionmyfollowers.core.t343973.cljs$lang$type = true;

mentionmyfollowers.core.t343973.cljs$lang$ctorStr = "mentionmyfollowers.core/t343973";

mentionmyfollowers.core.t343973.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t343973");
});

mentionmyfollowers.core.__GT_t343973 = (function __GT_t343973(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta343974){
return (new mentionmyfollowers.core.t343973(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta343974));
});

}

return (new mentionmyfollowers.core.t343973(owner,followers_and_selection,select_followers_list,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers = (function select_followers(followers_and_selection,owner,p__343976){
var map__343981 = p__343976;
var map__343981__$1 = ((cljs.core.seq_QMARK_.call(null,map__343981))?cljs.core.apply.call(null,cljs.core.hash_map,map__343981):map__343981);
var on_go = cljs.core.get.call(null,map__343981__$1,new cljs.core.Keyword(null,"on-go","on-go",-216489221));
var on_cancel = cljs.core.get.call(null,map__343981__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
if(typeof mentionmyfollowers.core.t343982 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t343982 = (function (on_cancel,on_go,map__343981,p__343976,owner,followers_and_selection,select_followers,meta343983){
this.on_cancel = on_cancel;
this.on_go = on_go;
this.map__343981 = map__343981;
this.p__343976 = p__343976;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers = select_followers;
this.meta343983 = meta343983;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t343982.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t343982.prototype.om$core$IRender$render$arity$1 = ((function (map__343981,map__343981__$1,on_go,on_cancel){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,mentionmyfollowers.core.statistics,new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection)),om.core.build.call(null,mentionmyfollowers.core.select_followers_list,self__.followers_and_selection),React.DOM.button({"onClick": self__.on_go, "className": "btn btn-primary"},"Go"),React.DOM.button({"onClick": self__.on_cancel, "className": "btn btn-danger"},"Cancel"));
});})(map__343981,map__343981__$1,on_go,on_cancel))
;

mentionmyfollowers.core.t343982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__343981,map__343981__$1,on_go,on_cancel){
return (function (_343984){
var self__ = this;
var _343984__$1 = this;
return self__.meta343983;
});})(map__343981,map__343981__$1,on_go,on_cancel))
;

mentionmyfollowers.core.t343982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__343981,map__343981__$1,on_go,on_cancel){
return (function (_343984,meta343983__$1){
var self__ = this;
var _343984__$1 = this;
return (new mentionmyfollowers.core.t343982(self__.on_cancel,self__.on_go,self__.map__343981,self__.p__343976,self__.owner,self__.followers_and_selection,self__.select_followers,meta343983__$1));
});})(map__343981,map__343981__$1,on_go,on_cancel))
;

mentionmyfollowers.core.t343982.cljs$lang$type = true;

mentionmyfollowers.core.t343982.cljs$lang$ctorStr = "mentionmyfollowers.core/t343982";

mentionmyfollowers.core.t343982.cljs$lang$ctorPrWriter = ((function (map__343981,map__343981__$1,on_go,on_cancel){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t343982");
});})(map__343981,map__343981__$1,on_go,on_cancel))
;

mentionmyfollowers.core.__GT_t343982 = ((function (map__343981,map__343981__$1,on_go,on_cancel){
return (function __GT_t343982(on_cancel__$1,on_go__$1,map__343981__$2,p__343976__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta343983){
return (new mentionmyfollowers.core.t343982(on_cancel__$1,on_go__$1,map__343981__$2,p__343976__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta343983));
});})(map__343981,map__343981__$1,on_go,on_cancel))
;

}

return (new mentionmyfollowers.core.t343982(on_cancel,on_go,map__343981__$1,p__343976,owner,followers_and_selection,select_followers,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* The main application component
*/
mentionmyfollowers.core.application = (function application(data,owner){
if(typeof mentionmyfollowers.core.t343992 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t343992 = (function (owner,data,application,meta343993){
this.owner = owner;
this.data = data;
this.application = application;
this.meta343993 = meta343993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t343992.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t343992.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var handle_get_followers = ((function (___$1){
return (function (accounts){
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"loading-followers","loading-followers",1692268659));

return mentionmyfollowers.data.load_followers.call(null,((function (___$1){
return (function (followers){
cljs.core.println.call(null,"Received followers",followers);

om.core.update_BANG_.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188),new cljs.core.Keyword(null,"followers","followers",1992141885)], null),cljs.core.vec.call(null,followers));

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"select-followers","select-followers",-1421776266));
});})(___$1))
,((function (___$1){
return (function (error){
mentionmyfollowers.core.report_error_BANG_.call(null,error);

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534));
});})(___$1))
);
});})(___$1))
;
return React.DOM.div({"className": "container"},(function (){var pred__343995 = cljs.core._EQ_;
var expr__343996 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__343995.call(null,new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534),expr__343996))){
return om.core.build.call(null,mentionmyfollowers.core.accounts_form,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518),handle_get_followers], null)], null));
} else {
if(cljs.core.truth_(pred__343995.call(null,new cljs.core.Keyword(null,"loading-followers","loading-followers",1692268659),expr__343996))){
return om.core.build.call(null,mentionmyfollowers.core.loading_followers,null);
} else {
if(cljs.core.truth_(pred__343995.call(null,new cljs.core.Keyword(null,"select-followers","select-followers",-1421776266),expr__343996))){
return om.core.build.call(null,mentionmyfollowers.core.select_followers,new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (pred__343995,expr__343996,handle_get_followers,___$1){
return (function (e){
cljs.core.println.call(null,"Cancel in select-followers view");

e.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534));
});})(pred__343995,expr__343996,handle_get_followers,___$1))
,new cljs.core.Keyword(null,"on-go","on-go",-216489221),((function (pred__343995,expr__343996,handle_get_followers,___$1){
return (function (e){
cljs.core.println.call(null,"Go");

e.preventDefault();

return mentionmyfollowers.core.create_comments.call(null);
});})(pred__343995,expr__343996,handle_get_followers,___$1))
], null)], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__343996)].join('')));
}
}
}
})());
});

mentionmyfollowers.core.t343992.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t343992.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534)], null);
});

mentionmyfollowers.core.t343992.prototype.om$core$IWillMount$ = true;

mentionmyfollowers.core.t343992.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - Will Mount");

return mentionmyfollowers.core.read_user_id.call(null,((function (___$1){
return (function (p1__343985_SHARP_){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),((function (___$1){
return (function (user){
return cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"user-id","user-id",-206822291),p1__343985_SHARP_);
});})(___$1))
);
});})(___$1))
);
});

mentionmyfollowers.core.t343992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_343994){
var self__ = this;
var _343994__$1 = this;
return self__.meta343993;
});

mentionmyfollowers.core.t343992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_343994,meta343993__$1){
var self__ = this;
var _343994__$1 = this;
return (new mentionmyfollowers.core.t343992(self__.owner,self__.data,self__.application,meta343993__$1));
});

mentionmyfollowers.core.t343992.cljs$lang$type = true;

mentionmyfollowers.core.t343992.cljs$lang$ctorStr = "mentionmyfollowers.core/t343992";

mentionmyfollowers.core.t343992.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t343992");
});

mentionmyfollowers.core.__GT_t343992 = (function __GT_t343992(owner__$1,data__$1,application__$1,meta343993){
return (new mentionmyfollowers.core.t343992(owner__$1,data__$1,application__$1,meta343993));
});

}

return (new mentionmyfollowers.core.t343992(owner,data,application,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.application,mentionmyfollowers.data.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
