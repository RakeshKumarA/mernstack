(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{108:function(e,t,a){e.exports=a(137)},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),l=a(188),o=a(10),s=a(16),u=a(11),m=a.n(u),d=a(18),p=a(19),f=a.n(p),E=Object(s.b)({name:"product",initialState:{loading:!1,products:[],error:""},reducers:{product_list_request:function(e){e.loading=!0,e.products=[]},product_list_sucess:function(e,t){e.loading=!1,e.products=t.payload},product_list_failure:function(e,t){e.loading=!1,e.error=t.payload}}}),g=E.actions,b=g.product_list_request,v=g.product_list_sucess,h=g.product_list_failure,y=E.reducer,O=Object(s.b)({name:"productDetail",initialState:{loading:!1,product:{reviews:[]},error:""},reducers:{product_detail_request:function(e){e.loading=!0,e.product={}},product_detail_sucess:function(e,t){e.loading=!1,e.product=t.payload},product_detail_failure:function(e,t){e.loading=!1,e.error=t.payload}}}),j=O.actions,_=j.product_detail_request,N=j.product_detail_sucess,x=j.product_detail_failure,k=O.reducer,I=a(45),S=a(41),C=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],w=Object(s.b)({name:"cart",initialState:{cartItems:C},reducers:{cart_add_item:function(e,t){var a=t.payload,n=e.cartItems.find((function(e){return e.product===a.product}));return n?Object(S.a)(Object(S.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===n.product?a:e}))}):Object(S.a)(Object(S.a)({},e),{},{cartItems:[].concat(Object(I.a)(e.cartItems),[a])})},cart_delete_item:function(e,t){return Object(S.a)(Object(S.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload.product}))})}}}),q=w.actions,P=q.cart_add_item,T=q.cart_delete_item,A=function(e,t){return function(){var a=Object(d.a)(m.a.mark((function a(n,r){var c,i;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f.a.get("/api/products/".concat(e));case 2:c=a.sent,i=c.data,n(P({product:i.id,name:i.name,image:i.image,price:i.price,countinstock:i.countinstock,qty:t})),localStorage.setItem("cartItems",JSON.stringify(r().cart.cartItems));case 6:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},z=w.reducer,D=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},R=Object(s.b)({name:"user",initialState:{userInfo:D},reducers:{user_login_request:function(e){e.loading=!0,e.userInfo={}},user_login_sucess:function(e,t){e.loading=!1,e.userInfo=t.payload},user_login_failure:function(e,t){e.loading=!1,e.error=t.payload},user_logout:function(e,t){return localStorage.removeItem("userInfo"),{}},user_register_request:function(e){return e.loading=!0,{}},user_register_sucess:function(e,t){e.loading=!1,e.userInfo=t.payload},user_register_failure:function(e,t){e.loading=!1,e.error=t.payload}}}),W=R.actions,U=W.user_login_request,B=W.user_login_sucess,J=W.user_login_failure,G=W.user_logout,H=(W.user_register_request,W.user_register_sucess,W.user_register_failure,R.reducer),L=Object(s.b)({name:"register",initialState:{},reducers:{user_register_request:function(e){e.loading=!0,e={}},user_register_sucess:function(e,t){e.loading=!1,e.userInfo=t.payload},user_register_failure:function(e,t){e.loading=!1,e.error=t.payload}}}),$=L.actions,F=$.user_register_request,M=$.user_register_sucess,Q=$.user_register_failure,K=L.reducer,V=Object(s.b)({name:"profile",initialState:{user:{}},reducers:{user_detail_request:function(e){e.loading=!0,e={}},user_detail_sucess:function(e,t){e.loading=!1,e.user=t.payload},user_detail_failure:function(e,t){e.loading=!1,e.error=t.payload}}}),X=V.actions,Y=X.user_detail_request,Z=X.user_detail_sucess,ee=X.user_detail_failure,te=function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a,n){var r,c,i,l,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(Y()),r=n(),c=r.user.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,f.a.get("/api/users/".concat(e),i);case 6:l=t.sent,o=l.data,a(Z(o)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),a(ee(t.t0.message));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,a){return t.apply(this,arguments)}}()},ae=V.reducer,ne=Object(s.b)({name:"updateProfile",initialState:{updatedUser:{}},reducers:{user_detail_update_request:function(e){e.loading=!0,e={}},user_detail_update_sucess:function(e,t){e.loading=!1,e.updatedUser=t.payload},user_detail_update_failure:function(e,t){e.loading=!1,e.error=t.payload}}}),re=ne.actions,ce=re.user_detail_update_request,ie=re.user_detail_update_sucess,le=re.user_detail_update_failure,oe=ne.reducer,se=Object(s.a)({reducer:{productList:y,productDetail:k,cart:z,user:H,register:K,profile:ae,updateProfile:oe}}),ue=a(169),me=a(23),de=a(13),pe=Object(ue.a)((function(e){return{footer:{display:"grid",placeItems:"center",height:"15vh"}}})),fe=function(){var e=pe();return r.a.createElement("footer",{className:e.footer},"Copyright \xa9 ProShop")},Ee=a(172),ge=a(174),be=a(175),ve=a(176),he=a(177),ye=a(93),Oe=a.n(ye),je=a(95),_e=a.n(je),Ne=a(94),xe=a.n(Ne),ke=a(25),Ie=a.n(ke),Se=Object(ue.a)((function(e){return{title:{flexGrow:1},toolbar:{height:"15vh"},linkdeco:{textDecoration:"none",color:"#fff"}}})),Ce=function(){var e=Se(),t=Object(de.e)(),a=Object(o.c)((function(e){return e.user})).userInfo,n=Object(o.b)();return r.a.createElement(Ee.a,{position:"static"},r.a.createElement(ge.a,{className:e.toolbar},r.a.createElement(be.a,{container:!0},r.a.createElement(be.a,{item:!0,sm:2}),r.a.createElement(be.a,{item:!0,container:!0,xs:12,sm:8},r.a.createElement(ve.a,{variant:"h6",className:e.title},r.a.createElement(me.b,{to:"/",className:e.linkdeco},"PROSHOP")),r.a.createElement(he.a,{color:"inherit",onClick:function(){t.push("/cart")}},r.a.createElement(Oe.a,null)," ",r.a.createElement(Ie.a,{amount:2}),"CART"),a&&0!==Object.keys(a).length?r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{color:"inherit"},r.a.createElement(me.b,{to:"/profile",className:e.linkdeco},a.name)),r.a.createElement(he.a,{color:"inherit",onClick:function(){n(G())}},r.a.createElement(xe.a,null)," ",r.a.createElement(Ie.a,{amount:2}),"LOG OUT")):r.a.createElement(he.a,{color:"inherit",onClick:function(){t.push("/login")}},r.a.createElement(_e.a,null)," ",r.a.createElement(Ie.a,{amount:2}),"SIGN IN")),r.a.createElement(be.a,{item:!0,sm:2}))))},we=a(182),qe=a(190),Pe=a(178),Te=a(179),Ae=a(181),ze=a(180),De=a(192),Re=Object(ue.a)({root:{maxWidth:220,minHeight:320,margin:"20px"},typoh5:{fontSize:"14px",fontWeight:"bold"},actionArea:{display:"flex",flexDirection:"column"}}),We=function(e){var t=e.product,a=Re(),n=Object(de.e)();return r.a.createElement(Pe.a,{className:a.root},r.a.createElement(Te.a,{onClick:function(){return e=t.id,void n.push("/product/".concat(e));var e}},r.a.createElement(ze.a,{component:"img",alt:t.name,height:"220",image:t.image,title:t.name}),r.a.createElement(Ae.a,null,r.a.createElement(ve.a,{variant:"h6",className:a.typoh5},t.name),r.a.createElement(De.a,{readOnly:!0,size:"small",value:Number(t.rating),precision:.5}),r.a.createElement(Ie.a,{amount:2}),r.a.createElement(ve.a,{variant:"body1",component:"span"},t.numReviews," reviews"),r.a.createElement(ve.a,{variant:"h5"},"$ ",t.price))))},Ue=Object(ue.a)((function(e){return{title:{marginTop:"10px"},cirprogress:{display:"grid",placeItems:"center",height:"80px"}}})),Be=function(){var e=Ue(),t=Object(o.b)(),a=Object(o.c)((function(e){return e.productList})),c=a.loading,i=a.products,l=a.error;return Object(n.useEffect)((function(){t(function(){var e=Object(d.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(b()),e.next=4,f.a.get("/api/products");case 4:a=e.sent,n=a.data,t(v(n)),window.location("/"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t(h(e.t0.message));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[t]),r.a.createElement(be.a,{container:!0},r.a.createElement(be.a,{item:!0,sm:2}),r.a.createElement(be.a,{item:!0,container:!0,xs:12,sm:8,direction:"column"},r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"h4",className:e.title},"LATEST PRODUCTS")),c?r.a.createElement("div",{className:e.cirprogress},r.a.createElement(we.a,null)):l?r.a.createElement(qe.a,{severity:"error"},l):r.a.createElement(be.a,{item:!0,container:!0,justify:"space-around",alignItems:"center"},i.map((function(e){return r.a.createElement(We,{product:e,key:e.id})})))),r.a.createElement(be.a,{item:!0,sm:2}))},Je=a(17),Ge=a(184),He=a(185),Le=a(189),$e=a(194),Fe=Object(ue.a)({goback:{margin:"20px"},pname:{padding:"20px"},midsection:{padding:"10px 20px"},image:{padding:"20px"},pricenstock:{padding:"10px",display:"flex",justifyContent:"space-around"},addtocart:{padding:"20px"},carttext:{padding:"0 10px"},cirprogress:{display:"grid",placeItems:"center",height:"80px"}}),Me=function(e){var t=e.match,a=Fe(),c=Object(n.useState)(1),i=Object(Je.a)(c,2),l=i[0],s=i[1],u=Object(de.e)(),p=Object(o.b)(),E=Object(o.c)((function(e){return e.productDetail})),g=E.loading,b=E.product,v=E.error;Object(n.useEffect)((function(){var e;p((e=t.params.id,function(){var t=Object(d.a)(m.a.mark((function t(a){var n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(_()),t.next=4,f.a.get("/api/products/".concat(e));case 4:n=t.sent,r=n.data,a(N(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(x(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[p,t]);var h=Number(b.countinstock)>0?"In Stock":"Not In Stock";return r.a.createElement(be.a,{container:!0},r.a.createElement(be.a,{item:!0,sm:2}),r.a.createElement(be.a,{item:!0,container:!0,xs:12,sm:8,direction:"column"},r.a.createElement(be.a,{item:!0,className:a.goback},r.a.createElement(he.a,{variant:"text",color:"default",onClick:function(){u.push("/")}},"Go Back")),g?r.a.createElement(we.a,null):v?r.a.createElement(qe.a,{severity:"error"},v):r.a.createElement(be.a,{item:!0,container:!0},r.a.createElement(be.a,{item:!0,xs:6,className:a.image},r.a.createElement(Pe.a,null,r.a.createElement(ze.a,{component:"img",alt:b.name,image:b.image,title:b.name}))),r.a.createElement(be.a,{item:!0,xs:3,container:!0,direction:"column"},r.a.createElement(be.a,{item:!0,className:a.pname},r.a.createElement(ve.a,{variant:"h6",color:"initial"},b.name)),r.a.createElement(be.a,{item:!0},r.a.createElement(Ge.a,null)),r.a.createElement(be.a,{item:!0,className:a.midsection},r.a.createElement(De.a,{readOnly:!0,size:"large",value:Number(b.rating)||0,precision:.5})),r.a.createElement(be.a,{item:!0},r.a.createElement(Ge.a,null)),r.a.createElement(be.a,{item:!0,className:a.midsection},r.a.createElement(ve.a,{variant:"h6",color:"initial"},"Price: $ ",b.price)),r.a.createElement(be.a,{item:!0},r.a.createElement(Ge.a,null)),r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"body2",color:"initial",className:a.midsection},b.description))),r.a.createElement(be.a,{item:!0,xs:3,className:a.addtocart},r.a.createElement(Pe.a,{className:a.pricenstock,square:!0},r.a.createElement(ve.a,{variant:"body1",color:"initial"},"Price:"),r.a.createElement(ve.a,{variant:"body1",color:"initial"},"$ ",b.price)),r.a.createElement(Pe.a,{className:a.pricenstock,square:!0},r.a.createElement(ve.a,{variant:"body1",color:"initial"},"Status:"),r.a.createElement(ve.a,{variant:"body1",color:"initial"},h)),Number(b.countinstock)>0?r.a.createElement(Pe.a,{className:a.pricenstock,square:!0},r.a.createElement(ve.a,{variant:"body1",color:"initial"},"Qty:"),r.a.createElement(He.a,{className:a.formControl},r.a.createElement(Le.a,{id:"demo-simple-select",value:l,onChange:function(e){s(e.target.value)}},Object(I.a)(Array(b.countinstock).keys()).map((function(e){return r.a.createElement($e.a,{value:e+1,key:e},e+1)}))))):null,r.a.createElement(Pe.a,{className:a.pricenstock,square:!0},Number(b.countinstock)>0?r.a.createElement(he.a,{variant:"contained",color:"primary",onClick:function(){u.push("/cart/".concat(t.params.id,"?qty=").concat(l))}},r.a.createElement(ve.a,{variant:"body2",color:"initial",className:a.carttext},"Add to Cart")):r.a.createElement(he.a,{variant:"contained",color:"primary",disabled:!0},r.a.createElement(ve.a,{variant:"body2",color:"initial",className:a.carttext},"Add to Cart")))))),r.a.createElement(be.a,{item:!0,sm:2}))},Qe=a(183),Ke=a(98),Ve=a.n(Ke),Xe=Object(ue.a)({card:{marginBottom:"10px",padding:"10px",display:"flex",alignItems:"center",width:"100%"},cardMedia:{width:"10vh"},title:{margin:"10px 0"},cardContent:{display:"flex",justifyContent:"center",alignItems:"center",width:"25%"},subtotalSection:{marginTop:"20px"},checkoutButton:{width:"80%"},checkoutCard:{width:"60%",padding:"5px 0",display:"flex",alignItems:"center",justifyContent:"center"}}),Ye=function(e){var t=e.match,a=e.location,c=Xe(),i=t.params.id,l=a.search?Number(a.search.split("=")[1]):1,s=Object(o.b)(),u=Object(o.c)((function(e){return e.cart})).cartItems;Object(n.useEffect)((function(){i&&s(A(i,l))}),[s,i,l]);var m=function(e){s(function(e){return function(t,a){t(T(e)),localStorage.setItem("cartItems",JSON.stringify(a().cart.cartItems))}}(e))};return r.a.createElement(be.a,{container:!0},r.a.createElement(be.a,{item:!0,xs:8,container:!0},r.a.createElement(be.a,{item:!0,xs:1}),r.a.createElement(be.a,{item:!0,xs:8,container:!0,direction:"column"},r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"h4",color:"initial",className:c.title},"Shopping Cart")),0===u.length?r.a.createElement(qe.a,{severity:"info"},"Cart is Empty"):u.map((function(e){return r.a.createElement(be.a,{item:!0,key:e.product},r.a.createElement(Pe.a,{className:c.card},r.a.createElement("div",{className:c.cardContent},r.a.createElement(ze.a,{component:"img",alt:e.name,image:e.image,title:e.name,className:c.cardMedia})),r.a.createElement(Ae.a,{className:c.cardContent},r.a.createElement(ve.a,{component:"h6",variant:"body2"},e.name)),r.a.createElement(Ae.a,{className:c.cardContent},r.a.createElement(ve.a,{component:"h6",variant:"body1"},"Qty:"),r.a.createElement(Ie.a,{amount:2}),r.a.createElement(Le.a,{value:e.qty,onChange:function(t){return s(A(e.product,Number(t.target.value)))}},Object(I.a)(Array(e.countinstock).keys()).map((function(t){return r.a.createElement($e.a,{value:t+1,key:e.product},t+1)})))),r.a.createElement(Ae.a,{className:c.cardContent},r.a.createElement(ve.a,{component:"h6",variant:"body1"},"Price: $ ",e.price)),r.a.createElement(Ae.a,{className:c.cardContent},r.a.createElement(Qe.a,{onClick:function(){return m(e)}},r.a.createElement(Ve.a,null)))))})))),u&&u.length>0&&r.a.createElement(be.a,{item:!0,xs:4,container:!0,direction:"column",className:c.subtotalSection},r.a.createElement(be.a,{item:!0},r.a.createElement(Pe.a,{square:!0,className:c.checkoutCard},r.a.createElement(Ae.a,null,r.a.createElement(ve.a,{variant:"body1",color:"initial"},"SUBTOTAL (",u.map((function(e){return e.qty})).reduce((function(e,t){return e+t}),0),") items"),r.a.createElement(ve.a,{variant:"body1",color:"initial"},"$",u.map((function(e){return Number(e.price)*e.qty})).reduce((function(e,t){return e+t}),0))))),r.a.createElement(be.a,{item:!0},r.a.createElement(Pe.a,{square:!0,className:c.checkoutCard},r.a.createElement(he.a,{variant:"contained",color:"primary",className:c.checkoutButton},"CHECKOUT")))))},Ze=a(191),et=Object(ue.a)((function(e){return{root:{minHeight:"60vh"},title:{marginTop:"5vh"},linkdeco:{textDecoration:"none"}}})),tt=function(){var e=et(),t=Object(n.useState)(""),a=Object(Je.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(""),s=Object(Je.a)(l,2),u=s[0],p=s[1],E=Object(o.b)(),g=Object(o.c)((function(e){return e.user})),b=g.loading,v=g.error,h=g.userInfo,y=Object(de.f)(),O=Object(de.e)(),j=y.search?y.search.split("=")[1]:"/";Object(n.useEffect)((function(){h&&0!==Object.keys(h).length&&O.push(j)}),[O,h,j]);return r.a.createElement(be.a,{container:!0,className:e.root},r.a.createElement(be.a,{item:!0,sm:4}),b?r.a.createElement(we.a,null):v?r.a.createElement(qe.a,{severity:"error"},v):r.a.createElement(be.a,{item:!0,sm:4,container:!0,direction:"column",spacing:1},r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"h4",color:"initial",className:e.title},"SIGN IN")),r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"subtitle1",color:"initial"},"Email Address"),r.a.createElement(Ze.a,{label:"Enter Email",variant:"filled",fullWidth:!0,size:"small",value:c,onChange:function(e){i(e.target.value)}})),r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"subtitle1",color:"initial"},"Password"),r.a.createElement(Ze.a,{label:"Enter Password",variant:"filled",fullWidth:!0,size:"small",value:u,type:"password",onChange:function(e){p(e.target.value)}})),r.a.createElement(be.a,{item:!0},r.a.createElement(he.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),E(function(e,t){return function(){var a=Object(d.a)(m.a.mark((function a(n){var r,c,i;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(U()),r={headers:{"Content-Type":"application/json"}},a.next=5,f.a.post("/api/users/login",{email:e,password:t},r);case 5:c=a.sent,i=c.data,n(B(i)),localStorage.setItem("userInfo",JSON.stringify(i)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),n(J(a.t0.message));case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(c,u))}},"SIGN IN")),r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"subtitle1",color:"initial"},"Not Registered? ",r.a.createElement(Ie.a,{amount:2}),r.a.createElement(me.b,{to:"/register",className:e.linkdeco},"Register")))),r.a.createElement(be.a,{item:!0,sm:4}))},at=Object(ue.a)((function(e){return{root:{minHeight:"60vh"},title:{marginTop:"5vh"},linkdeco:{textDecoration:"none"}}})),nt=function(){var e=at(),t=Object(n.useState)(""),a=Object(Je.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(""),s=Object(Je.a)(l,2),u=s[0],p=s[1],E=Object(n.useState)(""),g=Object(Je.a)(E,2),b=g[0],v=g[1],h=Object(n.useState)(""),y=Object(Je.a)(h,2),O=y[0],j=y[1],_=Object(o.b)(),N=Object(o.c)((function(e){return e.user})),x=N.loading,k=N.error,I=N.userInfo,S=Object(de.f)(),C=Object(de.e)(),w=S.search?S.search.split("=")[1]:"/";Object(n.useEffect)((function(){I&&0!==Object.keys(I).length&&C.push(w)}),[C,I,w]);return r.a.createElement(be.a,{container:!0,className:e.root},r.a.createElement(be.a,{item:!0,sm:4}),x?r.a.createElement(we.a,null):k?r.a.createElement(qe.a,{severity:"error"},k):r.a.createElement(be.a,{item:!0,sm:4,container:!0,direction:"column",spacing:1},r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"h4",color:"initial",className:e.title},"SIGN UP")),r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"subtitle1",color:"initial"},"Name"),r.a.createElement(Ze.a,{label:"Enter Name",variant:"filled",fullWidth:!0,size:"small",value:c,onChange:function(e){i(e.target.value)}})),r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"subtitle1",color:"initial"},"Email Address"),r.a.createElement(Ze.a,{label:"Enter Email",variant:"filled",fullWidth:!0,size:"small",value:u,onChange:function(e){p(e.target.value)}})),r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"subtitle1",color:"initial"},"Password"),r.a.createElement(Ze.a,{label:"Enter Password",variant:"filled",fullWidth:!0,size:"small",value:b,type:"password",onChange:function(e){v(e.target.value)}})),r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"subtitle1",color:"initial"},"Confirm Password"),r.a.createElement(Ze.a,{label:"Confirm Password",variant:"filled",fullWidth:!0,size:"small",value:O,type:"password",onChange:function(e){j(e.target.value)}})),r.a.createElement(be.a,{item:!0},r.a.createElement(he.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),_(function(e,t,a){return function(){var n=Object(d.a)(m.a.mark((function n(r){var c,i,l;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(F()),c={headers:{"Content-Type":"application/json"}},n.next=5,f.a.post("/api/users",{name:e,email:t,password:a},c);case 5:i=n.sent,l=i.data,r(M(l)),r(B(l)),localStorage.setItem("userInfo",JSON.stringify(l)),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),r(Q(n.t0.message));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}(c,u,b))}},"REGISTER")),r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"subtitle1",color:"initial"},"Already Registered? ",r.a.createElement(Ie.a,{amount:2}),r.a.createElement(me.b,{to:"/login",className:e.linkdeco},"Login")))),r.a.createElement(be.a,{item:!0,sm:4}))},rt=Object(ue.a)((function(e){return{root:{minHeight:"60vh"},title:{marginTop:"5vh"},linkdeco:{textDecoration:"none"}}})),ct=function(){var e=rt(),t=Object(n.useState)(""),a=Object(Je.a)(t,2),c=a[0],i=a[1],l=Object(n.useState)(""),s=Object(Je.a)(l,2),u=s[0],p=s[1],E=Object(n.useState)(""),g=Object(Je.a)(E,2),b=g[0],v=g[1],h=Object(n.useState)(""),y=Object(Je.a)(h,2),O=y[0],j=y[1],_=Object(n.useState)(null),N=Object(Je.a)(_,2),x=N[0],k=N[1],I=Object(de.e)(),S=Object(o.b)(),C=Object(o.c)((function(e){return e.profile})),w=C.loading,q=C.error,P=C.user,T=Object(o.c)((function(e){return e.user})).userInfo;Object(n.useEffect)((function(){T||0!==Object.keys(T).length?P.name?(i(P.name),p(P.email)):S(te("profile")):I.pushState("/login")}),[T,S,P,I]);return r.a.createElement(be.a,{container:!0,className:e.root},r.a.createElement(be.a,{item:!0,sm:4}),w?r.a.createElement(we.a,null):q?r.a.createElement(qe.a,{severity:"error"},x,q):r.a.createElement(be.a,{item:!0,sm:4,container:!0,direction:"column",spacing:1},r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"h4",color:"initial",className:e.title},"PROFILE")),r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"subtitle1",color:"initial"},"Name"),r.a.createElement(Ze.a,{label:"Enter Name",variant:"filled",fullWidth:!0,size:"small",value:c,onChange:function(e){i(e.target.value)}})),r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"subtitle1",color:"initial"},"Email Address"),r.a.createElement(Ze.a,{label:"Enter Email",variant:"filled",fullWidth:!0,size:"small",value:u,onChange:function(e){p(e.target.value)}})),r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"subtitle1",color:"initial"},"Password"),r.a.createElement(Ze.a,{label:"Enter Password",variant:"filled",fullWidth:!0,size:"small",value:b,type:"password",onChange:function(e){v(e.target.value)}})),r.a.createElement(be.a,{item:!0},r.a.createElement(ve.a,{variant:"subtitle1",color:"initial"},"Confirm Password"),r.a.createElement(Ze.a,{label:"Confirm Password",variant:"filled",fullWidth:!0,size:"small",value:O,type:"password",onChange:function(e){j(e.target.value)}})),r.a.createElement(be.a,{item:!0},r.a.createElement(be.a,{item:!0},r.a.createElement(he.a,{variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),b!==O?k("Passwords do not match"):S(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(a,n){var r,c,i,l,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(ce()),r=n(),c=r.user.userInfo,i={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c.token)}},t.next=6,f.a.put("/api/users/profile",e,i);case 6:l=t.sent,o=l.data,console.log(o),a(ie(o)),a(te("profile")),a(B(o)),localStorage.setItem("userInfo",JSON.stringify(o)),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),a(le(t.t0.message));case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e,a){return t.apply(this,arguments)}}()}({id:P.id,name:c,email:u,password:b}))}},"UPDATE")))),r.a.createElement(be.a,{item:!0,sm:4}))},it=Object(ue.a)({root:{display:"grid",gridTemplateRows:"auto 1fr auto"}}),lt=function(){var e=it();return r.a.createElement(me.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(Ce,null),r.a.createElement("main",null,r.a.createElement(de.a,{path:"/login",exact:!0,component:tt}),r.a.createElement(de.a,{path:"/register",exact:!0,component:nt}),r.a.createElement(de.a,{path:"/profile",exact:!0,component:ct}),r.a.createElement(de.a,{path:"/product/:id",component:Me}),r.a.createElement(de.a,{path:"/cart/:id?",component:Ye}),r.a.createElement(de.a,{path:"/",exact:!0,component:Be})),r.a.createElement(fe,null)))},ot=a(99),st=Object(ot.a)({palette:{primary:{main:"#343a40"}},typography:{fontFamily:["Nunito Sans","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}});i.a.render(r.a.createElement(o.a,{store:se},r.a.createElement(l.a,{theme:st},r.a.createElement(lt,null))),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.d9a0e2bd.chunk.js.map