(this["webpackJsonpcharter-challenge"]=this["webpackJsonpcharter-challenge"]||[]).push([[0],{341:function(e,t,r){},466:function(e,t,r){"use strict";r.r(t);var a=r(9),n=r(0),c=r(14),o=r.n(c),i=r(488),l=r(44),s=(r(341),r(467)),f=r(85),u=r(86),d=r(89),p=r(88),b=r(4),h=r(90),j=r(494),g=r(495),O=h.presets.createDefaultLayout(),m=function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(e){var a;Object(f.a)(this,r),a=t.call(this,e);var n=e.records,c=e.hydrateDB;return n||c(),a}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.classes,r=e.header,n=e.content,c=e.footer;return Object(a.jsxs)(h.Root,{config:O,children:[Object(a.jsx)(h.Header,{className:t.headerBackground,renderMenuIcon:function(e){return e?Object(a.jsx)(j.a,{}):Object(a.jsx)(g.a,{})},children:r&&r}),Object(a.jsx)(h.Content,{children:n&&n}),Object(a.jsx)(h.Footer,{children:c&&c})]})}}]),r}(n.Component),v=Object(b.a)((function(e){return{root:{},toggleButton:{backgroundColor:e.palette.primary[500],"&:hover":{backgroundColor:e.palette.primary[900]}},headerBackground:{backgroundColor:e.palette.primary[500]}}}))(m),y="HYDRATE_DB",x="UPDATE_SEARCH",A="UPDATE_FILTERS",C="UPDATE_SORT",w="UPDATE_STATE",F="UPDATE_GENRE",P="UPDATE_PAGE";var k=Object(l.b)((function(e,t){return{records:function(e){return e.records.all&&e.records.all.length?e.records.all:void 0}(e)}}),(function(e,t){return{hydrateDB:function(){return e((function(e,t){fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants",{headers:{Authorization:"Api-Key q3MNxtfep8Gt"}}).then((function(t){t.json().then((function(t){e({type:y,payload:t})}))}))}))}}}))(v),S=r(59),D=r(281),E=r(8),N=r(326),M=r(315),R=r.n(M);var T=Object(b.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",backgroundColor:e.palette.primary[500],boxShadow:"unset",width:"100%"},grow:{flexGrow:1},logo:Object(S.a)({display:"none"},e.breakpoints.up(475),{display:"block"}),title:Object(S.a)({display:"none"},e.breakpoints.up(730),{display:"block"}),search:Object(S.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(E.d)(e.palette.common.white,.15),marginRight:e.spacing(2),marginLeft:0,width:"100%","&:hover":{backgroundColor:Object(E.d)(e.palette.common.white,.25)}},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(S.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})}}))((function(e){var t=e.classes,r=e.updateSearch;return Object(a.jsxs)(D.a,{className:t.root,children:[Object(a.jsx)("img",{className:t.logo,src:"/flipside/catch-you.png",alt:"Catch you logo"}),Object(a.jsxs)("div",{className:t.search,children:[Object(a.jsx)("div",{className:t.searchIcon,children:Object(a.jsx)(R.a,{})}),Object(a.jsx)(N.a,{onChange:function(e){var t=e.target.value.toLowerCase();r(t)},placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})]}),Object(a.jsx)("img",{className:t.title,src:"/flipside/flipside.png",alt:"Flipside Title"})]})}));var B=Object(l.b)((function(e,t){return{}}),(function(e,t){return{updateSearch:function(t){return e(function(e){return function(t,r){t({type:x,payload:e})}}(t))}}}))(T),I=r(500),L=r(501),H=r(3),_="name",G="city",W="state",U="telephone",V="genre",z={name:"Name",city:"City",state:"State",telephone:"Phone Number",genre:"Genre",id:"Header"},q=r(498),J=r(499),X=r(283),K=r(195),Y=r(11),Q=r(316),Z=r(317),$=r.n(Z),ee=r(318),te=r.n(ee),re=r(322),ae=(r(15),r(491)),ne=r(493),ce=r(502),oe=r(196),ie=r(492),le=r(496),se=(r(497),r(319));function fe(e,t,r){if(!t)return null;if(r){var a,n=[],c=Object(Q.a)(t);try{var o=function(){var t=a.value,r=e.find((function(e){return e.value===t}));if(!r)return{v:null};n.push(r)};for(c.s();!(a=c.n()).done;){var i=o();if("object"===typeof i)return i.v}}catch(l){c.e(l)}finally{c.f()}return n}return e.find((function(e){return e.value===t}))||null}var ue=function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(e){var a;Object(f.a)(this,r),(a=t.call(this,e)).onChange=function(e){a.props.isMulti?a.handleChangeMulti(e):a.handleChangeSingle(e)},a.handleChangeSingle=function(e){a.setState({selected:e},(function(){a.props.onChange(e?e.value:"")}))},a.handleChangeMulti=function(e){a.setState({selected:e},(function(){var t=e&&e.length?$()(e,"value"):[];a.props.onChange(t)}))},a.getSelectStyles=function(e){var t={input:function(e){return Object(Y.a)(Object(Y.a)({},e),{},{padding:0,margin:0})},clearIndicator:function(t){return Object(Y.a)(Object(Y.a)({},t),{},{padding:0,cursor:"pointer",color:"white"},e.clearIndicator&&e.clearIndicator(t))},indicatorSeparator:function(t){return Object(Y.a)(Object(Y.a)({},t),{},{margin:0,opacity:.5},e.indicatorSeparator&&e.indicatorSeparator(t))},dropdownIndicator:function(t){return Object(Y.a)(Object(Y.a)({},t),{},{padding:0,cursor:"pointer",color:"white"},e.dropdownIndicator&&e.dropdownIndicator(t))},menuList:function(t){return Object(Y.a)(Object(Y.a)({},t),{},{padding:0},e.menuList&&e.menuList(t))},menuPortal:function(e,t){var r=a.state,n=r.placement,c=r.maxHeight,o=t.offset,i=Object(Y.a)(Object(Y.a)({},e),{},{zIndex:9999});return"top"===n&&(i.top=o-c),i}};return te()(e,(function(e,r){var a=t[r];t[r]=a?function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),c=1;c<r;c++)n[c-1]=arguments[c];return e.apply(void 0,[a.apply(void 0,[t].concat(n))].concat(n))}:e})),t},a.getPortalPlacement=function(e){var t=e.placement,r=e.maxHeight;a.setState({placement:t,maxHeight:r})},a.closeMenuOnScroll=function(e){return!(e.target instanceof HTMLElement)||!a.menuRef||a.menuRef.firstChild!==e.target},a.onMenuClose=function(){a.menuRef=void 0,a.setState({placement:a.props.menuPlacement,maxHeight:a.props.maxMenuHeight})},a.setMenuRef=function(e){a.menuRef=e};var n=e.options,c=e.value,o=e.isMulti;return a.state={selected:fe(n,c,o)},a}return Object(u.a)(r,[{key:"componentDidUpdate",value:function(e,t,r){var a=this.props,n=a.options,c=a.value,o=a.isMulti;e.value===c&&e.options===n||this.setState({selected:fe(n,c,o)})}},{key:"render",value:function(){var e=this.props,t=(e.theme,e.classes),r=e.className,n=(e.dispatch,e.disabled),c=e.keepVisible,o=e.textFieldProps,i=e.label,l=e.placeholder,s=e.fullWidth,f=e.helperText,u=e.error,d=e.styles,p=e.components,b=e.menuPortalTarget,h=e.options,j=e.isMulti,g=Object(K.a)(e,["theme","classes","className","dispatch","disabled","keepVisible","textFieldProps","label","placeholder","fullWidth","helperText","error","styles","components","menuPortalTarget","options","isMulti"]);if(n&&!c)return null;var O=this.state.selected,m=Object(H.a)([t.root,Object(S.a)({},t.fullWidth,s),r]);return Object(a.jsx)(re.a,Object(Y.a)(Object(Y.a)({className:m,classes:t,classNamePrefix:t.select,styles:this.getSelectStyles(d),components:Object(Y.a)(Object(Y.a)({},be),{},{components:p}),isDisabled:n,placeholder:l,textFieldProps:Object(Y.a)(Object(Y.a)({},o),{},{label:i,helperText:f,error:u}),closeMenuOnScroll:this.closeMenuOnScroll,menuPlacement:"auto",menuPosition:"absolute",menuPortalTarget:b,getPortalPlacement:this.getPortalPlacement},g),{},{setMenuRef:this.setMenuRef,menuRef:this.menuRef,options:h,value:O,isMulti:j,onChange:this.onChange,onMenuClose:this.onMenuClose}))}}]),r}(n.PureComponent);ue.defaultProps={options:[],disabled:!1,keepVisible:!0,styles:{},isClearable:!0,isMulti:!1,menuPortalTarget:document.body};var de=Object(b.a)((function(e){var t=e.spacing(1);return{root:{flexGrow:1},select:{height:"auto",paddingLeft:t,color:"white"},input:{fontSize:".875rem",display:"flex",color:"white !important",padding:0},valueContainer:{display:"flex",justifyContent:"center",alignItems:"center",flex:1,overflow:"hidden",padding:0,minWidth:35,"& div":{display:"grid",justifyContent:"center",alignItems:"center",color:"white",fontSize:"inherit",margin:0}},chip:{color:"white",margin:0},chipFocused:{backgroundColor:Object(se.emphasize)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:"".concat(t,"px ").concat(2*t,"px")},singleValue:{color:"white",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},menu:{position:"absolute",minWidth:"100%",top:0,left:0},inputLabel:{position:"unset",color:"white !important"}}}),{withTheme:!0})(ue);function pe(e){var t=e.inputRef,r=Object(K.a)(e,["inputRef"]);return Object(a.jsx)("div",Object(Y.a)({ref:t},r))}var be={Control:function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(){return Object(f.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.innerRef,r=e.children,n=e.innerProps,c=e.selectProps,o=c.classes,i=c.value,l=c.textFieldProps,s=c.placeholder,f=c.InputProps;return Object(a.jsx)(ne.a,Object(Y.a)({fullWidth:!0,placeholder:s,InputProps:Object(Y.a)({disableUnderline:!0,inputComponent:pe,inputProps:Object(Y.a)({className:o.input,inputRef:t,children:r},n)},f),InputLabelProps:{shrink:!!i,className:o.inputLabel}},l))}}]),r}(n.PureComponent),IndicatorSeparator:null,Menu:function(e){Object(d.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(f.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).setRef=function(t){if(t){var r=Object(c.findDOMNode)(t);e.props.selectProps.setMenuRef(r),e.props.innerRef(r)}},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props,t=e.selectProps,r=e.innerProps,n=e.children,c=t.classes;return Object(a.jsx)(oe.a,Object(Y.a)(Object(Y.a)({className:c.menu,square:!0,ref:this.setRef},r),{},{children:n}))}}]),r}(n.PureComponent),MultiValue:function(e){var t=Object(H.a)(["chip",{chipFocused:e.isFocused}],e.selectProps.classes);return Object(a.jsx)(ce.a,{tabIndex:-1,label:e.children,className:t,onDelete:e.removeProps.onClick,deleteIcon:Object(a.jsx)(le.a,Object(Y.a)({},e.removeProps))})},NoOptionsMessage:function(e){return Object(a.jsx)(ae.a,Object(Y.a)(Object(Y.a)({className:e.selectProps.classes.noOptionsMessage},e.innerProps),{},{children:e.children}))},Option:function(e){return Object(a.jsx)(ie.a,Object(Y.a)(Object(Y.a)({buttonRef:e.innerRef,selected:e.isFocused,component:"div",dense:!0,style:{fontWeight:e.isSelected?500:400}},e.innerProps),{},{children:e.children}))},SingleValue:function(e){return Object(a.jsx)(ae.a,Object(Y.a)(Object(Y.a)({className:e.selectProps.classes.singleValue,component:"span"},e.innerProps),{},{children:e.children}))},ValueContainer:function(e){return Object(a.jsx)("div",{className:e.selectProps.classes.valueContainer,children:e.children})}};var he=Object(b.a)((function(e){return{root:{display:"grid",gridTemplateColumns:"4fr 3fr 2fr 4fr 6fr",backgroundColor:e.palette.dialoglightgrey[500],gridGap:8,padding:8,wordWrap:"break-word"},header:{backgroundColor:"".concat(e.palette.primary[500]," !important")},genreButtonContainer:{},genreButton:{backgroundColor:e.palette.primary[500],textTransform:"unset",lineHeight:"unset",marginLeft:6,marginTop:6,padding:"3px 10px"},headerText:{display:"flex",justifySelf:"center",alignSelf:"center"},rowText:{display:"flex",justifySelf:"center",alignSelf:"center"},headerSort:{display:"flex",justifyContent:"center",alignItems:"center"},headerFilter:{},sortArrow:{fontSize:16,"&:hover":{color:e.palette.yellow[900],cursor:"pointer"}}}}))((function(e){var t=e.classes,r=e.record,n=e.rowOrder,c=e.isHeader,o=e.sortOrder,i=e.updateSort,l=e.genres,s=e.states,f=e.updateState,u=e.updateGenre,d=e.currentGenre,p=e.currentState,b=function(){i(o?0:1)},h=function(e){return function(t){u(e)}};return Object(a.jsx)("div",{className:Object(H.a)(t.root,c&&t.header),children:r&&n&&n.map((function(e){var n=r[e];if(e!==V||c)return c?e===_?Object(a.jsxs)("div",{className:t.headerSort,children:[Object(a.jsx)("span",{className:t.headerText,children:n}),o?Object(a.jsx)(q.a,{className:t.sortArrow,onClick:b}):Object(a.jsx)(J.a,{className:t.sortArrow,onClick:b})]},n):e===W?Object(a.jsx)(de,{className:t.headerSort,placeholder:"State",name:"state",value:p,onChange:f,options:s},"state"):e===V?Object(a.jsx)(de,{className:t.headerSort,placeholder:"Genre",name:"genre",value:d,onChange:u,options:l},"genre"):Object(a.jsx)("span",{className:t.headerText,children:n},n):Object(a.jsx)("span",{className:t.rowText,children:n},n);var i=n.split(",");return Object(a.jsx)("div",{className:t.genreButtonContainer,children:i&&i.map((function(e){return Object(a.jsx)(X.a,{className:t.genreButton,onClick:h(e),children:e},e)}))},n)}))},r.id)}));var je=Object(l.b)((function(e,t){return{sortOrder:function(e){return e.records.filters&&e.records.filters.sort}(e),states:function(e){return e.records.states.map((function(e){return{value:e,label:e}}))}(e),genres:function(e){return e.records.genres.map((function(e){return{value:e,label:e}}))}(e),currentGenre:function(e){return e.records.genre}(e),currentState:function(e){return e.records.state}(e)}}),(function(e,t){return{updateSort:function(t){return e(function(e){return function(t,r){t({type:C,payload:e})}}(t))},updateGenre:function(t){return e(function(e){return function(t,r){t({type:F,payload:e})}}(t))},updateState:function(t){return e(function(e){return function(t,r){t({type:w,payload:e})}}(t))}}}))(he);var ge=Object(b.a)((function(e){return{root:{textAlign:"center",display:"grid",gridGap:"8px",margin:24},paginator:{},pageArrow:{"&:hover":{cursor:"pointer",backgroundColor:Object(E.d)(e.palette.common.white,.25)}}}}))((function(e){var t=e.classes,r=e.records,n=e.page,c=e.pages,o=e.updatePage,i=[_,G,W,U,V];return Object(a.jsxs)("div",{className:t.root,children:[i&&Object(a.jsx)(je,{record:z,rowOrder:i,isHeader:!0},z.id),r&&r.length?r.map((function(e){return Object(a.jsx)(je,{record:e,rowOrder:i},e.id)})):Object(a.jsx)("h1",{children:"No records found"}),Object(a.jsxs)("div",{className:t.paginator,children:[Object(a.jsx)(I.a,{className:t.pageArrow,onClick:function(){n>0&&o(n-1)}}),n+1," / ",c,Object(a.jsx)(L.a,{className:t.pageArrow,onClick:function(){n<c-1&&o(n+1)}})]})]})}));var Oe=Object(l.b)((function(e,t){return{records:function(e){return e.records.current}(e),page:function(e){return e.records.page}(e),pages:function(e){return e.records.pages}(e)}}),(function(e,t){return{updatePage:function(t){return e(function(e){return function(t,r){t({type:P,payload:e})}}(t))}}}))(ge);var me=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)(Oe,{})})};var ve=Object(l.b)((function(e,t){return{}}),(function(e,t){return{}}))(me);var ye=function(e){return Object(a.jsx)(ae.a,{children:"Made with love by Paige Harris \u2764\ufe0f"})};var xe=Object(s.a)((function(e){return{root:{overflow:"auto",height:"100vh",width:"100vw","& button":{background:e.palette.primary[500],"&:hover":{background:e.palette.yellow[900]}}}}}))((function(e){var t=e.classes;return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(k,{header:Object(a.jsx)(B,{}),content:Object(a.jsx)(ve,{}),footer:Object(a.jsx)(ye,{})})})})),Ae=r(76),Ce={main:"#F44336",50:"#FFEBEE",100:"#FFCDD2",200:"#EF9A9A",300:"#E57373",400:"#EF5350",500:"#F44336",600:"#E53935",700:"#D32F2F",800:"#C62828",900:"#B71C1C",A100:"#FF8A80",A200:"#FF5252",A400:"#FF1744",A700:"#D50000",contrastDefaultColor:"light"},we={type:"dark",primary:Ce,secondary:{main:"#9e9e9e",50:"#f3f3f3",100:"#e2e2e2",200:"#cfcfcf",300:"#bbbbbb",400:"#adadad",500:"#9e9e9e",600:"#969696",700:"#8c8c8c",800:"#828282",900:"#707070",A100:"#ffffff",A200:"#eeeeee",A400:"#e0e0e0",A700:"#bdbdbd",contrastDefaultColor:"light"},error:{main:"#f44336",50:"#ffcdd2",100:"#fcc7c3",200:"#faa19b",300:"#f77b72",400:"#f65f54",500:"#f44336",600:"#f33d30",700:"#f13429",800:"#ef2c22",900:"#ec1e16",A100:"#ffffff",A200:"#ffe9e9",A400:"#ffb8b6",A700:"#ff9f9c",contrastDefaultColor:"light"},common:{black:"#000",white:"#fff",fontcolor:"#d4d4d4",transparent:"rgba(0, 0, 0, 0)",fullBlack:"rgba(0, 0, 0, 1)",darkBlack:"rgba(0, 0, 0, 0.87)",lightBlack:"rgba(0, 0, 0, 0.54)",minBlack:"rgba(0, 0, 0, 0.26)",faintBlack:"rgba(0, 0, 0, 0.12)",fullWhite:"rgba(255, 255, 255, 1)",darkWhite:"rgba(255, 255, 255, 0.87)",lightWhite:"rgba(255, 255, 255, 0.54)"},background:{lighterPaper:"#b3b3b3",contentFrame:"#616161",lightPaper:"#515151",paper:"#424242",default:"#333333",darkPaper:"#252525",darkerPaper:"#1a1a1a"},purple:{50:"#f3ebf6",100:"#e1cde9",200:"#cdacdb",300:"#b98acc",400:"#aa71c1",500:"#9b58b6",600:"#9350af",700:"#8947a6",800:"#7f3d9e",900:"#6d2d8e",A100:"#f0d4ff",A200:"#dea1ff",A400:"#cc6eff",A700:"#c354ff",contrastDefaultColor:"light"},green:{50:"#e4f7f3",100:"#baebe1",200:"#8dddce",300:"#5fcfba",400:"#3cc5ab",500:"#1abb9c",600:"#17b594",700:"#13ac8a",800:"#0fa480",900:"#08966e",A100:"#c3ffec",A200:"#90ffdc",A400:"#5dffcc",A700:"#43ffc5",contrastDefaultColor:"dark"},blue:{50:"#e6e8f9",100:"#c0c6f0",200:"#96a0e6",300:"#6c79db",400:"#4d5dd4",500:"#2d40cc",600:"#283ac7",700:"#2232c0",800:"#1c2ab9",900:"#111cad",A100:"#dddfff",A200:"#aaafff",A400:"#777fff",A700:"#5d67ff",contrastDefaultColor:"light"},orange:{main:"#FF5722",50:"#FBE9E7",100:"#FFCCBC",200:"#FFAB91",300:"#FF8A65",400:"#FF7043",500:"#FF5722",600:"#F4511E",700:"#E64A19",800:"#D84315",900:"#BF360C",A100:"#FF9E80",A200:"#FF6E40",A400:"#FF3D00",A700:"#DD2C00",contrastDefaultColor:"light"},red:Ce,pink:{main:"#E91E63",50:"#FCE4EC",100:"#F8BBD0",200:"#F48FB1",300:"#F06292",400:"#EC407A",500:"#E91E63",600:"#D81B60",700:"#C2185B",800:"#AD1457",900:"#880E4F",A100:"#FF80AB",A200:"#FF4081",A400:"#F50057",A700:"#C51162",contrastDefaultColor:"light"},brown:{50:"efe8e1",100:"d7c5b4",200:"bc9f82",300:"a1794f",400:"8c5c2a",500:"783f04",600:"703903",700:"653103",800:"5b2902",900:"481b01",A100:"ff9f7c",A200:"ff7a49",A400:"ff5416",A700:"fc4300",contrastDefaultColor:"light"},yellow:{50:"#fffaed",100:"#fff4d1",200:"#ffecb3",300:"#ffe494",400:"#ffdf7d",500:"#ffd966",600:"#ffd55e",700:"#ffcf53",800:"#ffca49",900:"#ffc038",A100:"#ffffff",A200:"#ffffff",A400:"#fff5e1",A700:"#ffedc8",contrastDefaultColor:"light"},completed:{50:"#e6f9ee",100:"#c0f0d4",200:"#96e6b8",300:"#6cdb9b",400:"#4dd485",500:"#2dcc70",600:"#28c768",700:"#22c05d",800:"#1cb953",900:"#11ad41",A100:"#ddffe6",A200:"#aaffc1",A400:"#77ff9c",A700:"#5dff89",contrastDefaultColor:"dark"},notstarted:{50:"#fce9e7",100:"#f8c9c4",200:"#f3a59d",300:"#ee8176",400:"#eb6658",500:"#e74b3b",600:"#e44435",700:"#e03b2d",800:"#dd3326",900:"#d72319",A100:"#ffffff",A200:"#ffd8d6",A400:"#ffa7a3",A700:"#ff8f8a",contrastDefaultColor:"light"},inprogress:{50:"#fcefe4",100:"#f8d8bc",200:"#f3be90",300:"#eea464",400:"#ea9142",500:"#e67d21",600:"#e3751d",700:"#df6a18",800:"#db6014",900:"#d54d0b",A100:"#ffffff",A200:"#ffdbcd",A400:"#ffb69a",A700:"#ffa480",contrastDefaultColor:"dark"},dialogdarkgrey:{50:"#e7e7e7",100:"#c2c2c2",200:"#999999",300:"#707070",400:"#525252",500:"#333333",600:"#2e2e2e",700:"#272727",800:"#202020",900:"#141414",A100:"#ef6e6e",A200:"#ea4040",A400:"#f60000",A700:"#dd0000",contrastDefaultColor:"light"},dialoglightgrey:{50:"#eaeaea",100:"#cbcbcb",200:"#a8a8a8",300:"#858585",400:"#6b6b6b",500:"#515151",600:"#4a4a4a",700:"#404040",800:"#373737",900:"#272727",A100:"#f18585",A200:"#ec5757",A400:"#ff1111",A700:"#f60000",contrastDefaultColor:"light"},dialogformfieldbkgd:{50:"#e5e5e5",100:"#bebebe",200:"#929292",300:"#666666",400:"#464646",500:"#252525",600:"#212121",700:"#1b1b1b",800:"#161616",900:"#0d0d0d",A100:"#eb6969",A200:"#e53c3c",A400:"#ee0000",A700:"#d40000",contrastDefaultColor:"light"}},Fe=Object(Ae.a)({palette:we}),Pe=r(64),ke=r(320),Se=r(321),De="search",Ee="sort",Ne=r(194),Me=r.n(Ne),Re={all:[],filtered:[],current:[],page:0,pages:1,search:"",state:null,genre:null,genres:[],states:[],filters:{search:"",sort:0,state:null,genre:null}},Te=function(e,t){var r=Object(Se.a)(e),a=function(e){if(e===Ee){var a=t[Ee];r=r.sort((function(e,t){return e.name.localeCompare(t.name)})),a&&r.reverse()}else if(e===De){var n=t[e].trim().toLowerCase();r=r.filter((function(e){return e.name.toLowerCase().includes(n)}))}else if(t[e]){var c=t[e].trim().toLowerCase();r=r.filter((function(t){return t[e]&&t[e].toLowerCase().includes(c)}))}};for(var n in t)a(n);return r},Be=function(e,t){return e.slice(10*t,10*t+10)},Ie=function(e){return Math.ceil(e.length/10)},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var r=Object.values(t.payload),a=Me()(r.map((function(e){return e.genre.split(",")})).flat()),n=Me()(r.map((function(e){return e.state}))),c=Te(r,e.filters);return Object(Y.a)(Object(Y.a)({},e),{},{all:r,filtered:c,current:Be(c,e.page),genres:a,states:n,pages:Ie(c)});case x:var o=t.payload,i=Object(Y.a)(Object(Y.a)({},e.filters),{},{search:o}),l=Te(e.all,i);return Object(Y.a)(Object(Y.a)({},e),{},{search:o,filters:i,filtered:l,current:Be(l,0),page:0,pages:Ie(l)});case C:var s=t.payload,f=Object(Y.a)(Object(Y.a)({},e.filters),{},{sort:s}),u=Te(e.all,f);return Object(Y.a)(Object(Y.a)({},e),{},{sort:s,filters:f,filtered:u,current:Be(u,0),page:0,pages:Ie(u)});case w:var d=t.payload,p=Object(Y.a)(Object(Y.a)({},e.filters),{},{state:d}),b=Te(e.all,p);return Object(Y.a)(Object(Y.a)({},e),{},{state:d,filters:p,filtered:b,current:Be(b,0),page:0,pages:Ie(b)});case F:var h=t.payload,j=Object(Y.a)(Object(Y.a)({},e.filters),{},{genre:h}),g=Te(e.all,j);return Object(Y.a)(Object(Y.a)({},e),{},{genre:h,filters:j,filtered:g,current:Be(g,0),page:0,pages:Ie(g)});case P:var O=t.payload,m=Be(Te(e.all,e.filters),O);return Object(Y.a)(Object(Y.a)({},e),{},{page:O,current:m});case A:var v=Object(Y.a)(Object(Y.a)({},t.payload),{},{search:e.search}),k=Te(e.all,v);return Object(Y.a)(Object(Y.a)({},e),{},{filters:v,filtered:k,current:Be(k,0),page:0,pages:Ie(k)});default:return e}},He=Object(Pe.c)({records:Le});var _e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Pe.d,r=[ke.a],a=t(Pe.a.apply(void 0,r));return Object(Pe.e)(He,e,a)}();o.a.render(Object(a.jsx)(i.a,{theme:Fe,children:Object(a.jsx)(l.a,{store:_e,children:Object(a.jsx)(xe,{})})}),document.getElementById("root"))}},[[466,1,2]]]);
//# sourceMappingURL=main.46a0eda3.chunk.js.map