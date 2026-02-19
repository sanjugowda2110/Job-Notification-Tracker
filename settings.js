document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('preferences-form');
    const minMatchScoreSlider = document.getElementById('minMatchScore');
    const minMatchScoreValue = document.getElementById('minMatchScoreValue');

    // Load preferences from localStorage
    const savedPreferences = JSON.parse(localStorage.getItem('jobTrackerPreferences'));
    if (savedPreferences) {
        document.getElementById('roleKeywords').value = savedPreferences.roleKeywords.join(', ');
        
        const preferredLocationsSelect = document.getElementById('preferredLocations');
        Array.from(preferredLocationsSelect.options).forEach(option => {
            if (savedPreferences.preferredLocations.includes(option.value)) {
                option.selected = true;
            }
        });

        savedPreferences.preferredMode.forEach(mode => {
            const checkbox = document.getElementById(mode.toLowerCase());
            if (checkbox) {
                checkbox.checked = true;
            }
        });

        document.getElementById('experienceLevel').value = savedPreferences.experienceLevel;
        document.getElementById('skills').value = savedPreferences.skills.join(', ');
        minMatchScoreSlider.value = savedPreferences.minMatchScore;
        minMatchScoreValue.textContent = savedPreferences.minMatchScore;
    }

    // Update slider value display
    minMatchScoreSlider.addEventListener('input', () => {
        minMatchScoreValue.textContent = minMatchScoreSlider.value;
    });

    // Save preferences to localStorage
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const roleKeywords = document.getElementById('roleKeywords').value.split(',').map(s => s.trim()).filter(Boolean);
        
        const preferredLocationsSelect = document.getElementById('preferredLocations');
        const preferredLocations = Array.from(preferredLocationsSelect.selectedOptions).map(option => option.value);

        const preferredMode = [];
        const remoteCheckbox = document.getElementById('remote');
        const hybridCheckbox = document.getElementById('hybrid');
        const onsiteCheckbox = document.getElementById('onsite');
        if (remoteCheckbox.checked) preferredMode.push('Remote');
        if (hybridCheckbox.checked) preferredMode.push('Hybrid');
        if (onsiteCheckbox.checked) preferredMode.push('Onsite');
        
        const experienceLevel = document.getElementById('experienceLevel').value;
        const skills = document.getElementById('skills').value.split(',').map(s => s.trim()).filter(Boolean);
        const minMatchScore = document.getElementById('minMatchScore').value;

        const preferences = {
            roleKeywords,
            preferredLocations,
            preferredMode,
            experienceLevel,
            skills,
            minMatchScore
        };

        localStorage.setItem('jobTrackerPreferences', JSON.stringify(preferences));
        alert('Preferences saved!');
    });
});