(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(8),o=n.n(s),r=n(6),c=n(2),a=n(3),i=n(5),l=n(4),u=n(1),p=n.n(u),b=(n(13),n(0)),d=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.props.goods;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:"App__list",children:t.map((function(t){return Object(b.jsx)("li",{className:"App__item",children:t},t)}))})})}}]),n}(p.a.Component),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={goods:j,isStarted:!1},t.start=function(){t.setState((function(t){return{isStarted:!t.isStarted}}))},t.reverseGoods=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).reverse()}}))},t.setSortByAlphabetically=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.setSortByLength=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t.resetGoodsList=function(){t.setState({goods:j})},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this.state,e=t.isStarted,n=t.goods;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"App__title",children:"Goods"}),e&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{goods:n}),Object(b.jsxs)("div",{className:"App__wrap-btns",children:[Object(b.jsx)("button",{type:"button",className:"App__btn",onClick:this.reverseGoods,children:"Reverse"}),Object(b.jsx)("button",{type:"button",className:"App__btn",onClick:this.setSortByAlphabetically,children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:"App__btn",onClick:this.setSortByLength,children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:"App__btn App__btn--color--red",onClick:this.resetGoodsList,children:"Reset"})]})]}),!e&&Object(b.jsx)("button",{type:"button",className:"App__btn",onClick:this.start,children:"Start"})]})}}]),n}(p.a.Component),g=h;o.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e939a8af.chunk.js.map