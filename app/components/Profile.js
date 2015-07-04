var React = require('react');
var Router = require('react-router');
var UserProfile = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');
var Firebase = require('Firebase');
var ReactFireMixin = require('reactfire');

var Profile = React.createClass({
    mixins: [Router.State, ReactFireMixin],
    getInitialState: function () {
        return {
            notes: ['this is my note', 'hello','licorice'],
            bio: {name: 'Tom'},
            repos: [1,2,3]
        }
    },
    componentDidMount: function () {
        //this.ref = new Firebase('https://github-note-taker.firebaseio.com');
        var ref = new Firebase('burning-heat-2130.firebaseio.com');
        ref.authAnonymously(function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        });
        //ref.authWithPassword({
        //    email    : "someone@gmail.com",
        //    password : "some password"
        //}, function(error, authData) {
        //    if (error) {
        //        console.log("Login Failed!", error);
        //    } else {
        //        console.log("Authenticated successfully with payload:", authData);
        //    }
        //});
        this.ref = ref;
        var childRef = this.ref.child(this.getParams().username);
        this.bindAsArray(childRef, 'notes');
    },
    componentWillUnmount: function () {
      this.unbind('notes');
    },
    render: function () {
        var username = this.getParams().username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes username={username} notes={this.state.notes} />
                </div>
            </div>
        )
    }
});

module.exports = Profile;
