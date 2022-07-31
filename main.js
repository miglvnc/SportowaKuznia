const activeQuote = document.querySelector('.activeQuote');
const MJ = document.querySelector('.MJ');
const KB = document.querySelector('.KB');
let quotation = document.querySelector('.quoteContainer');
const quoteChangeBtn = document.querySelector('.quoteChangeBtn');
// let quote = document.querySelector('.quoteContainer');
let quotesAll = document.querySelectorAll('.quoteContainer');
let iconRefresh = document.querySelector('.fa-redo')

let w; // for random number

let menuBars = document.querySelector('.menuBars');
let menuIconBars = document.querySelector('.fa-bars');
let collapseMenu = document.querySelector('.collapseMenu');
let nav = document.querySelector('.nav');

let dropdownArticles = document.querySelector('.dropdownArticles');


let spanExtend = document.querySelector('.clickToExtend');
let spanRollUp = document.querySelector('.clickToRoll');
let aRollUp = document.querySelector('.aRollUp');

let artCards = document.querySelectorAll('.artCard')

let activeArticle = document.querySelector('.activeArticle');
let allArticles = document.querySelector('.allArticles');

let cwiczeniaArticle = document.querySelector('.cwiczeniaArticle');
let zmeczenieArticle = document.querySelector('.zmeczenieArticle');
let saunaArticle = document.querySelector('.saunaArticle');
let podstawyArticle = document.querySelector('.podstawyArticle');
let bledyArticle = document.querySelector('.bledyArticle');
let postanowieniaArticle = document.querySelector('.postanowieniaArticle');

let pageOne = document.querySelector('.pageOne');
let pageTwo = document.querySelector('.pageTwo');
let pageNext = document.querySelector('.pageNext');
let pagePrevious = document.querySelector('.pagePrevious');
let pageNumber = document.querySelectorAll('.pageNumber');
let articlesFirstPage = document.querySelector('.articlesFirstPage');
let articlesSecondPage = document.querySelector('.articlesSecondPage');

let pageArticle = document.querySelectorAll('.pageArticle');

let activeCalc = document.querySelector('.activeCalc')
let kcalCalcContainer = document.querySelector('.kcalCalc');
let bmiCalcContainer = document.querySelector('.bmi');
let ymcaCalcContainer = document.querySelector('.ymca');
let calcInputs = document.querySelectorAll('.calcInput');
let highlightedResult = document.querySelectorAll('.highlightedResult');
let kcalResultBtn = document.querySelector('.kcalResultBtn');
let kcalGenderSelect = document.querySelector('.kcalGenderSelect');
let activitySelect = document.querySelector('.activitySelect');
let targetSelect = document.querySelector('.targetSelect');

let selectContainer = document.querySelectorAll('.selectContainer');

let result = document.querySelectorAll('.result');

let numbers = /^[0-9]+$/;

let bmiResultBtn = document.querySelector('.bmiResultBtn');
let bmiInputs = document.querySelectorAll('.bmiInput');
let bmiGenderSelect = document.querySelector('.bmiGenderSelect');

let kcalCalcWrapper = document.querySelectorAll('.calcInputs');

let resultFullText = document.querySelectorAll('.resultFullText');

let resultWeightTarget = document.querySelector('.resultWeightTarget');
let resultWeightTargetBmi = document.querySelector('.resultWeightTargetBmi');

let dropdownLink = document.querySelectorAll('.dropdownLink');

let dropdownCalc = document.querySelector('.dropdownCalculator');
let dropdownArrow = document.querySelector('.fa-chevron-down');
let dropdownHeader = document.querySelector('.dropdownHeader');

let underlineCalc = document.querySelectorAll('.underlineCalc')

let ymcaInputs = document.querySelectorAll('.ymcaInput')
let ymcaGenderSelect = document.querySelector('.ymcaGenderSelect');
let ymcaResultBtn = document.querySelector('.ymcaResultBtn');

let resultWeightTargetYmca = document.querySelector('.resultWeightTargetYmca')

let calcs = document.querySelectorAll('.calc');

let faqquestion = document.querySelectorAll('.FAQQuestion');
let expand = document.querySelectorAll('.fa-plus');
let rollUp = document.querySelectorAll('.fa-minus');

let genderIconLink = document.querySelectorAll('.genderIconLink')

let kcalCalcListElementActivity = document.querySelectorAll('.kcalCalcListElementActivity');
let kcalCalcListElementTarget = document.querySelectorAll('.kcalCalcListElementTarget');
let activityDropdown = document.querySelector('.activityDropdown');
let targetDropdown = document.querySelector('.targetDropdown');
let arrowKcalDetailsList = document.querySelectorAll('.arrowKcalDetailsList')

let detailsListElement = document.querySelector('.detailsListElement')

let choosenActivity = kcalCalcListElementActivity[0].querySelector('.choosenActivity');
let choosenTarget = kcalCalcListElementTarget[0].querySelector('.choosenTarget');

let choosenActivityElement = document.querySelector('.choosenActivityElement');

activityPlaceholder = document.querySelector('.activityPlaceholder');
targetPlaceholder = document.querySelector('.targetPlaceholder');

let menuLink = document.querySelectorAll('.menuLink')

let nextArrow = document.querySelector('.nextArrow')
let previousArrow = document.querySelector('.previousArrow')



// let dietCardLink = document.querySelectorAll('.dietCardLink');
let redirectText = document.querySelector('.redirectText');
let modalOwnText = document.querySelector('.modalOwnText');
let modalOwnLink = document.querySelector('.modalOwnLink');
let redirectLink = document.querySelector('.redirectLink');

function modalTextTransform() {
        modalOwnText.classList.add('dietTextHide')
}
function modalTextTransformLeave() {
        modalOwnText.classList.remove('dietTextHide')
}
function redirectTextTransform() {
        redirectText.classList.add('dietTextHide')
}
function redirectTextTransformLeave() {
        redirectText.classList.remove('dietTextHide')
}

redirectLink.addEventListener('mouseover', modalTextTransform)
modalOwnLink.addEventListener('mouseover', redirectTextTransform)
redirectLink.addEventListener('mouseleave', modalTextTransformLeave)
modalOwnLink.addEventListener('mouseleave', redirectTextTransformLeave)


// function

// modal own diet



let table = document.querySelector('#dietTable')
let products = table.querySelectorAll('tr')

let ownTable = document.querySelector('#ownDietTable')

products.forEach(element => {
    element.addEventListener('click', function(){ // każdy kliknięty element tabeli A wywoluje funkcje
                    let ownProducts = ownTable.querySelectorAll('tr')
                    if(!element.classList.contains('addProduct')){
                        element.classList.add('addProduct') 
                        let importElement = element.cloneNode(true);
                        ownTable.appendChild(importElement) // w przypadku pustej tabeli tworzy element w tabeli B jw.
                    }
                    for(i=0; i < ownProducts.length; i++){
                    if(element.className == ownProducts[i].className && element.classList.contains('addProduct')){
                        element.classList.remove('addProduct')
                        ownTable.removeChild(ownProducts[i])
            }
        } 
        emptyOwnDietTable() // empty ownTable header add/remove depends if product is selected          
    })      
});

let ownTableHeader = document.querySelector('.ownTableHeader')

function emptyOwnDietTable () {
    let ownTable = document.querySelector('.ownTable')
    if(ownTable.innerHTML.includes('addProduct')){
        ownTable.classList.add('showOwnTable')
        ownTableHeader.classList.add('hideOwnTableHeader')
    } else {
        ownTable.classList.remove('showOwnTable')
        ownTableHeader.classList.remove('hideOwnTableHeader')
    }
}


