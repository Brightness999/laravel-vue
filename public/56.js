(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1026:function(t,e,a){"use strict";var s=a(307);a.n(s).a},1027:function(t,e,a){(t.exports=a(7)(!1)).push([t.i,"#data-list-thumb-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#data-list-thumb-view .vs-con-table .vs-table--header {\n  display: flex;\n  flex-wrap: wrap-reverse;\n}\n[dir=ltr] #data-list-thumb-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-thumb-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-thumb-view .vs-con-table .vs-table--header > span {\n  display: flex;\n  flex-grow: 1;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-thumb-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#data-list-thumb-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table tr td {\n  padding: 10px;\n}\n[dir=ltr] #data-list-thumb-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #data-list-thumb-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #data-list-thumb-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #data-list-thumb-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n#data-list-thumb-view .vs-con-table .vs-table tr td.img-container span {\n  display: flex;\n  justify-content: flex-start;\n}\n#data-list-thumb-view .vs-con-table .vs-table tr td.img-container .product-img {\n  height: 110px;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#data-list-thumb-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-thumb-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-thumb-view .vs-con-table .vs-table--pagination {\n  justify-content: center;\n}",""])},1579:function(t,e,a){"use strict";a.r(e);var s=a(354),r=a(117),n={components:{DataViewSidebar:s.a},data:function(){return{selected:[],itemsPerPage:4,isMounted:!1,addNewDataSidebar:!1,sidebarData:{}}},computed:{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0},products:function(){return this.$store.state.dataList.products},queriedItems:function(){return this.$refs.table?this.$refs.table.queriedResults.length:this.products.length}},methods:{addNewData:function(){this.sidebarData={},this.toggleDataSidebar(!0)},deleteData:function(t){this.$store.dispatch("dataList/removeItem",t).catch((function(t){console.error(t)}))},editData:function(t){this.sidebarData=t,this.toggleDataSidebar(!0)},getOrderStatusColor:function(t){return"on_hold"===t?"warning":"delivered"===t?"success":"canceled"===t?"danger":"primary"},getPopularityColor:function(t){return t>90?"success":t>70?"primary":t>=50?"warning":t<50?"danger":"primary"},toggleDataSidebar:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.addNewDataSidebar=t}},created:function(){r.a.isRegistered||(this.$store.registerModule("dataList",r.a),r.a.isRegistered=!0),this.$store.dispatch("dataList/fetchDataListItems")},mounted:function(){this.isMounted=!0}},i=(a(1026),a(0)),o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data-list-container",attrs:{id:"data-list-thumb-view"}},[a("data-view-sidebar",{attrs:{isSidebarActive:t.addNewDataSidebar,data:t.sidebarData},on:{closeSidebar:t.toggleDataSidebar}}),t._v(" "),a("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":t.itemsPerPage,search:"",data:t.products},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return[a("tbody",t._l(s,(function(e,s){return a("vs-tr",{key:s,attrs:{data:e}},[a("vs-td",{staticClass:"img-container"},[a("img",{staticClass:"product-img",attrs:{src:e.img}})]),t._v(" "),a("vs-td",[a("p",{staticClass:"product-name font-medium truncate"},[t._v(t._s(e.name))])]),t._v(" "),a("vs-td",[a("p",{staticClass:"product-category"},[t._v(t._s(e.category))])]),t._v(" "),a("vs-td",[a("vs-progress",{staticClass:"shadow-md",attrs:{percent:Number(e.popularity),color:t.getPopularityColor(Number(e.popularity))}})],1),t._v(" "),a("vs-td",[a("vs-chip",{staticClass:"product-order-status",attrs:{color:t.getOrderStatusColor(e.order_status)}},[t._v(t._s(t._f("title")(e.order_status)))])],1),t._v(" "),a("vs-td",[a("p",{staticClass:"product-price"},[t._v("$"+t._s(e.price))])]),t._v(" "),a("vs-td",{staticClass:"whitespace-no-wrap"},[a("feather-icon",{attrs:{icon:"EditIcon",svgClasses:"w-5 h-5 hover:text-primary stroke-current"},on:{click:function(a){return a.stopPropagation(),t.editData(e)}}}),t._v(" "),a("feather-icon",{staticClass:"ml-2",attrs:{icon:"TrashIcon",svgClasses:"w-5 h-5 hover:text-danger stroke-current"},on:{click:function(a){return a.stopPropagation(),t.deleteData(e.id)}}})],1)],1)})),1)]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[a("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[a("div",{staticClass:"flex flex-wrap-reverse items-center"},[a("vs-dropdown",{staticClass:"cursor-pointer mr-4 mb-4",attrs:{"vs-trigger-click":""}},[a("div",{staticClass:"p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32"},[a("span",{staticClass:"mr-2"},[t._v("Actions")]),t._v(" "),a("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),t._v(" "),a("vs-dropdown-menu",[a("vs-dropdown-item",[a("span",{staticClass:"flex items-center"},[a("feather-icon",{staticClass:"mr-2",attrs:{icon:"TrashIcon",svgClasses:"h-4 w-4"}}),t._v(" "),a("span",[t._v("Delete")])],1)]),t._v(" "),a("vs-dropdown-item",[a("span",{staticClass:"flex items-center"},[a("feather-icon",{staticClass:"mr-2",attrs:{icon:"ArchiveIcon",svgClasses:"h-4 w-4"}}),t._v(" "),a("span",[t._v("Archive")])],1)]),t._v(" "),a("vs-dropdown-item",[a("span",{staticClass:"flex items-center"},[a("feather-icon",{staticClass:"mr-2",attrs:{icon:"FileIcon",svgClasses:"h-4 w-4"}}),t._v(" "),a("span",[t._v("Print")])],1)]),t._v(" "),a("vs-dropdown-item",[a("span",{staticClass:"flex items-center"},[a("feather-icon",{staticClass:"mr-2",attrs:{icon:"SaveIcon",svgClasses:"h-4 w-4"}}),t._v(" "),a("span",[t._v("Another Action")])],1)])],1)],1),t._v(" "),a("div",{staticClass:"p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary",on:{click:t.addNewData}},[a("feather-icon",{attrs:{icon:"PlusIcon",svgClasses:"h-4 w-4"}}),t._v(" "),a("span",{staticClass:"ml-2 text-base text-primary"},[t._v("Add New")])],1)],1),t._v(" "),a("vs-dropdown",{staticClass:"cursor-pointer mb-4 mr-4",attrs:{"vs-trigger-click":""}},[a("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"},[a("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.itemsPerPage-(t.itemsPerPage-1))+" - "+t._s(t.products.length-t.currentPage*t.itemsPerPage>0?t.currentPage*t.itemsPerPage:t.products.length)+" of "+t._s(t.queriedItems))]),t._v(" "),a("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),t._v(" "),a("vs-dropdown-menu",[a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=4}}},[a("span",[t._v("4")])]),t._v(" "),a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=10}}},[a("span",[t._v("10")])]),t._v(" "),a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=15}}},[a("span",[t._v("15")])]),t._v(" "),a("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=20}}},[a("span",[t._v("20")])])],1)],1)],1),t._v(" "),a("template",{slot:"thead"},[a("vs-th",[t._v("Image")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"name"}},[t._v("Name")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"category"}},[t._v("Category")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"popularity"}},[t._v("Popularity")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"order_status"}},[t._v("Order Status")]),t._v(" "),a("vs-th",{attrs:{"sort-key":"price"}},[t._v("Price")]),t._v(" "),a("vs-th",[t._v("Action")])],1)],2)],1)}),[],!1,null,null,null);e.default=o.exports},307:function(t,e,a){var s=a(1027);"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(8)(s,r);s.locals&&(t.exports=s.locals)}}]);