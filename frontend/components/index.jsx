var React = require('react');
var BenchStore = require('../stores/bench_store.js');
var ApiUtil = require('../util/api_util.js');

var Index = React.createClass({
  getInitialState: function() {
    return ({ benches: BenchStore.all() });
  },

  _onChange: function() {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function() {
    this.benchListener = BenchStore.addListener(this._onChange);
    // ApiUtil.fetchBenches();
  },

  componentWillUnmount: function() {
    this.benchListener.remove();
  },

  render: function(){
    console.log(this.state.benches);
    var benches = this.state.benches.map(function (bench, i){
      return <li key={i}>{bench.description}</li>;
    }.bind(this));

    return (
      <ul>{benches}</ul>
    );
  }
});




module.exports = Index;
