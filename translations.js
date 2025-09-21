const translations = {
  en: {
    title: "MIGRANTcare",
    subtitle: "Health Record Management",
    loginTitle: "Login - MigrantCare",
    loginHeader: "Login",
    registrationId: "Registration ID",
    enterRegId: "Enter Registration ID",
    loginBtn: "Login",
    noAccount: "Don't have an account? ",
    registerHere: "Register here",
    selectLanguage: "Select Language:",
    signupBtn: "New Registration",
    welcomeText: "Welcome to MIGRANTcare – Your Health, Managed",
    medicalHistory: "Medical History",
    prescription: "Prescription",
    testsLabRecords: "Tests/ Lab Records",
    doctorSuggestions: "Doctor Suggestions",
    termsConditions: "Terms & Conditions",
    privacyPolicy: "Privacy Policy",
    contactUs: "Contact Us",
    signupTitle: "Signup",
    patientName: "Patient Name",
    age: "Age",
    bloodGroup: "Blood Group",
    height: "Height",
    weight: "Weight",
    currentDisease: "Currently Suffering Disease",
    mobileNumber: "Mobile Number",
    permanentAddress: "Permanent Address",
    currentAddress: "Current Address",
    generateIdBtn: "Generate Your ID",
    loginEmptyMsg: "Please enter your Registration ID.",
    loginSuccessMsg: "Login successful!",
    loginInvalidMsg: "Invalid Registration ID. Please try again."
  },
  hi: {
    title: "[translate:माइग्रेंटकेयर]",
    subtitle: "[translate:स्वास्थ्य रिकॉर्ड प्रबंधन]",
    loginTitle: "[translate:लॉगिन - माइग्रेंटकेयर]",
    loginHeader: "[translate:लॉगिन करें]",
    registrationId: "[translate:पंजीकरण आईडी]",
    enterRegId: "[translate:पंजीकरण आईडी दर्ज करें]",
    loginBtn: "[translate:लॉगिन]",
    noAccount: "[translate:क्या आपके पास खाता नहीं है? ]",
    registerHere: "[translate:यहाँ पंजीकरण करें]",
    selectLanguage: "[translate:भाषा चुनें:]",
    signupBtn: "[translate:नई पंजीकरण]",
    welcomeText: "[translate:माइग्रेंटकेयर में आपका स्वागत है – आपका स्वास्थ्य, प्रबंधित]",
    medicalHistory: "[translate:चिकित्सा इतिहास]",
    prescription: "[translate:प्रिस्क्रिप्शन]",
    testsLabRecords: "[translate:परीक्षण / प्रयोगशाला रिकॉर्ड]",
    doctorSuggestions: "[translate:डॉक्टर सुझाव]",
    termsConditions: "[translate:नियम और शर्तें]",
    privacyPolicy: "[translate:गोपनीयता नीति]",
    contactUs: "[translate:संपर्क करें]",
    signupTitle: "[translate:पंजीकरण करें]",
    patientName: "[translate:मरीज का नाम]",
    age: "[translate:आयु]",
    bloodGroup: "[translate:रक्त समूह]",
    height: "[translate:ऊंचाई]",
    weight: "[translate:वजन]",
    currentDisease: "[translate:वर्तमान रोग]",
    mobileNumber: "[translate:मोबाइल नंबर]",
    permanentAddress: "[translate:स्थायी पता]",
    currentAddress: "[translate:वर्तमान पता]",
    generateIdBtn: "[translate:अपना आईडी जनरेट करें]",
    loginEmptyMsg: "[translate:कृपया अपनी पंजीकरण आईडी दर्ज करें।]",
    loginSuccessMsg: "[translate:लॉगिन सफलतापूर्ण!]",
    loginInvalidMsg: "[translate:अमान्य पंजीकरण आईडी। कृपया पुनः प्रयास करें।]"
  }
  // Add other languages here
};

const nativeLanguageNames = {
  en: "English",
  hi: "[translate:हिन्दी]"
};

function updateTexts(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key].replace(/^\[translate:(.*)\]$/, "$1");
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key].replace(/^\[translate:(.*)\]$/, "$1");
    }
  });
  document.documentElement.lang = lang;
}

function changeLanguage(lang) {
  updateTexts(lang);
  localStorage.setItem("selectedLanguage", lang);
}

function applyPreferredLanguage() {
  const savedLang = localStorage.getItem("selectedLanguage") || (navigator.language ? navigator.language.split("-")[0] : "en");
  const lang = translations.hasOwnProperty(savedLang) ? savedLang : "en";
  const selectElem = document.getElementById("language");
  if (selectElem) {
    selectElem.innerHTML = Object.keys(translations)
      .map((l) => {
        let displayName = nativeLanguageNames[l] || l.toUpperCase();
        displayName = displayName.replace(/^\[translate:(.*)\]$/, "$1"); // remove [translate:] for display
        return `<option value="${l}">${displayName}</option>`;
      })
      .join("");
    selectElem.value = lang;
    selectElem.onchange = () => changeLanguage(selectElem.value);
  }
  updateTexts(lang);
}

window.addEventListener("DOMContentLoaded", applyPreferredLanguage);

