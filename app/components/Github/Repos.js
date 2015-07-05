var React = require('react');

var Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },
    render: function () {
        var repos = this.props.repos.map(function (repo, index) {
            //console.log(repo.name + ' ' + index);
            return (
                //quotes around {index} will cause the error: Warning: flattenChildren(...): Encountered two children with the same key, `.${index}`. Child keys must be unique; when two children share a key, only the first child will be used.
                //only the first repo will be rendered with this error. Remove the quotes to get this working ocrrectly
                <li className="list-group-item" key={index}>
                    {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                    {repo.description && <p> {repo.description}</p>}
                </li>
            );
        });
        return (
            <div>
                REPOS<br/>
                Username: {this.props.username}<br/>
                <ul className="list-group">
                    {repos}
                </ul>
            </div>
        )
    }
});

module.exports = Repos;
