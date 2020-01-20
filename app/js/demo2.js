Vue.component('test-comp1', {
    data: function () {
        return {
            t1: 'test1'
        }
    },
    template: '<div>{{t1}}</div>'

});

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

let app7 = new Vue({
    el: '#app7',
    data: {
        showClass1: 'true',
        app7cls1: 'app7cls1',
        app7cls2: 'app7cls2'
    },
    methods: {
        getCls: function () {
            return this.showClass1 == 'true'? this.app7cls1 : this.app7cls2
        }
    }
});

let bpp1 = new Vue({
    el: '#bpp1',
    data: {
        smallCase: 'lcwben'
    },
    methods: {
        init: function (text) {
            console.log(text);
        }
    },
    filters: {
        formatCase: function (value) {
            return value.toLocaleUpperCase()
        }
    },
    mounted: function () {
        this.init("挂载时调用。");
    }
});

bpp1.init("vue实例外部调用。");