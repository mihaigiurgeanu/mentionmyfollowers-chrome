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
mentionmyfollowers.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),null], null),new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534),cljs.core.PersistentArrayMap.EMPTY], null));
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
mentionmyfollowers.core.show_user_id = (function show_user_id(p__161878,owner){
var map__161883 = p__161878;
var map__161883__$1 = ((cljs.core.seq_QMARK_.call(null,map__161883))?cljs.core.apply.call(null,cljs.core.hash_map,map__161883):map__161883);
var user_id = cljs.core.get.call(null,map__161883__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t161884 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t161884 = (function (user_id,map__161883,owner,p__161878,show_user_id,meta161885){
this.user_id = user_id;
this.map__161883 = map__161883;
this.owner = owner;
this.p__161878 = p__161878;
this.show_user_id = show_user_id;
this.meta161885 = meta161885;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t161884.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t161884.prototype.om$core$IRender$render$arity$1 = ((function (map__161883,map__161883__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__161883,map__161883__$1,user_id))
;

mentionmyfollowers.core.t161884.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__161883,map__161883__$1,user_id){
return (function (_161886){
var self__ = this;
var _161886__$1 = this;
return self__.meta161885;
});})(map__161883,map__161883__$1,user_id))
;

mentionmyfollowers.core.t161884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__161883,map__161883__$1,user_id){
return (function (_161886,meta161885__$1){
var self__ = this;
var _161886__$1 = this;
return (new mentionmyfollowers.core.t161884(self__.user_id,self__.map__161883,self__.owner,self__.p__161878,self__.show_user_id,meta161885__$1));
});})(map__161883,map__161883__$1,user_id))
;

mentionmyfollowers.core.t161884.cljs$lang$type = true;

mentionmyfollowers.core.t161884.cljs$lang$ctorStr = "mentionmyfollowers.core/t161884";

mentionmyfollowers.core.t161884.cljs$lang$ctorPrWriter = ((function (map__161883,map__161883__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t161884");
});})(map__161883,map__161883__$1,user_id))
;

mentionmyfollowers.core.__GT_t161884 = ((function (map__161883,map__161883__$1,user_id){
return (function __GT_t161884(user_id__$1,map__161883__$2,owner__$1,p__161878__$1,show_user_id__$1,meta161885){
return (new mentionmyfollowers.core.t161884(user_id__$1,map__161883__$2,owner__$1,p__161878__$1,show_user_id__$1,meta161885));
});})(map__161883,map__161883__$1,user_id))
;

}

return (new mentionmyfollowers.core.t161884(user_id,map__161883__$1,owner,p__161878,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* A form to enter the accounts whose followers you want to mention
*/
mentionmyfollowers.core.accounts_form = (function accounts_form(data,owner,p__161887){
var map__161892 = p__161887;
var map__161892__$1 = ((cljs.core.seq_QMARK_.call(null,map__161892))?cljs.core.apply.call(null,cljs.core.hash_map,map__161892):map__161892);
var on_click = cljs.core.get.call(null,map__161892__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
if(typeof mentionmyfollowers.core.t161893 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t161893 = (function (on_click,map__161892,p__161887,owner,data,accounts_form,meta161894){
this.on_click = on_click;
this.map__161892 = map__161892;
this.p__161887 = p__161887;
this.owner = owner;
this.data = data;
this.accounts_form = accounts_form;
this.meta161894 = meta161894;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t161893.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t161893.prototype.om$core$IRender$render$arity$1 = ((function (map__161892,map__161892__$1,on_click){
return (function (_){
var self__ = this;
var ___$1 = this;
var text = new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.data);
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "accounts-input"},"Accounts:"),om.dom.textarea.call(null,{"onChange": ((function (text,___$1,map__161892,map__161892__$1,on_click){
return (function (e){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"accounts","accounts",-935308676),((function (text,___$1,map__161892,map__161892__$1,on_click){
return (function (){
return e.target.value;
});})(text,___$1,map__161892,map__161892__$1,on_click))
);
});})(text,___$1,map__161892,map__161892__$1,on_click))
, "value": new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.data), "rows": "3", "className": "form-control", "id": "accounts-input"})),React.DOM.button({"onClick": ((function (text,___$1,map__161892,map__161892__$1,on_click){
return (function (e){
e.preventDefault();

cljs.core.println.call(null,"Get followers button clicked");

return self__.on_click.call(null,text);
});})(text,___$1,map__161892,map__161892__$1,on_click))
, "className": "btn btn-primary"},"Get Followers"));
});})(map__161892,map__161892__$1,on_click))
;

