var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
// require('style!css!foundation-sites/dist/css/foundation.min.css');
// $(document).foundation();

// App css
//require('style!css!applicationStyles');
// require('style!css!sass!applicationStyles');


var Note = React.createClass({
    render: function() {
        return (
            <div className="note">
                <span>
                    <button className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
        );
    }
});

ReactDOM.render(<Note />,
    document.getElementById('app')
);