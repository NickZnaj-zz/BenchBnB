var React = require('react');
var ReactDOM = require('react-dom');

var BenchStore = require('./stores/bench_store.js');
var ApiUtil = require('./util/api_util.js');

var Index = require('./components/index.jsx');
var Search = require('./components/search.jsx');


// var Router = require('react-router').Router;
// var Route = require('react-router').Route;
// var IndexRoute = require('react-router').IndexRoute;
//
document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Search />,
    document.getElementById('root')
  );
});
