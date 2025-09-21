const translations = {
    en: {login: "Login", register: "New Registration", title: "MigrantCare"},
    ta: {login: "உள்நுழைவு", register: "பதிவு", title: "புலம்பெயர்ந்தோர் பராமரிப்பு"},
    kn: {login: "ಲಾಗಿನ್", register: "ನೋಂದಣಿ", title: "ಮೈಗ್ರ್ಯಾಂಟ್ ಕೇರ್"},
    tulu: {login: "ಲಾಗಿನ್", register: "ನೋಂದಣಿ", title: "ಮೈಗ್ರಾಂಟ್ ಕೇರ್"},
    konkani: {login: "लॉगिन", register: "नोंदणी", title: "मायग्रंट केअर"}
};

function changeLanguage() {
    const lang = document.getElementById('language').value;
    document.getElementById('login-btn').textContent = translations[lang].login;
    document.getElementById('register-btn').textContent = translations[lang].register;
    document.getElementById('title-text').textContent = translations[lang].title;
}
changeLanguage();

document.getElementById('login-btn').onclick = function() {
    window.location.href = 'login.html';
};
document.getElementById('register-btn').onclick = function() {
    window.location.href = 'register.html';
};
