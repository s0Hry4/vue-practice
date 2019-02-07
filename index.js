Vue.component('monstar-item', {
    props:['monstars'],
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
      { name: 'エンテイ' },
      { name: 'ライコウ' },
      { name: 'スイクン' }
    ],
    birds: [
        { name: 'ファイヤー' },
        { name: 'サンダー' },
        { name: 'フリーザー' }
    ]
}
});