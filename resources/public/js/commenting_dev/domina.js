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
var opt_wrapper_75290 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_75291 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_75292 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_75292,opt_wrapper_75290,table_section_wrapper_75291,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_75290,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_75291,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_75291,cell_wrapper_75292,table_section_wrapper_75291,table_section_wrapper_75291]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__75297 = cljs.core.seq.call(null,tbody);
var chunk__75298 = null;
var count__75299 = (0);
var i__75300 = (0);
while(true){
if((i__75300 < count__75299)){
var child = cljs.core._nth.call(null,chunk__75298,i__75300);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__75301 = seq__75297;
var G__75302 = chunk__75298;
var G__75303 = count__75299;
var G__75304 = (i__75300 + (1));
seq__75297 = G__75301;
chunk__75298 = G__75302;
count__75299 = G__75303;
i__75300 = G__75304;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__75297);
if(temp__4126__auto__){
var seq__75297__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75297__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__75297__$1);
var G__75305 = cljs.core.chunk_rest.call(null,seq__75297__$1);
var G__75306 = c__4768__auto__;
var G__75307 = cljs.core.count.call(null,c__4768__auto__);
var G__75308 = (0);
seq__75297 = G__75305;
chunk__75298 = G__75306;
count__75299 = G__75307;
i__75300 = G__75308;
continue;
} else {
var child = cljs.core.first.call(null,seq__75297__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__75309 = cljs.core.next.call(null,seq__75297__$1);
var G__75310 = null;
var G__75311 = (0);
var G__75312 = (0);
seq__75297 = G__75309;
chunk__75298 = G__75310;
count__75299 = G__75311;
i__75300 = G__75312;
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
var vec__75314 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__75314,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__75314,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__75314,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__75315 = wrapper.lastChild;
var G__75316 = (level - (1));
wrapper = G__75315;
level = G__75316;
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

domina.DomContent = (function (){var obj75318 = {};
return obj75318;
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
var G__75319__i = 0, G__75319__a = new Array(arguments.length -  0);
while (G__75319__i < G__75319__a.length) {G__75319__a[G__75319__i] = arguments[G__75319__i + 0]; ++G__75319__i;}
  mesg = new cljs.core.IndexedSeq(G__75319__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__75320){
var mesg = cljs.core.seq(arglist__75320);
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
var G__75321__i = 0, G__75321__a = new Array(arguments.length -  0);
while (G__75321__i < G__75321__a.length) {G__75321__a[G__75321__i] = arguments[G__75321__i + 0]; ++G__75321__i;}
  mesg = new cljs.core.IndexedSeq(G__75321__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__75322){
var mesg = cljs.core.seq(arglist__75322);
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
var G__75323__i = 0, G__75323__a = new Array(arguments.length -  0);
while (G__75323__i < G__75323__a.length) {G__75323__a[G__75323__i] = arguments[G__75323__i + 0]; ++G__75323__i;}
  contents = new cljs.core.IndexedSeq(G__75323__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__75324){
var contents = cljs.core.seq(arglist__75324);
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
return cljs.core.map.call(null,(function (p1__75325_SHARP_){
return p1__75325_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__75326_SHARP_,p2__75327_SHARP_){
return goog.dom.insertChildAt(p1__75326_SHARP_,p2__75327_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__75329_SHARP_,p2__75328_SHARP_){
return goog.dom.insertSiblingBefore(p2__75328_SHARP_,p1__75329_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__75331_SHARP_,p2__75330_SHARP_){
return goog.dom.insertSiblingAfter(p2__75330_SHARP_,p1__75331_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__75333_SHARP_,p2__75332_SHARP_){
return goog.dom.replaceNode(p2__75332_SHARP_,p1__75333_SHARP_);
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
var seq__75338_75342 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__75339_75343 = null;
var count__75340_75344 = (0);
var i__75341_75345 = (0);
while(true){
if((i__75341_75345 < count__75340_75344)){
var n_75346 = cljs.core._nth.call(null,chunk__75339_75343,i__75341_75345);
goog.style.setStyle(n_75346,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__75347 = seq__75338_75342;
var G__75348 = chunk__75339_75343;
var G__75349 = count__75340_75344;
var G__75350 = (i__75341_75345 + (1));
seq__75338_75342 = G__75347;
chunk__75339_75343 = G__75348;
count__75340_75344 = G__75349;
i__75341_75345 = G__75350;
continue;
} else {
var temp__4126__auto___75351 = cljs.core.seq.call(null,seq__75338_75342);
if(temp__4126__auto___75351){
var seq__75338_75352__$1 = temp__4126__auto___75351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75338_75352__$1)){
var c__4768__auto___75353 = cljs.core.chunk_first.call(null,seq__75338_75352__$1);
var G__75354 = cljs.core.chunk_rest.call(null,seq__75338_75352__$1);
var G__75355 = c__4768__auto___75353;
var G__75356 = cljs.core.count.call(null,c__4768__auto___75353);
var G__75357 = (0);
seq__75338_75342 = G__75354;
chunk__75339_75343 = G__75355;
count__75340_75344 = G__75356;
i__75341_75345 = G__75357;
continue;
} else {
var n_75358 = cljs.core.first.call(null,seq__75338_75352__$1);
goog.style.setStyle(n_75358,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__75359 = cljs.core.next.call(null,seq__75338_75352__$1);
var G__75360 = null;
var G__75361 = (0);
var G__75362 = (0);
seq__75338_75342 = G__75359;
chunk__75339_75343 = G__75360;
count__75340_75344 = G__75361;
i__75341_75345 = G__75362;
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
var G__75363__i = 0, G__75363__a = new Array(arguments.length -  2);
while (G__75363__i < G__75363__a.length) {G__75363__a[G__75363__i] = arguments[G__75363__i + 2]; ++G__75363__i;}
  value = new cljs.core.IndexedSeq(G__75363__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__75364){
var content = cljs.core.first(arglist__75364);
arglist__75364 = cljs.core.next(arglist__75364);
var name = cljs.core.first(arglist__75364);
var value = cljs.core.rest(arglist__75364);
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
var seq__75369_75373 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__75370_75374 = null;
var count__75371_75375 = (0);
var i__75372_75376 = (0);
while(true){
if((i__75372_75376 < count__75371_75375)){
var n_75377 = cljs.core._nth.call(null,chunk__75370_75374,i__75372_75376);
n_75377.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__75378 = seq__75369_75373;
var G__75379 = chunk__75370_75374;
var G__75380 = count__75371_75375;
var G__75381 = (i__75372_75376 + (1));
seq__75369_75373 = G__75378;
chunk__75370_75374 = G__75379;
count__75371_75375 = G__75380;
i__75372_75376 = G__75381;
continue;
} else {
var temp__4126__auto___75382 = cljs.core.seq.call(null,seq__75369_75373);
if(temp__4126__auto___75382){
var seq__75369_75383__$1 = temp__4126__auto___75382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75369_75383__$1)){
var c__4768__auto___75384 = cljs.core.chunk_first.call(null,seq__75369_75383__$1);
var G__75385 = cljs.core.chunk_rest.call(null,seq__75369_75383__$1);
var G__75386 = c__4768__auto___75384;
var G__75387 = cljs.core.count.call(null,c__4768__auto___75384);
var G__75388 = (0);
seq__75369_75373 = G__75385;
chunk__75370_75374 = G__75386;
count__75371_75375 = G__75387;
i__75372_75376 = G__75388;
continue;
} else {
var n_75389 = cljs.core.first.call(null,seq__75369_75383__$1);
n_75389.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__75390 = cljs.core.next.call(null,seq__75369_75383__$1);
var G__75391 = null;
var G__75392 = (0);
var G__75393 = (0);
seq__75369_75373 = G__75390;
chunk__75370_75374 = G__75391;
count__75371_75375 = G__75392;
i__75372_75376 = G__75393;
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
var G__75394__i = 0, G__75394__a = new Array(arguments.length -  2);
while (G__75394__i < G__75394__a.length) {G__75394__a[G__75394__i] = arguments[G__75394__i + 2]; ++G__75394__i;}
  value = new cljs.core.IndexedSeq(G__75394__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__75395){
var content = cljs.core.first(arglist__75395);
arglist__75395 = cljs.core.next(arglist__75395);
var name = cljs.core.first(arglist__75395);
var value = cljs.core.rest(arglist__75395);
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
var seq__75400_75404 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__75401_75405 = null;
var count__75402_75406 = (0);
var i__75403_75407 = (0);
while(true){
if((i__75403_75407 < count__75402_75406)){
var n_75408 = cljs.core._nth.call(null,chunk__75401_75405,i__75403_75407);
n_75408.removeAttribute(cljs.core.name.call(null,name));

var G__75409 = seq__75400_75404;
var G__75410 = chunk__75401_75405;
var G__75411 = count__75402_75406;
var G__75412 = (i__75403_75407 + (1));
seq__75400_75404 = G__75409;
chunk__75401_75405 = G__75410;
count__75402_75406 = G__75411;
i__75403_75407 = G__75412;
continue;
} else {
var temp__4126__auto___75413 = cljs.core.seq.call(null,seq__75400_75404);
if(temp__4126__auto___75413){
var seq__75400_75414__$1 = temp__4126__auto___75413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75400_75414__$1)){
var c__4768__auto___75415 = cljs.core.chunk_first.call(null,seq__75400_75414__$1);
var G__75416 = cljs.core.chunk_rest.call(null,seq__75400_75414__$1);
var G__75417 = c__4768__auto___75415;
var G__75418 = cljs.core.count.call(null,c__4768__auto___75415);
var G__75419 = (0);
seq__75400_75404 = G__75416;
chunk__75401_75405 = G__75417;
count__75402_75406 = G__75418;
i__75403_75407 = G__75419;
continue;
} else {
var n_75420 = cljs.core.first.call(null,seq__75400_75414__$1);
n_75420.removeAttribute(cljs.core.name.call(null,name));

var G__75421 = cljs.core.next.call(null,seq__75400_75414__$1);
var G__75422 = null;
var G__75423 = (0);
var G__75424 = (0);
seq__75400_75404 = G__75421;
chunk__75401_75405 = G__75422;
count__75402_75406 = G__75423;
i__75403_75407 = G__75424;
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
var vec__75426 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__75426,(0),null);
var v = cljs.core.nth.call(null,vec__75426,(1),null);
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
return (function (p1__75427_SHARP_){
var attr = attrs__$1.item(p1__75427_SHARP_);
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
var seq__75434_75440 = cljs.core.seq.call(null,styles);
var chunk__75435_75441 = null;
var count__75436_75442 = (0);
var i__75437_75443 = (0);
while(true){
if((i__75437_75443 < count__75436_75442)){
var vec__75438_75444 = cljs.core._nth.call(null,chunk__75435_75441,i__75437_75443);
var name_75445 = cljs.core.nth.call(null,vec__75438_75444,(0),null);
var value_75446 = cljs.core.nth.call(null,vec__75438_75444,(1),null);
domina.set_style_BANG_.call(null,content,name_75445,value_75446);

var G__75447 = seq__75434_75440;
var G__75448 = chunk__75435_75441;
var G__75449 = count__75436_75442;
var G__75450 = (i__75437_75443 + (1));
seq__75434_75440 = G__75447;
chunk__75435_75441 = G__75448;
count__75436_75442 = G__75449;
i__75437_75443 = G__75450;
continue;
} else {
var temp__4126__auto___75451 = cljs.core.seq.call(null,seq__75434_75440);
if(temp__4126__auto___75451){
var seq__75434_75452__$1 = temp__4126__auto___75451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75434_75452__$1)){
var c__4768__auto___75453 = cljs.core.chunk_first.call(null,seq__75434_75452__$1);
var G__75454 = cljs.core.chunk_rest.call(null,seq__75434_75452__$1);
var G__75455 = c__4768__auto___75453;
var G__75456 = cljs.core.count.call(null,c__4768__auto___75453);
var G__75457 = (0);
seq__75434_75440 = G__75454;
chunk__75435_75441 = G__75455;
count__75436_75442 = G__75456;
i__75437_75443 = G__75457;
continue;
} else {
var vec__75439_75458 = cljs.core.first.call(null,seq__75434_75452__$1);
var name_75459 = cljs.core.nth.call(null,vec__75439_75458,(0),null);
var value_75460 = cljs.core.nth.call(null,vec__75439_75458,(1),null);
domina.set_style_BANG_.call(null,content,name_75459,value_75460);

var G__75461 = cljs.core.next.call(null,seq__75434_75452__$1);
var G__75462 = null;
var G__75463 = (0);
var G__75464 = (0);
seq__75434_75440 = G__75461;
chunk__75435_75441 = G__75462;
count__75436_75442 = G__75463;
i__75437_75443 = G__75464;
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
var seq__75471_75477 = cljs.core.seq.call(null,attrs);
var chunk__75472_75478 = null;
var count__75473_75479 = (0);
var i__75474_75480 = (0);
while(true){
if((i__75474_75480 < count__75473_75479)){
var vec__75475_75481 = cljs.core._nth.call(null,chunk__75472_75478,i__75474_75480);
var name_75482 = cljs.core.nth.call(null,vec__75475_75481,(0),null);
var value_75483 = cljs.core.nth.call(null,vec__75475_75481,(1),null);
domina.set_attr_BANG_.call(null,content,name_75482,value_75483);

var G__75484 = seq__75471_75477;
var G__75485 = chunk__75472_75478;
var G__75486 = count__75473_75479;
var G__75487 = (i__75474_75480 + (1));
seq__75471_75477 = G__75484;
chunk__75472_75478 = G__75485;
count__75473_75479 = G__75486;
i__75474_75480 = G__75487;
continue;
} else {
var temp__4126__auto___75488 = cljs.core.seq.call(null,seq__75471_75477);
if(temp__4126__auto___75488){
var seq__75471_75489__$1 = temp__4126__auto___75488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75471_75489__$1)){
var c__4768__auto___75490 = cljs.core.chunk_first.call(null,seq__75471_75489__$1);
var G__75491 = cljs.core.chunk_rest.call(null,seq__75471_75489__$1);
var G__75492 = c__4768__auto___75490;
var G__75493 = cljs.core.count.call(null,c__4768__auto___75490);
var G__75494 = (0);
seq__75471_75477 = G__75491;
chunk__75472_75478 = G__75492;
count__75473_75479 = G__75493;
i__75474_75480 = G__75494;
continue;
} else {
var vec__75476_75495 = cljs.core.first.call(null,seq__75471_75489__$1);
var name_75496 = cljs.core.nth.call(null,vec__75476_75495,(0),null);
var value_75497 = cljs.core.nth.call(null,vec__75476_75495,(1),null);
domina.set_attr_BANG_.call(null,content,name_75496,value_75497);

var G__75498 = cljs.core.next.call(null,seq__75471_75489__$1);
var G__75499 = null;
var G__75500 = (0);
var G__75501 = (0);
seq__75471_75477 = G__75498;
chunk__75472_75478 = G__75499;
count__75473_75479 = G__75500;
i__75474_75480 = G__75501;
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
var seq__75506_75510 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__75507_75511 = null;
var count__75508_75512 = (0);
var i__75509_75513 = (0);
while(true){
if((i__75509_75513 < count__75508_75512)){
var node_75514 = cljs.core._nth.call(null,chunk__75507_75511,i__75509_75513);
goog.dom.classes.add(node_75514,class$);

var G__75515 = seq__75506_75510;
var G__75516 = chunk__75507_75511;
var G__75517 = count__75508_75512;
var G__75518 = (i__75509_75513 + (1));
seq__75506_75510 = G__75515;
chunk__75507_75511 = G__75516;
count__75508_75512 = G__75517;
i__75509_75513 = G__75518;
continue;
} else {
var temp__4126__auto___75519 = cljs.core.seq.call(null,seq__75506_75510);
if(temp__4126__auto___75519){
var seq__75506_75520__$1 = temp__4126__auto___75519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75506_75520__$1)){
var c__4768__auto___75521 = cljs.core.chunk_first.call(null,seq__75506_75520__$1);
var G__75522 = cljs.core.chunk_rest.call(null,seq__75506_75520__$1);
var G__75523 = c__4768__auto___75521;
var G__75524 = cljs.core.count.call(null,c__4768__auto___75521);
var G__75525 = (0);
seq__75506_75510 = G__75522;
chunk__75507_75511 = G__75523;
count__75508_75512 = G__75524;
i__75509_75513 = G__75525;
continue;
} else {
var node_75526 = cljs.core.first.call(null,seq__75506_75520__$1);
goog.dom.classes.add(node_75526,class$);

var G__75527 = cljs.core.next.call(null,seq__75506_75520__$1);
var G__75528 = null;
var G__75529 = (0);
var G__75530 = (0);
seq__75506_75510 = G__75527;
chunk__75507_75511 = G__75528;
count__75508_75512 = G__75529;
i__75509_75513 = G__75530;
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
var seq__75535_75539 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__75536_75540 = null;
var count__75537_75541 = (0);
var i__75538_75542 = (0);
while(true){
if((i__75538_75542 < count__75537_75541)){
var node_75543 = cljs.core._nth.call(null,chunk__75536_75540,i__75538_75542);
goog.dom.classes.remove(node_75543,class$);

var G__75544 = seq__75535_75539;
var G__75545 = chunk__75536_75540;
var G__75546 = count__75537_75541;
var G__75547 = (i__75538_75542 + (1));
seq__75535_75539 = G__75544;
chunk__75536_75540 = G__75545;
count__75537_75541 = G__75546;
i__75538_75542 = G__75547;
continue;
} else {
var temp__4126__auto___75548 = cljs.core.seq.call(null,seq__75535_75539);
if(temp__4126__auto___75548){
var seq__75535_75549__$1 = temp__4126__auto___75548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75535_75549__$1)){
var c__4768__auto___75550 = cljs.core.chunk_first.call(null,seq__75535_75549__$1);
var G__75551 = cljs.core.chunk_rest.call(null,seq__75535_75549__$1);
var G__75552 = c__4768__auto___75550;
var G__75553 = cljs.core.count.call(null,c__4768__auto___75550);
var G__75554 = (0);
seq__75535_75539 = G__75551;
chunk__75536_75540 = G__75552;
count__75537_75541 = G__75553;
i__75538_75542 = G__75554;
continue;
} else {
var node_75555 = cljs.core.first.call(null,seq__75535_75549__$1);
goog.dom.classes.remove(node_75555,class$);

var G__75556 = cljs.core.next.call(null,seq__75535_75549__$1);
var G__75557 = null;
var G__75558 = (0);
var G__75559 = (0);
seq__75535_75539 = G__75556;
chunk__75536_75540 = G__75557;
count__75537_75541 = G__75558;
i__75538_75542 = G__75559;
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
var seq__75564_75568 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__75565_75569 = null;
var count__75566_75570 = (0);
var i__75567_75571 = (0);
while(true){
if((i__75567_75571 < count__75566_75570)){
var node_75572 = cljs.core._nth.call(null,chunk__75565_75569,i__75567_75571);
goog.dom.classes.toggle(node_75572,class$);

var G__75573 = seq__75564_75568;
var G__75574 = chunk__75565_75569;
var G__75575 = count__75566_75570;
var G__75576 = (i__75567_75571 + (1));
seq__75564_75568 = G__75573;
chunk__75565_75569 = G__75574;
count__75566_75570 = G__75575;
i__75567_75571 = G__75576;
continue;
} else {
var temp__4126__auto___75577 = cljs.core.seq.call(null,seq__75564_75568);
if(temp__4126__auto___75577){
var seq__75564_75578__$1 = temp__4126__auto___75577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75564_75578__$1)){
var c__4768__auto___75579 = cljs.core.chunk_first.call(null,seq__75564_75578__$1);
var G__75580 = cljs.core.chunk_rest.call(null,seq__75564_75578__$1);
var G__75581 = c__4768__auto___75579;
var G__75582 = cljs.core.count.call(null,c__4768__auto___75579);
var G__75583 = (0);
seq__75564_75568 = G__75580;
chunk__75565_75569 = G__75581;
count__75566_75570 = G__75582;
i__75567_75571 = G__75583;
continue;
} else {
var node_75584 = cljs.core.first.call(null,seq__75564_75578__$1);
goog.dom.classes.toggle(node_75584,class$);

var G__75585 = cljs.core.next.call(null,seq__75564_75578__$1);
var G__75586 = null;
var G__75587 = (0);
var G__75588 = (0);
seq__75564_75568 = G__75585;
chunk__75565_75569 = G__75586;
count__75566_75570 = G__75587;
i__75567_75571 = G__75588;
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
var classes_75597__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__75593_75598 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__75594_75599 = null;
var count__75595_75600 = (0);
var i__75596_75601 = (0);
while(true){
if((i__75596_75601 < count__75595_75600)){
var node_75602 = cljs.core._nth.call(null,chunk__75594_75599,i__75596_75601);
goog.dom.classes.set(node_75602,classes_75597__$1);

var G__75603 = seq__75593_75598;
var G__75604 = chunk__75594_75599;
var G__75605 = count__75595_75600;
var G__75606 = (i__75596_75601 + (1));
seq__75593_75598 = G__75603;
chunk__75594_75599 = G__75604;
count__75595_75600 = G__75605;
i__75596_75601 = G__75606;
continue;
} else {
var temp__4126__auto___75607 = cljs.core.seq.call(null,seq__75593_75598);
if(temp__4126__auto___75607){
var seq__75593_75608__$1 = temp__4126__auto___75607;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75593_75608__$1)){
var c__4768__auto___75609 = cljs.core.chunk_first.call(null,seq__75593_75608__$1);
var G__75610 = cljs.core.chunk_rest.call(null,seq__75593_75608__$1);
var G__75611 = c__4768__auto___75609;
var G__75612 = cljs.core.count.call(null,c__4768__auto___75609);
var G__75613 = (0);
seq__75593_75598 = G__75610;
chunk__75594_75599 = G__75611;
count__75595_75600 = G__75612;
i__75596_75601 = G__75613;
continue;
} else {
var node_75614 = cljs.core.first.call(null,seq__75593_75608__$1);
goog.dom.classes.set(node_75614,classes_75597__$1);

var G__75615 = cljs.core.next.call(null,seq__75593_75608__$1);
var G__75616 = null;
var G__75617 = (0);
var G__75618 = (0);
seq__75593_75598 = G__75615;
chunk__75594_75599 = G__75616;
count__75595_75600 = G__75617;
i__75596_75601 = G__75618;
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
var seq__75623_75627 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__75624_75628 = null;
var count__75625_75629 = (0);
var i__75626_75630 = (0);
while(true){
if((i__75626_75630 < count__75625_75629)){
var node_75631 = cljs.core._nth.call(null,chunk__75624_75628,i__75626_75630);
goog.dom.setTextContent(node_75631,value);

var G__75632 = seq__75623_75627;
var G__75633 = chunk__75624_75628;
var G__75634 = count__75625_75629;
var G__75635 = (i__75626_75630 + (1));
seq__75623_75627 = G__75632;
chunk__75624_75628 = G__75633;
count__75625_75629 = G__75634;
i__75626_75630 = G__75635;
continue;
} else {
var temp__4126__auto___75636 = cljs.core.seq.call(null,seq__75623_75627);
if(temp__4126__auto___75636){
var seq__75623_75637__$1 = temp__4126__auto___75636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75623_75637__$1)){
var c__4768__auto___75638 = cljs.core.chunk_first.call(null,seq__75623_75637__$1);
var G__75639 = cljs.core.chunk_rest.call(null,seq__75623_75637__$1);
var G__75640 = c__4768__auto___75638;
var G__75641 = cljs.core.count.call(null,c__4768__auto___75638);
var G__75642 = (0);
seq__75623_75627 = G__75639;
chunk__75624_75628 = G__75640;
count__75625_75629 = G__75641;
i__75626_75630 = G__75642;
continue;
} else {
var node_75643 = cljs.core.first.call(null,seq__75623_75637__$1);
goog.dom.setTextContent(node_75643,value);

var G__75644 = cljs.core.next.call(null,seq__75623_75637__$1);
var G__75645 = null;
var G__75646 = (0);
var G__75647 = (0);
seq__75623_75627 = G__75644;
chunk__75624_75628 = G__75645;
count__75625_75629 = G__75646;
i__75626_75630 = G__75647;
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
var seq__75652_75656 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__75653_75657 = null;
var count__75654_75658 = (0);
var i__75655_75659 = (0);
while(true){
if((i__75655_75659 < count__75654_75658)){
var node_75660 = cljs.core._nth.call(null,chunk__75653_75657,i__75655_75659);
goog.dom.forms.setValue(node_75660,value);

var G__75661 = seq__75652_75656;
var G__75662 = chunk__75653_75657;
var G__75663 = count__75654_75658;
var G__75664 = (i__75655_75659 + (1));
seq__75652_75656 = G__75661;
chunk__75653_75657 = G__75662;
count__75654_75658 = G__75663;
i__75655_75659 = G__75664;
continue;
} else {
var temp__4126__auto___75665 = cljs.core.seq.call(null,seq__75652_75656);
if(temp__4126__auto___75665){
var seq__75652_75666__$1 = temp__4126__auto___75665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75652_75666__$1)){
var c__4768__auto___75667 = cljs.core.chunk_first.call(null,seq__75652_75666__$1);
var G__75668 = cljs.core.chunk_rest.call(null,seq__75652_75666__$1);
var G__75669 = c__4768__auto___75667;
var G__75670 = cljs.core.count.call(null,c__4768__auto___75667);
var G__75671 = (0);
seq__75652_75656 = G__75668;
chunk__75653_75657 = G__75669;
count__75654_75658 = G__75670;
i__75655_75659 = G__75671;
continue;
} else {
var node_75672 = cljs.core.first.call(null,seq__75652_75666__$1);
goog.dom.forms.setValue(node_75672,value);

var G__75673 = cljs.core.next.call(null,seq__75652_75666__$1);
var G__75674 = null;
var G__75675 = (0);
var G__75676 = (0);
seq__75652_75656 = G__75673;
chunk__75653_75657 = G__75674;
count__75654_75658 = G__75675;
i__75655_75659 = G__75676;
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
var value_75687 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__75683_75688 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__75684_75689 = null;
var count__75685_75690 = (0);
var i__75686_75691 = (0);
while(true){
if((i__75686_75691 < count__75685_75690)){
var node_75692 = cljs.core._nth.call(null,chunk__75684_75689,i__75686_75691);
node_75692.innerHTML = value_75687;

var G__75693 = seq__75683_75688;
var G__75694 = chunk__75684_75689;
var G__75695 = count__75685_75690;
var G__75696 = (i__75686_75691 + (1));
seq__75683_75688 = G__75693;
chunk__75684_75689 = G__75694;
count__75685_75690 = G__75695;
i__75686_75691 = G__75696;
continue;
} else {
var temp__4126__auto___75697 = cljs.core.seq.call(null,seq__75683_75688);
if(temp__4126__auto___75697){
var seq__75683_75698__$1 = temp__4126__auto___75697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75683_75698__$1)){
var c__4768__auto___75699 = cljs.core.chunk_first.call(null,seq__75683_75698__$1);
var G__75700 = cljs.core.chunk_rest.call(null,seq__75683_75698__$1);
var G__75701 = c__4768__auto___75699;
var G__75702 = cljs.core.count.call(null,c__4768__auto___75699);
var G__75703 = (0);
seq__75683_75688 = G__75700;
chunk__75684_75689 = G__75701;
count__75685_75690 = G__75702;
i__75686_75691 = G__75703;
continue;
} else {
var node_75704 = cljs.core.first.call(null,seq__75683_75698__$1);
node_75704.innerHTML = value_75687;

var G__75705 = cljs.core.next.call(null,seq__75683_75698__$1);
var G__75706 = null;
var G__75707 = (0);
var G__75708 = (0);
seq__75683_75688 = G__75705;
chunk__75684_75689 = G__75706;
count__75685_75690 = G__75707;
i__75686_75691 = G__75708;
continue;
}
} else {
}
}
break;
}
}catch (e75682){if((e75682 instanceof Error)){
var e_75709 = e75682;
domina.replace_children_BANG_.call(null,content,value_75687);
} else {
throw e75682;

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
var seq__75716_75720 = cljs.core.seq.call(null,children);
var chunk__75717_75721 = null;
var count__75718_75722 = (0);
var i__75719_75723 = (0);
while(true){
if((i__75719_75723 < count__75718_75722)){
var child_75724 = cljs.core._nth.call(null,chunk__75717_75721,i__75719_75723);
frag.appendChild(child_75724);

var G__75725 = seq__75716_75720;
var G__75726 = chunk__75717_75721;
var G__75727 = count__75718_75722;
var G__75728 = (i__75719_75723 + (1));
seq__75716_75720 = G__75725;
chunk__75717_75721 = G__75726;
count__75718_75722 = G__75727;
i__75719_75723 = G__75728;
continue;
} else {
var temp__4126__auto___75729 = cljs.core.seq.call(null,seq__75716_75720);
if(temp__4126__auto___75729){
var seq__75716_75730__$1 = temp__4126__auto___75729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__75716_75730__$1)){
var c__4768__auto___75731 = cljs.core.chunk_first.call(null,seq__75716_75730__$1);
var G__75732 = cljs.core.chunk_rest.call(null,seq__75716_75730__$1);
var G__75733 = c__4768__auto___75731;
var G__75734 = cljs.core.count.call(null,c__4768__auto___75731);
var G__75735 = (0);
seq__75716_75720 = G__75732;
chunk__75717_75721 = G__75733;
count__75718_75722 = G__75734;
i__75719_75723 = G__75735;
continue;
} else {
var child_75736 = cljs.core.first.call(null,seq__75716_75730__$1);
frag.appendChild(child_75736);

var G__75737 = cljs.core.next.call(null,seq__75716_75730__$1);
var G__75738 = null;
var G__75739 = (0);
var G__75740 = (0);
seq__75716_75720 = G__75737;
chunk__75717_75721 = G__75738;
count__75718_75722 = G__75739;
i__75719_75723 = G__75740;
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
return (function (p1__75710_SHARP_,p2__75711_SHARP_){
return f.call(null,p1__75710_SHARP_,p2__75711_SHARP_);
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
if((function (){var G__75742 = list_thing;
if(G__75742){
var bit__4662__auto__ = (G__75742.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__75742.cljs$core$ISeqable$)){
return true;
} else {
if((!G__75742.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__75742);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__75742);
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
if((function (){var G__75743 = content;
if(G__75743){
var bit__4662__auto__ = (G__75743.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__75743.cljs$core$ISeqable$)){
return true;
} else {
if((!G__75743.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__75743);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__75743);
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
if((function (){var G__75744 = content;
if(G__75744){
var bit__4662__auto__ = (G__75744.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__75744.cljs$core$ISeqable$)){
return true;
} else {
if((!G__75744.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__75744);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__75744);
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
