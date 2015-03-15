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
mentionmyfollowers.core.show_user_id = (function show_user_id(p__219152,owner){
var map__219157 = p__219152;
var map__219157__$1 = ((cljs.core.seq_QMARK_.call(null,map__219157))?cljs.core.apply.call(null,cljs.core.hash_map,map__219157):map__219157);
var user_id = cljs.core.get.call(null,map__219157__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t219158 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t219158 = (function (user_id,map__219157,owner,p__219152,show_user_id,meta219159){
this.user_id = user_id;
this.map__219157 = map__219157;
this.owner = owner;
this.p__219152 = p__219152;
this.show_user_id = show_user_id;
this.meta219159 = meta219159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t219158.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t219158.prototype.om$core$IRender$render$arity$1 = ((function (map__219157,map__219157__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__219157,map__219157__$1,user_id))
;

mentionmyfollowers.core.t219158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__219157,map__219157__$1,user_id){
return (function (_219160){
var self__ = this;
var _219160__$1 = this;
return self__.meta219159;
});})(map__219157,map__219157__$1,user_id))
;

mentionmyfollowers.core.t219158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__219157,map__219157__$1,user_id){
return (function (_219160,meta219159__$1){
var self__ = this;
var _219160__$1 = this;
return (new mentionmyfollowers.core.t219158(self__.user_id,self__.map__219157,self__.owner,self__.p__219152,self__.show_user_id,meta219159__$1));
});})(map__219157,map__219157__$1,user_id))
;

mentionmyfollowers.core.t219158.cljs$lang$type = true;

mentionmyfollowers.core.t219158.cljs$lang$ctorStr = "mentionmyfollowers.core/t219158";

mentionmyfollowers.core.t219158.cljs$lang$ctorPrWriter = ((function (map__219157,map__219157__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t219158");
});})(map__219157,map__219157__$1,user_id))
;

mentionmyfollowers.core.__GT_t219158 = ((function (map__219157,map__219157__$1,user_id){
return (function __GT_t219158(user_id__$1,map__219157__$2,owner__$1,p__219152__$1,show_user_id__$1,meta219159){
return (new mentionmyfollowers.core.t219158(user_id__$1,map__219157__$2,owner__$1,p__219152__$1,show_user_id__$1,meta219159));
});})(map__219157,map__219157__$1,user_id))
;

}

return (new mentionmyfollowers.core.t219158(user_id,map__219157__$1,owner,p__219152,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* A form to enter the accounts whose followers you want to mention
*/
mentionmyfollowers.core.accounts_form = (function accounts_form(accounts,owner,p__219161){
var map__219168 = p__219161;
var map__219168__$1 = ((cljs.core.seq_QMARK_.call(null,map__219168))?cljs.core.apply.call(null,cljs.core.hash_map,map__219168):map__219168);
var on_get_followers = cljs.core.get.call(null,map__219168__$1,new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518));
if(typeof mentionmyfollowers.core.t219169 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t219169 = (function (on_get_followers,map__219168,p__219161,owner,accounts,accounts_form,meta219170){
this.on_get_followers = on_get_followers;
this.map__219168 = map__219168;
this.p__219161 = p__219161;
this.owner = owner;
this.accounts = accounts;
this.accounts_form = accounts_form;
this.meta219170 = meta219170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t219169.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t219169.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__219168,map__219168__$1,on_get_followers){
return (function (_,p__219172){
var self__ = this;
var map__219173 = p__219172;
var map__219173__$1 = ((cljs.core.seq_QMARK_.call(null,map__219173))?cljs.core.apply.call(null,cljs.core.hash_map,map__219173):map__219173);
var text = cljs.core.get.call(null,map__219173__$1,new cljs.core.Keyword(null,"accounts","accounts",-935308676));
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "accounts-input"},"Accounts:"),om.dom.textarea.call(null,{"onChange": ((function (___$1,map__219173,map__219173__$1,text,map__219168,map__219168__$1,on_get_followers){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"accounts","accounts",-935308676),e.target.value);
});})(___$1,map__219173,map__219173__$1,text,map__219168,map__219168__$1,on_get_followers))
, "value": text, "rows": "3", "className": "form-control", "id": "accounts-input"})),React.DOM.button({"onClick": ((function (___$1,map__219173,map__219173__$1,text,map__219168,map__219168__$1,on_get_followers){
return (function (e){
e.preventDefault();

cljs.core.println.call(null,"Get followers button clicked");

var new_accounts = clojure.string.split.call(null,text,/ /);
om.core.update_BANG_.call(null,self__.accounts,new_accounts);

return self__.on_get_followers.call(null,new_accounts);
});})(___$1,map__219173,map__219173__$1,text,map__219168,map__219168__$1,on_get_followers))
, "className": "btn btn-primary"},"Get Followers"));
});})(map__219168,map__219168__$1,on_get_followers))
;

