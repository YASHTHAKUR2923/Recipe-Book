document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recipe-form');
    const recipesContainer = document.getElementById('recipes-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const ingredients = document.getElementById('ingredients').value;
        const steps = document.getElementById('steps').value;
        const image = document.getElementById('image').value;

        if (name && ingredients && steps && image) {
            addRecipe(name, ingredients, steps, image);
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    function addRecipe(name, ingredients, steps, image) {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';

        recipeCard.innerHTML = `
            <h3>${name}</h3>
            <img src="${image}" alt="${name}">
            <h4>Ingredients:</h4>
            <p>${ingredients}</p>
            <h4>Steps:</h4>
            <p>${steps}</p>
        `;

        recipesContainer.appendChild(recipeCard);
    }
});
