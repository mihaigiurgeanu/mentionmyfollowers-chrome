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
var opt_wrapper_22071 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_22072 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_22073 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_22073,opt_wrapper_22071,table_section_wrapper_22072,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_22071,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_22072,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_22072,cell_wrapper_22073,table_section_wrapper_22072,table_section_wrapper_22072]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__22078 = cljs.core.seq.call(null,tbody);
var chunk__22079 = null;
var count__22080 = (0);
var i__22081 = (0);
while(true){
if((i__22081 < count__22080)){
var child = cljs.core._nth.call(null,chunk__22079,i__22081);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__22082 = seq__22078;
var G__22083 = chunk__22079;
var G__22084 = count__22080;
var G__22085 = (i__22081 + (1));
seq__22078 = G__22082;
chunk__22079 = G__22083;
count__22080 = G__22084;
i__22081 = G__22085;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__22078);
if(temp__4126__auto__){
var seq__22078__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22078__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__22078__$1);
var G__22086 = cljs.core.chunk_rest.call(null,seq__22078__$1);
var G__22087 = c__4768__auto__;
var G__22088 = cljs.core.count.call(null,c__4768__auto__);
var G__22089 = (0);
seq__22078 = G__22086;
chunk__22079 = G__22087;
count__22080 = G__22088;
i__22081 = G__22089;
continue;
} else {
var child = cljs.core.first.call(null,seq__22078__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__22090 = cljs.core.next.call(null,seq__22078__$1);
var G__22091 = null;
var G__22092 = (0);
var G__22093 = (0);
seq__22078 = G__22090;
chunk__22079 = G__22091;
count__22080 = G__22092;
i__22081 = G__22093;
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
var vec__22095 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__22095,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__22095,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__22095,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__22096 = wrapper.lastChild;
var G__22097 = (level - (1));
wrapper = G__22096;
level = G__22097;
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

domina.DomContent = (function (){var obj22099 = {};
return obj22099;
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
var G__22100__i = 0, G__22100__a = new Array(arguments.length -  0);
while (G__22100__i < G__22100__a.length) {G__22100__a[G__22100__i] = arguments[G__22100__i + 0]; ++G__22100__i;}
  mesg = new cljs.core.IndexedSeq(G__22100__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__22101){
var mesg = cljs.core.seq(arglist__22101);
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
var G__22102__i = 0, G__22102__a = new Array(arguments.length -  0);
while (G__22102__i < G__22102__a.length) {G__22102__a[G__22102__i] = arguments[G__22102__i + 0]; ++G__22102__i;}
  mesg = new cljs.core.IndexedSeq(G__22102__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__22103){
var mesg = cljs.core.seq(arglist__22103);
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
var G__22104__i = 0, G__22104__a = new Array(arguments.length -  0);
while (G__22104__i < G__22104__a.length) {G__22104__a[G__22104__i] = arguments[G__22104__i + 0]; ++G__22104__i;}
  contents = new cljs.core.IndexedSeq(G__22104__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__22105){
var contents = cljs.core.seq(arglist__22105);
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
return cljs.core.map.call(null,(function (p1__22106_SHARP_){
return p1__22106_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__22107_SHARP_,p2__22108_SHARP_){
return goog.dom.insertChildAt(p1__22107_SHARP_,p2__22108_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__22110_SHARP_,p2__22109_SHARP_){
return goog.dom.insertSiblingBefore(p2__22109_SHARP_,p1__22110_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__22112_SHARP_,p2__22111_SHARP_){
return goog.dom.insertSiblingAfter(p2__22111_SHARP_,p1__22112_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__22114_SHARP_,p2__22113_SHARP_){
return goog.dom.replaceNode(p2__22113_SHARP_,p1__22114_SHARP_);
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
var seq__22119_22123 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22120_22124 = null;
var count__22121_22125 = (0);
var i__22122_22126 = (0);
while(true){
if((i__22122_22126 < count__22121_22125)){
var n_22127 = cljs.core._nth.call(null,chunk__22120_22124,i__22122_22126);
goog.style.setStyle(n_22127,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__22128 = seq__22119_22123;
var G__22129 = chunk__22120_22124;
var G__22130 = count__22121_22125;
var G__22131 = (i__22122_22126 + (1));
seq__22119_22123 = G__22128;
chunk__22120_22124 = G__22129;
count__22121_22125 = G__22130;
i__22122_22126 = G__22131;
continue;
} else {
var temp__4126__auto___22132 = cljs.core.seq.call(null,seq__22119_22123);
if(temp__4126__auto___22132){
var seq__22119_22133__$1 = temp__4126__auto___22132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22119_22133__$1)){
var c__4768__auto___22134 = cljs.core.chunk_first.call(null,seq__22119_22133__$1);
var G__22135 = cljs.core.chunk_rest.call(null,seq__22119_22133__$1);
var G__22136 = c__4768__auto___22134;
var G__22137 = cljs.core.count.call(null,c__4768__auto___22134);
var G__22138 = (0);
seq__22119_22123 = G__22135;
chunk__22120_22124 = G__22136;
count__22121_22125 = G__22137;
i__22122_22126 = G__22138;
continue;
} else {
var n_22139 = cljs.core.first.call(null,seq__22119_22133__$1);
goog.style.setStyle(n_22139,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__22140 = cljs.core.next.call(null,seq__22119_22133__$1);
var G__22141 = null;
var G__22142 = (0);
var G__22143 = (0);
seq__22119_22123 = G__22140;
chunk__22120_22124 = G__22141;
count__22121_22125 = G__22142;
i__22122_22126 = G__22143;
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
var G__22144__i = 0, G__22144__a = new Array(arguments.length -  2);
while (G__22144__i < G__22144__a.length) {G__22144__a[G__22144__i] = arguments[G__22144__i + 2]; ++G__22144__i;}
  value = new cljs.core.IndexedSeq(G__22144__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__22145){
var content = cljs.core.first(arglist__22145);
arglist__22145 = cljs.core.next(arglist__22145);
var name = cljs.core.first(arglist__22145);
var value = cljs.core.rest(arglist__22145);
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
var seq__22150_22154 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22151_22155 = null;
var count__22152_22156 = (0);
var i__22153_22157 = (0);
while(true){
if((i__22153_22157 < count__22152_22156)){
var n_22158 = cljs.core._nth.call(null,chunk__22151_22155,i__22153_22157);
n_22158.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__22159 = seq__22150_22154;
var G__22160 = chunk__22151_22155;
var G__22161 = count__22152_22156;
var G__22162 = (i__22153_22157 + (1));
seq__22150_22154 = G__22159;
chunk__22151_22155 = G__22160;
count__22152_22156 = G__22161;
i__22153_22157 = G__22162;
continue;
} else {
var temp__4126__auto___22163 = cljs.core.seq.call(null,seq__22150_22154);
if(temp__4126__auto___22163){
var seq__22150_22164__$1 = temp__4126__auto___22163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22150_22164__$1)){
var c__4768__auto___22165 = cljs.core.chunk_first.call(null,seq__22150_22164__$1);
var G__22166 = cljs.core.chunk_rest.call(null,seq__22150_22164__$1);
var G__22167 = c__4768__auto___22165;
var G__22168 = cljs.core.count.call(null,c__4768__auto___22165);
var G__22169 = (0);
seq__22150_22154 = G__22166;
chunk__22151_22155 = G__22167;
count__22152_22156 = G__22168;
i__22153_22157 = G__22169;
continue;
} else {
var n_22170 = cljs.core.first.call(null,seq__22150_22164__$1);
n_22170.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__22171 = cljs.core.next.call(null,seq__22150_22164__$1);
var G__22172 = null;
var G__22173 = (0);
var G__22174 = (0);
seq__22150_22154 = G__22171;
chunk__22151_22155 = G__22172;
count__22152_22156 = G__22173;
i__22153_22157 = G__22174;
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
var G__22175__i = 0, G__22175__a = new Array(arguments.length -  2);
while (G__22175__i < G__22175__a.length) {G__22175__a[G__22175__i] = arguments[G__22175__i + 2]; ++G__22175__i;}
  value = new cljs.core.IndexedSeq(G__22175__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__22176){
var content = cljs.core.first(arglist__22176);
arglist__22176 = cljs.core.next(arglist__22176);
var name = cljs.core.first(arglist__22176);
var value = cljs.core.rest(arglist__22176);
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
var seq__22181_22185 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22182_22186 = null;
var count__22183_22187 = (0);
var i__22184_22188 = (0);
while(true){
if((i__22184_22188 < count__22183_22187)){
var n_22189 = cljs.core._nth.call(null,chunk__22182_22186,i__22184_22188);
n_22189.removeAttribute(cljs.core.name.call(null,name));

var G__22190 = seq__22181_22185;
var G__22191 = chunk__22182_22186;
var G__22192 = count__22183_22187;
var G__22193 = (i__22184_22188 + (1));
seq__22181_22185 = G__22190;
chunk__22182_22186 = G__22191;
count__22183_22187 = G__22192;
i__22184_22188 = G__22193;
continue;
} else {
var temp__4126__auto___22194 = cljs.core.seq.call(null,seq__22181_22185);
if(temp__4126__auto___22194){
var seq__22181_22195__$1 = temp__4126__auto___22194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22181_22195__$1)){
var c__4768__auto___22196 = cljs.core.chunk_first.call(null,seq__22181_22195__$1);
var G__22197 = cljs.core.chunk_rest.call(null,seq__22181_22195__$1);
var G__22198 = c__4768__auto___22196;
var G__22199 = cljs.core.count.call(null,c__4768__auto___22196);
var G__22200 = (0);
seq__22181_22185 = G__22197;
chunk__22182_22186 = G__22198;
count__22183_22187 = G__22199;
i__22184_22188 = G__22200;
continue;
} else {
var n_22201 = cljs.core.first.call(null,seq__22181_22195__$1);
n_22201.removeAttribute(cljs.core.name.call(null,name));

var G__22202 = cljs.core.next.call(null,seq__22181_22195__$1);
var G__22203 = null;
var G__22204 = (0);
var G__22205 = (0);
seq__22181_22185 = G__22202;
chunk__22182_22186 = G__22203;
count__22183_22187 = G__22204;
i__22184_22188 = G__22205;
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
var vec__22207 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__22207,(0),null);
var v = cljs.core.nth.call(null,vec__22207,(1),null);
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
return (function (p1__22208_SHARP_){
var attr = attrs__$1.item(p1__22208_SHARP_);
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
var seq__22215_22221 = cljs.core.seq.call(null,styles);
var chunk__22216_22222 = null;
var count__22217_22223 = (0);
var i__22218_22224 = (0);
while(true){
if((i__22218_22224 < count__22217_22223)){
var vec__22219_22225 = cljs.core._nth.call(null,chunk__22216_22222,i__22218_22224);
var name_22226 = cljs.core.nth.call(null,vec__22219_22225,(0),null);
var value_22227 = cljs.core.nth.call(null,vec__22219_22225,(1),null);
domina.set_style_BANG_.call(null,content,name_22226,value_22227);

var G__22228 = seq__22215_22221;
var G__22229 = chunk__22216_22222;
var G__22230 = count__22217_22223;
var G__22231 = (i__22218_22224 + (1));
seq__22215_22221 = G__22228;
chunk__22216_22222 = G__22229;
count__22217_22223 = G__22230;
i__22218_22224 = G__22231;
continue;
} else {
var temp__4126__auto___22232 = cljs.core.seq.call(null,seq__22215_22221);
if(temp__4126__auto___22232){
var seq__22215_22233__$1 = temp__4126__auto___22232;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22215_22233__$1)){
var c__4768__auto___22234 = cljs.core.chunk_first.call(null,seq__22215_22233__$1);
var G__22235 = cljs.core.chunk_rest.call(null,seq__22215_22233__$1);
var G__22236 = c__4768__auto___22234;
var G__22237 = cljs.core.count.call(null,c__4768__auto___22234);
var G__22238 = (0);
seq__22215_22221 = G__22235;
chunk__22216_22222 = G__22236;
count__22217_22223 = G__22237;
i__22218_22224 = G__22238;
continue;
} else {
var vec__22220_22239 = cljs.core.first.call(null,seq__22215_22233__$1);
var name_22240 = cljs.core.nth.call(null,vec__22220_22239,(0),null);
var value_22241 = cljs.core.nth.call(null,vec__22220_22239,(1),null);
domina.set_style_BANG_.call(null,content,name_22240,value_22241);

var G__22242 = cljs.core.next.call(null,seq__22215_22233__$1);
var G__22243 = null;
var G__22244 = (0);
var G__22245 = (0);
seq__22215_22221 = G__22242;
chunk__22216_22222 = G__22243;
count__22217_22223 = G__22244;
i__22218_22224 = G__22245;
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
var seq__22252_22258 = cljs.core.seq.call(null,attrs);
var chunk__22253_22259 = null;
var count__22254_22260 = (0);
var i__22255_22261 = (0);
while(true){
if((i__22255_22261 < count__22254_22260)){
var vec__22256_22262 = cljs.core._nth.call(null,chunk__22253_22259,i__22255_22261);
var name_22263 = cljs.core.nth.call(null,vec__22256_22262,(0),null);
var value_22264 = cljs.core.nth.call(null,vec__22256_22262,(1),null);
domina.set_attr_BANG_.call(null,content,name_22263,value_22264);

var G__22265 = seq__22252_22258;
var G__22266 = chunk__22253_22259;
var G__22267 = count__22254_22260;
var G__22268 = (i__22255_22261 + (1));
seq__22252_22258 = G__22265;
chunk__22253_22259 = G__22266;
count__22254_22260 = G__22267;
i__22255_22261 = G__22268;
continue;
} else {
var temp__4126__auto___22269 = cljs.core.seq.call(null,seq__22252_22258);
if(temp__4126__auto___22269){
var seq__22252_22270__$1 = temp__4126__auto___22269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22252_22270__$1)){
var c__4768__auto___22271 = cljs.core.chunk_first.call(null,seq__22252_22270__$1);
var G__22272 = cljs.core.chunk_rest.call(null,seq__22252_22270__$1);
var G__22273 = c__4768__auto___22271;
var G__22274 = cljs.core.count.call(null,c__4768__auto___22271);
var G__22275 = (0);
seq__22252_22258 = G__22272;
chunk__22253_22259 = G__22273;
count__22254_22260 = G__22274;
i__22255_22261 = G__22275;
continue;
} else {
var vec__22257_22276 = cljs.core.first.call(null,seq__22252_22270__$1);
var name_22277 = cljs.core.nth.call(null,vec__22257_22276,(0),null);
var value_22278 = cljs.core.nth.call(null,vec__22257_22276,(1),null);
domina.set_attr_BANG_.call(null,content,name_22277,value_22278);

var G__22279 = cljs.core.next.call(null,seq__22252_22270__$1);
var G__22280 = null;
var G__22281 = (0);
var G__22282 = (0);
seq__22252_22258 = G__22279;
chunk__22253_22259 = G__22280;
count__22254_22260 = G__22281;
i__22255_22261 = G__22282;
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
var seq__22287_22291 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22288_22292 = null;
var count__22289_22293 = (0);
var i__22290_22294 = (0);
while(true){
if((i__22290_22294 < count__22289_22293)){
var node_22295 = cljs.core._nth.call(null,chunk__22288_22292,i__22290_22294);
goog.dom.classes.add(node_22295,class$);

var G__22296 = seq__22287_22291;
var G__22297 = chunk__22288_22292;
var G__22298 = count__22289_22293;
var G__22299 = (i__22290_22294 + (1));
seq__22287_22291 = G__22296;
chunk__22288_22292 = G__22297;
count__22289_22293 = G__22298;
i__22290_22294 = G__22299;
continue;
} else {
var temp__4126__auto___22300 = cljs.core.seq.call(null,seq__22287_22291);
if(temp__4126__auto___22300){
var seq__22287_22301__$1 = temp__4126__auto___22300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22287_22301__$1)){
var c__4768__auto___22302 = cljs.core.chunk_first.call(null,seq__22287_22301__$1);
var G__22303 = cljs.core.chunk_rest.call(null,seq__22287_22301__$1);
var G__22304 = c__4768__auto___22302;
var G__22305 = cljs.core.count.call(null,c__4768__auto___22302);
var G__22306 = (0);
seq__22287_22291 = G__22303;
chunk__22288_22292 = G__22304;
count__22289_22293 = G__22305;
i__22290_22294 = G__22306;
continue;
} else {
var node_22307 = cljs.core.first.call(null,seq__22287_22301__$1);
goog.dom.classes.add(node_22307,class$);

var G__22308 = cljs.core.next.call(null,seq__22287_22301__$1);
var G__22309 = null;
var G__22310 = (0);
var G__22311 = (0);
seq__22287_22291 = G__22308;
chunk__22288_22292 = G__22309;
count__22289_22293 = G__22310;
i__22290_22294 = G__22311;
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
var seq__22316_22320 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22317_22321 = null;
var count__22318_22322 = (0);
var i__22319_22323 = (0);
while(true){
if((i__22319_22323 < count__22318_22322)){
var node_22324 = cljs.core._nth.call(null,chunk__22317_22321,i__22319_22323);
goog.dom.classes.remove(node_22324,class$);

var G__22325 = seq__22316_22320;
var G__22326 = chunk__22317_22321;
var G__22327 = count__22318_22322;
var G__22328 = (i__22319_22323 + (1));
seq__22316_22320 = G__22325;
chunk__22317_22321 = G__22326;
count__22318_22322 = G__22327;
i__22319_22323 = G__22328;
continue;
} else {
var temp__4126__auto___22329 = cljs.core.seq.call(null,seq__22316_22320);
if(temp__4126__auto___22329){
var seq__22316_22330__$1 = temp__4126__auto___22329;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22316_22330__$1)){
var c__4768__auto___22331 = cljs.core.chunk_first.call(null,seq__22316_22330__$1);
var G__22332 = cljs.core.chunk_rest.call(null,seq__22316_22330__$1);
var G__22333 = c__4768__auto___22331;
var G__22334 = cljs.core.count.call(null,c__4768__auto___22331);
var G__22335 = (0);
seq__22316_22320 = G__22332;
chunk__22317_22321 = G__22333;
count__22318_22322 = G__22334;
i__22319_22323 = G__22335;
continue;
} else {
var node_22336 = cljs.core.first.call(null,seq__22316_22330__$1);
goog.dom.classes.remove(node_22336,class$);

var G__22337 = cljs.core.next.call(null,seq__22316_22330__$1);
var G__22338 = null;
var G__22339 = (0);
var G__22340 = (0);
seq__22316_22320 = G__22337;
chunk__22317_22321 = G__22338;
count__22318_22322 = G__22339;
i__22319_22323 = G__22340;
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
var seq__22345_22349 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22346_22350 = null;
var count__22347_22351 = (0);
var i__22348_22352 = (0);
while(true){
if((i__22348_22352 < count__22347_22351)){
var node_22353 = cljs.core._nth.call(null,chunk__22346_22350,i__22348_22352);
goog.dom.classes.toggle(node_22353,class$);

var G__22354 = seq__22345_22349;
var G__22355 = chunk__22346_22350;
var G__22356 = count__22347_22351;
var G__22357 = (i__22348_22352 + (1));
seq__22345_22349 = G__22354;
chunk__22346_22350 = G__22355;
count__22347_22351 = G__22356;
i__22348_22352 = G__22357;
continue;
} else {
var temp__4126__auto___22358 = cljs.core.seq.call(null,seq__22345_22349);
if(temp__4126__auto___22358){
var seq__22345_22359__$1 = temp__4126__auto___22358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22345_22359__$1)){
var c__4768__auto___22360 = cljs.core.chunk_first.call(null,seq__22345_22359__$1);
var G__22361 = cljs.core.chunk_rest.call(null,seq__22345_22359__$1);
var G__22362 = c__4768__auto___22360;
var G__22363 = cljs.core.count.call(null,c__4768__auto___22360);
var G__22364 = (0);
seq__22345_22349 = G__22361;
chunk__22346_22350 = G__22362;
count__22347_22351 = G__22363;
i__22348_22352 = G__22364;
continue;
} else {
var node_22365 = cljs.core.first.call(null,seq__22345_22359__$1);
goog.dom.classes.toggle(node_22365,class$);

var G__22366 = cljs.core.next.call(null,seq__22345_22359__$1);
var G__22367 = null;
var G__22368 = (0);
var G__22369 = (0);
seq__22345_22349 = G__22366;
chunk__22346_22350 = G__22367;
count__22347_22351 = G__22368;
i__22348_22352 = G__22369;
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
var classes_22378__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__22374_22379 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22375_22380 = null;
var count__22376_22381 = (0);
var i__22377_22382 = (0);
while(true){
if((i__22377_22382 < count__22376_22381)){
var node_22383 = cljs.core._nth.call(null,chunk__22375_22380,i__22377_22382);
goog.dom.classes.set(node_22383,classes_22378__$1);

var G__22384 = seq__22374_22379;
var G__22385 = chunk__22375_22380;
var G__22386 = count__22376_22381;
var G__22387 = (i__22377_22382 + (1));
seq__22374_22379 = G__22384;
chunk__22375_22380 = G__22385;
count__22376_22381 = G__22386;
i__22377_22382 = G__22387;
continue;
} else {
var temp__4126__auto___22388 = cljs.core.seq.call(null,seq__22374_22379);
if(temp__4126__auto___22388){
var seq__22374_22389__$1 = temp__4126__auto___22388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22374_22389__$1)){
var c__4768__auto___22390 = cljs.core.chunk_first.call(null,seq__22374_22389__$1);
var G__22391 = cljs.core.chunk_rest.call(null,seq__22374_22389__$1);
var G__22392 = c__4768__auto___22390;
var G__22393 = cljs.core.count.call(null,c__4768__auto___22390);
var G__22394 = (0);
seq__22374_22379 = G__22391;
chunk__22375_22380 = G__22392;
count__22376_22381 = G__22393;
i__22377_22382 = G__22394;
continue;
} else {
var node_22395 = cljs.core.first.call(null,seq__22374_22389__$1);
goog.dom.classes.set(node_22395,classes_22378__$1);

var G__22396 = cljs.core.next.call(null,seq__22374_22389__$1);
var G__22397 = null;
var G__22398 = (0);
var G__22399 = (0);
seq__22374_22379 = G__22396;
chunk__22375_22380 = G__22397;
count__22376_22381 = G__22398;
i__22377_22382 = G__22399;
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
var seq__22404_22408 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22405_22409 = null;
var count__22406_22410 = (0);
var i__22407_22411 = (0);
while(true){
if((i__22407_22411 < count__22406_22410)){
var node_22412 = cljs.core._nth.call(null,chunk__22405_22409,i__22407_22411);
goog.dom.setTextContent(node_22412,value);

var G__22413 = seq__22404_22408;
var G__22414 = chunk__22405_22409;
var G__22415 = count__22406_22410;
var G__22416 = (i__22407_22411 + (1));
seq__22404_22408 = G__22413;
chunk__22405_22409 = G__22414;
count__22406_22410 = G__22415;
i__22407_22411 = G__22416;
continue;
} else {
var temp__4126__auto___22417 = cljs.core.seq.call(null,seq__22404_22408);
if(temp__4126__auto___22417){
var seq__22404_22418__$1 = temp__4126__auto___22417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22404_22418__$1)){
var c__4768__auto___22419 = cljs.core.chunk_first.call(null,seq__22404_22418__$1);
var G__22420 = cljs.core.chunk_rest.call(null,seq__22404_22418__$1);
var G__22421 = c__4768__auto___22419;
var G__22422 = cljs.core.count.call(null,c__4768__auto___22419);
var G__22423 = (0);
seq__22404_22408 = G__22420;
chunk__22405_22409 = G__22421;
count__22406_22410 = G__22422;
i__22407_22411 = G__22423;
continue;
} else {
var node_22424 = cljs.core.first.call(null,seq__22404_22418__$1);
goog.dom.setTextContent(node_22424,value);

var G__22425 = cljs.core.next.call(null,seq__22404_22418__$1);
var G__22426 = null;
var G__22427 = (0);
var G__22428 = (0);
seq__22404_22408 = G__22425;
chunk__22405_22409 = G__22426;
count__22406_22410 = G__22427;
i__22407_22411 = G__22428;
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
var seq__22433_22437 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22434_22438 = null;
var count__22435_22439 = (0);
var i__22436_22440 = (0);
while(true){
if((i__22436_22440 < count__22435_22439)){
var node_22441 = cljs.core._nth.call(null,chunk__22434_22438,i__22436_22440);
goog.dom.forms.setValue(node_22441,value);

var G__22442 = seq__22433_22437;
var G__22443 = chunk__22434_22438;
var G__22444 = count__22435_22439;
var G__22445 = (i__22436_22440 + (1));
seq__22433_22437 = G__22442;
chunk__22434_22438 = G__22443;
count__22435_22439 = G__22444;
i__22436_22440 = G__22445;
continue;
} else {
var temp__4126__auto___22446 = cljs.core.seq.call(null,seq__22433_22437);
if(temp__4126__auto___22446){
var seq__22433_22447__$1 = temp__4126__auto___22446;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22433_22447__$1)){
var c__4768__auto___22448 = cljs.core.chunk_first.call(null,seq__22433_22447__$1);
var G__22449 = cljs.core.chunk_rest.call(null,seq__22433_22447__$1);
var G__22450 = c__4768__auto___22448;
var G__22451 = cljs.core.count.call(null,c__4768__auto___22448);
var G__22452 = (0);
seq__22433_22437 = G__22449;
chunk__22434_22438 = G__22450;
count__22435_22439 = G__22451;
i__22436_22440 = G__22452;
continue;
} else {
var node_22453 = cljs.core.first.call(null,seq__22433_22447__$1);
goog.dom.forms.setValue(node_22453,value);

var G__22454 = cljs.core.next.call(null,seq__22433_22447__$1);
var G__22455 = null;
var G__22456 = (0);
var G__22457 = (0);
seq__22433_22437 = G__22454;
chunk__22434_22438 = G__22455;
count__22435_22439 = G__22456;
i__22436_22440 = G__22457;
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
var value_22468 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__22464_22469 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__22465_22470 = null;
var count__22466_22471 = (0);
var i__22467_22472 = (0);
while(true){
if((i__22467_22472 < count__22466_22471)){
var node_22473 = cljs.core._nth.call(null,chunk__22465_22470,i__22467_22472);
node_22473.innerHTML = value_22468;

var G__22474 = seq__22464_22469;
var G__22475 = chunk__22465_22470;
var G__22476 = count__22466_22471;
var G__22477 = (i__22467_22472 + (1));
seq__22464_22469 = G__22474;
chunk__22465_22470 = G__22475;
count__22466_22471 = G__22476;
i__22467_22472 = G__22477;
continue;
} else {
var temp__4126__auto___22478 = cljs.core.seq.call(null,seq__22464_22469);
if(temp__4126__auto___22478){
var seq__22464_22479__$1 = temp__4126__auto___22478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22464_22479__$1)){
var c__4768__auto___22480 = cljs.core.chunk_first.call(null,seq__22464_22479__$1);
var G__22481 = cljs.core.chunk_rest.call(null,seq__22464_22479__$1);
var G__22482 = c__4768__auto___22480;
var G__22483 = cljs.core.count.call(null,c__4768__auto___22480);
var G__22484 = (0);
seq__22464_22469 = G__22481;
chunk__22465_22470 = G__22482;
count__22466_22471 = G__22483;
i__22467_22472 = G__22484;
continue;
} else {
var node_22485 = cljs.core.first.call(null,seq__22464_22479__$1);
node_22485.innerHTML = value_22468;

var G__22486 = cljs.core.next.call(null,seq__22464_22479__$1);
var G__22487 = null;
var G__22488 = (0);
var G__22489 = (0);
seq__22464_22469 = G__22486;
chunk__22465_22470 = G__22487;
count__22466_22471 = G__22488;
i__22467_22472 = G__22489;
continue;
}
} else {
}
}
break;
}
}catch (e22463){if((e22463 instanceof Error)){
var e_22490 = e22463;
domina.replace_children_BANG_.call(null,content,value_22468);
} else {
throw e22463;

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
var seq__22497_22501 = cljs.core.seq.call(null,children);
var chunk__22498_22502 = null;
var count__22499_22503 = (0);
var i__22500_22504 = (0);
while(true){
if((i__22500_22504 < count__22499_22503)){
var child_22505 = cljs.core._nth.call(null,chunk__22498_22502,i__22500_22504);
frag.appendChild(child_22505);

var G__22506 = seq__22497_22501;
var G__22507 = chunk__22498_22502;
var G__22508 = count__22499_22503;
var G__22509 = (i__22500_22504 + (1));
seq__22497_22501 = G__22506;
chunk__22498_22502 = G__22507;
count__22499_22503 = G__22508;
i__22500_22504 = G__22509;
continue;
} else {
var temp__4126__auto___22510 = cljs.core.seq.call(null,seq__22497_22501);
if(temp__4126__auto___22510){
var seq__22497_22511__$1 = temp__4126__auto___22510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22497_22511__$1)){
var c__4768__auto___22512 = cljs.core.chunk_first.call(null,seq__22497_22511__$1);
var G__22513 = cljs.core.chunk_rest.call(null,seq__22497_22511__$1);
var G__22514 = c__4768__auto___22512;
var G__22515 = cljs.core.count.call(null,c__4768__auto___22512);
var G__22516 = (0);
seq__22497_22501 = G__22513;
chunk__22498_22502 = G__22514;
count__22499_22503 = G__22515;
i__22500_22504 = G__22516;
continue;
} else {
var child_22517 = cljs.core.first.call(null,seq__22497_22511__$1);
frag.appendChild(child_22517);

var G__22518 = cljs.core.next.call(null,seq__22497_22511__$1);
var G__22519 = null;
var G__22520 = (0);
var G__22521 = (0);
seq__22497_22501 = G__22518;
chunk__22498_22502 = G__22519;
count__22499_22503 = G__22520;
i__22500_22504 = G__22521;
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
return (function (p1__22491_SHARP_,p2__22492_SHARP_){
return f.call(null,p1__22491_SHARP_,p2__22492_SHARP_);
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
if((function (){var G__22523 = list_thing;
if(G__22523){
var bit__4662__auto__ = (G__22523.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__22523.cljs$core$ISeqable$)){
return true;
} else {
if((!G__22523.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22523);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22523);
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
if((function (){var G__22524 = content;
if(G__22524){
var bit__4662__auto__ = (G__22524.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__22524.cljs$core$ISeqable$)){
return true;
} else {
if((!G__22524.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22524);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22524);
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
if((function (){var G__22525 = content;
if(G__22525){
var bit__4662__auto__ = (G__22525.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__22525.cljs$core$ISeqable$)){
return true;
} else {
if((!G__22525.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22525);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__22525);
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
