Router.configure({
    layoutTemplate: 'appLayout'
});
Router.route('/leaderboards', {
name: 'leaderboards'
});
Router.route('/online', {
name: 'online'
});
Router.route('/chat', {
name: 'chat'
});
Router.route('/country', {
name: 'country'
});
Router.map(function() {
	this.route('games', {
	path: '/'
	});
});
/*
Router.onBeforeAction(function () {
	IonLoading.show({delay:50});	
	this.render();
});
Router.onAfterAction(function () {
	IonLoading.hide();
}); */

