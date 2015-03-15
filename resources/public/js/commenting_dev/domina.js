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
var opt_wrapper_343428 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_343429 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_343430 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_343430,opt_wrapper_343428,table_section_wrapper_343429,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_343428,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_343429,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_343429,cell_wrapper_343430,table_section_wrapper_343429,table_section_wrapper_343429]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__343435 = cljs.core.seq.call(null,tbody);
var chunk__343436 = null;
var count__343437 = (0);
var i__343438 = (0);
while(true){
if((i__343438 < count__343437)){
var child = cljs.core._nth.call(null,chunk__343436,i__343438);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__343439 = seq__343435;
var G__343440 = chunk__343436;
var G__343441 = count__343437;
var G__343442 = (i__343438 + (1));
seq__343435 = G__343439;
chunk__343436 = G__343440;
count__343437 = G__343441;
i__343438 = G__343442;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__343435);
if(temp__4126__auto__){
var seq__343435__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343435__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__343435__$1);
var G__343443 = cljs.core.chunk_rest.call(null,seq__343435__$1);
var G__343444 = c__4768__auto__;
var G__343445 = cljs.core.count.call(null,c__4768__auto__);
var G__343446 = (0);
seq__343435 = G__343443;
chunk__343436 = G__343444;
count__343437 = G__343445;
i__343438 = G__343446;
continue;
} else {
var child = cljs.core.first.call(null,seq__343435__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__343447 = cljs.core.next.call(null,seq__343435__$1);
var G__343448 = null;
var G__343449 = (0);
var G__343450 = (0);
seq__343435 = G__343447;
chunk__343436 = G__343448;
count__343437 = G__343449;
i__343438 = G__343450;
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
var vec__343452 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__343452,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__343452,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__343452,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__343453 = wrapper.lastChild;
var G__343454 = (level - (1));
wrapper = G__343453;
level = G__343454;
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

domina.DomContent = (function (){var obj343456 = {};
return obj343456;
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
var G__343457__i = 0, G__343457__a = new Array(arguments.length -  0);
while (G__343457__i < G__343457__a.length) {G__343457__a[G__343457__i] = arguments[G__343457__i + 0]; ++G__343457__i;}
  mesg = new cljs.core.IndexedSeq(G__343457__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__343458){
var mesg = cljs.core.seq(arglist__343458);
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
var G__343459__i = 0, G__343459__a = new Array(arguments.length -  0);
while (G__343459__i < G__343459__a.length) {G__343459__a[G__343459__i] = arguments[G__343459__i + 0]; ++G__343459__i;}
  mesg = new cljs.core.IndexedSeq(G__343459__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__343460){
var mesg = cljs.core.seq(arglist__343460);
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
var G__343461__i = 0, G__343461__a = new Array(arguments.length -  0);
while (G__343461__i < G__343461__a.length) {G__343461__a[G__343461__i] = arguments[G__343461__i + 0]; ++G__343461__i;}
  contents = new cljs.core.IndexedSeq(G__343461__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__343462){
var contents = cljs.core.seq(arglist__343462);
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
return cljs.core.map.call(null,(function (p1__343463_SHARP_){
return p1__343463_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__343464_SHARP_,p2__343465_SHARP_){
return goog.dom.insertChildAt(p1__343464_SHARP_,p2__343465_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__343467_SHARP_,p2__343466_SHARP_){
return goog.dom.insertSiblingBefore(p2__343466_SHARP_,p1__343467_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__343469_SHARP_,p2__343468_SHARP_){
return goog.dom.insertSiblingAfter(p2__343468_SHARP_,p1__343469_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__343471_SHARP_,p2__343470_SHARP_){
return goog.dom.replaceNode(p2__343470_SHARP_,p1__343471_SHARP_);
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
var seq__343476_343480 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__343477_343481 = null;
var count__343478_343482 = (0);
var i__343479_343483 = (0);
while(true){
if((i__343479_343483 < count__343478_343482)){
var n_343484 = cljs.core._nth.call(null,chunk__343477_343481,i__343479_343483);
goog.style.setStyle(n_343484,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__343485 = seq__343476_343480;
var G__343486 = chunk__343477_343481;
var G__343487 = count__343478_343482;
var G__343488 = (i__343479_343483 + (1));
seq__343476_343480 = G__343485;
chunk__343477_343481 = G__343486;
count__343478_343482 = G__343487;
i__343479_343483 = G__343488;
continue;
} else {
var temp__4126__auto___343489 = cljs.core.seq.call(null,seq__343476_343480);
if(temp__4126__auto___343489){
var seq__343476_343490__$1 = temp__4126__auto___343489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343476_343490__$1)){
var c__4768__auto___343491 = cljs.core.chunk_first.call(null,seq__343476_343490__$1);
var G__343492 = cljs.core.chunk_rest.call(null,seq__343476_343490__$1);
var G__343493 = c__4768__auto___343491;
var G__343494 = cljs.core.count.call(null,c__4768__auto___343491);
var G__343495 = (0);
seq__343476_343480 = G__343492;
chunk__343477_343481 = G__343493;
count__343478_343482 = G__343494;
i__343479_343483 = G__343495;
continue;
} else {
var n_343496 = cljs.core.first.call(null,seq__343476_343490__$1);
goog.style.setStyle(n_343496,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__343497 = cljs.core.next.call(null,seq__343476_343490__$1);
var G__343498 = null;
var G__343499 = (0);
var G__343500 = (0);
seq__343476_343480 = G__343497;
chunk__343477_343481 = G__343498;
count__343478_343482 = G__343499;
i__343479_343483 = G__343500;
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
var G__343501__i = 0, G__343501__a = new Array(arguments.length -  2);
while (G__343501__i < G__343501__a.length) {G__343501__a[G__343501__i] = arguments[G__343501__i + 2]; ++G__343501__i;}
  value = new cljs.core.IndexedSeq(G__343501__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__343502){
var content = cljs.core.first(arglist__343502);
arglist__343502 = cljs.core.next(arglist__343502);
var name = cljs.core.first(arglist__343502);
var value = cljs.core.rest(arglist__343502);
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
var seq__343507_343511 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__343508_343512 = null;
var count__343509_343513 = (0);
var i__343510_343514 = (0);
while(true){
if((i__343510_343514 < count__343509_343513)){
var n_343515 = cljs.core._nth.call(null,chunk__343508_343512,i__343510_343514);
n_343515.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__343516 = seq__343507_343511;
var G__343517 = chunk__343508_343512;
var G__343518 = count__343509_343513;
var G__343519 = (i__343510_343514 + (1));
seq__343507_343511 = G__343516;
chunk__343508_343512 = G__343517;
count__343509_343513 = G__343518;
i__343510_343514 = G__343519;
continue;
} else {
var temp__4126__auto___343520 = cljs.core.seq.call(null,seq__343507_343511);
if(temp__4126__auto___343520){
var seq__343507_343521__$1 = temp__4126__auto___343520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343507_343521__$1)){
var c__4768__auto___343522 = cljs.core.chunk_first.call(null,seq__343507_343521__$1);
var G__343523 = cljs.core.chunk_rest.call(null,seq__343507_343521__$1);
var G__343524 = c__4768__auto___343522;
var G__343525 = cljs.core.count.call(null,c__4768__auto___343522);
var G__343526 = (0);
seq__343507_343511 = G__343523;
chunk__343508_343512 = G__343524;
count__343509_343513 = G__343525;
i__343510_343514 = G__343526;
continue;
} else {
var n_343527 = cljs.core.first.call(null,seq__343507_343521__$1);
n_343527.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__343528 = cljs.core.next.call(null,seq__343507_343521__$1);
var G__343529 = null;
var G__343530 = (0);
var G__343531 = (0);
seq__343507_343511 = G__343528;
chunk__343508_343512 = G__343529;
count__343509_343513 = G__343530;
i__343510_343514 = G__343531;
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
var G__343532__i = 0, G__343532__a = new Array(arguments.length -  2);
while (G__343532__i < G__343532__a.length) {G__343532__a[G__343532__i] = arguments[G__343532__i + 2]; ++G__343532__i;}
  value = new cljs.core.IndexedSeq(G__343532__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__343533){
var content = cljs.core.first(arglist__343533);
arglist__343533 = cljs.core.next(arglist__343533);
var name = cljs.core.first(arglist__343533);
var value = cljs.core.rest(arglist__343533);
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
var seq__343538_343542 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__343539_343543 = null;
var count__343540_343544 = (0);
var i__343541_343545 = (0);
while(true){
if((i__343541_343545 < count__343540_343544)){
var n_343546 = cljs.core._nth.call(null,chunk__343539_343543,i__343541_343545);
n_343546.removeAttribute(cljs.core.name.call(null,name));

var G__343547 = seq__343538_343542;
var G__343548 = chunk__343539_343543;
var G__343549 = count__343540_343544;
var G__343550 = (i__343541_343545 + (1));
seq__343538_343542 = G__343547;
chunk__343539_343543 = G__343548;
count__343540_343544 = G__343549;
i__343541_343545 = G__343550;
continue;
} else {
var temp__4126__auto___343551 = cljs.core.seq.call(null,seq__343538_343542);
if(temp__4126__auto___343551){
var seq__343538_343552__$1 = temp__4126__auto___343551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343538_343552__$1)){
var c__4768__auto___343553 = cljs.core.chunk_first.call(null,seq__343538_343552__$1);
var G__343554 = cljs.core.chunk_rest.call(null,seq__343538_343552__$1);
var G__343555 = c__4768__auto___343553;
var G__343556 = cljs.core.count.call(null,c__4768__auto___343553);
var G__343557 = (0);
seq__343538_343542 = G__343554;
chunk__343539_343543 = G__343555;
count__343540_343544 = G__343556;
i__343541_343545 = G__343557;
continue;
} else {
var n_343558 = cljs.core.first.call(null,seq__343538_343552__$1);
n_343558.removeAttribute(cljs.core.name.call(null,name));

var G__343559 = cljs.core.next.call(null,seq__343538_343552__$1);
var G__343560 = null;
var G__343561 = (0);
var G__343562 = (0);
seq__343538_343542 = G__343559;
chunk__343539_343543 = G__343560;
count__343540_343544 = G__343561;
i__343541_343545 = G__343562;
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
var vec__343564 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__343564,(0),null);
var v = cljs.core.nth.call(null,vec__343564,(1),null);
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
return (function (p1__343565_SHARP_){
var attr = attrs__$1.item(p1__343565_SHARP_);
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
var seq__343572_343578 = cljs.core.seq.call(null,styles);
var chunk__343573_343579 = null;
var count__343574_343580 = (0);
var i__343575_343581 = (0);
while(true){
if((i__343575_343581 < count__343574_343580)){
var vec__343576_343582 = cljs.core._nth.call(null,chunk__343573_343579,i__343575_343581);
var name_343583 = cljs.core.nth.call(null,vec__343576_343582,(0),null);
var value_343584 = cljs.core.nth.call(null,vec__343576_343582,(1),null);
domina.set_style_BANG_.call(null,content,name_343583,value_343584);

var G__343585 = seq__343572_343578;
var G__343586 = chunk__343573_343579;
var G__343587 = count__343574_343580;
var G__343588 = (i__343575_343581 + (1));
seq__343572_343578 = G__343585;
chunk__343573_343579 = G__343586;
count__343574_343580 = G__343587;
i__343575_343581 = G__343588;
continue;
} else {
var temp__4126__auto___343589 = cljs.core.seq.call(null,seq__343572_343578);
if(temp__4126__auto___343589){
var seq__343572_343590__$1 = temp__4126__auto___343589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343572_343590__$1)){
var c__4768__auto___343591 = cljs.core.chunk_first.call(null,seq__343572_343590__$1);
var G__343592 = cljs.core.chunk_rest.call(null,seq__343572_343590__$1);
var G__343593 = c__4768__auto___343591;
var G__343594 = cljs.core.count.call(null,c__4768__auto___343591);
var G__343595 = (0);
seq__343572_343578 = G__343592;
chunk__343573_343579 = G__343593;
count__343574_343580 = G__343594;
i__343575_343581 = G__343595;
continue;
} else {
var vec__343577_343596 = cljs.core.first.call(null,seq__343572_343590__$1);
var name_343597 = cljs.core.nth.call(null,vec__343577_343596,(0),null);
var value_343598 = cljs.core.nth.call(null,vec__343577_343596,(1),null);
domina.set_style_BANG_.call(null,content,name_343597,value_343598);

var G__343599 = cljs.core.next.call(null,seq__343572_343590__$1);
var G__343600 = null;
var G__343601 = (0);
var G__343602 = (0);
seq__343572_343578 = G__343599;
chunk__343573_343579 = G__343600;
count__343574_343580 = G__343601;
i__343575_343581 = G__343602;
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
var seq__343609_343615 = cljs.core.seq.call(null,attrs);
var chunk__343610_343616 = null;
var count__343611_343617 = (0);
var i__343612_343618 = (0);
while(true){
if((i__343612_343618 < count__343611_343617)){
var vec__343613_343619 = cljs.core._nth.call(null,chunk__343610_343616,i__343612_343618);
var name_343620 = cljs.core.nth.call(null,vec__343613_343619,(0),null);
var value_343621 = cljs.core.nth.call(null,vec__343613_343619,(1),null);
domina.set_attr_BANG_.call(null,content,name_343620,value_343621);

var G__343622 = seq__343609_343615;
var G__343623 = chunk__343610_343616;
var G__343624 = count__343611_343617;
var G__343625 = (i__343612_343618 + (1));
seq__343609_343615 = G__343622;
chunk__343610_343616 = G__343623;
count__343611_343617 = G__343624;
i__343612_343618 = G__343625;
continue;
} else {
var temp__4126__auto___343626 = cljs.core.seq.call(null,seq__343609_343615);
if(temp__4126__auto___343626){
var seq__343609_343627__$1 = temp__4126__auto___343626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343609_343627__$1)){
var c__4768__auto___343628 = cljs.core.chunk_first.call(null,seq__343609_343627__$1);
var G__343629 = cljs.core.chunk_rest.call(null,seq__343609_343627__$1);
var G__343630 = c__4768__auto___343628;
var G__343631 = cljs.core.count.call(null,c__4768__auto___343628);
var G__343632 = (0);
seq__343609_343615 = G__343629;
chunk__343610_343616 = G__343630;
count__343611_343617 = G__343631;
i__343612_343618 = G__343632;
continue;
} else {
var vec__343614_343633 = cljs.core.first.call(null,seq__343609_343627__$1);
var name_343634 = cljs.core.nth.call(null,vec__343614_343633,(0),null);
var value_343635 = cljs.core.nth.call(null,vec__343614_343633,(1),null);
domina.set_attr_BANG_.call(null,content,name_343634,value_343635);

var G__343636 = cljs.core.next.call(null,seq__343609_343627__$1);
var G__343637 = null;
var G__343638 = (0);
var G__343639 = (0);
seq__343609_343615 = G__343636;
chunk__343610_343616 = G__343637;
count__343611_343617 = G__343638;
i__343612_343618 = G__343639;
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
var seq__343644_343648 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__343645_343649 = null;
var count__343646_343650 = (0);
var i__343647_343651 = (0);
while(true){
if((i__343647_343651 < count__343646_343650)){
var node_343652 = cljs.core._nth.call(null,chunk__343645_343649,i__343647_343651);
goog.dom.classes.add(node_343652,class$);

var G__343653 = seq__343644_343648;
var G__343654 = chunk__343645_343649;
var G__343655 = count__343646_343650;
var G__343656 = (i__343647_343651 + (1));
seq__343644_343648 = G__343653;
chunk__343645_343649 = G__343654;
count__343646_343650 = G__343655;
i__343647_343651 = G__343656;
continue;
} else {
var temp__4126__auto___343657 = cljs.core.seq.call(null,seq__343644_343648);
if(temp__4126__auto___343657){
var seq__343644_343658__$1 = temp__4126__auto___343657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343644_343658__$1)){
var c__4768__auto___343659 = cljs.core.chunk_first.call(null,seq__343644_343658__$1);
var G__343660 = cljs.core.chunk_rest.call(null,seq__343644_343658__$1);
var G__343661 = c__4768__auto___343659;
var G__343662 = cljs.core.count.call(null,c__4768__auto___343659);
var G__343663 = (0);
seq__343644_343648 = G__343660;
chunk__343645_343649 = G__343661;
count__343646_343650 = G__343662;
i__343647_343651 = G__343663;
continue;
} else {
var node_343664 = cljs.core.first.call(null,seq__343644_343658__$1);
goog.dom.classes.add(node_343664,class$);

var G__343665 = cljs.core.next.call(null,seq__343644_343658__$1);
var G__343666 = null;
var G__343667 = (0);
var G__343668 = (0);
seq__343644_343648 = G__343665;
chunk__343645_343649 = G__343666;
count__343646_343650 = G__343667;
i__343647_343651 = G__343668;
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
var seq__343673_343677 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__343674_343678 = null;
var count__343675_343679 = (0);
var i__343676_343680 = (0);
while(true){
if((i__343676_343680 < count__343675_343679)){
var node_343681 = cljs.core._nth.call(null,chunk__343674_343678,i__343676_343680);
goog.dom.classes.remove(node_343681,class$);

var G__343682 = seq__343673_343677;
var G__343683 = chunk__343674_343678;
var G__343684 = count__343675_343679;
var G__343685 = (i__343676_343680 + (1));
seq__343673_343677 = G__343682;
chunk__343674_343678 = G__343683;
count__343675_343679 = G__343684;
i__343676_343680 = G__343685;
continue;
} else {
var temp__4126__auto___343686 = cljs.core.seq.call(null,seq__343673_343677);
if(temp__4126__auto___343686){
var seq__343673_343687__$1 = temp__4126__auto___343686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343673_343687__$1)){
var c__4768__auto___343688 = cljs.core.chunk_first.call(null,seq__343673_343687__$1);
var G__343689 = cljs.core.chunk_rest.call(null,seq__343673_343687__$1);
var G__343690 = c__4768__auto___343688;
var G__343691 = cljs.core.count.call(null,c__4768__auto___343688);
var G__343692 = (0);
seq__343673_343677 = G__343689;
chunk__343674_343678 = G__343690;
count__343675_343679 = G__343691;
i__343676_343680 = G__343692;
continue;
} else {
var node_343693 = cljs.core.first.call(null,seq__343673_343687__$1);
goog.dom.classes.remove(node_343693,class$);

var G__343694 = cljs.core.next.call(null,seq__343673_343687__$1);
var G__343695 = null;
var G__343696 = (0);
var G__343697 = (0);
seq__343673_343677 = G__343694;
chunk__343674_343678 = G__343695;
count__343675_343679 = G__343696;
i__343676_343680 = G__343697;
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
var seq__343702_343706 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__343703_343707 = null;
var count__343704_343708 = (0);
var i__343705_343709 = (0);
while(true){
if((i__343705_343709 < count__343704_343708)){
var node_343710 = cljs.core._nth.call(null,chunk__343703_343707,i__343705_343709);
goog.dom.classes.toggle(node_343710,class$);

var G__343711 = seq__343702_343706;
var G__343712 = chunk__343703_343707;
var G__343713 = count__343704_343708;
var G__343714 = (i__343705_343709 + (1));
seq__343702_343706 = G__343711;
chunk__343703_343707 = G__343712;
count__343704_343708 = G__343713;
i__343705_343709 = G__343714;
continue;
} else {
var temp__4126__auto___343715 = cljs.core.seq.call(null,seq__343702_343706);
if(temp__4126__auto___343715){
var seq__343702_343716__$1 = temp__4126__auto___343715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343702_343716__$1)){
var c__4768__auto___343717 = cljs.core.chunk_first.call(null,seq__343702_343716__$1);
var G__343718 = cljs.core.chunk_rest.call(null,seq__343702_343716__$1);
var G__343719 = c__4768__auto___343717;
var G__343720 = cljs.core.count.call(null,c__4768__auto___343717);
var G__343721 = (0);
seq__343702_343706 = G__343718;
chunk__343703_343707 = G__343719;
count__343704_343708 = G__343720;
i__343705_343709 = G__343721;
continue;
} else {
var node_343722 = cljs.core.first.call(null,seq__343702_343716__$1);
goog.dom.classes.toggle(node_343722,class$);

var G__343723 = cljs.core.next.call(null,seq__343702_343716__$1);
var G__343724 = null;
var G__343725 = (0);
var G__343726 = (0);
seq__343702_343706 = G__343723;
chunk__343703_343707 = G__343724;
count__343704_343708 = G__343725;
i__343705_343709 = G__343726;
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
var classes_343735__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__343731_343736 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__343732_343737 = null;
var count__343733_343738 = (0);
var i__343734_343739 = (0);
while(true){
if((i__343734_343739 < count__343733_343738)){
var node_343740 = cljs.core._nth.call(null,chunk__343732_343737,i__343734_343739);
goog.dom.classes.set(node_343740,classes_343735__$1);

var G__343741 = seq__343731_343736;
var G__343742 = chunk__343732_343737;
var G__343743 = count__343733_343738;
var G__343744 = (i__343734_343739 + (1));
seq__343731_343736 = G__343741;
chunk__343732_343737 = G__343742;
count__343733_343738 = G__343743;
i__343734_343739 = G__343744;
continue;
} else {
var temp__4126__auto___343745 = cljs.core.seq.call(null,seq__343731_343736);
if(temp__4126__auto___343745){
var seq__343731_343746__$1 = temp__4126__auto___343745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343731_343746__$1)){
var c__4768__auto___343747 = cljs.core.chunk_first.call(null,seq__343731_343746__$1);
var G__343748 = cljs.core.chunk_rest.call(null,seq__343731_343746__$1);
var G__343749 = c__4768__auto___343747;
var G__343750 = cljs.core.count.call(null,c__4768__auto___343747);
var G__343751 = (0);
seq__343731_343736 = G__343748;
chunk__343732_343737 = G__343749;
count__343733_343738 = G__343750;
i__343734_343739 = G__343751;
continue;
} else {
var node_343752 = cljs.core.first.call(null,seq__343731_343746__$1);
goog.dom.classes.set(node_343752,classes_343735__$1);

var G__343753 = cljs.core.next.call(null,seq__343731_343746__$1);
var G__343754 = null;
var G__343755 = (0);
var G__343756 = (0);
seq__343731_343736 = G__343753;
chunk__343732_343737 = G__343754;
count__343733_343738 = G__343755;
i__343734_343739 = G__343756;
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
var seq__343761_343765 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__343762_343766 = null;
var count__343763_343767 = (0);
var i__343764_343768 = (0);
while(true){
if((i__343764_343768 < count__343763_343767)){
var node_343769 = cljs.core._nth.call(null,chunk__343762_343766,i__343764_343768);
goog.dom.setTextContent(node_343769,value);

var G__343770 = seq__343761_343765;
var G__343771 = chunk__343762_343766;
var G__343772 = count__343763_343767;
var G__343773 = (i__343764_343768 + (1));
seq__343761_343765 = G__343770;
chunk__343762_343766 = G__343771;
count__343763_343767 = G__343772;
i__343764_343768 = G__343773;
continue;
} else {
var temp__4126__auto___343774 = cljs.core.seq.call(null,seq__343761_343765);
if(temp__4126__auto___343774){
var seq__343761_343775__$1 = temp__4126__auto___343774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343761_343775__$1)){
var c__4768__auto___343776 = cljs.core.chunk_first.call(null,seq__343761_343775__$1);
var G__343777 = cljs.core.chunk_rest.call(null,seq__343761_343775__$1);
var G__343778 = c__4768__auto___343776;
var G__343779 = cljs.core.count.call(null,c__4768__auto___343776);
var G__343780 = (0);
seq__343761_343765 = G__343777;
chunk__343762_343766 = G__343778;
count__343763_343767 = G__343779;
i__343764_343768 = G__343780;
continue;
} else {
var node_343781 = cljs.core.first.call(null,seq__343761_343775__$1);
goog.dom.setTextContent(node_343781,value);

var G__343782 = cljs.core.next.call(null,seq__343761_343775__$1);
var G__343783 = null;
var G__343784 = (0);
var G__343785 = (0);
seq__343761_343765 = G__343782;
chunk__343762_343766 = G__343783;
count__343763_343767 = G__343784;
i__343764_343768 = G__343785;
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
var seq__343790_343794 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__343791_343795 = null;
var count__343792_343796 = (0);
var i__343793_343797 = (0);
while(true){
if((i__343793_343797 < count__343792_343796)){
var node_343798 = cljs.core._nth.call(null,chunk__343791_343795,i__343793_343797);
goog.dom.forms.setValue(node_343798,value);

var G__343799 = seq__343790_343794;
var G__343800 = chunk__343791_343795;
var G__343801 = count__343792_343796;
var G__343802 = (i__343793_343797 + (1));
seq__343790_343794 = G__343799;
chunk__343791_343795 = G__343800;
count__343792_343796 = G__343801;
i__343793_343797 = G__343802;
continue;
} else {
var temp__4126__auto___343803 = cljs.core.seq.call(null,seq__343790_343794);
if(temp__4126__auto___343803){
var seq__343790_343804__$1 = temp__4126__auto___343803;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343790_343804__$1)){
var c__4768__auto___343805 = cljs.core.chunk_first.call(null,seq__343790_343804__$1);
var G__343806 = cljs.core.chunk_rest.call(null,seq__343790_343804__$1);
var G__343807 = c__4768__auto___343805;
var G__343808 = cljs.core.count.call(null,c__4768__auto___343805);
var G__343809 = (0);
seq__343790_343794 = G__343806;
chunk__343791_343795 = G__343807;
count__343792_343796 = G__343808;
i__343793_343797 = G__343809;
continue;
} else {
var node_343810 = cljs.core.first.call(null,seq__343790_343804__$1);
goog.dom.forms.setValue(node_343810,value);

var G__343811 = cljs.core.next.call(null,seq__343790_343804__$1);
var G__343812 = null;
var G__343813 = (0);
var G__343814 = (0);
seq__343790_343794 = G__343811;
chunk__343791_343795 = G__343812;
count__343792_343796 = G__343813;
i__343793_343797 = G__343814;
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
var value_343825 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__343821_343826 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__343822_343827 = null;
var count__343823_343828 = (0);
var i__343824_343829 = (0);
while(true){
if((i__343824_343829 < count__343823_343828)){
var node_343830 = cljs.core._nth.call(null,chunk__343822_343827,i__343824_343829);
node_343830.innerHTML = value_343825;

var G__343831 = seq__343821_343826;
var G__343832 = chunk__343822_343827;
var G__343833 = count__343823_343828;
var G__343834 = (i__343824_343829 + (1));
seq__343821_343826 = G__343831;
chunk__343822_343827 = G__343832;
count__343823_343828 = G__343833;
i__343824_343829 = G__343834;
continue;
} else {
var temp__4126__auto___343835 = cljs.core.seq.call(null,seq__343821_343826);
if(temp__4126__auto___343835){
var seq__343821_343836__$1 = temp__4126__auto___343835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343821_343836__$1)){
var c__4768__auto___343837 = cljs.core.chunk_first.call(null,seq__343821_343836__$1);
var G__343838 = cljs.core.chunk_rest.call(null,seq__343821_343836__$1);
var G__343839 = c__4768__auto___343837;
var G__343840 = cljs.core.count.call(null,c__4768__auto___343837);
var G__343841 = (0);
seq__343821_343826 = G__343838;
chunk__343822_343827 = G__343839;
count__343823_343828 = G__343840;
i__343824_343829 = G__343841;
continue;
} else {
var node_343842 = cljs.core.first.call(null,seq__343821_343836__$1);
node_343842.innerHTML = value_343825;

var G__343843 = cljs.core.next.call(null,seq__343821_343836__$1);
var G__343844 = null;
var G__343845 = (0);
var G__343846 = (0);
seq__343821_343826 = G__343843;
chunk__343822_343827 = G__343844;
count__343823_343828 = G__343845;
i__343824_343829 = G__343846;
continue;
}
} else {
}
}
break;
}
}catch (e343820){if((e343820 instanceof Error)){
var e_343847 = e343820;
domina.replace_children_BANG_.call(null,content,value_343825);
} else {
throw e343820;

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
var seq__343854_343858 = cljs.core.seq.call(null,children);
var chunk__343855_343859 = null;
var count__343856_343860 = (0);
var i__343857_343861 = (0);
while(true){
if((i__343857_343861 < count__343856_343860)){
var child_343862 = cljs.core._nth.call(null,chunk__343855_343859,i__343857_343861);
frag.appendChild(child_343862);

var G__343863 = seq__343854_343858;
var G__343864 = chunk__343855_343859;
var G__343865 = count__343856_343860;
var G__343866 = (i__343857_343861 + (1));
seq__343854_343858 = G__343863;
chunk__343855_343859 = G__343864;
count__343856_343860 = G__343865;
i__343857_343861 = G__343866;
continue;
} else {
var temp__4126__auto___343867 = cljs.core.seq.call(null,seq__343854_343858);
if(temp__4126__auto___343867){
var seq__343854_343868__$1 = temp__4126__auto___343867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__343854_343868__$1)){
var c__4768__auto___343869 = cljs.core.chunk_first.call(null,seq__343854_343868__$1);
var G__343870 = cljs.core.chunk_rest.call(null,seq__343854_343868__$1);
var G__343871 = c__4768__auto___343869;
var G__343872 = cljs.core.count.call(null,c__4768__auto___343869);
var G__343873 = (0);
seq__343854_343858 = G__343870;
chunk__343855_343859 = G__343871;
count__343856_343860 = G__343872;
i__343857_343861 = G__343873;
continue;
} else {
var child_343874 = cljs.core.first.call(null,seq__343854_343868__$1);
frag.appendChild(child_343874);

var G__343875 = cljs.core.next.call(null,seq__343854_343868__$1);
var G__343876 = null;
var G__343877 = (0);
var G__343878 = (0);
seq__343854_343858 = G__343875;
chunk__343855_343859 = G__343876;
count__343856_343860 = G__343877;
i__343857_343861 = G__343878;
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
return (function (p1__343848_SHARP_,p2__343849_SHARP_){
return f.call(null,p1__343848_SHARP_,p2__343849_SHARP_);
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
if((function (){var G__343880 = list_thing;
if(G__343880){
var bit__4662__auto__ = (G__343880.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__343880.cljs$core$ISeqable$)){
return true;
} else {
if((!G__343880.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__343880);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__343880);
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
if((function (){var G__343881 = content;
if(G__343881){
var bit__4662__auto__ = (G__343881.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__343881.cljs$core$ISeqable$)){
return true;
} else {
if((!G__343881.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__343881);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__343881);
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
if((function (){var G__343882 = content;
if(G__343882){
var bit__4662__auto__ = (G__343882.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__343882.cljs$core$ISeqable$)){
return true;
} else {
if((!G__343882.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__343882);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__343882);
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
