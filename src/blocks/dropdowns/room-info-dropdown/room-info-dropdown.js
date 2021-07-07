let elem = document.querySelector("li.selected-option");
let elemOpasity = document.querySelector(".selected-option ul");
let expandMore = document.querySelector(".expand-more");
let buttonAmountLess =  document.querySelector(" .dropdown__open__amount-less");
let buttonAmountMore =  document.querySelector(".dropdown__open__amount-more");
let buttonAmountNumber =  document.querySelector(".dropdown__open__amount-number").innerHTML;
elem.addEventListener('click',function(e) {
    let targ = e.target;
    let targTwo = document.querySelector("div.caption__description");
    if(targ==elem||targ==targTwo){
        $("ul.dropdown__open").css({
            'opacity' : '1',
            'border' : '1px solid rgba(31, 32, 65, 0.5)',
            'border-top' : 'none'
        });
        $(".dropdown__main").css({
            'border' : '1px solid rgba(31, 32, 65, 0.5)'
        })
        $(".dropdown__open").css({
            'z-index': '1'
        });
    }
    else if(targ==expandMore){
        if(elemOpasity.style.opacity==0){
            $("ul.dropdown__open").css({
                'opacity' : '1',
                'border' : '1px solid rgba(31, 32, 65, 0.5)',
                'border-top' : 'none'
            });
            $(".dropdown__main").css({
                'border' : '1px solid rgba(31, 32, 65, 0.5)'
            })
            $(".dropdown__open").css({
                'z-index': '1'
            });
        }
        else{
            $("ul.dropdown__open").css({
                'opacity' : '0',
                'border' : '1px solid rgba(31, 32, 65, 0.25)'
            });
            $(".dropdown__main").css({
                'border' : '1px solid rgba(31, 32, 65, 0.25)'
            });
            $(".dropdown__open").css({
                'z-index': '0'
            });
        }
    }
});

buttonAmountLess.addEventListener('click',function(e){
    if(elemOpasity.style.opacity!=0){
        if(buttonAmountNumber>0){
            buttonAmountNumber--;
            $(".dropdown__open__first .dropdown__open__amount-number").html(buttonAmountNumber);
            $(".room-number").html(buttonAmountNumber);
            console.log(buttonAmountNumber);
            if(buttonAmountNumber>0){
                $(".dropdown__open__first .dropdown__open__amount-less").css({
                    'opacity' : '1'
                });
            }
            else{
                $(".dropdown__open__first .dropdown__open__amount-less").css({
                    'opacity' : '0.5'
                });
            }
            if(buttonAmountNumber<5&&buttonAmountNumber>0){
                $(".dropdown__open__first .dropdown__open__amount-more").css({
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
            $(".dropdown__open__first .dropdown__open__amount-number").html(buttonAmountNumber);
            $(".room-number").html(buttonAmountNumber);
            console.log(buttonAmountNumber);
            if(buttonAmountNumber<5){
                $(".dropdown__open__first .dropdown__open__amount-more").css({
                    'opacity' : '1'
                });
            }
            else{
                $(".dropdown__open__first .dropdown__open__amount-more").css({
                    'opacity' : '0.5'
                });
            }
            if(buttonAmountNumber<5&&buttonAmountNumber>0){
                $(".dropdown__open__first .dropdown__open__amount-less").css({
                    'opacity' : '1'
                });
            }
        }
    }
});
$(".dropdown__open__second .dropdown__open__amount-less").on('click',function (e) {
    if(elemOpasity.style.opacity!=0){
        let bedNumber = document.querySelector(".dropdown__open__second .dropdown__open__amount-number").innerHTML;
        if(bedNumber>0){
            bedNumber--;
            $(".dropdown__open__second .dropdown__open__amount-number").html(bedNumber);
            $(".bed-number").html(bedNumber);
            console.log(bedNumber);
            if(bedNumber>0){
                $(".dropdown__open__second .dropdown__open__amount-less").css({
                    'opacity' : '1'
                });
            }
            else{
                $(".dropdown__open__second .dropdown__open__amount-less").css({
                    'opacity' : '0.5'
                });
            }
            if(bedNumber<5&&bedNumber>0){
                $(".dropdown__open__second .dropdown__open__amount-more").css({
                    'opacity' : '1'
                });
            }
        }
    }
});
$(".dropdown__open__second .dropdown__open__amount-more").on('click',function (e) {
    if(elemOpasity.style.opacity!=0){
        let bedNumber = document.querySelector(".dropdown__open__second .dropdown__open__amount-number").innerHTML;
        if(bedNumber<5){
            bedNumber++;
            $(".dropdown__open__second .dropdown__open__amount-number").html(bedNumber);
            $(".bed-number").html(bedNumber);
            console.log(bedNumber);
            if(bedNumber<5){
                $(".dropdown__open__second .dropdown__open__amount-more").css({
                    'opacity' : '1'
                });
            }
            else{
                $(".dropdown__open__second .dropdown__open__amount-more").css({
                    'opacity' : '0.5'
                });
            }
            if(bedNumber<5&&bedNumber>0){
                $(".dropdown__open__second .dropdown__open__amount-less").css({
                    'opacity' : '1'
                });
            }
        }
    }
});
$(".dropdown__open__thrid .dropdown__open__amount-less").on('click',function (e) {
    if(elemOpasity.style.opacity!=0){
        let bathroomNumber = document.querySelector(".dropdown__open__thrid .dropdown__open__amount-number").innerHTML;
        if(bathroomNumber>0){
            bathroomNumber--;
            $(".dropdown__open__thrid .dropdown__open__amount-number").html(bathroomNumber);
            console.log(bathroomNumber);
            if(bathroomNumber>0){
                $(".dropdown__open__thrid .dropdown__open__amount-less").css({
                    'opacity' : '1'
                });
            }
            else{
                $(".dropdown__open__thrid .dropdown__open__amount-less").css({
                    'opacity' : '0.5'
                });
            }
            if(bathroomNumber<5&&bathroomNumber>0){
                $(".dropdown__open__thrid .dropdown__open__amount-more").css({
                    'opacity' : '1'
                });
            }
        }
    }
});
$(".dropdown__open__thrid .dropdown__open__amount-more").on('click',function (e) {
    if(elemOpasity.style.opacity!=0){
        let bathroomNumber = document.querySelector(".dropdown__open__thrid .dropdown__open__amount-number").innerHTML;
        if(bathroomNumber<5){
            bathroomNumber++;
            $(".dropdown__open__thrid .dropdown__open__amount-number").html(bathroomNumber);
            console.log(bathroomNumber);
            if(bathroomNumber<5){
                $(".dropdown__open__thrid .dropdown__open__amount-more").css({
                    'opacity' : '1'
                });
            }
            else{
                $(".dropdown__open__thrid .dropdown__open__amount-more").css({
                    'opacity' : '0.5'
                });
            }
            if(bathroomNumber<5&&bathroomNumber>0){
                $(".dropdown__open__thrid .dropdown__open__amount-less").css({
                    'opacity' : '1'
                });
            }
        }
    }
});