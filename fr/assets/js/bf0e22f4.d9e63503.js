"use strict";(self.webpackChunkArchcraft_Wiki=self.webpackChunkArchcraft_Wiki||[]).push([[5844],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7332:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"02-post-bspwm",title:"Changer les th\xe8mes et les ic\xf4nes dans bspwm",authors:"adi1090x",tags:["howto","bspwm","xsettingsd","gtk"]},s=void 0,u={permalink:"/fr/blog/02-post-bspwm",editUrl:"https://github.com/archcraft-os/documentation/edit/main/i18n/fr/docusaurus-plugin-content-blog/2021/07-20-post-bspwm.md",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2021/07-20-post-bspwm.md",title:"Changer les th\xe8mes et les ic\xf4nes dans bspwm",description:"Dans Archcraft, BSPWM utilise xsettingsd, un d\xe9mon qui implimente la specification XSETTINGS",date:"2021-07-20T00:00:00.000Z",formattedDate:"July 20, 2021",tags:[{label:"howto",permalink:"/fr/blog/tags/howto"},{label:"bspwm",permalink:"/fr/blog/tags/bspwm"},{label:"xsettingsd",permalink:"/fr/blog/tags/xsettingsd"},{label:"gtk",permalink:"/fr/blog/tags/gtk"}],readingTime:.475,truncated:!0,authors:[{name:"Aditya Shakya",title:"D\xe9veloppeur d'Archcraft",url:"https://github.com/adi1090x",imageURL:"https://github.com/adi1090x.png",key:"adi1090x"}],nextItem:{title:"Ajouter ma musique en mpd",permalink:"/fr/blog/01-post-mpd"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Dans Archcraft, BSPWM utilise ",(0,o.kt)("inlineCode",{parentName:"p"},"xsettingsd"),", un d\xe9mon qui implimente la specification ",(0,o.kt)("em",{parentName:"p"},"XSETTINGS"),"\nPour changer les th\xe9mes GTK, icons et le theme du curseur , vous devez \xe9diter le fichier ",(0,o.kt)("strong",{parentName:"p"},"~/.xsettingsd")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\xc9ditez ",(0,o.kt)("strong",{parentName:"li"},"~/.xsettingsd")," avec votre \xe9diteur de texte de choix")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ vim ~/.xsettingsd\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Changez ces valeurs avec les valeurs que vous voulez mettre")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Net/ThemeName "Arc-Dark"\nNet/IconThemeName "Arc-Circle"\nGtk/CursorThemeName "Pear"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Restart the ",(0,o.kt)("inlineCode",{parentName:"li"},"xsettingsd")," daemon. Have a look at ","[this]"," for all available options."),(0,o.kt)("li",{parentName:"ul"},"Red\xe9marez le d\xe9mon ",(0,o.kt)("inlineCode",{parentName:"li"},"xsettingsd"),". Jettez un coup d'oeil au ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/derat/xsettingsd/wiki/Settings"},"wiki")," pour toutes les options possibles")))}d.isMDXComponent=!0}}]);