/**
 * Created by yujin on 17-7-20.
 */
function opentab(){
    $('#mytabs a:first').tab('show');
};

$(document).ready(function(){
    var $item=$('a[id^="tb"]');
    $item.click(function () {
        $('#mytabs a:first').tab('show');
        $.get('test_ifram.html',function (data) {
            $('#souye').empty().append(data);
        });
        $.get('webzujian/qyzz/index.html',function (data) {
            alert(data);
        })

    });

})
