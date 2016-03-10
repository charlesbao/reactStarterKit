var React = require('react');
var pubSub = require('pubsub-js');

var MainSection = React.createClass({
    getInitialState: function(){
        pubSub.subscribe('init',function(data){
            console.log(data)
        });
        return {}
    },
    componentDidMount: function(){
        pubSub.publish('init','ok')
    },
    render: function(){
        return (
            <h1>Hello World!</h1>
        )
    }
});

module.exports = MainSection;