var ApiUtil = require('../util/api_util.js'),
    React = require('react'),
    BenchActions = require('../actions/bench_actions.js'),
    History = require('react-router').History,
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var BenchForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    lat: '',
    lng: '',
    description: ''
  },

  getInitialState: function() {
    return this.blankAttrs;
  },

  createBench: function(event) {
    event.preventDefault();

    ApiUtil.createBench(this.state, function(id) {
      this.history.pushState(null, "/bench/" + id, {});
    }.bind(this));
    this.setState(this.blankAttrs);
  },

  render: function() {
    return(
      <form className='new-bench' onSubmit={this.createBench}>
        <div>
          <label htmlFor='bench_lat'>Latitude:</label>
          <input
            type='text'
            id='bench_lat'
            valueLink={this.linkState("lat")}
          />
        </div>

        <div>
          <label htmlFor='bench_lng'>Longitude:</label>
          <input
            type='text'
            id='bench_lng'
            valueLink={this.linkState("lng")}
          />
        </div>

        <div>
          <label htmlFor='bench_description'>Description:</label>
          <input
            type='text'
            id='bench_description'
            valueLink={this.linkState("description")}
          />
        </div>

        <button type="submit">Create Bench</button>

        <a href="/">Back to Main</a>
      </form>
    );
  }
});

module.exports = BenchForm;
