document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    const dontShowCheckbox = document.getElementById('dont-show');

    // Show the popup after 1 second
    setTimeout(() => {
        if (!localStorage.getItem('dontShowPopup')) {
            popup.classList.remove('hidden');
        }
    }, 2000);

    // Close popup when clicking the close button
    closeBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
        if (dontShowCheckbox.checked) {
            localStorage.setItem('dontShowPopup', true);
        }
    });
});

// navbar
// Toggle the main mobile menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Toggle the mobile dropdown for "Services" menu on small screens
document.getElementById('mobile-dropdown-toggle').addEventListener('click', function() {
    const mobileDropdownMenu = document.getElementById('mobile-dropdown-menu');
    mobileDropdownMenu.classList.toggle('hidden');
});





