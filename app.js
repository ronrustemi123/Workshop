const link = document.querySelectorAll('#links');
const navLogo = document.querySelector('.nav-logo');

const section0 = document.querySelector('.background-image')
const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const section4 = document.querySelector('.section4');



const checkbox = document.querySelector('#checkbox-toggle');

navLogo.addEventListener('click', function(e) {
    e.preventDefault();
    section0.scrollIntoView();
    checkbox.checked = false;
})

link[0].addEventListener('click', function (e) {
    e.preventDefault();
    section1.scrollIntoView();
    checkbox.checked = false;
})

link[1].addEventListener('click', function (e) {
    e.preventDefault();
    section2.scrollIntoView();
    checkbox.checked = false;
})

link[2].addEventListener('click', function (e) {
    e.preventDefault();
    section3.scrollIntoView(false);
    checkbox.checked = false;
})

link[3].addEventListener('click', function (e) {
    e.preventDefault();
    section4.scrollIntoView();
    checkbox.checked = false;
})


// Calculator


const selectMenu = document.querySelector('select');
const arrowDown = document.querySelector('.arrow-down img');

let counter = 0

function arrowDownFunc(e) {
    counter++;
    if (counter % 2 == 0) {
        arrowDown.style.transform = 'rotate(-180deg)';
        arrowDown.style.transition = '0.1s'
    } else {
        arrowDown.style.transform = 'rotate(0deg)';
        arrowDown.style.transition = '0.1s'
    }
}

function showMenu(e) {
    selectMenu.style.display = 'block'
}

selectMenu.addEventListener('click', arrowDownFunc);
arrowDown.addEventListener('click', arrowDownFunc);



const prodQuantity = document.querySelector('#product-quantity');
const orderAmount = document.querySelector('#orders');
const packageOptions = document.querySelector('#package');

const accountingCheck = document.querySelector('#accounting-check');
const rentalCheck = document.querySelector('#rental');

const totalPriceDisplay = document.querySelector('.container .calculation-display .total-price');
const totalPrice = document.querySelector('#total-price-span');


function showPrices(e) {
    const listItem = document.querySelectorAll('.calculator-menu li');


    let totalFinalPrice = 0;
    

    if (prodQuantity.value.length > 0) {
        const productCalc = document.querySelector('#product-calculation');
        const finalCalc = document.querySelector('#product-calculation + .final-calculation');

        let finalPrice = prodQuantity.value * 0.5

        productCalc.innerText = prodQuantity.value + ' * ' + '$0.5';
        finalCalc.innerText = '$' + finalPrice

        totalFinalPrice += finalPrice;
        totalPrice.innerText = '$' + totalFinalPrice;
        totalPriceDisplay.style.display = 'flex';
        

        listItem[0].style.display = 'flex'
    } else {
        listItem[0].style.display = 'none';
    }

    if (orderAmount.value.length > 0) {
        const productCalc = document.querySelector('#order-calculation');
        const finalCalc = document.querySelector('#order-calculation + .final-calculation');

        let finalPrice = orderAmount.value * 0.25

        productCalc.innerText = prodQuantity.value + ' * ' + '$0.25';
        finalCalc.innerText = '$' + finalPrice;

        totalFinalPrice += finalPrice;
        totalPrice.innerText = '$' + totalFinalPrice;
        totalPriceDisplay.style.display = 'flex';
        

        listItem[1].style.display = 'flex'
    } else {
        listItem[1].style.display = 'none'
    }



    if (packageOptions.value.length > 0) {
        listItem[2].style.display = 'flex'
    } else {
        listItem[2].style.display = 'none'
    }

    const packageName = document.querySelector('#package-name')
    const finalCalc = document.querySelector('#package-name + .final-calculation');

    if (packageOptions.value == 0) {
        let finalPrice = 0

        totalFinalPrice += finalPrice;
        totalPrice.innerText = '$' + totalFinalPrice;
        totalPriceDisplay.style.display = 'flex';

        packageName.innerText = 'Basic';
        finalCalc.innerText = '$' + 0
    

    } else if (packageOptions.value == 25) {
        let finalPrice = 25

        totalFinalPrice += finalPrice;
        totalPrice.innerText = '$' + totalFinalPrice;
        totalPriceDisplay.style.display = 'flex';

        packageName.innerText = 'Professional';
        finalCalc.innerText = '$' + 25
    } else if (packageOptions.value == 60) {
        let finalPrice = 60

        totalFinalPrice += finalPrice;
        totalPrice.innerText = '$' + totalFinalPrice;
        totalPriceDisplay.style.display = 'flex';
    
        packageName.innerText = 'Premium';
        finalCalc.innerText = '$' + 60
    }



    if (accountingCheck.checked) {
        const finalAccountPrice = document.querySelector('#account-price');
        let accountPrice = 35;

        totalFinalPrice += accountPrice

        finalAccountPrice.innerText = '$' + 35;
        totalPrice.innerText = '$' + totalFinalPrice;
        listItem[3].style.display = 'flex';
    } else {
        listItem[3].style.display = 'none'
    }

    if (rentalCheck.checked) {
        const finalRenalPrice = document.querySelector('#rental-price');
        finalRenalPrice.innerText = '$' + 5;

        let accountPrice = 5;
        totalFinalPrice += accountPrice

        totalPrice.innerText = '$' + totalFinalPrice;
        listItem[4].style.display = 'flex'
    } else {
        listItem[4].style.display = 'none'
    }
    
    if(totalFinalPrice == 0) {
        totalPriceDisplay.style.display = 'none'
    }

}

const basicOption = packageOptions.value == 0

prodQuantity.addEventListener('keyup', showPrices);
prodQuantity.addEventListener('change', showPrices);

orderAmount.addEventListener('keyup', showPrices);
orderAmount.addEventListener('change', showPrices);

packageOptions.addEventListener('keyup', showPrices);
packageOptions.addEventListener('change', showPrices);


rentalCheck.addEventListener('change', showPrices);
accountingCheck.addEventListener('change', showPrices);


