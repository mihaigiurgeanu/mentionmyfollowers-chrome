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
var opt_wrapper_131919 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_131920 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_131921 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_131921,opt_wrapper_131919,table_section_wrapper_131920,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_131919,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_131920,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_131920,cell_wrapper_131921,table_section_wrapper_131920,table_section_wrapper_131920]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__131926 = cljs.core.seq.call(null,tbody);
var chunk__131927 = null;
var count__131928 = (0);
var i__131929 = (0);
while(true){
if((i__131929 < count__131928)){
var child = cljs.core._nth.call(null,chunk__131927,i__131929);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__131930 = seq__131926;
var G__131931 = chunk__131927;
var G__131932 = count__131928;
var G__131933 = (i__131929 + (1));
seq__131926 = G__131930;
chunk__131927 = G__131931;
count__131928 = G__131932;
i__131929 = G__131933;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__131926);
if(temp__4126__auto__){
var seq__131926__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131926__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__131926__$1);
var G__131934 = cljs.core.chunk_rest.call(null,seq__131926__$1);
var G__131935 = c__4768__auto__;
var G__131936 = cljs.core.count.call(null,c__4768__auto__);
var G__131937 = (0);
seq__131926 = G__131934;
chunk__131927 = G__131935;
count__131928 = G__131936;
i__131929 = G__131937;
continue;
} else {
var child = cljs.core.first.call(null,seq__131926__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__131938 = cljs.core.next.call(null,seq__131926__$1);
var G__131939 = null;
var G__131940 = (0);
var G__131941 = (0);
seq__131926 = G__131938;
chunk__131927 = G__131939;
count__131928 = G__131940;
i__131929 = G__131941;
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
var vec__131943 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__131943,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__131943,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__131943,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__131944 = wrapper.lastChild;
var G__131945 = (level - (1));
wrapper = G__131944;
level = G__131945;
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

domina.DomContent = (function (){var obj131947 = {};
return obj131947;
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
var G__131948__i = 0, G__131948__a = new Array(arguments.length -  0);
while (G__131948__i < G__131948__a.length) {G__131948__a[G__131948__i] = arguments[G__131948__i + 0]; ++G__131948__i;}
  mesg = new cljs.core.IndexedSeq(G__131948__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__131949){
var mesg = cljs.core.seq(arglist__131949);
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
var G__131950__i = 0, G__131950__a = new Array(arguments.length -  0);
while (G__131950__i < G__131950__a.length) {G__131950__a[G__131950__i] = arguments[G__131950__i + 0]; ++G__131950__i;}
  mesg = new cljs.core.IndexedSeq(G__131950__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__131951){
var mesg = cljs.core.seq(arglist__131951);
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
var G__131952__i = 0, G__131952__a = new Array(arguments.length -  0);
while (G__131952__i < G__131952__a.length) {G__131952__a[G__131952__i] = arguments[G__131952__i + 0]; ++G__131952__i;}
  contents = new cljs.core.IndexedSeq(G__131952__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__131953){
var contents = cljs.core.seq(arglist__131953);
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
return cljs.core.map.call(null,(function (p1__131954_SHARP_){
return p1__131954_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__131955_SHARP_,p2__131956_SHARP_){
return goog.dom.insertChildAt(p1__131955_SHARP_,p2__131956_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__131958_SHARP_,p2__131957_SHARP_){
return goog.dom.insertSiblingBefore(p2__131957_SHARP_,p1__131958_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__131960_SHARP_,p2__131959_SHARP_){
return goog.dom.insertSiblingAfter(p2__131959_SHARP_,p1__131960_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__131962_SHARP_,p2__131961_SHARP_){
return goog.dom.replaceNode(p2__131961_SHARP_,p1__131962_SHARP_);
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
var seq__131967_131971 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__131968_131972 = null;
var count__131969_131973 = (0);
var i__131970_131974 = (0);
while(true){
if((i__131970_131974 < count__131969_131973)){
var n_131975 = cljs.core._nth.call(null,chunk__131968_131972,i__131970_131974);
goog.style.setStyle(n_131975,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__131976 = seq__131967_131971;
var G__131977 = chunk__131968_131972;
var G__131978 = count__131969_131973;
var G__131979 = (i__131970_131974 + (1));
seq__131967_131971 = G__131976;
chunk__131968_131972 = G__131977;
count__131969_131973 = G__131978;
i__131970_131974 = G__131979;
continue;
} else {
var temp__4126__auto___131980 = cljs.core.seq.call(null,seq__131967_131971);
if(temp__4126__auto___131980){
var seq__131967_131981__$1 = temp__4126__auto___131980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131967_131981__$1)){
var c__4768__auto___131982 = cljs.core.chunk_first.call(null,seq__131967_131981__$1);
var G__131983 = cljs.core.chunk_rest.call(null,seq__131967_131981__$1);
var G__131984 = c__4768__auto___131982;
var G__131985 = cljs.core.count.call(null,c__4768__auto___131982);
var G__131986 = (0);
seq__131967_131971 = G__131983;
chunk__131968_131972 = G__131984;
count__131969_131973 = G__131985;
i__131970_131974 = G__131986;
continue;
} else {
var n_131987 = cljs.core.first.call(null,seq__131967_131981__$1);
goog.style.setStyle(n_131987,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__131988 = cljs.core.next.call(null,seq__131967_131981__$1);
var G__131989 = null;
var G__131990 = (0);
var G__131991 = (0);
seq__131967_131971 = G__131988;
chunk__131968_131972 = G__131989;
count__131969_131973 = G__131990;
i__131970_131974 = G__131991;
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
var G__131992__i = 0, G__131992__a = new Array(arguments.length -  2);
while (G__131992__i < G__131992__a.length) {G__131992__a[G__131992__i] = arguments[G__131992__i + 2]; ++G__131992__i;}
  value = new cljs.core.IndexedSeq(G__131992__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__131993){
var content = cljs.core.first(arglist__131993);
arglist__131993 = cljs.core.next(arglist__131993);
var name = cljs.core.first(arglist__131993);
var value = cljs.core.rest(arglist__131993);
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
var seq__131998_132002 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__131999_132003 = null;
var count__132000_132004 = (0);
var i__132001_132005 = (0);
while(true){
if((i__132001_132005 < count__132000_132004)){
var n_132006 = cljs.core._nth.call(null,chunk__131999_132003,i__132001_132005);
n_132006.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__132007 = seq__131998_132002;
var G__132008 = chunk__131999_132003;
var G__132009 = count__132000_132004;
var G__132010 = (i__132001_132005 + (1));
seq__131998_132002 = G__132007;
chunk__131999_132003 = G__132008;
count__132000_132004 = G__132009;
i__132001_132005 = G__132010;
continue;
} else {
var temp__4126__auto___132011 = cljs.core.seq.call(null,seq__131998_132002);
if(temp__4126__auto___132011){
var seq__131998_132012__$1 = temp__4126__auto___132011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__131998_132012__$1)){
var c__4768__auto___132013 = cljs.core.chunk_first.call(null,seq__131998_132012__$1);
var G__132014 = cljs.core.chunk_rest.call(null,seq__131998_132012__$1);
var G__132015 = c__4768__auto___132013;
var G__132016 = cljs.core.count.call(null,c__4768__auto___132013);
var G__132017 = (0);
seq__131998_132002 = G__132014;
chunk__131999_132003 = G__132015;
count__132000_132004 = G__132016;
i__132001_132005 = G__132017;
continue;
} else {
var n_132018 = cljs.core.first.call(null,seq__131998_132012__$1);
n_132018.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__132019 = cljs.core.next.call(null,seq__131998_132012__$1);
var G__132020 = null;
var G__132021 = (0);
var G__132022 = (0);
seq__131998_132002 = G__132019;
chunk__131999_132003 = G__132020;
count__132000_132004 = G__132021;
i__132001_132005 = G__132022;
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
var G__132023__i = 0, G__132023__a = new Array(arguments.length -  2);
while (G__132023__i < G__132023__a.length) {G__132023__a[G__132023__i] = arguments[G__132023__i + 2]; ++G__132023__i;}
  value = new cljs.core.IndexedSeq(G__132023__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__132024){
var content = cljs.core.first(arglist__132024);
arglist__132024 = cljs.core.next(arglist__132024);
var name = cljs.core.first(arglist__132024);
var value = cljs.core.rest(arglist__132024);
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
var seq__132029_132033 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__132030_132034 = null;
var count__132031_132035 = (0);
var i__132032_132036 = (0);
while(true){
if((i__132032_132036 < count__132031_132035)){
var n_132037 = cljs.core._nth.call(null,chunk__132030_132034,i__132032_132036);
n_132037.removeAttribute(cljs.core.name.call(null,name));

var G__132038 = seq__132029_132033;
var G__132039 = chunk__132030_132034;
var G__132040 = count__132031_132035;
var G__132041 = (i__132032_132036 + (1));
seq__132029_132033 = G__132038;
chunk__132030_132034 = G__132039;
count__132031_132035 = G__132040;
i__132032_132036 = G__132041;
continue;
} else {
var temp__4126__auto___132042 = cljs.core.seq.call(null,seq__132029_132033);
if(temp__4126__auto___132042){
var seq__132029_132043__$1 = temp__4126__auto___132042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132029_132043__$1)){
var c__4768__auto___132044 = cljs.core.chunk_first.call(null,seq__132029_132043__$1);
var G__132045 = cljs.core.chunk_rest.call(null,seq__132029_132043__$1);
var G__132046 = c__4768__auto___132044;
var G__132047 = cljs.core.count.call(null,c__4768__auto___132044);
var G__132048 = (0);
seq__132029_132033 = G__132045;
chunk__132030_132034 = G__132046;
count__132031_132035 = G__132047;
i__132032_132036 = G__132048;
continue;
} else {
var n_132049 = cljs.core.first.call(null,seq__132029_132043__$1);
n_132049.removeAttribute(cljs.core.name.call(null,name));

var G__132050 = cljs.core.next.call(null,seq__132029_132043__$1);
var G__132051 = null;
var G__132052 = (0);
var G__132053 = (0);
seq__132029_132033 = G__132050;
chunk__132030_132034 = G__132051;
count__132031_132035 = G__132052;
i__132032_132036 = G__132053;
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
var vec__132055 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__132055,(0),null);
var v = cljs.core.nth.call(null,vec__132055,(1),null);
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
return (function (p1__132056_SHARP_){
var attr = attrs__$1.item(p1__132056_SHARP_);
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
var seq__132063_132069 = cljs.core.seq.call(null,styles);
var chunk__132064_132070 = null;
var count__132065_132071 = (0);
var i__132066_132072 = (0);
while(true){
if((i__132066_132072 < count__132065_132071)){
var vec__132067_132073 = cljs.core._nth.call(null,chunk__132064_132070,i__132066_132072);
var name_132074 = cljs.core.nth.call(null,vec__132067_132073,(0),null);
var value_132075 = cljs.core.nth.call(null,vec__132067_132073,(1),null);
domina.set_style_BANG_.call(null,content,name_132074,value_132075);

var G__132076 = seq__132063_132069;
var G__132077 = chunk__132064_132070;
var G__132078 = count__132065_132071;
var G__132079 = (i__132066_132072 + (1));
seq__132063_132069 = G__132076;
chunk__132064_132070 = G__132077;
count__132065_132071 = G__132078;
i__132066_132072 = G__132079;
continue;
} else {
var temp__4126__auto___132080 = cljs.core.seq.call(null,seq__132063_132069);
if(temp__4126__auto___132080){
var seq__132063_132081__$1 = temp__4126__auto___132080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132063_132081__$1)){
var c__4768__auto___132082 = cljs.core.chunk_first.call(null,seq__132063_132081__$1);
var G__132083 = cljs.core.chunk_rest.call(null,seq__132063_132081__$1);
var G__132084 = c__4768__auto___132082;
var G__132085 = cljs.core.count.call(null,c__4768__auto___132082);
var G__132086 = (0);
seq__132063_132069 = G__132083;
chunk__132064_132070 = G__132084;
count__132065_132071 = G__132085;
i__132066_132072 = G__132086;
continue;
} else {
var vec__132068_132087 = cljs.core.first.call(null,seq__132063_132081__$1);
var name_132088 = cljs.core.nth.call(null,vec__132068_132087,(0),null);
var value_132089 = cljs.core.nth.call(null,vec__132068_132087,(1),null);
domina.set_style_BANG_.call(null,content,name_132088,value_132089);

var G__132090 = cljs.core.next.call(null,seq__132063_132081__$1);
var G__132091 = null;
var G__132092 = (0);
var G__132093 = (0);
seq__132063_132069 = G__132090;
chunk__132064_132070 = G__132091;
count__132065_132071 = G__132092;
i__132066_132072 = G__132093;
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
var seq__132100_132106 = cljs.core.seq.call(null,attrs);
var chunk__132101_132107 = null;
var count__132102_132108 = (0);
var i__132103_132109 = (0);
while(true){
if((i__132103_132109 < count__132102_132108)){
var vec__132104_132110 = cljs.core._nth.call(null,chunk__132101_132107,i__132103_132109);
var name_132111 = cljs.core.nth.call(null,vec__132104_132110,(0),null);
var value_132112 = cljs.core.nth.call(null,vec__132104_132110,(1),null);
domina.set_attr_BANG_.call(null,content,name_132111,value_132112);

var G__132113 = seq__132100_132106;
var G__132114 = chunk__132101_132107;
var G__132115 = count__132102_132108;
var G__132116 = (i__132103_132109 + (1));
seq__132100_132106 = G__132113;
chunk__132101_132107 = G__132114;
count__132102_132108 = G__132115;
i__132103_132109 = G__132116;
continue;
} else {
var temp__4126__auto___132117 = cljs.core.seq.call(null,seq__132100_132106);
if(temp__4126__auto___132117){
var seq__132100_132118__$1 = temp__4126__auto___132117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132100_132118__$1)){
var c__4768__auto___132119 = cljs.core.chunk_first.call(null,seq__132100_132118__$1);
var G__132120 = cljs.core.chunk_rest.call(null,seq__132100_132118__$1);
var G__132121 = c__4768__auto___132119;
var G__132122 = cljs.core.count.call(null,c__4768__auto___132119);
var G__132123 = (0);
seq__132100_132106 = G__132120;
chunk__132101_132107 = G__132121;
count__132102_132108 = G__132122;
i__132103_132109 = G__132123;
continue;
} else {
var vec__132105_132124 = cljs.core.first.call(null,seq__132100_132118__$1);
var name_132125 = cljs.core.nth.call(null,vec__132105_132124,(0),null);
var value_132126 = cljs.core.nth.call(null,vec__132105_132124,(1),null);
domina.set_attr_BANG_.call(null,content,name_132125,value_132126);

var G__132127 = cljs.core.next.call(null,seq__132100_132118__$1);
var G__132128 = null;
var G__132129 = (0);
var G__132130 = (0);
seq__132100_132106 = G__132127;
chunk__132101_132107 = G__132128;
count__132102_132108 = G__132129;
i__132103_132109 = G__132130;
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
var seq__132135_132139 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__132136_132140 = null;
var count__132137_132141 = (0);
var i__132138_132142 = (0);
while(true){
if((i__132138_132142 < count__132137_132141)){
var node_132143 = cljs.core._nth.call(null,chunk__132136_132140,i__132138_132142);
goog.dom.classes.add(node_132143,class$);

var G__132144 = seq__132135_132139;
var G__132145 = chunk__132136_132140;
var G__132146 = count__132137_132141;
var G__132147 = (i__132138_132142 + (1));
seq__132135_132139 = G__132144;
chunk__132136_132140 = G__132145;
count__132137_132141 = G__132146;
i__132138_132142 = G__132147;
continue;
} else {
var temp__4126__auto___132148 = cljs.core.seq.call(null,seq__132135_132139);
if(temp__4126__auto___132148){
var seq__132135_132149__$1 = temp__4126__auto___132148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132135_132149__$1)){
var c__4768__auto___132150 = cljs.core.chunk_first.call(null,seq__132135_132149__$1);
var G__132151 = cljs.core.chunk_rest.call(null,seq__132135_132149__$1);
var G__132152 = c__4768__auto___132150;
var G__132153 = cljs.core.count.call(null,c__4768__auto___132150);
var G__132154 = (0);
seq__132135_132139 = G__132151;
chunk__132136_132140 = G__132152;
count__132137_132141 = G__132153;
i__132138_132142 = G__132154;
continue;
} else {
var node_132155 = cljs.core.first.call(null,seq__132135_132149__$1);
goog.dom.classes.add(node_132155,class$);

var G__132156 = cljs.core.next.call(null,seq__132135_132149__$1);
var G__132157 = null;
var G__132158 = (0);
var G__132159 = (0);
seq__132135_132139 = G__132156;
chunk__132136_132140 = G__132157;
count__132137_132141 = G__132158;
i__132138_132142 = G__132159;
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
var seq__132164_132168 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__132165_132169 = null;
var count__132166_132170 = (0);
var i__132167_132171 = (0);
while(true){
if((i__132167_132171 < count__132166_132170)){
var node_132172 = cljs.core._nth.call(null,chunk__132165_132169,i__132167_132171);
goog.dom.classes.remove(node_132172,class$);

var G__132173 = seq__132164_132168;
var G__132174 = chunk__132165_132169;
var G__132175 = count__132166_132170;
var G__132176 = (i__132167_132171 + (1));
seq__132164_132168 = G__132173;
chunk__132165_132169 = G__132174;
count__132166_132170 = G__132175;
i__132167_132171 = G__132176;
continue;
} else {
var temp__4126__auto___132177 = cljs.core.seq.call(null,seq__132164_132168);
if(temp__4126__auto___132177){
var seq__132164_132178__$1 = temp__4126__auto___132177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132164_132178__$1)){
var c__4768__auto___132179 = cljs.core.chunk_first.call(null,seq__132164_132178__$1);
var G__132180 = cljs.core.chunk_rest.call(null,seq__132164_132178__$1);
var G__132181 = c__4768__auto___132179;
var G__132182 = cljs.core.count.call(null,c__4768__auto___132179);
var G__132183 = (0);
seq__132164_132168 = G__132180;
chunk__132165_132169 = G__132181;
count__132166_132170 = G__132182;
i__132167_132171 = G__132183;
continue;
} else {
var node_132184 = cljs.core.first.call(null,seq__132164_132178__$1);
goog.dom.classes.remove(node_132184,class$);

var G__132185 = cljs.core.next.call(null,seq__132164_132178__$1);
var G__132186 = null;
var G__132187 = (0);
var G__132188 = (0);
seq__132164_132168 = G__132185;
chunk__132165_132169 = G__132186;
count__132166_132170 = G__132187;
i__132167_132171 = G__132188;
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
var seq__132193_132197 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__132194_132198 = null;
var count__132195_132199 = (0);
var i__132196_132200 = (0);
while(true){
if((i__132196_132200 < count__132195_132199)){
var node_132201 = cljs.core._nth.call(null,chunk__132194_132198,i__132196_132200);
goog.dom.classes.toggle(node_132201,class$);

var G__132202 = seq__132193_132197;
var G__132203 = chunk__132194_132198;
var G__132204 = count__132195_132199;
var G__132205 = (i__132196_132200 + (1));
seq__132193_132197 = G__132202;
chunk__132194_132198 = G__132203;
count__132195_132199 = G__132204;
i__132196_132200 = G__132205;
continue;
} else {
var temp__4126__auto___132206 = cljs.core.seq.call(null,seq__132193_132197);
if(temp__4126__auto___132206){
var seq__132193_132207__$1 = temp__4126__auto___132206;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132193_132207__$1)){
var c__4768__auto___132208 = cljs.core.chunk_first.call(null,seq__132193_132207__$1);
var G__132209 = cljs.core.chunk_rest.call(null,seq__132193_132207__$1);
var G__132210 = c__4768__auto___132208;
var G__132211 = cljs.core.count.call(null,c__4768__auto___132208);
var G__132212 = (0);
seq__132193_132197 = G__132209;
chunk__132194_132198 = G__132210;
count__132195_132199 = G__132211;
i__132196_132200 = G__132212;
continue;
} else {
var node_132213 = cljs.core.first.call(null,seq__132193_132207__$1);
goog.dom.classes.toggle(node_132213,class$);

var G__132214 = cljs.core.next.call(null,seq__132193_132207__$1);
var G__132215 = null;
var G__132216 = (0);
var G__132217 = (0);
seq__132193_132197 = G__132214;
chunk__132194_132198 = G__132215;
count__132195_132199 = G__132216;
i__132196_132200 = G__132217;
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
var classes_132226__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__132222_132227 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__132223_132228 = null;
var count__132224_132229 = (0);
var i__132225_132230 = (0);
while(true){
if((i__132225_132230 < count__132224_132229)){
var node_132231 = cljs.core._nth.call(null,chunk__132223_132228,i__132225_132230);
goog.dom.classes.set(node_132231,classes_132226__$1);

var G__132232 = seq__132222_132227;
var G__132233 = chunk__132223_132228;
var G__132234 = count__132224_132229;
var G__132235 = (i__132225_132230 + (1));
seq__132222_132227 = G__132232;
chunk__132223_132228 = G__132233;
count__132224_132229 = G__132234;
i__132225_132230 = G__132235;
continue;
} else {
var temp__4126__auto___132236 = cljs.core.seq.call(null,seq__132222_132227);
if(temp__4126__auto___132236){
var seq__132222_132237__$1 = temp__4126__auto___132236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132222_132237__$1)){
var c__4768__auto___132238 = cljs.core.chunk_first.call(null,seq__132222_132237__$1);
var G__132239 = cljs.core.chunk_rest.call(null,seq__132222_132237__$1);
var G__132240 = c__4768__auto___132238;
var G__132241 = cljs.core.count.call(null,c__4768__auto___132238);
var G__132242 = (0);
seq__132222_132227 = G__132239;
chunk__132223_132228 = G__132240;
count__132224_132229 = G__132241;
i__132225_132230 = G__132242;
continue;
} else {
var node_132243 = cljs.core.first.call(null,seq__132222_132237__$1);
goog.dom.classes.set(node_132243,classes_132226__$1);

var G__132244 = cljs.core.next.call(null,seq__132222_132237__$1);
var G__132245 = null;
var G__132246 = (0);
var G__132247 = (0);
seq__132222_132227 = G__132244;
chunk__132223_132228 = G__132245;
count__132224_132229 = G__132246;
i__132225_132230 = G__132247;
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
var seq__132252_132256 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__132253_132257 = null;
var count__132254_132258 = (0);
var i__132255_132259 = (0);
while(true){
if((i__132255_132259 < count__132254_132258)){
var node_132260 = cljs.core._nth.call(null,chunk__132253_132257,i__132255_132259);
goog.dom.setTextContent(node_132260,value);

var G__132261 = seq__132252_132256;
var G__132262 = chunk__132253_132257;
var G__132263 = count__132254_132258;
var G__132264 = (i__132255_132259 + (1));
seq__132252_132256 = G__132261;
chunk__132253_132257 = G__132262;
count__132254_132258 = G__132263;
i__132255_132259 = G__132264;
continue;
} else {
var temp__4126__auto___132265 = cljs.core.seq.call(null,seq__132252_132256);
if(temp__4126__auto___132265){
var seq__132252_132266__$1 = temp__4126__auto___132265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132252_132266__$1)){
var c__4768__auto___132267 = cljs.core.chunk_first.call(null,seq__132252_132266__$1);
var G__132268 = cljs.core.chunk_rest.call(null,seq__132252_132266__$1);
var G__132269 = c__4768__auto___132267;
var G__132270 = cljs.core.count.call(null,c__4768__auto___132267);
var G__132271 = (0);
seq__132252_132256 = G__132268;
chunk__132253_132257 = G__132269;
count__132254_132258 = G__132270;
i__132255_132259 = G__132271;
continue;
} else {
var node_132272 = cljs.core.first.call(null,seq__132252_132266__$1);
goog.dom.setTextContent(node_132272,value);

var G__132273 = cljs.core.next.call(null,seq__132252_132266__$1);
var G__132274 = null;
var G__132275 = (0);
var G__132276 = (0);
seq__132252_132256 = G__132273;
chunk__132253_132257 = G__132274;
count__132254_132258 = G__132275;
i__132255_132259 = G__132276;
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
var seq__132281_132285 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__132282_132286 = null;
var count__132283_132287 = (0);
var i__132284_132288 = (0);
while(true){
if((i__132284_132288 < count__132283_132287)){
var node_132289 = cljs.core._nth.call(null,chunk__132282_132286,i__132284_132288);
goog.dom.forms.setValue(node_132289,value);

var G__132290 = seq__132281_132285;
var G__132291 = chunk__132282_132286;
var G__132292 = count__132283_132287;
var G__132293 = (i__132284_132288 + (1));
seq__132281_132285 = G__132290;
chunk__132282_132286 = G__132291;
count__132283_132287 = G__132292;
i__132284_132288 = G__132293;
continue;
} else {
var temp__4126__auto___132294 = cljs.core.seq.call(null,seq__132281_132285);
if(temp__4126__auto___132294){
var seq__132281_132295__$1 = temp__4126__auto___132294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132281_132295__$1)){
var c__4768__auto___132296 = cljs.core.chunk_first.call(null,seq__132281_132295__$1);
var G__132297 = cljs.core.chunk_rest.call(null,seq__132281_132295__$1);
var G__132298 = c__4768__auto___132296;
var G__132299 = cljs.core.count.call(null,c__4768__auto___132296);
var G__132300 = (0);
seq__132281_132285 = G__132297;
chunk__132282_132286 = G__132298;
count__132283_132287 = G__132299;
i__132284_132288 = G__132300;
continue;
} else {
var node_132301 = cljs.core.first.call(null,seq__132281_132295__$1);
goog.dom.forms.setValue(node_132301,value);

var G__132302 = cljs.core.next.call(null,seq__132281_132295__$1);
var G__132303 = null;
var G__132304 = (0);
var G__132305 = (0);
seq__132281_132285 = G__132302;
chunk__132282_132286 = G__132303;
count__132283_132287 = G__132304;
i__132284_132288 = G__132305;
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
var value_132316 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__132312_132317 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__132313_132318 = null;
var count__132314_132319 = (0);
var i__132315_132320 = (0);
while(true){
if((i__132315_132320 < count__132314_132319)){
var node_132321 = cljs.core._nth.call(null,chunk__132313_132318,i__132315_132320);
node_132321.innerHTML = value_132316;

var G__132322 = seq__132312_132317;
var G__132323 = chunk__132313_132318;
var G__132324 = count__132314_132319;
var G__132325 = (i__132315_132320 + (1));
seq__132312_132317 = G__132322;
chunk__132313_132318 = G__132323;
count__132314_132319 = G__132324;
i__132315_132320 = G__132325;
continue;
} else {
var temp__4126__auto___132326 = cljs.core.seq.call(null,seq__132312_132317);
if(temp__4126__auto___132326){
var seq__132312_132327__$1 = temp__4126__auto___132326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132312_132327__$1)){
var c__4768__auto___132328 = cljs.core.chunk_first.call(null,seq__132312_132327__$1);
var G__132329 = cljs.core.chunk_rest.call(null,seq__132312_132327__$1);
var G__132330 = c__4768__auto___132328;
var G__132331 = cljs.core.count.call(null,c__4768__auto___132328);
var G__132332 = (0);
seq__132312_132317 = G__132329;
chunk__132313_132318 = G__132330;
count__132314_132319 = G__132331;
i__132315_132320 = G__132332;
continue;
} else {
var node_132333 = cljs.core.first.call(null,seq__132312_132327__$1);
node_132333.innerHTML = value_132316;

var G__132334 = cljs.core.next.call(null,seq__132312_132327__$1);
var G__132335 = null;
var G__132336 = (0);
var G__132337 = (0);
seq__132312_132317 = G__132334;
chunk__132313_132318 = G__132335;
count__132314_132319 = G__132336;
i__132315_132320 = G__132337;
continue;
}
} else {
}
}
break;
}
}catch (e132311){if((e132311 instanceof Error)){
var e_132338 = e132311;
domina.replace_children_BANG_.call(null,content,value_132316);
} else {
throw e132311;

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
var seq__132345_132349 = cljs.core.seq.call(null,children);
var chunk__132346_132350 = null;
var count__132347_132351 = (0);
var i__132348_132352 = (0);
while(true){
if((i__132348_132352 < count__132347_132351)){
var child_132353 = cljs.core._nth.call(null,chunk__132346_132350,i__132348_132352);
frag.appendChild(child_132353);

var G__132354 = seq__132345_132349;
var G__132355 = chunk__132346_132350;
var G__132356 = count__132347_132351;
var G__132357 = (i__132348_132352 + (1));
seq__132345_132349 = G__132354;
chunk__132346_132350 = G__132355;
count__132347_132351 = G__132356;
i__132348_132352 = G__132357;
continue;
} else {
var temp__4126__auto___132358 = cljs.core.seq.call(null,seq__132345_132349);
if(temp__4126__auto___132358){
var seq__132345_132359__$1 = temp__4126__auto___132358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__132345_132359__$1)){
var c__4768__auto___132360 = cljs.core.chunk_first.call(null,seq__132345_132359__$1);
var G__132361 = cljs.core.chunk_rest.call(null,seq__132345_132359__$1);
var G__132362 = c__4768__auto___132360;
var G__132363 = cljs.core.count.call(null,c__4768__auto___132360);
var G__132364 = (0);
seq__132345_132349 = G__132361;
chunk__132346_132350 = G__132362;
count__132347_132351 = G__132363;
i__132348_132352 = G__132364;
continue;
} else {
var child_132365 = cljs.core.first.call(null,seq__132345_132359__$1);
frag.appendChild(child_132365);

var G__132366 = cljs.core.next.call(null,seq__132345_132359__$1);
var G__132367 = null;
var G__132368 = (0);
var G__132369 = (0);
seq__132345_132349 = G__132366;
chunk__132346_132350 = G__132367;
count__132347_132351 = G__132368;
i__132348_132352 = G__132369;
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
return (function (p1__132339_SHARP_,p2__132340_SHARP_){
return f.call(null,p1__132339_SHARP_,p2__132340_SHARP_);
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
if((function (){var G__132371 = list_thing;
if(G__132371){
var bit__4662__auto__ = (G__132371.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__132371.cljs$core$ISeqable$)){
return true;
} else {
if((!G__132371.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__132371);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__132371);
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
if((function (){var G__132372 = content;
if(G__132372){
var bit__4662__auto__ = (G__132372.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__132372.cljs$core$ISeqable$)){
return true;
} else {
if((!G__132372.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__132372);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__132372);
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
if((function (){var G__132373 = content;
if(G__132373){
var bit__4662__auto__ = (G__132373.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__132373.cljs$core$ISeqable$)){
return true;
} else {
if((!G__132373.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__132373);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__132373);
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
