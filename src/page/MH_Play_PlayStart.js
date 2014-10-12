var Page = $.extend({}, MH_Page, {
    init : function() {
        $("#viewbutton")
        .css("margin-right", "0.5em")
        .css("color", "#AEFFAE")
        .after(
            $("#loginbutton")
            .detach()
            .css("color", "#FFB7B7")
        );
    }
});
