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
mentionmyfollowers.core.show_user_id = (function show_user_id(p__281871,owner){
var map__281876 = p__281871;
var map__281876__$1 = ((cljs.core.seq_QMARK_.call(null,map__281876))?cljs.core.apply.call(null,cljs.core.hash_map,map__281876):map__281876);
var user_id = cljs.core.get.call(null,map__281876__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t281877 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t281877 = (function (user_id,map__281876,owner,p__281871,show_user_id,meta281878){
this.user_id = user_id;
this.map__281876 = map__281876;
this.owner = owner;
this.p__281871 = p__281871;
this.show_user_id = show_user_id;
this.meta281878 = meta281878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t281877.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t281877.prototype.om$core$IRender$render$arity$1 = ((function (map__281876,map__281876__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__281876,map__281876__$1,user_id))
;

mentionmyfollowers.core.t281877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__281876,map__281876__$1,user_id){
return (function (_281879){
var self__ = this;
var _281879__$1 = this;
return self__.meta281878;
});})(map__281876,map__281876__$1,user_id))
;

mentionmyfollowers.core.t281877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__281876,map__281876__$1,user_id){
return (function (_281879,meta281878__$1){
var self__ = this;
var _281879__$1 = this;
return (new mentionmyfollowers.core.t281877(self__.user_id,self__.map__281876,self__.owner,self__.p__281871,self__.show_user_id,meta281878__$1));
});})(map__281876,map__281876__$1,user_id))
;

mentionmyfollowers.core.t281877.cljs$lang$type = true;

mentionmyfollowers.core.t281877.cljs$lang$ctorStr = "mentionmyfollowers.core/t281877";

mentionmyfollowers.core.t281877.cljs$lang$ctorPrWriter = ((function (map__281876,map__281876__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t281877");
});})(map__281876,map__281876__$1,user_id))
;

mentionmyfollowers.core.__GT_t281877 = ((function (map__281876,map__281876__$1,user_id){
return (function __GT_t281877(user_id__$1,map__281876__$2,owner__$1,p__281871__$1,show_user_id__$1,meta281878){
return (new mentionmyfollowers.core.t281877(user_id__$1,map__281876__$2,owner__$1,p__281871__$1,show_user_id__$1,meta281878));
});})(map__281876,map__281876__$1,user_id))
;

}

return (new mentionmyfollowers.core.t281877(user_id,map__281876__$1,owner,p__281871,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* A form to enter the accounts whose followers you want to mention
*/
mentionmyfollowers.core.accounts_form = (function accounts_form(accounts,owner,p__281880){
var map__281887 = p__281880;
var map__281887__$1 = ((cljs.core.seq_QMARK_.call(null,map__281887))?cljs.core.apply.call(null,cljs.core.hash_map,map__281887):map__281887);
var on_get_followers = cljs.core.get.call(null,map__281887__$1,new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518));
if(typeof mentionmyfollowers.core.t281888 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t281888 = (function (on_get_followers,map__281887,p__281880,owner,accounts,accounts_form,meta281889){
this.on_get_followers = on_get_followers;
this.map__281887 = map__281887;
this.p__281880 = p__281880;
this.owner = owner;
this.accounts = accounts;
this.accounts_form = accounts_form;
this.meta281889 = meta281889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t281888.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t281888.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__281887,map__281887__$1,on_get_followers){
return (function (_,p__281891){
var self__ = this;
var map__281892 = p__281891;
var map__281892__$1 = ((cljs.core.seq_QMARK_.call(null,map__281892))?cljs.core.apply.call(null,cljs.core.hash_map,map__281892):map__281892);
var text = cljs.core.get.call(null,map__281892__$1,new cljs.core.Keyword(null,"accounts","accounts",-935308676));
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "accounts-input"},"Accounts:"),om.dom.textarea.call(null,{"onChange": ((function (___$1,map__281892,map__281892__$1,text,map__281887,map__281887__$1,on_get_followers){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"accounts","accounts",-935308676),e.target.value);
});})(___$1,map__281892,map__281892__$1,text,map__281887,map__281887__$1,on_get_followers))
, "value": text, "rows": "3", "className": "form-control", "id": "accounts-input"})),React.DOM.button({"onClick": ((function (___$1,map__281892,map__281892__$1,text,map__281887,map__281887__$1,on_get_followers){
return (function (e){
e.preventDefault();

cljs.core.println.call(null,"Get followers button clicked");

var new_accounts = clojure.string.split.call(null,text,/ /);
om.core.update_BANG_.call(null,self__.accounts,new_accounts);

return self__.on_get_followers.call(null,new_accounts);
});})(___$1,map__281892,map__281892__$1,text,map__281887,map__281887__$1,on_get_followers))
, "className": "btn btn-primary"},"Get Followers"));
});})(map__281887,map__281887__$1,on_get_followers))
;

