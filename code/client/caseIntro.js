
//helpers and events
Template.caseIntro.helpers({
  donates:function(){
    return Donations.find({}, {sort:{createdOn: 1}, limit:Session.get("imageLimit")});
  },

  createdDate:function(){
    return moment(this.createdOn).format('YYYY-MM-DD');
  }

})