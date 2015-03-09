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
mentionmyfollowers.core.show_user_id = (function show_user_id(p__102722,owner){
var map__102727 = p__102722;
var map__102727__$1 = ((cljs.core.seq_QMARK_.call(null,map__102727))?cljs.core.apply.call(null,cljs.core.hash_map,map__102727):map__102727);
var user_id = cljs.core.get.call(null,map__102727__$1,new cljs.core.Keyword(null,"user-id","user-id",-206822291));
if(typeof mentionmyfollowers.core.t102728 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t102728 = (function (user_id,map__102727,owner,p__102722,show_user_id,meta102729){
this.user_id = user_id;
this.map__102727 = map__102727;
this.owner = owner;
this.p__102722 = p__102722;
this.show_user_id = show_user_id;
this.meta102729 = meta102729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t102728.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t102728.prototype.om$core$IRender$render$arity$1 = ((function (map__102727,map__102727__$1,user_id){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.p(null,[cljs.core.str("User-id is "),cljs.core.str((cljs.core.truth_(self__.user_id)?self__.user_id:"Not Available"))].join(''));
});})(map__102727,map__102727__$1,user_id))
;

mentionmyfollowers.core.t102728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__102727,map__102727__$1,user_id){
return (function (_102730){
var self__ = this;
var _102730__$1 = this;
return self__.meta102729;
});})(map__102727,map__102727__$1,user_id))
;

mentionmyfollowers.core.t102728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__102727,map__102727__$1,user_id){
return (function (_102730,meta102729__$1){
var self__ = this;
var _102730__$1 = this;
return (new mentionmyfollowers.core.t102728(self__.user_id,self__.map__102727,self__.owner,self__.p__102722,self__.show_user_id,meta102729__$1));
});})(map__102727,map__102727__$1,user_id))
;

mentionmyfollowers.core.t102728.cljs$lang$type = true;

mentionmyfollowers.core.t102728.cljs$lang$ctorStr = "mentionmyfollowers.core/t102728";

mentionmyfollowers.core.t102728.cljs$lang$ctorPrWriter = ((function (map__102727,map__102727__$1,user_id){
return (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t102728");
});})(map__102727,map__102727__$1,user_id))
;

mentionmyfollowers.core.__GT_t102728 = ((function (map__102727,map__102727__$1,user_id){
return (function __GT_t102728(user_id__$1,map__102727__$2,owner__$1,p__102722__$1,show_user_id__$1,meta102729){
return (new mentionmyfollowers.core.t102728(user_id__$1,map__102727__$2,owner__$1,p__102722__$1,show_user_id__$1,meta102729));
});})(map__102727,map__102727__$1,user_id))
;

}

return (new mentionmyfollowers.core.t102728(user_id,map__102727__$1,owner,p__102722,show_user_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* A form to enter the accounts whose followers you want to mention
*/
mentionmyfollowers.core.accounts_form = (function accounts_form(data,owner){
if(typeof mentionmyfollowers.core.t102735 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t102735 = (function (owner,data,accounts_form,meta102736){
this.owner = owner;
this.data = data;
this.accounts_form = accounts_form;
this.meta102736 = meta102736;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t102735.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t102735.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.form(null,React.DOM.div({"className": "form-group"},React.DOM.label({"htmlFor": "accounts-input"},"Accounts:"),om.dom.textarea.call(null,{"onChange": ((function (___$1){
return (function (e){
return om.core.transact_BANG_.call(null,self__.data,((function (___$1){
return (function (p1__102731_SHARP_){
return cljs.core.assoc.call(null,p1__102731_SHARP_,new cljs.core.Keyword(null,"accounts","accounts",-935308676),e.target.value);
});})(___$1))
);
});})(___$1))
, "value": new cljs.core.Keyword(null,"accounts","accounts",-935308676).cljs$core$IFn$_invoke$arity$1(self__.data), "id": "accounts-input"})),React.DOM.button({"onClick": ((function (___$1){
return (function (e){
e.preventDefault();

return cljs.core.println.call(null,"Get followers button clicked");
});})(___$1))
, "className": "btn btn-primary"},"Get Followers"));
});

mentionmyfollowers.core.t102735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_102737){
var self__ = this;
var _102737__$1 = this;
return self__.meta102736;
});

mentionmyfollowers.core.t102735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_102737,meta102736__$1){
var self__ = this;
var _102737__$1 = this;
return (new mentionmyfollowers.core.t102735(self__.owner,self__.data,self__.accounts_form,meta102736__$1));
});

mentionmyfollowers.core.t102735.cljs$lang$type = true;

mentionmyfollowers.core.t102735.cljs$lang$ctorStr = "mentionmyfollowers.core/t102735";

mentionmyfollowers.core.t102735.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t102735");
});

mentionmyfollowers.core.__GT_t102735 = (function __GT_t102735(owner__$1,data__$1,accounts_form__$1,meta102736){
return (new mentionmyfollowers.core.t102735(owner__$1,data__$1,accounts_form__$1,meta102736));
});

}

return (new mentionmyfollowers.core.t102735(owner,data,accounts_form,cljs.core.PersistentArrayMap.EMPTY));
});
mentionmyfollowers.core.application = (function application(data,owner){
if(typeof mentionmyfollowers.core.t102742 !== 'undefined'){
} else {

/**
* @constructor
*/
mentionmyfollowers.core.t102742 = (function (owner,data,application,meta102743){
this.owner = owner;
this.data = data;
this.application = application;
this.meta102743 = meta102743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
mentionmyfollowers.core.t102742.prototype.om$core$IRender$ = true;

mentionmyfollowers.core.t102742.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - render");

return om.core.build.call(null,mentionmyfollowers.core.accounts_form,new cljs.core.Keyword(null,"accounts-form","accounts-form",-328669534).cljs$core$IFn$_invoke$arity$1(self__.data));
});

mentionmyfollowers.core.t102742.prototype.om$core$IDidMount$ = true;

mentionmyfollowers.core.t102742.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.println.call(null,"application - Did Mount");
});

mentionmyfollowers.core.t102742.prototype.om$core$IWillMount$ = true;

mentionmyfollowers.core.t102742.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,"application - Will Mount");

return mentionmyfollowers.core.read_user_id.call(null,((function (___$1){
return (function (p1__102738_SHARP_){
return om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"user","user",1532431356),((function (___$1){
return (function (user){
return cljs.core.assoc.call(null,user,new cljs.core.Keyword(null,"user-id","user-id",-206822291),p1__102738_SHARP_);
});})(___$1))
);
});})(___$1))
);
});

mentionmyfollowers.core.t102742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_102744){
var self__ = this;
var _102744__$1 = this;
return self__.meta102743;
});

mentionmyfollowers.core.t102742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_102744,meta102743__$1){
var self__ = this;
var _102744__$1 = this;
return (new mentionmyfollowers.core.t102742(self__.owner,self__.data,self__.application,meta102743__$1));
});

mentionmyfollowers.core.t102742.cljs$lang$type = true;

mentionmyfollowers.core.t102742.cljs$lang$ctorStr = "mentionmyfollowers.core/t102742";

mentionmyfollowers.core.t102742.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"mentionmyfollowers.core/t102742");
});

mentionmyfollowers.core.__GT_t102742 = (function __GT_t102742(owner__$1,data__$1,application__$1,meta102743){
return (new mentionmyfollowers.core.t102742(owner__$1,data__$1,application__$1,meta102743));
});

}

return (new mentionmyfollowers.core.t102742(owner,data,application,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,mentionmyfollowers.core.application,mentionmyfollowers.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),domina.single_node.call(null,domina.css.sel.call(null,"#app"))], null));
