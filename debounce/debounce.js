const searchInput = document.getElementById('search-input');
const searchText = document.getElementById('search-text');

const debounce = (func, wait = 100) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
};

const result = e => searchText.innerText = e.target.value;

searchInput.addEventListener('input', debounce(result, 500));
