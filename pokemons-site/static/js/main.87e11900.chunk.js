(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c,a=n(1),s=n(0),r=n.n(s),o=n(19),i=n.n(o),u=(n(26),n(9)),j=n(2),p=Object(s.createContext)(),m=(n(27),function(){var e=Object(s.useContext)(p),t=e.getPokemons,n=e.setMenu,c=e.sidebar,r=e.menu,o=e.loading;return Object(s.useEffect)((function(){t({limit:60,offset:0})}),[]),Object(a.jsxs)("div",{className:"sidebar",children:[!o&&c&&r?Object(a.jsxs)("div",{className:"sidebar-wrapper",children:[Object(a.jsx)("ul",{children:c.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsxs)(u.c,{activeClassName:"active",className:"nav-link",to:"/pokemons-site/pokemon/".concat(t+1),children:[Object(a.jsx)("img",{width:"60",height:"60",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png"),alt:e}),Object(a.jsx)("span",{children:e})]})},e)}))}),Object(a.jsx)("div",{className:"backdrop",onClick:function(){return n(!r)}})]}):null,!r&&Object(a.jsx)("button",{onClick:function(){return n(!r)},children:"menu"})]})}),b=n(11),l=n.n(b),d=n(14),O=n(13),h=n(8),f=n(7),x="GET_POKEMON",k="GET_SIDEBAR",v="GET_POKEMONS",g="SET_LOADING",N="SET_MENU",w=(c={},Object(h.a)(c,k,(function(e,t){var n=t.payload;return Object(f.a)(Object(f.a)({},e),{},{sidebar:n,loading:!1})})),Object(h.a)(c,v,(function(e,t){var n=t.payload;return Object(f.a)(Object(f.a)({},e),{},{pokemons:n,loading:!1})})),Object(h.a)(c,x,(function(e,t){var n=t.payload;return Object(f.a)(Object(f.a)({},e),{},{pokemon:n,loading:!1})})),Object(h.a)(c,g,(function(e){return Object(f.a)(Object(f.a)({},e),{},{loading:!0})})),Object(h.a)(c,N,(function(e,t){var n=t.payload;return Object(f.a)(Object(f.a)({},e),{},{menu:n})})),Object(h.a)(c,"DEFAULT",(function(e){return e})),c),y=function(e,t){return(w[t.type]||w.DEFAULT)(e,t)},E=function(e){var t=e.children,n=Object(s.useReducer)(y,{menu:!1,pokemon:{},sidebar:[],pokemons:[],loading:!1}),c=Object(O.a)(n,2),r=c[0],o=c[1],i=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(t.limit,"&offset=").concat(t.offset));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,a=[],e.next=9,c.results.forEach((function(e){a.push(e.name)}));case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(),e.next=3,i(t);case 3:return n=e.sent,e.next=6,o({type:60===t.limit?k:v,payload:n});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(),e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t,"/"));case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,a={pokemonName:c.name,experience:c.base_experience,height:c.height,weight:c.weight,stats:c.stats.map((function(e){return{baseStat:e.base_stat,statName:e.stat.name}}))},e.next=10,o({type:x,payload:a});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){return o({type:g})},b=r.pokemon,h=r.pokemons,f=r.loading,w=r.sidebar,E=r.menu;return Object(a.jsx)(p.Provider,{value:{setLoading:m,getPokemons:u,getPokemon:j,setMenu:function(e){return o({type:N,payload:e})},pokemon:b,pokemons:h,loading:f,sidebar:w,menu:E},children:t})},P=(n(37),function(e){var t=e.pokemonWiev,n=Object(j.f)();return Object(a.jsxs)("div",{className:"card",onClick:function(){return n.push("/pokemons-site/pokemon/"+t.imgUrl)},children:[Object(a.jsx)("h1",{children:t.name}),Object(a.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(t.imgUrl,".png"),alt:t.name})]})}),C=(n(38),function(){return Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("div",{})})}),S=(n(39),function(){var e=Object(s.useContext)(p),t=e.getPokemons,n=e.pokemons,c=e.loading,r=Object(s.useState)(0),o=Object(O.a)(r,2),i=o[0],u=o[1];Object(s.useEffect)((function(){t({limit:20,offset:i})}),[i]);var j=function(e){u(i+e)};return Object(a.jsxs)("div",{className:"container",children:[i>0&&Object(a.jsx)("button",{className:"nav-btn",onClick:function(){return j(-20)},children:"<"}),c?Object(a.jsx)(C,{}):Object(a.jsx)("div",{className:"cards",children:n.map((function(e,t){return Object(a.jsx)(P,{pokemonWiev:{name:e,imgUrl:t+1+i}},e)}))}),i<40&&Object(a.jsx)("button",{className:"nav-btn",onClick:function(){return j(20)},children:">"})]})}),A=(n(40),function(e){var t=e.match,n=Object(s.useContext)(p),c=n.getPokemon,r=n.setMenu,o=n.pokemon,i=n.loading,j=t.params.id;return Object(s.useEffect)((function(){c(j),r(!1)}),[j]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(u.b,{className:"home",to:"/pokemons-site/",children:"home"}),i?Object(a.jsx)(C,{}):Object(a.jsxs)("div",{className:"pokemon",children:[Object(a.jsx)("div",{className:"pokemon-image",children:Object(a.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(j,".png"),alt:o.name})}),Object(a.jsxs)("div",{className:"pokemon-info",children:[Object(a.jsxs)("h1",{children:["Name: ",o.pokemonName]}),Object(a.jsxs)("p",{children:["Base experience: ",o.experience]}),Object(a.jsxs)("p",{children:["Height: ",o.height]}),Object(a.jsxs)("p",{children:["Weight: ",o.weight]}),Object(a.jsx)("h1",{children:"Stats:"}),Object(a.jsx)("ul",{children:o.stats&&o.stats.map((function(e){return Object(a.jsxs)("li",{children:[e.statName,": ",e.baseStat]},e.statName)}))})]})]})]})}),M=function(){return Object(a.jsx)(E,{children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)(m,{}),Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{path:"/pokemons-site/",exact:!0,component:S}),Object(a.jsx)(j.a,{path:"/pokemons-site/pokemon/:id",component:A})]})]})})};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.87e11900.chunk.js.map