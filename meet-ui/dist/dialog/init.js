function getCtx(t,o=null){var e=getCurrentPages();const n=o||e[e.length-1];o=n.selectComponent(t);return o||null}function Dialog(t){var{id:o="#meetDialog",context:e=null}=t;const n=getCtx(o,e);n?.show(t)}Dialog.close=function(t={}){var{id:t="#meetDialog",context:o=null}=t="string"==typeof t?{id:t}:t;const e=getCtx(t,o);e?.close()},Dialog.alert=function(t){t.type="alert",Dialog(t)},Dialog.confirm=function(t){t.type="confirm",Dialog(t)},Dialog.prompt=function(t){t.type="prompt",Dialog(t)},wx.meetDialog=Dialog;export{Dialog as meetDialog};