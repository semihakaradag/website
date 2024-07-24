// Telefon numarası girişini dinle
document.getElementById('phone').addEventListener('input', function() {
    var phoneNumber = this.value;
    var phonePattern = /^(05\d{2})\d{3}\d{4}$/;
    var phoneValidationFeedback = document.getElementById('phoneValidationFeedback');

    // Telefon numarası formatını kontrol et
    if (!phonePattern.test(phoneNumber)) {
        // Geçerli bir telefon numarası değilse veya harf varsa hata mesajını göster
        phoneValidationFeedback.style.display = 'block';
    } else {
        // Geçerli bir telefon numarasıysa hata mesajını gizle
        phoneValidationFeedback.style.display = 'none';
    }
});