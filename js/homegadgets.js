 "use strict"



fetch('../api/homegadgets.json')
.then(function (response) {
   return response.json() 
})
.then(function (data) {
   for (let i = 0; i<data.length; i++) {
     document.querySelector('.product__center').innerHTML+=
     `<div class="col-md-6 col-lg-4 col-xl-3" ${data[i].id}>
            <div id="product" class="single-product">
					
                <div class="part-1 part-1-1"> 	
                 <img src=${data[i].image}>
                  
                    <ul>
                        <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                        <li><a href="#"><i class="fas fa-heart"></i></a></li>
                    </ul>
                 </div>
                 <div class="part-2">
                       <h3 class="product-title">${data[i].title}</h3>
                       <h4 class="product-price">₹${data[i].price}</h4>
                 </div>
           </div>
     </div> `
   }
})
.catch(function (err) {
  console.log(err)
})