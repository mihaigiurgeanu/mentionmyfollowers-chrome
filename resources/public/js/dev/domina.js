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
var opt_wrapper_84905 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_84906 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_84907 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_84907,opt_wrapper_84905,table_section_wrapper_84906,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_84905,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_84906,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_84906,cell_wrapper_84907,table_section_wrapper_84906,table_section_wrapper_84906]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__84912 = cljs.core.seq.call(null,tbody);
var chunk__84913 = null;
var count__84914 = (0);
var i__84915 = (0);
while(true){
if((i__84915 < count__84914)){
var child = cljs.core._nth.call(null,chunk__84913,i__84915);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__84916 = seq__84912;
var G__84917 = chunk__84913;
var G__84918 = count__84914;
var G__84919 = (i__84915 + (1));
seq__84912 = G__84916;
chunk__84913 = G__84917;
count__84914 = G__84918;
i__84915 = G__84919;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__84912);
if(temp__4126__auto__){
var seq__84912__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84912__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__84912__$1);
var G__84920 = cljs.core.chunk_rest.call(null,seq__84912__$1);
var G__84921 = c__4768__auto__;
var G__84922 = cljs.core.count.call(null,c__4768__auto__);
var G__84923 = (0);
seq__84912 = G__84920;
chunk__84913 = G__84921;
count__84914 = G__84922;
i__84915 = G__84923;
continue;
} else {
var child = cljs.core.first.call(null,seq__84912__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__84924 = cljs.core.next.call(null,seq__84912__$1);
var G__84925 = null;
var G__84926 = (0);
var G__84927 = (0);
seq__84912 = G__84924;
chunk__84913 = G__84925;
count__84914 = G__84926;
i__84915 = G__84927;
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
var vec__84929 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__84929,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__84929,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__84929,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__84930 = wrapper.lastChild;
var G__84931 = (level - (1));
wrapper = G__84930;
level = G__84931;
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

domina.DomContent = (function (){var obj84933 = {};
return obj84933;
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
var G__84934__i = 0, G__84934__a = new Array(arguments.length -  0);
while (G__84934__i < G__84934__a.length) {G__84934__a[G__84934__i] = arguments[G__84934__i + 0]; ++G__84934__i;}
  mesg = new cljs.core.IndexedSeq(G__84934__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__84935){
var mesg = cljs.core.seq(arglist__84935);
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
var G__84936__i = 0, G__84936__a = new Array(arguments.length -  0);
while (G__84936__i < G__84936__a.length) {G__84936__a[G__84936__i] = arguments[G__84936__i + 0]; ++G__84936__i;}
  mesg = new cljs.core.IndexedSeq(G__84936__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__84937){
var mesg = cljs.core.seq(arglist__84937);
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
var G__84938__i = 0, G__84938__a = new Array(arguments.length -  0);
while (G__84938__i < G__84938__a.length) {G__84938__a[G__84938__i] = arguments[G__84938__i + 0]; ++G__84938__i;}
  contents = new cljs.core.IndexedSeq(G__84938__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__84939){
var contents = cljs.core.seq(arglist__84939);
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
return cljs.core.map.call(null,(function (p1__84940_SHARP_){
return p1__84940_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__84941_SHARP_,p2__84942_SHARP_){
return goog.dom.insertChildAt(p1__84941_SHARP_,p2__84942_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__84944_SHARP_,p2__84943_SHARP_){
return goog.dom.insertSiblingBefore(p2__84943_SHARP_,p1__84944_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__84946_SHARP_,p2__84945_SHARP_){
return goog.dom.insertSiblingAfter(p2__84945_SHARP_,p1__84946_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__84948_SHARP_,p2__84947_SHARP_){
return goog.dom.replaceNode(p2__84947_SHARP_,p1__84948_SHARP_);
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
var seq__84953_84957 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__84954_84958 = null;
var count__84955_84959 = (0);
var i__84956_84960 = (0);
while(true){
if((i__84956_84960 < count__84955_84959)){
var n_84961 = cljs.core._nth.call(null,chunk__84954_84958,i__84956_84960);
goog.style.setStyle(n_84961,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__84962 = seq__84953_84957;
var G__84963 = chunk__84954_84958;
var G__84964 = count__84955_84959;
var G__84965 = (i__84956_84960 + (1));
seq__84953_84957 = G__84962;
chunk__84954_84958 = G__84963;
count__84955_84959 = G__84964;
i__84956_84960 = G__84965;
continue;
} else {
var temp__4126__auto___84966 = cljs.core.seq.call(null,seq__84953_84957);
if(temp__4126__auto___84966){
var seq__84953_84967__$1 = temp__4126__auto___84966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84953_84967__$1)){
var c__4768__auto___84968 = cljs.core.chunk_first.call(null,seq__84953_84967__$1);
var G__84969 = cljs.core.chunk_rest.call(null,seq__84953_84967__$1);
var G__84970 = c__4768__auto___84968;
var G__84971 = cljs.core.count.call(null,c__4768__auto___84968);
var G__84972 = (0);
seq__84953_84957 = G__84969;
chunk__84954_84958 = G__84970;
count__84955_84959 = G__84971;
i__84956_84960 = G__84972;
continue;
} else {
var n_84973 = cljs.core.first.call(null,seq__84953_84967__$1);
goog.style.setStyle(n_84973,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__84974 = cljs.core.next.call(null,seq__84953_84967__$1);
var G__84975 = null;
var G__84976 = (0);
var G__84977 = (0);
seq__84953_84957 = G__84974;
chunk__84954_84958 = G__84975;
count__84955_84959 = G__84976;
i__84956_84960 = G__84977;
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
var G__84978__i = 0, G__84978__a = new Array(arguments.length -  2);
while (G__84978__i < G__84978__a.length) {G__84978__a[G__84978__i] = arguments[G__84978__i + 2]; ++G__84978__i;}
  value = new cljs.core.IndexedSeq(G__84978__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__84979){
var content = cljs.core.first(arglist__84979);
arglist__84979 = cljs.core.next(arglist__84979);
var name = cljs.core.first(arglist__84979);
var value = cljs.core.rest(arglist__84979);
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
var seq__84984_84988 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__84985_84989 = null;
var count__84986_84990 = (0);
var i__84987_84991 = (0);
while(true){
if((i__84987_84991 < count__84986_84990)){
var n_84992 = cljs.core._nth.call(null,chunk__84985_84989,i__84987_84991);
n_84992.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__84993 = seq__84984_84988;
var G__84994 = chunk__84985_84989;
var G__84995 = count__84986_84990;
var G__84996 = (i__84987_84991 + (1));
seq__84984_84988 = G__84993;
chunk__84985_84989 = G__84994;
count__84986_84990 = G__84995;
i__84987_84991 = G__84996;
continue;
} else {
var temp__4126__auto___84997 = cljs.core.seq.call(null,seq__84984_84988);
if(temp__4126__auto___84997){
var seq__84984_84998__$1 = temp__4126__auto___84997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__84984_84998__$1)){
var c__4768__auto___84999 = cljs.core.chunk_first.call(null,seq__84984_84998__$1);
var G__85000 = cljs.core.chunk_rest.call(null,seq__84984_84998__$1);
var G__85001 = c__4768__auto___84999;
var G__85002 = cljs.core.count.call(null,c__4768__auto___84999);
var G__85003 = (0);
seq__84984_84988 = G__85000;
chunk__84985_84989 = G__85001;
count__84986_84990 = G__85002;
i__84987_84991 = G__85003;
continue;
} else {
var n_85004 = cljs.core.first.call(null,seq__84984_84998__$1);
n_85004.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__85005 = cljs.core.next.call(null,seq__84984_84998__$1);
var G__85006 = null;
var G__85007 = (0);
var G__85008 = (0);
seq__84984_84988 = G__85005;
chunk__84985_84989 = G__85006;
count__84986_84990 = G__85007;
i__84987_84991 = G__85008;
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
var G__85009__i = 0, G__85009__a = new Array(arguments.length -  2);
while (G__85009__i < G__85009__a.length) {G__85009__a[G__85009__i] = arguments[G__85009__i + 2]; ++G__85009__i;}
  value = new cljs.core.IndexedSeq(G__85009__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__85010){
var content = cljs.core.first(arglist__85010);
arglist__85010 = cljs.core.next(arglist__85010);
var name = cljs.core.first(arglist__85010);
var value = cljs.core.rest(arglist__85010);
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
var seq__85015_85019 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__85016_85020 = null;
var count__85017_85021 = (0);
var i__85018_85022 = (0);
while(true){
if((i__85018_85022 < count__85017_85021)){
var n_85023 = cljs.core._nth.call(null,chunk__85016_85020,i__85018_85022);
n_85023.removeAttribute(cljs.core.name.call(null,name));

var G__85024 = seq__85015_85019;
var G__85025 = chunk__85016_85020;
var G__85026 = count__85017_85021;
var G__85027 = (i__85018_85022 + (1));
seq__85015_85019 = G__85024;
chunk__85016_85020 = G__85025;
count__85017_85021 = G__85026;
i__85018_85022 = G__85027;
continue;
} else {
var temp__4126__auto___85028 = cljs.core.seq.call(null,seq__85015_85019);
if(temp__4126__auto___85028){
var seq__85015_85029__$1 = temp__4126__auto___85028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85015_85029__$1)){
var c__4768__auto___85030 = cljs.core.chunk_first.call(null,seq__85015_85029__$1);
var G__85031 = cljs.core.chunk_rest.call(null,seq__85015_85029__$1);
var G__85032 = c__4768__auto___85030;
var G__85033 = cljs.core.count.call(null,c__4768__auto___85030);
var G__85034 = (0);
seq__85015_85019 = G__85031;
chunk__85016_85020 = G__85032;
count__85017_85021 = G__85033;
i__85018_85022 = G__85034;
continue;
} else {
var n_85035 = cljs.core.first.call(null,seq__85015_85029__$1);
n_85035.removeAttribute(cljs.core.name.call(null,name));

var G__85036 = cljs.core.next.call(null,seq__85015_85029__$1);
var G__85037 = null;
var G__85038 = (0);
var G__85039 = (0);
seq__85015_85019 = G__85036;
chunk__85016_85020 = G__85037;
count__85017_85021 = G__85038;
i__85018_85022 = G__85039;
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
var vec__85041 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__85041,(0),null);
var v = cljs.core.nth.call(null,vec__85041,(1),null);
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
return (function (p1__85042_SHARP_){
var attr = attrs__$1.item(p1__85042_SHARP_);
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
var seq__85049_85055 = cljs.core.seq.call(null,styles);
var chunk__85050_85056 = null;
var count__85051_85057 = (0);
var i__85052_85058 = (0);
while(true){
if((i__85052_85058 < count__85051_85057)){
var vec__85053_85059 = cljs.core._nth.call(null,chunk__85050_85056,i__85052_85058);
var name_85060 = cljs.core.nth.call(null,vec__85053_85059,(0),null);
var value_85061 = cljs.core.nth.call(null,vec__85053_85059,(1),null);
domina.set_style_BANG_.call(null,content,name_85060,value_85061);

var G__85062 = seq__85049_85055;
var G__85063 = chunk__85050_85056;
var G__85064 = count__85051_85057;
var G__85065 = (i__85052_85058 + (1));
seq__85049_85055 = G__85062;
chunk__85050_85056 = G__85063;
count__85051_85057 = G__85064;
i__85052_85058 = G__85065;
continue;
} else {
var temp__4126__auto___85066 = cljs.core.seq.call(null,seq__85049_85055);
if(temp__4126__auto___85066){
var seq__85049_85067__$1 = temp__4126__auto___85066;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85049_85067__$1)){
var c__4768__auto___85068 = cljs.core.chunk_first.call(null,seq__85049_85067__$1);
var G__85069 = cljs.core.chunk_rest.call(null,seq__85049_85067__$1);
var G__85070 = c__4768__auto___85068;
var G__85071 = cljs.core.count.call(null,c__4768__auto___85068);
var G__85072 = (0);
seq__85049_85055 = G__85069;
chunk__85050_85056 = G__85070;
count__85051_85057 = G__85071;
i__85052_85058 = G__85072;
continue;
} else {
var vec__85054_85073 = cljs.core.first.call(null,seq__85049_85067__$1);
var name_85074 = cljs.core.nth.call(null,vec__85054_85073,(0),null);
var value_85075 = cljs.core.nth.call(null,vec__85054_85073,(1),null);
domina.set_style_BANG_.call(null,content,name_85074,value_85075);

var G__85076 = cljs.core.next.call(null,seq__85049_85067__$1);
var G__85077 = null;
var G__85078 = (0);
var G__85079 = (0);
seq__85049_85055 = G__85076;
chunk__85050_85056 = G__85077;
count__85051_85057 = G__85078;
i__85052_85058 = G__85079;
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
var seq__85086_85092 = cljs.core.seq.call(null,attrs);
var chunk__85087_85093 = null;
var count__85088_85094 = (0);
var i__85089_85095 = (0);
while(true){
if((i__85089_85095 < count__85088_85094)){
var vec__85090_85096 = cljs.core._nth.call(null,chunk__85087_85093,i__85089_85095);
var name_85097 = cljs.core.nth.call(null,vec__85090_85096,(0),null);
var value_85098 = cljs.core.nth.call(null,vec__85090_85096,(1),null);
domina.set_attr_BANG_.call(null,content,name_85097,value_85098);

var G__85099 = seq__85086_85092;
var G__85100 = chunk__85087_85093;
var G__85101 = count__85088_85094;
var G__85102 = (i__85089_85095 + (1));
seq__85086_85092 = G__85099;
chunk__85087_85093 = G__85100;
count__85088_85094 = G__85101;
i__85089_85095 = G__85102;
continue;
} else {
var temp__4126__auto___85103 = cljs.core.seq.call(null,seq__85086_85092);
if(temp__4126__auto___85103){
var seq__85086_85104__$1 = temp__4126__auto___85103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85086_85104__$1)){
var c__4768__auto___85105 = cljs.core.chunk_first.call(null,seq__85086_85104__$1);
var G__85106 = cljs.core.chunk_rest.call(null,seq__85086_85104__$1);
var G__85107 = c__4768__auto___85105;
var G__85108 = cljs.core.count.call(null,c__4768__auto___85105);
var G__85109 = (0);
seq__85086_85092 = G__85106;
chunk__85087_85093 = G__85107;
count__85088_85094 = G__85108;
i__85089_85095 = G__85109;
continue;
} else {
var vec__85091_85110 = cljs.core.first.call(null,seq__85086_85104__$1);
var name_85111 = cljs.core.nth.call(null,vec__85091_85110,(0),null);
var value_85112 = cljs.core.nth.call(null,vec__85091_85110,(1),null);
domina.set_attr_BANG_.call(null,content,name_85111,value_85112);

var G__85113 = cljs.core.next.call(null,seq__85086_85104__$1);
var G__85114 = null;
var G__85115 = (0);
var G__85116 = (0);
seq__85086_85092 = G__85113;
chunk__85087_85093 = G__85114;
count__85088_85094 = G__85115;
i__85089_85095 = G__85116;
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
var seq__85121_85125 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__85122_85126 = null;
var count__85123_85127 = (0);
var i__85124_85128 = (0);
while(true){
if((i__85124_85128 < count__85123_85127)){
var node_85129 = cljs.core._nth.call(null,chunk__85122_85126,i__85124_85128);
goog.dom.classes.add(node_85129,class$);

var G__85130 = seq__85121_85125;
var G__85131 = chunk__85122_85126;
var G__85132 = count__85123_85127;
var G__85133 = (i__85124_85128 + (1));
seq__85121_85125 = G__85130;
chunk__85122_85126 = G__85131;
count__85123_85127 = G__85132;
i__85124_85128 = G__85133;
continue;
} else {
var temp__4126__auto___85134 = cljs.core.seq.call(null,seq__85121_85125);
if(temp__4126__auto___85134){
var seq__85121_85135__$1 = temp__4126__auto___85134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85121_85135__$1)){
var c__4768__auto___85136 = cljs.core.chunk_first.call(null,seq__85121_85135__$1);
var G__85137 = cljs.core.chunk_rest.call(null,seq__85121_85135__$1);
var G__85138 = c__4768__auto___85136;
var G__85139 = cljs.core.count.call(null,c__4768__auto___85136);
var G__85140 = (0);
seq__85121_85125 = G__85137;
chunk__85122_85126 = G__85138;
count__85123_85127 = G__85139;
i__85124_85128 = G__85140;
continue;
} else {
var node_85141 = cljs.core.first.call(null,seq__85121_85135__$1);
goog.dom.classes.add(node_85141,class$);

var G__85142 = cljs.core.next.call(null,seq__85121_85135__$1);
var G__85143 = null;
var G__85144 = (0);
var G__85145 = (0);
seq__85121_85125 = G__85142;
chunk__85122_85126 = G__85143;
count__85123_85127 = G__85144;
i__85124_85128 = G__85145;
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
var seq__85150_85154 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__85151_85155 = null;
var count__85152_85156 = (0);
var i__85153_85157 = (0);
while(true){
if((i__85153_85157 < count__85152_85156)){
var node_85158 = cljs.core._nth.call(null,chunk__85151_85155,i__85153_85157);
goog.dom.classes.remove(node_85158,class$);

var G__85159 = seq__85150_85154;
var G__85160 = chunk__85151_85155;
var G__85161 = count__85152_85156;
var G__85162 = (i__85153_85157 + (1));
seq__85150_85154 = G__85159;
chunk__85151_85155 = G__85160;
count__85152_85156 = G__85161;
i__85153_85157 = G__85162;
continue;
} else {
var temp__4126__auto___85163 = cljs.core.seq.call(null,seq__85150_85154);
if(temp__4126__auto___85163){
var seq__85150_85164__$1 = temp__4126__auto___85163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85150_85164__$1)){
var c__4768__auto___85165 = cljs.core.chunk_first.call(null,seq__85150_85164__$1);
var G__85166 = cljs.core.chunk_rest.call(null,seq__85150_85164__$1);
var G__85167 = c__4768__auto___85165;
var G__85168 = cljs.core.count.call(null,c__4768__auto___85165);
var G__85169 = (0);
seq__85150_85154 = G__85166;
chunk__85151_85155 = G__85167;
count__85152_85156 = G__85168;
i__85153_85157 = G__85169;
continue;
} else {
var node_85170 = cljs.core.first.call(null,seq__85150_85164__$1);
goog.dom.classes.remove(node_85170,class$);

var G__85171 = cljs.core.next.call(null,seq__85150_85164__$1);
var G__85172 = null;
var G__85173 = (0);
var G__85174 = (0);
seq__85150_85154 = G__85171;
chunk__85151_85155 = G__85172;
count__85152_85156 = G__85173;
i__85153_85157 = G__85174;
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
var seq__85179_85183 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__85180_85184 = null;
var count__85181_85185 = (0);
var i__85182_85186 = (0);
while(true){
if((i__85182_85186 < count__85181_85185)){
var node_85187 = cljs.core._nth.call(null,chunk__85180_85184,i__85182_85186);
goog.dom.classes.toggle(node_85187,class$);

var G__85188 = seq__85179_85183;
var G__85189 = chunk__85180_85184;
var G__85190 = count__85181_85185;
var G__85191 = (i__85182_85186 + (1));
seq__85179_85183 = G__85188;
chunk__85180_85184 = G__85189;
count__85181_85185 = G__85190;
i__85182_85186 = G__85191;
continue;
} else {
var temp__4126__auto___85192 = cljs.core.seq.call(null,seq__85179_85183);
if(temp__4126__auto___85192){
var seq__85179_85193__$1 = temp__4126__auto___85192;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85179_85193__$1)){
var c__4768__auto___85194 = cljs.core.chunk_first.call(null,seq__85179_85193__$1);
var G__85195 = cljs.core.chunk_rest.call(null,seq__85179_85193__$1);
var G__85196 = c__4768__auto___85194;
var G__85197 = cljs.core.count.call(null,c__4768__auto___85194);
var G__85198 = (0);
seq__85179_85183 = G__85195;
chunk__85180_85184 = G__85196;
count__85181_85185 = G__85197;
i__85182_85186 = G__85198;
continue;
} else {
var node_85199 = cljs.core.first.call(null,seq__85179_85193__$1);
goog.dom.classes.toggle(node_85199,class$);

var G__85200 = cljs.core.next.call(null,seq__85179_85193__$1);
var G__85201 = null;
var G__85202 = (0);
var G__85203 = (0);
seq__85179_85183 = G__85200;
chunk__85180_85184 = G__85201;
count__85181_85185 = G__85202;
i__85182_85186 = G__85203;
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
var classes_85212__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__85208_85213 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__85209_85214 = null;
var count__85210_85215 = (0);
var i__85211_85216 = (0);
while(true){
if((i__85211_85216 < count__85210_85215)){
var node_85217 = cljs.core._nth.call(null,chunk__85209_85214,i__85211_85216);
goog.dom.classes.set(node_85217,classes_85212__$1);

var G__85218 = seq__85208_85213;
var G__85219 = chunk__85209_85214;
var G__85220 = count__85210_85215;
var G__85221 = (i__85211_85216 + (1));
seq__85208_85213 = G__85218;
chunk__85209_85214 = G__85219;
count__85210_85215 = G__85220;
i__85211_85216 = G__85221;
continue;
} else {
var temp__4126__auto___85222 = cljs.core.seq.call(null,seq__85208_85213);
if(temp__4126__auto___85222){
var seq__85208_85223__$1 = temp__4126__auto___85222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85208_85223__$1)){
var c__4768__auto___85224 = cljs.core.chunk_first.call(null,seq__85208_85223__$1);
var G__85225 = cljs.core.chunk_rest.call(null,seq__85208_85223__$1);
var G__85226 = c__4768__auto___85224;
var G__85227 = cljs.core.count.call(null,c__4768__auto___85224);
var G__85228 = (0);
seq__85208_85213 = G__85225;
chunk__85209_85214 = G__85226;
count__85210_85215 = G__85227;
i__85211_85216 = G__85228;
continue;
} else {
var node_85229 = cljs.core.first.call(null,seq__85208_85223__$1);
goog.dom.classes.set(node_85229,classes_85212__$1);

var G__85230 = cljs.core.next.call(null,seq__85208_85223__$1);
var G__85231 = null;
var G__85232 = (0);
var G__85233 = (0);
seq__85208_85213 = G__85230;
chunk__85209_85214 = G__85231;
count__85210_85215 = G__85232;
i__85211_85216 = G__85233;
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
var seq__85238_85242 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__85239_85243 = null;
var count__85240_85244 = (0);
var i__85241_85245 = (0);
while(true){
if((i__85241_85245 < count__85240_85244)){
var node_85246 = cljs.core._nth.call(null,chunk__85239_85243,i__85241_85245);
goog.dom.setTextContent(node_85246,value);

var G__85247 = seq__85238_85242;
var G__85248 = chunk__85239_85243;
var G__85249 = count__85240_85244;
var G__85250 = (i__85241_85245 + (1));
seq__85238_85242 = G__85247;
chunk__85239_85243 = G__85248;
count__85240_85244 = G__85249;
i__85241_85245 = G__85250;
continue;
} else {
var temp__4126__auto___85251 = cljs.core.seq.call(null,seq__85238_85242);
if(temp__4126__auto___85251){
var seq__85238_85252__$1 = temp__4126__auto___85251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85238_85252__$1)){
var c__4768__auto___85253 = cljs.core.chunk_first.call(null,seq__85238_85252__$1);
var G__85254 = cljs.core.chunk_rest.call(null,seq__85238_85252__$1);
var G__85255 = c__4768__auto___85253;
var G__85256 = cljs.core.count.call(null,c__4768__auto___85253);
var G__85257 = (0);
seq__85238_85242 = G__85254;
chunk__85239_85243 = G__85255;
count__85240_85244 = G__85256;
i__85241_85245 = G__85257;
continue;
} else {
var node_85258 = cljs.core.first.call(null,seq__85238_85252__$1);
goog.dom.setTextContent(node_85258,value);

var G__85259 = cljs.core.next.call(null,seq__85238_85252__$1);
var G__85260 = null;
var G__85261 = (0);
var G__85262 = (0);
seq__85238_85242 = G__85259;
chunk__85239_85243 = G__85260;
count__85240_85244 = G__85261;
i__85241_85245 = G__85262;
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
var seq__85267_85271 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__85268_85272 = null;
var count__85269_85273 = (0);
var i__85270_85274 = (0);
while(true){
if((i__85270_85274 < count__85269_85273)){
var node_85275 = cljs.core._nth.call(null,chunk__85268_85272,i__85270_85274);
goog.dom.forms.setValue(node_85275,value);

var G__85276 = seq__85267_85271;
var G__85277 = chunk__85268_85272;
var G__85278 = count__85269_85273;
var G__85279 = (i__85270_85274 + (1));
seq__85267_85271 = G__85276;
chunk__85268_85272 = G__85277;
count__85269_85273 = G__85278;
i__85270_85274 = G__85279;
continue;
} else {
var temp__4126__auto___85280 = cljs.core.seq.call(null,seq__85267_85271);
if(temp__4126__auto___85280){
var seq__85267_85281__$1 = temp__4126__auto___85280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85267_85281__$1)){
var c__4768__auto___85282 = cljs.core.chunk_first.call(null,seq__85267_85281__$1);
var G__85283 = cljs.core.chunk_rest.call(null,seq__85267_85281__$1);
var G__85284 = c__4768__auto___85282;
var G__85285 = cljs.core.count.call(null,c__4768__auto___85282);
var G__85286 = (0);
seq__85267_85271 = G__85283;
chunk__85268_85272 = G__85284;
count__85269_85273 = G__85285;
i__85270_85274 = G__85286;
continue;
} else {
var node_85287 = cljs.core.first.call(null,seq__85267_85281__$1);
goog.dom.forms.setValue(node_85287,value);

var G__85288 = cljs.core.next.call(null,seq__85267_85281__$1);
var G__85289 = null;
var G__85290 = (0);
var G__85291 = (0);
seq__85267_85271 = G__85288;
chunk__85268_85272 = G__85289;
count__85269_85273 = G__85290;
i__85270_85274 = G__85291;
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
var value_85302 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__85298_85303 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__85299_85304 = null;
var count__85300_85305 = (0);
var i__85301_85306 = (0);
while(true){
if((i__85301_85306 < count__85300_85305)){
var node_85307 = cljs.core._nth.call(null,chunk__85299_85304,i__85301_85306);
node_85307.innerHTML = value_85302;

var G__85308 = seq__85298_85303;
var G__85309 = chunk__85299_85304;
var G__85310 = count__85300_85305;
var G__85311 = (i__85301_85306 + (1));
seq__85298_85303 = G__85308;
chunk__85299_85304 = G__85309;
count__85300_85305 = G__85310;
i__85301_85306 = G__85311;
continue;
} else {
var temp__4126__auto___85312 = cljs.core.seq.call(null,seq__85298_85303);
if(temp__4126__auto___85312){
var seq__85298_85313__$1 = temp__4126__auto___85312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85298_85313__$1)){
var c__4768__auto___85314 = cljs.core.chunk_first.call(null,seq__85298_85313__$1);
var G__85315 = cljs.core.chunk_rest.call(null,seq__85298_85313__$1);
var G__85316 = c__4768__auto___85314;
var G__85317 = cljs.core.count.call(null,c__4768__auto___85314);
var G__85318 = (0);
seq__85298_85303 = G__85315;
chunk__85299_85304 = G__85316;
count__85300_85305 = G__85317;
i__85301_85306 = G__85318;
continue;
} else {
var node_85319 = cljs.core.first.call(null,seq__85298_85313__$1);
node_85319.innerHTML = value_85302;

var G__85320 = cljs.core.next.call(null,seq__85298_85313__$1);
var G__85321 = null;
var G__85322 = (0);
var G__85323 = (0);
seq__85298_85303 = G__85320;
chunk__85299_85304 = G__85321;
count__85300_85305 = G__85322;
i__85301_85306 = G__85323;
continue;
}
} else {
}
}
break;
}
}catch (e85297){if((e85297 instanceof Error)){
var e_85324 = e85297;
domina.replace_children_BANG_.call(null,content,value_85302);
} else {
throw e85297;

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
var seq__85331_85335 = cljs.core.seq.call(null,children);
var chunk__85332_85336 = null;
var count__85333_85337 = (0);
var i__85334_85338 = (0);
while(true){
if((i__85334_85338 < count__85333_85337)){
var child_85339 = cljs.core._nth.call(null,chunk__85332_85336,i__85334_85338);
frag.appendChild(child_85339);

var G__85340 = seq__85331_85335;
var G__85341 = chunk__85332_85336;
var G__85342 = count__85333_85337;
var G__85343 = (i__85334_85338 + (1));
seq__85331_85335 = G__85340;
chunk__85332_85336 = G__85341;
count__85333_85337 = G__85342;
i__85334_85338 = G__85343;
continue;
} else {
var temp__4126__auto___85344 = cljs.core.seq.call(null,seq__85331_85335);
if(temp__4126__auto___85344){
var seq__85331_85345__$1 = temp__4126__auto___85344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85331_85345__$1)){
var c__4768__auto___85346 = cljs.core.chunk_first.call(null,seq__85331_85345__$1);
var G__85347 = cljs.core.chunk_rest.call(null,seq__85331_85345__$1);
var G__85348 = c__4768__auto___85346;
var G__85349 = cljs.core.count.call(null,c__4768__auto___85346);
var G__85350 = (0);
seq__85331_85335 = G__85347;
chunk__85332_85336 = G__85348;
count__85333_85337 = G__85349;
i__85334_85338 = G__85350;
continue;
} else {
var child_85351 = cljs.core.first.call(null,seq__85331_85345__$1);
frag.appendChild(child_85351);

var G__85352 = cljs.core.next.call(null,seq__85331_85345__$1);
var G__85353 = null;
var G__85354 = (0);
var G__85355 = (0);
seq__85331_85335 = G__85352;
chunk__85332_85336 = G__85353;
count__85333_85337 = G__85354;
i__85334_85338 = G__85355;
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
return (function (p1__85325_SHARP_,p2__85326_SHARP_){
return f.call(null,p1__85325_SHARP_,p2__85326_SHARP_);
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
if((function (){var G__85357 = list_thing;
if(G__85357){
var bit__4662__auto__ = (G__85357.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__85357.cljs$core$ISeqable$)){
return true;
} else {
if((!G__85357.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__85357);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__85357);
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
if((function (){var G__85358 = content;
if(G__85358){
var bit__4662__auto__ = (G__85358.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__85358.cljs$core$ISeqable$)){
return true;
} else {
if((!G__85358.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__85358);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__85358);
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
if((function (){var G__85359 = content;
if(G__85359){
var bit__4662__auto__ = (G__85359.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__85359.cljs$core$ISeqable$)){
return true;
} else {
if((!G__85359.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__85359);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__85359);
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
