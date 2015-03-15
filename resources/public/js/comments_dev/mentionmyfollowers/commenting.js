// Compiled by ClojureScript 0.0-2913 {}
goog.provide('mentionmyfollowers.commenting');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('domina');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Commenting script inserted in Instagram page");
mentionmyfollowers.commenting.comment_forms = (function comment_forms(){
return domina.css.sel.call(null,"form.timelineCommentForm");
});
mentionmyfollowers.commenting.comment_input = (function comment_input(form){
return domina.single_node.call(null,domina.css.sel.call(null,form,"input.timelineCommentTextField"));
});
