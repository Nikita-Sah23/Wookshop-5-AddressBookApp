window.onload = function(){
    loadAddress();
    }//= loadAddress;

function loadAddress() {


var data = JSON.parse(localStorage.getItem("addressArray"));

//alert(typeof(data));



var tableData = data.map(record => (
    `  <tr>
        <td>${record.fullname}</td>
        <td>${record.address}</td>
        <td>${record.city}</td>
        <td>${record.state}</td>
        <td>${record.zip}</td>
        <td>${record.phone}</td>
        <td><input type="button" onclick='deleteAddress("${record.phone}")' value ="delete" class="delete_address_button"> </td>
        <td><input type="button" onclick='openUpdatePage("${record.phone}")' value ="edit" class="update_address_button"> </td>
      </tr>
    `
  )).join('');
  console.log(tableData);
  
  var tbody = document.querySelector('#body');
  tbody.innerHTML = tableData;


}

function addAddress(){
    var fullname=document.getElementById('username').value;
    var address=document.getElementById('address').value;
    var city=document.getElementById('city').value;
    var state=document.getElementById('state').value;
    var zip=document.getElementById('zip').value;
    var phone=document.getElementById('phone').value;

    const record ={
        fullname : fullname,
        address : address,
        city : city,
        state : state,
        zip : zip,
        phone : phone

    }

    var addressArray = JSON.parse(localStorage.getItem('addressArray') || "[]");

    addressArray.push(record);

    window.localStorage.setItem("addressArray",JSON.stringify(addressArray));
    let secondwindow =window.open('Adressbook.html');
    secondwindow.location.reload(true);

}


function deleteAddress(phone) {
    var data = JSON.parse(localStorage.getItem("addressArray"));

    localStorage.removeItem("addressArray");
    var newAddressArray =[];
    data.forEach(element => {
        if(element.phone != phone)
            newAddressArray.push(element);
    });
    window.localStorage.setItem("addressArray",JSON.stringify(newAddressArray));
    let secondwindow =window.open('Adressbook.html');
    secondwindow.location.reload(true);

};

function openUpdatePage(phone){
  //  let newWindow;
    var data = JSON.parse(localStorage.getItem("addressArray"));
    localStorage.removeItem("updateArray");
    
    data.forEach(element => {
        if(element.phone == phone)
        {
            var updateArray = JSON.parse(localStorage.getItem('updateArray') || "{}");

            //newUpdateArray.add(element);
            window.localStorage.setItem("updateArray",JSON.stringify(element))
        }
       
    });
    window.open('editRecord.html','_blank');
   
       

};


 