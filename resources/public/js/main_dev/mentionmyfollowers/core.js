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
mentionmyfollowers.core.report_error_BANG_ = (function report_error_BANG_(p__420463){
var map__420465 = p__420463;
var map__420465__$1 = ((cljs.core.seq_QMARK_.call(null,map__420465))?cljs.core.apply.call(null,cljs.core.hash_map,map__420465):map__420465);
var error = map__420465__$1;
var failure = cljs.core.get.call(null,map__420465__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
var status_text = cljs.core.get.call(null,map__420465__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var status = cljs.core.get.call(null,map__420465__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
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
mentionmyfollowers.core.show_user_id = (function show_user_id(p__420466,owner){
var map__420471 = p__420466;
var map__420471__$1 = ((cljs.core.seq_QMARK_.call(null,map__420471))?cljs.core.apply.call(null,cljs.core.hash_map,map__420471):map__420471);
var user_id = cljs.core.get.call(null,map__420471__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t420472 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t420472 = (function (user_id,map__420471,owner,p__420466,show_user_id,meta420473){
this.user_id = user_id;
this.map__420471 = map__420471;
this.owner = owner;
this.p__420466 = p__420466;
this.show_user_id = show_user_id;
this.meta420473 = meta420473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t420472.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t420472.prototype.om$core$IRender$render$arity$1 = ((function (map__420471,map__420471__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__420471,map__420471__$1,user_id))
;

mentionmyfollowers.core.t420472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__420471,map__420471__$1,user_id){
return (function (_420474){
var self__ = this;
var _420474__$1 = this;
return self__.meta420473;
});})(map__420471,map__420471__$1,user_id))
;

mentionmyfollowers.core.t420472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__420471,map__420471__$1,user_id){
return (function (_420474,meta420473__$1){
var self__ = this;
var _420474__$1 = this;
return (new mentionmyfollowers.core.t420472(self__.user_id,self__.map__420471,self__.owner,self__.p__420466,self__.show_user_id,meta420473__$1));
});})(map__420471,map__420471__$1,user_id))
;

mentionmyfollowers.core.t420472.cljs$lang$type = true;

mentionmyfollowers.core.t420472.cljs$lang$ctorStr = "mentionmyfollowers.core/t420472";

mentionmyfollowers.core.t420472.cljs$lang$ctorPrWriter = ((function (map__420471,map__420471__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t420472");
});})(map__420471,map__420471__$1,user_id))
;

mentionmyfollowers.core.__GT_t420472 = ((function (map__420471,map__420471__$1,user_id){
return (function __GT_t420472(user_id__$1,map__420471__$2,owner__$1,p__420466__$1,show_user_id__$1,meta420473){
return (new mentionmyfollowers.core.t420472(user_id__$1,map__420471__$2,owner__$1,p__420466__$1,show_user_id__$1,meta420473));
});})(map__420471,map__420471__$1,user_id))
;

}

return (new mentionmyfollowers.core.t420472(user_id,map__420471__$1,owner,p__420466,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* A form to enter the accounts whose followers you want to mention
*/
mentionmyfollowers.core.accounts_form = (function accounts_form(accounts,owner,p__420475){
var map__420482 = p__420475;
var map__420482__$1 = ((cljs.core.seq_QMARK_.call(null,map__420482))?cljs.core.apply.call(null,cljs.core.hash_map,map__420482):map__420482);
var on_get_followers = cljs.core.get.call(null,map__420482__$1,new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518));
if(typeof mentionmyfollowers.core.t420483 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t420483 = (function (on_get_followers,map__420482,p__420475,owner,accounts,accounts_form,meta420484){
this.on_get_followers = on_get_followers;
this.map__420482 = map__420482;
this.p__420475 = p__420475;
this.owner = owner;
this.accounts = accounts;
this.accounts_form = accounts_form;
this.meta420484 = meta420484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t420483.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t420483.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__420482,map__420482__$1,on_get_followers){
return (function (_,p__420486){
var self__ = this;
var map__420487 = p__420486;
var map__420487__$1 = ((cljs.core.seq_QMARK_.call(null,map__420487))?cljs.core.apply.call(null,cljs.core.hash_map,map__420487):map__420487);
var text = cljs.core.get.call(null,map__420487__$1,new cljs.core.Keyword(null,"accounts","accounts",-935308676));
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "accounts-input"},"Accounts:"),om.dom.textarea.call(null,{"onChange": ((function (___$1,map__420487,map__420487__$1,text,map__420482,map__420482__$1,on_get_followers){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"accounts","accounts",-935308676),e.target.value);
});})(___$1,map__420487,map__420487__$1,text,map__420482,map__420482__$1,on_get_followers))
, "value": text, "rows": "11", "className": "form-control", "id": "accounts-input"})),React.DOM.button({"onClick": ((function (___$1,map__420487,map__420487__$1,text,map__420482,map__420482__$1,on_get_followers){
return (function (e){
e.preventDefault();

cljs.core.println.call(null,"Get followers button clicked");

var new_accounts = clojure.string.split.call(null,text,/ /);
om.core.update_BANG_.call(null,self__.accounts,new_accounts);

return self__.on_get_followers.call(null,new_accounts);
});})(___$1,map__420487,map__420487__$1,text,map__420482,map__420482__$1,on_get_followers))
, "className": "btn btn-primary"},"Get Followers"));
});})(map__420482,map__420482__$1,on_get_followers))
;

