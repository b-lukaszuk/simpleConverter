(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(n,t,e){},12:function(n,t,e){},14:function(n,t,e){},15:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e.n(r),u=e(4),a=e.n(u),c=(e(11),e(2)),s=(e(12),e(0)),o=function(n){return Object(s.jsx)("option",{value:n.unit,children:n.unit},n.id)},d=(e(14),function(n){var t=n.units,e=n.main2secondary,i=n.secondary2main,u=n.additionalInfo,a=Object(r.useState)("0"),d=Object(c.a)(a,2),l=d[0],h=d[1],f=Object(r.useState)(t[0].unit),j=Object(c.a)(f,2),b=j[0],v=j[1],g=Object(r.useState)(0),p=Object(c.a)(g,2),O=p[0],m=p[1];Object(r.useEffect)((function(){m(i(parseFloat(l),b))}),[O,i,l,b]),Object(r.useEffect)((function(){h("0"),m(0),v(t[0].unit)}),[t]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsx)("p",{children:"Type some number (allowed chars: digits, period, -, +)"}),Object(s.jsx)("input",{pattern:"[-+]{0,1}[0-9]+\\.{0,1}[0-9]{0,}",placeholder:"0.00",name:"",type:"text",value:l,onChange:function(n){h(n.target.value)}}),Object(s.jsx)("p",{children:"(red border: incorrect input that may produce incorrect output)"}),Object(s.jsx)("p",{children:"Choose input units:"}),Object(s.jsx)("select",{value:b,onChange:function(n){v(n.target.value)},children:t.map((function(n){return o(n)}))}),Object(s.jsx)("p",{children:u}),Object(s.jsx)("h2",{children:"\xbb"}),Object(s.jsx)("div",{children:t.map((function(n){return t=n,Object(s.jsxs)("p",{children:[" ",e(O,t.unit).toFixed(4)," [",t.unit,"]"]},t.id);var t}))})]})}),l=e(5),h=e(6);var f=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;Object(l.a)(this,n),this._turns=0,this._negative=!1,this._setInternals(t)}return Object(h.a)(n,[{key:"_setInternals",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;(n=Math.abs(n)>1?n%1:n)<0?(this._turns=1-n,this._negative=!0):(this._turns=n,this._negative=!1)}},{key:"_getTurns",value:function(){return this._negative?1-this._turns:this._turns}},{key:"setAngleInUnits",value:function(n,t){"gradian"===t?this._setInternals(n/400):"mil"===t?this._setInternals(n/6400):"radian"===t?this._setInternals(n/(2*Math.PI)):"degree"===t?this._setInternals(n/360):"turn"===t&&this._setInternals(n)}},{key:"getAngleInUnits",value:function(n){return"gradian"===n?400*this._getTurns():"mil"===n?function(n){return 6400*n}(this._getTurns()):"radian"===n?function(n){return n*(2*Math.PI)}(this._getTurns()):"degree"===n?function(n){return 360*n}(this._getTurns()):"turn"===n?this._getTurns():NaN}}]),n}(),j=f;var b=function(n,t,e){return n<t||n>e};function v(n,t,e,r){return b(n,e,r)?NaN:t(n)}var g=1e8;function p(n){return v(n,(function(n){return n-273.15}),0,g)}function O(n){return v(n,(function(n){return 1.8*n-459.67}),0,g)}function m(n){return v(n,(function(n){return 1.8*n}),0,g)}var x=p(0),y=p(g);var _=p(0),I=p(g);var k=O(0),w=O(g);var N=p(0),T=p(g);var C=m(0),S=m(g);var A=p(0),F=p(g);var U=p(0),M=p(g);var P={angle:{units:[{id:0,unit:"degree"},{id:1,unit:"gradian"},{id:2,unit:"mil"},{id:3,unit:"radian"},{id:4,unit:"turn"}],main2secondary:function(n,t){return new j(n).getAngleInUnits(t)},secondary2main:function(n,t){var e=new j(0);return e.setAngleInUnits(n,t),e.getAngleInUnits("turn")},additionalInfo:"limit: 0-1 [turn], both sides (-/+), rounds up"},temperature:{units:[{id:0,unit:"celsius"},{id:1,unit:"delisle"},{id:2,unit:"fahrenheit"},{id:3,unit:"kelvin"},{id:4,unit:"newton"},{id:5,unit:"rankine"},{id:6,unit:"reaumur"},{id:7,unit:"romer"}],main2secondary:function(n,t){switch(t){case"celsius":return p(n);case"delisle":return v(n,(function(n){return 1.5*(373.15-n)}),0,g);case"fahrenheit":return O(n);case"newton":return function(n){return v(n,(function(n){return.33*(n-273.15)}),0,g)}(n);case"rankine":return m(n);case"reaumur":return function(n){return v(n,(function(n){return.8*(n-273.15)}),0,g)}(n);case"romer":return function(n){return v(n,(function(n){return.525*(n-273.15)+7.5}),0,g)}(n);case"kelvin":return n;default:return NaN}},secondary2main:function(n,t){switch(t){case"celsius":return v(n,(function(n){return n+273.15}),x,y);case"delisle":return v(n,(function(n){return 373.15-n*(2/3)}),_,I);case"fahrenheit":return v(n,(function(n){return(n+459.67)*(5/9)}),k,w);case"newton":return v(n,(function(n){return n*(100/33)+273.15}),N,T);case"rankine":return v(n,(function(n){return n*(5/9)}),C,S);case"reaumur":return v(n,(function(n){return n*(5/4)+273.15}),A,F);case"romer":return v(n,(function(n){return 40/21*(n-7.5)+273.15}),U,M);case"kelvin":return n;default:return NaN}},additionalInfo:"limit: 0-1e8 [kelvin]"}},E=function(){var n=function(n){for(var t=[],e=Object.keys(n),r=0;r<e.length;r++)t.push({id:r,unit:e[r]});return t}(P),t=Object(r.useState)(n[0].unit),e=Object(c.a)(t,2),i=e[0],u=e[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Simple Converter"}),Object(s.jsx)("p",{className:"warning",children:"No guarantee of correct conversion"}),Object(s.jsx)("p",{className:"warning",children:"Use it at your own risk"}),Object(s.jsx)("p",{children:"(Although it should work fine)"}),Object(s.jsx)("hr",{}),Object(s.jsx)("p",{children:"Select conversion type:"}),Object(s.jsx)("select",{value:i,onChange:function(n){u(n.target.value)},children:n.map((function(n){return o(n)}))}),Object(s.jsx)("br",{})," ",Object(s.jsx)("br",{}),Object(s.jsx)(d,{units:P[i].units,main2secondary:P[i].main2secondary,secondary2main:P[i].secondary2main,additionalInfo:P[i].additionalInfo})]})},B=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(t){var e=t.getCLS,r=t.getFID,i=t.getFCP,u=t.getLCP,a=t.getTTFB;e(n),r(n),i(n),u(n),a(n)}))};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(E,{})}),document.getElementById("root")),B()}},[[15,1,2]]]);
//# sourceMappingURL=main.b813d595.chunk.js.map