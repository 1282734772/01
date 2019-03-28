(function(){
   $(".slidebar .list-group > li > a > .circle").each(function(){
       $(this).css("backgroundColor", getRandomColor());
   });
    function getRandomColor(){
        var r = parseInt(Math.random() * 256),
            g = parseInt(Math.random() * 256),
            b = parseInt(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }
}());