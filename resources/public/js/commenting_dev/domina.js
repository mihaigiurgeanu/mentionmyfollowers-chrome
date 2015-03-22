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
var opt_wrapper_18650 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_18651 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_18652 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_18652,opt_wrapper_18650,table_section_wrapper_18651,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_18650,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_18651,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_18651,cell_wrapper_18652,table_section_wrapper_18651,table_section_wrapper_18651]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__18657 = cljs.core.seq.call(null,tbody);
var chunk__18658 = null;
var count__18659 = (0);
var i__18660 = (0);
while(true){
if((i__18660 < count__18659)){
var child = cljs.core._nth.call(null,chunk__18658,i__18660);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__18661 = seq__18657;
var G__18662 = chunk__18658;
var G__18663 = count__18659;
var G__18664 = (i__18660 + (1));
seq__18657 = G__18661;
chunk__18658 = G__18662;
count__18659 = G__18663;
i__18660 = G__18664;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__18657);
if(temp__4126__auto__){
var seq__18657__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18657__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__18657__$1);
var G__18665 = cljs.core.chunk_rest.call(null,seq__18657__$1);
var G__18666 = c__4768__auto__;
var G__18667 = cljs.core.count.call(null,c__4768__auto__);
var G__18668 = (0);
seq__18657 = G__18665;
chunk__18658 = G__18666;
count__18659 = G__18667;
i__18660 = G__18668;
continue;
} else {
var child = cljs.core.first.call(null,seq__18657__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__18669 = cljs.core.next.call(null,seq__18657__$1);
var G__18670 = null;
var G__18671 = (0);
var G__18672 = (0);
seq__18657 = G__18669;
chunk__18658 = G__18670;
count__18659 = G__18671;
i__18660 = G__18672;
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
var vec__18674 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__18674,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__18674,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__18674,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__18675 = wrapper.lastChild;
var G__18676 = (level - (1));
wrapper = G__18675;
level = G__18676;
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

domina.DomContent = (function (){var obj18678 = {};
return obj18678;
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
var G__18679__i = 0, G__18679__a = new Array(arguments.length -  0);
while (G__18679__i < G__18679__a.length) {G__18679__a[G__18679__i] = arguments[G__18679__i + 0]; ++G__18679__i;}
  mesg = new cljs.core.IndexedSeq(G__18679__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__18680){
var mesg = cljs.core.seq(arglist__18680);
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
var G__18681__i = 0, G__18681__a = new Array(arguments.length -  0);
while (G__18681__i < G__18681__a.length) {G__18681__a[G__18681__i] = arguments[G__18681__i + 0]; ++G__18681__i;}
  mesg = new cljs.core.IndexedSeq(G__18681__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__18682){
var mesg = cljs.core.seq(arglist__18682);
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
var G__18683__i = 0, G__18683__a = new Array(arguments.length -  0);
while (G__18683__i < G__18683__a.length) {G__18683__a[G__18683__i] = arguments[G__18683__i + 0]; ++G__18683__i;}
  contents = new cljs.core.IndexedSeq(G__18683__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__18684){
var contents = cljs.core.seq(arglist__18684);
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
return cljs.core.map.call(null,(function (p1__18685_SHARP_){
return p1__18685_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__18686_SHARP_,p2__18687_SHARP_){
return goog.dom.insertChildAt(p1__18686_SHARP_,p2__18687_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__18689_SHARP_,p2__18688_SHARP_){
return goog.dom.insertSiblingBefore(p2__18688_SHARP_,p1__18689_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__18691_SHARP_,p2__18690_SHARP_){
return goog.dom.insertSiblingAfter(p2__18690_SHARP_,p1__18691_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__18693_SHARP_,p2__18692_SHARP_){
return goog.dom.replaceNode(p2__18692_SHARP_,p1__18693_SHARP_);
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
var seq__18698_18702 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18699_18703 = null;
var count__18700_18704 = (0);
var i__18701_18705 = (0);
while(true){
if((i__18701_18705 < count__18700_18704)){
var n_18706 = cljs.core._nth.call(null,chunk__18699_18703,i__18701_18705);
goog.style.setStyle(n_18706,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__18707 = seq__18698_18702;
var G__18708 = chunk__18699_18703;
var G__18709 = count__18700_18704;
var G__18710 = (i__18701_18705 + (1));
seq__18698_18702 = G__18707;
chunk__18699_18703 = G__18708;
count__18700_18704 = G__18709;
i__18701_18705 = G__18710;
continue;
} else {
var temp__4126__auto___18711 = cljs.core.seq.call(null,seq__18698_18702);
if(temp__4126__auto___18711){
var seq__18698_18712__$1 = temp__4126__auto___18711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18698_18712__$1)){
var c__4768__auto___18713 = cljs.core.chunk_first.call(null,seq__18698_18712__$1);
var G__18714 = cljs.core.chunk_rest.call(null,seq__18698_18712__$1);
var G__18715 = c__4768__auto___18713;
var G__18716 = cljs.core.count.call(null,c__4768__auto___18713);
var G__18717 = (0);
seq__18698_18702 = G__18714;
chunk__18699_18703 = G__18715;
count__18700_18704 = G__18716;
i__18701_18705 = G__18717;
continue;
} else {
var n_18718 = cljs.core.first.call(null,seq__18698_18712__$1);
goog.style.setStyle(n_18718,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__18719 = cljs.core.next.call(null,seq__18698_18712__$1);
var G__18720 = null;
var G__18721 = (0);
var G__18722 = (0);
seq__18698_18702 = G__18719;
chunk__18699_18703 = G__18720;
count__18700_18704 = G__18721;
i__18701_18705 = G__18722;
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
var G__18723__i = 0, G__18723__a = new Array(arguments.length -  2);
while (G__18723__i < G__18723__a.length) {G__18723__a[G__18723__i] = arguments[G__18723__i + 2]; ++G__18723__i;}
  value = new cljs.core.IndexedSeq(G__18723__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__18724){
var content = cljs.core.first(arglist__18724);
arglist__18724 = cljs.core.next(arglist__18724);
var name = cljs.core.first(arglist__18724);
var value = cljs.core.rest(arglist__18724);
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
var seq__18729_18733 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18730_18734 = null;
var count__18731_18735 = (0);
var i__18732_18736 = (0);
while(true){
if((i__18732_18736 < count__18731_18735)){
var n_18737 = cljs.core._nth.call(null,chunk__18730_18734,i__18732_18736);
n_18737.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__18738 = seq__18729_18733;
var G__18739 = chunk__18730_18734;
var G__18740 = count__18731_18735;
var G__18741 = (i__18732_18736 + (1));
seq__18729_18733 = G__18738;
chunk__18730_18734 = G__18739;
count__18731_18735 = G__18740;
i__18732_18736 = G__18741;
continue;
} else {
var temp__4126__auto___18742 = cljs.core.seq.call(null,seq__18729_18733);
if(temp__4126__auto___18742){
var seq__18729_18743__$1 = temp__4126__auto___18742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18729_18743__$1)){
var c__4768__auto___18744 = cljs.core.chunk_first.call(null,seq__18729_18743__$1);
var G__18745 = cljs.core.chunk_rest.call(null,seq__18729_18743__$1);
var G__18746 = c__4768__auto___18744;
var G__18747 = cljs.core.count.call(null,c__4768__auto___18744);
var G__18748 = (0);
seq__18729_18733 = G__18745;
chunk__18730_18734 = G__18746;
count__18731_18735 = G__18747;
i__18732_18736 = G__18748;
continue;
} else {
var n_18749 = cljs.core.first.call(null,seq__18729_18743__$1);
n_18749.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__18750 = cljs.core.next.call(null,seq__18729_18743__$1);
var G__18751 = null;
var G__18752 = (0);
var G__18753 = (0);
seq__18729_18733 = G__18750;
chunk__18730_18734 = G__18751;
count__18731_18735 = G__18752;
i__18732_18736 = G__18753;
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
var G__18754__i = 0, G__18754__a = new Array(arguments.length -  2);
while (G__18754__i < G__18754__a.length) {G__18754__a[G__18754__i] = arguments[G__18754__i + 2]; ++G__18754__i;}
  value = new cljs.core.IndexedSeq(G__18754__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__18755){
var content = cljs.core.first(arglist__18755);
arglist__18755 = cljs.core.next(arglist__18755);
var name = cljs.core.first(arglist__18755);
var value = cljs.core.rest(arglist__18755);
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
var seq__18760_18764 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18761_18765 = null;
var count__18762_18766 = (0);
var i__18763_18767 = (0);
while(true){
if((i__18763_18767 < count__18762_18766)){
var n_18768 = cljs.core._nth.call(null,chunk__18761_18765,i__18763_18767);
n_18768.removeAttribute(cljs.core.name.call(null,name));

var G__18769 = seq__18760_18764;
var G__18770 = chunk__18761_18765;
var G__18771 = count__18762_18766;
var G__18772 = (i__18763_18767 + (1));
seq__18760_18764 = G__18769;
chunk__18761_18765 = G__18770;
count__18762_18766 = G__18771;
i__18763_18767 = G__18772;
continue;
} else {
var temp__4126__auto___18773 = cljs.core.seq.call(null,seq__18760_18764);
if(temp__4126__auto___18773){
var seq__18760_18774__$1 = temp__4126__auto___18773;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18760_18774__$1)){
var c__4768__auto___18775 = cljs.core.chunk_first.call(null,seq__18760_18774__$1);
var G__18776 = cljs.core.chunk_rest.call(null,seq__18760_18774__$1);
var G__18777 = c__4768__auto___18775;
var G__18778 = cljs.core.count.call(null,c__4768__auto___18775);
var G__18779 = (0);
seq__18760_18764 = G__18776;
chunk__18761_18765 = G__18777;
count__18762_18766 = G__18778;
i__18763_18767 = G__18779;
continue;
} else {
var n_18780 = cljs.core.first.call(null,seq__18760_18774__$1);
n_18780.removeAttribute(cljs.core.name.call(null,name));

var G__18781 = cljs.core.next.call(null,seq__18760_18774__$1);
var G__18782 = null;
var G__18783 = (0);
var G__18784 = (0);
seq__18760_18764 = G__18781;
chunk__18761_18765 = G__18782;
count__18762_18766 = G__18783;
i__18763_18767 = G__18784;
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
var vec__18786 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__18786,(0),null);
var v = cljs.core.nth.call(null,vec__18786,(1),null);
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
return (function (p1__18787_SHARP_){
var attr = attrs__$1.item(p1__18787_SHARP_);
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
var seq__18794_18800 = cljs.core.seq.call(null,styles);
var chunk__18795_18801 = null;
var count__18796_18802 = (0);
var i__18797_18803 = (0);
while(true){
if((i__18797_18803 < count__18796_18802)){
var vec__18798_18804 = cljs.core._nth.call(null,chunk__18795_18801,i__18797_18803);
var name_18805 = cljs.core.nth.call(null,vec__18798_18804,(0),null);
var value_18806 = cljs.core.nth.call(null,vec__18798_18804,(1),null);
domina.set_style_BANG_.call(null,content,name_18805,value_18806);

var G__18807 = seq__18794_18800;
var G__18808 = chunk__18795_18801;
var G__18809 = count__18796_18802;
var G__18810 = (i__18797_18803 + (1));
seq__18794_18800 = G__18807;
chunk__18795_18801 = G__18808;
count__18796_18802 = G__18809;
i__18797_18803 = G__18810;
continue;
} else {
var temp__4126__auto___18811 = cljs.core.seq.call(null,seq__18794_18800);
if(temp__4126__auto___18811){
var seq__18794_18812__$1 = temp__4126__auto___18811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18794_18812__$1)){
var c__4768__auto___18813 = cljs.core.chunk_first.call(null,seq__18794_18812__$1);
var G__18814 = cljs.core.chunk_rest.call(null,seq__18794_18812__$1);
var G__18815 = c__4768__auto___18813;
var G__18816 = cljs.core.count.call(null,c__4768__auto___18813);
var G__18817 = (0);
seq__18794_18800 = G__18814;
chunk__18795_18801 = G__18815;
count__18796_18802 = G__18816;
i__18797_18803 = G__18817;
continue;
} else {
var vec__18799_18818 = cljs.core.first.call(null,seq__18794_18812__$1);
var name_18819 = cljs.core.nth.call(null,vec__18799_18818,(0),null);
var value_18820 = cljs.core.nth.call(null,vec__18799_18818,(1),null);
domina.set_style_BANG_.call(null,content,name_18819,value_18820);

var G__18821 = cljs.core.next.call(null,seq__18794_18812__$1);
var G__18822 = null;
var G__18823 = (0);
var G__18824 = (0);
seq__18794_18800 = G__18821;
chunk__18795_18801 = G__18822;
count__18796_18802 = G__18823;
i__18797_18803 = G__18824;
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
var seq__18831_18837 = cljs.core.seq.call(null,attrs);
var chunk__18832_18838 = null;
var count__18833_18839 = (0);
var i__18834_18840 = (0);
while(true){
if((i__18834_18840 < count__18833_18839)){
var vec__18835_18841 = cljs.core._nth.call(null,chunk__18832_18838,i__18834_18840);
var name_18842 = cljs.core.nth.call(null,vec__18835_18841,(0),null);
var value_18843 = cljs.core.nth.call(null,vec__18835_18841,(1),null);
domina.set_attr_BANG_.call(null,content,name_18842,value_18843);

var G__18844 = seq__18831_18837;
var G__18845 = chunk__18832_18838;
var G__18846 = count__18833_18839;
var G__18847 = (i__18834_18840 + (1));
seq__18831_18837 = G__18844;
chunk__18832_18838 = G__18845;
count__18833_18839 = G__18846;
i__18834_18840 = G__18847;
continue;
} else {
var temp__4126__auto___18848 = cljs.core.seq.call(null,seq__18831_18837);
if(temp__4126__auto___18848){
var seq__18831_18849__$1 = temp__4126__auto___18848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18831_18849__$1)){
var c__4768__auto___18850 = cljs.core.chunk_first.call(null,seq__18831_18849__$1);
var G__18851 = cljs.core.chunk_rest.call(null,seq__18831_18849__$1);
var G__18852 = c__4768__auto___18850;
var G__18853 = cljs.core.count.call(null,c__4768__auto___18850);
var G__18854 = (0);
seq__18831_18837 = G__18851;
chunk__18832_18838 = G__18852;
count__18833_18839 = G__18853;
i__18834_18840 = G__18854;
continue;
} else {
var vec__18836_18855 = cljs.core.first.call(null,seq__18831_18849__$1);
var name_18856 = cljs.core.nth.call(null,vec__18836_18855,(0),null);
var value_18857 = cljs.core.nth.call(null,vec__18836_18855,(1),null);
domina.set_attr_BANG_.call(null,content,name_18856,value_18857);

var G__18858 = cljs.core.next.call(null,seq__18831_18849__$1);
var G__18859 = null;
var G__18860 = (0);
var G__18861 = (0);
seq__18831_18837 = G__18858;
chunk__18832_18838 = G__18859;
count__18833_18839 = G__18860;
i__18834_18840 = G__18861;
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
var seq__18866_18870 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18867_18871 = null;
var count__18868_18872 = (0);
var i__18869_18873 = (0);
while(true){
if((i__18869_18873 < count__18868_18872)){
var node_18874 = cljs.core._nth.call(null,chunk__18867_18871,i__18869_18873);
goog.dom.classes.add(node_18874,class$);

var G__18875 = seq__18866_18870;
var G__18876 = chunk__18867_18871;
var G__18877 = count__18868_18872;
var G__18878 = (i__18869_18873 + (1));
seq__18866_18870 = G__18875;
chunk__18867_18871 = G__18876;
count__18868_18872 = G__18877;
i__18869_18873 = G__18878;
continue;
} else {
var temp__4126__auto___18879 = cljs.core.seq.call(null,seq__18866_18870);
if(temp__4126__auto___18879){
var seq__18866_18880__$1 = temp__4126__auto___18879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18866_18880__$1)){
var c__4768__auto___18881 = cljs.core.chunk_first.call(null,seq__18866_18880__$1);
var G__18882 = cljs.core.chunk_rest.call(null,seq__18866_18880__$1);
var G__18883 = c__4768__auto___18881;
var G__18884 = cljs.core.count.call(null,c__4768__auto___18881);
var G__18885 = (0);
seq__18866_18870 = G__18882;
chunk__18867_18871 = G__18883;
count__18868_18872 = G__18884;
i__18869_18873 = G__18885;
continue;
} else {
var node_18886 = cljs.core.first.call(null,seq__18866_18880__$1);
goog.dom.classes.add(node_18886,class$);

var G__18887 = cljs.core.next.call(null,seq__18866_18880__$1);
var G__18888 = null;
var G__18889 = (0);
var G__18890 = (0);
seq__18866_18870 = G__18887;
chunk__18867_18871 = G__18888;
count__18868_18872 = G__18889;
i__18869_18873 = G__18890;
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
var seq__18895_18899 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18896_18900 = null;
var count__18897_18901 = (0);
var i__18898_18902 = (0);
while(true){
if((i__18898_18902 < count__18897_18901)){
var node_18903 = cljs.core._nth.call(null,chunk__18896_18900,i__18898_18902);
goog.dom.classes.remove(node_18903,class$);

var G__18904 = seq__18895_18899;
var G__18905 = chunk__18896_18900;
var G__18906 = count__18897_18901;
var G__18907 = (i__18898_18902 + (1));
seq__18895_18899 = G__18904;
chunk__18896_18900 = G__18905;
count__18897_18901 = G__18906;
i__18898_18902 = G__18907;
continue;
} else {
var temp__4126__auto___18908 = cljs.core.seq.call(null,seq__18895_18899);
if(temp__4126__auto___18908){
var seq__18895_18909__$1 = temp__4126__auto___18908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18895_18909__$1)){
var c__4768__auto___18910 = cljs.core.chunk_first.call(null,seq__18895_18909__$1);
var G__18911 = cljs.core.chunk_rest.call(null,seq__18895_18909__$1);
var G__18912 = c__4768__auto___18910;
var G__18913 = cljs.core.count.call(null,c__4768__auto___18910);
var G__18914 = (0);
seq__18895_18899 = G__18911;
chunk__18896_18900 = G__18912;
count__18897_18901 = G__18913;
i__18898_18902 = G__18914;
continue;
} else {
var node_18915 = cljs.core.first.call(null,seq__18895_18909__$1);
goog.dom.classes.remove(node_18915,class$);

var G__18916 = cljs.core.next.call(null,seq__18895_18909__$1);
var G__18917 = null;
var G__18918 = (0);
var G__18919 = (0);
seq__18895_18899 = G__18916;
chunk__18896_18900 = G__18917;
count__18897_18901 = G__18918;
i__18898_18902 = G__18919;
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
var seq__18924_18928 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18925_18929 = null;
var count__18926_18930 = (0);
var i__18927_18931 = (0);
while(true){
if((i__18927_18931 < count__18926_18930)){
var node_18932 = cljs.core._nth.call(null,chunk__18925_18929,i__18927_18931);
goog.dom.classes.toggle(node_18932,class$);

var G__18933 = seq__18924_18928;
var G__18934 = chunk__18925_18929;
var G__18935 = count__18926_18930;
var G__18936 = (i__18927_18931 + (1));
seq__18924_18928 = G__18933;
chunk__18925_18929 = G__18934;
count__18926_18930 = G__18935;
i__18927_18931 = G__18936;
continue;
} else {
var temp__4126__auto___18937 = cljs.core.seq.call(null,seq__18924_18928);
if(temp__4126__auto___18937){
var seq__18924_18938__$1 = temp__4126__auto___18937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18924_18938__$1)){
var c__4768__auto___18939 = cljs.core.chunk_first.call(null,seq__18924_18938__$1);
var G__18940 = cljs.core.chunk_rest.call(null,seq__18924_18938__$1);
var G__18941 = c__4768__auto___18939;
var G__18942 = cljs.core.count.call(null,c__4768__auto___18939);
var G__18943 = (0);
seq__18924_18928 = G__18940;
chunk__18925_18929 = G__18941;
count__18926_18930 = G__18942;
i__18927_18931 = G__18943;
continue;
} else {
var node_18944 = cljs.core.first.call(null,seq__18924_18938__$1);
goog.dom.classes.toggle(node_18944,class$);

var G__18945 = cljs.core.next.call(null,seq__18924_18938__$1);
var G__18946 = null;
var G__18947 = (0);
var G__18948 = (0);
seq__18924_18928 = G__18945;
chunk__18925_18929 = G__18946;
count__18926_18930 = G__18947;
i__18927_18931 = G__18948;
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
var classes_18957__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__18953_18958 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18954_18959 = null;
var count__18955_18960 = (0);
var i__18956_18961 = (0);
while(true){
if((i__18956_18961 < count__18955_18960)){
var node_18962 = cljs.core._nth.call(null,chunk__18954_18959,i__18956_18961);
goog.dom.classes.set(node_18962,classes_18957__$1);

var G__18963 = seq__18953_18958;
var G__18964 = chunk__18954_18959;
var G__18965 = count__18955_18960;
var G__18966 = (i__18956_18961 + (1));
seq__18953_18958 = G__18963;
chunk__18954_18959 = G__18964;
count__18955_18960 = G__18965;
i__18956_18961 = G__18966;
continue;
} else {
var temp__4126__auto___18967 = cljs.core.seq.call(null,seq__18953_18958);
if(temp__4126__auto___18967){
var seq__18953_18968__$1 = temp__4126__auto___18967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18953_18968__$1)){
var c__4768__auto___18969 = cljs.core.chunk_first.call(null,seq__18953_18968__$1);
var G__18970 = cljs.core.chunk_rest.call(null,seq__18953_18968__$1);
var G__18971 = c__4768__auto___18969;
var G__18972 = cljs.core.count.call(null,c__4768__auto___18969);
var G__18973 = (0);
seq__18953_18958 = G__18970;
chunk__18954_18959 = G__18971;
count__18955_18960 = G__18972;
i__18956_18961 = G__18973;
continue;
} else {
var node_18974 = cljs.core.first.call(null,seq__18953_18968__$1);
goog.dom.classes.set(node_18974,classes_18957__$1);

var G__18975 = cljs.core.next.call(null,seq__18953_18968__$1);
var G__18976 = null;
var G__18977 = (0);
var G__18978 = (0);
seq__18953_18958 = G__18975;
chunk__18954_18959 = G__18976;
count__18955_18960 = G__18977;
i__18956_18961 = G__18978;
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
var seq__18983_18987 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__18984_18988 = null;
var count__18985_18989 = (0);
var i__18986_18990 = (0);
while(true){
if((i__18986_18990 < count__18985_18989)){
var node_18991 = cljs.core._nth.call(null,chunk__18984_18988,i__18986_18990);
goog.dom.setTextContent(node_18991,value);

var G__18992 = seq__18983_18987;
var G__18993 = chunk__18984_18988;
var G__18994 = count__18985_18989;
var G__18995 = (i__18986_18990 + (1));
seq__18983_18987 = G__18992;
chunk__18984_18988 = G__18993;
count__18985_18989 = G__18994;
i__18986_18990 = G__18995;
continue;
} else {
var temp__4126__auto___18996 = cljs.core.seq.call(null,seq__18983_18987);
if(temp__4126__auto___18996){
var seq__18983_18997__$1 = temp__4126__auto___18996;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18983_18997__$1)){
var c__4768__auto___18998 = cljs.core.chunk_first.call(null,seq__18983_18997__$1);
var G__18999 = cljs.core.chunk_rest.call(null,seq__18983_18997__$1);
var G__19000 = c__4768__auto___18998;
var G__19001 = cljs.core.count.call(null,c__4768__auto___18998);
var G__19002 = (0);
seq__18983_18987 = G__18999;
chunk__18984_18988 = G__19000;
count__18985_18989 = G__19001;
i__18986_18990 = G__19002;
continue;
} else {
var node_19003 = cljs.core.first.call(null,seq__18983_18997__$1);
goog.dom.setTextContent(node_19003,value);

var G__19004 = cljs.core.next.call(null,seq__18983_18997__$1);
var G__19005 = null;
var G__19006 = (0);
var G__19007 = (0);
seq__18983_18987 = G__19004;
chunk__18984_18988 = G__19005;
count__18985_18989 = G__19006;
i__18986_18990 = G__19007;
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
var seq__19012_19016 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19013_19017 = null;
var count__19014_19018 = (0);
var i__19015_19019 = (0);
while(true){
if((i__19015_19019 < count__19014_19018)){
var node_19020 = cljs.core._nth.call(null,chunk__19013_19017,i__19015_19019);
goog.dom.forms.setValue(node_19020,value);

var G__19021 = seq__19012_19016;
var G__19022 = chunk__19013_19017;
var G__19023 = count__19014_19018;
var G__19024 = (i__19015_19019 + (1));
seq__19012_19016 = G__19021;
chunk__19013_19017 = G__19022;
count__19014_19018 = G__19023;
i__19015_19019 = G__19024;
continue;
} else {
var temp__4126__auto___19025 = cljs.core.seq.call(null,seq__19012_19016);
if(temp__4126__auto___19025){
var seq__19012_19026__$1 = temp__4126__auto___19025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19012_19026__$1)){
var c__4768__auto___19027 = cljs.core.chunk_first.call(null,seq__19012_19026__$1);
var G__19028 = cljs.core.chunk_rest.call(null,seq__19012_19026__$1);
var G__19029 = c__4768__auto___19027;
var G__19030 = cljs.core.count.call(null,c__4768__auto___19027);
var G__19031 = (0);
seq__19012_19016 = G__19028;
chunk__19013_19017 = G__19029;
count__19014_19018 = G__19030;
i__19015_19019 = G__19031;
continue;
} else {
var node_19032 = cljs.core.first.call(null,seq__19012_19026__$1);
goog.dom.forms.setValue(node_19032,value);

var G__19033 = cljs.core.next.call(null,seq__19012_19026__$1);
var G__19034 = null;
var G__19035 = (0);
var G__19036 = (0);
seq__19012_19016 = G__19033;
chunk__19013_19017 = G__19034;
count__19014_19018 = G__19035;
i__19015_19019 = G__19036;
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
var value_19047 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__19043_19048 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19044_19049 = null;
var count__19045_19050 = (0);
var i__19046_19051 = (0);
while(true){
if((i__19046_19051 < count__19045_19050)){
var node_19052 = cljs.core._nth.call(null,chunk__19044_19049,i__19046_19051);
node_19052.innerHTML = value_19047;

var G__19053 = seq__19043_19048;
var G__19054 = chunk__19044_19049;
var G__19055 = count__19045_19050;
var G__19056 = (i__19046_19051 + (1));
seq__19043_19048 = G__19053;
chunk__19044_19049 = G__19054;
count__19045_19050 = G__19055;
i__19046_19051 = G__19056;
continue;
} else {
var temp__4126__auto___19057 = cljs.core.seq.call(null,seq__19043_19048);
if(temp__4126__auto___19057){
var seq__19043_19058__$1 = temp__4126__auto___19057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19043_19058__$1)){
var c__4768__auto___19059 = cljs.core.chunk_first.call(null,seq__19043_19058__$1);
var G__19060 = cljs.core.chunk_rest.call(null,seq__19043_19058__$1);
var G__19061 = c__4768__auto___19059;
var G__19062 = cljs.core.count.call(null,c__4768__auto___19059);
var G__19063 = (0);
seq__19043_19048 = G__19060;
chunk__19044_19049 = G__19061;
count__19045_19050 = G__19062;
i__19046_19051 = G__19063;
continue;
} else {
var node_19064 = cljs.core.first.call(null,seq__19043_19058__$1);
node_19064.innerHTML = value_19047;

var G__19065 = cljs.core.next.call(null,seq__19043_19058__$1);
var G__19066 = null;
var G__19067 = (0);
var G__19068 = (0);
seq__19043_19048 = G__19065;
chunk__19044_19049 = G__19066;
count__19045_19050 = G__19067;
i__19046_19051 = G__19068;
continue;
}
} else {
}
}
break;
}
}catch (e19042){if((e19042 instanceof Error)){
var e_19069 = e19042;
domina.replace_children_BANG_.call(null,content,value_19047);
} else {
throw e19042;

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
var seq__19076_19080 = cljs.core.seq.call(null,children);
var chunk__19077_19081 = null;
var count__19078_19082 = (0);
var i__19079_19083 = (0);
while(true){
if((i__19079_19083 < count__19078_19082)){
var child_19084 = cljs.core._nth.call(null,chunk__19077_19081,i__19079_19083);
frag.appendChild(child_19084);

var G__19085 = seq__19076_19080;
var G__19086 = chunk__19077_19081;
var G__19087 = count__19078_19082;
var G__19088 = (i__19079_19083 + (1));
seq__19076_19080 = G__19085;
chunk__19077_19081 = G__19086;
count__19078_19082 = G__19087;
i__19079_19083 = G__19088;
continue;
} else {
var temp__4126__auto___19089 = cljs.core.seq.call(null,seq__19076_19080);
if(temp__4126__auto___19089){
var seq__19076_19090__$1 = temp__4126__auto___19089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19076_19090__$1)){
var c__4768__auto___19091 = cljs.core.chunk_first.call(null,seq__19076_19090__$1);
var G__19092 = cljs.core.chunk_rest.call(null,seq__19076_19090__$1);
var G__19093 = c__4768__auto___19091;
var G__19094 = cljs.core.count.call(null,c__4768__auto___19091);
var G__19095 = (0);
seq__19076_19080 = G__19092;
chunk__19077_19081 = G__19093;
count__19078_19082 = G__19094;
i__19079_19083 = G__19095;
continue;
} else {
var child_19096 = cljs.core.first.call(null,seq__19076_19090__$1);
frag.appendChild(child_19096);

var G__19097 = cljs.core.next.call(null,seq__19076_19090__$1);
var G__19098 = null;
var G__19099 = (0);
var G__19100 = (0);
seq__19076_19080 = G__19097;
chunk__19077_19081 = G__19098;
count__19078_19082 = G__19099;
i__19079_19083 = G__19100;
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
return (function (p1__19070_SHARP_,p2__19071_SHARP_){
return f.call(null,p1__19070_SHARP_,p2__19071_SHARP_);
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
if((function (){var G__19102 = list_thing;
if(G__19102){
var bit__4662__auto__ = (G__19102.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__19102.cljs$core$ISeqable$)){
return true;
} else {
if((!G__19102.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19102);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19102);
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
if((function (){var G__19103 = content;
if(G__19103){
var bit__4662__auto__ = (G__19103.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__19103.cljs$core$ISeqable$)){
return true;
} else {
if((!G__19103.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19103);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19103);
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
if((function (){var G__19104 = content;
if(G__19104){
var bit__4662__auto__ = (G__19104.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__19104.cljs$core$ISeqable$)){
return true;
} else {
if((!G__19104.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19104);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19104);
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
