

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addAmmount =document.getElementById('add-ammount').value;
    console.log(addAmmount);
    const addPin =document.getElementById('add-pin').value;
    
    if(addPin === '1234'){
        console.log('add money to your account');
        const totalAmmounts =document.getElementById('total-ammount').innerText;
        
        // const totalBlance = totalAmmount + addAmmount;
        const addMoney = parseFloat(addAmmount);
        const totalMoney=parseFloat(totalAmmounts);
        const newBlance = addMoney + totalMoney;
        
        console.log(totalAmmounts);
        document.getElementById('total-ammount').innerText=newBlance;
    }

    else{
        alert('wrong you pin number');
    }
})


// cash out area

document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
   const cashOut =document.getElementById('cash-out-ammount').value;
   const pinNumber =document.getElementById('cash-out-pin').value;
   console.log(cashOut, pinNumber);

   if(pinNumber === '1234'){
    const cashOutAmmounts =document.getElementById('total-ammount').innerText;
    const addCashOut =parseFloat(cashOut);
    const allBlance =parseFloat(cashOutAmmounts);
    const cashOutBlance = allBlance - addCashOut ;
    console.log('cash out done', cashOutBlance);
    document.getElementById('total-ammount').innerText=cashOutBlance;
   }

   else{
    alert('wrong pin number');
   }


})



// show cash out btn area


document.getElementById('show-btn').addEventListener('click', function(){
    console.log('show btn');
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-cash-out-btn').classList.add('hidden');
})


// add money btn area

document.getElementById('show-add-btn').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-cash-out-btn').classList.remove('hidden');

})