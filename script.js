document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Perform login validation here
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // For simplicity, let's assume the username and password are 'admin'
        if (username === 'admin' && password === 'admin') {
            window.location.href = 'chat.html'; // Redirect to chat page on successful login
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});

// Inside script.js

document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chat-form');
    const chatContainer = document.getElementById('chat-container');

    chatForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userInput = document.getElementById('user-input').value;

        // Display user message
        displayMessage('You', userInput);

        // Reset input field
        document.getElementById('user-input').value = '';
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatContainer.appendChild(messageElement);
    }
});
// Inside script.js

document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chat-form');
    const chatContainer = document.getElementById('chat-container');

    chatForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userInput = document.getElementById('user-input').value;

        // Display user message
        displayMessage('You', userInput);

        // Reset input field
        document.getElementById('user-input').value = '';
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatContainer.appendChild(messageElement);
    }
});

// Inside script.js

document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chat-form');
    const chatContainer = document.getElementById('chat-container');

    chatForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userInput = document.getElementById('user-input').value;

        // Display user message
        displayMessage('You', userInput);

        // Reset input field
        document.getElementById('user-input').value = '';
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatContainer.appendChild(messageElement);
    }
});

// Inside script.js

document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chat-form');
    const chatContainer = document.getElementById('chat-container');

    chatForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userInput = document.getElementById('user-input').value;

        // Display user message
        displayMessage('You', userInput);

        // Reset input field
        document.getElementById('user-input').value = '';
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatContainer.appendChild(messageElement);
    }
});
