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
var opt_wrapper_280891 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_280892 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_280893 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_280893,opt_wrapper_280891,table_section_wrapper_280892,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_280891,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_280892,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_280892,cell_wrapper_280893,table_section_wrapper_280892,table_section_wrapper_280892]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3969__auto__ = div.firstChild;
if(cljs.core.truth_(and__3969__auto__)){
return div.firstChild.childNodes;
} else {
return and__3969__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__280898 = cljs.core.seq.call(null,tbody);
var chunk__280899 = null;
var count__280900 = (0);
var i__280901 = (0);
while(true){
if((i__280901 < count__280900)){
var child = cljs.core._nth.call(null,chunk__280899,i__280901);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__280902 = seq__280898;
var G__280903 = chunk__280899;
var G__280904 = count__280900;
var G__280905 = (i__280901 + (1));
seq__280898 = G__280902;
chunk__280899 = G__280903;
count__280900 = G__280904;
i__280901 = G__280905;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__280898);
if(temp__4126__auto__){
var seq__280898__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__280898__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__280898__$1);
var G__280906 = cljs.core.chunk_rest.call(null,seq__280898__$1);
var G__280907 = c__4768__auto__;
var G__280908 = cljs.core.count.call(null,c__4768__auto__);
var G__280909 = (0);
seq__280898 = G__280906;
chunk__280899 = G__280907;
count__280900 = G__280908;
i__280901 = G__280909;
continue;
} else {
var child = cljs.core.first.call(null,seq__280898__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__280910 = cljs.core.next.call(null,seq__280898__$1);
var G__280911 = null;
var G__280912 = (0);
var G__280913 = (0);
seq__280898 = G__280910;
chunk__280899 = G__280911;
count__280900 = G__280912;
i__280901 = G__280913;
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
var vec__280915 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__280915,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__280915,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__280915,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__280916 = wrapper.lastChild;
var G__280917 = (level - (1));
wrapper = G__280916;
level = G__280917;
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

domina.DomContent = (function (){var obj280919 = {};
return obj280919;
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
var G__280920__i = 0, G__280920__a = new Array(arguments.length -  0);
while (G__280920__i < G__280920__a.length) {G__280920__a[G__280920__i] = arguments[G__280920__i + 0]; ++G__280920__i;}
  mesg = new cljs.core.IndexedSeq(G__280920__a,0);
} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__280921){
var mesg = cljs.core.seq(arglist__280921);
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
var G__280922__i = 0, G__280922__a = new Array(arguments.length -  0);
while (G__280922__i < G__280922__a.length) {G__280922__a[G__280922__i] = arguments[G__280922__i + 0]; ++G__280922__i;}
  mesg = new cljs.core.IndexedSeq(G__280922__a,0);
} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__280923){
var mesg = cljs.core.seq(arglist__280923);
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
var G__280924__i = 0, G__280924__a = new Array(arguments.length -  0);
while (G__280924__i < G__280924__a.length) {G__280924__a[G__280924__i] = arguments[G__280924__i + 0]; ++G__280924__i;}
  contents = new cljs.core.IndexedSeq(G__280924__a,0);
} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__280925){
var contents = cljs.core.seq(arglist__280925);
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
return cljs.core.map.call(null,(function (p1__280926_SHARP_){
return p1__280926_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__280927_SHARP_,p2__280928_SHARP_){
return goog.dom.insertChildAt(p1__280927_SHARP_,p2__280928_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__280930_SHARP_,p2__280929_SHARP_){
return goog.dom.insertSiblingBefore(p2__280929_SHARP_,p1__280930_SHARP_);
}),content,new_content);

return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__280932_SHARP_,p2__280931_SHARP_){
return goog.dom.insertSiblingAfter(p2__280931_SHARP_,p1__280932_SHARP_);
}),content,new_content);

