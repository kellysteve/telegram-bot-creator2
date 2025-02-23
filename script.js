function generateBot() {
    const botName = document.getElementById('botName').value;
    if (botName.trim() === '') {
        document.getElementById('output').innerText = 'Please enter a bot name.';
        return;
    }
    document.getElementById('output').innerText = `Bot "${botName}" has been created successfully!`;
}
