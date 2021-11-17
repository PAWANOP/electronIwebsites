  //         // adddress form
  // var modal = document.getElementById("myModal");
  // var btn = document.querySelector(".openform");
  // var span = document.getElementsByClassName("close")[0];
  // btn.onclick = function() {
  //   modal.style.display = "block";
  // }
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }
 

9

  // address add todo 

  // window.onload = function(){
  //   // Buttons
  //   var AddBtn = document.querySelector('.add-submt-button');
  //   var quickAddFormDiv = document.querySelector('.add-adress-form')
  //   // Form Fields
  //   var firstname = document.getElementById('firstname-addressform');
  //   var lastname = document.getElementById('lastname-addressform');
  //   var email = document.getElementById('email-addressform');
  //   var phone = document.getElementById('number-addressform');
  //   var address = document.getElementById('address-addressform');
  //   var country = document.getElementById('Country-addressform');
  //   var zipcode = document.getElementById('zipcode-addressform');
  //   var city = document.getElementById('city-addressform');
  //   var state = document.getElementById('state-addressform');
  //   var home = document.getElementById('home-addressform');
  //   var work = document.getElementById('work-addressform');
  //   // Divs etc.
  //   var addBookDiv = document.querySelector('.addbook');
  
  
  
  //   AddBtn.addEventListener("click", addToBook);
  
  //   addBookDiv.addEventListener("click", removeEntry);
  
    // Storage Array
    // var addressBook = [];
  
    //localStorage['addbook'] = '[{"fullname":"Sachin B","email":"sachin@frameboxx.in","phone":"93828292","address":"something","city":"Chandigarh"}]';
  
    // function jsonStructure(firstname,lastname,phone,address,country,zipcode,city,state,email,home,work){
    //   this.firstname = firstname;
    //   this.lastname = lastname;
    //   this.phone = phone;
    //   this.address = address;
    //   this.country = country;
    //   this.zipcode = zipcode;
    //   this.city = city;
    //   this.email = email;
    //   this.state = state;
    //   this.home = home;
    //   this.work = work;
    // }
  
    // function addToBook(){
    //   var isNull = firstname.value!='' && lastname.value!='' && phone.value!='' && address.value!='' && country.value!=''  && zipcode.value!=''&& city.value!='' && email.value!='' && state.value!='' && home.value!='' && work.value!='';
    //   if(isNull){
        // format the input into a valid JSON structure
        // var obj = new jsonStructure(firstname.value,lastname.value,phone.value,address.value,country.value,zipcode.value,city.value,email.value,state.value,home.value,work.value);
        // addressBook.push(obj);
        // localStorage['addbook'] = JSON.stringify(addressBook);
        // quickAddFormDiv.style.display = "none";
        // clearForm();
    //     showAddressBook();
    //   }
    // }
  
    // function removeEntry(e){
      // Remove an entry from the addressbook
    //   if(e.target.classList.contains('delbutton')){
    //     var remID = e.target.getAttribute('data-id');
    //     addressBook.splice(remID,1);
    //     localStorage['addbook'] = JSON.stringify(addressBook);
    //     showAddressBook();
    //   }
    // }
  
    // function clearForm(){
    //   var formFields = document.querySelectorAll('.formFields');
    //   for(var i in formFields){
    //     formFields[i].value = '';
    //   }
    // }
  
  //   function showAddressBook(){
  //     if(localStorage['addbook'] === undefined){
  //       localStorage['addbook'] = '';
  //     } else {
  //       addressBook = JSON.parse(localStorage['addbook']);
  //       // Loop over the array addressBook and insert into the page
  //       addBookDiv.innerHTML = '';
  //       for(var n in addressBook){
  //         var str = '<div class="entry">';
  //           str += '<div class="name"><p>' + addressBook[n].home + '</p></div>';
  //           str += '<div class="name"><p>' + addressBook[n].work + '</p></div>';
  //           str += '<div class="name"><p>' + addressBook[n].firstname + '</p></div>';
  //           str += '<div class="name"><p>' + addressBook[n].lastname + '</p></div>';
  //           str += '<div class="email"><p>' + addressBook[n].email + '</p></div>';
  //           str += '<div class="phone"><p>' + addressBook[n].phone + '</p></div>';
  //           str += '<div class="address"><p>' + addressBook[n].address + '</p></div>';
  //           str += '<div class="address"><p>' + addressBook[n].country + '</p></div>';
  //           str += '<div class="address"><p>' + addressBook[n].state + '</p></div>';
  //           str += '<div class="city"><p>' + addressBook[n].city + '</p></div>';
  //           str += '<div class="city"><p>' + addressBook[n].zipcode + '</p></div>';
  //           str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
  //           str += '</div>';
  //         addBookDiv.innerHTML += str;
  //       }
  //     }
  //   }
  
  //   showAddressBook();
  
  // }



  window.onload = function(){
    // Buttons
    var quickAddBtn = document.querySelector('.openform');
    var quickAddFormDiv = document.querySelector('.quickaddForm')
    var cancelBtn = document.getElementById('Cancel');
    var AddBtn = document.getElementById('Add');
    // Form Fields
    var fullname = document.getElementById('fullname');
    var phone = document.getElementById('phone');
    var address = document.getElementById('address');
    var city = document.getElementById('city');
    var email = document.getElementById('email');
    // Divs etc.
    var addBookDiv = document.querySelector('.addbook');
  
    quickAddBtn.addEventListener("click", function(){
      // display the form div
      quickAddFormDiv.style.display = "block";
    });
  
    cancelBtn.addEventListener("click", function(){
      quickAddFormDiv.style.display = "none";
    });
  
    AddBtn.addEventListener("click", addToBook);
  
    addBookDiv.addEventListener("click", removeEntry);
  
    // Storage Array
    var addressBook = [];
  
    //localStorage['addbook'] = '[{"fullname":"Sachin B","email":"sachin@frameboxx.in","phone":"93828292","address":"something","city":"Chandigarh"}]';
  
    function jsonStructure(fullname,phone,address,city,email){
      this.fullname = fullname;
      this.phone = phone;
      this.address = address;
      this.city = city;
      this.email = email;
    }
  
    function addToBook(){
      var isNull = fullname.value!='' && phone.value!='' && address.value!='' && city.value!='' && email.value!='';
      if(isNull){
        // format the input into a valid JSON structure
        var obj = new jsonStructure(fullname.value,phone.value,address.value,city.value,email.value);
        addressBook.push(obj);
        localStorage['addbook'] = JSON.stringify(addressBook);
        quickAddFormDiv.style.display = "none";
        clearForm();
        showAddressBook();
      }
    }
  
    function removeEntry(e){
      // Remove an entry from the addressbook
      if(e.target.classList.contains('delbutton')){
        var remID = e.target.getAttribute('data-id');
        addressBook.splice(remID,1);
        localStorage['addbook'] = JSON.stringify(addressBook);
        showAddressBook();
      }
    }
  
    function clearForm(){
      var formFields = document.querySelectorAll('.formFields');
      for(var i in formFields){
        formFields[i].value = '';
      }
    }
  
    function showAddressBook(){
      if(localStorage['addbook'] === undefined){
        localStorage['addbook'] = '';
      } else {
        addressBook = JSON.parse(localStorage['addbook']);
        // Loop over the array addressBook and insert into the page
        addBookDiv.innerHTML = '';
        for(var n in addressBook){
          var str = '<div class="entry">';
            str += '<div class="name"><p>' + addressBook[n].fullname + '</p></div>';
            str += '<div class="email"><p>' + addressBook[n].email + '</p></div>';
            str += '<div class="phone"><p>' + addressBook[n].phone + '</p></div>';
            str += '<div class="address"><p>' + addressBook[n].address + '</p></div>';
            str += '<div class="city"><p>' + addressBook[n].city + '</p></div>';
            str += '<div class="del"><a href="#" class="delbutton" data-id="' + n + '">Delete</a></div>';
            str += '</div>';
          addBookDiv.innerHTML += str;
        }
      }
    }
  
    showAddressBook();
  
  }