$('#start').datepicker({
    onSelect: function (fd, d, picker) { 
      $("#start").val(fd.split("-")[0]);
      $("#end").val(fd.split("-")[1]);
    }
});