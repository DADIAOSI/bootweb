/**
 * Created by yujin on 17-7-23.
 */
//通过事先加载，将该table的每一条记录保存到本地HTML5数据库，再通过读取本地数据进行前后的内容导航
$(document).ready(function () {
    var $edbtn=$('#edtbbtn button');
    $edbtn.click(function () {
        //判断点击的按钮索引
        var index=$(this).index();
        switch (index){
            case 0:
                alert("this is btn"+index);
                break;
            case 1:
                alert("this is btn"+index);
                break;
            case 2:
                alert("this is btn"+index);
                break;
            case 3:
                alert("this is btn"+index);
                break;
            case 4:
                addinfo();
                break;
            case 5:
                deletinfo();
                break;
            case 6:
                editinfo();
                break;
            case 7:
                saveinfo();
                break;
            case 8:
                canelsave();
                break;
        }
    });
    //将table表中的输入项清空，并中插入空的input标签，添加表格信息
    function addinfo() {
        alert("this is addinfo btn !");

    };
    //从数据库删除该条记录
    function deletinfo() {
        alert("this is deletinfo btn !");

    };
    //保持table表中信息不变，并将其插入到input标签中进行信息编辑
    function editinfo() {
        alert("this is editinfo btn !");

    };
    //获取当前table中的input标签中的信息，并将其通过Ajax发送到服务器上保存
    function saveinfo() {
        alert("this is saveinfo btn !");

    };
    //取消编辑，如果当前是addinfo（）,则将
    function canelsave() {
        alert("this is canelinfo btn !");

    }
})
