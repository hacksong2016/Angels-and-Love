Meteor.startup(function(){
	if (Organizations.find().count() == 0){
		for (var i = 0; i <22; i++) {
			Organizations.insert(
				{
					organization:"光明公益组织",
					img_src: "http://i.niupic.com/images/2016/07/23/K9oKLg.jpg",
					img_alt:"光明公益组织简介光明公益组织简介光明公益组织简介光明公益组织简介光明公益组织简介光明公益组织简介光明公益组织简介光明公益组织简介光明公益组织简介",
					contact:"林家慧",
					createdOn:new Date(),
					scale:"1000+",
					location:"广东省深圳市",
					totalDonations:"5,900",
					org_alt:"从创立之初，百度便将“让人们最平等、便捷地获取信息，找到所求”作为自己的使命，成立以来，公司秉承“以用户为导向”的理念，不断坚持技术创新，致力于为用户提供“简单，可依赖”的互联网搜索产品及服务，其中包括：以网络搜索为主的功能性搜索，以贴吧为主的社区搜索，针对各区域、行业所需的垂直搜索，Mp3搜索，以及门户频道、IM等，全面覆盖了中文网络世界所有的搜索需求，根据第三方权威数据，百度在中国的搜索份额超过80%。从创立之初，百度便将“让人们最平等、便捷地获取信息，找到所求”作为自己的使命，成立以来，公司秉承“以用户为导向”的理念，不断坚持技术创新，致力于为用户提供“简单，可依赖”的互联网搜索产品及服务，其中包括：以网络搜索为主的功能性搜索，以贴吧为主的社区搜索，针对各区域、行业所需的垂直搜索，Mp3搜索，以及门户频道、IM等，全面覆盖了中文网络世界所有的搜索需求，根据第三方权威数据，百度在中国的搜索份额超过80%。从创立之初，百度便将“让人们最平等、便捷地获取信息，找到所求”作为自己的使命，成立以来，公司秉承“以用户为导向”的理念，不断坚持技术创新，致力于为用户提供“简单，可依赖”的互联网搜索产品及服务，其中包括：以网络搜索为主的功能性搜索，以贴吧为主的社区搜索，针对各区域、行业所需的垂直搜索，Mp3搜索，以及门户频道、IM等，全面覆盖了中文网络世界所有的搜索需求，根据第三方权威数据，百度在中国的搜索份额超过80%。",
					donate:{

					}
			    }	
			)// end of insert 
		}
	};// end of if have no 

	if (Schools.find().count() == 0){
		for (var i = 0; i <22; i++) {
			Schools.insert(
				{
					schools:"陕西阳光小学",
					img_src: "http://i.niupic.com/images/2016/07/23/K9oKLg.jpg",
					img_alt:"陕西阳光小学陕西阳光小学陕西阳光小学陕西阳光小学陕西阳光小学陕西阳光小学陕西阳光小学陕西阳光小学陕西阳光小学陕西阳光小学陕西阳光小学陕西阳光小学",
					contact:"刘加权",
					createdOn:new Date(),
					scale:"50-100",
					location:"陕西省西安市",
					totalReceived:"900",
					reveive:{

					}

				}	
			)// end of insert 
		}
	};// end of if have no 

	if (Volunteers.find().count() == 0){
		for (var i = 0; i <22; i++) {
				Volunteers.insert(
				{
					volunteer:"林中林",
					img_src: "http://i.niupic.com/images/2016/07/23/K9oKLg.jpg",
					img_alt:"我是志愿者，主要服务地区是福建省主要服务地区是福建省主要服务地区是福建省主要服务地区是福建省主要服务地区是福建省主要服务地区是福建省主要服务地区是福建省",
					createdOn:new Date(),
					location:"福建省厦门市",
					phone:"+86 18826417583",
					email:"yottalynn@gmail.com"
				}	
			)// end of insert 
		}// end of if have no 
	}
		
});
