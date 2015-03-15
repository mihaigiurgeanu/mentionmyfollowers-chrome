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
var opt_wrapper_350391 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_350392 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_350393 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_350393,opt_wrapper_350391,table_section_wrapper_350392,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_350391,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_350392,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_350392,cell_wrapper_350393,table_section_wrapper_350392,table_section_wrapper_350392]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__350398 = cljs.core.seq.call(null,tbody);
var chunk__350399 = null;
var count__350400 = (0);
var i__350401 = (0);
while(true){
if((i__350401 < count__350400)){
var child = cljs.core._nth.call(null,chunk__350399,i__350401);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__350402 = seq__350398;
var G__350403 = chunk__350399;
var G__350404 = count__350400;
var G__350405 = (i__350401 + (1));
seq__350398 = G__350402;
chunk__350399 = G__350403;
count__350400 = G__350404;
i__350401 = G__350405;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__350398);
if(temp__4126__auto__){
var seq__350398__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350398__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__350398__$1);
var G__350406 = cljs.core.chunk_rest.call(null,seq__350398__$1);
var G__350407 = c__4768__auto__;
var G__350408 = cljs.core.count.call(null,c__4768__auto__);
var G__350409 = (0);
seq__350398 = G__350406;
chunk__350399 = G__350407;
count__350400 = G__350408;
i__350401 = G__350409;
continue;
} else {
var child = cljs.core.first.call(null,seq__350398__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__350410 = cljs.core.next.call(null,seq__350398__$1);
var G__350411 = null;
var G__350412 = (0);
var G__350413 = (0);
seq__350398 = G__350410;
chunk__350399 = G__350411;
count__350400 = G__350412;
i__350401 = G__350413;
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
var vec__350415 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__350415,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__350415,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__350415,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__350416 = wrapper.lastChild;
var G__350417 = (level - (1));
wrapper = G__350416;
level = G__350417;
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

domina.DomContent = (function (){var obj350419 = {};
return obj350419;
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
var G__350420__i = 0, G__350420__a = new Array(arguments.length -  0);
while (G__350420__i < G__350420__a.length) {G__350420__a[G__350420__i] = arguments[G__350420__i + 0]; ++G__350420__i;}
  mesg = new cljs.core.IndexedSeq(G__350420__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__350421){
var mesg = cljs.core.seq(arglist__350421);
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
var G__350422__i = 0, G__350422__a = new Array(arguments.length -  0);
while (G__350422__i < G__350422__a.length) {G__350422__a[G__350422__i] = arguments[G__350422__i + 0]; ++G__350422__i;}
  mesg = new cljs.core.IndexedSeq(G__350422__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__350423){
var mesg = cljs.core.seq(arglist__350423);
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
var G__350424__i = 0, G__350424__a = new Array(arguments.length -  0);
while (G__350424__i < G__350424__a.length) {G__350424__a[G__350424__i] = arguments[G__350424__i + 0]; ++G__350424__i;}
  contents = new cljs.core.IndexedSeq(G__350424__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__350425){
var contents = cljs.core.seq(arglist__350425);
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
return cljs.core.map.call(null,(function (p1__350426_SHARP_){
return p1__350426_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__350427_SHARP_,p2__350428_SHARP_){
return goog.dom.insertChildAt(p1__350427_SHARP_,p2__350428_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__350430_SHARP_,p2__350429_SHARP_){
return goog.dom.insertSiblingBefore(p2__350429_SHARP_,p1__350430_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__350432_SHARP_,p2__350431_SHARP_){
return goog.dom.insertSiblingAfter(p2__350431_SHARP_,p1__350432_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__350434_SHARP_,p2__350433_SHARP_){
return goog.dom.replaceNode(p2__350433_SHARP_,p1__350434_SHARP_);
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
var seq__350439_350443 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__350440_350444 = null;
var count__350441_350445 = (0);
var i__350442_350446 = (0);
while(true){
if((i__350442_350446 < count__350441_350445)){
var n_350447 = cljs.core._nth.call(null,chunk__350440_350444,i__350442_350446);
goog.style.setStyle(n_350447,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__350448 = seq__350439_350443;
var G__350449 = chunk__350440_350444;
var G__350450 = count__350441_350445;
var G__350451 = (i__350442_350446 + (1));
seq__350439_350443 = G__350448;
chunk__350440_350444 = G__350449;
count__350441_350445 = G__350450;
i__350442_350446 = G__350451;
continue;
} else {
var temp__4126__auto___350452 = cljs.core.seq.call(null,seq__350439_350443);
if(temp__4126__auto___350452){
var seq__350439_350453__$1 = temp__4126__auto___350452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350439_350453__$1)){
var c__4768__auto___350454 = cljs.core.chunk_first.call(null,seq__350439_350453__$1);
var G__350455 = cljs.core.chunk_rest.call(null,seq__350439_350453__$1);
var G__350456 = c__4768__auto___350454;
var G__350457 = cljs.core.count.call(null,c__4768__auto___350454);
var G__350458 = (0);
seq__350439_350443 = G__350455;
chunk__350440_350444 = G__350456;
count__350441_350445 = G__350457;
i__350442_350446 = G__350458;
continue;
} else {
var n_350459 = cljs.core.first.call(null,seq__350439_350453__$1);
goog.style.setStyle(n_350459,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__350460 = cljs.core.next.call(null,seq__350439_350453__$1);
var G__350461 = null;
var G__350462 = (0);
var G__350463 = (0);
seq__350439_350443 = G__350460;
chunk__350440_350444 = G__350461;
count__350441_350445 = G__350462;
i__350442_350446 = G__350463;
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
var G__350464__i = 0, G__350464__a = new Array(arguments.length -  2);
while (G__350464__i < G__350464__a.length) {G__350464__a[G__350464__i] = arguments[G__350464__i + 2]; ++G__350464__i;}
  value = new cljs.core.IndexedSeq(G__350464__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__350465){
var content = cljs.core.first(arglist__350465);
arglist__350465 = cljs.core.next(arglist__350465);
var name = cljs.core.first(arglist__350465);
var value = cljs.core.rest(arglist__350465);
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
var seq__350470_350474 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__350471_350475 = null;
var count__350472_350476 = (0);
var i__350473_350477 = (0);
while(true){
if((i__350473_350477 < count__350472_350476)){
var n_350478 = cljs.core._nth.call(null,chunk__350471_350475,i__350473_350477);
n_350478.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__350479 = seq__350470_350474;
var G__350480 = chunk__350471_350475;
var G__350481 = count__350472_350476;
var G__350482 = (i__350473_350477 + (1));
seq__350470_350474 = G__350479;
chunk__350471_350475 = G__350480;
count__350472_350476 = G__350481;
i__350473_350477 = G__350482;
continue;
} else {
var temp__4126__auto___350483 = cljs.core.seq.call(null,seq__350470_350474);
if(temp__4126__auto___350483){
var seq__350470_350484__$1 = temp__4126__auto___350483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350470_350484__$1)){
var c__4768__auto___350485 = cljs.core.chunk_first.call(null,seq__350470_350484__$1);
var G__350486 = cljs.core.chunk_rest.call(null,seq__350470_350484__$1);
var G__350487 = c__4768__auto___350485;
var G__350488 = cljs.core.count.call(null,c__4768__auto___350485);
var G__350489 = (0);
seq__350470_350474 = G__350486;
chunk__350471_350475 = G__350487;
count__350472_350476 = G__350488;
i__350473_350477 = G__350489;
continue;
} else {
var n_350490 = cljs.core.first.call(null,seq__350470_350484__$1);
n_350490.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__350491 = cljs.core.next.call(null,seq__350470_350484__$1);
var G__350492 = null;
var G__350493 = (0);
var G__350494 = (0);
seq__350470_350474 = G__350491;
chunk__350471_350475 = G__350492;
count__350472_350476 = G__350493;
i__350473_350477 = G__350494;
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
var G__350495__i = 0, G__350495__a = new Array(arguments.length -  2);
while (G__350495__i < G__350495__a.length) {G__350495__a[G__350495__i] = arguments[G__350495__i + 2]; ++G__350495__i;}
  value = new cljs.core.IndexedSeq(G__350495__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__350496){
var content = cljs.core.first(arglist__350496);
arglist__350496 = cljs.core.next(arglist__350496);
var name = cljs.core.first(arglist__350496);
var value = cljs.core.rest(arglist__350496);
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
var seq__350501_350505 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__350502_350506 = null;
var count__350503_350507 = (0);
var i__350504_350508 = (0);
while(true){
if((i__350504_350508 < count__350503_350507)){
var n_350509 = cljs.core._nth.call(null,chunk__350502_350506,i__350504_350508);
n_350509.removeAttribute(cljs.core.name.call(null,name));

var G__350510 = seq__350501_350505;
var G__350511 = chunk__350502_350506;
var G__350512 = count__350503_350507;
var G__350513 = (i__350504_350508 + (1));
seq__350501_350505 = G__350510;
chunk__350502_350506 = G__350511;
count__350503_350507 = G__350512;
i__350504_350508 = G__350513;
continue;
} else {
var temp__4126__auto___350514 = cljs.core.seq.call(null,seq__350501_350505);
if(temp__4126__auto___350514){
var seq__350501_350515__$1 = temp__4126__auto___350514;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350501_350515__$1)){
var c__4768__auto___350516 = cljs.core.chunk_first.call(null,seq__350501_350515__$1);
var G__350517 = cljs.core.chunk_rest.call(null,seq__350501_350515__$1);
var G__350518 = c__4768__auto___350516;
var G__350519 = cljs.core.count.call(null,c__4768__auto___350516);
var G__350520 = (0);
seq__350501_350505 = G__350517;
chunk__350502_350506 = G__350518;
count__350503_350507 = G__350519;
i__350504_350508 = G__350520;
continue;
} else {
var n_350521 = cljs.core.first.call(null,seq__350501_350515__$1);
n_350521.removeAttribute(cljs.core.name.call(null,name));

var G__350522 = cljs.core.next.call(null,seq__350501_350515__$1);
var G__350523 = null;
var G__350524 = (0);
var G__350525 = (0);
seq__350501_350505 = G__350522;
chunk__350502_350506 = G__350523;
count__350503_350507 = G__350524;
i__350504_350508 = G__350525;
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
var vec__350527 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__350527,(0),null);
var v = cljs.core.nth.call(null,vec__350527,(1),null);
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
return (function (p1__350528_SHARP_){
var attr = attrs__$1.item(p1__350528_SHARP_);
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
var seq__350535_350541 = cljs.core.seq.call(null,styles);
var chunk__350536_350542 = null;
var count__350537_350543 = (0);
var i__350538_350544 = (0);
while(true){
if((i__350538_350544 < count__350537_350543)){
var vec__350539_350545 = cljs.core._nth.call(null,chunk__350536_350542,i__350538_350544);
var name_350546 = cljs.core.nth.call(null,vec__350539_350545,(0),null);
var value_350547 = cljs.core.nth.call(null,vec__350539_350545,(1),null);
domina.set_style_BANG_.call(null,content,name_350546,value_350547);

var G__350548 = seq__350535_350541;
var G__350549 = chunk__350536_350542;
var G__350550 = count__350537_350543;
var G__350551 = (i__350538_350544 + (1));
seq__350535_350541 = G__350548;
chunk__350536_350542 = G__350549;
count__350537_350543 = G__350550;
i__350538_350544 = G__350551;
continue;
} else {
var temp__4126__auto___350552 = cljs.core.seq.call(null,seq__350535_350541);
if(temp__4126__auto___350552){
var seq__350535_350553__$1 = temp__4126__auto___350552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350535_350553__$1)){
var c__4768__auto___350554 = cljs.core.chunk_first.call(null,seq__350535_350553__$1);
var G__350555 = cljs.core.chunk_rest.call(null,seq__350535_350553__$1);
var G__350556 = c__4768__auto___350554;
var G__350557 = cljs.core.count.call(null,c__4768__auto___350554);
var G__350558 = (0);
seq__350535_350541 = G__350555;
chunk__350536_350542 = G__350556;
count__350537_350543 = G__350557;
i__350538_350544 = G__350558;
continue;
} else {
var vec__350540_350559 = cljs.core.first.call(null,seq__350535_350553__$1);
var name_350560 = cljs.core.nth.call(null,vec__350540_350559,(0),null);
var value_350561 = cljs.core.nth.call(null,vec__350540_350559,(1),null);
domina.set_style_BANG_.call(null,content,name_350560,value_350561);

var G__350562 = cljs.core.next.call(null,seq__350535_350553__$1);
var G__350563 = null;
var G__350564 = (0);
var G__350565 = (0);
seq__350535_350541 = G__350562;
chunk__350536_350542 = G__350563;
count__350537_350543 = G__350564;
i__350538_350544 = G__350565;
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
var seq__350572_350578 = cljs.core.seq.call(null,attrs);
var chunk__350573_350579 = null;
var count__350574_350580 = (0);
var i__350575_350581 = (0);
while(true){
if((i__350575_350581 < count__350574_350580)){
var vec__350576_350582 = cljs.core._nth.call(null,chunk__350573_350579,i__350575_350581);
var name_350583 = cljs.core.nth.call(null,vec__350576_350582,(0),null);
var value_350584 = cljs.core.nth.call(null,vec__350576_350582,(1),null);
domina.set_attr_BANG_.call(null,content,name_350583,value_350584);

var G__350585 = seq__350572_350578;
var G__350586 = chunk__350573_350579;
var G__350587 = count__350574_350580;
var G__350588 = (i__350575_350581 + (1));
seq__350572_350578 = G__350585;
chunk__350573_350579 = G__350586;
count__350574_350580 = G__350587;
i__350575_350581 = G__350588;
continue;
} else {
var temp__4126__auto___350589 = cljs.core.seq.call(null,seq__350572_350578);
if(temp__4126__auto___350589){
var seq__350572_350590__$1 = temp__4126__auto___350589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350572_350590__$1)){
var c__4768__auto___350591 = cljs.core.chunk_first.call(null,seq__350572_350590__$1);
var G__350592 = cljs.core.chunk_rest.call(null,seq__350572_350590__$1);
var G__350593 = c__4768__auto___350591;
var G__350594 = cljs.core.count.call(null,c__4768__auto___350591);
var G__350595 = (0);
seq__350572_350578 = G__350592;
chunk__350573_350579 = G__350593;
count__350574_350580 = G__350594;
i__350575_350581 = G__350595;
continue;
} else {
var vec__350577_350596 = cljs.core.first.call(null,seq__350572_350590__$1);
var name_350597 = cljs.core.nth.call(null,vec__350577_350596,(0),null);
var value_350598 = cljs.core.nth.call(null,vec__350577_350596,(1),null);
domina.set_attr_BANG_.call(null,content,name_350597,value_350598);

var G__350599 = cljs.core.next.call(null,seq__350572_350590__$1);
var G__350600 = null;
var G__350601 = (0);
var G__350602 = (0);
seq__350572_350578 = G__350599;
chunk__350573_350579 = G__350600;
count__350574_350580 = G__350601;
i__350575_350581 = G__350602;
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
var seq__350607_350611 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__350608_350612 = null;
var count__350609_350613 = (0);
var i__350610_350614 = (0);
while(true){
if((i__350610_350614 < count__350609_350613)){
var node_350615 = cljs.core._nth.call(null,chunk__350608_350612,i__350610_350614);
goog.dom.classes.add(node_350615,class$);

var G__350616 = seq__350607_350611;
var G__350617 = chunk__350608_350612;
var G__350618 = count__350609_350613;
var G__350619 = (i__350610_350614 + (1));
seq__350607_350611 = G__350616;
chunk__350608_350612 = G__350617;
count__350609_350613 = G__350618;
i__350610_350614 = G__350619;
continue;
} else {
var temp__4126__auto___350620 = cljs.core.seq.call(null,seq__350607_350611);
if(temp__4126__auto___350620){
var seq__350607_350621__$1 = temp__4126__auto___350620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350607_350621__$1)){
var c__4768__auto___350622 = cljs.core.chunk_first.call(null,seq__350607_350621__$1);
var G__350623 = cljs.core.chunk_rest.call(null,seq__350607_350621__$1);
var G__350624 = c__4768__auto___350622;
var G__350625 = cljs.core.count.call(null,c__4768__auto___350622);
var G__350626 = (0);
seq__350607_350611 = G__350623;
chunk__350608_350612 = G__350624;
count__350609_350613 = G__350625;
i__350610_350614 = G__350626;
continue;
} else {
var node_350627 = cljs.core.first.call(null,seq__350607_350621__$1);
goog.dom.classes.add(node_350627,class$);

var G__350628 = cljs.core.next.call(null,seq__350607_350621__$1);
var G__350629 = null;
var G__350630 = (0);
var G__350631 = (0);
seq__350607_350611 = G__350628;
chunk__350608_350612 = G__350629;
count__350609_350613 = G__350630;
i__350610_350614 = G__350631;
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
var seq__350636_350640 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__350637_350641 = null;
var count__350638_350642 = (0);
var i__350639_350643 = (0);
while(true){
if((i__350639_350643 < count__350638_350642)){
var node_350644 = cljs.core._nth.call(null,chunk__350637_350641,i__350639_350643);
goog.dom.classes.remove(node_350644,class$);

var G__350645 = seq__350636_350640;
var G__350646 = chunk__350637_350641;
var G__350647 = count__350638_350642;
var G__350648 = (i__350639_350643 + (1));
seq__350636_350640 = G__350645;
chunk__350637_350641 = G__350646;
count__350638_350642 = G__350647;
i__350639_350643 = G__350648;
continue;
} else {
var temp__4126__auto___350649 = cljs.core.seq.call(null,seq__350636_350640);
if(temp__4126__auto___350649){
var seq__350636_350650__$1 = temp__4126__auto___350649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350636_350650__$1)){
var c__4768__auto___350651 = cljs.core.chunk_first.call(null,seq__350636_350650__$1);
var G__350652 = cljs.core.chunk_rest.call(null,seq__350636_350650__$1);
var G__350653 = c__4768__auto___350651;
var G__350654 = cljs.core.count.call(null,c__4768__auto___350651);
var G__350655 = (0);
seq__350636_350640 = G__350652;
chunk__350637_350641 = G__350653;
count__350638_350642 = G__350654;
i__350639_350643 = G__350655;
continue;
} else {
var node_350656 = cljs.core.first.call(null,seq__350636_350650__$1);
goog.dom.classes.remove(node_350656,class$);

var G__350657 = cljs.core.next.call(null,seq__350636_350650__$1);
var G__350658 = null;
var G__350659 = (0);
var G__350660 = (0);
seq__350636_350640 = G__350657;
chunk__350637_350641 = G__350658;
count__350638_350642 = G__350659;
i__350639_350643 = G__350660;
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
var seq__350665_350669 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__350666_350670 = null;
var count__350667_350671 = (0);
var i__350668_350672 = (0);
while(true){
if((i__350668_350672 < count__350667_350671)){
var node_350673 = cljs.core._nth.call(null,chunk__350666_350670,i__350668_350672);
goog.dom.classes.toggle(node_350673,class$);

var G__350674 = seq__350665_350669;
var G__350675 = chunk__350666_350670;
var G__350676 = count__350667_350671;
var G__350677 = (i__350668_350672 + (1));
seq__350665_350669 = G__350674;
chunk__350666_350670 = G__350675;
count__350667_350671 = G__350676;
i__350668_350672 = G__350677;
continue;
} else {
var temp__4126__auto___350678 = cljs.core.seq.call(null,seq__350665_350669);
if(temp__4126__auto___350678){
var seq__350665_350679__$1 = temp__4126__auto___350678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350665_350679__$1)){
var c__4768__auto___350680 = cljs.core.chunk_first.call(null,seq__350665_350679__$1);
var G__350681 = cljs.core.chunk_rest.call(null,seq__350665_350679__$1);
var G__350682 = c__4768__auto___350680;
var G__350683 = cljs.core.count.call(null,c__4768__auto___350680);
var G__350684 = (0);
seq__350665_350669 = G__350681;
chunk__350666_350670 = G__350682;
count__350667_350671 = G__350683;
i__350668_350672 = G__350684;
continue;
} else {
var node_350685 = cljs.core.first.call(null,seq__350665_350679__$1);
goog.dom.classes.toggle(node_350685,class$);

var G__350686 = cljs.core.next.call(null,seq__350665_350679__$1);
var G__350687 = null;
var G__350688 = (0);
var G__350689 = (0);
seq__350665_350669 = G__350686;
chunk__350666_350670 = G__350687;
count__350667_350671 = G__350688;
i__350668_350672 = G__350689;
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
var classes_350698__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__350694_350699 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__350695_350700 = null;
var count__350696_350701 = (0);
var i__350697_350702 = (0);
while(true){
if((i__350697_350702 < count__350696_350701)){
var node_350703 = cljs.core._nth.call(null,chunk__350695_350700,i__350697_350702);
goog.dom.classes.set(node_350703,classes_350698__$1);

var G__350704 = seq__350694_350699;
var G__350705 = chunk__350695_350700;
var G__350706 = count__350696_350701;
var G__350707 = (i__350697_350702 + (1));
seq__350694_350699 = G__350704;
chunk__350695_350700 = G__350705;
count__350696_350701 = G__350706;
i__350697_350702 = G__350707;
continue;
} else {
var temp__4126__auto___350708 = cljs.core.seq.call(null,seq__350694_350699);
if(temp__4126__auto___350708){
var seq__350694_350709__$1 = temp__4126__auto___350708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350694_350709__$1)){
var c__4768__auto___350710 = cljs.core.chunk_first.call(null,seq__350694_350709__$1);
var G__350711 = cljs.core.chunk_rest.call(null,seq__350694_350709__$1);
var G__350712 = c__4768__auto___350710;
var G__350713 = cljs.core.count.call(null,c__4768__auto___350710);
var G__350714 = (0);
seq__350694_350699 = G__350711;
chunk__350695_350700 = G__350712;
count__350696_350701 = G__350713;
i__350697_350702 = G__350714;
continue;
} else {
var node_350715 = cljs.core.first.call(null,seq__350694_350709__$1);
goog.dom.classes.set(node_350715,classes_350698__$1);

var G__350716 = cljs.core.next.call(null,seq__350694_350709__$1);
var G__350717 = null;
var G__350718 = (0);
var G__350719 = (0);
seq__350694_350699 = G__350716;
chunk__350695_350700 = G__350717;
count__350696_350701 = G__350718;
i__350697_350702 = G__350719;
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
var seq__350724_350728 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__350725_350729 = null;
var count__350726_350730 = (0);
var i__350727_350731 = (0);
while(true){
if((i__350727_350731 < count__350726_350730)){
var node_350732 = cljs.core._nth.call(null,chunk__350725_350729,i__350727_350731);
goog.dom.setTextContent(node_350732,value);

var G__350733 = seq__350724_350728;
var G__350734 = chunk__350725_350729;
var G__350735 = count__350726_350730;
var G__350736 = (i__350727_350731 + (1));
seq__350724_350728 = G__350733;
chunk__350725_350729 = G__350734;
count__350726_350730 = G__350735;
i__350727_350731 = G__350736;
continue;
} else {
var temp__4126__auto___350737 = cljs.core.seq.call(null,seq__350724_350728);
if(temp__4126__auto___350737){
var seq__350724_350738__$1 = temp__4126__auto___350737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350724_350738__$1)){
var c__4768__auto___350739 = cljs.core.chunk_first.call(null,seq__350724_350738__$1);
var G__350740 = cljs.core.chunk_rest.call(null,seq__350724_350738__$1);
var G__350741 = c__4768__auto___350739;
var G__350742 = cljs.core.count.call(null,c__4768__auto___350739);
var G__350743 = (0);
seq__350724_350728 = G__350740;
chunk__350725_350729 = G__350741;
count__350726_350730 = G__350742;
i__350727_350731 = G__350743;
continue;
} else {
var node_350744 = cljs.core.first.call(null,seq__350724_350738__$1);
goog.dom.setTextContent(node_350744,value);

var G__350745 = cljs.core.next.call(null,seq__350724_350738__$1);
var G__350746 = null;
var G__350747 = (0);
var G__350748 = (0);
seq__350724_350728 = G__350745;
chunk__350725_350729 = G__350746;
count__350726_350730 = G__350747;
i__350727_350731 = G__350748;
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
var seq__350753_350757 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__350754_350758 = null;
var count__350755_350759 = (0);
var i__350756_350760 = (0);
while(true){
if((i__350756_350760 < count__350755_350759)){
var node_350761 = cljs.core._nth.call(null,chunk__350754_350758,i__350756_350760);
goog.dom.forms.setValue(node_350761,value);

var G__350762 = seq__350753_350757;
var G__350763 = chunk__350754_350758;
var G__350764 = count__350755_350759;
var G__350765 = (i__350756_350760 + (1));
seq__350753_350757 = G__350762;
chunk__350754_350758 = G__350763;
count__350755_350759 = G__350764;
i__350756_350760 = G__350765;
continue;
} else {
var temp__4126__auto___350766 = cljs.core.seq.call(null,seq__350753_350757);
if(temp__4126__auto___350766){
var seq__350753_350767__$1 = temp__4126__auto___350766;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350753_350767__$1)){
var c__4768__auto___350768 = cljs.core.chunk_first.call(null,seq__350753_350767__$1);
var G__350769 = cljs.core.chunk_rest.call(null,seq__350753_350767__$1);
var G__350770 = c__4768__auto___350768;
var G__350771 = cljs.core.count.call(null,c__4768__auto___350768);
var G__350772 = (0);
seq__350753_350757 = G__350769;
chunk__350754_350758 = G__350770;
count__350755_350759 = G__350771;
i__350756_350760 = G__350772;
continue;
} else {
var node_350773 = cljs.core.first.call(null,seq__350753_350767__$1);
goog.dom.forms.setValue(node_350773,value);

var G__350774 = cljs.core.next.call(null,seq__350753_350767__$1);
var G__350775 = null;
var G__350776 = (0);
var G__350777 = (0);
seq__350753_350757 = G__350774;
chunk__350754_350758 = G__350775;
count__350755_350759 = G__350776;
i__350756_350760 = G__350777;
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
var value_350788 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__350784_350789 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__350785_350790 = null;
var count__350786_350791 = (0);
var i__350787_350792 = (0);
while(true){
if((i__350787_350792 < count__350786_350791)){
var node_350793 = cljs.core._nth.call(null,chunk__350785_350790,i__350787_350792);
node_350793.innerHTML = value_350788;

var G__350794 = seq__350784_350789;
var G__350795 = chunk__350785_350790;
var G__350796 = count__350786_350791;
var G__350797 = (i__350787_350792 + (1));
seq__350784_350789 = G__350794;
chunk__350785_350790 = G__350795;
count__350786_350791 = G__350796;
i__350787_350792 = G__350797;
continue;
} else {
var temp__4126__auto___350798 = cljs.core.seq.call(null,seq__350784_350789);
if(temp__4126__auto___350798){
var seq__350784_350799__$1 = temp__4126__auto___350798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350784_350799__$1)){
var c__4768__auto___350800 = cljs.core.chunk_first.call(null,seq__350784_350799__$1);
var G__350801 = cljs.core.chunk_rest.call(null,seq__350784_350799__$1);
var G__350802 = c__4768__auto___350800;
var G__350803 = cljs.core.count.call(null,c__4768__auto___350800);
var G__350804 = (0);
seq__350784_350789 = G__350801;
chunk__350785_350790 = G__350802;
count__350786_350791 = G__350803;
i__350787_350792 = G__350804;
continue;
} else {
var node_350805 = cljs.core.first.call(null,seq__350784_350799__$1);
node_350805.innerHTML = value_350788;

var G__350806 = cljs.core.next.call(null,seq__350784_350799__$1);
var G__350807 = null;
var G__350808 = (0);
var G__350809 = (0);
seq__350784_350789 = G__350806;
chunk__350785_350790 = G__350807;
count__350786_350791 = G__350808;
i__350787_350792 = G__350809;
continue;
}
} else {
}
}
break;
}
}catch (e350783){if((e350783 instanceof Error)){
var e_350810 = e350783;
domina.replace_children_BANG_.call(null,content,value_350788);
} else {
throw e350783;

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
var seq__350817_350821 = cljs.core.seq.call(null,children);
var chunk__350818_350822 = null;
var count__350819_350823 = (0);
var i__350820_350824 = (0);
while(true){
if((i__350820_350824 < count__350819_350823)){
var child_350825 = cljs.core._nth.call(null,chunk__350818_350822,i__350820_350824);
frag.appendChild(child_350825);

var G__350826 = seq__350817_350821;
var G__350827 = chunk__350818_350822;
var G__350828 = count__350819_350823;
var G__350829 = (i__350820_350824 + (1));
seq__350817_350821 = G__350826;
chunk__350818_350822 = G__350827;
count__350819_350823 = G__350828;
i__350820_350824 = G__350829;
continue;
} else {
var temp__4126__auto___350830 = cljs.core.seq.call(null,seq__350817_350821);
if(temp__4126__auto___350830){
var seq__350817_350831__$1 = temp__4126__auto___350830;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__350817_350831__$1)){
var c__4768__auto___350832 = cljs.core.chunk_first.call(null,seq__350817_350831__$1);
var G__350833 = cljs.core.chunk_rest.call(null,seq__350817_350831__$1);
var G__350834 = c__4768__auto___350832;
var G__350835 = cljs.core.count.call(null,c__4768__auto___350832);
var G__350836 = (0);
seq__350817_350821 = G__350833;
chunk__350818_350822 = G__350834;
count__350819_350823 = G__350835;
i__350820_350824 = G__350836;
continue;
} else {
var child_350837 = cljs.core.first.call(null,seq__350817_350831__$1);
frag.appendChild(child_350837);

var G__350838 = cljs.core.next.call(null,seq__350817_350831__$1);
var G__350839 = null;
var G__350840 = (0);
var G__350841 = (0);
seq__350817_350821 = G__350838;
chunk__350818_350822 = G__350839;
count__350819_350823 = G__350840;
i__350820_350824 = G__350841;
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
return (function (p1__350811_SHARP_,p2__350812_SHARP_){
return f.call(null,p1__350811_SHARP_,p2__350812_SHARP_);
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
if((function (){var G__350843 = list_thing;
if(G__350843){
var bit__4662__auto__ = (G__350843.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__350843.cljs$core$ISeqable$)){
return true;
} else {
if((!G__350843.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__350843);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__350843);
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
if((function (){var G__350844 = content;
if(G__350844){
var bit__4662__auto__ = (G__350844.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__350844.cljs$core$ISeqable$)){
return true;
} else {
if((!G__350844.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__350844);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__350844);
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
if((function (){var G__350845 = content;
if(G__350845){
var bit__4662__auto__ = (G__350845.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__350845.cljs$core$ISeqable$)){
return true;
} else {
if((!G__350845.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__350845);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__350845);
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
