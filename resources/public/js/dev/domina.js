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
var opt_wrapper_100577 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_100578 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_100579 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_100579,opt_wrapper_100577,table_section_wrapper_100578,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_100577,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_100578,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_100578,cell_wrapper_100579,table_section_wrapper_100578,table_section_wrapper_100578]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__100584 = cljs.core.seq.call(null,tbody);
var chunk__100585 = null;
var count__100586 = (0);
var i__100587 = (0);
while(true){
if((i__100587 < count__100586)){
var child = cljs.core._nth.call(null,chunk__100585,i__100587);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__100588 = seq__100584;
var G__100589 = chunk__100585;
var G__100590 = count__100586;
var G__100591 = (i__100587 + (1));
seq__100584 = G__100588;
chunk__100585 = G__100589;
count__100586 = G__100590;
i__100587 = G__100591;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__100584);
if(temp__4126__auto__){
var seq__100584__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100584__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__100584__$1);
var G__100592 = cljs.core.chunk_rest.call(null,seq__100584__$1);
var G__100593 = c__4768__auto__;
var G__100594 = cljs.core.count.call(null,c__4768__auto__);
var G__100595 = (0);
seq__100584 = G__100592;
chunk__100585 = G__100593;
count__100586 = G__100594;
i__100587 = G__100595;
continue;
} else {
var child = cljs.core.first.call(null,seq__100584__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__100596 = cljs.core.next.call(null,seq__100584__$1);
var G__100597 = null;
var G__100598 = (0);
var G__100599 = (0);
seq__100584 = G__100596;
chunk__100585 = G__100597;
count__100586 = G__100598;
i__100587 = G__100599;
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
var vec__100601 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__100601,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__100601,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__100601,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__100602 = wrapper.lastChild;
var G__100603 = (level - (1));
wrapper = G__100602;
level = G__100603;
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

domina.DomContent = (function (){var obj100605 = {};
return obj100605;
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
var G__100606__i = 0, G__100606__a = new Array(arguments.length -  0);
while (G__100606__i < G__100606__a.length) {G__100606__a[G__100606__i] = arguments[G__100606__i + 0]; ++G__100606__i;}
  mesg = new cljs.core.IndexedSeq(G__100606__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__100607){
var mesg = cljs.core.seq(arglist__100607);
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
var G__100608__i = 0, G__100608__a = new Array(arguments.length -  0);
while (G__100608__i < G__100608__a.length) {G__100608__a[G__100608__i] = arguments[G__100608__i + 0]; ++G__100608__i;}
  mesg = new cljs.core.IndexedSeq(G__100608__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__100609){
var mesg = cljs.core.seq(arglist__100609);
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
var G__100610__i = 0, G__100610__a = new Array(arguments.length -  0);
while (G__100610__i < G__100610__a.length) {G__100610__a[G__100610__i] = arguments[G__100610__i + 0]; ++G__100610__i;}
  contents = new cljs.core.IndexedSeq(G__100610__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__100611){
var contents = cljs.core.seq(arglist__100611);
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
return cljs.core.map.call(null,(function (p1__100612_SHARP_){
return p1__100612_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__100613_SHARP_,p2__100614_SHARP_){
return goog.dom.insertChildAt(p1__100613_SHARP_,p2__100614_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__100616_SHARP_,p2__100615_SHARP_){
return goog.dom.insertSiblingBefore(p2__100615_SHARP_,p1__100616_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__100618_SHARP_,p2__100617_SHARP_){
return goog.dom.insertSiblingAfter(p2__100617_SHARP_,p1__100618_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__100620_SHARP_,p2__100619_SHARP_){
return goog.dom.replaceNode(p2__100619_SHARP_,p1__100620_SHARP_);
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
var seq__100625_100629 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__100626_100630 = null;
var count__100627_100631 = (0);
var i__100628_100632 = (0);
while(true){
if((i__100628_100632 < count__100627_100631)){
var n_100633 = cljs.core._nth.call(null,chunk__100626_100630,i__100628_100632);
goog.style.setStyle(n_100633,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__100634 = seq__100625_100629;
var G__100635 = chunk__100626_100630;
var G__100636 = count__100627_100631;
var G__100637 = (i__100628_100632 + (1));
seq__100625_100629 = G__100634;
chunk__100626_100630 = G__100635;
count__100627_100631 = G__100636;
i__100628_100632 = G__100637;
continue;
} else {
var temp__4126__auto___100638 = cljs.core.seq.call(null,seq__100625_100629);
if(temp__4126__auto___100638){
var seq__100625_100639__$1 = temp__4126__auto___100638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100625_100639__$1)){
var c__4768__auto___100640 = cljs.core.chunk_first.call(null,seq__100625_100639__$1);
var G__100641 = cljs.core.chunk_rest.call(null,seq__100625_100639__$1);
var G__100642 = c__4768__auto___100640;
var G__100643 = cljs.core.count.call(null,c__4768__auto___100640);
var G__100644 = (0);
seq__100625_100629 = G__100641;
chunk__100626_100630 = G__100642;
count__100627_100631 = G__100643;
i__100628_100632 = G__100644;
continue;
} else {
var n_100645 = cljs.core.first.call(null,seq__100625_100639__$1);
goog.style.setStyle(n_100645,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__100646 = cljs.core.next.call(null,seq__100625_100639__$1);
var G__100647 = null;
var G__100648 = (0);
var G__100649 = (0);
seq__100625_100629 = G__100646;
chunk__100626_100630 = G__100647;
count__100627_100631 = G__100648;
i__100628_100632 = G__100649;
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
var G__100650__i = 0, G__100650__a = new Array(arguments.length -  2);
while (G__100650__i < G__100650__a.length) {G__100650__a[G__100650__i] = arguments[G__100650__i + 2]; ++G__100650__i;}
  value = new cljs.core.IndexedSeq(G__100650__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__100651){
var content = cljs.core.first(arglist__100651);
arglist__100651 = cljs.core.next(arglist__100651);
var name = cljs.core.first(arglist__100651);
var value = cljs.core.rest(arglist__100651);
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
var seq__100656_100660 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__100657_100661 = null;
var count__100658_100662 = (0);
var i__100659_100663 = (0);
while(true){
if((i__100659_100663 < count__100658_100662)){
var n_100664 = cljs.core._nth.call(null,chunk__100657_100661,i__100659_100663);
n_100664.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__100665 = seq__100656_100660;
var G__100666 = chunk__100657_100661;
var G__100667 = count__100658_100662;
var G__100668 = (i__100659_100663 + (1));
seq__100656_100660 = G__100665;
chunk__100657_100661 = G__100666;
count__100658_100662 = G__100667;
i__100659_100663 = G__100668;
continue;
} else {
var temp__4126__auto___100669 = cljs.core.seq.call(null,seq__100656_100660);
if(temp__4126__auto___100669){
var seq__100656_100670__$1 = temp__4126__auto___100669;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100656_100670__$1)){
var c__4768__auto___100671 = cljs.core.chunk_first.call(null,seq__100656_100670__$1);
var G__100672 = cljs.core.chunk_rest.call(null,seq__100656_100670__$1);
var G__100673 = c__4768__auto___100671;
var G__100674 = cljs.core.count.call(null,c__4768__auto___100671);
var G__100675 = (0);
seq__100656_100660 = G__100672;
chunk__100657_100661 = G__100673;
count__100658_100662 = G__100674;
i__100659_100663 = G__100675;
continue;
} else {
var n_100676 = cljs.core.first.call(null,seq__100656_100670__$1);
n_100676.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__100677 = cljs.core.next.call(null,seq__100656_100670__$1);
var G__100678 = null;
var G__100679 = (0);
var G__100680 = (0);
seq__100656_100660 = G__100677;
chunk__100657_100661 = G__100678;
count__100658_100662 = G__100679;
i__100659_100663 = G__100680;
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
var G__100681__i = 0, G__100681__a = new Array(arguments.length -  2);
while (G__100681__i < G__100681__a.length) {G__100681__a[G__100681__i] = arguments[G__100681__i + 2]; ++G__100681__i;}
  value = new cljs.core.IndexedSeq(G__100681__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__100682){
var content = cljs.core.first(arglist__100682);
arglist__100682 = cljs.core.next(arglist__100682);
var name = cljs.core.first(arglist__100682);
var value = cljs.core.rest(arglist__100682);
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
var seq__100687_100691 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__100688_100692 = null;
var count__100689_100693 = (0);
var i__100690_100694 = (0);
while(true){
if((i__100690_100694 < count__100689_100693)){
var n_100695 = cljs.core._nth.call(null,chunk__100688_100692,i__100690_100694);
n_100695.removeAttribute(cljs.core.name.call(null,name));

var G__100696 = seq__100687_100691;
var G__100697 = chunk__100688_100692;
var G__100698 = count__100689_100693;
var G__100699 = (i__100690_100694 + (1));
seq__100687_100691 = G__100696;
chunk__100688_100692 = G__100697;
count__100689_100693 = G__100698;
i__100690_100694 = G__100699;
continue;
} else {
var temp__4126__auto___100700 = cljs.core.seq.call(null,seq__100687_100691);
if(temp__4126__auto___100700){
var seq__100687_100701__$1 = temp__4126__auto___100700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100687_100701__$1)){
var c__4768__auto___100702 = cljs.core.chunk_first.call(null,seq__100687_100701__$1);
var G__100703 = cljs.core.chunk_rest.call(null,seq__100687_100701__$1);
var G__100704 = c__4768__auto___100702;
var G__100705 = cljs.core.count.call(null,c__4768__auto___100702);
var G__100706 = (0);
seq__100687_100691 = G__100703;
chunk__100688_100692 = G__100704;
count__100689_100693 = G__100705;
i__100690_100694 = G__100706;
continue;
} else {
var n_100707 = cljs.core.first.call(null,seq__100687_100701__$1);
n_100707.removeAttribute(cljs.core.name.call(null,name));

var G__100708 = cljs.core.next.call(null,seq__100687_100701__$1);
var G__100709 = null;
var G__100710 = (0);
var G__100711 = (0);
seq__100687_100691 = G__100708;
chunk__100688_100692 = G__100709;
count__100689_100693 = G__100710;
i__100690_100694 = G__100711;
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
var vec__100713 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__100713,(0),null);
var v = cljs.core.nth.call(null,vec__100713,(1),null);
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
return (function (p1__100714_SHARP_){
var attr = attrs__$1.item(p1__100714_SHARP_);
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
var seq__100721_100727 = cljs.core.seq.call(null,styles);
var chunk__100722_100728 = null;
var count__100723_100729 = (0);
var i__100724_100730 = (0);
while(true){
if((i__100724_100730 < count__100723_100729)){
var vec__100725_100731 = cljs.core._nth.call(null,chunk__100722_100728,i__100724_100730);
var name_100732 = cljs.core.nth.call(null,vec__100725_100731,(0),null);
var value_100733 = cljs.core.nth.call(null,vec__100725_100731,(1),null);
domina.set_style_BANG_.call(null,content,name_100732,value_100733);

var G__100734 = seq__100721_100727;
var G__100735 = chunk__100722_100728;
var G__100736 = count__100723_100729;
var G__100737 = (i__100724_100730 + (1));
seq__100721_100727 = G__100734;
chunk__100722_100728 = G__100735;
count__100723_100729 = G__100736;
i__100724_100730 = G__100737;
continue;
} else {
var temp__4126__auto___100738 = cljs.core.seq.call(null,seq__100721_100727);
if(temp__4126__auto___100738){
var seq__100721_100739__$1 = temp__4126__auto___100738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100721_100739__$1)){
var c__4768__auto___100740 = cljs.core.chunk_first.call(null,seq__100721_100739__$1);
var G__100741 = cljs.core.chunk_rest.call(null,seq__100721_100739__$1);
var G__100742 = c__4768__auto___100740;
var G__100743 = cljs.core.count.call(null,c__4768__auto___100740);
var G__100744 = (0);
seq__100721_100727 = G__100741;
chunk__100722_100728 = G__100742;
count__100723_100729 = G__100743;
i__100724_100730 = G__100744;
continue;
} else {
var vec__100726_100745 = cljs.core.first.call(null,seq__100721_100739__$1);
var name_100746 = cljs.core.nth.call(null,vec__100726_100745,(0),null);
var value_100747 = cljs.core.nth.call(null,vec__100726_100745,(1),null);
domina.set_style_BANG_.call(null,content,name_100746,value_100747);

var G__100748 = cljs.core.next.call(null,seq__100721_100739__$1);
var G__100749 = null;
var G__100750 = (0);
var G__100751 = (0);
seq__100721_100727 = G__100748;
chunk__100722_100728 = G__100749;
count__100723_100729 = G__100750;
i__100724_100730 = G__100751;
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
var seq__100758_100764 = cljs.core.seq.call(null,attrs);
var chunk__100759_100765 = null;
var count__100760_100766 = (0);
var i__100761_100767 = (0);
while(true){
if((i__100761_100767 < count__100760_100766)){
var vec__100762_100768 = cljs.core._nth.call(null,chunk__100759_100765,i__100761_100767);
var name_100769 = cljs.core.nth.call(null,vec__100762_100768,(0),null);
var value_100770 = cljs.core.nth.call(null,vec__100762_100768,(1),null);
domina.set_attr_BANG_.call(null,content,name_100769,value_100770);

var G__100771 = seq__100758_100764;
var G__100772 = chunk__100759_100765;
var G__100773 = count__100760_100766;
var G__100774 = (i__100761_100767 + (1));
seq__100758_100764 = G__100771;
chunk__100759_100765 = G__100772;
count__100760_100766 = G__100773;
i__100761_100767 = G__100774;
continue;
} else {
var temp__4126__auto___100775 = cljs.core.seq.call(null,seq__100758_100764);
if(temp__4126__auto___100775){
var seq__100758_100776__$1 = temp__4126__auto___100775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100758_100776__$1)){
var c__4768__auto___100777 = cljs.core.chunk_first.call(null,seq__100758_100776__$1);
var G__100778 = cljs.core.chunk_rest.call(null,seq__100758_100776__$1);
var G__100779 = c__4768__auto___100777;
var G__100780 = cljs.core.count.call(null,c__4768__auto___100777);
var G__100781 = (0);
seq__100758_100764 = G__100778;
chunk__100759_100765 = G__100779;
count__100760_100766 = G__100780;
i__100761_100767 = G__100781;
continue;
} else {
var vec__100763_100782 = cljs.core.first.call(null,seq__100758_100776__$1);
var name_100783 = cljs.core.nth.call(null,vec__100763_100782,(0),null);
var value_100784 = cljs.core.nth.call(null,vec__100763_100782,(1),null);
domina.set_attr_BANG_.call(null,content,name_100783,value_100784);

var G__100785 = cljs.core.next.call(null,seq__100758_100776__$1);
var G__100786 = null;
var G__100787 = (0);
var G__100788 = (0);
seq__100758_100764 = G__100785;
chunk__100759_100765 = G__100786;
count__100760_100766 = G__100787;
i__100761_100767 = G__100788;
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
var seq__100793_100797 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__100794_100798 = null;
var count__100795_100799 = (0);
var i__100796_100800 = (0);
while(true){
if((i__100796_100800 < count__100795_100799)){
var node_100801 = cljs.core._nth.call(null,chunk__100794_100798,i__100796_100800);
goog.dom.classes.add(node_100801,class$);

var G__100802 = seq__100793_100797;
var G__100803 = chunk__100794_100798;
var G__100804 = count__100795_100799;
var G__100805 = (i__100796_100800 + (1));
seq__100793_100797 = G__100802;
chunk__100794_100798 = G__100803;
count__100795_100799 = G__100804;
i__100796_100800 = G__100805;
continue;
} else {
var temp__4126__auto___100806 = cljs.core.seq.call(null,seq__100793_100797);
if(temp__4126__auto___100806){
var seq__100793_100807__$1 = temp__4126__auto___100806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100793_100807__$1)){
var c__4768__auto___100808 = cljs.core.chunk_first.call(null,seq__100793_100807__$1);
var G__100809 = cljs.core.chunk_rest.call(null,seq__100793_100807__$1);
var G__100810 = c__4768__auto___100808;
var G__100811 = cljs.core.count.call(null,c__4768__auto___100808);
var G__100812 = (0);
seq__100793_100797 = G__100809;
chunk__100794_100798 = G__100810;
count__100795_100799 = G__100811;
i__100796_100800 = G__100812;
continue;
} else {
var node_100813 = cljs.core.first.call(null,seq__100793_100807__$1);
goog.dom.classes.add(node_100813,class$);

var G__100814 = cljs.core.next.call(null,seq__100793_100807__$1);
var G__100815 = null;
var G__100816 = (0);
var G__100817 = (0);
seq__100793_100797 = G__100814;
chunk__100794_100798 = G__100815;
count__100795_100799 = G__100816;
i__100796_100800 = G__100817;
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
var seq__100822_100826 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__100823_100827 = null;
var count__100824_100828 = (0);
var i__100825_100829 = (0);
while(true){
if((i__100825_100829 < count__100824_100828)){
var node_100830 = cljs.core._nth.call(null,chunk__100823_100827,i__100825_100829);
goog.dom.classes.remove(node_100830,class$);

var G__100831 = seq__100822_100826;
var G__100832 = chunk__100823_100827;
var G__100833 = count__100824_100828;
var G__100834 = (i__100825_100829 + (1));
seq__100822_100826 = G__100831;
chunk__100823_100827 = G__100832;
count__100824_100828 = G__100833;
i__100825_100829 = G__100834;
continue;
} else {
var temp__4126__auto___100835 = cljs.core.seq.call(null,seq__100822_100826);
if(temp__4126__auto___100835){
var seq__100822_100836__$1 = temp__4126__auto___100835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100822_100836__$1)){
var c__4768__auto___100837 = cljs.core.chunk_first.call(null,seq__100822_100836__$1);
var G__100838 = cljs.core.chunk_rest.call(null,seq__100822_100836__$1);
var G__100839 = c__4768__auto___100837;
var G__100840 = cljs.core.count.call(null,c__4768__auto___100837);
var G__100841 = (0);
seq__100822_100826 = G__100838;
chunk__100823_100827 = G__100839;
count__100824_100828 = G__100840;
i__100825_100829 = G__100841;
continue;
} else {
var node_100842 = cljs.core.first.call(null,seq__100822_100836__$1);
goog.dom.classes.remove(node_100842,class$);

var G__100843 = cljs.core.next.call(null,seq__100822_100836__$1);
var G__100844 = null;
var G__100845 = (0);
var G__100846 = (0);
seq__100822_100826 = G__100843;
chunk__100823_100827 = G__100844;
count__100824_100828 = G__100845;
i__100825_100829 = G__100846;
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
var seq__100851_100855 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__100852_100856 = null;
var count__100853_100857 = (0);
var i__100854_100858 = (0);
while(true){
if((i__100854_100858 < count__100853_100857)){
var node_100859 = cljs.core._nth.call(null,chunk__100852_100856,i__100854_100858);
goog.dom.classes.toggle(node_100859,class$);

var G__100860 = seq__100851_100855;
var G__100861 = chunk__100852_100856;
var G__100862 = count__100853_100857;
var G__100863 = (i__100854_100858 + (1));
seq__100851_100855 = G__100860;
chunk__100852_100856 = G__100861;
count__100853_100857 = G__100862;
i__100854_100858 = G__100863;
continue;
} else {
var temp__4126__auto___100864 = cljs.core.seq.call(null,seq__100851_100855);
if(temp__4126__auto___100864){
var seq__100851_100865__$1 = temp__4126__auto___100864;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100851_100865__$1)){
var c__4768__auto___100866 = cljs.core.chunk_first.call(null,seq__100851_100865__$1);
var G__100867 = cljs.core.chunk_rest.call(null,seq__100851_100865__$1);
var G__100868 = c__4768__auto___100866;
var G__100869 = cljs.core.count.call(null,c__4768__auto___100866);
var G__100870 = (0);
seq__100851_100855 = G__100867;
chunk__100852_100856 = G__100868;
count__100853_100857 = G__100869;
i__100854_100858 = G__100870;
continue;
} else {
var node_100871 = cljs.core.first.call(null,seq__100851_100865__$1);
goog.dom.classes.toggle(node_100871,class$);

var G__100872 = cljs.core.next.call(null,seq__100851_100865__$1);
var G__100873 = null;
var G__100874 = (0);
var G__100875 = (0);
seq__100851_100855 = G__100872;
chunk__100852_100856 = G__100873;
count__100853_100857 = G__100874;
i__100854_100858 = G__100875;
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
var classes_100884__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__100880_100885 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__100881_100886 = null;
var count__100882_100887 = (0);
var i__100883_100888 = (0);
while(true){
if((i__100883_100888 < count__100882_100887)){
var node_100889 = cljs.core._nth.call(null,chunk__100881_100886,i__100883_100888);
goog.dom.classes.set(node_100889,classes_100884__$1);

var G__100890 = seq__100880_100885;
var G__100891 = chunk__100881_100886;
var G__100892 = count__100882_100887;
var G__100893 = (i__100883_100888 + (1));
seq__100880_100885 = G__100890;
chunk__100881_100886 = G__100891;
count__100882_100887 = G__100892;
i__100883_100888 = G__100893;
continue;
} else {
var temp__4126__auto___100894 = cljs.core.seq.call(null,seq__100880_100885);
if(temp__4126__auto___100894){
var seq__100880_100895__$1 = temp__4126__auto___100894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100880_100895__$1)){
var c__4768__auto___100896 = cljs.core.chunk_first.call(null,seq__100880_100895__$1);
var G__100897 = cljs.core.chunk_rest.call(null,seq__100880_100895__$1);
var G__100898 = c__4768__auto___100896;
var G__100899 = cljs.core.count.call(null,c__4768__auto___100896);
var G__100900 = (0);
seq__100880_100885 = G__100897;
chunk__100881_100886 = G__100898;
count__100882_100887 = G__100899;
i__100883_100888 = G__100900;
continue;
} else {
var node_100901 = cljs.core.first.call(null,seq__100880_100895__$1);
goog.dom.classes.set(node_100901,classes_100884__$1);

var G__100902 = cljs.core.next.call(null,seq__100880_100895__$1);
var G__100903 = null;
var G__100904 = (0);
var G__100905 = (0);
seq__100880_100885 = G__100902;
chunk__100881_100886 = G__100903;
count__100882_100887 = G__100904;
i__100883_100888 = G__100905;
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
var seq__100910_100914 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__100911_100915 = null;
var count__100912_100916 = (0);
var i__100913_100917 = (0);
while(true){
if((i__100913_100917 < count__100912_100916)){
var node_100918 = cljs.core._nth.call(null,chunk__100911_100915,i__100913_100917);
goog.dom.setTextContent(node_100918,value);

var G__100919 = seq__100910_100914;
var G__100920 = chunk__100911_100915;
var G__100921 = count__100912_100916;
var G__100922 = (i__100913_100917 + (1));
seq__100910_100914 = G__100919;
chunk__100911_100915 = G__100920;
count__100912_100916 = G__100921;
i__100913_100917 = G__100922;
continue;
} else {
var temp__4126__auto___100923 = cljs.core.seq.call(null,seq__100910_100914);
if(temp__4126__auto___100923){
var seq__100910_100924__$1 = temp__4126__auto___100923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100910_100924__$1)){
var c__4768__auto___100925 = cljs.core.chunk_first.call(null,seq__100910_100924__$1);
var G__100926 = cljs.core.chunk_rest.call(null,seq__100910_100924__$1);
var G__100927 = c__4768__auto___100925;
var G__100928 = cljs.core.count.call(null,c__4768__auto___100925);
var G__100929 = (0);
seq__100910_100914 = G__100926;
chunk__100911_100915 = G__100927;
count__100912_100916 = G__100928;
i__100913_100917 = G__100929;
continue;
} else {
var node_100930 = cljs.core.first.call(null,seq__100910_100924__$1);
goog.dom.setTextContent(node_100930,value);

var G__100931 = cljs.core.next.call(null,seq__100910_100924__$1);
var G__100932 = null;
var G__100933 = (0);
var G__100934 = (0);
seq__100910_100914 = G__100931;
chunk__100911_100915 = G__100932;
count__100912_100916 = G__100933;
i__100913_100917 = G__100934;
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
var seq__100939_100943 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__100940_100944 = null;
var count__100941_100945 = (0);
var i__100942_100946 = (0);
while(true){
if((i__100942_100946 < count__100941_100945)){
var node_100947 = cljs.core._nth.call(null,chunk__100940_100944,i__100942_100946);
goog.dom.forms.setValue(node_100947,value);

var G__100948 = seq__100939_100943;
var G__100949 = chunk__100940_100944;
var G__100950 = count__100941_100945;
var G__100951 = (i__100942_100946 + (1));
seq__100939_100943 = G__100948;
chunk__100940_100944 = G__100949;
count__100941_100945 = G__100950;
i__100942_100946 = G__100951;
continue;
} else {
var temp__4126__auto___100952 = cljs.core.seq.call(null,seq__100939_100943);
if(temp__4126__auto___100952){
var seq__100939_100953__$1 = temp__4126__auto___100952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100939_100953__$1)){
var c__4768__auto___100954 = cljs.core.chunk_first.call(null,seq__100939_100953__$1);
var G__100955 = cljs.core.chunk_rest.call(null,seq__100939_100953__$1);
var G__100956 = c__4768__auto___100954;
var G__100957 = cljs.core.count.call(null,c__4768__auto___100954);
var G__100958 = (0);
seq__100939_100943 = G__100955;
chunk__100940_100944 = G__100956;
count__100941_100945 = G__100957;
i__100942_100946 = G__100958;
continue;
} else {
var node_100959 = cljs.core.first.call(null,seq__100939_100953__$1);
goog.dom.forms.setValue(node_100959,value);

var G__100960 = cljs.core.next.call(null,seq__100939_100953__$1);
var G__100961 = null;
var G__100962 = (0);
var G__100963 = (0);
seq__100939_100943 = G__100960;
chunk__100940_100944 = G__100961;
count__100941_100945 = G__100962;
i__100942_100946 = G__100963;
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
var value_100974 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__100970_100975 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__100971_100976 = null;
var count__100972_100977 = (0);
var i__100973_100978 = (0);
while(true){
if((i__100973_100978 < count__100972_100977)){
var node_100979 = cljs.core._nth.call(null,chunk__100971_100976,i__100973_100978);
node_100979.innerHTML = value_100974;

var G__100980 = seq__100970_100975;
var G__100981 = chunk__100971_100976;
var G__100982 = count__100972_100977;
var G__100983 = (i__100973_100978 + (1));
seq__100970_100975 = G__100980;
chunk__100971_100976 = G__100981;
count__100972_100977 = G__100982;
i__100973_100978 = G__100983;
continue;
} else {
var temp__4126__auto___100984 = cljs.core.seq.call(null,seq__100970_100975);
if(temp__4126__auto___100984){
var seq__100970_100985__$1 = temp__4126__auto___100984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__100970_100985__$1)){
var c__4768__auto___100986 = cljs.core.chunk_first.call(null,seq__100970_100985__$1);
var G__100987 = cljs.core.chunk_rest.call(null,seq__100970_100985__$1);
var G__100988 = c__4768__auto___100986;
var G__100989 = cljs.core.count.call(null,c__4768__auto___100986);
var G__100990 = (0);
seq__100970_100975 = G__100987;
chunk__100971_100976 = G__100988;
count__100972_100977 = G__100989;
i__100973_100978 = G__100990;
continue;
} else {
var node_100991 = cljs.core.first.call(null,seq__100970_100985__$1);
node_100991.innerHTML = value_100974;

var G__100992 = cljs.core.next.call(null,seq__100970_100985__$1);
var G__100993 = null;
var G__100994 = (0);
var G__100995 = (0);
seq__100970_100975 = G__100992;
chunk__100971_100976 = G__100993;
count__100972_100977 = G__100994;
i__100973_100978 = G__100995;
continue;
}
} else {
}
}
break;
}
}catch (e100969){if((e100969 instanceof Error)){
var e_100996 = e100969;
domina.replace_children_BANG_.call(null,content,value_100974);
} else {
throw e100969;

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
var seq__101003_101007 = cljs.core.seq.call(null,children);
var chunk__101004_101008 = null;
var count__101005_101009 = (0);
var i__101006_101010 = (0);
while(true){
if((i__101006_101010 < count__101005_101009)){
var child_101011 = cljs.core._nth.call(null,chunk__101004_101008,i__101006_101010);
frag.appendChild(child_101011);

var G__101012 = seq__101003_101007;
var G__101013 = chunk__101004_101008;
var G__101014 = count__101005_101009;
var G__101015 = (i__101006_101010 + (1));
seq__101003_101007 = G__101012;
chunk__101004_101008 = G__101013;
count__101005_101009 = G__101014;
i__101006_101010 = G__101015;
continue;
} else {
var temp__4126__auto___101016 = cljs.core.seq.call(null,seq__101003_101007);
if(temp__4126__auto___101016){
var seq__101003_101017__$1 = temp__4126__auto___101016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__101003_101017__$1)){
var c__4768__auto___101018 = cljs.core.chunk_first.call(null,seq__101003_101017__$1);
var G__101019 = cljs.core.chunk_rest.call(null,seq__101003_101017__$1);
var G__101020 = c__4768__auto___101018;
var G__101021 = cljs.core.count.call(null,c__4768__auto___101018);
var G__101022 = (0);
seq__101003_101007 = G__101019;
chunk__101004_101008 = G__101020;
count__101005_101009 = G__101021;
i__101006_101010 = G__101022;
continue;
} else {
var child_101023 = cljs.core.first.call(null,seq__101003_101017__$1);
frag.appendChild(child_101023);

var G__101024 = cljs.core.next.call(null,seq__101003_101017__$1);
var G__101025 = null;
var G__101026 = (0);
var G__101027 = (0);
seq__101003_101007 = G__101024;
chunk__101004_101008 = G__101025;
count__101005_101009 = G__101026;
i__101006_101010 = G__101027;
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
return (function (p1__100997_SHARP_,p2__100998_SHARP_){
return f.call(null,p1__100997_SHARP_,p2__100998_SHARP_);
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
if((function (){var G__101029 = list_thing;
if(G__101029){
var bit__4662__auto__ = (G__101029.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__101029.cljs$core$ISeqable$)){
return true;
} else {
if((!G__101029.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__101029);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__101029);
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
if((function (){var G__101030 = content;
if(G__101030){
var bit__4662__auto__ = (G__101030.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__101030.cljs$core$ISeqable$)){
return true;
} else {
if((!G__101030.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__101030);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__101030);
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
if((function (){var G__101031 = content;
if(G__101031){
var bit__4662__auto__ = (G__101031.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__101031.cljs$core$ISeqable$)){
return true;
} else {
if((!G__101031.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__101031);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__101031);
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
