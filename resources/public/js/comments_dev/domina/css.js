// Compiled by ClojureScript 0.0-2913 {}
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__2 = (function (base,expr){
if(typeof domina.css.t15933 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.css.t15933 = (function (expr,base,sel,meta15934){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta15934 = meta15934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t15933.prototype.domina$DomContent$ = true;

domina.css.t15933.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__15928_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__15928_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base));
});

domina.css.t15933.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__15929_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__15929_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base))));
});

domina.css.t15933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15935){
var self__ = this;
var _15935__$1 = this;
return self__.meta15934;
});

domina.css.t15933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15935,meta15934__$1){
var self__ = this;
var _15935__$1 = this;
return (new domina.css.t15933(self__.expr,self__.base,self__.sel,meta15934__$1));
});

domina.css.t15933.cljs$lang$type = true;

domina.css.t15933.cljs$lang$ctorStr = "domina.css/t15933";

domina.css.t15933.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"domina.css/t15933");
});

domina.css.__GT_t15933 = (function __GT_t15933(expr__$1,base__$1,sel__$1,meta15934){
return (new domina.css.t15933(expr__$1,base__$1,sel__$1,meta15934));
});

}

return (new domina.css.t15933(expr,base,sel,cljs.core.PersistentArrayMap.EMPTY));
});
sel = function(base,expr){
switch(arguments.length){
case 1:
return sel__1.call(this,base);
case 2:
return sel__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sel.cljs$core$IFn$_invoke$arity$1 = sel__1;
sel.cljs$core$IFn$_invoke$arity$2 = sel__2;
return sel;
})()
;