checkboxListInfo = document.querySelector(".checkbox-list__info");
checkboxListExpandMore = document.querySelector(".checkbox-list__expand-more");
checkboxDesignationBold = document.querySelector(".checkbox-list__info .bold-designation");
checkboxListInfo.addEventListener('click', function(e) {
  let target = e.target;
  let CheckOpacity = document.querySelector(".checkbox-list__main").style.opacity;
  if(target==checkboxListInfo||target==checkboxListExpandMore||target==checkboxDesignationBold){
    if(CheckOpacity!=1){
      $(".checkbox-list__main").css({
        'opacity' : '1',
        'z-index' : '1'
      });
      $(".checkbox-list__expand-more").css({
        'transform' : 'rotate(180deg)'
      })
    }
    else{
      $(".checkbox-list__main").css({
        'opacity' : '0',
        'z-index' : '0'
      });
      $(".checkbox-list__expand-more").css({
        'transform' : 'rotate(0deg)'
      })
    }
  }
});
