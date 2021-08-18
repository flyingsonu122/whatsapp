const form = document.getElementById('form');


form.onsubmit = function (e) {
    e.preventDefault();
    var phone = document.getElementById('phone').value;
    var text = document.getElementById('text').value;
    
    var a = document.createElement('a');

    a.href = `https://api.whatsapp.com/send/?phone=${phone}&text=${text}&app_absent=0`;
    // console.log(a.href);
    location.href = a.href;
   
}