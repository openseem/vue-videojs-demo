webpackJsonp([3],{"+9YK":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("lGuZ"),n=s("vstk"),a=s("VU/8"),r=a(i.a,n.a,!1,null,null,null);t.default=r.exports},0:function(e,t){},"0ntf":function(e,t){},"5LIk":function(e,t){},"7YgM":function(e,t){e.exports={name:"vue-videojs-demo",version:"1.0.6",description:"A Vue.js project",author:"savokiss <jaynaruto@qq.com>",private:!0,scripts:{dev:"node build/dev-server.js",start:"node build/dev-server.js",build:"node build/build.js"},dependencies:{"videojs-contrib-hls":"5.14.1","videojs-contrib-hls.js":"3.2.0","videojs-flash":"2.1.0",vue:"^2.5.16","vue-router":"^2.8.1","vue-video-player":"4.0.6"},devDependencies:{autoprefixer:"^7.2.6","babel-core":"^6.22.1","babel-loader":"^7.1.4","babel-plugin-transform-runtime":"^6.22.0","babel-preset-env":"^1.6.1","babel-preset-stage-2":"^6.22.0","babel-register":"^6.22.0",chalk:"^2.3.2","connect-history-api-fallback":"^1.5.0","copy-webpack-plugin":"^4.5.1","css-loader":"^0.28.11",cssnano:"^3.10.0","eventsource-polyfill":"^0.9.6",express:"^4.16.3","extract-text-webpack-plugin":"^2.0.0","file-loader":"^0.11.1","friendly-errors-webpack-plugin":"^1.1.3","html-webpack-plugin":"^2.28.0","http-proxy-middleware":"^0.17.3",opn:"^5.3.0","optimize-css-assets-webpack-plugin":"^2.0.0",ora:"^1.4.0",rimraf:"^2.6.0",semver:"^5.5.0",shelljs:"^0.7.6","url-loader":"^0.5.8","vue-loader":"^13.7.1","vue-style-loader":"^3.1.2","vue-template-compiler":"^2.5.16",webpack:"^2.6.1","webpack-bundle-analyzer":"^2.11.1","webpack-dev-middleware":"^1.12.2","webpack-hot-middleware":"^2.21.2","webpack-merge":"^4.1.2"},engines:{node:">= 4.0.0",npm:">= 3.0.0"},browserslist:["> 1%","last 2 versions","not ie <= 8"]}},M93x:function(e,t,s){"use strict";function i(e){s("0ntf")}var n=s("xJD8"),a=s("OMaS"),r=s("VU/8"),o=i,l=r(n.a,a.a,!1,o,null,null);t.a=l.exports},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("7+uW"),n=s("M93x"),a=s("YaEn"),r=s("NBiq"),o=s.n(r),l=s("g3Gj"),u=(s.n(l),s("5LIk")),c=(s.n(u),s("4CPX"),s("9SBB")),d=(s.n(c),s("7YgM")),p=s.n(d);i.a.config.productionTip=!1,i.a.use(o.a),new i.a({el:"#app",router:a.a,template:"<App/>",components:{App:n.a}}),console.log(p.a.name+" v"+p.a.version+" is running")},OMaS:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container"},[e._m(0),e._v(" "),s("div",{staticClass:"routerWrapper"},[s("router-view")],1)])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"star"},[s("span",{staticClass:"badge badge-light"},[e._v("Github")]),e._v(" "),s("a",{attrs:{href:"http://github.com/savokiss/vue-videojs-demo",target:"_blank"}},[s("img",{attrs:{src:"https://img.shields.io/github/stars/savokiss/vue-videojs-demo.svg?style=social",alt:""}})])])}],a={render:i,staticRenderFns:n};t.a=a},YaEn:function(e,t,s){"use strict";var i=s("7+uW"),n=s("/ocq"),a=function(){return s.e(1).then(s.bind(null,"DUzT"))},r=function(){return s.e(0).then(s.bind(null,"1Smu"))};i.a.use(n.a),t.a=new n.a({routes:[{path:"/",name:"live",component:a},{path:"/playback",name:"playback",component:r}]})},g3Gj:function(e,t){},lGuZ:function(e,t,s){"use strict";var i=s("woOf"),n=s.n(i);window.videojs=s("63pp"),videojs=videojs.default||videojs,t.a={name:"video-player",props:{options:{type:Object,required:!0},start:{type:Number,default:function(){return 0}},playsinline:{type:Boolean,default:function(){return!1}},customEventName:{type:String,default:function(){return"statechanged"}}},mounted:function(){this.player||this.initialize()},beforeDestroy:function(){this.player&&this.dispose()},methods:{initialize:function(){var e=this;this.player=null;var t=n()({autoplay:!1,controls:!0,preload:"auto",fluid:!1,muted:!1,width:"100%",height:"360",language:"en",controlBar:{remainingTimeDisplay:!1,playToggle:{},progressControl:{},fullscreenToggle:{},volumeMenuButton:{inline:!1,vertical:!0}},techOrder:["html5"],plugins:{}},this.options),s=this.playsinline;s&&(this.$el.children[0].setAttribute("playsinline",s),this.$el.children[0].setAttribute("webkit-playsinline",s));var i=function(t,s){if(t&&e.$emit(t,e.player),s){var i={};i[t]=s,e.$emit(e.customEventName,i)}};t.plugins&&delete t.plugins.__ob__,this.player=videojs(this.$el.children[0],t,function(){var t=this;e.$emit("ready",e.player);for(var s=["loadeddata","canplay","canplaythrough","play","pause","waiting","playing","ended","error"],n=0;n<s.length;n++)!function(e){t.on(e,function(){i(e,!0)})}(s[n]);this.on("timeupdate",function(){i("timeupdate",this.currentTime())})})},dispose:function(){if(this.player&&videojs){if("Flash"!==this.player.techName_&&this.player.pause&&this.player.pause(),videojs(this.$el.children[0]).dispose(),!this.$el.children.length){var e=document.createElement("video");e.className="video-js",this.$el.appendChild(e)}this.player=null}}},watch:{options:{deep:!0,handler:function(e,t){this.dispose(),e&&e.sources&&e.sources.length&&this.initialize()}}}}},vA7V:function(e,t){e.exports={_from:"videojs-swf@5.4.1",_id:"videojs-swf@5.4.1",_inBundle:!1,_integrity:"sha1-IHfvccdJ8seCPvSbq65N0qywj4c=",_location:"/videojs-swf",_phantomChildren:{},_requested:{type:"version",registry:!0,raw:"videojs-swf@5.4.1",name:"videojs-swf",escapedName:"videojs-swf",rawSpec:"5.4.1",saveSpec:null,fetchSpec:"5.4.1"},_requiredBy:["/videojs-flash"],_resolved:"https://registry.npmjs.org/videojs-swf/-/videojs-swf-5.4.1.tgz",_shasum:"2077ef71c749f2c7823ef49babae4dd2acb08f87",_spec:"videojs-swf@5.4.1",_where:"/Users/savokiss/workspace/player-demo/node_modules/videojs-flash",author:{name:"Brightcove"},bugs:{url:"https://github.com/videojs/video-js-swf/issues"},bundleDependencies:!1,copyright:"Copyright 2014 Brightcove, Inc. https://github.com/videojs/video-js-swf/blob/master/LICENSE",deprecated:!1,description:"The Flash-fallback video player for video.js (http://videojs.com)",devDependencies:{async:"~0.2.9",chg:"^0.3.2","flex-sdk":"4.6.0-0",grunt:"~0.4.0","grunt-bumpup":"~0.5.0","grunt-cli":"~0.1.0","grunt-connect":"~0.2.0","grunt-contrib-jshint":"~0.4.3","grunt-contrib-qunit":"~0.2.1","grunt-contrib-watch":"~0.1.4","grunt-npm":"~0.0.2","grunt-prompt":"~0.1.2","grunt-shell":"~0.6.1","grunt-tagrelease":"~0.3.1",qunitjs:"~1.12.0","video.js":"^5.9.2"},homepage:"http://videojs.com",keywords:["flash","video","player"],name:"videojs-swf",repository:{type:"git",url:"git+https://github.com/videojs/video-js-swf.git"},scripts:{version:"chg release -y && grunt dist && git add -f dist/ && git add CHANGELOG.md"},version:"5.4.1"}},vstk:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"video-player"},[s("video",{staticClass:"video-js"})])}],a={render:i,staticRenderFns:n};t.a=a},xJD8:function(e,t,s){"use strict";t.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.2c80dd0f4b1b24d5325e.js.map