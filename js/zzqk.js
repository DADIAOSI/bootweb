/**
 * Created by yujin on 17-7-25.
 */
$(document).ready(function () {
    var title=new Array("资质暂停","资质变更","现有资质","资质申请","资质吊销","资质注销");
    $('#pre').click(function () {           //获取上一个table，填充HTML代码或者自动生成表格

        var titleindex=title.indexOf($(this).text());
        if(titleindex>0){
            alert("上一个table！");
            $(this).html("<span class='glyphicon glyphicon-step-backward'></span>"+title[titleindex-1])       //分别设置三个title的标题
                .next().text(title[titleindex])
                .next().html(title[titleindex+1]+"<span class='glyphicon glyphicon-step-forward'></span>");
            $('#TableName').text(title[titleindex]);
        }else {
            alert("已经是最前了！");
        };
    });
    $('#cur').click(function () {
        alert("刷新当前表格！");
    });
    $('#next').click(function () {

        var titleindex=title.indexOf($(this).text());
        if(titleindex<5){
            alert("下一个table！");
            $(this).html(title[titleindex+1]+"<span class='glyphicon glyphicon-step-forward'></span>")
                .prev().text(title[titleindex])
                .prev().html("<span class='glyphicon glyphicon-step-backward'></span>"+title[titleindex-1]);
            $('#TableName').text(title[titleindex]);
        }else {
            alert("已经是最后了！");
        };
    });
})
