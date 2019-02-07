Vue.component('monstar-item', {
    props:['monstar'],
    template: 'monstar-item.html'
});

var app = new Vue({ 
    el: '#app',
    data: {
        message: '伝説が嫌い'
    },
    methods: {
        changeStatus: function () {
            this.message = '伝説が好き';
        }
    }
});

var list = new Vue({
  el: '#list',
  data: {
    dogs: [
      { id: 0,name: 'エンテイ' },
      { id: 0,name: 'ライコウ' },
      { id: 0,name: 'スイクン' }
    ],
    birds: [
        { id: 0,name: 'ファイヤー' },
        { id: 0,name: 'サンダー' },
        { id: 0,name: 'フリーザー' }
    ]
}
});