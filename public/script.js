
$(".checkbox").click(function(){
  if ($(this).is(":checked")) {
    $(this).parent().delay(100).fadeOut(300, function(){
      $(this).parent().submit(); 
    });
  }
});

$(".delete-all-btn").click(function(){
  if(confirm("Are you sure you want to delete them all?")){
    alert("delete all");
    $(".delete-all").submit();
  }
    return false;
});
