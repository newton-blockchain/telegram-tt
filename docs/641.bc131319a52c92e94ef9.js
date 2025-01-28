"use strict";(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[641],{21849:(e,t,o)=>{o.d(t,{A:()=>C,R:()=>E});var r=o(84051),n=o(13439),a=o(23174),i=o(31481),s=o(90709),c=o(87357),d=o(95807),l=o(14242),u=o(76023),m=o(35049),f=o(4961),p=o(11217),h=o(17712),v=o(62587),y=o(83057),A=o(59030),g=o(65843),w=o(88554),I=o(18276);const E={micro:u.$,mini:1.5*u.$,tiny:2*u.$,small:2.125*u.$,medium:2.75*u.$,large:3.375*u.$,giant:5.625*u.$,jumbo:7.5*u.$},S=(0,c.x)("Avatar");S.media=S("media"),S.icon=S("icon");const C=(0,r.ph)((({className:e,size:t="large",peer:o,photo:u,webPhoto:C,text:k,isSavedMessages:M,isSavedDialog:b,withVideo:P,withStory:N,forPremiumPromo:x,withStoryGap:L,withStorySolid:T,forceFriendStorySolid:F,forceUnreadStorySolid:$,storyViewerOrigin:O,storyViewerMode:z="single-peer",loopIndefinitely:V,noPersonalPhoto:j,onClick:K})=>{const{openStoryViewer:D}=(0,n.ko)(),J=(0,r.li)(null),R=(0,r.li)(0),Q=o&&"isCustomPeer"in o,B=o&&!Q?o:void 0,G=B&&(0,s.QKj)(B)?B:void 0,_=B&&(0,s.Du0)(B)?B:void 0,Y=G&&(0,s.PL2)(G),q=B&&(0,s.kEr)(B.id),U=B&&(0,s.QeI)(B.id),W=_?.isForum;let Z,H;const X="number"==typeof t?t:E[t],ee=P&&u?.isVideo,te=X>=E.jumbo;M||Y||(G&&!j||_?Z=(0,s.cP1)(o,te?"big":void 0):u?(Z=`photo${u.id}?size=m`,u.isVideo&&P&&(H=(0,s.Pgy)(u))):C&&(Z=(0,s.cy4)(C)));const oe=(0,r.Kr)((()=>Q?o.avatarIcon:M?b?"my-notes":"avatar-saved-messages":Y?"avatar-deleted-account":q?"reply-filled":U?"author-hidden":void 0),[Q,M,Y,q,U,o,b]),re=(0,v.A)(Z,!1,a.qZ.BlobUrl),ne=(0,v.A)(H,!ee,a.qZ.BlobUrl),ae=Boolean(re||ne),ie=Boolean(ne&&ee),se=(0,y.A)(ae),ce=(0,h.A)((e=>{const t=e.currentTarget;ne&&(V||(R.current+=1,R.current>=3&&(t.style.display="none")))})),de=(0,A.A)();let le;const ue=G?(0,s.YgS)(G):_?(0,s.JsG)(de,_):k;if(oe)le=r.Ay.createElement(I.A,{name:oe,className:S.icon,role:"img",ariaLabel:ue});else if(ae)le=r.Ay.createElement(r.Ay.Fragment,null,r.Ay.createElement("img",{src:re,className:(0,c.A)(S.media,"avatar-media",se,ne&&"poster"),alt:ue,decoding:"async",draggable:!1}),ie&&r.Ay.createElement(g.A,{canPlay:!0,src:ne,className:(0,c.A)(S.media,"avatar-media","poster"),muted:!0,loop:V,autoPlay:!0,disablePictureInPicture:!0,playsInline:!0,draggable:!1,onEnded:ce}));else if(G){const e=(0,s.YgS)(G);le=e?(0,l.Qh)(e,2):void 0}else if(_){const e=(0,s.JsG)(de,_);le=e&&(0,l.Qh)(e,(0,s.L8L)(_.id)?2:1)}else if(Q){const e=o.title||de(o.titleKey);le=e&&(0,l.Qh)(e,1)}else k&&(le=(0,l.Qh)(k,2));const me=Q&&o.isAvatarSquare||W&&!((N||T)&&B?.hasStories),fe=Q&&o.withPremiumGradient,pe=Q&&o.customPeerAvatarColor,he=(0,c.A)("Avatar",e,(0,m.y)(o),!o&&k&&"hidden-user",M&&"saved-messages",U&&"anonymous-forwards",Y&&"deleted-account",q&&"replies-bot-account",fe&&"premium-gradient-bg",me&&"forum",(u||C)&&"force-fit",(N&&B?.hasStories||x)&&"with-story-circle",T&&B?.hasStories&&"with-story-solid",T&&F&&"close-friend",T&&(B?.hasUnreadStories||$)&&"has-unread-story",K&&"interactive",!M&&!re&&"no-photo"),ve=Boolean(M||re),{handleClick:ye,handleMouseDown:Ae}=(0,p.Q)((e=>{if(N&&"disabled"!==z&&B?.hasStories)return e.stopPropagation(),void D({peerId:B.id,isSinglePeer:"single-peer"===z,origin:O});K&&K(e,ve)}));return r.Ay.createElement("div",{ref:J,className:he,id:B?.id&&N?(0,s.kRw)(B.id):void 0,"data-peer-id":B?.id,"data-test-sender-id":i.W75?B?.id:void 0,"aria-label":"string"==typeof le?ue:void 0,style:(0,d.A)(`--_size: ${X}px;`,pe&&`--color-user: ${pe}`),onClick:ye,onMouseDown:Ae},r.Ay.createElement("div",{className:"inner"},"string"==typeof le?(0,f.A)(le,[te?"hq_emoji":"emoji"]):le),N&&B?.hasStories&&r.Ay.createElement(w.A,{peerId:B.id,size:X,withExtraGap:L}))}))},88554:(e,t,o)=>{o.d(t,{$:()=>E,A:()=>I});var r=o(84051),n=o(13439),a=o(29807),i=o(87357),s=o(76023),c=o(38691);const d=["#34C578","#3CA3F3"],l=["#C9EB38","#09C167"],u=["#A667FF","#55A5FF"],m=.125*s.$,f=.0625*s.$,p=2,h=45,v=3.5*s.$,y=Math.PI/4,A=2*Math.PI*.1,g=y-A/2,w=y+A/2,I=(0,r.ph)((0,n.EK)(((e,{peerId:t})=>{const o=(0,a._bp)(e,t),r=(0,a.SJA)(e);return{peerStories:o?.byId,storyIds:o?.orderedIds,lastReadId:o?.lastReadId,appTheme:r}}))((function({size:e,className:t,peerStories:o,storyIds:n,lastReadId:a,withExtraGap:s,appTheme:d}){const l=(0,r.li)(null),u=(0,c.A)(),f=e+m,p=(0,r.Kr)((()=>(n||[]).reduce(((e,t)=>(e.total+=1,a&&t<=a&&(e.read+=1),e)),{total:0,read:0})),[a,n]),h=(0,r.Kr)((()=>!(!o||!n?.length)&&n.some((e=>{const t=o[e];if(!t||!("isForCloseFriends"in t))return!1;const r=a&&t.id<=a;return t.isForCloseFriends&&!r}))),[a,o,n]);if((0,r.Nf)((()=>{l.current&&E({canvas:l.current,size:f*u,segmentsCount:p.total,color:h?"green":"blue",readSegmentsCount:p.read,withExtraGap:s,readSegmentColor:"dark"===d?"#737373":"#C4C9CC",dpr:u})}),[d,h,f,p.read,p.total,s,u]),p.total)return r.Ay.createElement("canvas",{ref:l,className:(0,i.A)("story-circle",t),style:`max-width: ${f}px; max-height: ${f}px;`})})));function E({canvas:e,size:t,color:o,segmentsCount:r,readSegmentsCount:n=0,withExtraGap:a=!1,readSegmentColor:i,dpr:c}){r>h&&(n=Math.round(n*(h/r)),r=h);const y=Math.max(Math.max(t-v*c,0)/c/s.$/1.5,1)*c,A=e.getContext("2d");if(!A)return;e.width=t,e.height=t;const I=t/2,E=(t-m*y)/2,S=2*Math.PI/r,C=p/100*(2*Math.PI),k=A.createLinearGradient(0,0,Math.ceil(t*Math.cos(Math.PI/2)),Math.ceil(t*Math.sin(Math.PI/2))),M="purple"===o?u:"green"===o?l:d;M.forEach(((e,t)=>{k.addColorStop(t/(M.length-1),e)})),A.lineCap="round",A.clearRect(0,0,t,t),Array.from({length:r}).forEach(((e,t)=>{const o=t<n;let s=t*S-Math.PI/2+C/2,c=s+S-(r>1?C:0);if(A.strokeStyle=o?i:k,A.lineWidth=(o?f:m)*y,a){if(s>=g&&c<=w)return;s<g&&c>w?(A.beginPath(),A.arc(I,I,E,w,c),A.stroke(),c=g):s<g&&c>g?c=g:s<w&&c>w&&(s=w)}A.beginPath(),A.arc(I,I,E,s,c),A.stroke()}))}},2578:(e,t,o)=>{o.d(t,{A:()=>a});var r=o(84051),n=o(59030);const a=(0,r.ph)((({fakeType:e})=>{const t=(0,n.A)();return r.Ay.createElement("span",{className:"FakeIcon"},t("fake"===e?"FakeMessage":"ScamMessage"))}))},34431:(e,t,o)=>{o.d(t,{A:()=>A});var r=o(84051),n=o(13439),a=o(31481),i=o(90709),s=o(87357),c=o(85982),d=o(83868),l=o(4961),u=o(17712),m=o(59030),f=o(41036),p=o(87412),h=o(2578),v=o(9267);const y=()=>r.Ay.createElement("svg",{className:"VerifiedIcon",viewBox:"0 0 24 24"},r.Ay.createElement("path",{d:"M12.3 2.9c.1.1.2.1.3.2.7.6 1.3 1.1 2 1.7.3.2.6.4.9.4.9.1 1.7.2 2.6.2.5 0 .6.1.7.7.1.9.1 1.8.2 2.6 0 .4.2.7.4 1 .6.7 1.1 1.3 1.7 2 .3.4.3.5 0 .8-.5.6-1.1 1.3-1.6 1.9-.3.3-.5.7-.5 1.2-.1.8-.2 1.7-.2 2.5 0 .4-.2.5-.6.6-.8 0-1.6.1-2.5.2-.5 0-1 .2-1.4.5-.6.5-1.3 1.1-1.9 1.6-.3.3-.5.3-.8 0-.7-.6-1.4-1.2-2-1.8-.3-.2-.6-.4-.9-.4-.9-.1-1.8-.2-2.7-.2-.4 0-.5-.2-.6-.5 0-.9-.1-1.7-.2-2.6 0-.4-.2-.8-.4-1.1-.6-.6-1.1-1.3-1.6-2-.4-.4-.3-.5 0-1 .6-.6 1.1-1.3 1.7-1.9.3-.3.4-.6.4-1 0-.8.1-1.6.2-2.5 0-.5.1-.6.6-.6.9-.1 1.7-.1 2.6-.2.4 0 .7-.2 1-.4.7-.6 1.4-1.2 2.1-1.7.1-.2.3-.3.5-.2z",style:"fill: var(--color-fill)"}),r.Ay.createElement("path",{d:"M16.4 10.1l-.2.2-5.4 5.4c-.1.1-.2.2-.4 0l-2.6-2.6c-.2-.2-.1-.3 0-.4.2-.2.5-.6.7-.6.3 0 .5.4.7.6l1.1 1.1c.2.2.3.2.5 0l4.3-4.3c.2-.2.4-.3.6 0 .1.2.3.3.4.5.2 0 .3.1.3.1z",style:"fill: var(--color-checkmark)"})),A=(0,r.ph)((({className:e,peer:t,noVerified:o,noFake:A,withEmojiStatus:g,emojiStatusSize:w,isSavedMessages:I,isSavedDialog:E,noLoopLimit:S,canCopyTitle:C,iconElement:k,onEmojiStatusClick:M,observeIntersection:b})=>{const P=(0,m.A)(),{showNotification:N}=(0,n.ko)(),x="id"in t?t:void 0,L="isCustomPeer"in t?t:void 0,T=x&&(0,i.QKj)(x),F=x&&(T?(0,i.YgS)(x):(0,i.JsG)(P,x)),$=T&&x.isPremium,O=g&&!I&&x,z=(0,u.A)((e=>{F&&C&&((0,d.A)(e),(0,c.eM)(F),N({message:(T?"User":"Chat")+" name was copied"}))})),V=(0,r.Kr)((()=>L?L.title||P(L.titleKey):I?P(E?"MyNotes":"SavedMessages"):(0,i.QeI)(x.id)?P("AnonymousForward"):(0,i.kEr)(x.id)?P("RepliesTitle"):(0,i.Rlt)(x.id)?P("VerifyCodesNotifications"):void 0),[L,E,I,P,x]),j=x?.botVerificationIconId;return r.Ay.createElement("div",{className:(0,s.A)("title","QljEeKI5",e)},j&&r.Ay.createElement(p.A,{documentId:j,size:w,loopLimit:S?void 0:a.J$1,observeIntersectionForLoading:b}),r.Ay.createElement("h3",{dir:"auto",role:"button",className:(0,s.A)("fullName","AS54Cntu",C&&"vr53L_9p"),onClick:z},V||(0,l.A)(F||"")),!k&&t&&r.Ay.createElement(r.Ay.Fragment,null,!o&&t?.isVerified&&r.Ay.createElement(y,null),!A&&t?.fakeType&&r.Ay.createElement(h.A,{fakeType:t.fakeType}),O&&x.emojiStatus&&r.Ay.createElement(f.Ay,{className:"f1IRPr8M",activeKey:Number(x.emojiStatus.documentId),name:"fade",shouldCleanup:!0,shouldRestoreHeight:!0},r.Ay.createElement(p.A,{forceAlways:!0,documentId:x.emojiStatus.documentId,size:w,loopLimit:S?void 0:a.J$1,observeIntersectionForLoading:b,onClick:M})),O&&!x.emojiStatus&&$&&r.Ay.createElement(v.A,null)),k)}))},35049:(e,t,o)=>{o.d(t,{a:()=>a,y:()=>n});var r=o(90709);function n(e,t,o){if(!e){if(!o)return;return t?"peer-color-count-1":"peer-color-0"}if("isCustomPeer"in e){if(void 0===e.peerColorId)return;return`peer-color-${e.peerColorId}`}return t?`peer-color-count-${(0,r.PXe)(e)}`:`peer-color-${(0,r.ZgW)(e)}`}function a(e){return`peer-color-${e.color}`}},32625:(e,t,o)=>{o.d(t,{A:()=>a});var r=o(84051),n=o(17712);const a=function(e,t,o=!1){const a=(0,n.A)(e);(0,r.vJ)((()=>{if(void 0===t)return;const e=setInterval((()=>a()),t);return o||a(),()=>clearInterval(e)}),[t,o])}},10722:(e,t,o)=>{o.d(t,{A:()=>d});var r=o(84051),n=o(61433),a=o(66644),i=o(82393),s=o(17712);function c(e){e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation()}const d=(e,t,o,d,l,u)=>{const[m,f]=(0,r.J0)(!1),[p,h]=(0,r.J0)(void 0),[v,y]=(0,r.J0)(void 0),A=(0,s.A)((e=>{t||2!==e.button||(0,a.RK)((()=>{(0,n.YM)(e.target,"no-selection")}))})),g=(0,s.A)((e=>{(0,a.RK)((()=>{(0,n.HW)(e.target,"no-selection")})),t||o&&e.target.matches("a[href]")||(e.preventDefault(),e.stopPropagation(),p||(f(!0),h({x:e.clientX,y:e.clientY}),y(e.target)))})),w=(0,s.A)((()=>{f(!1)})),I=(0,s.A)((()=>{h(void 0)}));return(0,r.vJ)((()=>{if(t||!i.TF||d||l&&!l())return;const r=e.current;if(!r)return;let n;const a=()=>{n&&(clearTimeout(n),n=void 0)},s=e=>{t||(u&&e.stopPropagation(),a(),n=window.setTimeout((()=>(e=>{a();const{clientX:t,clientY:r,target:n}=e.touches[0];p||o&&n.matches("a[href]")||(document.addEventListener("touchend",(e=>{i.pz&&i._7&&setTimeout((()=>{document.removeEventListener("mousedown",c,{capture:!0}),document.removeEventListener("click",c,{capture:!0})}),100),c(e)}),{once:!0,capture:!0}),i._7&&i.pz&&(document.addEventListener("mousedown",c,{once:!0,capture:!0}),document.addEventListener("click",c,{once:!0,capture:!0})),f(!0),h({x:t,y:r}))})(e)),200))};return r.addEventListener("touchstart",s,{passive:!0}),r.addEventListener("touchcancel",a,!0),r.addEventListener("touchend",a,!0),r.addEventListener("touchmove",a,{passive:!0}),()=>{a(),r.removeEventListener("touchstart",s),r.removeEventListener("touchcancel",a,!0),r.removeEventListener("touchend",a,!0),r.removeEventListener("touchmove",a)}}),[p,t,d,e,o,l,u]),{isContextMenuOpen:m,contextMenuAnchor:p,contextMenuTarget:v,handleBeforeContextMenu:A,handleContextMenu:g,handleContextMenuClose:w,handleContextMenuHide:I}}},11217:(e,t,o)=>{o.d(t,{Q:()=>a});var r=o(82393),n=o(17712);function a(e){const t=(0,n.A)((t=>{"mousedown"===t.type&&t.button!==r.w3.Main||e(t)}));return r.TF?{handleClick:e?t:void 0}:{handleMouseDown:e?t:void 0}}},96374:(e,t,o)=>{o.d(t,{A:()=>l});var r=o(84051),n=o(89925),a=o(87894),i=o(30857),s=o(17712),c=o(73767);function d(e,t,o,r){const{length:a}=e,i=r?e.indexOf(r):0,s=t===n.TN.Forwards?i:i+1||a,c=Math.max(0,s-o),d=s+o-1,l=e.slice(Math.max(0,c),d+1);let u,m;switch(t){case n.TN.Forwards:u=s>=0,m=c>=0;break;case n.TN.Backwards:u=s<a,m=d<=a-1}return{newViewportIds:l,areSomeLocal:u,areAllLocal:m,newIsOnTop:l[0]===e[0],fromOffset:c}}const l=(e,t,o=!1,l=30)=>{const u=(0,r.li)(),m=(0,r.li)();if(!m.current&&t&&!o){const{newViewportIds:e,newIsOnTop:o,fromOffset:r}=d(t,n.TN.Forwards,l,t[0]);m.current={viewportIds:e,isOnTop:o,offset:r}}const f=(0,i.A)();o&&(u.current={});const p=(0,c.A)(t),h=(0,c.A)(o);if(!t||o||t===p&&o===h)t||(m.current=void 0);else{const{viewportIds:e,isOnTop:o}=m.current||{},r=e&&!o?e[Math.round(e.length/2)]:void 0,i=r&&t.includes(r)?r:t[0],{offsetId:s=i,direction:c=n.TN.Forwards}=u.current||{},{newViewportIds:f,newIsOnTop:p,fromOffset:h}=d(t,c,l,s);u.current={},e&&(0,a.k)(e,f)||(m.current={viewportIds:f,isOnTop:p,offset:h})}const v=(0,s.A)((({direction:o,noScroll:r})=>{const{viewportIds:i}=m.current||{},s=i?o===n.TN.Backwards?i[i.length-1]:i[0]:void 0;if(!t)return void(e&&e({offsetId:s}));const{newViewportIds:c,areSomeLocal:p,areAllLocal:h,newIsOnTop:v,fromOffset:y}=d(t,o,l,s);!p||i&&(0,a.k)(i,c)||(m.current={viewportIds:c,isOnTop:v,offset:y},f()),!h&&e&&(r||(u.current={...u.current,direction:o,offsetId:s}),e({offsetId:s}))}));return o?[t]:[m.current?.viewportIds,v,m.current?.offset]}},37859:(e,t,o)=>{o.d(t,{A:()=>n});var r=o(84051);const n=(e,t,o)=>{const n=(0,r.li)();return(0,r.Nf)((()=>{const o=n.current;return n.current=t,e(o||[])}),t,o)}},32610:(e,t,o)=>{o.d(t,{A:()=>a});const r=[1,57,41,21,203,34,97,73,227,91,149,62,105,45,39,137,241,107,3,173,39,71,65,238,219,101,187,87,81,151,141,133,249,117,221,209,197,187,177,169,5,153,73,139,133,127,243,233,223,107,103,99,191,23,177,171,165,159,77,149,9,139,135,131,253,245,119,231,224,109,211,103,25,195,189,23,45,175,171,83,81,79,155,151,147,9,141,137,67,131,129,251,123,30,235,115,113,221,217,53,13,51,50,49,193,189,185,91,179,175,43,169,83,163,5,79,155,19,75,147,145,143,35,69,17,67,33,65,255,251,247,243,239,59,29,229,113,111,219,27,213,105,207,51,201,199,49,193,191,47,93,183,181,179,11,87,43,85,167,165,163,161,159,157,155,77,19,75,37,73,145,143,141,35,138,137,135,67,33,131,129,255,63,250,247,61,121,239,237,117,29,229,227,225,111,55,109,216,213,211,209,207,205,203,201,199,197,195,193,48,190,47,93,185,183,181,179,178,176,175,173,171,85,21,167,165,41,163,161,5,79,157,78,154,153,19,75,149,74,147,73,144,143,71,141,140,139,137,17,135,134,133,66,131,65,129,1],n=[0,9,10,10,14,12,14,14,16,15,16,15,16,15,15,17,18,17,12,18,16,17,17,19,19,18,19,18,18,19,19,19,20,19,20,20,20,20,20,20,15,20,19,20,20,20,21,21,21,20,20,20,21,18,21,21,21,21,20,21,17,21,21,21,22,22,21,22,22,21,22,21,19,22,22,19,20,22,22,21,21,21,22,22,22,18,22,22,21,22,22,23,22,20,23,22,22,23,23,21,19,21,21,21,23,23,23,22,23,23,21,23,22,23,18,22,23,20,22,23,23,23,21,22,20,22,21,22,24,24,24,24,24,22,21,24,23,23,24,21,24,23,24,22,24,24,22,24,24,22,23,24,24,24,20,23,22,23,24,24,24,24,24,24,24,23,21,23,22,23,24,24,24,22,24,24,24,23,22,24,24,25,23,25,25,23,24,25,25,24,22,25,25,25,24,23,24,25,25,25,25,25,25,25,25,25,25,25,25,23,25,23,24,25,25,25,25,25,25,25,25,25,24,22,25,25,23,25,25,20,24,25,24,25,25,22,24,25,24,25,24,25,25,24,25,25,25,25,22,25,25,25,24,25,24,25,18];function a(e,t,o,a,i,s,c){if(Number.isNaN(s)||s<1)return;s|=0,Number.isNaN(c)&&(c=1),(c|=0)>3&&(c=3),c<1&&(c=1);const d=e.getImageData(t,o,a,i),l=d.data;let u,m,f,p,h,v,y,A,g,w,I,E,S=a-1,C=i-1,k=s+1,M=[],b=[],P=[],N=r[s],x=n[s],L=[],T=[];for(;c-- >0;){for(E=I=0,h=0;h<i;h++){for(u=l[E]*k,m=l[E+1]*k,f=l[E+2]*k,v=1;v<=s;v++)y=E+((v>S?S:v)<<2),u+=l[y++],m+=l[y++],f+=l[y++];for(p=0;p<a;p++)M[I]=u,b[I]=m,P[I]=f,0==h&&(L[p]=((y=p+k)<S?y:S)<<2,T[p]=(y=p-s)>0?y<<2:0),A=E+L[p],g=E+T[p],u+=l[A++]-l[g++],m+=l[A++]-l[g++],f+=l[A++]-l[g++],I++;E+=a<<2}for(p=0;p<a;p++){for(w=p,u=M[w]*k,m=b[w]*k,f=P[w]*k,v=1;v<=s;v++)w+=v>C?0:a,u+=M[w],m+=b[w],f+=P[w];for(I=p<<2,h=0;h<i;h++)l[I]=u*N>>>x,l[I+1]=m*N>>>x,l[I+2]=f*N>>>x,0==p&&(L[h]=((y=h+k)<C?y:C)*a,T[h]=(y=h-s)>0?y*a:0),A=p+L[h],g=p+T[h],u+=M[A]-M[g],m+=b[A]-b[g],f+=P[A]-P[g],I+=a<<2}}e.putImageData(d,t,o)}},14680:(e,t,o)=>{o.d(t,{FD:()=>n,ZJ:()=>i,wb:()=>a});let r=0;function n(){r+=1}function a(){r-=1}function i(){return r>0}},91034:(e,t,o)=>{o.d(t,{A:()=>n});var r=o(84051);function n(e){return function(t){const o=(0,r.li)(t);return t.isOpen?o.current=t:o.current={...o.current,isOpen:!1},e(o.current)}}},9718:(e,t,o)=>{o.d(t,{A:()=>i,E:()=>a});var r=o(41402),n=o(82393);function a(e){e.style.display="none",(0,r.A)(e),e.style.display=""}const i=(e,t)=>{n.pz&&(e.style.overflow="hidden"),void 0!==t&&(e.scrollTop=t),n.pz&&(e.style.overflow="")}},29441:(e,t,o)=>{function r(e){function t(t){if("Tab"!==t.key)return;t.preventDefault(),t.stopPropagation();const o=Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!o.length)return;const r=o.findIndex((e=>e.isSameNode(document.activeElement)));let n=0;r>=0&&(n=t.shiftKey?r>0?r-1:o.length-1:r<o.length-1?r+1:0),o[n].focus()}return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}o.d(t,{A:()=>r})}}]);
//# sourceMappingURL=641.bc131319a52c92e94ef9.js.map