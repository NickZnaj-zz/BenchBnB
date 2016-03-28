var ApiActions = require('../actions/bench_actions.js');

var ApiUtil = {
  fetchBenches: function(bounds) {
    $.ajax({
      type: "GET",
      url: "/api/benches",
      data: {bounds: bounds},
      success: function(benches) {
        ApiActions.receiveAllBenches(benches);
      }
    });
  },

  createBench: function(bench, callback) {

    $.ajax({
      type: "POST",
      url: "api/benches",
      data: {bench: bench},
      success: function(bench) {
        ApiActions.receiveSingleBench(bench);
        callback && callback(bench.id);
      }
    });
    debugger
  }
};

module.exports = ApiUtil;
