/**
 * Created by yujin on 17-7-25.
 */
$("a[class='thumbnail']").click(function () {
    //alert("this is "+$(this).attr('id')+"在上方新建一个tab标签切换栏，用于显示这些分类的详细信息,所有分类信息都在这个tab里面进行显示（需要清空tab）");
    var $wxpflid=$(this).attr('id');            //判断点击的分类图标按钮，再通过Ajax进行网页局部加载
    var name=$(this).attr('name');                 //获取分类标签的name属性作为tab标签的名字
    switch ($wxpflid){
        case 'cgq':
            //tabshow();
            addtab(name);
            break;
        case 'kq':
            addtab(name);
            break;
        case 'gygl':
            addtab(name);
            break;
        case 'wkq':
            addtab(name);
            break;
        case 'ylgd':
            addtab(name);
            break;
        case 'mk':
            addtab(name);
            break;
        case 'jsk':
            addtab(name);
            break;
        case 'wxsccs':
            addtab(name);
            break;
        case 'ylrq':
            addtab(name);
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
       $('#mytabs li:eq(1) a').tab('show');

       alert('ok');
    };
    function addtab(tabname) { //还需要先判断是否存在该tab，存在则不添加
        if($('#mytabcontent div[id='+tabname+']').length>0){
            alert(tabname+"已近存在！");
            return;
        }
        else {
            var html_tabname="<li><a href='#"+tabname+"' data-toggle='tab'>"+tabname+"<span class='glyphicon glyphicon-remove'></span></a></li>";
            var html_tabcontent="<div id='"+tabname+"' class='tab-pane fade'><h3>Addtabcontent tabename</h3></div>"
            $('#mytabs').append(html_tabname);
            $('#mytabcontent').append(html_tabcontent);
            $('#mytabs li:last a').tab('show');
            $.get('usableHtmlfreg/wxpfl/'+$wxpflid+'.html',function (data) {
                $('#'+tabname+'').empty().append(data);
                // alert('ok!');
            });
        }

    }
});

