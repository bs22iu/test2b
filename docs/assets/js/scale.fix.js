(function(document) {
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };


    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }
})(document);

$(function() {

    var count = 1;
    var lisize = $("#maintoc > li").length;
  
    $("#maintoc > li").each(function() {
      if ($(this).children("ul").children("li").length > 0) {
        $(this).children("a").attr("href", ".collapse" + count);
        $(this).children("a").attr("data-toggle", "collapse");
        $(this).children("ul").addClass("collapse collapse" + count);
  
        count++;
      }
    });
  
  });
