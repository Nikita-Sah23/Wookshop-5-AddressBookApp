window.onload = function(){
    populateEdit();
    }//= loadAddress;

function populateEdit() {
        var data = JSON.parse(localStorage.getItem("updateArray"));
       //console.log(data.fullname);o
        


        document.getElementById("username").value = data.fullname;
        document.getElementById("address").value = data.address;
        document.getElementById("city").value = data.city;
        document.getElementById("state").value = data.state;
        document.getElementById("zip").value = data.zip;
        document.getElementById("phone").value = data.phone;

        
        };

function updateAddress(){

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

    var data = JSON.parse(localStorage.getItem("addressArray"));

    localStorage.removeItem("addressArray");
    var newAddressArray =[];
    data.forEach(element => {
        if(element.phone != phone)
            newAddressArray.push(element);
    });
    newAddressArray.push(record);
    window.localStorage.setItem("addressArray",JSON.stringify(newAddressArray))

    let secondwindow =window.open('Adressbook.html');
    secondwindow.location.reload(true);

}