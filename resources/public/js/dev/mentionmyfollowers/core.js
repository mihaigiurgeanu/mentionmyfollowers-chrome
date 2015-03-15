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
mentionmyfollowers.core.show_user_id = (function show_user_id(p__274029,owner){
var map__274034 = p__274029;
var map__274034__$1 = ((cljs.core.seq_QMARK_.call(null,map__274034))?cljs.core.apply.call(null,cljs.core.hash_map,map__274034):map__274034);
var user_id = cljs.core.get.call(null,map__274034__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t274035 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t274035 = (function (user_id,map__274034,owner,p__274029,show_user_id,meta274036){
this.user_id = user_id;
this.map__274034 = map__274034;
this.owner = owner;
this.p__274029 = p__274029;
this.show_user_id = show_user_id;
this.meta274036 = meta274036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t274035.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t274035.prototype.om$core$IRender$render$arity$1 = ((function (map__274034,map__274034__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__274034,map__274034__$1,user_id))
;

mentionmyfollowers.core.t274035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__274034,map__274034__$1,user_id){
return (function (_274037){
var self__ = this;
var _274037__$1 = this;
return self__.meta274036;
});})(map__274034,map__274034__$1,user_id))
;

mentionmyfollowers.core.t274035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__274034,map__274034__$1,user_id){
return (function (_274037,meta274036__$1){
var self__ = this;
var _274037__$1 = this;
return (new mentionmyfollowers.core.t274035(self__.user_id,self__.map__274034,self__.owner,self__.p__274029,self__.show_user_id,meta274036__$1));
});})(map__274034,map__274034__$1,user_id))
;

mentionmyfollowers.core.t274035.cljs$lang$type = true;

mentionmyfollowers.core.t274035.cljs$lang$ctorStr = "mentionmyfollowers.core/t274035";

mentionmyfollowers.core.t274035.cljs$lang$ctorPrWriter = ((function (map__274034,map__274034__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t274035");
});})(map__274034,map__274034__$1,user_id))
;

mentionmyfollowers.core.__GT_t274035 = ((function (map__274034,map__274034__$1,user_id){
return (function __GT_t274035(user_id__$1,map__274034__$2,owner__$1,p__274029__$1,show_user_id__$1,meta274036){
return (new mentionmyfollowers.core.t274035(user_id__$1,map__274034__$2,owner__$1,p__274029__$1,show_user_id__$1,meta274036));
});})(map__274034,map__274034__$1,user_id))
;

}

return (new mentionmyfollowers.core.t274035(user_id,map__274034__$1,owner,p__274029,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* A form to enter the accounts whose followers you want to mention
*/
mentionmyfollowers.core.accounts_form = (function accounts_form(accounts,owner,p__274038){
var map__274045 = p__274038;
var map__274045__$1 = ((cljs.core.seq_QMARK_.call(null,map__274045))?cljs.core.apply.call(null,cljs.core.hash_map,map__274045):map__274045);
var on_get_followers = cljs.core.get.call(null,map__274045__$1,new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518));
if(typeof mentionmyfollowers.core.t274046 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t274046 = (function (on_get_followers,map__274045,p__274038,owner,accounts,accounts_form,meta274047){
this.on_get_followers = on_get_followers;
this.map__274045 = map__274045;
this.p__274038 = p__274038;
this.owner = owner;
this.accounts = accounts;
this.accounts_form = accounts_form;
this.meta274047 = meta274047;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t274046.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t274046.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__274045,map__274045__$1,on_get_followers){
return (function (_,p__274049){
var self__ = this;
var map__274050 = p__274049;
var map__274050__$1 = ((cljs.core.seq_QMARK_.call(null,map__274050))?cljs.core.apply.call(null,cljs.core.hash_map,map__274050):map__274050);
var text = cljs.core.get.call(null,map__274050__$1,new cljs.core.Keyword(null,"accounts","accounts",-935308676));
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "accounts-input"},"Accounts:"),om.dom.textarea.call(null,{"onChange": ((function (___$1,map__274050,map__274050__$1,text,map__274045,map__274045__$1,on_get_followers){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"accounts","accounts",-935308676),e.target.value);
});})(___$1,map__274050,map__274050__$1,text,map__274045,map__274045__$1,on_get_followers))
, "value": text, "rows": "3", "className": "form-control", "id": "accounts-input"})),React.DOM.button({"onClick": ((function (___$1,map__274050,map__274050__$1,text,map__274045,map__274045__$1,on_get_followers){
return (function (e){
e.preventDefault();

cljs.core.println.call(null,"Get followers button clicked");

var new_accounts = clojure.string.split.call(null,text,/ /);
om.core.update_BANG_.call(null,self__.accounts,new_accounts);

return self__.on_get_followers.call(null,new_accounts);
});})(___$1,map__274050,map__274050__$1,text,map__274045,map__274045__$1,on_get_followers))
, "className": "btn btn-primary"},"Get Followers"));
});})(map__274045,map__274045__$1,on_get_followers))
;

