let elem = document.querySelector("li.selected-option-expanded");
let elemOpasity = document.querySelector(".selected-option-expanded ul");
let expandMore = document.querySelector(".expand-more-expanded");
let buttonAmountLess =  document.querySelector(" .dropdown__open__amount-less-expanded");
let buttonAmountMore =  document.querySelector(".dropdown__open__amount-more-expanded");
let buttonAmountNumber =  document.querySelector(".dropdown__open__amount-number-expanded").innerHTML;
elem.addEventListener('click',function(e) {
    let targ = e.target;
    let targTwo = document.querySelector("div.caption__description-expanded");
    if(targ==elem||targ==targTwo){
        $("ul.dropdown__open-expanded").css({
            'opacity' : '1',
            'border' : '1px solid rgba(31, 32, 65, 0.5)',
            'border-top' : 'none'
        });
        $(".dropdown__main-expanded").css({
            'border' : '1px solid rgba(31, 32, 65, 0.5)'
        })
        $(".dropdown__open-expanded").css({
            'z-index': '1'
        });
    }
    else if(targ==expandMore){
        if(elemOpasity.style.opacity==0){
            $("ul.dropdown__open-expanded").css({
                'opacity' : '1',
                'border' : '1px solid rgba(31, 32, 65, 0.5)',
                'border-top' : 'none'
            });
            $(".dropdown__main-expanded").css({
                'border' : '1px solid rgba(31, 32, 65, 0.5)'
            })
            $(".dropdown__open-expanded").css({
                'z-index': '1'
            });
        }
        else{
            $("ul.dropdown__open-expanded").css({
                'opacity' : '0',
                'border' : '1px solid rgba(31, 32, 65, 0.25)'
            });
            $(".dropdown__main-expanded").css({
                'border' : '1px solid rgba(31, 32, 65, 0.25)'
            })
            $(".dropdown__open-expanded").css({
                'z-index': '0'
            });
        }
    }
});