function inputValueChange(){
    // console.log('hello');
    let ownTableProducts = ownTable.querySelectorAll('tr')
    ownTableProducts.forEach(element => {
        let dietTableInputs = element.querySelector('.productValueInput')
        let valueChange = element.querySelectorAll('span')
        for(p=0; p < products.length; p++){
            if(products[p].className == element.className)
            {
                element.classList.add('addProduct')
                let productValues = products[p].querySelectorAll('span')
                dietTableInputs.addEventListener('keyup', function(){
                    for(i=0; i < valueChange.length; i++){
                            dietTableInputs.addEventListener('keyup', sumAllValues)
                            dietTableInputs.addEventListener('input', maxLengthInputs)
                            dietTableInputs.addEventListener('input', ownTableError)
                            let valueOfProduct = (productValues[i].innerText/100)*dietTableInputs.value;
                            valueChange[i].innerText = Math.round((valueOfProduct + Number.EPSILON) * 10) / 10;
                        }
                    })
            }
        }
        

        });
    }
    
let tableShadow = document.querySelector('.tableShadow')

let switchOwnTableInput = document.querySelector('.form-check-input')
    
function toggleProductWeight () {
    let ownTableWeight = document.querySelectorAll('.ownTableWeight')
    let ownTableProductName = ownTable.querySelectorAll('.productName')
    let ownTableProductNameHead = document.querySelectorAll('.ownTableProductNameHead')

    // tableShadow.classList.toggle('tableShadowShow')

    if(tableShadow.className.includes('tableShadowShow')){
        tableShadow.classList.remove('tableShadowShow')
        tableShadow.classList.add('tableShadowHide')
    } else {
        tableShadow.classList.remove('tableShadowHide')
        tableShadow.classList.add('tableShadowShow')
    }

    ownTableWeight.forEach(element => {
        if (element.className.includes('ownTableWeightShow')){
            element.classList.remove('ownTableWeightShow')
        } else {
            element.classList.add('ownTableWeightShow')
        }
    });
    ownTableProductName.forEach(element => {
        if (element.className.includes('productNameHide')){
            element.classList.remove('productNameHide')
        } else {
            element.classList.add('productNameHide')
        }
    });
    ownTableProductNameHead.forEach(element => {
        if (element.className.includes('productNameHide')){
            element.classList.remove('productNameHide')
        } else {
            element.classList.add('productNameHide')
        }
    });
}


switchOwnTableInput.addEventListener('click', toggleProductWeight)


// podpięcie pod switcha, logika dzialania (nie dziala gdy powyzej 500px, nie mozna dodawac nowyc eelemetow gdy jest klikniety itd.)



table.addEventListener('click', inputValueChange)
// table.addEventListener('click', loopForTableSpan)

let sumThead = document.querySelector('.sum')

function sumAllValues () {
    let ownTable = document.querySelector('#ownDietTable')
    let ownProducts = ownTable.querySelectorAll('tr')
    let kcalValues = ownTable.querySelectorAll('.kcalValue')
    let proteinValues = ownTable.querySelectorAll('.proteinValue')
    let carbsValues = ownTable.querySelectorAll('.carbsValue')
    let fatValues = ownTable.querySelectorAll('.fatValue')
    let gramValues = ownTable.querySelectorAll('.productValueInput')
    let sumsSpan = sumThead.querySelectorAll('span')
    let totalKcal = 0; 
    let totalProtein = 0; 
    let totalCarbs = 0; 
    let totalFat = 0; 
    let totalGram = 0; 
    console.log(kcalValues);
    for(i=0; i < ownProducts.length; i++){
        totalKcal += Number(kcalValues[i].innerText);
        totalProtein += Number(proteinValues[i].innerText);
        totalCarbs += Number(carbsValues[i].innerText);
        totalFat += Number(fatValues[i].innerText);
        totalGram += Number(gramValues[i].value);
    }
    sumsSpan[1].innerText = Math.round((totalKcal + Number.EPSILON)*100)/100;
    sumsSpan[2].innerText = Math.round((totalProtein + Number.EPSILON)*100)/100;
    sumsSpan[3].innerText = Math.round((totalCarbs + Number.EPSILON)*100)/100;
    sumsSpan[4].innerText = Math.round((totalFat + Number.EPSILON)*100)/100;
    sumsSpan[5].innerText = Math.round((totalGram + Number.EPSILON)*100)/100;
}

table.addEventListener('click', sumAllValues)

function maxLengthInputs(){
    let dietTableInputs = ownTable.querySelectorAll('.productValueInput')
    dietTableInputs.forEach(element => {
        console.log(element.maxLength);
        console.log(element.value);
        element.maxLength = 4;
        if(element.value.length > element.maxLength) {
        element.value = element.value.slice(0, element.maxLength)
        }
        if (element.value.includes('+')){
            console.log('jest -');
        }
});
}

function ownTableError () {
    let dietTableInputs = ownTable.querySelectorAll('.productValueInput')
    dietTableInputs.forEach(element => {
        console.log(element.value);
        element.maxLength = 4;
        if(element.value.charAt(0) == 0 && !element.value =="" || element.value < 0) {
            element.value="";
    }
})}

let searchInput = document.querySelector('#dietInput');


function searchInTable() {
    let filter = searchInput.value.toUpperCase();

    for (i=0; i < products.length; i++){
        productName = products[i].querySelector('.productName');
        if(productName){
            textValue = productName.textContent || productName.innerText;
            if(textValue.toUpperCase().indexOf(filter) > - 1){
                products[i].style.display = "table";
            } else {
                products[i].style.display = "none";
            }
        }
    }
}

searchInput.addEventListener('keyup', searchInTable)



function sortOriginalTableNumber(n){
    let table;
    table = document.querySelector('#dietTable')
    let switching;
    let dir;
    let rows;
    let switchcount = 0;
    let shouldSwitch;
    let x;
    let y;
    switching = true;
    dir = 'asc';
    // let spanValue = document.querySelectorAll('.productValueChange')

    while(switching){
        switching = false;
        rows = table.rows;
        for (i=0; i<(rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].querySelectorAll('td')[n];
            y = rows[i+1].querySelectorAll('td')[n];
            spanValueX = x.querySelector('.productValueChange')
            spanValueY = y.querySelector('.productValueChange')
            if(dir == 'asc'){
                if(Number(spanValueX.innerHTML) > Number(spanValueY.innerHTML)){
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == 'desc'){
                if(Number(spanValueX.innerHTML) < Number(spanValueY.innerHTML)){
                    shouldSwitch = true;
                    break;
                }
            }
        }
        // console.log(shouldSwitch);
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount == 0 && dir =='asc'){
                dir = 'desc';
                switching = true;
            }
        }
    }
}

function sortOriginalTableProductName(n){
    let table;
    table = document.querySelector('#dietTable')
    let switching;
    let dir;
    let rows;
    let switchcount = 0;
    let shouldSwitch;
    let x;
    let y;
    switching = true;
    dir = 'asc';

    while(switching){
        switching = false;
        rows = table.rows;
        for (i=0; i<(rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].querySelectorAll('td')[n];
            y = rows[i+1].querySelectorAll('td')[n];
            if(dir == 'asc'){
                if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == 'desc'){
                if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
                    shouldSwitch = true;
                    break;
                }
            }
        }
        // console.log(shouldSwitch);
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount == 0 && dir =='asc'){
                dir = 'desc';
                switching = true;
            }
        }
    }
}

function sortTable (n) {
    if (n > 0){
        sortOriginalTableNumber(n)
    } else {
        sortOriginalTableProductName(n)
    }
}

