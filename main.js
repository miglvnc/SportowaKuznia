const activeQuote = document.querySelector('.activeQuote');
const MJ = document.querySelector('.MJ');
const KB = document.querySelector('.KB');
let quotation = document.querySelector('.quoteContainer');
const quoteChange = document.querySelector('.quoteChange');
// let quote = document.querySelector('.quoteContainer');
let quotesAll = document.querySelectorAll('.quoteContainer');
let iconRefresh = document.querySelector('.fa-redo')

let w; // for random number

let menuBars = document.querySelector('.menuBars');
let menuIconBars = document.querySelector('.fa-bars');
let collapseMenu = document.querySelector('.collapseMenu');

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

let gapInputs = document.querySelectorAll('.gapInputs');
let wrongInputs = document.querySelectorAll('.wrongInputs');

let kcalCalcWrapper = document.querySelectorAll('.calcInputs');

let resultFullText = document.querySelectorAll('.resultFullText');

let resultWeightTarget = document.querySelector('.resultWeightTarget');
let resultWeightTargetBmi = document.querySelector('.resultWeightTargetBmi');

let dropdownLink = document.querySelectorAll('.dropdownLink');

let dropdownCalc = document.querySelector('.dropdown');
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

function clearCalc () {
    for (i = 0; i < calcs.length; i++) {
        kcalCalcWrapper[i].classList.remove('calcBmiInputHeightStretch');
        kcalCalcWrapper[i].classList.remove('calcYmcaInputHeightStretch');
        kcalCalcWrapper[i].classList.remove('calcInputHeightStretch');
        result[i].classList.remove('resultShow');
        wrongInputs[i].classList.remove('activeResult');
        resultFullText[i].classList.remove('activeResult');
    }
    calcInputs.forEach(element => {
        element.value ="";
        element.classList.remove('activeInput')
    });
    selectActivityForm.forEach(element => {
        element.classList.remove('activeInput');
        element.options.selectedIndex = 0;
    })
    genderIconLink.forEach(element=> {
        element.classList.remove('activeGender')
        element.classList.remove('unactiveGender')
    })
}


