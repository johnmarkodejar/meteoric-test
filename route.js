Router.configure({
    layoutTemplate: 'appLayout'
});
Router.route('/leaderboards', {
name: 'leaderboards',
progressSpinner:true
});
Router.route('/online', {
name: 'online',
progressSpinner:true
});
Router.route('/chat', {
name: 'chat',
progressSpinner:true
});
Router.route('/country', {
name: 'country',
progressSpinner:true
});
Router.map(function() {
	this.route('games', {
	path: '/',
	progressTick : true,
	progressSpinner: true
	});
});


