document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById('cookie-banner');
    const modal = document.getElementById('cookie-preferences-modal');

    // Vérifie si le consentement a déjà été donné
    const userConsent = getCookie('user_consent');

    if (!userConsent) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none'; // Assurez-vous que la bannière est masquée si le consentement est donné
    }

    document.getElementById('accept-cookies').addEventListener('click', function() {
        setCookie('user_consent', 'accepted', 365);
        banner.style.display = 'none';
        // Activer les cookies ici
    });

    document.getElementById('reject-cookies').addEventListener('click', function() {
        setCookie('user_consent', 'rejected', 365);
        banner.style.display = 'none';
        // Désactiver les cookies ici
    });

    document.getElementById('manage-cookies').addEventListener('click', function() {
        banner.style.display = 'none';
        modal.style.display = 'block';
    });

    document.querySelector('#cookie-preferences-modal button[onclick="savePreferences()"]').addEventListener('click', function() {
        modal.style.display = 'none';
        // Sauvegarder les préférences ici
    });

    document.querySelector('#cookie-preferences-modal button[onclick="closePreferences()"]').addEventListener('click', function() {
        modal.style.display = 'none';
    });

    function setCookie(name, value, days) {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
        return null; // Retourne null si le cookie n'existe pas
    }
});
