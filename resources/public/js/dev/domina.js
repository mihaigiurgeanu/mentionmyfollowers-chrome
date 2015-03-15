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
var opt_wrapper_288733 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_288734 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_288735 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_288735,opt_wrapper_288733,table_section_wrapper_288734,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_288733,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_288734,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_288734,cell_wrapper_288735,table_section_wrapper_288734,table_section_wrapper_288734]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__288740 = cljs.core.seq.call(null,tbody);
var chunk__288741 = null;
var count__288742 = (0);
var i__288743 = (0);
while(true){
if((i__288743 < count__288742)){
var child = cljs.core._nth.call(null,chunk__288741,i__288743);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__288744 = seq__288740;
var G__288745 = chunk__288741;
var G__288746 = count__288742;
var G__288747 = (i__288743 + (1));
seq__288740 = G__288744;
chunk__288741 = G__288745;
count__288742 = G__288746;
i__288743 = G__288747;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__288740);
if(temp__4126__auto__){
var seq__288740__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288740__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__288740__$1);
var G__288748 = cljs.core.chunk_rest.call(null,seq__288740__$1);
var G__288749 = c__4768__auto__;
var G__288750 = cljs.core.count.call(null,c__4768__auto__);
var G__288751 = (0);
seq__288740 = G__288748;
chunk__288741 = G__288749;
count__288742 = G__288750;
i__288743 = G__288751;
continue;
} else {
var child = cljs.core.first.call(null,seq__288740__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__288752 = cljs.core.next.call(null,seq__288740__$1);
var G__288753 = null;
var G__288754 = (0);
var G__288755 = (0);
seq__288740 = G__288752;
chunk__288741 = G__288753;
count__288742 = G__288754;
i__288743 = G__288755;
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
var vec__288757 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__288757,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__288757,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__288757,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__288758 = wrapper.lastChild;
var G__288759 = (level - (1));
wrapper = G__288758;
level = G__288759;
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

domina.DomContent = (function (){var obj288761 = {};
return obj288761;
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
var G__288762__i = 0, G__288762__a = new Array(arguments.length -  0);
while (G__288762__i < G__288762__a.length) {G__288762__a[G__288762__i] = arguments[G__288762__i + 0]; ++G__288762__i;}
  mesg = new cljs.core.IndexedSeq(G__288762__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__288763){
var mesg = cljs.core.seq(arglist__288763);
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
var G__288764__i = 0, G__288764__a = new Array(arguments.length -  0);
while (G__288764__i < G__288764__a.length) {G__288764__a[G__288764__i] = arguments[G__288764__i + 0]; ++G__288764__i;}
  mesg = new cljs.core.IndexedSeq(G__288764__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__288765){
var mesg = cljs.core.seq(arglist__288765);
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
var G__288766__i = 0, G__288766__a = new Array(arguments.length -  0);
while (G__288766__i < G__288766__a.length) {G__288766__a[G__288766__i] = arguments[G__288766__i + 0]; ++G__288766__i;}
  contents = new cljs.core.IndexedSeq(G__288766__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__288767){
var contents = cljs.core.seq(arglist__288767);
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
return cljs.core.map.call(null,(function (p1__288768_SHARP_){
return p1__288768_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__288769_SHARP_,p2__288770_SHARP_){
return goog.dom.insertChildAt(p1__288769_SHARP_,p2__288770_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__288772_SHARP_,p2__288771_SHARP_){
return goog.dom.insertSiblingBefore(p2__288771_SHARP_,p1__288772_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__288774_SHARP_,p2__288773_SHARP_){
return goog.dom.insertSiblingAfter(p2__288773_SHARP_,p1__288774_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__288776_SHARP_,p2__288775_SHARP_){
return goog.dom.replaceNode(p2__288775_SHARP_,p1__288776_SHARP_);
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
var seq__288781_288785 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__288782_288786 = null;
var count__288783_288787 = (0);
var i__288784_288788 = (0);
while(true){
if((i__288784_288788 < count__288783_288787)){
var n_288789 = cljs.core._nth.call(null,chunk__288782_288786,i__288784_288788);
goog.style.setStyle(n_288789,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__288790 = seq__288781_288785;
var G__288791 = chunk__288782_288786;
var G__288792 = count__288783_288787;
var G__288793 = (i__288784_288788 + (1));
seq__288781_288785 = G__288790;
chunk__288782_288786 = G__288791;
count__288783_288787 = G__288792;
i__288784_288788 = G__288793;
continue;
} else {
var temp__4126__auto___288794 = cljs.core.seq.call(null,seq__288781_288785);
if(temp__4126__auto___288794){
var seq__288781_288795__$1 = temp__4126__auto___288794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288781_288795__$1)){
var c__4768__auto___288796 = cljs.core.chunk_first.call(null,seq__288781_288795__$1);
var G__288797 = cljs.core.chunk_rest.call(null,seq__288781_288795__$1);
var G__288798 = c__4768__auto___288796;
var G__288799 = cljs.core.count.call(null,c__4768__auto___288796);
var G__288800 = (0);
seq__288781_288785 = G__288797;
chunk__288782_288786 = G__288798;
count__288783_288787 = G__288799;
i__288784_288788 = G__288800;
continue;
} else {
var n_288801 = cljs.core.first.call(null,seq__288781_288795__$1);
goog.style.setStyle(n_288801,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__288802 = cljs.core.next.call(null,seq__288781_288795__$1);
var G__288803 = null;
var G__288804 = (0);
var G__288805 = (0);
seq__288781_288785 = G__288802;
chunk__288782_288786 = G__288803;
count__288783_288787 = G__288804;
i__288784_288788 = G__288805;
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
var G__288806__i = 0, G__288806__a = new Array(arguments.length -  2);
while (G__288806__i < G__288806__a.length) {G__288806__a[G__288806__i] = arguments[G__288806__i + 2]; ++G__288806__i;}
  value = new cljs.core.IndexedSeq(G__288806__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__288807){
var content = cljs.core.first(arglist__288807);
arglist__288807 = cljs.core.next(arglist__288807);
var name = cljs.core.first(arglist__288807);
var value = cljs.core.rest(arglist__288807);
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
var seq__288812_288816 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__288813_288817 = null;
var count__288814_288818 = (0);
var i__288815_288819 = (0);
while(true){
if((i__288815_288819 < count__288814_288818)){
var n_288820 = cljs.core._nth.call(null,chunk__288813_288817,i__288815_288819);
n_288820.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__288821 = seq__288812_288816;
var G__288822 = chunk__288813_288817;
var G__288823 = count__288814_288818;
var G__288824 = (i__288815_288819 + (1));
seq__288812_288816 = G__288821;
chunk__288813_288817 = G__288822;
count__288814_288818 = G__288823;
i__288815_288819 = G__288824;
continue;
} else {
var temp__4126__auto___288825 = cljs.core.seq.call(null,seq__288812_288816);
if(temp__4126__auto___288825){
var seq__288812_288826__$1 = temp__4126__auto___288825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288812_288826__$1)){
var c__4768__auto___288827 = cljs.core.chunk_first.call(null,seq__288812_288826__$1);
var G__288828 = cljs.core.chunk_rest.call(null,seq__288812_288826__$1);
var G__288829 = c__4768__auto___288827;
var G__288830 = cljs.core.count.call(null,c__4768__auto___288827);
var G__288831 = (0);
seq__288812_288816 = G__288828;
chunk__288813_288817 = G__288829;
count__288814_288818 = G__288830;
i__288815_288819 = G__288831;
continue;
} else {
var n_288832 = cljs.core.first.call(null,seq__288812_288826__$1);
n_288832.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__288833 = cljs.core.next.call(null,seq__288812_288826__$1);
var G__288834 = null;
var G__288835 = (0);
var G__288836 = (0);
seq__288812_288816 = G__288833;
chunk__288813_288817 = G__288834;
count__288814_288818 = G__288835;
i__288815_288819 = G__288836;
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
var G__288837__i = 0, G__288837__a = new Array(arguments.length -  2);
while (G__288837__i < G__288837__a.length) {G__288837__a[G__288837__i] = arguments[G__288837__i + 2]; ++G__288837__i;}
  value = new cljs.core.IndexedSeq(G__288837__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__288838){
var content = cljs.core.first(arglist__288838);
arglist__288838 = cljs.core.next(arglist__288838);
var name = cljs.core.first(arglist__288838);
var value = cljs.core.rest(arglist__288838);
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
var seq__288843_288847 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__288844_288848 = null;
var count__288845_288849 = (0);
var i__288846_288850 = (0);
while(true){
if((i__288846_288850 < count__288845_288849)){
var n_288851 = cljs.core._nth.call(null,chunk__288844_288848,i__288846_288850);
n_288851.removeAttribute(cljs.core.name.call(null,name));

var G__288852 = seq__288843_288847;
var G__288853 = chunk__288844_288848;
var G__288854 = count__288845_288849;
var G__288855 = (i__288846_288850 + (1));
seq__288843_288847 = G__288852;
chunk__288844_288848 = G__288853;
count__288845_288849 = G__288854;
i__288846_288850 = G__288855;
continue;
} else {
var temp__4126__auto___288856 = cljs.core.seq.call(null,seq__288843_288847);
if(temp__4126__auto___288856){
var seq__288843_288857__$1 = temp__4126__auto___288856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288843_288857__$1)){
var c__4768__auto___288858 = cljs.core.chunk_first.call(null,seq__288843_288857__$1);
var G__288859 = cljs.core.chunk_rest.call(null,seq__288843_288857__$1);
var G__288860 = c__4768__auto___288858;
var G__288861 = cljs.core.count.call(null,c__4768__auto___288858);
var G__288862 = (0);
seq__288843_288847 = G__288859;
chunk__288844_288848 = G__288860;
count__288845_288849 = G__288861;
i__288846_288850 = G__288862;
continue;
} else {
var n_288863 = cljs.core.first.call(null,seq__288843_288857__$1);
n_288863.removeAttribute(cljs.core.name.call(null,name));

var G__288864 = cljs.core.next.call(null,seq__288843_288857__$1);
var G__288865 = null;
var G__288866 = (0);
var G__288867 = (0);
seq__288843_288847 = G__288864;
chunk__288844_288848 = G__288865;
count__288845_288849 = G__288866;
i__288846_288850 = G__288867;
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
var vec__288869 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__288869,(0),null);
var v = cljs.core.nth.call(null,vec__288869,(1),null);
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
return (function (p1__288870_SHARP_){
var attr = attrs__$1.item(p1__288870_SHARP_);
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
var seq__288877_288883 = cljs.core.seq.call(null,styles);
var chunk__288878_288884 = null;
var count__288879_288885 = (0);
var i__288880_288886 = (0);
while(true){
if((i__288880_288886 < count__288879_288885)){
var vec__288881_288887 = cljs.core._nth.call(null,chunk__288878_288884,i__288880_288886);
var name_288888 = cljs.core.nth.call(null,vec__288881_288887,(0),null);
var value_288889 = cljs.core.nth.call(null,vec__288881_288887,(1),null);
domina.set_style_BANG_.call(null,content,name_288888,value_288889);

var G__288890 = seq__288877_288883;
var G__288891 = chunk__288878_288884;
var G__288892 = count__288879_288885;
var G__288893 = (i__288880_288886 + (1));
seq__288877_288883 = G__288890;
chunk__288878_288884 = G__288891;
count__288879_288885 = G__288892;
i__288880_288886 = G__288893;
continue;
} else {
var temp__4126__auto___288894 = cljs.core.seq.call(null,seq__288877_288883);
if(temp__4126__auto___288894){
var seq__288877_288895__$1 = temp__4126__auto___288894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288877_288895__$1)){
var c__4768__auto___288896 = cljs.core.chunk_first.call(null,seq__288877_288895__$1);
var G__288897 = cljs.core.chunk_rest.call(null,seq__288877_288895__$1);
var G__288898 = c__4768__auto___288896;
var G__288899 = cljs.core.count.call(null,c__4768__auto___288896);
var G__288900 = (0);
seq__288877_288883 = G__288897;
chunk__288878_288884 = G__288898;
count__288879_288885 = G__288899;
i__288880_288886 = G__288900;
continue;
} else {
var vec__288882_288901 = cljs.core.first.call(null,seq__288877_288895__$1);
var name_288902 = cljs.core.nth.call(null,vec__288882_288901,(0),null);
var value_288903 = cljs.core.nth.call(null,vec__288882_288901,(1),null);
domina.set_style_BANG_.call(null,content,name_288902,value_288903);

var G__288904 = cljs.core.next.call(null,seq__288877_288895__$1);
var G__288905 = null;
var G__288906 = (0);
var G__288907 = (0);
seq__288877_288883 = G__288904;
chunk__288878_288884 = G__288905;
count__288879_288885 = G__288906;
i__288880_288886 = G__288907;
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
var seq__288914_288920 = cljs.core.seq.call(null,attrs);
var chunk__288915_288921 = null;
var count__288916_288922 = (0);
var i__288917_288923 = (0);
while(true){
if((i__288917_288923 < count__288916_288922)){
var vec__288918_288924 = cljs.core._nth.call(null,chunk__288915_288921,i__288917_288923);
var name_288925 = cljs.core.nth.call(null,vec__288918_288924,(0),null);
var value_288926 = cljs.core.nth.call(null,vec__288918_288924,(1),null);
domina.set_attr_BANG_.call(null,content,name_288925,value_288926);

var G__288927 = seq__288914_288920;
var G__288928 = chunk__288915_288921;
var G__288929 = count__288916_288922;
var G__288930 = (i__288917_288923 + (1));
seq__288914_288920 = G__288927;
chunk__288915_288921 = G__288928;
count__288916_288922 = G__288929;
i__288917_288923 = G__288930;
continue;
} else {
var temp__4126__auto___288931 = cljs.core.seq.call(null,seq__288914_288920);
if(temp__4126__auto___288931){
var seq__288914_288932__$1 = temp__4126__auto___288931;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288914_288932__$1)){
var c__4768__auto___288933 = cljs.core.chunk_first.call(null,seq__288914_288932__$1);
var G__288934 = cljs.core.chunk_rest.call(null,seq__288914_288932__$1);
var G__288935 = c__4768__auto___288933;
var G__288936 = cljs.core.count.call(null,c__4768__auto___288933);
var G__288937 = (0);
seq__288914_288920 = G__288934;
chunk__288915_288921 = G__288935;
count__288916_288922 = G__288936;
i__288917_288923 = G__288937;
continue;
} else {
var vec__288919_288938 = cljs.core.first.call(null,seq__288914_288932__$1);
var name_288939 = cljs.core.nth.call(null,vec__288919_288938,(0),null);
var value_288940 = cljs.core.nth.call(null,vec__288919_288938,(1),null);
domina.set_attr_BANG_.call(null,content,name_288939,value_288940);

var G__288941 = cljs.core.next.call(null,seq__288914_288932__$1);
var G__288942 = null;
var G__288943 = (0);
var G__288944 = (0);
seq__288914_288920 = G__288941;
chunk__288915_288921 = G__288942;
count__288916_288922 = G__288943;
i__288917_288923 = G__288944;
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
var seq__288949_288953 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__288950_288954 = null;
var count__288951_288955 = (0);
var i__288952_288956 = (0);
while(true){
if((i__288952_288956 < count__288951_288955)){
var node_288957 = cljs.core._nth.call(null,chunk__288950_288954,i__288952_288956);
goog.dom.classes.add(node_288957,class$);

var G__288958 = seq__288949_288953;
var G__288959 = chunk__288950_288954;
var G__288960 = count__288951_288955;
var G__288961 = (i__288952_288956 + (1));
seq__288949_288953 = G__288958;
chunk__288950_288954 = G__288959;
count__288951_288955 = G__288960;
i__288952_288956 = G__288961;
continue;
} else {
var temp__4126__auto___288962 = cljs.core.seq.call(null,seq__288949_288953);
if(temp__4126__auto___288962){
var seq__288949_288963__$1 = temp__4126__auto___288962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288949_288963__$1)){
var c__4768__auto___288964 = cljs.core.chunk_first.call(null,seq__288949_288963__$1);
var G__288965 = cljs.core.chunk_rest.call(null,seq__288949_288963__$1);
var G__288966 = c__4768__auto___288964;
var G__288967 = cljs.core.count.call(null,c__4768__auto___288964);
var G__288968 = (0);
seq__288949_288953 = G__288965;
chunk__288950_288954 = G__288966;
count__288951_288955 = G__288967;
i__288952_288956 = G__288968;
continue;
} else {
var node_288969 = cljs.core.first.call(null,seq__288949_288963__$1);
goog.dom.classes.add(node_288969,class$);

var G__288970 = cljs.core.next.call(null,seq__288949_288963__$1);
var G__288971 = null;
var G__288972 = (0);
var G__288973 = (0);
seq__288949_288953 = G__288970;
chunk__288950_288954 = G__288971;
count__288951_288955 = G__288972;
i__288952_288956 = G__288973;
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
var seq__288978_288982 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__288979_288983 = null;
var count__288980_288984 = (0);
var i__288981_288985 = (0);
while(true){
if((i__288981_288985 < count__288980_288984)){
var node_288986 = cljs.core._nth.call(null,chunk__288979_288983,i__288981_288985);
goog.dom.classes.remove(node_288986,class$);

var G__288987 = seq__288978_288982;
var G__288988 = chunk__288979_288983;
var G__288989 = count__288980_288984;
var G__288990 = (i__288981_288985 + (1));
seq__288978_288982 = G__288987;
chunk__288979_288983 = G__288988;
count__288980_288984 = G__288989;
i__288981_288985 = G__288990;
continue;
} else {
var temp__4126__auto___288991 = cljs.core.seq.call(null,seq__288978_288982);
if(temp__4126__auto___288991){
var seq__288978_288992__$1 = temp__4126__auto___288991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__288978_288992__$1)){
var c__4768__auto___288993 = cljs.core.chunk_first.call(null,seq__288978_288992__$1);
var G__288994 = cljs.core.chunk_rest.call(null,seq__288978_288992__$1);
var G__288995 = c__4768__auto___288993;
var G__288996 = cljs.core.count.call(null,c__4768__auto___288993);
var G__288997 = (0);
seq__288978_288982 = G__288994;
chunk__288979_288983 = G__288995;
count__288980_288984 = G__288996;
i__288981_288985 = G__288997;
continue;
} else {
var node_288998 = cljs.core.first.call(null,seq__288978_288992__$1);
goog.dom.classes.remove(node_288998,class$);

var G__288999 = cljs.core.next.call(null,seq__288978_288992__$1);
var G__289000 = null;
var G__289001 = (0);
var G__289002 = (0);
seq__288978_288982 = G__288999;
chunk__288979_288983 = G__289000;
count__288980_288984 = G__289001;
i__288981_288985 = G__289002;
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
var seq__289007_289011 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__289008_289012 = null;
var count__289009_289013 = (0);
var i__289010_289014 = (0);
while(true){
if((i__289010_289014 < count__289009_289013)){
var node_289015 = cljs.core._nth.call(null,chunk__289008_289012,i__289010_289014);
goog.dom.classes.toggle(node_289015,class$);

var G__289016 = seq__289007_289011;
var G__289017 = chunk__289008_289012;
var G__289018 = count__289009_289013;
var G__289019 = (i__289010_289014 + (1));
seq__289007_289011 = G__289016;
chunk__289008_289012 = G__289017;
count__289009_289013 = G__289018;
i__289010_289014 = G__289019;
continue;
} else {
var temp__4126__auto___289020 = cljs.core.seq.call(null,seq__289007_289011);
if(temp__4126__auto___289020){
var seq__289007_289021__$1 = temp__4126__auto___289020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289007_289021__$1)){
var c__4768__auto___289022 = cljs.core.chunk_first.call(null,seq__289007_289021__$1);
var G__289023 = cljs.core.chunk_rest.call(null,seq__289007_289021__$1);
var G__289024 = c__4768__auto___289022;
var G__289025 = cljs.core.count.call(null,c__4768__auto___289022);
var G__289026 = (0);
seq__289007_289011 = G__289023;
chunk__289008_289012 = G__289024;
count__289009_289013 = G__289025;
i__289010_289014 = G__289026;
continue;
} else {
var node_289027 = cljs.core.first.call(null,seq__289007_289021__$1);
goog.dom.classes.toggle(node_289027,class$);

var G__289028 = cljs.core.next.call(null,seq__289007_289021__$1);
var G__289029 = null;
var G__289030 = (0);
var G__289031 = (0);
seq__289007_289011 = G__289028;
chunk__289008_289012 = G__289029;
count__289009_289013 = G__289030;
i__289010_289014 = G__289031;
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
var classes_289040__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__289036_289041 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__289037_289042 = null;
var count__289038_289043 = (0);
var i__289039_289044 = (0);
while(true){
if((i__289039_289044 < count__289038_289043)){
var node_289045 = cljs.core._nth.call(null,chunk__289037_289042,i__289039_289044);
goog.dom.classes.set(node_289045,classes_289040__$1);

var G__289046 = seq__289036_289041;
var G__289047 = chunk__289037_289042;
var G__289048 = count__289038_289043;
var G__289049 = (i__289039_289044 + (1));
seq__289036_289041 = G__289046;
chunk__289037_289042 = G__289047;
count__289038_289043 = G__289048;
i__289039_289044 = G__289049;
continue;
} else {
var temp__4126__auto___289050 = cljs.core.seq.call(null,seq__289036_289041);
if(temp__4126__auto___289050){
var seq__289036_289051__$1 = temp__4126__auto___289050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289036_289051__$1)){
var c__4768__auto___289052 = cljs.core.chunk_first.call(null,seq__289036_289051__$1);
var G__289053 = cljs.core.chunk_rest.call(null,seq__289036_289051__$1);
var G__289054 = c__4768__auto___289052;
var G__289055 = cljs.core.count.call(null,c__4768__auto___289052);
var G__289056 = (0);
seq__289036_289041 = G__289053;
chunk__289037_289042 = G__289054;
count__289038_289043 = G__289055;
i__289039_289044 = G__289056;
continue;
} else {
var node_289057 = cljs.core.first.call(null,seq__289036_289051__$1);
goog.dom.classes.set(node_289057,classes_289040__$1);

var G__289058 = cljs.core.next.call(null,seq__289036_289051__$1);
var G__289059 = null;
var G__289060 = (0);
var G__289061 = (0);
seq__289036_289041 = G__289058;
chunk__289037_289042 = G__289059;
count__289038_289043 = G__289060;
i__289039_289044 = G__289061;
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
var seq__289066_289070 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__289067_289071 = null;
var count__289068_289072 = (0);
var i__289069_289073 = (0);
while(true){
if((i__289069_289073 < count__289068_289072)){
var node_289074 = cljs.core._nth.call(null,chunk__289067_289071,i__289069_289073);
goog.dom.setTextContent(node_289074,value);

var G__289075 = seq__289066_289070;
var G__289076 = chunk__289067_289071;
var G__289077 = count__289068_289072;
var G__289078 = (i__289069_289073 + (1));
seq__289066_289070 = G__289075;
chunk__289067_289071 = G__289076;
count__289068_289072 = G__289077;
i__289069_289073 = G__289078;
continue;
} else {
var temp__4126__auto___289079 = cljs.core.seq.call(null,seq__289066_289070);
if(temp__4126__auto___289079){
var seq__289066_289080__$1 = temp__4126__auto___289079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289066_289080__$1)){
var c__4768__auto___289081 = cljs.core.chunk_first.call(null,seq__289066_289080__$1);
var G__289082 = cljs.core.chunk_rest.call(null,seq__289066_289080__$1);
var G__289083 = c__4768__auto___289081;
var G__289084 = cljs.core.count.call(null,c__4768__auto___289081);
var G__289085 = (0);
seq__289066_289070 = G__289082;
chunk__289067_289071 = G__289083;
count__289068_289072 = G__289084;
i__289069_289073 = G__289085;
continue;
} else {
var node_289086 = cljs.core.first.call(null,seq__289066_289080__$1);
goog.dom.setTextContent(node_289086,value);

var G__289087 = cljs.core.next.call(null,seq__289066_289080__$1);
var G__289088 = null;
var G__289089 = (0);
var G__289090 = (0);
seq__289066_289070 = G__289087;
chunk__289067_289071 = G__289088;
count__289068_289072 = G__289089;
i__289069_289073 = G__289090;
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
var seq__289095_289099 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__289096_289100 = null;
var count__289097_289101 = (0);
var i__289098_289102 = (0);
while(true){
if((i__289098_289102 < count__289097_289101)){
var node_289103 = cljs.core._nth.call(null,chunk__289096_289100,i__289098_289102);
goog.dom.forms.setValue(node_289103,value);

var G__289104 = seq__289095_289099;
var G__289105 = chunk__289096_289100;
var G__289106 = count__289097_289101;
var G__289107 = (i__289098_289102 + (1));
seq__289095_289099 = G__289104;
chunk__289096_289100 = G__289105;
count__289097_289101 = G__289106;
i__289098_289102 = G__289107;
continue;
} else {
var temp__4126__auto___289108 = cljs.core.seq.call(null,seq__289095_289099);
if(temp__4126__auto___289108){
var seq__289095_289109__$1 = temp__4126__auto___289108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289095_289109__$1)){
var c__4768__auto___289110 = cljs.core.chunk_first.call(null,seq__289095_289109__$1);
var G__289111 = cljs.core.chunk_rest.call(null,seq__289095_289109__$1);
var G__289112 = c__4768__auto___289110;
var G__289113 = cljs.core.count.call(null,c__4768__auto___289110);
var G__289114 = (0);
seq__289095_289099 = G__289111;
chunk__289096_289100 = G__289112;
count__289097_289101 = G__289113;
i__289098_289102 = G__289114;
continue;
} else {
var node_289115 = cljs.core.first.call(null,seq__289095_289109__$1);
goog.dom.forms.setValue(node_289115,value);

var G__289116 = cljs.core.next.call(null,seq__289095_289109__$1);
var G__289117 = null;
var G__289118 = (0);
var G__289119 = (0);
seq__289095_289099 = G__289116;
chunk__289096_289100 = G__289117;
count__289097_289101 = G__289118;
i__289098_289102 = G__289119;
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
var value_289130 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__289126_289131 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__289127_289132 = null;
var count__289128_289133 = (0);
var i__289129_289134 = (0);
while(true){
if((i__289129_289134 < count__289128_289133)){
var node_289135 = cljs.core._nth.call(null,chunk__289127_289132,i__289129_289134);
node_289135.innerHTML = value_289130;

var G__289136 = seq__289126_289131;
var G__289137 = chunk__289127_289132;
var G__289138 = count__289128_289133;
var G__289139 = (i__289129_289134 + (1));
seq__289126_289131 = G__289136;
chunk__289127_289132 = G__289137;
count__289128_289133 = G__289138;
i__289129_289134 = G__289139;
continue;
} else {
var temp__4126__auto___289140 = cljs.core.seq.call(null,seq__289126_289131);
if(temp__4126__auto___289140){
var seq__289126_289141__$1 = temp__4126__auto___289140;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289126_289141__$1)){
var c__4768__auto___289142 = cljs.core.chunk_first.call(null,seq__289126_289141__$1);
var G__289143 = cljs.core.chunk_rest.call(null,seq__289126_289141__$1);
var G__289144 = c__4768__auto___289142;
var G__289145 = cljs.core.count.call(null,c__4768__auto___289142);
var G__289146 = (0);
seq__289126_289131 = G__289143;
chunk__289127_289132 = G__289144;
count__289128_289133 = G__289145;
i__289129_289134 = G__289146;
continue;
} else {
var node_289147 = cljs.core.first.call(null,seq__289126_289141__$1);
node_289147.innerHTML = value_289130;

var G__289148 = cljs.core.next.call(null,seq__289126_289141__$1);
var G__289149 = null;
var G__289150 = (0);
var G__289151 = (0);
seq__289126_289131 = G__289148;
chunk__289127_289132 = G__289149;
count__289128_289133 = G__289150;
i__289129_289134 = G__289151;
continue;
}
} else {
}
}
break;
}
}catch (e289125){if((e289125 instanceof Error)){
var e_289152 = e289125;
domina.replace_children_BANG_.call(null,content,value_289130);
} else {
throw e289125;

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
var seq__289159_289163 = cljs.core.seq.call(null,children);
var chunk__289160_289164 = null;
var count__289161_289165 = (0);
var i__289162_289166 = (0);
while(true){
if((i__289162_289166 < count__289161_289165)){
var child_289167 = cljs.core._nth.call(null,chunk__289160_289164,i__289162_289166);
frag.appendChild(child_289167);

var G__289168 = seq__289159_289163;
var G__289169 = chunk__289160_289164;
var G__289170 = count__289161_289165;
var G__289171 = (i__289162_289166 + (1));
seq__289159_289163 = G__289168;
chunk__289160_289164 = G__289169;
count__289161_289165 = G__289170;
i__289162_289166 = G__289171;
continue;
} else {
var temp__4126__auto___289172 = cljs.core.seq.call(null,seq__289159_289163);
if(temp__4126__auto___289172){
var seq__289159_289173__$1 = temp__4126__auto___289172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__289159_289173__$1)){
var c__4768__auto___289174 = cljs.core.chunk_first.call(null,seq__289159_289173__$1);
var G__289175 = cljs.core.chunk_rest.call(null,seq__289159_289173__$1);
var G__289176 = c__4768__auto___289174;
var G__289177 = cljs.core.count.call(null,c__4768__auto___289174);
var G__289178 = (0);
seq__289159_289163 = G__289175;
chunk__289160_289164 = G__289176;
count__289161_289165 = G__289177;
i__289162_289166 = G__289178;
continue;
} else {
var child_289179 = cljs.core.first.call(null,seq__289159_289173__$1);
frag.appendChild(child_289179);

var G__289180 = cljs.core.next.call(null,seq__289159_289173__$1);
var G__289181 = null;
var G__289182 = (0);
var G__289183 = (0);
seq__289159_289163 = G__289180;
chunk__289160_289164 = G__289181;
count__289161_289165 = G__289182;
i__289162_289166 = G__289183;
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
return (function (p1__289153_SHARP_,p2__289154_SHARP_){
return f.call(null,p1__289153_SHARP_,p2__289154_SHARP_);
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
if((function (){var G__289185 = list_thing;
if(G__289185){
var bit__4662__auto__ = (G__289185.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__289185.cljs$core$ISeqable$)){
return true;
} else {
if((!G__289185.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__289185);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__289185);
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
if((function (){var G__289186 = content;
if(G__289186){
var bit__4662__auto__ = (G__289186.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__289186.cljs$core$ISeqable$)){
return true;
} else {
if((!G__289186.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__289186);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__289186);
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
if((function (){var G__289187 = content;
if(G__289187){
var bit__4662__auto__ = (G__289187.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__289187.cljs$core$ISeqable$)){
return true;
} else {
if((!G__289187.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__289187);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__289187);
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