mentionmyfollowers.core.t219169.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t219169.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__219168,map__219168__$1,on_get_followers){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),clojure.string.join.call(null," ",self__.accounts)], null);
});})(map__219168,map__219168__$1,on_get_followers))
;

mentionmyfollowers.core.t219169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__219168,map__219168__$1,on_get_followers){
return (function (_219171){
var self__ = this;
var _219171__$1 = this;
return self__.meta219170;
});})(map__219168,map__219168__$1,on_get_followers))
;

mentionmyfollowers.core.t219169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__219168,map__219168__$1,on_get_followers){
return (function (_219171,meta219170__$1){
var self__ = this;
var _219171__$1 = this;
return (new mentionmyfollowers.core.t219169(self__.on_get_followers,self__.map__219168,self__.p__219161,self__.owner,self__.accounts,self__.accounts_form,meta219170__$1));
});})(map__219168,map__219168__$1,on_get_followers))
;

mentionmyfollowers.core.t219169.cljs$lang$type = true;

mentionmyfollowers.core.t219169.cljs$lang$ctorStr = "mentionmyfollowers.core/t219169";

mentionmyfollowers.core.t219169.cljs$lang$ctorPrWriter = ((function (map__219168,map__219168__$1,on_get_followers){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t219169");
});})(map__219168,map__219168__$1,on_get_followers))
;

mentionmyfollowers.core.__GT_t219169 = ((function (map__219168,map__219168__$1,on_get_followers){
return (function __GT_t219169(on_get_followers__$1,map__219168__$2,p__219161__$1,owner__$1,accounts__$1,accounts_form__$1,meta219170){
return (new mentionmyfollowers.core.t219169(on_get_followers__$1,map__219168__$2,p__219161__$1,owner__$1,accounts__$1,accounts_form__$1,meta219170));
});})(map__219168,map__219168__$1,on_get_followers))
;

}

