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
var opt_wrapper_226006 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_226007 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_226008 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_226008,opt_wrapper_226006,table_section_wrapper_226007,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_226006,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_226007,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_226007,cell_wrapper_226008,table_section_wrapper_226007,table_section_wrapper_226007]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__226013 = cljs.core.seq.call(null,tbody);
var chunk__226014 = null;
var count__226015 = (0);
var i__226016 = (0);
while(true){
if((i__226016 < count__226015)){
var child = cljs.core._nth.call(null,chunk__226014,i__226016);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__226017 = seq__226013;
var G__226018 = chunk__226014;
var G__226019 = count__226015;
var G__226020 = (i__226016 + (1));
seq__226013 = G__226017;
chunk__226014 = G__226018;
count__226015 = G__226019;
i__226016 = G__226020;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__226013);
if(temp__4126__auto__){
var seq__226013__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226013__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__226013__$1);
var G__226021 = cljs.core.chunk_rest.call(null,seq__226013__$1);
var G__226022 = c__4768__auto__;
var G__226023 = cljs.core.count.call(null,c__4768__auto__);
var G__226024 = (0);
seq__226013 = G__226021;
chunk__226014 = G__226022;
count__226015 = G__226023;
i__226016 = G__226024;
continue;
} else {
var child = cljs.core.first.call(null,seq__226013__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__226025 = cljs.core.next.call(null,seq__226013__$1);
var G__226026 = null;
var G__226027 = (0);
var G__226028 = (0);
seq__226013 = G__226025;
chunk__226014 = G__226026;
count__226015 = G__226027;
i__226016 = G__226028;
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
var vec__226030 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__226030,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__226030,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__226030,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__226031 = wrapper.lastChild;
var G__226032 = (level - (1));
wrapper = G__226031;
level = G__226032;
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

domina.DomContent = (function (){var obj226034 = {};
return obj226034;
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
var G__226035__i = 0, G__226035__a = new Array(arguments.length -  0);
while (G__226035__i < G__226035__a.length) {G__226035__a[G__226035__i] = arguments[G__226035__i + 0]; ++G__226035__i;}
  mesg = new cljs.core.IndexedSeq(G__226035__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__226036){
var mesg = cljs.core.seq(arglist__226036);
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
var G__226037__i = 0, G__226037__a = new Array(arguments.length -  0);
while (G__226037__i < G__226037__a.length) {G__226037__a[G__226037__i] = arguments[G__226037__i + 0]; ++G__226037__i;}
  mesg = new cljs.core.IndexedSeq(G__226037__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__226038){
var mesg = cljs.core.seq(arglist__226038);
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
var G__226039__i = 0, G__226039__a = new Array(arguments.length -  0);
while (G__226039__i < G__226039__a.length) {G__226039__a[G__226039__i] = arguments[G__226039__i + 0]; ++G__226039__i;}
  contents = new cljs.core.IndexedSeq(G__226039__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__226040){
var contents = cljs.core.seq(arglist__226040);
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
return cljs.core.map.call(null,(function (p1__226041_SHARP_){
return p1__226041_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__226042_SHARP_,p2__226043_SHARP_){
return goog.dom.insertChildAt(p1__226042_SHARP_,p2__226043_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__226045_SHARP_,p2__226044_SHARP_){
return goog.dom.insertSiblingBefore(p2__226044_SHARP_,p1__226045_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__226047_SHARP_,p2__226046_SHARP_){
return goog.dom.insertSiblingAfter(p2__226046_SHARP_,p1__226047_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__226049_SHARP_,p2__226048_SHARP_){
return goog.dom.replaceNode(p2__226048_SHARP_,p1__226049_SHARP_);
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
var seq__226054_226058 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__226055_226059 = null;
var count__226056_226060 = (0);
var i__226057_226061 = (0);
while(true){
if((i__226057_226061 < count__226056_226060)){
var n_226062 = cljs.core._nth.call(null,chunk__226055_226059,i__226057_226061);
goog.style.setStyle(n_226062,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__226063 = seq__226054_226058;
var G__226064 = chunk__226055_226059;
var G__226065 = count__226056_226060;
var G__226066 = (i__226057_226061 + (1));
seq__226054_226058 = G__226063;
chunk__226055_226059 = G__226064;
count__226056_226060 = G__226065;
i__226057_226061 = G__226066;
continue;
} else {
var temp__4126__auto___226067 = cljs.core.seq.call(null,seq__226054_226058);
if(temp__4126__auto___226067){
var seq__226054_226068__$1 = temp__4126__auto___226067;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226054_226068__$1)){
var c__4768__auto___226069 = cljs.core.chunk_first.call(null,seq__226054_226068__$1);
var G__226070 = cljs.core.chunk_rest.call(null,seq__226054_226068__$1);
var G__226071 = c__4768__auto___226069;
var G__226072 = cljs.core.count.call(null,c__4768__auto___226069);
var G__226073 = (0);
seq__226054_226058 = G__226070;
chunk__226055_226059 = G__226071;
count__226056_226060 = G__226072;
i__226057_226061 = G__226073;
continue;
} else {
var n_226074 = cljs.core.first.call(null,seq__226054_226068__$1);
goog.style.setStyle(n_226074,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__226075 = cljs.core.next.call(null,seq__226054_226068__$1);
var G__226076 = null;
var G__226077 = (0);
var G__226078 = (0);
seq__226054_226058 = G__226075;
chunk__226055_226059 = G__226076;
count__226056_226060 = G__226077;
i__226057_226061 = G__226078;
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
var G__226079__i = 0, G__226079__a = new Array(arguments.length -  2);
while (G__226079__i < G__226079__a.length) {G__226079__a[G__226079__i] = arguments[G__226079__i + 2]; ++G__226079__i;}
  value = new cljs.core.IndexedSeq(G__226079__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__226080){
var content = cljs.core.first(arglist__226080);
arglist__226080 = cljs.core.next(arglist__226080);
var name = cljs.core.first(arglist__226080);
var value = cljs.core.rest(arglist__226080);
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
var seq__226085_226089 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__226086_226090 = null;
var count__226087_226091 = (0);
var i__226088_226092 = (0);
while(true){
if((i__226088_226092 < count__226087_226091)){
var n_226093 = cljs.core._nth.call(null,chunk__226086_226090,i__226088_226092);
n_226093.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__226094 = seq__226085_226089;
var G__226095 = chunk__226086_226090;
var G__226096 = count__226087_226091;
var G__226097 = (i__226088_226092 + (1));
seq__226085_226089 = G__226094;
chunk__226086_226090 = G__226095;
count__226087_226091 = G__226096;
i__226088_226092 = G__226097;
continue;
} else {
var temp__4126__auto___226098 = cljs.core.seq.call(null,seq__226085_226089);
if(temp__4126__auto___226098){
var seq__226085_226099__$1 = temp__4126__auto___226098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226085_226099__$1)){
var c__4768__auto___226100 = cljs.core.chunk_first.call(null,seq__226085_226099__$1);
var G__226101 = cljs.core.chunk_rest.call(null,seq__226085_226099__$1);
var G__226102 = c__4768__auto___226100;
var G__226103 = cljs.core.count.call(null,c__4768__auto___226100);
var G__226104 = (0);
seq__226085_226089 = G__226101;
chunk__226086_226090 = G__226102;
count__226087_226091 = G__226103;
i__226088_226092 = G__226104;
continue;
} else {
var n_226105 = cljs.core.first.call(null,seq__226085_226099__$1);
n_226105.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__226106 = cljs.core.next.call(null,seq__226085_226099__$1);
var G__226107 = null;
var G__226108 = (0);
var G__226109 = (0);
seq__226085_226089 = G__226106;
chunk__226086_226090 = G__226107;
count__226087_226091 = G__226108;
i__226088_226092 = G__226109;
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
var G__226110__i = 0, G__226110__a = new Array(arguments.length -  2);
while (G__226110__i < G__226110__a.length) {G__226110__a[G__226110__i] = arguments[G__226110__i + 2]; ++G__226110__i;}
  value = new cljs.core.IndexedSeq(G__226110__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__226111){
var content = cljs.core.first(arglist__226111);
arglist__226111 = cljs.core.next(arglist__226111);
var name = cljs.core.first(arglist__226111);
var value = cljs.core.rest(arglist__226111);
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
var seq__226116_226120 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__226117_226121 = null;
var count__226118_226122 = (0);
var i__226119_226123 = (0);
while(true){
if((i__226119_226123 < count__226118_226122)){
var n_226124 = cljs.core._nth.call(null,chunk__226117_226121,i__226119_226123);
n_226124.removeAttribute(cljs.core.name.call(null,name));

var G__226125 = seq__226116_226120;
var G__226126 = chunk__226117_226121;
var G__226127 = count__226118_226122;
var G__226128 = (i__226119_226123 + (1));
seq__226116_226120 = G__226125;
chunk__226117_226121 = G__226126;
count__226118_226122 = G__226127;
i__226119_226123 = G__226128;
continue;
} else {
var temp__4126__auto___226129 = cljs.core.seq.call(null,seq__226116_226120);
if(temp__4126__auto___226129){
var seq__226116_226130__$1 = temp__4126__auto___226129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226116_226130__$1)){
var c__4768__auto___226131 = cljs.core.chunk_first.call(null,seq__226116_226130__$1);
var G__226132 = cljs.core.chunk_rest.call(null,seq__226116_226130__$1);
var G__226133 = c__4768__auto___226131;
var G__226134 = cljs.core.count.call(null,c__4768__auto___226131);
var G__226135 = (0);
seq__226116_226120 = G__226132;
chunk__226117_226121 = G__226133;
count__226118_226122 = G__226134;
i__226119_226123 = G__226135;
continue;
} else {
var n_226136 = cljs.core.first.call(null,seq__226116_226130__$1);
n_226136.removeAttribute(cljs.core.name.call(null,name));

var G__226137 = cljs.core.next.call(null,seq__226116_226130__$1);
var G__226138 = null;
var G__226139 = (0);
var G__226140 = (0);
seq__226116_226120 = G__226137;
chunk__226117_226121 = G__226138;
count__226118_226122 = G__226139;
i__226119_226123 = G__226140;
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
var vec__226142 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__226142,(0),null);
var v = cljs.core.nth.call(null,vec__226142,(1),null);
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
return (function (p1__226143_SHARP_){
var attr = attrs__$1.item(p1__226143_SHARP_);
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
var seq__226150_226156 = cljs.core.seq.call(null,styles);
var chunk__226151_226157 = null;
var count__226152_226158 = (0);
var i__226153_226159 = (0);
while(true){
if((i__226153_226159 < count__226152_226158)){
var vec__226154_226160 = cljs.core._nth.call(null,chunk__226151_226157,i__226153_226159);
var name_226161 = cljs.core.nth.call(null,vec__226154_226160,(0),null);
var value_226162 = cljs.core.nth.call(null,vec__226154_226160,(1),null);
domina.set_style_BANG_.call(null,content,name_226161,value_226162);

var G__226163 = seq__226150_226156;
var G__226164 = chunk__226151_226157;
var G__226165 = count__226152_226158;
var G__226166 = (i__226153_226159 + (1));
seq__226150_226156 = G__226163;
chunk__226151_226157 = G__226164;
count__226152_226158 = G__226165;
i__226153_226159 = G__226166;
continue;
} else {
var temp__4126__auto___226167 = cljs.core.seq.call(null,seq__226150_226156);
if(temp__4126__auto___226167){
var seq__226150_226168__$1 = temp__4126__auto___226167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226150_226168__$1)){
var c__4768__auto___226169 = cljs.core.chunk_first.call(null,seq__226150_226168__$1);
var G__226170 = cljs.core.chunk_rest.call(null,seq__226150_226168__$1);
var G__226171 = c__4768__auto___226169;
var G__226172 = cljs.core.count.call(null,c__4768__auto___226169);
var G__226173 = (0);
seq__226150_226156 = G__226170;
chunk__226151_226157 = G__226171;
count__226152_226158 = G__226172;
i__226153_226159 = G__226173;
continue;
} else {
var vec__226155_226174 = cljs.core.first.call(null,seq__226150_226168__$1);
var name_226175 = cljs.core.nth.call(null,vec__226155_226174,(0),null);
var value_226176 = cljs.core.nth.call(null,vec__226155_226174,(1),null);
domina.set_style_BANG_.call(null,content,name_226175,value_226176);

var G__226177 = cljs.core.next.call(null,seq__226150_226168__$1);
var G__226178 = null;
var G__226179 = (0);
var G__226180 = (0);
seq__226150_226156 = G__226177;
chunk__226151_226157 = G__226178;
count__226152_226158 = G__226179;
i__226153_226159 = G__226180;
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
var seq__226187_226193 = cljs.core.seq.call(null,attrs);
var chunk__226188_226194 = null;
var count__226189_226195 = (0);
var i__226190_226196 = (0);
while(true){
if((i__226190_226196 < count__226189_226195)){
var vec__226191_226197 = cljs.core._nth.call(null,chunk__226188_226194,i__226190_226196);
var name_226198 = cljs.core.nth.call(null,vec__226191_226197,(0),null);
var value_226199 = cljs.core.nth.call(null,vec__226191_226197,(1),null);
domina.set_attr_BANG_.call(null,content,name_226198,value_226199);

var G__226200 = seq__226187_226193;
var G__226201 = chunk__226188_226194;
var G__226202 = count__226189_226195;
var G__226203 = (i__226190_226196 + (1));
seq__226187_226193 = G__226200;
chunk__226188_226194 = G__226201;
count__226189_226195 = G__226202;
i__226190_226196 = G__226203;
continue;
} else {
var temp__4126__auto___226204 = cljs.core.seq.call(null,seq__226187_226193);
if(temp__4126__auto___226204){
var seq__226187_226205__$1 = temp__4126__auto___226204;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226187_226205__$1)){
var c__4768__auto___226206 = cljs.core.chunk_first.call(null,seq__226187_226205__$1);
var G__226207 = cljs.core.chunk_rest.call(null,seq__226187_226205__$1);
var G__226208 = c__4768__auto___226206;
var G__226209 = cljs.core.count.call(null,c__4768__auto___226206);
var G__226210 = (0);
seq__226187_226193 = G__226207;
chunk__226188_226194 = G__226208;
count__226189_226195 = G__226209;
i__226190_226196 = G__226210;
continue;
} else {
var vec__226192_226211 = cljs.core.first.call(null,seq__226187_226205__$1);
var name_226212 = cljs.core.nth.call(null,vec__226192_226211,(0),null);
var value_226213 = cljs.core.nth.call(null,vec__226192_226211,(1),null);
domina.set_attr_BANG_.call(null,content,name_226212,value_226213);

var G__226214 = cljs.core.next.call(null,seq__226187_226205__$1);
var G__226215 = null;
var G__226216 = (0);
var G__226217 = (0);
seq__226187_226193 = G__226214;
chunk__226188_226194 = G__226215;
count__226189_226195 = G__226216;
i__226190_226196 = G__226217;
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
var seq__226222_226226 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__226223_226227 = null;
var count__226224_226228 = (0);
var i__226225_226229 = (0);
while(true){
if((i__226225_226229 < count__226224_226228)){
var node_226230 = cljs.core._nth.call(null,chunk__226223_226227,i__226225_226229);
goog.dom.classes.add(node_226230,class$);

var G__226231 = seq__226222_226226;
var G__226232 = chunk__226223_226227;
var G__226233 = count__226224_226228;
var G__226234 = (i__226225_226229 + (1));
seq__226222_226226 = G__226231;
chunk__226223_226227 = G__226232;
count__226224_226228 = G__226233;
i__226225_226229 = G__226234;
continue;
} else {
var temp__4126__auto___226235 = cljs.core.seq.call(null,seq__226222_226226);
if(temp__4126__auto___226235){
var seq__226222_226236__$1 = temp__4126__auto___226235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226222_226236__$1)){
var c__4768__auto___226237 = cljs.core.chunk_first.call(null,seq__226222_226236__$1);
var G__226238 = cljs.core.chunk_rest.call(null,seq__226222_226236__$1);
var G__226239 = c__4768__auto___226237;
var G__226240 = cljs.core.count.call(null,c__4768__auto___226237);
var G__226241 = (0);
seq__226222_226226 = G__226238;
chunk__226223_226227 = G__226239;
count__226224_226228 = G__226240;
i__226225_226229 = G__226241;
continue;
} else {
var node_226242 = cljs.core.first.call(null,seq__226222_226236__$1);
goog.dom.classes.add(node_226242,class$);

var G__226243 = cljs.core.next.call(null,seq__226222_226236__$1);
var G__226244 = null;
var G__226245 = (0);
var G__226246 = (0);
seq__226222_226226 = G__226243;
chunk__226223_226227 = G__226244;
count__226224_226228 = G__226245;
i__226225_226229 = G__226246;
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
var seq__226251_226255 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__226252_226256 = null;
var count__226253_226257 = (0);
var i__226254_226258 = (0);
while(true){
if((i__226254_226258 < count__226253_226257)){
var node_226259 = cljs.core._nth.call(null,chunk__226252_226256,i__226254_226258);
goog.dom.classes.remove(node_226259,class$);

var G__226260 = seq__226251_226255;
var G__226261 = chunk__226252_226256;
var G__226262 = count__226253_226257;
var G__226263 = (i__226254_226258 + (1));
seq__226251_226255 = G__226260;
chunk__226252_226256 = G__226261;
count__226253_226257 = G__226262;
i__226254_226258 = G__226263;
continue;
} else {
var temp__4126__auto___226264 = cljs.core.seq.call(null,seq__226251_226255);
if(temp__4126__auto___226264){
var seq__226251_226265__$1 = temp__4126__auto___226264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226251_226265__$1)){
var c__4768__auto___226266 = cljs.core.chunk_first.call(null,seq__226251_226265__$1);
var G__226267 = cljs.core.chunk_rest.call(null,seq__226251_226265__$1);
var G__226268 = c__4768__auto___226266;
var G__226269 = cljs.core.count.call(null,c__4768__auto___226266);
var G__226270 = (0);
seq__226251_226255 = G__226267;
chunk__226252_226256 = G__226268;
count__226253_226257 = G__226269;
i__226254_226258 = G__226270;
continue;
} else {
var node_226271 = cljs.core.first.call(null,seq__226251_226265__$1);
goog.dom.classes.remove(node_226271,class$);

var G__226272 = cljs.core.next.call(null,seq__226251_226265__$1);
var G__226273 = null;
var G__226274 = (0);
var G__226275 = (0);
seq__226251_226255 = G__226272;
chunk__226252_226256 = G__226273;
count__226253_226257 = G__226274;
i__226254_226258 = G__226275;
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
var seq__226280_226284 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__226281_226285 = null;
var count__226282_226286 = (0);
var i__226283_226287 = (0);
while(true){
if((i__226283_226287 < count__226282_226286)){
var node_226288 = cljs.core._nth.call(null,chunk__226281_226285,i__226283_226287);
goog.dom.classes.toggle(node_226288,class$);

var G__226289 = seq__226280_226284;
var G__226290 = chunk__226281_226285;
var G__226291 = count__226282_226286;
var G__226292 = (i__226283_226287 + (1));
seq__226280_226284 = G__226289;
chunk__226281_226285 = G__226290;
count__226282_226286 = G__226291;
i__226283_226287 = G__226292;
continue;
} else {
var temp__4126__auto___226293 = cljs.core.seq.call(null,seq__226280_226284);
if(temp__4126__auto___226293){
var seq__226280_226294__$1 = temp__4126__auto___226293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226280_226294__$1)){
var c__4768__auto___226295 = cljs.core.chunk_first.call(null,seq__226280_226294__$1);
var G__226296 = cljs.core.chunk_rest.call(null,seq__226280_226294__$1);
var G__226297 = c__4768__auto___226295;
var G__226298 = cljs.core.count.call(null,c__4768__auto___226295);
var G__226299 = (0);
seq__226280_226284 = G__226296;
chunk__226281_226285 = G__226297;
count__226282_226286 = G__226298;
i__226283_226287 = G__226299;
continue;
} else {
var node_226300 = cljs.core.first.call(null,seq__226280_226294__$1);
goog.dom.classes.toggle(node_226300,class$);

var G__226301 = cljs.core.next.call(null,seq__226280_226294__$1);
var G__226302 = null;
var G__226303 = (0);
var G__226304 = (0);
seq__226280_226284 = G__226301;
chunk__226281_226285 = G__226302;
count__226282_226286 = G__226303;
i__226283_226287 = G__226304;
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
var classes_226313__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__226309_226314 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__226310_226315 = null;
var count__226311_226316 = (0);
var i__226312_226317 = (0);
while(true){
if((i__226312_226317 < count__226311_226316)){
var node_226318 = cljs.core._nth.call(null,chunk__226310_226315,i__226312_226317);
goog.dom.classes.set(node_226318,classes_226313__$1);

var G__226319 = seq__226309_226314;
var G__226320 = chunk__226310_226315;
var G__226321 = count__226311_226316;
var G__226322 = (i__226312_226317 + (1));
seq__226309_226314 = G__226319;
chunk__226310_226315 = G__226320;
count__226311_226316 = G__226321;
i__226312_226317 = G__226322;
continue;
} else {
var temp__4126__auto___226323 = cljs.core.seq.call(null,seq__226309_226314);
if(temp__4126__auto___226323){
var seq__226309_226324__$1 = temp__4126__auto___226323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226309_226324__$1)){
var c__4768__auto___226325 = cljs.core.chunk_first.call(null,seq__226309_226324__$1);
var G__226326 = cljs.core.chunk_rest.call(null,seq__226309_226324__$1);
var G__226327 = c__4768__auto___226325;
var G__226328 = cljs.core.count.call(null,c__4768__auto___226325);
var G__226329 = (0);
seq__226309_226314 = G__226326;
chunk__226310_226315 = G__226327;
count__226311_226316 = G__226328;
i__226312_226317 = G__226329;
continue;
} else {
var node_226330 = cljs.core.first.call(null,seq__226309_226324__$1);
goog.dom.classes.set(node_226330,classes_226313__$1);

var G__226331 = cljs.core.next.call(null,seq__226309_226324__$1);
var G__226332 = null;
var G__226333 = (0);
var G__226334 = (0);
seq__226309_226314 = G__226331;
chunk__226310_226315 = G__226332;
count__226311_226316 = G__226333;
i__226312_226317 = G__226334;
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
var seq__226339_226343 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__226340_226344 = null;
var count__226341_226345 = (0);
var i__226342_226346 = (0);
while(true){
if((i__226342_226346 < count__226341_226345)){
var node_226347 = cljs.core._nth.call(null,chunk__226340_226344,i__226342_226346);
goog.dom.setTextContent(node_226347,value);

var G__226348 = seq__226339_226343;
var G__226349 = chunk__226340_226344;
var G__226350 = count__226341_226345;
var G__226351 = (i__226342_226346 + (1));
seq__226339_226343 = G__226348;
chunk__226340_226344 = G__226349;
count__226341_226345 = G__226350;
i__226342_226346 = G__226351;
continue;
} else {
var temp__4126__auto___226352 = cljs.core.seq.call(null,seq__226339_226343);
if(temp__4126__auto___226352){
var seq__226339_226353__$1 = temp__4126__auto___226352;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226339_226353__$1)){
var c__4768__auto___226354 = cljs.core.chunk_first.call(null,seq__226339_226353__$1);
var G__226355 = cljs.core.chunk_rest.call(null,seq__226339_226353__$1);
var G__226356 = c__4768__auto___226354;
var G__226357 = cljs.core.count.call(null,c__4768__auto___226354);
var G__226358 = (0);
seq__226339_226343 = G__226355;
chunk__226340_226344 = G__226356;
count__226341_226345 = G__226357;
i__226342_226346 = G__226358;
continue;
} else {
var node_226359 = cljs.core.first.call(null,seq__226339_226353__$1);
goog.dom.setTextContent(node_226359,value);

var G__226360 = cljs.core.next.call(null,seq__226339_226353__$1);
var G__226361 = null;
var G__226362 = (0);
var G__226363 = (0);
seq__226339_226343 = G__226360;
chunk__226340_226344 = G__226361;
count__226341_226345 = G__226362;
i__226342_226346 = G__226363;
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
var seq__226368_226372 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__226369_226373 = null;
var count__226370_226374 = (0);
var i__226371_226375 = (0);
while(true){
if((i__226371_226375 < count__226370_226374)){
var node_226376 = cljs.core._nth.call(null,chunk__226369_226373,i__226371_226375);
goog.dom.forms.setValue(node_226376,value);

var G__226377 = seq__226368_226372;
var G__226378 = chunk__226369_226373;
var G__226379 = count__226370_226374;
var G__226380 = (i__226371_226375 + (1));
seq__226368_226372 = G__226377;
chunk__226369_226373 = G__226378;
count__226370_226374 = G__226379;
i__226371_226375 = G__226380;
continue;
} else {
var temp__4126__auto___226381 = cljs.core.seq.call(null,seq__226368_226372);
if(temp__4126__auto___226381){
var seq__226368_226382__$1 = temp__4126__auto___226381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226368_226382__$1)){
var c__4768__auto___226383 = cljs.core.chunk_first.call(null,seq__226368_226382__$1);
var G__226384 = cljs.core.chunk_rest.call(null,seq__226368_226382__$1);
var G__226385 = c__4768__auto___226383;
var G__226386 = cljs.core.count.call(null,c__4768__auto___226383);
var G__226387 = (0);
seq__226368_226372 = G__226384;
chunk__226369_226373 = G__226385;
count__226370_226374 = G__226386;
i__226371_226375 = G__226387;
continue;
} else {
var node_226388 = cljs.core.first.call(null,seq__226368_226382__$1);
goog.dom.forms.setValue(node_226388,value);

var G__226389 = cljs.core.next.call(null,seq__226368_226382__$1);
var G__226390 = null;
var G__226391 = (0);
var G__226392 = (0);
seq__226368_226372 = G__226389;
chunk__226369_226373 = G__226390;
count__226370_226374 = G__226391;
i__226371_226375 = G__226392;
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
var value_226403 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__226399_226404 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__226400_226405 = null;
var count__226401_226406 = (0);
var i__226402_226407 = (0);
while(true){
if((i__226402_226407 < count__226401_226406)){
var node_226408 = cljs.core._nth.call(null,chunk__226400_226405,i__226402_226407);
node_226408.innerHTML = value_226403;

var G__226409 = seq__226399_226404;
var G__226410 = chunk__226400_226405;
var G__226411 = count__226401_226406;
var G__226412 = (i__226402_226407 + (1));
seq__226399_226404 = G__226409;
chunk__226400_226405 = G__226410;
count__226401_226406 = G__226411;
i__226402_226407 = G__226412;
continue;
} else {
var temp__4126__auto___226413 = cljs.core.seq.call(null,seq__226399_226404);
if(temp__4126__auto___226413){
var seq__226399_226414__$1 = temp__4126__auto___226413;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226399_226414__$1)){
var c__4768__auto___226415 = cljs.core.chunk_first.call(null,seq__226399_226414__$1);
var G__226416 = cljs.core.chunk_rest.call(null,seq__226399_226414__$1);
var G__226417 = c__4768__auto___226415;
var G__226418 = cljs.core.count.call(null,c__4768__auto___226415);
var G__226419 = (0);
seq__226399_226404 = G__226416;
chunk__226400_226405 = G__226417;
count__226401_226406 = G__226418;
i__226402_226407 = G__226419;
continue;
} else {
var node_226420 = cljs.core.first.call(null,seq__226399_226414__$1);
node_226420.innerHTML = value_226403;

var G__226421 = cljs.core.next.call(null,seq__226399_226414__$1);
var G__226422 = null;
var G__226423 = (0);
var G__226424 = (0);
seq__226399_226404 = G__226421;
chunk__226400_226405 = G__226422;
count__226401_226406 = G__226423;
i__226402_226407 = G__226424;
continue;
}
} else {
}
}
break;
}
}catch (e226398){if((e226398 instanceof Error)){
var e_226425 = e226398;
domina.replace_children_BANG_.call(null,content,value_226403);
} else {
throw e226398;

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
var seq__226432_226436 = cljs.core.seq.call(null,children);
var chunk__226433_226437 = null;
var count__226434_226438 = (0);
var i__226435_226439 = (0);
while(true){
if((i__226435_226439 < count__226434_226438)){
var child_226440 = cljs.core._nth.call(null,chunk__226433_226437,i__226435_226439);
frag.appendChild(child_226440);

var G__226441 = seq__226432_226436;
var G__226442 = chunk__226433_226437;
var G__226443 = count__226434_226438;
var G__226444 = (i__226435_226439 + (1));
seq__226432_226436 = G__226441;
chunk__226433_226437 = G__226442;
count__226434_226438 = G__226443;
i__226435_226439 = G__226444;
continue;
} else {
var temp__4126__auto___226445 = cljs.core.seq.call(null,seq__226432_226436);
if(temp__4126__auto___226445){
var seq__226432_226446__$1 = temp__4126__auto___226445;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__226432_226446__$1)){
var c__4768__auto___226447 = cljs.core.chunk_first.call(null,seq__226432_226446__$1);
var G__226448 = cljs.core.chunk_rest.call(null,seq__226432_226446__$1);
var G__226449 = c__4768__auto___226447;
var G__226450 = cljs.core.count.call(null,c__4768__auto___226447);
var G__226451 = (0);
seq__226432_226436 = G__226448;
chunk__226433_226437 = G__226449;
count__226434_226438 = G__226450;
i__226435_226439 = G__226451;
continue;
} else {
var child_226452 = cljs.core.first.call(null,seq__226432_226446__$1);
frag.appendChild(child_226452);

var G__226453 = cljs.core.next.call(null,seq__226432_226446__$1);
var G__226454 = null;
var G__226455 = (0);
var G__226456 = (0);
seq__226432_226436 = G__226453;
chunk__226433_226437 = G__226454;
count__226434_226438 = G__226455;
i__226435_226439 = G__226456;
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
return (function (p1__226426_SHARP_,p2__226427_SHARP_){
return f.call(null,p1__226426_SHARP_,p2__226427_SHARP_);
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
if((function (){var G__226458 = list_thing;
if(G__226458){
var bit__4662__auto__ = (G__226458.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__226458.cljs$core$ISeqable$)){
return true;
} else {
if((!G__226458.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__226458);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__226458);
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
if((function (){var G__226459 = content;
if(G__226459){
var bit__4662__auto__ = (G__226459.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__226459.cljs$core$ISeqable$)){
return true;
} else {
if((!G__226459.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__226459);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__226459);
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
if((function (){var G__226460 = content;
if(G__226460){
var bit__4662__auto__ = (G__226460.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__226460.cljs$core$ISeqable$)){
return true;
} else {
if((!G__226460.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__226460);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__226460);
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
