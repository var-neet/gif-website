// Add event listeners for touch devices
document.querySelectorAll('.gift-img').forEach((gift) => {
    gift.addEventListener('touchstart', () => {
        gift.classList.add('touched'); // Add a class to trigger the hover effect
    });

    gift.addEventListener('touchend', () => {
        setTimeout(() => {
            gift.classList.remove('touched'); // Remove the class after a delay
        }, 1000); // Adjust the delay (in milliseconds) as needed
    });
});

async function fetchJoke() {
    try {
        const response = await fetch("https://icanhazdadjoke.com/",{
            headers: {
            'Accept': 'application/json'
            }
        });

        const data = await response.json()
        document.getElementById('joke-text').textContent = data.joke;
        
    } catch (error) {
        console.error('Error fetching joke: ', error);
        console.getElementById('joke-text').textContent="Failed to load joke. try again!";
    }

}

    document.getElementById('joke-button').addEventListener('click',fetchJoke);

    fetchJoke();