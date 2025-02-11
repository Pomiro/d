document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('briefForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            projectName: form.projectName.value,
            goals: form.goals.value,
            audience: form.audience.value,
            budget: form.budget.value,
            timeline: form.timeline.value,
            details: form.details.value
        };
        
        console.log('Submitted form data:', formData);
        alert('Форма успешно отправлена!');
        
        // Reset form
        form.reset();
    });
});