return (new mentionmyfollowers.core.t219169(on_get_followers,map__219168__$1,p__219161,owner,accounts,accounts_form,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Reports an error of restful api call.
*/
mentionmyfollowers.core.report_error_BANG_ = (function report_error_BANG_(p__219174){
var map__219176 = p__219174;
var map__219176__$1 = ((cljs.core.seq_QMARK_.call(null,map__219176))?cljs.core.apply.call(null,cljs.core.hash_map,map__219176):map__219176);
var error = map__219176__$1;
var failure = cljs.core.get.call(null,map__219176__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
var status_text = cljs.core.get.call(null,map__219176__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var status = cljs.core.get.call(null,map__219176__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.println.call(null,error);
});
mentionmyfollowers.core.loading_followers = (function loading_followers(_,___$1){
if(typeof mentionmyfollowers.core.t219180 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t219180 = (function (_,loading_followers,meta219181){
this._ = _;
this.loading_followers = loading_followers;
this.meta219181 = meta219181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t219180.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t219180.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return React.DOM.div({"className": "progress"},React.DOM.div({"aria-valuemax": "100", "aria-valuemin": "0", "aria-valuenow": "75", "role": "progressbar", "className": "progress-bar progress-bar-striped active"}));
});

mentionmyfollowers.core.t219180.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_219182){
var self__ = this;
var _219182__$1 = this;
return self__.meta219181;
});

mentionmyfollowers.core.t219180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_219182,meta219181__$1){
var self__ = this;
var _219182__$1 = this;
return (new mentionmyfollowers.core.t219180(self__._,self__.loading_followers,meta219181__$1));
});

mentionmyfollowers.core.t219180.cljs$lang$type = true;

mentionmyfollowers.core.t219180.cljs$lang$ctorStr = "mentionmyfollowers.core/t219180";

mentionmyfollowers.core.t219180.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t219180");
});

mentionmyfollowers.core.__GT_t219180 = (function __GT_t219180(___$2,loading_followers__$1,meta219181){
return (new mentionmyfollowers.core.t219180(___$2,loading_followers__$1,meta219181));
});

}

return (new mentionmyfollowers.core.t219180(___$1,loading_followers,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.update_selection = (function update_selection(p__219183,idx){
var map__219185 = p__219183;
var map__219185__$1 = ((cljs.core.seq_QMARK_.call(null,map__219185))?cljs.core.apply.call(null,cljs.core.hash_map,map__219185):map__219185);
var selection = map__219185__$1;
var to = cljs.core.get.call(null,map__219185__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__219185__$1,new cljs.core.Keyword(null,"from","from",1815293044));
cljs.core.println.call(null,"Setting selection",idx,"->",from,to);

if(((from == null)) || ((idx <= from))){
return cljs.core.assoc.call(null,selection,new cljs.core.Keyword(null,"from","from",1815293044),idx);
} else {
return cljs.core.assoc.call(null,selection,new cljs.core.Keyword(null,"to","to",192099007),idx);

}
});
mentionmyfollowers.core.is_selected_QMARK_ = (function is_selected_QMARK_(i,p__219186){
var map__219188 = p__219186;
var map__219188__$1 = ((cljs.core.seq_QMARK_.call(null,map__219188))?cljs.core.apply.call(null,cljs.core.hash_map,map__219188):map__219188);
var to = cljs.core.get.call(null,map__219188__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__219188__$1,new cljs.core.Keyword(null,"from","from",1815293044));
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
mentionmyfollowers.core.follower_item = (function follower_item(followers_and_selection,owner,p__219189){
var map__219194 = p__219189;
var map__219194__$1 = ((cljs.core.seq_QMARK_.call(null,map__219194))?cljs.core.apply.call(null,cljs.core.hash_map,map__219194):map__219194);
var idx = cljs.core.get.call(null,map__219194__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(typeof mentionmyfollowers.core.t219195 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t219195 = (function (idx,map__219194,p__219189,owner,followers_and_selection,follower_item,meta219196){
this.idx = idx;
this.map__219194 = map__219194;
this.p__219189 = p__219189;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.follower_item = follower_item;
this.meta219196 = meta219196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t219195.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t219195.prototype.om$core$IRender$render$arity$1 = ((function (map__219194,map__219194__$1,idx){
return (function (_){
var self__ = this;
var ___$1 = this;
var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var selection = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
var is_this_selected_QMARK_ = mentionmyfollowers.core.is_selected_QMARK_.call(null,self__.idx,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection));
var on_click = ((function (followers,selection,is_this_selected_QMARK_,___$1,map__219194,map__219194__$1,idx){
return (function (e){
e.preventDefault();

return om.core.transact_BANG_.call(null,self__.followers_and_selection,new cljs.core.Keyword(null,"selection","selection",975998651),((function (followers,selection,is_this_selected_QMARK_,___$1,map__219194,map__219194__$1,idx){
return (function (s){
return mentionmyfollowers.core.update_selection.call(null,s,self__.idx);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__219194,map__219194__$1,idx))
);
});})(followers,selection,is_this_selected_QMARK_,___$1,map__219194,map__219194__$1,idx))
;
return React.DOM.a({"onClick": on_click, "className": [cljs.core.str("list-group-item"),cljs.core.str((cljs.core.truth_(is_this_selected_QMARK_)?" active":null))].join(''), "href": "#"},cljs.core.get.call(null,followers,self__.idx));
});})(map__219194,map__219194__$1,idx))
;

mentionmyfollowers.core.t219195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__219194,map__219194__$1,idx){
return (function (_219197){
var self__ = this;
var _219197__$1 = this;
return self__.meta219196;
});})(map__219194,map__219194__$1,idx))
;

mentionmyfollowers.core.t219195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__219194,map__219194__$1,idx){
return (function (_219197,meta219196__$1){
var self__ = this;
var _219197__$1 = this;
return (new mentionmyfollowers.core.t219195(self__.idx,self__.map__219194,self__.p__219189,self__.owner,self__.followers_and_selection,self__.follower_item,meta219196__$1));
});})(map__219194,map__219194__$1,idx))
;

mentionmyfollowers.core.t219195.cljs$lang$type = true;

mentionmyfollowers.core.t219195.cljs$lang$ctorStr = "mentionmyfollowers.core/t219195";

mentionmyfollowers.core.t219195.cljs$lang$ctorPrWriter = ((function (map__219194,map__219194__$1,idx){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t219195");
});})(map__219194,map__219194__$1,idx))
;

mentionmyfollowers.core.__GT_t219195 = ((function (map__219194,map__219194__$1,idx){
return (function __GT_t219195(idx__$1,map__219194__$2,p__219189__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta219196){
return (new mentionmyfollowers.core.t219195(idx__$1,map__219194__$2,p__219189__$1,owner__$1,followers_and_selection__$1,follower_item__$1,meta219196));
});})(map__219194,map__219194__$1,idx))
;

}

return (new mentionmyfollowers.core.t219195(idx,map__219194__$1,p__219189,owner,followers_and_selection,follower_item,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers_list = (function select_followers_list(followers_and_selection,owner){
if(typeof mentionmyfollowers.core.t219202 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t219202 = (function (owner,followers_and_selection,select_followers_list,meta219203){
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers_list = select_followers_list;
this.meta219203 = meta219203;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t219202.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t219202.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "list-group"},(function (){var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
return cljs.core.map.call(null,((function (followers,___$1){
return (function (p1__219198_SHARP_){
return om.core.build.call(null,mentionmyfollowers.core.follower_item,self__.followers_and_selection,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),p1__219198_SHARP_], null)], null));
});})(followers,___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,followers)));
})());
});

mentionmyfollowers.core.t219202.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_219204){
var self__ = this;
var _219204__$1 = this;
return self__.meta219203;
});

