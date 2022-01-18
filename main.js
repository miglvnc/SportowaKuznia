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
let activeArticle = document.querySelector('.activeArticle');

let spanExtend = document.querySelector('.clickToExtend');
let spanRollUp = document.querySelector('.clickToRoll');


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

function extendArticles() {
    if(activeArticle.className.includes('heightReset')){
        activeArticle.classList.remove('heightReset');
        dropdownArticles.classList.remove('dropdownHeight');
        spanExtend.classList.remove('dropdownSpanChange');
        // spanExtend.classList.add('opacityChange');
        spanRollUp.classList.remove('clickToRollShow');
    } else {
        // spanExtend.classList.remove('opacityChange');
        activeArticle.classList.add('heightReset');
        dropdownArticles.classList.add('dropdownHeight');
        spanExtend.classList.add('dropdownSpanChange');
        spanRollUp.classList.add('clickToRollShow');
    }
};



dropdownArticles.addEventListener('click', extendArticles);

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