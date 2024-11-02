document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
});

const certs = document.querySelectorAll('.cert img');

certs.forEach(cert => {
    cert.addEventListener('click', () => {
        const popup = document.createElement('div');
        popup.classList.add('popup');
        
        const popupImg = document.createElement('img');
        popupImg.src = cert.src;
        popup.appendChild(popupImg);

        document.body.appendChild(popup);

        popup.addEventListener('click', () => {
            document.body.removeChild(popup);
        });
    });
});