function ymcaCalc () {
    let weight = ymcaInputs[0].value;
    let waist = ymcaInputs[1].value;
    let ymcaResult;
    kcalCalcWrapper[2].classList.add('calcYmcaInputHeightStretch');
    result[2].classList.add('resultShow');
    wrongInputs[2].classList.remove('activeResult');
    let a = 4.15 * waist
    let b = a/2.54
    let c = 0.082 * weight * 2.2
    let e = weight * 2.2
    if(genderIconLink[4].classList.contains('activeGender') || genderIconLink[5].classList.contains('activeGender') && ymcaInputs[0].value != "" && ymcaInputs[1].value != "" && ymcaInputs[0].value.match(numbers)){
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
            
        }                  
        } else {
            resultFullText[2].classList.remove('activeResult');
            wrongInputs[2].classList.add('activeResult');
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
function kcalHeightChangeCalcInputs () {
    kcalCalcWrapper[0].classList.add('calcInputHeightDefault');
}
function bmiHeightChangeCalcInputs () {
    kcalCalcWrapper[1].classList.add('calcBmiInputHeightDefault');
}
function ymcaHeightChangeCalcInputs () {
    kcalCalcWrapper[2].classList.add('calcYmcaInputHeightDefault');
}
function activeCalcShow () {
    activeCalc.classList.add('activeCalcShow')
    kcalHeightChangeCalcInputs();
}

function displayKcalCalc () {
    bmiCalcContainer.classList.remove('calcDisplay');
    ymcaCalcContainer.classList.remove('calcDisplay');
    kcalCalcContainer.classList.add('calcDisplay');
    underlineCalc[0].classList.add('activeDropdownLink');
    underlineCalc[1].classList.remove('activeDropdownLink');
    underlineCalc[2].classList.remove('activeDropdownLink');
    dropdownLink[0].classList.add('activeDropdownLinkColor')
    dropdownLink[1].classList.remove('activeDropdownLinkColor')
    dropdownLink[2].classList.remove('activeDropdownLinkColor')
    // activeCalcHref();
    kcalHeightChangeCalcInputs();
    // activeCalcShow();
    clearCalc();
}
function displayBmiCalc () {
    kcalCalcContainer.classList.remove('calcDisplay')
    ymcaCalcContainer.classList.remove('calcDisplay')
    bmiCalcContainer.classList.add('calcDisplay')
    bmiHeightChangeCalcInputs();
    underlineCalc[0].classList.remove('activeDropdownLink');
    underlineCalc[1].classList.add('activeDropdownLink');
    underlineCalc[2].classList.remove('activeDropdownLink');
    dropdownLink[0].classList.remove('activeDropdownLinkColor')
    dropdownLink[1].classList.add('activeDropdownLinkColor')
    dropdownLink[2].classList.remove('activeDropdownLinkColor')
    clearCalc();
    // activeCalcHref();
    // bmiHeightChangeCalcInputs();
    // activeCalcHref();
}
function displayYmcaCalc () {
    bmiCalcContainer.classList.remove('calcDisplay')
    kcalCalcContainer.classList.remove('calcDisplay')
    ymcaCalcContainer.classList.add('calcDisplay')
    activeCalcShow();
    underlineCalc[0].classList.remove('activeDropdownLink');
    underlineCalc[1].classList.remove('activeDropdownLink');
    underlineCalc[2].classList.add('activeDropdownLink');
    dropdownLink[0].classList.remove('activeDropdownLinkColor')
    dropdownLink[1].classList.remove('activeDropdownLinkColor')
    dropdownLink[2].classList.add('activeDropdownLinkColor')
    clearCalc();
    // ymcaHeightChangeCalcInputs();
    // activeCalcHref();
}


dropdownLink[0].addEventListener('click', displayKcalCalc)
dropdownLink[1].addEventListener('click', displayBmiCalc)
dropdownLink[2].addEventListener('click', displayYmcaCalc)
// // dropdownLink[0].addEventListener('click', kcalHeightChangeCalcInputs)

function bmiCalc () {
    let weight = bmiInputs[0].value;
    let height = bmiInputs[1].value / 100;
    let bmiResult = weight / (height * height);
    kcalCalcWrapper[1].classList.add('calcBmiInputHeightStretch');
    result[1].classList.add('resultShow');
    wrongInputs[1].classList.remove('activeResult');
    resultFullText[1].classList.remove('activeResult');
    if(genderIconLink[2].classList.contains('activeGender') || genderIconLink[3].classList.contains('activeGender') && bmiInputs[0].value != "" && bmiInputs[1].value != "" && bmiInputs[0].value.match(numbers)){
        resultFullText[1].classList.add('activeResult');
        highlightedResult[1].textContent = bmiResult.toFixed(2)
        if(genderIconLink[2].classList.contains('activeGender')){
            if(bmiResult < 20.1 && resultWeightTargetBmi.textContent != "niedowagę"){
                resultWeightTargetBmi.textContent = "niedowagę"
                opacityAnimate(resultFullText[1])
            }else if(bmiResult > 25.9 && resultWeightTargetBmi.textContent != "nadwagę"){
                resultWeightTargetBmi.textContent = "nadwagę"
                opacityAnimate(resultFullText[1])
            } else if (bmiResult >= 20.1 && bmiResult <= 25.9 && resultWeightTargetBmi.textContent != "wagę prawidłową") {
                resultWeightTargetBmi.textContent = "wagę prawidłową"
                opacityAnimate(resultFullText[1])
            }
            
        } else if (genderIconLink[3].classList.contains('activeGender')) {
            if(bmiResult < 18.5 && resultWeightTargetBmi.textContent != "niedowagę"){
                resultWeightTargetBmi.textContent = "niedowagę"
                opacityAnimate(resultFullText[1])
            }else if(bmiResult > 24.9 && resultWeightTargetBmi.textContent != "nadwagę"){
                resultWeightTargetBmi.textContent = "nadwagę"
                opacityAnimate(resultFullText[1])
            } else if (bmiResult >= 18.5 && bmiResult <= 24.9 && resultWeightTargetBmi.textContent != "wagę prawidłową") {
                resultWeightTargetBmi.textContent = "wagę prawidłową"
                opacityAnimate(resultFullText[1])
            }
        }
    } else {
        resultFullText[1].classList.remove('activeResult');
        wrongInputs[1].classList.add('activeResult');
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
        } else {
            element.classList.remove('activeInput')
        }
        
    });
}

