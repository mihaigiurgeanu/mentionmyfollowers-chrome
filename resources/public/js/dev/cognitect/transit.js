// Compiled by ClojureScript 0.0-2913 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__258694_258698 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__258695_258699 = null;
var count__258696_258700 = (0);
var i__258697_258701 = (0);
while(true){
if((i__258697_258701 < count__258696_258700)){
var k_258702 = cljs.core._nth.call(null,chunk__258695_258699,i__258697_258701);
var v_258703 = (b[k_258702]);
(a[k_258702] = v_258703);

var G__258704 = seq__258694_258698;
var G__258705 = chunk__258695_258699;
var G__258706 = count__258696_258700;
var G__258707 = (i__258697_258701 + (1));
seq__258694_258698 = G__258704;
chunk__258695_258699 = G__258705;
count__258696_258700 = G__258706;
i__258697_258701 = G__258707;
continue;
} else {
var temp__4126__auto___258708 = cljs.core.seq.call(null,seq__258694_258698);
if(temp__4126__auto___258708){
var seq__258694_258709__$1 = temp__4126__auto___258708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__258694_258709__$1)){
var c__4768__auto___258710 = cljs.core.chunk_first.call(null,seq__258694_258709__$1);
var G__258711 = cljs.core.chunk_rest.call(null,seq__258694_258709__$1);
var G__258712 = c__4768__auto___258710;
var G__258713 = cljs.core.count.call(null,c__4768__auto___258710);
var G__258714 = (0);
seq__258694_258698 = G__258711;
chunk__258695_258699 = G__258712;
count__258696_258700 = G__258713;
i__258697_258701 = G__258714;
continue;
} else {
var k_258715 = cljs.core.first.call(null,seq__258694_258709__$1);
var v_258716 = (b[k_258715]);
(a[k_258715] = v_258716);

var G__258717 = cljs.core.next.call(null,seq__258694_258709__$1);
var G__258718 = null;
var G__258719 = (0);
var G__258720 = (0);
seq__258694_258698 = G__258717;
chunk__258695_258699 = G__258718;
count__258696_258700 = G__258719;
i__258697_258701 = G__258720;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__258721 = (i + (2));
var G__258722 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__258721;
ret = G__258722;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__258723_258727 = cljs.core.seq.call(null,v);
var chunk__258724_258728 = null;
var count__258725_258729 = (0);
var i__258726_258730 = (0);
while(true){
if((i__258726_258730 < count__258725_258729)){
var x_258731 = cljs.core._nth.call(null,chunk__258724_258728,i__258726_258730);
ret.push(x_258731);

var G__258732 = seq__258723_258727;
var G__258733 = chunk__258724_258728;
var G__258734 = count__258725_258729;
var G__258735 = (i__258726_258730 + (1));
seq__258723_258727 = G__258732;
chunk__258724_258728 = G__258733;
count__258725_258729 = G__258734;
i__258726_258730 = G__258735;
continue;
} else {
var temp__4126__auto___258736 = cljs.core.seq.call(null,seq__258723_258727);
if(temp__4126__auto___258736){
var seq__258723_258737__$1 = temp__4126__auto___258736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__258723_258737__$1)){
var c__4768__auto___258738 = cljs.core.chunk_first.call(null,seq__258723_258737__$1);
var G__258739 = cljs.core.chunk_rest.call(null,seq__258723_258737__$1);
var G__258740 = c__4768__auto___258738;
var G__258741 = cljs.core.count.call(null,c__4768__auto___258738);
var G__258742 = (0);
seq__258723_258727 = G__258739;
chunk__258724_258728 = G__258740;
count__258725_258729 = G__258741;
i__258726_258730 = G__258742;
continue;
} else {
var x_258743 = cljs.core.first.call(null,seq__258723_258737__$1);
ret.push(x_258743);

var G__258744 = cljs.core.next.call(null,seq__258723_258737__$1);
var G__258745 = null;
var G__258746 = (0);
var G__258747 = (0);
seq__258723_258727 = G__258744;
chunk__258724_258728 = G__258745;
count__258725_258729 = G__258746;
i__258726_258730 = G__258747;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__258748_258752 = cljs.core.seq.call(null,v);
var chunk__258749_258753 = null;
var count__258750_258754 = (0);
var i__258751_258755 = (0);
while(true){
if((i__258751_258755 < count__258750_258754)){
var x_258756 = cljs.core._nth.call(null,chunk__258749_258753,i__258751_258755);
ret.push(x_258756);

var G__258757 = seq__258748_258752;
var G__258758 = chunk__258749_258753;
var G__258759 = count__258750_258754;
var G__258760 = (i__258751_258755 + (1));
seq__258748_258752 = G__258757;
chunk__258749_258753 = G__258758;
count__258750_258754 = G__258759;
i__258751_258755 = G__258760;
continue;
} else {
var temp__4126__auto___258761 = cljs.core.seq.call(null,seq__258748_258752);
if(temp__4126__auto___258761){
var seq__258748_258762__$1 = temp__4126__auto___258761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__258748_258762__$1)){
var c__4768__auto___258763 = cljs.core.chunk_first.call(null,seq__258748_258762__$1);
var G__258764 = cljs.core.chunk_rest.call(null,seq__258748_258762__$1);
var G__258765 = c__4768__auto___258763;
var G__258766 = cljs.core.count.call(null,c__4768__auto___258763);
var G__258767 = (0);
seq__258748_258752 = G__258764;
chunk__258749_258753 = G__258765;
count__258750_258754 = G__258766;
i__258751_258755 = G__258767;
continue;
} else {
var x_258768 = cljs.core.first.call(null,seq__258748_258762__$1);
ret.push(x_258768);

var G__258769 = cljs.core.next.call(null,seq__258748_258762__$1);
var G__258770 = null;
var G__258771 = (0);
var G__258772 = (0);
seq__258748_258752 = G__258769;
chunk__258749_258753 = G__258770;
count__258750_258754 = G__258771;
i__258751_258755 = G__258772;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__258773_258777 = cljs.core.seq.call(null,v);
var chunk__258774_258778 = null;
var count__258775_258779 = (0);
var i__258776_258780 = (0);
while(true){
if((i__258776_258780 < count__258775_258779)){
var x_258781 = cljs.core._nth.call(null,chunk__258774_258778,i__258776_258780);
ret.push(x_258781);

var G__258782 = seq__258773_258777;
var G__258783 = chunk__258774_258778;
var G__258784 = count__258775_258779;
var G__258785 = (i__258776_258780 + (1));
seq__258773_258777 = G__258782;
chunk__258774_258778 = G__258783;
count__258775_258779 = G__258784;
i__258776_258780 = G__258785;
continue;
} else {
var temp__4126__auto___258786 = cljs.core.seq.call(null,seq__258773_258777);
if(temp__4126__auto___258786){
var seq__258773_258787__$1 = temp__4126__auto___258786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__258773_258787__$1)){
var c__4768__auto___258788 = cljs.core.chunk_first.call(null,seq__258773_258787__$1);
var G__258789 = cljs.core.chunk_rest.call(null,seq__258773_258787__$1);
var G__258790 = c__4768__auto___258788;
var G__258791 = cljs.core.count.call(null,c__4768__auto___258788);
var G__258792 = (0);
seq__258773_258777 = G__258789;
chunk__258774_258778 = G__258790;
count__258775_258779 = G__258791;
i__258776_258780 = G__258792;
continue;
} else {
var x_258793 = cljs.core.first.call(null,seq__258773_258787__$1);
ret.push(x_258793);

var G__258794 = cljs.core.next.call(null,seq__258773_258787__$1);
var G__258795 = null;
var G__258796 = (0);
var G__258797 = (0);
seq__258773_258777 = G__258794;
chunk__258774_258778 = G__258795;
count__258775_258779 = G__258796;
i__258776_258780 = G__258797;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x258807 = cljs.core.clone.call(null,handlers);
x258807.forEach = ((function (x258807,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__258808 = cljs.core.seq.call(null,coll);
var chunk__258809 = null;
var count__258810 = (0);
var i__258811 = (0);
while(true){
if((i__258811 < count__258810)){
var vec__258812 = cljs.core._nth.call(null,chunk__258809,i__258811);
var k = cljs.core.nth.call(null,vec__258812,(0),null);
var v = cljs.core.nth.call(null,vec__258812,(1),null);
f.call(null,v,k);

var G__258814 = seq__258808;
var G__258815 = chunk__258809;
var G__258816 = count__258810;
var G__258817 = (i__258811 + (1));
seq__258808 = G__258814;
chunk__258809 = G__258815;
count__258810 = G__258816;
i__258811 = G__258817;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__258808);
if(temp__4126__auto__){
var seq__258808__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__258808__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__258808__$1);
var G__258818 = cljs.core.chunk_rest.call(null,seq__258808__$1);
var G__258819 = c__4768__auto__;
var G__258820 = cljs.core.count.call(null,c__4768__auto__);
var G__258821 = (0);
seq__258808 = G__258818;
chunk__258809 = G__258819;
count__258810 = G__258820;
i__258811 = G__258821;
continue;
} else {
var vec__258813 = cljs.core.first.call(null,seq__258808__$1);
var k = cljs.core.nth.call(null,vec__258813,(0),null);
var v = cljs.core.nth.call(null,vec__258813,(1),null);
f.call(null,v,k);

var G__258822 = cljs.core.next.call(null,seq__258808__$1);
var G__258823 = null;
var G__258824 = (0);
var G__258825 = (0);
seq__258808 = G__258822;
chunk__258809 = G__258823;
count__258810 = G__258824;
i__258811 = G__258825;
continue;
}
} else {
return null;
}
}
break;
}
});})(x258807,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x258807;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__258806 = obj;
G__258806.push(kfn.call(null,k),vfn.call(null,v));

return G__258806;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t258829 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t258829 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta258830){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta258830 = meta258830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t258829.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t258829.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t258829.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t258829.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t258829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_258831){
var self__ = this;
var _258831__$1 = this;
return self__.meta258830;
});

cognitect.transit.t258829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_258831,meta258830__$1){
var self__ = this;
var _258831__$1 = this;
return (new cognitect.transit.t258829(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta258830__$1));
});

cognitect.transit.t258829.cljs$lang$type = true;

cognitect.transit.t258829.cljs$lang$ctorStr = "cognitect.transit/t258829";

cognitect.transit.t258829.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"cognitect.transit/t258829");
});

cognitect.transit.__GT_t258829 = (function __GT_t258829(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta258830){
return (new cognitect.transit.t258829(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta258830));
});

}

return (new cognitect.transit.t258829(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,cljs.core.PersistentArrayMap.EMPTY));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big integer from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big integer value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