mentionmyfollowers.core.t420483.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t420483.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__420482,map__420482__$1,on_get_followers){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),clojure.string.join.call(null," ",self__.accounts)], null);
});})(map__420482,map__420482__$1,on_get_followers))
;

mentionmyfollowers.core.t420483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__420482,map__420482__$1,on_get_followers){
return (function (_420485){
var self__ = this;
var _420485__$1 = this;
return self__.meta420484;
});})(map__420482,map__420482__$1,on_get_followers))
;

mentionmyfollowers.core.t420483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__420482,map__420482__$1,on_get_followers){
return (function (_420485,meta420484__$1){
var self__ = this;
var _420485__$1 = this;
return (new mentionmyfollowers.core.t420483(self__.on_get_followers,self__.map__420482,self__.p__420475,self__.owner,self__.accounts,self__.accounts_form,meta420484__$1));
});})(map__420482,map__420482__$1,on_get_followers))
;

mentionmyfollowers.core.t420483.cljs$lang$type = true;

mentionmyfollowers.core.t420483.cljs$lang$ctorStr = "mentionmyfollowers.core/t420483";

mentionmyfollowers.core.t420483.cljs$lang$ctorPrWriter = ((function (map__420482,map__420482__$1,on_get_followers){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t420483");
});})(map__420482,map__420482__$1,on_get_followers))
;

mentionmyfollowers.core.__GT_t420483 = ((function (map__420482,map__420482__$1,on_get_followers){
return (function __GT_t420483(on_get_followers__$1,map__420482__$2,p__420475__$1,owner__$1,accounts__$1,accounts_form__$1,meta420484){
return (new mentionmyfollowers.core.t420483(on_get_followers__$1,map__420482__$2,p__420475__$1,owner__$1,accounts__$1,accounts_form__$1,meta420484));
});})(map__420482,map__420482__$1,on_get_followers))
;

}

return (new mentionmyfollowers.core.t420483(on_get_followers,map__420482__$1,p__420475,owner,accounts,accounts_form,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.loading_followers = (function loading_followers(_,___$1){
if(typeof mentionmyfollowers.core.t420491 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t420491 = (function (_,loading_followers,meta420492){
this._ = _;
this.loading_followers = loading_followers;
this.meta420492 = meta420492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t420491.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t420491.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return React.DOM.div({"className": "progress"},React.DOM.div({"style": {"width": "100%"}, "aria-valuemax": "100", "aria-valuemin": "0", "aria-valuenow": "100", "role": "progressbar", "className": "progress-bar progress-bar-striped active"}));
});

mentionmyfollowers.core.t420491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_420493){
var self__ = this;
var _420493__$1 = this;
return self__.meta420492;
});

mentionmyfollowers.core.t420491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_420493,meta420492__$1){
var self__ = this;
var _420493__$1 = this;
return (new mentionmyfollowers.core.t420491(self__._,self__.loading_followers,meta420492__$1));
});

mentionmyfollowers.core.t420491.cljs$lang$type = true;

mentionmyfollowers.core.t420491.cljs$lang$ctorStr = "mentionmyfollowers.core/t420491";

mentionmyfollowers.core.t420491.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t420491");
});

