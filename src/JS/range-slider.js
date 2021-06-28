$(".range-slider__bar").slider({
  min: 0,
  max: 15000,
  values: [5000, 10000],
  range: true,
  slide: function(even, ui){
    $("#values").text(ui.values[0] + " - " + ui.values[1]);
  }
});
