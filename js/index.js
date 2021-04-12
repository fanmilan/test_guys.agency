const modalEl = document.getElementById('modal');
const cartBtnEl = document.getElementById('btn-cart');
let timerId = null;


cartBtnEl.addEventListener('click', openModal);

function openModal(e) {
    e.stopPropagation();
    modalEl.classList.add('open');
    timerId = setTimeout(closeModal, 3000);
    window.addEventListener('click', handleClickOutside);
}


function handleClickOutside(e) {
    if (!modalEl.contains(e.target)) {
        closeModal();
    }
}

function closeModal() {
    if (timerId) clearTimeout(timerId);
    modalEl.classList.remove('open');
    window.removeEventListener('click', handleClickOutside);
}



