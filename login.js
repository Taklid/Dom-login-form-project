

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber =document.getElementById('phone-number').value;
    const pinNumber =document.getElementById('pin-number').value;
    
    if(phoneNumber === '11' && pinNumber === '1234'){
        console.log('Your info is right');
        window.location.href='./home.html';
    }
    else{
        alert('Wrong phone number or password');

    }
   
})