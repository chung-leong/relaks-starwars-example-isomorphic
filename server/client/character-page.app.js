exports.ids=["character-page"],exports.modules={"./pages/character-page.jsx":function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterPageSync=t.CharacterPage=t.default=void 0;var r=l("../node_modules/babel-runtime/regenerator/index.js"),n=a(r),s=l("../node_modules/babel-runtime/helpers/asyncToGenerator.js"),u=a(s),i=l("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),d=a(i),o=l("../node_modules/babel-runtime/helpers/classCallCheck.js"),c=a(o),m=l("../node_modules/babel-runtime/helpers/createClass.js"),f=a(m),p=l("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),h=a(p),g=l("../node_modules/babel-runtime/helpers/inherits.js"),E=a(g),v=l("../node_modules/react/index.js"),_=a(v),y=l("../node_modules/relaks/index.js"),b=l("./widgets/list.jsx"),j=l("./widgets/loading.jsx"),w=a(j),x=function(e){function t(){return(0,c.default)(this,t),(0,h.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,f.default)(t,[{key:"renderAsync",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,u.default)(n.default.mark(function e(t){var l,a,r,s;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l=this.props,a=l.route,r=l.swapi,s={person:null,homeworld:null,films:null,species:null,vehicles:null,starships:null,route:a},t.show(_.default.createElement(N,s)),e.next=5,r.fetchOne("/people/"+a.params.id+"/");case 5:return s.person=e.sent,t.show(_.default.createElement(N,s)),e.next=9,r.fetchMultiple(s.person.films,{partial:.4});case 9:return s.films=e.sent,t.show(_.default.createElement(N,s)),e.next=13,r.fetchMultiple(s.person.species,{partial:.4});case 13:return s.species=e.sent,t.show(_.default.createElement(N,s)),e.next=17,r.fetchOne(s.person.homeworld);case 17:return s.homeworld=e.sent,t.show(_.default.createElement(N,s)),e.next=21,r.fetchMultiple(s.person.vehicles,{partial:.4});case 21:return s.vehicles=e.sent,t.show(_.default.createElement(N,s)),e.next=25,r.fetchMultiple(s.person.starships,{partial:.4});case 25:return s.starships=e.sent,t.show(_.default.createElement(N,s)),e.abrupt("return",_.default.createElement(N,s));case 28:case"end":return e.stop()}},e,this)}));return e}()}]),t}(y.AsyncComponent);x.displayName="CharacterPage";var N=function(e){function t(){return(0,c.default)(this,t),(0,h.default)(this,(t.__proto__||(0,d.default)(t)).apply(this,arguments))}return(0,E.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.route,l=e.person,a=e.homeworld,r=e.films,n=e.species,s=e.vehicles,u=e.starships;return l?_.default.createElement("div",{className:"character-page"},_.default.createElement("h1",null,l.name),_.default.createElement("div",null,"Height: ",l.height," cm"),_.default.createElement("div",null,"Mass: ",l.mass," kg"),_.default.createElement("div",null,"Hair color: ",l.hair_color),_.default.createElement("div",null,"Skin color: ",l.skin_color),_.default.createElement("div",null,"Hair color: ",l.hair_color),_.default.createElement("div",null,"Eye color: ",l.eye_color),_.default.createElement("div",null,"Birth year: ",l.birth_year),_.default.createElement("h2",null,"Homeworld"),_.default.createElement(b.List,{urls:l.homeworld,items:a,pageName:"planet-summary",route:t}),_.default.createElement("h2",null,"Films"),_.default.createElement(b.List,{urls:l.films,items:r,field:"title",pageName:"film-summary",route:t}),_.default.createElement("h2",null,"Species"),_.default.createElement(b.List,{urls:l.species,items:n,pageName:"species-summary",route:t}),_.default.createElement("h2",null,"Vehicles"),_.default.createElement(b.List,{urls:l.vehicles,items:s,pageName:"vehicle-summary",route:t}),_.default.createElement("h2",null,"Starships"),_.default.createElement(b.List,{urls:l.starships,items:u,pageName:"starship-summary",route:t})):_.default.createElement(w.default,null)}}]),t}(v.PureComponent);N.displayName="CharacterPageSync",t.default=x,t.CharacterPage=x,t.CharacterPageSync=N},"./widgets/list.jsx":function(e,t,l){"use strict";function a(e){var t=e.route,l=e.urls,a=e.items,r=e.field,s=e.pageName;return l&&("string"==typeof l?a=a?[a]:[{url:l,pending:!0}]:l instanceof Array&&(a=l.map(function(e,t){var l=a?a[t]:null;return l||(l={url:e,pending:!0}),l}))),a?0===a.length?n.default.createElement("ul",{className:"empty"},n.default.createElement("li",null,n.default.createElement("span",null,"none"))):n.default.createElement("ul",null,a.map(function(e){var l=t.extractID(e.url),a=t.find(s,{id:l}),u=e.pending?"...":e[r],i={href:a,className:e.pending?"pending":void 0};return n.default.createElement("li",null,n.default.createElement("a",i,u))})):null}Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var r=l("../node_modules/react/index.js"),n=function(e){return e&&e.__esModule?e:{default:e}}(r);a.defaultProps={field:"name"},a.displayName="List",t.default=a,t.List=a},"./widgets/loading.jsx":function(e,t,l){"use strict";function a(){return n.default.createElement("div",{className:"loading"},n.default.createElement("div",null,n.default.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var r=l("../node_modules/react/index.js"),n=function(e){return e&&e.__esModule?e:{default:e}}(r);a.displayName="Loading",t.default=a,t.Loading=a}};