mentionmyfollowers.core.__GT_t420491 = (function __GT_t420491(___$2,loading_followers__$1,meta420492){
return (new mentionmyfollowers.core.t420491(___$2,loading_followers__$1,meta420492));
});

}

return (new mentionmyfollowers.core.t420491(___$1,loading_followers,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.statistics = (function statistics(followers,owner){
if(typeof mentionmyfollowers.core.t420497 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t420497 = (function (owner,followers,statistics,meta420498){
this.owner = owner;
this.followers = followers;
this.statistics = statistics;
this.meta420498 = meta420498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t420497.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t420497.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"className": "alert alert-success"},"Loaded ",React.DOM.strong(null,cljs.core.count.call(null,self__.followers))," followers");
});

mentionmyfollowers.core.t420497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_420499){
var self__ = this;
var _420499__$1 = this;
return self__.meta420498;
});

mentionmyfollowers.core.t420497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_420499,meta420498__$1){
var self__ = this;
var _420499__$1 = this;
return (new mentionmyfollowers.core.t420497(self__.owner,self__.followers,self__.statistics,meta420498__$1));
});

mentionmyfollowers.core.t420497.cljs$lang$type = true;

mentionmyfollowers.core.t420497.cljs$lang$ctorStr = "mentionmyfollowers.core/t420497";

mentionmyfollowers.core.t420497.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t420497");
});

mentionmyfollowers.core.__GT_t420497 = (function __GT_t420497(owner__$1,followers__$1,statistics__$1,meta420498){
return (new mentionmyfollowers.core.t420497(owner__$1,followers__$1,statistics__$1,meta420498));
});

}

return (new mentionmyfollowers.core.t420497(owner,followers,statistics,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.selection_form = (function selection_form(selection,owner){
if(typeof mentionmyfollowers.core.t420505 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t420505 = (function (owner,selection,selection_form,meta420506){
this.owner = owner;
this.selection = selection;
this.selection_form = selection_form;
this.meta420506 = meta420506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t420505.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t420505.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-from"},"From"),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__420500_SHARP_){
return om.core.update_BANG_.call(null,self__.selection,new cljs.core.Keyword(null,"from","from",1815293044),p1__420500_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(self__.selection), "id": "selection-from", "className": "form-control", "type": "text"})),React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-to"},"To"),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__420501_SHARP_){
return om.core.update_BANG_.call(null,self__.selection,new cljs.core.Keyword(null,"to","to",192099007),p1__420501_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(self__.selection), "id": "selection-to", "className": "form-control", "type": "text"})));
});

mentionmyfollowers.core.t420505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_420507){
var self__ = this;
var _420507__$1 = this;
return self__.meta420506;
});

mentionmyfollowers.core.t420505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_420507,meta420506__$1){
var self__ = this;
var _420507__$1 = this;
return (new mentionmyfollowers.core.t420505(self__.owner,self__.selection,self__.selection_form,meta420506__$1));
});

mentionmyfollowers.core.t420505.cljs$lang$type = true;

mentionmyfollowers.core.t420505.cljs$lang$ctorStr = "mentionmyfollowers.core/t420505";

mentionmyfollowers.core.t420505.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t420505");
});

mentionmyfollowers.core.__GT_t420505 = (function __GT_t420505(owner__$1,selection__$1,selection_form__$1,meta420506){
return (new mentionmyfollowers.core.t420505(owner__$1,selection__$1,selection_form__$1,meta420506));
});

}

