"use strict";(self.webpackChunktugas_akhir_spbe=self.webpackChunktugas_akhir_spbe||[]).push([[2883],{2883:function(t,e,s){s.r(e),s.d(e,{UserDashboardContainer:function(){return Z},default:function(){return b}});var a=s(4942),n=s(7762),i=s(1413),r=s(5671),o=s(3144),u=s(7326),l=s(136),h=s(1129),p=s(2791),d=s(8687),g=function(t){var e;return null!==t&&void 0!==t&&null!==(e=t.userDashboardReducer)&&void 0!==e&&e.assessmentList?t.userDashboardReducer.assessmentList:[]},c=function(t){var e;return null!==t&&void 0!==t&&null!==(e=t.userDashboardReducer)&&void 0!==e&&e.history?t.userDashboardReducer.history:null},v=s(1475),f=s(8116),m=s(184),y=(0,p.lazy)((function(){return Promise.all([s.e(7625),s.e(6477),s.e(4870),s.e(2426),s.e(4401)]).then(s.bind(s,4401))})),Z=function(t){(0,l.Z)(s,t);var e=(0,h.Z)(s);function s(t){var a;return(0,r.Z)(this,s),(a=e.call(this,t)).state={showModal:!1,limit:10,page:1,institution:"",dates:"",start_date:"",end_date:"",status:"",total_pages:0,page_component:[],history:[]},a.toggleModal=a.toggleModal.bind((0,u.Z)(a)),a.handleInputChange=a.handleInputChange.bind((0,u.Z)(a)),a.submitFilter=a.submitFilter.bind((0,u.Z)(a)),a.handleNext=a.handleNext.bind((0,u.Z)(a)),a.handlePrev=a.handlePrev.bind((0,u.Z)(a)),a.getHistory=a.getHistory.bind((0,u.Z)(a)),a}return(0,o.Z)(s,[{key:"componentDidMount",value:function(){this.props.getAssessmentData(this.state)}},{key:"componentDidUpdate",value:function(t,e){var s=this,a=this.props,r=a.assessmentResponse,o=a.assessmentHistoryResponse,u=this.state.page;if(t.assessmentResponse!==r){var l=[];l.push((0,m.jsx)(f.Z.Item,{active:1===u,value:1,onClick:function(){return s.handleInputChange({target:{name:"page",value:1}},"PAGE")},children:"1"})),u-2>2&&l.push((0,m.jsx)(f.Z.Ellipsis,{}));for(var h=function(t){t>0&&1!==t&&t<r.total_pages&&l.push((0,m.jsx)(f.Z.Item,{active:u===t,value:t,onClick:function(){return s.handleInputChange({target:{name:"page",value:t}},"PAGE")},children:t}))},p=u-2;p<=u+2;p++)h(p);u+2<r.total_pages-1&&l.push((0,m.jsx)(f.Z.Ellipsis,{})),1!==r.total_pages&&l.push((0,m.jsx)(f.Z.Item,{active:u===r.total_pages,value:r.total_pages,onClick:function(){return s.handleInputChange({target:{name:"page",value:r.total_pages}},"PAGE")},children:r.total_pages})),this.setState((0,i.Z)((0,i.Z)({},this.state),{},{total_pages:r.total_pages,page_component:l}))}if(e.page!==u&&this.submitFilter(!0),t.assessmentHistoryResponse!==o){var d,g=[],c=(0,n.Z)(o.status_histories);try{var v=function(){var t=d.value;g.some((function(e){return e.status===t.status}))||g.push(t)};for(c.s();!(d=c.n()).done;)v()}catch(y){c.e(y)}finally{c.f()}this.setState((0,i.Z)((0,i.Z)({},this.state),{},{history:g}))}e.history!==this.state.history&&this.toggleModal()}},{key:"toggleModal",value:function(){var t=this.state.showModal;this.setState((0,i.Z)((0,i.Z)({},this.state),{},{showModal:!t}))}},{key:"handleInputChange",value:function(t,e){if("DATE"===e){var s=t.target.value.split(" - ");this.setState((0,i.Z)((0,i.Z)({},this.state),{},{start_date:s[0],end_date:s[1]}))}else{var n=t.target,r=n.name,o=n.value;this.setState((0,i.Z)((0,i.Z)({},this.state),{},(0,a.Z)({},r,o)))}}},{key:"submitFilter",value:function(t){var e=this.state,s=e.limit,a=e.page,n={limit:s,page:t?a:1,institution:e.institution,start_date:e.start_date,end_date:e.end_date,status:e.status};this.props.getAssessmentData(n)}},{key:"handleNext",value:function(){var t=this.state,e=t.page;e+1<=t.total_pages&&this.setState((0,i.Z)((0,i.Z)({},this.state),{},{page:e+1}))}},{key:"handlePrev",value:function(){var t=this.state.page;t-1>=1&&this.setState((0,i.Z)((0,i.Z)({},this.state),{},{page:t-1}))}},{key:"getHistory",value:function(t){var e=this.props.assessmentResponse;this.props.getHistoryData(e.items[t].id)}},{key:"render",value:function(){var t=this.props,e=t.assessmentResponse,s=t.assessmentHistoryResponse,a=this.state,n=a.showModal,i=a.page_component,r=a.history;return(0,m.jsx)(y,{assessmentResponse:e,showModal:n,toggleModal:this.toggleModal,handleInputChange:this.handleInputChange,submitFilter:this.submitFilter,page_component:i,handleNext:this.handleNext,handlePrev:this.handlePrev,assessmentHistoryResponse:s,getHistory:this.getHistory,history:r})}}]),s}(p.PureComponent);var b=(0,d.$j)((function(t){return{assessmentResponse:g(t),assessmentHistoryResponse:c(t)}}),(function(t){return{getAssessmentData:function(e){return t((0,v.ei)(e))},getHistoryData:function(e){return t((0,v.Ao)(e))}}}))(Z)},7762:function(t,e,s){s.d(e,{Z:function(){return n}});var a=s(181);function n(t,e){var s="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!s){if(Array.isArray(t)||(s=(0,a.Z)(t))||e&&t&&"number"===typeof t.length){s&&(t=s);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o=!0,u=!1;return{s:function(){s=s.call(t)},n:function(){var t=s.next();return o=t.done,t},e:function(t){u=!0,r=t},f:function(){try{o||null==s.return||s.return()}finally{if(u)throw r}}}}}}]);
//# sourceMappingURL=2883.6806db45.chunk.js.map