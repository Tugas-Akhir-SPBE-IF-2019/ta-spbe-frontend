"use strict";(self.webpackChunktugas_akhir_spbe=self.webpackChunktugas_akhir_spbe||[]).push([[6400],{6400:function(e,t,a){a.r(t),a.d(t,{EditProfileBioContainer:function(){return b},default:function(){return Z}});var n=a(4942),s=a(1413),i=a(5671),o=a(3144),d=a(7326),l=a(136),u=a(1129),r=a(2791),p=a(8687),h=function(e){var t;return null!==e&&void 0!==e&&null!==(t=e.editBiodataReducer)&&void 0!==t&&t.biodata?e.editBiodataReducer.biodata:null},c=function(e){var t;return null!==e&&void 0!==e&&null!==(t=e.editBiodataReducer)&&void 0!==t&&t.successMessage?e.editBiodataReducer.successMessage:""},f=a(8937),g=a(184),v=(0,r.lazy)((function(){return Promise.all([a.e(7625),a.e(6477),a.e(9027),a.e(4870),a.e(1667)]).then(a.bind(a,5216))})),b=function(e){(0,l.Z)(a,e);var t=(0,u.Z)(a);function a(e){var n;return(0,i.Z)(this,a),(n=t.call(this,e)).state={email:"",name:"",contact_number:"",linkedin_profile:"",address:"",profile_picture:"",showModal:!1},n.handleInputChange=n.handleInputChange.bind((0,d.Z)(n)),n.handleUpdateBiodata=n.handleUpdateBiodata.bind((0,d.Z)(n)),n.toggleModal=n.toggleModal.bind((0,d.Z)(n)),n}return(0,o.Z)(a,[{key:"componentDidMount",value:function(){this.props.getProfileBiodata()}},{key:"componentDidUpdate",value:function(e){if(e.biodataResponse!==this.props.biodataResponse){var t=(0,s.Z)({},this.props.biodataResponse);delete t.house_address,delete t.profile_picture_link,this.setState((0,s.Z)((0,s.Z)({},this.state),t))}e.successMessagesResponse!==this.props.successMessagesResponse&&this.toggleModal()}},{key:"handleInputChange",value:function(e){var t=e.target,a=t.name,i=t.value,o=t.files;null!==o?this.setState((0,s.Z)((0,s.Z)({},this.state),{},(0,n.Z)({},a,o[0]))):null!==i&&this.setState((0,s.Z)((0,s.Z)({},this.state),{},(0,n.Z)({},a,i)))}},{key:"handleUpdateBiodata",value:function(e){e.preventDefault(),this.props.updateProfileBiodata(this.state)}},{key:"toggleModal",value:function(){this.setState((0,s.Z)((0,s.Z)({},this.state),{},{showModal:!this.state.showModal}))}},{key:"render",value:function(){var e=this.props.biodataResponse,t=this.state,a=t.email,n=t.name,s=t.contact_number,i=t.linkedin_profile,o=t.address,d=t.profile_picture,l=t.showModal;return(0,g.jsx)(v,{biodataResponse:e,email:a,name:n,contact_number:s,linkedin_profile:i,address:o,profile_picture:d,handleInputChange:this.handleInputChange,handleUpdateBiodata:this.handleUpdateBiodata,showModal:l,toggleModal:this.toggleModal})}}]),a}(r.PureComponent);var Z=(0,p.$j)((function(e){return{biodataResponse:h(e),successMessagesResponse:c(e)}}),(function(e){return{getProfileBiodata:function(){return e((0,f.Yb)())},updateProfileBiodata:function(t){return e((0,f.FV)(t))}}}))(b)}}]);
//# sourceMappingURL=6400.7157dc2a.chunk.js.map