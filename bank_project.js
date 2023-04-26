const loginBtn = document.getElementById('logIn');

loginBtn.addEventListener('click', function(){
    document.getElementById('submission').style.display= 'none';
    document.getElementById('transaction').style.display= 'block';
});

const depBtn = document.getElementById('depButton');
const withBtn = document.getElementById('withButton');

const deposit = document.getElementById('deposit');
const jomaTaka = document.getElementById('joma');

const withdraw = document.getElementById('withdraw');
const tolaTaka = document.getElementById('tola');

const mot = document.getElementById('mot');

depBtn.addEventListener('click', function(){
    const input_1 = parseFloat(deposit.value);
    const joma = parseFloat(jomaTaka.innerText);
    const total_1 = joma+input_1;

    jomaTaka.innerText = total_1;

    const mot_1 = parseFloat(mot.innerText);
    
    const balance = mot_1+input_1;

    mot.innerText = balance;

    deposit.value='';
});

withBtn.addEventListener('click', function(){
    const input_2 = parseFloat(withdraw.value);
    const tola = parseFloat(tolaTaka.innerText);
    const total_2 = tola+input_2;

    tolaTaka.innerText = total_2;

    const mot_2 = parseFloat(mot.innerText);

    const balance_2 = mot_2-input_2;

    mot.innerText = balance_2;

    withdraw.value='';
});