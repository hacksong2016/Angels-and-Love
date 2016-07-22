FlowRouter.route('/',{
	name:'home',
	action(){
		BlazeLayout.render('layout',{main:"home"});
	}
});

FlowRouter.route('/organization',{
	name:'organization',
	action(){
		BlazeLayout.render('layout',{main:"organization"});
	}
});

FlowRouter.route('/children',{
	name:'children',
	action(){
		BlazeLayout.render('layout',{main:"children"});
	}
});

FlowRouter.route('/volunteer',{
	name:'volunteer',
	action(){
		BlazeLayout.render('layout',{main:"volunteer"});
	}
});

FlowRouter.route('/news',{
	name:'news',
	action(){
		BlazeLayout.render('layout',{main:"news"});
	}
});