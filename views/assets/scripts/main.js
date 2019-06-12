$("#sectionMenuToggler").click(function(){
    $("#sectionList").toggle("moveMenuIn")
})

alert()
function setUpProductBoxHeight(){
    $(".product-box").each(function(v){
        $(".graphicDisplay").css({"height":$(this).width()})
    })
}

setUpProductBoxHeight();
$(window).resize(function(){

    console.log("ope")
    setUpProductBoxHeight()
});


$(".slider").slick();