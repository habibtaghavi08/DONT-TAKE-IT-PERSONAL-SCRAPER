$(".saveBtn").on("click", function(){
    var id =$(this).attr("data-id")

    $.ajax({
        url:"/api/articles/"+id,
        method:"PUT"
    }).then(function(result){
        location.reload()
    })
})


$(".deleteBtn").on("click", function(){
    var id =$(this).attr("data-id")

    $.ajax({
        url:"/api/articles/"+id,
        method:"DELETE"
    }).then(function(result){
        location.reload()
    })
})