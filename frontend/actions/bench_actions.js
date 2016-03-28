var Dispatcher = require('../dispatcher/dispatcher.js');
var BenchConstants = require('../constants/bench_constants.js');

var benchActions = {
  receiveAllBenches: function(benches) {
    Dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  },

  receiveSingleBench: function(bench) {
    Dispatcher.dispatch ({
      actionType: BenchConstants.BENCH_RECEIVED,
      bench: bench
    });
  }
};

module.exports = benchActions;
