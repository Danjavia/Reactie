'use strict';

// Home component
var Home = React.createClass({

	getInitialState: function () {
		return {};
	},

	render: function () {
		return (
			<div className="home">
				Hello world
			</div>
		);
	}
});

// Export component
window.Home = Home;