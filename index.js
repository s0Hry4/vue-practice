Vue.component('monstar-item', {
  template: 'monstar-item.html'
})

var app = new Vue({ 
    el: '#app',
    data: {
        message: '三犬'
    },
    methods: {
        changeMonstar: function () {
            this.message = '三鳥';
            list.monstars = [
                    { name: 'ファイヤー' },
                    { name: 'サンダー' },
                    { name: 'フリーザー' }
                ];
        }
    }
});

var list = new Vue({
  el: '#list',
  data: {
    monstars: [
      { name: 'エンテイ' },
      { name: 'ライコウ' },
      { name: 'スイクン' }
    ]
  }
});