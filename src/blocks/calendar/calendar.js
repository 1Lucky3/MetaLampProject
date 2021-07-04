
$("#block").datepicker({
  clearButton: true,
})
$('#start').datepicker({
    inline: true,
    clearButton: true,
    onSelect: function (fd, d, picker) { 
      $("#start").val(fd.split("-")[0]);
      $("#end").val(fd.split("-")[1]);
    },
});
$(".datepicker--buttons").append('<span class="datepicker--button_apply" >Применить</span>')
$(".datepicker--button_apply").click(function(){
  asdasd = $(".-range-from-");
  console.log("asdasdas")
});