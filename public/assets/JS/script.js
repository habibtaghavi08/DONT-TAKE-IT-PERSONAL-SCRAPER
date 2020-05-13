$(".saveBtn").on("click", function(){
    var id =$(this).attr("data-id")

    $.ajax({
        url:"/api/articles/"+id,
        method:"PUT"
    }).then(function(result){
        location.reload()
    })
})