mentionmyfollowers.core.t161893.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__161892,map__161892__$1,on_click){
return (function (_161895){
var self__ = this;
var _161895__$1 = this;
return self__.meta161894;
});})(map__161892,map__161892__$1,on_click))
;

mentionmyfollowers.core.t161893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__161892,map__161892__$1,on_click){
return (function (_161895,meta161894__$1){
var self__ = this;
var _161895__$1 = this;
return (new mentionmyfollowers.core.t161893(self__.on_click,self__.map__161892,self__.p__161887,self__.owner,self__.data,self__.accounts_form,meta161894__$1));
});})(map__161892,map__161892__$1,on_click))
;

mentionmyfollowers.core.t161893.cljs$lang$type = true;

mentionmyfollowers.core.t161893.cljs$lang$ctorStr = "mentionmyfollowers.core/t161893";

mentionmyfollowers.core.t161893.cljs$lang$ctorPrWriter = ((function (map__161892,map__161892__$1,on_click){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t161893");
});})(map__161892,map__161892__$1,on_click))
;

mentionmyfollowers.core.__GT_t161893 = ((function (map__161892,map__161892__$1,on_click){
return (function __GT_t161893(on_click__$1,map__161892__$2,p__161887__$1,owner__$1,data__$1,accounts_form__$1,meta161894){
return (new mentionmyfollowers.core.t161893(on_click__$1,map__161892__$2,p__161887__$1,owner__$1,data__$1,accounts_form__$1,meta161894));
});})(map__161892,map__161892__$1,on_click))
;

}

return (new mentionmyfollowers.core.t161893(on_click,map__161892__$1,p__161887,owner,data,accounts_form,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* The main application component
*/
mentionmyfollowers.core.application = (function application(data,owner){
var handle_get_followers = (function (p1__161896_SHARP_){
return cljs.core.println.call(null,"Getting followers for",p1__161896_SHARP_);
});
if(typeof mentionmyfollowers.core.t161901 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t161901 = (function (handle_get_followers,owner,data,application,meta161902){
this.handle_get_followers = handle_get_followers;
this.owner = owner;
this.data = data;
this.application = application;
this.meta161902 = meta161902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t161901.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t161901.prototype.om$core$IRender$render$arity$1 = ((function (handle_get_followers){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - render");

return React.DOM.div({"className": "container"},om.core.build.call(null,mentionmyfollowers.core.accounts_form,new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),self__.handle_get_followers], null)], null)));
});})(handle_get_followers))
;

mentionmyfollowers.core.t161901.prototype.om$core$IDidMount$ = true;

mentionmyfollowers.core.t161901.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (handle_get_followers){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"application - Did Mount");
});})(handle_get_followers))
;

mentionmyfollowers.core.t161901.prototype.om$core$IWillMount$ = true;

mentionmyfollowers.core.t161901.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (handle_get_followers){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - Will Mount");

return mentionmyfollowers.core.read_user_id.call(null,((function (___$1,handle_get_followers){
return (function (p1__161897_SHARP_){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),((function (___$1,handle_get_followers){
return (function (user){
return cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"user-id","user-id",-206822291),p1__161897_SHARP_);
});})(___$1,handle_get_followers))
);
});})(___$1,handle_get_followers))
);
});})(handle_get_followers))
;

mentionmyfollowers.core.t161901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (handle_get_followers){
return (function (_161903){
var self__ = this;
var _161903__$1 = this;
return self__.meta161902;
});})(handle_get_followers))
;

mentionmyfollowers.core.t161901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (handle_get_followers){
return (function (_161903,meta161902__$1){
var self__ = this;
var _161903__$1 = this;
return (new mentionmyfollowers.core.t161901(self__.handle_get_followers,self__.owner,self__.data,self__.application,meta161902__$1));
});})(handle_get_followers))
;

mentionmyfollowers.core.t161901.cljs$lang$type = true;

mentionmyfollowers.core.t161901.cljs$lang$ctorStr = "mentionmyfollowers.core/t161901";

mentionmyfollowers.core.t161901.cljs$lang$ctorPrWriter = ((function (handle_get_followers){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t161901");
});})(handle_get_followers))
;

mentionmyfollowers.core.__GT_t161901 = ((function (handle_get_followers){
return (function __GT_t161901(handle_get_followers__$1,owner__$1,data__$1,application__$1,meta161902){
return (new mentionmyfollowers.core.t161901(handle_get_followers__$1,owner__$1,data__$1,application__$1,meta161902));
});})(handle_get_followers))
;

}

return (new mentionmyfollowers.core.t161901(handle_get_followers,owner,data,application,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.application,mentionmyfollowers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
