(window.webpackJsonp=window.webpackJsonp||[]).push([["film-list"],{133:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FilmListSync=t.FilmList=t.default=void 0;var i=m(n(39)),u=m(n(40)),a=m(n(63)),l=m(n(23)),r=m(n(24)),s=m(n(64)),d=m(n(65)),o=n(10),f=n(41),p=m(n(145)),c=m(n(146));function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){return(0,l.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"renderAsync",value:function(){var e=(0,u.default)(i.default.mark(function e(t){var n,u,a,l;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,u=n.route,a=n.swapi,l={route:u},t.show((0,o.h)(v,l)),e.next=5,a.fetchList("/films/");case 5:return l.planets=e.sent,l.planets.more(),e.abrupt("return",(0,o.h)(v,l));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(f.AsyncComponent);h.displayName="FilmList";var v=function(e){function t(){return(0,l.default)(this,t),(0,s.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.planets,n=e.route;if(!t)return(0,o.h)(c.default,null);var i={items:t,field:"title",pageName:"film-summary",route:n};return(0,o.h)("div",null,(0,o.h)("h1",null,"Films"),(0,o.h)(p.default,i))}}]),t}(o.Component);v.displayName="FilmListSync",t.default=h,t.FilmList=h,t.FilmListSync=v},145:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var i=n(10);function u(e){var t=e.route,n=e.urls,u=e.items,a=e.field,l=e.pageName;return n&&("string"==typeof n&&(n=[n],u=[u]),u=n.map(function(e,t){var n=u?u[t]:null;return n||(n={url:e,pending:!0}),n})),u?0===u.length?(0,i.h)("ul",{className:"empty"},(0,i.h)("li",null,(0,i.h)("span",null,"none"))):(0,i.h)("ul",null,u.map(function(e){var n=t.extractID(e.url),u=t.find(l,{id:n}),r=e.pending?"...":e[a],s={href:u,className:e.pending?"pending":void 0};return(0,i.h)("li",null,(0,i.h)("a",s,r))})):null}u.defaultProps={field:"name"},u.displayName="List",t.default=u,t.List=u},146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var i=n(10);function u(){return(0,i.h)("div",{className:"loading"},(0,i.h)("div",null,(0,i.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}u.displayName="Loading",t.default=u,t.Loading=u}}]);