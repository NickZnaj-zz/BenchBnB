var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    BenchStore = new Store(AppDispatcher),
    BenchConstants = require('../constants/bench_constants');

var _benches = [];

var resetBenches = function (benches) {
  _benches = benches;
};

var resetBench = function(bench) {
  _benches[bench.id] = bench;
};


BenchStore.all = function () {
  return _benches.slice(0);
};

BenchStore.__onDispatch = function (payload) {
switch(payload.actionType) {
  case BenchConstants.BENCHES_RECEIVED:
    var result = resetBenches(payload.benches);
    resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
  case BenchConstants.BENCH_RECEIVED:
    resetBench(payload.bench);
    BenchStore.__emitChange();
    break;
  }
};

console.log(BenchStore);


module.exports = BenchStore;
