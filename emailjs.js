// Инициализация EmailJS
(function() {
    emailjs.init("USER_ID"); // Замените на свой User ID
});

// Обработка формы
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = 'Отправка...';

    // Получаем значения полей
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Параметры для EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Отправка email через EmailJS
    emailjs.send(
        "SERVICE_ID",    // Замените на свой Service ID
        "TEMPLATE_ID",   // Замените на свой Template ID
        templateParams
    ).then(
        function(response) {
            statusDiv.innerHTML = '✅ Сообщение успешно отправлено!';
            statusDiv.style.color = '#D4AF37';
            
            // Очистка формы
            document.getElementById('contactForm').reset();
        },
        function(error) {
            statusDiv.innerHTML = '❌ Ошибка отправки. Попробуйте позже.';
            statusDiv.style.color = '#D4AF37';
            console.log(error);
        }
    );
});
