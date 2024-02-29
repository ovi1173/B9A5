function purchase() {
    hideElementById('banner-section');
    hideElementById('offer-section');
    showElementById('ticket-section')


}

function success() {
    hideElementById('banner-section');
    hideElementById('offer-section');
    hideElementById('ticket-section');
    showElementById('success-section');
}


const allBtn = document.getElementsByClassName("seat");
let count = 0;

function handleClick(btn) {
    btn.clicked = true;
    if (btn.clicked) {
        btn.disabled = true;
        return;
    } 
}
for (let btn of allBtn) {
    btn.addEventListener('click', function () {
    
        count += 1;
        if (count > 4) {
            alert('You have selected 4 seats. Maximum allowed.');
            return;
        }

        document.getElementById('total-seat').innerText -= 1;
        document.getElementById('seat-count').innerText = count;
        btn.style.backgroundColor = '#1DD100';

        const seatNum = document.getElementById('seat-no');
        const class_name = document.getElementById('class-name');
        const fare = document.getElementById('price');
        seatNum.innerHTML += btn.innerText + '<br>';
        class_name.innerHTML += 'Economy' + '<br>';
        fare.innerHTML += '550' + '<br>';

        const total_fare = document.getElementById('total-price');
        const GrandTotal = document.getElementById('grand-total');
        total_fare.innerText = count * 550;
        GrandTotal.innerText = count * 550;
        handleClick(btn);
    });
}


let inputField_1 = document.getElementById('name');
let inputField_2 = document.getElementById('phone-num');
let nextButton = document.getElementById('next-button');

inputField_1.addEventListener('input', checkInput);
inputField_2.addEventListener('input', checkInput);

function checkInput() {
    const namelen = inputField_1.value.trim().length;
    const numlen = inputField_2.value.trim().length;
     
    if (namelen === 0 && numlen === 0) {
        nextButton.disabled = true;
        
    } else if(namelen > 0 && numlen > 0) {
        nextButton.disabled = false;
    }
    else{
        nextButton.disabled = true;
    }
}





