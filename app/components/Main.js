var React = require('react');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                Hello world
            </div>
        )
    }
});

React.render(<Main />, document.getElementById('app'));