function sortOwnTableNumber(n){
    let table;
    table = document.querySelector('#ownDietTable')
    let switching;
    let dir;
    let rows;
    let switchcount = 0;
    let shouldSwitch;
    let x;
    let y;
    switching = true;
    dir = 'asc';
    // let spanValue = document.querySelectorAll('.productValueChange')

    while(switching){
        switching = false;
        rows = table.rows;
        for (i=0; i<(rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].querySelectorAll('td')[n];
            y = rows[i+1].querySelectorAll('td')[n];
            spanValueX = x.querySelector('.productValueChange')
            spanValueY = y.querySelector('.productValueChange')
            weightValueX = x.querySelector('.productValueInput')
            weightValueY = y.querySelector('.productValueInput')
            if(dir == 'asc'){
                if(Number(spanValueX.innerHTML) > Number(spanValueY.innerHTML)){
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == 'desc'){
                if(Number(spanValueX.innerHTML) < Number(spanValueY.innerHTML)){
                    shouldSwitch = true;
                    break;
                }
            }
        }
        // console.log(shouldSwitch);
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount == 0 && dir =='asc'){
                dir = 'desc';
                switching = true;
            }
        }
    }
}

function sortOwnTableProductName(n){
    let table;
    table = document.querySelector('#ownDietTable')
    let switching;
    let dir;
    let rows;
    let switchcount = 0;
    let shouldSwitch;
    let x;
    let y;
    switching = true;
    dir = 'asc';

    while(switching){
        switching = false;
        rows = table.rows;
        for (i=0; i<(rows.length - 1); i++){
            shouldSwitch = false;
            x = rows[i].querySelectorAll('td')[n];
            y = rows[i+1].querySelectorAll('td')[n];
            if(dir == 'asc'){
                if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == 'desc'){
                if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()){
                    shouldSwitch = true;
                    break;
                }
            }
        }
        // console.log(shouldSwitch);
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
            switching = true;
            switchcount ++;
        } else {
            if (switchcount == 0 && dir =='asc'){
                dir = 'desc';
                switching = true;
            }
        }
    }
}

function sortOwnTable (n) {
    if (n > 0){
        sortOwnTableNumber(n)
    } else {
        sortOwnTableProductName(n)
    }
}

let originalTableHead = document.querySelectorAll('.originalTableHead');
let ownTableHead = document.querySelectorAll('.ownTableHead');

let sortArrowNodeList = document.querySelectorAll('.fa-sort-down');

function highlightTableHead (element) {
    if(element.classList.contains('highlightTheadSwitch')) {
        element.classList.add('highlightThead')
        element.classList.remove('highlightTheadSwitch')
    } else {
        element.classList.remove('highlightThead')
        element.classList.add('highlightTheadSwitch')
    }
}
function resetArrows () {
    for(i = 0; i < sortArrowNodeList.length; i++){
        if(sortArrowNodeList[i].classList.contains('arrowSortHide')){
            sortArrowNodeList[i].classList.remove('arrowSortShow')
            sortArrowNodeList[i].classList.remove('arrowSortDesc')
            sortArrowNodeList[i].classList.remove('arrowSortAsc')
        }
        sortArrowNodeList[i].classList.add('arrowSortHide')
    }
}

function sortArrowToggle (sortArrow) {
    sortArrow.classList.remove('arrowSortHide')
    sortArrow.classList.add('arrowSortShow')
        // sortArrow.classList.add('arrowSortAsc')

    if(sortArrow.classList.contains('arrowSortShow')){
        if(sortArrow.classList.contains('arrowSortDesc')){
            sortArrow.classList.add('arrowSortAsc')
            sortArrow.classList.remove('arrowSortDesc')
        } else {
            sortArrow.classList.add('arrowSortDesc')
            sortArrow.classList.remove('arrowSortAsc')
        }
    }
}

originalTableHead.forEach(element => {
    let sortArrow = element.querySelector('.fa-sort-down')
    element.addEventListener('click', function(){
        highlightTableHead(element);
        resetArrows();
        sortArrowToggle(sortArrow);
    })
});

ownTableHead.forEach(element => {
    let sortArrow = element.querySelector('.fa-sort-down')
    element.addEventListener('click', function(){
        highlightTableHead(element);
        resetArrows();
        sortArrowToggle(sortArrow);
    })
});



let modalDietContainer = document.querySelector('.modalDietContainer')

function showModalDiet (){
    modalDietContainer.classList.add('showDisplayModal')
    modalDietContainer.classList.remove('hideDisplayModal')
    addBlurBody()
    addShadowBody()
}

let dietCardLink = document.querySelector('.dietCardLink')

function hideModalDiet () {
    modalDietContainer.classList.add('hideDisplayModal')
    modalDietContainer.classList.remove('showDisplayModal')
    removeBlurBody()
    removeShadowBody()
}

let btnModalExit = modalDietContainer.querySelector('.btnModalExit')

btnModalExit.addEventListener('click', hideModalDiet)


// dietCardLink.addEventListener('click', showModalDiet)

dietCardLink.addEventListener('click', showModalDiet)

// tableHeads.forEach(n => {
//     n.addEventListener('click', sortOriginalTable)
    
// });


function webLoaded () {
    setTimeout(function(){window.scroll({left: 0, top: 700, behavior: 'smooth'})}, 3000)
}

// webLoaded()

function menuLinkActive () {

}

function choosenActivityElementClear() {
    for(i=0; i<kcalCalcListElementActivity.length; i++){
        kcalCalcListElementActivity[i].classList.remove('choosenActivityElement')
    }
}

for (i=1; i<kcalCalcListElementActivity.length; i++) {
    kcalCalcListElementActivity[i].addEventListener('click', choosenActivityElementClear)
}
function choosenTargetElementClear() {
    for(i=0; i<kcalCalcListElementTarget.length; i++){
        kcalCalcListElementTarget[i].classList.remove('choosenTargetElement')
    }
}

for (i=1; i<kcalCalcListElementTarget.length; i++) {
    kcalCalcListElementTarget[i].addEventListener('click', choosenTargetElementClear)
}


function detailsContainerResize (el1, el2, el3, el4, el5) {
    el1.classList.toggle('dropdownKcalCalcActive');  
    el1.classList.toggle('borderActivity');  
    el2.classList.toggle('arrowKcalDetailsListActive');
    el3.classList.toggle('choosenOptionActive');
    el4.classList.remove('choosenActivityElement');
    el5.classList.toggle('detailsListElementBgc')
}

kcalCalcListElementActivity.forEach(element =>
    element.addEventListener('click', function(){
        detailsContainerResize(activityDropdown, arrowKcalDetailsList[0], activityPlaceholder, element, detailsListElement);
        choosenActivity.innerText = element.innerText;
        element.classList.add('choosenActivityElement')
        if (choosenActivity.innerText != "WYBIERZ") {
            activityPlaceholder.classList.add('choosenOptionActive');
            activityDropdown.classList.add('borderActivity');  
        }
        console.log(element);
    }))
    
    kcalCalcListElementTarget.forEach(element =>
        element.addEventListener('click', function(){
        detailsContainerResize(targetDropdown, arrowKcalDetailsList[1], targetPlaceholder, element, detailsListElement);
        choosenTarget.innerText = element.innerText; 
        element.classList.add('choosenTargetElement')
    if (choosenTarget.innerText != "WYBIERZ") {
        targetPlaceholder.classList.add('choosenOptionActive');
        targetDropdown.classList.add('borderActivity');  
    }
    console.log(element);
    }))


function genderSelectFemale () {
    for(i=0; i < genderIconLink.length; i=i+2) {
        genderIconLink[i].classList.add('activeGender')
        genderIconLink[i].classList.remove('unactiveGender')
    }
    for(i=1; i < genderIconLink.length; i=i+2){
        genderIconLink[i].classList.remove('activeGender')
        genderIconLink[i].classList.add('unactiveGender')
    }

}
function genderSelectMale () {
    for(i=0; i < genderIconLink.length; i=i+2) {
        genderIconLink[i].classList.remove('activeGender')
        genderIconLink[i].classList.add('unactiveGender')
    }
    for(i=1; i < genderIconLink.length; i=i+2){
        genderIconLink[i].classList.add('activeGender')
        genderIconLink[i].classList.remove('unactiveGender')
    }

}

for (i=0; i < genderIconLink.length; i=i+2) {
    genderIconLink[i].addEventListener('click', genderSelectFemale)
}
for (i=1; i < genderIconLink.length; i=i+2) {
    genderIconLink[i].addEventListener('click', genderSelectMale)
}




