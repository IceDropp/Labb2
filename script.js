document.addEventListener("DOMContentLoaded", function() {
    // Definiera GitHub-användarnamnet som en sträng
    const githubUsername = 'IceDropp';  // Här ska 'IceDropp' vara en sträng
    const projectsContainer = document.getElementById('github-projects');

    // Hämta projekten från GitHub API
    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => response.json())
        .then(repos => {
            repos.forEach(repo => {
                // Skapa en div för varje projekt
                const projectDiv = document.createElement('div');
                projectDiv.className = 'project';

        
                projectDiv.innerHTML = `
                    <div class="section">
                        <h2>${repo.name}</h2>
                        <p>${repo.description || 'Ingen beskrivning tillgänglig'}</p>
                        <a href="${repo.html_url}" target="_blank">Visa på GitHub</a>
                    </div>
                `;

      
                projectsContainer.appendChild(projectDiv);
            });
        })
        .catch(error => {
            projectsContainer.innerHTML = `<p>Kunde inte ladda GitHub-projekten. Försök igen senare.</p>`;
            console.error('Error fetching GitHub projects:', error);
        });
});