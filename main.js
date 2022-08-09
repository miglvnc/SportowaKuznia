//global functions

const wrapperContainer = document.querySelector('.wrapper');

function addBlurBody() {
    wrapperContainer.classList.remove('errorBlurClose')
    wrapperContainer.classList.add('errorBlurShow')
};
function removeBlurBody() {
    wrapperContainer.classList.remove('errorBlurShow')
    wrapperContainer.classList.add('errorBlurClose')
};

// calc error

let errorPopUp = document.querySelector('.errorPopUp')
let errorShadow = document.querySelector('.errorShadow')
let errorConfirm = document.querySelector('.errorConfirm')

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


// navigation marks

const allFas = document.querySelectorAll('.menuIcon')

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY - 100
    };
};

function allNodeRemove(nodeList){
    nodeList.forEach(el => {
        el.classList.remove('activeSection')
        el.classList.remove('menuLinkActive')
    });
};

function addActiveSection() {

    if(window.scrollY >= -100 && window.scrollY < getOffset(motivationSection).top){

            allNodeRemove(menuLink);
            allNodeRemove(allFas);

    } else if (window.scrollY > getOffset(motivationSection).top && window.scrollY < getOffset(articlesListSection).top) {

            allNodeRemove(menuLink);
            allNodeRemove(allFas);
            menuLink[0].classList.add('menuLinkActive');
            allFas[0].classList.add('activeSection');

    } else if (window.scrollY >= getOffset(articlesListSection).top && window.scrollY < getOffset(trainingsSection).top) {

            allNodeRemove(menuLink);
            allNodeRemove(allFas);
            menuLink[1].classList.add('menuLinkActive');
            allFas[1].classList.add('activeSection');

    } else if (window.scrollY >= getOffset(trainingsSection).top && window.scrollY < getOffset(dietSection).top) {

            allNodeRemove(menuLink);
            allNodeRemove(allFas);
            menuLink[2].classList.add('menuLinkActive');
            allFas[2].classList.add('activeSection');

    } else if(window.scrollY >= getOffset(dietSection).top && window.scrollY < getOffset(calculatorSection).top) {

            allNodeRemove(menuLink);
            allNodeRemove(allFas);
            menuLink[3].classList.add('menuLinkActive');
            allFas[3].classList.add('activeSection');

    } else if (window.scrollY >= getOffset(calculatorSection).top) {

            allNodeRemove(menuLink);
            allNodeRemove(allFas);
            menuLink[4].classList.add('menuLinkActive');
            allFas[4].classList.add('activeSection');
            
        }

};

document.addEventListener('DOMContentLoaded', function () { 
    window.addEventListener('scroll', addActiveSection) 
});

//nav functions

const menuBars = document.querySelector('.menuBars');
const menuIconBars = document.querySelector('.fa-bars');
const collapseMenu = document.querySelector('.collapseMenu');
const nav = document.querySelector('.nav');

function menuBarsAnimation() {
    menuIconBars.classList.toggle('animationBars');
}

function collapse() {
    if (collapseMenu.className.includes('activateCollapse')) {
        collapseMenu.classList.remove('activateCollapse')
    } else {
        collapseMenu.classList.add('activateCollapse');
    }
    menuBarsAnimation();
}

menuBars.addEventListener('click', collapse);

window.addEventListener('click', function (e) {
    if (!document.querySelector('.collapseMenu').contains(e.target) && (!document.querySelector('.menuBars').contains(e.target))) {
        collapseMenu.classList.remove('activateCollapse');
        menuIconBars.classList.remove('animationBars');
        menuIconBars.classList.add('reverseAnimationBars');
    }
});

// motivation quotes

const activeQuote = wrapperContainer.querySelector('.activeQuote');
const quotation = wrapperContainer.querySelector('.quoteContainer');
const quoteChangeBtn = wrapperContainer.querySelector('.quoteChangeBtn');
const quotesAll = wrapperContainer.querySelectorAll('.quoteContainer');
const iconRefresh = wrapperContainer.querySelector('.iconRefresh');

