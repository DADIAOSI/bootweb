/**
 * Created by yujin on 17-7-25.
 */
$("a[class='thumbnail']").click(function () {
    alert("this is "+$(this).attr('id')+"在上方新建一个tab标签切换栏，用于显示这些分类的详细信息,所有分类信息都在这个tab里面进行显示（需要清空tab）");
    var $wxpflid=$(this).attr('id');            //判断点击的分类图标按钮，再通过Ajax进行网页局部加载
    switch ($wxpflid){
        case 'cgq':
            tabshow();
            break;
        case 'kq':
            break;
        case 'gygl':
            break;
        case 'wkq':
            break;
        case 'ylgd':
            break;
        case 'mk':
            break;
        case 'jsk':
            break;
        case 'wxsccs':
            break;
        case 'ylrq':
            break;
        default:
            alert("你选的不是危险品分类图标！，属于代码问题！");
            break;
    };
    function wxpflajax() {
        $.get()
    };
    function tabshow() {
       $('#Addtabli').removeClass('hidden');
       alert('ok');
    };
});

