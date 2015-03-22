// Compiled by ClojureScript 0.0-2913 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.object');
goog.require('domina');

domina.events.Event = (function (){var obj19112 = {};
return obj19112;
})();

domina.events.prevent_default = (function prevent_default(evt){
if((function (){var and__3969__auto__ = evt;
if(and__3969__auto__){
return evt.domina$events$Event$prevent_default$arity$1;
} else {
return and__3969__auto__;
}
})()){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__4625__auto__ = (((evt == null))?null:evt);
return (function (){var or__3981__auto__ = (domina.events.prevent_default[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (domina.events.prevent_default["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});

domina.events.stop_propagation = (function stop_propagation(evt){
if((function (){var and__3969__auto__ = evt;
if(and__3969__auto__){
return evt.domina$events$Event$stop_propagation$arity$1;
} else {
return and__3969__auto__;
}
})()){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__4625__auto__ = (((evt == null))?null:evt);
return (function (){var or__3981__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (domina.events.stop_propagation["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});

domina.events.target = (function target(evt){
if((function (){var and__3969__auto__ = evt;
if(and__3969__auto__){
return evt.domina$events$Event$target$arity$1;
} else {
return and__3969__auto__;
}
})()){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__4625__auto__ = (((evt == null))?null:evt);
return (function (){var or__3981__auto__ = (domina.events.target[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (domina.events.target["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});

domina.events.current_target = (function current_target(evt){
if((function (){var and__3969__auto__ = evt;
if(and__3969__auto__){
return evt.domina$events$Event$current_target$arity$1;
} else {
return and__3969__auto__;
}
})()){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__4625__auto__ = (((evt == null))?null:evt);
return (function (){var or__3981__auto__ = (domina.events.current_target[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (domina.events.current_target["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});

domina.events.event_type = (function event_type(evt){
if((function (){var and__3969__auto__ = evt;
if(and__3969__auto__){
return evt.domina$events$Event$event_type$arity$1;
} else {
return and__3969__auto__;
}
})()){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__4625__auto__ = (((evt == null))?null:evt);
return (function (){var or__3981__auto__ = (domina.events.event_type[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (domina.events.event_type["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});

domina.events.raw_event = (function raw_event(evt){
if((function (){var and__3969__auto__ = evt;
if(and__3969__auto__){
return evt.domina$events$Event$raw_event$arity$1;
} else {
return and__3969__auto__;
}
})()){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__4625__auto__ = (((evt == null))?null:evt);
return (function (){var or__3981__auto__ = (domina.events.raw_event[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (domina.events.raw_event["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if(typeof domina.events.t19116 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.events.t19116 = (function (evt,f,create_listener_function,meta19117){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19117 = meta19117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19116.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4124__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4124__auto__)){
var val = temp__4124__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t19116.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__3981__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return not_found;
}
});

domina.events.t19116.prototype.domina$events$Event$ = true;

domina.events.t19116.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t19116.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t19116.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t19116.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t19116.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t19116.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t19116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19118){
var self__ = this;
var _19118__$1 = this;
return self__.meta19117;
});

domina.events.t19116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19118,meta19117__$1){
var self__ = this;
var _19118__$1 = this;
return (new domina.events.t19116(self__.evt,self__.f,self__.create_listener_function,meta19117__$1));
});

domina.events.t19116.cljs$lang$type = true;

domina.events.t19116.cljs$lang$ctorStr = "domina.events/t19116";

domina.events.t19116.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"domina.events/t19116");
});

domina.events.__GT_t19116 = (function __GT_t19116(evt__$1,f__$1,create_listener_function__$1,meta19117){
return (new domina.events.t19116(evt__$1,f__$1,create_listener_function__$1,meta19117));
});

}

return (new domina.events.t19116(evt,f,create_listener_function,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__4737__auto__ = ((function (f,t){
return (function iter__19123(s__19124){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__19124__$1 = s__19124;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19124__$1);
if(temp__4126__auto__){
var s__19124__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19124__$2)){
var c__4735__auto__ = cljs.core.chunk_first.call(null,s__19124__$2);
var size__4736__auto__ = cljs.core.count.call(null,c__4735__auto__);
var b__19126 = cljs.core.chunk_buffer.call(null,size__4736__auto__);
if((function (){var i__19125 = (0);
while(true){
if((i__19125 < size__4736__auto__)){
var node = cljs.core._nth.call(null,c__4735__auto__,i__19125);
cljs.core.chunk_append.call(null,b__19126,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__19127 = (i__19125 + (1));
i__19125 = G__19127;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19126),iter__19123.call(null,cljs.core.chunk_rest.call(null,s__19124__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19126),null);
}
} else {
var node = cljs.core.first.call(null,s__19124__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19123.call(null,cljs.core.rest.call(null,s__19124__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__4737__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){
return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){
return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){
return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){
return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var seq__19136 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19137 = null;
var count__19138 = (0);
var i__19139 = (0);
while(true){
if((i__19139 < count__19138)){
var node = cljs.core._nth.call(null,chunk__19137,i__19139);
goog.events.removeAll(node);

var G__19144 = seq__19136;
var G__19145 = chunk__19137;
var G__19146 = count__19138;
var G__19147 = (i__19139 + (1));
seq__19136 = G__19144;
chunk__19137 = G__19145;
count__19138 = G__19146;
i__19139 = G__19147;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19136);
if(temp__4126__auto__){
var seq__19136__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19136__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__19136__$1);
var G__19148 = cljs.core.chunk_rest.call(null,seq__19136__$1);
var G__19149 = c__4768__auto__;
var G__19150 = cljs.core.count.call(null,c__4768__auto__);
var G__19151 = (0);
seq__19136 = G__19148;
chunk__19137 = G__19149;
count__19138 = G__19150;
i__19139 = G__19151;
continue;
} else {
var node = cljs.core.first.call(null,seq__19136__$1);
goog.events.removeAll(node);

var G__19152 = cljs.core.next.call(null,seq__19136__$1);
var G__19153 = null;
var G__19154 = (0);
var G__19155 = (0);
seq__19136 = G__19152;
chunk__19137 = G__19153;
count__19138 = G__19154;
i__19139 = G__19155;
continue;
}
} else {
return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__19140 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__19141 = null;
var count__19142 = (0);
var i__19143 = (0);
while(true){
if((i__19143 < count__19142)){
var node = cljs.core._nth.call(null,chunk__19141,i__19143);
goog.events.removeAll(node,type__$1);

var G__19156 = seq__19140;
var G__19157 = chunk__19141;
var G__19158 = count__19142;
var G__19159 = (i__19143 + (1));
seq__19140 = G__19156;
chunk__19141 = G__19157;
count__19142 = G__19158;
i__19143 = G__19159;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__19140);
if(temp__4126__auto__){
var seq__19140__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19140__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__19140__$1);
var G__19160 = cljs.core.chunk_rest.call(null,seq__19140__$1);
var G__19161 = c__4768__auto__;
var G__19162 = cljs.core.count.call(null,c__4768__auto__);
var G__19163 = (0);
seq__19140 = G__19160;
chunk__19141 = G__19161;
count__19142 = G__19162;
i__19143 = G__19163;
continue;
} else {
var node = cljs.core.first.call(null,seq__19140__$1);
goog.events.removeAll(node,type__$1);

var G__19164 = cljs.core.next.call(null,seq__19140__$1);
var G__19165 = null;
var G__19166 = (0);
var G__19167 = (0);
seq__19140 = G__19164;
chunk__19141 = G__19165;
count__19142 = G__19166;
i__19143 = G__19167;
continue;
}
} else {
return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){
return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__4124__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4124__auto__)){
var parent = temp__4124__auto__;
var G__19168 = parent;
var G__19169 = cljs.core.cons.call(null,parent,so_far);
n = G__19168;
so_far = G__19169;
continue;
} else {
return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
evt.target = domina.single_node.call(null,source);

var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__19178_19186 = cljs.core.seq.call(null,ancestors);
var chunk__19179_19187 = null;
var count__19180_19188 = (0);
var i__19181_19189 = (0);
while(true){
if((i__19181_19189 < count__19180_19188)){
var n_19190 = cljs.core._nth.call(null,chunk__19179_19187,i__19181_19189);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_19190;

goog.events.fireListeners(n_19190,evt.type,true,evt);
}

var G__19191 = seq__19178_19186;
var G__19192 = chunk__19179_19187;
var G__19193 = count__19180_19188;
var G__19194 = (i__19181_19189 + (1));
seq__19178_19186 = G__19191;
chunk__19179_19187 = G__19192;
count__19180_19188 = G__19193;
i__19181_19189 = G__19194;
continue;
} else {
var temp__4126__auto___19195 = cljs.core.seq.call(null,seq__19178_19186);
if(temp__4126__auto___19195){
var seq__19178_19196__$1 = temp__4126__auto___19195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19178_19196__$1)){
var c__4768__auto___19197 = cljs.core.chunk_first.call(null,seq__19178_19196__$1);
var G__19198 = cljs.core.chunk_rest.call(null,seq__19178_19196__$1);
var G__19199 = c__4768__auto___19197;
var G__19200 = cljs.core.count.call(null,c__4768__auto___19197);
var G__19201 = (0);
seq__19178_19186 = G__19198;
chunk__19179_19187 = G__19199;
count__19180_19188 = G__19200;
i__19181_19189 = G__19201;
continue;
} else {
var n_19202 = cljs.core.first.call(null,seq__19178_19196__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_19202;

goog.events.fireListeners(n_19202,evt.type,true,evt);
}

var G__19203 = cljs.core.next.call(null,seq__19178_19196__$1);
var G__19204 = null;
var G__19205 = (0);
var G__19206 = (0);
seq__19178_19186 = G__19203;
chunk__19179_19187 = G__19204;
count__19180_19188 = G__19205;
i__19181_19189 = G__19206;
continue;
}
} else {
}
}
break;
}

var seq__19182_19207 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__19183_19208 = null;
var count__19184_19209 = (0);
var i__19185_19210 = (0);
while(true){
if((i__19185_19210 < count__19184_19209)){
var n_19211 = cljs.core._nth.call(null,chunk__19183_19208,i__19185_19210);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_19211;

goog.events.fireListeners(n_19211,evt.type,false,evt);
}

var G__19212 = seq__19182_19207;
var G__19213 = chunk__19183_19208;
var G__19214 = count__19184_19209;
var G__19215 = (i__19185_19210 + (1));
seq__19182_19207 = G__19212;
chunk__19183_19208 = G__19213;
count__19184_19209 = G__19214;
i__19185_19210 = G__19215;
continue;
} else {
var temp__4126__auto___19216 = cljs.core.seq.call(null,seq__19182_19207);
if(temp__4126__auto___19216){
var seq__19182_19217__$1 = temp__4126__auto___19216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19182_19217__$1)){
var c__4768__auto___19218 = cljs.core.chunk_first.call(null,seq__19182_19217__$1);
var G__19219 = cljs.core.chunk_rest.call(null,seq__19182_19217__$1);
var G__19220 = c__4768__auto___19218;
var G__19221 = cljs.core.count.call(null,c__4768__auto___19218);
var G__19222 = (0);
seq__19182_19207 = G__19219;
chunk__19183_19208 = G__19220;
count__19184_19209 = G__19221;
i__19185_19210 = G__19222;
continue;
} else {
var n_19223 = cljs.core.first.call(null,seq__19182_19217__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_19223;

goog.events.fireListeners(n_19223,evt.type,false,evt);
}

var G__19224 = cljs.core.next.call(null,seq__19182_19217__$1);
var G__19225 = null;
var G__19226 = (0);
var G__19227 = (0);
seq__19182_19207 = G__19224;
chunk__19183_19208 = G__19225;
count__19184_19209 = G__19226;
i__19185_19210 = G__19227;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){
var and__3969__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__3969__auto__)){
return o.dispatchEvent;
} else {
return and__3969__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){
return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__19234_19240 = cljs.core.seq.call(null,evt_map);
var chunk__19235_19241 = null;
var count__19236_19242 = (0);
var i__19237_19243 = (0);
while(true){
if((i__19237_19243 < count__19236_19242)){
var vec__19238_19244 = cljs.core._nth.call(null,chunk__19235_19241,i__19237_19243);
var k_19245 = cljs.core.nth.call(null,vec__19238_19244,(0),null);
var v_19246 = cljs.core.nth.call(null,vec__19238_19244,(1),null);
(evt[k_19245] = v_19246);

var G__19247 = seq__19234_19240;
var G__19248 = chunk__19235_19241;
var G__19249 = count__19236_19242;
var G__19250 = (i__19237_19243 + (1));
seq__19234_19240 = G__19247;
chunk__19235_19241 = G__19248;
count__19236_19242 = G__19249;
i__19237_19243 = G__19250;
continue;
} else {
var temp__4126__auto___19251 = cljs.core.seq.call(null,seq__19234_19240);
if(temp__4126__auto___19251){
var seq__19234_19252__$1 = temp__4126__auto___19251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19234_19252__$1)){
var c__4768__auto___19253 = cljs.core.chunk_first.call(null,seq__19234_19252__$1);
var G__19254 = cljs.core.chunk_rest.call(null,seq__19234_19252__$1);
var G__19255 = c__4768__auto___19253;
var G__19256 = cljs.core.count.call(null,c__4768__auto___19253);
var G__19257 = (0);
seq__19234_19240 = G__19254;
chunk__19235_19241 = G__19255;
count__19236_19242 = G__19256;
i__19237_19243 = G__19257;
continue;
} else {
var vec__19239_19258 = cljs.core.first.call(null,seq__19234_19252__$1);
var k_19259 = cljs.core.nth.call(null,vec__19239_19258,(0),null);
var v_19260 = cljs.core.nth.call(null,vec__19239_19258,(1),null);
(evt[k_19259] = v_19260);

var G__19261 = cljs.core.next.call(null,seq__19234_19252__$1);
var G__19262 = null;
var G__19263 = (0);
var G__19264 = (0);
seq__19234_19240 = G__19261;
chunk__19235_19241 = G__19262;
count__19236_19242 = G__19263;
i__19237_19243 = G__19264;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__19265_SHARP_){
return goog.events.getListeners(p1__19265_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
