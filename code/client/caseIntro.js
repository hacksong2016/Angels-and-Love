
// //helpers and events
// Template.caseIntro.helpers({
// 	participants: function(){
// 	    var donation = Donations.findOne({_id: this._id});

// 	    if (donation) {
// 	      var keyOrg = Organizations.findOne({_id: donation.organization});
// 	      var keySchool = Schools.findOne({_id: donation.school});

// 	      var organizationName_ = keyOrg ? keyOrg.organization : "";
// 	      var schoolName_ = keySchool ? keySchool.school : "";

// 	      return {organizationName: organizationName_, schoolName: schoolName_};
// 	    }
//     	return {organizationName: "", schoolName: ""};
//   	},

//   	donates: function(){
//     	var donation = Donations.findOne({_id: this._id});
//     	return donation ? donation.donates : [];
//   	},

// })

// Template.donate_item.helpers({
// 	createdDate:function(){
//       return moment(this.createdOn).format('YYYY-MM-DD');
//     },

//     donate:function(){
//     	return this.donate;
//     },
    
// })