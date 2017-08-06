/**
 * Created by yujin on 17-7-20.
 */
function opentab(){
    $('#mytabs a:first').tab('show');
};
$(document).ready(function(){
    var $item=$('.list-group-item');
    $item.click(function () {
        $('#mytabs a:first').tab('show');//显示第一个tab
        var $id=$(this).attr('id');
        $.get('usableHtmlfreg/index_html/'+$id+'.html',function (data) {       //通过ajax获取HTML代码，清空tab中HTML代码并添加当前获取的HTML代码
            $('#souye').empty().append(data);
            $.getScript('usableHtmlfreg/js/'+$id+'.js',function (data2) {            //同理，通过Ajax获取JavaScript代码，并加载到网页中,
                                                                        //此处如果连续点击，会请求相同数据并加载，造成数据冗余,暂无解决方法
                //alert($id);
            }).fail(function () {
                alert($id+'.js loading error! or not the file!');
            })
        });
        $item.removeClass('active');                    //移除所有项的样式
        $(this).addClass('active');                     //给当前选中项添加样式
        //alert($(this).attr('id'));
        // $.get('网页界面测试代码/qyzz/index.html',function (data) {
        //     alert(data);
        // })

    });
    //关闭标签页
    $('#mytabs span:gt(2)').click(function () {          //判断tab>span图标索引大于3的可以删除，前面的不可以，以后要插入tab时必须要插入到最后
        alert("close?"+$(this).parent().parent().index());//获取当前点击的tab索引
        var $removetabindex=$(this).parent().parent().index();
        var $removetab=$('#mytabs li:eq('+$removetabindex+')');
        $removetab.remove();        //找到这个父DOM为li并且索引为$removetab的节点并移除
        //alert($removetab.children('a').attr('href'));
        var $href=$removetab.children('a').attr('href');       //找到其与起对应的tabcontent的id
        //alert($href.split('#')[1]+typeof ($href));
        $('#mytabcontent>div[id='+$href.split('#')[1]+']').remove();//找到对应的tabcontent并移除
        // var $removetabcontent=$('#')
        // $removetabcontent.remove();

    });
    $('#tijiao').click(function () {
        $('#formqyxx').submit()
    });

})
