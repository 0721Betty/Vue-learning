// var man = document.getElementById('man');
// var woman = document.getElementById('woman');
// var secret = document.getElementById('secret');
// var next = document.getElementById('next');
// function check(){
//     if(!man.checked&&!woman.checked&&!secret.checked){
//         alert("性别必选一项");
//         next.disabled="disabled";
//         return false;                    
//     }
// };


//该按钮组件实现下一步功能
Vue.component('myNextButton',{
    template:`\
        <div>
            <button v-on:click = "xia" v-for="status in arr">下一步</button>
        <div>`,
    data:function(){
        return{
            arr:[0,1,2]
        }
    },
    methods:{
        xia:function(){
            if(this.status===arr[0]){
                this.status=arr[1];
            }
            else if(this.status===arr[1]){
                this.status=arr[2];
            }
        },
    }
    
});

var app = new Vue({
    el:'#app',
    methods:{
        // 下一步
        // xia:function(){
        //     if(this.status===0){
        //         this.status=1;
        //     }
        //     else if(this.status===1){
        //         this.status=2;
        //     }
        // },
        // 上一步
        // shang:function(){
        //     if(this.status===1){
        //         this.status=0;
        //     }
        //     else if(this.status===2){
        //         this.status=1;
        //     }
        // },
        

    },
    
})