document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const upcomingRaces = document.getElementById('upcoming-races');
    const pastRaces = document.getElementById('past-races');

    toggleButton.addEventListener('click', function () {
        if (upcomingRaces.style.display === 'none' || upcomingRaces.style.display === '') {
            upcomingRaces.style.display = 'block';
            pastRaces.style.display = 'none';
            toggleButton.textContent = 'Show Past Races';
        } else {
            upcomingRaces.style.display = 'none';
            pastRaces.style.display = 'block';
            toggleButton.textContent = 'Show Upcoming Races';
        }
    });
});