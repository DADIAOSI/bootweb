/**
 * Created by yujin on 17-7-25.
 */
$('#getjson').click(function () {
    alert("通过Ajax获取数据");
    $.getJSON('data/sgyh.json',function (data) {
        alert(data.BASE[0].J1);
        $('#J1').html(data.BASE[0].J1);
    })
})
