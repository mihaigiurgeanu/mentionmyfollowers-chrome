// Compiled by ClojureScript 0.0-2913 {}
goog.provide('mentionmyfollowers.commenting');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('domina.css');
goog.require('domina.events');
goog.require('domina');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Commenting script inserted in Instagram page");
mentionmyfollowers.commenting.comment_forms = (function comment_forms(){
return domina.nodes.call(null,domina.css.sel.call(null,"form.timelineCommentForm"));
});
mentionmyfollowers.commenting.comment_input = (function comment_input(form){
return domina.single_node.call(null,domina.css.sel.call(null,form,"input.timelineCommentTextField"));
});
mentionmyfollowers.commenting.mention = (function mention(followers){
return clojure.string.join.call(null," ",cljs.core.map.call(null,(function (p1__12502_SHARP_){
return [cljs.core.str("@"),cljs.core.str(p1__12502_SHARP_)].join('');
}),followers));
});
mentionmyfollowers.commenting.submit_form = (function submit_form(form){
return domina.events.dispatch_BANG_.call(null,form,new cljs.core.Keyword(null,"submit","submit",-49315317));
});
mentionmyfollowers.commenting.submit_form_alt = (function submit_form_alt(form){
var s_event = (new Event("submit"));
return form.dispatchEvent(s_event);
});
mentionmyfollowers.commenting.make_comment_BANG_ = (function make_comment_BANG_(form,template,followers){
var input_12503 = mentionmyfollowers.commenting.comment_input.call(null,form);
input_12503.value = [cljs.core.str(template),cljs.core.str(" "),cljs.core.str(mentionmyfollowers.commenting.mention.call(null,followers))].join('');

return mentionmyfollowers.commenting.submit_form_alt.call(null,form);
});
chrome.runtime.onMessage.addListener((function (request,sender,send_response){
cljs.core.println.call(null,"Comments request",JSON.stringify(request));

cljs.core.println.call(null,"Got followers",clojure.string.join.call(null," ",cljs.core.js__GT_clj.call(null,request.followers)));

cljs.core.println.call(null,"Got templates",clojure.string.join.call(null,"\n",cljs.core.js__GT_clj.call(null,request.templates)));

var send_comment = (function next_comment(forms,templates,followers){
if(cljs.core.truth_(cljs.core.not_empty.call(null,followers))){
mentionmyfollowers.commenting.make_comment_BANG_.call(null,cljs.core.first.call(null,forms),cljs.core.first.call(null,templates),cljs.core.first.call(null,followers));

return window.setTimeout((function (){
return next_comment.call(null,cljs.core.rest.call(null,forms),cljs.core.rest.call(null,templates),cljs.core.rest.call(null,followers));
}),(600));
} else {
return send_response.call(null,{"message": "Done"});
}
});
var forms = cljs.core.cycle.call(null,mentionmyfollowers.commenting.comment_forms.call(null));
var templates = cljs.core.cycle.call(null,request.templates);
var followers = cljs.core.partition_all.call(null,(5),request.followers);
return send_comment.call(null,forms,templates,followers);
}));
