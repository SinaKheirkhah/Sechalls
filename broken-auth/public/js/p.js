$(document).ready(function () {
    var user_id = $("input[name='user_id']").val()
    $.post('/api/get_info', {"user_id": user_id}, function(data){
        var d = JSON.parse(data)
        $(".display_name").html(d.display_name)
    })
});