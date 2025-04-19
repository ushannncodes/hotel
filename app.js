// State management
const state = {
  currentScreen: 0,
  quizData: {
    location: '',
    mood: '',
    priority: '',
    crowd: '',
    features: [],
    extras: [],
    budget: { min: 0, max: 1000 }
  }
};

// Mock hotel results
const hotelResults = [
  {
    name: "Sakura Retreat Tokyo",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    summary: "Perfect for your chill & relaxed vibe with amazing sleep quality",
    moodScore: 98,
    sleepScore: 95,
    distance: "5 min to attractions",
    price: "$$",
    rating: 4.8,
    reviews: 1243,
    location: "Tokyo",
    mood: ["Chill & Relaxed"],
    priority: "Great Sleep",
    crowd: "Prefer quiet hideouts",
    roomFeatures: ["Big Windows", "Huge Bed"],
    extras: ["Free Breakfast"],
    budget: "$$"
  },
  {
    name: "Urban Oasis Boutique",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    summary: "Minimalist design with the huge bed you wanted",
    moodScore: 94,
    sleepScore: 92,
    distance: "10 min to city center",
    price: "$$$",
    rating: 4.9,
    reviews: 856,
    location: "New York",
    mood: ["Productive & Focused"],
    priority: "Instagram-worthy Design",
    crowd: "Somewhere in between",
    roomFeatures: ["Minimalist Vibes", "Huge Bed"],
    extras: ["Near Public Transport"],
    budget: "$$$"
  },
  {
    name: "Serenity Lodge",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    summary: "Quiet location with bathtub and balcony views",
    moodScore: 91,
    sleepScore: 89,
    distance: "15 min to attractions",
    price: "$$",
    rating: 4.7,
    reviews: 1023,
    location: "Bali",
    mood: ["Luxurious & Pampered"],
    priority: "Top-notch Amenities",
    crowd: "Prefer quiet hideouts",
    roomFeatures: ["Bathtub", "Balcony"],
    extras: ["Eco-friendly Hotel"],
    budget: "$$"
  },
  {
    name: "The Grand Parisian",
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    summary: "Luxurious stay in the heart of Paris with stunning Eiffel Tower views",
    moodScore: 96,
    sleepScore: 93,
    distance: "2 min to Eiffel Tower",
    price: "$$$",
    rating: 4.9,
    reviews: 2345,
    location: "Paris",
    mood: ["Luxurious & Pampered", "Excited & Adventurous"],
    priority: "Location Convenience",
    crowd: "Love them!",
    roomFeatures: ["Big Windows", "Balcony", "Huge Bed"],
    extras: ["Free Breakfast", "Near Public Transport"],
    budget: "$$$"
  },
  {
    name: "Bamboo Garden Resort",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    summary: "Eco-friendly resort with private bamboo cottages and spa",
    moodScore: 95,
    sleepScore: 97,
    distance: "20 min to beach",
    price: "$$",
    rating: 4.8,
    reviews: 876,
    location: "Bali",
    mood: ["Chill & Relaxed", "Luxurious & Pampered"],
    priority: "Top-notch Amenities",
    crowd: "Prefer quiet hideouts",
    roomFeatures: ["Bathtub", "Balcony", "Cozy Atmosphere"],
    extras: ["Eco-friendly Hotel", "Free Breakfast"],
    budget: "$$"
  },
  {
    name: "Tech Hub Hotel",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    summary: "Modern hotel perfect for business travelers and digital nomads",
    moodScore: 92,
    sleepScore: 90,
    distance: "5 min to business district",
    price: "$$",
    rating: 4.6,
    reviews: 654,
    location: "Tokyo",
    mood: ["Productive & Focused"],
    priority: "Location Convenience",
    crowd: "Somewhere in between",
    roomFeatures: ["Minimalist Vibes", "Big Windows"],
    extras: ["Near Public Transport", "Free Breakfast"],
    budget: "$$"
  },
  {
    name: "Mountain View Lodge",
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    summary: "Cozy lodge with breathtaking mountain views and fireplace",
    moodScore: 97,
    sleepScore: 96,
    distance: "30 min to ski resort",
    price: "$$$",
    rating: 4.9,
    reviews: 432,
    location: "Switzerland",
    mood: ["Chill & Relaxed", "Luxurious & Pampered"],
    priority: "Great Sleep",
    crowd: "Prefer quiet hideouts",
    roomFeatures: ["Cozy Atmosphere", "Big Windows", "Huge Bed"],
    extras: ["Free Breakfast", "Eco-friendly Hotel"],
    budget: "$$$"
  },
  {
    name: "Beachfront Bungalows",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    summary: "Direct beach access with private bungalows and ocean views",
    moodScore: 94,
    sleepScore: 91,
    distance: "On the beach",
    price: "$$",
    rating: 4.7,
    reviews: 789,
    location: "Bali",
    mood: ["Chill & Relaxed", "Excited & Adventurous"],
    priority: "Location Convenience",
    crowd: "Somewhere in between",
    roomFeatures: ["Balcony", "Big Windows"],
    extras: ["Free Breakfast", "Pet-friendly"],
    budget: "$$"
  },
  {
    name: "Historic Downtown Inn",
    image: "https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    summary: "Charming historic hotel in the heart of the city",
    moodScore: 93,
    sleepScore: 88,
    distance: "5 min to downtown",
    price: "$",
    rating: 4.5,
    reviews: 567,
    location: "New York",
    mood: ["Budget-Friendly & Practical"],
    priority: "Price",
    crowd: "Love them!",
    roomFeatures: ["Cozy Atmosphere"],
    extras: ["Near Public Transport"],
    budget: "$"
  },
  {
    name: "Zen Garden Hotel",
    image: "https://images.unsplash.com/photo-1467987506553-8f3916508521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    summary: "Traditional Japanese-style hotel with zen garden and tea room",
    moodScore: 98,
    sleepScore: 95,
    distance: "10 min to temples",
    price: "$$$",
    rating: 4.9,
    reviews: 987,
    location: "Kyoto",
    mood: ["Chill & Relaxed", "Luxurious & Pampered"],
    priority: "Top-notch Amenities",
    crowd: "Prefer quiet hideouts",
    roomFeatures: ["Minimalist Vibes", "Bathtub"],
    extras: ["Free Breakfast", "Eco-friendly Hotel"],
    budget: "$$$"
  },
  {
    name: "City Lights Loft",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    summary: "Modern loft with stunning city views and rooftop access",
    moodScore: 95,
    sleepScore: 90,
    distance: "15 min to downtown",
    price: "$$",
    rating: 4.7,
    reviews: 654,
    location: "New York",
    mood: ["Productive & Focused", "Excited & Adventurous"],
    priority: "Instagram-worthy Design",
    crowd: "Somewhere in between",
    roomFeatures: ["Big Windows", "Minimalist Vibes"],
    extras: ["Near Public Transport"],
    budget: "$$"
  },
  {
    name: "Tropical Paradise Resort",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    summary: "All-inclusive resort with private beach and water activities",
    moodScore: 96,
    sleepScore: 94,
    distance: "On the beach",
    price: "$$$",
    rating: 4.8,
    reviews: 1234,
    location: "Maldives",
    mood: ["Luxurious & Pampered", "Excited & Adventurous"],
    priority: "Top-notch Amenities",
    crowd: "Somewhere in between",
    roomFeatures: ["Balcony", "Huge Bed", "Bathtub"],
    extras: ["Free Breakfast", "Eco-friendly Hotel"],
    budget: "$$$"
  },
  {
    name: "Cozy Corner Hostel",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    summary: "Budget-friendly hostel with social atmosphere and shared kitchen",
    moodScore: 89,
    sleepScore: 85,
    distance: "5 min to city center",
    price: "$",
    rating: 4.3,
    reviews: 876,
    location: "Barcelona",
    mood: ["Budget-Friendly & Practical", "Excited & Adventurous"],
    priority: "Price",
    crowd: "Love them!",
    roomFeatures: ["Cozy Atmosphere"],
    extras: ["Near Public Transport"],
    budget: "$"
  }
];

