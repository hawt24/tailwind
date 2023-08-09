const recipes = [
    {
      id: 1,
      title: "Delicious Pancakes",
      description: "Fluffy pancakes served with maple syrup and fresh berries.",
      image:'download (2).jpg',
      ingredients: [
        "2 cups all-purpose flour",
        "2 tablespoons sugar",
        "1 tablespoon baking powder",
        "1/2 teaspoon salt",
        "2 large eggs",
        "1 3/4 cups milk",
        "1/4 cup unsalted butter, melted",
        "Maple syrup and fresh berries, for serving"
      ],
      instructions: "1. Mix the pancake batter...",
    },
    {
      id: 2,
      title: "Classic Margherita Pizza",
      description: "Traditional pizza topped with tomato sauce, mozzarella cheese, and fresh basil.",
      image: "images (3).jpg",
      ingredients: [
        "Pizza dough",
        "1/2 cup tomato sauce",
        "1 1/2 cups shredded mozzarella cheese",
        "Fresh basil leaves",
        "Salt and pepper to taste"
      ],
      instructions: "1. Preheat the oven...",
    },
    {
      id: 3,
      title: "Creamy Tomato Soup",
      description: "Smooth and creamy tomato soup with a touch of basil.",
      image:"images (4).jpg",
      ingredients: [
        "2 tablespoons butter",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "28 oz canned crushed tomatoes",
        "1 cup vegetable broth",
        "1/2 cup heavy cream",
        "Fresh basil leaves",
        "Salt and pepper to taste"
      ],
      instructions: "1. In a large pot...",
    },
    {
      id: 4,
      title: "Refreshing Strawberry Smoothie",
      description: "A cool and refreshing smoothie made with fresh strawberries and yogurt.",
      image: "images (5).jpg",
      ingredients: [
        "1 cup fresh strawberries",
        "1 banana",
        "1/2 cup plain yogurt",
        "1/2 cup milk",
        "1 tablespoon honey",
        "Ice cubes"
      ],
      instructions: "1. Blend all ingredients...",
    }
  ]

const recipeCardsContainer = document.getElementById('recipe-cards');

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md', 'cursor-pointer', 'recipe-card');
  card.innerHTML = `
    <img class="h-40 w-full object-cover mb-2 rounded" src="${recipe.image}" alt="${recipe.title}">
    <h2 class="text-xl font-semibold">${recipe.title}</h2>
  `;
  card.addEventListener('click', () => redirectToRecipeDetails(recipe.id));
  return card;
}

function redirectToRecipeDetails(recipeId) {
  window.location.href = `recipe-details.html?id=${recipeId}`;
}

recipes.forEach(recipe => {
  const card = createRecipeCard(recipe);
  recipeCardsContainer.appendChild(card);
});
