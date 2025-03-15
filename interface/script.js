    const modal = document.getElementById('success-modal');
    const closeBtn = document.querySelector('.close-btn');
    const modalMessage = document.getElementById('modal-message');

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        window.location.href = '/interface/index.html'; // Redirect to index.html
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            window.location.href = '/interface/index.html'; // Redirect to index.html
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

function authenticate() {
    showModal('Đăng nhập thành công');
    setTimeout(() => {
        closeModal();
        document.body.classList.add('fade-out');
        setTimeout(() => {
        }, 3000);
    }, 3000);
}

function signUp() {
    showModal('Đăng ký thành công');
    setTimeout(() => {
        window.location.href = '/interface/signin.html'; // Redirect to sign-in page after sign-up
    }, );
}