function animateOpacityPlusMinus () {
    opacityAnimate(expand);
    opacityAnimate(rollUp);
}

// faqquestion.addEventListener('click', animateOpacityPlusMinus);

function clearKcalDetailsInfo (el1, el2, el3, el4, el5, el6, el7) {
    el1.classList.remove('dropdownKcalCalcActive');  
    el1.classList.remove('borderActivity');  
    el2.classList.remove('arrowKcalDetailsListActive');
    el3.classList.remove('choosenOptionActive');
    el4.innerText = 'WYBIERZ';
    // choosenActivity.innerText = 'WYBIERZ';
    // choosenTarget.innerText = 'WYBIERZ';
    // kcalCalcListElementActivity[0].classList.remove('choosenActivityElement')
    // kcalCalcListElementTarget[0].classList.remove('choosenActivityElement')
}
 
function clearCalc () {
    for (i = 0; i < calcs.length; i++) {
        result[i].classList.remove('resultShow');
        resultFullText[i].classList.remove('activeResult');
    }
    calcInputs.forEach(element => {
        element.value ="";
        element.classList.remove('activeInput')
        console.log(element);
    });
    selectActivityForm.forEach(element => {
        element.classList.remove('activeInput');
        element.options.selectedIndex = 0;
        console.log(element);
    })
    genderIconLink.forEach(element=> {
        element.classList.remove('activeGender')
        element.classList.remove('unactiveGender')
        console.log(element);
    })

    clearKcalDetailsInfo(activityDropdown, arrowKcalDetailsList[0], activityPlaceholder, choosenActivity);
    clearKcalDetailsInfo(targetDropdown, arrowKcalDetailsList[1], targetPlaceholder, choosenTarget);
}


function ymcaCalc () {
    let weight = ymcaInputs[0].value;
    let waist = ymcaInputs[1].value;
    let ymcaResult;
    result[2].classList.add('resultShow');
    let a = 4.15 * waist
    let b = a/2.54
    let c = 0.082 * weight * 2.2
    let e = weight * 2.2
    if((genderIconLink[4].classList.contains('activeGender') || genderIconLink[5].classList.contains('activeGender')) && ymcaInputs[0].value != "" && ymcaInputs[1].value != "" && ymcaInputs[0].value.match(numbers)){
        resultFullText[2].classList.add('activeResult');
        if(genderIconLink[5].classList.contains('activeGender')){
            let d = b - c - 98.42
            ymcaResult = d/e * 100
            if(ymcaResult < 7 && resultWeightTargetYmca.textContent != "niedowagę"){
                opacityAnimate(resultFullText[2]);
                resultWeightTargetYmca.textContent = "niedowagę"
            }else if(ymcaResult > 20 && resultWeightTargetYmca.textContent != "nadwagę"){
                resultWeightTargetYmca.textContent = "nadwagę"
                opacityAnimate(resultFullText[2]);
            } else if (ymcaResult >= 7 && ymcaResult <= 20 && resultWeightTargetYmca.textContent != "wagę prawidłową"){
                resultWeightTargetYmca.textContent = "wagę prawidłową"
                opacityAnimate(resultFullText[2]);
            }
            highlightedResult[2].textContent = ymcaResult.toFixed(2);
            resultBtnHref(result[2]);
            
        } else if (genderIconLink[4].classList.contains('activeGender')) {
            let d = b - c - 76.76
            ymcaResult = d/e * 100
            // activeCalcShow();
            if(ymcaResult < 21 && resultWeightTargetYmca.textContent != "niedowagę"){
                resultWeightTargetYmca.textContent = "niedowagę"
                opacityAnimate(resultFullText[2]);
            }else if(ymcaResult > 33 && resultWeightTargetYmca.textContent != "nadwagę"){
                resultWeightTargetYmca.textContent = "nadwagę"
                opacityAnimate(resultFullText[2]);
            } else if (ymcaResult >= 21 && ymcaResult <= 33 && resultWeightTargetYmca.textContent != "wagę prawidłową") {
                resultWeightTargetYmca.textContent = "wagę prawidłową"
                opacityAnimate(resultFullText[2]);
            }
            highlightedResult[2].textContent = ymcaResult.toFixed(2);
            resultBtnHref(result[2]);
            
        }                  
        } else {
            resultFullText[2].classList.remove('activeResult');
        }
        console.log(ymcaResult);
};

ymcaResultBtn.addEventListener('click', ymcaCalc)

function calcDropdownHeightChange () {
    dropdownCalc.classList.toggle('dropdownHeightChange')
    dropdownArrow.classList.toggle('dropdownArrowChange')
}

dropdownHeader.addEventListener('click',calcDropdownHeightChange)




function activeCalcHref() {
    setTimeout(function(){location.href = "#activeCalc";}, 500)
}
function activeCalcShow () {
    activeCalc.classList.add('activeCalcShow')
    // kcalHeightChangeCalcInputs();
}

function displayKcalCalc () {
    bmiCalcContainer.classList.remove('calcDisplay');
    ymcaCalcContainer.classList.remove('calcDisplay');
    kcalCalcContainer.classList.add('calcDisplay');
    // underlineCalc[0].classList.add('activeDropdownLink');
    // underlineCalc[1].classList.remove('activeDropdownLink');
    // underlineCalc[2].classList.remove('activeDropdownLink');
    dropdownLink[0].classList.add('activeDropdownLinkColor')
    dropdownLink[1].classList.remove('activeDropdownLinkColor')
    dropdownLink[2].classList.remove('activeDropdownLinkColor')
    activeCalcHref();
    // kcalHeightChangeCalcInputs();
    // activeCalcShow();
    clearCalc();
}
function displayBmiCalc () {
    kcalCalcContainer.classList.remove('calcDisplay')
    ymcaCalcContainer.classList.remove('calcDisplay')
    bmiCalcContainer.classList.add('calcDisplay')
    // bmiHeightChangeCalcInputs();
    // underlineCalc[0].classList.remove('activeDropdownLink');
    // underlineCalc[1].classList.add('activeDropdownLink');
    // underlineCalc[2].classList.remove('activeDropdownLink');
    dropdownLink[0].classList.remove('activeDropdownLinkColor')
    dropdownLink[1].classList.add('activeDropdownLinkColor')
    dropdownLink[2].classList.remove('activeDropdownLinkColor')
    clearCalc();
    activeCalcHref();
    // bmiHeightChangeCalcInputs();
    // activeCalcHref();
}
function displayYmcaCalc () {
    bmiCalcContainer.classList.remove('calcDisplay')
    kcalCalcContainer.classList.remove('calcDisplay')
    ymcaCalcContainer.classList.add('calcDisplay')
    // ymcaHeightChangeCalcInputs();
    // activeCalcShow();
    // underlineCalc[0].classList.remove('activeDropdownLink');
    // underlineCalc[1].classList.remove('activeDropdownLink');
    // underlineCalc[2].classList.add('activeDropdownLink');
    dropdownLink[0].classList.remove('activeDropdownLinkColor')
    dropdownLink[1].classList.remove('activeDropdownLinkColor')
    dropdownLink[2].classList.add('activeDropdownLinkColor')
    clearCalc();
    // ymcaHeightChangeCalcInputs();
    activeCalcHref();
}


dropdownLink[0].addEventListener('click', displayKcalCalc)
dropdownLink[1].addEventListener('click', displayBmiCalc)
dropdownLink[2].addEventListener('click', displayYmcaCalc)
// // dropdownLink[0].addEventListener('click', kcalHeightChangeCalcInputs)

