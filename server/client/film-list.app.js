exports.ids=["film-list"],exports.modules={"./pages/film-list.jsx":function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.FilmListSync=t.FilmList=t.default=void 0;var a=l("../node_modules/babel-runtime/regenerator/index.js"),u=n(a),r=l("../node_modules/babel-runtime/helpers/asyncToGenerator.js"),s=n(r),i=l("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),d=n(i),o=l("../node_modules/babel-runtime/helpers/classCallCheck.js"),f=n(o),m=l("../node_modules/babel-runtime/helpers/createClass.js"),c=n(m),p=l("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),_=n(p),v=l("../node_modules/babel-runtime/helpers/inherits.js"),y=n(v),g=l("../node_modules/react/index.js"),h=n(g),b=l("../node_modules/relaks/index.js"),j=l("./widgets/list.jsx"),x=n(j),E=l("./widgets/loading.jsx"),L=n(E),N=function(e){function t(){return(0,f.default)(this,t),(0,_.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,y.default)(t,e),(0,c.default)(t,[{key:"renderAsync",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,s.default)(u.default.mark(function e(t){var l,n,a,r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=this.props,n=l.route,a=l.swapi,r={planets:null,route:n},t.show(h.default.createElement(w,r)),e.next=5,a.fetchList("/films/");case 5:return r.planets=e.sent,r.planets.more(),e.abrupt("return",h.default.createElement(w,r));case 8:case"end":return e.stop()}},e,this)}));return e}()}]),t}(b.AsyncComponent);N.displayName="FilmList";var w=function(e){function t(){return(0,f.default)(this,t),(0,_.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,y.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.planets,l=e.route;if(!t)return h.default.createElement(L.default,null);var n={items:t,field:"title",pageName:"film-summary",route:l};return h.default.createElement("div",null,h.default.createElement("h1",null,"Films"),h.default.createElement(x.default,n))}}]),t}(g.PureComponent);w.displayName="FilmListSync",t.default=N,t.FilmList=N,t.FilmListSync=w},"./widgets/list.jsx":function(e,t,l){"use strict";function n(e){var t=e.route,l=e.urls,n=e.items,a=e.field,r=e.pageName;return l&&("string"==typeof l?n=n?[n]:[{url:l,pending:!0}]:l instanceof Array&&(n=l.map(function(e,t){var l=n?n[t]:null;return l||(l={url:e,pending:!0}),l}))),n?0===n.length?u.default.createElement("ul",{className:"empty"},u.default.createElement("li",null,u.default.createElement("span",null,"none"))):u.default.createElement("ul",null,n.map(function(e){var l=t.extractID(e.url),n=t.find(r,{id:l}),s=e.pending?"...":e[a],i={href:n,className:e.pending?"pending":void 0};return u.default.createElement("li",{key:l},u.default.createElement("a",i,s))})):null}Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var a=l("../node_modules/react/index.js"),u=function(e){return e&&e.__esModule?e:{default:e}}(a);n.defaultProps={field:"name"},n.displayName="List",t.default=n,t.List=n},"./widgets/loading.jsx":function(e,t,l){"use strict";function n(){return u.default.createElement("div",{className:"loading"},u.default.createElement("div",null,u.default.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var a=l("../node_modules/react/index.js"),u=function(e){return e&&e.__esModule?e:{default:e}}(a);n.displayName="Loading",t.default=n,t.Loading=n}};