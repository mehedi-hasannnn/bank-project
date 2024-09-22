// add money to the account

// step1: add an event handler to the add money button inside the form 
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // Prevent page reload after form submit
    event.preventDefault();

    // step 2: get money to be added to the account
    const addMoneyInput = document.getElementById('add-money-input').value;

    // Get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;

    // step3: verify pin number
    if(pinNumberInput === '1234'){
        console.log('Adding money to your account');

        // step4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        // step5: add the addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;

        // step6: update the balance in the UI/DOM

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money, Please try again');
    }
});