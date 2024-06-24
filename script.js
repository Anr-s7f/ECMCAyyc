// JavaScript for handling form submission, gallery, events, and notifications
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Handle registration (e.g., save to database or local storage)
        console.log('User registered:', { name, email, password });

        alert('Registration successful!');
        registrationForm.reset();
    });

    // Function to load gallery content
    function loadGallery() {
        const galleryContainer = document.querySelector('.gallery-container');
        // Fetch or add gallery items dynamically
        galleryContainer.innerHTML = `
            <div>
                <img src="path/to/image1.jpg" alt="Image 1">
            </div>
            <div>
                <video src="path/to/video1.mp4" controls></video>
            </div>
        `;
    }

    // Function to load events
    function loadEvents() {
        const eventsContainer = document.querySelector('.events-container');
        // Fetch or add event items dynamically
        eventsContainer.innerHTML = `
            <div>
                <h3>Event 1</h3>
                <p>Date: 2024-07-01</p>
                <p>Location: Community Center</p>
            </div>
            <div>
                <h3>Event 2</h3>
                <p>Date: 2024-08-15</p>
                <p>Location: Park</p>
            </div>
        `;
    }

    // Load gallery and events on page load
    loadGallery();
    loadEvents();
});