let randomQuotationNumber = randomNumber(0, (quotesAll.length - 1));

function randomNumber(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0)
};

function randomQuoteWebLoad() {
    activeQuote.appendChild(quotesAll[randomQuotationNumber])
};

function quoteIconRefresh() {
    if (iconRefresh.className.includes('transformIcons')) {
        iconRefresh.classList.remove('transformIcons')
        iconRefresh.classList.add('nextTransformIcons')
    } else {
        iconRefresh.classList.remove('nextTransformIcons')
        iconRefresh.classList.add('transformIcons')
    }
};

function removeAllChilds(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

//removing all childs

function newQuotationAdd() {
    
    let currentQuotationNumber = randomQuotationNumber;
    let newRandomQuotationNumber;

    do {
        newRandomQuotationNumber = randomNumber(0, (quotesAll.length - 1));
    } while (newRandomQuotationNumber == currentQuotationNumber)

    activeQuote.appendChild(quotesAll[newRandomQuotationNumber])
        .animate([{
            opacity: '0'
        }, {
            opacity: '1'
        }], {
            duration: 1000,
            itertions: 1
        });

    currentQuotationNumber = newRandomQuotationNumber;
};

function drawNewQuotation () {
    removeAllChilds(activeQuote);
    newQuotationAdd()
    quoteIconRefresh();
}

randomQuoteWebLoad();
quoteChangeBtn.addEventListener('click', drawNewQuotation);

//diet section

const redirectText = wrapperContainer.querySelector('.redirectText');
const modalOwnText = wrapperContainer.querySelector('.modalOwnText');
const modalOwnLink = wrapperContainer.querySelector('.modalOwnLink');
const redirectLink = wrapperContainer.querySelector('.redirectLink');

function modalTextTransform() {
        modalOwnText.classList.add('dietTextHide')
};

function modalTextTransformLeave() {
        modalOwnText.classList.remove('dietTextHide')
};

function redirectTextTransform() {
        redirectText.classList.add('dietTextHide')
};

function redirectTextTransformLeave() {
        redirectText.classList.remove('dietTextHide')
};

redirectLink.addEventListener('mouseover', modalTextTransform)
modalOwnLink.addEventListener('mouseover', redirectTextTransform)
redirectLink.addEventListener('mouseleave', modalTextTransformLeave)
modalOwnLink.addEventListener('mouseleave', redirectTextTransformLeave)

// articles section

const artCards = wrapperContainer.querySelectorAll('.artCard')

const activeArticle = wrapperContainer.querySelector('.activeArticle');
const allArticles = wrapperContainer.querySelector('.allArticles');

const dropdownArticles = wrapperContainer.querySelector('.dropdownArticles');
const spanExtend = dropdownArticles.querySelector('.clickToExtend');
const spanRollUp = dropdownArticles.querySelector('.clickToRoll');
const aRollUp = dropdownArticles.querySelector('.aRollUp');

const cwiczeniaArticle = document.querySelector('.cwiczeniaArticle');
const zmeczenieArticle = document.querySelector('.zmeczenieArticle');
const saunaArticle = document.querySelector('.saunaArticle');
const podstawyArticle = document.querySelector('.podstawyArticle');
const bledyArticle = document.querySelector('.bledyArticle');
const postanowieniaArticle = document.querySelector('.postanowieniaArticle');

const pageOne = document.querySelector('.pageOne');
const pageTwo = document.querySelector('.pageTwo');
const pageNext = document.querySelector('.pageNext');
const pagePrevious = document.querySelector('.pagePrevious');
const pageNumber = document.querySelectorAll('.pageNumber');
const articlesFirstPage = document.querySelector('.articlesFirstPage');
const articlesSecondPage = document.querySelector('.articlesSecondPage');

const pageArticle = document.querySelectorAll('.pageArticle');
const pageItem = document.querySelectorAll('.page-item')

// page switch

function articlesPageTwoActive () {
    pageArticle[1].classList.add('activePage')
    pageArticle[0].classList.remove('activePage')
    pageTwo.classList.add('active')
    pageOne.classList.remove('active')
};

function articlesPageOneActive () {
    pageArticle[0].classList.add('activePage')
    pageArticle[1].classList.remove('activePage')
    pageOne.classList.add('active')
    pageTwo.classList.remove('active')
};

function arrowAnimationNextPage () {
        if(nextArrow.className.includes('paginationLeft')){
        nextArrow.classList.remove('paginationLeft')
        nextArrow.classList.add('repeatPaginationLeft')
    } else  {
        nextArrow.classList.remove('repeatPaginationLeft')
        nextArrow.classList.add('paginationLeft')
    }
};

function arrowAnimationPreviousPage () {
    if(previousArrow.className.includes('paginationRight')){
        previousArrow.classList.remove('paginationRight')
        previousArrow.classList.add('repeatPaginationRight')
    } else  {
        previousArrow.classList.remove('repeatPaginationRight')
        previousArrow.classList.add('paginationRight')
    }
};

function switchNextPage () {
        for (i = 0; i < (pageArticle.length - 1); i++){
            if(pageArticle[i].className.includes('activePage') && i < (pageArticle.length - 1)){
                pageArticle[i+1].classList.add('activePage');
                pageArticle[i].classList.remove('activePage');
                pageNumber[i+1].classList.add('active');
                pageNumber[i].classList.remove('active');
                break;
            }
        }
};

function switchPreviousPage () {
    for (i = (pageArticle.length-1); i > 0; i--){
        if(pageArticle[i].className.includes('activePage') && i > 0){
            pageArticle[i-1].classList.add('activePage');
            pageArticle[i].classList.remove('activePage');
            pageNumber[i-1].classList.add('active');
            pageNumber[i].classList.remove('active');
            break;
        }
    }
};

function articlesPagesNext () {
    arrowAnimationNextPage();
    switchNextPage();
};

function articlesPagesPrevious () {
    arrowAnimationPreviousPage();
    switchPreviousPage();
};

pageNext.addEventListener('click', articlesPagesNext)
pagePrevious.addEventListener('click', articlesPagesPrevious)

pageTwo.addEventListener('click', articlesPageTwoActive)
pageOne.addEventListener('click', articlesPageOneActive)

// articles activate

function removeAllChildsArticles () {
    let removeAllChilds = activeArticle.querySelector("div");
    activeArticle.removeChild(removeAllChilds);
};

function firstArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(podstawyArticle);
    opacityAnimate(podstawyArticle);
};

function secondArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(cwiczeniaArticle);
    opacityAnimate(cwiczeniaArticle);
};

function thirdArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(zmeczenieArticle);
    opacityAnimate(zmeczenieArticle);
};

function fourthArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(saunaArticle);
    opacityAnimate(saunaArticle);
};

function fifthArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(bledyArticle);
    opacityAnimate(bledyArticle);
};

function sixthArticle(){
    removeAllChildsArticles();
    activeArticle.appendChild(postanowieniaArticle);
    opacityAnimate(postanowieniaArticle);
};

artCards[0].addEventListener('click', sixthArticle);
artCards[1].addEventListener('click', fifthArticle);
artCards[2].addEventListener('click', fourthArticle);
artCards[3].addEventListener('click', thirdArticle);
artCards[4].addEventListener('click', secondArticle);
artCards[5].addEventListener('click', firstArticle);

//extend article

function rollUpArticles() {
    activeArticle.classList.remove('heightReset');
    dropdownArticles.classList.remove('dropdownHeight');
    spanExtend.classList.remove('dropdownSpanChange');
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


// function whatScrollY() {
//     console.log(window.scrollY);
// }

// window.addEventListener('click', whatScrollY)

// modal own diet


//////////////////////// OWN DIET MODAL

const modalDietContainer = document.querySelector('.modalDietContainer');
const dietCardLink = document.querySelector('.dietCardLink');
const btnModalExit = modalDietContainer.querySelector('.btnModalExit');

function showModalDiet (){
    modalDietContainer.classList.add('showDisplayModal');
    modalDietContainer.classList.remove('hideDisplayModal');
    addBlurBody();
    addShadowBody();
}

function hideModalDiet () {
    modalDietContainer.classList.add('hideDisplayModal');
    modalDietContainer.classList.remove('showDisplayModal');
    removeBlurBody();
    removeShadowBody();
}

btnModalExit.addEventListener('click', hideModalDiet);
dietCardLink.addEventListener('click', showModalDiet);


const table = document.querySelector('#dietTable');
let ownTable = document.querySelector('#ownDietTable')

let products = table.querySelectorAll('tr');

function addProductToOwnTable(tableProduct){
    if(!tableProduct.classList.contains('addProduct')){
        tableProduct.classList.add('addProduct') 
        let importElement = tableProduct.cloneNode(true);
        ownTable.appendChild(importElement) // w przypadku pustej tabeli tworzy element w tabeli B jw.
    }
};

function removeProductFromOwnTable(tableProduct, ownProducts){
    for(i=0; i < ownProducts.length; i++){
        if(tableProduct.className == ownProducts[i].className && tableProduct.classList.contains('addProduct')){
            tableProduct.classList.remove('addProduct')
            ownTable.removeChild(ownProducts[i])
        }
    } 
};

products.forEach(tableProduct => {
    tableProduct.addEventListener('click', function(){ // each product from table activate function

        let addedProducts = ownTable.querySelectorAll('tr');
        
        addProductToOwnTable(tableProduct);

        removeProductFromOwnTable(tableProduct, addedProducts);

        emptyOwnDietTable() // empty ownTable header add/remove depends if product is selected          
    })      
});

///////////////// OWN Table actions

const ownTableHeader = document.querySelector('.ownTableHeader');

function emptyOwnDietTable () {
    let ownTable = document.querySelector('.ownTable')
    if(ownTable.innerHTML.includes('addProduct')){
        ownTable.classList.add('showOwnTable')
        ownTableHeader.classList.add('hideOwnTableHeader')
    } else {
        ownTable.classList.remove('showOwnTable')
        ownTableHeader.classList.remove('hideOwnTableHeader')
    }
};

let tableShadow = document.querySelector('.tableShadow')

function tableShadowToggle(){
    if(tableShadow.className.includes('tableShadowShow')){
        tableShadow.classList.remove('tableShadowShow')
        tableShadow.classList.add('tableShadowHide')
    } else {
        tableShadow.classList.remove('tableShadowHide')
        tableShadow.classList.add('tableShadowShow')
    }
};

function hideColumnsOwnTable() {
    let ownTableProductName = ownTable.querySelectorAll('.productName');
    let ownTableProductNameHead = document.querySelectorAll('.ownTableProductNameHead');

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
};

function showTableWeightColumn(ownTableWeight) {
    ownTableWeight.forEach(element => {
        if (element.className.includes('ownTableWeightShow')){
            element.classList.remove('ownTableWeightShow')
        } else {
            element.classList.add('ownTableWeightShow')
        }
    });
};
    
function toggleProductWeight () {
    
    let ownTableWeight = document.querySelectorAll('.ownTableWeight');
    tableShadowToggle();
    hideColumnsOwnTable();
    showTableWeightColumn(ownTableWeight);

};

const switchBtnOwnTableInput = document.querySelector('.form-check-input');
switchBtnOwnTableInput.addEventListener('click', toggleProductWeight);

function inputValueChange(){
    let ownTableProducts = ownTable.querySelectorAll('tr')
    ownTableProducts.forEach(element => {
        let dietTableInputs = element.querySelector('.productValueInput')
        let valueChange = element.querySelectorAll('span')
        for(p=0; p < products.length; p++){
            if(products[p].className == element.className){
                let productValues = products[p].querySelectorAll('span')

                dietTableInputs.addEventListener('keyup', function(){
                    for(i=0; i < valueChange.length; i++){

                        dietTableInputs.addEventListener('keyup', sumAllValues)
                        dietTableInputs.addEventListener('input', ownTableInputsProperties)

                        valueChange[i].innerText = Math.round(((productValues[i].innerText/100)*dietTableInputs.value + Number.EPSILON) * 10) / 10;
                    };
                });
            };
        };
    });
};

table.addEventListener('click', inputValueChange);


let sumThead = document.querySelector('.sum');

function sumAllValues () {
    
    let ownTable = document.querySelector('#ownDietTable');
    let ownProducts = ownTable.querySelectorAll('tr');
    let kcalValues = ownTable.querySelectorAll('.kcalValue');
    let proteinValues = ownTable.querySelectorAll('.proteinValue');
    let carbsValues = ownTable.querySelectorAll('.carbsValue');
    let fatValues = ownTable.querySelectorAll('.fatValue');
    let gramValues = ownTable.querySelectorAll('.productValueInput');
    let sumsSpan = sumThead.querySelectorAll('span');

    let elementalValuesArr = [0, 0, 0, 0, 0];

    for(i=0; i < ownProducts.length; i++){
        elementalValuesArr[0] += Number(kcalValues[i].innerText);
        elementalValuesArr[1] += Number(proteinValues[i].innerText);
        elementalValuesArr[2] += Number(carbsValues[i].innerText);
        elementalValuesArr[3] += Number(fatValues[i].innerText);
        elementalValuesArr[4] += Number(gramValues[i].value);
    };

    for(i = 0; i < elementalValuesArr.length; i++){
        sumsSpan[i+1].innerText = Math.round((elementalValuesArr[i] + Number.EPSILON)*100)/100
    };
};

table.addEventListener('click', sumAllValues);

function maxLengthInputs(){
    let dietTableInputs = ownTable.querySelectorAll('.productValueInput')
    dietTableInputs.forEach(element => {
        element.maxLength = 4;
        if(element.value.length > element.maxLength) {
        element.value = element.value.slice(0, element.maxLength)
        };
});

};

function ownTableError () {
    let dietTableInputs = ownTable.querySelectorAll('.productValueInput')
    dietTableInputs.forEach(element => {
        element.maxLength = 4;
        if(element.value.charAt(0) == 0 && !element.value =="" || element.value < 0) {
            element.value="";
    }
})};

function ownTableInputsProperties(){
    maxLengthInputs();
    ownTableError();
};

///////

let searchInput = document.querySelector('#dietInput');
const searchResultNotFound = document.querySelector('.resultSearchNotFound')


function searchInTable() {

    let filter = searchInput.value.toUpperCase();

    for (i=0; i < products.length; i++){
        productName = products[i].querySelector('.productName');
        if(productName){
            textValue = productName.textContent || productName.innerText;
            if(textValue.toUpperCase().indexOf(filter) > - 1){
                products[i].style.display = "table";
                // products[i].classList.remove(".hideProducts")
            } else {
                products[i].style.display = "none";
                // products[i].classList.add(".hideProducts")
            }
        }
    };

    products = Array.from(products)
    let checkDisplay = products.every(el => el.style.display === "none")
    if (checkDisplay) {
        searchResultNotFound.classList.add("resultSearchNotFoundShow")
    } else {
        searchResultNotFound.classList.remove("resultSearchNotFoundShow")
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

///////////////////////



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


// function


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

function clearKcalDetailsInfo (el1, el2, el3, el4, el5, el6, el7) {
    el1.classList.remove('dropdownKcalCalcActive');  
    el1.classList.remove('borderActivity');  
    el2.classList.remove('arrowKcalDetailsListActive');
    el3.classList.remove('choosenOptionActive');
    el4.innerText = 'WYBIERZ';
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
}

function displayKcalCalc () {
    bmiCalcContainer.classList.remove('calcDisplay');
    ymcaCalcContainer.classList.remove('calcDisplay');
    kcalCalcContainer.classList.add('calcDisplay');
    dropdownLink[0].classList.add('activeDropdownLinkColor')
    dropdownLink[1].classList.remove('activeDropdownLinkColor')
    dropdownLink[2].classList.remove('activeDropdownLinkColor')
    activeCalcHref();
    clearCalc();
}
function displayBmiCalc () {
    kcalCalcContainer.classList.remove('calcDisplay')
    ymcaCalcContainer.classList.remove('calcDisplay')
    bmiCalcContainer.classList.add('calcDisplay')
    dropdownLink[0].classList.remove('activeDropdownLinkColor')
    dropdownLink[1].classList.add('activeDropdownLinkColor')
    dropdownLink[2].classList.remove('activeDropdownLinkColor')
    clearCalc();
    activeCalcHref();
}
function displayYmcaCalc () {
    bmiCalcContainer.classList.remove('calcDisplay')
    kcalCalcContainer.classList.remove('calcDisplay')
    ymcaCalcContainer.classList.add('calcDisplay')
    dropdownLink[0].classList.remove('activeDropdownLinkColor')
    dropdownLink[1].classList.remove('activeDropdownLinkColor')
    dropdownLink[2].classList.add('activeDropdownLinkColor')
    clearCalc();
    activeCalcHref();
}


dropdownLink[0].addEventListener('click', displayKcalCalc)
dropdownLink[1].addEventListener('click', displayBmiCalc)
dropdownLink[2].addEventListener('click', displayYmcaCalc)

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
            } else if (bmiResult >= 20.1 && bmiResult <= 25.9 && resultWeightTargetBmi.textContent != "wagę prawidłową") {
                resultWeightTargetBmi.textContent = "wagę prawidłową"
            }
            
        } else if (genderIconLink[3].classList.contains('activeGender')) {
            if(bmiResult < 18.5 && resultWeightTargetBmi.textContent != "niedowagę"){
                resultWeightTargetBmi.textContent = "niedowagę"
            }else if(bmiResult > 24.9 && resultWeightTargetBmi.textContent != "nadwagę"){
                resultWeightTargetBmi.textContent = "nadwagę"
            } else if (bmiResult >= 18.5 && bmiResult <= 24.9 && resultWeightTargetBmi.textContent != "wagę prawidłową") {
                resultWeightTargetBmi.textContent = "wagę prawidłową"
            }
        }
    } else {
        resultFullText[1].classList.remove('activeResult');
        errorPopUpShow();
    }
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

function opacityAnimate(el) {
    el.animate([
        {opacity: 0},
        {opacity: 1}
    ], {
        duration: 1000,
        iterations: 1
    });
}
function resultBtnHref (el) {
    const windowPos = window.scrollY
    const resultKcalScrollPosition = windowPos+el.getBoundingClientRect().top-(window.innerHeight/2)
    setTimeout(function(){window.scroll(0, resultKcalScrollPosition)}, 300)
  
}


let activityIndicator;
let targetIndicator;


function activityValue() {
    
    kcalCalcListElementActivity[0].value = 1.2;
    kcalCalcListElementActivity[1].value = 1.2;
    kcalCalcListElementActivity[2].value = 1.4;
    kcalCalcListElementActivity[3].value = 1.6;
    kcalCalcListElementActivity[4].value = 1.8;
    kcalCalcListElementActivity[5].value = 2.0;
    console.log(kcalCalcListElementActivity[1].value);

    for(i=1; i < kcalCalcListElementActivity.length; i++) {
        if (kcalCalcListElementActivity[i].classList.contains('choosenActivityElement')){
            let activityIndicator = kcalCalcListElementActivity[i].value
            return activityIndicator;
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