function bmiCalc () {
    let weight = bmiInputs[0].value;
    let height = bmiInputs[1].value / 100;
    let bmiResult = weight / (height * height);
    result[1].classList.add('resultShow');
    resultFullText[1].classList.remove('activeResult');
    opacityAnimate(resultFullText[1])
    if((genderIconLink[2].classList.contains('activeGender') || genderIconLink[3].classList.contains('activeGender')) && bmiInputs[0].value != "" && bmiInputs[1].value != "" && bmiInputs[0].value.match(numbers)){
        resultFullText[1].classList.add('activeResult');
        highlightedResult[1].textContent = bmiResult.toFixed(2)
        resultBtnHref(result[1]);
        if(genderIconLink[2].classList.contains('activeGender')){
            if(bmiResult < 20.1 && resultWeightTargetBmi.textContent != "niedowagę"){
                resultWeightTargetBmi.textContent = "niedowagę"
            }else if(bmiResult > 25.9 && resultWeightTargetBmi.textContent != "nadwagę"){
                resultWeightTargetBmi.textContent = "nadwagę"
                // opacityAnimate(resultFullText[1])
            } else if (bmiResult >= 20.1 && bmiResult <= 25.9 && resultWeightTargetBmi.textContent != "wagę prawidłową") {
                resultWeightTargetBmi.textContent = "wagę prawidłową"
                // opacityAnimate(resultFullText[1])
            }
            
        } else if (genderIconLink[3].classList.contains('activeGender')) {
            if(bmiResult < 18.5 && resultWeightTargetBmi.textContent != "niedowagę"){
                resultWeightTargetBmi.textContent = "niedowagę"
                // opacityAnimate(resultFullText[1])
            }else if(bmiResult > 24.9 && resultWeightTargetBmi.textContent != "nadwagę"){
                resultWeightTargetBmi.textContent = "nadwagę"
                // opacityAnimate(resultFullText[1])
            } else if (bmiResult >= 18.5 && bmiResult <= 24.9 && resultWeightTargetBmi.textContent != "wagę prawidłową") {
                resultWeightTargetBmi.textContent = "wagę prawidłową"
                // opacityAnimate(resultFullText[1])
            }
        }
    } else {
        resultFullText[1].classList.remove('activeResult');
        errorPopUpShow();
    }


    // resultWeightTarget.textContent = "nadwagę"
    console.log(bmiResult); 

}

bmiResultBtn.addEventListener('click', bmiCalc)


let selectActivityForm = document.querySelectorAll('.activity-form');

function selectInputBorders(){
    selectActivityForm.forEach(element => {
        if(element.value != 'chooseOption'){
            element.classList.add('activeInput')
            console.log(element);
        } else {
            element.classList.remove('activeInput')
            console.log(element);
        }
        
    });
}

for (i = 0; i < selectContainer.length; i++){
    selectContainer[i].addEventListener('click', selectInputBorders)
    selectContainer[i].addEventListener('keyup', selectInputBorders)
}

let errorPopUp = document.querySelector('.errorPopUp')
let errorShadow = document.querySelector('.errorShadow')

let errorConfirm = document.querySelector('.errorConfirm')
// let errorExit = document.querySelector('.errorExit')

let wrapper = document.querySelector('.wrapper')

function addBlurBody() {
    wrapper.classList.remove('errorBlurClose')
    wrapper.classList.add('errorBlurShow')
}

function removeBlurBody() {
    wrapper.classList.remove('errorBlurShow')
    wrapper.classList.add('errorBlurClose')
}

function addShadowBody () {
    errorShadow.classList.add('errorShadowShow')
    errorShadow.classList.remove('errorShadowClose')
}

function removeShadowBody () {
    errorShadow.classList.remove('errorShadowShow')
    errorShadow.classList.add('errorShadowClose')
    
}

function errorClose() {
    errorPopUp.classList.remove('errorPopUpShow')
    errorPopUp.classList.add('errorPopUpClose')
    removeBlurBody()
    removeShadowBody()
}

function errorPopUpShow() {
    errorPopUp.classList.remove('errorPopUpCLose')
    errorPopUp.classList.add('errorPopUpShow')
    addBlurBody()
    addShadowBody()
}
errorConfirm.addEventListener('click', errorClose)
// errorExit.addEventListener('click', errorClose)

// kcalResultBtn.addEventListener('click', errorPopUpShow)


function isNotANumber(){
    calcInputs.forEach(element => {
        if(isNaN(element.value)){
            console.log('to nie liczba!');
            element.value = ""
        } else {
            console.log('jest gituwa');
        }

    })
}

function calcBorders () {
    calcInputs.forEach(element => {
        if(element.value !== ""){
            element.classList.add('activeInput');
            // isNotANumber(element)
        } else {
            element.classList.remove('activeInput')
        }
        
    });
}

for (let i = 0; i < calcInputs.length; i++){
    calcInputs[i].addEventListener('focus', calcBorders)
    calcInputs[i].addEventListener('focusout', calcBorders)
    calcInputs[i].addEventListener('keyup', isNotANumber)
}

// calcInputs[0].addEventListener('keyup', ageInputsBorders)
// calcInputs[1].addEventListener('keyup', weightInputsBorders)
// calcInputs[2].addEventListener('keyup', heightInputsBorders)

function opacityAnimate(el) {
    el.animate([
        {opacity: 0},
        {opacity: 1}
    ], {
        duration: 1000,
        iterations: 1
    });
}
// function heightAnimate(el) {
//     el.animate([
//         {'max-height': '650px'},
//         {'max-height': '1000px'}
//     ], {
//         duration: 1000,
//         iterations: 1
//     });
// 

// function kcalResultBtnHref (){
    //     setTimeout(function(){location.href = "#kcalGender";}, 400)
    // }
    // function bmiResultBtnHref (){
        //     setTimeout(function(){location.href = "#bmiResultBtn";}, 400)
        // }
        // function ymcaResultBtnHref (){
            //     setTimeout(function(){location.href = "#ymcaResultBtn";}, 400)
            // }

// function kcalResultBtnHref () {
//     const windowPos = window.scrollY
//     const resultKcalScrollPosition = windowPos+result[0].getBoundingClientRect().top-(window.innerWidth/2)
//     setTimeout(function(){window.scroll(0, resultKcalScrollPosition)}, 300)  
// }
// function bmiResultBtnHref () {
//     const windowPos = window.scrollY
//     const resultKcalScrollPosition = windowPos+result[1].getBoundingClientRect().top-(window.innerWidth/2)
//     setTimeout(function(){window.scroll(0, resultKcalScrollPosition)}, 300)
    
// }
// function ymcaResultBtnHref () {
//     const windowPos = window.scrollY
//     const resultKcalScrollPosition = windowPos+result[2].getBoundingClientRect().top-(window.innerWidth/2)
//     setTimeout(function(){window.scroll(0, resultKcalScrollPosition)}, 300)
  
// }
function resultBtnHref (el) {
    const windowPos = window.scrollY
    const resultKcalScrollPosition = windowPos+el.getBoundingClientRect().top-(window.innerHeight/2)
    setTimeout(function(){window.scroll(0, resultKcalScrollPosition)}, 300)
  
}

// kcalResultBtn.onClick = function(){
//     setTimeout(function(){location.href = "#kcalResultId";}, 1000)
// }

// result.forEach(element => {
//     element.addEventListener('click', function(){
//     const windowPos = window.scrollY
//     const resultKcalScrollPosition = windowPos+result[2].getBoundingClientRect().top-(window.innerWidth/2)
//     setTimeout(function(){window.scroll(0, resultKcalScrollPosition)}, 300)
//     })
    
// });

// kcalResultBtn.addEventListener('click', kcalResultBtnHref)
// bmiResultBtn.addEventListener('click', bmiResultBtnHref)
// ymcaResultBtn.addEventListener('click', ymcaResultBtnHref)

let activityIndicator;
let targetIndicator;
// console.log(choosenActivityElement.value);

