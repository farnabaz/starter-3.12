import{u as w,U as u,c as D,V as b,W as O,X as B,e as M,D as V,Y as v,Z as E,C as H,P as R,$ as S}from"./DZgtKJbc.js";const z=s=>s==="defer"||s===!1;function T(...s){var _;const o=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(o);let[t,d,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof d!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=w(),p=d,g=()=>u.value,P=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??g,a.getCachedData=a.getCachedData??P,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??u.deep,a.dedupe=a.dedupe??"cancel";const f=()=>a.getCachedData(t,e)!=null;if(!e._asyncData[t]||!a.immediate){(_=e.payload._errors)[t]??(_[t]=u.errorValue);const i=a.deep?D:b;e._asyncData[t]={data:i(a.getCachedData(t,e)??a.default()),pending:D(!f()),error:O(e.payload._errors,t),status:D("idle"),_default:a.default}}const r={...e._asyncData[t]};delete r._default,r.refresh=r.execute=(i={})=>{if(e._asyncDataPromises[t]){if(z(i.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((i._initial||e.isHydrating&&i._initial!==!1)&&f())return Promise.resolve(a.getCachedData(t,e));r.pending.value=!0,r.status.value="pending";const l=new Promise((c,n)=>{try{c(p(e))}catch(y){n(y)}}).then(async c=>{if(l.cancelled)return e._asyncDataPromises[t];let n=c;a.transform&&(n=await a.transform(c)),a.pick&&(n=K(n,a.pick)),e.payload.data[t]=n,r.data.value=n,r.error.value=u.errorValue,r.status.value="success"}).catch(c=>{if(l.cancelled)return e._asyncDataPromises[t];r.error.value=E(c),r.data.value=H(a.default()),r.status.value="error"}).finally(()=>{l.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=l,e._asyncDataPromises[t]},r.clear=()=>j(e,t);const h=()=>r.refresh({_initial:!0}),C=a.server!==!1&&e.payload.serverRendered;{const i=R();if(i&&!i._nuxtOnBeforeMountCbs){i._nuxtOnBeforeMountCbs=[];const n=i._nuxtOnBeforeMountCbs;B(()=>{n.forEach(y=>{y()}),n.splice(0,n.length)}),M(()=>n.splice(0,n.length))}C&&e.isHydrating&&(r.error.value||f())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):i&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?i._nuxtOnBeforeMountCbs.push(h):a.immediate&&h();const l=S();if(a.watch){const n=V(a.watch,()=>r.refresh());l&&v(n)}const c=e.hook("app:data:refresh",async n=>{(!n||n.includes(t))&&await r.refresh()});l&&v(c)}const m=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(m,r),m}function j(s,o){o in s.payload.data&&(s.payload.data[o]=void 0),o in s.payload._errors&&(s.payload._errors[o]=u.errorValue),s._asyncData[o]&&(s._asyncData[o].data.value=void 0,s._asyncData[o].error.value=u.errorValue,s._asyncData[o].pending.value=!1,s._asyncData[o].status.value="idle"),o in s._asyncDataPromises&&(s._asyncDataPromises[o].cancelled=!0,s._asyncDataPromises[o]=void 0)}function K(s,o){const t={};for(const d of o)t[d]=s[d];return t}export{T as u};