for (i = 0; i < selectContainer.length; i++){
    selectContainer[i].addEventListener('click', selectInputBorders)
    selectContainer[i].addEventListener('keyup', selectInputBorders)
}

function calcBorders () {
    calcInputs.forEach(element => {
        if(element.value !== ""){
            element.classList.add('activeInput');
        } else {
            element.classList.remove('activeInput')
        }
        
    });
}

for (let i = 0; i < calcInputs.length; i++){
    calcInputs[i].addEventListener('keyup', calcBorders)
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

function kcalResultBtnHref () {
    // setTimeout(function(){location.href = "#kcalResultId";}, 300)
    setTimeout(function(){window.scroll(0, 6200)}, 300)
    
}
function bmiResultBtnHref () {
    // setTimeout(function(){location.href = "#bmiResultId";}, 300)
    setTimeout(function(){window.scroll(0, 6100)}, 300)
    
}
function ymcaResultBtnHref () {
    setTimeout(function(){window.scroll(0, 6100)}, 300)
    
}

// kcalResultBtn.onClick = function(){
//     setTimeout(function(){location.href = "#kcalResultId";}, 1000)
// }
kcalResultBtn.addEventListener('click', kcalResultBtnHref)
bmiResultBtn.addEventListener('click', bmiResultBtnHref)
ymcaResultBtn.addEventListener('click', ymcaResultBtnHref)


function kcalCalc () {
    activitySelect.options[1].value = 1.2;
    activitySelect.options[2].value = 1.4;
    activitySelect.options[3].value = 1.6;
    activitySelect.options[4].value = 1.8;
    activitySelect.options[5].value = 2.0;
    targetSelect.options[1].value = 0.9;
    targetSelect.options[2].value = 1.1;
    targetSelect.options[3].value = 1;
    console.log(kcalCalcWrapper);
    kcalCalcWrapper[0].classList.add('calcInputHeightStretch');
    // resultWeightTarget.classList.remove('highlightedOpacityShow')
    // heightAnimate(kcalCalcWrapper);
    // kcalCalcWrapper.classList.remove('calcInputHeight');
    result[0].classList.add('resultShow');
    if(
        genderIconLink[0].classList.contains('activeGender') || genderIconLink[1].classList.contains('activeGender') && activitySelect.options[activitySelect.selectedIndex].value != 'chooseOption' && targetSelect.options[targetSelect.selectedIndex].value != 'chooseOption' && calcInputs[0].value != "" && calcInputs[1].value != "" && calcInputs[2].value != "" && calcInputs[0].value.match(numbers) && calcInputs[1].value.match(numbers) && calcInputs[2].value.match(numbers)
        && calcInputs[0].value.charAt(0) != 0 && calcInputs[1].value.charAt(0) != 0 && calcInputs[2].value.charAt(0) != 0
        ){
            if(genderIconLink[0].classList.contains('activeGender')){
                let bmr = (((((9.99 * calcInputs[1].value) + (6.25 * calcInputs[2].value) - (4.92 * calcInputs[0].value) - 161)) * activitySelect.options[activitySelect.selectedIndex].value) * targetSelect.options[targetSelect.selectedIndex].value);
                if(bmr > 500) {
                    // kcalCalcWrapper.classList.add('calcInputHeight');
                    wrongInputs[0].classList.remove('activeResult')
                    gapInputs[0].classList.remove('activeResult');
                    resultFullText[0].classList.add('activeResult');
                    if(highlightedResult[0].textContent != bmr.toFixed(0)){
                        opacityAnimate(highlightedResult[0]);
                    }
                    highlightedResult[0].textContent = bmr.toFixed(0); 
                    if (targetSelect.options[targetSelect.selectedIndex].value == 0.9 && resultWeightTarget.textContent != 'stracić na wadze'){
                        // resultWeightTarget.classList.add('highlightedOpacityShow')
                        
                        resultWeightTarget.textContent = 'stracić na wadze';
                        opacityAnimate(resultFullText[0]);
                        
                        
                    } else if (targetSelect.options[targetSelect.selectedIndex].value == 1.1 && resultWeightTarget.textContent != 'przytyć'){
                        // resultWeightTarget.classList.add('highlightedOpacityShow')
                        resultWeightTarget.textContent = 'przytyć';
                        opacityAnimate(resultFullText[0]);
                    } else if (targetSelect.options[targetSelect.selectedIndex].value == 1.0 && resultWeightTarget.textContent != 'utrzymać wagę'){
                        // resultWeightTarget.classList.add('highlightedOpacityShow')
                        // opacityAnimate(resultWeightTarget);
                        resultWeightTarget.textContent = 'utrzymać wagę';
                        opacityAnimate(resultFullText[0]);
                    }
                    // result[0].classList.add('resultShow');
                    // result[1].classList.remove('resultShow');
                } else {
                    // kcalCalcWrapper.classList.remove('calcInputHeight');
                    // kcalCalcWrapper.classList.add('calcInputHeightError');
                    resultFullText[0].classList.remove('activeResult');
                    wrongInputs[0].classList.remove('activeResult')
                    gapInputs[0].textContent = `Nie sądzę, że masz ${calcInputs[0].value}lat(a), ${calcInputs[1].value}kg wagi i ${calcInputs[2].value}cm wzrostu?`
                    gapInputs[0].classList.add('activeResult');
                    // result[0].classList.add('errorResult');
                    // result[0].classList.remove('resultShow');
                    // result[1].classList.add('resultShow');
                    
                }
            } else if (genderIconLink[1].classList.contains('activeGender')) {
                let bmr = (((((9.99 * calcInputs[1].value) + (6.25 * calcInputs[2].value) - (4.92 * calcInputs[0].value) + 5)) * activitySelect.options[activitySelect.selectedIndex].value) * targetSelect.options[targetSelect.selectedIndex].value);
                if(bmr > 500) {
                    // kcalCalcWrapper.cassList.add('calcInputHeight');
                    wrongInputs[0].classList.remove('activeResult')
                    gapInputs[0].classList.remove('activeResult');
                    resultFullText[0].classList.add('activeResult');
                    // kcalCalcWrapper.classList.add('calcInputHeight');
                    highlightedResult[0].textContent = bmr.toFixed(0); 
                    // result[1].classList.remove('resultShow');
                    // result[0].classList.add('resultShow');
                    if(highlightedResult[0].textContent != bmr.toFixed(0)){
                        opacityAnimate(highlightedResult[0]);
                    }
                    highlightedResult[0].textContent = bmr.toFixed(0); 
                    if (targetSelect.options[targetSelect.selectedIndex].value == 0.9 && resultWeightTarget.textContent != 'stracić na wadze'){
                        // resultWeightTarget.classList.add('highlightedOpacityShow')
                        
                        opacityAnimate(resultFullText[0]);
                        resultWeightTarget.textContent = 'stracić na wadze';
                        
                        
                    } else if (targetSelect.options[targetSelect.selectedIndex].value == 1.1 && resultWeightTarget.textContent != 'przytyć'){
                        // resultWeightTarget.classList.add('highlightedOpacityShow')
                        resultWeightTarget.textContent = 'przytyć';
                        opacityAnimate(resultFullText[0]);
                    } else if (targetSelect.options[targetSelect.selectedIndex].value == 1.0 && resultWeightTarget.textContent != 'utrzymać wagę'){
                        // resultWeightTarget.classList.add('highlightedOpacityShow')
                        // opacityAnimate(resultWeightTarget);
                        resultWeightTarget.textContent = 'utrzymać wagę';
                        opacityAnimate(resultFullText[0]);
                    }
                } else {
                    // kcalCalcWrapper.classList.remove('calcInputHeight');
                    // kcalCalcWrapper.classList.add('calcInputHeightError');
                    wrongInputs[0].classList.remove('activeResult')
                    gapInputs[0].textContent = `Na pewno masz ${calcInputs[0].value}lat(a), ${calcInputs[1].value}kg wagi i ${calcInputs[2].value}cm wzrostu?`
                    gapInputs[0].classList.add('activeResult');
                // result[0].classList.remove('resultShow');
                // result[1].textContent = `Jesteś pewien, że masz ${calcInputs[0].value} lat(a), ${calcInputs[1].value} kg i ${calcInputs[2].value} cm wzrostu? Nie sondze`
                // result[1].classList.add('resultShow');
                
            }
        }
    } else {
        // alert('wprowadz poprawne dane')
        // result[1].textContent = `Uzupełnił wszystkie pola lub wpisz poprawne
        // wartości!`
        // result[0].classList.remove('resultShow');
        // result[1].classList.add('resultShow');
        // kcalCalcWrapper.classList.add('calcInputHeightError');
        resultFullText[0].classList.remove('activeResult');
        gapInputs[0].classList.remove('activeResult');
        // kcalCalcWrapper.classList.remove('calcInputHeight');
        wrongInputs[0].classList.add('activeResult')
        
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

function articlesPagesNext () {
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
    activeArticle.appendChild(zmeczenieArticle);
    opacityAnimate(zmeczenieArticle);
}
function secondArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(cwiczeniaArticle);
    opacityAnimate(cwiczeniaArticle);
}
function thirdArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(saunaArticle);
    opacityAnimate(saunaArticle);
}
function fourthArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(podstawyArticle);
    opacityAnimate(podstawyArticle);
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

artCards[0].addEventListener('click', firstArticle);
artCards[1].addEventListener('click', secondArticle);
artCards[2].addEventListener('click', thirdArticle);
artCards[3].addEventListener('click', fourthArticle);
artCards[4].addEventListener('click', fifthArticle);
artCards[5].addEventListener('click', sixthArticle);




document.addEventListener('DOMContentLoaded', function () {
    // const homeIcon = document.querySelector('.fas-home');
    // let articlesIcon = document.querySelector('.fa-book-reader');
    // let trainingsIcon = document.querySelector('.fa-fire-alt');
    // let calcsIcon = document.querySelector('.fa-calculator');
    let allFas = document.querySelectorAll('.menuIcon')
    
    console.log(allFas[0]);
    
    // console.log(homeIcon)
    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
            top: rect.top + window.scrollY - 100
        };
    }
    console.log(getOffset(about).top);
    
    function addActiveSection() {

        if (window.scrollY >= -100 && window.scrollY < getOffset(articlesListSection).top) {
            allFas[0].classList.add('activeSection');
            allFas[1].classList.remove('activeSection');
            allFas[2].classList.remove('activeSection');
            allFas[3].classList.remove('activeSection');
        } else if (window.scrollY >= getOffset(articlesListSection).top && window.scrollY < getOffset(trainingsSection).top) {
            allFas[1].classList.add('activeSection');
            allFas[0].classList.remove('activeSection');
            allFas[2].classList.remove('activeSection');
            allFas[3].classList.remove('activeSection');
        } else if (window.scrollY >= getOffset(trainingsSection).top && window.scrollY < getOffset(calculatorSection).top) {
            allFas[2].classList.add('activeSection');
            allFas[1].classList.remove('activeSection');
            allFas[0].classList.remove('activeSection');
            allFas[3].classList.remove('activeSection');
        } else if (window.scrollY >= getOffset(calculatorSection).top) {
            allFas[3].classList.add('activeSection');
            allFas[1].classList.remove('activeSection');
            allFas[2].classList.remove('activeSection');
            allFas[0].classList.remove('activeSection');
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

    // iconRefresh.animate([{
    //     transform: 'rotate(0deg)'
    // },
    // {
    //     transform: 'rotate(360deg)'
    // }], {
    //     duration: 400,
    //     iterations: 1
    // })
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

quoteChange.addEventListener('click', move);

window.addEventListener('click', function (e) {
    if (!document.getElementById('collapseMenuu').contains(e.target) && (!document.getElementById('menuBarz').contains(e.target))) {
        //    alert("Clicked outside l2 and logo-menu");
        //    document.getElementById('l2').style.height = "0px"; //the same code you've used to hide the menu
        collapseMenu.classList.remove('activateCollapse');
        menuIconBars.classList.remove('animationBars');
        menuIconBars.classList.add('reverseAnimationBars');
    }
});

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