const tab = document.querySelectorAll('.tab');
const btns = document.querySelectorAll('a');
const parent = document.querySelector('#parent');
const tablist = Array.prototype.slice.call(tab);
const btnslist = Array.prototype.slice.call(btns);

const tabActive = document.querySelector('.tab.active');

console.log(tab);
console.log(btns);

parent.addEventListener('click', (e) => {
    console.log(e);
    console.log('click');
    e.preventDefault();

    console.log('click');


    let targetBtn = e.target;

    console.log('button defined');

    for (let tabb of tab) {
        console.log('active removed');
        tabb.classList.remove('active');
    }


    for (let tabb of tab) {

        if (tablist.indexOf(tabb)  === btnslist.indexOf(targetBtn)) {
            tabb.classList.add('active');
            console.log('back to default');

        }
        const next = targetBtn.closest('.tab');
        next.classList.add('active');


    }
})

