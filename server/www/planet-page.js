(window.webpackJsonp=window.webpackJsonp||[]).push([["planet-page"],{138:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.PlanetPageSync=t.PlanetPage=t.default=void 0;var a=c(n(39)),l=c(n(40)),i=c(n(63)),r=c(n(23)),u=c(n(24)),s=c(n(64)),d=c(n(65)),o=n(10),p=n(41),f=n(145),h=c(n(146));function c(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,u.default)(t,[{key:"renderAsync",value:function(){var e=(0,l.default)(a.default.mark(function e(t){var n,l,i,r;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,l=n.route,i=n.swapi,r={route:l},t.show((0,o.h)(v,r)),e.next=5,i.fetchOne("/planets/"+l.params.id+"/");case 5:return r.planet=e.sent,t.show((0,o.h)(v,r)),e.next=9,i.fetchMultiple(r.planet.films,{minimum:"60%"});case 9:return r.films=e.sent,t.show((0,o.h)(v,r)),e.next=13,i.fetchMultiple(r.planet.residents,{minimum:"60%"});case 13:return r.residents=e.sent,t.show((0,o.h)(v,r)),e.abrupt("return",(0,o.h)(v,r));case 16:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(p.AsyncComponent);m.displayName="PlanetPage";var v=function(e){function t(){return(0,r.default)(this,t),(0,s.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.route,n=e.planet,a=e.films,l=e.residents;return n?(0,o.h)("div",null,(0,o.h)("h1",null,n.name),(0,o.h)("div",null,"Diameter: ",n.diameter," km"),(0,o.h)("div",null,"Rotation period: ",n.rotation_period," hr"),(0,o.h)("div",null,"Orbital period: ",n.orbital_period," days"),(0,o.h)("div",null,"Climate: ",n.climate),(0,o.h)("div",null,"Gravity: ",n.gravity),(0,o.h)("div",null,"Terrain: ",n.terrain),(0,o.h)("div",null,"Surface water: ",n.surface_water),(0,o.h)("div",null,"Population: ",n.population),(0,o.h)("h2",null,"Residents"),(0,o.h)(f.List,{urls:n.residents,items:l,pageName:"character-summary",route:t}),(0,o.h)("h2",null,"Films"),(0,o.h)(f.List,{urls:n.films,items:a,field:"title",pageName:"film-summary",route:t})):(0,o.h)(h.default,null)}}]),t}(o.Component);v.displayName="PlanetPageSync",t.default=m,t.PlanetPage=m,t.PlanetPageSync=v},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var a=n(10);function l(e){var t=e.route,n=e.urls,l=e.items,i=e.field,r=e.pageName;return n&&("string"==typeof n&&(n=[n],l=[l]),l=n.map(function(e,t){var n=l?l[t]:null;return n||(n={url:e,pending:!0}),n})),l?0===l.length?(0,a.h)("ul",{className:"empty"},(0,a.h)("li",null,(0,a.h)("span",null,"none"))):(0,a.h)("ul",null,l.map(function(e){var n=t.extractID(e.url),l=t.find(r,{id:n}),u=e.pending?"...":e[i],s={href:l,className:e.pending?"pending":void 0};return(0,a.h)("li",null,(0,a.h)("a",s,u))})):null}l.defaultProps={field:"name"},l.displayName="List",t.default=l,t.List=l},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var a=n(10);function l(){return(0,a.h)("div",{className:"loading"},(0,a.h)("div",null,(0,a.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}l.displayName="Loading",t.default=l,t.Loading=l}}]);