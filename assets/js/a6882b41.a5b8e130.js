"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[9812],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),m=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=m(n),k=a,c=s["".concat(d,".").concat(k)]||s[k]||u[k]||l;return n?r.createElement(c,o(o({ref:e},p),{},{components:n})):r.createElement(c,o({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8215:function(t,e,n){var r=n(7294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},5064:function(t,e,n){n.d(e,{Z:function(){return m}});var r=n(7294),a=n(9443);var l=function(){var t=(0,r.useContext)(a.Z);if(null==t)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return t},o=n(6010),i="tabItem_1uMI",d="tabItemActive_2DSg";var m=function(t){var e,n=t.lazy,a=t.block,m=t.defaultValue,p=t.values,u=t.groupId,s=t.className,k=r.Children.toArray(t.children),c=null!=p?p:k.map((function(t){return{value:t.props.value,label:t.props.label}})),g=null!=m?m:null==(e=k.find((function(t){return t.props.default})))?void 0:e.props.value,N=l(),f=N.tabGroupChoices,b=N.setTabGroupChoices,y=(0,r.useState)(g),h=y[0],w=y[1],v=[];if(null!=u){var O=f[u];null!=O&&O!==h&&c.some((function(t){return t.value===O}))&&w(O)}var S=function(t){var e=t.currentTarget,n=v.indexOf(e),r=c[n].value;w(r),null!=u&&(b(u,r),setTimeout((function(){var t,n,r,a,l,o,i,m;(t=e.getBoundingClientRect(),n=t.top,r=t.left,a=t.bottom,l=t.right,o=window,i=o.innerHeight,m=o.innerWidth,n>=0&&l<=m&&a<=i&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(d),setTimeout((function(){return e.classList.remove(d)}),2e3))}),150))},P=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r=v.indexOf(t.target)+1;n=v[r]||v[0];break;case"ArrowLeft":var a=v.indexOf(t.target)-1;n=v[a]||v[v.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},s)},c.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":h===e}),key:e,ref:function(t){return v.push(t)},onKeyDown:P,onFocus:S,onClick:S},null!=n?n:e)}))),n?(0,r.cloneElement)(k.filter((function(t){return t.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==h})}))))}},9443:function(t,e,n){var r=(0,n(7294).createContext)(void 0);e.Z=r},2462:function(t,e,n){n.r(e),n.d(e,{Highlight:function(){return u},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=(n(5064),n(8215),["components"]),i={sidebar_position:2},d="Bspwm",m={unversionedId:"window-managers/bspwm",id:"window-managers/bspwm",isDocsHomePage:!1,title:"Bspwm",description:"For Archcraft community members, Edit the page.",source:"@site/docs/window-managers/bspwm.mdx",sourceDirName:"window-managers",slug:"/window-managers/bspwm",permalink:"/docs/window-managers/bspwm",editUrl:"https://github.com/archcraft-os/documentation/edit/main/docs/window-managers/bspwm.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Openbox",permalink:"/docs/window-managers/openbox"},next:{title:"DWM",permalink:"/docs/window-managers/dwm"}},p=[],u=function(t){var e=t.children,n=t.color;return(0,l.kt)("span",{style:{backgroundColor:n,borderRadius:"4px",color:"#fff",padding:"0 0.2rem 0 0.2rem"}},e)},s={toc:p,Highlight:u};function k(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bspwm"},"Bspwm"),(0,l.kt)("p",null,"For Archcraft community members, Edit the page."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note: the mod Key in Archcraft bspwm is the Super Key (Aka: Windows key)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Keybinding"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + T")),(0,l.kt)("td",{parentName:"tr",align:null},"VERY IMPORTANT : Rofi themes Menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Return")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a terminal (alacritty)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Alt + Return")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a terminal in fullscreen mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Shift + Return")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a terminal in floating mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Alt + F1")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens app launcher")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + N")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens network menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + B")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens Bluetooth menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + X")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a power menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + M")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens the music menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + S")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens screenshot menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + R")),(0,l.kt)("td",{parentName:"tr",align:null},"Runs apps as root")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + W")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens windows menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Shift + F")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens file manager (thunar)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Shift + E")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a text editor GUI (geany)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Shift + W")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a web browser (firefox)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Ctrl + Alt + V")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a TUI text editor (vim)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Ctrl + Alt + R")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a TUI file manager (ranger)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Ctrl + Alt + H")),(0,l.kt)("td",{parentName:"tr",align:null},"Opens a TUI system resource monitor (HTOP)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + P")),(0,l.kt)("td",{parentName:"tr",align:null},"Color Picker")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Shift + L")),(0,l.kt)("td",{parentName:"tr",align:null},"Launches the BSPWM lockscreen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Alt + Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot (5s delay)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Shift + Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot (10s delay)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Ctrl + Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot of active window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Print")),(0,l.kt)("td",{parentName:"tr",align:null},"Takes a screenshot of an area")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + C")),(0,l.kt)("td",{parentName:"tr",align:null},"Kill an App")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Escape")),(0,l.kt)("td",{parentName:"tr",align:null},"Reload keybindings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Ctrl + Alt + Escape")),(0,l.kt)("td",{parentName:"tr",align:null},"Use xkill to murder an App via a skull cursor of death (scary)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Ctrl + Shift + Q")),(0,l.kt)("td",{parentName:"tr",align:null},"Quit BSPWM (goodbye frien ;-;)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Ctrl + Shift + R")),(0,l.kt)("td",{parentName:"tr",align:null},"Restart BSPWM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + H/V/Q")),(0,l.kt)("td",{parentName:"tr",align:null},"Split horizontally vertically or cancel splits")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Ctrl + {1-9}")),(0,l.kt)("td",{parentName:"tr",align:null},"Preselect the ratio")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + F")),(0,l.kt)("td",{parentName:"tr",align:null},"Enable FullScreen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Space")),(0,l.kt)("td",{parentName:"tr",align:null},"Toggle betweeen floating and tiled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Shift + Space")),(0,l.kt)("td",{parentName:"tr",align:null},"Enable Pseudo tiled and tiled mode")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Ctrl + M/X/Y/Z")),(0,l.kt)("td",{parentName:"tr",align:null},'Set the node flags to "Marked/Locked/Sticky/Private"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Shift + Left/Down/Up/Right")),(0,l.kt)("td",{parentName:"tr",align:null},"Send the window to the edge of the screen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Ctrl + Alt + Left/Right")),(0,l.kt)("td",{parentName:"tr",align:null},"Switch workspace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Tab/Grave")),(0,l.kt)("td",{parentName:"tr",align:null},"Switch to last opened workspace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Shift+{1-8}")),(0,l.kt)("td",{parentName:"tr",align:null},"Send focused window to another workspace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Ctrl + Left/Right/Up/Down")),(0,l.kt)("td",{parentName:"tr",align:null},"Expand the window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Alt + Left/Right/Up/Down")),(0,l.kt)("td",{parentName:"tr",align:null},"Shrink the window")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"mod + Shift + H")),(0,l.kt)("td",{parentName:"tr",align:null},"Hide/Unhide a window")))),(0,l.kt)("p",null,"Made with \u2764\ufe0f by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/crystal-trd"},"Crystal")))}k.isMDXComponent=!0},6010:function(t,e,n){function r(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})}}]);