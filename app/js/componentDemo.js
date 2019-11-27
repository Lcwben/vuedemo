//vue组件
Vue.component('veget-note', {
    props: ['note'],
    template: '<div><li>{{note.id}}</li><li>{{note.text}}</li></div>'
});

let app7 = new Vue({
    el: '#app7' ,
    data: {vegetableList:[
            {id:1,text:'番茄'},
            {id:2,text:'黄瓜'},
            {id:3,text:'白菜'}
        ]
    }
});