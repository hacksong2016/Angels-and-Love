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
Template.organizations.helpers({
	organizations:function(){
		return Organizations.find({}, {sort:{createdOn: 1}, limit:Session.get("imageLimit")});
	},

	createdDate:function(){
		return moment(this.createdOn).format('YYYY-MM-DD, h:mm:ss a');
	}
})

Template.organization.helpers({
	data:function(){
		return Organizations.findOne({"_id":Session.get("orgId")});
	}
})

Template.organizations.events({
	'click #js-del-org':function(event){
     var org_id = this._id;
     var c = confirm("确认要删除这家组织的相关信息吗？");
     if(c == true){
     	 // use jquery to hide the image component
	     // then remove it at the end of the animation
	     $("#"+org_id).hide('slow', function(){
	      Organizations.remove({"_id":org_id});
	     }) 
     }
  }, 

  'click .org_apply':function(event){
  	console.log("helloworld");
  	$("#add_new_org").modal('show');
  }
 
})

Template.add_new_org.events({
	'click #confirmed-apply':function(event){
		var img_src, organization, scale, location, totalDonations, contact, img_alt, org_alt;
		img_src = $("#img_src").val();
		organization = $("#organization").val();
		scale = $("#scale").val();
		location = $("#location").val();
		totalDonations = $("#totalDonations").val();
		contact = $("#contact").val();
		img_alt = $("#img_alt").val();
		org_alt = $("#org_alt").val();
		console.log(img_src);
		Organizations.insert({
			img_src:img_src,
			organization:organization,
			scale:scale,
			location:location,
			totalDonations:totalDonations,
			contact:contact,
			img_alt:img_alt,
			org_alt:org_alt
		});
		 // $("#img_src").val() == "";
		 // $("#organization").val() == "";
		 // $("#scale").val() == "";
		 // $("#location").val() == "";
		 // $("#totalDonations").val() == "";
		 // $("#contact").val() == "";
		 // $("#img_alt").val() == "";
		 // $("#org_alt").val() == "";
		$("#add_new_org").modal('hide');
      	return false;
	}
})
