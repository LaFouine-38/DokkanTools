function separatedNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function divide(zenis, option) {
    let result;
    let remain;
    if (option == 'ztur') {
        result = Math.floor(zenis / 30500000)
        remain = zenis % 30500000
    } else if (option == 'subztur') {
        console.log('sub')
        result = Math.floor(zenis / 13600000)
        remain = zenis % 13600000
    } else if (option == 'zlr') {
        result = Math.floor(zenis / 34999965)
        remain = zenis % 34999965
    }
    return !remain || remain === separatedNumber(result) ? result : `${separatedNumber(result)} reste ${separatedNumber(remain)} Zenis`
}

function generateAwakenItem(zenis, option) {
    return `<div class="awaken-item">
        <span class="title">
            <img class="arrow" src="../assets/com_arrow_large_right.png" alt width="16">
            <img id="${option === 'zlr' ? 'zlr' : 'ztur'}-awakenings" src="../assets/${option === 'zlr' ? 'zlr' : 'ztur'}.png" alt>
            <img class="arrow" src="../assets/com_arrow_large_left.png" alt width="16">
        </span>
        <div class="text-wrapper">
            <p>${option === 'zlr' ? 'Éveils ZLR disponibles: ' + divide(zenis, 'zlr') : 'Éveils de ZTUR disponibles: ' + divide(zenis, 'ztur')}</p>
            ${option === 'zlr' ? '<p></p>' : `<p>Éveils de SUB-ZTUR disponibles: ${divide(zenis, 'subztur')}</p>`}
        </div>
    </div>`
}

let awakenOptions = 'ztur';

const fields = document.querySelectorAll('.amount');
let root = document.documentElement;
const blocked = [".", ",", "e", "E"];
const awakensWrapper = document.querySelector('#awakens-wrapper');
const awakensContainer = document.querySelector('#awakens-container');
let zenis;

document.addEventListener('input', (e) => {
    console.log(awakenOptions)
    if (e.target.classList.contains('amount')) {
        zenis = 0;
        fields.forEach((field) => {
            console.dir(field)
            if (field.value) {
                zenis += parseInt(field.getAttribute('data-value')) * parseInt(field.value)
            }
        })
        document.querySelector('#total').value = separatedNumber(zenis)
        if (zenis !== 0) {
            awakensWrapper.style.display = 'flex'
            awakensContainer.innerHTML = generateAwakenItem(zenis, awakenOptions)
        } else {
            awakensWrapper.style.display = 'none'
        }
    }
})

document.addEventListener("keydown", (e) => {
    if (blocked.includes(e.key)) {
        e.preventDefault();
    }
});

document.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('btn-wrapper')) {
        if (e.target.parentNode.getAttribute('data-value') === 'ztur') {
            awakenOptions = 'ztur'
        } else if (e.target.parentNode.getAttribute('data-value') === 'zlr') {
            awakenOptions = 'zlr'
        }
        console.dir(e.target.parentNode)
        awakensContainer.innerHTML = generateAwakenItem(zenis, awakenOptions)
    }
})