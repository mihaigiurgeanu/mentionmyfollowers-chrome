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
var opt_wrapper_364042 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_364043 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_364044 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_364044,opt_wrapper_364042,table_section_wrapper_364043,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_364042,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_364043,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_364043,cell_wrapper_364044,table_section_wrapper_364043,table_section_wrapper_364043]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__364049 = cljs.core.seq.call(null,tbody);
var chunk__364050 = null;
var count__364051 = (0);
var i__364052 = (0);
while(true){
if((i__364052 < count__364051)){
var child = cljs.core._nth.call(null,chunk__364050,i__364052);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__364053 = seq__364049;
var G__364054 = chunk__364050;
var G__364055 = count__364051;
var G__364056 = (i__364052 + (1));
seq__364049 = G__364053;
chunk__364050 = G__364054;
count__364051 = G__364055;
i__364052 = G__364056;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__364049);
if(temp__4126__auto__){
var seq__364049__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364049__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__364049__$1);
var G__364057 = cljs.core.chunk_rest.call(null,seq__364049__$1);
var G__364058 = c__4768__auto__;
var G__364059 = cljs.core.count.call(null,c__4768__auto__);
var G__364060 = (0);
seq__364049 = G__364057;
chunk__364050 = G__364058;
count__364051 = G__364059;
i__364052 = G__364060;
continue;
} else {
var child = cljs.core.first.call(null,seq__364049__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__364061 = cljs.core.next.call(null,seq__364049__$1);
var G__364062 = null;
var G__364063 = (0);
var G__364064 = (0);
seq__364049 = G__364061;
chunk__364050 = G__364062;
count__364051 = G__364063;
i__364052 = G__364064;
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
var vec__364066 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__364066,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__364066,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__364066,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__364067 = wrapper.lastChild;
var G__364068 = (level - (1));
wrapper = G__364067;
level = G__364068;
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

domina.DomContent = (function (){var obj364070 = {};
return obj364070;
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
var G__364071__i = 0, G__364071__a = new Array(arguments.length -  0);
while (G__364071__i < G__364071__a.length) {G__364071__a[G__364071__i] = arguments[G__364071__i + 0]; ++G__364071__i;}
  mesg = new cljs.core.IndexedSeq(G__364071__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__364072){
var mesg = cljs.core.seq(arglist__364072);
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
var G__364073__i = 0, G__364073__a = new Array(arguments.length -  0);
while (G__364073__i < G__364073__a.length) {G__364073__a[G__364073__i] = arguments[G__364073__i + 0]; ++G__364073__i;}
  mesg = new cljs.core.IndexedSeq(G__364073__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__364074){
var mesg = cljs.core.seq(arglist__364074);
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
var G__364075__i = 0, G__364075__a = new Array(arguments.length -  0);
while (G__364075__i < G__364075__a.length) {G__364075__a[G__364075__i] = arguments[G__364075__i + 0]; ++G__364075__i;}
  contents = new cljs.core.IndexedSeq(G__364075__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__364076){
var contents = cljs.core.seq(arglist__364076);
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
return cljs.core.map.call(null,(function (p1__364077_SHARP_){
return p1__364077_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__364078_SHARP_,p2__364079_SHARP_){
return goog.dom.insertChildAt(p1__364078_SHARP_,p2__364079_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__364081_SHARP_,p2__364080_SHARP_){
return goog.dom.insertSiblingBefore(p2__364080_SHARP_,p1__364081_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__364083_SHARP_,p2__364082_SHARP_){
return goog.dom.insertSiblingAfter(p2__364082_SHARP_,p1__364083_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__364085_SHARP_,p2__364084_SHARP_){
return goog.dom.replaceNode(p2__364084_SHARP_,p1__364085_SHARP_);
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
var seq__364090_364094 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__364091_364095 = null;
var count__364092_364096 = (0);
var i__364093_364097 = (0);
while(true){
if((i__364093_364097 < count__364092_364096)){
var n_364098 = cljs.core._nth.call(null,chunk__364091_364095,i__364093_364097);
goog.style.setStyle(n_364098,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__364099 = seq__364090_364094;
var G__364100 = chunk__364091_364095;
var G__364101 = count__364092_364096;
var G__364102 = (i__364093_364097 + (1));
seq__364090_364094 = G__364099;
chunk__364091_364095 = G__364100;
count__364092_364096 = G__364101;
i__364093_364097 = G__364102;
continue;
} else {
var temp__4126__auto___364103 = cljs.core.seq.call(null,seq__364090_364094);
if(temp__4126__auto___364103){
var seq__364090_364104__$1 = temp__4126__auto___364103;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364090_364104__$1)){
var c__4768__auto___364105 = cljs.core.chunk_first.call(null,seq__364090_364104__$1);
var G__364106 = cljs.core.chunk_rest.call(null,seq__364090_364104__$1);
var G__364107 = c__4768__auto___364105;
var G__364108 = cljs.core.count.call(null,c__4768__auto___364105);
var G__364109 = (0);
seq__364090_364094 = G__364106;
chunk__364091_364095 = G__364107;
count__364092_364096 = G__364108;
i__364093_364097 = G__364109;
continue;
} else {
var n_364110 = cljs.core.first.call(null,seq__364090_364104__$1);
goog.style.setStyle(n_364110,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__364111 = cljs.core.next.call(null,seq__364090_364104__$1);
var G__364112 = null;
var G__364113 = (0);
var G__364114 = (0);
seq__364090_364094 = G__364111;
chunk__364091_364095 = G__364112;
count__364092_364096 = G__364113;
i__364093_364097 = G__364114;
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
var G__364115__i = 0, G__364115__a = new Array(arguments.length -  2);
while (G__364115__i < G__364115__a.length) {G__364115__a[G__364115__i] = arguments[G__364115__i + 2]; ++G__364115__i;}
  value = new cljs.core.IndexedSeq(G__364115__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__364116){
var content = cljs.core.first(arglist__364116);
arglist__364116 = cljs.core.next(arglist__364116);
var name = cljs.core.first(arglist__364116);
var value = cljs.core.rest(arglist__364116);
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
var seq__364121_364125 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__364122_364126 = null;
var count__364123_364127 = (0);
var i__364124_364128 = (0);
while(true){
if((i__364124_364128 < count__364123_364127)){
var n_364129 = cljs.core._nth.call(null,chunk__364122_364126,i__364124_364128);
n_364129.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__364130 = seq__364121_364125;
var G__364131 = chunk__364122_364126;
var G__364132 = count__364123_364127;
var G__364133 = (i__364124_364128 + (1));
seq__364121_364125 = G__364130;
chunk__364122_364126 = G__364131;
count__364123_364127 = G__364132;
i__364124_364128 = G__364133;
continue;
} else {
var temp__4126__auto___364134 = cljs.core.seq.call(null,seq__364121_364125);
if(temp__4126__auto___364134){
var seq__364121_364135__$1 = temp__4126__auto___364134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364121_364135__$1)){
var c__4768__auto___364136 = cljs.core.chunk_first.call(null,seq__364121_364135__$1);
var G__364137 = cljs.core.chunk_rest.call(null,seq__364121_364135__$1);
var G__364138 = c__4768__auto___364136;
var G__364139 = cljs.core.count.call(null,c__4768__auto___364136);
var G__364140 = (0);
seq__364121_364125 = G__364137;
chunk__364122_364126 = G__364138;
count__364123_364127 = G__364139;
i__364124_364128 = G__364140;
continue;
} else {
var n_364141 = cljs.core.first.call(null,seq__364121_364135__$1);
n_364141.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__364142 = cljs.core.next.call(null,seq__364121_364135__$1);
var G__364143 = null;
var G__364144 = (0);
var G__364145 = (0);
seq__364121_364125 = G__364142;
chunk__364122_364126 = G__364143;
count__364123_364127 = G__364144;
i__364124_364128 = G__364145;
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
var G__364146__i = 0, G__364146__a = new Array(arguments.length -  2);
while (G__364146__i < G__364146__a.length) {G__364146__a[G__364146__i] = arguments[G__364146__i + 2]; ++G__364146__i;}
  value = new cljs.core.IndexedSeq(G__364146__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__364147){
var content = cljs.core.first(arglist__364147);
arglist__364147 = cljs.core.next(arglist__364147);
var name = cljs.core.first(arglist__364147);
var value = cljs.core.rest(arglist__364147);
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
var seq__364152_364156 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__364153_364157 = null;
var count__364154_364158 = (0);
var i__364155_364159 = (0);
while(true){
if((i__364155_364159 < count__364154_364158)){
var n_364160 = cljs.core._nth.call(null,chunk__364153_364157,i__364155_364159);
n_364160.removeAttribute(cljs.core.name.call(null,name));

var G__364161 = seq__364152_364156;
var G__364162 = chunk__364153_364157;
var G__364163 = count__364154_364158;
var G__364164 = (i__364155_364159 + (1));
seq__364152_364156 = G__364161;
chunk__364153_364157 = G__364162;
count__364154_364158 = G__364163;
i__364155_364159 = G__364164;
continue;
} else {
var temp__4126__auto___364165 = cljs.core.seq.call(null,seq__364152_364156);
if(temp__4126__auto___364165){
var seq__364152_364166__$1 = temp__4126__auto___364165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364152_364166__$1)){
var c__4768__auto___364167 = cljs.core.chunk_first.call(null,seq__364152_364166__$1);
var G__364168 = cljs.core.chunk_rest.call(null,seq__364152_364166__$1);
var G__364169 = c__4768__auto___364167;
var G__364170 = cljs.core.count.call(null,c__4768__auto___364167);
var G__364171 = (0);
seq__364152_364156 = G__364168;
chunk__364153_364157 = G__364169;
count__364154_364158 = G__364170;
i__364155_364159 = G__364171;
continue;
} else {
var n_364172 = cljs.core.first.call(null,seq__364152_364166__$1);
n_364172.removeAttribute(cljs.core.name.call(null,name));

var G__364173 = cljs.core.next.call(null,seq__364152_364166__$1);
var G__364174 = null;
var G__364175 = (0);
var G__364176 = (0);
seq__364152_364156 = G__364173;
chunk__364153_364157 = G__364174;
count__364154_364158 = G__364175;
i__364155_364159 = G__364176;
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
var vec__364178 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__364178,(0),null);
var v = cljs.core.nth.call(null,vec__364178,(1),null);
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
return (function (p1__364179_SHARP_){
var attr = attrs__$1.item(p1__364179_SHARP_);
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
var seq__364186_364192 = cljs.core.seq.call(null,styles);
var chunk__364187_364193 = null;
var count__364188_364194 = (0);
var i__364189_364195 = (0);
while(true){
if((i__364189_364195 < count__364188_364194)){
var vec__364190_364196 = cljs.core._nth.call(null,chunk__364187_364193,i__364189_364195);
var name_364197 = cljs.core.nth.call(null,vec__364190_364196,(0),null);
var value_364198 = cljs.core.nth.call(null,vec__364190_364196,(1),null);
domina.set_style_BANG_.call(null,content,name_364197,value_364198);

var G__364199 = seq__364186_364192;
var G__364200 = chunk__364187_364193;
var G__364201 = count__364188_364194;
var G__364202 = (i__364189_364195 + (1));
seq__364186_364192 = G__364199;
chunk__364187_364193 = G__364200;
count__364188_364194 = G__364201;
i__364189_364195 = G__364202;
continue;
} else {
var temp__4126__auto___364203 = cljs.core.seq.call(null,seq__364186_364192);
if(temp__4126__auto___364203){
var seq__364186_364204__$1 = temp__4126__auto___364203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364186_364204__$1)){
var c__4768__auto___364205 = cljs.core.chunk_first.call(null,seq__364186_364204__$1);
var G__364206 = cljs.core.chunk_rest.call(null,seq__364186_364204__$1);
var G__364207 = c__4768__auto___364205;
var G__364208 = cljs.core.count.call(null,c__4768__auto___364205);
var G__364209 = (0);
seq__364186_364192 = G__364206;
chunk__364187_364193 = G__364207;
count__364188_364194 = G__364208;
i__364189_364195 = G__364209;
continue;
} else {
var vec__364191_364210 = cljs.core.first.call(null,seq__364186_364204__$1);
var name_364211 = cljs.core.nth.call(null,vec__364191_364210,(0),null);
var value_364212 = cljs.core.nth.call(null,vec__364191_364210,(1),null);
domina.set_style_BANG_.call(null,content,name_364211,value_364212);

var G__364213 = cljs.core.next.call(null,seq__364186_364204__$1);
var G__364214 = null;
var G__364215 = (0);
var G__364216 = (0);
seq__364186_364192 = G__364213;
chunk__364187_364193 = G__364214;
count__364188_364194 = G__364215;
i__364189_364195 = G__364216;
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
var seq__364223_364229 = cljs.core.seq.call(null,attrs);
var chunk__364224_364230 = null;
var count__364225_364231 = (0);
var i__364226_364232 = (0);
while(true){
if((i__364226_364232 < count__364225_364231)){
var vec__364227_364233 = cljs.core._nth.call(null,chunk__364224_364230,i__364226_364232);
var name_364234 = cljs.core.nth.call(null,vec__364227_364233,(0),null);
var value_364235 = cljs.core.nth.call(null,vec__364227_364233,(1),null);
domina.set_attr_BANG_.call(null,content,name_364234,value_364235);

var G__364236 = seq__364223_364229;
var G__364237 = chunk__364224_364230;
var G__364238 = count__364225_364231;
var G__364239 = (i__364226_364232 + (1));
seq__364223_364229 = G__364236;
chunk__364224_364230 = G__364237;
count__364225_364231 = G__364238;
i__364226_364232 = G__364239;
continue;
} else {
var temp__4126__auto___364240 = cljs.core.seq.call(null,seq__364223_364229);
if(temp__4126__auto___364240){
var seq__364223_364241__$1 = temp__4126__auto___364240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364223_364241__$1)){
var c__4768__auto___364242 = cljs.core.chunk_first.call(null,seq__364223_364241__$1);
var G__364243 = cljs.core.chunk_rest.call(null,seq__364223_364241__$1);
var G__364244 = c__4768__auto___364242;
var G__364245 = cljs.core.count.call(null,c__4768__auto___364242);
var G__364246 = (0);
seq__364223_364229 = G__364243;
chunk__364224_364230 = G__364244;
count__364225_364231 = G__364245;
i__364226_364232 = G__364246;
continue;
} else {
var vec__364228_364247 = cljs.core.first.call(null,seq__364223_364241__$1);
var name_364248 = cljs.core.nth.call(null,vec__364228_364247,(0),null);
var value_364249 = cljs.core.nth.call(null,vec__364228_364247,(1),null);
domina.set_attr_BANG_.call(null,content,name_364248,value_364249);

var G__364250 = cljs.core.next.call(null,seq__364223_364241__$1);
var G__364251 = null;
var G__364252 = (0);
var G__364253 = (0);
seq__364223_364229 = G__364250;
chunk__364224_364230 = G__364251;
count__364225_364231 = G__364252;
i__364226_364232 = G__364253;
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
var seq__364258_364262 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__364259_364263 = null;
var count__364260_364264 = (0);
var i__364261_364265 = (0);
while(true){
if((i__364261_364265 < count__364260_364264)){
var node_364266 = cljs.core._nth.call(null,chunk__364259_364263,i__364261_364265);
goog.dom.classes.add(node_364266,class$);

var G__364267 = seq__364258_364262;
var G__364268 = chunk__364259_364263;
var G__364269 = count__364260_364264;
var G__364270 = (i__364261_364265 + (1));
seq__364258_364262 = G__364267;
chunk__364259_364263 = G__364268;
count__364260_364264 = G__364269;
i__364261_364265 = G__364270;
continue;
} else {
var temp__4126__auto___364271 = cljs.core.seq.call(null,seq__364258_364262);
if(temp__4126__auto___364271){
var seq__364258_364272__$1 = temp__4126__auto___364271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364258_364272__$1)){
var c__4768__auto___364273 = cljs.core.chunk_first.call(null,seq__364258_364272__$1);
var G__364274 = cljs.core.chunk_rest.call(null,seq__364258_364272__$1);
var G__364275 = c__4768__auto___364273;
var G__364276 = cljs.core.count.call(null,c__4768__auto___364273);
var G__364277 = (0);
seq__364258_364262 = G__364274;
chunk__364259_364263 = G__364275;
count__364260_364264 = G__364276;
i__364261_364265 = G__364277;
continue;
} else {
var node_364278 = cljs.core.first.call(null,seq__364258_364272__$1);
goog.dom.classes.add(node_364278,class$);

var G__364279 = cljs.core.next.call(null,seq__364258_364272__$1);
var G__364280 = null;
var G__364281 = (0);
var G__364282 = (0);
seq__364258_364262 = G__364279;
chunk__364259_364263 = G__364280;
count__364260_364264 = G__364281;
i__364261_364265 = G__364282;
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
var seq__364287_364291 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__364288_364292 = null;
var count__364289_364293 = (0);
var i__364290_364294 = (0);
while(true){
if((i__364290_364294 < count__364289_364293)){
var node_364295 = cljs.core._nth.call(null,chunk__364288_364292,i__364290_364294);
goog.dom.classes.remove(node_364295,class$);

var G__364296 = seq__364287_364291;
var G__364297 = chunk__364288_364292;
var G__364298 = count__364289_364293;
var G__364299 = (i__364290_364294 + (1));
seq__364287_364291 = G__364296;
chunk__364288_364292 = G__364297;
count__364289_364293 = G__364298;
i__364290_364294 = G__364299;
continue;
} else {
var temp__4126__auto___364300 = cljs.core.seq.call(null,seq__364287_364291);
if(temp__4126__auto___364300){
var seq__364287_364301__$1 = temp__4126__auto___364300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364287_364301__$1)){
var c__4768__auto___364302 = cljs.core.chunk_first.call(null,seq__364287_364301__$1);
var G__364303 = cljs.core.chunk_rest.call(null,seq__364287_364301__$1);
var G__364304 = c__4768__auto___364302;
var G__364305 = cljs.core.count.call(null,c__4768__auto___364302);
var G__364306 = (0);
seq__364287_364291 = G__364303;
chunk__364288_364292 = G__364304;
count__364289_364293 = G__364305;
i__364290_364294 = G__364306;
continue;
} else {
var node_364307 = cljs.core.first.call(null,seq__364287_364301__$1);
goog.dom.classes.remove(node_364307,class$);

var G__364308 = cljs.core.next.call(null,seq__364287_364301__$1);
var G__364309 = null;
var G__364310 = (0);
var G__364311 = (0);
seq__364287_364291 = G__364308;
chunk__364288_364292 = G__364309;
count__364289_364293 = G__364310;
i__364290_364294 = G__364311;
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
var seq__364316_364320 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__364317_364321 = null;
var count__364318_364322 = (0);
var i__364319_364323 = (0);
while(true){
if((i__364319_364323 < count__364318_364322)){
var node_364324 = cljs.core._nth.call(null,chunk__364317_364321,i__364319_364323);
goog.dom.classes.toggle(node_364324,class$);

var G__364325 = seq__364316_364320;
var G__364326 = chunk__364317_364321;
var G__364327 = count__364318_364322;
var G__364328 = (i__364319_364323 + (1));
seq__364316_364320 = G__364325;
chunk__364317_364321 = G__364326;
count__364318_364322 = G__364327;
i__364319_364323 = G__364328;
continue;
} else {
var temp__4126__auto___364329 = cljs.core.seq.call(null,seq__364316_364320);
if(temp__4126__auto___364329){
var seq__364316_364330__$1 = temp__4126__auto___364329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364316_364330__$1)){
var c__4768__auto___364331 = cljs.core.chunk_first.call(null,seq__364316_364330__$1);
var G__364332 = cljs.core.chunk_rest.call(null,seq__364316_364330__$1);
var G__364333 = c__4768__auto___364331;
var G__364334 = cljs.core.count.call(null,c__4768__auto___364331);
var G__364335 = (0);
seq__364316_364320 = G__364332;
chunk__364317_364321 = G__364333;
count__364318_364322 = G__364334;
i__364319_364323 = G__364335;
continue;
} else {
var node_364336 = cljs.core.first.call(null,seq__364316_364330__$1);
goog.dom.classes.toggle(node_364336,class$);

var G__364337 = cljs.core.next.call(null,seq__364316_364330__$1);
var G__364338 = null;
var G__364339 = (0);
var G__364340 = (0);
seq__364316_364320 = G__364337;
chunk__364317_364321 = G__364338;
count__364318_364322 = G__364339;
i__364319_364323 = G__364340;
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
var classes_364349__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__364345_364350 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__364346_364351 = null;
var count__364347_364352 = (0);
var i__364348_364353 = (0);
while(true){
if((i__364348_364353 < count__364347_364352)){
var node_364354 = cljs.core._nth.call(null,chunk__364346_364351,i__364348_364353);
goog.dom.classes.set(node_364354,classes_364349__$1);

var G__364355 = seq__364345_364350;
var G__364356 = chunk__364346_364351;
var G__364357 = count__364347_364352;
var G__364358 = (i__364348_364353 + (1));
seq__364345_364350 = G__364355;
chunk__364346_364351 = G__364356;
count__364347_364352 = G__364357;
i__364348_364353 = G__364358;
continue;
} else {
var temp__4126__auto___364359 = cljs.core.seq.call(null,seq__364345_364350);
if(temp__4126__auto___364359){
var seq__364345_364360__$1 = temp__4126__auto___364359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364345_364360__$1)){
var c__4768__auto___364361 = cljs.core.chunk_first.call(null,seq__364345_364360__$1);
var G__364362 = cljs.core.chunk_rest.call(null,seq__364345_364360__$1);
var G__364363 = c__4768__auto___364361;
var G__364364 = cljs.core.count.call(null,c__4768__auto___364361);
var G__364365 = (0);
seq__364345_364350 = G__364362;
chunk__364346_364351 = G__364363;
count__364347_364352 = G__364364;
i__364348_364353 = G__364365;
continue;
} else {
var node_364366 = cljs.core.first.call(null,seq__364345_364360__$1);
goog.dom.classes.set(node_364366,classes_364349__$1);

var G__364367 = cljs.core.next.call(null,seq__364345_364360__$1);
var G__364368 = null;
var G__364369 = (0);
var G__364370 = (0);
seq__364345_364350 = G__364367;
chunk__364346_364351 = G__364368;
count__364347_364352 = G__364369;
i__364348_364353 = G__364370;
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
var seq__364375_364379 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__364376_364380 = null;
var count__364377_364381 = (0);
var i__364378_364382 = (0);
while(true){
if((i__364378_364382 < count__364377_364381)){
var node_364383 = cljs.core._nth.call(null,chunk__364376_364380,i__364378_364382);
goog.dom.setTextContent(node_364383,value);

var G__364384 = seq__364375_364379;
var G__364385 = chunk__364376_364380;
var G__364386 = count__364377_364381;
var G__364387 = (i__364378_364382 + (1));
seq__364375_364379 = G__364384;
chunk__364376_364380 = G__364385;
count__364377_364381 = G__364386;
i__364378_364382 = G__364387;
continue;
} else {
var temp__4126__auto___364388 = cljs.core.seq.call(null,seq__364375_364379);
if(temp__4126__auto___364388){
var seq__364375_364389__$1 = temp__4126__auto___364388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364375_364389__$1)){
var c__4768__auto___364390 = cljs.core.chunk_first.call(null,seq__364375_364389__$1);
var G__364391 = cljs.core.chunk_rest.call(null,seq__364375_364389__$1);
var G__364392 = c__4768__auto___364390;
var G__364393 = cljs.core.count.call(null,c__4768__auto___364390);
var G__364394 = (0);
seq__364375_364379 = G__364391;
chunk__364376_364380 = G__364392;
count__364377_364381 = G__364393;
i__364378_364382 = G__364394;
continue;
} else {
var node_364395 = cljs.core.first.call(null,seq__364375_364389__$1);
goog.dom.setTextContent(node_364395,value);

var G__364396 = cljs.core.next.call(null,seq__364375_364389__$1);
var G__364397 = null;
var G__364398 = (0);
var G__364399 = (0);
seq__364375_364379 = G__364396;
chunk__364376_364380 = G__364397;
count__364377_364381 = G__364398;
i__364378_364382 = G__364399;
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
var seq__364404_364408 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__364405_364409 = null;
var count__364406_364410 = (0);
var i__364407_364411 = (0);
while(true){
if((i__364407_364411 < count__364406_364410)){
var node_364412 = cljs.core._nth.call(null,chunk__364405_364409,i__364407_364411);
goog.dom.forms.setValue(node_364412,value);

var G__364413 = seq__364404_364408;
var G__364414 = chunk__364405_364409;
var G__364415 = count__364406_364410;
var G__364416 = (i__364407_364411 + (1));
seq__364404_364408 = G__364413;
chunk__364405_364409 = G__364414;
count__364406_364410 = G__364415;
i__364407_364411 = G__364416;
continue;
} else {
var temp__4126__auto___364417 = cljs.core.seq.call(null,seq__364404_364408);
if(temp__4126__auto___364417){
var seq__364404_364418__$1 = temp__4126__auto___364417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364404_364418__$1)){
var c__4768__auto___364419 = cljs.core.chunk_first.call(null,seq__364404_364418__$1);
var G__364420 = cljs.core.chunk_rest.call(null,seq__364404_364418__$1);
var G__364421 = c__4768__auto___364419;
var G__364422 = cljs.core.count.call(null,c__4768__auto___364419);
var G__364423 = (0);
seq__364404_364408 = G__364420;
chunk__364405_364409 = G__364421;
count__364406_364410 = G__364422;
i__364407_364411 = G__364423;
continue;
} else {
var node_364424 = cljs.core.first.call(null,seq__364404_364418__$1);
goog.dom.forms.setValue(node_364424,value);

var G__364425 = cljs.core.next.call(null,seq__364404_364418__$1);
var G__364426 = null;
var G__364427 = (0);
var G__364428 = (0);
seq__364404_364408 = G__364425;
chunk__364405_364409 = G__364426;
count__364406_364410 = G__364427;
i__364407_364411 = G__364428;
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
var value_364439 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__364435_364440 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__364436_364441 = null;
var count__364437_364442 = (0);
var i__364438_364443 = (0);
while(true){
if((i__364438_364443 < count__364437_364442)){
var node_364444 = cljs.core._nth.call(null,chunk__364436_364441,i__364438_364443);
node_364444.innerHTML = value_364439;

var G__364445 = seq__364435_364440;
var G__364446 = chunk__364436_364441;
var G__364447 = count__364437_364442;
var G__364448 = (i__364438_364443 + (1));
seq__364435_364440 = G__364445;
chunk__364436_364441 = G__364446;
count__364437_364442 = G__364447;
i__364438_364443 = G__364448;
continue;
} else {
var temp__4126__auto___364449 = cljs.core.seq.call(null,seq__364435_364440);
if(temp__4126__auto___364449){
var seq__364435_364450__$1 = temp__4126__auto___364449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364435_364450__$1)){
var c__4768__auto___364451 = cljs.core.chunk_first.call(null,seq__364435_364450__$1);
var G__364452 = cljs.core.chunk_rest.call(null,seq__364435_364450__$1);
var G__364453 = c__4768__auto___364451;
var G__364454 = cljs.core.count.call(null,c__4768__auto___364451);
var G__364455 = (0);
seq__364435_364440 = G__364452;
chunk__364436_364441 = G__364453;
count__364437_364442 = G__364454;
i__364438_364443 = G__364455;
continue;
} else {
var node_364456 = cljs.core.first.call(null,seq__364435_364450__$1);
node_364456.innerHTML = value_364439;

var G__364457 = cljs.core.next.call(null,seq__364435_364450__$1);
var G__364458 = null;
var G__364459 = (0);
var G__364460 = (0);
seq__364435_364440 = G__364457;
chunk__364436_364441 = G__364458;
count__364437_364442 = G__364459;
i__364438_364443 = G__364460;
continue;
}
} else {
}
}
break;
}
}catch (e364434){if((e364434 instanceof Error)){
var e_364461 = e364434;
domina.replace_children_BANG_.call(null,content,value_364439);
} else {
throw e364434;

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
var seq__364468_364472 = cljs.core.seq.call(null,children);
var chunk__364469_364473 = null;
var count__364470_364474 = (0);
var i__364471_364475 = (0);
while(true){
if((i__364471_364475 < count__364470_364474)){
var child_364476 = cljs.core._nth.call(null,chunk__364469_364473,i__364471_364475);
frag.appendChild(child_364476);

var G__364477 = seq__364468_364472;
var G__364478 = chunk__364469_364473;
var G__364479 = count__364470_364474;
var G__364480 = (i__364471_364475 + (1));
seq__364468_364472 = G__364477;
chunk__364469_364473 = G__364478;
count__364470_364474 = G__364479;
i__364471_364475 = G__364480;
continue;
} else {
var temp__4126__auto___364481 = cljs.core.seq.call(null,seq__364468_364472);
if(temp__4126__auto___364481){
var seq__364468_364482__$1 = temp__4126__auto___364481;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__364468_364482__$1)){
var c__4768__auto___364483 = cljs.core.chunk_first.call(null,seq__364468_364482__$1);
var G__364484 = cljs.core.chunk_rest.call(null,seq__364468_364482__$1);
var G__364485 = c__4768__auto___364483;
var G__364486 = cljs.core.count.call(null,c__4768__auto___364483);
var G__364487 = (0);
seq__364468_364472 = G__364484;
chunk__364469_364473 = G__364485;
count__364470_364474 = G__364486;
i__364471_364475 = G__364487;
continue;
} else {
var child_364488 = cljs.core.first.call(null,seq__364468_364482__$1);
frag.appendChild(child_364488);

var G__364489 = cljs.core.next.call(null,seq__364468_364482__$1);
var G__364490 = null;
var G__364491 = (0);
var G__364492 = (0);
seq__364468_364472 = G__364489;
chunk__364469_364473 = G__364490;
count__364470_364474 = G__364491;
i__364471_364475 = G__364492;
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
return (function (p1__364462_SHARP_,p2__364463_SHARP_){
return f.call(null,p1__364462_SHARP_,p2__364463_SHARP_);
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
if((function (){var G__364494 = list_thing;
if(G__364494){
var bit__4662__auto__ = (G__364494.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__364494.cljs$core$ISeqable$)){
return true;
} else {
if((!G__364494.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__364494);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__364494);
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
if((function (){var G__364495 = content;
if(G__364495){
var bit__4662__auto__ = (G__364495.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__364495.cljs$core$ISeqable$)){
return true;
} else {
if((!G__364495.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__364495);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__364495);
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
if((function (){var G__364496 = content;
if(G__364496){
var bit__4662__auto__ = (G__364496.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__364496.cljs$core$ISeqable$)){
return true;
} else {
if((!G__364496.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__364496);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__364496);
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
