let app3 = new Vue({
    el: '#app3',
    data: {
        saw: true
    }
});

let app4 = new Vue({
    el: '#app4',
    data: {
        list: [{text: '测试1'},{text: '测试2'},{text: '测试3'}]
    }
});

let app5 = new Vue({
   el: '#app5',
   data: {message5: '走你'},
    methods: {
        reverseMsg: function() {
            this.message5 = this.message5.split('').reverse().join('')
        }
    }
});

let app6 = new Vue({
    el: '#app6',
    data: {message6: '默认是没有内容'},
});