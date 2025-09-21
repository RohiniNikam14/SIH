const users = [
    { regId: "MC1001" },
    { regId: "MC1002" },
    { regId: "MC2001" }
];

function getTranslation(key) {
    const lang = localStorage.getItem("selectedLanguage") || "en";
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key].replace(/^\[translate:(.*)\]$/, "$1");
    }
    return translations["en"][key].replace(/^\[translate:(.*)\]$/, "$1");
}

document.getElementById('login-submit').onclick = function() {
    const regIdInput = document.getElementById('regId').value.trim();
    const message = document.getElementById('message');

    // Validation
    if (regIdInput === "") {
        message.style.color = "red";
        message.textContent = getTranslation("loginEmptyMsg");
        return;
    }

    const userExists = users.some(user => user.regId === regIdInput);

    if (userExists) {
        message.style.color = "green";
        message.textContent = getTranslation("loginSuccessMsg");
        // Redirect to dashboard
        window.location.href = "dashboard.html";
    } else {
        message.style.color = "red";
        message.textContent = getTranslation("loginInvalidMsg");
    }
};

