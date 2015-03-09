// Compiled by ClojureScript 0.0-2913 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj87436 = {};
return obj87436;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core.display_name[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core.display_name["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj87438 = {};
return obj87438;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core.init_state[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core.init_state["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj87440 = {};
return obj87440;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core.should_update[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core.should_update["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj87442 = {};
return obj87442;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core.will_mount[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core.will_mount["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj87444 = {};
return obj87444;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core.did_mount[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core.did_mount["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj87446 = {};
return obj87446;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core.will_unmount[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core.will_unmount["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj87448 = {};
return obj87448;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core.will_update[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core.will_update["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj87450 = {};
return obj87450;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core.did_update[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core.did_update["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj87452 = {};
return obj87452;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core.will_receive_props[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core.will_receive_props["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj87454 = {};
return obj87454;
})();

om.core.render = (function render(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core.render[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core.render["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj87456 = {};
return obj87456;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core.render_props[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core.render_props["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj87458 = {};
return obj87458;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core.render_state[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core.render_state["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj87460 = {};
return obj87460;
})();


om.core.IOmSwap = (function (){var obj87462 = {};
return obj87462;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj87464 = {};
return obj87464;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._get_state[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._get_state["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._get_state[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._get_state["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;


om.core.IGetRenderState = (function (){var obj87466 = {};
return obj87466;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._get_render_state[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._get_render_state["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._get_render_state[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._get_render_state["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;


om.core.ISetState = (function (){var obj87468 = {};
return obj87468;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj87470 = {};
return obj87470;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._get_queue[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._get_queue["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj87472 = {};
return obj87472;
})();

om.core._value = (function _value(x){
if((function (){var and__3969__auto__ = x;
if(and__3969__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__3969__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4625__auto__ = (((x == null))?null:x);
return (function (){var or__3981__auto__ = (om.core._value[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._value["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj87474 = {};
return obj87474;
})();

om.core._path = (function _path(cursor){
if((function (){var and__3969__auto__ = cursor;
if(and__3969__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__3969__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4625__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3981__auto__ = (om.core._path[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._path["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__3969__auto__ = cursor;
if(and__3969__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__3969__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4625__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3981__auto__ = (om.core._state[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._state["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj87476 = {};
return obj87476;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__3969__auto__ = value;
if(and__3969__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__3969__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4625__auto__ = (((value == null))?null:value);
return (function (){var or__3981__auto__ = (om.core._to_cursor[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._to_cursor["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__3969__auto__ = value;
if(and__3969__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__3969__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4625__auto__ = (((value == null))?null:value);
return (function (){var or__3981__auto__ = (om.core._to_cursor[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._to_cursor["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj87478 = {};
return obj87478;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__3969__auto__ = cursor;
if(and__3969__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__3969__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4625__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3981__auto__ = (om.core._derive[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._derive["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj87480 = {};
return obj87480;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__3969__auto__ = cursor;
if(and__3969__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__3969__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4625__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3981__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj87482 = {};
return obj87482;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__3969__auto__ = x;
if(and__3969__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__3969__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4625__auto__ = (((x == null))?null:x);
return (function (){var or__3981__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__3969__auto__ = x;
if(and__3969__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4625__auto__ = (((x == null))?null:x);
return (function (){var or__3981__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__3969__auto__ = x;
if(and__3969__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__3969__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4625__auto__ = (((x == null))?null:x);
return (function (){var or__3981__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj87484 = {};
return obj87484;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._get_property[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._get_property["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj87486 = {};
return obj87486;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__3969__auto__ = cursor;
if(and__3969__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__3969__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4625__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3981__auto__ = (om.core._root_key[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._root_key["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj87488 = {};
return obj87488;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._adapt[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._adapt["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj87490 = {};
return obj87490;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__3969__auto__ = this$;
if(and__3969__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__3969__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4625__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3981__auto__ = (om.core._get_deps[goog.typeOf(x__4625__auto__)]);
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (om.core._get_deps["_"]);
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__87492 = state;
if(G__87492){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87492.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__87492.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__87492);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__87492);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__87494 = x;
if(G__87494){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87494.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__87494.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__87494);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__87494);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function() {
var get_props = null;
var get_props__1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});
var get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__87496 = (x.props["__om_cursor"]);
var G__87496__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__87496,korks__$1):G__87496);
return G__87496__$1;
});
get_props = function(x,korks){
switch(arguments.length){
case 1:
return get_props__1.call(this,x);
case 2:
return get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_props.cljs$core$IFn$_invoke$arity$1 = get_props__1;
get_props.cljs$core$IFn$_invoke$arity$2 = get_props__2;
return get_props;
})()
;
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__87498 = state;
(G__87498["__om_prev_state"] = (state["__om_state"]));

(G__87498["__om_state"] = pending_state);

(G__87498["__om_pending_state"] = null);

return G__87498;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__3981__auto__ = props;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__3981__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__87500 = c;
if(G__87500){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87500.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__87500.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__87500);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__87500);
}
})()){
var state_87521 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__3981__auto__ = (state_87521["__om_prev_state"]);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return (state_87521["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__87501 = c;
if(G__87501){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87501.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__87501.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__87501);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__87501);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__87502 = cljs.core.seq.call(null,refs);
var chunk__87503 = null;
var count__87504 = (0);
var i__87505 = (0);
while(true){
if((i__87505 < count__87504)){
var ref = cljs.core._nth.call(null,chunk__87503,i__87505);
om.core.unobserve.call(null,this$,ref);

var G__87522 = seq__87502;
var G__87523 = chunk__87503;
var G__87524 = count__87504;
var G__87525 = (i__87505 + (1));
seq__87502 = G__87522;
chunk__87503 = G__87523;
count__87504 = G__87524;
i__87505 = G__87525;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__87502);
if(temp__4126__auto____$1){
var seq__87502__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87502__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__87502__$1);
var G__87526 = cljs.core.chunk_rest.call(null,seq__87502__$1);
var G__87527 = c__4768__auto__;
var G__87528 = cljs.core.count.call(null,c__4768__auto__);
var G__87529 = (0);
seq__87502 = G__87526;
chunk__87503 = G__87527;
count__87504 = G__87528;
i__87505 = G__87529;
continue;
} else {
var ref = cljs.core.first.call(null,seq__87502__$1);
om.core.unobserve.call(null,this$,ref);

var G__87530 = cljs.core.next.call(null,seq__87502__$1);
var G__87531 = null;
var G__87532 = (0);
var G__87533 = (0);
seq__87502 = G__87530;
chunk__87503 = G__87531;
count__87504 = G__87532;
i__87505 = G__87533;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__87506 = c;
if(G__87506){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87506.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__87506.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__87506);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__87506);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__87507 = c;
if(G__87507){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87507.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__87507.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__87507);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__87507);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__3969__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__3969__auto__){
return cljs.core.some.call(null,((function (and__3969__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__87499_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__87499_SHARP_);
});})(and__3969__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__3969__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_87508 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_87509 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_87510 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_87511 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_87512 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__87513 = c;
if(G__87513){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87513.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__87513.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__87513);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__87513);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__87514 = c;
if(G__87514){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87514.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__87514.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__87514);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__87514);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__87515 = c;
if(G__87515){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87515.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__87515.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__87515);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__87515);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_87512;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_87511;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_87510;

om.core._STAR_state_STAR_ = _STAR_state_STAR_87509;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_87508;
}}),(function (next_props,next_state){
var this$ = this;
var c_87534 = om.core.children.call(null,this$);
if((function (){var G__87516 = c_87534;
if(G__87516){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87516.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__87516.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__87516);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__87516);
}
})()){
var state_87535 = this$.state;
om.core.will_update.call(null,c_87534,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__3981__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__87517 = c;
if(G__87517){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87517.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__87517.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__87517);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__87517);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__3981__auto__ = id;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__87518 = c;
if(G__87518){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87518.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__87518.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__87518);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__87518);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__87519 = c;
if(G__87519){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87519.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__87519.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__87519);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__87519);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_87536 = om.core.children.call(null,this$);
if((function (){var G__87520 = c_87536;
if(G__87520){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87520.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__87520.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__87520);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__87520);
}
})()){
om.core.will_mount.call(null,c_87536);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x87538 = obj;
x87538.om$core$IGetState$ = true;

x87538.om$core$IGetState$_get_state$arity$1 = ((function (x87538){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__3981__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return (state["__om_state"]);
}
});})(x87538))
;

x87538.om$core$IGetState$_get_state$arity$2 = ((function (x87538){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x87538))
;

x87538.om$core$IGetRenderState$ = true;

x87538.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x87538){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x87538))
;

x87538.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x87538){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x87538))
;

x87538.om$core$ISetState$ = true;

x87538.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x87538){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__3969__auto__ = !((app_state == null));
if(and__3969__auto__){
return render;
} else {
return and__3969__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x87538))
;

x87538.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x87538){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__3969__auto__ = !((app_state == null));
if(and__3969__auto__){
return render;
} else {
return and__3969__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x87538))
;

return x87538;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__3981__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__3981__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__87539 = c;
if(G__87539){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87539.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__87539.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__87539);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__87539);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_87548 = om.core.children.call(null,this$);
if((function (){var G__87540 = c_87548;
if(G__87540){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87540.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__87540.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__87540);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__87540);
}
})()){
om.core.will_mount.call(null,c_87548);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__87541 = c;
if(G__87541){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87541.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__87541.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__87541);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__87541);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__87542 = cljs.core.seq.call(null,refs);
var chunk__87543 = null;
var count__87544 = (0);
var i__87545 = (0);
while(true){
if((i__87545 < count__87544)){
var ref = cljs.core._nth.call(null,chunk__87543,i__87545);
om.core.unobserve.call(null,this$,ref);

var G__87549 = seq__87542;
var G__87550 = chunk__87543;
var G__87551 = count__87544;
var G__87552 = (i__87545 + (1));
seq__87542 = G__87549;
chunk__87543 = G__87550;
count__87544 = G__87551;
i__87545 = G__87552;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__87542);
if(temp__4126__auto____$1){
var seq__87542__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87542__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__87542__$1);
var G__87553 = cljs.core.chunk_rest.call(null,seq__87542__$1);
var G__87554 = c__4768__auto__;
var G__87555 = cljs.core.count.call(null,c__4768__auto__);
var G__87556 = (0);
seq__87542 = G__87553;
chunk__87543 = G__87554;
count__87544 = G__87555;
i__87545 = G__87556;
continue;
} else {
var ref = cljs.core.first.call(null,seq__87542__$1);
om.core.unobserve.call(null,this$,ref);

var G__87557 = cljs.core.next.call(null,seq__87542__$1);
var G__87558 = null;
var G__87559 = (0);
var G__87560 = (0);
seq__87542 = G__87557;
chunk__87543 = G__87558;
count__87544 = G__87559;
i__87545 = G__87560;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_87561 = this$.props;
var c_87562 = om.core.children.call(null,this$);
if((function (){var G__87546 = c_87562;
if(G__87546){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87546.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__87546.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__87546);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__87546);
}
})()){
var state_87563 = this$.state;
om.core.will_update.call(null,c_87562,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__87547 = c;
if(G__87547){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87547.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__87547.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__87547);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__87547);
}
})()){
var state_87564 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__3981__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x87566 = cljs.core.clj__GT_js.call(null,methods$);
x87566.om$core$IGetState$ = true;

x87566.om$core$IGetState$_get_state$arity$1 = ((function (x87566){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__3981__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x87566))
;

x87566.om$core$IGetState$_get_state$arity$2 = ((function (x87566){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x87566))
;

x87566.om$core$IGetRenderState$ = true;

x87566.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x87566){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x87566))
;

x87566.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x87566){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x87566))
;

x87566.om$core$ISetState$ = true;

x87566.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x87566){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__3969__auto__ = !((gstate == null));
if(and__3969__auto__){
return render;
} else {
return and__3969__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x87566))
;

x87566.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x87566){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x87566))
;

return x87566;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__87568 = x;
if(G__87568){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87568.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__87568.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__87568);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__87568);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__87570){
var vec__87571 = p__87570;
var k = cljs.core.nth.call(null,vec__87571,(0),null);
var v = cljs.core.nth.call(null,vec__87571,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__87572 = null;
var G__87572__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__87572__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__87572 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__87572__2.call(this,self__,k);
case 3:
return G__87572__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__87572.cljs$core$IFn$_invoke$arity$2 = G__87572__2;
G__87572.cljs$core$IFn$_invoke$arity$3 = G__87572__3;
return G__87572;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args87569){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args87569)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__87574 = null;
var G__87574__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__87574__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__87574 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__87574__2.call(this,self__,k);
case 3:
return G__87574__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__87574.cljs$core$IFn$_invoke$arity$2 = G__87574__2;
G__87574.cljs$core$IFn$_invoke$arity$3 = G__87574__3;
return G__87574;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args87573){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args87573)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4568__auto__,writer__4569__auto__,opt__4570__auto__){
return cljs.core._write.call(null,writer__4569__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x87576 = cljs.core.clone.call(null,val);
x87576.cljs$core$IEquiv$ = true;

x87576.cljs$core$IEquiv$_equiv$arity$2 = ((function (x87576){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x87576))
;

x87576.om$core$ITransact$ = true;

x87576.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x87576){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x87576))
;

x87576.om$core$ICursor$ = true;

x87576.om$core$ICursor$_path$arity$1 = ((function (x87576){
return (function (_){
var ___$1 = this;
return path;
});})(x87576))
;

x87576.om$core$ICursor$_state$arity$1 = ((function (x87576){
return (function (_){
var ___$1 = this;
return state;
});})(x87576))
;

x87576.cljs$core$IDeref$ = true;

x87576.cljs$core$IDeref$_deref$arity$1 = ((function (x87576){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x87576))
;

return x87576;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_.call(null,val)){
return val;
} else {
if((function (){var G__87579 = val;
if(G__87579){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87579.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__87579.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__87579);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__87579);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__87580 = val;
if(G__87580){
var bit__4662__auto__ = (G__87580.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4662__auto__) || (G__87580.cljs$core$ICloneable$)){
return true;
} else {
if((!G__87580.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__87580);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__87580);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__87582 = atom;
if(G__87582){
var bit__4662__auto__ = (G__87582.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4662__auto__) || (G__87582.cljs$core$IDeref$)){
return true;
} else {
if((!G__87582.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__87582);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__87582);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x87584 = cljs.core.clone.call(null,x);
x87584.om$core$ITransact$ = true;

x87584.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x87584){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x87584))
;

x87584.om$core$ICursorDerive$ = true;

x87584.om$core$ICursorDerive$_derive$arity$4 = ((function (x87584){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x87584))
;

x87584.om$core$IAdapt$ = true;

x87584.om$core$IAdapt$_adapt$arity$2 = ((function (x87584){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x87584))
;

x87584.cljs$core$ICloneable$ = true;

x87584.cljs$core$ICloneable$_clone$arity$1 = ((function (x87584){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x87584))
;

return x87584;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__87591 = cursor;
if(G__87591){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87591.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__87591.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__87591);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__87591);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x87592 = cljs.core.clone.call(null,cursor);
x87592.om$core$ITransact$ = true;

x87592.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x87592,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x87592,path,storage))
;

x87592.om$core$IOmRef$ = true;

x87592.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x87592,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x87592,path,storage))
;

x87592.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x87592,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x87592,path,storage))
;

x87592.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x87592,path,storage){
return (function (_){
var ___$1 = this;
var seq__87593 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__87594 = null;
var count__87595 = (0);
var i__87596 = (0);
while(true){
if((i__87596 < count__87595)){
var c = cljs.core._nth.call(null,chunk__87594,i__87596);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__87597 = seq__87593;
var G__87598 = chunk__87594;
var G__87599 = count__87595;
var G__87600 = (i__87596 + (1));
seq__87593 = G__87597;
chunk__87594 = G__87598;
count__87595 = G__87599;
i__87596 = G__87600;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__87593);
if(temp__4126__auto__){
var seq__87593__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87593__$1)){
var c__4768__auto__ = cljs.core.chunk_first.call(null,seq__87593__$1);
var G__87601 = cljs.core.chunk_rest.call(null,seq__87593__$1);
var G__87602 = c__4768__auto__;
var G__87603 = cljs.core.count.call(null,c__4768__auto__);
var G__87604 = (0);
seq__87593 = G__87601;
chunk__87594 = G__87602;
count__87595 = G__87603;
i__87596 = G__87604;
continue;
} else {
var c = cljs.core.first.call(null,seq__87593__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__87605 = cljs.core.next.call(null,seq__87593__$1);
var G__87606 = null;
var G__87607 = (0);
var G__87608 = (0);
seq__87593 = G__87605;
chunk__87594 = G__87606;
count__87595 = G__87607;
i__87596 = G__87608;
continue;
}
} else {
return null;
}
}
break;
}
});})(x87592,path,storage))
;

x87592.om$core$IOmRef$_get_deps$arity$1 = ((function (x87592,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x87592,path,storage))
;

x87592.om$core$ICursorDerive$ = true;

x87592.om$core$ICursorDerive$_derive$arity$4 = ((function (x87592,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x87592,path,storage))
;

return x87592;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__3981__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(om.core.cursor_QMARK_.call(null,ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){
var or__3981__auto__ = state.om$render$T;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){
return render_all.call(null,null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__87613_87617 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__87614_87618 = null;
var count__87615_87619 = (0);
var i__87616_87620 = (0);
while(true){
if((i__87616_87620 < count__87615_87619)){
var f_87621 = cljs.core._nth.call(null,chunk__87614_87618,i__87616_87620);
f_87621.call(null);

var G__87622 = seq__87613_87617;
var G__87623 = chunk__87614_87618;
var G__87624 = count__87615_87619;
var G__87625 = (i__87616_87620 + (1));
seq__87613_87617 = G__87622;
chunk__87614_87618 = G__87623;
count__87615_87619 = G__87624;
i__87616_87620 = G__87625;
continue;
} else {
var temp__4126__auto___87626 = cljs.core.seq.call(null,seq__87613_87617);
if(temp__4126__auto___87626){
var seq__87613_87627__$1 = temp__4126__auto___87626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87613_87627__$1)){
var c__4768__auto___87628 = cljs.core.chunk_first.call(null,seq__87613_87627__$1);
var G__87629 = cljs.core.chunk_rest.call(null,seq__87613_87627__$1);
var G__87630 = c__4768__auto___87628;
var G__87631 = cljs.core.count.call(null,c__4768__auto___87628);
var G__87632 = (0);
seq__87613_87617 = G__87629;
chunk__87614_87618 = G__87630;
count__87615_87619 = G__87631;
i__87616_87620 = G__87632;
continue;
} else {
var f_87633 = cljs.core.first.call(null,seq__87613_87627__$1);
f_87633.call(null);

var G__87634 = cljs.core.next.call(null,seq__87613_87627__$1);
var G__87635 = null;
var G__87636 = (0);
var G__87637 = (0);
seq__87613_87617 = G__87634;
chunk__87614_87618 = G__87635;
count__87615_87619 = G__87636;
i__87616_87620 = G__87637;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__3981__auto__ = (function (){var G__87644 = x;
if(G__87644){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87644.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__87644.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__87644);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__87644);
}
})();
if(or__3981__auto__){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = (function (){var G__87646 = x;
if(G__87646){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto____$1 = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto____$1)){
return or__3981__auto____$1;
} else {
return G__87646.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__87646.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__87646);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__87646);
}
})();
if(or__3981__auto____$1){
return or__3981__auto____$1;
} else {
var G__87647 = x;
if(G__87647){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto____$2 = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto____$2)){
return or__3981__auto____$2;
} else {
return G__87647.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__87647.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__87647);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__87647);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__3981__auto__ = descriptor;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
var or__3981__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__3981__auto____$1)){
return or__3981__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(om.core.valid_opts_QMARK_.call(null,m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else {
var map__87649 = m;
var map__87649__$1 = ((cljs.core.seq_QMARK_.call(null,map__87649))?cljs.core.apply.call(null,cljs.core.hash_map,map__87649):map__87649);
var opts = cljs.core.get.call(null,map__87649__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var init_state = cljs.core.get.call(null,map__87649__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var state = cljs.core.get.call(null,map__87649__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_fn = cljs.core.get.call(null,map__87649__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var key = cljs.core.get.call(null,map__87649__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__3981__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__87649,map__87649__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__87649,map__87649__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__87649,map__87649__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__87649,map__87649__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__3981__auto__ = rkey;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){
return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){
return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__87658 = state;
if(G__87658){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87658.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__87658.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__87658);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__87658);
}
})()){
} else {
var properties_87666 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_87667 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_87668 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x87659_87669 = state;
x87659_87669.om$core$IRenderQueue$ = true;

x87659_87669.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x87659_87669,properties_87666,listeners_87667,render_queue_87668){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_87668);
});})(x87659_87669,properties_87666,listeners_87667,render_queue_87668))
;

x87659_87669.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x87659_87669,properties_87666,listeners_87667,render_queue_87668){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_87668),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_87668,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x87659_87669,properties_87666,listeners_87667,render_queue_87668))
;

x87659_87669.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x87659_87669,properties_87666,listeners_87667,render_queue_87668){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_87668,cljs.core.empty);
});})(x87659_87669,properties_87666,listeners_87667,render_queue_87668))
;

x87659_87669.om$core$INotify$ = true;

x87659_87669.om$core$INotify$_listen_BANG_$arity$3 = ((function (x87659_87669,properties_87666,listeners_87667,render_queue_87668){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_87667,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x87659_87669,properties_87666,listeners_87667,render_queue_87668))
;

x87659_87669.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x87659_87669,properties_87666,listeners_87667,render_queue_87668){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_87667,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x87659_87669,properties_87666,listeners_87667,render_queue_87668))
;

x87659_87669.om$core$INotify$_notify_BANG_$arity$3 = ((function (x87659_87669,properties_87666,listeners_87667,render_queue_87668){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__87660_87670 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_87667));
var chunk__87661_87671 = null;
var count__87662_87672 = (0);
var i__87663_87673 = (0);
while(true){
if((i__87663_87673 < count__87662_87672)){
var vec__87664_87674 = cljs.core._nth.call(null,chunk__87661_87671,i__87663_87673);
var __87675 = cljs.core.nth.call(null,vec__87664_87674,(0),null);
var f_87676 = cljs.core.nth.call(null,vec__87664_87674,(1),null);
f_87676.call(null,tx_data,root_cursor);

var G__87677 = seq__87660_87670;
var G__87678 = chunk__87661_87671;
var G__87679 = count__87662_87672;
var G__87680 = (i__87663_87673 + (1));
seq__87660_87670 = G__87677;
chunk__87661_87671 = G__87678;
count__87662_87672 = G__87679;
i__87663_87673 = G__87680;
continue;
} else {
var temp__4126__auto___87681 = cljs.core.seq.call(null,seq__87660_87670);
if(temp__4126__auto___87681){
var seq__87660_87682__$1 = temp__4126__auto___87681;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87660_87682__$1)){
var c__4768__auto___87683 = cljs.core.chunk_first.call(null,seq__87660_87682__$1);
var G__87684 = cljs.core.chunk_rest.call(null,seq__87660_87682__$1);
var G__87685 = c__4768__auto___87683;
var G__87686 = cljs.core.count.call(null,c__4768__auto___87683);
var G__87687 = (0);
seq__87660_87670 = G__87684;
chunk__87661_87671 = G__87685;
count__87662_87672 = G__87686;
i__87663_87673 = G__87687;
continue;
} else {
var vec__87665_87688 = cljs.core.first.call(null,seq__87660_87682__$1);
var __87689 = cljs.core.nth.call(null,vec__87665_87688,(0),null);
var f_87690 = cljs.core.nth.call(null,vec__87665_87688,(1),null);
f_87690.call(null,tx_data,root_cursor);

var G__87691 = cljs.core.next.call(null,seq__87660_87682__$1);
var G__87692 = null;
var G__87693 = (0);
var G__87694 = (0);
seq__87660_87670 = G__87691;
chunk__87661_87671 = G__87692;
count__87662_87672 = G__87693;
i__87663_87673 = G__87694;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x87659_87669,properties_87666,listeners_87667,render_queue_87668))
;

x87659_87669.om$core$IRootProperties$ = true;

x87659_87669.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x87659_87669,properties_87666,listeners_87667,render_queue_87668){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_87666,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x87659_87669,properties_87666,listeners_87667,render_queue_87668))
;

x87659_87669.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x87659_87669,properties_87666,listeners_87667,render_queue_87668){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_87666,cljs.core.dissoc,id,k);
});})(x87659_87669,properties_87666,listeners_87667,render_queue_87668))
;

x87659_87669.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x87659_87669,properties_87666,listeners_87667,render_queue_87668){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_87666,cljs.core.dissoc,id);
});})(x87659_87669,properties_87666,listeners_87667,render_queue_87668))
;

x87659_87669.om$core$IRootProperties$_get_property$arity$3 = ((function (x87659_87669,properties_87666,listeners_87667,render_queue_87668){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_87666),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x87659_87669,properties_87666,listeners_87667,render_queue_87668))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_.call(null,cursor)){
var x87696 = cljs.core.clone.call(null,cursor);
x87696.om$core$IRootKey$ = true;

x87696.om$core$IRootKey$_root_key$arity$1 = ((function (x87696){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x87696))
;

x87696.om$core$IAdapt$ = true;

x87696.om$core$IAdapt$_adapt$arity$2 = ((function (x87696){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x87696))
;

x87696.cljs$core$ICloneable$ = true;

x87696.cljs$core$ICloneable$_clone$arity$1 = ((function (x87696){
return (function (this$){
var this$__$1 = this;
return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x87696))
;

return x87696;
} else {
return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__87697){
var map__87760 = p__87697;
var map__87760__$1 = ((cljs.core.seq_QMARK_.call(null,map__87760))?cljs.core.apply.call(null,cljs.core.hash_map,map__87760):map__87760);
var options = map__87760__$1;
var raf = cljs.core.get.call(null,map__87760__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var adapt = cljs.core.get.call(null,map__87760__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var descriptor = cljs.core.get.call(null,map__87760__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var instrument = cljs.core.get.call(null,map__87760__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var path = cljs.core.get.call(null,map__87760__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tx_listen = cljs.core.get.call(null,map__87760__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var target = cljs.core.get.call(null,map__87760__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__87822 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__87822,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__87822,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__87761 = value;
if(G__87761){
var bit__4662__auto__ = (G__87761.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4662__auto__) || (G__87761.cljs$core$IAtom$)){
return true;
} else {
if((!G__87761.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__87761);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__87761);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__3981__auto__ = adapt;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__87760,map__87760__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_87823 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_87792 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_87793 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_87794 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_87795 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_87795;

om.core._STAR_state_STAR_ = _STAR_state_STAR_87794;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_87793;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_87792;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_87823);
} else {
}
}

var queue_87824 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_87824)){
} else {
var seq__87796_87825 = cljs.core.seq.call(null,queue_87824);
var chunk__87797_87826 = null;
var count__87798_87827 = (0);
var i__87799_87828 = (0);
while(true){
if((i__87799_87828 < count__87798_87827)){
var c_87829 = cljs.core._nth.call(null,chunk__87797_87826,i__87799_87828);
if(cljs.core.truth_(c_87829.isMounted())){
var temp__4126__auto___87830 = (c_87829.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___87830)){
var next_props_87831 = temp__4126__auto___87830;
(c_87829.props["__om_cursor"] = next_props_87831);

(c_87829.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3981__auto__ = !((function (){var G__87801 = om.core.children.call(null,c_87829);
if(G__87801){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87801.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__87801.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__87801);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__87801);
}
})());
if(or__3981__auto__){
return or__3981__auto__;
} else {
return c_87829.shouldComponentUpdate(c_87829.props,c_87829.state);
}
})())){
c_87829.forceUpdate();
} else {
}
} else {
}

var G__87832 = seq__87796_87825;
var G__87833 = chunk__87797_87826;
var G__87834 = count__87798_87827;
var G__87835 = (i__87799_87828 + (1));
seq__87796_87825 = G__87832;
chunk__87797_87826 = G__87833;
count__87798_87827 = G__87834;
i__87799_87828 = G__87835;
continue;
} else {
var temp__4126__auto___87836 = cljs.core.seq.call(null,seq__87796_87825);
if(temp__4126__auto___87836){
var seq__87796_87837__$1 = temp__4126__auto___87836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87796_87837__$1)){
var c__4768__auto___87838 = cljs.core.chunk_first.call(null,seq__87796_87837__$1);
var G__87839 = cljs.core.chunk_rest.call(null,seq__87796_87837__$1);
var G__87840 = c__4768__auto___87838;
var G__87841 = cljs.core.count.call(null,c__4768__auto___87838);
var G__87842 = (0);
seq__87796_87825 = G__87839;
chunk__87797_87826 = G__87840;
count__87798_87827 = G__87841;
i__87799_87828 = G__87842;
continue;
} else {
var c_87843 = cljs.core.first.call(null,seq__87796_87837__$1);
if(cljs.core.truth_(c_87843.isMounted())){
var temp__4126__auto___87844__$1 = (c_87843.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___87844__$1)){
var next_props_87845 = temp__4126__auto___87844__$1;
(c_87843.props["__om_cursor"] = next_props_87845);

(c_87843.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3981__auto__ = !((function (){var G__87803 = om.core.children.call(null,c_87843);
if(G__87803){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87803.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__87803.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__87803);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__87803);
}
})());
if(or__3981__auto__){
return or__3981__auto__;
} else {
return c_87843.shouldComponentUpdate(c_87843.props,c_87843.state);
}
})())){
c_87843.forceUpdate();
} else {
}
} else {
}

var G__87846 = cljs.core.next.call(null,seq__87796_87837__$1);
var G__87847 = null;
var G__87848 = (0);
var G__87849 = (0);
seq__87796_87825 = G__87846;
chunk__87797_87826 = G__87847;
count__87798_87827 = G__87848;
i__87799_87828 = G__87849;
continue;
}
} else {
}
}
break;
}
}

var _refs_87850 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_87850)){
} else {
var seq__87804_87851 = cljs.core.seq.call(null,_refs_87850);
var chunk__87805_87852 = null;
var count__87806_87853 = (0);
var i__87807_87854 = (0);
while(true){
if((i__87807_87854 < count__87806_87853)){
var vec__87808_87855 = cljs.core._nth.call(null,chunk__87805_87852,i__87807_87854);
var path_87856__$1 = cljs.core.nth.call(null,vec__87808_87855,(0),null);
var cs_87857 = cljs.core.nth.call(null,vec__87808_87855,(1),null);
var cs_87858__$1 = cljs.core.deref.call(null,cs_87857);
var seq__87809_87859 = cljs.core.seq.call(null,cs_87858__$1);
var chunk__87810_87860 = null;
var count__87811_87861 = (0);
var i__87812_87862 = (0);
while(true){
if((i__87812_87862 < count__87811_87861)){
var vec__87813_87863 = cljs.core._nth.call(null,chunk__87810_87860,i__87812_87862);
var id_87864 = cljs.core.nth.call(null,vec__87813_87863,(0),null);
var c_87865 = cljs.core.nth.call(null,vec__87813_87863,(1),null);
if(cljs.core.truth_(c_87865.shouldComponentUpdate(c_87865.props,c_87865.state))){
c_87865.forceUpdate();
} else {
}

var G__87866 = seq__87809_87859;
var G__87867 = chunk__87810_87860;
var G__87868 = count__87811_87861;
var G__87869 = (i__87812_87862 + (1));
seq__87809_87859 = G__87866;
chunk__87810_87860 = G__87867;
count__87811_87861 = G__87868;
i__87812_87862 = G__87869;
continue;
} else {
var temp__4126__auto___87870 = cljs.core.seq.call(null,seq__87809_87859);
if(temp__4126__auto___87870){
var seq__87809_87871__$1 = temp__4126__auto___87870;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87809_87871__$1)){
var c__4768__auto___87872 = cljs.core.chunk_first.call(null,seq__87809_87871__$1);
var G__87873 = cljs.core.chunk_rest.call(null,seq__87809_87871__$1);
var G__87874 = c__4768__auto___87872;
var G__87875 = cljs.core.count.call(null,c__4768__auto___87872);
var G__87876 = (0);
seq__87809_87859 = G__87873;
chunk__87810_87860 = G__87874;
count__87811_87861 = G__87875;
i__87812_87862 = G__87876;
continue;
} else {
var vec__87814_87877 = cljs.core.first.call(null,seq__87809_87871__$1);
var id_87878 = cljs.core.nth.call(null,vec__87814_87877,(0),null);
var c_87879 = cljs.core.nth.call(null,vec__87814_87877,(1),null);
if(cljs.core.truth_(c_87879.shouldComponentUpdate(c_87879.props,c_87879.state))){
c_87879.forceUpdate();
} else {
}

var G__87880 = cljs.core.next.call(null,seq__87809_87871__$1);
var G__87881 = null;
var G__87882 = (0);
var G__87883 = (0);
seq__87809_87859 = G__87880;
chunk__87810_87860 = G__87881;
count__87811_87861 = G__87882;
i__87812_87862 = G__87883;
continue;
}
} else {
}
}
break;
}

var G__87884 = seq__87804_87851;
var G__87885 = chunk__87805_87852;
var G__87886 = count__87806_87853;
var G__87887 = (i__87807_87854 + (1));
seq__87804_87851 = G__87884;
chunk__87805_87852 = G__87885;
count__87806_87853 = G__87886;
i__87807_87854 = G__87887;
continue;
} else {
var temp__4126__auto___87888 = cljs.core.seq.call(null,seq__87804_87851);
if(temp__4126__auto___87888){
var seq__87804_87889__$1 = temp__4126__auto___87888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87804_87889__$1)){
var c__4768__auto___87890 = cljs.core.chunk_first.call(null,seq__87804_87889__$1);
var G__87891 = cljs.core.chunk_rest.call(null,seq__87804_87889__$1);
var G__87892 = c__4768__auto___87890;
var G__87893 = cljs.core.count.call(null,c__4768__auto___87890);
var G__87894 = (0);
seq__87804_87851 = G__87891;
chunk__87805_87852 = G__87892;
count__87806_87853 = G__87893;
i__87807_87854 = G__87894;
continue;
} else {
var vec__87815_87895 = cljs.core.first.call(null,seq__87804_87889__$1);
var path_87896__$1 = cljs.core.nth.call(null,vec__87815_87895,(0),null);
var cs_87897 = cljs.core.nth.call(null,vec__87815_87895,(1),null);
var cs_87898__$1 = cljs.core.deref.call(null,cs_87897);
var seq__87816_87899 = cljs.core.seq.call(null,cs_87898__$1);
var chunk__87817_87900 = null;
var count__87818_87901 = (0);
var i__87819_87902 = (0);
while(true){
if((i__87819_87902 < count__87818_87901)){
var vec__87820_87903 = cljs.core._nth.call(null,chunk__87817_87900,i__87819_87902);
var id_87904 = cljs.core.nth.call(null,vec__87820_87903,(0),null);
var c_87905 = cljs.core.nth.call(null,vec__87820_87903,(1),null);
if(cljs.core.truth_(c_87905.shouldComponentUpdate(c_87905.props,c_87905.state))){
c_87905.forceUpdate();
} else {
}

var G__87906 = seq__87816_87899;
var G__87907 = chunk__87817_87900;
var G__87908 = count__87818_87901;
var G__87909 = (i__87819_87902 + (1));
seq__87816_87899 = G__87906;
chunk__87817_87900 = G__87907;
count__87818_87901 = G__87908;
i__87819_87902 = G__87909;
continue;
} else {
var temp__4126__auto___87910__$1 = cljs.core.seq.call(null,seq__87816_87899);
if(temp__4126__auto___87910__$1){
var seq__87816_87911__$1 = temp__4126__auto___87910__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87816_87911__$1)){
var c__4768__auto___87912 = cljs.core.chunk_first.call(null,seq__87816_87911__$1);
var G__87913 = cljs.core.chunk_rest.call(null,seq__87816_87911__$1);
var G__87914 = c__4768__auto___87912;
var G__87915 = cljs.core.count.call(null,c__4768__auto___87912);
var G__87916 = (0);
seq__87816_87899 = G__87913;
chunk__87817_87900 = G__87914;
count__87818_87901 = G__87915;
i__87819_87902 = G__87916;
continue;
} else {
var vec__87821_87917 = cljs.core.first.call(null,seq__87816_87911__$1);
var id_87918 = cljs.core.nth.call(null,vec__87821_87917,(0),null);
var c_87919 = cljs.core.nth.call(null,vec__87821_87917,(1),null);
if(cljs.core.truth_(c_87919.shouldComponentUpdate(c_87919.props,c_87919.state))){
c_87919.forceUpdate();
} else {
}

var G__87920 = cljs.core.next.call(null,seq__87816_87911__$1);
var G__87921 = null;
var G__87922 = (0);
var G__87923 = (0);
seq__87816_87899 = G__87920;
chunk__87817_87900 = G__87921;
count__87818_87901 = G__87922;
i__87819_87902 = G__87923;
continue;
}
} else {
}
}
break;
}

var G__87924 = cljs.core.next.call(null,seq__87804_87889__$1);
var G__87925 = null;
var G__87926 = (0);
var G__87927 = (0);
seq__87804_87851 = G__87924;
chunk__87805_87852 = G__87925;
count__87806_87853 = G__87926;
i__87807_87854 = G__87927;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__87760,map__87760__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__87760,map__87760__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__87760,map__87760__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__87760,map__87760__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__87760,map__87760__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__87760,map__87760__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__87760,map__87760__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__87760,map__87760__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__87760,map__87760__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__87929 = x;
if(G__87929){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87929.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__87929.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__87929);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__87929);
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__87931 = cursor;
if(G__87931){
var bit__4662__auto__ = null;
if(cljs.core.truth_((function (){var or__3981__auto__ = bit__4662__auto__;
if(cljs.core.truth_(or__3981__auto__)){
return or__3981__auto__;
} else {
return G__87931.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__87931.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__87931);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__87931);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){
return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
