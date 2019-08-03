Vue.component('question',{
    props:['value'],
    template: '<div><div style="height:100%" v-if="this.page == 1"><span>1.请问您的性别是：</span>'
        + '<div class="options" v-for="(item,index) in sex_list">'
        + '<input :value="item.name" type="radio" @change="radio_change($event,index)" name="sexy" :checked="item.checked">{{item.name}}'
        + '</div>'
        + '<div class="step_bottom">'
        + '<button :disabled="disabledOne" :class="[{disabledColor: disabledOne},buttonone,greycolor]" @click="nextQuestionTwo">下一步</button>'
        + '<button @click="restartQuestionOne" :class="[buttonone]">重置</button>'
        + '</div></div>'
        + '<div v-else-if="this.page == 2"><span>2.请选择您的兴趣爱好：</span>'
        + '<div class="options" v-for="(item,index) in hobbies">'
        + '<input type="checkbox" name="hobbies" value="item.name" @change="checkboxChange($event,index)" :checked="item.checked">{{item.name}}<br>'
        + '</div>'
        + '<div class="step_bottom second_quesiton">'
        + '<button :disabled="disabledTwo" :class="[greycolor,{disabledColor: disabledTwo}]" @click="nextQuestionThree">下一步</button>'
        + '<button @click="lastStepOne">上一步</button>'
        + '<button @click="restartQuestionTwo">重置</button>'
        + '</div></div>'
        + '<div v-else><span>3.请介绍一下自己：</span>'
        + '<div><textarea name="introduction" autofocus rows="10" cols="40" @blur="checkLength" :value="text"></textarea></div>'
        + '<div class="step_bottom second_quesiton">'
        + '<button :disabled="disabledThree" :class="[greycolor,{disabledColor: disabledThree}]" @click="submit">提交</button>'
        + '<button class="" @click="lastStepTwo">上一步</button>'
        + '<button class="" @click="restartQuestionThree">重置</button>'
        + '</div></div></div>',
    data:function () {
        return{
            sex_list:[
                {name:'男'},
                {name:'女'},
                {name:'保密'}
            ],
            hobbies: [
                {name:'看书'},
                {name:'游泳'},
                {name:'跑步'},
                {name:'看电影'},
                {name:'听音乐'}
            ],
            disabledOne: true,
            disabledTwo: true,
            disabledThree: true,
            buttonone:'buttonOne',
            greycolor:'greyColor',
            text:'',
            page: this.value,
            user_data:{
            }
        }
    },
    methods:{
        radio_change: function (el,index) {
            var radio_value = el.target.value;
            if( typeof radio_value != 'undefined' && radio_value != '' ){
                this.disabledOne = false;
                this.sex_list[index].checked = true;
            }else{
                this.disabledOne = true;
            }
        },
        checkboxChange: function (el,index) {
            var boxvalue = el.target.checked;
            var count = 0;
            if( boxvalue == true ){
                this.hobbies[index].checked = true;
            }else{
                this.hobbies[index].checked = false;
            }

            this.hobbies.forEach(function (item) {
                if( item.checked == true ){
                    count ++;
                }
            });

            if( count >=2 ){
                this.disabledTwo = false;
            }else {
                this.disabledTwo = true;
            }
        },
        checkLength:function (el) {
            var value = el.target.value;
            var length = value.length;
            if( length >= 10 ){
                this.disabledThree = false;
            }else{
                this.disabledThree = true;
            }
            this.text = value;
        },
        restartQuestionOne:function () {
            this.sex_list.forEach(function (item) {
                item.checked = false;
            });
            this.disabledOne = true;
        },
        restartQuestionTwo:function () {
            this.hobbies.forEach(function (item) {
                item.checked = false;
            });
            this.disabledTwo = true;
        },
        restartQuestionThree:function () {
            this.text = '';
            this.disabledThree = true;
        },
        nextQuestionTwo:function () {
            this.page ++;
            var obj = {};
            this.sex_list.forEach(function (item) {
                if( item.checked ){
                    obj.sex = item.name;
                }
            });
            this.user_data = obj;
        },
        nextQuestionThree:function () {
            var count = 0;
            var obj = this.user_data;
            obj.hobbies = [];
            this.hobbies.forEach(function (item) {
                if( item.checked == true ){
                    obj.hobbies.push(item.name);
                    count ++;
                }
            });
            this.user_data = obj;
            if(count > 3){
                alert('不得超过三项,请重新选择');
            }else{
                this.page ++;
            }
        },
        lastStepOne:function () {
            this.user_data = {};
            this.hobbies.forEach(function (item) {
                item.checked = false;
            });
            this.page --;
        },
        lastStepTwo:function () {
            this.text = '';
            if( typeof this.user_data.introduction != 'undefined' ) delete this.user_data.introduction;
            this.page --;
        },
        submit:function () {
            var obj = this.user_data;
            obj.introduction = this.text;
            this.user_data = obj;
            console.log(this.user_data);
            // ajax 发送数据到后台
        },
    }
});