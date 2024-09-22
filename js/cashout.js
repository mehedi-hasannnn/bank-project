document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('cashOut-input').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cashOut-pin').value;

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        
        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out, Please try again later');
    }
})