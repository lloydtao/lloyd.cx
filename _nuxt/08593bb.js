(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(n,t,e){var content=e(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(63).default)("1239d49d",content,!0,{sourceMap:!1})},187:function(n,t,e){"use strict";var o=[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"absolute h-full bg-gradient-to-b from-gray-800 to-gray-900"},[t("img",{staticClass:"h-full w-auto top-0 -mt-64 md:-mt-48 lg:-mt-16 xl:mt-0",attrs:{src:e(232),width:"1920",height:"1080",alt:"Blue and purple background graphics"}})])}],r=(e(233),e(25)),component=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[n._m(0),n._v(" "),e("div",{staticClass:"absolute w-full top-0 md:px-2"},[e("HeaderSlim"),n._v(" "),e("Nuxt"),n._v(" "),e("FooterSlim")],1)])}),o,!1,null,null,null);t.a=component.exports;installComponents(component,{HeaderSlim:e(261).default,FooterSlim:e(262).default})},190:function(n,t,e){e(191),n.exports=e(192)},228:function(n,t,e){var content=e(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(63).default)("382a115c",content,!0,{sourceMap:!1})},229:function(n,t,e){var o=e(62)((function(i){return i[1]}));o.push([n.i,"/*! tailwindcss v2.1.1 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\n:root {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.bg-github-primary{\n  --tw-bg-opacity:1;\n  background-color:rgba(33, 31, 31, var(--tw-bg-opacity));\n}\n\n.bg-twitter-primary{\n  --tw-bg-opacity:1;\n  background-color:rgba(24, 124, 190, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-github-darker:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(20, 19, 19, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-twitter-darker:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(22, 112, 171, var(--tw-bg-opacity));\n}\n\n.bg-gradient-to-b{\n  background-image:linear-gradient(to bottom, var(--tw-gradient-stops));\n}\n\n.from-gray-800{\n  --tw-gradient-from:#1f2937;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(31, 41, 55, 0));\n}\n\n.to-gray-900{\n  --tw-gradient-to:#111827;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-lg{\n  border-radius:0.5rem;\n}\n\n.rounded-t-lg{\n  border-top-left-radius:0.5rem;\n  border-top-right-radius:0.5rem;\n}\n\n.rounded-b-lg{\n  border-bottom-right-radius:0.5rem;\n  border-bottom-left-radius:0.5rem;\n}\n\n.rounded-t-full{\n  border-top-left-radius:9999px;\n  border-top-right-radius:9999px;\n}\n\n.block{\n  display:block;\n}\n\n.flex{\n  display:flex;\n}\n\n.table{\n  display:table;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.flex-wrap{\n  flex-wrap:wrap;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.font-black{\n  font-weight:900;\n}\n\n.h-4{\n  height:1rem;\n}\n\n.h-full{\n  height:100%;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.text-4xl{\n  font-size:2.25rem;\n  line-height:2.5rem;\n}\n\n.list-none{\n  list-style-type:none;\n}\n\n.m-1{\n  margin:0.25rem;\n}\n\n.mx-2{\n  margin-left:0.5rem;\n  margin-right:0.5rem;\n}\n\n.my-4{\n  margin-top:1rem;\n  margin-bottom:1rem;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.-mx-1{\n  margin-left:-0.25rem;\n  margin-right:-0.25rem;\n}\n\n.mb-1{\n  margin-bottom:0.25rem;\n}\n\n.mt-2{\n  margin-top:0.5rem;\n}\n\n.ml-2{\n  margin-left:0.5rem;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.-mt-64{\n  margin-top:-16rem;\n}\n\n.p-2{\n  padding:0.5rem;\n}\n\n.p-8{\n  padding:2rem;\n}\n\n.py-1{\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.px-2{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n\n.px-3{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n}\n\n.px-4{\n  padding-left:1rem;\n  padding-right:1rem;\n}\n\n.px-8{\n  padding-left:2rem;\n  padding-right:2rem;\n}\n\n.pt-3{\n  padding-top:0.75rem;\n}\n\n.pr-3{\n  padding-right:0.75rem;\n}\n\n.pt-4{\n  padding-top:1rem;\n}\n\n.pb-6{\n  padding-bottom:1.5rem;\n}\n\n.pb-8{\n  padding-bottom:2rem;\n}\n\n.static{\n  position:static;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.top-0{\n  top:0px;\n}\n\n.bottom-0{\n  bottom:0px;\n}\n\n*{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow-md{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n*{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.fill-current{\n  fill:currentColor;\n}\n\n.text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-100{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n}\n\n.text-gray-200{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity));\n}\n\n.text-gray-300{\n  --tw-text-opacity:1;\n  color:rgba(209, 213, 219, var(--tw-text-opacity));\n}\n\n.text-gray-700{\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-400:hover{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-500:hover{\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n.italic{\n  font-style:italic;\n}\n\n.uppercase{\n  text-transform:uppercase;\n}\n\n.w-4{\n  width:1rem;\n}\n\n.w-auto{\n  width:auto;\n}\n\n.w-full{\n  width:100%;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n  .md\\:justify-start{\n    justify-content:flex-start;\n  }\n\n  .md\\:justify-end{\n    justify-content:flex-end;\n  }\n\n  .md\\:justify-between{\n    justify-content:space-between;\n  }\n\n  .md\\:text-5xl{\n    font-size:3rem;\n    line-height:1;\n  }\n\n  .md\\:mx-4{\n    margin-left:1rem;\n    margin-right:1rem;\n  }\n\n  .md\\:mb-4{\n    margin-bottom:1rem;\n  }\n\n  .md\\:-mt-48{\n    margin-top:-12rem;\n  }\n\n  .md\\:px-2{\n    padding-left:0.5rem;\n    padding-right:0.5rem;\n  }\n\n  .md\\:px-16{\n    padding-left:4rem;\n    padding-right:4rem;\n  }\n\n  .md\\:w-4\\/12{\n    width:33.333333%;\n  }\n\n  .md\\:w-8\\/12{\n    width:66.666667%;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:flex-row{\n    flex-direction:row;\n  }\n\n  .lg\\:-mx-4{\n    margin-left:-1rem;\n    margin-right:-1rem;\n  }\n\n  .lg\\:-mt-16{\n    margin-top:-4rem;\n  }\n\n  .lg\\:w-1\\/2{\n    width:50%;\n  }\n\n  .lg\\:w-1\\/3{\n    width:33.333333%;\n  }\n}\n\n@media (min-width: 1280px){\n  .xl\\:mt-0{\n    margin-top:0px;\n  }\n}",""]),n.exports=o},232:function(n,t,e){n.exports=e.p+"img/62efb32.svg"},233:function(n,t,e){"use strict";e(159)},234:function(n,t,e){var o=e(62)((function(i){return i[1]}));o.push([n.i,"body{\n  --tw-bg-opacity:1;\n  background-color:rgba(17, 24, 39, var(--tw-bg-opacity))\n}",""]),n.exports=o},261:function(n,t,e){"use strict";e.r(t);var o={},r=e(25),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("nav",{staticClass:"w-full flex flex-wrap items-center justify-between px-2 pt-3 mb-1 md:mb-4 navbar-expand-lg"},[e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"flex flex-wrap items-center md:justify-between justify-center"},[e("div",{staticClass:"w-full md:w-4/12 px-4 mt-2"},[e("ul",{staticClass:"flex flex-wrap list-none md:justify-start justify-center"},[e("li",[e("NuxtLink",{staticClass:"text-gray-200 hover:text-gray-400 text-2xl font-semibold py-1",attrs:{to:"/"}},[n._v("lloyd.cx")])],1)])]),n._v(" "),e("div",{staticClass:"w-full md:w-8/12 mt-2"},[e("ul",{staticClass:"flex flex-wrap list-none md:justify-end justify-center"},[e("li",[e("NuxtLink",{staticClass:"text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3",attrs:{to:"/portfolio"}},[n._v("Portfolio")])],1),n._v(" "),e("li",[e("NuxtLink",{staticClass:"text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3",attrs:{to:"/open-source"}},[n._v("Open Source")])],1),n._v(" "),e("li",[e("NuxtLink",{staticClass:"text-gray-200 hover:text-gray-400 text font-semibold py-1 px-3",attrs:{to:"/lectures"}},[n._v("Lectures")])],1)])])])])])}),[],!1,null,null,null);t.default=component.exports},262:function(n,t,e){"use strict";e.r(t);var o={data:function(){return{date:(new Date).getFullYear()}}},r=e(25),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("footer",{staticClass:"w-full bottom-0 pb-6 mt-2"},[e("div",{staticClass:"container mx-auto px-4"},[e("div",{staticClass:"flex flex-wrap items-center md:justify-between justify-center"},[e("div",{staticClass:"w-full md:w-4/12 mt-2"},[e("ul",{staticClass:"flex flex-wrap list-none md:justify-start justify-center"},[e("li",[e("div",{staticClass:"text-gray-300 text-sm font-semibold py-1"},[n._v("\n              Lewis Lloyd © "+n._s(n.date)+"\n            ")])])])]),n._v(" "),n._m(0)])])])}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"w-full md:w-8/12 mt-2"},[e("ul",{staticClass:"flex flex-wrap list-none md:justify-end justify-center"},[e("li",[e("a",{staticClass:"text-gray-300 hover:text-gray-500 text-sm block py-1 px-3",attrs:{href:"https://github.com/LloydTao/"}},[n._v("GitHub")])]),n._v(" "),e("li",[e("a",{staticClass:"text-gray-300 hover:text-gray-500 text-sm block py-1 px-3",attrs:{href:"https://www.linkedin.com/in/LloydTao/"}},[n._v("LinkedIn")])]),n._v(" "),e("li",[e("a",{staticClass:"text-gray-300 hover:text-gray-500 text-sm block py-1 px-3",attrs:{href:"https://www.instagram.com/lloydtao/"}},[n._v("Instagram")])]),n._v(" "),e("li",[e("a",{staticClass:"text-gray-300 hover:text-gray-500 text-sm block py-1 px-3",attrs:{href:"https://twitter.com/LloydTao/"}},[n._v("Twitter")])])])])}],!1,null,null,null);t.default=component.exports}},[[190,8,1,9]]]);