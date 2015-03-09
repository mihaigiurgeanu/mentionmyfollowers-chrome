// Compiled by ClojureScript 0.0-2913 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_168295 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_168296 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_168297 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_168297,opt_wrapper_168295,table_section_wrapper_168296,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_168295,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_168296,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_168296,cell_wrapper_168297,table_section_wrapper_168296,table_section_wrapper_168296]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__168302 = cljs.core.seq.call(null,tbody);
var chunk__168303 = null;
var count__168304 = (0);
var i__168305 = (0);
while(true){
if((i__168305 < count__168304)){
var child = cljs.core._nth.call(null,chunk__168303,i__168305);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__168306 = seq__168302;
var G__168307 = chunk__168303;
var G__168308 = count__168304;
var G__168309 = (i__168305 + (1));
seq__168302 = G__168306;
chunk__168303 = G__168307;
count__168304 = G__168308;
i__168305 = G__168309;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__168302);
if(temp__4126__auto__){
var seq__168302__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168302__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__168302__$1);
var G__168310 = cljs.core.chunk_rest.call(null,seq__168302__$1);
var G__168311 = c__4768__auto__;
var G__168312 = cljs.core.count.call(null,c__4768__auto__);
var G__168313 = (0);
seq__168302 = G__168310;
chunk__168303 = G__168311;
count__168304 = G__168312;
i__168305 = G__168313;
continue;
} else {
var child = cljs.core.first.call(null,seq__168302__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__168314 = cljs.core.next.call(null,seq__168302__$1);
var G__168315 = null;
var G__168316 = (0);
var G__168317 = (0);
seq__168302 = G__168314;
chunk__168303 = G__168315;
count__168304 = G__168316;
i__168305 = G__168317;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__168319 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__168319,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__168319,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__168319,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__168320 = wrapper.lastChild;
var G__168321 = (level - (1));
wrapper = G__168320;
level = G__168321;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__3969__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__3969__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__3969__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

domina.DomContent = (function (){var obj168323 = {};
return obj168323;
})();

domina.nodes = (function nodes(content){
if((function (){var and__3969__auto__ = content;
if(and__3969__auto__){
return content.domina$DomContent$nodes$arity$1;
} else {
return and__3969__auto__;
}
})()){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__4625__auto__ = (((content == null))?null:content);
return (function (){var or__3981__auto__ = (domina.nodes[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (domina.nodes["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});

domina.single_node = (function single_node(nodeseq){
if((function (){var and__3969__auto__ = nodeseq;
if(and__3969__auto__){
return nodeseq.domina$DomContent$single_node$arity$1;
} else {
return and__3969__auto__;
}
})()){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__4625__auto__ = (((nodeseq == null))?null:nodeseq);
return (function (){var or__3981__auto__ = (domina.single_node[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (domina.single_node["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});

domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){
if(cljs.core.truth_((function (){var and__3969__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__3969__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__3969__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log_debug = function (var_args){
var mesg = null;
if (arguments.length > 0) {
var G__168324__i = 0, G__168324__a = new Array(arguments.length -  0);
while (G__168324__i < G__168324__a.length) {G__168324__a[G__168324__i] = arguments[G__168324__i + 0]; ++G__168324__i;}
  mesg = new cljs.core.IndexedSeq(G__168324__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__168325){
var mesg = cljs.core.seq(arglist__168325);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
};
var log = function (var_args){
var mesg = null;
if (arguments.length > 0) {
var G__168326__i = 0, G__168326__a = new Array(arguments.length -  0);
while (G__168326__i < G__168326__a.length) {G__168326__a[G__168326__i] = arguments[G__168326__i + 0]; ++G__168326__i;}
  mesg = new cljs.core.IndexedSeq(G__168326__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__168327){
var mesg = cljs.core.seq(arglist__168327);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;
if (arguments.length > 0) {
var G__168328__i = 0, G__168328__a = new Array(arguments.length -  0);
while (G__168328__i < G__168328__a.length) {G__168328__a[G__168328__i] = arguments[G__168328__i + 0]; ++G__168328__i;}
  contents = new cljs.core.IndexedSeq(G__168328__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__168329){
var contents = cljs.core.seq(arglist__168329);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__168330_SHARP_){
return p1__168330_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__168331_SHARP_,p2__168332_SHARP_){
return goog.dom.insertChildAt(p1__168331_SHARP_,p2__168332_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__168334_SHARP_,p2__168333_SHARP_){
return goog.dom.insertSiblingBefore(p2__168333_SHARP_,p1__168334_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__168336_SHARP_,p2__168335_SHARP_){
return goog.dom.insertSiblingAfter(p2__168335_SHARP_,p1__168336_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__168338_SHARP_,p2__168337_SHARP_){
return goog.dom.replaceNode(p2__168337_SHARP_,p1__168338_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var seq__168343_168347 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__168344_168348 = null;
var count__168345_168349 = (0);
var i__168346_168350 = (0);
while(true){
if((i__168346_168350 < count__168345_168349)){
var n_168351 = cljs.core._nth.call(null,chunk__168344_168348,i__168346_168350);
goog.style.setStyle(n_168351,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__168352 = seq__168343_168347;
var G__168353 = chunk__168344_168348;
var G__168354 = count__168345_168349;
var G__168355 = (i__168346_168350 + (1));
seq__168343_168347 = G__168352;
chunk__168344_168348 = G__168353;
count__168345_168349 = G__168354;
i__168346_168350 = G__168355;
continue;
} else {
var temp__4126__auto___168356 = cljs.core.seq.call(null,seq__168343_168347);
if(temp__4126__auto___168356){
var seq__168343_168357__$1 = temp__4126__auto___168356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168343_168357__$1)){
var c__4768__auto___168358 = cljs.core.chunk_first.call(null,seq__168343_168357__$1);
var G__168359 = cljs.core.chunk_rest.call(null,seq__168343_168357__$1);
var G__168360 = c__4768__auto___168358;
var G__168361 = cljs.core.count.call(null,c__4768__auto___168358);
var G__168362 = (0);
seq__168343_168347 = G__168359;
chunk__168344_168348 = G__168360;
count__168345_168349 = G__168361;
i__168346_168350 = G__168362;
continue;
} else {
var n_168363 = cljs.core.first.call(null,seq__168343_168357__$1);
goog.style.setStyle(n_168363,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__168364 = cljs.core.next.call(null,seq__168343_168357__$1);
var G__168365 = null;
var G__168366 = (0);
var G__168367 = (0);
seq__168343_168347 = G__168364;
chunk__168344_168348 = G__168365;
count__168345_168349 = G__168366;
i__168346_168350 = G__168367;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
var G__168368__i = 0, G__168368__a = new Array(arguments.length -  2);
while (G__168368__i < G__168368__a.length) {G__168368__a[G__168368__i] = arguments[G__168368__i + 2]; ++G__168368__i;}
  value = new cljs.core.IndexedSeq(G__168368__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__168369){
var content = cljs.core.first(arglist__168369);
arglist__168369 = cljs.core.next(arglist__168369);
var name = cljs.core.first(arglist__168369);
var value = cljs.core.rest(arglist__168369);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var seq__168374_168378 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__168375_168379 = null;
var count__168376_168380 = (0);
var i__168377_168381 = (0);
while(true){
if((i__168377_168381 < count__168376_168380)){
var n_168382 = cljs.core._nth.call(null,chunk__168375_168379,i__168377_168381);
n_168382.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__168383 = seq__168374_168378;
var G__168384 = chunk__168375_168379;
var G__168385 = count__168376_168380;
var G__168386 = (i__168377_168381 + (1));
seq__168374_168378 = G__168383;
chunk__168375_168379 = G__168384;
count__168376_168380 = G__168385;
i__168377_168381 = G__168386;
continue;
} else {
var temp__4126__auto___168387 = cljs.core.seq.call(null,seq__168374_168378);
if(temp__4126__auto___168387){
var seq__168374_168388__$1 = temp__4126__auto___168387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168374_168388__$1)){
var c__4768__auto___168389 = cljs.core.chunk_first.call(null,seq__168374_168388__$1);
var G__168390 = cljs.core.chunk_rest.call(null,seq__168374_168388__$1);
var G__168391 = c__4768__auto___168389;
var G__168392 = cljs.core.count.call(null,c__4768__auto___168389);
var G__168393 = (0);
seq__168374_168378 = G__168390;
chunk__168375_168379 = G__168391;
count__168376_168380 = G__168392;
i__168377_168381 = G__168393;
continue;
} else {
var n_168394 = cljs.core.first.call(null,seq__168374_168388__$1);
n_168394.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__168395 = cljs.core.next.call(null,seq__168374_168388__$1);
var G__168396 = null;
var G__168397 = (0);
var G__168398 = (0);
seq__168374_168378 = G__168395;
chunk__168375_168379 = G__168396;
count__168376_168380 = G__168397;
i__168377_168381 = G__168398;
continue;
}
} else {
}
}
break;
}

return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (arguments.length > 2) {
var G__168399__i = 0, G__168399__a = new Array(arguments.length -  2);
while (G__168399__i < G__168399__a.length) {G__168399__a[G__168399__i] = arguments[G__168399__i + 2]; ++G__168399__i;}
  value = new cljs.core.IndexedSeq(G__168399__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__168400){
var content = cljs.core.first(arglist__168400);
arglist__168400 = cljs.core.next(arglist__168400);
var name = cljs.core.first(arglist__168400);
var value = cljs.core.rest(arglist__168400);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var seq__168405_168409 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__168406_168410 = null;
var count__168407_168411 = (0);
var i__168408_168412 = (0);
while(true){
if((i__168408_168412 < count__168407_168411)){
var n_168413 = cljs.core._nth.call(null,chunk__168406_168410,i__168408_168412);
n_168413.removeAttribute(cljs.core.name.call(null,name));

var G__168414 = seq__168405_168409;
var G__168415 = chunk__168406_168410;
var G__168416 = count__168407_168411;
var G__168417 = (i__168408_168412 + (1));
seq__168405_168409 = G__168414;
chunk__168406_168410 = G__168415;
count__168407_168411 = G__168416;
i__168408_168412 = G__168417;
continue;
} else {
var temp__4126__auto___168418 = cljs.core.seq.call(null,seq__168405_168409);
if(temp__4126__auto___168418){
var seq__168405_168419__$1 = temp__4126__auto___168418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168405_168419__$1)){
var c__4768__auto___168420 = cljs.core.chunk_first.call(null,seq__168405_168419__$1);
var G__168421 = cljs.core.chunk_rest.call(null,seq__168405_168419__$1);
var G__168422 = c__4768__auto___168420;
var G__168423 = cljs.core.count.call(null,c__4768__auto___168420);
var G__168424 = (0);
seq__168405_168409 = G__168421;
chunk__168406_168410 = G__168422;
count__168407_168411 = G__168423;
i__168408_168412 = G__168424;
continue;
} else {
var n_168425 = cljs.core.first.call(null,seq__168405_168419__$1);
n_168425.removeAttribute(cljs.core.name.call(null,name));

var G__168426 = cljs.core.next.call(null,seq__168405_168419__$1);
var G__168427 = null;
var G__168428 = (0);
var G__168429 = (0);
seq__168405_168409 = G__168426;
chunk__168406_168410 = G__168427;
count__168407_168411 = G__168428;
i__168408_168412 = G__168429;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__168431 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__168431,(0),null);
var v = cljs.core.nth.call(null,vec__168431,(1),null);
if(cljs.core.truth_((function (){var and__3969__auto__ = k;
if(cljs.core.truth_(and__3969__auto__)){
return v;
} else {
return and__3969__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__168432_SHARP_){
var attr = attrs__$1.item(p1__168432_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var seq__168439_168445 = cljs.core.seq.call(null,styles);
var chunk__168440_168446 = null;
var count__168441_168447 = (0);
var i__168442_168448 = (0);
while(true){
if((i__168442_168448 < count__168441_168447)){
var vec__168443_168449 = cljs.core._nth.call(null,chunk__168440_168446,i__168442_168448);
var name_168450 = cljs.core.nth.call(null,vec__168443_168449,(0),null);
var value_168451 = cljs.core.nth.call(null,vec__168443_168449,(1),null);
domina.set_style_BANG_.call(null,content,name_168450,value_168451);

var G__168452 = seq__168439_168445;
var G__168453 = chunk__168440_168446;
var G__168454 = count__168441_168447;
var G__168455 = (i__168442_168448 + (1));
seq__168439_168445 = G__168452;
chunk__168440_168446 = G__168453;
count__168441_168447 = G__168454;
i__168442_168448 = G__168455;
continue;
} else {
var temp__4126__auto___168456 = cljs.core.seq.call(null,seq__168439_168445);
if(temp__4126__auto___168456){
var seq__168439_168457__$1 = temp__4126__auto___168456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168439_168457__$1)){
var c__4768__auto___168458 = cljs.core.chunk_first.call(null,seq__168439_168457__$1);
var G__168459 = cljs.core.chunk_rest.call(null,seq__168439_168457__$1);
var G__168460 = c__4768__auto___168458;
var G__168461 = cljs.core.count.call(null,c__4768__auto___168458);
var G__168462 = (0);
seq__168439_168445 = G__168459;
chunk__168440_168446 = G__168460;
count__168441_168447 = G__168461;
i__168442_168448 = G__168462;
continue;
} else {
var vec__168444_168463 = cljs.core.first.call(null,seq__168439_168457__$1);
var name_168464 = cljs.core.nth.call(null,vec__168444_168463,(0),null);
var value_168465 = cljs.core.nth.call(null,vec__168444_168463,(1),null);
domina.set_style_BANG_.call(null,content,name_168464,value_168465);

var G__168466 = cljs.core.next.call(null,seq__168439_168457__$1);
var G__168467 = null;
var G__168468 = (0);
var G__168469 = (0);
seq__168439_168445 = G__168466;
chunk__168440_168446 = G__168467;
count__168441_168447 = G__168468;
i__168442_168448 = G__168469;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var seq__168476_168482 = cljs.core.seq.call(null,attrs);
var chunk__168477_168483 = null;
var count__168478_168484 = (0);
var i__168479_168485 = (0);
while(true){
if((i__168479_168485 < count__168478_168484)){
var vec__168480_168486 = cljs.core._nth.call(null,chunk__168477_168483,i__168479_168485);
var name_168487 = cljs.core.nth.call(null,vec__168480_168486,(0),null);
var value_168488 = cljs.core.nth.call(null,vec__168480_168486,(1),null);
domina.set_attr_BANG_.call(null,content,name_168487,value_168488);

var G__168489 = seq__168476_168482;
var G__168490 = chunk__168477_168483;
var G__168491 = count__168478_168484;
var G__168492 = (i__168479_168485 + (1));
seq__168476_168482 = G__168489;
chunk__168477_168483 = G__168490;
count__168478_168484 = G__168491;
i__168479_168485 = G__168492;
continue;
} else {
var temp__4126__auto___168493 = cljs.core.seq.call(null,seq__168476_168482);
if(temp__4126__auto___168493){
var seq__168476_168494__$1 = temp__4126__auto___168493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168476_168494__$1)){
var c__4768__auto___168495 = cljs.core.chunk_first.call(null,seq__168476_168494__$1);
var G__168496 = cljs.core.chunk_rest.call(null,seq__168476_168494__$1);
var G__168497 = c__4768__auto___168495;
var G__168498 = cljs.core.count.call(null,c__4768__auto___168495);
var G__168499 = (0);
seq__168476_168482 = G__168496;
chunk__168477_168483 = G__168497;
count__168478_168484 = G__168498;
i__168479_168485 = G__168499;
continue;
} else {
var vec__168481_168500 = cljs.core.first.call(null,seq__168476_168494__$1);
var name_168501 = cljs.core.nth.call(null,vec__168481_168500,(0),null);
var value_168502 = cljs.core.nth.call(null,vec__168481_168500,(1),null);
domina.set_attr_BANG_.call(null,content,name_168501,value_168502);

var G__168503 = cljs.core.next.call(null,seq__168476_168494__$1);
var G__168504 = null;
var G__168505 = (0);
var G__168506 = (0);
seq__168476_168482 = G__168503;
chunk__168477_168483 = G__168504;
count__168478_168484 = G__168505;
i__168479_168485 = G__168506;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var seq__168511_168515 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__168512_168516 = null;
var count__168513_168517 = (0);
var i__168514_168518 = (0);
while(true){
if((i__168514_168518 < count__168513_168517)){
var node_168519 = cljs.core._nth.call(null,chunk__168512_168516,i__168514_168518);
goog.dom.classes.add(node_168519,class$);

var G__168520 = seq__168511_168515;
var G__168521 = chunk__168512_168516;
var G__168522 = count__168513_168517;
var G__168523 = (i__168514_168518 + (1));
seq__168511_168515 = G__168520;
chunk__168512_168516 = G__168521;
count__168513_168517 = G__168522;
i__168514_168518 = G__168523;
continue;
} else {
var temp__4126__auto___168524 = cljs.core.seq.call(null,seq__168511_168515);
if(temp__4126__auto___168524){
var seq__168511_168525__$1 = temp__4126__auto___168524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168511_168525__$1)){
var c__4768__auto___168526 = cljs.core.chunk_first.call(null,seq__168511_168525__$1);
var G__168527 = cljs.core.chunk_rest.call(null,seq__168511_168525__$1);
var G__168528 = c__4768__auto___168526;
var G__168529 = cljs.core.count.call(null,c__4768__auto___168526);
var G__168530 = (0);
seq__168511_168515 = G__168527;
chunk__168512_168516 = G__168528;
count__168513_168517 = G__168529;
i__168514_168518 = G__168530;
continue;
} else {
var node_168531 = cljs.core.first.call(null,seq__168511_168525__$1);
goog.dom.classes.add(node_168531,class$);

var G__168532 = cljs.core.next.call(null,seq__168511_168525__$1);
var G__168533 = null;
var G__168534 = (0);
var G__168535 = (0);
seq__168511_168515 = G__168532;
chunk__168512_168516 = G__168533;
count__168513_168517 = G__168534;
i__168514_168518 = G__168535;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var seq__168540_168544 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__168541_168545 = null;
var count__168542_168546 = (0);
var i__168543_168547 = (0);
while(true){
if((i__168543_168547 < count__168542_168546)){
var node_168548 = cljs.core._nth.call(null,chunk__168541_168545,i__168543_168547);
goog.dom.classes.remove(node_168548,class$);

var G__168549 = seq__168540_168544;
var G__168550 = chunk__168541_168545;
var G__168551 = count__168542_168546;
var G__168552 = (i__168543_168547 + (1));
seq__168540_168544 = G__168549;
chunk__168541_168545 = G__168550;
count__168542_168546 = G__168551;
i__168543_168547 = G__168552;
continue;
} else {
var temp__4126__auto___168553 = cljs.core.seq.call(null,seq__168540_168544);
if(temp__4126__auto___168553){
var seq__168540_168554__$1 = temp__4126__auto___168553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168540_168554__$1)){
var c__4768__auto___168555 = cljs.core.chunk_first.call(null,seq__168540_168554__$1);
var G__168556 = cljs.core.chunk_rest.call(null,seq__168540_168554__$1);
var G__168557 = c__4768__auto___168555;
var G__168558 = cljs.core.count.call(null,c__4768__auto___168555);
var G__168559 = (0);
seq__168540_168544 = G__168556;
chunk__168541_168545 = G__168557;
count__168542_168546 = G__168558;
i__168543_168547 = G__168559;
continue;
} else {
var node_168560 = cljs.core.first.call(null,seq__168540_168554__$1);
goog.dom.classes.remove(node_168560,class$);

var G__168561 = cljs.core.next.call(null,seq__168540_168554__$1);
var G__168562 = null;
var G__168563 = (0);
var G__168564 = (0);
seq__168540_168544 = G__168561;
chunk__168541_168545 = G__168562;
count__168542_168546 = G__168563;
i__168543_168547 = G__168564;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){
var seq__168569_168573 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__168570_168574 = null;
var count__168571_168575 = (0);
var i__168572_168576 = (0);
while(true){
if((i__168572_168576 < count__168571_168575)){
var node_168577 = cljs.core._nth.call(null,chunk__168570_168574,i__168572_168576);
goog.dom.classes.toggle(node_168577,class$);

var G__168578 = seq__168569_168573;
var G__168579 = chunk__168570_168574;
var G__168580 = count__168571_168575;
var G__168581 = (i__168572_168576 + (1));
seq__168569_168573 = G__168578;
chunk__168570_168574 = G__168579;
count__168571_168575 = G__168580;
i__168572_168576 = G__168581;
continue;
} else {
var temp__4126__auto___168582 = cljs.core.seq.call(null,seq__168569_168573);
if(temp__4126__auto___168582){
var seq__168569_168583__$1 = temp__4126__auto___168582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168569_168583__$1)){
var c__4768__auto___168584 = cljs.core.chunk_first.call(null,seq__168569_168583__$1);
var G__168585 = cljs.core.chunk_rest.call(null,seq__168569_168583__$1);
var G__168586 = c__4768__auto___168584;
var G__168587 = cljs.core.count.call(null,c__4768__auto___168584);
var G__168588 = (0);
seq__168569_168573 = G__168585;
chunk__168570_168574 = G__168586;
count__168571_168575 = G__168587;
i__168572_168576 = G__168588;
continue;
} else {
var node_168589 = cljs.core.first.call(null,seq__168569_168583__$1);
goog.dom.classes.toggle(node_168589,class$);

var G__168590 = cljs.core.next.call(null,seq__168569_168583__$1);
var G__168591 = null;
var G__168592 = (0);
var G__168593 = (0);
seq__168569_168573 = G__168590;
chunk__168570_168574 = G__168591;
count__168571_168575 = G__168592;
i__168572_168576 = G__168593;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){
var classes_168602__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__168598_168603 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__168599_168604 = null;
var count__168600_168605 = (0);
var i__168601_168606 = (0);
while(true){
if((i__168601_168606 < count__168600_168605)){
var node_168607 = cljs.core._nth.call(null,chunk__168599_168604,i__168601_168606);
goog.dom.classes.set(node_168607,classes_168602__$1);

var G__168608 = seq__168598_168603;
var G__168609 = chunk__168599_168604;
var G__168610 = count__168600_168605;
var G__168611 = (i__168601_168606 + (1));
seq__168598_168603 = G__168608;
chunk__168599_168604 = G__168609;
count__168600_168605 = G__168610;
i__168601_168606 = G__168611;
continue;
} else {
var temp__4126__auto___168612 = cljs.core.seq.call(null,seq__168598_168603);
if(temp__4126__auto___168612){
var seq__168598_168613__$1 = temp__4126__auto___168612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168598_168613__$1)){
var c__4768__auto___168614 = cljs.core.chunk_first.call(null,seq__168598_168613__$1);
var G__168615 = cljs.core.chunk_rest.call(null,seq__168598_168613__$1);
var G__168616 = c__4768__auto___168614;
var G__168617 = cljs.core.count.call(null,c__4768__auto___168614);
var G__168618 = (0);
seq__168598_168603 = G__168615;
chunk__168599_168604 = G__168616;
count__168600_168605 = G__168617;
i__168601_168606 = G__168618;
continue;
} else {
var node_168619 = cljs.core.first.call(null,seq__168598_168613__$1);
goog.dom.classes.set(node_168619,classes_168602__$1);

var G__168620 = cljs.core.next.call(null,seq__168598_168613__$1);
var G__168621 = null;
var G__168622 = (0);
var G__168623 = (0);
seq__168598_168603 = G__168620;
chunk__168599_168604 = G__168621;
count__168600_168605 = G__168622;
i__168601_168606 = G__168623;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var seq__168628_168632 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__168629_168633 = null;
var count__168630_168634 = (0);
var i__168631_168635 = (0);
while(true){
if((i__168631_168635 < count__168630_168634)){
var node_168636 = cljs.core._nth.call(null,chunk__168629_168633,i__168631_168635);
goog.dom.setTextContent(node_168636,value);

var G__168637 = seq__168628_168632;
var G__168638 = chunk__168629_168633;
var G__168639 = count__168630_168634;
var G__168640 = (i__168631_168635 + (1));
seq__168628_168632 = G__168637;
chunk__168629_168633 = G__168638;
count__168630_168634 = G__168639;
i__168631_168635 = G__168640;
continue;
} else {
var temp__4126__auto___168641 = cljs.core.seq.call(null,seq__168628_168632);
if(temp__4126__auto___168641){
var seq__168628_168642__$1 = temp__4126__auto___168641;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168628_168642__$1)){
var c__4768__auto___168643 = cljs.core.chunk_first.call(null,seq__168628_168642__$1);
var G__168644 = cljs.core.chunk_rest.call(null,seq__168628_168642__$1);
var G__168645 = c__4768__auto___168643;
var G__168646 = cljs.core.count.call(null,c__4768__auto___168643);
var G__168647 = (0);
seq__168628_168632 = G__168644;
chunk__168629_168633 = G__168645;
count__168630_168634 = G__168646;
i__168631_168635 = G__168647;
continue;
} else {
var node_168648 = cljs.core.first.call(null,seq__168628_168642__$1);
goog.dom.setTextContent(node_168648,value);

var G__168649 = cljs.core.next.call(null,seq__168628_168642__$1);
var G__168650 = null;
var G__168651 = (0);
var G__168652 = (0);
seq__168628_168632 = G__168649;
chunk__168629_168633 = G__168650;
count__168630_168634 = G__168651;
i__168631_168635 = G__168652;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var seq__168657_168661 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__168658_168662 = null;
var count__168659_168663 = (0);
var i__168660_168664 = (0);
while(true){
if((i__168660_168664 < count__168659_168663)){
var node_168665 = cljs.core._nth.call(null,chunk__168658_168662,i__168660_168664);
goog.dom.forms.setValue(node_168665,value);

var G__168666 = seq__168657_168661;
var G__168667 = chunk__168658_168662;
var G__168668 = count__168659_168663;
var G__168669 = (i__168660_168664 + (1));
seq__168657_168661 = G__168666;
chunk__168658_168662 = G__168667;
count__168659_168663 = G__168668;
i__168660_168664 = G__168669;
continue;
} else {
var temp__4126__auto___168670 = cljs.core.seq.call(null,seq__168657_168661);
if(temp__4126__auto___168670){
var seq__168657_168671__$1 = temp__4126__auto___168670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168657_168671__$1)){
var c__4768__auto___168672 = cljs.core.chunk_first.call(null,seq__168657_168671__$1);
var G__168673 = cljs.core.chunk_rest.call(null,seq__168657_168671__$1);
var G__168674 = c__4768__auto___168672;
var G__168675 = cljs.core.count.call(null,c__4768__auto___168672);
var G__168676 = (0);
seq__168657_168661 = G__168673;
chunk__168658_168662 = G__168674;
count__168659_168663 = G__168675;
i__168660_168664 = G__168676;
continue;
} else {
var node_168677 = cljs.core.first.call(null,seq__168657_168671__$1);
goog.dom.forms.setValue(node_168677,value);

var G__168678 = cljs.core.next.call(null,seq__168657_168671__$1);
var G__168679 = null;
var G__168680 = (0);
var G__168681 = (0);
seq__168657_168661 = G__168678;
chunk__168658_168662 = G__168679;
count__168659_168663 = G__168680;
i__168660_168664 = G__168681;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__3969__auto__ = allows_inner_html_QMARK_;
if(and__3969__auto__){
var and__3969__auto____$1 = (function (){var or__3981__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__3969__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__3969__auto____$1;
}
} else {
return and__3969__auto__;
}
})())){
var value_168692 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__168688_168693 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__168689_168694 = null;
var count__168690_168695 = (0);
var i__168691_168696 = (0);
while(true){
if((i__168691_168696 < count__168690_168695)){
var node_168697 = cljs.core._nth.call(null,chunk__168689_168694,i__168691_168696);
node_168697.innerHTML = value_168692;

var G__168698 = seq__168688_168693;
var G__168699 = chunk__168689_168694;
var G__168700 = count__168690_168695;
var G__168701 = (i__168691_168696 + (1));
seq__168688_168693 = G__168698;
chunk__168689_168694 = G__168699;
count__168690_168695 = G__168700;
i__168691_168696 = G__168701;
continue;
} else {
var temp__4126__auto___168702 = cljs.core.seq.call(null,seq__168688_168693);
if(temp__4126__auto___168702){
var seq__168688_168703__$1 = temp__4126__auto___168702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168688_168703__$1)){
var c__4768__auto___168704 = cljs.core.chunk_first.call(null,seq__168688_168703__$1);
var G__168705 = cljs.core.chunk_rest.call(null,seq__168688_168703__$1);
var G__168706 = c__4768__auto___168704;
var G__168707 = cljs.core.count.call(null,c__4768__auto___168704);
var G__168708 = (0);
seq__168688_168693 = G__168705;
chunk__168689_168694 = G__168706;
count__168690_168695 = G__168707;
i__168691_168696 = G__168708;
continue;
} else {
var node_168709 = cljs.core.first.call(null,seq__168688_168703__$1);
node_168709.innerHTML = value_168692;

var G__168710 = cljs.core.next.call(null,seq__168688_168703__$1);
var G__168711 = null;
var G__168712 = (0);
var G__168713 = (0);
seq__168688_168693 = G__168710;
chunk__168689_168694 = G__168711;
count__168690_168695 = G__168712;
i__168691_168696 = G__168713;
continue;
}
} else {
}
}
break;
}
}catch (e168687){if((e168687 instanceof Error)){
var e_168714 = e168687;
domina.replace_children_BANG_.call(null,content,value_168692);
} else {
throw e168687;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__3969__auto__ = bubble;
if(cljs.core.truth_(and__3969__auto__)){
return (value == null);
} else {
return and__3969__auto__;
}
})())){
var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4126__auto__)){
var parent = temp__4126__auto__;
return get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m = (function (){var or__3981__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__168721_168725 = cljs.core.seq.call(null,children);
var chunk__168722_168726 = null;
var count__168723_168727 = (0);
var i__168724_168728 = (0);
while(true){
if((i__168724_168728 < count__168723_168727)){
var child_168729 = cljs.core._nth.call(null,chunk__168722_168726,i__168724_168728);
frag.appendChild(child_168729);

var G__168730 = seq__168721_168725;
var G__168731 = chunk__168722_168726;
var G__168732 = count__168723_168727;
var G__168733 = (i__168724_168728 + (1));
seq__168721_168725 = G__168730;
chunk__168722_168726 = G__168731;
count__168723_168727 = G__168732;
i__168724_168728 = G__168733;
continue;
} else {
var temp__4126__auto___168734 = cljs.core.seq.call(null,seq__168721_168725);
if(temp__4126__auto___168734){
var seq__168721_168735__$1 = temp__4126__auto___168734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__168721_168735__$1)){
var c__4768__auto___168736 = cljs.core.chunk_first.call(null,seq__168721_168735__$1);
var G__168737 = cljs.core.chunk_rest.call(null,seq__168721_168735__$1);
var G__168738 = c__4768__auto___168736;
var G__168739 = cljs.core.count.call(null,c__4768__auto___168736);
var G__168740 = (0);
seq__168721_168725 = G__168737;
chunk__168722_168726 = G__168738;
count__168723_168727 = G__168739;
i__168724_168728 = G__168740;
continue;
} else {
var child_168741 = cljs.core.first.call(null,seq__168721_168735__$1);
frag.appendChild(child_168741);

var G__168742 = cljs.core.next.call(null,seq__168721_168735__$1);
var G__168743 = null;
var G__168744 = (0);
var G__168745 = (0);
seq__168721_168725 = G__168742;
chunk__168722_168726 = G__168743;
count__168723_168727 = G__168744;
i__168724_168728 = G__168745;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__168715_SHARP_,p2__168716_SHARP_){
return f.call(null,p1__168715_SHARP_,p2__168716_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3969__auto__ = obj;
if(cljs.core.truth_(and__3969__auto__)){
var and__3969__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__3969__auto____$1){
return obj.length;
} else {
return and__3969__auto____$1;
}
} else {
return and__3969__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__168747 = list_thing;
if(G__168747){
var bit__4662__auto__ = (G__168747.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__168747.cljs$core$ISeqable$)){
return true;
} else {
if((!G__168747.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__168747);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__168747);
}
})()){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((function (){var G__168748 = content;
if(G__168748){
var bit__4662__auto__ = (G__168748.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__168748.cljs$core$ISeqable$)){
return true;
} else {
if((!G__168748.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__168748);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__168748);
}
})()){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if((function (){var G__168749 = content;
if(G__168749){
var bit__4662__auto__ = (G__168749.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__168749.cljs$core$ISeqable$)){
return true;
} else {
if((!G__168749.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__168749);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__168749);
}
})()){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));

(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});
} else {
}