function activityValue() {
    
    kcalCalcListElementActivity[0].value = 1.2;
    kcalCalcListElementActivity[1].value = 1.2;
    kcalCalcListElementActivity[2].value = 1.4;
    kcalCalcListElementActivity[3].value = 1.6;
    kcalCalcListElementActivity[4].value = 1.8;
    kcalCalcListElementActivity[5].value = 2.0;
    // console.log(choosenActivityElement.value);
    console.log(kcalCalcListElementActivity[1].value);

    for(i=1; i < kcalCalcListElementActivity.length; i++) {
        if (kcalCalcListElementActivity[i].classList.contains('choosenActivityElement')){
            let activityIndicator = kcalCalcListElementActivity[i].value
            return activityIndicator;
            // console.log(activityIndicator);
        }
    }
}
function targetValue() {
    
    kcalCalcListElementTarget[1].value = 0.9;
    kcalCalcListElementTarget[2].value = 1.1;
    kcalCalcListElementTarget[3].value = 1;

    for(i=1; i < kcalCalcListElementTarget.length; i++) {
        if (kcalCalcListElementTarget[i].classList.contains('choosenTargetElement')){
            let targetIndicator = kcalCalcListElementTarget[i].value
            return targetIndicator;
            // console.log(activityIndicator);
        }
    }
}


function kcalCalc () {
    activityIndicator = activityValue();
    targetIndicator = targetValue();
    result[0].classList.add('resultShow');
    if(
        (genderIconLink[0].classList.contains('activeGender') || genderIconLink[1].classList.contains('activeGender')) && choosenActivity.innerText != 'WYBIERZ' && choosenActivity.innerText != 'WYBIERZ' && calcInputs[0].value != "" && calcInputs[1].value != "" && calcInputs[2].value != "" && calcInputs[0].value.match(numbers) && calcInputs[1].value.match(numbers) && calcInputs[2].value.match(numbers)
        && calcInputs[0].value.charAt(0) != 0 && calcInputs[1].value.charAt(0) != 0 && calcInputs[2].value.charAt(0) != 0
        ){
            console.log(activityIndicator);
            if(genderIconLink[0].classList.contains('activeGender')){
                let bmr = (((((9.99 * calcInputs[1].value) + (6.25 * calcInputs[2].value) - (4.92 * calcInputs[0].value) - 161)) * activityIndicator * targetIndicator));
                if(bmr > 500) {
                    console.log(bmr);
                    // kcalCalcWrapper.classList.add('calcInputHeight');
                    // gapInputs[0].classList.remove('activeResult');
                    resultFullText[0].classList.add('activeResult');
                    if(highlightedResult[0].textContent != bmr.toFixed(0)){
                        opacityAnimate(highlightedResult[0]);
                    }
                    highlightedResult[0].textContent = bmr.toFixed(0); 
                    console.log('PRZED stracic na wadze');
                    if (targetIndicator == 0.9 && resultWeightTarget.textContent != 'stracić na wadze'){
                        // resultWeightTarget.classList.add('highlightedOpacityShow')
                        console.log('stracic na wadze');
                        
                        resultWeightTarget.textContent = 'stracić na wadze';
                        opacityAnimate(resultFullText[0]);
                        
                        
                    } else if (targetIndicator == 1.1 && resultWeightTarget.textContent != 'przytyć'){
                        // resultWeightTarget.classList.add('highlightedOpacityShow')
                        resultWeightTarget.textContent = 'przytyć';
                        opacityAnimate(resultFullText[0]);
                    } else if (targetIndicator == 1.0 && resultWeightTarget.textContent != 'utrzymać wagę'){
                        // resultWeightTarget.classList.add('highlightedOpacityShow')
                        // opacityAnimate(resultWeightTarget);
                        resultWeightTarget.textContent = 'utrzymać wagę';
                        opacityAnimate(resultFullText[0]);
                    }
                    resultBtnHref(result[0]);
                    // result[0].classList.add('resultShow');
                    // result[1].classList.remove('resultShow');
                } else {
                    // kcalCalcWrapper.classList.remove('calcInputHeight');
                    // kcalCalcWrapper.classList.add('calcInputHeightError');
                    resultFullText[0].classList.remove('activeResult');
                    // gapInputs[0].textContent = `Nie sądzę, że masz ${calcInputs[0].value}lat(a), ${calcInputs[1].value}kg wagi i ${calcInputs[2].value}cm wzrostu?`
                    // gapInputs[0].classList.add('activeResult');
                    // result[0].classList.add('errorResult');
                    result[0].classList.remove('resultShow');
                    // result[1].classList.add('resultShow');
                    
                }
            } else if (genderIconLink[1].classList.contains('activeGender')) {
                let bmr = (((((9.99 * calcInputs[1].value) + (6.25 * calcInputs[2].value) - (4.92 * calcInputs[0].value) + 5)) * activityIndicator) * targetIndicator);
                if(bmr > 500) {
                    console.log(bmr);
                    // kcalCalcWrapper.cassList.add('calcInputHeight');
                    // gapInputs[0].classList.remove('activeResult');
                    resultFullText[0].classList.add('activeResult');
                    // kcalCalcWrapper.classList.add('calcInputHeight');
                    // highlightedResult[0].textContent = bmr.toFixed(0); 
                    // result[1].classList.remove('resultShow');
                    // result[0].classList.add('resultShow');
                    if(highlightedResult[0].textContent != bmr.toFixed(0)){
                        opacityAnimate(highlightedResult[0]);
                    }
                    highlightedResult[0].textContent = bmr.toFixed(0); 
                    if (targetIndicator == 0.9 && resultWeightTarget.textContent != 'stracić na wadze'){
                        // resultWeightTarget.classList.add('highlightedOpacityShow')
                        
                        opacityAnimate(resultFullText[0]);
                        resultWeightTarget.textContent = 'stracić na wadze';
                        
                        
                    } else if (targetIndicator == 1.1 && resultWeightTarget.textContent != 'przytyć'){
                        // resultWeightTarget.classList.add('highlightedOpacityShow')
                        resultWeightTarget.textContent = 'przytyć';
                        opacityAnimate(resultFullText[0]);
                    } else if (targetIndicator == 1.0 && resultWeightTarget.textContent != 'utrzymać wagę'){
                        // resultWeightTarget.classList.add('highlightedOpacityShow')
                        // opacityAnimate(resultWeightTarget);
                        resultWeightTarget.textContent = 'utrzymać wagę';
                        opacityAnimate(resultFullText[0]);
                    }
                    resultBtnHref(result[0]);
                } else {
                    errorPopUpShow();
                    // kcalCalcWrapper.classList.remove('calcInputHeight');
                    // kcalCalcWrapper.classList.add('calcInputHeightError');
                    // wrongInputs[0].classList.remove('activeResult')
                    // gapInputs[0].textContent = `Na pewno masz ${calcInputs[0].value}lat(a), ${calcInputs[1].value}kg wagi i ${calcInputs[2].value}cm wzrostu?`
                    // gapInputs[0].classList.add('activeResult');
                    // console.log(bmr);
                    result[0].classList.remove('resultShow');
                    // result[1].textContent = `Jesteś pewien, że masz ${calcInputs[0].value} lat(a), ${calcInputs[1].value} kg i ${calcInputs[2].value} cm wzrostu? Nie sondze`
                    // result[1].classList.add('resultShow');
                    
                }
            }
        } else {
            errorPopUpShow();
            // alert('wprowadz poprawne dane')
            // result[1].textContent = `Uzupełnił wszystkie pola lub wpisz poprawne
            // wartości!`
            result[0].classList.remove('resultShow');
            // result[1].classList.add('resultShow');
            // kcalCalcWrapper.classList.add('calcInputHeightError');
            resultFullText[0].classList.remove('activeResult');
            // gapInputs[0].classList.remove('activeResult');
            // // kcalCalcWrapper.classList.remove('calcInputHeight');
            // wrongInputs[0].classList.add('activeResult')
        
    }
    // console.log(activitySelect.options[2].value);
};

