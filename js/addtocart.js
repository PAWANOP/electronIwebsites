  // 'use strict'


  const productamount =document.getElementById('product-total-amount')
  const Deliverycharge =document.getElementById('Standard-Delivery')
  const finalamountprice =document.getElementById('total-final-price')

  Deliverycharge.innerHTML='150.00'

  function decreament(ncdc,piceplus) {
    const qtyplusplus = document.getElementById(ncdc);
    const picepluschange = document.getElementById(piceplus);
   
    if (qtyplusplus.value <= 0) {
      qtyplusplus.value =0
    }else{
      qtyplusplus.value = parseInt(qtyplusplus.value) -1;
      picepluschange.innerHTML = parseInt(picepluschange.innerHTML) -15999;
      productamount.innerHTML = parseInt(productamount.innerHTML) -15999;
      finalamountprice.innerHTML=   parseInt(productamount.innerHTML) + parseInt(Deliverycharge.innerHTML)
    }
}


   
function increament(ncdc,piceplus) {
  const qtyplusplus = document.getElementById(ncdc);
  const picepluschange = document.getElementById(piceplus);
 

  if (qtyplusplus.value >= 5) {
      alert('only 5 allow')
  }else{
    qtyplusplus.value = parseInt(qtyplusplus.value) + 1;
    picepluschange.innerHTML = parseInt(picepluschange.innerHTML) +15999;
    productamount.innerHTML = parseInt(productamount.innerHTML) +15999;
    finalamountprice.innerHTML= Deliverycharge + productamount.innerHTML
    finalamountprice.innerHTML= parseInt(productamount.innerHTML) + parseInt(Deliverycharge.innerHTML)
  }
}



const discoutcode =document.querySelector('.promo-code')
const error =document.getElementById('errorme')

   
const applypromo = document.querySelector('.apply-promo')

applypromo.addEventListener('click',discoutapplybtn)

function discoutapplybtn() {
   let discoutamount = parseInt(finalamountprice.innerHTML) 
   if (discoutcode.value == '2021') {
        let discoutvalue = discoutamount -2000
        finalamountprice.innerHTML = discoutvalue
        error.innerHTML=`promo code applied`
   } else {
    error.innerHTML=`valid code is 2021`
   }

}