mentionmyfollowers.core.t281888.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t281888.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__281887,map__281887__$1,on_get_followers){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),clojure.string.join.call(null," ",self__.accounts)], null);
});})(map__281887,map__281887__$1,on_get_followers))
;

mentionmyfollowers.core.t281888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__281887,map__281887__$1,on_get_followers){
return (function (_281890){
var self__ = this;
var _281890__$1 = this;
return self__.meta281889;
});})(map__281887,map__281887__$1,on_get_followers))
;

mentionmyfollowers.core.t281888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__281887,map__281887__$1,on_get_followers){
return (function (_281890,meta281889__$1){
var self__ = this;
var _281890__$1 = this;
return (new mentionmyfollowers.core.t281888(self__.on_get_followers,self__.map__281887,self__.p__281880,self__.owner,self__.accounts,self__.accounts_form,meta281889__$1));
});})(map__281887,map__281887__$1,on_get_followers))
;

mentionmyfollowers.core.t281888.cljs$lang$type = true;

mentionmyfollowers.core.t281888.cljs$lang$ctorStr = "mentionmyfollowers.core/t281888";

mentionmyfollowers.core.t281888.cljs$lang$ctorPrWriter = ((function (map__281887,map__281887__$1,on_get_followers){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t281888");
});})(map__281887,map__281887__$1,on_get_followers))
;

mentionmyfollowers.core.__GT_t281888 = ((function (map__281887,map__281887__$1,on_get_followers){
return (function __GT_t281888(on_get_followers__$1,map__281887__$2,p__281880__$1,owner__$1,accounts__$1,accounts_form__$1,meta281889){
return (new mentionmyfollowers.core.t281888(on_get_followers__$1,map__281887__$2,p__281880__$1,owner__$1,accounts__$1,accounts_form__$1,meta281889));
});})(map__281887,map__281887__$1,on_get_followers))
;

}

return (new mentionmyfollowers.core.t281888(on_get_followers,map__281887__$1,p__281880,owner,accounts,accounts_form,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Reports an error of restful api call.
*/
mentionmyfollowers.core.report_error_BANG_ = (function report_error_BANG_(p__281893){
var map__281895 = p__281893;
var map__281895__$1 = ((cljs.core.seq_QMARK_.call(null,map__281895))?cljs.core.apply.call(null,cljs.core.hash_map,map__281895):map__281895);
var error = map__281895__$1;
var failure = cljs.core.get.call(null,map__281895__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
var status_text = cljs.core.get.call(null,map__281895__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var status = cljs.core.get.call(null,map__281895__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.println.call(null,error);
});
mentionmyfollowers.core.loading_followers = (function loading_followers(_,___$1){
if(typeof mentionmyfollowers.core.t281899 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t281899 = (function (_,loading_followers,meta281900){
this._ = _;
this.loading_followers = loading_followers;
this.meta281900 = meta281900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t281899.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t281899.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return React.DOM.div({"className": "progress"},React.DOM.div({"aria-valuemax": "100", "aria-valuemin": "0", "aria-valuenow": "75", "role": "progressbar", "className": "progress-bar progress-bar-striped active"}));
});

mentionmyfollowers.core.t281899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_281901){
var self__ = this;
var _281901__$1 = this;
return self__.meta281900;
});

mentionmyfollowers.core.t281899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_281901,meta281900__$1){
var self__ = this;
var _281901__$1 = this;
return (new mentionmyfollowers.core.t281899(self__._,self__.loading_followers,meta281900__$1));
});

mentionmyfollowers.core.t281899.cljs$lang$type = true;

mentionmyfollowers.core.t281899.cljs$lang$ctorStr = "mentionmyfollowers.core/t281899";

mentionmyfollowers.core.t281899.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t281899");
});

mentionmyfollowers.core.__GT_t281899 = (function __GT_t281899(___$2,loading_followers__$1,meta281900){
return (new mentionmyfollowers.core.t281899(___$2,loading_followers__$1,meta281900));
});

}

return (new mentionmyfollowers.core.t281899(___$1,loading_followers,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.selection_form = (function selection_form(selection,owner){
if(typeof mentionmyfollowers.core.t281907 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t281907 = (function (owner,selection,selection_form,meta281908){
this.owner = owner;
this.selection = selection;
this.selection_form = selection_form;
this.meta281908 = meta281908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t281907.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t281907.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-from"},"From"),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__281902_SHARP_){
return om.core.update_BANG_.call(null,self__.selection,new cljs.core.Keyword(null,"from","from",1815293044),p1__281902_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(self__.selection), "id": "selection-from", "className": "form-control", "type": "text"})),React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "selection-to"},"To"),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__281903_SHARP_){
return om.core.update_BANG_.call(null,self__.selection,new cljs.core.Keyword(null,"to","to",192099007),p1__281903_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(self__.selection), "id": "selection-to", "className": "form-control", "type": "text"})));
});

