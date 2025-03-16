//Dropdown menu
const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});



//Hộp thoại thông báo
    
    
const modal = document.getElementById('success-modal');
const closeBtn = document.querySelector('.close-btn');
const modalMessage = document.getElementById('modal-message');

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    window.location.href = '/sanphamcuoikhoa_ngh/interface/before.html'; // Redirect to index.html
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        window.location.href = '/sanphamcuoikhoa_ngh/interface/before.html'; // Redirect to index.html
    }
});

document.querySelector('.close-btn').addEventListener('click', closeModal);
//Hien thi thong bao
function showModal(message) {
document.getElementById('modal-message').innerText = message;
document.getElementById('success-modal').style.display = 'block';
}

function closeModal() {
document.getElementById('success-modal').style.display = 'none';
}

// Example usage after successful login or registration
function signIn() {
    showModal('Đăng nhập thành công!');
}

function signUp() {
    showModal('Đăng ký thành công!');
}

// Call these functions after successful login or registration
// onLoginSuccess();
// onRegisterSuccess();

