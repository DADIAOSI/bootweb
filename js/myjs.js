/**
 * Created by yujin on 17-7-20.
 */
function opentab(){
    $('#mytabs a:first').tab('show');
};
$(document).ready(function(){
    var $item=$('a[id^="tb"]');
    $item.click(function () {
        $('#mytabs a:first').tab('show');//显示第一个tab
        $.get('usableHtmlfreg/qyxx/qyxx.html',function (data) {       //通过ajax获取HTML代码，清空tab中HTML代码并添加当前获取的HTML代码
            $('#souye').empty().append(data);
            $.getScript('js/loadjs.js',function (data2) {            //同理，通过Ajax获取JavaScript代码，并加载到网页中,
                                                                        //此处如果连续点击，会请求相同数据并加载，造成数据冗余,暂无解决方法
                alert(data2);
            })
        });
        $item.removeClass('active');                    //移除所有项的样式
        $(this).addClass('active');                     //给当前选中项添加样式
        alert($(this).attr('id'));
        // $.get('webzujian/qyzz/index.html',function (data) {
        //     alert(data);
        // })

    });
})
