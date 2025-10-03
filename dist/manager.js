'use strict';

var managerApi = require('storybook/manager-api');
var components = require('storybook/internal/components');
var v = require('react');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n.default = e;
	return Object.freeze(n);
}

var v__namespace = /*#__PURE__*/_interopNamespace(v);

var d="storybook/multiple-themes-stitches",u=`${d}/theme`,p="multipleThemesStitches",f="themeName";var s=v__namespace.forwardRef(({color:e="currentColor",size:a=14,...r},l)=>v__namespace.createElement("svg",{width:a,height:a,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:l,...r},v__namespace.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.854.146a.5.5 0 00-.708 0L2.983 8.31a2.24 2.24 0 00-1.074.6C.677 10.14.24 11.902.085 12.997 0 13.6 0 14 0 14s.4 0 1.002-.085c1.095-.155 2.857-.592 4.089-1.824a2.24 2.24 0 00.6-1.074l8.163-8.163a.5.5 0 000-.708l-2-2zM5.6 9.692l.942-.942L5.25 7.457l-.942.943A2.242 2.242 0 015.6 9.692zm1.649-1.65L12.793 2.5 11.5 1.207 5.957 6.75 7.25 8.043zM4.384 9.617a1.25 1.25 0 010 1.768c-.767.766-1.832 1.185-2.78 1.403-.17.04-.335.072-.49.098.027-.154.06-.318.099-.49.219-.947.637-2.012 1.403-2.779a1.25 1.25 0 011.768 0z",fill:e})));var T="storybook-preview-iframe",E=(e,a,r,l)=>({id:e,title:e,onClick:()=>{r({selected:a,name:e});},value:a,active:l}),b={disable:!0,values:[]},k=(e,a,r)=>{if(e===null)return null;if(e){let l=a.find(c=>c.name===e);if(l)return l}if(r){let l=a.find(c=>c.name===r);if(l)return l}return null},M=v.memo(()=>{let e=managerApi.useParameter(p,b),a=e.values,r=e.default,[l,c]=managerApi.useGlobals(),R=l[f],i=v.useMemo(()=>k(R,a,r),[R,r,a]),m=({name:n,selected:t})=>{I(n,t);},g=[E("Clear theme",null,m,!1)];if(a.length){let n=a.map(t=>({name:t.name,theme:{className:t.theme.className}}));g.push(...n.map(({name:t,theme:o})=>E(t,o,m,t===i?.name)));}let x=n=>{let t,o=document.getElementById(T);o&&(t=(o.contentDocument||o.contentWindow.document).body,e.values.filter(w=>w.theme).forEach(w=>{w?.theme?.className&&t.classList.remove(w.theme.className);}),n&&(t.className=n.className));},I=v.useCallback((n,t)=>{c({[f]:t?n:null});},[e,l,c]);return e.disable?null:(x(i?.theme),v__namespace.default.createElement(v.Fragment,null,v__namespace.default.createElement(components.WithTooltip,{placement:"top",trigger:"click",closeOnOutsideClick:!0,tooltip:v__namespace.default.createElement(components.TooltipLinkList,{links:g})},v__namespace.default.createElement(components.IconButton,{key:"theme",title:"Change the theme of the preview",active:i!==null},v__namespace.default.createElement(s,null)))))});managerApi.addons.register(d,()=>{managerApi.addons.add(u,{type:managerApi.types.TOOL,title:"Themes",match:({viewMode:e})=>!!(e&&e.match(/^(story|docs)$/)),render:M});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.js.map