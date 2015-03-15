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
mentionmyfollowers.core.show_user_id = (function show_user_id(p__125065,owner){
var map__125070 = p__125065;
var map__125070__$1 = ((cljs.core.seq_QMARK_.call(null,map__125070))?cljs.core.apply.call(null,cljs.core.hash_map,map__125070):map__125070);
var user_id = cljs.core.get.call(null,map__125070__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t125071 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t125071 = (function (user_id,map__125070,owner,p__125065,show_user_id,meta125072){
this.user_id = user_id;
this.map__125070 = map__125070;
this.owner = owner;
this.p__125065 = p__125065;
this.show_user_id = show_user_id;
this.meta125072 = meta125072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t125071.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t125071.prototype.om$core$IRender$render$arity$1 = ((function (map__125070,map__125070__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__125070,map__125070__$1,user_id))
;

mentionmyfollowers.core.t125071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__125070,map__125070__$1,user_id){
return (function (_125073){
var self__ = this;
var _125073__$1 = this;
return self__.meta125072;
});})(map__125070,map__125070__$1,user_id))
;

mentionmyfollowers.core.t125071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__125070,map__125070__$1,user_id){
return (function (_125073,meta125072__$1){
var self__ = this;
var _125073__$1 = this;
return (new mentionmyfollowers.core.t125071(self__.user_id,self__.map__125070,self__.owner,self__.p__125065,self__.show_user_id,meta125072__$1));
});})(map__125070,map__125070__$1,user_id))
;

mentionmyfollowers.core.t125071.cljs$lang$type = true;

mentionmyfollowers.core.t125071.cljs$lang$ctorStr = "mentionmyfollowers.core/t125071";

mentionmyfollowers.core.t125071.cljs$lang$ctorPrWriter = ((function (map__125070,map__125070__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t125071");
});})(map__125070,map__125070__$1,user_id))
;

mentionmyfollowers.core.__GT_t125071 = ((function (map__125070,map__125070__$1,user_id){
return (function __GT_t125071(user_id__$1,map__125070__$2,owner__$1,p__125065__$1,show_user_id__$1,meta125072){
return (new mentionmyfollowers.core.t125071(user_id__$1,map__125070__$2,owner__$1,p__125065__$1,show_user_id__$1,meta125072));
});})(map__125070,map__125070__$1,user_id))
;

}

return (new mentionmyfollowers.core.t125071(user_id,map__125070__$1,owner,p__125065,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* A form to enter the accounts whose followers you want to mention
*/
mentionmyfollowers.core.accounts_form = (function accounts_form(accounts,owner,p__125074){
var map__125081 = p__125074;
var map__125081__$1 = ((cljs.core.seq_QMARK_.call(null,map__125081))?cljs.core.apply.call(null,cljs.core.hash_map,map__125081):map__125081);
var on_get_followers = cljs.core.get.call(null,map__125081__$1,new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518));
if(typeof mentionmyfollowers.core.t125082 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t125082 = (function (on_get_followers,map__125081,p__125074,owner,accounts,accounts_form,meta125083){
this.on_get_followers = on_get_followers;
this.map__125081 = map__125081;
this.p__125074 = p__125074;
this.owner = owner;
this.accounts = accounts;
this.accounts_form = accounts_form;
this.meta125083 = meta125083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t125082.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t125082.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__125081,map__125081__$1,on_get_followers){
return (function (_,p__125085){
var self__ = this;
var map__125086 = p__125085;
var map__125086__$1 = ((cljs.core.seq_QMARK_.call(null,map__125086))?cljs.core.apply.call(null,cljs.core.hash_map,map__125086):map__125086);
var text = cljs.core.get.call(null,map__125086__$1,new cljs.core.Keyword(null,"accounts","accounts",-935308676));
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "accounts-input"},"Accounts:"),om.dom.textarea.call(null,{"onChange": ((function (___$1,map__125086,map__125086__$1,text,map__125081,map__125081__$1,on_get_followers){
return (function (e){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"accounts","accounts",-935308676),e.target.value);
});})(___$1,map__125086,map__125086__$1,text,map__125081,map__125081__$1,on_get_followers))
, "value": text, "rows": "3", "className": "form-control", "id": "accounts-input"})),React.DOM.button({"onClick": ((function (___$1,map__125086,map__125086__$1,text,map__125081,map__125081__$1,on_get_followers){
return (function (e){
e.preventDefault();

cljs.core.println.call(null,"Get followers button clicked");

var new_accounts = clojure.string.split.call(null,text,/ /);
om.core.update_BANG_.call(null,self__.accounts,new_accounts);

return self__.on_get_followers.call(null,new_accounts);
});})(___$1,map__125086,map__125086__$1,text,map__125081,map__125081__$1,on_get_followers))
, "className": "btn btn-primary"},"Get Followers"));
});})(map__125081,map__125081__$1,on_get_followers))
;

