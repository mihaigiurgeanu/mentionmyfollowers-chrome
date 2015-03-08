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
var opt_wrapper_13012 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_13013 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_13014 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_13014,opt_wrapper_13012,table_section_wrapper_13013,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_13012,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_13013,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_13013,cell_wrapper_13014,table_section_wrapper_13013,table_section_wrapper_13013]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__13019 = cljs.core.seq.call(null,tbody);
var chunk__13020 = null;
var count__13021 = (0);
var i__13022 = (0);
while(true){
if((i__13022 < count__13021)){
var child = cljs.core._nth.call(null,chunk__13020,i__13022);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__13023 = seq__13019;
var G__13024 = chunk__13020;
var G__13025 = count__13021;
var G__13026 = (i__13022 + (1));
seq__13019 = G__13023;
chunk__13020 = G__13024;
count__13021 = G__13025;
i__13022 = G__13026;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__13019);
if(temp__4126__auto__){
var seq__13019__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13019__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__13019__$1);
var G__13027 = cljs.core.chunk_rest.call(null,seq__13019__$1);
var G__13028 = c__4768__auto__;
var G__13029 = cljs.core.count.call(null,c__4768__auto__);
var G__13030 = (0);
seq__13019 = G__13027;
chunk__13020 = G__13028;
count__13021 = G__13029;
i__13022 = G__13030;
continue;
} else {
var child = cljs.core.first.call(null,seq__13019__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__13031 = cljs.core.next.call(null,seq__13019__$1);
var G__13032 = null;
var G__13033 = (0);
var G__13034 = (0);
seq__13019 = G__13031;
chunk__13020 = G__13032;
count__13021 = G__13033;
i__13022 = G__13034;
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
var vec__13036 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__13036,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__13036,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__13036,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__13037 = wrapper.lastChild;
var G__13038 = (level - (1));
wrapper = G__13037;
level = G__13038;
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

domina.DomContent = (function (){var obj13040 = {};
return obj13040;
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
var G__13041__i = 0, G__13041__a = new Array(arguments.length -  0);
while (G__13041__i < G__13041__a.length) {G__13041__a[G__13041__i] = arguments[G__13041__i + 0]; ++G__13041__i;}
  mesg = new cljs.core.IndexedSeq(G__13041__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__13042){
var mesg = cljs.core.seq(arglist__13042);
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
var G__13043__i = 0, G__13043__a = new Array(arguments.length -  0);
while (G__13043__i < G__13043__a.length) {G__13043__a[G__13043__i] = arguments[G__13043__i + 0]; ++G__13043__i;}
  mesg = new cljs.core.IndexedSeq(G__13043__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__13044){
var mesg = cljs.core.seq(arglist__13044);
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
var G__13045__i = 0, G__13045__a = new Array(arguments.length -  0);
while (G__13045__i < G__13045__a.length) {G__13045__a[G__13045__i] = arguments[G__13045__i + 0]; ++G__13045__i;}
  contents = new cljs.core.IndexedSeq(G__13045__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__13046){
var contents = cljs.core.seq(arglist__13046);
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
return cljs.core.map.call(null,(function (p1__13047_SHARP_){
return p1__13047_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__13048_SHARP_,p2__13049_SHARP_){
return goog.dom.insertChildAt(p1__13048_SHARP_,p2__13049_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__13051_SHARP_,p2__13050_SHARP_){
return goog.dom.insertSiblingBefore(p2__13050_SHARP_,p1__13051_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13053_SHARP_,p2__13052_SHARP_){
return goog.dom.insertSiblingAfter(p2__13052_SHARP_,p1__13053_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__13055_SHARP_,p2__13054_SHARP_){
return goog.dom.replaceNode(p2__13054_SHARP_,p1__13055_SHARP_);
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
var seq__13060_13064 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13061_13065 = null;
var count__13062_13066 = (0);
var i__13063_13067 = (0);
while(true){
if((i__13063_13067 < count__13062_13066)){
var n_13068 = cljs.core._nth.call(null,chunk__13061_13065,i__13063_13067);
goog.style.setStyle(n_13068,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13069 = seq__13060_13064;
var G__13070 = chunk__13061_13065;
var G__13071 = count__13062_13066;
var G__13072 = (i__13063_13067 + (1));
seq__13060_13064 = G__13069;
chunk__13061_13065 = G__13070;
count__13062_13066 = G__13071;
i__13063_13067 = G__13072;
continue;
} else {
var temp__4126__auto___13073 = cljs.core.seq.call(null,seq__13060_13064);
if(temp__4126__auto___13073){
var seq__13060_13074__$1 = temp__4126__auto___13073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13060_13074__$1)){
var c__4768__auto___13075 = cljs.core.chunk_first.call(null,seq__13060_13074__$1);
var G__13076 = cljs.core.chunk_rest.call(null,seq__13060_13074__$1);
var G__13077 = c__4768__auto___13075;
var G__13078 = cljs.core.count.call(null,c__4768__auto___13075);
var G__13079 = (0);
seq__13060_13064 = G__13076;
chunk__13061_13065 = G__13077;
count__13062_13066 = G__13078;
i__13063_13067 = G__13079;
continue;
} else {
var n_13080 = cljs.core.first.call(null,seq__13060_13074__$1);
goog.style.setStyle(n_13080,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13081 = cljs.core.next.call(null,seq__13060_13074__$1);
var G__13082 = null;
var G__13083 = (0);
var G__13084 = (0);
seq__13060_13064 = G__13081;
chunk__13061_13065 = G__13082;
count__13062_13066 = G__13083;
i__13063_13067 = G__13084;
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
var G__13085__i = 0, G__13085__a = new Array(arguments.length -  2);
while (G__13085__i < G__13085__a.length) {G__13085__a[G__13085__i] = arguments[G__13085__i + 2]; ++G__13085__i;}
  value = new cljs.core.IndexedSeq(G__13085__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__13086){
var content = cljs.core.first(arglist__13086);
arglist__13086 = cljs.core.next(arglist__13086);
var name = cljs.core.first(arglist__13086);
var value = cljs.core.rest(arglist__13086);
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
var seq__13091_13095 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13092_13096 = null;
var count__13093_13097 = (0);
var i__13094_13098 = (0);
while(true){
if((i__13094_13098 < count__13093_13097)){
var n_13099 = cljs.core._nth.call(null,chunk__13092_13096,i__13094_13098);
n_13099.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13100 = seq__13091_13095;
var G__13101 = chunk__13092_13096;
var G__13102 = count__13093_13097;
var G__13103 = (i__13094_13098 + (1));
seq__13091_13095 = G__13100;
chunk__13092_13096 = G__13101;
count__13093_13097 = G__13102;
i__13094_13098 = G__13103;
continue;
} else {
var temp__4126__auto___13104 = cljs.core.seq.call(null,seq__13091_13095);
if(temp__4126__auto___13104){
var seq__13091_13105__$1 = temp__4126__auto___13104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13091_13105__$1)){
var c__4768__auto___13106 = cljs.core.chunk_first.call(null,seq__13091_13105__$1);
var G__13107 = cljs.core.chunk_rest.call(null,seq__13091_13105__$1);
var G__13108 = c__4768__auto___13106;
var G__13109 = cljs.core.count.call(null,c__4768__auto___13106);
var G__13110 = (0);
seq__13091_13095 = G__13107;
chunk__13092_13096 = G__13108;
count__13093_13097 = G__13109;
i__13094_13098 = G__13110;
continue;
} else {
var n_13111 = cljs.core.first.call(null,seq__13091_13105__$1);
n_13111.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__13112 = cljs.core.next.call(null,seq__13091_13105__$1);
var G__13113 = null;
var G__13114 = (0);
var G__13115 = (0);
seq__13091_13095 = G__13112;
chunk__13092_13096 = G__13113;
count__13093_13097 = G__13114;
i__13094_13098 = G__13115;
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
var G__13116__i = 0, G__13116__a = new Array(arguments.length -  2);
while (G__13116__i < G__13116__a.length) {G__13116__a[G__13116__i] = arguments[G__13116__i + 2]; ++G__13116__i;}
  value = new cljs.core.IndexedSeq(G__13116__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__13117){
var content = cljs.core.first(arglist__13117);
arglist__13117 = cljs.core.next(arglist__13117);
var name = cljs.core.first(arglist__13117);
var value = cljs.core.rest(arglist__13117);
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
var seq__13122_13126 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13123_13127 = null;
var count__13124_13128 = (0);
var i__13125_13129 = (0);
while(true){
if((i__13125_13129 < count__13124_13128)){
var n_13130 = cljs.core._nth.call(null,chunk__13123_13127,i__13125_13129);
n_13130.removeAttribute(cljs.core.name.call(null,name));

var G__13131 = seq__13122_13126;
var G__13132 = chunk__13123_13127;
var G__13133 = count__13124_13128;
var G__13134 = (i__13125_13129 + (1));
seq__13122_13126 = G__13131;
chunk__13123_13127 = G__13132;
count__13124_13128 = G__13133;
i__13125_13129 = G__13134;
continue;
} else {
var temp__4126__auto___13135 = cljs.core.seq.call(null,seq__13122_13126);
if(temp__4126__auto___13135){
var seq__13122_13136__$1 = temp__4126__auto___13135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13122_13136__$1)){
var c__4768__auto___13137 = cljs.core.chunk_first.call(null,seq__13122_13136__$1);
var G__13138 = cljs.core.chunk_rest.call(null,seq__13122_13136__$1);
var G__13139 = c__4768__auto___13137;
var G__13140 = cljs.core.count.call(null,c__4768__auto___13137);
var G__13141 = (0);
seq__13122_13126 = G__13138;
chunk__13123_13127 = G__13139;
count__13124_13128 = G__13140;
i__13125_13129 = G__13141;
continue;
} else {
var n_13142 = cljs.core.first.call(null,seq__13122_13136__$1);
n_13142.removeAttribute(cljs.core.name.call(null,name));

var G__13143 = cljs.core.next.call(null,seq__13122_13136__$1);
var G__13144 = null;
var G__13145 = (0);
var G__13146 = (0);
seq__13122_13126 = G__13143;
chunk__13123_13127 = G__13144;
count__13124_13128 = G__13145;
i__13125_13129 = G__13146;
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
var vec__13148 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__13148,(0),null);
var v = cljs.core.nth.call(null,vec__13148,(1),null);
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
return (function (p1__13149_SHARP_){
var attr = attrs__$1.item(p1__13149_SHARP_);
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
var seq__13156_13162 = cljs.core.seq.call(null,styles);
var chunk__13157_13163 = null;
var count__13158_13164 = (0);
var i__13159_13165 = (0);
while(true){
if((i__13159_13165 < count__13158_13164)){
var vec__13160_13166 = cljs.core._nth.call(null,chunk__13157_13163,i__13159_13165);
var name_13167 = cljs.core.nth.call(null,vec__13160_13166,(0),null);
var value_13168 = cljs.core.nth.call(null,vec__13160_13166,(1),null);
domina.set_style_BANG_.call(null,content,name_13167,value_13168);

var G__13169 = seq__13156_13162;
var G__13170 = chunk__13157_13163;
var G__13171 = count__13158_13164;
var G__13172 = (i__13159_13165 + (1));
seq__13156_13162 = G__13169;
chunk__13157_13163 = G__13170;
count__13158_13164 = G__13171;
i__13159_13165 = G__13172;
continue;
} else {
var temp__4126__auto___13173 = cljs.core.seq.call(null,seq__13156_13162);
if(temp__4126__auto___13173){
var seq__13156_13174__$1 = temp__4126__auto___13173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13156_13174__$1)){
var c__4768__auto___13175 = cljs.core.chunk_first.call(null,seq__13156_13174__$1);
var G__13176 = cljs.core.chunk_rest.call(null,seq__13156_13174__$1);
var G__13177 = c__4768__auto___13175;
var G__13178 = cljs.core.count.call(null,c__4768__auto___13175);
var G__13179 = (0);
seq__13156_13162 = G__13176;
chunk__13157_13163 = G__13177;
count__13158_13164 = G__13178;
i__13159_13165 = G__13179;
continue;
} else {
var vec__13161_13180 = cljs.core.first.call(null,seq__13156_13174__$1);
var name_13181 = cljs.core.nth.call(null,vec__13161_13180,(0),null);
var value_13182 = cljs.core.nth.call(null,vec__13161_13180,(1),null);
domina.set_style_BANG_.call(null,content,name_13181,value_13182);

var G__13183 = cljs.core.next.call(null,seq__13156_13174__$1);
var G__13184 = null;
var G__13185 = (0);
var G__13186 = (0);
seq__13156_13162 = G__13183;
chunk__13157_13163 = G__13184;
count__13158_13164 = G__13185;
i__13159_13165 = G__13186;
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
var seq__13193_13199 = cljs.core.seq.call(null,attrs);
var chunk__13194_13200 = null;
var count__13195_13201 = (0);
var i__13196_13202 = (0);
while(true){
if((i__13196_13202 < count__13195_13201)){
var vec__13197_13203 = cljs.core._nth.call(null,chunk__13194_13200,i__13196_13202);
var name_13204 = cljs.core.nth.call(null,vec__13197_13203,(0),null);
var value_13205 = cljs.core.nth.call(null,vec__13197_13203,(1),null);
domina.set_attr_BANG_.call(null,content,name_13204,value_13205);

var G__13206 = seq__13193_13199;
var G__13207 = chunk__13194_13200;
var G__13208 = count__13195_13201;
var G__13209 = (i__13196_13202 + (1));
seq__13193_13199 = G__13206;
chunk__13194_13200 = G__13207;
count__13195_13201 = G__13208;
i__13196_13202 = G__13209;
continue;
} else {
var temp__4126__auto___13210 = cljs.core.seq.call(null,seq__13193_13199);
if(temp__4126__auto___13210){
var seq__13193_13211__$1 = temp__4126__auto___13210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13193_13211__$1)){
var c__4768__auto___13212 = cljs.core.chunk_first.call(null,seq__13193_13211__$1);
var G__13213 = cljs.core.chunk_rest.call(null,seq__13193_13211__$1);
var G__13214 = c__4768__auto___13212;
var G__13215 = cljs.core.count.call(null,c__4768__auto___13212);
var G__13216 = (0);
seq__13193_13199 = G__13213;
chunk__13194_13200 = G__13214;
count__13195_13201 = G__13215;
i__13196_13202 = G__13216;
continue;
} else {
var vec__13198_13217 = cljs.core.first.call(null,seq__13193_13211__$1);
var name_13218 = cljs.core.nth.call(null,vec__13198_13217,(0),null);
var value_13219 = cljs.core.nth.call(null,vec__13198_13217,(1),null);
domina.set_attr_BANG_.call(null,content,name_13218,value_13219);

var G__13220 = cljs.core.next.call(null,seq__13193_13211__$1);
var G__13221 = null;
var G__13222 = (0);
var G__13223 = (0);
seq__13193_13199 = G__13220;
chunk__13194_13200 = G__13221;
count__13195_13201 = G__13222;
i__13196_13202 = G__13223;
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
var seq__13228_13232 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13229_13233 = null;
var count__13230_13234 = (0);
var i__13231_13235 = (0);
while(true){
if((i__13231_13235 < count__13230_13234)){
var node_13236 = cljs.core._nth.call(null,chunk__13229_13233,i__13231_13235);
goog.dom.classes.add(node_13236,class$);

var G__13237 = seq__13228_13232;
var G__13238 = chunk__13229_13233;
var G__13239 = count__13230_13234;
var G__13240 = (i__13231_13235 + (1));
seq__13228_13232 = G__13237;
chunk__13229_13233 = G__13238;
count__13230_13234 = G__13239;
i__13231_13235 = G__13240;
continue;
} else {
var temp__4126__auto___13241 = cljs.core.seq.call(null,seq__13228_13232);
if(temp__4126__auto___13241){
var seq__13228_13242__$1 = temp__4126__auto___13241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13228_13242__$1)){
var c__4768__auto___13243 = cljs.core.chunk_first.call(null,seq__13228_13242__$1);
var G__13244 = cljs.core.chunk_rest.call(null,seq__13228_13242__$1);
var G__13245 = c__4768__auto___13243;
var G__13246 = cljs.core.count.call(null,c__4768__auto___13243);
var G__13247 = (0);
seq__13228_13232 = G__13244;
chunk__13229_13233 = G__13245;
count__13230_13234 = G__13246;
i__13231_13235 = G__13247;
continue;
} else {
var node_13248 = cljs.core.first.call(null,seq__13228_13242__$1);
goog.dom.classes.add(node_13248,class$);

var G__13249 = cljs.core.next.call(null,seq__13228_13242__$1);
var G__13250 = null;
var G__13251 = (0);
var G__13252 = (0);
seq__13228_13232 = G__13249;
chunk__13229_13233 = G__13250;
count__13230_13234 = G__13251;
i__13231_13235 = G__13252;
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
var seq__13257_13261 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13258_13262 = null;
var count__13259_13263 = (0);
var i__13260_13264 = (0);
while(true){
if((i__13260_13264 < count__13259_13263)){
var node_13265 = cljs.core._nth.call(null,chunk__13258_13262,i__13260_13264);
goog.dom.classes.remove(node_13265,class$);

var G__13266 = seq__13257_13261;
var G__13267 = chunk__13258_13262;
var G__13268 = count__13259_13263;
var G__13269 = (i__13260_13264 + (1));
seq__13257_13261 = G__13266;
chunk__13258_13262 = G__13267;
count__13259_13263 = G__13268;
i__13260_13264 = G__13269;
continue;
} else {
var temp__4126__auto___13270 = cljs.core.seq.call(null,seq__13257_13261);
if(temp__4126__auto___13270){
var seq__13257_13271__$1 = temp__4126__auto___13270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13257_13271__$1)){
var c__4768__auto___13272 = cljs.core.chunk_first.call(null,seq__13257_13271__$1);
var G__13273 = cljs.core.chunk_rest.call(null,seq__13257_13271__$1);
var G__13274 = c__4768__auto___13272;
var G__13275 = cljs.core.count.call(null,c__4768__auto___13272);
var G__13276 = (0);
seq__13257_13261 = G__13273;
chunk__13258_13262 = G__13274;
count__13259_13263 = G__13275;
i__13260_13264 = G__13276;
continue;
} else {
var node_13277 = cljs.core.first.call(null,seq__13257_13271__$1);
goog.dom.classes.remove(node_13277,class$);

var G__13278 = cljs.core.next.call(null,seq__13257_13271__$1);
var G__13279 = null;
var G__13280 = (0);
var G__13281 = (0);
seq__13257_13261 = G__13278;
chunk__13258_13262 = G__13279;
count__13259_13263 = G__13280;
i__13260_13264 = G__13281;
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
var seq__13286_13290 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13287_13291 = null;
var count__13288_13292 = (0);
var i__13289_13293 = (0);
while(true){
if((i__13289_13293 < count__13288_13292)){
var node_13294 = cljs.core._nth.call(null,chunk__13287_13291,i__13289_13293);
goog.dom.classes.toggle(node_13294,class$);

var G__13295 = seq__13286_13290;
var G__13296 = chunk__13287_13291;
var G__13297 = count__13288_13292;
var G__13298 = (i__13289_13293 + (1));
seq__13286_13290 = G__13295;
chunk__13287_13291 = G__13296;
count__13288_13292 = G__13297;
i__13289_13293 = G__13298;
continue;
} else {
var temp__4126__auto___13299 = cljs.core.seq.call(null,seq__13286_13290);
if(temp__4126__auto___13299){
var seq__13286_13300__$1 = temp__4126__auto___13299;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13286_13300__$1)){
var c__4768__auto___13301 = cljs.core.chunk_first.call(null,seq__13286_13300__$1);
var G__13302 = cljs.core.chunk_rest.call(null,seq__13286_13300__$1);
var G__13303 = c__4768__auto___13301;
var G__13304 = cljs.core.count.call(null,c__4768__auto___13301);
var G__13305 = (0);
seq__13286_13290 = G__13302;
chunk__13287_13291 = G__13303;
count__13288_13292 = G__13304;
i__13289_13293 = G__13305;
continue;
} else {
var node_13306 = cljs.core.first.call(null,seq__13286_13300__$1);
goog.dom.classes.toggle(node_13306,class$);

var G__13307 = cljs.core.next.call(null,seq__13286_13300__$1);
var G__13308 = null;
var G__13309 = (0);
var G__13310 = (0);
seq__13286_13290 = G__13307;
chunk__13287_13291 = G__13308;
count__13288_13292 = G__13309;
i__13289_13293 = G__13310;
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
var classes_13319__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__13315_13320 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13316_13321 = null;
var count__13317_13322 = (0);
var i__13318_13323 = (0);
while(true){
if((i__13318_13323 < count__13317_13322)){
var node_13324 = cljs.core._nth.call(null,chunk__13316_13321,i__13318_13323);
goog.dom.classes.set(node_13324,classes_13319__$1);

var G__13325 = seq__13315_13320;
var G__13326 = chunk__13316_13321;
var G__13327 = count__13317_13322;
var G__13328 = (i__13318_13323 + (1));
seq__13315_13320 = G__13325;
chunk__13316_13321 = G__13326;
count__13317_13322 = G__13327;
i__13318_13323 = G__13328;
continue;
} else {
var temp__4126__auto___13329 = cljs.core.seq.call(null,seq__13315_13320);
if(temp__4126__auto___13329){
var seq__13315_13330__$1 = temp__4126__auto___13329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13315_13330__$1)){
var c__4768__auto___13331 = cljs.core.chunk_first.call(null,seq__13315_13330__$1);
var G__13332 = cljs.core.chunk_rest.call(null,seq__13315_13330__$1);
var G__13333 = c__4768__auto___13331;
var G__13334 = cljs.core.count.call(null,c__4768__auto___13331);
var G__13335 = (0);
seq__13315_13320 = G__13332;
chunk__13316_13321 = G__13333;
count__13317_13322 = G__13334;
i__13318_13323 = G__13335;
continue;
} else {
var node_13336 = cljs.core.first.call(null,seq__13315_13330__$1);
goog.dom.classes.set(node_13336,classes_13319__$1);

var G__13337 = cljs.core.next.call(null,seq__13315_13330__$1);
var G__13338 = null;
var G__13339 = (0);
var G__13340 = (0);
seq__13315_13320 = G__13337;
chunk__13316_13321 = G__13338;
count__13317_13322 = G__13339;
i__13318_13323 = G__13340;
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
var seq__13345_13349 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13346_13350 = null;
var count__13347_13351 = (0);
var i__13348_13352 = (0);
while(true){
if((i__13348_13352 < count__13347_13351)){
var node_13353 = cljs.core._nth.call(null,chunk__13346_13350,i__13348_13352);
goog.dom.setTextContent(node_13353,value);

var G__13354 = seq__13345_13349;
var G__13355 = chunk__13346_13350;
var G__13356 = count__13347_13351;
var G__13357 = (i__13348_13352 + (1));
seq__13345_13349 = G__13354;
chunk__13346_13350 = G__13355;
count__13347_13351 = G__13356;
i__13348_13352 = G__13357;
continue;
} else {
var temp__4126__auto___13358 = cljs.core.seq.call(null,seq__13345_13349);
if(temp__4126__auto___13358){
var seq__13345_13359__$1 = temp__4126__auto___13358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13345_13359__$1)){
var c__4768__auto___13360 = cljs.core.chunk_first.call(null,seq__13345_13359__$1);
var G__13361 = cljs.core.chunk_rest.call(null,seq__13345_13359__$1);
var G__13362 = c__4768__auto___13360;
var G__13363 = cljs.core.count.call(null,c__4768__auto___13360);
var G__13364 = (0);
seq__13345_13349 = G__13361;
chunk__13346_13350 = G__13362;
count__13347_13351 = G__13363;
i__13348_13352 = G__13364;
continue;
} else {
var node_13365 = cljs.core.first.call(null,seq__13345_13359__$1);
goog.dom.setTextContent(node_13365,value);

var G__13366 = cljs.core.next.call(null,seq__13345_13359__$1);
var G__13367 = null;
var G__13368 = (0);
var G__13369 = (0);
seq__13345_13349 = G__13366;
chunk__13346_13350 = G__13367;
count__13347_13351 = G__13368;
i__13348_13352 = G__13369;
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
var seq__13374_13378 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13375_13379 = null;
var count__13376_13380 = (0);
var i__13377_13381 = (0);
while(true){
if((i__13377_13381 < count__13376_13380)){
var node_13382 = cljs.core._nth.call(null,chunk__13375_13379,i__13377_13381);
goog.dom.forms.setValue(node_13382,value);

var G__13383 = seq__13374_13378;
var G__13384 = chunk__13375_13379;
var G__13385 = count__13376_13380;
var G__13386 = (i__13377_13381 + (1));
seq__13374_13378 = G__13383;
chunk__13375_13379 = G__13384;
count__13376_13380 = G__13385;
i__13377_13381 = G__13386;
continue;
} else {
var temp__4126__auto___13387 = cljs.core.seq.call(null,seq__13374_13378);
if(temp__4126__auto___13387){
var seq__13374_13388__$1 = temp__4126__auto___13387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13374_13388__$1)){
var c__4768__auto___13389 = cljs.core.chunk_first.call(null,seq__13374_13388__$1);
var G__13390 = cljs.core.chunk_rest.call(null,seq__13374_13388__$1);
var G__13391 = c__4768__auto___13389;
var G__13392 = cljs.core.count.call(null,c__4768__auto___13389);
var G__13393 = (0);
seq__13374_13378 = G__13390;
chunk__13375_13379 = G__13391;
count__13376_13380 = G__13392;
i__13377_13381 = G__13393;
continue;
} else {
var node_13394 = cljs.core.first.call(null,seq__13374_13388__$1);
goog.dom.forms.setValue(node_13394,value);

var G__13395 = cljs.core.next.call(null,seq__13374_13388__$1);
var G__13396 = null;
var G__13397 = (0);
var G__13398 = (0);
seq__13374_13378 = G__13395;
chunk__13375_13379 = G__13396;
count__13376_13380 = G__13397;
i__13377_13381 = G__13398;
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
var value_13409 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__13405_13410 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__13406_13411 = null;
var count__13407_13412 = (0);
var i__13408_13413 = (0);
while(true){
if((i__13408_13413 < count__13407_13412)){
var node_13414 = cljs.core._nth.call(null,chunk__13406_13411,i__13408_13413);
node_13414.innerHTML = value_13409;

var G__13415 = seq__13405_13410;
var G__13416 = chunk__13406_13411;
var G__13417 = count__13407_13412;
var G__13418 = (i__13408_13413 + (1));
seq__13405_13410 = G__13415;
chunk__13406_13411 = G__13416;
count__13407_13412 = G__13417;
i__13408_13413 = G__13418;
continue;
} else {
var temp__4126__auto___13419 = cljs.core.seq.call(null,seq__13405_13410);
if(temp__4126__auto___13419){
var seq__13405_13420__$1 = temp__4126__auto___13419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13405_13420__$1)){
var c__4768__auto___13421 = cljs.core.chunk_first.call(null,seq__13405_13420__$1);
var G__13422 = cljs.core.chunk_rest.call(null,seq__13405_13420__$1);
var G__13423 = c__4768__auto___13421;
var G__13424 = cljs.core.count.call(null,c__4768__auto___13421);
var G__13425 = (0);
seq__13405_13410 = G__13422;
chunk__13406_13411 = G__13423;
count__13407_13412 = G__13424;
i__13408_13413 = G__13425;
continue;
} else {
var node_13426 = cljs.core.first.call(null,seq__13405_13420__$1);
node_13426.innerHTML = value_13409;

var G__13427 = cljs.core.next.call(null,seq__13405_13420__$1);
var G__13428 = null;
var G__13429 = (0);
var G__13430 = (0);
seq__13405_13410 = G__13427;
chunk__13406_13411 = G__13428;
count__13407_13412 = G__13429;
i__13408_13413 = G__13430;
continue;
}
} else {
}
}
break;
}
}catch (e13404){if((e13404 instanceof Error)){
var e_13431 = e13404;
domina.replace_children_BANG_.call(null,content,value_13409);
} else {
throw e13404;

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
var seq__13438_13442 = cljs.core.seq.call(null,children);
var chunk__13439_13443 = null;
var count__13440_13444 = (0);
var i__13441_13445 = (0);
while(true){
if((i__13441_13445 < count__13440_13444)){
var child_13446 = cljs.core._nth.call(null,chunk__13439_13443,i__13441_13445);
frag.appendChild(child_13446);

var G__13447 = seq__13438_13442;
var G__13448 = chunk__13439_13443;
var G__13449 = count__13440_13444;
var G__13450 = (i__13441_13445 + (1));
seq__13438_13442 = G__13447;
chunk__13439_13443 = G__13448;
count__13440_13444 = G__13449;
i__13441_13445 = G__13450;
continue;
} else {
var temp__4126__auto___13451 = cljs.core.seq.call(null,seq__13438_13442);
if(temp__4126__auto___13451){
var seq__13438_13452__$1 = temp__4126__auto___13451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13438_13452__$1)){
var c__4768__auto___13453 = cljs.core.chunk_first.call(null,seq__13438_13452__$1);
var G__13454 = cljs.core.chunk_rest.call(null,seq__13438_13452__$1);
var G__13455 = c__4768__auto___13453;
var G__13456 = cljs.core.count.call(null,c__4768__auto___13453);
var G__13457 = (0);
seq__13438_13442 = G__13454;
chunk__13439_13443 = G__13455;
count__13440_13444 = G__13456;
i__13441_13445 = G__13457;
continue;
} else {
var child_13458 = cljs.core.first.call(null,seq__13438_13452__$1);
frag.appendChild(child_13458);

var G__13459 = cljs.core.next.call(null,seq__13438_13452__$1);
var G__13460 = null;
var G__13461 = (0);
var G__13462 = (0);
seq__13438_13442 = G__13459;
chunk__13439_13443 = G__13460;
count__13440_13444 = G__13461;
i__13441_13445 = G__13462;
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
return (function (p1__13432_SHARP_,p2__13433_SHARP_){
return f.call(null,p1__13432_SHARP_,p2__13433_SHARP_);
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
if((function (){var G__13464 = list_thing;
if(G__13464){
var bit__4662__auto__ = (G__13464.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__13464.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13464.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13464);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13464);
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
if((function (){var G__13465 = content;
if(G__13465){
var bit__4662__auto__ = (G__13465.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__13465.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13465.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13465);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13465);
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
if((function (){var G__13466 = content;
if(G__13466){
var bit__4662__auto__ = (G__13466.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__13466.cljs$core$ISeqable$)){
return true;
} else {
if((!G__13466.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13466);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__13466);
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
