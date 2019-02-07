Vue.component('monstar-item', {
    props:['monstar'],
    template: '<li>{{ monstar.name }}</li>'
});

var app = new Vue({ 
    el: '#app',
    data: {
        message: '伝説'
    },
    methods: {
        changeStatus: function () {
            this.message = '伝説♡';
        }
    }
});

var list = new Vue({
  el: '#list',
  data: {
    dogs: [
      { id: 0,name: 'エンテイ' },
      { id: 1,name: 'ライコウ' },
      { id: 2,name: 'スイクン' }
    ],
    birds: [
        { id: 0,name: 'ファイヤー' },
        { id: 1,name: 'サンダー' },
        { id: 2,name: 'フリーザー' }
    ]
}
});