mentionmyfollowers.core.t125082.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t125082.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__125081,map__125081__$1,on_get_followers){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accounts","accounts",-935308676),clojure.string.join.call(null," ",self__.accounts)], null);
});})(map__125081,map__125081__$1,on_get_followers))
;

mentionmyfollowers.core.t125082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__125081,map__125081__$1,on_get_followers){
return (function (_125084){
var self__ = this;
var _125084__$1 = this;
return self__.meta125083;
});})(map__125081,map__125081__$1,on_get_followers))
;

mentionmyfollowers.core.t125082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__125081,map__125081__$1,on_get_followers){
return (function (_125084,meta125083__$1){
var self__ = this;
var _125084__$1 = this;
return (new mentionmyfollowers.core.t125082(self__.on_get_followers,self__.map__125081,self__.p__125074,self__.owner,self__.accounts,self__.accounts_form,meta125083__$1));
});})(map__125081,map__125081__$1,on_get_followers))
;

mentionmyfollowers.core.t125082.cljs$lang$type = true;

mentionmyfollowers.core.t125082.cljs$lang$ctorStr = "mentionmyfollowers.core/t125082";

mentionmyfollowers.core.t125082.cljs$lang$ctorPrWriter = ((function (map__125081,map__125081__$1,on_get_followers){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t125082");
});})(map__125081,map__125081__$1,on_get_followers))
;

mentionmyfollowers.core.__GT_t125082 = ((function (map__125081,map__125081__$1,on_get_followers){
return (function __GT_t125082(on_get_followers__$1,map__125081__$2,p__125074__$1,owner__$1,accounts__$1,accounts_form__$1,meta125083){
return (new mentionmyfollowers.core.t125082(on_get_followers__$1,map__125081__$2,p__125074__$1,owner__$1,accounts__$1,accounts_form__$1,meta125083));
});})(map__125081,map__125081__$1,on_get_followers))
;

}