mentionmyfollowers.core.t219202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_219204,meta219203__$1){
var self__ = this;
var _219204__$1 = this;
return (new mentionmyfollowers.core.t219202(self__.owner,self__.followers_and_selection,self__.select_followers_list,meta219203__$1));
});

mentionmyfollowers.core.t219202.cljs$lang$type = true;

mentionmyfollowers.core.t219202.cljs$lang$ctorStr = "mentionmyfollowers.core/t219202";

mentionmyfollowers.core.t219202.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t219202");
});

mentionmyfollowers.core.__GT_t219202 = (function __GT_t219202(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta219203){
return (new mentionmyfollowers.core.t219202(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta219203));
});

}

return (new mentionmyfollowers.core.t219202(owner,followers_and_selection,select_followers_list,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers = (function select_followers(followers_and_selection,owner,p__219205){
var map__219210 = p__219205;
var map__219210__$1 = ((cljs.core.seq_QMARK_.call(null,map__219210))?cljs.core.apply.call(null,cljs.core.hash_map,map__219210):map__219210);
var on_cancel = cljs.core.get.call(null,map__219210__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
if(typeof mentionmyfollowers.core.t219211 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t219211 = (function (on_cancel,map__219210,p__219205,owner,followers_and_selection,select_followers,meta219212){
this.on_cancel = on_cancel;
this.map__219210 = map__219210;
this.p__219205 = p__219205;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers = select_followers;
this.meta219212 = meta219212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t219211.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t219211.prototype.om$core$IRender$render$arity$1 = ((function (map__219210,map__219210__$1,on_cancel){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,mentionmyfollowers.core.select_followers_list,self__.followers_and_selection),React.DOM.button({"className": "btn btn-primary"},"Go"),React.DOM.button({"onClick": self__.on_cancel, "className": "btn btn-danger"},"Cancel"));
});})(map__219210,map__219210__$1,on_cancel))
;

mentionmyfollowers.core.t219211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__219210,map__219210__$1,on_cancel){
return (function (_219213){
var self__ = this;
var _219213__$1 = this;
return self__.meta219212;
});})(map__219210,map__219210__$1,on_cancel))
;

mentionmyfollowers.core.t219211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__219210,map__219210__$1,on_cancel){
return (function (_219213,meta219212__$1){
var self__ = this;
var _219213__$1 = this;
return (new mentionmyfollowers.core.t219211(self__.on_cancel,self__.map__219210,self__.p__219205,self__.owner,self__.followers_and_selection,self__.select_followers,meta219212__$1));
});})(map__219210,map__219210__$1,on_cancel))
;