mentionmyfollowers.core.t274046.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t274046.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__274045,map__274045__$1,on_get_followers){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),clojure.string.join.call(null," ",self__.accounts)], null);
});})(map__274045,map__274045__$1,on_get_followers))
;

mentionmyfollowers.core.t274046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__274045,map__274045__$1,on_get_followers){
return (function (_274048){
var self__ = this;
var _274048__$1 = this;
return self__.meta274047;
});})(map__274045,map__274045__$1,on_get_followers))
;

mentionmyfollowers.core.t274046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__274045,map__274045__$1,on_get_followers){
return (function (_274048,meta274047__$1){
var self__ = this;
var _274048__$1 = this;
return (new mentionmyfollowers.core.t274046(self__.on_get_followers,self__.map__274045,self__.p__274038,self__.owner,self__.accounts,self__.accounts_form,meta274047__$1));
});})(map__274045,map__274045__$1,on_get_followers))
;

mentionmyfollowers.core.t274046.cljs$lang$type = true;

mentionmyfollowers.core.t274046.cljs$lang$ctorStr = "mentionmyfollowers.core/t274046";

mentionmyfollowers.core.t274046.cljs$lang$ctorPrWriter = ((function (map__274045,map__274045__$1,on_get_followers){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t274046");
});})(map__274045,map__274045__$1,on_get_followers))
;

mentionmyfollowers.core.__GT_t274046 = ((function (map__274045,map__274045__$1,on_get_followers){
return (function __GT_t274046(on_get_followers__$1,map__274045__$2,p__274038__$1,owner__$1,accounts__$1,accounts_form__$1,meta274047){
return (new mentionmyfollowers.core.t274046(on_get_followers__$1,map__274045__$2,p__274038__$1,owner__$1,accounts__$1,accounts_form__$1,meta274047));
});})(map__274045,map__274045__$1,on_get_followers))
;

}

return (new mentionmyfollowers.core.t274046(on_get_followers,map__274045__$1,p__274038,owner,accounts,accounts_form,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Reports an error of restful api call.
*/
mentionmyfollowers.core.report_error_BANG_ = (function report_error_BANG_(p__274051){
var map__274053 = p__274051;
var map__274053__$1 = ((cljs.core.seq_QMARK_.call(null,map__274053))?cljs.core.apply.call(null,cljs.core.hash_map,map__274053):map__274053);
var error = map__274053__$1;
var failure = cljs.core.get.call(null,map__274053__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
var status_text = cljs.core.get.call(null,map__274053__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var status = cljs.core.get.call(null,map__274053__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.println.call(null,error);
});
mentionmyfollowers.core.loading_followers = (function loading_followers(_,___$1){
if(typeof mentionmyfollowers.core.t274057 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t274057 = (function (_,loading_followers,meta274058){
this._ = _;
this.loading_followers = loading_followers;
this.meta274058 = meta274058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t274057.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t274057.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return React.DOM.div({"className": "progress"},React.DOM.div({"aria-valuemax": "100", "aria-valuemin": "0", "aria-valuenow": "75", "role": "progressbar", "className": "progress-bar progress-bar-striped active"}));
});

mentionmyfollowers.core.t274057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_274059){
var self__ = this;
var _274059__$1 = this;
return self__.meta274058;
});

mentionmyfollowers.core.t274057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_274059,meta274058__$1){
var self__ = this;
var _274059__$1 = this;
return (new mentionmyfollowers.core.t274057(self__._,self__.loading_followers,meta274058__$1));
});

mentionmyfollowers.core.t274057.cljs$lang$type = true;

mentionmyfollowers.core.t274057.cljs$lang$ctorStr = "mentionmyfollowers.core/t274057";

mentionmyfollowers.core.t274057.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t274057");
});

mentionmyfollowers.core.__GT_t274057 = (function __GT_t274057(___$2,loading_followers__$1,meta274058){
return (new mentionmyfollowers.core.t274057(___$2,loading_followers__$1,meta274058));
});

}

return (new mentionmyfollowers.core.t274057(___$1,loading_followers,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.selection_form = (function selection_form(selection,owner){
if(typeof mentionmyfollowers.core.t274065 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t274065 = (function (owner,selection,selection_form,meta274066){
this.owner = owner;
this.selection = selection;
this.selection_form = selection_form;
this.meta274066 = meta274066;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t274065.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t274065.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-from"},"From"),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__274060_SHARP_){
return om.core.update_BANG_.call(null,self__.selection,new cljs.core.Keyword(null,"from","from",1815293044),p1__274060_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(self__.selection), "id": "selection-from", "type": "text"})),React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-to"},"To"),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__274061_SHARP_){
return om.core.update_BANG_.call(null,self__.selection,new cljs.core.Keyword(null,"to","to",192099007),p1__274061_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(self__.selection), "id": "selection-to", "type": "text"})));
});

mentionmyfollowers.core.t274065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_274067){
var self__ = this;
var _274067__$1 = this;
return self__.meta274066;
});

