(this["webpackJsonpcoreui-free-react-admin-template"]=this["webpackJsonpcoreui-free-react-admin-template"]||[]).push([[40],{757:function(e,t,o){"use strict";var r=o(3),a=o(93),s=(o(1),o(745)),n=o(758),c=o(19),l=function(e){var t=e.borderColor,o=e.backgroundColor,l=e.pointHoverBackgroundColor,i=e.dataPoints,d=e.label,b=e.pointed,j=Object(a.a)(e,["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"]),h=l||("transparent"!==o?o:t),p=[{data:i,borderColor:Object(s.getColor)(t),backgroundColor:Object(s.getColor)(o),pointBackgroundColor:Object(s.getColor)(h),pointHoverBackgroundColor:Object(s.getColor)(h),label:d}],x={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,i)-5,max:Math.max.apply(Math,i)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},m={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},O=function(){var e=b?x:m;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),g=Object(s.deepObjectsMerge)(p,j.datasets||{}),u=Object(s.deepObjectsMerge)(O,j.options||{});return Object(c.jsx)(n.c,Object(r.a)(Object(r.a)({},j),{},{datasets:g,options:u,labels:d}))};l.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=l},804:function(e,t,o){"use strict";var r=o(3),a=o(93),s=(o(1),o(745)),n=o(758),c=o(19),l=function(e){var t=e.backgroundColor,o=e.pointHoverBackgroundColor,l=e.dataPoints,i=e.label,d=(e.pointed,Object(a.a)(e,["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"])),b=[{data:l,backgroundColor:Object(s.getColor)(t),pointHoverBackgroundColor:Object(s.getColor)(o),label:i,barPercentage:.5,categoryPercentage:1}],j={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(c.jsx)(n.a,Object(r.a)(Object(r.a)({},d),{},{datasets:b,options:j,labels:i}))};l.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=l},850:function(e,t,o){"use strict";o.r(t);o(1);var r=o(714),a=o(723),s=o(757),n=o(804),c=o(19);t.default=function(){return Object(c.jsxs)(r.U,{children:[Object(c.jsx)(r.m,{sm:"6",lg:"3",children:Object(c.jsx)(r.kb,{color:"gradient-primary",header:"9.823",text:"Members online",footerSlot:Object(c.jsx)(s.a,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[65,59,84,84,51,55,40],pointHoverBackgroundColor:"primary",label:"Members",labels:"months"}),children:Object(c.jsxs)(r.r,{children:[Object(c.jsx)(r.u,{color:"transparent",children:Object(c.jsx)(a.a,{name:"cil-settings"})}),Object(c.jsxs)(r.t,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(r.s,{children:"Action"}),Object(c.jsx)(r.s,{children:"Another action"}),Object(c.jsx)(r.s,{children:"Something else here..."}),Object(c.jsx)(r.s,{disabled:!0,children:"Disabled action"})]})]})})}),Object(c.jsx)(r.m,{sm:"6",lg:"3",children:Object(c.jsx)(r.kb,{color:"gradient-info",header:"9.823",text:"Members online",footerSlot:Object(c.jsx)(s.a,{pointed:!0,className:"mt-3 mx-3",style:{height:"70px"},dataPoints:[1,18,9,17,34,22,11],pointHoverBackgroundColor:"info",options:{elements:{line:{tension:1e-5}}},label:"Members",labels:"months"}),children:Object(c.jsxs)(r.r,{children:[Object(c.jsx)(r.u,{caret:!1,color:"transparent",children:Object(c.jsx)(a.a,{name:"cil-location-pin"})}),Object(c.jsxs)(r.t,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(r.s,{children:"Action"}),Object(c.jsx)(r.s,{children:"Another action"}),Object(c.jsx)(r.s,{children:"Something else here..."}),Object(c.jsx)(r.s,{disabled:!0,children:"Disabled action"})]})]})})}),Object(c.jsx)(r.m,{sm:"6",lg:"3",children:Object(c.jsx)(r.kb,{color:"gradient-warning",header:"9.823",text:"Members online",footerSlot:Object(c.jsx)(s.a,{className:"mt-3",style:{height:"70px"},backgroundColor:"rgba(255,255,255,.2)",dataPoints:[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},pointHoverBackgroundColor:"warning",label:"Members",labels:"months"}),children:Object(c.jsxs)(r.r,{children:[Object(c.jsx)(r.u,{color:"transparent",children:Object(c.jsx)(a.a,{name:"cil-settings"})}),Object(c.jsxs)(r.t,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(r.s,{children:"Action"}),Object(c.jsx)(r.s,{children:"Another action"}),Object(c.jsx)(r.s,{children:"Something else here..."}),Object(c.jsx)(r.s,{disabled:!0,children:"Disabled action"})]})]})})}),Object(c.jsx)(r.m,{sm:"6",lg:"3",children:Object(c.jsx)(r.kb,{color:"gradient-danger",header:"9.823",text:"Members online",footerSlot:Object(c.jsx)(n.a,{className:"mt-3 mx-3",style:{height:"70px"},backgroundColor:"rgb(250, 152, 152)",label:"Members",labels:"months"}),children:Object(c.jsxs)(r.r,{children:[Object(c.jsx)(r.u,{caret:!0,className:"text-white",color:"transparent",children:Object(c.jsx)(a.a,{name:"cil-settings"})}),Object(c.jsxs)(r.t,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(r.s,{children:"Action"}),Object(c.jsx)(r.s,{children:"Another action"}),Object(c.jsx)(r.s,{children:"Something else here..."}),Object(c.jsx)(r.s,{disabled:!0,children:"Disabled action"})]})]})})})]})}}}]);
//# sourceMappingURL=40.ca863184.chunk.js.map