mentionmyfollowers.core.t281907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_281909){
var self__ = this;
var _281909__$1 = this;
return self__.meta281908;
});

mentionmyfollowers.core.t281907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_281909,meta281908__$1){
var self__ = this;
var _281909__$1 = this;
return (new mentionmyfollowers.core.t281907(self__.owner,self__.selection,self__.selection_form,meta281908__$1));
});

mentionmyfollowers.core.t281907.cljs$lang$type = true;

mentionmyfollowers.core.t281907.cljs$lang$ctorStr = "mentionmyfollowers.core/t281907";

mentionmyfollowers.core.t281907.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t281907");
});

mentionmyfollowers.core.__GT_t281907 = (function __GT_t281907(owner__$1,selection__$1,selection_form__$1,meta281908){
return (new mentionmyfollowers.core.t281907(owner__$1,selection__$1,selection_form__$1,meta281908));
});

}

return (new mentionmyfollowers.core.t281907(owner,selection,selection_form,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.update_selection = (function update_selection(p__281910,idx){
var map__281912 = p__281910;
var map__281912__$1 = ((cljs.core.seq_QMARK_.call(null,map__281912))?cljs.core.apply.call(null,cljs.core.hash_map,map__281912):map__281912);
var selection = map__281912__$1;
var to = cljs.core.get.call(null,map__281912__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__281912__$1,new cljs.core.Keyword(null,"from","from",1815293044));
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
mentionmyfollowers.core.is_selected_QMARK_ = (function is_selected_QMARK_(i,p__281913){
var map__281915 = p__281913;
var map__281915__$1 = ((cljs.core.seq_QMARK_.call(null,map__281915))?cljs.core.apply.call(null,cljs.core.hash_map,map__281915):map__281915);
var to = cljs.core.get.call(null,map__281915__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__281915__$1,new cljs.core.Keyword(null,"from","from",1815293044));
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
mentionmyfollowers.core.follower_item = (function follower_item(followers_and_selection,owner,p__281916){
var map__281921 = p__281916;
var map__281921__$1 = ((cljs.core.seq_QMARK_.call(null,map__281921))?cljs.core.apply.call(null,cljs.core.hash_map,map__281921):map__281921);
var idx = cljs.core.get.call(null,map__281921__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(typeof mentionmyfollowers.core.t281922 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t281922 = (function (idx,map__281921,p__281916,owner,followers_and_selection,follower_item,meta281923){
this.idx = idx;
this.map__281921 = map__281921;
this.p__281916 = p__281916;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.follower_item = follower_item;
this.meta281923 = meta281923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t281922.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t281922.prototype.om$core$IRender$render$arity$1 = ((function (map__281921,map__281921__$1,idx){
return (function (_){
var self__ = this;
var ___$1 = this;
var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var selection = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var is_this_selected_QMARK_ = mentionmyfollowers.core.is_selected_QMARK_.call(null,self__.idx,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection));
var on_click = ((function (followers,selection,is_this_selected_QMARK_,___$1,map__281921,map__281921__$1,idx){
return (function (e){
e.preventDefault();

return om.core.transact_BANG_.call(null,self__.followers_and_selection,new cljs.core.Keyword(null,"selection","selection",975998651),((function (followers,selection,is_this_selected_QMARK_,___$1,map__281921,map__281921__$1,idx){
return (function (s){
return mentionmyfollowers.core.update_selection.call(null,s,self__.idx);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__281921,map__281921__$1,idx))
);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__281921,map__281921__$1,idx))
;
return React.DOM.a({"onClick": on_click, "className": [cljs.core.str("list-group-item"),cljs.core.str((cljs.core.truth_(is_this_selected_QMARK_)?" active":null))].join(''), "href": "#"},cljs.core.get.call(null,followers,self__.idx));
});})(map__281921,map__281921__$1,idx))
;

mentionmyfollowers.core.t281922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__281921,map__281921__$1,idx){
return (function (_281924){
var self__ = this;
var _281924__$1 = this;
return self__.meta281923;
});})(map__281921,map__281921__$1,idx))
;

mentionmyfollowers.core.t281922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__281921,map__281921__$1,idx){
return (function (_281924,meta281923__$1){
var self__ = this;
var _281924__$1 = this;
return (new mentionmyfollowers.core.t281922(self__.idx,self__.map__281921,self__.p__281916,self__.owner,self__.followers_and_selection,self__.follower_item,meta281923__$1));
});})(map__281921,map__281921__$1,idx))
;

mentionmyfollowers.core.t281922.cljs$lang$type = true;

mentionmyfollowers.core.t281922.cljs$lang$ctorStr = "mentionmyfollowers.core/t281922";

mentionmyfollowers.core.t281922.cljs$lang$ctorPrWriter = ((function (map__281921,map__281921__$1,idx){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t281922");
});})(map__281921,map__281921__$1,idx))
;

mentionmyfollowers.core.__GT_t281922 = ((function (map__281921,map__281921__$1,idx){
return (function __GT_t281922(idx__$1,map__281921__$2,p__281916__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta281923){
return (new mentionmyfollowers.core.t281922(idx__$1,map__281921__$2,p__281916__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta281923));
});})(map__281921,map__281921__$1,idx))
;

}

return (new mentionmyfollowers.core.t281922(idx,map__281921__$1,p__281916,owner,followers_and_selection,follower_item,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers_list = (function select_followers_list(followers_and_selection,owner){
if(typeof mentionmyfollowers.core.t281929 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t281929 = (function (owner,followers_and_selection,select_followers_list,meta281930){
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers_list = select_followers_list;
this.meta281930 = meta281930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t281929.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t281929.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,cljs.core.apply.call(null,om.dom.div,{"className": "list-group"},(function (){var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
return cljs.core.map.call(null,((function (followers,___$1){
return (function (p1__281925_SHARP_){
return om.core.build.call(null,mentionmyfollowers.core.follower_item,self__.followers_and_selection,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),p1__281925_SHARP_], null)], null));
});})(followers,___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,followers)));
})()),om.core.build.call(null,mentionmyfollowers.core.selection_form,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection)));
});

mentionmyfollowers.core.t281929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_281931){
var self__ = this;
var _281931__$1 = this;
return self__.meta281930;
});

mentionmyfollowers.core.t281929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_281931,meta281930__$1){
var self__ = this;
var _281931__$1 = this;
return (new mentionmyfollowers.core.t281929(self__.owner,self__.followers_and_selection,self__.select_followers_list,meta281930__$1));
});

mentionmyfollowers.core.t281929.cljs$lang$type = true;

mentionmyfollowers.core.t281929.cljs$lang$ctorStr = "mentionmyfollowers.core/t281929";

mentionmyfollowers.core.t281929.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t281929");
});