// DOM elements
const content = document.getElementById('content');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');

// Navigation functions
function goToResults() {
  state.currentScreen = 9; // Results screen is at index 9
  renderScreen();
}

function showLoadingThenResults() {
  // Show loading screen
  state.currentScreen = 8;
  renderScreen();
  
  // Schedule transition to results
  setTimeout(() => {
    state.currentScreen = 9;
    renderScreen();
  }, 2000);
}

// Add this function at the top of the file with other helper functions
function getLoadingScreenHTML() {
  return '<div class="flex flex-col items-center justify-center min-h-screen p-6 text-center">' +
         '<div class="animate-pulse mb-6">' +
         '<i data-feather="search" class="w-16 h-16 text-green-500"></i>' +
         '</div>' +
         '<h2 class="text-2xl font-bold mb-3 text-green-800">Hunting down your dream stay...</h2>' +
         '<p class="text-gray-600 mb-8">Ooh cozy vibes coming your way!</p>' +
         '<div class="w-full max-w-md bg-gray-200 rounded-full h-2.5 mb-6">' +
         '<div class="bg-green-600 h-2.5 rounded-full w-3/4 animate-pulse"></div>' +
         '</div>' +
         '</div>';
}

// Update handleNext function
function handleNext() {
  console.log('handleNext called, current screen:', state.currentScreen);
  
  if (state.currentScreen === 7) {
    // Show loading screen
    state.currentScreen = 8;
    const content = document.getElementById('content');
    if (content) {
      content.className = 'min-h-screen';
      content.innerHTML = '<div class="flex flex-col items-center justify-center min-h-screen p-6 text-center"><div class="animate-pulse mb-6"><i data-feather="search" class="w-16 h-16 text-green-500"></i></div><h2 class="text-2xl font-bold mb-3 text-green-800">Hunting down your dream stay...</h2><p class="text-gray-600 mb-8">Ooh cozy vibes coming your way!</p><div class="w-full max-w-md bg-gray-200 rounded-full h-2.5 mb-6"><div class="bg-green-600 h-2.5 rounded-full w-3/4 animate-pulse"></div></div></div>';
      feather.replace();
      
      // Wait 2 seconds then show results
      setTimeout(() => {
        state.currentScreen = 9;
        renderScreen();
      }, 2000);
    }
    return;
  }
  
  state.currentScreen += 1;
  renderScreen();
}

