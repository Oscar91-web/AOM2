(this.webpackJsonpaom2=this.webpackJsonpaom2||[]).push([[0],{117:function(e,t,n){},161:function(e,t,n){},249:function(e,t,n){"use strict";n.r(t);var l=n(2),c=n(0),a=n.n(c),r=n(5),s=n.n(r),o=(n(117),n(4)),j=n(6),i=n(26),b=(n(161),n(20)),d=n.n(b),u=n(34),O=n(11),h=n(35),x=n.n(h);n(12),n(44);var p=function(e,t,n){var l="http://pluto.im.se:5280/JSONTRIMService/json/"+e+(t?"/"+t:""),c=null;return n&&(c=Object.keys(n).map((function(e){return[e,n[e]]})).filter((function(e){return e[1]})).map((function(e){return e.join("=")})).join("&")),c&&(l=l+"?"+c),console.log("built URL: "+l),l},g="^[+]?[0-9 ()-]+$",m=new RegExp(g),v="^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+$",f=new RegExp(v),y=n(4),C=y.GridRow,T=y.GridCell,D=y.TextField,w=y.MenuSurfaceAnchor,E=y.Menu,k=y.MenuItem,S=y.Button,G=function(e){var t=e.employee,n=(e.setEmployee,e.employeeGroups),a=Object(c.useState)(t.name),r=Object(O.a)(a,2),s=r[0],o=r[1],j=Object(c.useState)(!1),i=Object(O.a)(j,2),b=i[0],h=i[1],y=Object(c.useState)(t.phone?t.phone:""),G=Object(O.a)(y,2),_=G[0],R=G[1],I=Object(c.useState)(t.email?t.email:""),F=Object(O.a)(I,2),L=F[0],U=F[1],M=Object(c.useState)(t.employee_group),H=Object(O.a)(M,2),P=H[0],N=H[1],z=Object(c.useState)(!1),A=Object(O.a)(z,2),B=A[0],J=A[1];console.log(t);var W=function(){var e=Object(u.a)(d.a.mark((function e(){var n,l,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p("pers",t.user),e.prev=1,l={},_!==t.phone&&(l.phone=_),L!==t.email&&(l.email=L),P!==t.employee_group_id&&(l.employee_group_id=P),e.next=8,x.a.put(n,l);case 8:null!=(c=e.sent)?(console.log("result after put"),console.log(c)):console.log("no result after put"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return t?(console.log("empgroup"),console.log(n),Object(l.jsxs)("div",{children:[Object(l.jsx)(C,{children:Object(l.jsx)(T,{span:8,children:Object(l.jsx)(D,{fullwidth:!0,value:s,onKeyDown:function(e){var t=e.target.value;"Enter"===e.key&&(console.log("entered name: "+t),o(t))},onChange:function(e){o(e.target.value)}})})}),Object(l.jsx)(C,{children:Object(l.jsx)("br",{})}),Object(l.jsx)(C,{children:Object(l.jsx)(T,{span:12,children:Object(l.jsxs)(C,{children:[Object(l.jsx)(T,{span:2,children:Object(l.jsx)(D,{outlined:!0,label:"Login",value:t.login,readOnly:!0})}),Object(l.jsx)(T,{span:2,children:Object(l.jsx)(D,{outlined:!0,label:"User",value:t.user,readOnly:!0})}),Object(l.jsx)(T,{span:2,children:Object(l.jsx)(D,{outlined:!0,label:"Employno",value:t.number,readOnly:!0})})]})})}),Object(l.jsx)(C,{children:Object(l.jsx)("br",{})}),Object(l.jsx)(C,{children:Object(l.jsx)(T,{span:12,children:Object(l.jsxs)(C,{children:[Object(l.jsx)(T,{span:2,children:Object(l.jsx)(D,{outlined:!0,label:"Legal Entity",value:t.legal_entity_id,readOnly:!0})}),Object(l.jsx)(T,{span:8,children:Object(l.jsx)(D,{fullwidth:!0,value:t.legal_entity,readOnly:!0})})]})})}),Object(l.jsx)("p",{}),Object(l.jsx)(C,{children:Object(l.jsx)(T,{span:12,children:Object(l.jsxs)(C,{children:[Object(l.jsx)(T,{span:2,children:Object(l.jsx)(D,{outlined:!0,label:"Organizational Unit",value:t.org_unit_id,readOnly:!0})}),Object(l.jsx)(T,{span:8,children:Object(l.jsx)(D,{fullwidth:!0,value:t.org_unit,readOnly:!0})})]})})}),Object(l.jsx)("p",{}),Object(l.jsx)(C,{children:Object(l.jsx)(T,{span:12,children:Object(l.jsxs)(C,{children:[Object(l.jsx)(T,{span:2,children:Object(l.jsx)(D,{outlined:!0,label:"Department",value:t.department_id,readOnly:!0})}),Object(l.jsx)(T,{span:8,children:Object(l.jsx)(D,{fullwidth:!0,value:t.department,readOnly:!0})})]})})}),Object(l.jsx)("p",{}),Object(l.jsx)(C,{children:Object(l.jsx)(T,{span:12,children:Object(l.jsxs)(C,{children:[Object(l.jsx)(T,{span:2,children:Object(l.jsx)(D,{outlined:!0,label:"Warehouse",value:t.warehouse_id,readOnly:!0})}),Object(l.jsx)(T,{span:8,children:Object(l.jsx)(D,{fullwidth:!0,value:t.warehouse,readOnly:!0})})]})})}),Object(l.jsx)("p",{}),Object(l.jsx)(C,{children:Object(l.jsx)(T,{span:12,children:Object(l.jsxs)(C,{children:[Object(l.jsxs)(T,{span:2,children:[Object(l.jsx)(D,{outlined:!0,label:"Employment Group",value:P,onClick:function(){h(!0)},readOnly:!0}),Object(l.jsx)(w,{children:Object(l.jsx)(E,{open:b,renderToPortal:!0,children:n.map((function(e){return Object(l.jsxs)(k,{onClick:function(){return function(e){console.log("clicked emp group"),console.log(e),N(e.value),J(e.value!==t.employee_group_id),t.employee_group=e.description,h(!1),console.log(t)}(e)},children:[e.value," - ",e.description]},e.value)}))})})]}),Object(l.jsx)(T,{span:8,children:Object(l.jsx)(D,{fullwidth:!0,value:t.employee_group,readOnly:!0})})]})})}),Object(l.jsx)("p",{}),Object(l.jsx)("p",{}),Object(l.jsx)(C,{children:Object(l.jsx)(T,{span:12,children:Object(l.jsx)(C,{children:Object(l.jsx)(T,{span:2,children:Object(l.jsx)(D,{outlined:!0,label:"Phone",value:_,onChange:function(e){console.log("handlephonechg:"),console.log(e);var n=e.target.value,l=m.test(n);console.log("phone valid: "+l),R(n),J(n!==t.phone)},pattern:g})})})})}),Object(l.jsx)("p",{}),Object(l.jsx)(C,{children:Object(l.jsx)(T,{span:12,children:Object(l.jsx)(C,{children:Object(l.jsx)(T,{span:2,children:Object(l.jsx)(D,{outlined:!0,label:"E-mail",value:L,onChange:function(e){console.log("handleemailchg:"),console.log(e);var n=e.target.value,l=f.test(n);console.log("email valid: "+l),U(n),J(n!==t.email)},pattern:v})})})})}),Object(l.jsx)("p",{}),Object(l.jsx)(C,{children:Object(l.jsx)(T,{span:12,children:Object(l.jsx)(C,{children:Object(l.jsx)(T,{span:2,children:Object(l.jsx)(S,{label:"Save",disabled:!function(){console.log("has changed:"+B);var e=function(){var e=(0===_.length||m.test(_))&&(0===L.length||f.test(L));return console.log("allFieldsValid: "+e),e}();console.log("isValid: "+e);var t=B&&e;return console.log("saveButtonEnabled: "+t),t}(),onClick:W})})})})})]})):Object(l.jsx)("div",{})},_=n(4),R=_.GridRow,I=_.GridCell,F=_.TextField,L=function(e){var t=e.employee,n=e.userGroups.map((function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(R,{children:Object(l.jsx)(I,{span:12,children:Object(l.jsxs)(R,{children:[Object(l.jsx)(I,{span:2,children:Object(l.jsx)(F,{outlined:!0,label:"User",value:t.name,readOnly:!0})}),Object(l.jsx)(I,{span:4,children:Object(l.jsx)(F,{outlined:!0,label:"Group",value:e,readOnly:!0})})]})})}),Object(l.jsx)("p",{})]})}));return t?Object(l.jsx)(l.Fragment,{children:n}):Object(l.jsx)("div",{})},U=function(e){var t=e.employees,n=e.clicked,c=t.map((function(e){return Object(l.jsxs)(o.DataTableRow,{onClick:function(){return n(e)},children:[Object(l.jsx)(o.DataTableCell,{children:e.number}),Object(l.jsx)(o.DataTableCell,{children:e.login}),Object(l.jsx)(o.DataTableCell,{children:e.user}),Object(l.jsx)(o.DataTableCell,{children:e.name}),Object(l.jsx)(o.DataTableCell,{children:e.legal_entity}),Object(l.jsx)(o.DataTableCell,{children:e.orgUnit}),Object(l.jsx)(o.DataTableCell,{children:e.department}),Object(l.jsx)(o.DataTableCell,{children:e.warehouse})]},e.user)}));return t&&0!==t.length?Object(l.jsx)("div",{children:Object(l.jsx)(o.DataTable,{children:Object(l.jsxs)(o.DataTableContent,{children:[Object(l.jsx)(o.DataTableHead,{children:Object(l.jsxs)(o.DataTableRow,{children:[Object(l.jsx)(o.DataTableHeadCell,{children:"Employment Number"}),Object(l.jsx)(o.DataTableHeadCell,{children:"Login Id"}),Object(l.jsx)(o.DataTableHeadCell,{children:"User Id"}),Object(l.jsx)(o.DataTableHeadCell,{children:"Employment Name"}),Object(l.jsx)(o.DataTableHeadCell,{children:"Legal Entity"}),Object(l.jsx)(o.DataTableHeadCell,{children:"Organizational Unit"}),Object(l.jsx)(o.DataTableHeadCell,{children:"Department"}),Object(l.jsx)(o.DataTableHeadCell,{alignEnd:!0,children:"Warehouse Number"})]})}),Object(l.jsx)(o.DataTableBody,{children:c})]})})}):Object(l.jsx)(l.Fragment,{})},M=function(){var e,t=Object(c.useState)([]),n=Object(O.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),j=Object(O.a)(s,2),i=j[0],b=j[1],h=Object(c.useState)(null),g=Object(O.a)(h,2),m=g[0],v=g[1],f=Object(c.useState)([]),y=Object(O.a)(f,2),C=y[0],T=y[1],D=Object(c.useState)(0),w=Object(O.a)(D,2),E=w[0],k=w[1],S=Object(c.useState)(!1),_=Object(O.a)(S,2),R=_[0],I=_[1],F=Object(c.useState)(!1),M=Object(O.a)(F,2),H=M[0],P=M[1],N=Object(c.useState)([]),z=Object(O.a)(N,2),A=z[0],B=z[1],J=function(e){console.log("CLICKJED!!!!"),b(""),r([]),v(e),k(0),I(!1),K(e)},W=function(){var e=Object(u.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.prev=1,e.next=4,x.a.get(t);case 4:null!=(n=e.sent)&&(console.log(n.data.employees),r(n.data.employees)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(u.a)(d.a.mark((function e(t){var n,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p("usergroups",t.user),console.log("rurl: "+n),e.prev=2,e.next=5,x.a.get(n);case 5:null!=(l=e.sent)?(console.log("hERERERE"),console.log(l.data.usergroups),B(l.data.usergroups)):console.log("NO USER GROUP GFOUnd"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p("codelookup","EMPGROUP"),console.log(t),e.prev=2,e.next=5,x.a.get(t);case 5:null!=(n=e.sent)&&(console.log("codes:"),console.log(n.data.codes),T(n.data.codes)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();switch(console.log("content for activeTab: "+E),E){case 0:e=m&&Object(l.jsx)(G,{employee:m,setEmployee:v,employeeGroups:C});break;case 1:e=Object(l.jsx)(L,{employee:m,userGroups:A});break;case-1:break;default:e=Object(l.jsxs)("h3",{children:["No such tab: ",E]})}return Object(c.useEffect)((function(){0===C.length?(console.log("only once..."),q()):console.log("already have empgroups")})),console.log("rendering Employee - group: "+C),Object(l.jsxs)("div",{children:[Object(l.jsx)(o.Typography,{use:"headline4",children:"Employees"}),Object(l.jsxs)(o.GridRow,{children:[Object(l.jsx)(o.GridCell,{span:6,children:Object(l.jsxs)(o.TabBar,{activeTabIndex:E,onActivate:function(e){return t=e.detail.index,console.log("tab chosen: "+t),void k(t);var t},children:[Object(l.jsx)(o.Tab,{minWidth:!0,children:"Employee"}),Object(l.jsx)(o.Tab,{minWidth:!0,children:"User Groups"})]})}),Object(l.jsxs)(o.GridCell,{children:[Object(l.jsx)(o.TextField,{autoFocus:!0,outlined:!0,icon:"search",label:"Search...",value:i,onChange:function(e){var t=e.target.value;b(t),t.length>1&&I(!0),t.length>2?W(p("employees",null,{limit:5,q:t})):r([])},onClick:function(){v(null),r([]),P(!1)},onKeyDown:function(e){var t=e.target.value;console.log("key: "+e.key),console.log("trgt vl: "+e.target.value),"Enter"===e.key&&(console.log("Enter pressed"),b(e.target.value),P(!0),I(!1),r([]),k(0),W(p("employees",null,{limit:10,q:t})))}}),Object(l.jsx)(o.MenuSurfaceAnchor,{children:Object(l.jsx)(o.Menu,{open:R,renderToPortal:!0,children:a.map((function(e){return Object(l.jsxs)(o.MenuItem,{onClick:function(){return J(e)},children:[e.name," - ",e.login]},e.user)}))})})]})]}),e,H&&Object(l.jsx)(U,{employees:a,clicked:J})]})},H=(n(91),function(){return Object(l.jsxs)(o.Drawer,{children:[Object(l.jsxs)(o.DrawerHeader,{children:[Object(l.jsx)(i.b,{to:"/",style:{color:"inherit",textDecoration:"inherit"},children:Object(l.jsx)(o.DrawerTitle,{children:"AOM 2"})}),Object(l.jsx)(o.DrawerSubtitle,{children:"Next generation"})]}),Object(l.jsx)(o.DrawerContent,{children:Object(l.jsxs)(o.List,{children:[Object(l.jsx)(o.ListItem,{children:Object(l.jsx)(i.b,{to:"/employees",style:{color:"inherit",textDecoration:"inherit"},children:"Employees"})}),Object(l.jsx)(o.ListItem,{children:Object(l.jsx)(i.b,{to:"/test1",style:{color:"inherit",textDecoration:"inherit"},children:"Test 1"})}),Object(l.jsx)(o.ListItem,{children:"Pizza"}),Object(l.jsx)(o.ListItem,{children:"Icecream"})]})})]})}),P=n(104);n.n(P).a.load({google:{families:["Roboto:300,500,700","Material Icons"]}});var N=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.a,{children:Object(l.jsxs)(o.Grid,{align:"left",children:[Object(l.jsx)(o.GridCell,{align:"top",span:3,children:Object(l.jsx)(H,{})}),Object(l.jsx)(o.GridCell,{align:"top",span:9,children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/employees",component:M}),Object(l.jsx)(j.a,{path:"/test1",children:Object(l.jsx)("div",{children:"test1"})})]})})]})}),Object(l.jsx)(o.Portal,{})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,267)).then((function(t){var n=t.getCLS,l=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),l(e),c(e),a(e),r(e)}))};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),z()}},[[249,1,2]]]);
//# sourceMappingURL=main.db66aeea.chunk.js.map