mentionmyfollowers.core.t274065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_274067,meta274066__$1){
var self__ = this;
var _274067__$1 = this;
return (new mentionmyfollowers.core.t274065(self__.owner,self__.selection,self__.selection_form,meta274066__$1));
});

mentionmyfollowers.core.t274065.cljs$lang$type = true;

mentionmyfollowers.core.t274065.cljs$lang$ctorStr = "mentionmyfollowers.core/t274065";

mentionmyfollowers.core.t274065.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t274065");
});

mentionmyfollowers.core.__GT_t274065 = (function __GT_t274065(owner__$1,selection__$1,selection_form__$1,meta274066){
return (new mentionmyfollowers.core.t274065(owner__$1,selection__$1,selection_form__$1,meta274066));
});

}

return (new mentionmyfollowers.core.t274065(owner,selection,selection_form,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.update_selection = (function update_selection(p__274068,idx){
var map__274070 = p__274068;
var map__274070__$1 = ((cljs.core.seq_QMARK_.call(null,map__274070))?cljs.core.apply.call(null,cljs.core.hash_map,map__274070):map__274070);
var selection = map__274070__$1;
var to = cljs.core.get.call(null,map__274070__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__274070__$1,new cljs.core.Keyword(null,"from","from",1815293044));
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
mentionmyfollowers.core.is_selected_QMARK_ = (function is_selected_QMARK_(i,p__274071){
var map__274073 = p__274071;
var map__274073__$1 = ((cljs.core.seq_QMARK_.call(null,map__274073))?cljs.core.apply.call(null,cljs.core.hash_map,map__274073):map__274073);
var to = cljs.core.get.call(null,map__274073__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__274073__$1,new cljs.core.Keyword(null,"from","from",1815293044));
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
mentionmyfollowers.core.follower_item = (function follower_item(followers_and_selection,owner,p__274074){
var map__274079 = p__274074;
var map__274079__$1 = ((cljs.core.seq_QMARK_.call(null,map__274079))?cljs.core.apply.call(null,cljs.core.hash_map,map__274079):map__274079);
var idx = cljs.core.get.call(null,map__274079__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(typeof mentionmyfollowers.core.t274080 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t274080 = (function (idx,map__274079,p__274074,owner,followers_and_selection,follower_item,meta274081){
this.idx = idx;
this.map__274079 = map__274079;
this.p__274074 = p__274074;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.follower_item = follower_item;
this.meta274081 = meta274081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t274080.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t274080.prototype.om$core$IRender$render$arity$1 = ((function (map__274079,map__274079__$1,idx){
return (function (_){
var self__ = this;
var ___$1 = this;
var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var selection = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var is_this_selected_QMARK_ = mentionmyfollowers.core.is_selected_QMARK_.call(null,self__.idx,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection));
var on_click = ((function (followers,selection,is_this_selected_QMARK_,___$1,map__274079,map__274079__$1,idx){
return (function (e){
e.preventDefault();

return om.core.transact_BANG_.call(null,self__.followers_and_selection,new cljs.core.Keyword(null,"selection","selection",975998651),((function (followers,selection,is_this_selected_QMARK_,___$1,map__274079,map__274079__$1,idx){
return (function (s){
return mentionmyfollowers.core.update_selection.call(null,s,self__.idx);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__274079,map__274079__$1,idx))
);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__274079,map__274079__$1,idx))
;
return React.DOM.a({"onClick": on_click, "className": [cljs.core.str("list-group-item"),cljs.core.str((cljs.core.truth_(is_this_selected_QMARK_)?" active":null))].join(''), "href": "#"},cljs.core.get.call(null,followers,self__.idx));
});})(map__274079,map__274079__$1,idx))
;

mentionmyfollowers.core.t274080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__274079,map__274079__$1,idx){
return (function (_274082){
var self__ = this;
var _274082__$1 = this;
return self__.meta274081;
});})(map__274079,map__274079__$1,idx))
;

mentionmyfollowers.core.t274080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__274079,map__274079__$1,idx){
return (function (_274082,meta274081__$1){
var self__ = this;
var _274082__$1 = this;
return (new mentionmyfollowers.core.t274080(self__.idx,self__.map__274079,self__.p__274074,self__.owner,self__.followers_and_selection,self__.follower_item,meta274081__$1));
});})(map__274079,map__274079__$1,idx))
;

mentionmyfollowers.core.t274080.cljs$lang$type = true;

mentionmyfollowers.core.t274080.cljs$lang$ctorStr = "mentionmyfollowers.core/t274080";

mentionmyfollowers.core.t274080.cljs$lang$ctorPrWriter = ((function (map__274079,map__274079__$1,idx){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t274080");
});})(map__274079,map__274079__$1,idx))
;

mentionmyfollowers.core.__GT_t274080 = ((function (map__274079,map__274079__$1,idx){
return (function __GT_t274080(idx__$1,map__274079__$2,p__274074__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta274081){
return (new mentionmyfollowers.core.t274080(idx__$1,map__274079__$2,p__274074__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta274081));
});})(map__274079,map__274079__$1,idx))
;

}

return (new mentionmyfollowers.core.t274080(idx,map__274079__$1,p__274074,owner,followers_and_selection,follower_item,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers_list = (function select_followers_list(followers_and_selection,owner){
if(typeof mentionmyfollowers.core.t274087 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t274087 = (function (owner,followers_and_selection,select_followers_list,meta274088){
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers_list = select_followers_list;
this.meta274088 = meta274088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t274087.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t274087.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"className": "list-group"},(function (){var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
return cljs.core.map.call(null,((function (followers,___$1){
return (function (p1__274083_SHARP_){
return om.core.build.call(null,mentionmyfollowers.core.follower_item,self__.followers_and_selection,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),p1__274083_SHARP_], null)], null));
});})(followers,___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,followers)));
})()),om.core.build.call(null,mentionmyfollowers.core.selection_form,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection)));
});

mentionmyfollowers.core.t274087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_274089){
var self__ = this;
var _274089__$1 = this;
return self__.meta274088;
});

mentionmyfollowers.core.t274087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_274089,meta274088__$1){
var self__ = this;
var _274089__$1 = this;
return (new mentionmyfollowers.core.t274087(self__.owner,self__.followers_and_selection,self__.select_followers_list,meta274088__$1));
});

