"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[2026],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),i=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=i(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=m(t,["components","mdxType","originalType","parentName"]),s=i(n),k=r,c=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return n?a.createElement(c,o(o({ref:e},p),{},{components:n})):a.createElement(c,o({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=s;var m={};for(var d in e)hasOwnProperty.call(e,d)&&(m[d]=e[d]);m.originalType=t,m.mdxType="string"==typeof t?t:r,o[1]=m;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8215:function(t,e,n){var a=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,r=t.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},e)}},5064:function(t,e,n){n.d(e,{Z:function(){return i}});var a=n(7294),r=n(9443);var l=function(){var t=(0,a.useContext)(r.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=n(6010),m="tabItem_1uMI",d="tabItemActive_2DSg";var i=function(t){var e,n=t.lazy,r=t.block,i=t.defaultValue,p=t.values,u=t.groupId,s=t.className,k=a.Children.toArray(t.children),c=null!=p?p:k.map((function(t){return{value:t.props.value,label:t.props.label}})),g=null!=i?i:null==(e=k.find((function(t){return t.props.default})))?void 0:e.props.value,N=l(),f=N.tabGroupChoices,b=N.setTabGroupChoices,y=(0,a.useState)(g),h=y[0],w=y[1],v=[];if(null!=u){var O=f[u];null!=O&&O!==h&&c.some((function(t){return t.value===O}))&&w(O)}var x=function(t){var e=t.currentTarget,n=v.indexOf(e),a=c[n].value;w(a),null!=u&&(b(u,a),setTimeout((function(){var t,n,a,r,l,o,m,i;(t=e.getBoundingClientRect(),n=t.top,a=t.left,r=t.bottom,l=t.right,o=window,m=o.innerHeight,i=o.innerWidth,n>=0&&l<=i&&r<=m&&a>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(d),setTimeout((function(){return e.classList.remove(d)}),2e3))}),150))},E=function(t){var e,n=null;switch(t.key){case"ArrowRight":var a=v.indexOf(t.target)+1;n=v[a]||v[0];break;case"ArrowLeft":var r=v.indexOf(t.target)-1;n=v[r]||v[v.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},s)},c.map((function(t){var e=t.value,n=t.label;return a.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,o.Z)("tabs__item",m,{"tabs__item--active":h===e}),key:e,ref:function(t){return v.push(t)},onKeyDown:E,onFocus:x,onClick:x},null!=n?n:e)}))),n?(0,a.cloneElement)(k.filter((function(t){return t.props.value===h}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==h})}))))}},9443:function(t,e,n){var a=(0,n(7294).createContext)(void 0);e.Z=a},568:function(t,e,n){n.r(e),n.d(e,{Highlight:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return i},toc:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=(n(5064),n(8215),["components"]),m={sidebar_position:5},d="Xmonad",i={unversionedId:"window-managers/xmonad",id:"window-managers/xmonad",isDocsHomePage:!1,title:"Xmonad",description:"For Archcraft community members, Edit the page.",source:"@site/docs/window-managers/xmonad.mdx",sourceDirName:"window-managers",slug:"/window-managers/xmonad",permalink:"/docs/window-managers/xmonad",editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/window-managers/xmonad.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"I3wm",permalink:"/docs/window-managers/i3wm"},next:{title:"Herbstluftwm",permalink:"/docs/window-managers/herbstluftwm"}},p=[],u=function(t){var e=t.children,n=t.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"}},e)},s={toc:p,Highlight:u};function k(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"xmonad"},"Xmonad"),(0,l.kt)("p",null,"For Archcraft community members, Edit the page."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Keybinding"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Return")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a terminal (alacritty)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+Return")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a terminal in floating mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+F1/mod")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens app launcher")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+n")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens network menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+x")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a powermenu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+ctrl+m")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens the music menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+ctrl+s")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens screenshoting menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+ctrl+r")),(0,l.kt)("td",{parentName:"tr",align:null},"Runs apps as root")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+ctrl+w")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens the windows menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+f")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens file manager (thunar)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+w")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a web browser (firefox)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+e")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a text editor GUI (geany)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+ctrl+l")),(0,l.kt)("td",{parentName:"tr",align:null},"Launches the berry lockscreen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"alt+Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot (5s delay)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Shift+Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot (10s delay)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ctrl+Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot of active window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"ctrl+alt+Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot of an area")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Escape")),(0,l.kt)("td",{parentName:"tr",align:null},"Spawn xkill")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+c")),(0,l.kt)("td",{parentName:"tr",align:null},"Kill an App")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+q")),(0,l.kt)("td",{parentName:"tr",align:null},"Restart Xmonad")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+ctrl+g")),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle Gaps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+g")),(0,l.kt)("td",{parentName:"tr",align:null},"Reset Gaps")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+ctrl+t")),(0,l.kt)("td",{parentName:"tr",align:null},"Increase Gap by 10 (Left)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+t")),(0,l.kt)("td",{parentName:"tr",align:null},"Decrease Gap by 10 (Left)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+ctrl+y")),(0,l.kt)("td",{parentName:"tr",align:null},"Increase Gap by 10 (Top)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+y")),(0,l.kt)("td",{parentName:"tr",align:null},"Decrease Gap by 10 (Top)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+ctrl+u")),(0,l.kt)("td",{parentName:"tr",align:null},"Increase Gap by 10 (Bottom)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+u")),(0,l.kt)("td",{parentName:"tr",align:null},"Decrease Gap by 10 (Bottom)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+ctrl+i")),(0,l.kt)("td",{parentName:"tr",align:null},"Increase Gap by 10 (Right)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+i")),(0,l.kt)("td",{parentName:"tr",align:null},"Decrease Gap by 10 (Right)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+r")),(0,l.kt)("td",{parentName:"tr",align:null},"Reset window to the correct size")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+m")),(0,l.kt)("td",{parentName:"tr",align:null},"Switch focus to master window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+s")),(0,l.kt)("td",{parentName:"tr",align:null},"Swap the focus window and the master window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+t")),(0,l.kt)("td",{parentName:"tr",align:null},"Push window to tiling")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+space")),(0,l.kt)("td",{parentName:"tr",align:null},"Cycle layouts")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+space")),(0,l.kt)("td",{parentName:"tr",align:null},"Reset layout to default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"Cycle windows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+j/mod+Left")),(0,l.kt)("td",{parentName:"tr",align:null},"Move focus to the next window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+k/mod+Right")),(0,l.kt)("td",{parentName:"tr",align:null},"Move focus to the previous window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+j/mod+shift+Left")),(0,l.kt)("td",{parentName:"tr",align:null},"Swap focus to the next window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+k/mod+shift+Right")),(0,l.kt)("td",{parentName:"tr",align:null},"Move focus to the previous window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+h/mod+ctrl+Left")),(0,l.kt)("td",{parentName:"tr",align:null},"Shrink window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+l/mod+ctrl+Right")),(0,l.kt)("td",{parentName:"tr",align:null},"Expand window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+,")),(0,l.kt)("td",{parentName:"tr",align:null},"Increase number of windows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+.")),(0,l.kt)("td",{parentName:"tr",align:null},"Decrease number of windows")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+{1-9}")),(0,l.kt)("td",{parentName:"tr",align:null},"Switch to another workspace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+Shift+{1-9}")),(0,l.kt)("td",{parentName:"tr",align:null},"Send focused window to another workspace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+{y,u,i}")),(0,l.kt)("td",{parentName:"tr",align:null},"Switch to physical/Xinerama screens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+shift+{y,u,i}")),(0,l.kt)("td",{parentName:"tr",align:null},"Move client to screen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+mouse1")),(0,l.kt)("td",{parentName:"tr",align:null},"Drag floating window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+mouse2")),(0,l.kt)("td",{parentName:"tr",align:null},"Raise the window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod+mouse3")),(0,l.kt)("td",{parentName:"tr",align:null},"Resize floating window")))),(0,l.kt)("p",null,"To install the archcraft xmonad theme , just run ",(0,l.kt)("inlineCode",{parentName:"p"},"yay -Syyu archcraft-xmonad")),(0,l.kt)("p",null,"Edited by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/deathemonic"},"Deathemonic")))}k.isMDXComponent=!0},6010:function(t,e,n){function a(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=a(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function r(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=a(t))&&(r&&(r+=" "),r+=e);return r}n.d(e,{Z:function(){return r}})}}]);