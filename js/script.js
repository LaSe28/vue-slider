
const root = new Vue({
    el : '#root',
    data :{
        i : 0,
        arrPhotos : [
            {
                img : '01.jpg',
                title: 'Svezia',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                img : '02.jpg',
                title: 'Svizzera',
                text : 'Lorem ipsum',
            },
            {
                img : '03.jpg',
                title: 'Gran Bretagna',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                img : '04.jpg',
                title: 'Germania',
                text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                img : '05.jpg',
                title: 'Paradise',
                text : 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam'
            }
        ]
    },
    methods:{
        incIndex(){
            if(this.i < this.arrPhotos.length - 1){
                this.i++
            } else{
                this.i = 0
            }
        },
        decIndex(){
            if(this.i > 0){
                this.i--
            } else {
                this.i = this.arrPhotos.length -1 
            }
        },
    },
    created(){
        let myInterval = setInterval(this.incIndex, 3000)
    }
})