mentionmyfollowers.core.t274087.cljs$lang$type = true;

mentionmyfollowers.core.t274087.cljs$lang$ctorStr = "mentionmyfollowers.core/t274087";

mentionmyfollowers.core.t274087.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t274087");
});

mentionmyfollowers.core.__GT_t274087 = (function __GT_t274087(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta274088){
return (new mentionmyfollowers.core.t274087(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta274088));
});

}

return (new mentionmyfollowers.core.t274087(owner,followers_and_selection,select_followers_list,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers = (function select_followers(followers_and_selection,owner,p__274090){
var map__274095 = p__274090;
var map__274095__$1 = ((cljs.core.seq_QMARK_.call(null,map__274095))?cljs.core.apply.call(null,cljs.core.hash_map,map__274095):map__274095);
var on_cancel = cljs.core.get.call(null,map__274095__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
if(typeof mentionmyfollowers.core.t274096 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t274096 = (function (on_cancel,map__274095,p__274090,owner,followers_and_selection,select_followers,meta274097){
this.on_cancel = on_cancel;
this.map__274095 = map__274095;
this.p__274090 = p__274090;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers = select_followers;
this.meta274097 = meta274097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t274096.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t274096.prototype.om$core$IRender$render$arity$1 = ((function (map__274095,map__274095__$1,on_cancel){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,mentionmyfollowers.core.select_followers_list,self__.followers_and_selection),React.DOM.button({"className": "btn btn-primary"},"Go"),React.DOM.button({"onClick": self__.on_cancel, "className": "btn btn-danger"},"Cancel"));
});})(map__274095,map__274095__$1,on_cancel))
;

mentionmyfollowers.core.t274096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__274095,map__274095__$1,on_cancel){
return (function (_274098){
var self__ = this;
var _274098__$1 = this;
return self__.meta274097;
});})(map__274095,map__274095__$1,on_cancel))
;

mentionmyfollowers.core.t274096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__274095,map__274095__$1,on_cancel){
return (function (_274098,meta274097__$1){
var self__ = this;
var _274098__$1 = this;
return (new mentionmyfollowers.core.t274096(self__.on_cancel,self__.map__274095,self__.p__274090,self__.owner,self__.followers_and_selection,self__.select_followers,meta274097__$1));
});})(map__274095,map__274095__$1,on_cancel))
;

