(this["webpackJsonpbdnd-ts"]=this["webpackJsonpbdnd-ts"]||[]).push([[0],{37:function(e,a,t){e.exports=t(84)},42:function(e,a,t){},43:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),d=t(6),l=t.n(d),c=(t(42),t(20)),o=t(36),i=(t(43),t(13)),s=1,m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{header:"Header-".concat(s++),id:s,items:e}},u=function(e){var a=e.children,t=e.droppableId,n=e.type;return r.a.createElement(i.c,{droppableId:t,type:n||t},(function(e){return r.a.createElement("tbody",Object.assign({ref:e.innerRef},e.droppableProps),a,e.placeholder)}))},b=function(e){var a=e.draggableId,t=e.index,n=e.children,d=e.isHandle;return r.a.createElement(i.b,{draggableId:a,index:t},(function(e){return r.a.createElement("tr",Object.assign({ref:e.innerRef},e.draggableProps,d?e.dragHandleProps:{}),n(d?null:e.dragHandleProps))}))};var p=function(){var e=Object(n.useState)([m([m([m(),m()]),m([m(),m()])]),m([m([m(),m()]),m([m(),m()])]),m([m([m(),m()]),m([m(),m()])])]),a=Object(o.a)(e,2),t=a[0],d=a[1],l=r.a.useCallback((function(e){return e.flatMap((function e(a){return[a].concat(Object(c.a)(a.items.flatMap(e)))})).reduce((function(e,a){return e[a.header]=a,e}),{})}),[]);return r.a.createElement(i.a,{onDragEnd:function(e){if(e.destination&&e.destination.droppableId===e.source.droppableId){var a,n=Object(c.a)(t),r=(a="mainItems"===e.destination.droppableId?n:l(n)[e.destination.droppableId].items)[e.destination.index];a[e.destination.index]=a[e.source.index],a[e.source.index]=r,console.log(n),d(n)}}},r.a.createElement("table",{className:"table w-100 m-0 border-0"},r.a.createElement(u,{droppableId:"mainItems"},t.map((function(e,a){return r.a.createElement(b,{draggableId:e.header,index:a,key:e.header},(function(a){return r.a.createElement("td",{className:"p-0"},r.a.createElement("table",{className:"table w-100 m-0 border-0"},r.a.createElement("thead",null,r.a.createElement("tr",Object.assign({},a,{className:"table-primary"}),r.a.createElement("td",null,e.header))),r.a.createElement(u,{droppableId:e.header},e.items.map((function(e,a){return r.a.createElement(b,{draggableId:e.header,index:a,key:e.header},(function(a){return r.a.createElement("td",{className:"p-0"},r.a.createElement("table",{className:"table w-100 m-0 border-0"},r.a.createElement("thead",null,r.a.createElement("tr",Object.assign({},a,{className:"table-secondary"}),r.a.createElement("td",null,e.header))),r.a.createElement(u,{droppableId:e.header},e.items.map((function(e,a){return r.a.createElement(b,{draggableId:e.header,index:a,key:e.header,isHandle:!0},(function(){return r.a.createElement("td",null,e.header)}))})))))}))})))))}))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(83);l.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.d1c5e372.chunk.js.map