return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__280934_SHARP_,p2__280933_SHARP_){
return goog.dom.replaceNode(p2__280933_SHARP_,p1__280934_SHARP_);
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
var seq__280939_280943 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__280940_280944 = null;
var count__280941_280945 = (0);
var i__280942_280946 = (0);
while(true){
if((i__280942_280946 < count__280941_280945)){
var n_280947 = cljs.core._nth.call(null,chunk__280940_280944,i__280942_280946);
goog.style.setStyle(n_280947,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__280948 = seq__280939_280943;
var G__280949 = chunk__280940_280944;
var G__280950 = count__280941_280945;
var G__280951 = (i__280942_280946 + (1));
seq__280939_280943 = G__280948;
chunk__280940_280944 = G__280949;
count__280941_280945 = G__280950;
i__280942_280946 = G__280951;
continue;
} else {
var temp__4126__auto___280952 = cljs.core.seq.call(null,seq__280939_280943);
if(temp__4126__auto___280952){
var seq__280939_280953__$1 = temp__4126__auto___280952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__280939_280953__$1)){
var c__4768__auto___280954 = cljs.core.chunk_first.call(null,seq__280939_280953__$1);
var G__280955 = cljs.core.chunk_rest.call(null,seq__280939_280953__$1);
var G__280956 = c__4768__auto___280954;
var G__280957 = cljs.core.count.call(null,c__4768__auto___280954);
var G__280958 = (0);
seq__280939_280943 = G__280955;
chunk__280940_280944 = G__280956;
count__280941_280945 = G__280957;
i__280942_280946 = G__280958;
continue;
} else {
var n_280959 = cljs.core.first.call(null,seq__280939_280953__$1);
goog.style.setStyle(n_280959,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__280960 = cljs.core.next.call(null,seq__280939_280953__$1);
var G__280961 = null;
var G__280962 = (0);
var G__280963 = (0);
seq__280939_280943 = G__280960;
chunk__280940_280944 = G__280961;
count__280941_280945 = G__280962;
i__280942_280946 = G__280963;
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
var G__280964__i = 0, G__280964__a = new Array(arguments.length -  2);
while (G__280964__i < G__280964__a.length) {G__280964__a[G__280964__i] = arguments[G__280964__i + 2]; ++G__280964__i;}
  value = new cljs.core.IndexedSeq(G__280964__a,0);
} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__280965){
var content = cljs.core.first(arglist__280965);
arglist__280965 = cljs.core.next(arglist__280965);
var name = cljs.core.first(arglist__280965);
var value = cljs.core.rest(arglist__280965);
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
var seq__280970_280974 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__280971_280975 = null;
var count__280972_280976 = (0);
var i__280973_280977 = (0);
while(true){
if((i__280973_280977 < count__280972_280976)){
var n_280978 = cljs.core._nth.call(null,chunk__280971_280975,i__280973_280977);
n_280978.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__280979 = seq__280970_280974;
var G__280980 = chunk__280971_280975;
var G__280981 = count__280972_280976;
var G__280982 = (i__280973_280977 + (1));
seq__280970_280974 = G__280979;
chunk__280971_280975 = G__280980;
count__280972_280976 = G__280981;
i__280973_280977 = G__280982;
continue;
} else {
var temp__4126__auto___280983 = cljs.core.seq.call(null,seq__280970_280974);
if(temp__4126__auto___280983){
var seq__280970_280984__$1 = temp__4126__auto___280983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__280970_280984__$1)){
var c__4768__auto___280985 = cljs.core.chunk_first.call(null,seq__280970_280984__$1);
var G__280986 = cljs.core.chunk_rest.call(null,seq__280970_280984__$1);
var G__280987 = c__4768__auto___280985;
var G__280988 = cljs.core.count.call(null,c__4768__auto___280985);
var G__280989 = (0);
seq__280970_280974 = G__280986;
chunk__280971_280975 = G__280987;
count__280972_280976 = G__280988;
i__280973_280977 = G__280989;
continue;
} else {
var n_280990 = cljs.core.first.call(null,seq__280970_280984__$1);
n_280990.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__280991 = cljs.core.next.call(null,seq__280970_280984__$1);
var G__280992 = null;
var G__280993 = (0);
var G__280994 = (0);
seq__280970_280974 = G__280991;
chunk__280971_280975 = G__280992;
count__280972_280976 = G__280993;
i__280973_280977 = G__280994;
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
var G__280995__i = 0, G__280995__a = new Array(arguments.length -  2);
while (G__280995__i < G__280995__a.length) {G__280995__a[G__280995__i] = arguments[G__280995__i + 2]; ++G__280995__i;}
  value = new cljs.core.IndexedSeq(G__280995__a,0);
} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__280996){
var content = cljs.core.first(arglist__280996);
arglist__280996 = cljs.core.next(arglist__280996);
var name = cljs.core.first(arglist__280996);
var value = cljs.core.rest(arglist__280996);
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
var seq__281001_281005 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__281002_281006 = null;
var count__281003_281007 = (0);
var i__281004_281008 = (0);
while(true){
if((i__281004_281008 < count__281003_281007)){
var n_281009 = cljs.core._nth.call(null,chunk__281002_281006,i__281004_281008);
n_281009.removeAttribute(cljs.core.name.call(null,name));

var G__281010 = seq__281001_281005;
var G__281011 = chunk__281002_281006;
var G__281012 = count__281003_281007;
var G__281013 = (i__281004_281008 + (1));
seq__281001_281005 = G__281010;
chunk__281002_281006 = G__281011;
count__281003_281007 = G__281012;
i__281004_281008 = G__281013;
continue;
} else {
var temp__4126__auto___281014 = cljs.core.seq.call(null,seq__281001_281005);
if(temp__4126__auto___281014){
var seq__281001_281015__$1 = temp__4126__auto___281014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__281001_281015__$1)){
var c__4768__auto___281016 = cljs.core.chunk_first.call(null,seq__281001_281015__$1);
var G__281017 = cljs.core.chunk_rest.call(null,seq__281001_281015__$1);
var G__281018 = c__4768__auto___281016;
var G__281019 = cljs.core.count.call(null,c__4768__auto___281016);
var G__281020 = (0);
seq__281001_281005 = G__281017;
chunk__281002_281006 = G__281018;
count__281003_281007 = G__281019;
i__281004_281008 = G__281020;
continue;
} else {
var n_281021 = cljs.core.first.call(null,seq__281001_281015__$1);
n_281021.removeAttribute(cljs.core.name.call(null,name));

var G__281022 = cljs.core.next.call(null,seq__281001_281015__$1);
var G__281023 = null;
var G__281024 = (0);
var G__281025 = (0);
seq__281001_281005 = G__281022;
chunk__281002_281006 = G__281023;
count__281003_281007 = G__281024;
i__281004_281008 = G__281025;
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
var vec__281027 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__281027,(0),null);
var v = cljs.core.nth.call(null,vec__281027,(1),null);
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
return (function (p1__281028_SHARP_){
var attr = attrs__$1.item(p1__281028_SHARP_);
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
var seq__281035_281041 = cljs.core.seq.call(null,styles);
var chunk__281036_281042 = null;
var count__281037_281043 = (0);
var i__281038_281044 = (0);
while(true){
if((i__281038_281044 < count__281037_281043)){
var vec__281039_281045 = cljs.core._nth.call(null,chunk__281036_281042,i__281038_281044);
var name_281046 = cljs.core.nth.call(null,vec__281039_281045,(0),null);
var value_281047 = cljs.core.nth.call(null,vec__281039_281045,(1),null);
domina.set_style_BANG_.call(null,content,name_281046,value_281047);

var G__281048 = seq__281035_281041;
var G__281049 = chunk__281036_281042;
var G__281050 = count__281037_281043;
var G__281051 = (i__281038_281044 + (1));
seq__281035_281041 = G__281048;
chunk__281036_281042 = G__281049;
count__281037_281043 = G__281050;
i__281038_281044 = G__281051;
continue;
} else {
var temp__4126__auto___281052 = cljs.core.seq.call(null,seq__281035_281041);
if(temp__4126__auto___281052){
var seq__281035_281053__$1 = temp__4126__auto___281052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__281035_281053__$1)){
var c__4768__auto___281054 = cljs.core.chunk_first.call(null,seq__281035_281053__$1);
var G__281055 = cljs.core.chunk_rest.call(null,seq__281035_281053__$1);
var G__281056 = c__4768__auto___281054;
var G__281057 = cljs.core.count.call(null,c__4768__auto___281054);
var G__281058 = (0);
seq__281035_281041 = G__281055;
chunk__281036_281042 = G__281056;
count__281037_281043 = G__281057;
i__281038_281044 = G__281058;
continue;
} else {
var vec__281040_281059 = cljs.core.first.call(null,seq__281035_281053__$1);
var name_281060 = cljs.core.nth.call(null,vec__281040_281059,(0),null);
var value_281061 = cljs.core.nth.call(null,vec__281040_281059,(1),null);
domina.set_style_BANG_.call(null,content,name_281060,value_281061);

var G__281062 = cljs.core.next.call(null,seq__281035_281053__$1);
var G__281063 = null;
var G__281064 = (0);
var G__281065 = (0);
seq__281035_281041 = G__281062;
chunk__281036_281042 = G__281063;
count__281037_281043 = G__281064;
i__281038_281044 = G__281065;
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
var seq__281072_281078 = cljs.core.seq.call(null,attrs);
var chunk__281073_281079 = null;
var count__281074_281080 = (0);
var i__281075_281081 = (0);
while(true){
if((i__281075_281081 < count__281074_281080)){
var vec__281076_281082 = cljs.core._nth.call(null,chunk__281073_281079,i__281075_281081);
var name_281083 = cljs.core.nth.call(null,vec__281076_281082,(0),null);
var value_281084 = cljs.core.nth.call(null,vec__281076_281082,(1),null);
domina.set_attr_BANG_.call(null,content,name_281083,value_281084);

var G__281085 = seq__281072_281078;
var G__281086 = chunk__281073_281079;
var G__281087 = count__281074_281080;
var G__281088 = (i__281075_281081 + (1));
seq__281072_281078 = G__281085;
chunk__281073_281079 = G__281086;
count__281074_281080 = G__281087;
i__281075_281081 = G__281088;
continue;
} else {
var temp__4126__auto___281089 = cljs.core.seq.call(null,seq__281072_281078);
if(temp__4126__auto___281089){
var seq__281072_281090__$1 = temp__4126__auto___281089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__281072_281090__$1)){
var c__4768__auto___281091 = cljs.core.chunk_first.call(null,seq__281072_281090__$1);
var G__281092 = cljs.core.chunk_rest.call(null,seq__281072_281090__$1);
var G__281093 = c__4768__auto___281091;
var G__281094 = cljs.core.count.call(null,c__4768__auto___281091);
var G__281095 = (0);
seq__281072_281078 = G__281092;
chunk__281073_281079 = G__281093;
count__281074_281080 = G__281094;
i__281075_281081 = G__281095;
continue;
} else {
var vec__281077_281096 = cljs.core.first.call(null,seq__281072_281090__$1);
var name_281097 = cljs.core.nth.call(null,vec__281077_281096,(0),null);
var value_281098 = cljs.core.nth.call(null,vec__281077_281096,(1),null);
domina.set_attr_BANG_.call(null,content,name_281097,value_281098);

var G__281099 = cljs.core.next.call(null,seq__281072_281090__$1);
var G__281100 = null;
var G__281101 = (0);
var G__281102 = (0);
seq__281072_281078 = G__281099;
chunk__281073_281079 = G__281100;
count__281074_281080 = G__281101;
i__281075_281081 = G__281102;
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
var seq__281107_281111 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__281108_281112 = null;
var count__281109_281113 = (0);
var i__281110_281114 = (0);
while(true){
if((i__281110_281114 < count__281109_281113)){
var node_281115 = cljs.core._nth.call(null,chunk__281108_281112,i__281110_281114);
goog.dom.classes.add(node_281115,class$);

var G__281116 = seq__281107_281111;
var G__281117 = chunk__281108_281112;
var G__281118 = count__281109_281113;
var G__281119 = (i__281110_281114 + (1));
seq__281107_281111 = G__281116;
chunk__281108_281112 = G__281117;
count__281109_281113 = G__281118;
i__281110_281114 = G__281119;
continue;
} else {
var temp__4126__auto___281120 = cljs.core.seq.call(null,seq__281107_281111);
if(temp__4126__auto___281120){
var seq__281107_281121__$1 = temp__4126__auto___281120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__281107_281121__$1)){
var c__4768__auto___281122 = cljs.core.chunk_first.call(null,seq__281107_281121__$1);
var G__281123 = cljs.core.chunk_rest.call(null,seq__281107_281121__$1);
var G__281124 = c__4768__auto___281122;
var G__281125 = cljs.core.count.call(null,c__4768__auto___281122);
var G__281126 = (0);
seq__281107_281111 = G__281123;
chunk__281108_281112 = G__281124;
count__281109_281113 = G__281125;
i__281110_281114 = G__281126;
continue;
} else {
var node_281127 = cljs.core.first.call(null,seq__281107_281121__$1);
goog.dom.classes.add(node_281127,class$);

var G__281128 = cljs.core.next.call(null,seq__281107_281121__$1);
var G__281129 = null;
var G__281130 = (0);
var G__281131 = (0);
seq__281107_281111 = G__281128;
chunk__281108_281112 = G__281129;
count__281109_281113 = G__281130;
i__281110_281114 = G__281131;
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
var seq__281136_281140 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__281137_281141 = null;
var count__281138_281142 = (0);
var i__281139_281143 = (0);
while(true){
if((i__281139_281143 < count__281138_281142)){
var node_281144 = cljs.core._nth.call(null,chunk__281137_281141,i__281139_281143);
goog.dom.classes.remove(node_281144,class$);

var G__281145 = seq__281136_281140;
var G__281146 = chunk__281137_281141;
var G__281147 = count__281138_281142;
var G__281148 = (i__281139_281143 + (1));
seq__281136_281140 = G__281145;
chunk__281137_281141 = G__281146;
count__281138_281142 = G__281147;
i__281139_281143 = G__281148;
continue;
} else {
var temp__4126__auto___281149 = cljs.core.seq.call(null,seq__281136_281140);
if(temp__4126__auto___281149){
var seq__281136_281150__$1 = temp__4126__auto___281149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__281136_281150__$1)){
var c__4768__auto___281151 = cljs.core.chunk_first.call(null,seq__281136_281150__$1);
var G__281152 = cljs.core.chunk_rest.call(null,seq__281136_281150__$1);
var G__281153 = c__4768__auto___281151;
var G__281154 = cljs.core.count.call(null,c__4768__auto___281151);
var G__281155 = (0);
seq__281136_281140 = G__281152;
chunk__281137_281141 = G__281153;
count__281138_281142 = G__281154;
i__281139_281143 = G__281155;
continue;
} else {
var node_281156 = cljs.core.first.call(null,seq__281136_281150__$1);
goog.dom.classes.remove(node_281156,class$);

var G__281157 = cljs.core.next.call(null,seq__281136_281150__$1);
var G__281158 = null;
var G__281159 = (0);
var G__281160 = (0);
seq__281136_281140 = G__281157;
chunk__281137_281141 = G__281158;
count__281138_281142 = G__281159;
i__281139_281143 = G__281160;
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
var seq__281165_281169 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__281166_281170 = null;
var count__281167_281171 = (0);
var i__281168_281172 = (0);
while(true){
if((i__281168_281172 < count__281167_281171)){
var node_281173 = cljs.core._nth.call(null,chunk__281166_281170,i__281168_281172);
goog.dom.classes.toggle(node_281173,class$);

var G__281174 = seq__281165_281169;
var G__281175 = chunk__281166_281170;
var G__281176 = count__281167_281171;
var G__281177 = (i__281168_281172 + (1));
seq__281165_281169 = G__281174;
chunk__281166_281170 = G__281175;
count__281167_281171 = G__281176;
i__281168_281172 = G__281177;
continue;
} else {
var temp__4126__auto___281178 = cljs.core.seq.call(null,seq__281165_281169);
if(temp__4126__auto___281178){
var seq__281165_281179__$1 = temp__4126__auto___281178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__281165_281179__$1)){
var c__4768__auto___281180 = cljs.core.chunk_first.call(null,seq__281165_281179__$1);
var G__281181 = cljs.core.chunk_rest.call(null,seq__281165_281179__$1);
var G__281182 = c__4768__auto___281180;
var G__281183 = cljs.core.count.call(null,c__4768__auto___281180);
var G__281184 = (0);
seq__281165_281169 = G__281181;
chunk__281166_281170 = G__281182;
count__281167_281171 = G__281183;
i__281168_281172 = G__281184;
continue;
} else {
var node_281185 = cljs.core.first.call(null,seq__281165_281179__$1);
goog.dom.classes.toggle(node_281185,class$);

var G__281186 = cljs.core.next.call(null,seq__281165_281179__$1);
var G__281187 = null;
var G__281188 = (0);
var G__281189 = (0);
seq__281165_281169 = G__281186;
chunk__281166_281170 = G__281187;
count__281167_281171 = G__281188;
i__281168_281172 = G__281189;
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
var classes_281198__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__281194_281199 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__281195_281200 = null;
var count__281196_281201 = (0);
var i__281197_281202 = (0);
while(true){
if((i__281197_281202 < count__281196_281201)){
var node_281203 = cljs.core._nth.call(null,chunk__281195_281200,i__281197_281202);
goog.dom.classes.set(node_281203,classes_281198__$1);

var G__281204 = seq__281194_281199;
var G__281205 = chunk__281195_281200;
var G__281206 = count__281196_281201;
var G__281207 = (i__281197_281202 + (1));
seq__281194_281199 = G__281204;
chunk__281195_281200 = G__281205;
count__281196_281201 = G__281206;
i__281197_281202 = G__281207;
continue;
} else {
var temp__4126__auto___281208 = cljs.core.seq.call(null,seq__281194_281199);
if(temp__4126__auto___281208){
var seq__281194_281209__$1 = temp__4126__auto___281208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__281194_281209__$1)){
var c__4768__auto___281210 = cljs.core.chunk_first.call(null,seq__281194_281209__$1);
var G__281211 = cljs.core.chunk_rest.call(null,seq__281194_281209__$1);
var G__281212 = c__4768__auto___281210;
var G__281213 = cljs.core.count.call(null,c__4768__auto___281210);
var G__281214 = (0);
seq__281194_281199 = G__281211;
chunk__281195_281200 = G__281212;
count__281196_281201 = G__281213;
i__281197_281202 = G__281214;
continue;
} else {
var node_281215 = cljs.core.first.call(null,seq__281194_281209__$1);
goog.dom.classes.set(node_281215,classes_281198__$1);

var G__281216 = cljs.core.next.call(null,seq__281194_281209__$1);
var G__281217 = null;
var G__281218 = (0);
var G__281219 = (0);
seq__281194_281199 = G__281216;
chunk__281195_281200 = G__281217;
count__281196_281201 = G__281218;
i__281197_281202 = G__281219;
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
var seq__281224_281228 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__281225_281229 = null;
var count__281226_281230 = (0);
var i__281227_281231 = (0);
while(true){
if((i__281227_281231 < count__281226_281230)){
var node_281232 = cljs.core._nth.call(null,chunk__281225_281229,i__281227_281231);
goog.dom.setTextContent(node_281232,value);

var G__281233 = seq__281224_281228;
var G__281234 = chunk__281225_281229;
var G__281235 = count__281226_281230;
var G__281236 = (i__281227_281231 + (1));
seq__281224_281228 = G__281233;
chunk__281225_281229 = G__281234;
count__281226_281230 = G__281235;
i__281227_281231 = G__281236;
continue;
} else {
var temp__4126__auto___281237 = cljs.core.seq.call(null,seq__281224_281228);
if(temp__4126__auto___281237){
var seq__281224_281238__$1 = temp__4126__auto___281237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__281224_281238__$1)){
var c__4768__auto___281239 = cljs.core.chunk_first.call(null,seq__281224_281238__$1);
var G__281240 = cljs.core.chunk_rest.call(null,seq__281224_281238__$1);
var G__281241 = c__4768__auto___281239;
var G__281242 = cljs.core.count.call(null,c__4768__auto___281239);
var G__281243 = (0);
seq__281224_281228 = G__281240;
chunk__281225_281229 = G__281241;
count__281226_281230 = G__281242;
i__281227_281231 = G__281243;
continue;
} else {
var node_281244 = cljs.core.first.call(null,seq__281224_281238__$1);
goog.dom.setTextContent(node_281244,value);

var G__281245 = cljs.core.next.call(null,seq__281224_281238__$1);
var G__281246 = null;
var G__281247 = (0);
var G__281248 = (0);
seq__281224_281228 = G__281245;
chunk__281225_281229 = G__281246;
count__281226_281230 = G__281247;
i__281227_281231 = G__281248;
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
var seq__281253_281257 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__281254_281258 = null;
var count__281255_281259 = (0);
var i__281256_281260 = (0);
while(true){
if((i__281256_281260 < count__281255_281259)){
var node_281261 = cljs.core._nth.call(null,chunk__281254_281258,i__281256_281260);
goog.dom.forms.setValue(node_281261,value);

var G__281262 = seq__281253_281257;
var G__281263 = chunk__281254_281258;
var G__281264 = count__281255_281259;
var G__281265 = (i__281256_281260 + (1));
seq__281253_281257 = G__281262;
chunk__281254_281258 = G__281263;
count__281255_281259 = G__281264;
i__281256_281260 = G__281265;
continue;
} else {
var temp__4126__auto___281266 = cljs.core.seq.call(null,seq__281253_281257);
if(temp__4126__auto___281266){
var seq__281253_281267__$1 = temp__4126__auto___281266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__281253_281267__$1)){
var c__4768__auto___281268 = cljs.core.chunk_first.call(null,seq__281253_281267__$1);
var G__281269 = cljs.core.chunk_rest.call(null,seq__281253_281267__$1);
var G__281270 = c__4768__auto___281268;
var G__281271 = cljs.core.count.call(null,c__4768__auto___281268);
var G__281272 = (0);
seq__281253_281257 = G__281269;
chunk__281254_281258 = G__281270;
count__281255_281259 = G__281271;
i__281256_281260 = G__281272;
continue;
} else {
var node_281273 = cljs.core.first.call(null,seq__281253_281267__$1);
goog.dom.forms.setValue(node_281273,value);

var G__281274 = cljs.core.next.call(null,seq__281253_281267__$1);
var G__281275 = null;
var G__281276 = (0);
var G__281277 = (0);
seq__281253_281257 = G__281274;
chunk__281254_281258 = G__281275;
count__281255_281259 = G__281276;
i__281256_281260 = G__281277;
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
var value_281288 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__281284_281289 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__281285_281290 = null;
var count__281286_281291 = (0);
var i__281287_281292 = (0);
while(true){
if((i__281287_281292 < count__281286_281291)){
var node_281293 = cljs.core._nth.call(null,chunk__281285_281290,i__281287_281292);
node_281293.innerHTML = value_281288;

var G__281294 = seq__281284_281289;
var G__281295 = chunk__281285_281290;
var G__281296 = count__281286_281291;
var G__281297 = (i__281287_281292 + (1));
seq__281284_281289 = G__281294;
chunk__281285_281290 = G__281295;
count__281286_281291 = G__281296;
i__281287_281292 = G__281297;
continue;
} else {
var temp__4126__auto___281298 = cljs.core.seq.call(null,seq__281284_281289);
if(temp__4126__auto___281298){
var seq__281284_281299__$1 = temp__4126__auto___281298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__281284_281299__$1)){
var c__4768__auto___281300 = cljs.core.chunk_first.call(null,seq__281284_281299__$1);
var G__281301 = cljs.core.chunk_rest.call(null,seq__281284_281299__$1);
var G__281302 = c__4768__auto___281300;
var G__281303 = cljs.core.count.call(null,c__4768__auto___281300);
var G__281304 = (0);
seq__281284_281289 = G__281301;
chunk__281285_281290 = G__281302;
count__281286_281291 = G__281303;
i__281287_281292 = G__281304;
continue;
} else {
var node_281305 = cljs.core.first.call(null,seq__281284_281299__$1);
node_281305.innerHTML = value_281288;

var G__281306 = cljs.core.next.call(null,seq__281284_281299__$1);
var G__281307 = null;
var G__281308 = (0);
var G__281309 = (0);
seq__281284_281289 = G__281306;
chunk__281285_281290 = G__281307;
count__281286_281291 = G__281308;
i__281287_281292 = G__281309;
continue;
}
} else {
}
}
break;
}
}catch (e281283){if((e281283 instanceof Error)){
var e_281310 = e281283;
domina.replace_children_BANG_.call(null,content,value_281288);
} else {
throw e281283;

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
var seq__281317_281321 = cljs.core.seq.call(null,children);
var chunk__281318_281322 = null;
var count__281319_281323 = (0);
var i__281320_281324 = (0);
while(true){
if((i__281320_281324 < count__281319_281323)){
var child_281325 = cljs.core._nth.call(null,chunk__281318_281322,i__281320_281324);
frag.appendChild(child_281325);

var G__281326 = seq__281317_281321;
var G__281327 = chunk__281318_281322;
var G__281328 = count__281319_281323;
var G__281329 = (i__281320_281324 + (1));
seq__281317_281321 = G__281326;
chunk__281318_281322 = G__281327;
count__281319_281323 = G__281328;
i__281320_281324 = G__281329;
continue;
} else {
var temp__4126__auto___281330 = cljs.core.seq.call(null,seq__281317_281321);
if(temp__4126__auto___281330){
var seq__281317_281331__$1 = temp__4126__auto___281330;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__281317_281331__$1)){
var c__4768__auto___281332 = cljs.core.chunk_first.call(null,seq__281317_281331__$1);
var G__281333 = cljs.core.chunk_rest.call(null,seq__281317_281331__$1);
var G__281334 = c__4768__auto___281332;
var G__281335 = cljs.core.count.call(null,c__4768__auto___281332);
var G__281336 = (0);
seq__281317_281321 = G__281333;
chunk__281318_281322 = G__281334;
count__281319_281323 = G__281335;
i__281320_281324 = G__281336;
continue;
} else {
var child_281337 = cljs.core.first.call(null,seq__281317_281331__$1);
frag.appendChild(child_281337);

var G__281338 = cljs.core.next.call(null,seq__281317_281331__$1);
var G__281339 = null;
var G__281340 = (0);
var G__281341 = (0);
seq__281317_281321 = G__281338;
chunk__281318_281322 = G__281339;
count__281319_281323 = G__281340;
i__281320_281324 = G__281341;
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
return (function (p1__281311_SHARP_,p2__281312_SHARP_){
return f.call(null,p1__281311_SHARP_,p2__281312_SHARP_);
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
if((function (){var G__281343 = list_thing;
if(G__281343){
var bit__4662__auto__ = (G__281343.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__281343.cljs$core$ISeqable$)){
return true;
} else {
if((!G__281343.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__281343);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__281343);
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
if((function (){var G__281344 = content;
if(G__281344){
var bit__4662__auto__ = (G__281344.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__281344.cljs$core$ISeqable$)){
return true;
} else {
if((!G__281344.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__281344);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__281344);
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
if((function (){var G__281345 = content;
if(G__281345){
var bit__4662__auto__ = (G__281345.cljs$lang$protocol_mask$partition0$ & (8388608));
if((bit__4662__auto__) || (G__281345.cljs$core$ISeqable$)){
return true;
} else {
if((!G__281345.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__281345);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__281345);
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