kcalResultBtn.addEventListener('click', kcalCalc);




function articlesPageTwo () {
    pageArticle[1].classList.add('activePage')
    pageArticle[0].classList.remove('activePage')
    pageTwo.classList.add('active')
    pageOne.classList.remove('active')
    // pageOne.classList.toggle('unactivePageOne')
    // pageTwo.classList.toggle('activePageTwo')
}
function articlesPageOne () {
    pageArticle[0].classList.add('activePage')
    pageArticle[1].classList.remove('activePage')
    pageOne.classList.add('active')
    pageTwo.classList.remove('active')
    // pageTwo.classList.toggle('activePageTwo')
}

// function articlesPagesNext () {
//     for (i = 0; i < pageArticle.length; i++){
//         if(pageArticle[i].className.includes('activePage')){
//             pageArticle[i+1].classList.add('activePage');
//             pageArticle[i].classList.remove('activePage');
//         } 

//     }
// }

// let i = 0;
// let o = (pageArticle.length - 1)

let pageItem = document.querySelectorAll('.page-item')

function articlesPagesNext () {
    if(nextArrow.className.includes('paginationLeft')){
        nextArrow.classList.remove('paginationLeft')
        nextArrow.classList.add('repeatPaginationLeft')
    } else  {
        nextArrow.classList.remove('repeatPaginationLeft')
        nextArrow.classList.add('paginationLeft')
    }
    for (i = 0; i < (pageArticle.length - 1); i++){
            if(pageArticle[i].className.includes('activePage') && i < (pageArticle.length - 1)){
                pageArticle[i+1].classList.add('activePage');
                pageArticle[i].classList.remove('activePage');
                pageNumber[i+1].classList.add('active');
                pageNumber[i].classList.remove('active');
                break;
            }

        }
    }
function articlesPagesPrevious () {
    if(previousArrow.className.includes('paginationRight')){
        previousArrow.classList.remove('paginationRight')
        previousArrow.classList.add('repeatPaginationRight')
    } else  {
        previousArrow.classList.remove('repeatPaginationRight')
        previousArrow.classList.add('paginationRight')
    }
    for (i = (pageArticle.length-1); i > 0; i--){
        if(pageArticle[i].className.includes('activePage') && i > 0){
            pageArticle[i-1].classList.add('activePage');
            pageArticle[i].classList.remove('activePage');
            pageNumber[i-1].classList.add('active');
            pageNumber[i].classList.remove('active');
            break;
        }
    }
}
// function articlesPagesNext () {
//         if(pageArticle.some(item => item.class === 'activePage')){
//             pageArticle[i+1].classList.add('activePage');
//             pageArticle[i].classList.remove('activePage');
//             console.log(i);
//             i++
//         } else if (i < (pageArticle.length - 1)){
//             i++;
//         }
// }
// function articlesPagesPrevious () {
//         if(pageArticle[o].className.includes('activePage') && o > 0){
//             pageArticle[o-1].classList.add('activePage');
//             pageArticle[o].classList.remove('activePage');
//             console.log(o);
//             o--;
//         } else if (o > 0) {
//             o--;
//         }
// }
// console.log(o);


// function articlesPagesNext() {
//     let i = 0;
//     do {
//         pageArticle[i+1].classList.add('activePage');
//         pageArticle[i].classList.remove('activePage');
//         console.log(i);
//         i++;
//         if(pageArticle[i].className.includes('activePage')){
//             break;
//         }
//     } while (i < (pageArticle.length - 1));
// }

pageNext.addEventListener('click', articlesPagesNext)
pagePrevious.addEventListener('click', articlesPagesPrevious)

pageTwo.addEventListener('click', articlesPageTwo)
pageOne.addEventListener('click', articlesPageOne)

// let x = 0;
// ;
// console.log(pageArticle[x].classList);
// console.log(pageArticle[x].classList.remove('activePage'));
// console.log(pageArticle[x].classList);
// console.log(pageArticle[x+1].classList.add('activePage'));
// console.log(pageArticle[x+1].classList);



function removeAllChildsArticles () {
    let removeAllChilds = activeArticle.querySelector("div");
    activeArticle.removeChild(removeAllChilds);
}

function firstArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(podstawyArticle);
    opacityAnimate(podstawyArticle);
}
function secondArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(cwiczeniaArticle);
    opacityAnimate(cwiczeniaArticle);
}
function thirdArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(zmeczenieArticle);
    opacityAnimate(zmeczenieArticle);
}
function fourthArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(saunaArticle);
    opacityAnimate(saunaArticle);
}
function fifthArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(bledyArticle);
    opacityAnimate(bledyArticle);
}
function sixthArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(postanowieniaArticle);
    opacityAnimate(postanowieniaArticle);
}



artCards[0].addEventListener('click', sixthArticle);
artCards[1].addEventListener('click', fifthArticle);
artCards[2].addEventListener('click', fourthArticle);
artCards[3].addEventListener('click', thirdArticle);
artCards[4].addEventListener('click', secondArticle);
artCards[5].addEventListener('click', firstArticle);





// artCards.forEach(element => {
//     element.addEventListener('click', function(element) {
//         removeAllChildsArticles();
//         activeArticle.appendChild(element);
//         opacityAnimate(element)    
//     })
// });

// artCards.forEach(element => {
//     element.addEventListener('click', function() {
//         console.log('cośtam coś tam' + element)
//     }
// )})




document.addEventListener('DOMContentLoaded', function () {
    let allFas = document.querySelectorAll('.menuIcon')
    
    console.log(allFas[0]);
    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
            top: rect.top + window.scrollY - 100
        };
    }
    // console.log(getOffset(about).top);
    
    function addActiveSection() {

        if(window.scrollY >= -100 && window.scrollY < getOffset(motivationSection).top){
            allFas[0].classList.remove('activeSection')
            allFas[1].classList.remove('activeSection');
            allFas[2].classList.remove('activeSection');
            allFas[3].classList.remove('activeSection');
            allFas[4].classList.remove('activeSection');
        } else if (window.scrollY > getOffset(motivationSection).top && window.scrollY < getOffset(articlesListSection).top) {
            allFas[0].classList.add('activeSection');
            allFas[1].classList.remove('activeSection');
            allFas[2].classList.remove('activeSection');
            allFas[3].classList.remove('activeSection');
        } else if (window.scrollY >= getOffset(articlesListSection).top && window.scrollY < getOffset(trainingsSection).top) {
            allFas[1].classList.add('activeSection');
            allFas[0].classList.remove('activeSection');
            allFas[2].classList.remove('activeSection');
            allFas[3].classList.remove('activeSection');
            allFas[4].classList.remove('activeSection');
        } else if (window.scrollY >= getOffset(trainingsSection).top && window.scrollY < getOffset(dietSection).top) {
            allFas[2].classList.add('activeSection');
            allFas[1].classList.remove('activeSection');
            allFas[0].classList.remove('activeSection');
            allFas[3].classList.remove('activeSection');
            allFas[4].classList.remove('activeSection');
        } else if (window.scrollY >= getOffset(dietSection).top && window.scrollY < getOffset(calculatorSection).top) {
            allFas[3].classList.add('activeSection');
            allFas[1].classList.remove('activeSection');
            allFas[2].classList.remove('activeSection');
            allFas[0].classList.remove('activeSection');
            allFas[4].classList.remove('activeSection');
        } else if (window.scrollY >= getOffset(calculatorSection).top) {
            allFas[4].classList.add('activeSection');
            allFas[3].classList.remove('activeSection');
            allFas[1].classList.remove('activeSection');
            allFas[2].classList.remove('activeSection');
            allFas[0].classList.remove('activeSection');
        }
        if(window.scrollY >= -100 && window.scrollY < getOffset(motivationSection).top){
            menuLink[0].classList.remove('menuLinkActive')
            menuLink[1].classList.remove('menuLinkActive');
            menuLink[2].classList.remove('menuLinkActive');
            menuLink[3].classList.remove('menuLinkActive');
            menuLink[4].classList.remove('menuLinkActive');
        } else if (window.scrollY > getOffset(motivationSection).top && window.scrollY < getOffset(articlesListSection).top) {
            menuLink[0].classList.add('menuLinkActive');
            menuLink[1].classList.remove('menuLinkActive');
            menuLink[2].classList.remove('menuLinkActive');
            menuLink[3].classList.remove('menuLinkActive');
            menuLink[4].classList.remove('menuLinkActive');
        } else if (window.scrollY >= getOffset(articlesListSection).top && window.scrollY < getOffset(trainingsSection).top) {
            menuLink[1].classList.add('menuLinkActive');
            menuLink[0].classList.remove('menuLinkActive');
            menuLink[2].classList.remove('menuLinkActive');
            menuLink[3].classList.remove('menuLinkActive');
            menuLink[4].classList.remove('menuLinkActive');
        } else if (window.scrollY >= getOffset(trainingsSection).top && window.scrollY < getOffset(dietSection).top) {
            menuLink[2].classList.add('menuLinkActive');
            menuLink[1].classList.remove('menuLinkActive');
            menuLink[0].classList.remove('menuLinkActive');
            menuLink[3].classList.remove('menuLinkActive');
            menuLink[4].classList.remove('menuLinkActive');
        } else if(window.scrollY >= getOffset(dietSection).top && window.scrollY < getOffset(calculatorSection).top) {
            menuLink[3].classList.add('menuLinkActive');
            menuLink[2].classList.remove('menuLinkActive');
            menuLink[1].classList.remove('menuLinkActive');
            menuLink[0].classList.remove('menuLinkActive');
            menuLink[4].classList.remove('menuLinkActive');
        } else if (window.scrollY >= getOffset(calculatorSection).top) {
            menuLink[4].classList.add('menuLinkActive');
            menuLink[1].classList.remove('menuLinkActive');
            menuLink[2].classList.remove('menuLinkActive');
            menuLink[0].classList.remove('menuLinkActive');
            menuLink[3].classList.remove('menuLinkActive');
        }
    }
    window.addEventListener('scroll', addActiveSection)
    
});