mentionmyfollowers.core.t274096.cljs$lang$type = true;

mentionmyfollowers.core.t274096.cljs$lang$ctorStr = "mentionmyfollowers.core/t274096";

mentionmyfollowers.core.t274096.cljs$lang$ctorPrWriter = ((function (map__274095,map__274095__$1,on_cancel){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t274096");
});})(map__274095,map__274095__$1,on_cancel))
;

mentionmyfollowers.core.__GT_t274096 = ((function (map__274095,map__274095__$1,on_cancel){
return (function __GT_t274096(on_cancel__$1,map__274095__$2,p__274090__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta274097){
return (new mentionmyfollowers.core.t274096(on_cancel__$1,map__274095__$2,p__274090__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta274097));
});})(map__274095,map__274095__$1,on_cancel))
;

}

return (new mentionmyfollowers.core.t274096(on_cancel,map__274095__$1,p__274090,owner,followers_and_selection,select_followers,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* The main application component
*/
mentionmyfollowers.core.application = (function application(data,owner){
if(typeof mentionmyfollowers.core.t274106 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t274106 = (function (owner,data,application,meta274107){
this.owner = owner;
this.data = data;
this.application = application;
this.meta274107 = meta274107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t274106.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t274106.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
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
return React.DOM.div({"className": "container"},(function (){var pred__274109 = cljs.core._EQ_;
var expr__274110 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__274109.call(null,new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534),expr__274110))){
return om.core.build.call(null,mentionmyfollowers.core.accounts_form,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518),handle_get_followers], null)], null));
} else {
if(cljs.core.truth_(pred__274109.call(null,new cljs.core.Keyword(null,"loading-followers","loading-followers",1692268659),expr__274110))){
return om.core.build.call(null,mentionmyfollowers.core.loading_followers,null);
} else {
if(cljs.core.truth_(pred__274109.call(null,new cljs.core.Keyword(null,"select-followers","select-followers",-1421776266),expr__274110))){
return om.core.build.call(null,mentionmyfollowers.core.select_followers,new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (pred__274109,expr__274110,handle_get_followers,___$1){
return (function (e){
cljs.core.println.call(null,"Cancel in select-followers view");

e.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534));
});})(pred__274109,expr__274110,handle_get_followers,___$1))
], null)], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__274110)].join('')));
}
}
}
})());
});

mentionmyfollowers.core.t274106.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t274106.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534)], null);
});

mentionmyfollowers.core.t274106.prototype.om$core$IWillMount$ = true;

mentionmyfollowers.core.t274106.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - Will Mount");

return mentionmyfollowers.core.read_user_id.call(null,((function (___$1){
return (function (p1__274099_SHARP_){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),((function (___$1){
return (function (user){
return cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"user-id","user-id",-206822291),p1__274099_SHARP_);
});})(___$1))
);
});})(___$1))
);
});

mentionmyfollowers.core.t274106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_274108){
var self__ = this;
var _274108__$1 = this;
return self__.meta274107;
});

mentionmyfollowers.core.t274106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_274108,meta274107__$1){
var self__ = this;
var _274108__$1 = this;
return (new mentionmyfollowers.core.t274106(self__.owner,self__.data,self__.application,meta274107__$1));
});

mentionmyfollowers.core.t274106.cljs$lang$type = true;

mentionmyfollowers.core.t274106.cljs$lang$ctorStr = "mentionmyfollowers.core/t274106";

mentionmyfollowers.core.t274106.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t274106");
});

mentionmyfollowers.core.__GT_t274106 = (function __GT_t274106(owner__$1,data__$1,application__$1,meta274107){
return (new mentionmyfollowers.core.t274106(owner__$1,data__$1,application__$1,meta274107));
});

}

return (new mentionmyfollowers.core.t274106(owner,data,application,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.application,mentionmyfollowers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
