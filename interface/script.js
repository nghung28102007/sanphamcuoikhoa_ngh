const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});
    
    
    const modal = document.getElementById('success-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalMessage = document.getElementById('modal-message');

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        window.location.href = '/interface/before.html'; // Redirect to index.html
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            window.location.href = '/interface/before.html'; // Redirect to index.html
        }
    });


document.querySelector('.close-btn').addEventListener('click', closeModal);

function showModal(message) {
    document.getElementById('modal-message').innerText = message;
    document.getElementById('success-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('success-modal').style.display = 'none';
}

function signIn() {
    showModal('Đăng nhập thành công');
    setTimeout(() => {
        closeModal();
        window.location.href = '/interface/after.html'; // Redirect to index page after authentication
    }, 2000); // Delay for 2 seconds before redirecting
}



