(function(){var e={26:function(e,t,n){"use strict";n(428);var o=n(963),r=n(655),i=n(252),a=n(262),l=n(577),u={class:"j-radio"},s=(0,i._)("span",{class:"j-radio_view"},null,-1),c={class:"j-radio_label"},d=(0,i.aZ)({inheritAttrs:!1}),f=(0,i.aZ)((0,r.pi)((0,r.pi)({},d),{emits:["change"],setup:function(e,t){var n=t.emit;function o(e){n("change",e.target.checked)}return function(e,t){return(0,i.wg)(),(0,i.iD)("label",u,[(0,i._)("input",(0,i.dG)(e.$attrs,{type:"radio",class:"j-radio_ipt",onChange:o}),null,16),s,(0,i._)("span",c,[(0,i.WI)(e.$slots,"default")])])}}}));n(190);const v=f;var m=v;function g(e,t){return(0,i.wg)(),(0,i.j4)(o.uT,{name:"TransitionFade","enter-active-class":"transition-active","leave-active-class":"transition-active"},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3})}n(82);var p=n(744);const b={},h=(0,p.Z)(b,[["render",g]]);var _=h;function w(e,t){return(0,i.wg)(),(0,i.j4)(o.uT,{name:"TransitionZoom","enter-active-class":"transition-active","leave-active-class":"transition-active"},{default:(0,i.w5)((()=>[(0,i.WI)(e.$slots,"default")])),_:3})}n(980);const y={},k=(0,p.Z)(y,[["render",w]]);var x=k,C={class:"j-dialog-box"},j={class:"j-dialog_title"},M={class:"j-dialog_body"},T=(0,i.aZ)({inheritAttrs:!1}),S=(0,i.aZ)((0,r.pi)((0,r.pi)({},T),{props:{visible:{type:Boolean},title:null},emits:["update:visible"],setup:function(e,t){var n=t.emit;function o(){n("update:visible",!1)}return function(t,n){return(0,i.wg)(),(0,i.iD)(i.HY,null,[((0,i.wg)(),(0,i.j4)(i.lR,{to:"body"},[(0,i.Wm)(_,null,{default:(0,i.w5)((function(){return[e.visible?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"j-mask",onClick:o})):(0,i.kq)("",!0)]})),_:1})])),((0,i.wg)(),(0,i.j4)(i.lR,{to:"body"},[(0,i.Wm)(x,null,{default:(0,i.w5)((function(){return[e.visible?((0,i.wg)(),(0,i.iD)("div",(0,i.dG)({key:0},t.$attrs,{class:"j-dialog"}),[(0,i.WI)(t.$slots,"outside"),(0,i._)("div",C,[(0,i._)("div",j,(0,l.zw)(e.title),1),(0,i._)("div",M,[(0,i.WI)(t.$slots,"default")])])],16)):(0,i.kq)("",!0)]})),_:3})]))],64)}}}));n(506);const U=S;var z=U;function P(e,t){void 0!==t&&localStorage.setItem(e,String(t))}function D(e){return localStorage.getItem(e)}var Z=(0,i._)("div",{class:"setting-dialog_ornament"},null,-1),H={class:"setting-dialog_body"},I=(0,i._)("div",{class:"row_label"},"挑战人：",-1),W={class:"row_value"},N=(0,i._)("div",{class:"errmsg"}," 必须填写挑战人才能进行挑战 ",-1),R={class:"row"},L=(0,i._)("div",{class:"row_label"},"是否限时：",-1),$={class:"row_value"},B=(0,i.Uk)("限时挑战"),G=(0,i.Uk)("不限时挑战"),F={class:"row"},O=(0,i._)("div",{class:"row_label"},"时间：",-1),Y={class:"row_value"},E=(0,i._)("span",{class:"sub"},"分钟",-1),q={class:"btns"},A=(0,i.Uk)("取消"),J=(0,i.Uk)("确认"),K=(0,i.aZ)({props:{visible:{type:Boolean}},emits:["update:visible"],setup:function(e,t){var n,o,r=t.expose,u=t.emit,s=e,c=(0,i.f3)("setting"),d=(0,a.iH)(c.challengerName),f=(0,a.iH)(c.isLimitTime),v=(0,a.iH)(c.time),g=(0,a.iH)(!1),p=(0,a.iH)({focus:function(){}});function b(){u("update:visible",!1)}function h(){c&&(P("challengerName",c.challengerName=d.value),P("isLimitTime",c.isLimitTime=f.value),P("time",c.time=v.value),b(),d.value?null===o||void 0===o||o():null===n||void 0===n||n("还是没有填挑战人姓名"),n=o=null)}function _(e){var t=e.target,n=Number(t.value.replace(/[^\d]+/g,""));n>99&&(n=99),t.value=String(n)}return(0,i.YP)((function(){return s.visible}),(function(e){e&&(0,i.Y3)((function(){(0,i.Y3)((function(){p.value.focus(),d.value=c.challengerName}))}))})),(0,i.YP)(d,(function(){g.value=!1})),r({checkChallengerName:function(){return new Promise((function(e,t){d.value?e(null):(g.value=!0,u("update:visible",!0),o=e,n=t)}))}}),function(t,n){var o=(0,i.up)("j-input"),r=(0,i.up)("j-button");return(0,i.wg)(),(0,i.j4)(z,(0,i.dG)(t.$attrs,{visible:e.visible,class:"setting-dialog"},(0,i.mx)({"update:visible":b})),{outside:(0,i.w5)((function(){return[Z]})),default:(0,i.w5)((function(){return[(0,i._)("div",H,[(0,i._)("div",{class:(0,l.C_)(["row",{err:g.value}])},[I,(0,i._)("div",W,[(0,i.Wm)(o,{ref_key:"vInputName",ref:p,value:d.value,"onUpdate:value":n[0]||(n[0]=function(e){return d.value=e}),placeholder:"请输入挑战人姓名"},null,8,["value"])]),N],2),(0,i._)("div",R,[L,(0,i._)("div",$,[(0,i.Wm)(m,{onChange:n[1]||(n[1]=function(e){f.value=e}),checked:f.value,"onUpdate:checked":n[2]||(n[2]=function(e){return f.value=e}),name:"LimitTime"},{default:(0,i.w5)((function(){return[B]})),_:1},8,["checked"]),(0,i.Wm)(m,{checked:!f.value,onChange:n[3]||(n[3]=function(e){f.value=!e}),name:"LimitTime",a:"2"},{default:(0,i.w5)((function(){return[G]})),_:1},8,["checked"])])]),(0,i._)("div",F,[O,(0,i._)("div",Y,[(0,i.Wm)(o,{class:"time-ipt",value:v.value,"onUpdate:value":n[4]||(n[4]=function(e){return v.value=e}),onInput:_},null,8,["value"]),E])]),(0,i._)("div",q,[(0,i.Wm)(r,{type:"info",onClick:b},{default:(0,i.w5)((function(){return[A]})),_:1}),(0,i.Wm)(r,{onClick:h},{default:(0,i.w5)((function(){return[J]})),_:1})])])]})),_:1},16,["visible"])}}});n(358);const Q=K;var V=Q,X=(0,i._)("span",null,"说明",-1),ee=(0,i._)("div",{class:"StartContainer_body"}," 颜色分辨力挑战，是指在所有的色块中选择其中有差异的一个色块，分为练习模式和挑战模式。练习模式没有时间限制，练习时选择错误可提醒正确的色块位置，练习结束可统计选择正确的关数和练习时长。挑战模式，分为限时挑战和不限时挑战。限时挑战是指在设定时间内挑战，时间到或某一关规定时间内未选到正确色块即挑战结束；不限时挑战是指不限时间进行挑战，某一关规定时间内未选到正确色块时挑战自动结束，也可以手动结束挑战。 ",-1),te=(0,i.Uk)("开始练习"),ne=(0,i.Uk)("开始挑战"),oe=(0,i.aZ)({emits:["start","startPractice"],setup:function(e,t){var n=t.expose,o=(0,a.iH)(!1),r=(0,a.iH)({checkChallengerName:function(){return!1}});function l(){o.value=!0}return n({checkChallengerName:function(){return r.value.checkChallengerName()}}),function(e,t){var n=(0,i.up)("j-button"),a=(0,i.up)("j-container");return(0,i.wg)(),(0,i.j4)(a,{class:"StartContainer"},{header:(0,i.w5)((function(){return[(0,i._)("div",{class:"StartContainer_header"},[X,(0,i._)("span",{onClick:l,class:"set"})])]})),footer:(0,i.w5)((function(){return[(0,i.Wm)(n,{type:"green",onClick:t[0]||(t[0]=function(t){return e.$emit("startPractice")})},{default:(0,i.w5)((function(){return[te]})),_:1}),(0,i.Wm)(n,{onClick:t[1]||(t[1]=function(t){return e.$emit("start")})},{default:(0,i.w5)((function(){return[ne]})),_:1})]})),default:(0,i.w5)((function(){return[ee,(0,i.Wm)(V,{ref_key:"vSettingDialog",ref:r,visible:o.value,"onUpdate:visible":t[2]||(t[2]=function(e){return o.value=e}),title:"挑战设置"},null,8,["visible"])]})),_:1})}}});n(521);const re=oe;var ie=re;function ae(e,t){var n,o=(0,a.iH)(e);function r(){clearInterval(n),t.value="countDown",o.value=e,n=setInterval((function(){o.value-=1,o.value<=0&&(clearInterval(n),t.value="play")}),1e3)}return(0,i.Ah)((function(){clearInterval(n)})),r(),{countDown:o,countDownRestart:r}}var le={class:"TimoCount"},ue={class:"TimoCount_time"},se=(0,i.aZ)({props:{isPractice:{type:Boolean}},emits:["end"],setup:function(e,t){var n=t.expose,o=t.emit,r=e,u=(0,a.iH)("00:00"),s=0,c={};function d(e){var t=e.secondCount,n=e.separator,o=void 0===n?":":n,r=e.minuteUnit,i=void 0===r?"":r,a=e.secondUnit,l=void 0===a?"":a,u=~~(t/60),s=t%60;return u<10&&(u="0"+u),s<10&&(s="0"+s),""+u+i+o+s+l}function f(e){var t=e.time,n=e.cb,o=e.end,r=e.start,i=60*t,a=i;r(i);var l=null;function u(){s=i-a,clearInterval(l)}return l=setInterval((function(){a-=1,n(d({secondCount:a})),a<=0&&(u(),o())}),1e3),u}function v(e){var t=e.cb,n=e.start,o=0;s=0;var r=null;function i(){s=o,clearInterval(r)}return n(0),r=setInterval((function(){o+=1,t(d({secondCount:o}))}),1e3),i}function m(e){return e.isCountDown?f(e):v(e)}r.isPractice?c.isLimitTime=!1:c=(0,i.f3)("setting");var g=function(){};function p(){g(),g=m({time:c.time,isCountDown:c.isLimitTime,start:function(e){u.value=d({secondCount:e})},cb:function(e){u.value=e},end:function(){o("end")}})}return(0,i.Ah)((function(){g()})),n({startTime:p,stopTime:function(){return g()},getElapsedTime:function(){return d({secondCount:s,separator:"",minuteUnit:"分",secondUnit:"秒"})}}),c.isLimitTime&&(u.value=d({secondCount:60*Number(c.time)})),function(e,t){return(0,i.wg)(),(0,i.iD)("div",le,[(0,i._)("span",ue,(0,l.zw)(u.value),1)])}}});n(293);const ce=se;var de=ce,fe=(0,i._)("div",{class:"ResultDialog_ornament"},null,-1),ve={class:"ResultDialog_body"},me={key:0,class:"row completeMsg"},ge={class:"row_label"},pe={class:"btns"},be=(0,i.Uk)("返回"),he=(0,i.aZ)({props:{list:{default:function(){return[]}},confirmBtnText:{default:"确认"},completeMsg:null,gradeMsg:null},emits:["update:visible","confirm"],setup:function(e,t){var n=t.emit;function o(){n("update:visible",!1)}function r(){n("confirm")}return function(t,n){var a=(0,i.up)("j-button");return(0,i.wg)(),(0,i.j4)(z,(0,i.dG)(t.$attrs,{class:"ResultDialog"},(0,i.mx)({"update:visible":o})),{outside:(0,i.w5)((function(){return[fe]})),default:(0,i.w5)((function(){return[(0,i._)("div",ve,[e.completeMsg?((0,i.wg)(),(0,i.iD)("div",me,(0,l.zw)(e.completeMsg),1)):(0,i.kq)("",!0),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.list,(function(e,t){return(0,i.wg)(),(0,i.iD)("div",{class:"row",key:t},[(0,i._)("div",ge,(0,l.zw)(e.label)+"：",1),(0,i._)("div",{class:(0,l.C_)(["row_value",e.rowClass])},(0,l.zw)(e.value),3)])})),128)),(0,i._)("div",pe,[(0,i.Wm)(a,{onClick:r},{default:(0,i.w5)((function(){return[(0,i.Uk)((0,l.zw)(e.confirmBtnText),1)]})),_:1}),(0,i.Wm)(a,{type:"info",onClick:o},{default:(0,i.w5)((function(){return[be]})),_:1})])])]})),_:1},16)}}});n(636);const _e=he;var we=_e,ye=(0,i.aZ)({props:{gridColumnNumber:{default:1},color:{default:function(){return{r:0,g:0,b:0}}}},emits:["click"],setup:function(e,t){var n=t.emit,o=e,r=(0,a.Fl)((function(){return 100/o.gridColumnNumber}));function u(){n("click")}return function(t,n){return(0,i.wg)(),(0,i.iD)("div",{class:"GridIItem",style:(0,l.j5)({width:(0,a.SU)(r)+"%",height:(0,a.SU)(r)+"%"}),onClick:u},[(0,i._)("div",{class:"GridIItem-el",style:(0,l.j5)({"background-color":"rgb("+e.color.r+", "+e.color.g+", "+e.color.b})},null,4)],4)}}});n(934);const ke=ye;var xe=ke;function Ce(e,t){void 0===t&&(t=-1);var n=je(e),o=Me(e),r=Te(o),i=Te(o),a=Te(o),l=[],u=0;do{u=Math.floor(Math.random()*n*n)}while(t==u);for(var s=0;s<n*n;s++)s===u?l.push({r:r,g:i,b:a}):l.push({r:r+o,g:i+o,b:a+o});return{colors:l,gridColumnNumber:n,correctIndex:u}}function je(e){return e<2?2:e<4?3:e<8?4:e<13?5:e<22?6:e<32?7:e<36?8:e<40?9:e<44?10:e<48?11:12}function Me(e){if(e<=50){var t=[126,120,96,86,70,58,48,40,34,30,27,27,27,25,25,25,23,23,23,23,21,21,21,21,18,18,18,18,18,18,15,15,15,15,15,12,12,12,12,12,10,10,10,10,7,7,7,3,3,2,1];return t[e-1]}return 1}function Te(e){return Math.floor(Math.random()*(255-e))}function Se(e,t){var n=[{name:"色盲"},{name:"初级"},{name:"一般"},{name:"突出的色感"},{name:"美术学院学生级的色感"},{name:"堪比毕加索"},{name:"最强王者"}],o=n.length;if(e===t)return n[o-1].name;var r=Math.ceil(e/(t/(o-2)));return n[r].name}var Ue={class:"ColorsBox"},ze={class:"ColorsBox_container"},Pe=(0,i.aZ)({props:{level:{default:1}},emits:["update:level","errorSelect","complete","newStart"],setup:function(e,t){var n=t.expose,o=t.emit,r=e,u=(0,a.iH)(!1),s=50,c=(0,a.iH)(0),d=(0,a.iH)(c.value),f=(0,a.iH)(-1),v=(0,a.iH)(-1),m=(0,a.iH)([]),g=(0,a.iH)(r.level);function p(){var e=c.value;e+=1,e>s?o("complete"):b(e)}function b(e){v.value=-1;var t=Ce(e,f.value);m.value=t.colors,g.value=t.gridColumnNumber,f.value=t.correctIndex,c.value=e,o("newStart")}function h(e){return f.value===e}function _(e){u.value||(h(e)?(d.value=c.value,p()):o("errorSelect"))}function w(){v.value=-1,setTimeout((function(){v.value=f.value}),1)}return b(g.value),(0,i.YP)(c,(function(e){o("update:level",e)})),n({showCorrect:w,currentLevel:d,reset:function(){u.value=!1,c.value=1},pause:function(){u.value=!0},getGradeTitle:function(){return Se(d.value,s)}}),function(e,t){return(0,i.wg)(),(0,i.iD)("div",Ue,[(0,i._)("div",ze,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.value,(function(e,t){return(0,i.wg)(),(0,i.j4)(xe,{key:t,color:e,gridColumnNumber:g.value,class:(0,l.C_)({zoom:v.value===t}),onClick:function(e){return _(t)}},null,8,["color","gridColumnNumber","class","onClick"])})),128))])])}}});n(501);const De=Pe;var Ze=De,He=(0,i.aZ)({emits:["timeUp"],setup:function(e,t){var n,o=t.expose,r=t.emit,u="20",s=(0,a.iH)(!1),c=(0,a.iH)(u),d=5;function f(){v(),c.value=u;var e=Number(u);n=setInterval((function(){e=Number((e-.1).toFixed(1)),e>d?(c.value=String(Math.ceil(e)),s.value=!1):(c.value=e.toFixed(1),s.value=!0),e<=0&&(clearInterval(n),r("timeUp"))}),100)}function v(){clearInterval(n)}return(0,i.Ah)((function(){v()})),o({restart:f,stop:v}),function(e,t){return(0,i.wg)(),(0,i.iD)("div",{class:(0,l.C_)({emergency:s.value})},(0,l.zw)(c.value),3)}}});n(767);const Ie=(0,p.Z)(He,[["__scopeId","data-v-d5d59aac"]]);var We=Ie;function Ne(){var e=(0,a.iH)(1);return{level:e}}var Re={class:"PlayContainer_header"},Le={class:"PlayContainer_header-column"},$e={class:"PlayContainer_header-left"},Be=(0,i._)("div",{class:"tp-name"},"挑战模式",-1),Ge={class:"PlayContainer_header-column"},Fe={class:"PlayContainer_body"},Oe={key:0,class:"PlayContainer_countdown"},Ye=(0,i.Uk)("结束挑战"),Ee=(0,i.Uk)("查看结果"),qe=(0,i.Uk)("返回"),Ae=(0,i.aZ)({emits:["back"],setup:function(e){var t=(0,i.f3)("setting"),n=3;var o=(0,a.iH)({stopTime:function(){},startTime:function(){},getElapsedTime:function(){return""}}),r=(0,a.iH)({restart:function(){},stop:function(){}}),u=(0,a.iH)({currentLevel:0,showCorrect:function(){console.log("vColorsBox 未初始")},reset:function(){console.log("vColorsBox 未初始")},pause:function(){console.log("vColorsBox 未初始")},getGradeTitle:function(){return console.log("vColorsBox 未初始"),""}}),s=(0,a.iH)(!1),c=(0,a.iH)([]),d=(0,a.iH)("countDown"),f=Ne().level,v=(0,a.iH)(""),m=ae(n,d),g=m.countDown,p=m.countDownRestart,b=(0,a.Fl)((function(){return"play"===d.value})),h=(0,a.Fl)((function(){return"countDown"===d.value})),_=(0,a.Fl)((function(){return"finish"===d.value}));function w(){console.log("关卡时间到"),u.value.showCorrect(),y()}function y(e){v.value=e?"恭喜你完成了所有关卡！":"",u.value.pause(),o.value.stopTime(),r.value.stop(),c.value=[{value:t.challengerName||"",label:"挑战人"},{value:u.value.getGradeTitle(),label:"色感等级",rowClass:"value-em"},{value:String(u.value.currentLevel)+"关",label:"通过关数"},{value:t.isLimitTime?"限时挑战":"不限时挑战",label:"挑战模式"},{value:o.value.getElapsedTime(),label:"挑战用时"}],s.value=!0,d.value="finish"}function k(){u.value.reset(),p(),s.value=!1}function x(){y()}function C(){y(!0)}function j(){console.log("限时模式时间到"),y()}function M(){r.value.restart()}return(0,i.YP)(b,(function(e){e&&o.value.startTime()})),function(e,t){var n=(0,i.up)("j-button"),d=(0,i.up)("j-container");return(0,i.wg)(),(0,i.j4)(d,{class:"PlayContainer"},{header:(0,i.w5)((function(){return[(0,i._)("div",Re,[(0,i._)("div",Le,[(0,i._)("div",$e,[Be,(0,i.Wm)(We,{ref_key:"vGameTimeCountdown",ref:r,onTimeUp:w},null,512)])]),(0,i.Wm)(de,{class:"PlayContainer_header-column",ref_key:"vTimeCount",ref:o,onEnd:j},null,512),(0,i._)("div",Ge," 关卡："+(0,l.zw)((0,a.SU)(f)),1)])]})),footer:(0,i.w5)((function(){return[(0,a.SU)(b)?((0,i.wg)(),(0,i.j4)(n,{key:0,onClick:t[2]||(t[2]=function(e){return y()})},{default:(0,i.w5)((function(){return[Ye]})),_:1})):(0,a.SU)(_)?((0,i.wg)(),(0,i.j4)(n,{key:1,onClick:t[3]||(t[3]=function(e){return s.value=!0})},{default:(0,i.w5)((function(){return[Ee]})),_:1})):(0,i.kq)("",!0),(0,i.Wm)(n,{type:"info",onClick:t[4]||(t[4]=function(t){return e.$emit("back")})},{default:(0,i.w5)((function(){return[qe]})),_:1})]})),default:(0,i.w5)((function(){return[(0,i._)("div",Fe,[(0,a.SU)(h)?((0,i.wg)(),(0,i.iD)("div",Oe,(0,l.zw)((0,a.SU)(g)),1)):((0,i.wg)(),(0,i.j4)(Ze,{key:1,ref_key:"vColorsBox",ref:u,level:(0,a.SU)(f),"onUpdate:level":t[0]||(t[0]=function(e){return(0,a.dq)(f)?f.value=e:null}),errorReminder:"",onErrorSelect:x,onComplete:C,onNewStart:M},null,8,["level"]))]),(0,i.Wm)(we,{visible:s.value,"onUpdate:visible":t[1]||(t[1]=function(e){return s.value=e}),title:"挑战结果",completeMsg:v.value,list:c.value,confirmBtnText:"重新挑战",onConfirm:k},null,8,["visible","completeMsg","list"])]})),_:1})}}});n(301);const Je=Ae;var Ke=Je,Qe={class:"PlayContainer_header"},Ve={class:"PlayContainer_header-column"},Xe={class:"PlayContainer_header-left"},et=(0,i._)("div",{class:"tp-name"},"练习模式",-1),tt={class:"PlayContainer_header-column"},nt={class:"PlayContainer_body"},ot={key:0,class:"PlayContainer_countdown"},rt=(0,i.Uk)("结束练习"),it=(0,i.Uk)("查看结果"),at=(0,i.Uk)("返回"),lt=(0,i.aZ)({emits:["back"],setup:function(e){var t=3;var n=(0,a.iH)({stopTime:function(){},startTime:function(){},getElapsedTime:function(){return""}}),o=(0,a.iH)({restart:function(){},stop:function(){}}),r=(0,a.iH)({currentLevel:0,showCorrect:function(){},reset:function(){},pause:function(){},getGradeTitle:function(){return""}}),u=(0,a.iH)(!1),s=(0,a.iH)([]),c=(0,a.iH)("countDown"),d=Ne().level,f=(0,a.iH)(""),v=ae(t,c),m=v.countDown,g=v.countDownRestart,p=(0,a.Fl)((function(){return"play"===c.value})),b=(0,a.Fl)((function(){return"countDown"===c.value})),h=(0,a.Fl)((function(){return"finish"===c.value}));function _(){r.value.showCorrect()}function w(e){f.value=e?"恭喜你完成了所有关卡！":"",r.value.pause(),n.value.stopTime(),o.value.stop(),s.value=[{value:r.value.getGradeTitle(),label:"色感等级",rowClass:"value-em"},{value:String(r.value.currentLevel)+"关",label:"通过关数"},{value:n.value.getElapsedTime(),label:"练习用时"}],u.value=!0,c.value="finish"}function y(){r.value.reset(),g(),u.value=!1}function k(){r.value.showCorrect()}function x(){w(!0)}function C(){o.value.restart()}return(0,i.YP)(p,(function(e){e&&n.value.startTime()})),function(e,t){var c=(0,i.up)("j-button"),v=(0,i.up)("j-container");return(0,i.wg)(),(0,i.j4)(v,{class:"PlayContainer"},{header:(0,i.w5)((function(){return[(0,i._)("div",Qe,[(0,i._)("div",Ve,[(0,i._)("div",Xe,[et,(0,i.Wm)(We,{ref_key:"vGameTimeCountdown",ref:o,onTimeUp:_},null,512)])]),(0,i.Wm)(de,{class:"PlayContainer_header-column",ref_key:"vTimeCount",ref:n,isPractice:!0},null,512),(0,i._)("div",tt," 关卡："+(0,l.zw)((0,a.SU)(d)),1)])]})),footer:(0,i.w5)((function(){return[(0,a.SU)(p)?((0,i.wg)(),(0,i.j4)(c,{key:0,onClick:t[2]||(t[2]=function(e){return w()})},{default:(0,i.w5)((function(){return[rt]})),_:1})):(0,a.SU)(h)?((0,i.wg)(),(0,i.j4)(c,{key:1,onClick:t[3]||(t[3]=function(e){return u.value=!0})},{default:(0,i.w5)((function(){return[it]})),_:1})):(0,i.kq)("",!0),(0,i.Wm)(c,{type:"info",onClick:t[4]||(t[4]=function(t){return e.$emit("back")})},{default:(0,i.w5)((function(){return[at]})),_:1})]})),default:(0,i.w5)((function(){return[(0,i._)("div",nt,[(0,a.SU)(b)?((0,i.wg)(),(0,i.iD)("div",ot,(0,l.zw)((0,a.SU)(m)),1)):((0,i.wg)(),(0,i.j4)(Ze,{key:1,ref_key:"vColorsBox",ref:r,level:(0,a.SU)(d),"onUpdate:level":t[0]||(t[0]=function(e){return(0,a.dq)(d)?d.value=e:null}),onErrorSelect:k,onComplete:x,onNewStart:C},null,8,["level"]))]),(0,i.Wm)(we,{visible:u.value,"onUpdate:visible":t[1]||(t[1]=function(e){return u.value=e}),title:"练习结果",completeMsg:f.value,list:s.value,confirmBtnText:"重新练习",onConfirm:y},null,8,["visible","completeMsg","list"])]})),_:1})}}});const ut=lt;var st=ut,ct=(0,i.aZ)({props:{derection:{default:"left"}},setup:function(e){var t=e,n=(0,a.Fl)((function(){return"slide-"+t.derection}));return function(e,t){return(0,i.wg)(),(0,i.j4)(o.uT,{name:(0,a.SU)(n),"enter-active-class":"transition-active","leave-active-class":"transition-active"},{default:(0,i.w5)((function(){return[(0,i.WI)(e.$slots,"default")]})),_:3},8,["name"])}}});n(454);const dt=ct;var ft=dt,vt={class:"englishchallenge"},mt=(0,i._)("div",{class:"full-bg"},null,-1),gt=(0,i._)("div",{class:"copyright"},[(0,i._)("div",null,[(0,i.Uk)(" 版权:深圳市南山区第二外国语学校（集团）海德学校"),(0,i._)("p",null,"设计: 刘志勇")])],-1),pt=(0,i.aZ)({setup:function(e){var t=(0,a.iH)("StartContainer"),n=(0,a.iH)("left");(0,i.YP)(t,(function(e){n.value="StartContainer"===e?"right":"left"}));var o=(0,a.iH)({checkChallengerName:function(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){return[2,Promise.reject("未初始化")]}))}))}});function l(){return(0,r.mG)(this,void 0,void 0,(function(){return(0,r.Jh)(this,(function(e){return o.value.checkChallengerName().then((function(){t.value="PlayContainer"})).catch((function(e){})),[2]}))}))}function u(){t.value="PlayContainerPractice"}function s(){t.value="StartContainer"}var c=D("challengerName"),d=D("isLimitTime"),f=D("time"),v=(0,a.qj)({challengerName:c||"",isLimitTime:null===d||JSON.parse(d),time:f||"1"});return(0,i.JJ)("setting",v),function(e,r){return(0,i.wg)(),(0,i.iD)("div",vt,[mt,(0,i.Wm)(ft,{derection:n.value},{default:(0,i.w5)((function(){return[((0,i.wg)(),(0,i.j4)((0,i.LL)({StartContainer:ie,PlayContainer:Ke,PlayContainerPractice:st}[t.value]),{ref_key:"vStartContainer",ref:o,onStart:l,onStartPractice:u,onBack:s},null,512))]})),_:1},8,["derection"]),gt])}}});n(322);const bt=pt;var ht=bt,_t=(0,i.aZ)({props:{type:null},setup:function(e){return function(t,n){return(0,i.wg)(),(0,i.iD)("button",(0,i.dG)({class:["j-button",e.type]},t.$attrs),[(0,i.WI)(t.$slots,"default")],16)}}});n(837);const wt=_t;var yt=wt,kt=n(949),xt={class:"j-container"},Ct=(0,i._)("div",{class:"j-container_title"},[(0,i._)("img",{class:"logo",src:kt,alt:""}),(0,i._)("span",null," 颜色分辨力挑战 ")],-1),jt={class:"j-container_main"},Mt={class:"j-container_header"},Tt={class:"j-container_body"},St={class:"j-container_footer"},Ut=(0,i.aZ)({props:{title:null},setup:function(e){return function(e,t){return(0,i.wg)(),(0,i.iD)("div",xt,[Ct,(0,i._)("div",jt,[(0,i._)("div",Mt,[(0,i.WI)(e.$slots,"header")]),(0,i._)("div",Tt,[(0,i.WI)(e.$slots,"default")]),(0,i._)("div",St,[(0,i.WI)(e.$slots,"footer")])])])}}});n(119);const zt=Ut;var Pt=zt,Dt=(0,i.aZ)({emits:["update:value"],setup:function(e,t){var n=t.expose,o=t.emit;function r(e){o("update:value",e.target.value)}var l=(0,a.iH)({focus:function(){}});return n({focus:function(){l.value.focus()}}),function(e,t){return(0,i.wg)(),(0,i.iD)("input",(0,i.dG)({ref_key:"eIpt",ref:l,class:"j-input",type:"text"},e.$attrs,{onInput:r}),null,16)}}});n(126);const Zt=Dt;var Ht=Zt;n(765);(0,o.ri)(ht).component("j-button",yt).component("j-container",Pt).component("j-input",Ht).mount("#app")},154:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".j-button{border:0;color:#fff;background-color:#00b7ee;padding:.12rem .3rem;border-radius:1rem;line-height:1;outline:none;box-shadow:0 .01rem .04rem #929292;box-shadow:0 .04rem .06rem 0 rgba(2,25,44,.21);font-size:.18rem}.j-button:hover{background-color:#00b6eee7}.j-button:active{background-color:#00b0e4;color:#007294;text-shadow:0 .01rem 0 hsla(0,0%,100%,.3);text-decoration:none;box-shadow:inset 0 .01rem .03rem rgba(0,0,0,.2)}.j-button.green{background-color:#67c23a}.j-button.green:hover{background-color:#85ce61}.j-button.green:active{background-color:#3db700;color:#309100}.j-button.danger{background-color:#ff4351}.j-button.danger:hover{background-color:#ff7680}.j-button.danger:active{background-color:#f64c59;color:#ff1022}.j-button.info{background-color:#a6a6a6}.j-button.info:hover{background-color:#a6a6a6e7}.j-button.info:active{background-color:#9e9e9e;color:#464646}",""]),t["default"]=l},872:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".ColorsBox{padding-top:100%;position:relative}.ColorsBox_container{position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%}.ColorsBox_container .zoom{animation:zoom 1s ease-out;z-index:1}@keyframes zoom{0%{transform:scale(1)}to{transform:scale(1.5)}}",""]),t["default"]=l},459:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".GridIItem{float:left;position:relative}.GridIItem-el{position:absolute;top:.05rem;bottom:.05rem;left:.05rem;right:.05rem;border-radius:12%}",""]),t["default"]=l},683:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".j-container{max-width:6rem;width:95%;-webkit-box-sizing:border-box;box-sizing:border-box;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:1}.j-container_title{position:absolute;top:-.9rem;width:100%;text-align:center;color:#f77635;font-size:.36rem;z-index:1}.j-container_title .logo{width:.6rem;height:.6rem;vertical-align:middle}.j-container_title span{vertical-align:middle}.j-container_main{border-radius:.3rem;background-color:#fff;box-shadow:0 .1rem .12rem 0 rgba(2,25,44,.26);border:5px solid rgba(124,225,255,.55)}.j-container_body{margin:0 .45rem}.j-container_footer{padding:.28rem 0 .4rem;text-align:center}",""]),t["default"]=l},308:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".j-input{width:2rem;height:.35rem;border-radius:.05rem;padding:0 .08rem;box-sizing:border-box;color:#555;border:1px solid #bfbfbf}.j-input:focus-visible{outline:.01rem auto #40a9ff}",""]),t["default"]=l},118:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".j-radio_ipt{display:none}.j-radio_view{display:inline-block;width:.15rem;height:.15rem;border-radius:100%;vertical-align:middle;box-sizing:border-box;border:1px solid #bfbfbf;box-shadow:inset 0 0 0 .02rem #fff;margin-right:.06rem}.j-radio_ipt:checked+.j-radio_view{background-color:#555}.j-radio_label{vertical-align:middle}",""]),t["default"]=l},196:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".slide-left-enter-from,.slide-right-leave-to{opacity:0;transform:translate3d(-40%,-50%,0)!important}.slide-left-leave-to,.slide-right-enter-from{opacity:0;transform:translate3d(-60%,-50%,0)!important}",""]),t["default"]=l},241:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".TransitionFade-enter-from,.TransitionFade-leave-to{opacity:0}",""]),t["default"]=l},610:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".TransitionZoom-enter-from{opacity:0;transform:translate(-50%,-50%) scale(1.2)!important}.TransitionZoom-leave-to{opacity:0;transform:translate(-50%,-50%) scale(.8)!important}",""]),t["default"]=l},816:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".copyright{position:fixed;bottom:.1rem;left:0;right:0;text-align:center}.copyright div{display:inline-block;background-color:hsla(0,0%,100%,.8);padding:.1rem .15rem;border-radius:1rem;color:#6c6a6a}.copyright p{padding:0;margin:0}",""]),t["default"]=l},983:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".j-mask{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:9}.j-dialog{width:3.2rem;position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:10}.j-dialog-box{padding:.24rem .4rem .32rem;position:relative;background-color:#fff;border-radius:.3rem}.j-dialog_title{line-height:.22rem;text-align:center;padding-bottom:.28rem;font-weight:700;font-size:.24rem;color:#000}",""]),t["default"]=l},814:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".emergency[data-v-d5d59aac]{color:red}",""]),t["default"]=l},986:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=n(667),u=n.n(l),s=new URL(n(369),n.b),c=a()(r()),d=u()(s);c.push([e.id,".ResultDialog{width:3.6rem}.ResultDialog_ornament{background:url("+d+") no-repeat 0 0;background-size:5.1rem auto;width:3.29rem;height:2.51rem;position:absolute;top:-2.48rem;right:0}.ResultDialog_body{font-size:.18rem;line-height:.22rem;color:#555}.ResultDialog_body .row{display:flex;padding:.1rem 0}.ResultDialog_body .completeMsg{text-align:center;display:block;color:#67c23a}.ResultDialog_body .row_label{width:50%;text-align:right;padding-right:.1rem;line-height:2}.ResultDialog_body .row_value{flex:1;line-height:2;color:#333}.ResultDialog_body .value-em{font-weight:700}.ResultDialog_body .btns{text-align:center;padding:.2rem 0 .04rem}.ResultDialog_body .btns .j-button{width:1rem;padding:.12rem 0}.ResultDialog_body .btns .j-button+.j-button{margin-left:.2rem}",""]),t["default"]=c},80:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=n(667),u=n.n(l),s=new URL(n(369),n.b),c=a()(r()),d=u()(s);c.push([e.id,".setting-dialog{width:4rem}.setting-dialog_ornament{background:url("+d+") no-repeat 0 100%;background-size:5.1rem auto;width:2.22rem;height:2.12rem;position:absolute;top:-1.93rem;right:.16rem;z-index:1}.setting-dialog_body{font-size:.18rem;line-height:.22rem;color:#555}.setting-dialog_body .row{display:flex;padding:.1rem 0;position:relative}.setting-dialog_body .row_label{width:.9rem;text-align:right;padding-right:.1rem;line-height:2}.setting-dialog_body .row_value{flex:1;line-height:2;font-size:.16rem}.setting-dialog_body .time-ipt{width:.9rem;margin-right:.1rem;vertical-align:middle}.setting-dialog_body .sub{vertical-align:middle}.setting-dialog_body .j-radio+.j-radio{padding-left:.1rem}.setting-dialog_body .btns{text-align:center;padding:.2rem 0 .04rem}.setting-dialog_body .btns .j-button{margin:0 .3rem}.setting-dialog_body .errmsg{color:#f60202;text-align:center;font-size:.16rem;top:.45rem;position:absolute;width:100%;display:none}.setting-dialog_body .row.err .j-input{border-color:#f60202}.setting-dialog_body .row.err .j-input:focus-visible{outline-color:#f60202}.setting-dialog_body .row.err .errmsg{display:block}",""]),t["default"]=c},736:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=n(667),u=n.n(l),s=new URL(n(369),n.b),c=a()(r()),d=u()(s);c.push([e.id,".StartContainer .j-button{margin:0 .3rem}.StartContainer_header{font-size:.24rem;line-height:.22rem;color:#00b7ee;margin:.26rem 0;text-align:center;position:relative}.StartContainer_header .set{color:#00b7ee;position:absolute;top:-.02rem;right:.5rem;line-height:1;background:url("+d+") no-repeat 79.792% 22.197%;background-size:5.1rem auto;width:.3rem;height:.28rem;cursor:pointer}.StartContainer_header .set:hover{opacity:.7}.StartContainer_body{max-height:3.8rem;overflow:auto;box-sizing:border-box;padding:.18rem;border:1px solid #b0eafb;line-height:.3rem;color:#555;font-size:.2rem;text-indent:.4rem}",""]),t["default"]=c},741:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".TimoCount{font-size:.48rem;font-weight:700;color:#00b7ee;text-align:center}",""]),t["default"]=l},991:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,".PlayContainer .j-button{width:1.2rem;padding:.12rem 0}.PlayContainer .j-button+.j-button{margin-left:.6rem}.PlayContainer .err{color:#f60202}.PlayContainer_header{font-size:.24rem;line-height:.3rem;color:#00b7ee;margin:.26rem 0;text-align:center;position:relative;display:flex;justify-content:space-between;padding:0 .3rem}.PlayContainer_header-column{display:flex;align-items:flex-end;align-items:center}.PlayContainer_body{min-height:1.8rem;box-sizing:border-box;background-color:#fff;line-height:.3rem;color:#555;font-size:.2rem;position:relative}.PlayContainer_countdown{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:1.3rem;height:1.3rem;box-sizing:border-box;border:10px solid #7ce1ff;border-radius:50%;font-size:.6rem;color:#00b7ee;text-align:center;line-height:1.8}.PlayContainer_input{height:1.8rem;line-height:1.7rem;font-size:.48rem;text-align:center;outline:none;background-color:#fff;padding-bottom:.1rem;box-sizing:border-box;width:100%;border:none}",""]),t["default"]=l},317:function(e,t,n){"use strict";n.r(t);var o=n(81),r=n.n(o),i=n(645),a=n.n(i),l=a()(r());l.push([e.id,"html{-webkit-tap-highlight-color:transparent}body{background-color:#edfdff;margin:0}body,input{color:#333;font:.14rem/1.2 Microsoft Yahei,sans-serif,arial,SimSun,tahoma,Srial,helvetica}.transition-active{transition:.3s cubic-bezier(.55,0,.1,1);transition-property:opacity,transform}.full-bg{position:fixed;top:0;right:0;left:0;bottom:0;background-image:linear-gradient(138deg,#e9faff,#afedff)}",""]),t["default"]=l},837:function(e,t,n){var o=n(154);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("00828842",o,!0,{sourceMap:!1,shadowMode:!1})},501:function(e,t,n){var o=n(872);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("689ea817",o,!0,{sourceMap:!1,shadowMode:!1})},934:function(e,t,n){var o=n(459);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("0b0d0013",o,!0,{sourceMap:!1,shadowMode:!1})},119:function(e,t,n){var o=n(683);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("7df50cc1",o,!0,{sourceMap:!1,shadowMode:!1})},126:function(e,t,n){var o=n(308);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("9111f1e6",o,!0,{sourceMap:!1,shadowMode:!1})},190:function(e,t,n){var o=n(118);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("13a30e82",o,!0,{sourceMap:!1,shadowMode:!1})},454:function(e,t,n){var o=n(196);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("a1c9c32c",o,!0,{sourceMap:!1,shadowMode:!1})},82:function(e,t,n){var o=n(241);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("10eb973a",o,!0,{sourceMap:!1,shadowMode:!1})},980:function(e,t,n){var o=n(610);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("29349828",o,!0,{sourceMap:!1,shadowMode:!1})},322:function(e,t,n){var o=n(816);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("c5ef9c1c",o,!0,{sourceMap:!1,shadowMode:!1})},506:function(e,t,n){var o=n(983);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("7b9bfbab",o,!0,{sourceMap:!1,shadowMode:!1})},767:function(e,t,n){var o=n(814);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("4c8b2c8c",o,!0,{sourceMap:!1,shadowMode:!1})},636:function(e,t,n){var o=n(986);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("5a17efdb",o,!0,{sourceMap:!1,shadowMode:!1})},358:function(e,t,n){var o=n(80);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("723819d0",o,!0,{sourceMap:!1,shadowMode:!1})},521:function(e,t,n){var o=n(736);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("641f165a",o,!0,{sourceMap:!1,shadowMode:!1})},293:function(e,t,n){var o=n(741);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("787e078e",o,!0,{sourceMap:!1,shadowMode:!1})},301:function(e,t,n){var o=n(991);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("8fea4c3e",o,!0,{sourceMap:!1,shadowMode:!1})},428:function(e,t,n){var o=n(317);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var r=n(402).Z;r("1339472f",o,!0,{sourceMap:!1,shadowMode:!1})},765:function(){let e;function t(t,n){clearTimeout(e),e=setTimeout(t,n)}let n=function(){return window.innerWidth};window.innerWidth>window.screen.width&&(n=function(){return window.screen.width});var o=document.documentElement.style;function r(){var e=n();e&&(e>500?e=500:e<320&&(e=320),o.fontSize=.2*e+"px")}addEventListener("resize",(()=>{t(r,400)})),r()},369:function(e,t,n){"use strict";e.exports=n.p+"assets/img/icons.cba4bf68.png"},949:function(e,t,n){"use strict";e.exports=n.p+"assets/img/logo.8d1bf152.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var l=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){n.b=document.baseURI||self.location.href;var e={826:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],l=o[1],u=o[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(u)var c=u(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[a[s]]=0;return n.O(c)},o=self["webpackChunkhello_world2"]=self["webpackChunkhello_world2"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(26)}));o=n.O(o)})();