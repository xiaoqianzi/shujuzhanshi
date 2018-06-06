!(function(window, document){
    function yz(options){ //创建一个图形验证码对象,options对象为参数
        this.options = { //默认options参数值
            id: '', //容器ID
            canvasID: 'variCanvas', //canvas的ID
            width: '100', //默认canvas宽度
            height: '30', //默认canvas高度
            type: 'blend', //图形验证码默认类型blend:数字字母混合类型, number:纯数字.letter:纯字母
            codo: ''
        }
        if(Object.prototype.toString.call(options) == "[object Object]"){
            for(var i in options){
                this.options[i] = options[i];
            }
        }else{
            this.options.id = options;
        }
        this.options.numArr = "0,1,2,3,4,5,6,7,8,9".split(",");
    }
})
$(function () {
    $("#dosubmit").click(function () {
        //x上限，y下限
        var x = 1000;
        var y = 1;
        var rand = String.fromCharCode(Math.floor(Math.random() * 26) + "a".charCodeAt(0)) + parseInt(Math.random() * (x - y + 1) + y) + String.fromCharCode(Math.floor(Math.random() * 26) + "a".charCodeAt(0));
        alert(rand);
    })
})
