(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"73T2":function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,".vue-simple-suggest > ul {\n  list-style: none;\n}[dir] .vue-simple-suggest > ul {\n  margin: 0;\n  padding: 0;\n}\n\n.vue-simple-suggest.designed {\n  position: relative;\n}\n\n.vue-simple-suggest.designed, .vue-simple-suggest.designed * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n.vue-simple-suggest.designed .input-wrapper input {\n  display: block;\n  width: 100%;\n  color: black;\n  outline:none;\n  -webkit-transition: all .1s;\n  transition: all .1s\n}\n\n[dir] .vue-simple-suggest.designed .input-wrapper input {\n  padding: 10px;\n  border: 1px solid #cde;\n  border-radius: 3px;\n  background: white;\n  -webkit-transition-delay: .05s;\n          transition-delay: .05s\n}\n\n[dir] .vue-simple-suggest.designed.focus .input-wrapper input {\n  border: 1px solid #aaa;\n}\n\n.vue-simple-suggest.designed .suggestions {\n  position: absolute;\n  top: 100%;\n  top: calc(100% + 5px);\n  opacity: 1;\n  z-index: 1000;\n}\n\n[dir] .vue-simple-suggest.designed .suggestions {\n  border-radius: 3px;\n  border: 1px solid #aaa;\n  background-color: #fff;\n}\n\n[dir=ltr] .vue-simple-suggest.designed .suggestions {\n  left: 0;\n  right: 0;\n}\n\n[dir=rtl] .vue-simple-suggest.designed .suggestions {\n  right: 0;\n  left: 0;\n}\n\n.vue-simple-suggest.designed .suggestions .suggest-item {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n[dir] .vue-simple-suggest.designed .suggestions .suggest-item {\n  cursor: pointer;\n}\n\n[dir] .vue-simple-suggest.designed .suggestions .suggest-item, [dir] .vue-simple-suggest.designed .suggestions .misc-item {\n  padding: 5px 10px;\n}\n\n.vue-simple-suggest.designed .suggestions .suggest-item.hover {\n  color: #fff !important;\n}\n\n[dir] .vue-simple-suggest.designed .suggestions .suggest-item.hover {\n  background-color: #2874D5 !important;\n}\n\n.vue-simple-suggest.designed .suggestions .suggest-item.selected {\n  color: #fff;\n}\n\n[dir] .vue-simple-suggest.designed .suggestions .suggest-item.selected {\n  background-color: #2832D5;\n}\n",""])},BjZq:function(e,t,s){"use strict";var n=s("jxMc");s.n(n).a},DfnB:function(e,t,s){"use strict";s.r(t);var n=s("URHZ"),i=(s("xMlF"),s("jVEP")),o=s.n(i),r={name:"Autocomplete",data:function(){return{chosen:"",selected:null,model:null,mode:"input",loading:!1,log:[]}},methods:{simpleSuggestionList:function(){return["Vue.js","React.js","Angular.js"]},onSuggestSelect:function(e){this.selected=e},boldenSuggestion:function(e){if(!e)return e;var t=e.suggestion,s=e.query,n=this.$refs.suggestComponent.displayProperty(t);if(!s)return n;var i=s.split(/[\s-_/\\|.]/gm).filter((function(e){return!!e}))||[""];return n.replace(new RegExp("(.*?)(".concat(i.join("|"),")(.*?)"),"gi"),"$1<b>$2</b>$3")},getList:function(e){var t=this;return new Promise((function(s,n){var i="https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&namespace=*&search=".concat(e,"&limit=10&namespace=0&format=json");fetch(i).then((function(e){e.ok||n(),e.json().then((function(e){e.shift();var t=[],n=["text","description","link"];e.forEach((function(e,s){e.forEach((function(e,i){t[i]||t.push({id:i+1}),t[i][n[s]]=e}))})),s(t)})).catch((function(e){n(e)}))})).catch((function(e){t.loading=!1,n(e)}))}))}},components:{VueSimpleSuggest:n.a,Prism:o.a}},u=(s("BjZq"),s("KHd+")),l=Object(u.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"page-autocomplete-demo"}},[s("vx-card",{attrs:{title:"Basic Autocomplete","code-toggler":""}},[s("vue-simple-suggest",{attrs:{list:e.simpleSuggestionList,"filter-by-query":!0},model:{value:e.chosen,callback:function(t){e.chosen=t},expression:"chosen"}}),e._v(" "),s("p",{staticClass:"mt-4"},[e._v("Chosen element: "+e._s(e.chosen))]),e._v(" "),s("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vue-simple-suggest\n    v-model="chosen"\n    :list="simpleSuggestionList"\n    :filter-by-query="true">\n    \x3c!-- Filter by input text to only show the matching results --\x3e\n  </vue-simple-suggest>\n\n  <p class="mt-4">Chosen element: '+e._s(e.chosen)+"</p>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      chosen: '',\n    }\n  },\n  methods: {\n    simpleSuggestionList() {\n      return [\n        'Vue.js',\n        'React.js',\n        'Angular.js'\n      ]\n    },\n  }\n}\n<\/script>\n\n<style lang=\"scss\">\n@import \"@sass/vuexy/extraComponents/autocomplete.scss\";\n</style>\n      ")])],2),e._v(" "),s("vx-card",{attrs:{title:"Ajax Based Autocomplete","code-toggler":""}},[s("vue-simple-suggest",{ref:"suggestComponent",attrs:{pattern:"\\w+",list:e.getList,"max-suggestions":10,"min-length":3,debounce:200,"filter-by-query":!1,"prevent-submit":!0,controls:{selectionUp:[38,33],selectionDown:[40,34],select:[13,36],hideList:[27,35]},mode:e.mode,"nullable-select":!0,placeholder:"Search information...","value-attribute":"id","display-attribute":"text"},on:{select:e.onSuggestSelect},scopedSlots:e._u([{key:"misc-item-above",fn:function(t){var n=t.suggestions,i=t.query;return[s("div",{staticClass:"misc-item"},[s("span",[e._v("You're searching for '"+e._s(i)+"'.")])]),e._v(" "),n.length>0?[s("div",{staticClass:"misc-item"},[s("span",[e._v(e._s(n.length)+" suggestions are shown...")])]),e._v(" "),s("hr")]:e.loading?e._e():s("div",{staticClass:"misc-item"},[s("span",[e._v("No results")])])]}},{key:"suggestion-item",fn:function(t){return s("div",{attrs:{title:t.suggestion.description}},[s("div",{staticClass:"text"},[s("span",{domProps:{innerHTML:e._s(e.boldenSuggestion(t))}})])])}},{key:"misc-item-below",fn:function(t){t.suggestions;return e.loading?s("div",{staticClass:"misc-item"},[s("span",[e._v("Loading...")])]):e._e()}}],null,!0),model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[s("div",{staticClass:"g"},[s("input",{attrs:{type:"text"}})])]),e._v(" "),s("p",{staticClass:"mt-3"},[e._v("Selected element ("+e._s(typeof e.selected)+"): "),s("pre",{staticClass:"selected hljs"},[s("span",{domProps:{innerHTML:e._s(e.selected)}})])]),e._v(" "),s("template",{slot:"codeContainer"},[e._v('\n<template>\n  <vue-simple-suggest\n    pattern="\\w+"\n    v-model="model"\n    :list="getList"\n    :max-suggestions="10"\n    :min-length="3"\n    :debounce="200"\n    :filter-by-query="false"\n    :prevent-submit="true"\n    :controls="{\n      selectionUp: [38, 33],\n      selectionDown: [40, 34],\n      select: [13, 36],\n      hideList: [27, 35]\n    }"\n    :mode="mode"\n    :nullable-select="true"\n    ref="suggestComponent"\n    placeholder="Search information..."\n    value-attribute="id"\n    display-attribute="text"\n    @select="onSuggestSelect">\n\n    <div class="g">\n      <input type="text">\n    </div>\n\n    <template slot="misc-item-above" slot-scope="{ suggestions, query }">\n      <div class="misc-item">\n        <span>You\'re searching for \''+e._s("{{ query }}")+'\'.</span>\n      </div>\n\n      <template v-if="suggestions.length > 0">\n        <div class="misc-item">\n          <span>'+e._s("{{ suggestions.length }}")+' suggestions are shown...</span>\n        </div>\n        <hr>\n      </template>\n\n      <div class="misc-item" v-else-if="!loading">\n        <span>No results</span>\n      </div>\n    </template>\n\n    <div slot="suggestion-item" slot-scope="scope" :title="scope.suggestion.description">\n      <div class="text">\n        <span v-html="boldenSuggestion(scope)"></span>\n      </div>\n    </div>\n\n    <div class="misc-item" slot="misc-item-below" slot-scope="{ suggestions }" v-if="loading">\n      <span>Loading...</span>\n    </div>\n  </vue-simple-suggest>\n\n  <p class="mt-3">Selected element ('+e._s("{{ typeof selected }}")+"): <pre class=\"selected hljs\"><span v-html=\"selected\"></span></pre></p>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      model: null,\n    }\n  },\n  methods: {\n    getList (inputValue) {\n      return new Promise((resolve, reject) => {\n        let url = `https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&namespace=*&search=${inputValue}&limit=10&namespace=0&format=json`\n        fetch(url).then(response => {\n          if (!response.ok) {\n            reject()\n          }\n          response.json().then(json => {\n            json.shift();\n            let result = []\n            const fields = ['text', 'description', 'link']\n            json.forEach((part, i) => {\n              part.forEach((el, j) => {\n                if (!result[j]) {\n                  result.push({\n                    id: j+1\n                  })\n                }\n                result[j][fields[i]] = el\n              })\n            })\n            resolve(result)\n            // resolve([...(json.items || [])])\n          }).catch(e => {\n            reject(e)\n          })\n        }).catch(error => {\n          this.loading = false\n          reject(error)\n        })\n      })\n    },\n    onSuggestSelect (suggest) {\n      this.selected = suggest\n    },\n    boldenSuggestion(scope) {\n      if (!scope) return scope;\n      const { suggestion, query } = scope;\n      let result = this.$refs.suggestComponent.displayProperty(suggestion);\n      if (!query) return result;\n      const texts = query.split(/[\\s-_/\\\\|.]/gm).filter(t => !!t) || [''];\n      return result.replace(new RegExp('(.*?)(' + texts.join('|') + ')(.*?)','gi'), '$1<b>$2</b>$3');\n    },\n  }\n}\n<\/script>\n      ")])],2),e._v(" "),s("vx-card",{attrs:{title:"Mode"}},[s("p",{staticClass:"mb-3"},[e._v("Determines the event, that triggers "),s("code",[e._v("v-model")]),e._v(". Can be one of "),s("code",[e._v("'input'")]),e._v(" (default) or "),s("code",[e._v("'select'")]),e._v(".")]),e._v(" "),s("p",{staticClass:"mb-3"},[e._v("For example, if "),s("code",[e._v("'input'")]),e._v(" is chosen - then v-model will update the value each time an "),s("code",[e._v("input")]),e._v(" event is fired, setting the input's string.")]),e._v(" "),s("p",{staticClass:"mb-3"},[e._v("Same is for "),s("code",[e._v("'select'")]),e._v(" - v-model changes only when something is selected from the list, setting the selected value (string, object or whatever) to its argument.")]),e._v(" "),s("p",{staticClass:"mb-3"},[e._v("A proper use-case for it being when one wants to use the component only for selection binding and custom input for text binding:")]),e._v(" "),s("prism",{staticClass:"rounded-lg",attrs:{language:"markup"}},[e._v('\n<vue-simple-suggest v-model="selected" mode="select">\n  <input v-model="text">\n</vue-simple-suggest>\n      ')])],1)],1)}),[],!1,null,null,null);t.default=l.exports},N1SW:function(e,t,s){(e.exports=s("I1BE")(!1)).push([e.i,"/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\npre.selected.hljs {\n  height: 295px;\n  overflow: auto;\n}\n[dir] pre.selected.hljs {\n  margin: 8px 0;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 1rem;\n}\n.vue-simple-suggest.designed .input-wrapper input {\n  color: inherit;\n  position: relative;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n[dir] .vue-simple-suggest.designed .input-wrapper input {\n  padding: 0.7rem;\n  border-radius: 5px;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.15);\n}\n[dir] .vue-simple-suggest.designed.focus .input-wrapper input {\n  border: 1px solid rgba(var(--vs-primary), 1) !important;\n}\n[dir] .vue-simple-suggest.designed .suggestions {\n  border-radius: 5px;\n}\n[dir] .vue-simple-suggest.designed .suggestions .suggest-item {\n  padding: 0.8rem 1rem;\n}\n[dir] .vue-simple-suggest.designed .suggestions .suggest-item.hover, [dir] .vue-simple-suggest.designed .suggestions .suggest-item.selected {\n  background-color: rgba(var(--vs-primary), 1) !important;\n}\n[dir] .theme-dark .vx-card .vue-simple-suggest input {\n  background: #262c49 !important;\n}\n[dir] .theme-dark .vx-card .vue-simple-suggest .suggestions {\n  background: #262c49 !important;\n}\n[dir] .theme-dark .vx-card pre.selected.hljs {\n  border-color: #414561 !important;\n}\n[dir] .theme-dark .vue-simple-suggest input {\n  background: #10163a !important;\n}\n[dir] .theme-dark .vue-simple-suggest .suggestions {\n  background: #10163a !important;\n}\n[dir] .theme-dark pre.selected.hljs {\n  border-color: #414561 !important;\n}",""])},URHZ:function(e,t,s){"use strict";(function(e){const s={selectionUp:[38],selectionDown:[40],select:[13],hideList:[27],autocomplete:[32,13]},n={input:String,select:Object};function i(e,t){if(e.length<=0)return!1;const s=e=>e.some(e=>e===t.keyCode);return Array.isArray(e[0])?e.some(e=>s(e)):s(e)}function o(e,t){try{var s=e()}catch(e){return t()}return s&&s.then?s.then(t,t):t()}function r(e,t){try{var s=e()}catch(e){return t(e)}return s&&s.then?s.then(void 0,t):s}function u(e,t,s){return s?t?t(e):e:(e=Promise.resolve(e),t?e.then(t):e)}const l=function(){try{if(isNaN.apply(null,{}))return function(e){return function(){try{return Promise.resolve(e.apply(this,arguments))}catch(e){return Promise.reject(e)}}}}catch(e){}return function(e){return function(){try{return Promise.resolve(e.apply(this,Array.prototype.slice.call(arguments)))}catch(e){return Promise.reject(e)}}}}();function a(e,t){var s=e();return s&&s.then?s.then(t):t(s)}function c(){}var g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vue-simple-suggest",class:[e.styles.vueSimpleSuggest,{designed:!e.destyled,focus:e.isInFocus}],on:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"tab",9,t.key,"Tab"))return null;e.isTabbed=!0}}},[s("div",{ref:"inputSlot",staticClass:"input-wrapper",class:e.styles.inputWrapper,attrs:{role:"combobox","aria-haspopup":"listbox","aria-owns":e.listId,"aria-expanded":e.listShown&&!e.removeList?"true":"false"}},[e._t("default",[s("input",e._b({staticClass:"default-input",class:e.styles.defaultInput,domProps:{value:e.text||""}},"input",e.$attrs,!1))])],2),e._v(" "),s("transition",{attrs:{name:"vue-simple-suggest"}},[e.listShown&&!e.removeList?s("ul",{staticClass:"suggestions",class:e.styles.suggestions,attrs:{id:e.listId,role:"listbox","aria-labelledby":e.listId},on:{mouseenter:function(t){e.hoverList(!0)},mouseleave:function(t){e.hoverList(!1)}}},[this.$scopedSlots["misc-item-above"]?s("li",[e._t("misc-item-above",null,{suggestions:e.suggestions,query:e.text})],2):e._e(),e._v(" "),e._l(e.suggestions,(function(t,n){return s("li",{key:e.getId(t,n),staticClass:"suggest-item",class:[e.styles.suggestItem,{selected:e.isSelected(t),hover:e.isHovered(t)}],attrs:{role:"option","aria-selected":e.isHovered(t)||e.isSelected(t)?"true":"false",id:e.getId(t,n)},on:{mouseenter:function(s){e.hover(t,s.target)},mouseleave:function(t){e.hover(void 0)},click:function(s){e.suggestionClick(t,s)}}},[e._t("suggestion-item",[s("span",[e._v(e._s(e.displayProperty(t)))])],{autocomplete:function(){return e.setText(e.displayProperty(t))},suggestion:t,query:e.text})],2)})),e._v(" "),this.$scopedSlots["misc-item-below"]?s("li",[e._t("misc-item-below",null,{suggestions:e.suggestions,query:e.text})],2):e._e()],2):e._e()])],1)},staticRenderFns:[],name:"vue-simple-suggest",inheritAttrs:!1,model:{prop:"value",event:"input"},props:{styles:{type:Object,default:()=>({})},controls:{type:Object,default:()=>s},minLength:{type:Number,default:1},maxSuggestions:{type:Number,default:10},displayAttribute:{type:String,default:"title"},valueAttribute:{type:String,default:"id"},list:{type:[Function,Array],default:()=>[]},removeList:{type:Boolean,default:!1},destyled:{type:Boolean,default:!1},preventSubmit:{type:Boolean,default:!0},filterByQuery:{type:Boolean,default:!1},filter:{type:Function,default(e,t){return!t||~this.displayProperty(e).toLowerCase().indexOf(t.toLowerCase())}},debounce:{type:Number,default:0},nullableSelect:{type:Boolean,default:!1},value:{},mode:{type:String,default:"input",validator:e=>!!~Object.keys(n).indexOf(e.toLowerCase())}},watch:{mode:{handler(e,t){this.constructor.options.model.event=e,this.$parent&&this.$parent.$forceUpdate(),this.$nextTick(()=>{"input"===e?this.$emit("input",this.text):this.$emit("select",this.selected)})},immediate:!0},value:{handler(e){"string"==typeof e?this.text=e:e&&(this.text=this.displayProperty(e))},immediate:!0}},data(){return{selected:null,hovered:null,suggestions:[],listShown:!1,inputElement:null,canSend:!0,timeoutInstance:null,text:this.value,isPlainSuggestion:!1,isClicking:!1,isOverList:!1,isInFocus:!1,isFalseFocus:!1,isTabbed:!1,controlScheme:{},listId:`${this._uid}-suggestions`}},computed:{listIsRequest(){return"function"==typeof this.list},inputIsComponent(){return this.$slots.default&&this.$slots.default.length>0&&!!this.$slots.default[0].componentInstance},input(){return this.inputIsComponent?this.$slots.default[0].componentInstance:this.inputElement},on(){return this.inputIsComponent?"$on":"addEventListener"},off(){return this.inputIsComponent?"$off":"removeEventListener"},hoveredIndex(){return this.suggestions.findIndex(e=>this.hovered&&this.valueProperty(this.hovered)==this.valueProperty(e))},textLength(){return this.text&&this.text.length||this.inputElement.value.length||0},isSelectedUpToDate(){return!!this.selected&&this.displayProperty(this.selected)===this.text}},created(){this.controlScheme=Object.assign({},s,this.controls)},mounted(){this.inputElement=this.$refs.inputSlot.querySelector("input"),this.setInputAriaAttributes(),this.prepareEventHandlers(!0)},beforeDestroy(){this.prepareEventHandlers(!1)},methods:{isEqual(e,t){return t&&this.valueProperty(e)==this.valueProperty(t)},isSelected(e){return this.isEqual(e,this.selected)},isHovered(e){return this.isEqual(e,this.hovered)},onSubmit(e){this.preventSubmit&&"Enter"===e.key&&(e.stopPropagation(),e.preventDefault())},setInputAriaAttributes(){this.inputElement.setAttribute("aria-activedescendant",""),this.inputElement.setAttribute("aria-autocomplete","list"),this.inputElement.setAttribute("aria-controls",this.listId)},prepareEventHandlers(e){const t=this[e?"on":"off"],s={click:this.showSuggestions,keydown:e=>(this.moveSelection(e),this.onAutocomplete(e)),keyup:this.onListKeyUp},n=Object.assign({blur:this.onBlur,focus:this.onFocus,input:this.onInput},s);for(const e in n)this.input[t](e,n[e]);const i=e?"addEventListener":"removeEventListener";for(const e in s)this.inputElement[i](e,s[e]);if(!0===this.preventSubmit){let e=this.$el.closest("form");e&&e[i]("keydown",this.onSubmit)}},isScopedSlotEmpty(e){if(e){const t=e(this);return!(Array.isArray(t)||t&&(t.tag||t.context||t.text||t.children))}return!0},miscSlotsAreEmpty(){const e=["misc-item-above","misc-item-below"].map(e=>this.$scopedSlots[e]);if(e.every(e=>!!e))return e.every(this.isScopedSlotEmpty.bind(this));const t=e.find(e=>!!e);return this.isScopedSlotEmpty.call(this,t)},getPropertyByAttribute(e,t){return this.isPlainSuggestion?e:void 0!==typeof e?function(e,t){return t.split(".").reduce((e,t)=>e===Object(e)?e[t]:e,e)}(e,t):e},displayProperty(t){if(this.isPlainSuggestion)return t;let s=this.getPropertyByAttribute(t,this.displayAttribute);return void 0===s&&(s=JSON.stringify(t),e&&~"production".indexOf("dev")&&console.warn("[vue-simple-suggest]: Please, provide `display-attribute` as a key or a dotted path for a property from your object.")),String(s)},valueProperty(e){if(this.isPlainSuggestion)return e;const t=this.getPropertyByAttribute(e,this.valueAttribute);return void 0===t&&console.error("[vue-simple-suggest]: Please, check if you passed 'value-attribute' (default is 'id') and 'display-attribute' (default is 'title') props correctly.\n        Your list objects should always contain a unique identifier."),t},autocompleteText(e){this.setText(e)},setText(e){this.$nextTick(()=>{this.$emit("input",e),this.inputElement.value=e,this.text=e})},select(e){(this.selected!==e||this.nullableSelect&&!e)&&(this.selected=e,this.$emit("select",e),e&&this.setText(this.displayProperty(e))),this.hover(null)},hover(e,t){const s=e?this.getId(e,this.hoveredIndex):"";this.inputElement.setAttribute("aria-activedescendant",s),e&&e!==this.hovered&&this.$emit("hover",e,t),this.hovered=e},hoverList(e){this.isOverList=e},hideList(){this.listShown&&(this.listShown=!1,this.hover(null),this.$emit("hide-list"))},showList(){this.listShown||this.textLength>=this.minLength&&(this.suggestions.length>0||!this.miscSlotsAreEmpty())&&(this.listShown=!0,this.$emit("show-list"))},showSuggestions:l((function(){var e=this;return a((function(){if(0===e.suggestions.length&&e.minLength===e.textLength)return function(e,t){if(!t)return Promise.resolve(e).then(c)}(e.research())}),(function(){e.showList()}))})),moveSelection(e){if(this.listShown&&this.suggestions.length&&i([this.controlScheme.selectionUp,this.controlScheme.selectionDown],e)){e.preventDefault(),this.showSuggestions();const t=i(this.controlScheme.selectionDown,e),s=2*t-1,n=t?0:this.suggestions.length-1,o=t?this.hoveredIndex<this.suggestions.length-1:this.hoveredIndex>0;let r=null;r=this.hovered?o?this.suggestions[this.hoveredIndex+s]:this.suggestions[n]:this.selected||this.suggestions[n],this.hover(r)}},onListKeyUp(e){const t=this.controlScheme.select;i([t,this.controlScheme.hideList],e)&&(e.preventDefault(),this.listShown?(i(t,e)&&this.select(this.hovered),this.hideList()):i(t,e)&&this.research())},onAutocomplete(e){i(this.controlScheme.autocomplete,e)&&(e.ctrlKey||e.shiftKey)&&this.suggestions.length>0&&this.suggestions[0]&&this.listShown&&(e.preventDefault(),this.hover(this.suggestions[0]),this.setText(this.displayProperty(this.suggestions[0])))},suggestionClick(e,t){this.$emit("suggestion-click",e,t),this.select(e),this.isClicking=this.isOverList=!1,this.$nextTick(()=>{this.hideList()})},onBlur(e){this.isInFocus?(this.isClicking=this.isOverList&&!this.isTabbed,this.isClicking?e&&e.isTrusted&&!this.isTabbed&&(this.isFalseFocus=!0,this.$nextTick(()=>{this.inputElement.focus()})):(this.isInFocus=!1,this.hideList(),this.$emit("blur",e))):(this.inputElement.blur(),console.error("This should never happen!\n          If you encountered this error, please make sure that your input component emits 'focus' events properly.\n          For more info see https://github.com/KazanExpress/vue-simple-suggest#custom-input.\n\n          If your 'vue-simple-suggest' setup does not include a custom input component - please,\n          report to https://github.com/KazanExpress/vue-simple-suggest/issues/new")),this.isTabbed=!1},onFocus(e){this.isInFocus=!0,e&&!this.isFalseFocus&&this.$emit("focus",e),this.isFalseFocus=!1,this.isClicking||this.showSuggestions()},onInput(e){const t=e.target?e.target.value:e;this.text!==t&&(this.text=t,this.$emit("input",this.text),this.hovered&&this.hover(null),this.debounce?(clearTimeout(this.timeoutInstance),this.timeoutInstance=setTimeout(this.research,this.debounce)):this.research())},research:l((function(){var e=this;return o((function(){return r((function(){return function(e){var t=e();if(t&&t.then)return t.then(c)}((function(){if(e.canSend){e.canSend=!1;let t=e.text;return u(e.getSuggestions(e.text),(function(s){t===e.text&&e.$set(e,"suggestions",s)}))}}))}),(function(t){throw e.clearSuggestions(),t}))}),(function(){return e.canSend=!0,0===e.suggestions.length&&e.miscSlotsAreEmpty()?e.hideList():e.showList(),e.suggestions}))})),getSuggestions:l((function(e){var t=this;if((e=e||"").length<t.minLength)return t.listShown?(t.hideList(),[]):t.suggestions;t.selected=null,t.listIsRequest&&(t.$emit("request-start",e),(t.suggestions.length>0||!t.miscSlotsAreEmpty())&&t.showList());let s=[];return o((function(){return r((function(){return a((function(){if(t.listIsRequest)return u(t.list(e),(function(e){s=e||[]}));s=t.list}),(function(){Array.isArray(s)||(s=[s]),t.isPlainSuggestion="object"!=typeof s[0]||Array.isArray(s[0]),t.filterByQuery&&(s=s.filter(s=>t.filter(s,e))),t.listIsRequest&&t.$emit("request-done",s)}))}),(function(e){if(!t.listIsRequest)throw e;t.$emit("request-failed",e)}))}),(function(){return t.maxSuggestions&&s.splice(t.maxSuggestions),s}))})),clearSuggestions(){this.suggestions.splice(0)},getId(e,t){return`${this.listId}-suggestion-${this.isPlainSuggestion?t:this.valueProperty(e)||t}`}}};t.a=g}).call(this,s("8oxB"))},jxMc:function(e,t,s){var n=s("N1SW");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,i);n.locals&&(e.exports=n.locals)},xMlF:function(e,t,s){var n=s("73T2");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s("aET+")(n,i);n.locals&&(e.exports=n.locals)}}]);