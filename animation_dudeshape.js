const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');
const searchContainer = document.getElementById('search-container');

searchIcon.addEventListener('click', () => {
    searchIcon.classList.add('hidden'); 
    searchInput.classList.add('active'); 
    searchInput.focus(); 
});

document.addEventListener('click', (event) => {
    const isClickInside = searchContainer.contains(event.target);
    
    if (!isClickInside) {
        searchInput.classList.remove('active'); 
        searchIcon.classList.remove('hidden'); 
    }
});
