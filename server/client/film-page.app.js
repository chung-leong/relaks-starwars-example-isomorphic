exports.ids=["film-page"],exports.modules={"./pages/film-page.jsx":function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.FilmPageSync=t.FilmPage=t.default=void 0;var n=l("../node_modules/babel-runtime/regenerator/index.js"),r=a(n),s=l("../node_modules/babel-runtime/helpers/asyncToGenerator.js"),u=a(s),i=l("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),d=a(i),c=l("../node_modules/babel-runtime/helpers/classCallCheck.js"),m=a(c),o=l("../node_modules/babel-runtime/helpers/createClass.js"),f=a(o),p=l("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),h=a(p),g=l("../node_modules/babel-runtime/helpers/inherits.js"),E=a(g),_=l("../node_modules/react/index.js"),v=a(_),y=l("../node_modules/relaks/index.js"),b=l("./widgets/list.jsx"),j=l("./widgets/loading.jsx"),x=a(j),N=function(e){function t(){return(0,m.default)(this,t),(0,h.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,f.default)(t,[{key:"renderAsync",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,u.default)(r.default.mark(function e(t){var l,a,n,s;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=this.props,a=l.route,n=l.swapi,s={film:null,characters:null,planets:null,species:null,vehicles:null,starships:null,route:a},t.show(v.default.createElement(w,s)),e.next=5,n.fetchOne("/films/"+a.params.id+"/");case 5:return s.film=e.sent,t.show(v.default.createElement(w,s)),e.next=9,n.fetchMultiple(s.film.characters,{minimum:5});case 9:return s.characters=e.sent,t.show(v.default.createElement(w,s)),e.next=13,n.fetchMultiple(s.film.species,{minimum:"60%"});case 13:return s.species=e.sent,t.show(v.default.createElement(w,s)),e.next=17,n.fetchMultiple(s.film.planets);case 17:return s.planets=e.sent,t.show(v.default.createElement(w,s)),e.next=21,n.fetchMultiple(s.film.vehicles,{minimum:"60%"});case 21:return s.vehicles=e.sent,t.show(v.default.createElement(w,s)),e.next=25,n.fetchMultiple(s.film.starships,{minimum:"60%"});case 25:return s.starships=e.sent,e.abrupt("return",v.default.createElement(w,s));case 27:case"end":return e.stop()}},e,this)}));return e}()}]),t}(y.AsyncComponent);N.displayName="FilmPage";var w=function(e){function t(){return(0,m.default)(this,t),(0,h.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.route,l=e.film,a=e.characters,n=e.species,r=e.planets,s=e.vehicles,u=e.starships;return l?v.default.createElement("div",{className:"character-page"},v.default.createElement("h1",null,l.title),v.default.createElement("p",null,l.opening_crawl),v.default.createElement("div",null,"Director: ",l.director),v.default.createElement("div",null,"Producer: ",l.producer),v.default.createElement("div",null,"Release date: ",l.release_date),v.default.createElement("h2",null,"Characters"),v.default.createElement(b.List,{urls:l.characters,items:a,pageName:"character-summary",route:t}),v.default.createElement("h2",null,"Species"),v.default.createElement(b.List,{urls:l.species,items:n,pageName:"species-summary",route:t}),v.default.createElement("h2",null,"Planets"),v.default.createElement(b.List,{urls:l.planets,items:r,pageName:"planet-summary",route:t}),v.default.createElement("h2",null,"Vehicles"),v.default.createElement(b.List,{urls:l.vehicles,items:s,pageName:"vehicle-summary",route:t}),v.default.createElement("h2",null,"Starships"),v.default.createElement(b.List,{urls:l.starships,items:u,pageName:"starship-summary",route:t})):v.default.createElement(x.default,null)}}]),t}(_.PureComponent);w.displayName="FilmPageSync",t.default=N,t.FilmPage=N,t.FilmPageSync=w},"./widgets/list.jsx":function(e,t,l){"use strict";function a(e){var t=e.route,l=e.urls,a=e.items,n=e.field,s=e.pageName;return l&&("string"==typeof l?a=a?[a]:[{url:l,pending:!0}]:l instanceof Array&&(a=l.map(function(e,t){var l=a?a[t]:null;return l||(l={url:e,pending:!0}),l}))),a?0===a.length?r.default.createElement("ul",{className:"empty"},r.default.createElement("li",null,r.default.createElement("span",null,"none"))):r.default.createElement("ul",null,a.map(function(e){var l=t.extractID(e.url),a=t.find(s,{id:l}),u=e.pending?"...":e[n],i={href:a,className:e.pending?"pending":void 0};return r.default.createElement("li",{key:l},r.default.createElement("a",i,u))})):null}Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var n=l("../node_modules/react/index.js"),r=function(e){return e&&e.__esModule?e:{default:e}}(n);a.defaultProps={field:"name"},a.displayName="List",t.default=a,t.List=a},"./widgets/loading.jsx":function(e,t,l){"use strict";function a(){return r.default.createElement("div",{className:"loading"},r.default.createElement("div",null,r.default.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var n=l("../node_modules/react/index.js"),r=function(e){return e&&e.__esModule?e:{default:e}}(n);a.displayName="Loading",t.default=a,t.Loading=a}};