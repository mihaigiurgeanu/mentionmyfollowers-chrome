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
var opt_wrapper_273049 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_273050 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_273051 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_273051,opt_wrapper_273049,table_section_wrapper_273050,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_273049,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_273050,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_273050,cell_wrapper_273051,table_section_wrapper_273050,table_section_wrapper_273050]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__273056 = cljs.core.seq.call(null,tbody);
var chunk__273057 = null;
var count__273058 = (0);
var i__273059 = (0);
while(true){
if((i__273059 < count__273058)){
var child = cljs.core._nth.call(null,chunk__273057,i__273059);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__273060 = seq__273056;
var G__273061 = chunk__273057;
var G__273062 = count__273058;
var G__273063 = (i__273059 + (1));
seq__273056 = G__273060;
chunk__273057 = G__273061;
count__273058 = G__273062;
i__273059 = G__273063;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__273056);
if(temp__4126__auto__){
var seq__273056__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273056__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__273056__$1);
var G__273064 = cljs.core.chunk_rest.call(null,seq__273056__$1);
var G__273065 = c__4768__auto__;
var G__273066 = cljs.core.count.call(null,c__4768__auto__);
var G__273067 = (0);
seq__273056 = G__273064;
chunk__273057 = G__273065;
count__273058 = G__273066;
i__273059 = G__273067;
continue;
} else {
var child = cljs.core.first.call(null,seq__273056__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__273068 = cljs.core.next.call(null,seq__273056__$1);
var G__273069 = null;
var G__273070 = (0);
var G__273071 = (0);
seq__273056 = G__273068;
chunk__273057 = G__273069;
count__273058 = G__273070;
i__273059 = G__273071;
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
var vec__273073 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__273073,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__273073,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__273073,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__273074 = wrapper.lastChild;
var G__273075 = (level - (1));
wrapper = G__273074;
level = G__273075;
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

domina.DomContent = (function (){var obj273077 = {};
return obj273077;
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
var G__273078__i = 0, G__273078__a = new Array(arguments.length -  0);
while (G__273078__i < G__273078__a.length) {G__273078__a[G__273078__i] = arguments[G__273078__i + 0]; ++G__273078__i;}
  mesg = new cljs.core.IndexedSeq(G__273078__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__273079){
var mesg = cljs.core.seq(arglist__273079);
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
var G__273080__i = 0, G__273080__a = new Array(arguments.length -  0);
while (G__273080__i < G__273080__a.length) {G__273080__a[G__273080__i] = arguments[G__273080__i + 0]; ++G__273080__i;}
  mesg = new cljs.core.IndexedSeq(G__273080__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__273081){
var mesg = cljs.core.seq(arglist__273081);
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
var G__273082__i = 0, G__273082__a = new Array(arguments.length -  0);
while (G__273082__i < G__273082__a.length) {G__273082__a[G__273082__i] = arguments[G__273082__i + 0]; ++G__273082__i;}
  contents = new cljs.core.IndexedSeq(G__273082__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__273083){
var contents = cljs.core.seq(arglist__273083);
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
return cljs.core.map.call(null,(function (p1__273084_SHARP_){
return p1__273084_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__273085_SHARP_,p2__273086_SHARP_){
return goog.dom.insertChildAt(p1__273085_SHARP_,p2__273086_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__273088_SHARP_,p2__273087_SHARP_){
return goog.dom.insertSiblingBefore(p2__273087_SHARP_,p1__273088_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__273090_SHARP_,p2__273089_SHARP_){
return goog.dom.insertSiblingAfter(p2__273089_SHARP_,p1__273090_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__273092_SHARP_,p2__273091_SHARP_){
return goog.dom.replaceNode(p2__273091_SHARP_,p1__273092_SHARP_);
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
var seq__273097_273101 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__273098_273102 = null;
var count__273099_273103 = (0);
var i__273100_273104 = (0);
while(true){
if((i__273100_273104 < count__273099_273103)){
var n_273105 = cljs.core._nth.call(null,chunk__273098_273102,i__273100_273104);
goog.style.setStyle(n_273105,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__273106 = seq__273097_273101;
var G__273107 = chunk__273098_273102;
var G__273108 = count__273099_273103;
var G__273109 = (i__273100_273104 + (1));
seq__273097_273101 = G__273106;
chunk__273098_273102 = G__273107;
count__273099_273103 = G__273108;
i__273100_273104 = G__273109;
continue;
} else {
var temp__4126__auto___273110 = cljs.core.seq.call(null,seq__273097_273101);
if(temp__4126__auto___273110){
var seq__273097_273111__$1 = temp__4126__auto___273110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273097_273111__$1)){
var c__4768__auto___273112 = cljs.core.chunk_first.call(null,seq__273097_273111__$1);
var G__273113 = cljs.core.chunk_rest.call(null,seq__273097_273111__$1);
var G__273114 = c__4768__auto___273112;
var G__273115 = cljs.core.count.call(null,c__4768__auto___273112);
var G__273116 = (0);
seq__273097_273101 = G__273113;
chunk__273098_273102 = G__273114;
count__273099_273103 = G__273115;
i__273100_273104 = G__273116;
continue;
} else {
var n_273117 = cljs.core.first.call(null,seq__273097_273111__$1);
goog.style.setStyle(n_273117,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__273118 = cljs.core.next.call(null,seq__273097_273111__$1);
var G__273119 = null;
var G__273120 = (0);
var G__273121 = (0);
seq__273097_273101 = G__273118;
chunk__273098_273102 = G__273119;
count__273099_273103 = G__273120;
i__273100_273104 = G__273121;
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
var G__273122__i = 0, G__273122__a = new Array(arguments.length -  2);
while (G__273122__i < G__273122__a.length) {G__273122__a[G__273122__i] = arguments[G__273122__i + 2]; ++G__273122__i;}
  value = new cljs.core.IndexedSeq(G__273122__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__273123){
var content = cljs.core.first(arglist__273123);
arglist__273123 = cljs.core.next(arglist__273123);
var name = cljs.core.first(arglist__273123);
var value = cljs.core.rest(arglist__273123);
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
var seq__273128_273132 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__273129_273133 = null;
var count__273130_273134 = (0);
var i__273131_273135 = (0);
while(true){
if((i__273131_273135 < count__273130_273134)){
var n_273136 = cljs.core._nth.call(null,chunk__273129_273133,i__273131_273135);
n_273136.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__273137 = seq__273128_273132;
var G__273138 = chunk__273129_273133;
var G__273139 = count__273130_273134;
var G__273140 = (i__273131_273135 + (1));
seq__273128_273132 = G__273137;
chunk__273129_273133 = G__273138;
count__273130_273134 = G__273139;
i__273131_273135 = G__273140;
continue;
} else {
var temp__4126__auto___273141 = cljs.core.seq.call(null,seq__273128_273132);
if(temp__4126__auto___273141){
var seq__273128_273142__$1 = temp__4126__auto___273141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273128_273142__$1)){
var c__4768__auto___273143 = cljs.core.chunk_first.call(null,seq__273128_273142__$1);
var G__273144 = cljs.core.chunk_rest.call(null,seq__273128_273142__$1);
var G__273145 = c__4768__auto___273143;
var G__273146 = cljs.core.count.call(null,c__4768__auto___273143);
var G__273147 = (0);
seq__273128_273132 = G__273144;
chunk__273129_273133 = G__273145;
count__273130_273134 = G__273146;
i__273131_273135 = G__273147;
continue;
} else {
var n_273148 = cljs.core.first.call(null,seq__273128_273142__$1);
n_273148.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__273149 = cljs.core.next.call(null,seq__273128_273142__$1);
var G__273150 = null;
var G__273151 = (0);
var G__273152 = (0);
seq__273128_273132 = G__273149;
chunk__273129_273133 = G__273150;
count__273130_273134 = G__273151;
i__273131_273135 = G__273152;
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
var G__273153__i = 0, G__273153__a = new Array(arguments.length -  2);
while (G__273153__i < G__273153__a.length) {G__273153__a[G__273153__i] = arguments[G__273153__i + 2]; ++G__273153__i;}
  value = new cljs.core.IndexedSeq(G__273153__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__273154){
var content = cljs.core.first(arglist__273154);
arglist__273154 = cljs.core.next(arglist__273154);
var name = cljs.core.first(arglist__273154);
var value = cljs.core.rest(arglist__273154);
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
var seq__273159_273163 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__273160_273164 = null;
var count__273161_273165 = (0);
var i__273162_273166 = (0);
while(true){
if((i__273162_273166 < count__273161_273165)){
var n_273167 = cljs.core._nth.call(null,chunk__273160_273164,i__273162_273166);
n_273167.removeAttribute(cljs.core.name.call(null,name));

var G__273168 = seq__273159_273163;
var G__273169 = chunk__273160_273164;
var G__273170 = count__273161_273165;
var G__273171 = (i__273162_273166 + (1));
seq__273159_273163 = G__273168;
chunk__273160_273164 = G__273169;
count__273161_273165 = G__273170;
i__273162_273166 = G__273171;
continue;
} else {
var temp__4126__auto___273172 = cljs.core.seq.call(null,seq__273159_273163);
if(temp__4126__auto___273172){
var seq__273159_273173__$1 = temp__4126__auto___273172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273159_273173__$1)){
var c__4768__auto___273174 = cljs.core.chunk_first.call(null,seq__273159_273173__$1);
var G__273175 = cljs.core.chunk_rest.call(null,seq__273159_273173__$1);
var G__273176 = c__4768__auto___273174;
var G__273177 = cljs.core.count.call(null,c__4768__auto___273174);
var G__273178 = (0);
seq__273159_273163 = G__273175;
chunk__273160_273164 = G__273176;
count__273161_273165 = G__273177;
i__273162_273166 = G__273178;
continue;
} else {
var n_273179 = cljs.core.first.call(null,seq__273159_273173__$1);
n_273179.removeAttribute(cljs.core.name.call(null,name));

var G__273180 = cljs.core.next.call(null,seq__273159_273173__$1);
var G__273181 = null;
var G__273182 = (0);
var G__273183 = (0);
seq__273159_273163 = G__273180;
chunk__273160_273164 = G__273181;
count__273161_273165 = G__273182;
i__273162_273166 = G__273183;
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
var vec__273185 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__273185,(0),null);
var v = cljs.core.nth.call(null,vec__273185,(1),null);
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
return (function (p1__273186_SHARP_){
var attr = attrs__$1.item(p1__273186_SHARP_);
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
var seq__273193_273199 = cljs.core.seq.call(null,styles);
var chunk__273194_273200 = null;
var count__273195_273201 = (0);
var i__273196_273202 = (0);
while(true){
if((i__273196_273202 < count__273195_273201)){
var vec__273197_273203 = cljs.core._nth.call(null,chunk__273194_273200,i__273196_273202);
var name_273204 = cljs.core.nth.call(null,vec__273197_273203,(0),null);
var value_273205 = cljs.core.nth.call(null,vec__273197_273203,(1),null);
domina.set_style_BANG_.call(null,content,name_273204,value_273205);

var G__273206 = seq__273193_273199;
var G__273207 = chunk__273194_273200;
var G__273208 = count__273195_273201;
var G__273209 = (i__273196_273202 + (1));
seq__273193_273199 = G__273206;
chunk__273194_273200 = G__273207;
count__273195_273201 = G__273208;
i__273196_273202 = G__273209;
continue;
} else {
var temp__4126__auto___273210 = cljs.core.seq.call(null,seq__273193_273199);
if(temp__4126__auto___273210){
var seq__273193_273211__$1 = temp__4126__auto___273210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273193_273211__$1)){
var c__4768__auto___273212 = cljs.core.chunk_first.call(null,seq__273193_273211__$1);
var G__273213 = cljs.core.chunk_rest.call(null,seq__273193_273211__$1);
var G__273214 = c__4768__auto___273212;
var G__273215 = cljs.core.count.call(null,c__4768__auto___273212);
var G__273216 = (0);
seq__273193_273199 = G__273213;
chunk__273194_273200 = G__273214;
count__273195_273201 = G__273215;
i__273196_273202 = G__273216;
continue;
} else {
var vec__273198_273217 = cljs.core.first.call(null,seq__273193_273211__$1);
var name_273218 = cljs.core.nth.call(null,vec__273198_273217,(0),null);
var value_273219 = cljs.core.nth.call(null,vec__273198_273217,(1),null);
domina.set_style_BANG_.call(null,content,name_273218,value_273219);

var G__273220 = cljs.core.next.call(null,seq__273193_273211__$1);
var G__273221 = null;
var G__273222 = (0);
var G__273223 = (0);
seq__273193_273199 = G__273220;
chunk__273194_273200 = G__273221;
count__273195_273201 = G__273222;
i__273196_273202 = G__273223;
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
var seq__273230_273236 = cljs.core.seq.call(null,attrs);
var chunk__273231_273237 = null;
var count__273232_273238 = (0);
var i__273233_273239 = (0);
while(true){
if((i__273233_273239 < count__273232_273238)){
var vec__273234_273240 = cljs.core._nth.call(null,chunk__273231_273237,i__273233_273239);
var name_273241 = cljs.core.nth.call(null,vec__273234_273240,(0),null);
var value_273242 = cljs.core.nth.call(null,vec__273234_273240,(1),null);
domina.set_attr_BANG_.call(null,content,name_273241,value_273242);

var G__273243 = seq__273230_273236;
var G__273244 = chunk__273231_273237;
var G__273245 = count__273232_273238;
var G__273246 = (i__273233_273239 + (1));
seq__273230_273236 = G__273243;
chunk__273231_273237 = G__273244;
count__273232_273238 = G__273245;
i__273233_273239 = G__273246;
continue;
} else {
var temp__4126__auto___273247 = cljs.core.seq.call(null,seq__273230_273236);
if(temp__4126__auto___273247){
var seq__273230_273248__$1 = temp__4126__auto___273247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273230_273248__$1)){
var c__4768__auto___273249 = cljs.core.chunk_first.call(null,seq__273230_273248__$1);
var G__273250 = cljs.core.chunk_rest.call(null,seq__273230_273248__$1);
var G__273251 = c__4768__auto___273249;
var G__273252 = cljs.core.count.call(null,c__4768__auto___273249);
var G__273253 = (0);
seq__273230_273236 = G__273250;
chunk__273231_273237 = G__273251;
count__273232_273238 = G__273252;
i__273233_273239 = G__273253;
continue;
} else {
var vec__273235_273254 = cljs.core.first.call(null,seq__273230_273248__$1);
var name_273255 = cljs.core.nth.call(null,vec__273235_273254,(0),null);
var value_273256 = cljs.core.nth.call(null,vec__273235_273254,(1),null);
domina.set_attr_BANG_.call(null,content,name_273255,value_273256);

var G__273257 = cljs.core.next.call(null,seq__273230_273248__$1);
var G__273258 = null;
var G__273259 = (0);
var G__273260 = (0);
seq__273230_273236 = G__273257;
chunk__273231_273237 = G__273258;
count__273232_273238 = G__273259;
i__273233_273239 = G__273260;
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
var seq__273265_273269 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__273266_273270 = null;
var count__273267_273271 = (0);
var i__273268_273272 = (0);
while(true){
if((i__273268_273272 < count__273267_273271)){
var node_273273 = cljs.core._nth.call(null,chunk__273266_273270,i__273268_273272);
goog.dom.classes.add(node_273273,class$);

var G__273274 = seq__273265_273269;
var G__273275 = chunk__273266_273270;
var G__273276 = count__273267_273271;
var G__273277 = (i__273268_273272 + (1));
seq__273265_273269 = G__273274;
chunk__273266_273270 = G__273275;
count__273267_273271 = G__273276;
i__273268_273272 = G__273277;
continue;
} else {
var temp__4126__auto___273278 = cljs.core.seq.call(null,seq__273265_273269);
if(temp__4126__auto___273278){
var seq__273265_273279__$1 = temp__4126__auto___273278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273265_273279__$1)){
var c__4768__auto___273280 = cljs.core.chunk_first.call(null,seq__273265_273279__$1);
var G__273281 = cljs.core.chunk_rest.call(null,seq__273265_273279__$1);
var G__273282 = c__4768__auto___273280;
var G__273283 = cljs.core.count.call(null,c__4768__auto___273280);
var G__273284 = (0);
seq__273265_273269 = G__273281;
chunk__273266_273270 = G__273282;
count__273267_273271 = G__273283;
i__273268_273272 = G__273284;
continue;
} else {
var node_273285 = cljs.core.first.call(null,seq__273265_273279__$1);
goog.dom.classes.add(node_273285,class$);

var G__273286 = cljs.core.next.call(null,seq__273265_273279__$1);
var G__273287 = null;
var G__273288 = (0);
var G__273289 = (0);
seq__273265_273269 = G__273286;
chunk__273266_273270 = G__273287;
count__273267_273271 = G__273288;
i__273268_273272 = G__273289;
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
var seq__273294_273298 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__273295_273299 = null;
var count__273296_273300 = (0);
var i__273297_273301 = (0);
while(true){
if((i__273297_273301 < count__273296_273300)){
var node_273302 = cljs.core._nth.call(null,chunk__273295_273299,i__273297_273301);
goog.dom.classes.remove(node_273302,class$);

var G__273303 = seq__273294_273298;
var G__273304 = chunk__273295_273299;
var G__273305 = count__273296_273300;
var G__273306 = (i__273297_273301 + (1));
seq__273294_273298 = G__273303;
chunk__273295_273299 = G__273304;
count__273296_273300 = G__273305;
i__273297_273301 = G__273306;
continue;
} else {
var temp__4126__auto___273307 = cljs.core.seq.call(null,seq__273294_273298);
if(temp__4126__auto___273307){
var seq__273294_273308__$1 = temp__4126__auto___273307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273294_273308__$1)){
var c__4768__auto___273309 = cljs.core.chunk_first.call(null,seq__273294_273308__$1);
var G__273310 = cljs.core.chunk_rest.call(null,seq__273294_273308__$1);
var G__273311 = c__4768__auto___273309;
var G__273312 = cljs.core.count.call(null,c__4768__auto___273309);
var G__273313 = (0);
seq__273294_273298 = G__273310;
chunk__273295_273299 = G__273311;
count__273296_273300 = G__273312;
i__273297_273301 = G__273313;
continue;
} else {
var node_273314 = cljs.core.first.call(null,seq__273294_273308__$1);
goog.dom.classes.remove(node_273314,class$);

var G__273315 = cljs.core.next.call(null,seq__273294_273308__$1);
var G__273316 = null;
var G__273317 = (0);
var G__273318 = (0);
seq__273294_273298 = G__273315;
chunk__273295_273299 = G__273316;
count__273296_273300 = G__273317;
i__273297_273301 = G__273318;
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
var seq__273323_273327 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__273324_273328 = null;
var count__273325_273329 = (0);
var i__273326_273330 = (0);
while(true){
if((i__273326_273330 < count__273325_273329)){
var node_273331 = cljs.core._nth.call(null,chunk__273324_273328,i__273326_273330);
goog.dom.classes.toggle(node_273331,class$);

var G__273332 = seq__273323_273327;
var G__273333 = chunk__273324_273328;
var G__273334 = count__273325_273329;
var G__273335 = (i__273326_273330 + (1));
seq__273323_273327 = G__273332;
chunk__273324_273328 = G__273333;
count__273325_273329 = G__273334;
i__273326_273330 = G__273335;
continue;
} else {
var temp__4126__auto___273336 = cljs.core.seq.call(null,seq__273323_273327);
if(temp__4126__auto___273336){
var seq__273323_273337__$1 = temp__4126__auto___273336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273323_273337__$1)){
var c__4768__auto___273338 = cljs.core.chunk_first.call(null,seq__273323_273337__$1);
var G__273339 = cljs.core.chunk_rest.call(null,seq__273323_273337__$1);
var G__273340 = c__4768__auto___273338;
var G__273341 = cljs.core.count.call(null,c__4768__auto___273338);
var G__273342 = (0);
seq__273323_273327 = G__273339;
chunk__273324_273328 = G__273340;
count__273325_273329 = G__273341;
i__273326_273330 = G__273342;
continue;
} else {
var node_273343 = cljs.core.first.call(null,seq__273323_273337__$1);
goog.dom.classes.toggle(node_273343,class$);

var G__273344 = cljs.core.next.call(null,seq__273323_273337__$1);
var G__273345 = null;
var G__273346 = (0);
var G__273347 = (0);
seq__273323_273327 = G__273344;
chunk__273324_273328 = G__273345;
count__273325_273329 = G__273346;
i__273326_273330 = G__273347;
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
var classes_273356__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__273352_273357 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__273353_273358 = null;
var count__273354_273359 = (0);
var i__273355_273360 = (0);
while(true){
if((i__273355_273360 < count__273354_273359)){
var node_273361 = cljs.core._nth.call(null,chunk__273353_273358,i__273355_273360);
goog.dom.classes.set(node_273361,classes_273356__$1);

var G__273362 = seq__273352_273357;
var G__273363 = chunk__273353_273358;
var G__273364 = count__273354_273359;
var G__273365 = (i__273355_273360 + (1));
seq__273352_273357 = G__273362;
chunk__273353_273358 = G__273363;
count__273354_273359 = G__273364;
i__273355_273360 = G__273365;
continue;
} else {
var temp__4126__auto___273366 = cljs.core.seq.call(null,seq__273352_273357);
if(temp__4126__auto___273366){
var seq__273352_273367__$1 = temp__4126__auto___273366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273352_273367__$1)){
var c__4768__auto___273368 = cljs.core.chunk_first.call(null,seq__273352_273367__$1);
var G__273369 = cljs.core.chunk_rest.call(null,seq__273352_273367__$1);
var G__273370 = c__4768__auto___273368;
var G__273371 = cljs.core.count.call(null,c__4768__auto___273368);
var G__273372 = (0);
seq__273352_273357 = G__273369;
chunk__273353_273358 = G__273370;
count__273354_273359 = G__273371;
i__273355_273360 = G__273372;
continue;
} else {
var node_273373 = cljs.core.first.call(null,seq__273352_273367__$1);
goog.dom.classes.set(node_273373,classes_273356__$1);

var G__273374 = cljs.core.next.call(null,seq__273352_273367__$1);
var G__273375 = null;
var G__273376 = (0);
var G__273377 = (0);
seq__273352_273357 = G__273374;
chunk__273353_273358 = G__273375;
count__273354_273359 = G__273376;
i__273355_273360 = G__273377;
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
var seq__273382_273386 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__273383_273387 = null;
var count__273384_273388 = (0);
var i__273385_273389 = (0);
while(true){
if((i__273385_273389 < count__273384_273388)){
var node_273390 = cljs.core._nth.call(null,chunk__273383_273387,i__273385_273389);
goog.dom.setTextContent(node_273390,value);

var G__273391 = seq__273382_273386;
var G__273392 = chunk__273383_273387;
var G__273393 = count__273384_273388;
var G__273394 = (i__273385_273389 + (1));
seq__273382_273386 = G__273391;
chunk__273383_273387 = G__273392;
count__273384_273388 = G__273393;
i__273385_273389 = G__273394;
continue;
} else {
var temp__4126__auto___273395 = cljs.core.seq.call(null,seq__273382_273386);
if(temp__4126__auto___273395){
var seq__273382_273396__$1 = temp__4126__auto___273395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273382_273396__$1)){
var c__4768__auto___273397 = cljs.core.chunk_first.call(null,seq__273382_273396__$1);
var G__273398 = cljs.core.chunk_rest.call(null,seq__273382_273396__$1);
var G__273399 = c__4768__auto___273397;
var G__273400 = cljs.core.count.call(null,c__4768__auto___273397);
var G__273401 = (0);
seq__273382_273386 = G__273398;
chunk__273383_273387 = G__273399;
count__273384_273388 = G__273400;
i__273385_273389 = G__273401;
continue;
} else {
var node_273402 = cljs.core.first.call(null,seq__273382_273396__$1);
goog.dom.setTextContent(node_273402,value);

var G__273403 = cljs.core.next.call(null,seq__273382_273396__$1);
var G__273404 = null;
var G__273405 = (0);
var G__273406 = (0);
seq__273382_273386 = G__273403;
chunk__273383_273387 = G__273404;
count__273384_273388 = G__273405;
i__273385_273389 = G__273406;
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
var seq__273411_273415 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__273412_273416 = null;
var count__273413_273417 = (0);
var i__273414_273418 = (0);
while(true){
if((i__273414_273418 < count__273413_273417)){
var node_273419 = cljs.core._nth.call(null,chunk__273412_273416,i__273414_273418);
goog.dom.forms.setValue(node_273419,value);

var G__273420 = seq__273411_273415;
var G__273421 = chunk__273412_273416;
var G__273422 = count__273413_273417;
var G__273423 = (i__273414_273418 + (1));
seq__273411_273415 = G__273420;
chunk__273412_273416 = G__273421;
count__273413_273417 = G__273422;
i__273414_273418 = G__273423;
continue;
} else {
var temp__4126__auto___273424 = cljs.core.seq.call(null,seq__273411_273415);
if(temp__4126__auto___273424){
var seq__273411_273425__$1 = temp__4126__auto___273424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273411_273425__$1)){
var c__4768__auto___273426 = cljs.core.chunk_first.call(null,seq__273411_273425__$1);
var G__273427 = cljs.core.chunk_rest.call(null,seq__273411_273425__$1);
var G__273428 = c__4768__auto___273426;
var G__273429 = cljs.core.count.call(null,c__4768__auto___273426);
var G__273430 = (0);
seq__273411_273415 = G__273427;
chunk__273412_273416 = G__273428;
count__273413_273417 = G__273429;
i__273414_273418 = G__273430;
continue;
} else {
var node_273431 = cljs.core.first.call(null,seq__273411_273425__$1);
goog.dom.forms.setValue(node_273431,value);

var G__273432 = cljs.core.next.call(null,seq__273411_273425__$1);
var G__273433 = null;
var G__273434 = (0);
var G__273435 = (0);
seq__273411_273415 = G__273432;
chunk__273412_273416 = G__273433;
count__273413_273417 = G__273434;
i__273414_273418 = G__273435;
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
var value_273446 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__273442_273447 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__273443_273448 = null;
var count__273444_273449 = (0);
var i__273445_273450 = (0);
while(true){
if((i__273445_273450 < count__273444_273449)){
var node_273451 = cljs.core._nth.call(null,chunk__273443_273448,i__273445_273450);
node_273451.innerHTML = value_273446;

var G__273452 = seq__273442_273447;
var G__273453 = chunk__273443_273448;
var G__273454 = count__273444_273449;
var G__273455 = (i__273445_273450 + (1));
seq__273442_273447 = G__273452;
chunk__273443_273448 = G__273453;
count__273444_273449 = G__273454;
i__273445_273450 = G__273455;
continue;
} else {
var temp__4126__auto___273456 = cljs.core.seq.call(null,seq__273442_273447);
if(temp__4126__auto___273456){
var seq__273442_273457__$1 = temp__4126__auto___273456;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273442_273457__$1)){
var c__4768__auto___273458 = cljs.core.chunk_first.call(null,seq__273442_273457__$1);
var G__273459 = cljs.core.chunk_rest.call(null,seq__273442_273457__$1);
var G__273460 = c__4768__auto___273458;
var G__273461 = cljs.core.count.call(null,c__4768__auto___273458);
var G__273462 = (0);
seq__273442_273447 = G__273459;
chunk__273443_273448 = G__273460;
count__273444_273449 = G__273461;
i__273445_273450 = G__273462;
continue;
} else {
var node_273463 = cljs.core.first.call(null,seq__273442_273457__$1);
node_273463.innerHTML = value_273446;

var G__273464 = cljs.core.next.call(null,seq__273442_273457__$1);
var G__273465 = null;
var G__273466 = (0);
var G__273467 = (0);
seq__273442_273447 = G__273464;
chunk__273443_273448 = G__273465;
count__273444_273449 = G__273466;
i__273445_273450 = G__273467;
continue;
}
} else {
}
}
break;
}
}catch (e273441){if((e273441 instanceof Error)){
var e_273468 = e273441;
domina.replace_children_BANG_.call(null,content,value_273446);
} else {
throw e273441;

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
var seq__273475_273479 = cljs.core.seq.call(null,children);
var chunk__273476_273480 = null;
var count__273477_273481 = (0);
var i__273478_273482 = (0);
while(true){
if((i__273478_273482 < count__273477_273481)){
var child_273483 = cljs.core._nth.call(null,chunk__273476_273480,i__273478_273482);
frag.appendChild(child_273483);

var G__273484 = seq__273475_273479;
var G__273485 = chunk__273476_273480;
var G__273486 = count__273477_273481;
var G__273487 = (i__273478_273482 + (1));
seq__273475_273479 = G__273484;
chunk__273476_273480 = G__273485;
count__273477_273481 = G__273486;
i__273478_273482 = G__273487;
continue;
} else {
var temp__4126__auto___273488 = cljs.core.seq.call(null,seq__273475_273479);
if(temp__4126__auto___273488){
var seq__273475_273489__$1 = temp__4126__auto___273488;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__273475_273489__$1)){
var c__4768__auto___273490 = cljs.core.chunk_first.call(null,seq__273475_273489__$1);
var G__273491 = cljs.core.chunk_rest.call(null,seq__273475_273489__$1);
var G__273492 = c__4768__auto___273490;
var G__273493 = cljs.core.count.call(null,c__4768__auto___273490);
var G__273494 = (0);
seq__273475_273479 = G__273491;
chunk__273476_273480 = G__273492;
count__273477_273481 = G__273493;
i__273478_273482 = G__273494;
continue;
} else {
var child_273495 = cljs.core.first.call(null,seq__273475_273489__$1);
frag.appendChild(child_273495);

var G__273496 = cljs.core.next.call(null,seq__273475_273489__$1);
var G__273497 = null;
var G__273498 = (0);
var G__273499 = (0);
seq__273475_273479 = G__273496;
chunk__273476_273480 = G__273497;
count__273477_273481 = G__273498;
i__273478_273482 = G__273499;
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
return (function (p1__273469_SHARP_,p2__273470_SHARP_){
return f.call(null,p1__273469_SHARP_,p2__273470_SHARP_);
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
if((function (){var G__273501 = list_thing;
if(G__273501){
var bit__4662__auto__ = (G__273501.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__273501.cljs$core$ISeqable$)){
return true;
} else {
if((!G__273501.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__273501);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__273501);
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
if((function (){var G__273502 = content;
if(G__273502){
var bit__4662__auto__ = (G__273502.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__273502.cljs$core$ISeqable$)){
return true;
} else {
if((!G__273502.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__273502);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__273502);
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
if((function (){var G__273503 = content;
if(G__273503){
var bit__4662__auto__ = (G__273503.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__273503.cljs$core$ISeqable$)){
return true;
} else {
if((!G__273503.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__273503);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__273503);
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