buttonAmountLess.addEventListener('click',function(e){
    if(elemOpasity.style.opacity!=0){
        if(buttonAmountNumber>0){
            buttonAmountNumber--;
            $(".dropdown__open__first-expanded .dropdown__open__amount-number-expanded").html(buttonAmountNumber);
            $(".room-number-expanded").html(buttonAmountNumber);
            console.log(buttonAmountNumber);
            if(buttonAmountNumber>0){
                $(".dropdown__open__first-expanded .dropdown__open__amount-less-expanded").css({
                    'opacity' : '1'
                });
            }
            else{
                $(".dropdown__open__first-expanded .dropdown__open__amount-less-expanded").css({
                    'opacity' : '0.5'
                });
            }
            if(buttonAmountNumber<5&&buttonAmountNumber>0){
                $(".dropdown__open__first-expanded .dropdown__open__amount-more-expanded").css({
                    'opacity' : '1'
                });
            }
        }
    }
});
buttonAmountMore.addEventListener('click',function(e){
    if(elemOpasity.style.opacity!=0){
        if(buttonAmountNumber<5){
            buttonAmountNumber++;
            $(".dropdown__open__first-expanded .dropdown__open__amount-number-expanded").html(buttonAmountNumber);
            $(".room-number-expanded").html(buttonAmountNumber);
            console.log(buttonAmountNumber);
            if(buttonAmountNumber<5){
                $(".dropdown__open__first-expanded .dropdown__open__amount-more-expanded").css({
                    'opacity' : '1'
                });
            }
            else{
                $(".dropdown__open__first-expanded .dropdown__open__amount-more-expanded").css({
                    'opacity' : '0.5'
                });
            }
            if(buttonAmountNumber<5&&buttonAmountNumber>0){
                $(".dropdown__open__first-expanded .dropdown__open__amount-less-expanded").css({
                    'opacity' : '1'
                });
            }
        }
    }
});
$(".dropdown__open__second-expanded .dropdown__open__amount-less-expanded").on('click',function (e) {
    if(elemOpasity.style.opacity!=0){
        let bedNumber = document.querySelector(".dropdown__open__second-expanded .dropdown__open__amount-number-expanded").innerHTML;
        if(bedNumber>0){
            bedNumber--;
            $(".dropdown__open__second-expanded .dropdown__open__amount-number-expanded").html(bedNumber);
            $(".bed-number-expanded").html(bedNumber);
            console.log(bedNumber);
            if(bedNumber>0){
                $(".dropdown__open__second-expanded .dropdown__open__amount-less-expanded").css({
                    'opacity' : '1'
                });
            }
            else{
                $(".dropdown__open__second-expanded .dropdown__open__amount-less-expanded").css({
                    'opacity' : '0.5'
                });
            }
            if(bedNumber<5&&bedNumber>0){
                $(".dropdown__open__second-expanded .dropdown__open__amount-more-expanded").css({
                    'opacity' : '1'
                });
            }
        }
    }
});
$(".dropdown__open__second-expanded .dropdown__open__amount-more-expanded").on('click',function (e) {
    if(elemOpasity.style.opacity!=0){
        let bedNumber = document.querySelector(".dropdown__open__second-expanded .dropdown__open__amount-number-expanded").innerHTML;
        if(bedNumber<5){
            bedNumber++;
            $(".dropdown__open__second-expanded .dropdown__open__amount-number-expanded").html(bedNumber);
            $(".bed-number-expanded").html(bedNumber);
            console.log(bedNumber);
            if(bedNumber<5){
                $(".dropdown__open__second-expanded .dropdown__open__amount-more-expanded").css({
                    'opacity' : '1'
                });
            }
            else{
                $(".dropdown__open__second-expanded .dropdown__open__amount-more-expanded").css({
                    'opacity' : '0.5'
                });
            }
            if(bedNumber<5&&bedNumber>0){
                $(".dropdown__open__second-expanded .dropdown__open__amount-less-expanded").css({
                    'opacity' : '1'
                });
            }
        }
    }
});
$(".dropdown__open__thrid-expanded .dropdown__open__amount-less-expanded").on('click',function (e) {
    if(elemOpasity.style.opacity!=0){
        let bathroomNumber = document.querySelector(".dropdown__open__thrid .dropdown__open__amount-number-expanded").innerHTML;
        if(bathroomNumber>0){
            bathroomNumber--;
            $(".dropdown__open__thrid-expanded .dropdown__open__amount-number-expanded").html(bathroomNumber);
            console.log(bathroomNumber);
            if(bathroomNumber>0){
                $(".dropdown__open__thrid-expanded .dropdown__open__amount-less-expanded").css({
                    'opacity' : '1'
                });
            }
            else{
                $(".dropdown__open__thrid-expanded .dropdown__open__amount-less-expanded").css({
                    'opacity' : '0.5'
                });
            }
            if(bathroomNumber<5&&bathroomNumber>0){
                $(".dropdown__open__thrid-expanded .dropdown__open__amount-more-expanded").css({
                    'opacity' : '1'
                });
            }
        }
    }
});
$(".dropdown__open__thrid-expanded .dropdown__open__amount-more-expanded").on('click',function (e) {
    if(elemOpasity.style.opacity!=0){
        let bathroomNumber = document.querySelector(".dropdown__open__thrid .dropdown__open__amount-number-expanded").innerHTML;
        if(bathroomNumber<5){
            bathroomNumber++;
            $(".dropdown__open__thrid-expanded .dropdown__open__amount-number-expanded").html(bathroomNumber);
            console.log(bathroomNumber);
            if(bathroomNumber<5){
                $(".dropdown__open__thrid-expanded .dropdown__open__amount-more-expanded").css({
                    'opacity' : '1'
                });
            }
            else{
                $(".dropdown__open__thrid-expanded .dropdown__open__amount-more-expanded").css({
                    'opacity' : '0.5'
                });
            }
            if(bathroomNumber<5&&bathroomNumber>0){
                $(".dropdown__open__thrid-expanded .dropdown__open__amount-less-expanded").css({
                    'opacity' : '1'
                });
            }
        }
    }
});