mentionmyfollowers.core.t219211.cljs$lang$type = true;

mentionmyfollowers.core.t219211.cljs$lang$ctorStr = "mentionmyfollowers.core/t219211";

mentionmyfollowers.core.t219211.cljs$lang$ctorPrWriter = ((function (map__219210,map__219210__$1,on_cancel){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t219211");
});})(map__219210,map__219210__$1,on_cancel))
;

mentionmyfollowers.core.__GT_t219211 = ((function (map__219210,map__219210__$1,on_cancel){
return (function __GT_t219211(on_cancel__$1,map__219210__$2,p__219205__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta219212){
return (new mentionmyfollowers.core.t219211(on_cancel__$1,map__219210__$2,p__219205__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta219212));
});})(map__219210,map__219210__$1,on_cancel))
;

}

return (new mentionmyfollowers.core.t219211(on_cancel,map__219210__$1,p__219205,owner,followers_and_selection,select_followers,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* The main application component
*/
mentionmyfollowers.core.application = (function application(data,owner){
if(typeof mentionmyfollowers.core.t219221 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t219221 = (function (owner,data,application,meta219222){
this.owner = owner;
this.data = data;
this.application = application;
this.meta219222 = meta219222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t219221.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t219221.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
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
return React.DOM.div({"className": "container"},(function (){var pred__219224 = cljs.core._EQ_;
var expr__219225 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__219224.call(null,new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534),expr__219225))){
return om.core.build.call(null,mentionmyfollowers.core.accounts_form,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518),handle_get_followers], null)], null));
} else {
if(cljs.core.truth_(pred__219224.call(null,new cljs.core.Keyword(null,"loading-followers","loading-followers",1692268659),expr__219225))){
return om.core.build.call(null,mentionmyfollowers.core.loading_followers,null);
} else {
if(cljs.core.truth_(pred__219224.call(null,new cljs.core.Keyword(null,"select-followers","select-followers",-1421776266),expr__219225))){
return om.core.build.call(null,mentionmyfollowers.core.select_followers,new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (pred__219224,expr__219225,handle_get_followers,___$1){
return (function (e){
cljs.core.println.call(null,"Cancel in select-followers view");

e.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534));
});})(pred__219224,expr__219225,handle_get_followers,___$1))
], null)], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__219225)].join('')));
}
}
}
})());
});

mentionmyfollowers.core.t219221.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t219221.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534)], null);
});

mentionmyfollowers.core.t219221.prototype.om$core$IWillMount$ = true;

mentionmyfollowers.core.t219221.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - Will Mount");

return mentionmyfollowers.core.read_user_id.call(null,((function (___$1){
return (function (p1__219214_SHARP_){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),((function (___$1){
return (function (user){
return cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"user-id","user-id",-206822291),p1__219214_SHARP_);
});})(___$1))
);
});})(___$1))
);
});

mentionmyfollowers.core.t219221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_219223){
var self__ = this;
var _219223__$1 = this;
return self__.meta219222;
});

mentionmyfollowers.core.t219221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_219223,meta219222__$1){
var self__ = this;
var _219223__$1 = this;
return (new mentionmyfollowers.core.t219221(self__.owner,self__.data,self__.application,meta219222__$1));
});

mentionmyfollowers.core.t219221.cljs$lang$type = true;

mentionmyfollowers.core.t219221.cljs$lang$ctorStr = "mentionmyfollowers.core/t219221";

mentionmyfollowers.core.t219221.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t219221");
});

mentionmyfollowers.core.__GT_t219221 = (function __GT_t219221(owner__$1,data__$1,application__$1,meta219222){
return (new mentionmyfollowers.core.t219221(owner__$1,data__$1,application__$1,meta219222));
});

}

return (new mentionmyfollowers.core.t219221(owner,data,application,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.application,mentionmyfollowers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
