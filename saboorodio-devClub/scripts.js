let list = document.querySelectorAll('.item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let count = list.length;
let active = 0;

function activate(index) {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = index;

    void list[active].offsetWidth;

    list[active].classList.add('active');
}

next.onclick = () => {
    activate(active >= count - 1 ? 0 : active + 1);
}

prev.onclick = () => {
    activate(active <= 0 ? count - 1 : active - 1);
}