function handleBack() {
  state.currentScreen -= 1;
  renderScreen();
}

function startOver() {
  state.currentScreen = 0;
  state.quizData = {
    location: '',
    mood: '',
    priority: '',
    crowd: '',
    features: [],
    extras: [],
    budget: { min: 0, max: 1000 }
  };
  renderScreen();
}

function showScreen(screenIndex) {
  state.currentScreen = screenIndex;
  renderScreen();
}

// Data update functions
function updateQuizData(field, value) {
  state.quizData[field] = value;
  renderScreen();
}

function toggleSelection(field, value) {
  if (state.quizData[field].includes(value)) {
    state.quizData[field] = state.quizData[field].filter(item => item !== value);
  } else {
    state.quizData[field] = [...state.quizData[field], value];
  }
  renderScreen();
}

// Function to filter hotels based on user preferences
function filterHotels() {
  return hotelResults
    .map(hotel => {
      let score = 0;
      let matches = 0;
      let totalCriteria = 0;

      // Location match (strict)
      if (state.quizData.location === 'Anywhere' || 
          state.quizData.location === '' || 
          hotel.location === state.quizData.location) {
        score += 20;
        matches++;
      }
      totalCriteria++;

      // Generate a price within the selected range
      const minPrice = state.quizData.budget.min;
      const maxPrice = state.quizData.budget.max;
      const priceRange = maxPrice - minPrice;
      
      // Use the hotel's price category ($, $$, $$$) to influence where in the range it falls
      let priceMultiplier;
      switch (hotel.price) {
        case '$':
          priceMultiplier = 0.2 + Math.random() * 0.2; // 20-40% of range
          break;
        case '$$':
          priceMultiplier = 0.4 + Math.random() * 0.2; // 40-60% of range
          break;
        case '$$$':
          priceMultiplier = 0.6 + Math.random() * 0.4; // 60-100% of range
          break;
        default:
          priceMultiplier = Math.random();
      }
      
      const actualPrice = Math.round(minPrice + (priceRange * priceMultiplier));
      hotel.actualPrice = actualPrice;

      // Budget match (now using actual price)
      if (actualPrice >= minPrice && actualPrice <= maxPrice) {
        score += 20;
        matches++;
      }
      totalCriteria++;

      // Mood match (flexible - any matching mood)
      if (!state.quizData.mood || state.quizData.mood === '') {
        score += 10;
        matches++;
      } else if (hotel.mood.some(m => m.toLowerCase().includes(state.quizData.mood.toLowerCase()))) {
        score += 10;
        matches++;
      }
      totalCriteria++;

      // Priority match (flexible)
      if (state.quizData.priority === '' || hotel.priority === state.quizData.priority) {
        score += 10;
        matches++;
      }
      totalCriteria++;

      // Crowd preference match (flexible)
      if (state.quizData.crowd === '' || hotel.crowd === state.quizData.crowd) {
        score += 10;
        matches++;
      }
      totalCriteria++;

      // Room features match (flexible - at least one matching feature)
      if (state.quizData.features.length === 0) {
        score += 10;
        matches++;
      } else if (state.quizData.features.some(feature => hotel.roomFeatures.includes(feature))) {
        score += 10;
        matches++;
      }
      totalCriteria++;

      // Extras match (flexible - at least one matching extra)
      if (state.quizData.extras.length === 0) {
        score += 10;
        matches++;
      } else if (state.quizData.extras.some(extra => hotel.extras.includes(extra))) {
        score += 10;
        matches++;
      }
      totalCriteria++;

      // Add bonus points for higher ratings
      score += (hotel.rating - 4) * 5;

      return {
        ...hotel,
        matchScore: score,
        matchPercentage: (matches / totalCriteria) * 100
      };
    })
    .filter(hotel => hotel.matchPercentage >= 30) // Show hotels that match at least 30% of criteria
    .sort((a, b) => b.matchScore - a.matchScore); // Sort by match score
}

