var app = new Vue({ 
    el: '#app',
    data: {
        message: '三鳥'
    },
    methods: {
        changeMonstar: function () {
            this.message = this.message.split('').reverse().join('');
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