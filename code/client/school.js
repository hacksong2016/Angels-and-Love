
//helpers and events
Template.schools.helpers({
	schools:function(){
		return Schools.find({}, {sort:{createdOn: 1}, limit:Session.get("imageLimit")});
	},

	createdDate:function(){
		return moment(this.createdOn).format('YYYY-MM-DD, h:mm:ss a');
	}
})

Template.school.helpers({
	data:function(){
		return Schools.findOne({"_id":Session.get("schoolId")});
	}
})

Template.schools.events({
	'click #js-del-school':function(event){
     var school_id = this._id;
     var c = confirm("确认要删除这家学校的相关信息吗？");
     if(c == true){
     	 // use jquery to hide the image component
	     // then remove it at the end of the animation
	     $("#"+school_id).hide('slow', function(){
	      Schools.remove({"_id":school_id});
	     }) 
     }
  }, 

    'click .school_apply':function(event){
  	  event.preventDefault();
      $('#successAlert').slideDown();
    },
 
   'click #donateNow':function(event){
   	  Session.set("schoolId", this._id);
   	  var key = Meteor.userId()+this._id
  	  Donations.insert({
  	  	key:key,
  		organization:Meteor.userId(),
  		school:this._id
  	  });
    },

})

Template.school.events({ 
	'click .donate':function(event){
		event.preventDefault();
		var donateId = Meteor.userId()+Session.get("schoolId");
		var donates = {donate: $('.donate-amount').val(), createdOn: new Date()};
		var donation = Donations.findOne({key:donateId})
		console.log(donation._id);
		Donations.update({_id: donation._id}, {$push: {donates: donates}});
    }
})
