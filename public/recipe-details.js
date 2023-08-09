const recipeDetailsContainer = document.getElementById('recipe-details-container');


const urlParams = new URLSearchParams(window.location.search);
const recipeId = urlParams.get('id');

const recipes = [
  
  {
      id: 1,
      title: "Scrumptious Pancakes",
      description: "Indulge in these airy and delightful pancakes, served alongside the richness of maple syrup and a burst of vibrant, seasonal berries.",
      image: 'download (2).jpg',
      ingredients: [
        "2 cups of versatile all-purpose flour",
        "2 tablespoons of fine granulated sugar",
        "1 tablespoon of baking powder",
        "1/2 teaspoon of salt",
        "2 large, farm-fresh eggs",
        "1 3/4 cups of creamy milk",
        "1/4 cup of velvety unsalted butter, gently melted",
        "Luscious maple syrup and an assortment of freshly-picked berries, for an exquisite presentation"
      ],
      instructions: "1. Embark on your culinary journey by harmoniously blending the pancake batter..."
    
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

// Find the selected recipe based on the 'id' query parameter
const selectedRecipe = recipes.find(recipe => recipe.id === parseInt(recipeId));

// If a selected recipe is found, populate the recipe details container
if (selectedRecipe) {
  recipeDetailsContainer.innerHTML = `
    <img class="h-40 w-full object-cover mb-2 rounded" src="${selectedRecipe.image}" alt="${selectedRecipe.title}">
    <h2 class="text-2xl font-semibold mb-2">${selectedRecipe.title}</h2>
    <p class="text-gray-600 mb-4">${selectedRecipe.description}</p>
    <h3 class="text-lg font-semibold mb-2">Ingredients</h3>
    <ul class="list-disc pl-6">
      ${selectedRecipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
    </ul>
    <h3 class="text-lg font-semibold mt-4">Instructions</h3>
    <p>${selectedRecipe.instructions}</p>
  `;
} else {
  // Display a message if no recipe is found
  recipeDetailsContainer.innerHTML = '<p>No recipe details found.</p>';
}