mentionmyfollowers.core.__GT_t281929 = (function __GT_t281929(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta281930){
return (new mentionmyfollowers.core.t281929(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta281930));
});

}

return (new mentionmyfollowers.core.t281929(owner,followers_and_selection,select_followers_list,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers = (function select_followers(followers_and_selection,owner,p__281932){
var map__281937 = p__281932;
var map__281937__$1 = ((cljs.core.seq_QMARK_.call(null,map__281937))?cljs.core.apply.call(null,cljs.core.hash_map,map__281937):map__281937);
var on_cancel = cljs.core.get.call(null,map__281937__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
if(typeof mentionmyfollowers.core.t281938 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t281938 = (function (on_cancel,map__281937,p__281932,owner,followers_and_selection,select_followers,meta281939){
this.on_cancel = on_cancel;
this.map__281937 = map__281937;
this.p__281932 = p__281932;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers = select_followers;
this.meta281939 = meta281939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t281938.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t281938.prototype.om$core$IRender$render$arity$1 = ((function (map__281937,map__281937__$1,on_cancel){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,mentionmyfollowers.core.select_followers_list,self__.followers_and_selection),React.DOM.button({"className": "btn btn-primary"},"Go"),React.DOM.button({"onClick": self__.on_cancel, "className": "btn btn-danger"},"Cancel"));
});})(map__281937,map__281937__$1,on_cancel))
;

mentionmyfollowers.core.t281938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__281937,map__281937__$1,on_cancel){
return (function (_281940){
var self__ = this;
var _281940__$1 = this;
return self__.meta281939;
});})(map__281937,map__281937__$1,on_cancel))
;

mentionmyfollowers.core.t281938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__281937,map__281937__$1,on_cancel){
return (function (_281940,meta281939__$1){
var self__ = this;
var _281940__$1 = this;
return (new mentionmyfollowers.core.t281938(self__.on_cancel,self__.map__281937,self__.p__281932,self__.owner,self__.followers_and_selection,self__.select_followers,meta281939__$1));
});})(map__281937,map__281937__$1,on_cancel))
;