return (new mentionmyfollowers.core.t420505(owner,selection,selection_form,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.update_selection = (function update_selection(p__420508,idx){
var map__420510 = p__420508;
var map__420510__$1 = ((cljs.core.seq_QMARK_.call(null,map__420510))?cljs.core.apply.call(null,cljs.core.hash_map,map__420510):map__420510);
var selection = map__420510__$1;
var to = cljs.core.get.call(null,map__420510__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__420510__$1,new cljs.core.Keyword(null,"from","from",1815293044));
cljs.core.println.call(null,"Setting selection",idx,"->",from,to);

if((from == null)){
return cljs.core.merge.call(null,selection,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),idx,new cljs.core.Keyword(null,"to","to",192099007),idx], null));
} else {
if((idx < from)){
return cljs.core.assoc.call(null,selection,new cljs.core.Keyword(null,"from","from",1815293044),idx);
} else {
if((idx > from)){
return cljs.core.assoc.call(null,selection,new cljs.core.Keyword(null,"to","to",192099007),idx);
} else {
return cljs.core.merge.call(null,selection,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null));

}
}
}
});
mentionmyfollowers.core.is_selected_QMARK_ = (function is_selected_QMARK_(i,p__420511){
var map__420513 = p__420511;
var map__420513__$1 = ((cljs.core.seq_QMARK_.call(null,map__420513))?cljs.core.apply.call(null,cljs.core.hash_map,map__420513):map__420513);
var to = cljs.core.get.call(null,map__420513__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__420513__$1,new cljs.core.Keyword(null,"from","from",1815293044));
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
mentionmyfollowers.core.follower_item = (function follower_item(followers_and_selection,owner,p__420514){
var map__420519 = p__420514;
var map__420519__$1 = ((cljs.core.seq_QMARK_.call(null,map__420519))?cljs.core.apply.call(null,cljs.core.hash_map,map__420519):map__420519);
var idx = cljs.core.get.call(null,map__420519__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(typeof mentionmyfollowers.core.t420520 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t420520 = (function (idx,map__420519,p__420514,owner,followers_and_selection,follower_item,meta420521){
this.idx = idx;
this.map__420519 = map__420519;
this.p__420514 = p__420514;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.follower_item = follower_item;
this.meta420521 = meta420521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t420520.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t420520.prototype.om$core$IRender$render$arity$1 = ((function (map__420519,map__420519__$1,idx){
return (function (_){
var self__ = this;
var ___$1 = this;
var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var selection = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var is_this_selected_QMARK_ = mentionmyfollowers.core.is_selected_QMARK_.call(null,self__.idx,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection));
var on_click = ((function (followers,selection,is_this_selected_QMARK_,___$1,map__420519,map__420519__$1,idx){
return (function (e){
e.preventDefault();

return om.core.transact_BANG_.call(null,self__.followers_and_selection,new cljs.core.Keyword(null,"selection","selection",975998651),((function (followers,selection,is_this_selected_QMARK_,___$1,map__420519,map__420519__$1,idx){
return (function (s){
return mentionmyfollowers.core.update_selection.call(null,s,self__.idx);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__420519,map__420519__$1,idx))
);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__420519,map__420519__$1,idx))
;
return React.DOM.a({"onClick": on_click, "className": [cljs.core.str("list-group-item"),cljs.core.str((cljs.core.truth_(is_this_selected_QMARK_)?" active":null))].join(''), "href": "#"},cljs.core.get.call(null,followers,self__.idx));
});})(map__420519,map__420519__$1,idx))
;

mentionmyfollowers.core.t420520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__420519,map__420519__$1,idx){
return (function (_420522){
var self__ = this;
var _420522__$1 = this;
return self__.meta420521;
});})(map__420519,map__420519__$1,idx))
;

mentionmyfollowers.core.t420520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__420519,map__420519__$1,idx){
return (function (_420522,meta420521__$1){
var self__ = this;
var _420522__$1 = this;
return (new mentionmyfollowers.core.t420520(self__.idx,self__.map__420519,self__.p__420514,self__.owner,self__.followers_and_selection,self__.follower_item,meta420521__$1));
});})(map__420519,map__420519__$1,idx))
;

mentionmyfollowers.core.t420520.cljs$lang$type = true;

mentionmyfollowers.core.t420520.cljs$lang$ctorStr = "mentionmyfollowers.core/t420520";

mentionmyfollowers.core.t420520.cljs$lang$ctorPrWriter = ((function (map__420519,map__420519__$1,idx){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t420520");
});})(map__420519,map__420519__$1,idx))
;

mentionmyfollowers.core.__GT_t420520 = ((function (map__420519,map__420519__$1,idx){
return (function __GT_t420520(idx__$1,map__420519__$2,p__420514__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta420521){
return (new mentionmyfollowers.core.t420520(idx__$1,map__420519__$2,p__420514__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta420521));
});})(map__420519,map__420519__$1,idx))
;

}

return (new mentionmyfollowers.core.t420520(idx,map__420519__$1,p__420514,owner,followers_and_selection,follower_item,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers_list = (function select_followers_list(followers_and_selection,owner){
if(typeof mentionmyfollowers.core.t420527 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t420527 = (function (owner,followers_and_selection,select_followers_list,meta420528){
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers_list = select_followers_list;
this.meta420528 = meta420528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t420527.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t420527.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"className": "list-group"},(function (){var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
return cljs.core.map.call(null,((function (followers,___$1){
return (function (p1__420523_SHARP_){
return om.core.build.call(null,mentionmyfollowers.core.follower_item,self__.followers_and_selection,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),p1__420523_SHARP_], null)], null));
});})(followers,___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,followers)));
})()),om.core.build.call(null,mentionmyfollowers.core.selection_form,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection)));
});

