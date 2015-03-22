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
var opt_wrapper_426945 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_426946 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_426947 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_426947,opt_wrapper_426945,table_section_wrapper_426946,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_426945,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_426946,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_426946,cell_wrapper_426947,table_section_wrapper_426946,table_section_wrapper_426946]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__426952 = cljs.core.seq.call(null,tbody);
var chunk__426953 = null;
var count__426954 = (0);
var i__426955 = (0);
while(true){
if((i__426955 < count__426954)){
var child = cljs.core._nth.call(null,chunk__426953,i__426955);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__426956 = seq__426952;
var G__426957 = chunk__426953;
var G__426958 = count__426954;
var G__426959 = (i__426955 + (1));
seq__426952 = G__426956;
chunk__426953 = G__426957;
count__426954 = G__426958;
i__426955 = G__426959;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__426952);
if(temp__4126__auto__){
var seq__426952__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__426952__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__426952__$1);
var G__426960 = cljs.core.chunk_rest.call(null,seq__426952__$1);
var G__426961 = c__4768__auto__;
var G__426962 = cljs.core.count.call(null,c__4768__auto__);
var G__426963 = (0);
seq__426952 = G__426960;
chunk__426953 = G__426961;
count__426954 = G__426962;
i__426955 = G__426963;
continue;
} else {
var child = cljs.core.first.call(null,seq__426952__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__426964 = cljs.core.next.call(null,seq__426952__$1);
var G__426965 = null;
var G__426966 = (0);
var G__426967 = (0);
seq__426952 = G__426964;
chunk__426953 = G__426965;
count__426954 = G__426966;
i__426955 = G__426967;
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
var vec__426969 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__426969,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__426969,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__426969,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__426970 = wrapper.lastChild;
var G__426971 = (level - (1));
wrapper = G__426970;
level = G__426971;
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

domina.DomContent = (function (){var obj426973 = {};
return obj426973;
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
var G__426974__i = 0, G__426974__a = new Array(arguments.length -  0);
while (G__426974__i < G__426974__a.length) {G__426974__a[G__426974__i] = arguments[G__426974__i + 0]; ++G__426974__i;}
  mesg = new cljs.core.IndexedSeq(G__426974__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__426975){
var mesg = cljs.core.seq(arglist__426975);
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
var G__426976__i = 0, G__426976__a = new Array(arguments.length -  0);
while (G__426976__i < G__426976__a.length) {G__426976__a[G__426976__i] = arguments[G__426976__i + 0]; ++G__426976__i;}
  mesg = new cljs.core.IndexedSeq(G__426976__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__426977){
var mesg = cljs.core.seq(arglist__426977);
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
var G__426978__i = 0, G__426978__a = new Array(arguments.length -  0);
while (G__426978__i < G__426978__a.length) {G__426978__a[G__426978__i] = arguments[G__426978__i + 0]; ++G__426978__i;}
  contents = new cljs.core.IndexedSeq(G__426978__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__426979){
var contents = cljs.core.seq(arglist__426979);
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
return cljs.core.map.call(null,(function (p1__426980_SHARP_){
return p1__426980_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__426981_SHARP_,p2__426982_SHARP_){
return goog.dom.insertChildAt(p1__426981_SHARP_,p2__426982_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__426984_SHARP_,p2__426983_SHARP_){
return goog.dom.insertSiblingBefore(p2__426983_SHARP_,p1__426984_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__426986_SHARP_,p2__426985_SHARP_){
return goog.dom.insertSiblingAfter(p2__426985_SHARP_,p1__426986_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__426988_SHARP_,p2__426987_SHARP_){
return goog.dom.replaceNode(p2__426987_SHARP_,p1__426988_SHARP_);
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
var seq__426993_426997 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__426994_426998 = null;
var count__426995_426999 = (0);
var i__426996_427000 = (0);
while(true){
if((i__426996_427000 < count__426995_426999)){
var n_427001 = cljs.core._nth.call(null,chunk__426994_426998,i__426996_427000);
goog.style.setStyle(n_427001,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__427002 = seq__426993_426997;
var G__427003 = chunk__426994_426998;
var G__427004 = count__426995_426999;
var G__427005 = (i__426996_427000 + (1));
seq__426993_426997 = G__427002;
chunk__426994_426998 = G__427003;
count__426995_426999 = G__427004;
i__426996_427000 = G__427005;
continue;
} else {
var temp__4126__auto___427006 = cljs.core.seq.call(null,seq__426993_426997);
if(temp__4126__auto___427006){
var seq__426993_427007__$1 = temp__4126__auto___427006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__426993_427007__$1)){
var c__4768__auto___427008 = cljs.core.chunk_first.call(null,seq__426993_427007__$1);
var G__427009 = cljs.core.chunk_rest.call(null,seq__426993_427007__$1);
var G__427010 = c__4768__auto___427008;
var G__427011 = cljs.core.count.call(null,c__4768__auto___427008);
var G__427012 = (0);
seq__426993_426997 = G__427009;
chunk__426994_426998 = G__427010;
count__426995_426999 = G__427011;
i__426996_427000 = G__427012;
continue;
} else {
var n_427013 = cljs.core.first.call(null,seq__426993_427007__$1);
goog.style.setStyle(n_427013,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__427014 = cljs.core.next.call(null,seq__426993_427007__$1);
var G__427015 = null;
var G__427016 = (0);
var G__427017 = (0);
seq__426993_426997 = G__427014;
chunk__426994_426998 = G__427015;
count__426995_426999 = G__427016;
i__426996_427000 = G__427017;
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
var G__427018__i = 0, G__427018__a = new Array(arguments.length -  2);
while (G__427018__i < G__427018__a.length) {G__427018__a[G__427018__i] = arguments[G__427018__i + 2]; ++G__427018__i;}
  value = new cljs.core.IndexedSeq(G__427018__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__427019){
var content = cljs.core.first(arglist__427019);
arglist__427019 = cljs.core.next(arglist__427019);
var name = cljs.core.first(arglist__427019);
var value = cljs.core.rest(arglist__427019);
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
var seq__427024_427028 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__427025_427029 = null;
var count__427026_427030 = (0);
var i__427027_427031 = (0);
while(true){
if((i__427027_427031 < count__427026_427030)){
var n_427032 = cljs.core._nth.call(null,chunk__427025_427029,i__427027_427031);
n_427032.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__427033 = seq__427024_427028;
var G__427034 = chunk__427025_427029;
var G__427035 = count__427026_427030;
var G__427036 = (i__427027_427031 + (1));
seq__427024_427028 = G__427033;
chunk__427025_427029 = G__427034;
count__427026_427030 = G__427035;
i__427027_427031 = G__427036;
continue;
} else {
var temp__4126__auto___427037 = cljs.core.seq.call(null,seq__427024_427028);
if(temp__4126__auto___427037){
var seq__427024_427038__$1 = temp__4126__auto___427037;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__427024_427038__$1)){
var c__4768__auto___427039 = cljs.core.chunk_first.call(null,seq__427024_427038__$1);
var G__427040 = cljs.core.chunk_rest.call(null,seq__427024_427038__$1);
var G__427041 = c__4768__auto___427039;
var G__427042 = cljs.core.count.call(null,c__4768__auto___427039);
var G__427043 = (0);
seq__427024_427028 = G__427040;
chunk__427025_427029 = G__427041;
count__427026_427030 = G__427042;
i__427027_427031 = G__427043;
continue;
} else {
var n_427044 = cljs.core.first.call(null,seq__427024_427038__$1);
n_427044.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__427045 = cljs.core.next.call(null,seq__427024_427038__$1);
var G__427046 = null;
var G__427047 = (0);
var G__427048 = (0);
seq__427024_427028 = G__427045;
chunk__427025_427029 = G__427046;
count__427026_427030 = G__427047;
i__427027_427031 = G__427048;
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
var G__427049__i = 0, G__427049__a = new Array(arguments.length -  2);
while (G__427049__i < G__427049__a.length) {G__427049__a[G__427049__i] = arguments[G__427049__i + 2]; ++G__427049__i;}
  value = new cljs.core.IndexedSeq(G__427049__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__427050){
var content = cljs.core.first(arglist__427050);
arglist__427050 = cljs.core.next(arglist__427050);
var name = cljs.core.first(arglist__427050);
var value = cljs.core.rest(arglist__427050);
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
var seq__427055_427059 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__427056_427060 = null;
var count__427057_427061 = (0);
var i__427058_427062 = (0);
while(true){
if((i__427058_427062 < count__427057_427061)){
var n_427063 = cljs.core._nth.call(null,chunk__427056_427060,i__427058_427062);
n_427063.removeAttribute(cljs.core.name.call(null,name));

var G__427064 = seq__427055_427059;
var G__427065 = chunk__427056_427060;
var G__427066 = count__427057_427061;
var G__427067 = (i__427058_427062 + (1));
seq__427055_427059 = G__427064;
chunk__427056_427060 = G__427065;
count__427057_427061 = G__427066;
i__427058_427062 = G__427067;
continue;
} else {
var temp__4126__auto___427068 = cljs.core.seq.call(null,seq__427055_427059);
if(temp__4126__auto___427068){
var seq__427055_427069__$1 = temp__4126__auto___427068;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__427055_427069__$1)){
var c__4768__auto___427070 = cljs.core.chunk_first.call(null,seq__427055_427069__$1);
var G__427071 = cljs.core.chunk_rest.call(null,seq__427055_427069__$1);
var G__427072 = c__4768__auto___427070;
var G__427073 = cljs.core.count.call(null,c__4768__auto___427070);
var G__427074 = (0);
seq__427055_427059 = G__427071;
chunk__427056_427060 = G__427072;
count__427057_427061 = G__427073;
i__427058_427062 = G__427074;
continue;
} else {
var n_427075 = cljs.core.first.call(null,seq__427055_427069__$1);
n_427075.removeAttribute(cljs.core.name.call(null,name));

var G__427076 = cljs.core.next.call(null,seq__427055_427069__$1);
var G__427077 = null;
var G__427078 = (0);
var G__427079 = (0);
seq__427055_427059 = G__427076;
chunk__427056_427060 = G__427077;
count__427057_427061 = G__427078;
i__427058_427062 = G__427079;
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
var vec__427081 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__427081,(0),null);
var v = cljs.core.nth.call(null,vec__427081,(1),null);
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
return (function (p1__427082_SHARP_){
var attr = attrs__$1.item(p1__427082_SHARP_);
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
var seq__427089_427095 = cljs.core.seq.call(null,styles);
var chunk__427090_427096 = null;
var count__427091_427097 = (0);
var i__427092_427098 = (0);
while(true){
if((i__427092_427098 < count__427091_427097)){
var vec__427093_427099 = cljs.core._nth.call(null,chunk__427090_427096,i__427092_427098);
var name_427100 = cljs.core.nth.call(null,vec__427093_427099,(0),null);
var value_427101 = cljs.core.nth.call(null,vec__427093_427099,(1),null);
domina.set_style_BANG_.call(null,content,name_427100,value_427101);

var G__427102 = seq__427089_427095;
var G__427103 = chunk__427090_427096;
var G__427104 = count__427091_427097;
var G__427105 = (i__427092_427098 + (1));
seq__427089_427095 = G__427102;
chunk__427090_427096 = G__427103;
count__427091_427097 = G__427104;
i__427092_427098 = G__427105;
continue;
} else {
var temp__4126__auto___427106 = cljs.core.seq.call(null,seq__427089_427095);
if(temp__4126__auto___427106){
var seq__427089_427107__$1 = temp__4126__auto___427106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__427089_427107__$1)){
var c__4768__auto___427108 = cljs.core.chunk_first.call(null,seq__427089_427107__$1);
var G__427109 = cljs.core.chunk_rest.call(null,seq__427089_427107__$1);
var G__427110 = c__4768__auto___427108;
var G__427111 = cljs.core.count.call(null,c__4768__auto___427108);
var G__427112 = (0);
seq__427089_427095 = G__427109;
chunk__427090_427096 = G__427110;
count__427091_427097 = G__427111;
i__427092_427098 = G__427112;
continue;
} else {
var vec__427094_427113 = cljs.core.first.call(null,seq__427089_427107__$1);
var name_427114 = cljs.core.nth.call(null,vec__427094_427113,(0),null);
var value_427115 = cljs.core.nth.call(null,vec__427094_427113,(1),null);
domina.set_style_BANG_.call(null,content,name_427114,value_427115);

var G__427116 = cljs.core.next.call(null,seq__427089_427107__$1);
var G__427117 = null;
var G__427118 = (0);
var G__427119 = (0);
seq__427089_427095 = G__427116;
chunk__427090_427096 = G__427117;
count__427091_427097 = G__427118;
i__427092_427098 = G__427119;
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
var seq__427126_427132 = cljs.core.seq.call(null,attrs);
var chunk__427127_427133 = null;
var count__427128_427134 = (0);
var i__427129_427135 = (0);
while(true){
if((i__427129_427135 < count__427128_427134)){
var vec__427130_427136 = cljs.core._nth.call(null,chunk__427127_427133,i__427129_427135);
var name_427137 = cljs.core.nth.call(null,vec__427130_427136,(0),null);
var value_427138 = cljs.core.nth.call(null,vec__427130_427136,(1),null);
domina.set_attr_BANG_.call(null,content,name_427137,value_427138);

var G__427139 = seq__427126_427132;
var G__427140 = chunk__427127_427133;
var G__427141 = count__427128_427134;
var G__427142 = (i__427129_427135 + (1));
seq__427126_427132 = G__427139;
chunk__427127_427133 = G__427140;
count__427128_427134 = G__427141;
i__427129_427135 = G__427142;
continue;
} else {
var temp__4126__auto___427143 = cljs.core.seq.call(null,seq__427126_427132);
if(temp__4126__auto___427143){
var seq__427126_427144__$1 = temp__4126__auto___427143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__427126_427144__$1)){
var c__4768__auto___427145 = cljs.core.chunk_first.call(null,seq__427126_427144__$1);
var G__427146 = cljs.core.chunk_rest.call(null,seq__427126_427144__$1);
var G__427147 = c__4768__auto___427145;
var G__427148 = cljs.core.count.call(null,c__4768__auto___427145);
var G__427149 = (0);
seq__427126_427132 = G__427146;
chunk__427127_427133 = G__427147;
count__427128_427134 = G__427148;
i__427129_427135 = G__427149;
continue;
} else {
var vec__427131_427150 = cljs.core.first.call(null,seq__427126_427144__$1);
var name_427151 = cljs.core.nth.call(null,vec__427131_427150,(0),null);
var value_427152 = cljs.core.nth.call(null,vec__427131_427150,(1),null);
domina.set_attr_BANG_.call(null,content,name_427151,value_427152);

var G__427153 = cljs.core.next.call(null,seq__427126_427144__$1);
var G__427154 = null;
var G__427155 = (0);
var G__427156 = (0);
seq__427126_427132 = G__427153;
chunk__427127_427133 = G__427154;
count__427128_427134 = G__427155;
i__427129_427135 = G__427156;
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
var seq__427161_427165 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__427162_427166 = null;
var count__427163_427167 = (0);
var i__427164_427168 = (0);
while(true){
if((i__427164_427168 < count__427163_427167)){
var node_427169 = cljs.core._nth.call(null,chunk__427162_427166,i__427164_427168);
goog.dom.classes.add(node_427169,class$);

var G__427170 = seq__427161_427165;
var G__427171 = chunk__427162_427166;
var G__427172 = count__427163_427167;
var G__427173 = (i__427164_427168 + (1));
seq__427161_427165 = G__427170;
chunk__427162_427166 = G__427171;
count__427163_427167 = G__427172;
i__427164_427168 = G__427173;
continue;
} else {
var temp__4126__auto___427174 = cljs.core.seq.call(null,seq__427161_427165);
if(temp__4126__auto___427174){
var seq__427161_427175__$1 = temp__4126__auto___427174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__427161_427175__$1)){
var c__4768__auto___427176 = cljs.core.chunk_first.call(null,seq__427161_427175__$1);
var G__427177 = cljs.core.chunk_rest.call(null,seq__427161_427175__$1);
var G__427178 = c__4768__auto___427176;
var G__427179 = cljs.core.count.call(null,c__4768__auto___427176);
var G__427180 = (0);
seq__427161_427165 = G__427177;
chunk__427162_427166 = G__427178;
count__427163_427167 = G__427179;
i__427164_427168 = G__427180;
continue;
} else {
var node_427181 = cljs.core.first.call(null,seq__427161_427175__$1);
goog.dom.classes.add(node_427181,class$);

var G__427182 = cljs.core.next.call(null,seq__427161_427175__$1);
var G__427183 = null;
var G__427184 = (0);
var G__427185 = (0);
seq__427161_427165 = G__427182;
chunk__427162_427166 = G__427183;
count__427163_427167 = G__427184;
i__427164_427168 = G__427185;
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
var seq__427190_427194 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__427191_427195 = null;
var count__427192_427196 = (0);
var i__427193_427197 = (0);
while(true){
if((i__427193_427197 < count__427192_427196)){
var node_427198 = cljs.core._nth.call(null,chunk__427191_427195,i__427193_427197);
goog.dom.classes.remove(node_427198,class$);

var G__427199 = seq__427190_427194;
var G__427200 = chunk__427191_427195;
var G__427201 = count__427192_427196;
var G__427202 = (i__427193_427197 + (1));
seq__427190_427194 = G__427199;
chunk__427191_427195 = G__427200;
count__427192_427196 = G__427201;
i__427193_427197 = G__427202;
continue;
} else {
var temp__4126__auto___427203 = cljs.core.seq.call(null,seq__427190_427194);
if(temp__4126__auto___427203){
var seq__427190_427204__$1 = temp__4126__auto___427203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__427190_427204__$1)){
var c__4768__auto___427205 = cljs.core.chunk_first.call(null,seq__427190_427204__$1);
var G__427206 = cljs.core.chunk_rest.call(null,seq__427190_427204__$1);
var G__427207 = c__4768__auto___427205;
var G__427208 = cljs.core.count.call(null,c__4768__auto___427205);
var G__427209 = (0);
seq__427190_427194 = G__427206;
chunk__427191_427195 = G__427207;
count__427192_427196 = G__427208;
i__427193_427197 = G__427209;
continue;
} else {
var node_427210 = cljs.core.first.call(null,seq__427190_427204__$1);
goog.dom.classes.remove(node_427210,class$);

var G__427211 = cljs.core.next.call(null,seq__427190_427204__$1);
var G__427212 = null;
var G__427213 = (0);
var G__427214 = (0);
seq__427190_427194 = G__427211;
chunk__427191_427195 = G__427212;
count__427192_427196 = G__427213;
i__427193_427197 = G__427214;
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
var seq__427219_427223 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__427220_427224 = null;
var count__427221_427225 = (0);
var i__427222_427226 = (0);
while(true){
if((i__427222_427226 < count__427221_427225)){
var node_427227 = cljs.core._nth.call(null,chunk__427220_427224,i__427222_427226);
goog.dom.classes.toggle(node_427227,class$);

var G__427228 = seq__427219_427223;
var G__427229 = chunk__427220_427224;
var G__427230 = count__427221_427225;
var G__427231 = (i__427222_427226 + (1));
seq__427219_427223 = G__427228;
chunk__427220_427224 = G__427229;
count__427221_427225 = G__427230;
i__427222_427226 = G__427231;
continue;
} else {
var temp__4126__auto___427232 = cljs.core.seq.call(null,seq__427219_427223);
if(temp__4126__auto___427232){
var seq__427219_427233__$1 = temp__4126__auto___427232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__427219_427233__$1)){
var c__4768__auto___427234 = cljs.core.chunk_first.call(null,seq__427219_427233__$1);
var G__427235 = cljs.core.chunk_rest.call(null,seq__427219_427233__$1);
var G__427236 = c__4768__auto___427234;
var G__427237 = cljs.core.count.call(null,c__4768__auto___427234);
var G__427238 = (0);
seq__427219_427223 = G__427235;
chunk__427220_427224 = G__427236;
count__427221_427225 = G__427237;
i__427222_427226 = G__427238;
continue;
} else {
var node_427239 = cljs.core.first.call(null,seq__427219_427233__$1);
goog.dom.classes.toggle(node_427239,class$);

var G__427240 = cljs.core.next.call(null,seq__427219_427233__$1);
var G__427241 = null;
var G__427242 = (0);
var G__427243 = (0);
seq__427219_427223 = G__427240;
chunk__427220_427224 = G__427241;
count__427221_427225 = G__427242;
i__427222_427226 = G__427243;
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
var classes_427252__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__427248_427253 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__427249_427254 = null;
var count__427250_427255 = (0);
var i__427251_427256 = (0);
while(true){
if((i__427251_427256 < count__427250_427255)){
var node_427257 = cljs.core._nth.call(null,chunk__427249_427254,i__427251_427256);
goog.dom.classes.set(node_427257,classes_427252__$1);

var G__427258 = seq__427248_427253;
var G__427259 = chunk__427249_427254;
var G__427260 = count__427250_427255;
var G__427261 = (i__427251_427256 + (1));
seq__427248_427253 = G__427258;
chunk__427249_427254 = G__427259;
count__427250_427255 = G__427260;
i__427251_427256 = G__427261;
continue;
} else {
var temp__4126__auto___427262 = cljs.core.seq.call(null,seq__427248_427253);
if(temp__4126__auto___427262){
var seq__427248_427263__$1 = temp__4126__auto___427262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__427248_427263__$1)){
var c__4768__auto___427264 = cljs.core.chunk_first.call(null,seq__427248_427263__$1);
var G__427265 = cljs.core.chunk_rest.call(null,seq__427248_427263__$1);
var G__427266 = c__4768__auto___427264;
var G__427267 = cljs.core.count.call(null,c__4768__auto___427264);
var G__427268 = (0);
seq__427248_427253 = G__427265;
chunk__427249_427254 = G__427266;
count__427250_427255 = G__427267;
i__427251_427256 = G__427268;
continue;
} else {
var node_427269 = cljs.core.first.call(null,seq__427248_427263__$1);
goog.dom.classes.set(node_427269,classes_427252__$1);

var G__427270 = cljs.core.next.call(null,seq__427248_427263__$1);
var G__427271 = null;
var G__427272 = (0);
var G__427273 = (0);
seq__427248_427253 = G__427270;
chunk__427249_427254 = G__427271;
count__427250_427255 = G__427272;
i__427251_427256 = G__427273;
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
var seq__427278_427282 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__427279_427283 = null;
var count__427280_427284 = (0);
var i__427281_427285 = (0);
while(true){
if((i__427281_427285 < count__427280_427284)){
var node_427286 = cljs.core._nth.call(null,chunk__427279_427283,i__427281_427285);
goog.dom.setTextContent(node_427286,value);

var G__427287 = seq__427278_427282;
var G__427288 = chunk__427279_427283;
var G__427289 = count__427280_427284;
var G__427290 = (i__427281_427285 + (1));
seq__427278_427282 = G__427287;
chunk__427279_427283 = G__427288;
count__427280_427284 = G__427289;
i__427281_427285 = G__427290;
continue;
} else {
var temp__4126__auto___427291 = cljs.core.seq.call(null,seq__427278_427282);
if(temp__4126__auto___427291){
var seq__427278_427292__$1 = temp__4126__auto___427291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__427278_427292__$1)){
var c__4768__auto___427293 = cljs.core.chunk_first.call(null,seq__427278_427292__$1);
var G__427294 = cljs.core.chunk_rest.call(null,seq__427278_427292__$1);
var G__427295 = c__4768__auto___427293;
var G__427296 = cljs.core.count.call(null,c__4768__auto___427293);
var G__427297 = (0);
seq__427278_427282 = G__427294;
chunk__427279_427283 = G__427295;
count__427280_427284 = G__427296;
i__427281_427285 = G__427297;
continue;
} else {
var node_427298 = cljs.core.first.call(null,seq__427278_427292__$1);
goog.dom.setTextContent(node_427298,value);

var G__427299 = cljs.core.next.call(null,seq__427278_427292__$1);
var G__427300 = null;
var G__427301 = (0);
var G__427302 = (0);
seq__427278_427282 = G__427299;
chunk__427279_427283 = G__427300;
count__427280_427284 = G__427301;
i__427281_427285 = G__427302;
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
var seq__427307_427311 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__427308_427312 = null;
var count__427309_427313 = (0);
var i__427310_427314 = (0);
while(true){
if((i__427310_427314 < count__427309_427313)){
var node_427315 = cljs.core._nth.call(null,chunk__427308_427312,i__427310_427314);
goog.dom.forms.setValue(node_427315,value);

var G__427316 = seq__427307_427311;
var G__427317 = chunk__427308_427312;
var G__427318 = count__427309_427313;
var G__427319 = (i__427310_427314 + (1));
seq__427307_427311 = G__427316;
chunk__427308_427312 = G__427317;
count__427309_427313 = G__427318;
i__427310_427314 = G__427319;
continue;
} else {
var temp__4126__auto___427320 = cljs.core.seq.call(null,seq__427307_427311);
if(temp__4126__auto___427320){
var seq__427307_427321__$1 = temp__4126__auto___427320;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__427307_427321__$1)){
var c__4768__auto___427322 = cljs.core.chunk_first.call(null,seq__427307_427321__$1);
var G__427323 = cljs.core.chunk_rest.call(null,seq__427307_427321__$1);
var G__427324 = c__4768__auto___427322;
var G__427325 = cljs.core.count.call(null,c__4768__auto___427322);
var G__427326 = (0);
seq__427307_427311 = G__427323;
chunk__427308_427312 = G__427324;
count__427309_427313 = G__427325;
i__427310_427314 = G__427326;
continue;
} else {
var node_427327 = cljs.core.first.call(null,seq__427307_427321__$1);
goog.dom.forms.setValue(node_427327,value);

var G__427328 = cljs.core.next.call(null,seq__427307_427321__$1);
var G__427329 = null;
var G__427330 = (0);
var G__427331 = (0);
seq__427307_427311 = G__427328;
chunk__427308_427312 = G__427329;
count__427309_427313 = G__427330;
i__427310_427314 = G__427331;
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
var value_427342 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__427338_427343 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__427339_427344 = null;
var count__427340_427345 = (0);
var i__427341_427346 = (0);
while(true){
if((i__427341_427346 < count__427340_427345)){
var node_427347 = cljs.core._nth.call(null,chunk__427339_427344,i__427341_427346);
node_427347.innerHTML = value_427342;

var G__427348 = seq__427338_427343;
var G__427349 = chunk__427339_427344;
var G__427350 = count__427340_427345;
var G__427351 = (i__427341_427346 + (1));
seq__427338_427343 = G__427348;
chunk__427339_427344 = G__427349;
count__427340_427345 = G__427350;
i__427341_427346 = G__427351;
continue;
} else {
var temp__4126__auto___427352 = cljs.core.seq.call(null,seq__427338_427343);
if(temp__4126__auto___427352){
var seq__427338_427353__$1 = temp__4126__auto___427352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__427338_427353__$1)){
var c__4768__auto___427354 = cljs.core.chunk_first.call(null,seq__427338_427353__$1);
var G__427355 = cljs.core.chunk_rest.call(null,seq__427338_427353__$1);
var G__427356 = c__4768__auto___427354;
var G__427357 = cljs.core.count.call(null,c__4768__auto___427354);
var G__427358 = (0);
seq__427338_427343 = G__427355;
chunk__427339_427344 = G__427356;
count__427340_427345 = G__427357;
i__427341_427346 = G__427358;
continue;
} else {
var node_427359 = cljs.core.first.call(null,seq__427338_427353__$1);
node_427359.innerHTML = value_427342;

var G__427360 = cljs.core.next.call(null,seq__427338_427353__$1);
var G__427361 = null;
var G__427362 = (0);
var G__427363 = (0);
seq__427338_427343 = G__427360;
chunk__427339_427344 = G__427361;
count__427340_427345 = G__427362;
i__427341_427346 = G__427363;
continue;
}
} else {
}
}
break;
}
}catch (e427337){if((e427337 instanceof Error)){
var e_427364 = e427337;
domina.replace_children_BANG_.call(null,content,value_427342);
} else {
throw e427337;

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
var seq__427371_427375 = cljs.core.seq.call(null,children);
var chunk__427372_427376 = null;
var count__427373_427377 = (0);
var i__427374_427378 = (0);
while(true){
if((i__427374_427378 < count__427373_427377)){
var child_427379 = cljs.core._nth.call(null,chunk__427372_427376,i__427374_427378);
frag.appendChild(child_427379);

var G__427380 = seq__427371_427375;
var G__427381 = chunk__427372_427376;
var G__427382 = count__427373_427377;
var G__427383 = (i__427374_427378 + (1));
seq__427371_427375 = G__427380;
chunk__427372_427376 = G__427381;
count__427373_427377 = G__427382;
i__427374_427378 = G__427383;
continue;
} else {
var temp__4126__auto___427384 = cljs.core.seq.call(null,seq__427371_427375);
if(temp__4126__auto___427384){
var seq__427371_427385__$1 = temp__4126__auto___427384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__427371_427385__$1)){
var c__4768__auto___427386 = cljs.core.chunk_first.call(null,seq__427371_427385__$1);
var G__427387 = cljs.core.chunk_rest.call(null,seq__427371_427385__$1);
var G__427388 = c__4768__auto___427386;
var G__427389 = cljs.core.count.call(null,c__4768__auto___427386);
var G__427390 = (0);
seq__427371_427375 = G__427387;
chunk__427372_427376 = G__427388;
count__427373_427377 = G__427389;
i__427374_427378 = G__427390;
continue;
} else {
var child_427391 = cljs.core.first.call(null,seq__427371_427385__$1);
frag.appendChild(child_427391);

var G__427392 = cljs.core.next.call(null,seq__427371_427385__$1);
var G__427393 = null;
var G__427394 = (0);
var G__427395 = (0);
seq__427371_427375 = G__427392;
chunk__427372_427376 = G__427393;
count__427373_427377 = G__427394;
i__427374_427378 = G__427395;
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
return (function (p1__427365_SHARP_,p2__427366_SHARP_){
return f.call(null,p1__427365_SHARP_,p2__427366_SHARP_);
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
if((function (){var G__427397 = list_thing;
if(G__427397){
var bit__4662__auto__ = (G__427397.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__427397.cljs$core$ISeqable$)){
return true;
} else {
if((!G__427397.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__427397);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__427397);
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
if((function (){var G__427398 = content;
if(G__427398){
var bit__4662__auto__ = (G__427398.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__427398.cljs$core$ISeqable$)){
return true;
} else {
if((!G__427398.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__427398);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__427398);
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
if((function (){var G__427399 = content;
if(G__427399){
var bit__4662__auto__ = (G__427399.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__427399.cljs$core$ISeqable$)){
return true;
} else {
if((!G__427399.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__427399);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__427399);
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
