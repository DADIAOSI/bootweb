/**
 * Created by yujin on 17-7-24.
 */
$('#tijiao').click(function () {
    var data= $('form').serialize();
    //提交表单汉子显示不明白，
    alert(data);
});
$('#formqyxx input').attr("readonly","readonly").css({"box-shadow": "none","background-color": "#fff","border": "none"});//事先指定为readonly状态
$('#xiugai').click(function () {
    var $inputforro=$('#formqyxx input');
    var $bool=$inputforro.attr("readonly");

    if($bool=='readonly')                  //判断是否可读，切换可读状态，进行编辑，
    {
        $inputforro.removeAttr("readonly").removeAttr('style');
    }
    else {
        $inputforro.attr("readonly","readonly").css({"box-shadow": "none","background-color": "#fff","border": "none"});
    };

});
$('#chexiao').click(function () {
    var $inputforro=$('#formqyxx input');
    var $bool=$inputforro.attr("readonly");
    if($bool=='readonly')                  //判断是否可读，切换可读状态，进行编辑，
    {
        return;
    }
    else {
        alert("如何恢复数据？");
        $inputforro.val("");
        $inputforro.attr("readonly","readonly");
    };
});
//客服端表单数据验证，利用的bootstrapValidator插件进行数据验证，但是引入的bootstrapValidator.min.js和bootstrapValidator.min.css数据量超过100kb,网页加载速度可能变慢；
// 解决方法：1.事后需要时加载.2.利用jQuery表单进行验证（费时间）；
//        $('form').bootstrapValidator({
//            message:'this value is not valid',
//            feedbackIcons:{
//                valid:'g'
//            }
//        });