mentionmyfollowers.core.t281938.cljs$lang$type = true;

mentionmyfollowers.core.t281938.cljs$lang$ctorStr = "mentionmyfollowers.core/t281938";

mentionmyfollowers.core.t281938.cljs$lang$ctorPrWriter = ((function (map__281937,map__281937__$1,on_cancel){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t281938");
});})(map__281937,map__281937__$1,on_cancel))
;

mentionmyfollowers.core.__GT_t281938 = ((function (map__281937,map__281937__$1,on_cancel){
return (function __GT_t281938(on_cancel__$1,map__281937__$2,p__281932__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta281939){
return (new mentionmyfollowers.core.t281938(on_cancel__$1,map__281937__$2,p__281932__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta281939));
});})(map__281937,map__281937__$1,on_cancel))
;

}

return (new mentionmyfollowers.core.t281938(on_cancel,map__281937__$1,p__281932,owner,followers_and_selection,select_followers,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* The main application component
*/
mentionmyfollowers.core.application = (function application(data,owner){
if(typeof mentionmyfollowers.core.t281948 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t281948 = (function (owner,data,application,meta281949){
this.owner = owner;
this.data = data;
this.application = application;
this.meta281949 = meta281949;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t281948.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t281948.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
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
return React.DOM.div({"className": "container"},(function (){var pred__281951 = cljs.core._EQ_;
var expr__281952 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__281951.call(null,new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534),expr__281952))){
return om.core.build.call(null,mentionmyfollowers.core.accounts_form,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518),handle_get_followers], null)], null));
} else {
if(cljs.core.truth_(pred__281951.call(null,new cljs.core.Keyword(null,"loading-followers","loading-followers",1692268659),expr__281952))){
return om.core.build.call(null,mentionmyfollowers.core.loading_followers,null);
} else {
if(cljs.core.truth_(pred__281951.call(null,new cljs.core.Keyword(null,"select-followers","select-followers",-1421776266),expr__281952))){
return om.core.build.call(null,mentionmyfollowers.core.select_followers,new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (pred__281951,expr__281952,handle_get_followers,___$1){
return (function (e){
cljs.core.println.call(null,"Cancel in select-followers view");

e.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534));
});})(pred__281951,expr__281952,handle_get_followers,___$1))
], null)], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__281952)].join('')));
}
}
}
})());
});

mentionmyfollowers.core.t281948.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t281948.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534)], null);
});

mentionmyfollowers.core.t281948.prototype.om$core$IWillMount$ = true;

mentionmyfollowers.core.t281948.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - Will Mount");

return mentionmyfollowers.core.read_user_id.call(null,((function (___$1){
return (function (p1__281941_SHARP_){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),((function (___$1){
return (function (user){
return cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"user-id","user-id",-206822291),p1__281941_SHARP_);
});})(___$1))
);
});})(___$1))
);
});

mentionmyfollowers.core.t281948.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_281950){
var self__ = this;
var _281950__$1 = this;
return self__.meta281949;
});

mentionmyfollowers.core.t281948.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_281950,meta281949__$1){
var self__ = this;
var _281950__$1 = this;
return (new mentionmyfollowers.core.t281948(self__.owner,self__.data,self__.application,meta281949__$1));
});

mentionmyfollowers.core.t281948.cljs$lang$type = true;

mentionmyfollowers.core.t281948.cljs$lang$ctorStr = "mentionmyfollowers.core/t281948";

mentionmyfollowers.core.t281948.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t281948");
});

mentionmyfollowers.core.__GT_t281948 = (function __GT_t281948(owner__$1,data__$1,application__$1,meta281949){
return (new mentionmyfollowers.core.t281948(owner__$1,data__$1,application__$1,meta281949));
});

}

return (new mentionmyfollowers.core.t281948(owner,data,application,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.application,mentionmyfollowers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