// UI rendering functions
function renderScreen() {
  console.log('renderScreen called with currentScreen:', state.currentScreen);
  const content = document.getElementById('content');
  if (!content) {
    console.error('Content element not found');
    return;
  }

  let template = '';
  switch (state.currentScreen) {
    case 0:
      template = welcomeScreenTemplate;
      break;
    case 1:
      template = locationSelectionTemplate;
      break;
    case 2:
      template = moodSelectionTemplate;
      break;
    case 3:
      template = prioritySelectionTemplate;
      break;
    case 4:
      template = crowdSelectionTemplate;
      break;
    case 5:
      template = featuresSelectionTemplate;
      break;
    case 6:
      template = extrasSelectionTemplate;
      break;
    case 7:
      template = budgetSelectionTemplate;
      break;
    case 8:
      content.innerHTML = '<div class="flex flex-col items-center justify-center min-h-screen p-6 text-center"><div class="animate-pulse mb-6"><i data-feather="search" class="w-16 h-16 text-green-500"></i></div><h2 class="text-2xl font-bold mb-3 text-green-800">Hunting down your dream stay...</h2><p class="text-gray-600 mb-8">Ooh cozy vibes coming your way!</p><div class="w-full max-w-md bg-gray-200 rounded-full h-2.5 mb-6"><div class="bg-green-600 h-2.5 rounded-full w-3/4 animate-pulse"></div></div></div>';
      feather.replace();
      setTimeout(() => {
        state.currentScreen = 9;
        renderScreen();
      }, 2000);
      return;
    case 9:
      // Results screen
      const filteredHotels = filterHotels();
      const vibe = state.quizData.mood || "perfect";
      
      content.innerHTML = `
        <div class="p-6">
          <h2 class="text-2xl font-bold mb-2 text-green-800">Your Perfect Matches</h2>
          <p class="text-gray-500 mb-6">Based on your ${vibe} vibe</p>
          
          ${filteredHotels.length === 0 ? `
            <div class="text-center py-8">
              <i data-feather="search" class="w-12 h-12 text-gray-400 mb-4"></i>
              <h3 class="text-xl font-semibold text-gray-700 mb-2">No exact matches found</h3>
              <p class="text-gray-500 mb-6">Try adjusting your preferences or click below to see all hotels</p>
              <button class="btn-primary" id="show-all-hotels">
                Show All Hotels
              </button>
            </div>
          ` : `
            <div class="space-y-6" id="hotel-results">
              ${filteredHotels.map((hotel, index) => `
                <div class="hotel-card bg-white rounded-xl shadow-md overflow-hidden">
                  <img 
                    src="${hotel.image}" 
                    alt="${hotel.name}" 
                    class="w-full h-48 object-cover"
                  />
                  <div class="p-4">
                    <div class="flex justify-between items-start mb-2">
                      <h3 class="font-bold text-lg">${hotel.name}</h3>
                      <div class="flex items-center">
                        <i data-feather="star" class="w-4 h-4 text-yellow-400 mr-1"></i>
                        <span class="text-sm">${hotel.rating}</span>
                      </div>
                    </div>
                    <p class="text-gray-600 text-sm mb-3">${hotel.summary}</p>
                    
                    <div class="flex justify-between text-sm mb-3">
                      <div class="flex items-center">
                        <i data-feather="smile" class="w-4 h-4 text-green-500 mr-1"></i>
                        <span>Mood: ${hotel.moodScore}%</span>
                      </div>
                      <div class="flex items-center">
                        <i data-feather="home" class="w-4 h-4 text-green-500 mr-1"></i>
                        <span>Sleep: ${hotel.sleepScore}%</span>
                      </div>
                      <div class="flex items-center">
                        <i data-feather="clock" class="w-4 h-4 text-green-500 mr-1"></i>
                        <span>${hotel.distance}</span>
                      </div>
                    </div>
                    
                    <div class="flex justify-between items-center mb-3">
                      <span class="text-gray-500 text-sm">${hotel.reviews} reviews</span>
                      <span class="font-semibold">$${hotel.actualPrice.toLocaleString()}/night</span>
                    </div>
                    
                    <button class="btn-primary w-full">
                      View Details
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
            
            <button class="btn-secondary w-full mt-6">
              Show More Like This
            </button>
          `}
          
          <button id="start-over-btn" class="w-full mt-4 text-gray-500 py-2 rounded-lg font-medium hover:text-gray-700 transition">
            Start Over
          </button>
        </div>
      `;
      
      // Add event listeners for the results page
      if (filteredHotels.length === 0) {
        const showAllBtn = content.querySelector('#show-all-hotels');
        if (showAllBtn) {
          showAllBtn.addEventListener('click', () => {
            state.quizData = {
              location: '',
              mood: '',
              priority: '',
              crowd: '',
              features: [],
              extras: [],
              budget: { min: 0, max: 1000 }
            };
            renderScreen();
          });
        }
      }
      
      const startOverBtn = content.querySelector('#start-over-btn');
      if (startOverBtn) {
        startOverBtn.addEventListener('click', startOver);
      }
      feather.replace();
      return;
  }

  if (state.currentScreen <= 7) {
    content.className = 'p-6';
    content.innerHTML = template;
    
    // Initialize any screen-specific functionality
    if (state.currentScreen === 0) { // Welcome screen
      const startQuizBtn = document.getElementById('start-quiz-btn');
      if (startQuizBtn) {
        startQuizBtn.addEventListener('click', () => {
          console.log('Start Quiz button clicked');
          state.currentScreen = 1;
          renderScreen();
        });
      }
    } else if (state.currentScreen === 7) { // Budget screen
      // Initialize budget slider after the template is rendered
      setTimeout(() => {
        initializeBudgetSlider();
      }, 0);
    } else { // All other screens (1-6)
      const optionButtons = content.querySelectorAll('.option-button');
      optionButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Remove selected class from all buttons
          optionButtons.forEach(btn => btn.classList.remove('selected'));
          // Add selected class to clicked button
          button.classList.add('selected');
          
          // Store the selected value in state based on current screen
          const value = button.dataset.value;
          switch (state.currentScreen) {
            case 1:
              state.quizData.location = value;
              break;
            case 2:
              state.quizData.mood = value;
              break;
            case 3:
              state.quizData.priority = value;
              break;
            case 4:
              state.quizData.crowd = value;
              break;
            case 5:
              state.quizData.features = [value];
              break;
            case 6:
              state.quizData.extras = [value];
              break;
          }
        });
      });
    }
    
    // Add Next button event listener for all screens except welcome and budget
    if (state.currentScreen !== 0 && state.currentScreen !== 7) {
      const nextBtn = content.querySelector('#next-btn');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          console.log('Next button clicked on screen:', state.currentScreen);
          handleNext();
        });
      }
    }
  }
  
  // Initialize Feather icons
  feather.replace();
}

// Screen templates
const welcomeScreenTemplate = `
  <div class="flex flex-col items-center justify-center h-full text-center p-6">
    <div class="bg-green-50 p-4 rounded-full mb-6 animate-pulse">
      <i data-feather="home" class="w-12 h-12 text-green-500"></i>
    </div>
    <h1 class="text-3xl font-bold mb-3 text-green-800">Find Your Perfect Stay in 30 Seconds</h1>
    <p class="text-gray-600 mb-8">No endless scrolling. Just answer a few quick questions and get your best hotel matches.</p>
    <button id="start-quiz-btn" class="btn-primary">
      Start Quiz <i data-feather="arrow-right" class="w-5 h-5"></i>
    </button>
  </div>
`;

const locationSelectionTemplate = `
  <div class="flex flex-col items-center justify-center h-full text-center p-6">
    <h2 class="text-2xl font-bold mb-6 text-green-800">Where are you headed?</h2>
    <div class="grid grid-cols-1 gap-3 w-full max-w-md mb-8">
      <button class="option-button" data-value="Tokyo">Tokyo</button>
      <button class="option-button" data-value="Bali">Bali</button>
      <button class="option-button" data-value="Paris">Paris</button>
      <button class="option-button" data-value="New York">New York</button>
      <button class="option-button" data-value="Anywhere">Anywhere / Surprise Me</button>
    </div>
    <div class="flex justify-center w-full">
      <button id="next-btn" class="btn-primary">
        Next <i data-feather="arrow-right" class="w-5 h-5 inline-block ml-2"></i>
      </button>
    </div>
  </div>
`;

const moodSelectionTemplate = `
  <div class="flex flex-col items-center justify-center h-full text-center p-6">
    <h1 class="text-3xl font-bold text-green-800 mb-8">What's your vibe for this trip?</h1>
    <div class="space-y-4 w-full max-w-md mb-8">
      <button class="option-button w-full" data-value="chill">Chill & Relaxed</button>
      <button class="option-button w-full" data-value="excited">Excited & Adventurous</button>
      <button class="option-button w-full" data-value="productive">Productive & Focused</button>
      <button class="option-button w-full" data-value="luxurious">Luxurious & Pampered</button>
      <button class="option-button w-full" data-value="budget">Budget-Friendly & Practical</button>
    </div>
    <div class="flex justify-center w-full">
      <button id="next-btn" class="btn-primary">
        Next <i data-feather="arrow-right" class="w-5 h-5 inline-block ml-2"></i>
      </button>
    </div>
  </div>
`;

const prioritySelectionTemplate = `
  <div class="flex flex-col items-center justify-center h-full text-center p-6">
    <h2 class="text-2xl font-bold mb-6 text-green-800">What matters most to you?</h2>
    <div class="grid grid-cols-1 gap-3 w-full max-w-md mb-8">
      <button class="option-button" data-value="Great Sleep">Great Sleep</button>
      <button class="option-button" data-value="Location Convenience">Location Convenience</button>
      <button class="option-button" data-value="Instagram-worthy Design">Instagram-worthy Design</button>
      <button class="option-button" data-value="Top-notch Amenities">Top-notch Amenities</button>
      <button class="option-button" data-value="Price">Price</button>
    </div>
    <div class="flex justify-center w-full">
      <button id="next-btn" class="btn-primary">
        Next <i data-feather="arrow-right" class="w-5 h-5 inline-block ml-2"></i>
      </button>
    </div>
  </div>
`;

const crowdSelectionTemplate = `
  <div class="flex flex-col items-center justify-center h-full text-center p-6">
    <h2 class="text-2xl font-bold mb-6 text-green-800">How do you feel about crowds?</h2>
    <div class="grid grid-cols-1 gap-3 w-full max-w-md mb-8">
      <button class="option-button" data-value="Love them!">Love them!</button>
      <button class="option-button" data-value="Somewhere in between">Somewhere in between</button>
      <button class="option-button" data-value="Prefer quiet hideouts">Prefer quiet hideouts</button>
    </div>
    <div class="flex justify-center w-full">
      <button id="next-btn" class="btn-primary">
        Next <i data-feather="arrow-right" class="w-5 h-5 inline-block ml-2"></i>
      </button>
    </div>
  </div>
`;

const featuresSelectionTemplate = `
  <div class="flex flex-col items-center justify-center h-full text-center p-6">
    <h2 class="text-2xl font-bold mb-6 text-green-800">What's your dream room like?</h2>
    <div class="grid grid-cols-2 gap-3 w-full max-w-md mb-8">
      <button class="option-button" data-value="Big Windows">Big Windows</button>
      <button class="option-button" data-value="Huge Bed">Huge Bed</button>
      <button class="option-button" data-value="Bathtub">Bathtub</button>
      <button class="option-button" data-value="Balcony">Balcony</button>
      <button class="option-button" data-value="Minimalist Vibes">Minimalist Vibes</button>
      <button class="option-button" data-value="Cozy Atmosphere">Cozy Atmosphere</button>
    </div>
    <div class="flex justify-center w-full">
      <button id="next-btn" class="btn-primary">
        Next <i data-feather="arrow-right" class="w-5 h-5 inline-block ml-2"></i>
      </button>
    </div>
  </div>
`;

const extrasSelectionTemplate = `
  <div class="flex flex-col items-center justify-center h-full text-center p-6">
    <h2 class="text-2xl font-bold mb-6 text-green-800">Any must-haves?</h2>
    <div class="grid grid-cols-1 gap-3 w-full max-w-md mb-8">
      <button class="option-button" data-value="Free Breakfast">Free Breakfast</button>
      <button class="option-button" data-value="Near Public Transport">Near Public Transport</button>
      <button class="option-button" data-value="Pet-friendly">Pet-friendly</button>
      <button class="option-button" data-value="Eco-friendly Hotel">Eco-friendly Hotel</button>
    </div>
    <div class="flex justify-center w-full">
      <button id="next-btn" class="btn-primary">
        Next <i data-feather="arrow-right" class="w-5 h-5 inline-block ml-2"></i>
      </button>
    </div>
  </div>
`;

const budgetSelectionTemplate = `
  <div class="flex flex-col items-center justify-center h-full text-center p-6">
    <h2 class="text-2xl font-bold text-green-800 mb-8">What's your budget per night?</h2>
    <div class="price-slider w-full max-w-md">
      <div class="price-display">
        <span id="min-price">$70</span>
        <span id="max-price">$1,300+</span>
      </div>
      <div class="range-slider">
        <input type="range" id="min-range" min="70" max="1300" value="70" step="10">
        <input type="range" id="max-range" min="70" max="1300" value="1300" step="10">
      </div>
      <div class="price-labels">
        <span>$70</span>
        <span>$350</span>
        <span>$700</span>
        <span>$1,000</span>
        <span>$1,300+</span>
      </div>
    </div>
    <div class="flex justify-center w-full mt-8">
      <button id="next-btn" class="btn-primary">
        Next <i data-feather="arrow-right" class="w-5 h-5 inline-block ml-2"></i>
      </button>
    </div>
  </div>
`;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Feather icons
  feather.replace();
  
  // Render initial screen
  renderScreen();
  
  // Debug helper
  window.goToResults = goToResults;
});

function initializeBudgetSlider() {
  const minRange = document.getElementById('min-range');
  const maxRange = document.getElementById('max-range');
  const minPrice = document.getElementById('min-price');
  const maxPrice = document.getElementById('max-price');

  if (!minRange || !maxRange || !minPrice || !maxPrice) {
    console.error('Budget slider elements not found');
    return;
  }

  // Set initial positions
  minRange.value = 70;
  maxRange.value = 1300;
  minPrice.textContent = '$70';
  maxPrice.textContent = '$1,300+';

  // Update state with initial values
  state.quizData.budget = {
    min: 70,
    max: 1300
  };

  // Format price with commas
  function formatPrice(price) {
    return '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Add event listeners
  minRange.addEventListener('input', function() {
    const minVal = parseInt(this.value);
    const maxVal = parseInt(maxRange.value);
    
    // Prevent min from exceeding max - 50
    if (minVal >= maxVal - 50) {
      this.value = maxVal - 50;
      return;
    }
    
    minPrice.textContent = formatPrice(minVal);
    state.quizData.budget.min = minVal;
  });

  maxRange.addEventListener('input', function() {
    const maxVal = parseInt(this.value);
    const minVal = parseInt(minRange.value);
    
    // Prevent max from going below min + 50
    if (maxVal <= minVal + 50) {
      this.value = minVal + 50;
      return;
    }
    
    maxPrice.textContent = maxVal === 1300 ? '$1,300+' : formatPrice(maxVal);
    state.quizData.budget.max = maxVal;
  });

  // Add next button event listener
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      console.log('Next button clicked on budget screen');
      handleNext();
    });
  }
}
