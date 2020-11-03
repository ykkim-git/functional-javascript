// 3-1. _each로 _map, _filter 중복 제거

function _filter(list, predi) {
  var new_list = [];
  _each(list, function(val) {
    if(predi(val)) {
      new_list.push(users[i]);
    }
  })
  return new_list;
}

function _map(list, mapper) {
  var new_list = [];
  _each(list, function(val) {
    new_list.push(mapper(val));
  });
  return new_list;
}

function _each(list, iter) {
  for (var i=0; i<list.length; i++) {
    iter(list[i]);
  }
  return list;
}