var React = require('react');

function addListItem(arr, str, prefix){
    if (str){
        var content = prefix + ': ' + str;
        arr.push(<li className="list-group-item" key={arr.length}>{content}</li>);
    }
}

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render: function () {
        console.log(this.props.bio);
        var items = [];
        if (this.props.bio.avatar_url)
            items.push(<li className="list-group-item" key={items.length}><img src={this.props.bio.avatar_url}
                    className="img-rounded img-responsive"/></li>);
        addListItem(items, this.props.bio.name, 'Name');
        addListItem(items, this.props.bio.login, 'Login');
        addListItem(items, this.props.bio.location, 'Location');
        addListItem(items, this.props.bio.company, 'Company');
        addListItem(items, this.props.bio.followers, 'Followers');
        addListItem(items, this.props.bio.following, 'Following');
        addListItem(items, this.props.bio.public_repos, 'Public Repos');
        addListItem(items, this.props.bio.blog, 'Blog');
        return (
            <div>
                <h3>User Profile</h3>
                <ul className="list-group">
                    {items}
                </ul>
            </div>
        )
    }
});

module.exports = UserProfile;
