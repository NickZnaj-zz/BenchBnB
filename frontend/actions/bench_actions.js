var Dispatcher = require('../dispatcher/dispatcher.js');
var BenchConstants = require('../constants/bench_constants.js');

var benchActions = {
  receiveAllBenches: function(benches) {
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = benchActions;