function whatScrollY() {
    console.log(window.scrollY);
}



// whatScrollY();
// addActiveSection();

window.addEventListener('click', whatScrollY)

function rollUpArticles() {
    activeArticle.classList.remove('heightReset');
    dropdownArticles.classList.remove('dropdownHeight');
    spanExtend.classList.remove('dropdownSpanChange');
    // spanExtend.classList.add('opacityChange');
    spanRollUp.classList.remove('clickToRollShow');
    aRollUp.classList.remove('zIndex');
};

function extendArticles() {
    activeArticle.classList.add('heightReset');
    dropdownArticles.classList.add('dropdownHeight');
    spanExtend.classList.add('dropdownSpanChange');
    spanRollUp.classList.add('clickToRollShow');
    aRollUp.classList.add('zIndex');
};



spanExtend.addEventListener('click', extendArticles);
aRollUp.addEventListener('click', rollUpArticles);

function menuBarsAnimation() {
    menuIconBars.classList.toggle('animationBars')
}

function quoteIconRefresh() {
    if (iconRefresh.className.includes('transformIcons')) {
        iconRefresh.classList.remove('transformIcons')
        iconRefresh.classList.add('nextTransformIcons')
    } else {
        iconRefresh.classList.remove('nextTransformIcons')
        iconRefresh.classList.add('transformIcons')
    }
}

function collapse() {
    if (collapseMenu.className.includes('activateCollapse')) {
        collapseMenu.classList.remove('activateCollapse')
    } else {
        collapseMenu.classList.add('activateCollapse')
    }
    menuBarsAnimation();
}
// function removeAnimation () {
//     menuBars.classList.remove('animationBars')
// }

menuBars.addEventListener('click', collapse)
// menuBars.addEventListener('click', removeAnimation)




function rmath(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0)
};

// console.log(rmath(0, 2));

let z = rmath(0, (quotesAll.length - 1));

function randomQuoteRefresh() {
    // let z = rmath(0, 6);
    // activeQuote.removeChild(quotesAll[z]);
    // for (i = 0; i < 7; i++) {
    //     activeQuote.removeChild(quotesAll[i])
    // }
    // activeQuote.appendChild(quotesAll[rmath(0, quotesAll.length)])
    // activeQuote.appendChild(quotesAll[rmath(0, 6)])
    activeQuote.appendChild(quotesAll[z])
    console.log(quotesAll[z])
    // console.log(quotesAll[rmath(0, 6)]);
    // activeQuote.appendChild(quoteChange)
}

function removeAllChilds(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
//removing all childs
console.log(z);
w = z;
console.log(w);

function move() {
    // console.log(y);
    // activeQuote.removeChild(quotesAll[z])
    removeAllChilds(activeQuote);
    console.log(w);
    let y;
    do {
        y = rmath(0, (quotesAll.length - 1));
    } while (y == w)
    activeQuote.appendChild(quotesAll[y])
        .animate([{
            opacity: '0'
        }, {
            opacity: '1'
        }], {
            duration: 1000,
            itertions: 1
        });


    console.log(y);
    w = y;
    console.log(w);
    quoteIconRefresh();
};

// console.log(y);

console.log(w);

console.log(quotesAll[rmath(0, (quotesAll.length))]);

// move();
randomQuoteRefresh();

quoteChangeBtn.addEventListener('click', move);

window.addEventListener('click', function (e) {
    if (!document.querySelector('.collapseMenu').contains(e.target) && (!document.querySelector('.menuBars').contains(e.target))) {
        //    alert("Clicked outside l2 and logo-menu");
        //    document.getElementById('l2').style.height = "0px"; //the same code you've used to hide the menu
        collapseMenu.classList.remove('activateCollapse');
        menuIconBars.classList.remove('animationBars');
        menuIconBars.classList.add('reverseAnimationBars');
    }
});

// html to pdf converter -> 
// import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units

// Save the PDF

// window.addEventListener('click', function(){
//     if (!activityDropdown.classList.contains('')) {
//         detailsContainerResize(activityDropdown, arrowKcalDetailsList[0], activityPlaceholder);

//     }
//     if(!targetDropdown.classList.contains('dropdownKcalCalcActive')){
//         detailsContainerResize(targetDropdown, arrowKcalDetailsList[1], targetPlaceholder);
//     }
//     // detailsContainerResize()
// });

// document.addEventListener('mouseup', function(e) {
//     if (!collapseMenu.contains(e.target)) {
//         collapseMenu.classList.remove('activateCollapse');
//         menuIconBars.classList.remove('animationBars');
//         menuIconBars.classList.add('reverseAnimationBars')''
//         // menuIconBars.classList.remove('animationBars');
//     }
// });






// $(document).ready(function () {
//     $(document).click(function (event) {
//         var clickover = $(event.target);
//         var _opened = $(".collapseMenu").hasClass("activateCollapse");
//         if (_opened === true && !clickover.hasClass("menuBars")) {
//             $(".menuBars").click();
//         }
//     });
// });



// window.addEventListener('mouseup', function(event){
//     if ((event.target != collapseMenu || menuBars) && (event.target.parentNode != collapseMenu || menuBars)) {
//         collapseMenu.classList.remove('activateCollapse')
//         menuBarsAnimation();
//     }
// })



// function lol() {
//     for (let i = 0; i < 100; i++) {
//         rmath(0, 6)
//     }
// };




// document.addEventListener('DOMContentLoaded', function () {

//     const nav = document.querySelector('.menuLabel')

//     function addShadow() {
//         if (window.scrollY >= 200) {
//             nav.classList.add('shadow-navbar');
//         } else {
//             nav.classList.remove('shadow-navbar')
//         }

//     }

//     window.addEventListener('scroll', addShadow)

// });