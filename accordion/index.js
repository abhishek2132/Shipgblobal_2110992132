// script.js

document.addEventListener("DOMContentLoaded", function () {
    const accordion = document.getElementById("box");
    fetch('questions.txt')
        .then(response => response.text())
        .then(data => {
            const questions = data.split('\n').filter(Boolean); 
            questions.forEach((question, index) => {
                const item = document.createElement('div');
                item.classList.add('box-item');
                const header = document.createElement('div');
                header.classList.add('box-header');
                header.textContent = `Question ${index + 1}: ${question}`;
                const content = document.createElement('div');
                content.classList.add('box-content');
                content.innerHTML = `<p>This is the answer or explanation for: ${question}</p>`;
                item.appendChild(header);
                item.appendChild(content);
                accordion.appendChild(item);
                header.addEventListener('click', function () {
                    const isVisible = content.classList.contains('show');
                    document.querySelectorAll('.box-content').forEach(c => c.classList.remove('show'));
                    if (!isVisible) {
                        content.classList.add('show');
                    }
                });
            });
        })
        .catch(error => console.error('Error fetching questions:', error));
});
