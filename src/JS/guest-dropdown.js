guestDropdownMain = document.querySelector(".guest-dropdown__main");
guestDropdownExpand = document.querySelector(".guest-dropdown__expand-more");
guestDropdownClear = document.querySelector(".guest-dropdown__clear");
guestDropdownApply = document.querySelector(".guest-dropdown__apply");
let elemOpasity = document.querySelector(".guest-dropdown__selected ul");
let amountAdults;
let amountChildens;
let amountBabies;
guestDropdownMain.addEventListener('click', function(e) {
  target = e.target;
  let guestNumber = document.querySelector(".guest-dropdown__guest-number");
  let guestWord = document.querySelector(".guest-dropdown__guest-word");
  let guestDiscription = document.querySelector(".guest-dropdown__description");
  amountAdults = document.querySelector(".guest-dropdown__first .guest-dropdown__amount-number").innerHTML
  amountChildens = document.querySelector(".guest-dropdown__second .guest-dropdown__amount-number").innerHTML
  amountBabies = document.querySelector(".guest-dropdown__thrid .guest-dropdown__amount-number").innerHTML
  if(target==guestDropdownMain||target==guestDropdownExpand||target==guestNumber||target==guestDiscription||target==guestWord){
    if(elemOpasity.style.opacity!=1){
      $(".guest-dropdown__selected ul").css({
        'opacity' : '1',
        'border' : '1px solid rgba(31, 32, 65, 0.5)',
        'border-top' : 'none'
      });
      $(".guest-dropdown__main").css({
        'border' : '1px solid rgba(31, 32, 65, 0.5)'
      });
      if(amountAdults!=0||amountChildens!=0||amountBabies!=0){
        $(".guest-dropdown__clear").css({
          'opacity' : '1',
        })
      }
      else{
        $(".guest-dropdown__clear").css({
          'opacity' : '0',
        })
      }
    }
    else{
      $(".guest-dropdown__selected ul").css({
        'opacity' : '0',
        'border' : '1px solid rgba(31, 32, 65, 0.25)',
        'border-top' : 'none'
      });
      $(".guest-dropdown__main").css({
        'border' : '1px solid rgba(31, 32, 65, 0.25)'
      });
    }
  }
  if(amountAdults==0){
    $(".guest-dropdown__first .guest-dropdown__amount-less").css({
      'opacity' : '0.5'
    });
  }
  if(amountChildens==0){
    $(".guest-dropdown__second .guest-dropdown__amount-less").css({
      'opacity' : '0.5'
    });
  }
  if(amountBabies==0){
    $(".guest-dropdown__thrid .guest-dropdown__amount-less").css({
      'opacity' : '0.5'
    });
  }
});
$(".guest-dropdown__first .guest-dropdown__amount-less").on('click', function(e){
  if(elemOpasity.style.opacity!=0){
    amountAdults = document.querySelector(".guest-dropdown__first .guest-dropdown__amount-number").innerHTML;
    if(amountAdults>0){
      amountAdults--;
      $(".guest-dropdown__first .guest-dropdown__amount-number").html(amountAdults);
      if(amountAdults>0){
        $(".guest-dropdown__first .guest-dropdown__amount-less").css({
          'opacity' : '1'
        });
      }
      else{
        $(".guest-dropdown__first .guest-dropdown__amount-less").css({
          'opacity' : '0.5'
        });
      }
      if(amountAdults<5&&amountAdults>0){
        $(".guest-dropdown__first .guest-dropdown__amount-more").css({
          'opacity' : '1'
        });
      }
    }
  }
})
$(".guest-dropdown__first .guest-dropdown__amount-more").on('click', function(e){
  if(elemOpasity.style.opacity!=0){
    amountAdults = document.querySelector(".guest-dropdown__first .guest-dropdown__amount-number").innerHTML;
    if(amountAdults<5){
      amountAdults++;
      $(".guest-dropdown__first .guest-dropdown__amount-number").html(amountAdults);
      if(amountAdults<5){
        $(".guest-dropdown__first .guest-dropdown__amount-more").css({
          'opacity' : '1'
        });
      }
      else{
        $(".guest-dropdown__first .guest-dropdown__amount-more").css({
          'opacity' : '0.5'
        });
      }
      if(amountAdults<5&&amountAdults>0){
        $(".guest-dropdown__first .guest-dropdown__amount-less").css({
          'opacity' : '1'
        });
        $(".guest-dropdown__clear").css({
          'opacity' : '1',
        });
      }
    }
  }
})
$(".guest-dropdown__second .guest-dropdown__amount-less").on('click', function(e){
  if(elemOpasity.style.opacity!=0){
    amountChildens = document.querySelector(".guest-dropdown__second .guest-dropdown__amount-number").innerHTML;
    if(amountChildens>0){
      amountChildens--;
      $(".guest-dropdown__second .guest-dropdown__amount-number").html(amountChildens);
      if(amountChildens>0){
        $(".guest-dropdown__second .guest-dropdown__amount-less").css({
          'opacity' : '1'
        });
      }
      else{
        $(".guest-dropdown__second .guest-dropdown__amount-less").css({
          'opacity' : '0.5'
        });
      }
      if(amountChildens<5&&amountChildens>0){
        $(".guest-dropdown__second .guest-dropdown__amount-more").css({
          'opacity' : '1'
        });
      }
    }
  }
})
$(".guest-dropdown__second .guest-dropdown__amount-more").on('click', function(e){
  if(elemOpasity.style.opacity!=0){
    amountChildens = document.querySelector(".guest-dropdown__second .guest-dropdown__amount-number").innerHTML;
    if(amountChildens<5){
      amountChildens++;
      $(".guest-dropdown__second .guest-dropdown__amount-number").html(amountChildens);
      if(amountChildens<5){
        $(".guest-dropdown__second .guest-dropdown__amount-more").css({
          'opacity' : '1'
        });
      }
      else{
        $(".guest-dropdown__second .guest-dropdown__amount-more").css({
          'opacity' : '0.5'
        });
      }
      if(amountChildens<5&&amountChildens>0){
        $(".guest-dropdown__second .guest-dropdown__amount-less").css({
          'opacity' : '1'
        });
        $(".guest-dropdown__clear").css({
          'opacity' : '1',
        })
      }
    }
  }
})
$(".guest-dropdown__thrid .guest-dropdown__amount-less").on('click', function(e){
  if(elemOpasity.style.opacity!=0){
    amountBabies = document.querySelector(".guest-dropdown__thrid .guest-dropdown__amount-number").innerHTML;
    if(amountBabies>0){
      amountBabies--;
      $(".guest-dropdown__thrid .guest-dropdown__amount-number").html(amountBabies);
      if(amountBabies>0){
        $(".guest-dropdown__thrid .guest-dropdown__amount-less").css({
          'opacity' : '1'
        });
      }
      else{
        $(".guest-dropdown__thrid .guest-dropdown__amount-less").css({
          'opacity' : '0.5'
        });
      }
      if(amountBabies<5&&amountBabies>0){
        $(".guest-dropdown__thrid .guest-dropdown__amount-more").css({
          'opacity' : '1'
        });
      }
    }
  }
})
$(".guest-dropdown__thrid .guest-dropdown__amount-more").on('click', function(e){
  if(elemOpasity.style.opacity!=0){
    amountBabies = document.querySelector(".guest-dropdown__thrid .guest-dropdown__amount-number").innerHTML;
    if(amountBabies<5){
      amountBabies++;
      $(".guest-dropdown__thrid .guest-dropdown__amount-number").html(amountBabies);
      if(amountBabies<5){
        $(".guest-dropdown__thrid .guest-dropdown__amount-more").css({
          'opacity' : '1'
        });
      }
      else{
        $(".guest-dropdown__thrid .guest-dropdown__amount-more").css({
          'opacity' : '0.5'
        });
      }
      if(amountBabies<5&&amountBabies>0){
        $(".guest-dropdown__thrid .guest-dropdown__amount-less").css({
          'opacity' : '1'
        });
        $(".guest-dropdown__clear").css({
          'opacity' : '1',
        })
      }
    }
  }
})
guestDropdownClear.addEventListener('click', function(e){
  if(elemOpasity.style.opacity!=0){
    $('.guest-dropdown__first .guest-dropdown__amount-number').html(0)
    $('.guest-dropdown__second .guest-dropdown__amount-number').html(0)
    $('.guest-dropdown__thrid .guest-dropdown__amount-number').html(0)
    $(".guest-dropdown__first .guest-dropdown__amount-less").css({
      'opacity' : '0.5'
    });
    $(".guest-dropdown__second .guest-dropdown__amount-less").css({
      'opacity' : '0.5'
    });
    $(".guest-dropdown__thrid .guest-dropdown__amount-less").css({
      'opacity' : '0.5'
    });
    $(".guest-dropdown__first .guest-dropdown__amount-more").css({
      'opacity' : '1'
    });
    $(".guest-dropdown__second .guest-dropdown__amount-more").css({
      'opacity' : '1'
    });
    $(".guest-dropdown__thrid .guest-dropdown__amount-more").css({
      'opacity' : '1'
    });
    $(".guest-dropdown__clear").css({
      'opacity' : '0',
    })
    $('.guest-dropdown__guest-number').html(0);
    $('.guest-dropdown__guest-word').html(' гостей');
  }
})
guestDropdownApply.addEventListener('click', function(e){
  if(elemOpasity.style.opacity!=0){
    amountAdults = document.querySelector(".guest-dropdown__first .guest-dropdown__amount-number").innerHTML;
    amountChildens = document.querySelector(".guest-dropdown__second .guest-dropdown__amount-number").innerHTML;
    amountBabies = document.querySelector(".guest-dropdown__thrid .guest-dropdown__amount-number").innerHTML;
    sum = Number(amountAdults)+Number(amountChildens)+Number(amountBabies);
    $('.guest-dropdown__guest-number').html(sum);
    $('.guest-dropdown__guest-word').html(' гостей');
    $(".guest-dropdown__selected ul").css({
      'opacity' : '0',
      'border' : '1px solid rgba(31, 32, 65, 0.25)',
      'border-top' : 'none'
    });
    $(".guest-dropdown__main").css({
      'border' : '1px solid rgba(31, 32, 65, 0.25)'
    });
  }  
})