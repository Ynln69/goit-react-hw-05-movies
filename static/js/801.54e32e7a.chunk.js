"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[801],{4029:function(n,e,t){t.d(e,{BG:function(){return d},Bt:function(){return m},LC:function(){return h},NX:function(){return x},VI:function(){return f},Vu:function(){return g},oO:function(){return v},pg:function(){return l},wr:function(){return p}});var r=t(5861),a=t(4687),o=t.n(a),i=t(1243),c=t(1686),u=t.n(c),s="bb95fe38b7df9f87f0ecf707b6f0bb8b",p=function(){var n=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0),u().Notify.failure("Error fetching movies");case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&page=1"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0),u().Notify.failure("Error fetching movies");case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),f=function(n){return n.map((function(n){var e=n.id,t=n.title,r=n.release_date,a=n.vote_average,o=n.poster_path;return{id:e,title:t,release_date:r,rating:a.toFixed(1),poster:o?"https://image.tmdb.org/t/p/w500".concat(o):"https://thumbs.dreamstime.com/b/%D0%B8-%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%BF-%D0%B0%D0%BA%D0%B0%D1%82%D0%B0-%D0%BA%D0%B8%D0%BD%D0%BE-48746594.jpg"}}))},d=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0),u().Notify.failure("Error fetching movie");case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0),u().Notify.failure("Error fetching cast");case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),v=function(n){return n.map((function(n){var e=n.cast_id,t=n.character,r=n.name,a=n.profile_path;return{id:e,character:t,name:r,photo:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://you-anime.ru/anime-images/characters/WNbWU2vEyeW5hAyO.jpg"}}))},m=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0),u().Notify.failure("Error fetching reviews");case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),g=function(n){return n.map((function(n){var e=n.id,t=n.content,r=n.author_details;return{id:e,author:n.author,content:t,userName:r.username,avatar:r.avatar_path&&r.avatar_path.startsWith("/http")?r.avatar_path.slice(1,r.avatar_path.length):"https://image.tmdb.org/t/p/w500".concat(r.avatar_path)}}))},x=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=").concat(s,"&language=en-US"));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0),u().Notify.failure("Error fetching reviews");case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()},9245:function(n,e,t){t.d(e,{Z:function(){return u}});var r,a=t(8966),o=t(168),i=t(7402).Z.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),c=t(184),u=function(){return(0,c.jsx)(i,{children:(0,c.jsx)(a.VF,{height:"100",width:"100",color:"#ffd700",secondaryColor:"#ffd700",radius:"12.5",ariaLabel:"mutating-dots-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},3174:function(n,e,t){t.d(e,{Z:function(){return y}});var r,a,o,i,c,u,s=t(168),p=t(7402),l=t(1087),f=p.Z.ul(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 10px;\n\n  > li {\n    border-radius: 10px;\n    overflow: hidden;\n    &:hover {\n      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.45));\n    }\n  }\n  @media (min-width: 768px) {\n    flex-direction: row;\n    > li {\n      flex-basis: calc((100% - 2 * 16px) / 3);\n    }\n  }\n  @media (min-width: 1200px) {\n    > li {\n      flex-basis: calc((100% - 4 * 16px) / 5);\n    }\n  }\n"]))),d=(0,p.Z)(l.OL)(a||(a=(0,s.Z)(["\n  display: flex;\n  color: currentColor;\n  text-decoration: none;\n  flex-direction: column;\n"]))),h=p.Z.div(o||(o=(0,s.Z)(["\n  position: relative;\n  padding: 10px;\n  display: flex;\n  gap: 4px;\n  align-items: stretch;\n  flex-direction: column;\n"]))),v=p.Z.div(i||(i=(0,s.Z)(["\n  position: absolute;\n  top: -25px;\n  left: 5px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  box-shadow: 1px 1px 20px #ffd700;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: #fff;\n  background-color: #483d8b;\n"]))),m=p.Z.h2(c||(c=(0,s.Z)(["\n  margin-top: 15px;\n  font-size: 19px;\n  color: #dcdcdc;\n"]))),g=p.Z.p(u||(u=(0,s.Z)(["\n  font-size: 17px;\n  color: #dcdcdc;\n  opacity: 0.8;\n"]))),x=t(7689),b=t(184),y=function(n){var e=n.movies,t=(0,x.TH)();return(0,b.jsx)(f,{children:e.map((function(n){return(0,b.jsx)("li",{children:(0,b.jsxs)(d,{to:"/movies/".concat(n.id),state:{from:t},children:[(0,b.jsx)("img",{src:n.poster,alt:n.title}),(0,b.jsxs)(h,{children:[(0,b.jsx)(v,{children:(0,b.jsx)("b",{children:n.rating})}),(0,b.jsx)(m,{children:n.title}),(0,b.jsx)(g,{children:n.release_date})]})]})},n.id)}))})}},9801:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,o,i,c,u=t(5861),s=t(9439),p=t(4687),l=t.n(p),f=t(1686),d=t.n(f),h=t(1087),v=t(2791),m=t(168),g=t(7402),x=g.Z.main(r||(r=(0,m.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  \n}\n"]))),b=t(4029),y=g.Z.form(a||(a=(0,m.Z)(["\n  width: 250px;\n  margin-top: 20px;\n  position: relative;\n  border-radius: 100px;\n  padding: 10px 15px;\n\n  background: #ffffff;\n\n  > input {\n    border: none;\n    outline: none;\n  }\n"]))),w=g.Z.button(o||(o=(0,m.Z)(["\n  border: none;\n  position: absolute;\n  right: 4px;\n  cursor: pointer;\n  background-color: transparent;\n  opacity: 0.5;\n  &:hover {\n    opacity: 1;\n  }\n"]))),Z=["title","titleId"];function j(){return j=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},j.apply(this,arguments)}function k(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function _(n,e){var t=n.title,r=n.titleId,a=k(n,Z);return v.createElement("svg",j({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},a),t?v.createElement("title",{id:r},t):null,i||(i=v.createElement("path",{d:"M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"})),c||(c=v.createElement("path",{d:"M12.2497 12.2501L9.71216 9.71265",stroke:"black",strokeLinecap:"round",strokeLinejoin:"round"})))}var D=v.forwardRef(_),E=(t.p,t(184)),B=function(n){var e=n.value,t=n.onChange,r=n.onSubmit;return(0,E.jsxs)(y,{onSubmit:r,children:[(0,E.jsx)("input",{name:"search",type:"text",placeholder:"Movies search...",value:e,onChange:t}),(0,E.jsx)(w,{type:"submit",children:(0,E.jsx)(D,{width:"20px",height:"20px"})})]})},C=t(3174),O=t(9245),S=function(){var n=(0,v.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,v.useState)(""),o=(0,s.Z)(a,2),i=o[0],c=o[1],p=(0,v.useState)(!1),f=(0,s.Z)(p,2),m=f[0],g=f[1],y=(0,h.lr)(),w=(0,s.Z)(y,2),Z=w[0],j=w[1],k=Z.get("query");(0,v.useEffect)((function(){if(null!==k)try{var n=function(){var n=(0,u.Z)(l().mark((function n(){var e,t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(!0),n.next=3,(0,b.pg)(k);case 3:e=n.sent,(t=e.data.results).length||d().Notify.warning("Oops there are no movies by this search, try another title"),r((0,b.VI)(t));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}catch(e){console.error(e),d().Notify.failure("Error fetching movies")}finally{g(!1)}}),[k,Z]);return(0,E.jsxs)(x,{children:[(0,E.jsx)(B,{value:i,onChange:function(n){c(n.target.value)},onSubmit:function(n){var e;n.preventDefault();var t=null===(e=n.target.elements.search)||void 0===e?void 0:e.value;t&&""!==t.trim()?(c(t.toLowerCase().trim()),j({query:t.toLowerCase().trim()})):d().Notify.failure("Enter title of movie to search")}}),m&&(0,E.jsx)(O.Z,{}),t?(0,E.jsx)(C.Z,{movies:t}):(0,E.jsx)(E.Fragment,{})]})}}}]);
//# sourceMappingURL=801.54e32e7a.chunk.js.map