// infiniscroll
Session.set("imageLimit", 6);
lastScrollTop = 0; 

$(window).scroll(function(event){
// test if we are near the bottom of the window
  if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
    // where are we in the page? 
    var scrollTop = $(this).scrollTop();
    // test if we are going down
    if (scrollTop > lastScrollTop){
      // yes we are heading down...
       Session.set("imageLimit", Session.get("imageLimit") + 3);
    }
    lastScrollTop = scrollTop;
  }
    
})

//helpers and events
Template.volunteers.helpers({
	volunteers:function(){
		return Volunteers.find({}, {sort:{createdOn: 1}, limit:Session.get("imageLimit")});
	},

	createdDate:function(){
		return moment(this.createdOn).format('YYYY-MM-DD, h:mm:ss a');
	}
})

// Template.volunteer.helpers({
// 	data:function(){
// 		return Volunteers.findOne({"_id":Session.get("volunteerId")});
// 	}
// })

Template.volunteers.events({
	'click #js-del-volunteer':function(event){
     var volunteer_id = this._id;
     var c = confirm("确认要删除这家学校的相关信息吗？");
     if(c == true){
     	 // use jquery to hide the image component
	     // then remove it at the end of the animation
	     $("#"+volunteer_id).hide('slow', function(){
	      volunteers.remove({"_id":volunteer_id});
	     }) 
     }
  }, 

  'click .volunteer_apply':function(event){
    $("#add_new_volunteer").modal("show");
  },
 
})