mentionmyfollowers.core.t420527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_420529){
var self__ = this;
var _420529__$1 = this;
return self__.meta420528;
});

mentionmyfollowers.core.t420527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_420529,meta420528__$1){
var self__ = this;
var _420529__$1 = this;
return (new mentionmyfollowers.core.t420527(self__.owner,self__.followers_and_selection,self__.select_followers_list,meta420528__$1));
});

mentionmyfollowers.core.t420527.cljs$lang$type = true;

mentionmyfollowers.core.t420527.cljs$lang$ctorStr = "mentionmyfollowers.core/t420527";

mentionmyfollowers.core.t420527.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t420527");
});

mentionmyfollowers.core.__GT_t420527 = (function __GT_t420527(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta420528){
return (new mentionmyfollowers.core.t420527(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta420528));
});

}

return (new mentionmyfollowers.core.t420527(owner,followers_and_selection,select_followers_list,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers = (function select_followers(followers_and_selection,owner,p__420530){
var map__420535 = p__420530;
var map__420535__$1 = ((cljs.core.seq_QMARK_.call(null,map__420535))?cljs.core.apply.call(null,cljs.core.hash_map,map__420535):map__420535);
var on_go = cljs.core.get.call(null,map__420535__$1,new cljs.core.Keyword(null,"on-go","on-go",-216489221));
var on_cancel = cljs.core.get.call(null,map__420535__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
if(typeof mentionmyfollowers.core.t420536 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t420536 = (function (on_cancel,on_go,map__420535,p__420530,owner,followers_and_selection,select_followers,meta420537){
this.on_cancel = on_cancel;
this.on_go = on_go;
this.map__420535 = map__420535;
this.p__420530 = p__420530;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers = select_followers;
this.meta420537 = meta420537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t420536.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t420536.prototype.om$core$IRender$render$arity$1 = ((function (map__420535,map__420535__$1,on_go,on_cancel){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,mentionmyfollowers.core.statistics,new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection)),om.core.build.call(null,mentionmyfollowers.core.select_followers_list,self__.followers_and_selection),React.DOM.button({"onClick": self__.on_go, "className": "btn btn-primary"},"Go"),React.DOM.button({"onClick": self__.on_cancel, "className": "btn btn-danger"},"Cancel"));
});})(map__420535,map__420535__$1,on_go,on_cancel))
;

mentionmyfollowers.core.t420536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__420535,map__420535__$1,on_go,on_cancel){
return (function (_420538){
var self__ = this;
var _420538__$1 = this;
return self__.meta420537;
});})(map__420535,map__420535__$1,on_go,on_cancel))
;

mentionmyfollowers.core.t420536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__420535,map__420535__$1,on_go,on_cancel){
return (function (_420538,meta420537__$1){
var self__ = this;
var _420538__$1 = this;
return (new mentionmyfollowers.core.t420536(self__.on_cancel,self__.on_go,self__.map__420535,self__.p__420530,self__.owner,self__.followers_and_selection,self__.select_followers,meta420537__$1));
});})(map__420535,map__420535__$1,on_go,on_cancel))
;

mentionmyfollowers.core.t420536.cljs$lang$type = true;

