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
var opt_wrapper_14301 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_14302 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_14303 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_14303,opt_wrapper_14301,table_section_wrapper_14302,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_14301,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_14302,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_14302,cell_wrapper_14303,table_section_wrapper_14302,table_section_wrapper_14302]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__14308 = cljs.core.seq.call(null,tbody);
var chunk__14309 = null;
var count__14310 = (0);
var i__14311 = (0);
while(true){
if((i__14311 < count__14310)){
var child = cljs.core._nth.call(null,chunk__14309,i__14311);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__14312 = seq__14308;
var G__14313 = chunk__14309;
var G__14314 = count__14310;
var G__14315 = (i__14311 + (1));
seq__14308 = G__14312;
chunk__14309 = G__14313;
count__14310 = G__14314;
i__14311 = G__14315;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__14308);
if(temp__4126__auto__){
var seq__14308__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14308__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__14308__$1);
var G__14316 = cljs.core.chunk_rest.call(null,seq__14308__$1);
var G__14317 = c__4768__auto__;
var G__14318 = cljs.core.count.call(null,c__4768__auto__);
var G__14319 = (0);
seq__14308 = G__14316;
chunk__14309 = G__14317;
count__14310 = G__14318;
i__14311 = G__14319;
continue;
} else {
var child = cljs.core.first.call(null,seq__14308__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__14320 = cljs.core.next.call(null,seq__14308__$1);
var G__14321 = null;
var G__14322 = (0);
var G__14323 = (0);
seq__14308 = G__14320;
chunk__14309 = G__14321;
count__14310 = G__14322;
i__14311 = G__14323;
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
var vec__14325 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__14325,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__14325,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__14325,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__14326 = wrapper.lastChild;
var G__14327 = (level - (1));
wrapper = G__14326;
level = G__14327;
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

domina.DomContent = (function (){var obj14329 = {};
return obj14329;
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
var G__14330__i = 0, G__14330__a = new Array(arguments.length -  0);
while (G__14330__i < G__14330__a.length) {G__14330__a[G__14330__i] = arguments[G__14330__i + 0]; ++G__14330__i;}
  mesg = new cljs.core.IndexedSeq(G__14330__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__14331){
var mesg = cljs.core.seq(arglist__14331);
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
var G__14332__i = 0, G__14332__a = new Array(arguments.length -  0);
while (G__14332__i < G__14332__a.length) {G__14332__a[G__14332__i] = arguments[G__14332__i + 0]; ++G__14332__i;}
  mesg = new cljs.core.IndexedSeq(G__14332__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__14333){
var mesg = cljs.core.seq(arglist__14333);
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
var G__14334__i = 0, G__14334__a = new Array(arguments.length -  0);
while (G__14334__i < G__14334__a.length) {G__14334__a[G__14334__i] = arguments[G__14334__i + 0]; ++G__14334__i;}
  contents = new cljs.core.IndexedSeq(G__14334__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__14335){
var contents = cljs.core.seq(arglist__14335);
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
return cljs.core.map.call(null,(function (p1__14336_SHARP_){
return p1__14336_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__14337_SHARP_,p2__14338_SHARP_){
return goog.dom.insertChildAt(p1__14337_SHARP_,p2__14338_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__14340_SHARP_,p2__14339_SHARP_){
return goog.dom.insertSiblingBefore(p2__14339_SHARP_,p1__14340_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__14342_SHARP_,p2__14341_SHARP_){
return goog.dom.insertSiblingAfter(p2__14341_SHARP_,p1__14342_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__14344_SHARP_,p2__14343_SHARP_){
return goog.dom.replaceNode(p2__14343_SHARP_,p1__14344_SHARP_);
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
var seq__14349_14353 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__14350_14354 = null;
var count__14351_14355 = (0);
var i__14352_14356 = (0);
while(true){
if((i__14352_14356 < count__14351_14355)){
var n_14357 = cljs.core._nth.call(null,chunk__14350_14354,i__14352_14356);
goog.style.setStyle(n_14357,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__14358 = seq__14349_14353;
var G__14359 = chunk__14350_14354;
var G__14360 = count__14351_14355;
var G__14361 = (i__14352_14356 + (1));
seq__14349_14353 = G__14358;
chunk__14350_14354 = G__14359;
count__14351_14355 = G__14360;
i__14352_14356 = G__14361;
continue;
} else {
var temp__4126__auto___14362 = cljs.core.seq.call(null,seq__14349_14353);
if(temp__4126__auto___14362){
var seq__14349_14363__$1 = temp__4126__auto___14362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14349_14363__$1)){
var c__4768__auto___14364 = cljs.core.chunk_first.call(null,seq__14349_14363__$1);
var G__14365 = cljs.core.chunk_rest.call(null,seq__14349_14363__$1);
var G__14366 = c__4768__auto___14364;
var G__14367 = cljs.core.count.call(null,c__4768__auto___14364);
var G__14368 = (0);
seq__14349_14353 = G__14365;
chunk__14350_14354 = G__14366;
count__14351_14355 = G__14367;
i__14352_14356 = G__14368;
continue;
} else {
var n_14369 = cljs.core.first.call(null,seq__14349_14363__$1);
goog.style.setStyle(n_14369,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__14370 = cljs.core.next.call(null,seq__14349_14363__$1);
var G__14371 = null;
var G__14372 = (0);
var G__14373 = (0);
seq__14349_14353 = G__14370;
chunk__14350_14354 = G__14371;
count__14351_14355 = G__14372;
i__14352_14356 = G__14373;
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
var G__14374__i = 0, G__14374__a = new Array(arguments.length -  2);
while (G__14374__i < G__14374__a.length) {G__14374__a[G__14374__i] = arguments[G__14374__i + 2]; ++G__14374__i;}
  value = new cljs.core.IndexedSeq(G__14374__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14375){
var content = cljs.core.first(arglist__14375);
arglist__14375 = cljs.core.next(arglist__14375);
var name = cljs.core.first(arglist__14375);
var value = cljs.core.rest(arglist__14375);
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
var seq__14380_14384 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__14381_14385 = null;
var count__14382_14386 = (0);
var i__14383_14387 = (0);
while(true){
if((i__14383_14387 < count__14382_14386)){
var n_14388 = cljs.core._nth.call(null,chunk__14381_14385,i__14383_14387);
n_14388.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__14389 = seq__14380_14384;
var G__14390 = chunk__14381_14385;
var G__14391 = count__14382_14386;
var G__14392 = (i__14383_14387 + (1));
seq__14380_14384 = G__14389;
chunk__14381_14385 = G__14390;
count__14382_14386 = G__14391;
i__14383_14387 = G__14392;
continue;
} else {
var temp__4126__auto___14393 = cljs.core.seq.call(null,seq__14380_14384);
if(temp__4126__auto___14393){
var seq__14380_14394__$1 = temp__4126__auto___14393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14380_14394__$1)){
var c__4768__auto___14395 = cljs.core.chunk_first.call(null,seq__14380_14394__$1);
var G__14396 = cljs.core.chunk_rest.call(null,seq__14380_14394__$1);
var G__14397 = c__4768__auto___14395;
var G__14398 = cljs.core.count.call(null,c__4768__auto___14395);
var G__14399 = (0);
seq__14380_14384 = G__14396;
chunk__14381_14385 = G__14397;
count__14382_14386 = G__14398;
i__14383_14387 = G__14399;
continue;
} else {
var n_14400 = cljs.core.first.call(null,seq__14380_14394__$1);
n_14400.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__14401 = cljs.core.next.call(null,seq__14380_14394__$1);
var G__14402 = null;
var G__14403 = (0);
var G__14404 = (0);
seq__14380_14384 = G__14401;
chunk__14381_14385 = G__14402;
count__14382_14386 = G__14403;
i__14383_14387 = G__14404;
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
var G__14405__i = 0, G__14405__a = new Array(arguments.length -  2);
while (G__14405__i < G__14405__a.length) {G__14405__a[G__14405__i] = arguments[G__14405__i + 2]; ++G__14405__i;}
  value = new cljs.core.IndexedSeq(G__14405__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__14406){
var content = cljs.core.first(arglist__14406);
arglist__14406 = cljs.core.next(arglist__14406);
var name = cljs.core.first(arglist__14406);
var value = cljs.core.rest(arglist__14406);
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
var seq__14411_14415 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__14412_14416 = null;
var count__14413_14417 = (0);
var i__14414_14418 = (0);
while(true){
if((i__14414_14418 < count__14413_14417)){
var n_14419 = cljs.core._nth.call(null,chunk__14412_14416,i__14414_14418);
n_14419.removeAttribute(cljs.core.name.call(null,name));

var G__14420 = seq__14411_14415;
var G__14421 = chunk__14412_14416;
var G__14422 = count__14413_14417;
var G__14423 = (i__14414_14418 + (1));
seq__14411_14415 = G__14420;
chunk__14412_14416 = G__14421;
count__14413_14417 = G__14422;
i__14414_14418 = G__14423;
continue;
} else {
var temp__4126__auto___14424 = cljs.core.seq.call(null,seq__14411_14415);
if(temp__4126__auto___14424){
var seq__14411_14425__$1 = temp__4126__auto___14424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14411_14425__$1)){
var c__4768__auto___14426 = cljs.core.chunk_first.call(null,seq__14411_14425__$1);
var G__14427 = cljs.core.chunk_rest.call(null,seq__14411_14425__$1);
var G__14428 = c__4768__auto___14426;
var G__14429 = cljs.core.count.call(null,c__4768__auto___14426);
var G__14430 = (0);
seq__14411_14415 = G__14427;
chunk__14412_14416 = G__14428;
count__14413_14417 = G__14429;
i__14414_14418 = G__14430;
continue;
} else {
var n_14431 = cljs.core.first.call(null,seq__14411_14425__$1);
n_14431.removeAttribute(cljs.core.name.call(null,name));

var G__14432 = cljs.core.next.call(null,seq__14411_14425__$1);
var G__14433 = null;
var G__14434 = (0);
var G__14435 = (0);
seq__14411_14415 = G__14432;
chunk__14412_14416 = G__14433;
count__14413_14417 = G__14434;
i__14414_14418 = G__14435;
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
var vec__14437 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__14437,(0),null);
var v = cljs.core.nth.call(null,vec__14437,(1),null);
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
return (function (p1__14438_SHARP_){
var attr = attrs__$1.item(p1__14438_SHARP_);
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
var seq__14445_14451 = cljs.core.seq.call(null,styles);
var chunk__14446_14452 = null;
var count__14447_14453 = (0);
var i__14448_14454 = (0);
while(true){
if((i__14448_14454 < count__14447_14453)){
var vec__14449_14455 = cljs.core._nth.call(null,chunk__14446_14452,i__14448_14454);
var name_14456 = cljs.core.nth.call(null,vec__14449_14455,(0),null);
var value_14457 = cljs.core.nth.call(null,vec__14449_14455,(1),null);
domina.set_style_BANG_.call(null,content,name_14456,value_14457);

var G__14458 = seq__14445_14451;
var G__14459 = chunk__14446_14452;
var G__14460 = count__14447_14453;
var G__14461 = (i__14448_14454 + (1));
seq__14445_14451 = G__14458;
chunk__14446_14452 = G__14459;
count__14447_14453 = G__14460;
i__14448_14454 = G__14461;
continue;
} else {
var temp__4126__auto___14462 = cljs.core.seq.call(null,seq__14445_14451);
if(temp__4126__auto___14462){
var seq__14445_14463__$1 = temp__4126__auto___14462;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14445_14463__$1)){
var c__4768__auto___14464 = cljs.core.chunk_first.call(null,seq__14445_14463__$1);
var G__14465 = cljs.core.chunk_rest.call(null,seq__14445_14463__$1);
var G__14466 = c__4768__auto___14464;
var G__14467 = cljs.core.count.call(null,c__4768__auto___14464);
var G__14468 = (0);
seq__14445_14451 = G__14465;
chunk__14446_14452 = G__14466;
count__14447_14453 = G__14467;
i__14448_14454 = G__14468;
continue;
} else {
var vec__14450_14469 = cljs.core.first.call(null,seq__14445_14463__$1);
var name_14470 = cljs.core.nth.call(null,vec__14450_14469,(0),null);
var value_14471 = cljs.core.nth.call(null,vec__14450_14469,(1),null);
domina.set_style_BANG_.call(null,content,name_14470,value_14471);

var G__14472 = cljs.core.next.call(null,seq__14445_14463__$1);
var G__14473 = null;
var G__14474 = (0);
var G__14475 = (0);
seq__14445_14451 = G__14472;
chunk__14446_14452 = G__14473;
count__14447_14453 = G__14474;
i__14448_14454 = G__14475;
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
var seq__14482_14488 = cljs.core.seq.call(null,attrs);
var chunk__14483_14489 = null;
var count__14484_14490 = (0);
var i__14485_14491 = (0);
while(true){
if((i__14485_14491 < count__14484_14490)){
var vec__14486_14492 = cljs.core._nth.call(null,chunk__14483_14489,i__14485_14491);
var name_14493 = cljs.core.nth.call(null,vec__14486_14492,(0),null);
var value_14494 = cljs.core.nth.call(null,vec__14486_14492,(1),null);
domina.set_attr_BANG_.call(null,content,name_14493,value_14494);

var G__14495 = seq__14482_14488;
var G__14496 = chunk__14483_14489;
var G__14497 = count__14484_14490;
var G__14498 = (i__14485_14491 + (1));
seq__14482_14488 = G__14495;
chunk__14483_14489 = G__14496;
count__14484_14490 = G__14497;
i__14485_14491 = G__14498;
continue;
} else {
var temp__4126__auto___14499 = cljs.core.seq.call(null,seq__14482_14488);
if(temp__4126__auto___14499){
var seq__14482_14500__$1 = temp__4126__auto___14499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14482_14500__$1)){
var c__4768__auto___14501 = cljs.core.chunk_first.call(null,seq__14482_14500__$1);
var G__14502 = cljs.core.chunk_rest.call(null,seq__14482_14500__$1);
var G__14503 = c__4768__auto___14501;
var G__14504 = cljs.core.count.call(null,c__4768__auto___14501);
var G__14505 = (0);
seq__14482_14488 = G__14502;
chunk__14483_14489 = G__14503;
count__14484_14490 = G__14504;
i__14485_14491 = G__14505;
continue;
} else {
var vec__14487_14506 = cljs.core.first.call(null,seq__14482_14500__$1);
var name_14507 = cljs.core.nth.call(null,vec__14487_14506,(0),null);
var value_14508 = cljs.core.nth.call(null,vec__14487_14506,(1),null);
domina.set_attr_BANG_.call(null,content,name_14507,value_14508);

var G__14509 = cljs.core.next.call(null,seq__14482_14500__$1);
var G__14510 = null;
var G__14511 = (0);
var G__14512 = (0);
seq__14482_14488 = G__14509;
chunk__14483_14489 = G__14510;
count__14484_14490 = G__14511;
i__14485_14491 = G__14512;
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
var seq__14517_14521 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__14518_14522 = null;
var count__14519_14523 = (0);
var i__14520_14524 = (0);
while(true){
if((i__14520_14524 < count__14519_14523)){
var node_14525 = cljs.core._nth.call(null,chunk__14518_14522,i__14520_14524);
goog.dom.classes.add(node_14525,class$);

var G__14526 = seq__14517_14521;
var G__14527 = chunk__14518_14522;
var G__14528 = count__14519_14523;
var G__14529 = (i__14520_14524 + (1));
seq__14517_14521 = G__14526;
chunk__14518_14522 = G__14527;
count__14519_14523 = G__14528;
i__14520_14524 = G__14529;
continue;
} else {
var temp__4126__auto___14530 = cljs.core.seq.call(null,seq__14517_14521);
if(temp__4126__auto___14530){
var seq__14517_14531__$1 = temp__4126__auto___14530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14517_14531__$1)){
var c__4768__auto___14532 = cljs.core.chunk_first.call(null,seq__14517_14531__$1);
var G__14533 = cljs.core.chunk_rest.call(null,seq__14517_14531__$1);
var G__14534 = c__4768__auto___14532;
var G__14535 = cljs.core.count.call(null,c__4768__auto___14532);
var G__14536 = (0);
seq__14517_14521 = G__14533;
chunk__14518_14522 = G__14534;
count__14519_14523 = G__14535;
i__14520_14524 = G__14536;
continue;
} else {
var node_14537 = cljs.core.first.call(null,seq__14517_14531__$1);
goog.dom.classes.add(node_14537,class$);

var G__14538 = cljs.core.next.call(null,seq__14517_14531__$1);
var G__14539 = null;
var G__14540 = (0);
var G__14541 = (0);
seq__14517_14521 = G__14538;
chunk__14518_14522 = G__14539;
count__14519_14523 = G__14540;
i__14520_14524 = G__14541;
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
var seq__14546_14550 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__14547_14551 = null;
var count__14548_14552 = (0);
var i__14549_14553 = (0);
while(true){
if((i__14549_14553 < count__14548_14552)){
var node_14554 = cljs.core._nth.call(null,chunk__14547_14551,i__14549_14553);
goog.dom.classes.remove(node_14554,class$);

var G__14555 = seq__14546_14550;
var G__14556 = chunk__14547_14551;
var G__14557 = count__14548_14552;
var G__14558 = (i__14549_14553 + (1));
seq__14546_14550 = G__14555;
chunk__14547_14551 = G__14556;
count__14548_14552 = G__14557;
i__14549_14553 = G__14558;
continue;
} else {
var temp__4126__auto___14559 = cljs.core.seq.call(null,seq__14546_14550);
if(temp__4126__auto___14559){
var seq__14546_14560__$1 = temp__4126__auto___14559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14546_14560__$1)){
var c__4768__auto___14561 = cljs.core.chunk_first.call(null,seq__14546_14560__$1);
var G__14562 = cljs.core.chunk_rest.call(null,seq__14546_14560__$1);
var G__14563 = c__4768__auto___14561;
var G__14564 = cljs.core.count.call(null,c__4768__auto___14561);
var G__14565 = (0);
seq__14546_14550 = G__14562;
chunk__14547_14551 = G__14563;
count__14548_14552 = G__14564;
i__14549_14553 = G__14565;
continue;
} else {
var node_14566 = cljs.core.first.call(null,seq__14546_14560__$1);
goog.dom.classes.remove(node_14566,class$);

var G__14567 = cljs.core.next.call(null,seq__14546_14560__$1);
var G__14568 = null;
var G__14569 = (0);
var G__14570 = (0);
seq__14546_14550 = G__14567;
chunk__14547_14551 = G__14568;
count__14548_14552 = G__14569;
i__14549_14553 = G__14570;
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
var seq__14575_14579 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__14576_14580 = null;
var count__14577_14581 = (0);
var i__14578_14582 = (0);
while(true){
if((i__14578_14582 < count__14577_14581)){
var node_14583 = cljs.core._nth.call(null,chunk__14576_14580,i__14578_14582);
goog.dom.classes.toggle(node_14583,class$);

var G__14584 = seq__14575_14579;
var G__14585 = chunk__14576_14580;
var G__14586 = count__14577_14581;
var G__14587 = (i__14578_14582 + (1));
seq__14575_14579 = G__14584;
chunk__14576_14580 = G__14585;
count__14577_14581 = G__14586;
i__14578_14582 = G__14587;
continue;
} else {
var temp__4126__auto___14588 = cljs.core.seq.call(null,seq__14575_14579);
if(temp__4126__auto___14588){
var seq__14575_14589__$1 = temp__4126__auto___14588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14575_14589__$1)){
var c__4768__auto___14590 = cljs.core.chunk_first.call(null,seq__14575_14589__$1);
var G__14591 = cljs.core.chunk_rest.call(null,seq__14575_14589__$1);
var G__14592 = c__4768__auto___14590;
var G__14593 = cljs.core.count.call(null,c__4768__auto___14590);
var G__14594 = (0);
seq__14575_14579 = G__14591;
chunk__14576_14580 = G__14592;
count__14577_14581 = G__14593;
i__14578_14582 = G__14594;
continue;
} else {
var node_14595 = cljs.core.first.call(null,seq__14575_14589__$1);
goog.dom.classes.toggle(node_14595,class$);

var G__14596 = cljs.core.next.call(null,seq__14575_14589__$1);
var G__14597 = null;
var G__14598 = (0);
var G__14599 = (0);
seq__14575_14579 = G__14596;
chunk__14576_14580 = G__14597;
count__14577_14581 = G__14598;
i__14578_14582 = G__14599;
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
var classes_14608__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__14604_14609 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__14605_14610 = null;
var count__14606_14611 = (0);
var i__14607_14612 = (0);
while(true){
if((i__14607_14612 < count__14606_14611)){
var node_14613 = cljs.core._nth.call(null,chunk__14605_14610,i__14607_14612);
goog.dom.classes.set(node_14613,classes_14608__$1);

var G__14614 = seq__14604_14609;
var G__14615 = chunk__14605_14610;
var G__14616 = count__14606_14611;
var G__14617 = (i__14607_14612 + (1));
seq__14604_14609 = G__14614;
chunk__14605_14610 = G__14615;
count__14606_14611 = G__14616;
i__14607_14612 = G__14617;
continue;
} else {
var temp__4126__auto___14618 = cljs.core.seq.call(null,seq__14604_14609);
if(temp__4126__auto___14618){
var seq__14604_14619__$1 = temp__4126__auto___14618;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14604_14619__$1)){
var c__4768__auto___14620 = cljs.core.chunk_first.call(null,seq__14604_14619__$1);
var G__14621 = cljs.core.chunk_rest.call(null,seq__14604_14619__$1);
var G__14622 = c__4768__auto___14620;
var G__14623 = cljs.core.count.call(null,c__4768__auto___14620);
var G__14624 = (0);
seq__14604_14609 = G__14621;
chunk__14605_14610 = G__14622;
count__14606_14611 = G__14623;
i__14607_14612 = G__14624;
continue;
} else {
var node_14625 = cljs.core.first.call(null,seq__14604_14619__$1);
goog.dom.classes.set(node_14625,classes_14608__$1);

var G__14626 = cljs.core.next.call(null,seq__14604_14619__$1);
var G__14627 = null;
var G__14628 = (0);
var G__14629 = (0);
seq__14604_14609 = G__14626;
chunk__14605_14610 = G__14627;
count__14606_14611 = G__14628;
i__14607_14612 = G__14629;
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
var seq__14634_14638 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__14635_14639 = null;
var count__14636_14640 = (0);
var i__14637_14641 = (0);
while(true){
if((i__14637_14641 < count__14636_14640)){
var node_14642 = cljs.core._nth.call(null,chunk__14635_14639,i__14637_14641);
goog.dom.setTextContent(node_14642,value);

var G__14643 = seq__14634_14638;
var G__14644 = chunk__14635_14639;
var G__14645 = count__14636_14640;
var G__14646 = (i__14637_14641 + (1));
seq__14634_14638 = G__14643;
chunk__14635_14639 = G__14644;
count__14636_14640 = G__14645;
i__14637_14641 = G__14646;
continue;
} else {
var temp__4126__auto___14647 = cljs.core.seq.call(null,seq__14634_14638);
if(temp__4126__auto___14647){
var seq__14634_14648__$1 = temp__4126__auto___14647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14634_14648__$1)){
var c__4768__auto___14649 = cljs.core.chunk_first.call(null,seq__14634_14648__$1);
var G__14650 = cljs.core.chunk_rest.call(null,seq__14634_14648__$1);
var G__14651 = c__4768__auto___14649;
var G__14652 = cljs.core.count.call(null,c__4768__auto___14649);
var G__14653 = (0);
seq__14634_14638 = G__14650;
chunk__14635_14639 = G__14651;
count__14636_14640 = G__14652;
i__14637_14641 = G__14653;
continue;
} else {
var node_14654 = cljs.core.first.call(null,seq__14634_14648__$1);
goog.dom.setTextContent(node_14654,value);

var G__14655 = cljs.core.next.call(null,seq__14634_14648__$1);
var G__14656 = null;
var G__14657 = (0);
var G__14658 = (0);
seq__14634_14638 = G__14655;
chunk__14635_14639 = G__14656;
count__14636_14640 = G__14657;
i__14637_14641 = G__14658;
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
var seq__14663_14667 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__14664_14668 = null;
var count__14665_14669 = (0);
var i__14666_14670 = (0);
while(true){
if((i__14666_14670 < count__14665_14669)){
var node_14671 = cljs.core._nth.call(null,chunk__14664_14668,i__14666_14670);
goog.dom.forms.setValue(node_14671,value);

var G__14672 = seq__14663_14667;
var G__14673 = chunk__14664_14668;
var G__14674 = count__14665_14669;
var G__14675 = (i__14666_14670 + (1));
seq__14663_14667 = G__14672;
chunk__14664_14668 = G__14673;
count__14665_14669 = G__14674;
i__14666_14670 = G__14675;
continue;
} else {
var temp__4126__auto___14676 = cljs.core.seq.call(null,seq__14663_14667);
if(temp__4126__auto___14676){
var seq__14663_14677__$1 = temp__4126__auto___14676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14663_14677__$1)){
var c__4768__auto___14678 = cljs.core.chunk_first.call(null,seq__14663_14677__$1);
var G__14679 = cljs.core.chunk_rest.call(null,seq__14663_14677__$1);
var G__14680 = c__4768__auto___14678;
var G__14681 = cljs.core.count.call(null,c__4768__auto___14678);
var G__14682 = (0);
seq__14663_14667 = G__14679;
chunk__14664_14668 = G__14680;
count__14665_14669 = G__14681;
i__14666_14670 = G__14682;
continue;
} else {
var node_14683 = cljs.core.first.call(null,seq__14663_14677__$1);
goog.dom.forms.setValue(node_14683,value);

var G__14684 = cljs.core.next.call(null,seq__14663_14677__$1);
var G__14685 = null;
var G__14686 = (0);
var G__14687 = (0);
seq__14663_14667 = G__14684;
chunk__14664_14668 = G__14685;
count__14665_14669 = G__14686;
i__14666_14670 = G__14687;
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
var value_14698 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__14694_14699 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__14695_14700 = null;
var count__14696_14701 = (0);
var i__14697_14702 = (0);
while(true){
if((i__14697_14702 < count__14696_14701)){
var node_14703 = cljs.core._nth.call(null,chunk__14695_14700,i__14697_14702);
node_14703.innerHTML = value_14698;

var G__14704 = seq__14694_14699;
var G__14705 = chunk__14695_14700;
var G__14706 = count__14696_14701;
var G__14707 = (i__14697_14702 + (1));
seq__14694_14699 = G__14704;
chunk__14695_14700 = G__14705;
count__14696_14701 = G__14706;
i__14697_14702 = G__14707;
continue;
} else {
var temp__4126__auto___14708 = cljs.core.seq.call(null,seq__14694_14699);
if(temp__4126__auto___14708){
var seq__14694_14709__$1 = temp__4126__auto___14708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14694_14709__$1)){
var c__4768__auto___14710 = cljs.core.chunk_first.call(null,seq__14694_14709__$1);
var G__14711 = cljs.core.chunk_rest.call(null,seq__14694_14709__$1);
var G__14712 = c__4768__auto___14710;
var G__14713 = cljs.core.count.call(null,c__4768__auto___14710);
var G__14714 = (0);
seq__14694_14699 = G__14711;
chunk__14695_14700 = G__14712;
count__14696_14701 = G__14713;
i__14697_14702 = G__14714;
continue;
} else {
var node_14715 = cljs.core.first.call(null,seq__14694_14709__$1);
node_14715.innerHTML = value_14698;

var G__14716 = cljs.core.next.call(null,seq__14694_14709__$1);
var G__14717 = null;
var G__14718 = (0);
var G__14719 = (0);
seq__14694_14699 = G__14716;
chunk__14695_14700 = G__14717;
count__14696_14701 = G__14718;
i__14697_14702 = G__14719;
continue;
}
} else {
}
}
break;
}
}catch (e14693){if((e14693 instanceof Error)){
var e_14720 = e14693;
domina.replace_children_BANG_.call(null,content,value_14698);
} else {
throw e14693;

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
var seq__14727_14731 = cljs.core.seq.call(null,children);
var chunk__14728_14732 = null;
var count__14729_14733 = (0);
var i__14730_14734 = (0);
while(true){
if((i__14730_14734 < count__14729_14733)){
var child_14735 = cljs.core._nth.call(null,chunk__14728_14732,i__14730_14734);
frag.appendChild(child_14735);

var G__14736 = seq__14727_14731;
var G__14737 = chunk__14728_14732;
var G__14738 = count__14729_14733;
var G__14739 = (i__14730_14734 + (1));
seq__14727_14731 = G__14736;
chunk__14728_14732 = G__14737;
count__14729_14733 = G__14738;
i__14730_14734 = G__14739;
continue;
} else {
var temp__4126__auto___14740 = cljs.core.seq.call(null,seq__14727_14731);
if(temp__4126__auto___14740){
var seq__14727_14741__$1 = temp__4126__auto___14740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14727_14741__$1)){
var c__4768__auto___14742 = cljs.core.chunk_first.call(null,seq__14727_14741__$1);
var G__14743 = cljs.core.chunk_rest.call(null,seq__14727_14741__$1);
var G__14744 = c__4768__auto___14742;
var G__14745 = cljs.core.count.call(null,c__4768__auto___14742);
var G__14746 = (0);
seq__14727_14731 = G__14743;
chunk__14728_14732 = G__14744;
count__14729_14733 = G__14745;
i__14730_14734 = G__14746;
continue;
} else {
var child_14747 = cljs.core.first.call(null,seq__14727_14741__$1);
frag.appendChild(child_14747);

var G__14748 = cljs.core.next.call(null,seq__14727_14741__$1);
var G__14749 = null;
var G__14750 = (0);
var G__14751 = (0);
seq__14727_14731 = G__14748;
chunk__14728_14732 = G__14749;
count__14729_14733 = G__14750;
i__14730_14734 = G__14751;
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
return (function (p1__14721_SHARP_,p2__14722_SHARP_){
return f.call(null,p1__14721_SHARP_,p2__14722_SHARP_);
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
if((function (){var G__14753 = list_thing;
if(G__14753){
var bit__4662__auto__ = (G__14753.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__14753.cljs$core$ISeqable$)){
return true;
} else {
if((!G__14753.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14753);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14753);
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
if((function (){var G__14754 = content;
if(G__14754){
var bit__4662__auto__ = (G__14754.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__14754.cljs$core$ISeqable$)){
return true;
} else {
if((!G__14754.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14754);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14754);
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
if((function (){var G__14755 = content;
if(G__14755){
var bit__4662__auto__ = (G__14755.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__14755.cljs$core$ISeqable$)){
return true;
} else {
if((!G__14755.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14755);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__14755);
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
