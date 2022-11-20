const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // prevent mini-info bar from appearing on mobile
    window.stashedPrompt = event; // stash prompt so it can be triggered on install 'click' 
    butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const eventPrompt = window.stashedPrompt;
    if (!eventPrompt) {
        return;
    }
    eventPrompt.prompt(); //show install prompt 
    butInstall.setAttribute('disabled', true); // disable install btn after click to install
    butInstall.textContent = 'Installed!'; //once installed, let the user know with the button
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.stashedPrompt = null;
});
