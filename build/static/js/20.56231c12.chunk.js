(this["webpackJsonpcoreui-free-react-admin-template"]=this["webpackJsonpcoreui-free-react-admin-template"]||[]).push([[20],{710:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));r(16);var a=r(1),n=r.n(a),c=n.a.createContext({});c.Consumer,c.Provider;function s(e,t){var r=Object(a.useContext)(c);return e||r[t]||t}},716:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(92);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,c=void 0;try{for(var s,i=e[Symbol.iterator]();!(a=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(l){n=!0,c=l}finally{try{a||null==i.return||i.return()}finally{if(n)throw c}}return r}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},732:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r(1),n=r.n(a),c=r(752),s=r(744),i=r(741),l=r(121),o=(r(733),r(19));function d(e){return Object(o.jsx)(n.a.Fragment,{children:e.sidebar?Object(o.jsx)(c.a,{fluid:!0,className:"layoutRoot",children:Object(o.jsxs)(s.a,{children:[Object(o.jsx)(i.a,{md:2,className:"sidebar",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.c,{exact:!0,to:"/",children:"Accueil"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.c,{to:"/page",children:"Pages"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.c,{to:"/category",children:"Cate\u0301gories"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.c,{to:"/products",children:"Produits"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.c,{to:"/orders",children:"Commandes"})})]})}),Object(o.jsx)(i.a,{md:10,style:{marginLeft:"auto",paddingTop:"60px"},children:e.children})]})}):e.children})}},733:function(e,t,r){},737:function(e,t,r){"use strict";var a=r(3),n=(r(1),r(738),r(19));t.a=function(e){return Object(n.jsxs)("div",Object(a.a)(Object(a.a)({className:"cardOne"},e),{},{children:[(e.headerLeft||e.headerRight)&&Object(n.jsxs)("div",{className:"cardHeader",children:[e.headerLeft&&Object(n.jsx)("div",{style:{alignSelf:"center",fontSize:"20px",fontWeight:"600"},children:e.headerLeft}),e.headerRight&&e.headerRight]}),e.children]}))}},738:function(e,t,r){},741:function(e,t,r){"use strict";var a=r(16),n=r(34),c=r(712),s=r.n(c),i=r(1),l=r.n(i),o=r(710),d=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,i=e.as,u=void 0===i?"div":i,j=Object(n.a)(e,["bsPrefix","className","as"]),f=Object(o.a)(r,"col"),b=[],h=[];return d.forEach((function(e){var t,r,a,n=j[e];if(delete j[e],"object"===typeof n&&null!=n){var c=n.span;t=void 0===c||c,r=n.offset,a=n.order}else t=n;var s="xs"!==e?"-"+e:"";t&&b.push(!0===t?""+f+s:""+f+s+"-"+t),null!=a&&h.push("order"+s+"-"+a),null!=r&&h.push("offset"+s+"-"+r)})),b.length||b.push(f),l.a.createElement(u,Object(a.a)({},j,{ref:t,className:s.a.apply(void 0,[c].concat(b,h))}))}));u.displayName="Col",t.a=u},744:function(e,t,r){"use strict";var a=r(16),n=r(34),c=r(712),s=r.n(c),i=r(1),l=r.n(i),o=r(710),d=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,i=e.noGutters,u=e.as,j=void 0===u?"div":u,f=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),b=Object(o.a)(r,"row"),h=b+"-cols",p=[];return d.forEach((function(e){var t,r=f[e];delete f[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=r&&"object"===typeof r?r.cols:r)&&p.push(""+h+a+"-"+t)})),l.a.createElement(j,Object(a.a)({ref:t},f,{className:s.a.apply(void 0,[c,b,i&&"no-gutters"].concat(p))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},752:function(e,t,r){"use strict";var a=r(16),n=r(34),c=r(712),s=r.n(c),i=r(1),l=r.n(i),o=r(710),d=l.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.fluid,i=e.as,d=void 0===i?"div":i,u=e.className,j=Object(n.a)(e,["bsPrefix","fluid","as","className"]),f=Object(o.a)(r,"container"),b="string"===typeof c?"-"+c:"-fluid";return l.a.createElement(d,Object(a.a)({ref:t},j,{className:s()(u,c?""+f+b:f)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.a=d},753:function(e,t,r){"use strict";var a=r(16),n=r(34),c=r(712),s=r.n(c),i=r(1),l=r.n(i),o=r(710);var d=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];e.apply(this,a),t.apply(this,a)}}),null)};function u(e){return!e||"#"===e.trim()}var j=l.a.forwardRef((function(e,t){var r=e.as,c=void 0===r?"a":r,s=e.disabled,i=e.onKeyDown,o=Object(n.a)(e,["as","disabled","onKeyDown"]),j=function(e){var t=o.href,r=o.onClick;(s||u(t))&&e.preventDefault(),s?e.stopPropagation():r&&r(e)};return u(o.href)&&(o.role=o.role||"button",o.href=o.href||"#"),s&&(o.tabIndex=-1,o["aria-disabled"]=!0),l.a.createElement(c,Object(a.a)({ref:t},o,{onClick:j,onKeyDown:d((function(e){" "===e.key&&(e.preventDefault(),j(e))}),i)}))}));j.displayName="SafeAnchor";var f=j,b=l.a.forwardRef((function(e,t){var r=e.bsPrefix,c=e.variant,i=e.size,d=e.active,u=e.className,j=e.block,b=e.type,h=e.as,p=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),m=Object(o.a)(r,"btn"),x=s()(u,m,d&&"active",c&&m+"-"+c,j&&m+"-block",i&&m+"-"+i);if(p.href)return l.a.createElement(f,Object(a.a)({},p,{as:h,ref:t,className:s()(x,p.disabled&&"disabled")}));t&&(p.ref=t),b?p.type=b:h||(p.type="button");var v=h||"button";return l.a.createElement(v,Object(a.a)({},p,{className:x}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1};t.a=b},899:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var a=r(716),n=r(1),c=r.n(n),s=r(753),i=r(70),l=r(122),o=r(737),d=r(732),u=r(172),j=(r(900),r(19));function f(e){var t=Object(i.c)((function(e){return e.order})),r=Object(i.b)(),f=Object(n.useState)(""),b=Object(a.a)(f,2),h=b[0],p=b[1];return Object(j.jsxs)(d.a,{children:[Object(j.jsx)("h1",{style:{margin:"3rem",color:"#d16767"},children:"LES ACHATS EN COURS"}),t.orders&&t.orders.map((function(e,t){return Object(j.jsxs)(o.a,{style:{margin:"60px auto",color:"white",background:"#23242D"},headerLeft:"NUM\xc9RO DE COMMANDE - ".concat(e._id),children:[Object(j.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",padding:"30px 20px",alignItems:"center"},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"title",children:"Articles"}),e.items.map((function(e,t){return Object(j.jsx)("div",{className:"value",children:Object(u.h)(e.productId.name,50)},t)}))]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"title",children:"Facture"}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"value",children:u.e.format(e.totalAmount)})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"title",children:"Type de Paiement"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"value",children:e.paymentType})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"title",children:"Status de Paiement"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"value",children:e.paymentStatus})]})]}),Object(j.jsxs)("div",{style:{boxSizing:"border-box",padding:"100px 80px",display:"flex",alignItems:"center"},children:[Object(j.jsx)("div",{className:"orderTrack sa",children:e.orderStatus.map((function(e){return Object(j.jsxs)("div",{className:"orderStatus ".concat(e.isCompleted?"active":""),children:[Object(j.jsx)("div",{className:"point ".concat(e.isCompleted?"active":"")}),Object(j.jsxs)("div",{className:"orderInfo",children:[Object(j.jsx)("div",{className:"status",children:e.type}),Object(j.jsx)("div",{className:"statusDate",children:Object(u.b)(e.date)})]})]})}))}),Object(j.jsx)("div",{style:{paddingLeft:"50px",boxSizing:"border-box"},children:Object(j.jsxs)("select",{onChange:function(e){return p(e.target.value)},children:[Object(j.jsx)("option",{value:"",children:"Mise \xe0 Jour du Status"}),e.orderStatus.map((function(e){return Object(j.jsx)(c.a.Fragment,{children:e.isCompleted?null:Object(j.jsx)("option",{value:e.type,children:e.type},e.type)})}))]})}),Object(j.jsx)("div",{style:{paddingLeft:"40px",boxSizing:"border-box"},children:Object(j.jsx)(s.a,{className:"confirmOrderButton btn btn-info",onClick:function(){return function(e){var t={orderId:e,type:h};r(Object(l.k)(t))}(e._id)},children:"Confirmer"})})]})]},t)}))]})}},900:function(e,t,r){}}]);
//# sourceMappingURL=20.56231c12.chunk.js.map