return (new mentionmyfollowers.core.t125082(on_get_followers,map__125081__$1,p__125074,owner,accounts,accounts_form,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Reports an error of restful api call.
*/
mentionmyfollowers.core.report_error_BANG_ = (function report_error_BANG_(p__125087){
var map__125089 = p__125087;
var map__125089__$1 = ((cljs.core.seq_QMARK_.call(null,map__125089))?cljs.core.apply.call(null,cljs.core.hash_map,map__125089):map__125089);
var error = map__125089__$1;
var failure = cljs.core.get.call(null,map__125089__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
var status_text = cljs.core.get.call(null,map__125089__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var status = cljs.core.get.call(null,map__125089__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.println.call(null,error);
});
mentionmyfollowers.core.loading_followers = (function loading_followers(_,___$1){
if(typeof mentionmyfollowers.core.t125093 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t125093 = (function (_,loading_followers,meta125094){
this._ = _;
this.loading_followers = loading_followers;
this.meta125094 = meta125094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t125093.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t125093.prototype.om$core$IRender$render$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return React.DOM.div({"className": "progress"},React.DOM.div({"aria-valuemax": "100", "aria-valuemin": "0", "aria-valuenow": "75", "role": "progressbar", "className": "progress-bar progress-bar-striped active"}));
});

mentionmyfollowers.core.t125093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_125095){
var self__ = this;
var _125095__$1 = this;
return self__.meta125094;
});

mentionmyfollowers.core.t125093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_125095,meta125094__$1){
var self__ = this;
var _125095__$1 = this;
return (new mentionmyfollowers.core.t125093(self__._,self__.loading_followers,meta125094__$1));
});

mentionmyfollowers.core.t125093.cljs$lang$type = true;

mentionmyfollowers.core.t125093.cljs$lang$ctorStr = "mentionmyfollowers.core/t125093";

mentionmyfollowers.core.t125093.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t125093");
});

mentionmyfollowers.core.__GT_t125093 = (function __GT_t125093(___$2,loading_followers__$1,meta125094){
return (new mentionmyfollowers.core.t125093(___$2,loading_followers__$1,meta125094));
});

}

return (new mentionmyfollowers.core.t125093(___$1,loading_followers,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.follower_item = (function follower_item(followers,owner,p__125096){
var map__125101 = p__125096;
var map__125101__$1 = ((cljs.core.seq_QMARK_.call(null,map__125101))?cljs.core.apply.call(null,cljs.core.hash_map,map__125101):map__125101);
var is_selected_QMARK_ = cljs.core.get.call(null,map__125101__$1,new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043));
var on_click = cljs.core.get.call(null,map__125101__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var idx = cljs.core.get.call(null,map__125101__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(typeof mentionmyfollowers.core.t125102 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t125102 = (function (idx,on_click,is_selected_QMARK_,map__125101,p__125096,owner,followers,follower_item,meta125103){
this.idx = idx;
this.on_click = on_click;
this.is_selected_QMARK_ = is_selected_QMARK_;
this.map__125101 = map__125101;
this.p__125096 = p__125096;
this.owner = owner;
this.followers = followers;
this.follower_item = follower_item;
this.meta125103 = meta125103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t125102.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t125102.prototype.om$core$IRender$render$arity$1 = ((function (map__125101,map__125101__$1,is_selected_QMARK_,on_click,idx){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.a({"onClick": self__.on_click, "className": [cljs.core.str("list-group-item"),cljs.core.str((cljs.core.truth_(self__.is_selected_QMARK_)?"active":null))].join(''), "href": "#"},cljs.core.get.call(null,self__.followers,self__.idx));
});})(map__125101,map__125101__$1,is_selected_QMARK_,on_click,idx))
;

mentionmyfollowers.core.t125102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__125101,map__125101__$1,is_selected_QMARK_,on_click,idx){
return (function (_125104){
var self__ = this;
var _125104__$1 = this;
return self__.meta125103;
});})(map__125101,map__125101__$1,is_selected_QMARK_,on_click,idx))
;

mentionmyfollowers.core.t125102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__125101,map__125101__$1,is_selected_QMARK_,on_click,idx){
return (function (_125104,meta125103__$1){
var self__ = this;
var _125104__$1 = this;
return (new mentionmyfollowers.core.t125102(self__.idx,self__.on_click,self__.is_selected_QMARK_,self__.map__125101,self__.p__125096,self__.owner,self__.followers,self__.follower_item,meta125103__$1));
});})(map__125101,map__125101__$1,is_selected_QMARK_,on_click,idx))
;

mentionmyfollowers.core.t125102.cljs$lang$type = true;

mentionmyfollowers.core.t125102.cljs$lang$ctorStr = "mentionmyfollowers.core/t125102";

mentionmyfollowers.core.t125102.cljs$lang$ctorPrWriter = ((function (map__125101,map__125101__$1,is_selected_QMARK_,on_click,idx){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t125102");
});})(map__125101,map__125101__$1,is_selected_QMARK_,on_click,idx))
;

mentionmyfollowers.core.__GT_t125102 = ((function (map__125101,map__125101__$1,is_selected_QMARK_,on_click,idx){
return (function __GT_t125102(idx__$1,on_click__$1,is_selected_QMARK___$1,map__125101__$2,p__125096__$1,owner__$1,followers__$1,follower_item__$1,meta125103){
return (new mentionmyfollowers.core.t125102(idx__$1,on_click__$1,is_selected_QMARK___$1,map__125101__$2,p__125096__$1,owner__$1,followers__$1,follower_item__$1,meta125103));
});})(map__125101,map__125101__$1,is_selected_QMARK_,on_click,idx))
;

}

