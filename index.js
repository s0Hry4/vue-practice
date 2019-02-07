var app = new Vue({ 
    el: '#app',
    data: {
        message: '三犬'
    }
});

var list = new Vue({
  el: '#list',
  data: {
    todos: [
      { text: 'エンテイ' },
      { text: 'ライコウ' },
      { text: 'スイクン' }
    ]
  }
});