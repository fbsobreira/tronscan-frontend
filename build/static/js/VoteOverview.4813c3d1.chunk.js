(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1499:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.StickyContainer=t.Sticky=void 0;var a=o(n(1555)),r=o(n(1556));function o(e){return e&&e.__esModule?e:{default:e}}t.Sticky=a.default,t.StickyContainer=r.default,t.default=a.default},1555:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),o=l(r),s=l(n(16)),c=l(n(1));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=a=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.state={isSticky:!1,wasSticky:!1,style:{}},a.handleContainerEvent=function(e){var t=e.distanceFromTop,n=e.distanceFromBottom,r=e.eventSource,o=a.context.getParent(),s=!1;a.props.relative&&(s=r!==o,t=-(r.scrollTop+r.offsetTop)+a.placeholder.offsetTop);var c=a.placeholder.getBoundingClientRect(),l=a.content.getBoundingClientRect().height,i=n-a.props.bottomOffset-l,u=!!a.state.isSticky,d=s?u:t<=-a.props.topOffset&&n>-a.props.bottomOffset;n=(a.props.relative?o.scrollHeight-o.scrollTop:n)-l;var m=d?{position:"fixed",top:i>0?a.props.relative?o.offsetTop-o.offsetParent.scrollTop:0:i,left:c.left,width:c.width}:{};a.props.disableHardwareAcceleration||(m.transform="translateZ(0)"),a.setState({isSticky:d,wasSticky:u,distanceFromTop:t,distanceFromBottom:n,calculatedHeight:l,style:m})},i(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"componentWillMount",value:function(){if(!this.context.subscribe)throw new TypeError("Expected Sticky to be mounted within StickyContainer");this.context.subscribe(this.handleContainerEvent)}},{key:"componentWillUnmount",value:function(){this.context.unsubscribe(this.handleContainerEvent)}},{key:"componentDidUpdate",value:function(){this.placeholder.style.paddingBottom=this.props.disableCompensation?0:(this.state.isSticky?this.state.calculatedHeight:0)+"px"}},{key:"render",value:function(){var e=this,t=o.default.cloneElement(this.props.children({isSticky:this.state.isSticky,wasSticky:this.state.wasSticky,distanceFromTop:this.state.distanceFromTop,distanceFromBottom:this.state.distanceFromBottom,calculatedHeight:this.state.calculatedHeight,style:this.state.style}),{ref:function(t){e.content=s.default.findDOMNode(t)}});return o.default.createElement("div",null,o.default.createElement("div",{ref:function(t){return e.placeholder=t}}),t)}}]),t}();u.propTypes={topOffset:c.default.number,bottomOffset:c.default.number,relative:c.default.bool,children:c.default.func.isRequired},u.defaultProps={relative:!1,topOffset:0,bottomOffset:0,disableCompensation:!1,disableHardwareAcceleration:!1},u.contextTypes={subscribe:c.default.func,unsubscribe:c.default.func,getParent:c.default.func},t.default=u},1556:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),s=i(o),c=i(n(1)),l=i(n(1557));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=a=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.events=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],a.subscribers=[],a.rafHandle=null,a.subscribe=function(e){a.subscribers=a.subscribers.concat(e)},a.unsubscribe=function(e){a.subscribers=a.subscribers.filter(function(t){return t!==e})},a.notifySubscribers=function(e){if(!a.framePending){var t=e.currentTarget;a.rafHandle=(0,l.default)(function(){a.framePending=!1;var e=a.node.getBoundingClientRect(),n=e.top,r=e.bottom;a.subscribers.forEach(function(e){return e({distanceFromTop:n,distanceFromBottom:r,eventSource:t===window?document.body:a.node})})}),a.framePending=!0}},a.getParent=function(){return a.node},u(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.PureComponent),r(t,[{key:"getChildContext",value:function(){return{subscribe:this.subscribe,unsubscribe:this.unsubscribe,getParent:this.getParent}}},{key:"componentDidMount",value:function(){var e=this;this.events.forEach(function(t){return window.addEventListener(t,e.notifySubscribers)})}},{key:"componentWillUnmount",value:function(){var e=this;this.rafHandle&&(l.default.cancel(this.rafHandle),this.rafHandle=null),this.events.forEach(function(t){return window.removeEventListener(t,e.notifySubscribers)})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",a({},this.props,{ref:function(t){return e.node=t},onScroll:this.notifySubscribers,onTouchStart:this.notifySubscribers,onTouchMove:this.notifySubscribers,onTouchEnd:this.notifySubscribers}))}}]),t}();d.childContextTypes={subscribe:c.default.func,unsubscribe:c.default.func,getParent:c.default.func},t.default=d},1557:function(e,t,n){(function(t){for(var a=n(279),r="undefined"===typeof window?t:window,o=["moz","webkit"],s="AnimationFrame",c=r["request"+s],l=r["cancel"+s]||r["cancelRequest"+s],i=0;!c&&i<o.length;i++)c=r[o[i]+"Request"+s],l=r[o[i]+"Cancel"+s]||r[o[i]+"CancelRequest"+s];if(!c||!l){var u=0,d=0,m=[];c=function(e){if(0===m.length){var t=a(),n=Math.max(0,1e3/60-(t-u));u=n+t,setTimeout(function(){var e=m.slice(0);m.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return m.push({handle:++d,callback:e,cancelled:!1}),d},l=function(e){for(var t=0;t<m.length;t++)m[t].handle===e&&(m[t].cancelled=!0)}}e.exports=function(e){return c.call(r,e)},e.exports.cancel=function(){l.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=c,e.cancelAnimationFrame=l}}).call(this,n(32))},2858:function(e,t,n){var a=n(129),r=n(2859);e.exports=function(e,t){return e&&e.length?r(e,a(t,2)):0}},2859:function(e,t){e.exports=function(e,t){for(var n,a=-1,r=e.length;++a<r;){var o=t(e[a]);void 0!==o&&(n=void 0===n?o:n+o)}return n}},2860:function(e,t,n){var a=n(2861);e.exports=function(e){return a(e)&&e!=+e}},2861:function(e,t,n){var a=n(109),r=n(75),o="[object Number]";e.exports=function(e){return"number"==typeof e||r(e)&&a(e)==o}},2862:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTimeDifference=t.zeroPad=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=c(n(0)),s=c(n(1));function c(e){return e&&e.__esModule?e:{default:e}}var l=t.zeroPad=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===t)return e;var n=String(e);return n.length>=t?n:("0".repeat(t)+n).slice(-1*t)},i=t.getTimeDifference=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.now,a=void 0===n?Date.now:n,r=t.precision,o=void 0===r?0:r,s=t.controlled,c=void 0!==s&&s,l="string"===typeof e?new Date(e):e,i=parseInt(1e3*(Math.max(0,c?l:l-a())/1e3).toFixed(Math.max(0,Math.min(20,o))),10),u=i/1e3;return{total:i,days:Math.floor(u/86400),hours:Math.floor(u/3600%24),minutes:Math.floor(u/60%60),seconds:Math.floor(u%60),milliseconds:Number((u%1*1e3).toFixed()),completed:i<=0}},u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));d.call(n);var r=n.props,o=r.date,s=r.now,c=r.precision,l=r.controlled;return n.mounted=!1,n.state=a({},i(o,{now:s,precision:c,controlled:l})),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){this.mounted=!0,this.props.controlled||(this.interval=setInterval(this.tick,this.props.intervalDelay))}},{key:"componentWillReceiveProps",value:function(e){var t=e.date,n=e.now,a=e.precision,r=e.controlled;this.setDeltaState(i(t,{now:n,precision:a,controlled:r}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.clearInterval()}},{key:"setDeltaState",value:function(e){!this.state.completed&&e.completed&&(this.clearInterval(),this.props.onComplete&&this.props.onComplete(e)),this.mounted&&this.setState(a({},e))}},{key:"getFormattedDelta",value:function(){var e=this.state,t=e.days,n=e.hours,a=this.state,r=a.minutes,o=a.seconds,s=this.props,c=s.daysInHours,i=s.zeroPadLength;return c?(n=l(n+24*t,i),t=null):n=l(n,Math.min(2,i)),{days:t,hours:n,minutes:l(r,Math.min(2,i)),seconds:l(o,Math.min(2,i))}}},{key:"clearInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){clearInterval(this.interval),delete this.interval})},{key:"render",value:function(){var e=this.getFormattedDelta();if(this.props.renderer)return this.props.renderer(a({},this.props,this.state,e));if(this.state.completed&&this.props.children){var t=a({},this.props,this.state,e);return delete t.children,o.default.cloneElement(this.props.children,{countdown:t})}var n=e.days,r=e.hours,s=e.minutes,c=e.seconds;return o.default.createElement("span",null,n,null!=n?":":"",r,":",s,":",c)}}]),t}(),d=function(){var e=this;this.tick=function(){var t=e.props,n=t.date,r=t.now,o=t.precision,s=t.controlled,c=t.onTick,l=i(n,{now:r,precision:o,controlled:s});e.setDeltaState(a({},l)),c&&l.total>0&&c(l)}};t.default=u,u.propTypes={date:s.default.oneOfType([s.default.instanceOf(Date),s.default.string,s.default.number]).isRequired,daysInHours:s.default.bool,zeroPadLength:s.default.number,controlled:s.default.bool,intervalDelay:s.default.number,precision:s.default.number,children:s.default.any,renderer:s.default.func,now:s.default.func,onTick:s.default.func,onComplete:s.default.func},u.defaultProps={daysInHours:!1,zeroPadLength:2,controlled:!1,intervalDelay:1e3,precision:0,children:null}},3221:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return G});var a,r,o=n(7),s=n(104),c=n.n(s),l=n(33),i=n.n(l),u=n(2),d=n.n(u),m=n(5),f=n(2858),p=n.n(f),h=n(2860),v=n.n(h),b=n(14),g=n(15),y=n(25),E=n(24),w=n(26),x=n(17),_=n(3),O=n(0),k=n.n(O),N=n(18),S=n(10),j=n(2862),C=n.n(j),T=n(1499),V=n(30),P=n(12),M=n(81),D=n(53),F=n.n(D),I=n(11),L=n(20),R=n(43),B=n(51),H=n(2490),A=n.n(H),W=n(28),z=n(280),U=n(269),q=n(131),K=(n(19),n(154));function J(e){var t=e.value,n=e.arrow,a=void 0!==n&&n;return t>0?k.a.createElement("span",{className:"text-success"},k.a.createElement("span",{className:"mr-1"},"+",t),a&&k.a.createElement("i",{className:"fa fa-arrow-up"})):t<0?k.a.createElement("span",{className:"text-danger"},k.a.createElement("span",{className:"mr-1"},t),a&&k.a.createElement("i",{className:"fa fa-arrow-down"})):k.a.createElement("span",null,"-")}var G=(a=Object(V.connect)(function(e){return{account:e.app.account,tokenBalances:e.account.tokens,wallet:e.wallet,flags:e.app.flags,voteList:e.voting.voteList,voteTimer:e.voting.voteTimer,walletType:e.app.wallet,isRightText:e.app.isRightText}},{login:L.r,reloadWallet:R.c,loadVoteTimer:U.c}),Object(K.a)(r=Object(S.h)(r=Object(z.a)(r=a(r=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(y.a)(this,Object(E.a)(t).call(this))).setVote=function(t,n){var a=e.state.votes;""!==n&&(n=parseInt(n,10),(n=v()(n)?"":n)<0&&(n=0));var r=e.getVoteStatus().votesAvailable;n>(r+=a[t]||0)&&(n=r),a[t]=n,e.setState({votes:a})},e.getVoteStatus=function(){var t=e.props.wallet,n=e.state.votes,a=0;t.isOpen&&(a=t.current.frozenTrx/I.n);var r=p()(Object.values(n),function(e){return parseInt(e,10)||0}),o=a-r,s=0;return o>0?s=1:o<0&&(s=-1),0===a&&(s=-2),{trxBalance:a,votesSpend:r,votesAvailable:o,spendAll:r>0&&0===o,voteState:s,votePercentage:r/a*100}},e.enableVoting=function(){e.setState({votingEnabled:!0})},e.loadVoteList=Object(m.a)(d.a.mark(function t(){var n;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.getVotesList();case 2:n=t.sent,e.setState({votesList:n});case 4:case"end":return t.stop()}},t)})),e.loadVoteTimer=Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.props.loadVoteTimer();case 1:case"end":return t.stop()}},t)})),e.loadVotes=Object(m.a)(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return 0===e.props.voteList.length&&e.setState({loading:!0}),t.next=4,e.loadVoteList();case 4:e.setState({loading:!1});case 5:case"end":return t.stop()}},t)})),e.loadCurrentVotes=function(){var t=Object(m.a)(d.a.mark(function t(n){var a,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.getAccountVotes(n);case 2:a=t.sent,r=a.votes,e.setState({votes:r});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.onSearchChange=function(t){e.setState({searchCriteria:i()(t)})},e.notSignedIn=function(){e.setState({goSignedIn:!0})},e.resetVotes=function(){e.setState({votes:{}})},e.cancelVotes=function(){e.loadCurrentVotes(e.props.account.address),e.setState({votingEnabled:!1,searchCriteria:""})},e.hideModal=function(){e.setState({modal:null})},e.submitVotes=Object(m.a)(d.a.mark(function t(){var n,a,r,o,s,c,l,i,u,m,f,p,h,v,b,g,y;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(n=e.props.account,a=e.state.votes,e.setState({submittingVotes:!0}),o={},s=e.props.tronWeb(),c=e.props.account.tronWeb,l=0,i=Object.keys(a);l<i.length;l++)u=i[l],o[u]=parseInt(a[u],10);if("ACCOUNT_LEDGER"!==e.props.walletType.type){t.next=24;break}return t.prev=8,t.next=11,s.transactionBuilder.vote(o,n.address).catch(function(e){return!1});case 11:return m=t.sent,t.next=14,Object(q.b)(m,s);case 14:f=t.sent,p=f.result,r=p,t.next=22;break;case 19:t.prev=19,t.t0=t.catch(8),console.error("error",t.t0);case 22:t.next=47;break;case 24:if("ACCOUNT_PRIVATE_KEY"!==e.props.walletType.type){t.next=32;break}return t.next=27,x.a.voteForWitnesses(n.address,o)(n.key);case 27:h=t.sent,v=h.success,r=v,t.next=47;break;case 32:if("ACCOUNT_TRONLINK"!==e.props.walletType.type){t.next=47;break}return t.prev=33,t.next=36,c.transactionBuilder.vote(o,n.address).catch(function(e){return!1});case 36:return b=t.sent,t.next=39,Object(q.b)(b,c);case 39:g=t.sent,y=g.result,r=y,t.next=47;break;case 44:t.prev=44,t.t1=t.catch(33),console.error(t.t1);case 47:r?(setTimeout(function(){return e.props.reloadWallet()},1200),setTimeout(function(){return e.setState({votesSubmitted:!1})},5e3),e.setState({votesSubmitted:!0,submittingVotes:!1,votingEnabled:!1,modal:k.a.createElement(F.a,{success:!0,title:Object(_.c)("submissing_vote_message_title"),onConfirm:e.hideModal},Object(_.c)("submissing_vote_message_0"),k.a.createElement("br",null),Object(_.c)("submissing_vote_message_1"))})):e.setState({votesSubmitted:!1,submittingVotes:!1,votingEnabled:!1,modal:k.a.createElement(F.a,{danger:!0,title:Object(_.c)("error"),onConfirm:e.hideModal},Object(_.c)("submitting_vote_error_message"))});case 48:case"end":return t.stop()}},t,null,[[8,19],[33,44]])})),e.state={privateKey:"",votingEnabled:!1,votesSubmitted:!1,submittingVotes:!1,loading:!1,votes:{},searchCriteria:"",modal:null,viewStats:!1,colors:A()("mpn65",20),votesList:{},liveVotes:null,goSignedIn:!1},e}return Object(w.a)(t,e),Object(g.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.account.isLoggedIn&&this.props.account.address!==e.account.address&&this.loadCurrentVotes(this.props.account.address)}},{key:"componentDidMount",value:function(){var e=Object(m.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(t=this.props.account).isLoggedIn&&(this.props.reloadWallet(),this.loadCurrentVotes(t.address)),e.next=4,this.loadVotes();case 4:return e.next=6,this.loadVoteTimer();case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderVoteStatus",value:function(){var e=this.getVoteStatus(),t=e.votesAvailable;switch(e.voteState){case 0:return k.a.createElement("span",{className:"text-success"},Object(_.c)("all_votes_are_used_message"));case 1:return k.a.createElement("span",null,Object(_.c)("votes_remaining_message"),":\xa0",k.a.createElement("b",null,k.a.createElement(S.c,{value:t})));case-1:return k.a.createElement("span",{className:"text-danger"},Object(_.c)("to_much_votes_massage"));case-2:return k.a.createElement("span",{className:"text-danger"},Object(_.c)("need_min_trx_to_vote_message"))}}},{key:"renderVotingBar",value:function(){var e=this,t=this.state,n=t.votingEnabled,a=t.votesSubmitted,r=t.submittingVotes,o=this.props,s=o.intl,c=o.account,l=this.getVoteStatus().trxBalance;return c.isLoggedIn?a?k.a.createElement(P.a,{color:"success",className:"text-center m-0"},Object(_.c)("thanks_submitting_vote_message")):n&&l<=0?k.a.createElement("div",{className:"text-center"},Object(_.c)("warning_votes")," ",k.a.createElement(B.a,{to:"/account",className:"text-primary"},Object(_.c)("account_page"))):r?k.a.createElement("div",{className:"d-flex justify-content-center p-3",style:{lineHeight:"36px"}},k.a.createElement(M.a,{width:160})):n?k.a.createElement("div",{className:"d-flex flex-wrap flex-sm-nowrap",style:{lineHeight:"36px"}},k.a.createElement("div",{className:"d-flex"},k.a.createElement("div",{style:{width:"35px",height:"35px",paddingLeft:"10px"}},k.a.createElement("i",{className:"fa fa-search"})),k.a.createElement("input",{style:{background:"#F3F3F3"},type:"text",className:"form-control",placeholder:s.formatMessage({id:"search"}),onChange:function(t){return e.onSearchChange(t.target.value)}})),k.a.createElement("div",{className:"ml-auto"},this.renderVoteStatus()),k.a.createElement("div",{className:"ml-2 mt-2 ml-sm-auto mt-sm-0"},k.a.createElement("button",{className:"btn btn-danger ml-auto _cancel",onClick:this.cancelVotes},Object(_.c)("cancel")),k.a.createElement("button",{className:"btn btn-warning ml-1 _reset",onClick:this.resetVotes},Object(_.c)("reset")),k.a.createElement("button",{className:"btn btn-success ml-1 _submit",onClick:this.submitVotes},Object(_.c)("submit_votes")))):k.a.createElement("div",{className:"text-center"},k.a.createElement("a",{className:"",onClick:this.enableVoting,style:{color:"#C23631"}},Object(_.c)("click_to_start_voting"))):k.a.createElement("div",{className:"text-center"},Object(_.c)("open_wallet_start_voting_message"))}},{key:"renderVotingBarFalse",value:function(){var e=this.props,t=(e.intl,e.account),n=this.state.goSignedIn;if(!t.isLoggedIn)return k.a.createElement("div",{className:"text-center"},n?k.a.createElement("span",{style:{color:"#333333"}},Object(_.c)("not_signed_in")):k.a.createElement("a",{href:"javascript:;",onClick:this.notSignedIn},Object(_.c)("click_to_start_voting")))}},{key:"getNextCycle",value:function(){return this.props.voteTimer}},{key:"render",value:function(){var e=this,t=this.state,n=t.votingEnabled,a=t.votes,r=t.votesList,s=t.loading,l=t.modal,u=t.viewStats,d=t.colors,m=t.searchCriteria,f=this.props,p=f.wallet,h=f.isRightText,v=r.data||[],b=v.map(function(e,t){return Object.assign({rank:t},e)});""!==m&&(b=c()(v,function(e){return-1!==i()(e.url.toLowerCase()).indexOf(m.toLowerCase())||e.name.length>0&&-1!==i()(e.name.toLowerCase()).indexOf(m.toLowerCase())}));var g=r.totalVotes||0,y=r.fastestRise||{},E=this.getVoteStatus().trxBalance,w=Math.ceil(E/20);return k.a.createElement("main",{className:"container header-overlap _voteOverview"},l,k.a.createElement("div",{className:"row _badge"},k.a.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},k.a.createElement("div",{className:"card h-100 text-left widget-icon bg-line_red bg-image_nextRound"},k.a.createElement("div",{className:"card-body"},k.a.createElement("h3",{className:"text-primary"},k.a.createElement(C.a,{date:this.getNextCycle(),daysInHours:!0,onComplete:function(){e.loadVotes(),e.loadVoteTimer()}})),Object(_.c)("next_round")))),k.a.createElement("div",{className:"col-md-4 mt-3 mt-md-0 position-relative"},k.a.createElement("div",{className:"card h-100 widget-icon bg-line_green bg-image_totalVotes"},k.a.createElement("div",{className:"card-body text-left"},k.a.createElement("h3",{className:"text-secondary"},k.a.createElement(S.c,{value:g})),Object(_.c)("total_votes")))),k.a.createElement("div",{className:"col-md-4 mt-3 mt-md-0"},k.a.createElement("div",{className:"card h-100 widget-icon bg-line_yellow bg-image_mostRank"},k.a.createElement("div",{className:"card-body text-left"},k.a.createElement("h3",{className:"text-success"},k.a.createElement(J,{value:y.change_cycle,arrow:!0})),k.a.createElement("div",{className:(h?"flex-row-reverse justify-content-end":"")+" d-flex"},k.a.createElement("div",{className:"_ranks mr-2",style:{whiteSpace:"nowrap"}},Object(_.c)("most_ranks")),k.a.createElement("div",{className:"",style:h?{maxWidth:"110px"}:{}},Math.abs(y.change_cycle)?k.a.createElement(N.a,{address:y.address},y.name||y.url):k.a.createElement("span",{style:{color:"#999999"}},"-"))))))),s?k.a.createElement("div",{className:"card mt-2"},k.a.createElement(M.b,null,Object(_.c)("loading_super_representatives"))):k.a.createElement("div",{className:"row mt-2"},k.a.createElement("div",{className:"col-md-12"},k.a.createElement(T.StickyContainer,null,k.a.createElement("div",{className:"card mt-1"},p.isOpen&&k.a.createElement(T.Sticky,null,function(t){var n=t.style;return k.a.createElement("div",{style:Object(o.a)({borderBottom:"1px solid #D8D8D8",zIndex:100},n),className:"card-body bg-white p-3"},e.renderVotingBar())}),!p.isOpen&&k.a.createElement(T.Sticky,null,function(t){var n=t.style;return k.a.createElement("div",{style:Object(o.a)({borderBottom:"1px solid #D8D8D8",zIndex:100},n),className:"card-body bg-white p-3"},e.renderVotingBarFalse())}),k.a.createElement("div",{className:"table-responsive table-scroll"},k.a.createElement("table",{className:"table vote-table table-hover m-0"},k.a.createElement("thead",{className:"thead-light"},k.a.createElement("tr",null,k.a.createElement("th",{className:"text-center",style:{width:50}},"#"),k.a.createElement("th",null,Object(_.c)("name")),k.a.createElement("th",{className:"text-right",style:{width:150}},Object(_.c)("votes")),k.a.createElement("th",{className:"text-right",style:{width:150}},Object(_.c)("live")),k.a.createElement("th",{className:"text-right",style:{width:100}},Object(_.c)("percentage")),n&&E>0&&k.a.createElement("th",{style:{width:200}},Object(_.c)("your_vote")))),k.a.createElement("tbody",null,m.length>0&&0===b.length&&k.a.createElement("tr",null,k.a.createElement("td",{colSpan:"6",className:"p-3 text-center"},"No Super Representatives found for ",k.a.createElement("b",null,m))),b.map(function(t){return k.a.createElement("tr",{key:t.address},u?k.a.createElement("th",{className:"font-weight-bold pt-4 text-center",style:{backgroundColor:"#"+d[t.rank]}},t.lastRanking):k.a.createElement("th",{className:"font-weight-bold pt-4 text-center"},t.lastRanking),k.a.createElement("td",{className:"d-flex flex-row "},k.a.createElement("div",{className:"text-center text-sm-left",style:{minWidth:"150px"}},k.a.createElement(W.a,null,k.a.createElement(N.a,{address:t.address,className:"font-weight-bold"},t.name||t.url)),k.a.createElement(N.a,{className:"small text-muted",address:t.address})),t.hasPage&&k.a.createElement("div",{className:"_team ml-0 ml-sm-auto"},k.a.createElement(B.a,{className:"btn btn-lg btn-block btn-default mt-1",to:"/representative/".concat(t.address)},Object(_.c)("open_team_page"),k.a.createElement("i",{className:"fas fa-users ml-2"})))),k.a.createElement("td",{className:"small text-right align-middle"},g>0&&k.a.createElement(O.Fragment,null,k.a.createElement(S.c,{value:t.lastCycleVotes}),k.a.createElement("br",null))),k.a.createElement("td",{className:"small text-right align-middle _liveVotes"},g>0&&k.a.createElement(O.Fragment,null,k.a.createElement(S.c,{value:t.realTimeVotes}),k.a.createElement("br",null),t.changeVotes>0?k.a.createElement("span",{className:"color-green"},"+",k.a.createElement(S.c,{value:t.changeVotes})):k.a.createElement("span",{className:"color-red"},k.a.createElement(S.c,{value:t.changeVotes})))),k.a.createElement("td",{className:"small text-right align-middle"},g>0&&k.a.createElement(O.Fragment,null,k.a.createElement(S.c,{value:t.votesPercentage,minimumFractionDigits:2,maximumFractionDigits:2}),"%")),n&&E>0&&k.a.createElement("td",{className:"vote-input-field"},k.a.createElement("div",{className:"input-group"},k.a.createElement("div",{className:"input-group-prepend"},k.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(){return e.setVote(t.address,(a[t.address]||0)-w)},type:"button"},"-")),k.a.createElement("input",{type:"text",value:a[t.address]||"",className:"form-control form-control-sm text-center",onChange:function(n){return e.setVote(t.address,n.target.value)}}),k.a.createElement("div",{className:"input-group-append"},k.a.createElement("button",{className:"btn btn-outline-success",onClick:function(){return e.setVote(t.address,(a[t.address]||0)+w)},type:"button"},"+")))))})))))))))}}]),t}(k.a.Component))||r)||r)||r)||r)}}]);