return (new mentionmyfollowers.core.t125102(idx,on_click,is_selected_QMARK_,map__125101__$1,p__125096,owner,followers,follower_item,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.is_selected_QMARK_ = (function is_selected_QMARK_(i,p__125105){
var map__125107 = p__125105;
var map__125107__$1 = ((cljs.core.seq_QMARK_.call(null,map__125107))?cljs.core.apply.call(null,cljs.core.hash_map,map__125107):map__125107);
var to = cljs.core.get.call(null,map__125107__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__125107__$1,new cljs.core.Keyword(null,"from","from",1815293044));
if(cljs.core.not.call(null,(function (){var or__3981__auto__ = from;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return to;
}
})())){
return null;
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
mentionmyfollowers.core.update_selection = (function update_selection(p__125108,idx){
var map__125110 = p__125108;
var map__125110__$1 = ((cljs.core.seq_QMARK_.call(null,map__125110))?cljs.core.apply.call(null,cljs.core.hash_map,map__125110):map__125110);
var selection = map__125110__$1;
var to = cljs.core.get.call(null,map__125110__$1,new cljs.core.Keyword(null,"to","to",192099007));
var from = cljs.core.get.call(null,map__125110__$1,new cljs.core.Keyword(null,"from","from",1815293044));
if(((from == null)) || ((idx <= from))){
return cljs.core.assoc.call(null,selection,new cljs.core.Keyword(null,"from","from",1815293044),idx);
} else {
return cljs.core.assoc.call(null,selection,new cljs.core.Keyword(null,"to","to",192099007),idx);

}
});
mentionmyfollowers.core.select_followers_list = (function select_followers_list(followers_and_selection,owner){
if(typeof mentionmyfollowers.core.t125115 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t125115 = (function (owner,followers_and_selection,select_followers_list,meta125116){
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers_list = select_followers_list;
this.meta125116 = meta125116;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t125115.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t125115.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "list-group"},(function (){var followers = new cljs.core.Keyword(null,"followers","followers",1992141885).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection);
return cljs.core.map.call(null,((function (followers,___$1){
return (function (p1__125111_SHARP_){
return om.core.build.call(null,mentionmyfollowers.core.follower_item,followers,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx","idx",1053688473),p1__125111_SHARP_,new cljs.core.Keyword(null,"is-selected?","is-selected?",694061043),mentionmyfollowers.core.is_selected_QMARK_.call(null,p1__125111_SHARP_,new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(self__.followers_and_selection)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (followers,___$1){
return (function (e){
e.preventDefault();

return om.core.transact_BANG_.call(null,self__.followers_and_selection,new cljs.core.Keyword(null,"selection","selection",975998651),((function (followers,___$1){
return (function (selection){
return mentionmyfollowers.core.update_selection.call(null,selection,p1__125111_SHARP_);
});})(followers,___$1))
);
});})(followers,___$1))
], null)], null));
});})(followers,___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,followers)));
})());
});

mentionmyfollowers.core.t125115.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_125117){
var self__ = this;
var _125117__$1 = this;
return self__.meta125116;
});

mentionmyfollowers.core.t125115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_125117,meta125116__$1){
var self__ = this;
var _125117__$1 = this;
return (new mentionmyfollowers.core.t125115(self__.owner,self__.followers_and_selection,self__.select_followers_list,meta125116__$1));
});

mentionmyfollowers.core.t125115.cljs$lang$type = true;

mentionmyfollowers.core.t125115.cljs$lang$ctorStr = "mentionmyfollowers.core/t125115";

mentionmyfollowers.core.t125115.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t125115");
});

mentionmyfollowers.core.__GT_t125115 = (function __GT_t125115(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta125116){
return (new mentionmyfollowers.core.t125115(owner__$1,followers_and_selection__$1,select_followers_list__$1,meta125116));
});

}

return (new mentionmyfollowers.core.t125115(owner,followers_and_selection,select_followers_list,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.select_followers = (function select_followers(followers_and_selection,owner,p__125118){
var map__125123 = p__125118;
var map__125123__$1 = ((cljs.core.seq_QMARK_.call(null,map__125123))?cljs.core.apply.call(null,cljs.core.hash_map,map__125123):map__125123);
var on_cancel = cljs.core.get.call(null,map__125123__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
if(typeof mentionmyfollowers.core.t125124 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t125124 = (function (on_cancel,map__125123,p__125118,owner,followers_and_selection,select_followers,meta125125){
this.on_cancel = on_cancel;
this.map__125123 = map__125123;
this.p__125118 = p__125118;
this.owner = owner;
this.followers_and_selection = followers_and_selection;
this.select_followers = select_followers;
this.meta125125 = meta125125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t125124.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t125124.prototype.om$core$IRender$render$arity$1 = ((function (map__125123,map__125123__$1,on_cancel){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.core.build.call(null,mentionmyfollowers.core.select_followers_list,self__.followers_and_selection),React.DOM.button({"className": "btn btn-primary"},"Go"),React.DOM.button({"onClick": self__.on_cancel, "className": "btn btn-danger"},"Cancel"));
});})(map__125123,map__125123__$1,on_cancel))
;

mentionmyfollowers.core.t125124.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__125123,map__125123__$1,on_cancel){
return (function (_125126){
var self__ = this;
var _125126__$1 = this;
return self__.meta125125;
});})(map__125123,map__125123__$1,on_cancel))
;

mentionmyfollowers.core.t125124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__125123,map__125123__$1,on_cancel){
return (function (_125126,meta125125__$1){
var self__ = this;
var _125126__$1 = this;
return (new mentionmyfollowers.core.t125124(self__.on_cancel,self__.map__125123,self__.p__125118,self__.owner,self__.followers_and_selection,self__.select_followers,meta125125__$1));
});})(map__125123,map__125123__$1,on_cancel))
;

