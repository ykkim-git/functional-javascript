

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

/** 
    console.log(
      document.querySelectorAll('*').map(function(node) {
        return node.nodeName;
      })
    ); // querySelectorAll 의 결과가 array가 아니라서 .map을 사용할 수 없음.
    */

/**
 * 3-3. 커링 : 함수와 인자를 다루는 기법 함수에 인자를 하나씩 적용해나가다가 
 * 필요한 인자가 모두 채워지면 함수 본체를 실행함. 
 * (js에서는 커링을 지원하지 않지만 일급함수가 지원되고 평가시점을 다룰 수 있어서 커링기법을 구현할 수 있다. )
 */

console.log('--- curry')
function _curry(fn) {
  return function(a, b) {
    return arguments.length == 2 ? fn(a, b) : function(b) { return fn(a, b); };
  }
}

/**
 * 3-4 curryr : 오른쪽 인자부터 적용하는 함수
 */
function _curryr() {
  return function(a, b) {
    return arguments.length == 2 ? fn(a, b) : function(b) { return fn(b, a); };
  }
}

/**
 * 3-5. _get을 만들어 좀 더 간단하게 하기
 */

console.log('--- get')

function _get(obj, key) {
  return obj == null ? undefined : obj[key];
}