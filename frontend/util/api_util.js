var ApiActions = require('../actions/bench_actions.js');

var ApiUtil = {
  fetchBenches: function() {
    $.ajax({
      type: "GET",
      url: "/api/benches",
      success: function(benches) {
        ApiActions.receiveAllBenches(benches);
      }
    });
  },
};

module.exports = ApiUtil;
