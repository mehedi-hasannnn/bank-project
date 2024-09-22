// step1: set event handler
document.getElementById('button-login').addEventListener('click', function(event)
{
    // Step2: prevent default behavior
    event.preventDefault;

    // Step3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // step4: validate phone and pin
    // this is temporary way
    if(phoneNumber === '5' && pinNumber ==='1234'){
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    // step-5: Allow user to use the website
    else{
        alert('Wrong phone number or Pin');
    }
})