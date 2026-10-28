/**
 * DATAPOINT Technologies - Core UI & Slider Scripts
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const toggleBtn = document.getElementById('btnMobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');

    if (toggleBtn && mobileDrawer) {
        toggleBtn.addEventListener('click', () => {
            const isVisible = mobileDrawer.style.display === 'block';
            mobileDrawer.style.display = isVisible ? 'none' : 'block';
        });
    }

    // 2. Hero Slider
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (slides.length > 1) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    // 3. Products Category Filter & Live Search
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('productSearchInput');
    const productItems = document.querySelectorAll('.product-item');

    let activeCat = 'All';
    let searchQuery = '';

    function filterProducts() {
        productItems.forEach(item => {
            const cat = item.getAttribute('data-category') || '';
            const name = (item.querySelector('h3')?.innerText || '').toLowerCase();
            const desc = (item.querySelector('p')?.innerText || '').toLowerCase();

            const matchCat = (activeCat === 'All' || cat.toLowerCase() === activeCat.toLowerCase());
            const matchSearch = (!searchQuery || name.includes(searchQuery) || desc.includes(searchQuery));

            if (matchCat && matchSearch) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCat = btn.getAttribute('data-cat') || 'All';
            filterProducts();
        });
    });

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            filterProducts();
        });
    }
});
