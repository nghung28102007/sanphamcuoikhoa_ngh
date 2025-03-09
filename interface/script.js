document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdown = document.querySelector('.dropdown');

    // Remove any existing hover functionality
    dropdownBtn.removeEventListener('mouseover', showDropdown);
    dropdownBtn.removeEventListener('mouseout', hideDropdown);

    dropdownBtn.addEventListener('click', function() {
        dropdown.classList.toggle('open');
        if (dropdown.classList.contains('open')) {
            dropdownBtn.innerHTML = '<img src="img/icons8-x-24.png" alt="Close">'; // Change to X icon
            dropdown.style.padding = '12px 27px'; // Fix padding when open
        } else {
            dropdownBtn.innerHTML = '<img src="img/menu.png" alt="Menu">'; // Change back to menu icon
            dropdown.style.padding = ''; // Reset padding when closed
        }
    });

    dropdownBtn.addEventListener('mouseover', showDropdown);
    dropdownBtn.addEventListener('mouseout', hideDropdown);

    const modal = document.getElementById('success-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalMessage = document.getElementById('modal-message');

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        window.location.href = 'index.html'; // Redirect to index.html
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            window.location.href = 'index.html'; // Redirect to index.html
        }
    });
});

function showDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.add('open');
    dropdown.style.padding = '12px 27px'; // Fix padding when open
}

function hideDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.remove('open');
    dropdown.style.padding = ''; // Reset padding when closed
}

function showModal(message) {
    const modal = document.getElementById('success-modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'block';
}

function authenticate() {
    // Add your authentication logic here
    showModal('Authentication successful');
}

function signUp() {
    // Add your sign-up logic here
    showModal('Sign-up successful');
    setTimeout(() => {
        window.location.href = 'signin.html'; // Redirect to sign-in page after sign-up
    }, 2000);
}