mentionmyfollowers.core.t420536.cljs$lang$ctorStr = "mentionmyfollowers.core/t420536";

mentionmyfollowers.core.t420536.cljs$lang$ctorPrWriter = ((function (map__420535,map__420535__$1,on_go,on_cancel){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t420536");
});})(map__420535,map__420535__$1,on_go,on_cancel))
;

mentionmyfollowers.core.__GT_t420536 = ((function (map__420535,map__420535__$1,on_go,on_cancel){
return (function __GT_t420536(on_cancel__$1,on_go__$1,map__420535__$2,p__420530__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta420537){
return (new mentionmyfollowers.core.t420536(on_cancel__$1,on_go__$1,map__420535__$2,p__420530__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta420537));
});})(map__420535,map__420535__$1,on_go,on_cancel))
;

}

return (new mentionmyfollowers.core.t420536(on_cancel,on_go,map__420535__$1,p__420530,owner,followers_and_selection,select_followers,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* The main application component
*/
mentionmyfollowers.core.application = (function application(data,owner){
if(typeof mentionmyfollowers.core.t420546 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t420546 = (function (owner,data,application,meta420547){
this.owner = owner;
this.data = data;
this.application = application;
this.meta420547 = meta420547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t420546.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t420546.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
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
return React.DOM.div({"className": "container"},(function (){var pred__420549 = cljs.core._EQ_;
var expr__420550 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__420549.call(null,new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534),expr__420550))){
return om.core.build.call(null,mentionmyfollowers.core.accounts_form,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518),handle_get_followers], null)], null));
} else {
if(cljs.core.truth_(pred__420549.call(null,new cljs.core.Keyword(null,"loading-followers","loading-followers",1692268659),expr__420550))){
return om.core.build.call(null,mentionmyfollowers.core.loading_followers,null);
} else {
if(cljs.core.truth_(pred__420549.call(null,new cljs.core.Keyword(null,"select-followers","select-followers",-1421776266),expr__420550))){
return om.core.build.call(null,mentionmyfollowers.core.select_followers,new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (pred__420549,expr__420550,handle_get_followers,___$1){
return (function (e){
cljs.core.println.call(null,"Cancel in select-followers view");

e.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534));
});})(pred__420549,expr__420550,handle_get_followers,___$1))
,new cljs.core.Keyword(null,"on-go","on-go",-216489221),((function (pred__420549,expr__420550,handle_get_followers,___$1){
return (function (e){
cljs.core.println.call(null,"Go");

e.preventDefault();

return mentionmyfollowers.core.create_comments.call(null);
});})(pred__420549,expr__420550,handle_get_followers,___$1))
], null)], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__420550)].join('')));
}
}
}
})());
});

mentionmyfollowers.core.t420546.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t420546.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534)], null);
});

mentionmyfollowers.core.t420546.prototype.om$core$IWillMount$ = true;

mentionmyfollowers.core.t420546.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - Will Mount");

return mentionmyfollowers.core.read_user_id.call(null,((function (___$1){
return (function (p1__420539_SHARP_){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),((function (___$1){
return (function (user){
return cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"user-id","user-id",-206822291),p1__420539_SHARP_);
});})(___$1))
);
});})(___$1))
);
});

mentionmyfollowers.core.t420546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_420548){
var self__ = this;
var _420548__$1 = this;
return self__.meta420547;
});

mentionmyfollowers.core.t420546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_420548,meta420547__$1){
var self__ = this;
var _420548__$1 = this;
return (new mentionmyfollowers.core.t420546(self__.owner,self__.data,self__.application,meta420547__$1));
});

mentionmyfollowers.core.t420546.cljs$lang$type = true;

mentionmyfollowers.core.t420546.cljs$lang$ctorStr = "mentionmyfollowers.core/t420546";

mentionmyfollowers.core.t420546.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t420546");
});

mentionmyfollowers.core.__GT_t420546 = (function __GT_t420546(owner__$1,data__$1,application__$1,meta420547){
return (new mentionmyfollowers.core.t420546(owner__$1,data__$1,application__$1,meta420547));
});

}

return (new mentionmyfollowers.core.t420546(owner,data,application,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.application,mentionmyfollowers.data.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