mentionmyfollowers.core.t125124.cljs$lang$type = true;

mentionmyfollowers.core.t125124.cljs$lang$ctorStr = "mentionmyfollowers.core/t125124";

mentionmyfollowers.core.t125124.cljs$lang$ctorPrWriter = ((function (map__125123,map__125123__$1,on_cancel){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t125124");
});})(map__125123,map__125123__$1,on_cancel))
;

mentionmyfollowers.core.__GT_t125124 = ((function (map__125123,map__125123__$1,on_cancel){
return (function __GT_t125124(on_cancel__$1,map__125123__$2,p__125118__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta125125){
return (new mentionmyfollowers.core.t125124(on_cancel__$1,map__125123__$2,p__125118__$1,owner__$1,followers_and_selection__$1,select_followers__$1,meta125125));
});})(map__125123,map__125123__$1,on_cancel))
;

}

return (new mentionmyfollowers.core.t125124(on_cancel,map__125123__$1,p__125118,owner,followers_and_selection,select_followers,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* The main application component
*/
mentionmyfollowers.core.application = (function application(data,owner){
if(typeof mentionmyfollowers.core.t125134 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t125134 = (function (owner,data,application,meta125135){
this.owner = owner;
this.data = data;
this.application = application;
this.meta125135 = meta125135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t125134.prototype.om$core$IRenderState$ = true;

mentionmyfollowers.core.t125134.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
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
return React.DOM.div({"className": "container"},(function (){var pred__125137 = cljs.core._EQ_;
var expr__125138 = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__125137.call(null,new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534),expr__125138))){
return om.core.build.call(null,mentionmyfollowers.core.accounts_form,new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-get-followers","on-get-followers",87044518),handle_get_followers], null)], null));
} else {
if(cljs.core.truth_(pred__125137.call(null,new cljs.core.Keyword(null,"loading-followers","loading-followers",1692268659),expr__125138))){
return om.core.build.call(null,mentionmyfollowers.core.loading_followers,null);
} else {
if(cljs.core.truth_(pred__125137.call(null,new cljs.core.Keyword(null,"select-followers","select-followers",-1421776266),expr__125138))){
return om.core.build.call(null,mentionmyfollowers.core.select_followers,new cljs.core.Keyword(null,"followers-and-selection","followers-and-selection",-1144286188).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),((function (pred__125137,expr__125138,handle_get_followers,___$1){
return (function (e){
cljs.core.println.call(null,"Cancel in select-followers view");

e.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534));
});})(pred__125137,expr__125138,handle_get_followers,___$1))
], null)], null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__125138)].join('')));
}
}
}
})());
});

mentionmyfollowers.core.t125134.prototype.om$core$IInitState$ = true;

mentionmyfollowers.core.t125134.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534)], null);
});

mentionmyfollowers.core.t125134.prototype.om$core$IWillMount$ = true;

mentionmyfollowers.core.t125134.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - Will Mount");

return mentionmyfollowers.core.read_user_id.call(null,((function (___$1){
return (function (p1__125127_SHARP_){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),((function (___$1){
return (function (user){
return cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"user-id","user-id",-206822291),p1__125127_SHARP_);
});})(___$1))
);
});})(___$1))
);
});

mentionmyfollowers.core.t125134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_125136){
var self__ = this;
var _125136__$1 = this;
return self__.meta125135;
});

mentionmyfollowers.core.t125134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_125136,meta125135__$1){
var self__ = this;
var _125136__$1 = this;
return (new mentionmyfollowers.core.t125134(self__.owner,self__.data,self__.application,meta125135__$1));
});

mentionmyfollowers.core.t125134.cljs$lang$type = true;

mentionmyfollowers.core.t125134.cljs$lang$ctorStr = "mentionmyfollowers.core/t125134";

mentionmyfollowers.core.t125134.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t125134");
});

mentionmyfollowers.core.__GT_t125134 = (function __GT_t125134(owner__$1,data__$1,application__$1,meta125135){
return (new mentionmyfollowers.core.t125134(owner__$1,data__$1,application__$1,meta125135));
});

}

return (new mentionmyfollowers.core.t125134(owner,data,application,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.application,mentionmyfollowers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
