(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(e,t,a){},40:function(e,t,a){e.exports=a(50)},45:function(e,t,a){},46:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),i=a.n(r),l=(a(45),a(14)),c=a(10),m=a(22),s=a(23),d=a(24),u=(a(46),a(33),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).onMarkItemComplete=function(t){e.props.markItemComplete(e.props.id)},e.onDeleteItem=function(t){e.props.deleteItem(e.props.id)},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="isItemCompleted-"+(this.props.status?"done":"undone");return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"item"},o.a.createElement("input",{type:"checkbox",onChange:this.onMarkItemComplete}),o.a.createElement("span",{className:e}," ",this.props.task," "),o.a.createElement("button",{style:{float:"right",marginTop:"-4px"},type:"button",className:"btn btn-danger btn-sm",onClick:this.onDeleteItem},"x")))}}]),t}(n.Component)),p=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.items.map((function(t){return o.a.createElement(u,{id:t.id,status:t.status,task:t.task,deleteItem:e.props.deleteItem,markItemComplete:e.props.markItemComplete})})))}}]),t}(o.a.Component),h=a(91),b=a(92),f=a(90),x=a(89),g=a(88),E=a(93),v=a(87),k=a(4),C=a(94),w=Object(k.a)({root:{boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"#007bff",borderColor:"#007bff",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})(C.a),I=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={value:"",items:[]},e.handleInput=function(t){e.setState({value:t.target.value})},e.handleAddItem=function(t){if(t.preventDefault(),""!==e.state.value){var a={task:e.state.value,id:Date.now(),status:!1};e.setState((function(e){return{items:e.items.concat(a),value:""}}))}},e.handleMarkItemComplete=function(t){var a=e.state.items.map((function(e){return t===e.id&&(e.status=!e.status),e}));e.setState({items:[].concat(a)})},e.handleDeleteItem=function(t){var a=e.state.items.filter((function(e){return e.id!==t}));e.setState({items:[].concat(a)})},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{md:12,xs:12},o.a.createElement("div",{className:e.root},o.a.createElement(v.a,{position:"fixed",color:"secondary"},o.a.createElement(g.a,null,o.a.createElement(x.a,{className:e.title},"TODO LIST")))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{style:{padding:"40px"}},o.a.createElement(f.a,{container:!0},o.a.createElement(f.a,{item:!0,md:4}),o.a.createElement(f.a,{item:!0,md:4,xs:12},o.a.createElement(h.a,{style:{margin:"auto",boxShadow:"0px 0px 5px 5px rgba(0,0,0,0.3)","&:hover":{boxShadow:"0 16px 30px 12.125px rgba(0,0,0,0.3)"}}},o.a.createElement(b.a,null,o.a.createElement("div",{style:{paddingTop:"10px"}}),o.a.createElement(f.a,{container:!0,spacing:3},o.a.createElement(f.a,{item:!0,md:2}),o.a.createElement(f.a,{item:!0,md:8,xs:12},o.a.createElement(E.a,{className:e.text,id:"weight",value:this.state.value,onChange:this.handleInput,label:"Add New Task"}))),o.a.createElement(f.a,{item:!0,md:2}),o.a.createElement("br",null),o.a.createElement(f.a,{container:!0,spacing:3},o.a.createElement(f.a,{item:!0,md:4,xs:3}),o.a.createElement(f.a,{item:!0,md:4,xs:6},o.a.createElement(w,{variant:"contained",color:"primary",fullWidth:!0,disableRipple:!0,className:e.margin,onClick:this.handleAddItem},"Add"))),o.a.createElement(f.a,{item:!0,md:4,xs:3}),o.a.createElement("br",null),o.a.createElement(p,{items:this.state.items,deleteItem:this.handleDeleteItem,markItemComplete:this.handleMarkItemComplete})))),o.a.createElement(f.a,{item:!0,md:4}))))}}]),t}(n.Component),S=Object(k.a)((function(e){return{root:{flexGrow:1},button:{backgroundColor:"#bbb"},each:{width:"25%",height:"60px",fontSize:"35px",backgroundColor:"blue",color:"white"},eachac:{width:"25%",height:"60px",fontSize:"35px",backgroundColor:"pink",color:"black"},eacheq:{width:"25%",height:"60px",fontSize:"35px",backgroundColor:"pink",color:"black"},title:{flexGrow:1,textAlign:"center",fontSize:"25px"},textbox:{height:"60px",backgroundColor:"#bbb",width:"100%",fontSize:"25px",textAlign:"right"},text:{width:"100%",marginLeft:"auto",marginRight:"auto",color:"white",lineHeight:"5px"}}}))(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[40,1,2]]]);
//# sourceMappingURL=main.6a3e5591.chunk.js.map