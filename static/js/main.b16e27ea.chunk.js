(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,number:2,suite:"Spade",color:"#252525"},{id:2,number:3,suite:"Spade",color:"#252525"},{id:3,number:4,suite:"Spade",color:"#252525"},{id:4,number:5,suite:"Spade",color:"#252525"},{id:5,number:"J",suite:"Clover",color:"#252525"},{id:6,number:"Q",suite:"Clover",color:"#252525"},{id:7,number:"K",suite:"Clover",color:"#252525"},{id:8,number:"A",suite:"Clover",color:"#252525"},{id:9,number:2,suite:"Heart",color:"#f54242"},{id:10,number:3,suite:"Heart",color:"#f54242"},{id:11,number:4,suite:"Heart",color:"#f54242"},{id:12,number:5,suite:"Heart",color:"#f54242"},{id:13,number:"J",suite:"Diamond",color:"#f54242"},{id:14,number:"Q",suite:"Diamond",color:"#f54242"},{id:15,number:"K",suite:"Diamond",color:"#f54242"},{id:16,number:"A",suite:"Diamond",color:"#f54242"}]},,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(2),s=a.n(c),o=(a(15),a(16),a(3)),i=a(4),l=a(7),u=a(5),m=a(8);a(17);var d=function(e){return n.a.createElement("div",{className:"nav"},n.a.createElement("div",{className:"round nav-item"},n.a.createElement("h3",{className:"m-0"},n.a.createElement("span",{className:"nav-title"},"Round"),e.round)),n.a.createElement("div",{className:"message"},n.a.createElement("h3",null,e.message)),n.a.createElement("div",{className:"score nav-item"},n.a.createElement("h3",{className:"m-0"},n.a.createElement("span",{className:"nav-title"},"Score"),e.score)))};a(18);var f=function(){return n.a.createElement("div",{className:"spade"},n.a.createElement("i",{className:"fas fa-heart rotated-heart"}),n.a.createElement("div",{className:"stem"}))};a(19);var v=function(){return n.a.createElement("div",{className:"clover"},n.a.createElement("div",{className:"top-circle circle"}),n.a.createElement("div",{className:"left-circle circle"}),n.a.createElement("div",{className:"right-circle circle"}),n.a.createElement("div",{className:"stem"}))};a(20);var h=function(){return n.a.createElement("i",{className:"fas fa-heart heart"})};a(21);var E=function(){return n.a.createElement("div",{className:"diamond"},n.a.createElement("div",{className:"diamond-shape"}))},b=(a(22),function(e){return"Spade"===e?n.a.createElement(f,null):"Clover"===e?n.a.createElement(v,null):"Diamond"===e?n.a.createElement(E,null):"Heart"===e?n.a.createElement(h,null):void 0});var p=function(e){return n.a.createElement("div",{className:"card",onClick:function(){return e.click(e.id)}},n.a.createElement("h3",{className:"card-number",style:{color:e.color}},e.number),n.a.createElement("div",{className:"card-suite"},b(e.suite)))},N=a(6),g=(a(23),function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={round:1,score:0,cards:N,message:"Don't click on the same card twice!"},a.shuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[a],e[a]=r}return e},a.handleScore=function(e){var t=a.state.cards.filter(function(t){return t.id===e});!0!==t[0].clicked?16===a.state.round?a.resetGame("You win!"):(t[0].clicked=!0,a.setState({round:a.state.round+1,score:a.state.score+100,cards:a.state.cards,message:"Correct!"})):a.resetGame("You lose!"),a.shuffle(a.state.cards)},a.resetGame=function(e){a.shuffle(a.state.cards),a.state.cards.map(function(e){return e.clicked=!1}),a.setState({round:1,score:0,cards:a.state.cards,message:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.state.cards.map(function(e){return e.clicked=!1}),this.shuffle(this.state.cards),this.setState({cards:this.state.cards})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(d,{round:this.state.round,message:this.state.message,score:this.state.score}),n.a.createElement("div",{className:"gameboard"},this.state.cards.map(function(t){return n.a.createElement(p,{key:t.id,id:t.id,number:t.number,suite:t.suite,color:t.color,click:e.handleScore})})))}}]),t}(n.a.Component));var k=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.b16e27ea.chunk.js.map