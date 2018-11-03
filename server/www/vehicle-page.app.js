webpackJsonp(["vehicle-page"],{"./pages/vehicle-page.jsx":function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.VehiclePageSync=t.VehiclePage=t.default=void 0;var n=l("../node_modules/babel-runtime/regenerator/index.js"),u=a(n),r=l("../node_modules/babel-runtime/helpers/asyncToGenerator.js"),s=a(r),i=l("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),d=a(i),c=l("../node_modules/babel-runtime/helpers/classCallCheck.js"),o=a(c),f=l("../node_modules/babel-runtime/helpers/createClass.js"),m=a(f),p=l("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),h=a(p),v=l("../node_modules/babel-runtime/helpers/inherits.js"),g=a(v),_=l("../node_modules/react/index.js"),E=a(_),y=l("../node_modules/relaks/index.js"),b=l("./widgets/list.jsx"),j=l("./widgets/loading.jsx"),x=a(j),w=function(e){function t(){return(0,o.default)(this,t),(0,h.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,m.default)(t,[{key:"renderAsync",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,s.default)(u.default.mark(function e(t){var l,a,n,r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=this.props,a=l.route,n=l.swapi,r={route:a},t.show(E.default.createElement(P,r)),e.next=5,n.fetchOne("/vehicles/"+a.params.id+"/");case 5:return r.vehicle=e.sent,t.show(E.default.createElement(P,r)),e.next=9,n.fetchMultiple(r.vehicle.films,{minimum:"60%"});case 9:return r.films=e.sent,t.show(E.default.createElement(P,r)),e.next=13,n.fetchMultiple(r.vehicle.pilots,{minimum:"60%"});case 13:return r.pilots=e.sent,t.show(E.default.createElement(P,r)),e.abrupt("return",E.default.createElement(P,r));case 16:case"end":return e.stop()}},e,this)}));return e}()}]),t}(y.AsyncComponent);w.displayName="VehiclePage";var P=function(e){function t(){return(0,o.default)(this,t),(0,h.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this.props,t=e.route,l=e.vehicle,a=e.pilots,n=e.films;return l?E.default.createElement("div",null,E.default.createElement("h1",null,l.name),E.default.createElement("div",null,"Model: ",l.model),E.default.createElement("div",null,"Manufacturer: ",l.manufacturer),E.default.createElement("div",null,"Cost in credits: ",l.cost_in_credits),E.default.createElement("div",null,"Length: ",l.length," m"),E.default.createElement("div",null,"Max atmosphering speed: ",l.max_atmosphering_speed," km/h"),E.default.createElement("div",null,"Crew: ",l.crew),E.default.createElement("div",null,"Passengers: ",l.passenger),E.default.createElement("div",null,"Cargo capacity: ",l.cargo_capacity," kg"),E.default.createElement("div",null,"Consumables: ",l.consumables),E.default.createElement("div",null,"Vehicle class: ",l.vehicle_class),E.default.createElement("h2",null,"Pilots"),E.default.createElement(b.List,{urls:l.pilots,items:a,pageName:"character-summary",route:t}),E.default.createElement("h2",null,"Films"),E.default.createElement(b.List,{urls:l.films,items:n,field:"title",pageName:"film-summary",route:t})):E.default.createElement(x.default,null)}}]),t}(_.PureComponent);P.displayName="VehiclePageSync",t.default=w,t.VehiclePage=w,t.VehiclePageSync=P},"./widgets/list.jsx":function(e,t,l){"use strict";function a(e){var t=e.route,l=e.urls,a=e.items,n=e.field,r=e.pageName;return l&&("string"==typeof l&&(l=[l],a=[a]),a=l.map(function(e,t){var l=a?a[t]:null;return l||(l={url:e,pending:!0}),l})),a?0===a.length?u.default.createElement("ul",{className:"empty"},u.default.createElement("li",null,u.default.createElement("span",null,"none"))):u.default.createElement("ul",null,a.map(function(e){var l=t.extractID(e.url),a=t.find(r,{id:l}),s=e.pending?"...":e[n],i={href:a,className:e.pending?"pending":void 0};return u.default.createElement("li",{key:l},u.default.createElement("a",i,s))})):null}Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var n=l("../node_modules/react/index.js"),u=function(e){return e&&e.__esModule?e:{default:e}}(n);a.defaultProps={field:"name"},a.displayName="List",t.default=a,t.List=a},"./widgets/loading.jsx":function(e,t,l){"use strict";function a(){return u.default.createElement("div",{className:"loading"},u.default.createElement("div",null,u.default.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var n=l("../node_modules/react/index.js"),u=function(e){return e&&e.__esModule?e:{default:e}}(n);a.displayName="Loading",t.default=a,t.Loading=a}});