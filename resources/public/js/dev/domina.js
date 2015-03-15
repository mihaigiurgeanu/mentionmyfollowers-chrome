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
var opt_wrapper_265213 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_265214 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_265215 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_265215,opt_wrapper_265213,table_section_wrapper_265214,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_265213,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_265214,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_265214,cell_wrapper_265215,table_section_wrapper_265214,table_section_wrapper_265214]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__265220 = cljs.core.seq.call(null,tbody);
var chunk__265221 = null;
var count__265222 = (0);
var i__265223 = (0);
while(true){
if((i__265223 < count__265222)){
var child = cljs.core._nth.call(null,chunk__265221,i__265223);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__265224 = seq__265220;
var G__265225 = chunk__265221;
var G__265226 = count__265222;
var G__265227 = (i__265223 + (1));
seq__265220 = G__265224;
chunk__265221 = G__265225;
count__265222 = G__265226;
i__265223 = G__265227;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__265220);
if(temp__4126__auto__){
var seq__265220__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265220__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__265220__$1);
var G__265228 = cljs.core.chunk_rest.call(null,seq__265220__$1);
var G__265229 = c__4768__auto__;
var G__265230 = cljs.core.count.call(null,c__4768__auto__);
var G__265231 = (0);
seq__265220 = G__265228;
chunk__265221 = G__265229;
count__265222 = G__265230;
i__265223 = G__265231;
continue;
} else {
var child = cljs.core.first.call(null,seq__265220__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__265232 = cljs.core.next.call(null,seq__265220__$1);
var G__265233 = null;
var G__265234 = (0);
var G__265235 = (0);
seq__265220 = G__265232;
chunk__265221 = G__265233;
count__265222 = G__265234;
i__265223 = G__265235;
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
var vec__265237 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__265237,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__265237,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__265237,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__265238 = wrapper.lastChild;
var G__265239 = (level - (1));
wrapper = G__265238;
level = G__265239;
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

domina.DomContent = (function (){var obj265241 = {};
return obj265241;
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
var G__265242__i = 0, G__265242__a = new Array(arguments.length -  0);
while (G__265242__i < G__265242__a.length) {G__265242__a[G__265242__i] = arguments[G__265242__i + 0]; ++G__265242__i;}
  mesg = new cljs.core.IndexedSeq(G__265242__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__265243){
var mesg = cljs.core.seq(arglist__265243);
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
var G__265244__i = 0, G__265244__a = new Array(arguments.length -  0);
while (G__265244__i < G__265244__a.length) {G__265244__a[G__265244__i] = arguments[G__265244__i + 0]; ++G__265244__i;}
  mesg = new cljs.core.IndexedSeq(G__265244__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__265245){
var mesg = cljs.core.seq(arglist__265245);
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
var G__265246__i = 0, G__265246__a = new Array(arguments.length -  0);
while (G__265246__i < G__265246__a.length) {G__265246__a[G__265246__i] = arguments[G__265246__i + 0]; ++G__265246__i;}
  contents = new cljs.core.IndexedSeq(G__265246__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__265247){
var contents = cljs.core.seq(arglist__265247);
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
return cljs.core.map.call(null,(function (p1__265248_SHARP_){
return p1__265248_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__265249_SHARP_,p2__265250_SHARP_){
return goog.dom.insertChildAt(p1__265249_SHARP_,p2__265250_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__265252_SHARP_,p2__265251_SHARP_){
return goog.dom.insertSiblingBefore(p2__265251_SHARP_,p1__265252_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__265254_SHARP_,p2__265253_SHARP_){
return goog.dom.insertSiblingAfter(p2__265253_SHARP_,p1__265254_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__265256_SHARP_,p2__265255_SHARP_){
return goog.dom.replaceNode(p2__265255_SHARP_,p1__265256_SHARP_);
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
var seq__265261_265265 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__265262_265266 = null;
var count__265263_265267 = (0);
var i__265264_265268 = (0);
while(true){
if((i__265264_265268 < count__265263_265267)){
var n_265269 = cljs.core._nth.call(null,chunk__265262_265266,i__265264_265268);
goog.style.setStyle(n_265269,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__265270 = seq__265261_265265;
var G__265271 = chunk__265262_265266;
var G__265272 = count__265263_265267;
var G__265273 = (i__265264_265268 + (1));
seq__265261_265265 = G__265270;
chunk__265262_265266 = G__265271;
count__265263_265267 = G__265272;
i__265264_265268 = G__265273;
continue;
} else {
var temp__4126__auto___265274 = cljs.core.seq.call(null,seq__265261_265265);
if(temp__4126__auto___265274){
var seq__265261_265275__$1 = temp__4126__auto___265274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265261_265275__$1)){
var c__4768__auto___265276 = cljs.core.chunk_first.call(null,seq__265261_265275__$1);
var G__265277 = cljs.core.chunk_rest.call(null,seq__265261_265275__$1);
var G__265278 = c__4768__auto___265276;
var G__265279 = cljs.core.count.call(null,c__4768__auto___265276);
var G__265280 = (0);
seq__265261_265265 = G__265277;
chunk__265262_265266 = G__265278;
count__265263_265267 = G__265279;
i__265264_265268 = G__265280;
continue;
} else {
var n_265281 = cljs.core.first.call(null,seq__265261_265275__$1);
goog.style.setStyle(n_265281,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__265282 = cljs.core.next.call(null,seq__265261_265275__$1);
var G__265283 = null;
var G__265284 = (0);
var G__265285 = (0);
seq__265261_265265 = G__265282;
chunk__265262_265266 = G__265283;
count__265263_265267 = G__265284;
i__265264_265268 = G__265285;
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
var G__265286__i = 0, G__265286__a = new Array(arguments.length -  2);
while (G__265286__i < G__265286__a.length) {G__265286__a[G__265286__i] = arguments[G__265286__i + 2]; ++G__265286__i;}
  value = new cljs.core.IndexedSeq(G__265286__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__265287){
var content = cljs.core.first(arglist__265287);
arglist__265287 = cljs.core.next(arglist__265287);
var name = cljs.core.first(arglist__265287);
var value = cljs.core.rest(arglist__265287);
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
var seq__265292_265296 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__265293_265297 = null;
var count__265294_265298 = (0);
var i__265295_265299 = (0);
while(true){
if((i__265295_265299 < count__265294_265298)){
var n_265300 = cljs.core._nth.call(null,chunk__265293_265297,i__265295_265299);
n_265300.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__265301 = seq__265292_265296;
var G__265302 = chunk__265293_265297;
var G__265303 = count__265294_265298;
var G__265304 = (i__265295_265299 + (1));
seq__265292_265296 = G__265301;
chunk__265293_265297 = G__265302;
count__265294_265298 = G__265303;
i__265295_265299 = G__265304;
continue;
} else {
var temp__4126__auto___265305 = cljs.core.seq.call(null,seq__265292_265296);
if(temp__4126__auto___265305){
var seq__265292_265306__$1 = temp__4126__auto___265305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265292_265306__$1)){
var c__4768__auto___265307 = cljs.core.chunk_first.call(null,seq__265292_265306__$1);
var G__265308 = cljs.core.chunk_rest.call(null,seq__265292_265306__$1);
var G__265309 = c__4768__auto___265307;
var G__265310 = cljs.core.count.call(null,c__4768__auto___265307);
var G__265311 = (0);
seq__265292_265296 = G__265308;
chunk__265293_265297 = G__265309;
count__265294_265298 = G__265310;
i__265295_265299 = G__265311;
continue;
} else {
var n_265312 = cljs.core.first.call(null,seq__265292_265306__$1);
n_265312.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__265313 = cljs.core.next.call(null,seq__265292_265306__$1);
var G__265314 = null;
var G__265315 = (0);
var G__265316 = (0);
seq__265292_265296 = G__265313;
chunk__265293_265297 = G__265314;
count__265294_265298 = G__265315;
i__265295_265299 = G__265316;
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
var G__265317__i = 0, G__265317__a = new Array(arguments.length -  2);
while (G__265317__i < G__265317__a.length) {G__265317__a[G__265317__i] = arguments[G__265317__i + 2]; ++G__265317__i;}
  value = new cljs.core.IndexedSeq(G__265317__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__265318){
var content = cljs.core.first(arglist__265318);
arglist__265318 = cljs.core.next(arglist__265318);
var name = cljs.core.first(arglist__265318);
var value = cljs.core.rest(arglist__265318);
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
var seq__265323_265327 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__265324_265328 = null;
var count__265325_265329 = (0);
var i__265326_265330 = (0);
while(true){
if((i__265326_265330 < count__265325_265329)){
var n_265331 = cljs.core._nth.call(null,chunk__265324_265328,i__265326_265330);
n_265331.removeAttribute(cljs.core.name.call(null,name));

var G__265332 = seq__265323_265327;
var G__265333 = chunk__265324_265328;
var G__265334 = count__265325_265329;
var G__265335 = (i__265326_265330 + (1));
seq__265323_265327 = G__265332;
chunk__265324_265328 = G__265333;
count__265325_265329 = G__265334;
i__265326_265330 = G__265335;
continue;
} else {
var temp__4126__auto___265336 = cljs.core.seq.call(null,seq__265323_265327);
if(temp__4126__auto___265336){
var seq__265323_265337__$1 = temp__4126__auto___265336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265323_265337__$1)){
var c__4768__auto___265338 = cljs.core.chunk_first.call(null,seq__265323_265337__$1);
var G__265339 = cljs.core.chunk_rest.call(null,seq__265323_265337__$1);
var G__265340 = c__4768__auto___265338;
var G__265341 = cljs.core.count.call(null,c__4768__auto___265338);
var G__265342 = (0);
seq__265323_265327 = G__265339;
chunk__265324_265328 = G__265340;
count__265325_265329 = G__265341;
i__265326_265330 = G__265342;
continue;
} else {
var n_265343 = cljs.core.first.call(null,seq__265323_265337__$1);
n_265343.removeAttribute(cljs.core.name.call(null,name));

var G__265344 = cljs.core.next.call(null,seq__265323_265337__$1);
var G__265345 = null;
var G__265346 = (0);
var G__265347 = (0);
seq__265323_265327 = G__265344;
chunk__265324_265328 = G__265345;
count__265325_265329 = G__265346;
i__265326_265330 = G__265347;
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
var vec__265349 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__265349,(0),null);
var v = cljs.core.nth.call(null,vec__265349,(1),null);
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
return (function (p1__265350_SHARP_){
var attr = attrs__$1.item(p1__265350_SHARP_);
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
var seq__265357_265363 = cljs.core.seq.call(null,styles);
var chunk__265358_265364 = null;
var count__265359_265365 = (0);
var i__265360_265366 = (0);
while(true){
if((i__265360_265366 < count__265359_265365)){
var vec__265361_265367 = cljs.core._nth.call(null,chunk__265358_265364,i__265360_265366);
var name_265368 = cljs.core.nth.call(null,vec__265361_265367,(0),null);
var value_265369 = cljs.core.nth.call(null,vec__265361_265367,(1),null);
domina.set_style_BANG_.call(null,content,name_265368,value_265369);

var G__265370 = seq__265357_265363;
var G__265371 = chunk__265358_265364;
var G__265372 = count__265359_265365;
var G__265373 = (i__265360_265366 + (1));
seq__265357_265363 = G__265370;
chunk__265358_265364 = G__265371;
count__265359_265365 = G__265372;
i__265360_265366 = G__265373;
continue;
} else {
var temp__4126__auto___265374 = cljs.core.seq.call(null,seq__265357_265363);
if(temp__4126__auto___265374){
var seq__265357_265375__$1 = temp__4126__auto___265374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265357_265375__$1)){
var c__4768__auto___265376 = cljs.core.chunk_first.call(null,seq__265357_265375__$1);
var G__265377 = cljs.core.chunk_rest.call(null,seq__265357_265375__$1);
var G__265378 = c__4768__auto___265376;
var G__265379 = cljs.core.count.call(null,c__4768__auto___265376);
var G__265380 = (0);
seq__265357_265363 = G__265377;
chunk__265358_265364 = G__265378;
count__265359_265365 = G__265379;
i__265360_265366 = G__265380;
continue;
} else {
var vec__265362_265381 = cljs.core.first.call(null,seq__265357_265375__$1);
var name_265382 = cljs.core.nth.call(null,vec__265362_265381,(0),null);
var value_265383 = cljs.core.nth.call(null,vec__265362_265381,(1),null);
domina.set_style_BANG_.call(null,content,name_265382,value_265383);

var G__265384 = cljs.core.next.call(null,seq__265357_265375__$1);
var G__265385 = null;
var G__265386 = (0);
var G__265387 = (0);
seq__265357_265363 = G__265384;
chunk__265358_265364 = G__265385;
count__265359_265365 = G__265386;
i__265360_265366 = G__265387;
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
var seq__265394_265400 = cljs.core.seq.call(null,attrs);
var chunk__265395_265401 = null;
var count__265396_265402 = (0);
var i__265397_265403 = (0);
while(true){
if((i__265397_265403 < count__265396_265402)){
var vec__265398_265404 = cljs.core._nth.call(null,chunk__265395_265401,i__265397_265403);
var name_265405 = cljs.core.nth.call(null,vec__265398_265404,(0),null);
var value_265406 = cljs.core.nth.call(null,vec__265398_265404,(1),null);
domina.set_attr_BANG_.call(null,content,name_265405,value_265406);

var G__265407 = seq__265394_265400;
var G__265408 = chunk__265395_265401;
var G__265409 = count__265396_265402;
var G__265410 = (i__265397_265403 + (1));
seq__265394_265400 = G__265407;
chunk__265395_265401 = G__265408;
count__265396_265402 = G__265409;
i__265397_265403 = G__265410;
continue;
} else {
var temp__4126__auto___265411 = cljs.core.seq.call(null,seq__265394_265400);
if(temp__4126__auto___265411){
var seq__265394_265412__$1 = temp__4126__auto___265411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265394_265412__$1)){
var c__4768__auto___265413 = cljs.core.chunk_first.call(null,seq__265394_265412__$1);
var G__265414 = cljs.core.chunk_rest.call(null,seq__265394_265412__$1);
var G__265415 = c__4768__auto___265413;
var G__265416 = cljs.core.count.call(null,c__4768__auto___265413);
var G__265417 = (0);
seq__265394_265400 = G__265414;
chunk__265395_265401 = G__265415;
count__265396_265402 = G__265416;
i__265397_265403 = G__265417;
continue;
} else {
var vec__265399_265418 = cljs.core.first.call(null,seq__265394_265412__$1);
var name_265419 = cljs.core.nth.call(null,vec__265399_265418,(0),null);
var value_265420 = cljs.core.nth.call(null,vec__265399_265418,(1),null);
domina.set_attr_BANG_.call(null,content,name_265419,value_265420);

var G__265421 = cljs.core.next.call(null,seq__265394_265412__$1);
var G__265422 = null;
var G__265423 = (0);
var G__265424 = (0);
seq__265394_265400 = G__265421;
chunk__265395_265401 = G__265422;
count__265396_265402 = G__265423;
i__265397_265403 = G__265424;
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
var seq__265429_265433 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__265430_265434 = null;
var count__265431_265435 = (0);
var i__265432_265436 = (0);
while(true){
if((i__265432_265436 < count__265431_265435)){
var node_265437 = cljs.core._nth.call(null,chunk__265430_265434,i__265432_265436);
goog.dom.classes.add(node_265437,class$);

var G__265438 = seq__265429_265433;
var G__265439 = chunk__265430_265434;
var G__265440 = count__265431_265435;
var G__265441 = (i__265432_265436 + (1));
seq__265429_265433 = G__265438;
chunk__265430_265434 = G__265439;
count__265431_265435 = G__265440;
i__265432_265436 = G__265441;
continue;
} else {
var temp__4126__auto___265442 = cljs.core.seq.call(null,seq__265429_265433);
if(temp__4126__auto___265442){
var seq__265429_265443__$1 = temp__4126__auto___265442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265429_265443__$1)){
var c__4768__auto___265444 = cljs.core.chunk_first.call(null,seq__265429_265443__$1);
var G__265445 = cljs.core.chunk_rest.call(null,seq__265429_265443__$1);
var G__265446 = c__4768__auto___265444;
var G__265447 = cljs.core.count.call(null,c__4768__auto___265444);
var G__265448 = (0);
seq__265429_265433 = G__265445;
chunk__265430_265434 = G__265446;
count__265431_265435 = G__265447;
i__265432_265436 = G__265448;
continue;
} else {
var node_265449 = cljs.core.first.call(null,seq__265429_265443__$1);
goog.dom.classes.add(node_265449,class$);

var G__265450 = cljs.core.next.call(null,seq__265429_265443__$1);
var G__265451 = null;
var G__265452 = (0);
var G__265453 = (0);
seq__265429_265433 = G__265450;
chunk__265430_265434 = G__265451;
count__265431_265435 = G__265452;
i__265432_265436 = G__265453;
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
var seq__265458_265462 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__265459_265463 = null;
var count__265460_265464 = (0);
var i__265461_265465 = (0);
while(true){
if((i__265461_265465 < count__265460_265464)){
var node_265466 = cljs.core._nth.call(null,chunk__265459_265463,i__265461_265465);
goog.dom.classes.remove(node_265466,class$);

var G__265467 = seq__265458_265462;
var G__265468 = chunk__265459_265463;
var G__265469 = count__265460_265464;
var G__265470 = (i__265461_265465 + (1));
seq__265458_265462 = G__265467;
chunk__265459_265463 = G__265468;
count__265460_265464 = G__265469;
i__265461_265465 = G__265470;
continue;
} else {
var temp__4126__auto___265471 = cljs.core.seq.call(null,seq__265458_265462);
if(temp__4126__auto___265471){
var seq__265458_265472__$1 = temp__4126__auto___265471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265458_265472__$1)){
var c__4768__auto___265473 = cljs.core.chunk_first.call(null,seq__265458_265472__$1);
var G__265474 = cljs.core.chunk_rest.call(null,seq__265458_265472__$1);
var G__265475 = c__4768__auto___265473;
var G__265476 = cljs.core.count.call(null,c__4768__auto___265473);
var G__265477 = (0);
seq__265458_265462 = G__265474;
chunk__265459_265463 = G__265475;
count__265460_265464 = G__265476;
i__265461_265465 = G__265477;
continue;
} else {
var node_265478 = cljs.core.first.call(null,seq__265458_265472__$1);
goog.dom.classes.remove(node_265478,class$);

var G__265479 = cljs.core.next.call(null,seq__265458_265472__$1);
var G__265480 = null;
var G__265481 = (0);
var G__265482 = (0);
seq__265458_265462 = G__265479;
chunk__265459_265463 = G__265480;
count__265460_265464 = G__265481;
i__265461_265465 = G__265482;
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
var seq__265487_265491 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__265488_265492 = null;
var count__265489_265493 = (0);
var i__265490_265494 = (0);
while(true){
if((i__265490_265494 < count__265489_265493)){
var node_265495 = cljs.core._nth.call(null,chunk__265488_265492,i__265490_265494);
goog.dom.classes.toggle(node_265495,class$);

var G__265496 = seq__265487_265491;
var G__265497 = chunk__265488_265492;
var G__265498 = count__265489_265493;
var G__265499 = (i__265490_265494 + (1));
seq__265487_265491 = G__265496;
chunk__265488_265492 = G__265497;
count__265489_265493 = G__265498;
i__265490_265494 = G__265499;
continue;
} else {
var temp__4126__auto___265500 = cljs.core.seq.call(null,seq__265487_265491);
if(temp__4126__auto___265500){
var seq__265487_265501__$1 = temp__4126__auto___265500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265487_265501__$1)){
var c__4768__auto___265502 = cljs.core.chunk_first.call(null,seq__265487_265501__$1);
var G__265503 = cljs.core.chunk_rest.call(null,seq__265487_265501__$1);
var G__265504 = c__4768__auto___265502;
var G__265505 = cljs.core.count.call(null,c__4768__auto___265502);
var G__265506 = (0);
seq__265487_265491 = G__265503;
chunk__265488_265492 = G__265504;
count__265489_265493 = G__265505;
i__265490_265494 = G__265506;
continue;
} else {
var node_265507 = cljs.core.first.call(null,seq__265487_265501__$1);
goog.dom.classes.toggle(node_265507,class$);

var G__265508 = cljs.core.next.call(null,seq__265487_265501__$1);
var G__265509 = null;
var G__265510 = (0);
var G__265511 = (0);
seq__265487_265491 = G__265508;
chunk__265488_265492 = G__265509;
count__265489_265493 = G__265510;
i__265490_265494 = G__265511;
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
var classes_265520__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__265516_265521 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__265517_265522 = null;
var count__265518_265523 = (0);
var i__265519_265524 = (0);
while(true){
if((i__265519_265524 < count__265518_265523)){
var node_265525 = cljs.core._nth.call(null,chunk__265517_265522,i__265519_265524);
goog.dom.classes.set(node_265525,classes_265520__$1);

var G__265526 = seq__265516_265521;
var G__265527 = chunk__265517_265522;
var G__265528 = count__265518_265523;
var G__265529 = (i__265519_265524 + (1));
seq__265516_265521 = G__265526;
chunk__265517_265522 = G__265527;
count__265518_265523 = G__265528;
i__265519_265524 = G__265529;
continue;
} else {
var temp__4126__auto___265530 = cljs.core.seq.call(null,seq__265516_265521);
if(temp__4126__auto___265530){
var seq__265516_265531__$1 = temp__4126__auto___265530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265516_265531__$1)){
var c__4768__auto___265532 = cljs.core.chunk_first.call(null,seq__265516_265531__$1);
var G__265533 = cljs.core.chunk_rest.call(null,seq__265516_265531__$1);
var G__265534 = c__4768__auto___265532;
var G__265535 = cljs.core.count.call(null,c__4768__auto___265532);
var G__265536 = (0);
seq__265516_265521 = G__265533;
chunk__265517_265522 = G__265534;
count__265518_265523 = G__265535;
i__265519_265524 = G__265536;
continue;
} else {
var node_265537 = cljs.core.first.call(null,seq__265516_265531__$1);
goog.dom.classes.set(node_265537,classes_265520__$1);

var G__265538 = cljs.core.next.call(null,seq__265516_265531__$1);
var G__265539 = null;
var G__265540 = (0);
var G__265541 = (0);
seq__265516_265521 = G__265538;
chunk__265517_265522 = G__265539;
count__265518_265523 = G__265540;
i__265519_265524 = G__265541;
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
var seq__265546_265550 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__265547_265551 = null;
var count__265548_265552 = (0);
var i__265549_265553 = (0);
while(true){
if((i__265549_265553 < count__265548_265552)){
var node_265554 = cljs.core._nth.call(null,chunk__265547_265551,i__265549_265553);
goog.dom.setTextContent(node_265554,value);

var G__265555 = seq__265546_265550;
var G__265556 = chunk__265547_265551;
var G__265557 = count__265548_265552;
var G__265558 = (i__265549_265553 + (1));
seq__265546_265550 = G__265555;
chunk__265547_265551 = G__265556;
count__265548_265552 = G__265557;
i__265549_265553 = G__265558;
continue;
} else {
var temp__4126__auto___265559 = cljs.core.seq.call(null,seq__265546_265550);
if(temp__4126__auto___265559){
var seq__265546_265560__$1 = temp__4126__auto___265559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265546_265560__$1)){
var c__4768__auto___265561 = cljs.core.chunk_first.call(null,seq__265546_265560__$1);
var G__265562 = cljs.core.chunk_rest.call(null,seq__265546_265560__$1);
var G__265563 = c__4768__auto___265561;
var G__265564 = cljs.core.count.call(null,c__4768__auto___265561);
var G__265565 = (0);
seq__265546_265550 = G__265562;
chunk__265547_265551 = G__265563;
count__265548_265552 = G__265564;
i__265549_265553 = G__265565;
continue;
} else {
var node_265566 = cljs.core.first.call(null,seq__265546_265560__$1);
goog.dom.setTextContent(node_265566,value);

var G__265567 = cljs.core.next.call(null,seq__265546_265560__$1);
var G__265568 = null;
var G__265569 = (0);
var G__265570 = (0);
seq__265546_265550 = G__265567;
chunk__265547_265551 = G__265568;
count__265548_265552 = G__265569;
i__265549_265553 = G__265570;
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
var seq__265575_265579 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__265576_265580 = null;
var count__265577_265581 = (0);
var i__265578_265582 = (0);
while(true){
if((i__265578_265582 < count__265577_265581)){
var node_265583 = cljs.core._nth.call(null,chunk__265576_265580,i__265578_265582);
goog.dom.forms.setValue(node_265583,value);

var G__265584 = seq__265575_265579;
var G__265585 = chunk__265576_265580;
var G__265586 = count__265577_265581;
var G__265587 = (i__265578_265582 + (1));
seq__265575_265579 = G__265584;
chunk__265576_265580 = G__265585;
count__265577_265581 = G__265586;
i__265578_265582 = G__265587;
continue;
} else {
var temp__4126__auto___265588 = cljs.core.seq.call(null,seq__265575_265579);
if(temp__4126__auto___265588){
var seq__265575_265589__$1 = temp__4126__auto___265588;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265575_265589__$1)){
var c__4768__auto___265590 = cljs.core.chunk_first.call(null,seq__265575_265589__$1);
var G__265591 = cljs.core.chunk_rest.call(null,seq__265575_265589__$1);
var G__265592 = c__4768__auto___265590;
var G__265593 = cljs.core.count.call(null,c__4768__auto___265590);
var G__265594 = (0);
seq__265575_265579 = G__265591;
chunk__265576_265580 = G__265592;
count__265577_265581 = G__265593;
i__265578_265582 = G__265594;
continue;
} else {
var node_265595 = cljs.core.first.call(null,seq__265575_265589__$1);
goog.dom.forms.setValue(node_265595,value);

var G__265596 = cljs.core.next.call(null,seq__265575_265589__$1);
var G__265597 = null;
var G__265598 = (0);
var G__265599 = (0);
seq__265575_265579 = G__265596;
chunk__265576_265580 = G__265597;
count__265577_265581 = G__265598;
i__265578_265582 = G__265599;
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
var value_265610 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__265606_265611 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__265607_265612 = null;
var count__265608_265613 = (0);
var i__265609_265614 = (0);
while(true){
if((i__265609_265614 < count__265608_265613)){
var node_265615 = cljs.core._nth.call(null,chunk__265607_265612,i__265609_265614);
node_265615.innerHTML = value_265610;

var G__265616 = seq__265606_265611;
var G__265617 = chunk__265607_265612;
var G__265618 = count__265608_265613;
var G__265619 = (i__265609_265614 + (1));
seq__265606_265611 = G__265616;
chunk__265607_265612 = G__265617;
count__265608_265613 = G__265618;
i__265609_265614 = G__265619;
continue;
} else {
var temp__4126__auto___265620 = cljs.core.seq.call(null,seq__265606_265611);
if(temp__4126__auto___265620){
var seq__265606_265621__$1 = temp__4126__auto___265620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265606_265621__$1)){
var c__4768__auto___265622 = cljs.core.chunk_first.call(null,seq__265606_265621__$1);
var G__265623 = cljs.core.chunk_rest.call(null,seq__265606_265621__$1);
var G__265624 = c__4768__auto___265622;
var G__265625 = cljs.core.count.call(null,c__4768__auto___265622);
var G__265626 = (0);
seq__265606_265611 = G__265623;
chunk__265607_265612 = G__265624;
count__265608_265613 = G__265625;
i__265609_265614 = G__265626;
continue;
} else {
var node_265627 = cljs.core.first.call(null,seq__265606_265621__$1);
node_265627.innerHTML = value_265610;

var G__265628 = cljs.core.next.call(null,seq__265606_265621__$1);
var G__265629 = null;
var G__265630 = (0);
var G__265631 = (0);
seq__265606_265611 = G__265628;
chunk__265607_265612 = G__265629;
count__265608_265613 = G__265630;
i__265609_265614 = G__265631;
continue;
}
} else {
}
}
break;
}
}catch (e265605){if((e265605 instanceof Error)){
var e_265632 = e265605;
domina.replace_children_BANG_.call(null,content,value_265610);
} else {
throw e265605;

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
var seq__265639_265643 = cljs.core.seq.call(null,children);
var chunk__265640_265644 = null;
var count__265641_265645 = (0);
var i__265642_265646 = (0);
while(true){
if((i__265642_265646 < count__265641_265645)){
var child_265647 = cljs.core._nth.call(null,chunk__265640_265644,i__265642_265646);
frag.appendChild(child_265647);

var G__265648 = seq__265639_265643;
var G__265649 = chunk__265640_265644;
var G__265650 = count__265641_265645;
var G__265651 = (i__265642_265646 + (1));
seq__265639_265643 = G__265648;
chunk__265640_265644 = G__265649;
count__265641_265645 = G__265650;
i__265642_265646 = G__265651;
continue;
} else {
var temp__4126__auto___265652 = cljs.core.seq.call(null,seq__265639_265643);
if(temp__4126__auto___265652){
var seq__265639_265653__$1 = temp__4126__auto___265652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__265639_265653__$1)){
var c__4768__auto___265654 = cljs.core.chunk_first.call(null,seq__265639_265653__$1);
var G__265655 = cljs.core.chunk_rest.call(null,seq__265639_265653__$1);
var G__265656 = c__4768__auto___265654;
var G__265657 = cljs.core.count.call(null,c__4768__auto___265654);
var G__265658 = (0);
seq__265639_265643 = G__265655;
chunk__265640_265644 = G__265656;
count__265641_265645 = G__265657;
i__265642_265646 = G__265658;
continue;
} else {
var child_265659 = cljs.core.first.call(null,seq__265639_265653__$1);
frag.appendChild(child_265659);

var G__265660 = cljs.core.next.call(null,seq__265639_265653__$1);
var G__265661 = null;
var G__265662 = (0);
var G__265663 = (0);
seq__265639_265643 = G__265660;
chunk__265640_265644 = G__265661;
count__265641_265645 = G__265662;
i__265642_265646 = G__265663;
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
return (function (p1__265633_SHARP_,p2__265634_SHARP_){
return f.call(null,p1__265633_SHARP_,p2__265634_SHARP_);
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
if((function (){var G__265665 = list_thing;
if(G__265665){
var bit__4662__auto__ = (G__265665.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__265665.cljs$core$ISeqable$)){
return true;
} else {
if((!G__265665.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__265665);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__265665);
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
if((function (){var G__265666 = content;
if(G__265666){
var bit__4662__auto__ = (G__265666.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__265666.cljs$core$ISeqable$)){
return true;
} else {
if((!G__265666.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__265666);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__265666);
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
if((function (){var G__265667 = content;
if(G__265667){
var bit__4662__auto__ = (G__265667.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__265667.cljs$core$ISeqable$)){
return true;
} else {
if((!G__265667.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__265667);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__265667);
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
