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
var opt_wrapper_6620 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_6621 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_6622 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_6622,opt_wrapper_6620,table_section_wrapper_6621,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_6620,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_6621,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_6621,cell_wrapper_6622,table_section_wrapper_6621,table_section_wrapper_6621]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__6627 = cljs.core.seq.call(null,tbody);
var chunk__6628 = null;
var count__6629 = (0);
var i__6630 = (0);
while(true){
if((i__6630 < count__6629)){
var child = cljs.core._nth.call(null,chunk__6628,i__6630);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6631 = seq__6627;
var G__6632 = chunk__6628;
var G__6633 = count__6629;
var G__6634 = (i__6630 + (1));
seq__6627 = G__6631;
chunk__6628 = G__6632;
count__6629 = G__6633;
i__6630 = G__6634;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__6627);
if(temp__4126__auto__){
var seq__6627__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6627__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__6627__$1);
var G__6635 = cljs.core.chunk_rest.call(null,seq__6627__$1);
var G__6636 = c__4768__auto__;
var G__6637 = cljs.core.count.call(null,c__4768__auto__);
var G__6638 = (0);
seq__6627 = G__6635;
chunk__6628 = G__6636;
count__6629 = G__6637;
i__6630 = G__6638;
continue;
} else {
var child = cljs.core.first.call(null,seq__6627__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6639 = cljs.core.next.call(null,seq__6627__$1);
var G__6640 = null;
var G__6641 = (0);
var G__6642 = (0);
seq__6627 = G__6639;
chunk__6628 = G__6640;
count__6629 = G__6641;
i__6630 = G__6642;
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
var vec__6644 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__6644,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__6644,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__6644,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__6645 = wrapper.lastChild;
var G__6646 = (level - (1));
wrapper = G__6645;
level = G__6646;
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

domina.DomContent = (function (){var obj6648 = {};
return obj6648;
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
var G__6649__i = 0, G__6649__a = new Array(arguments.length -  0);
while (G__6649__i < G__6649__a.length) {G__6649__a[G__6649__i] = arguments[G__6649__i + 0]; ++G__6649__i;}
  mesg = new cljs.core.IndexedSeq(G__6649__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__6650){
var mesg = cljs.core.seq(arglist__6650);
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
var G__6651__i = 0, G__6651__a = new Array(arguments.length -  0);
while (G__6651__i < G__6651__a.length) {G__6651__a[G__6651__i] = arguments[G__6651__i + 0]; ++G__6651__i;}
  mesg = new cljs.core.IndexedSeq(G__6651__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__6652){
var mesg = cljs.core.seq(arglist__6652);
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
var G__6653__i = 0, G__6653__a = new Array(arguments.length -  0);
while (G__6653__i < G__6653__a.length) {G__6653__a[G__6653__i] = arguments[G__6653__i + 0]; ++G__6653__i;}
  contents = new cljs.core.IndexedSeq(G__6653__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__6654){
var contents = cljs.core.seq(arglist__6654);
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
return cljs.core.map.call(null,(function (p1__6655_SHARP_){
return p1__6655_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__6656_SHARP_,p2__6657_SHARP_){
return goog.dom.insertChildAt(p1__6656_SHARP_,p2__6657_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__6659_SHARP_,p2__6658_SHARP_){
return goog.dom.insertSiblingBefore(p2__6658_SHARP_,p1__6659_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6661_SHARP_,p2__6660_SHARP_){
return goog.dom.insertSiblingAfter(p2__6660_SHARP_,p1__6661_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6663_SHARP_,p2__6662_SHARP_){
return goog.dom.replaceNode(p2__6662_SHARP_,p1__6663_SHARP_);
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
var seq__6668_6672 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6669_6673 = null;
var count__6670_6674 = (0);
var i__6671_6675 = (0);
while(true){
if((i__6671_6675 < count__6670_6674)){
var n_6676 = cljs.core._nth.call(null,chunk__6669_6673,i__6671_6675);
goog.style.setStyle(n_6676,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6677 = seq__6668_6672;
var G__6678 = chunk__6669_6673;
var G__6679 = count__6670_6674;
var G__6680 = (i__6671_6675 + (1));
seq__6668_6672 = G__6677;
chunk__6669_6673 = G__6678;
count__6670_6674 = G__6679;
i__6671_6675 = G__6680;
continue;
} else {
var temp__4126__auto___6681 = cljs.core.seq.call(null,seq__6668_6672);
if(temp__4126__auto___6681){
var seq__6668_6682__$1 = temp__4126__auto___6681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6668_6682__$1)){
var c__4768__auto___6683 = cljs.core.chunk_first.call(null,seq__6668_6682__$1);
var G__6684 = cljs.core.chunk_rest.call(null,seq__6668_6682__$1);
var G__6685 = c__4768__auto___6683;
var G__6686 = cljs.core.count.call(null,c__4768__auto___6683);
var G__6687 = (0);
seq__6668_6672 = G__6684;
chunk__6669_6673 = G__6685;
count__6670_6674 = G__6686;
i__6671_6675 = G__6687;
continue;
} else {
var n_6688 = cljs.core.first.call(null,seq__6668_6682__$1);
goog.style.setStyle(n_6688,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6689 = cljs.core.next.call(null,seq__6668_6682__$1);
var G__6690 = null;
var G__6691 = (0);
var G__6692 = (0);
seq__6668_6672 = G__6689;
chunk__6669_6673 = G__6690;
count__6670_6674 = G__6691;
i__6671_6675 = G__6692;
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
var G__6693__i = 0, G__6693__a = new Array(arguments.length -  2);
while (G__6693__i < G__6693__a.length) {G__6693__a[G__6693__i] = arguments[G__6693__i + 2]; ++G__6693__i;}
  value = new cljs.core.IndexedSeq(G__6693__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6694){
var content = cljs.core.first(arglist__6694);
arglist__6694 = cljs.core.next(arglist__6694);
var name = cljs.core.first(arglist__6694);
var value = cljs.core.rest(arglist__6694);
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
var seq__6699_6703 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6700_6704 = null;
var count__6701_6705 = (0);
var i__6702_6706 = (0);
while(true){
if((i__6702_6706 < count__6701_6705)){
var n_6707 = cljs.core._nth.call(null,chunk__6700_6704,i__6702_6706);
n_6707.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6708 = seq__6699_6703;
var G__6709 = chunk__6700_6704;
var G__6710 = count__6701_6705;
var G__6711 = (i__6702_6706 + (1));
seq__6699_6703 = G__6708;
chunk__6700_6704 = G__6709;
count__6701_6705 = G__6710;
i__6702_6706 = G__6711;
continue;
} else {
var temp__4126__auto___6712 = cljs.core.seq.call(null,seq__6699_6703);
if(temp__4126__auto___6712){
var seq__6699_6713__$1 = temp__4126__auto___6712;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6699_6713__$1)){
var c__4768__auto___6714 = cljs.core.chunk_first.call(null,seq__6699_6713__$1);
var G__6715 = cljs.core.chunk_rest.call(null,seq__6699_6713__$1);
var G__6716 = c__4768__auto___6714;
var G__6717 = cljs.core.count.call(null,c__4768__auto___6714);
var G__6718 = (0);
seq__6699_6703 = G__6715;
chunk__6700_6704 = G__6716;
count__6701_6705 = G__6717;
i__6702_6706 = G__6718;
continue;
} else {
var n_6719 = cljs.core.first.call(null,seq__6699_6713__$1);
n_6719.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6720 = cljs.core.next.call(null,seq__6699_6713__$1);
var G__6721 = null;
var G__6722 = (0);
var G__6723 = (0);
seq__6699_6703 = G__6720;
chunk__6700_6704 = G__6721;
count__6701_6705 = G__6722;
i__6702_6706 = G__6723;
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
var G__6724__i = 0, G__6724__a = new Array(arguments.length -  2);
while (G__6724__i < G__6724__a.length) {G__6724__a[G__6724__i] = arguments[G__6724__i + 2]; ++G__6724__i;}
  value = new cljs.core.IndexedSeq(G__6724__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__6725){
var content = cljs.core.first(arglist__6725);
arglist__6725 = cljs.core.next(arglist__6725);
var name = cljs.core.first(arglist__6725);
var value = cljs.core.rest(arglist__6725);
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
var seq__6730_6734 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6731_6735 = null;
var count__6732_6736 = (0);
var i__6733_6737 = (0);
while(true){
if((i__6733_6737 < count__6732_6736)){
var n_6738 = cljs.core._nth.call(null,chunk__6731_6735,i__6733_6737);
n_6738.removeAttribute(cljs.core.name.call(null,name));

var G__6739 = seq__6730_6734;
var G__6740 = chunk__6731_6735;
var G__6741 = count__6732_6736;
var G__6742 = (i__6733_6737 + (1));
seq__6730_6734 = G__6739;
chunk__6731_6735 = G__6740;
count__6732_6736 = G__6741;
i__6733_6737 = G__6742;
continue;
} else {
var temp__4126__auto___6743 = cljs.core.seq.call(null,seq__6730_6734);
if(temp__4126__auto___6743){
var seq__6730_6744__$1 = temp__4126__auto___6743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6730_6744__$1)){
var c__4768__auto___6745 = cljs.core.chunk_first.call(null,seq__6730_6744__$1);
var G__6746 = cljs.core.chunk_rest.call(null,seq__6730_6744__$1);
var G__6747 = c__4768__auto___6745;
var G__6748 = cljs.core.count.call(null,c__4768__auto___6745);
var G__6749 = (0);
seq__6730_6734 = G__6746;
chunk__6731_6735 = G__6747;
count__6732_6736 = G__6748;
i__6733_6737 = G__6749;
continue;
} else {
var n_6750 = cljs.core.first.call(null,seq__6730_6744__$1);
n_6750.removeAttribute(cljs.core.name.call(null,name));

var G__6751 = cljs.core.next.call(null,seq__6730_6744__$1);
var G__6752 = null;
var G__6753 = (0);
var G__6754 = (0);
seq__6730_6734 = G__6751;
chunk__6731_6735 = G__6752;
count__6732_6736 = G__6753;
i__6733_6737 = G__6754;
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
var vec__6756 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__6756,(0),null);
var v = cljs.core.nth.call(null,vec__6756,(1),null);
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
return (function (p1__6757_SHARP_){
var attr = attrs__$1.item(p1__6757_SHARP_);
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
var seq__6764_6770 = cljs.core.seq.call(null,styles);
var chunk__6765_6771 = null;
var count__6766_6772 = (0);
var i__6767_6773 = (0);
while(true){
if((i__6767_6773 < count__6766_6772)){
var vec__6768_6774 = cljs.core._nth.call(null,chunk__6765_6771,i__6767_6773);
var name_6775 = cljs.core.nth.call(null,vec__6768_6774,(0),null);
var value_6776 = cljs.core.nth.call(null,vec__6768_6774,(1),null);
domina.set_style_BANG_.call(null,content,name_6775,value_6776);

var G__6777 = seq__6764_6770;
var G__6778 = chunk__6765_6771;
var G__6779 = count__6766_6772;
var G__6780 = (i__6767_6773 + (1));
seq__6764_6770 = G__6777;
chunk__6765_6771 = G__6778;
count__6766_6772 = G__6779;
i__6767_6773 = G__6780;
continue;
} else {
var temp__4126__auto___6781 = cljs.core.seq.call(null,seq__6764_6770);
if(temp__4126__auto___6781){
var seq__6764_6782__$1 = temp__4126__auto___6781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6764_6782__$1)){
var c__4768__auto___6783 = cljs.core.chunk_first.call(null,seq__6764_6782__$1);
var G__6784 = cljs.core.chunk_rest.call(null,seq__6764_6782__$1);
var G__6785 = c__4768__auto___6783;
var G__6786 = cljs.core.count.call(null,c__4768__auto___6783);
var G__6787 = (0);
seq__6764_6770 = G__6784;
chunk__6765_6771 = G__6785;
count__6766_6772 = G__6786;
i__6767_6773 = G__6787;
continue;
} else {
var vec__6769_6788 = cljs.core.first.call(null,seq__6764_6782__$1);
var name_6789 = cljs.core.nth.call(null,vec__6769_6788,(0),null);
var value_6790 = cljs.core.nth.call(null,vec__6769_6788,(1),null);
domina.set_style_BANG_.call(null,content,name_6789,value_6790);

var G__6791 = cljs.core.next.call(null,seq__6764_6782__$1);
var G__6792 = null;
var G__6793 = (0);
var G__6794 = (0);
seq__6764_6770 = G__6791;
chunk__6765_6771 = G__6792;
count__6766_6772 = G__6793;
i__6767_6773 = G__6794;
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
var seq__6801_6807 = cljs.core.seq.call(null,attrs);
var chunk__6802_6808 = null;
var count__6803_6809 = (0);
var i__6804_6810 = (0);
while(true){
if((i__6804_6810 < count__6803_6809)){
var vec__6805_6811 = cljs.core._nth.call(null,chunk__6802_6808,i__6804_6810);
var name_6812 = cljs.core.nth.call(null,vec__6805_6811,(0),null);
var value_6813 = cljs.core.nth.call(null,vec__6805_6811,(1),null);
domina.set_attr_BANG_.call(null,content,name_6812,value_6813);

var G__6814 = seq__6801_6807;
var G__6815 = chunk__6802_6808;
var G__6816 = count__6803_6809;
var G__6817 = (i__6804_6810 + (1));
seq__6801_6807 = G__6814;
chunk__6802_6808 = G__6815;
count__6803_6809 = G__6816;
i__6804_6810 = G__6817;
continue;
} else {
var temp__4126__auto___6818 = cljs.core.seq.call(null,seq__6801_6807);
if(temp__4126__auto___6818){
var seq__6801_6819__$1 = temp__4126__auto___6818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6801_6819__$1)){
var c__4768__auto___6820 = cljs.core.chunk_first.call(null,seq__6801_6819__$1);
var G__6821 = cljs.core.chunk_rest.call(null,seq__6801_6819__$1);
var G__6822 = c__4768__auto___6820;
var G__6823 = cljs.core.count.call(null,c__4768__auto___6820);
var G__6824 = (0);
seq__6801_6807 = G__6821;
chunk__6802_6808 = G__6822;
count__6803_6809 = G__6823;
i__6804_6810 = G__6824;
continue;
} else {
var vec__6806_6825 = cljs.core.first.call(null,seq__6801_6819__$1);
var name_6826 = cljs.core.nth.call(null,vec__6806_6825,(0),null);
var value_6827 = cljs.core.nth.call(null,vec__6806_6825,(1),null);
domina.set_attr_BANG_.call(null,content,name_6826,value_6827);

var G__6828 = cljs.core.next.call(null,seq__6801_6819__$1);
var G__6829 = null;
var G__6830 = (0);
var G__6831 = (0);
seq__6801_6807 = G__6828;
chunk__6802_6808 = G__6829;
count__6803_6809 = G__6830;
i__6804_6810 = G__6831;
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
var seq__6836_6840 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6837_6841 = null;
var count__6838_6842 = (0);
var i__6839_6843 = (0);
while(true){
if((i__6839_6843 < count__6838_6842)){
var node_6844 = cljs.core._nth.call(null,chunk__6837_6841,i__6839_6843);
goog.dom.classes.add(node_6844,class$);

var G__6845 = seq__6836_6840;
var G__6846 = chunk__6837_6841;
var G__6847 = count__6838_6842;
var G__6848 = (i__6839_6843 + (1));
seq__6836_6840 = G__6845;
chunk__6837_6841 = G__6846;
count__6838_6842 = G__6847;
i__6839_6843 = G__6848;
continue;
} else {
var temp__4126__auto___6849 = cljs.core.seq.call(null,seq__6836_6840);
if(temp__4126__auto___6849){
var seq__6836_6850__$1 = temp__4126__auto___6849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6836_6850__$1)){
var c__4768__auto___6851 = cljs.core.chunk_first.call(null,seq__6836_6850__$1);
var G__6852 = cljs.core.chunk_rest.call(null,seq__6836_6850__$1);
var G__6853 = c__4768__auto___6851;
var G__6854 = cljs.core.count.call(null,c__4768__auto___6851);
var G__6855 = (0);
seq__6836_6840 = G__6852;
chunk__6837_6841 = G__6853;
count__6838_6842 = G__6854;
i__6839_6843 = G__6855;
continue;
} else {
var node_6856 = cljs.core.first.call(null,seq__6836_6850__$1);
goog.dom.classes.add(node_6856,class$);

var G__6857 = cljs.core.next.call(null,seq__6836_6850__$1);
var G__6858 = null;
var G__6859 = (0);
var G__6860 = (0);
seq__6836_6840 = G__6857;
chunk__6837_6841 = G__6858;
count__6838_6842 = G__6859;
i__6839_6843 = G__6860;
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
var seq__6865_6869 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6866_6870 = null;
var count__6867_6871 = (0);
var i__6868_6872 = (0);
while(true){
if((i__6868_6872 < count__6867_6871)){
var node_6873 = cljs.core._nth.call(null,chunk__6866_6870,i__6868_6872);
goog.dom.classes.remove(node_6873,class$);

var G__6874 = seq__6865_6869;
var G__6875 = chunk__6866_6870;
var G__6876 = count__6867_6871;
var G__6877 = (i__6868_6872 + (1));
seq__6865_6869 = G__6874;
chunk__6866_6870 = G__6875;
count__6867_6871 = G__6876;
i__6868_6872 = G__6877;
continue;
} else {
var temp__4126__auto___6878 = cljs.core.seq.call(null,seq__6865_6869);
if(temp__4126__auto___6878){
var seq__6865_6879__$1 = temp__4126__auto___6878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6865_6879__$1)){
var c__4768__auto___6880 = cljs.core.chunk_first.call(null,seq__6865_6879__$1);
var G__6881 = cljs.core.chunk_rest.call(null,seq__6865_6879__$1);
var G__6882 = c__4768__auto___6880;
var G__6883 = cljs.core.count.call(null,c__4768__auto___6880);
var G__6884 = (0);
seq__6865_6869 = G__6881;
chunk__6866_6870 = G__6882;
count__6867_6871 = G__6883;
i__6868_6872 = G__6884;
continue;
} else {
var node_6885 = cljs.core.first.call(null,seq__6865_6879__$1);
goog.dom.classes.remove(node_6885,class$);

var G__6886 = cljs.core.next.call(null,seq__6865_6879__$1);
var G__6887 = null;
var G__6888 = (0);
var G__6889 = (0);
seq__6865_6869 = G__6886;
chunk__6866_6870 = G__6887;
count__6867_6871 = G__6888;
i__6868_6872 = G__6889;
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
var seq__6894_6898 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6895_6899 = null;
var count__6896_6900 = (0);
var i__6897_6901 = (0);
while(true){
if((i__6897_6901 < count__6896_6900)){
var node_6902 = cljs.core._nth.call(null,chunk__6895_6899,i__6897_6901);
goog.dom.classes.toggle(node_6902,class$);

var G__6903 = seq__6894_6898;
var G__6904 = chunk__6895_6899;
var G__6905 = count__6896_6900;
var G__6906 = (i__6897_6901 + (1));
seq__6894_6898 = G__6903;
chunk__6895_6899 = G__6904;
count__6896_6900 = G__6905;
i__6897_6901 = G__6906;
continue;
} else {
var temp__4126__auto___6907 = cljs.core.seq.call(null,seq__6894_6898);
if(temp__4126__auto___6907){
var seq__6894_6908__$1 = temp__4126__auto___6907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6894_6908__$1)){
var c__4768__auto___6909 = cljs.core.chunk_first.call(null,seq__6894_6908__$1);
var G__6910 = cljs.core.chunk_rest.call(null,seq__6894_6908__$1);
var G__6911 = c__4768__auto___6909;
var G__6912 = cljs.core.count.call(null,c__4768__auto___6909);
var G__6913 = (0);
seq__6894_6898 = G__6910;
chunk__6895_6899 = G__6911;
count__6896_6900 = G__6912;
i__6897_6901 = G__6913;
continue;
} else {
var node_6914 = cljs.core.first.call(null,seq__6894_6908__$1);
goog.dom.classes.toggle(node_6914,class$);

var G__6915 = cljs.core.next.call(null,seq__6894_6908__$1);
var G__6916 = null;
var G__6917 = (0);
var G__6918 = (0);
seq__6894_6898 = G__6915;
chunk__6895_6899 = G__6916;
count__6896_6900 = G__6917;
i__6897_6901 = G__6918;
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
var classes_6927__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__6923_6928 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6924_6929 = null;
var count__6925_6930 = (0);
var i__6926_6931 = (0);
while(true){
if((i__6926_6931 < count__6925_6930)){
var node_6932 = cljs.core._nth.call(null,chunk__6924_6929,i__6926_6931);
goog.dom.classes.set(node_6932,classes_6927__$1);

var G__6933 = seq__6923_6928;
var G__6934 = chunk__6924_6929;
var G__6935 = count__6925_6930;
var G__6936 = (i__6926_6931 + (1));
seq__6923_6928 = G__6933;
chunk__6924_6929 = G__6934;
count__6925_6930 = G__6935;
i__6926_6931 = G__6936;
continue;
} else {
var temp__4126__auto___6937 = cljs.core.seq.call(null,seq__6923_6928);
if(temp__4126__auto___6937){
var seq__6923_6938__$1 = temp__4126__auto___6937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6923_6938__$1)){
var c__4768__auto___6939 = cljs.core.chunk_first.call(null,seq__6923_6938__$1);
var G__6940 = cljs.core.chunk_rest.call(null,seq__6923_6938__$1);
var G__6941 = c__4768__auto___6939;
var G__6942 = cljs.core.count.call(null,c__4768__auto___6939);
var G__6943 = (0);
seq__6923_6928 = G__6940;
chunk__6924_6929 = G__6941;
count__6925_6930 = G__6942;
i__6926_6931 = G__6943;
continue;
} else {
var node_6944 = cljs.core.first.call(null,seq__6923_6938__$1);
goog.dom.classes.set(node_6944,classes_6927__$1);

var G__6945 = cljs.core.next.call(null,seq__6923_6938__$1);
var G__6946 = null;
var G__6947 = (0);
var G__6948 = (0);
seq__6923_6928 = G__6945;
chunk__6924_6929 = G__6946;
count__6925_6930 = G__6947;
i__6926_6931 = G__6948;
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
var seq__6953_6957 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6954_6958 = null;
var count__6955_6959 = (0);
var i__6956_6960 = (0);
while(true){
if((i__6956_6960 < count__6955_6959)){
var node_6961 = cljs.core._nth.call(null,chunk__6954_6958,i__6956_6960);
goog.dom.setTextContent(node_6961,value);

var G__6962 = seq__6953_6957;
var G__6963 = chunk__6954_6958;
var G__6964 = count__6955_6959;
var G__6965 = (i__6956_6960 + (1));
seq__6953_6957 = G__6962;
chunk__6954_6958 = G__6963;
count__6955_6959 = G__6964;
i__6956_6960 = G__6965;
continue;
} else {
var temp__4126__auto___6966 = cljs.core.seq.call(null,seq__6953_6957);
if(temp__4126__auto___6966){
var seq__6953_6967__$1 = temp__4126__auto___6966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6953_6967__$1)){
var c__4768__auto___6968 = cljs.core.chunk_first.call(null,seq__6953_6967__$1);
var G__6969 = cljs.core.chunk_rest.call(null,seq__6953_6967__$1);
var G__6970 = c__4768__auto___6968;
var G__6971 = cljs.core.count.call(null,c__4768__auto___6968);
var G__6972 = (0);
seq__6953_6957 = G__6969;
chunk__6954_6958 = G__6970;
count__6955_6959 = G__6971;
i__6956_6960 = G__6972;
continue;
} else {
var node_6973 = cljs.core.first.call(null,seq__6953_6967__$1);
goog.dom.setTextContent(node_6973,value);

var G__6974 = cljs.core.next.call(null,seq__6953_6967__$1);
var G__6975 = null;
var G__6976 = (0);
var G__6977 = (0);
seq__6953_6957 = G__6974;
chunk__6954_6958 = G__6975;
count__6955_6959 = G__6976;
i__6956_6960 = G__6977;
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
var seq__6982_6986 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6983_6987 = null;
var count__6984_6988 = (0);
var i__6985_6989 = (0);
while(true){
if((i__6985_6989 < count__6984_6988)){
var node_6990 = cljs.core._nth.call(null,chunk__6983_6987,i__6985_6989);
goog.dom.forms.setValue(node_6990,value);

var G__6991 = seq__6982_6986;
var G__6992 = chunk__6983_6987;
var G__6993 = count__6984_6988;
var G__6994 = (i__6985_6989 + (1));
seq__6982_6986 = G__6991;
chunk__6983_6987 = G__6992;
count__6984_6988 = G__6993;
i__6985_6989 = G__6994;
continue;
} else {
var temp__4126__auto___6995 = cljs.core.seq.call(null,seq__6982_6986);
if(temp__4126__auto___6995){
var seq__6982_6996__$1 = temp__4126__auto___6995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6982_6996__$1)){
var c__4768__auto___6997 = cljs.core.chunk_first.call(null,seq__6982_6996__$1);
var G__6998 = cljs.core.chunk_rest.call(null,seq__6982_6996__$1);
var G__6999 = c__4768__auto___6997;
var G__7000 = cljs.core.count.call(null,c__4768__auto___6997);
var G__7001 = (0);
seq__6982_6986 = G__6998;
chunk__6983_6987 = G__6999;
count__6984_6988 = G__7000;
i__6985_6989 = G__7001;
continue;
} else {
var node_7002 = cljs.core.first.call(null,seq__6982_6996__$1);
goog.dom.forms.setValue(node_7002,value);

var G__7003 = cljs.core.next.call(null,seq__6982_6996__$1);
var G__7004 = null;
var G__7005 = (0);
var G__7006 = (0);
seq__6982_6986 = G__7003;
chunk__6983_6987 = G__7004;
count__6984_6988 = G__7005;
i__6985_6989 = G__7006;
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
var value_7017 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__7013_7018 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7014_7019 = null;
var count__7015_7020 = (0);
var i__7016_7021 = (0);
while(true){
if((i__7016_7021 < count__7015_7020)){
var node_7022 = cljs.core._nth.call(null,chunk__7014_7019,i__7016_7021);
node_7022.innerHTML = value_7017;

var G__7023 = seq__7013_7018;
var G__7024 = chunk__7014_7019;
var G__7025 = count__7015_7020;
var G__7026 = (i__7016_7021 + (1));
seq__7013_7018 = G__7023;
chunk__7014_7019 = G__7024;
count__7015_7020 = G__7025;
i__7016_7021 = G__7026;
continue;
} else {
var temp__4126__auto___7027 = cljs.core.seq.call(null,seq__7013_7018);
if(temp__4126__auto___7027){
var seq__7013_7028__$1 = temp__4126__auto___7027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7013_7028__$1)){
var c__4768__auto___7029 = cljs.core.chunk_first.call(null,seq__7013_7028__$1);
var G__7030 = cljs.core.chunk_rest.call(null,seq__7013_7028__$1);
var G__7031 = c__4768__auto___7029;
var G__7032 = cljs.core.count.call(null,c__4768__auto___7029);
var G__7033 = (0);
seq__7013_7018 = G__7030;
chunk__7014_7019 = G__7031;
count__7015_7020 = G__7032;
i__7016_7021 = G__7033;
continue;
} else {
var node_7034 = cljs.core.first.call(null,seq__7013_7028__$1);
node_7034.innerHTML = value_7017;

var G__7035 = cljs.core.next.call(null,seq__7013_7028__$1);
var G__7036 = null;
var G__7037 = (0);
var G__7038 = (0);
seq__7013_7018 = G__7035;
chunk__7014_7019 = G__7036;
count__7015_7020 = G__7037;
i__7016_7021 = G__7038;
continue;
}
} else {
}
}
break;
}
}catch (e7012){if((e7012 instanceof Error)){
var e_7039 = e7012;
domina.replace_children_BANG_.call(null,content,value_7017);
} else {
throw e7012;

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
var seq__7046_7050 = cljs.core.seq.call(null,children);
var chunk__7047_7051 = null;
var count__7048_7052 = (0);
var i__7049_7053 = (0);
while(true){
if((i__7049_7053 < count__7048_7052)){
var child_7054 = cljs.core._nth.call(null,chunk__7047_7051,i__7049_7053);
frag.appendChild(child_7054);

var G__7055 = seq__7046_7050;
var G__7056 = chunk__7047_7051;
var G__7057 = count__7048_7052;
var G__7058 = (i__7049_7053 + (1));
seq__7046_7050 = G__7055;
chunk__7047_7051 = G__7056;
count__7048_7052 = G__7057;
i__7049_7053 = G__7058;
continue;
} else {
var temp__4126__auto___7059 = cljs.core.seq.call(null,seq__7046_7050);
if(temp__4126__auto___7059){
var seq__7046_7060__$1 = temp__4126__auto___7059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7046_7060__$1)){
var c__4768__auto___7061 = cljs.core.chunk_first.call(null,seq__7046_7060__$1);
var G__7062 = cljs.core.chunk_rest.call(null,seq__7046_7060__$1);
var G__7063 = c__4768__auto___7061;
var G__7064 = cljs.core.count.call(null,c__4768__auto___7061);
var G__7065 = (0);
seq__7046_7050 = G__7062;
chunk__7047_7051 = G__7063;
count__7048_7052 = G__7064;
i__7049_7053 = G__7065;
continue;
} else {
var child_7066 = cljs.core.first.call(null,seq__7046_7060__$1);
frag.appendChild(child_7066);

var G__7067 = cljs.core.next.call(null,seq__7046_7060__$1);
var G__7068 = null;
var G__7069 = (0);
var G__7070 = (0);
seq__7046_7050 = G__7067;
chunk__7047_7051 = G__7068;
count__7048_7052 = G__7069;
i__7049_7053 = G__7070;
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
return (function (p1__7040_SHARP_,p2__7041_SHARP_){
return f.call(null,p1__7040_SHARP_,p2__7041_SHARP_);
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
if((function (){var G__7072 = list_thing;
if(G__7072){
var bit__4662__auto__ = (G__7072.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__7072.cljs$core$ISeqable$)){
return true;
} else {
if((!G__7072.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7072);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7072);
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
if((function (){var G__7073 = content;
if(G__7073){
var bit__4662__auto__ = (G__7073.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__7073.cljs$core$ISeqable$)){
return true;
} else {
if((!G__7073.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7073);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7073);
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
if((function (){var G__7074 = content;
if(G__7074){
var bit__4662__auto__ = (G__7074.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__7074.cljs$core$ISeqable$)){
return true;
} else {
if((!G__7074.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7074);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__7074);
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
