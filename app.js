// State management
const state = {
  currentScreen: 0,
  quizData: {
    location: '',
    mood: [],
    priority: '',
    crowd: '',
    roomFeatures: [],
    extras: [],
    budget: ''
  }
};

// Mock hotel results
const hotelResults = [
  {
    name: "Sakura Retreat Tokyo",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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

function handleNext() {
  if (state.currentScreen === 6) { // Budget screen
    // Move to loading screen
    state.currentScreen = 7;
    renderScreen();
    
    // Set a timeout to automatically move to results page after 2 seconds
    setTimeout(() => {
      state.currentScreen = 9; // Move to results screen
      renderScreen();
    }, 2000);
  } else {
    state.currentScreen += 1;
    renderScreen();
  }
}

function handleBack() {
  state.currentScreen -= 1;
  renderScreen();
}

function startOver() {
  state.currentScreen = 0;
  state.quizData = {
    location: '',
    mood: [],
    priority: '',
    crowd: '',
    roomFeatures: [],
    extras: [],
    budget: ''
  };
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

      // Budget match (strict)
      if (state.quizData.budget === '' || hotel.budget === state.quizData.budget) {
        score += 20;
        matches++;
      }
      totalCriteria++;

      // Mood match (flexible - any matching mood)
      if (state.quizData.mood.length === 0) {
        score += 10;
        matches++;
      } else if (state.quizData.mood.some(mood => hotel.mood.includes(mood))) {
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
      if (state.quizData.roomFeatures.length === 0) {
        score += 10;
        matches++;
      } else if (state.quizData.roomFeatures.some(feature => hotel.roomFeatures.includes(feature))) {
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
  // Update progress bar
  if (state.currentScreen > 0 && state.currentScreen < 7) {
    progressContainer.classList.remove('hidden');
    progressBar.style.width = `${(state.currentScreen / 6) * 100}%`;
  } else {
    progressContainer.classList.add('hidden');
  }

  // Clear content
  content.innerHTML = '';

  // Render the current screen
  const screen = screens[state.currentScreen]();
  content.appendChild(screen);

  // Initialize Feather icons
  feather.replace();
}

// Screen templates
const screens = [
  // Landing Page
  () => {
    const screen = document.createElement('div');
    screen.className = 'flex flex-col items-center justify-center h-full text-center p-6';
    screen.innerHTML = `
      <div class="bg-green-50 p-4 rounded-full mb-6 animate-pulse">
        <i data-feather="home" class="w-12 h-12 text-green-500"></i>
      </div>
      <h1 class="text-3xl font-bold mb-3 text-green-800">Find Your Perfect Stay in 30 Seconds</h1>
      <p class="text-gray-600 mb-8">No endless scrolling. Just answer a few quick questions and get your best hotel matches.</p>
      <button id="start-btn" class="btn-primary">
        Start Quiz <i data-feather="arrow-right" class="w-5 h-5"></i>
      </button>
    `;
    screen.querySelector('#start-btn').addEventListener('click', handleNext);
    return screen;
  },

  // Q0 - Location
  () => {
    const screen = document.createElement('div');
    screen.className = 'p-6';
    screen.innerHTML = `
      <h2 class="text-2xl font-bold mb-6 text-green-800">Where are you headed?</h2>
      <div class="relative mb-6">
        <i data-feather="map-pin" class="absolute left-3 top-3 text-gray-400"></i>
        <input 
          type="text" 
          id="location-input"
          placeholder="Enter a destination..." 
          class="w-full p-3 pl-10 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
          value="${state.quizData.location}"
        />
      </div>
      <div class="mb-6">
        <div class="flex flex-wrap gap-2 mb-4">
          <button class="location-suggestion option-button">Tokyo</button>
          <button class="location-suggestion option-button">Bali</button>
          <button class="location-suggestion option-button">Paris</button>
          <button class="location-suggestion option-button">New York</button>
        </div>
        <button class="text-green-600 flex items-center text-sm font-semibold" id="anywhere-btn">
          <span>Anywhere / Surprise Me</span>
          <i data-feather="arrow-right" class="ml-1 w-4 h-4"></i>
        </button>
      </div>
      <div class="flex justify-between mt-8">
        <button id="back-btn" class="btn-secondary">
          <i data-feather="arrow-left" class="w-4 h-4"></i> Back
        </button>
        <button id="next-btn" class="btn-primary">
          Next <i data-feather="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    `;

    screen.querySelector('#location-input').addEventListener('input', (e) => {
      updateQuizData('location', e.target.value);
    });

    screen.querySelectorAll('.location-suggestion').forEach(btn => {
      btn.addEventListener('click', () => {
        updateQuizData('location', btn.textContent);
      });
    });

    screen.querySelector('#anywhere-btn').addEventListener('click', () => {
      updateQuizData('location', 'Anywhere');
    });

    screen.querySelector('#back-btn').addEventListener('click', handleBack);
    screen.querySelector('#next-btn').addEventListener('click', handleNext);

    return screen;
  },

  // Q1 - Mood Selector
  () => {
    const screen = document.createElement('div');
    screen.className = 'p-6';
    screen.innerHTML = `
      <h2 class="text-2xl font-bold mb-6 text-green-800">What's your vibe for this trip?</h2>
      <p class="text-gray-500 mb-4">Select all that apply</p>
      <div class="grid grid-cols-1 gap-3 mb-8" id="mood-options">
        ${["Chill & Relaxed", "Excited & Adventurous", "Productive & Focused", "Luxurious & Pampered", "Budget-Friendly & Practical"]
          .map(mood => `
            <button 
              data-value="${mood}"
              class="mood-option option-button ${state.quizData.mood.includes(mood) ? 'selected' : ''}"
            >
              ${mood}
            </button>
          `).join('')}
      </div>
      <div class="flex justify-between mt-8">
        <button id="back-btn" class="btn-secondary">
          <i data-feather="arrow-left" class="w-4 h-4"></i> Back
        </button>
        <button id="next-btn" class="btn-primary">
          Next <i data-feather="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    `;

    screen.querySelectorAll('.mood-option').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleSelection('mood', btn.dataset.value);
      });
    });

    screen.querySelector('#back-btn').addEventListener('click', handleBack);
    screen.querySelector('#next-btn').addEventListener('click', handleNext);

    return screen;
  },

  // Q2 - Trip Priority
  () => {
    const screen = document.createElement('div');
    screen.className = 'p-6';
    screen.innerHTML = `
      <h2 class="text-2xl font-bold mb-6 text-green-800">What matters most to you?</h2>
      <div class="grid grid-cols-1 gap-3 mb-8" id="priority-options">
        ${["Great Sleep", "Location Convenience", "Instagram-worthy Design", "Top-notch Amenities", "Price"]
          .map(priority => `
            <button 
              data-value="${priority}"
              class="priority-option option-button ${state.quizData.priority === priority ? 'selected' : ''}"
            >
              ${priority}
            </button>
          `).join('')}
      </div>
      <div class="flex justify-between mt-8">
        <button id="back-btn" class="btn-secondary">
          <i data-feather="arrow-left" class="w-4 h-4"></i> Back
        </button>
        <button id="next-btn" class="btn-primary">
          Next <i data-feather="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    `;

    screen.querySelectorAll('.priority-option').forEach(btn => {
      btn.addEventListener('click', () => {
        updateQuizData('priority', btn.dataset.value);
      });
    });

    screen.querySelector('#back-btn').addEventListener('click', handleBack);
    screen.querySelector('#next-btn').addEventListener('click', handleNext);

    return screen;
  },

  // Q3 - Crowd Preference
  () => {
    const screen = document.createElement('div');
    screen.className = 'p-6';
    screen.innerHTML = `
      <h2 class="text-2xl font-bold mb-6 text-green-800">How do you feel about crowds?</h2>
      <div class="grid grid-cols-1 gap-3 mb-8" id="crowd-options">
        ${["Love them!", "Somewhere in between", "Prefer quiet hideouts"]
          .map(crowd => `
            <button 
              data-value="${crowd}"
              class="crowd-option option-button ${state.quizData.crowd === crowd ? 'selected' : ''}"
            >
              ${crowd}
            </button>
          `).join('')}
      </div>
      <div class="flex justify-between mt-8">
        <button id="back-btn" class="btn-secondary">
          <i data-feather="arrow-left" class="w-4 h-4"></i> Back
        </button>
        <button id="next-btn" class="btn-primary">
          Next <i data-feather="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    `;

    screen.querySelectorAll('.crowd-option').forEach(btn => {
      btn.addEventListener('click', () => {
        updateQuizData('crowd', btn.dataset.value);
      });
    });

    screen.querySelector('#back-btn').addEventListener('click', handleBack);
    screen.querySelector('#next-btn').addEventListener('click', handleNext);

    return screen;
  },

  // Q4 - Dream Room Features
  () => {
    const screen = document.createElement('div');
    screen.className = 'p-6';
    screen.innerHTML = `
      <h2 class="text-2xl font-bold mb-6 text-green-800">What's your dream room like?</h2>
      <p class="text-gray-500 mb-4">Select all that apply</p>
      <div class="grid grid-cols-2 gap-3 mb-8" id="room-options">
        ${["Big Windows", "Huge Bed", "Bathtub", "Balcony", "Minimalist Vibes", "Cozy Atmosphere"]
          .map(feature => `
            <button 
              data-value="${feature}"
              class="room-option option-button ${state.quizData.roomFeatures.includes(feature) ? 'selected' : ''}"
            >
              ${feature}
            </button>
          `).join('')}
      </div>
      <div class="flex justify-between mt-8">
        <button id="back-btn" class="btn-secondary">
          <i data-feather="arrow-left" class="w-4 h-4"></i> Back
        </button>
        <button id="next-btn" class="btn-primary">
          Next <i data-feather="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    `;

    screen.querySelectorAll('.room-option').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleSelection('roomFeatures', btn.dataset.value);
      });
    });

    screen.querySelector('#back-btn').addEventListener('click', handleBack);
    screen.querySelector('#next-btn').addEventListener('click', handleNext);

    return screen;
  },

  // Q5 - Must-Have Extras
  () => {
    const screen = document.createElement('div');
    screen.className = 'p-6';
    screen.innerHTML = `
      <h2 class="text-2xl font-bold mb-6 text-green-800">Any must-haves?</h2>
      <p class="text-gray-500 mb-4">Optional - select any that apply</p>
      <div class="grid grid-cols-1 gap-3 mb-8" id="extras-options">
        ${["Free Breakfast", "Near Public Transport", "Pet-friendly", "Eco-friendly Hotel"]
          .map(extra => `
            <button 
              data-value="${extra}"
              class="extras-option option-button ${state.quizData.extras.includes(extra) ? 'selected' : ''}"
            >
              ${extra}
            </button>
          `).join('')}
      </div>
      <div class="flex justify-between mt-8">
        <button id="back-btn" class="btn-secondary">
          <i data-feather="arrow-left" class="w-4 h-4"></i> Back
        </button>
        <button id="next-btn" class="btn-primary">
          Next <i data-feather="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    `;

    screen.querySelectorAll('.extras-option').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleSelection('extras', btn.dataset.value);
      });
    });

    screen.querySelector('#back-btn').addEventListener('click', handleBack);
    screen.querySelector('#next-btn').addEventListener('click', handleNext);

    return screen;
  },

  // Q6 - Budget
  () => {
    const screen = document.createElement('div');
    screen.className = 'p-6';
    screen.innerHTML = `
      <h2 class="text-2xl font-bold mb-6 text-green-800">What's your budget?</h2>
      <div class="price-slider">
        <div class="price-display" id="price-display">$$</div>
        <input 
          type="range" 
          id="budget-slider" 
          min="0" 
          max="2" 
          step="1" 
          value="${state.quizData.budget === '$' ? 0 : state.quizData.budget === '$$' ? 1 : 2}"
        />
        <div class="price-labels">
          <span class="price-label ${state.quizData.budget === '$' ? 'active' : ''}" data-value="$">Low ($)</span>
          <span class="price-label ${state.quizData.budget === '$$' ? 'active' : ''}" data-value="$$">Mid ($$)</span>
          <span class="price-label ${state.quizData.budget === '$$$' ? 'active' : ''}" data-value="$$$">High ($$$)</span>
        </div>
      </div>
      <div class="flex justify-between mt-8">
        <button id="back-btn" class="btn-secondary">
          <i data-feather="arrow-left" class="w-4 h-4"></i> Back
        </button>
        <button id="next-btn" class="btn-primary">
          Next <i data-feather="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    `;

    const slider = screen.querySelector('#budget-slider');
    const priceDisplay = screen.querySelector('#price-display');
    const priceLabels = screen.querySelectorAll('.price-label');

    // Update price display and labels when slider changes
    slider.addEventListener('input', (e) => {
      const value = parseInt(e.target.value);
      const price = ['$', '$$', '$$$'][value];
      priceDisplay.textContent = price;
      
      // Update active label
      priceLabels.forEach(label => {
        label.classList.toggle('active', label.dataset.value === price);
      });
    });

    // Allow clicking on labels to set value
    priceLabels.forEach(label => {
      label.addEventListener('click', () => {
        const value = label.dataset.value;
        const index = ['$', '$$', '$$$'].indexOf(value);
        slider.value = index;
        priceDisplay.textContent = value;
        
        // Update active label
        priceLabels.forEach(l => {
          l.classList.toggle('active', l.dataset.value === value);
        });
      });
    });

    screen.querySelector('#back-btn').addEventListener('click', handleBack);
    screen.querySelector('#next-btn').addEventListener('click', () => {
      const value = ['$', '$$', '$$$'][parseInt(slider.value)];
      updateQuizData('budget', value);
      handleNext();
    });

    return screen;
  },

  // Loading screen
  () => {
    const screen = document.createElement('div');
    screen.className = 'flex flex-col items-center justify-center h-full p-6 text-center';
    screen.innerHTML = `
      <div class="animate-pulse mb-6">
        <i data-feather="search" class="w-16 h-16 text-green-500"></i>
      </div>
      <h2 class="text-2xl font-bold mb-3 text-green-800">Hunting down your dream stay...</h2>
      <p class="text-gray-600 mb-8">Ooh cozy vibes coming your way!</p>
      <div class="w-full max-w-md bg-gray-200 rounded-full h-2.5 mb-6">
        <div class="bg-green-600 h-2.5 rounded-full w-3/4 animate-pulse"></div>
      </div>
    `;
    
    return screen;
  },

  // Results page
  () => {
    const screen = document.createElement('div');
    screen.className = 'p-6';
    
    const filteredHotels = filterHotels();
    const vibe = state.quizData.mood.length > 0 
      ? state.quizData.mood[0].toLowerCase() 
      : "perfect";
      
    screen.innerHTML = `
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
                  <span class="font-semibold">${hotel.price}</span>
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
    `;

    // Add event listener for "Show All Hotels" button if no matches found
    if (filteredHotels.length === 0) {
      const showAllBtn = screen.querySelector('#show-all-hotels');
      if (showAllBtn) {
        showAllBtn.addEventListener('click', () => {
          state.quizData = {
            location: '',
            mood: [],
            priority: '',
            crowd: '',
            roomFeatures: [],
            extras: [],
            budget: ''
          };
          renderScreen();
        });
      }
    }

    screen.querySelector('#start-over-btn').addEventListener('click', startOver);

    return screen;
  }
];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  renderScreen();
  
  // Debug helper
  window.goToResults = goToResults;
}); 