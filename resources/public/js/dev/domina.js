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
var opt_wrapper_86954 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_86955 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_86956 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_86956,opt_wrapper_86954,table_section_wrapper_86955,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_86954,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_86955,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_86955,cell_wrapper_86956,table_section_wrapper_86955,table_section_wrapper_86955]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__86961 = cljs.core.seq.call(null,tbody);
var chunk__86962 = null;
var count__86963 = (0);
var i__86964 = (0);
while(true){
if((i__86964 < count__86963)){
var child = cljs.core._nth.call(null,chunk__86962,i__86964);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__86965 = seq__86961;
var G__86966 = chunk__86962;
var G__86967 = count__86963;
var G__86968 = (i__86964 + (1));
seq__86961 = G__86965;
chunk__86962 = G__86966;
count__86963 = G__86967;
i__86964 = G__86968;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__86961);
if(temp__4126__auto__){
var seq__86961__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86961__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__86961__$1);
var G__86969 = cljs.core.chunk_rest.call(null,seq__86961__$1);
var G__86970 = c__4768__auto__;
var G__86971 = cljs.core.count.call(null,c__4768__auto__);
var G__86972 = (0);
seq__86961 = G__86969;
chunk__86962 = G__86970;
count__86963 = G__86971;
i__86964 = G__86972;
continue;
} else {
var child = cljs.core.first.call(null,seq__86961__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__86973 = cljs.core.next.call(null,seq__86961__$1);
var G__86974 = null;
var G__86975 = (0);
var G__86976 = (0);
seq__86961 = G__86973;
chunk__86962 = G__86974;
count__86963 = G__86975;
i__86964 = G__86976;
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
var vec__86978 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__86978,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__86978,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__86978,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__86979 = wrapper.lastChild;
var G__86980 = (level - (1));
wrapper = G__86979;
level = G__86980;
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

domina.DomContent = (function (){var obj86982 = {};
return obj86982;
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
var G__86983__i = 0, G__86983__a = new Array(arguments.length -  0);
while (G__86983__i < G__86983__a.length) {G__86983__a[G__86983__i] = arguments[G__86983__i + 0]; ++G__86983__i;}
  mesg = new cljs.core.IndexedSeq(G__86983__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__86984){
var mesg = cljs.core.seq(arglist__86984);
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
var G__86985__i = 0, G__86985__a = new Array(arguments.length -  0);
while (G__86985__i < G__86985__a.length) {G__86985__a[G__86985__i] = arguments[G__86985__i + 0]; ++G__86985__i;}
  mesg = new cljs.core.IndexedSeq(G__86985__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__86986){
var mesg = cljs.core.seq(arglist__86986);
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
var G__86987__i = 0, G__86987__a = new Array(arguments.length -  0);
while (G__86987__i < G__86987__a.length) {G__86987__a[G__86987__i] = arguments[G__86987__i + 0]; ++G__86987__i;}
  contents = new cljs.core.IndexedSeq(G__86987__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__86988){
var contents = cljs.core.seq(arglist__86988);
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
return cljs.core.map.call(null,(function (p1__86989_SHARP_){
return p1__86989_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__86990_SHARP_,p2__86991_SHARP_){
return goog.dom.insertChildAt(p1__86990_SHARP_,p2__86991_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__86993_SHARP_,p2__86992_SHARP_){
return goog.dom.insertSiblingBefore(p2__86992_SHARP_,p1__86993_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__86995_SHARP_,p2__86994_SHARP_){
return goog.dom.insertSiblingAfter(p2__86994_SHARP_,p1__86995_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__86997_SHARP_,p2__86996_SHARP_){
return goog.dom.replaceNode(p2__86996_SHARP_,p1__86997_SHARP_);
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
var seq__87002_87006 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__87003_87007 = null;
var count__87004_87008 = (0);
var i__87005_87009 = (0);
while(true){
if((i__87005_87009 < count__87004_87008)){
var n_87010 = cljs.core._nth.call(null,chunk__87003_87007,i__87005_87009);
goog.style.setStyle(n_87010,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__87011 = seq__87002_87006;
var G__87012 = chunk__87003_87007;
var G__87013 = count__87004_87008;
var G__87014 = (i__87005_87009 + (1));
seq__87002_87006 = G__87011;
chunk__87003_87007 = G__87012;
count__87004_87008 = G__87013;
i__87005_87009 = G__87014;
continue;
} else {
var temp__4126__auto___87015 = cljs.core.seq.call(null,seq__87002_87006);
if(temp__4126__auto___87015){
var seq__87002_87016__$1 = temp__4126__auto___87015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87002_87016__$1)){
var c__4768__auto___87017 = cljs.core.chunk_first.call(null,seq__87002_87016__$1);
var G__87018 = cljs.core.chunk_rest.call(null,seq__87002_87016__$1);
var G__87019 = c__4768__auto___87017;
var G__87020 = cljs.core.count.call(null,c__4768__auto___87017);
var G__87021 = (0);
seq__87002_87006 = G__87018;
chunk__87003_87007 = G__87019;
count__87004_87008 = G__87020;
i__87005_87009 = G__87021;
continue;
} else {
var n_87022 = cljs.core.first.call(null,seq__87002_87016__$1);
goog.style.setStyle(n_87022,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__87023 = cljs.core.next.call(null,seq__87002_87016__$1);
var G__87024 = null;
var G__87025 = (0);
var G__87026 = (0);
seq__87002_87006 = G__87023;
chunk__87003_87007 = G__87024;
count__87004_87008 = G__87025;
i__87005_87009 = G__87026;
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
var G__87027__i = 0, G__87027__a = new Array(arguments.length -  2);
while (G__87027__i < G__87027__a.length) {G__87027__a[G__87027__i] = arguments[G__87027__i + 2]; ++G__87027__i;}
  value = new cljs.core.IndexedSeq(G__87027__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__87028){
var content = cljs.core.first(arglist__87028);
arglist__87028 = cljs.core.next(arglist__87028);
var name = cljs.core.first(arglist__87028);
var value = cljs.core.rest(arglist__87028);
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
var seq__87033_87037 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__87034_87038 = null;
var count__87035_87039 = (0);
var i__87036_87040 = (0);
while(true){
if((i__87036_87040 < count__87035_87039)){
var n_87041 = cljs.core._nth.call(null,chunk__87034_87038,i__87036_87040);
n_87041.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__87042 = seq__87033_87037;
var G__87043 = chunk__87034_87038;
var G__87044 = count__87035_87039;
var G__87045 = (i__87036_87040 + (1));
seq__87033_87037 = G__87042;
chunk__87034_87038 = G__87043;
count__87035_87039 = G__87044;
i__87036_87040 = G__87045;
continue;
} else {
var temp__4126__auto___87046 = cljs.core.seq.call(null,seq__87033_87037);
if(temp__4126__auto___87046){
var seq__87033_87047__$1 = temp__4126__auto___87046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87033_87047__$1)){
var c__4768__auto___87048 = cljs.core.chunk_first.call(null,seq__87033_87047__$1);
var G__87049 = cljs.core.chunk_rest.call(null,seq__87033_87047__$1);
var G__87050 = c__4768__auto___87048;
var G__87051 = cljs.core.count.call(null,c__4768__auto___87048);
var G__87052 = (0);
seq__87033_87037 = G__87049;
chunk__87034_87038 = G__87050;
count__87035_87039 = G__87051;
i__87036_87040 = G__87052;
continue;
} else {
var n_87053 = cljs.core.first.call(null,seq__87033_87047__$1);
n_87053.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__87054 = cljs.core.next.call(null,seq__87033_87047__$1);
var G__87055 = null;
var G__87056 = (0);
var G__87057 = (0);
seq__87033_87037 = G__87054;
chunk__87034_87038 = G__87055;
count__87035_87039 = G__87056;
i__87036_87040 = G__87057;
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
var G__87058__i = 0, G__87058__a = new Array(arguments.length -  2);
while (G__87058__i < G__87058__a.length) {G__87058__a[G__87058__i] = arguments[G__87058__i + 2]; ++G__87058__i;}
  value = new cljs.core.IndexedSeq(G__87058__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__87059){
var content = cljs.core.first(arglist__87059);
arglist__87059 = cljs.core.next(arglist__87059);
var name = cljs.core.first(arglist__87059);
var value = cljs.core.rest(arglist__87059);
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
var seq__87064_87068 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__87065_87069 = null;
var count__87066_87070 = (0);
var i__87067_87071 = (0);
while(true){
if((i__87067_87071 < count__87066_87070)){
var n_87072 = cljs.core._nth.call(null,chunk__87065_87069,i__87067_87071);
n_87072.removeAttribute(cljs.core.name.call(null,name));

var G__87073 = seq__87064_87068;
var G__87074 = chunk__87065_87069;
var G__87075 = count__87066_87070;
var G__87076 = (i__87067_87071 + (1));
seq__87064_87068 = G__87073;
chunk__87065_87069 = G__87074;
count__87066_87070 = G__87075;
i__87067_87071 = G__87076;
continue;
} else {
var temp__4126__auto___87077 = cljs.core.seq.call(null,seq__87064_87068);
if(temp__4126__auto___87077){
var seq__87064_87078__$1 = temp__4126__auto___87077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87064_87078__$1)){
var c__4768__auto___87079 = cljs.core.chunk_first.call(null,seq__87064_87078__$1);
var G__87080 = cljs.core.chunk_rest.call(null,seq__87064_87078__$1);
var G__87081 = c__4768__auto___87079;
var G__87082 = cljs.core.count.call(null,c__4768__auto___87079);
var G__87083 = (0);
seq__87064_87068 = G__87080;
chunk__87065_87069 = G__87081;
count__87066_87070 = G__87082;
i__87067_87071 = G__87083;
continue;
} else {
var n_87084 = cljs.core.first.call(null,seq__87064_87078__$1);
n_87084.removeAttribute(cljs.core.name.call(null,name));

var G__87085 = cljs.core.next.call(null,seq__87064_87078__$1);
var G__87086 = null;
var G__87087 = (0);
var G__87088 = (0);
seq__87064_87068 = G__87085;
chunk__87065_87069 = G__87086;
count__87066_87070 = G__87087;
i__87067_87071 = G__87088;
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
var vec__87090 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__87090,(0),null);
var v = cljs.core.nth.call(null,vec__87090,(1),null);
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
return (function (p1__87091_SHARP_){
var attr = attrs__$1.item(p1__87091_SHARP_);
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
var seq__87098_87104 = cljs.core.seq.call(null,styles);
var chunk__87099_87105 = null;
var count__87100_87106 = (0);
var i__87101_87107 = (0);
while(true){
if((i__87101_87107 < count__87100_87106)){
var vec__87102_87108 = cljs.core._nth.call(null,chunk__87099_87105,i__87101_87107);
var name_87109 = cljs.core.nth.call(null,vec__87102_87108,(0),null);
var value_87110 = cljs.core.nth.call(null,vec__87102_87108,(1),null);
domina.set_style_BANG_.call(null,content,name_87109,value_87110);

var G__87111 = seq__87098_87104;
var G__87112 = chunk__87099_87105;
var G__87113 = count__87100_87106;
var G__87114 = (i__87101_87107 + (1));
seq__87098_87104 = G__87111;
chunk__87099_87105 = G__87112;
count__87100_87106 = G__87113;
i__87101_87107 = G__87114;
continue;
} else {
var temp__4126__auto___87115 = cljs.core.seq.call(null,seq__87098_87104);
if(temp__4126__auto___87115){
var seq__87098_87116__$1 = temp__4126__auto___87115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87098_87116__$1)){
var c__4768__auto___87117 = cljs.core.chunk_first.call(null,seq__87098_87116__$1);
var G__87118 = cljs.core.chunk_rest.call(null,seq__87098_87116__$1);
var G__87119 = c__4768__auto___87117;
var G__87120 = cljs.core.count.call(null,c__4768__auto___87117);
var G__87121 = (0);
seq__87098_87104 = G__87118;
chunk__87099_87105 = G__87119;
count__87100_87106 = G__87120;
i__87101_87107 = G__87121;
continue;
} else {
var vec__87103_87122 = cljs.core.first.call(null,seq__87098_87116__$1);
var name_87123 = cljs.core.nth.call(null,vec__87103_87122,(0),null);
var value_87124 = cljs.core.nth.call(null,vec__87103_87122,(1),null);
domina.set_style_BANG_.call(null,content,name_87123,value_87124);

var G__87125 = cljs.core.next.call(null,seq__87098_87116__$1);
var G__87126 = null;
var G__87127 = (0);
var G__87128 = (0);
seq__87098_87104 = G__87125;
chunk__87099_87105 = G__87126;
count__87100_87106 = G__87127;
i__87101_87107 = G__87128;
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
var seq__87135_87141 = cljs.core.seq.call(null,attrs);
var chunk__87136_87142 = null;
var count__87137_87143 = (0);
var i__87138_87144 = (0);
while(true){
if((i__87138_87144 < count__87137_87143)){
var vec__87139_87145 = cljs.core._nth.call(null,chunk__87136_87142,i__87138_87144);
var name_87146 = cljs.core.nth.call(null,vec__87139_87145,(0),null);
var value_87147 = cljs.core.nth.call(null,vec__87139_87145,(1),null);
domina.set_attr_BANG_.call(null,content,name_87146,value_87147);

var G__87148 = seq__87135_87141;
var G__87149 = chunk__87136_87142;
var G__87150 = count__87137_87143;
var G__87151 = (i__87138_87144 + (1));
seq__87135_87141 = G__87148;
chunk__87136_87142 = G__87149;
count__87137_87143 = G__87150;
i__87138_87144 = G__87151;
continue;
} else {
var temp__4126__auto___87152 = cljs.core.seq.call(null,seq__87135_87141);
if(temp__4126__auto___87152){
var seq__87135_87153__$1 = temp__4126__auto___87152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87135_87153__$1)){
var c__4768__auto___87154 = cljs.core.chunk_first.call(null,seq__87135_87153__$1);
var G__87155 = cljs.core.chunk_rest.call(null,seq__87135_87153__$1);
var G__87156 = c__4768__auto___87154;
var G__87157 = cljs.core.count.call(null,c__4768__auto___87154);
var G__87158 = (0);
seq__87135_87141 = G__87155;
chunk__87136_87142 = G__87156;
count__87137_87143 = G__87157;
i__87138_87144 = G__87158;
continue;
} else {
var vec__87140_87159 = cljs.core.first.call(null,seq__87135_87153__$1);
var name_87160 = cljs.core.nth.call(null,vec__87140_87159,(0),null);
var value_87161 = cljs.core.nth.call(null,vec__87140_87159,(1),null);
domina.set_attr_BANG_.call(null,content,name_87160,value_87161);

var G__87162 = cljs.core.next.call(null,seq__87135_87153__$1);
var G__87163 = null;
var G__87164 = (0);
var G__87165 = (0);
seq__87135_87141 = G__87162;
chunk__87136_87142 = G__87163;
count__87137_87143 = G__87164;
i__87138_87144 = G__87165;
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
var seq__87170_87174 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__87171_87175 = null;
var count__87172_87176 = (0);
var i__87173_87177 = (0);
while(true){
if((i__87173_87177 < count__87172_87176)){
var node_87178 = cljs.core._nth.call(null,chunk__87171_87175,i__87173_87177);
goog.dom.classes.add(node_87178,class$);

var G__87179 = seq__87170_87174;
var G__87180 = chunk__87171_87175;
var G__87181 = count__87172_87176;
var G__87182 = (i__87173_87177 + (1));
seq__87170_87174 = G__87179;
chunk__87171_87175 = G__87180;
count__87172_87176 = G__87181;
i__87173_87177 = G__87182;
continue;
} else {
var temp__4126__auto___87183 = cljs.core.seq.call(null,seq__87170_87174);
if(temp__4126__auto___87183){
var seq__87170_87184__$1 = temp__4126__auto___87183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87170_87184__$1)){
var c__4768__auto___87185 = cljs.core.chunk_first.call(null,seq__87170_87184__$1);
var G__87186 = cljs.core.chunk_rest.call(null,seq__87170_87184__$1);
var G__87187 = c__4768__auto___87185;
var G__87188 = cljs.core.count.call(null,c__4768__auto___87185);
var G__87189 = (0);
seq__87170_87174 = G__87186;
chunk__87171_87175 = G__87187;
count__87172_87176 = G__87188;
i__87173_87177 = G__87189;
continue;
} else {
var node_87190 = cljs.core.first.call(null,seq__87170_87184__$1);
goog.dom.classes.add(node_87190,class$);

var G__87191 = cljs.core.next.call(null,seq__87170_87184__$1);
var G__87192 = null;
var G__87193 = (0);
var G__87194 = (0);
seq__87170_87174 = G__87191;
chunk__87171_87175 = G__87192;
count__87172_87176 = G__87193;
i__87173_87177 = G__87194;
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
var seq__87199_87203 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__87200_87204 = null;
var count__87201_87205 = (0);
var i__87202_87206 = (0);
while(true){
if((i__87202_87206 < count__87201_87205)){
var node_87207 = cljs.core._nth.call(null,chunk__87200_87204,i__87202_87206);
goog.dom.classes.remove(node_87207,class$);

var G__87208 = seq__87199_87203;
var G__87209 = chunk__87200_87204;
var G__87210 = count__87201_87205;
var G__87211 = (i__87202_87206 + (1));
seq__87199_87203 = G__87208;
chunk__87200_87204 = G__87209;
count__87201_87205 = G__87210;
i__87202_87206 = G__87211;
continue;
} else {
var temp__4126__auto___87212 = cljs.core.seq.call(null,seq__87199_87203);
if(temp__4126__auto___87212){
var seq__87199_87213__$1 = temp__4126__auto___87212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87199_87213__$1)){
var c__4768__auto___87214 = cljs.core.chunk_first.call(null,seq__87199_87213__$1);
var G__87215 = cljs.core.chunk_rest.call(null,seq__87199_87213__$1);
var G__87216 = c__4768__auto___87214;
var G__87217 = cljs.core.count.call(null,c__4768__auto___87214);
var G__87218 = (0);
seq__87199_87203 = G__87215;
chunk__87200_87204 = G__87216;
count__87201_87205 = G__87217;
i__87202_87206 = G__87218;
continue;
} else {
var node_87219 = cljs.core.first.call(null,seq__87199_87213__$1);
goog.dom.classes.remove(node_87219,class$);

var G__87220 = cljs.core.next.call(null,seq__87199_87213__$1);
var G__87221 = null;
var G__87222 = (0);
var G__87223 = (0);
seq__87199_87203 = G__87220;
chunk__87200_87204 = G__87221;
count__87201_87205 = G__87222;
i__87202_87206 = G__87223;
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
var seq__87228_87232 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__87229_87233 = null;
var count__87230_87234 = (0);
var i__87231_87235 = (0);
while(true){
if((i__87231_87235 < count__87230_87234)){
var node_87236 = cljs.core._nth.call(null,chunk__87229_87233,i__87231_87235);
goog.dom.classes.toggle(node_87236,class$);

var G__87237 = seq__87228_87232;
var G__87238 = chunk__87229_87233;
var G__87239 = count__87230_87234;
var G__87240 = (i__87231_87235 + (1));
seq__87228_87232 = G__87237;
chunk__87229_87233 = G__87238;
count__87230_87234 = G__87239;
i__87231_87235 = G__87240;
continue;
} else {
var temp__4126__auto___87241 = cljs.core.seq.call(null,seq__87228_87232);
if(temp__4126__auto___87241){
var seq__87228_87242__$1 = temp__4126__auto___87241;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87228_87242__$1)){
var c__4768__auto___87243 = cljs.core.chunk_first.call(null,seq__87228_87242__$1);
var G__87244 = cljs.core.chunk_rest.call(null,seq__87228_87242__$1);
var G__87245 = c__4768__auto___87243;
var G__87246 = cljs.core.count.call(null,c__4768__auto___87243);
var G__87247 = (0);
seq__87228_87232 = G__87244;
chunk__87229_87233 = G__87245;
count__87230_87234 = G__87246;
i__87231_87235 = G__87247;
continue;
} else {
var node_87248 = cljs.core.first.call(null,seq__87228_87242__$1);
goog.dom.classes.toggle(node_87248,class$);

var G__87249 = cljs.core.next.call(null,seq__87228_87242__$1);
var G__87250 = null;
var G__87251 = (0);
var G__87252 = (0);
seq__87228_87232 = G__87249;
chunk__87229_87233 = G__87250;
count__87230_87234 = G__87251;
i__87231_87235 = G__87252;
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
var classes_87261__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__87257_87262 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__87258_87263 = null;
var count__87259_87264 = (0);
var i__87260_87265 = (0);
while(true){
if((i__87260_87265 < count__87259_87264)){
var node_87266 = cljs.core._nth.call(null,chunk__87258_87263,i__87260_87265);
goog.dom.classes.set(node_87266,classes_87261__$1);

var G__87267 = seq__87257_87262;
var G__87268 = chunk__87258_87263;
var G__87269 = count__87259_87264;
var G__87270 = (i__87260_87265 + (1));
seq__87257_87262 = G__87267;
chunk__87258_87263 = G__87268;
count__87259_87264 = G__87269;
i__87260_87265 = G__87270;
continue;
} else {
var temp__4126__auto___87271 = cljs.core.seq.call(null,seq__87257_87262);
if(temp__4126__auto___87271){
var seq__87257_87272__$1 = temp__4126__auto___87271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87257_87272__$1)){
var c__4768__auto___87273 = cljs.core.chunk_first.call(null,seq__87257_87272__$1);
var G__87274 = cljs.core.chunk_rest.call(null,seq__87257_87272__$1);
var G__87275 = c__4768__auto___87273;
var G__87276 = cljs.core.count.call(null,c__4768__auto___87273);
var G__87277 = (0);
seq__87257_87262 = G__87274;
chunk__87258_87263 = G__87275;
count__87259_87264 = G__87276;
i__87260_87265 = G__87277;
continue;
} else {
var node_87278 = cljs.core.first.call(null,seq__87257_87272__$1);
goog.dom.classes.set(node_87278,classes_87261__$1);

var G__87279 = cljs.core.next.call(null,seq__87257_87272__$1);
var G__87280 = null;
var G__87281 = (0);
var G__87282 = (0);
seq__87257_87262 = G__87279;
chunk__87258_87263 = G__87280;
count__87259_87264 = G__87281;
i__87260_87265 = G__87282;
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
var seq__87287_87291 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__87288_87292 = null;
var count__87289_87293 = (0);
var i__87290_87294 = (0);
while(true){
if((i__87290_87294 < count__87289_87293)){
var node_87295 = cljs.core._nth.call(null,chunk__87288_87292,i__87290_87294);
goog.dom.setTextContent(node_87295,value);

var G__87296 = seq__87287_87291;
var G__87297 = chunk__87288_87292;
var G__87298 = count__87289_87293;
var G__87299 = (i__87290_87294 + (1));
seq__87287_87291 = G__87296;
chunk__87288_87292 = G__87297;
count__87289_87293 = G__87298;
i__87290_87294 = G__87299;
continue;
} else {
var temp__4126__auto___87300 = cljs.core.seq.call(null,seq__87287_87291);
if(temp__4126__auto___87300){
var seq__87287_87301__$1 = temp__4126__auto___87300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87287_87301__$1)){
var c__4768__auto___87302 = cljs.core.chunk_first.call(null,seq__87287_87301__$1);
var G__87303 = cljs.core.chunk_rest.call(null,seq__87287_87301__$1);
var G__87304 = c__4768__auto___87302;
var G__87305 = cljs.core.count.call(null,c__4768__auto___87302);
var G__87306 = (0);
seq__87287_87291 = G__87303;
chunk__87288_87292 = G__87304;
count__87289_87293 = G__87305;
i__87290_87294 = G__87306;
continue;
} else {
var node_87307 = cljs.core.first.call(null,seq__87287_87301__$1);
goog.dom.setTextContent(node_87307,value);

var G__87308 = cljs.core.next.call(null,seq__87287_87301__$1);
var G__87309 = null;
var G__87310 = (0);
var G__87311 = (0);
seq__87287_87291 = G__87308;
chunk__87288_87292 = G__87309;
count__87289_87293 = G__87310;
i__87290_87294 = G__87311;
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
var seq__87316_87320 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__87317_87321 = null;
var count__87318_87322 = (0);
var i__87319_87323 = (0);
while(true){
if((i__87319_87323 < count__87318_87322)){
var node_87324 = cljs.core._nth.call(null,chunk__87317_87321,i__87319_87323);
goog.dom.forms.setValue(node_87324,value);

var G__87325 = seq__87316_87320;
var G__87326 = chunk__87317_87321;
var G__87327 = count__87318_87322;
var G__87328 = (i__87319_87323 + (1));
seq__87316_87320 = G__87325;
chunk__87317_87321 = G__87326;
count__87318_87322 = G__87327;
i__87319_87323 = G__87328;
continue;
} else {
var temp__4126__auto___87329 = cljs.core.seq.call(null,seq__87316_87320);
if(temp__4126__auto___87329){
var seq__87316_87330__$1 = temp__4126__auto___87329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87316_87330__$1)){
var c__4768__auto___87331 = cljs.core.chunk_first.call(null,seq__87316_87330__$1);
var G__87332 = cljs.core.chunk_rest.call(null,seq__87316_87330__$1);
var G__87333 = c__4768__auto___87331;
var G__87334 = cljs.core.count.call(null,c__4768__auto___87331);
var G__87335 = (0);
seq__87316_87320 = G__87332;
chunk__87317_87321 = G__87333;
count__87318_87322 = G__87334;
i__87319_87323 = G__87335;
continue;
} else {
var node_87336 = cljs.core.first.call(null,seq__87316_87330__$1);
goog.dom.forms.setValue(node_87336,value);

var G__87337 = cljs.core.next.call(null,seq__87316_87330__$1);
var G__87338 = null;
var G__87339 = (0);
var G__87340 = (0);
seq__87316_87320 = G__87337;
chunk__87317_87321 = G__87338;
count__87318_87322 = G__87339;
i__87319_87323 = G__87340;
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
var value_87351 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__87347_87352 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__87348_87353 = null;
var count__87349_87354 = (0);
var i__87350_87355 = (0);
while(true){
if((i__87350_87355 < count__87349_87354)){
var node_87356 = cljs.core._nth.call(null,chunk__87348_87353,i__87350_87355);
node_87356.innerHTML = value_87351;

var G__87357 = seq__87347_87352;
var G__87358 = chunk__87348_87353;
var G__87359 = count__87349_87354;
var G__87360 = (i__87350_87355 + (1));
seq__87347_87352 = G__87357;
chunk__87348_87353 = G__87358;
count__87349_87354 = G__87359;
i__87350_87355 = G__87360;
continue;
} else {
var temp__4126__auto___87361 = cljs.core.seq.call(null,seq__87347_87352);
if(temp__4126__auto___87361){
var seq__87347_87362__$1 = temp__4126__auto___87361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87347_87362__$1)){
var c__4768__auto___87363 = cljs.core.chunk_first.call(null,seq__87347_87362__$1);
var G__87364 = cljs.core.chunk_rest.call(null,seq__87347_87362__$1);
var G__87365 = c__4768__auto___87363;
var G__87366 = cljs.core.count.call(null,c__4768__auto___87363);
var G__87367 = (0);
seq__87347_87352 = G__87364;
chunk__87348_87353 = G__87365;
count__87349_87354 = G__87366;
i__87350_87355 = G__87367;
continue;
} else {
var node_87368 = cljs.core.first.call(null,seq__87347_87362__$1);
node_87368.innerHTML = value_87351;

var G__87369 = cljs.core.next.call(null,seq__87347_87362__$1);
var G__87370 = null;
var G__87371 = (0);
var G__87372 = (0);
seq__87347_87352 = G__87369;
chunk__87348_87353 = G__87370;
count__87349_87354 = G__87371;
i__87350_87355 = G__87372;
continue;
}
} else {
}
}
break;
}
}catch (e87346){if((e87346 instanceof Error)){
var e_87373 = e87346;
domina.replace_children_BANG_.call(null,content,value_87351);
} else {
throw e87346;

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
var seq__87380_87384 = cljs.core.seq.call(null,children);
var chunk__87381_87385 = null;
var count__87382_87386 = (0);
var i__87383_87387 = (0);
while(true){
if((i__87383_87387 < count__87382_87386)){
var child_87388 = cljs.core._nth.call(null,chunk__87381_87385,i__87383_87387);
frag.appendChild(child_87388);

var G__87389 = seq__87380_87384;
var G__87390 = chunk__87381_87385;
var G__87391 = count__87382_87386;
var G__87392 = (i__87383_87387 + (1));
seq__87380_87384 = G__87389;
chunk__87381_87385 = G__87390;
count__87382_87386 = G__87391;
i__87383_87387 = G__87392;
continue;
} else {
var temp__4126__auto___87393 = cljs.core.seq.call(null,seq__87380_87384);
if(temp__4126__auto___87393){
var seq__87380_87394__$1 = temp__4126__auto___87393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87380_87394__$1)){
var c__4768__auto___87395 = cljs.core.chunk_first.call(null,seq__87380_87394__$1);
var G__87396 = cljs.core.chunk_rest.call(null,seq__87380_87394__$1);
var G__87397 = c__4768__auto___87395;
var G__87398 = cljs.core.count.call(null,c__4768__auto___87395);
var G__87399 = (0);
seq__87380_87384 = G__87396;
chunk__87381_87385 = G__87397;
count__87382_87386 = G__87398;
i__87383_87387 = G__87399;
continue;
} else {
var child_87400 = cljs.core.first.call(null,seq__87380_87394__$1);
frag.appendChild(child_87400);

var G__87401 = cljs.core.next.call(null,seq__87380_87394__$1);
var G__87402 = null;
var G__87403 = (0);
var G__87404 = (0);
seq__87380_87384 = G__87401;
chunk__87381_87385 = G__87402;
count__87382_87386 = G__87403;
i__87383_87387 = G__87404;
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
return (function (p1__87374_SHARP_,p2__87375_SHARP_){
return f.call(null,p1__87374_SHARP_,p2__87375_SHARP_);
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
if((function (){var G__87406 = list_thing;
if(G__87406){
var bit__4662__auto__ = (G__87406.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__87406.cljs$core$ISeqable$)){
return true;
} else {
if((!G__87406.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__87406);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__87406);
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
if((function (){var G__87407 = content;
if(G__87407){
var bit__4662__auto__ = (G__87407.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__87407.cljs$core$ISeqable$)){
return true;
} else {
if((!G__87407.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__87407);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__87407);
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
if((function (){var G__87408 = content;
if(G__87408){
var bit__4662__auto__ = (G__87408.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__87408.cljs$core$ISeqable$)){
return true;
} else {
if((!G__87408.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__87408);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__87408);
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
