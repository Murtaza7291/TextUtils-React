(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(3),o=a.n(r),c=(a(13),a(1));a(15);function s(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/about"},e.about))),n.a.createElement("form",{className:"d-flex",role:"search"},n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.toggleMode,"data-color":"black"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Black Dark Mode")))))))}function m(e){var t=Object(l.useState)("Enter your text here"),a=Object(c.a)(t,2),r=a[0],o=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{backgroundColor:"dark"===e.mode?"black":"white"}},n.a.createElement("h1",{style:{color:"dark"===e.mode?"white":"black"}},e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"8",value:r,onChange:function(e){o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"black":"white",color:"dark"===e.mode?"white":"black"}}),n.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){o(r.toUpperCase()),e.showAlert("Text coverted to Uppercase","success")}},"Convert to Uppercase"),n.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){o(r.toLowerCase()),e.showAlert("Text coverted to Lowercase","success")}},"Convert to Lowercase"),n.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){o(""),e.showAlert("Text area has cleared","success")}},"Clear Text"),n.a.createElement("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var t=document.getElementById("exampleFormControlTextarea1");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard","success")}},"Copy Text"))),n.a.createElement("div",{className:"container"},n.a.createElement("h1",{style:{color:"dark"===e.mode?"white":"black"}},"Your text summary"),n.a.createElement("p",{style:{color:"dark"===e.mode?"white":"black"}},0==r.length?r.split(" ").length-1:r.split(" ").length," words and ",r.length," characters"),n.a.createElement("p",{style:{color:"dark"===e.mode?"white":"black"}},.008*r.split(" ").length," Minutes read"),n.a.createElement("h2",{style:{color:"dark"===e.mode?"white":"black"}},"Preview of your text"),n.a.createElement("p",{style:{color:"dark"===e.mode?"white":"black"}},r)))}s.defaultProps={title:"Add title here",about:"Add about us details here"};var i=function(e){var t=Object(l.useState)(null),a=Object(c.a)(t,2),r=(a[0],a[1]),o=function(e,t){r({msg:e,type:t}),setTimeout(function(){r(null)},1500)},i=Object(l.useState)("light"),d=Object(c.a)(i,2),u=d[0],b=d[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,{title:"TextUtils",about:"About TextUtils",mode:u,toggleMode:function(){"light"===u?(b("dark"),document.body.style.backgroundColor="black",o("Dark mode enabled","success")):"dark"===u&&(b("light"),document.body.style.backgroundColor="white",o("Dark mode disabled","success"))}}),n.a.createElement(m,{heading:"Enter the text to analyze below",mode:u,showAlert:o}))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),l(e),n(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.2343d6ad.chunk.js.map