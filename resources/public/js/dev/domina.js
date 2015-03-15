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
var opt_wrapper_302975 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_302976 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_302977 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_302977,opt_wrapper_302975,table_section_wrapper_302976,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_302975,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_302976,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_302976,cell_wrapper_302977,table_section_wrapper_302976,table_section_wrapper_302976]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__302982 = cljs.core.seq.call(null,tbody);
var chunk__302983 = null;
var count__302984 = (0);
var i__302985 = (0);
while(true){
if((i__302985 < count__302984)){
var child = cljs.core._nth.call(null,chunk__302983,i__302985);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__302986 = seq__302982;
var G__302987 = chunk__302983;
var G__302988 = count__302984;
var G__302989 = (i__302985 + (1));
seq__302982 = G__302986;
chunk__302983 = G__302987;
count__302984 = G__302988;
i__302985 = G__302989;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__302982);
if(temp__4126__auto__){
var seq__302982__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__302982__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__302982__$1);
var G__302990 = cljs.core.chunk_rest.call(null,seq__302982__$1);
var G__302991 = c__4768__auto__;
var G__302992 = cljs.core.count.call(null,c__4768__auto__);
var G__302993 = (0);
seq__302982 = G__302990;
chunk__302983 = G__302991;
count__302984 = G__302992;
i__302985 = G__302993;
continue;
} else {
var child = cljs.core.first.call(null,seq__302982__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__302994 = cljs.core.next.call(null,seq__302982__$1);
var G__302995 = null;
var G__302996 = (0);
var G__302997 = (0);
seq__302982 = G__302994;
chunk__302983 = G__302995;
count__302984 = G__302996;
i__302985 = G__302997;
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
var vec__302999 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__302999,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__302999,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__302999,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__303000 = wrapper.lastChild;
var G__303001 = (level - (1));
wrapper = G__303000;
level = G__303001;
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

domina.DomContent = (function (){var obj303003 = {};
return obj303003;
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
var G__303004__i = 0, G__303004__a = new Array(arguments.length -  0);
while (G__303004__i < G__303004__a.length) {G__303004__a[G__303004__i] = arguments[G__303004__i + 0]; ++G__303004__i;}
  mesg = new cljs.core.IndexedSeq(G__303004__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__303005){
var mesg = cljs.core.seq(arglist__303005);
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
var G__303006__i = 0, G__303006__a = new Array(arguments.length -  0);
while (G__303006__i < G__303006__a.length) {G__303006__a[G__303006__i] = arguments[G__303006__i + 0]; ++G__303006__i;}
  mesg = new cljs.core.IndexedSeq(G__303006__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__303007){
var mesg = cljs.core.seq(arglist__303007);
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
var G__303008__i = 0, G__303008__a = new Array(arguments.length -  0);
while (G__303008__i < G__303008__a.length) {G__303008__a[G__303008__i] = arguments[G__303008__i + 0]; ++G__303008__i;}
  contents = new cljs.core.IndexedSeq(G__303008__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__303009){
var contents = cljs.core.seq(arglist__303009);
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
return cljs.core.map.call(null,(function (p1__303010_SHARP_){
return p1__303010_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__303011_SHARP_,p2__303012_SHARP_){
return goog.dom.insertChildAt(p1__303011_SHARP_,p2__303012_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__303014_SHARP_,p2__303013_SHARP_){
return goog.dom.insertSiblingBefore(p2__303013_SHARP_,p1__303014_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__303016_SHARP_,p2__303015_SHARP_){
return goog.dom.insertSiblingAfter(p2__303015_SHARP_,p1__303016_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__303018_SHARP_,p2__303017_SHARP_){
return goog.dom.replaceNode(p2__303017_SHARP_,p1__303018_SHARP_);
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
var seq__303023_303027 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__303024_303028 = null;
var count__303025_303029 = (0);
var i__303026_303030 = (0);
while(true){
if((i__303026_303030 < count__303025_303029)){
var n_303031 = cljs.core._nth.call(null,chunk__303024_303028,i__303026_303030);
goog.style.setStyle(n_303031,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__303032 = seq__303023_303027;
var G__303033 = chunk__303024_303028;
var G__303034 = count__303025_303029;
var G__303035 = (i__303026_303030 + (1));
seq__303023_303027 = G__303032;
chunk__303024_303028 = G__303033;
count__303025_303029 = G__303034;
i__303026_303030 = G__303035;
continue;
} else {
var temp__4126__auto___303036 = cljs.core.seq.call(null,seq__303023_303027);
if(temp__4126__auto___303036){
var seq__303023_303037__$1 = temp__4126__auto___303036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__303023_303037__$1)){
var c__4768__auto___303038 = cljs.core.chunk_first.call(null,seq__303023_303037__$1);
var G__303039 = cljs.core.chunk_rest.call(null,seq__303023_303037__$1);
var G__303040 = c__4768__auto___303038;
var G__303041 = cljs.core.count.call(null,c__4768__auto___303038);
var G__303042 = (0);
seq__303023_303027 = G__303039;
chunk__303024_303028 = G__303040;
count__303025_303029 = G__303041;
i__303026_303030 = G__303042;
continue;
} else {
var n_303043 = cljs.core.first.call(null,seq__303023_303037__$1);
goog.style.setStyle(n_303043,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__303044 = cljs.core.next.call(null,seq__303023_303037__$1);
var G__303045 = null;
var G__303046 = (0);
var G__303047 = (0);
seq__303023_303027 = G__303044;
chunk__303024_303028 = G__303045;
count__303025_303029 = G__303046;
i__303026_303030 = G__303047;
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
var G__303048__i = 0, G__303048__a = new Array(arguments.length -  2);
while (G__303048__i < G__303048__a.length) {G__303048__a[G__303048__i] = arguments[G__303048__i + 2]; ++G__303048__i;}
  value = new cljs.core.IndexedSeq(G__303048__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__303049){
var content = cljs.core.first(arglist__303049);
arglist__303049 = cljs.core.next(arglist__303049);
var name = cljs.core.first(arglist__303049);
var value = cljs.core.rest(arglist__303049);
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
var seq__303054_303058 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__303055_303059 = null;
var count__303056_303060 = (0);
var i__303057_303061 = (0);
while(true){
if((i__303057_303061 < count__303056_303060)){
var n_303062 = cljs.core._nth.call(null,chunk__303055_303059,i__303057_303061);
n_303062.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__303063 = seq__303054_303058;
var G__303064 = chunk__303055_303059;
var G__303065 = count__303056_303060;
var G__303066 = (i__303057_303061 + (1));
seq__303054_303058 = G__303063;
chunk__303055_303059 = G__303064;
count__303056_303060 = G__303065;
i__303057_303061 = G__303066;
continue;
} else {
var temp__4126__auto___303067 = cljs.core.seq.call(null,seq__303054_303058);
if(temp__4126__auto___303067){
var seq__303054_303068__$1 = temp__4126__auto___303067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__303054_303068__$1)){
var c__4768__auto___303069 = cljs.core.chunk_first.call(null,seq__303054_303068__$1);
var G__303070 = cljs.core.chunk_rest.call(null,seq__303054_303068__$1);
var G__303071 = c__4768__auto___303069;
var G__303072 = cljs.core.count.call(null,c__4768__auto___303069);
var G__303073 = (0);
seq__303054_303058 = G__303070;
chunk__303055_303059 = G__303071;
count__303056_303060 = G__303072;
i__303057_303061 = G__303073;
continue;
} else {
var n_303074 = cljs.core.first.call(null,seq__303054_303068__$1);
n_303074.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__303075 = cljs.core.next.call(null,seq__303054_303068__$1);
var G__303076 = null;
var G__303077 = (0);
var G__303078 = (0);
seq__303054_303058 = G__303075;
chunk__303055_303059 = G__303076;
count__303056_303060 = G__303077;
i__303057_303061 = G__303078;
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
var G__303079__i = 0, G__303079__a = new Array(arguments.length -  2);
while (G__303079__i < G__303079__a.length) {G__303079__a[G__303079__i] = arguments[G__303079__i + 2]; ++G__303079__i;}
  value = new cljs.core.IndexedSeq(G__303079__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__303080){
var content = cljs.core.first(arglist__303080);
arglist__303080 = cljs.core.next(arglist__303080);
var name = cljs.core.first(arglist__303080);
var value = cljs.core.rest(arglist__303080);
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
var seq__303085_303089 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__303086_303090 = null;
var count__303087_303091 = (0);
var i__303088_303092 = (0);
while(true){
if((i__303088_303092 < count__303087_303091)){
var n_303093 = cljs.core._nth.call(null,chunk__303086_303090,i__303088_303092);
n_303093.removeAttribute(cljs.core.name.call(null,name));

var G__303094 = seq__303085_303089;
var G__303095 = chunk__303086_303090;
var G__303096 = count__303087_303091;
var G__303097 = (i__303088_303092 + (1));
seq__303085_303089 = G__303094;
chunk__303086_303090 = G__303095;
count__303087_303091 = G__303096;
i__303088_303092 = G__303097;
continue;
} else {
var temp__4126__auto___303098 = cljs.core.seq.call(null,seq__303085_303089);
if(temp__4126__auto___303098){
var seq__303085_303099__$1 = temp__4126__auto___303098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__303085_303099__$1)){
var c__4768__auto___303100 = cljs.core.chunk_first.call(null,seq__303085_303099__$1);
var G__303101 = cljs.core.chunk_rest.call(null,seq__303085_303099__$1);
var G__303102 = c__4768__auto___303100;
var G__303103 = cljs.core.count.call(null,c__4768__auto___303100);
var G__303104 = (0);
seq__303085_303089 = G__303101;
chunk__303086_303090 = G__303102;
count__303087_303091 = G__303103;
i__303088_303092 = G__303104;
continue;
} else {
var n_303105 = cljs.core.first.call(null,seq__303085_303099__$1);
n_303105.removeAttribute(cljs.core.name.call(null,name));

var G__303106 = cljs.core.next.call(null,seq__303085_303099__$1);
var G__303107 = null;
var G__303108 = (0);
var G__303109 = (0);
seq__303085_303089 = G__303106;
chunk__303086_303090 = G__303107;
count__303087_303091 = G__303108;
i__303088_303092 = G__303109;
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
var vec__303111 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__303111,(0),null);
var v = cljs.core.nth.call(null,vec__303111,(1),null);
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
return (function (p1__303112_SHARP_){
var attr = attrs__$1.item(p1__303112_SHARP_);
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
var seq__303119_303125 = cljs.core.seq.call(null,styles);
var chunk__303120_303126 = null;
var count__303121_303127 = (0);
var i__303122_303128 = (0);
while(true){
if((i__303122_303128 < count__303121_303127)){
var vec__303123_303129 = cljs.core._nth.call(null,chunk__303120_303126,i__303122_303128);
var name_303130 = cljs.core.nth.call(null,vec__303123_303129,(0),null);
var value_303131 = cljs.core.nth.call(null,vec__303123_303129,(1),null);
domina.set_style_BANG_.call(null,content,name_303130,value_303131);

var G__303132 = seq__303119_303125;
var G__303133 = chunk__303120_303126;
var G__303134 = count__303121_303127;
var G__303135 = (i__303122_303128 + (1));
seq__303119_303125 = G__303132;
chunk__303120_303126 = G__303133;
count__303121_303127 = G__303134;
i__303122_303128 = G__303135;
continue;
} else {
var temp__4126__auto___303136 = cljs.core.seq.call(null,seq__303119_303125);
if(temp__4126__auto___303136){
var seq__303119_303137__$1 = temp__4126__auto___303136;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__303119_303137__$1)){
var c__4768__auto___303138 = cljs.core.chunk_first.call(null,seq__303119_303137__$1);
var G__303139 = cljs.core.chunk_rest.call(null,seq__303119_303137__$1);
var G__303140 = c__4768__auto___303138;
var G__303141 = cljs.core.count.call(null,c__4768__auto___303138);
var G__303142 = (0);
seq__303119_303125 = G__303139;
chunk__303120_303126 = G__303140;
count__303121_303127 = G__303141;
i__303122_303128 = G__303142;
continue;
} else {
var vec__303124_303143 = cljs.core.first.call(null,seq__303119_303137__$1);
var name_303144 = cljs.core.nth.call(null,vec__303124_303143,(0),null);
var value_303145 = cljs.core.nth.call(null,vec__303124_303143,(1),null);
domina.set_style_BANG_.call(null,content,name_303144,value_303145);

var G__303146 = cljs.core.next.call(null,seq__303119_303137__$1);
var G__303147 = null;
var G__303148 = (0);
var G__303149 = (0);
seq__303119_303125 = G__303146;
chunk__303120_303126 = G__303147;
count__303121_303127 = G__303148;
i__303122_303128 = G__303149;
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
var seq__303156_303162 = cljs.core.seq.call(null,attrs);
var chunk__303157_303163 = null;
var count__303158_303164 = (0);
var i__303159_303165 = (0);
while(true){
if((i__303159_303165 < count__303158_303164)){
var vec__303160_303166 = cljs.core._nth.call(null,chunk__303157_303163,i__303159_303165);
var name_303167 = cljs.core.nth.call(null,vec__303160_303166,(0),null);
var value_303168 = cljs.core.nth.call(null,vec__303160_303166,(1),null);
domina.set_attr_BANG_.call(null,content,name_303167,value_303168);

var G__303169 = seq__303156_303162;
var G__303170 = chunk__303157_303163;
var G__303171 = count__303158_303164;
var G__303172 = (i__303159_303165 + (1));
seq__303156_303162 = G__303169;
chunk__303157_303163 = G__303170;
count__303158_303164 = G__303171;
i__303159_303165 = G__303172;
continue;
} else {
var temp__4126__auto___303173 = cljs.core.seq.call(null,seq__303156_303162);
if(temp__4126__auto___303173){
var seq__303156_303174__$1 = temp__4126__auto___303173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__303156_303174__$1)){
var c__4768__auto___303175 = cljs.core.chunk_first.call(null,seq__303156_303174__$1);
var G__303176 = cljs.core.chunk_rest.call(null,seq__303156_303174__$1);
var G__303177 = c__4768__auto___303175;
var G__303178 = cljs.core.count.call(null,c__4768__auto___303175);
var G__303179 = (0);
seq__303156_303162 = G__303176;
chunk__303157_303163 = G__303177;
count__303158_303164 = G__303178;
i__303159_303165 = G__303179;
continue;
} else {
var vec__303161_303180 = cljs.core.first.call(null,seq__303156_303174__$1);
var name_303181 = cljs.core.nth.call(null,vec__303161_303180,(0),null);
var value_303182 = cljs.core.nth.call(null,vec__303161_303180,(1),null);
domina.set_attr_BANG_.call(null,content,name_303181,value_303182);

var G__303183 = cljs.core.next.call(null,seq__303156_303174__$1);
var G__303184 = null;
var G__303185 = (0);
var G__303186 = (0);
seq__303156_303162 = G__303183;
chunk__303157_303163 = G__303184;
count__303158_303164 = G__303185;
i__303159_303165 = G__303186;
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
var seq__303191_303195 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__303192_303196 = null;
var count__303193_303197 = (0);
var i__303194_303198 = (0);
while(true){
if((i__303194_303198 < count__303193_303197)){
var node_303199 = cljs.core._nth.call(null,chunk__303192_303196,i__303194_303198);
goog.dom.classes.add(node_303199,class$);

var G__303200 = seq__303191_303195;
var G__303201 = chunk__303192_303196;
var G__303202 = count__303193_303197;
var G__303203 = (i__303194_303198 + (1));
seq__303191_303195 = G__303200;
chunk__303192_303196 = G__303201;
count__303193_303197 = G__303202;
i__303194_303198 = G__303203;
continue;
} else {
var temp__4126__auto___303204 = cljs.core.seq.call(null,seq__303191_303195);
if(temp__4126__auto___303204){
var seq__303191_303205__$1 = temp__4126__auto___303204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__303191_303205__$1)){
var c__4768__auto___303206 = cljs.core.chunk_first.call(null,seq__303191_303205__$1);
var G__303207 = cljs.core.chunk_rest.call(null,seq__303191_303205__$1);
var G__303208 = c__4768__auto___303206;
var G__303209 = cljs.core.count.call(null,c__4768__auto___303206);
var G__303210 = (0);
seq__303191_303195 = G__303207;
chunk__303192_303196 = G__303208;
count__303193_303197 = G__303209;
i__303194_303198 = G__303210;
continue;
} else {
var node_303211 = cljs.core.first.call(null,seq__303191_303205__$1);
goog.dom.classes.add(node_303211,class$);

var G__303212 = cljs.core.next.call(null,seq__303191_303205__$1);
var G__303213 = null;
var G__303214 = (0);
var G__303215 = (0);
seq__303191_303195 = G__303212;
chunk__303192_303196 = G__303213;
count__303193_303197 = G__303214;
i__303194_303198 = G__303215;
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
var seq__303220_303224 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__303221_303225 = null;
var count__303222_303226 = (0);
var i__303223_303227 = (0);
while(true){
if((i__303223_303227 < count__303222_303226)){
var node_303228 = cljs.core._nth.call(null,chunk__303221_303225,i__303223_303227);
goog.dom.classes.remove(node_303228,class$);

var G__303229 = seq__303220_303224;
var G__303230 = chunk__303221_303225;
var G__303231 = count__303222_303226;
var G__303232 = (i__303223_303227 + (1));
seq__303220_303224 = G__303229;
chunk__303221_303225 = G__303230;
count__303222_303226 = G__303231;
i__303223_303227 = G__303232;
continue;
} else {
var temp__4126__auto___303233 = cljs.core.seq.call(null,seq__303220_303224);
if(temp__4126__auto___303233){
var seq__303220_303234__$1 = temp__4126__auto___303233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__303220_303234__$1)){
var c__4768__auto___303235 = cljs.core.chunk_first.call(null,seq__303220_303234__$1);
var G__303236 = cljs.core.chunk_rest.call(null,seq__303220_303234__$1);
var G__303237 = c__4768__auto___303235;
var G__303238 = cljs.core.count.call(null,c__4768__auto___303235);
var G__303239 = (0);
seq__303220_303224 = G__303236;
chunk__303221_303225 = G__303237;
count__303222_303226 = G__303238;
i__303223_303227 = G__303239;
continue;
} else {
var node_303240 = cljs.core.first.call(null,seq__303220_303234__$1);
goog.dom.classes.remove(node_303240,class$);

var G__303241 = cljs.core.next.call(null,seq__303220_303234__$1);
var G__303242 = null;
var G__303243 = (0);
var G__303244 = (0);
seq__303220_303224 = G__303241;
chunk__303221_303225 = G__303242;
count__303222_303226 = G__303243;
i__303223_303227 = G__303244;
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
var seq__303249_303253 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__303250_303254 = null;
var count__303251_303255 = (0);
var i__303252_303256 = (0);
while(true){
if((i__303252_303256 < count__303251_303255)){
var node_303257 = cljs.core._nth.call(null,chunk__303250_303254,i__303252_303256);
goog.dom.classes.toggle(node_303257,class$);

var G__303258 = seq__303249_303253;
var G__303259 = chunk__303250_303254;
var G__303260 = count__303251_303255;
var G__303261 = (i__303252_303256 + (1));
seq__303249_303253 = G__303258;
chunk__303250_303254 = G__303259;
count__303251_303255 = G__303260;
i__303252_303256 = G__303261;
continue;
} else {
var temp__4126__auto___303262 = cljs.core.seq.call(null,seq__303249_303253);
if(temp__4126__auto___303262){
var seq__303249_303263__$1 = temp__4126__auto___303262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__303249_303263__$1)){
var c__4768__auto___303264 = cljs.core.chunk_first.call(null,seq__303249_303263__$1);
var G__303265 = cljs.core.chunk_rest.call(null,seq__303249_303263__$1);
var G__303266 = c__4768__auto___303264;
var G__303267 = cljs.core.count.call(null,c__4768__auto___303264);
var G__303268 = (0);
seq__303249_303253 = G__303265;
chunk__303250_303254 = G__303266;
count__303251_303255 = G__303267;
i__303252_303256 = G__303268;
continue;
} else {
var node_303269 = cljs.core.first.call(null,seq__303249_303263__$1);
goog.dom.classes.toggle(node_303269,class$);

var G__303270 = cljs.core.next.call(null,seq__303249_303263__$1);
var G__303271 = null;
var G__303272 = (0);
var G__303273 = (0);
seq__303249_303253 = G__303270;
chunk__303250_303254 = G__303271;
count__303251_303255 = G__303272;
i__303252_303256 = G__303273;
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
var classes_303282__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__303278_303283 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__303279_303284 = null;
var count__303280_303285 = (0);
var i__303281_303286 = (0);
while(true){
if((i__303281_303286 < count__303280_303285)){
var node_303287 = cljs.core._nth.call(null,chunk__303279_303284,i__303281_303286);
goog.dom.classes.set(node_303287,classes_303282__$1);

var G__303288 = seq__303278_303283;
var G__303289 = chunk__303279_303284;
var G__303290 = count__303280_303285;
var G__303291 = (i__303281_303286 + (1));
seq__303278_303283 = G__303288;
chunk__303279_303284 = G__303289;
count__303280_303285 = G__303290;
i__303281_303286 = G__303291;
continue;
} else {
var temp__4126__auto___303292 = cljs.core.seq.call(null,seq__303278_303283);
if(temp__4126__auto___303292){
var seq__303278_303293__$1 = temp__4126__auto___303292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__303278_303293__$1)){
var c__4768__auto___303294 = cljs.core.chunk_first.call(null,seq__303278_303293__$1);
var G__303295 = cljs.core.chunk_rest.call(null,seq__303278_303293__$1);
var G__303296 = c__4768__auto___303294;
var G__303297 = cljs.core.count.call(null,c__4768__auto___303294);
var G__303298 = (0);
seq__303278_303283 = G__303295;
chunk__303279_303284 = G__303296;
count__303280_303285 = G__303297;
i__303281_303286 = G__303298;
continue;
} else {
var node_303299 = cljs.core.first.call(null,seq__303278_303293__$1);
goog.dom.classes.set(node_303299,classes_303282__$1);

var G__303300 = cljs.core.next.call(null,seq__303278_303293__$1);
var G__303301 = null;
var G__303302 = (0);
var G__303303 = (0);
seq__303278_303283 = G__303300;
chunk__303279_303284 = G__303301;
count__303280_303285 = G__303302;
i__303281_303286 = G__303303;
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
var seq__303308_303312 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__303309_303313 = null;
var count__303310_303314 = (0);
var i__303311_303315 = (0);
while(true){
if((i__303311_303315 < count__303310_303314)){
var node_303316 = cljs.core._nth.call(null,chunk__303309_303313,i__303311_303315);
goog.dom.setTextContent(node_303316,value);

var G__303317 = seq__303308_303312;
var G__303318 = chunk__303309_303313;
var G__303319 = count__303310_303314;
var G__303320 = (i__303311_303315 + (1));
seq__303308_303312 = G__303317;
chunk__303309_303313 = G__303318;
count__303310_303314 = G__303319;
i__303311_303315 = G__303320;
continue;
} else {
var temp__4126__auto___303321 = cljs.core.seq.call(null,seq__303308_303312);
if(temp__4126__auto___303321){
var seq__303308_303322__$1 = temp__4126__auto___303321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__303308_303322__$1)){
var c__4768__auto___303323 = cljs.core.chunk_first.call(null,seq__303308_303322__$1);
var G__303324 = cljs.core.chunk_rest.call(null,seq__303308_303322__$1);
var G__303325 = c__4768__auto___303323;
var G__303326 = cljs.core.count.call(null,c__4768__auto___303323);
var G__303327 = (0);
seq__303308_303312 = G__303324;
chunk__303309_303313 = G__303325;
count__303310_303314 = G__303326;
i__303311_303315 = G__303327;
continue;
} else {
var node_303328 = cljs.core.first.call(null,seq__303308_303322__$1);
goog.dom.setTextContent(node_303328,value);

var G__303329 = cljs.core.next.call(null,seq__303308_303322__$1);
var G__303330 = null;
var G__303331 = (0);
var G__303332 = (0);
seq__303308_303312 = G__303329;
chunk__303309_303313 = G__303330;
count__303310_303314 = G__303331;
i__303311_303315 = G__303332;
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
var seq__303337_303341 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__303338_303342 = null;
var count__303339_303343 = (0);
var i__303340_303344 = (0);
while(true){
if((i__303340_303344 < count__303339_303343)){
var node_303345 = cljs.core._nth.call(null,chunk__303338_303342,i__303340_303344);
goog.dom.forms.setValue(node_303345,value);

var G__303346 = seq__303337_303341;
var G__303347 = chunk__303338_303342;
var G__303348 = count__303339_303343;
var G__303349 = (i__303340_303344 + (1));
seq__303337_303341 = G__303346;
chunk__303338_303342 = G__303347;
count__303339_303343 = G__303348;
i__303340_303344 = G__303349;
continue;
} else {
var temp__4126__auto___303350 = cljs.core.seq.call(null,seq__303337_303341);
if(temp__4126__auto___303350){
var seq__303337_303351__$1 = temp__4126__auto___303350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__303337_303351__$1)){
var c__4768__auto___303352 = cljs.core.chunk_first.call(null,seq__303337_303351__$1);
var G__303353 = cljs.core.chunk_rest.call(null,seq__303337_303351__$1);
var G__303354 = c__4768__auto___303352;
var G__303355 = cljs.core.count.call(null,c__4768__auto___303352);
var G__303356 = (0);
seq__303337_303341 = G__303353;
chunk__303338_303342 = G__303354;
count__303339_303343 = G__303355;
i__303340_303344 = G__303356;
continue;
} else {
var node_303357 = cljs.core.first.call(null,seq__303337_303351__$1);
goog.dom.forms.setValue(node_303357,value);

var G__303358 = cljs.core.next.call(null,seq__303337_303351__$1);
var G__303359 = null;
var G__303360 = (0);
var G__303361 = (0);
seq__303337_303341 = G__303358;
chunk__303338_303342 = G__303359;
count__303339_303343 = G__303360;
i__303340_303344 = G__303361;
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
var value_303372 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__303368_303373 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__303369_303374 = null;
var count__303370_303375 = (0);
var i__303371_303376 = (0);
while(true){
if((i__303371_303376 < count__303370_303375)){
var node_303377 = cljs.core._nth.call(null,chunk__303369_303374,i__303371_303376);
node_303377.innerHTML = value_303372;

var G__303378 = seq__303368_303373;
var G__303379 = chunk__303369_303374;
var G__303380 = count__303370_303375;
var G__303381 = (i__303371_303376 + (1));
seq__303368_303373 = G__303378;
chunk__303369_303374 = G__303379;
count__303370_303375 = G__303380;
i__303371_303376 = G__303381;
continue;
} else {
var temp__4126__auto___303382 = cljs.core.seq.call(null,seq__303368_303373);
if(temp__4126__auto___303382){
var seq__303368_303383__$1 = temp__4126__auto___303382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__303368_303383__$1)){
var c__4768__auto___303384 = cljs.core.chunk_first.call(null,seq__303368_303383__$1);
var G__303385 = cljs.core.chunk_rest.call(null,seq__303368_303383__$1);
var G__303386 = c__4768__auto___303384;
var G__303387 = cljs.core.count.call(null,c__4768__auto___303384);
var G__303388 = (0);
seq__303368_303373 = G__303385;
chunk__303369_303374 = G__303386;
count__303370_303375 = G__303387;
i__303371_303376 = G__303388;
continue;
} else {
var node_303389 = cljs.core.first.call(null,seq__303368_303383__$1);
node_303389.innerHTML = value_303372;

var G__303390 = cljs.core.next.call(null,seq__303368_303383__$1);
var G__303391 = null;
var G__303392 = (0);
var G__303393 = (0);
seq__303368_303373 = G__303390;
chunk__303369_303374 = G__303391;
count__303370_303375 = G__303392;
i__303371_303376 = G__303393;
continue;
}
} else {
}
}
break;
}
}catch (e303367){if((e303367 instanceof Error)){
var e_303394 = e303367;
domina.replace_children_BANG_.call(null,content,value_303372);
} else {
throw e303367;

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
var seq__303401_303405 = cljs.core.seq.call(null,children);
var chunk__303402_303406 = null;
var count__303403_303407 = (0);
var i__303404_303408 = (0);
while(true){
if((i__303404_303408 < count__303403_303407)){
var child_303409 = cljs.core._nth.call(null,chunk__303402_303406,i__303404_303408);
frag.appendChild(child_303409);

var G__303410 = seq__303401_303405;
var G__303411 = chunk__303402_303406;
var G__303412 = count__303403_303407;
var G__303413 = (i__303404_303408 + (1));
seq__303401_303405 = G__303410;
chunk__303402_303406 = G__303411;
count__303403_303407 = G__303412;
i__303404_303408 = G__303413;
continue;
} else {
var temp__4126__auto___303414 = cljs.core.seq.call(null,seq__303401_303405);
if(temp__4126__auto___303414){
var seq__303401_303415__$1 = temp__4126__auto___303414;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__303401_303415__$1)){
var c__4768__auto___303416 = cljs.core.chunk_first.call(null,seq__303401_303415__$1);
var G__303417 = cljs.core.chunk_rest.call(null,seq__303401_303415__$1);
var G__303418 = c__4768__auto___303416;
var G__303419 = cljs.core.count.call(null,c__4768__auto___303416);
var G__303420 = (0);
seq__303401_303405 = G__303417;
chunk__303402_303406 = G__303418;
count__303403_303407 = G__303419;
i__303404_303408 = G__303420;
continue;
} else {
var child_303421 = cljs.core.first.call(null,seq__303401_303415__$1);
frag.appendChild(child_303421);

var G__303422 = cljs.core.next.call(null,seq__303401_303415__$1);
var G__303423 = null;
var G__303424 = (0);
var G__303425 = (0);
seq__303401_303405 = G__303422;
chunk__303402_303406 = G__303423;
count__303403_303407 = G__303424;
i__303404_303408 = G__303425;
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
return (function (p1__303395_SHARP_,p2__303396_SHARP_){
return f.call(null,p1__303395_SHARP_,p2__303396_SHARP_);
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
if((function (){var G__303427 = list_thing;
if(G__303427){
var bit__4662__auto__ = (G__303427.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__303427.cljs$core$ISeqable$)){
return true;
} else {
if((!G__303427.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__303427);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__303427);
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
if((function (){var G__303428 = content;
if(G__303428){
var bit__4662__auto__ = (G__303428.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__303428.cljs$core$ISeqable$)){
return true;
} else {
if((!G__303428.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__303428);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__303428);
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
if((function (){var G__303429 = content;
if(G__303429){
var bit__4662__auto__ = (G__303429.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__303429.cljs$core$ISeqable$)){
return true;
} else {
if((!G__303429.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__303429);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__303429);
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
