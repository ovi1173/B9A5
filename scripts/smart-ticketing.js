function purchase(){
    hideElementById('banner-section');
    hideElementById('offer-section');
    showElementById('ticket-section')
    
}
function success(){
    hideElementById('banner-section');
    hideElementById('offer-section');
    hideElementById('ticket-section');
    showElementById('success-section');
}

function bookTheSeatById(elementClass) {
    const element = document.getElementsByClassName(elementClass);
    for(var x=0; x < element.length; x++){
        element[x].style.backgroundColor = 'blue';
    }

}


const allBtn = document.getElementsByClassName("seat");
let count = 0;



for (let btn of allBtn) {
    btn.addEventListener('click', function () {
        count += 1;
        if (count > 4) {
            // Break out of the loop when count is 4
            alert('You have selected 4 seats. Maximum allowed.');
            return;
        }

          
        
        
        document.getElementById('total-seat').innerText -= 1;
        document.getElementById('seat-count').innerText = count;
        btn.style.backgroundColor = '#1DD100';

        const seatNum = document.getElementById('seat-no');
        const class_name =document.getElementById('class-name');
        const fare =document.getElementById('price');
        // Append the seat number to the 'seat-no' element
        seatNum.innerHTML += btn.innerText + '<br>';
        class_name.innerHTML += 'Economy'+'<br>';
        fare.innerHTML +='550' +'<br>';
        
        const total_fare = document.getElementById('total-price');
        const GrandTotal = document.getElementById('grand-total');
        total_fare.innerText = count*550;
        GrandTotal.innerText = count*550;
       

       

    });
}
function calculateInputLength(){
    let inputField_1 = document.getElementById('name');
    let inputField_2 = document.getElementById('phone-num');

    const namelen = inputField_1.value.length;
    const numlen = inputField_2.value.length;
    
    
}



