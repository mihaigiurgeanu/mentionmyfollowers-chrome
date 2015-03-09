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
var opt_wrapper_109136 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_109137 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_109138 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_109138,opt_wrapper_109136,table_section_wrapper_109137,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_109136,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_109137,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_109137,cell_wrapper_109138,table_section_wrapper_109137,table_section_wrapper_109137]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__109143 = cljs.core.seq.call(null,tbody);
var chunk__109144 = null;
var count__109145 = (0);
var i__109146 = (0);
while(true){
if((i__109146 < count__109145)){
var child = cljs.core._nth.call(null,chunk__109144,i__109146);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__109147 = seq__109143;
var G__109148 = chunk__109144;
var G__109149 = count__109145;
var G__109150 = (i__109146 + (1));
seq__109143 = G__109147;
chunk__109144 = G__109148;
count__109145 = G__109149;
i__109146 = G__109150;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__109143);
if(temp__4126__auto__){
var seq__109143__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109143__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__109143__$1);
var G__109151 = cljs.core.chunk_rest.call(null,seq__109143__$1);
var G__109152 = c__4768__auto__;
var G__109153 = cljs.core.count.call(null,c__4768__auto__);
var G__109154 = (0);
seq__109143 = G__109151;
chunk__109144 = G__109152;
count__109145 = G__109153;
i__109146 = G__109154;
continue;
} else {
var child = cljs.core.first.call(null,seq__109143__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__109155 = cljs.core.next.call(null,seq__109143__$1);
var G__109156 = null;
var G__109157 = (0);
var G__109158 = (0);
seq__109143 = G__109155;
chunk__109144 = G__109156;
count__109145 = G__109157;
i__109146 = G__109158;
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
var vec__109160 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__109160,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__109160,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__109160,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__109161 = wrapper.lastChild;
var G__109162 = (level - (1));
wrapper = G__109161;
level = G__109162;
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

domina.DomContent = (function (){var obj109164 = {};
return obj109164;
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
var G__109165__i = 0, G__109165__a = new Array(arguments.length -  0);
while (G__109165__i < G__109165__a.length) {G__109165__a[G__109165__i] = arguments[G__109165__i + 0]; ++G__109165__i;}
  mesg = new cljs.core.IndexedSeq(G__109165__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__109166){
var mesg = cljs.core.seq(arglist__109166);
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
var G__109167__i = 0, G__109167__a = new Array(arguments.length -  0);
while (G__109167__i < G__109167__a.length) {G__109167__a[G__109167__i] = arguments[G__109167__i + 0]; ++G__109167__i;}
  mesg = new cljs.core.IndexedSeq(G__109167__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__109168){
var mesg = cljs.core.seq(arglist__109168);
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
var G__109169__i = 0, G__109169__a = new Array(arguments.length -  0);
while (G__109169__i < G__109169__a.length) {G__109169__a[G__109169__i] = arguments[G__109169__i + 0]; ++G__109169__i;}
  contents = new cljs.core.IndexedSeq(G__109169__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__109170){
var contents = cljs.core.seq(arglist__109170);
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
return cljs.core.map.call(null,(function (p1__109171_SHARP_){
return p1__109171_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__109172_SHARP_,p2__109173_SHARP_){
return goog.dom.insertChildAt(p1__109172_SHARP_,p2__109173_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__109175_SHARP_,p2__109174_SHARP_){
return goog.dom.insertSiblingBefore(p2__109174_SHARP_,p1__109175_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__109177_SHARP_,p2__109176_SHARP_){
return goog.dom.insertSiblingAfter(p2__109176_SHARP_,p1__109177_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__109179_SHARP_,p2__109178_SHARP_){
return goog.dom.replaceNode(p2__109178_SHARP_,p1__109179_SHARP_);
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
var seq__109184_109188 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__109185_109189 = null;
var count__109186_109190 = (0);
var i__109187_109191 = (0);
while(true){
if((i__109187_109191 < count__109186_109190)){
var n_109192 = cljs.core._nth.call(null,chunk__109185_109189,i__109187_109191);
goog.style.setStyle(n_109192,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__109193 = seq__109184_109188;
var G__109194 = chunk__109185_109189;
var G__109195 = count__109186_109190;
var G__109196 = (i__109187_109191 + (1));
seq__109184_109188 = G__109193;
chunk__109185_109189 = G__109194;
count__109186_109190 = G__109195;
i__109187_109191 = G__109196;
continue;
} else {
var temp__4126__auto___109197 = cljs.core.seq.call(null,seq__109184_109188);
if(temp__4126__auto___109197){
var seq__109184_109198__$1 = temp__4126__auto___109197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109184_109198__$1)){
var c__4768__auto___109199 = cljs.core.chunk_first.call(null,seq__109184_109198__$1);
var G__109200 = cljs.core.chunk_rest.call(null,seq__109184_109198__$1);
var G__109201 = c__4768__auto___109199;
var G__109202 = cljs.core.count.call(null,c__4768__auto___109199);
var G__109203 = (0);
seq__109184_109188 = G__109200;
chunk__109185_109189 = G__109201;
count__109186_109190 = G__109202;
i__109187_109191 = G__109203;
continue;
} else {
var n_109204 = cljs.core.first.call(null,seq__109184_109198__$1);
goog.style.setStyle(n_109204,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__109205 = cljs.core.next.call(null,seq__109184_109198__$1);
var G__109206 = null;
var G__109207 = (0);
var G__109208 = (0);
seq__109184_109188 = G__109205;
chunk__109185_109189 = G__109206;
count__109186_109190 = G__109207;
i__109187_109191 = G__109208;
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
var G__109209__i = 0, G__109209__a = new Array(arguments.length -  2);
while (G__109209__i < G__109209__a.length) {G__109209__a[G__109209__i] = arguments[G__109209__i + 2]; ++G__109209__i;}
  value = new cljs.core.IndexedSeq(G__109209__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__109210){
var content = cljs.core.first(arglist__109210);
arglist__109210 = cljs.core.next(arglist__109210);
var name = cljs.core.first(arglist__109210);
var value = cljs.core.rest(arglist__109210);
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
var seq__109215_109219 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__109216_109220 = null;
var count__109217_109221 = (0);
var i__109218_109222 = (0);
while(true){
if((i__109218_109222 < count__109217_109221)){
var n_109223 = cljs.core._nth.call(null,chunk__109216_109220,i__109218_109222);
n_109223.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__109224 = seq__109215_109219;
var G__109225 = chunk__109216_109220;
var G__109226 = count__109217_109221;
var G__109227 = (i__109218_109222 + (1));
seq__109215_109219 = G__109224;
chunk__109216_109220 = G__109225;
count__109217_109221 = G__109226;
i__109218_109222 = G__109227;
continue;
} else {
var temp__4126__auto___109228 = cljs.core.seq.call(null,seq__109215_109219);
if(temp__4126__auto___109228){
var seq__109215_109229__$1 = temp__4126__auto___109228;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109215_109229__$1)){
var c__4768__auto___109230 = cljs.core.chunk_first.call(null,seq__109215_109229__$1);
var G__109231 = cljs.core.chunk_rest.call(null,seq__109215_109229__$1);
var G__109232 = c__4768__auto___109230;
var G__109233 = cljs.core.count.call(null,c__4768__auto___109230);
var G__109234 = (0);
seq__109215_109219 = G__109231;
chunk__109216_109220 = G__109232;
count__109217_109221 = G__109233;
i__109218_109222 = G__109234;
continue;
} else {
var n_109235 = cljs.core.first.call(null,seq__109215_109229__$1);
n_109235.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__109236 = cljs.core.next.call(null,seq__109215_109229__$1);
var G__109237 = null;
var G__109238 = (0);
var G__109239 = (0);
seq__109215_109219 = G__109236;
chunk__109216_109220 = G__109237;
count__109217_109221 = G__109238;
i__109218_109222 = G__109239;
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
var G__109240__i = 0, G__109240__a = new Array(arguments.length -  2);
while (G__109240__i < G__109240__a.length) {G__109240__a[G__109240__i] = arguments[G__109240__i + 2]; ++G__109240__i;}
  value = new cljs.core.IndexedSeq(G__109240__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__109241){
var content = cljs.core.first(arglist__109241);
arglist__109241 = cljs.core.next(arglist__109241);
var name = cljs.core.first(arglist__109241);
var value = cljs.core.rest(arglist__109241);
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
var seq__109246_109250 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__109247_109251 = null;
var count__109248_109252 = (0);
var i__109249_109253 = (0);
while(true){
if((i__109249_109253 < count__109248_109252)){
var n_109254 = cljs.core._nth.call(null,chunk__109247_109251,i__109249_109253);
n_109254.removeAttribute(cljs.core.name.call(null,name));

var G__109255 = seq__109246_109250;
var G__109256 = chunk__109247_109251;
var G__109257 = count__109248_109252;
var G__109258 = (i__109249_109253 + (1));
seq__109246_109250 = G__109255;
chunk__109247_109251 = G__109256;
count__109248_109252 = G__109257;
i__109249_109253 = G__109258;
continue;
} else {
var temp__4126__auto___109259 = cljs.core.seq.call(null,seq__109246_109250);
if(temp__4126__auto___109259){
var seq__109246_109260__$1 = temp__4126__auto___109259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109246_109260__$1)){
var c__4768__auto___109261 = cljs.core.chunk_first.call(null,seq__109246_109260__$1);
var G__109262 = cljs.core.chunk_rest.call(null,seq__109246_109260__$1);
var G__109263 = c__4768__auto___109261;
var G__109264 = cljs.core.count.call(null,c__4768__auto___109261);
var G__109265 = (0);
seq__109246_109250 = G__109262;
chunk__109247_109251 = G__109263;
count__109248_109252 = G__109264;
i__109249_109253 = G__109265;
continue;
} else {
var n_109266 = cljs.core.first.call(null,seq__109246_109260__$1);
n_109266.removeAttribute(cljs.core.name.call(null,name));

var G__109267 = cljs.core.next.call(null,seq__109246_109260__$1);
var G__109268 = null;
var G__109269 = (0);
var G__109270 = (0);
seq__109246_109250 = G__109267;
chunk__109247_109251 = G__109268;
count__109248_109252 = G__109269;
i__109249_109253 = G__109270;
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
var vec__109272 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__109272,(0),null);
var v = cljs.core.nth.call(null,vec__109272,(1),null);
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
return (function (p1__109273_SHARP_){
var attr = attrs__$1.item(p1__109273_SHARP_);
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
var seq__109280_109286 = cljs.core.seq.call(null,styles);
var chunk__109281_109287 = null;
var count__109282_109288 = (0);
var i__109283_109289 = (0);
while(true){
if((i__109283_109289 < count__109282_109288)){
var vec__109284_109290 = cljs.core._nth.call(null,chunk__109281_109287,i__109283_109289);
var name_109291 = cljs.core.nth.call(null,vec__109284_109290,(0),null);
var value_109292 = cljs.core.nth.call(null,vec__109284_109290,(1),null);
domina.set_style_BANG_.call(null,content,name_109291,value_109292);

var G__109293 = seq__109280_109286;
var G__109294 = chunk__109281_109287;
var G__109295 = count__109282_109288;
var G__109296 = (i__109283_109289 + (1));
seq__109280_109286 = G__109293;
chunk__109281_109287 = G__109294;
count__109282_109288 = G__109295;
i__109283_109289 = G__109296;
continue;
} else {
var temp__4126__auto___109297 = cljs.core.seq.call(null,seq__109280_109286);
if(temp__4126__auto___109297){
var seq__109280_109298__$1 = temp__4126__auto___109297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109280_109298__$1)){
var c__4768__auto___109299 = cljs.core.chunk_first.call(null,seq__109280_109298__$1);
var G__109300 = cljs.core.chunk_rest.call(null,seq__109280_109298__$1);
var G__109301 = c__4768__auto___109299;
var G__109302 = cljs.core.count.call(null,c__4768__auto___109299);
var G__109303 = (0);
seq__109280_109286 = G__109300;
chunk__109281_109287 = G__109301;
count__109282_109288 = G__109302;
i__109283_109289 = G__109303;
continue;
} else {
var vec__109285_109304 = cljs.core.first.call(null,seq__109280_109298__$1);
var name_109305 = cljs.core.nth.call(null,vec__109285_109304,(0),null);
var value_109306 = cljs.core.nth.call(null,vec__109285_109304,(1),null);
domina.set_style_BANG_.call(null,content,name_109305,value_109306);

var G__109307 = cljs.core.next.call(null,seq__109280_109298__$1);
var G__109308 = null;
var G__109309 = (0);
var G__109310 = (0);
seq__109280_109286 = G__109307;
chunk__109281_109287 = G__109308;
count__109282_109288 = G__109309;
i__109283_109289 = G__109310;
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
var seq__109317_109323 = cljs.core.seq.call(null,attrs);
var chunk__109318_109324 = null;
var count__109319_109325 = (0);
var i__109320_109326 = (0);
while(true){
if((i__109320_109326 < count__109319_109325)){
var vec__109321_109327 = cljs.core._nth.call(null,chunk__109318_109324,i__109320_109326);
var name_109328 = cljs.core.nth.call(null,vec__109321_109327,(0),null);
var value_109329 = cljs.core.nth.call(null,vec__109321_109327,(1),null);
domina.set_attr_BANG_.call(null,content,name_109328,value_109329);

var G__109330 = seq__109317_109323;
var G__109331 = chunk__109318_109324;
var G__109332 = count__109319_109325;
var G__109333 = (i__109320_109326 + (1));
seq__109317_109323 = G__109330;
chunk__109318_109324 = G__109331;
count__109319_109325 = G__109332;
i__109320_109326 = G__109333;
continue;
} else {
var temp__4126__auto___109334 = cljs.core.seq.call(null,seq__109317_109323);
if(temp__4126__auto___109334){
var seq__109317_109335__$1 = temp__4126__auto___109334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109317_109335__$1)){
var c__4768__auto___109336 = cljs.core.chunk_first.call(null,seq__109317_109335__$1);
var G__109337 = cljs.core.chunk_rest.call(null,seq__109317_109335__$1);
var G__109338 = c__4768__auto___109336;
var G__109339 = cljs.core.count.call(null,c__4768__auto___109336);
var G__109340 = (0);
seq__109317_109323 = G__109337;
chunk__109318_109324 = G__109338;
count__109319_109325 = G__109339;
i__109320_109326 = G__109340;
continue;
} else {
var vec__109322_109341 = cljs.core.first.call(null,seq__109317_109335__$1);
var name_109342 = cljs.core.nth.call(null,vec__109322_109341,(0),null);
var value_109343 = cljs.core.nth.call(null,vec__109322_109341,(1),null);
domina.set_attr_BANG_.call(null,content,name_109342,value_109343);

var G__109344 = cljs.core.next.call(null,seq__109317_109335__$1);
var G__109345 = null;
var G__109346 = (0);
var G__109347 = (0);
seq__109317_109323 = G__109344;
chunk__109318_109324 = G__109345;
count__109319_109325 = G__109346;
i__109320_109326 = G__109347;
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
var seq__109352_109356 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__109353_109357 = null;
var count__109354_109358 = (0);
var i__109355_109359 = (0);
while(true){
if((i__109355_109359 < count__109354_109358)){
var node_109360 = cljs.core._nth.call(null,chunk__109353_109357,i__109355_109359);
goog.dom.classes.add(node_109360,class$);

var G__109361 = seq__109352_109356;
var G__109362 = chunk__109353_109357;
var G__109363 = count__109354_109358;
var G__109364 = (i__109355_109359 + (1));
seq__109352_109356 = G__109361;
chunk__109353_109357 = G__109362;
count__109354_109358 = G__109363;
i__109355_109359 = G__109364;
continue;
} else {
var temp__4126__auto___109365 = cljs.core.seq.call(null,seq__109352_109356);
if(temp__4126__auto___109365){
var seq__109352_109366__$1 = temp__4126__auto___109365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109352_109366__$1)){
var c__4768__auto___109367 = cljs.core.chunk_first.call(null,seq__109352_109366__$1);
var G__109368 = cljs.core.chunk_rest.call(null,seq__109352_109366__$1);
var G__109369 = c__4768__auto___109367;
var G__109370 = cljs.core.count.call(null,c__4768__auto___109367);
var G__109371 = (0);
seq__109352_109356 = G__109368;
chunk__109353_109357 = G__109369;
count__109354_109358 = G__109370;
i__109355_109359 = G__109371;
continue;
} else {
var node_109372 = cljs.core.first.call(null,seq__109352_109366__$1);
goog.dom.classes.add(node_109372,class$);

var G__109373 = cljs.core.next.call(null,seq__109352_109366__$1);
var G__109374 = null;
var G__109375 = (0);
var G__109376 = (0);
seq__109352_109356 = G__109373;
chunk__109353_109357 = G__109374;
count__109354_109358 = G__109375;
i__109355_109359 = G__109376;
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
var seq__109381_109385 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__109382_109386 = null;
var count__109383_109387 = (0);
var i__109384_109388 = (0);
while(true){
if((i__109384_109388 < count__109383_109387)){
var node_109389 = cljs.core._nth.call(null,chunk__109382_109386,i__109384_109388);
goog.dom.classes.remove(node_109389,class$);

var G__109390 = seq__109381_109385;
var G__109391 = chunk__109382_109386;
var G__109392 = count__109383_109387;
var G__109393 = (i__109384_109388 + (1));
seq__109381_109385 = G__109390;
chunk__109382_109386 = G__109391;
count__109383_109387 = G__109392;
i__109384_109388 = G__109393;
continue;
} else {
var temp__4126__auto___109394 = cljs.core.seq.call(null,seq__109381_109385);
if(temp__4126__auto___109394){
var seq__109381_109395__$1 = temp__4126__auto___109394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109381_109395__$1)){
var c__4768__auto___109396 = cljs.core.chunk_first.call(null,seq__109381_109395__$1);
var G__109397 = cljs.core.chunk_rest.call(null,seq__109381_109395__$1);
var G__109398 = c__4768__auto___109396;
var G__109399 = cljs.core.count.call(null,c__4768__auto___109396);
var G__109400 = (0);
seq__109381_109385 = G__109397;
chunk__109382_109386 = G__109398;
count__109383_109387 = G__109399;
i__109384_109388 = G__109400;
continue;
} else {
var node_109401 = cljs.core.first.call(null,seq__109381_109395__$1);
goog.dom.classes.remove(node_109401,class$);

var G__109402 = cljs.core.next.call(null,seq__109381_109395__$1);
var G__109403 = null;
var G__109404 = (0);
var G__109405 = (0);
seq__109381_109385 = G__109402;
chunk__109382_109386 = G__109403;
count__109383_109387 = G__109404;
i__109384_109388 = G__109405;
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
var seq__109410_109414 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__109411_109415 = null;
var count__109412_109416 = (0);
var i__109413_109417 = (0);
while(true){
if((i__109413_109417 < count__109412_109416)){
var node_109418 = cljs.core._nth.call(null,chunk__109411_109415,i__109413_109417);
goog.dom.classes.toggle(node_109418,class$);

var G__109419 = seq__109410_109414;
var G__109420 = chunk__109411_109415;
var G__109421 = count__109412_109416;
var G__109422 = (i__109413_109417 + (1));
seq__109410_109414 = G__109419;
chunk__109411_109415 = G__109420;
count__109412_109416 = G__109421;
i__109413_109417 = G__109422;
continue;
} else {
var temp__4126__auto___109423 = cljs.core.seq.call(null,seq__109410_109414);
if(temp__4126__auto___109423){
var seq__109410_109424__$1 = temp__4126__auto___109423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109410_109424__$1)){
var c__4768__auto___109425 = cljs.core.chunk_first.call(null,seq__109410_109424__$1);
var G__109426 = cljs.core.chunk_rest.call(null,seq__109410_109424__$1);
var G__109427 = c__4768__auto___109425;
var G__109428 = cljs.core.count.call(null,c__4768__auto___109425);
var G__109429 = (0);
seq__109410_109414 = G__109426;
chunk__109411_109415 = G__109427;
count__109412_109416 = G__109428;
i__109413_109417 = G__109429;
continue;
} else {
var node_109430 = cljs.core.first.call(null,seq__109410_109424__$1);
goog.dom.classes.toggle(node_109430,class$);

var G__109431 = cljs.core.next.call(null,seq__109410_109424__$1);
var G__109432 = null;
var G__109433 = (0);
var G__109434 = (0);
seq__109410_109414 = G__109431;
chunk__109411_109415 = G__109432;
count__109412_109416 = G__109433;
i__109413_109417 = G__109434;
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
var classes_109443__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__109439_109444 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__109440_109445 = null;
var count__109441_109446 = (0);
var i__109442_109447 = (0);
while(true){
if((i__109442_109447 < count__109441_109446)){
var node_109448 = cljs.core._nth.call(null,chunk__109440_109445,i__109442_109447);
goog.dom.classes.set(node_109448,classes_109443__$1);

var G__109449 = seq__109439_109444;
var G__109450 = chunk__109440_109445;
var G__109451 = count__109441_109446;
var G__109452 = (i__109442_109447 + (1));
seq__109439_109444 = G__109449;
chunk__109440_109445 = G__109450;
count__109441_109446 = G__109451;
i__109442_109447 = G__109452;
continue;
} else {
var temp__4126__auto___109453 = cljs.core.seq.call(null,seq__109439_109444);
if(temp__4126__auto___109453){
var seq__109439_109454__$1 = temp__4126__auto___109453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109439_109454__$1)){
var c__4768__auto___109455 = cljs.core.chunk_first.call(null,seq__109439_109454__$1);
var G__109456 = cljs.core.chunk_rest.call(null,seq__109439_109454__$1);
var G__109457 = c__4768__auto___109455;
var G__109458 = cljs.core.count.call(null,c__4768__auto___109455);
var G__109459 = (0);
seq__109439_109444 = G__109456;
chunk__109440_109445 = G__109457;
count__109441_109446 = G__109458;
i__109442_109447 = G__109459;
continue;
} else {
var node_109460 = cljs.core.first.call(null,seq__109439_109454__$1);
goog.dom.classes.set(node_109460,classes_109443__$1);

var G__109461 = cljs.core.next.call(null,seq__109439_109454__$1);
var G__109462 = null;
var G__109463 = (0);
var G__109464 = (0);
seq__109439_109444 = G__109461;
chunk__109440_109445 = G__109462;
count__109441_109446 = G__109463;
i__109442_109447 = G__109464;
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
var seq__109469_109473 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__109470_109474 = null;
var count__109471_109475 = (0);
var i__109472_109476 = (0);
while(true){
if((i__109472_109476 < count__109471_109475)){
var node_109477 = cljs.core._nth.call(null,chunk__109470_109474,i__109472_109476);
goog.dom.setTextContent(node_109477,value);

var G__109478 = seq__109469_109473;
var G__109479 = chunk__109470_109474;
var G__109480 = count__109471_109475;
var G__109481 = (i__109472_109476 + (1));
seq__109469_109473 = G__109478;
chunk__109470_109474 = G__109479;
count__109471_109475 = G__109480;
i__109472_109476 = G__109481;
continue;
} else {
var temp__4126__auto___109482 = cljs.core.seq.call(null,seq__109469_109473);
if(temp__4126__auto___109482){
var seq__109469_109483__$1 = temp__4126__auto___109482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109469_109483__$1)){
var c__4768__auto___109484 = cljs.core.chunk_first.call(null,seq__109469_109483__$1);
var G__109485 = cljs.core.chunk_rest.call(null,seq__109469_109483__$1);
var G__109486 = c__4768__auto___109484;
var G__109487 = cljs.core.count.call(null,c__4768__auto___109484);
var G__109488 = (0);
seq__109469_109473 = G__109485;
chunk__109470_109474 = G__109486;
count__109471_109475 = G__109487;
i__109472_109476 = G__109488;
continue;
} else {
var node_109489 = cljs.core.first.call(null,seq__109469_109483__$1);
goog.dom.setTextContent(node_109489,value);

var G__109490 = cljs.core.next.call(null,seq__109469_109483__$1);
var G__109491 = null;
var G__109492 = (0);
var G__109493 = (0);
seq__109469_109473 = G__109490;
chunk__109470_109474 = G__109491;
count__109471_109475 = G__109492;
i__109472_109476 = G__109493;
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
var seq__109498_109502 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__109499_109503 = null;
var count__109500_109504 = (0);
var i__109501_109505 = (0);
while(true){
if((i__109501_109505 < count__109500_109504)){
var node_109506 = cljs.core._nth.call(null,chunk__109499_109503,i__109501_109505);
goog.dom.forms.setValue(node_109506,value);

var G__109507 = seq__109498_109502;
var G__109508 = chunk__109499_109503;
var G__109509 = count__109500_109504;
var G__109510 = (i__109501_109505 + (1));
seq__109498_109502 = G__109507;
chunk__109499_109503 = G__109508;
count__109500_109504 = G__109509;
i__109501_109505 = G__109510;
continue;
} else {
var temp__4126__auto___109511 = cljs.core.seq.call(null,seq__109498_109502);
if(temp__4126__auto___109511){
var seq__109498_109512__$1 = temp__4126__auto___109511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109498_109512__$1)){
var c__4768__auto___109513 = cljs.core.chunk_first.call(null,seq__109498_109512__$1);
var G__109514 = cljs.core.chunk_rest.call(null,seq__109498_109512__$1);
var G__109515 = c__4768__auto___109513;
var G__109516 = cljs.core.count.call(null,c__4768__auto___109513);
var G__109517 = (0);
seq__109498_109502 = G__109514;
chunk__109499_109503 = G__109515;
count__109500_109504 = G__109516;
i__109501_109505 = G__109517;
continue;
} else {
var node_109518 = cljs.core.first.call(null,seq__109498_109512__$1);
goog.dom.forms.setValue(node_109518,value);

var G__109519 = cljs.core.next.call(null,seq__109498_109512__$1);
var G__109520 = null;
var G__109521 = (0);
var G__109522 = (0);
seq__109498_109502 = G__109519;
chunk__109499_109503 = G__109520;
count__109500_109504 = G__109521;
i__109501_109505 = G__109522;
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
var value_109533 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__109529_109534 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__109530_109535 = null;
var count__109531_109536 = (0);
var i__109532_109537 = (0);
while(true){
if((i__109532_109537 < count__109531_109536)){
var node_109538 = cljs.core._nth.call(null,chunk__109530_109535,i__109532_109537);
node_109538.innerHTML = value_109533;

var G__109539 = seq__109529_109534;
var G__109540 = chunk__109530_109535;
var G__109541 = count__109531_109536;
var G__109542 = (i__109532_109537 + (1));
seq__109529_109534 = G__109539;
chunk__109530_109535 = G__109540;
count__109531_109536 = G__109541;
i__109532_109537 = G__109542;
continue;
} else {
var temp__4126__auto___109543 = cljs.core.seq.call(null,seq__109529_109534);
if(temp__4126__auto___109543){
var seq__109529_109544__$1 = temp__4126__auto___109543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109529_109544__$1)){
var c__4768__auto___109545 = cljs.core.chunk_first.call(null,seq__109529_109544__$1);
var G__109546 = cljs.core.chunk_rest.call(null,seq__109529_109544__$1);
var G__109547 = c__4768__auto___109545;
var G__109548 = cljs.core.count.call(null,c__4768__auto___109545);
var G__109549 = (0);
seq__109529_109534 = G__109546;
chunk__109530_109535 = G__109547;
count__109531_109536 = G__109548;
i__109532_109537 = G__109549;
continue;
} else {
var node_109550 = cljs.core.first.call(null,seq__109529_109544__$1);
node_109550.innerHTML = value_109533;

var G__109551 = cljs.core.next.call(null,seq__109529_109544__$1);
var G__109552 = null;
var G__109553 = (0);
var G__109554 = (0);
seq__109529_109534 = G__109551;
chunk__109530_109535 = G__109552;
count__109531_109536 = G__109553;
i__109532_109537 = G__109554;
continue;
}
} else {
}
}
break;
}
}catch (e109528){if((e109528 instanceof Error)){
var e_109555 = e109528;
domina.replace_children_BANG_.call(null,content,value_109533);
} else {
throw e109528;

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
var seq__109562_109566 = cljs.core.seq.call(null,children);
var chunk__109563_109567 = null;
var count__109564_109568 = (0);
var i__109565_109569 = (0);
while(true){
if((i__109565_109569 < count__109564_109568)){
var child_109570 = cljs.core._nth.call(null,chunk__109563_109567,i__109565_109569);
frag.appendChild(child_109570);

var G__109571 = seq__109562_109566;
var G__109572 = chunk__109563_109567;
var G__109573 = count__109564_109568;
var G__109574 = (i__109565_109569 + (1));
seq__109562_109566 = G__109571;
chunk__109563_109567 = G__109572;
count__109564_109568 = G__109573;
i__109565_109569 = G__109574;
continue;
} else {
var temp__4126__auto___109575 = cljs.core.seq.call(null,seq__109562_109566);
if(temp__4126__auto___109575){
var seq__109562_109576__$1 = temp__4126__auto___109575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__109562_109576__$1)){
var c__4768__auto___109577 = cljs.core.chunk_first.call(null,seq__109562_109576__$1);
var G__109578 = cljs.core.chunk_rest.call(null,seq__109562_109576__$1);
var G__109579 = c__4768__auto___109577;
var G__109580 = cljs.core.count.call(null,c__4768__auto___109577);
var G__109581 = (0);
seq__109562_109566 = G__109578;
chunk__109563_109567 = G__109579;
count__109564_109568 = G__109580;
i__109565_109569 = G__109581;
continue;
} else {
var child_109582 = cljs.core.first.call(null,seq__109562_109576__$1);
frag.appendChild(child_109582);

var G__109583 = cljs.core.next.call(null,seq__109562_109576__$1);
var G__109584 = null;
var G__109585 = (0);
var G__109586 = (0);
seq__109562_109566 = G__109583;
chunk__109563_109567 = G__109584;
count__109564_109568 = G__109585;
i__109565_109569 = G__109586;
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
return (function (p1__109556_SHARP_,p2__109557_SHARP_){
return f.call(null,p1__109556_SHARP_,p2__109557_SHARP_);
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
if((function (){var G__109588 = list_thing;
if(G__109588){
var bit__4662__auto__ = (G__109588.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__109588.cljs$core$ISeqable$)){
return true;
} else {
if((!G__109588.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__109588);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__109588);
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
if((function (){var G__109589 = content;
if(G__109589){
var bit__4662__auto__ = (G__109589.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__109589.cljs$core$ISeqable$)){
return true;
} else {
if((!G__109589.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__109589);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__109589);
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
if((function (){var G__109590 = content;
if(G__109590){
var bit__4662__auto__ = (G__109590.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__109590.cljs$core$ISeqable$)){
return true;
} else {
if((!G__109590.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__109590);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__109590);
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
