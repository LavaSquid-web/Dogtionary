const dogsData = [
  {
    name: "Chihuahua",
    description: "Graceful, alert, and swift tiny dogs with huge, fiery personalities.",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80",
    origin: "Mexico",
    lifespan: "12 - 20 years",
    temperament: "Charming, Graceful, Sassy, Devoted",
    weight: "1.5 - 3 kg"
  },
  {
    name: "Border Collie",
    description: "Remarkably smart, athletic, and driven herding dogs with endless stamina.",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80",
    origin: "United Kingdom",
    lifespan: "12 - 15 years",
    temperament: "Tenacious, Keen, Energetic, Responsive",
    weight: "14 - 20 kg"
  },
  {
    name: "Akita",
    description: "Large, powerful, and dignified mountain guard dogs from Japan.",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
    origin: "Japan",
    lifespan: "10 - 14 years",
    temperament: "Courageous, Dignified, Devoted, Alert",
    weight: "32 - 59 kg"
  },
  {
    name: "Maltese",
    description: "Gentle, fearless, and affectionate toy dogs with silky white coats.",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=600&q=80",
    origin: "Mediterranean Area",
    lifespan: "12 - 15 years",
    temperament: "Playful, Easygoing, Gentle, Lively",
    weight: "2 - 4 kg"
  },
  {
    name: "Bernese Mountain Dog",
    description: "Large, sturdy working dogs with a striking tri-color coat and gentle nature.",
    image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=600&q=80",
    origin: "Switzerland",
    lifespan: "7 - 10 years",
    temperament: "Affectionate, Intelligent, Faithful, Calm",
    weight: "35 - 55 kg"
  },
  {
    name: "Basset Hound",
    description: "Easygoing scent hounds known for long droopy ears and short stature.",
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80",
    origin: "France",
    lifespan: "12 - 13 years",
    temperament: "Patient, Low-Key, Tenacious, Friendly",
    weight: "20 - 29 kg"
  },
  {
    name: "French Bulldog",
    description: "Affectionate, quiet, and adaptable companion dogs with bat-like ears.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    origin: "France",
    lifespan: "10 - 12 years",
    temperament: "Playful, Adaptable, Smart, Affectionate",
    weight: "8 - 14 kg"
  },
  {
    name: "German Shepherd",
    description: "Versatile, noble, and highly intelligent working and service dogs.",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=600&q=80",
    origin: "Germany",
    lifespan: "7 - 10 years",
    temperament: "Confident, Courageous, Smart, Loyal",
    weight: "30 - 40 kg"
  },
  {
    name: "Golden Retriever",
    description: "Friendly, devoted, and intelligent hunting retrievers with golden coats.",
    image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&w=600&q=80",
    origin: "United Kingdom",
    lifespan: "10 - 12 years",
    temperament: "Intelligent, Friendly, Devoted, Gentle",
    weight: "25 - 34 kg"
  },
  {
    name: "Siberian Husky",
    description: "High-energy endurance sled dogs famous for striking eyes and thick coats.",
    image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=600&q=80",
    origin: "Russia",
    lifespan: "12 - 14 years",
    temperament: "Outgoing, Mischievous, Loyal, Alert",
    weight: "16 - 27 kg"
  },
  {
    name: "Boxer",
    description: "Playful, energetic, and protective working dogs with smooth muscle builds.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
    origin: "Germany",
    lifespan: "10 - 12 years",
    temperament: "Fun-Loving, Bright, Active, Devoted",
    weight: "25 - 32 kg"
  },
  {
    name: "Rottweiler",
    description: "Robust, confident guardians with powerful builds and loyal dispositions.",
    image: "https://images.unsplash.com/photo-1567752881298-894bb81f9379?auto=format&fit=crop&w=600&q=80",
    origin: "Germany",
    lifespan: "9 - 10 years",
    temperament: "Loyal, Loving, Confident Guard",
    weight: "35 - 60 kg"
  },
  {
    name: "Dachshund",
    description: "Iconic long-bodied, short-legged hounds bred for keen scent tracking.",
    image: "https://images.unsplash.com/photo-1514988506349-270404e38e68?auto=format&fit=crop&w=600&q=80",
    origin: "Germany",
    lifespan: "12 - 16 years",
    temperament: "Clever, Stubborn, Devoted, Lively",
    weight: "7 - 14 kg"
  },
  {
    name: "Beagle",
    description: "Merry, compact scent hounds with inquisitive expressions and great noses.",
    image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=600&q=80",
    origin: "United Kingdom",
    lifespan: "12 - 15 years",
    temperament: "Amiable, Determined, Excitable, Gentle",
    weight: "9 - 11 kg"
  },
  {
    name: "Pug",
    description: "Charming toy dogs with wrinkled faces, curled tails, and loving natures.",
    image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=600&q=80",
    origin: "China",
    lifespan: "13 - 15 years",
    temperament: "Charming, Mischievous, Loving, Docile",
    weight: "6 - 8 kg"
  },
  {
    name: "Great Dane",
    description: "Majestic, giant-sized companions renowned for patience and soft temperaments.",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=600&q=80",
    origin: "Germany",
    lifespan: "7 - 10 years",
    temperament: "Friendly, Patient, Dependable, Gentle",
    weight: "50 - 90 kg"
  },
  {
    name: "Standard Poodle",
    description: "Highly athletic, proud, and exceptionally smart curly-coated working dogs.",
    image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?auto=format&fit=crop&w=600&q=80",
    origin: "France / Germany",
    lifespan: "12 - 15 years",
    temperament: "Active, Proud, Very Smart, Trainable",
    weight: "20 - 32 kg"
  },
  {
    name: "Doberman Pinscher",
    description: "Sleek, powerful guardians admired for keen intelligence and alertness.",
    image: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?auto=format&fit=crop&w=600&q=80",
    origin: "Germany",
    lifespan: "10 - 12 years",
    temperament: "Fearless, Energetic, Alert, Obedient",
    weight: "32 - 45 kg"
  },
  {
    name: "Shih Tzu",
    description: "Affectionate, coat-rich lapdogs bred specifically for royal companionship.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
    origin: "China / Tibet",
    lifespan: "10 - 16 years",
    temperament: "Affectionate, Playful, Outgoing, Gentle",
    weight: "4 - 7.5 kg"
  },
  {
    name: "Samoyed",
    description: "Graceful Arctic sled dogs known for dense white coats and smiling faces.",
    image: "https://images.unsplash.com/photo-1529426301869-82f4d9b50be0?auto=format&fit=crop&w=600&q=80",
    origin: "Russia",
    lifespan: "12 - 14 years",
    temperament: "Friendly, Gentle, Adaptable, Alert",
    weight: "20 - 30 kg"
  }
  document.addEventListener('DOMContentLoaded', () => {
  const dogGrid = document.getElementById('dogGrid');
  const searchInput = document.getElementById('searchInput');
  const dogModal = document.getElementById('dogModal');
  const modalContent = document.getElementById('modalContent');
  const closeModal = document.getElementById('closeModal');
  const breedCount = document.getElementById('breedCount');

  function renderCards(dogs) {
    if (!dogGrid) return;
    dogGrid.innerHTML = '';
    if (breedCount) breedCount.textContent = `Showing ${dogs.length} breeds`;

    dogs.forEach((dog) => {
      const card = document.createElement('div');
      card.className = 'breed-card';
      card.innerHTML = `
        <div class="img-wrapper">
          <img src="${dog.image}" alt="${dog.name}" loading="lazy">
        </div>
        <div class="card-body">
          <h3>${dog.name}</h3>
          <p>${dog.description}</p>
          <button type="button" class="profile-btn">View Details</button>
        </div>
      `;

      card.addEventListener('click', () => {
        if (!modalContent || !dogModal) return;
        modalContent.innerHTML = `
          <img src="${dog.image}" class="modal-img" alt="${dog.name}">
          <h2>${dog.name}</h2>
          <p style="margin: 8px 0; color: var(--text-muted);">${dog.description}</p>
          <ul class="modal-details-list">
            <li><span>Origin</span><span>${dog.origin}</span></li>
            <li><span>Lifespan</span><span>${dog.lifespan}</span></li>
            <li><span>Temperament</span><span>${dog.temperament}</span></li>
            <li><span>Weight</span><span>${dog.weight}</span></li>
          </ul>
        `;
        dogModal.classList.add('active');
      });

      dogGrid.appendChild(card);
    });
  }

  if (closeModal && dogModal) {
    closeModal.addEventListener('click', () => dogModal.classList.remove('active'));
    window.addEventListener('click', (e) => {
      if (e.target === dogModal) dogModal.classList.remove('active');
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const filtered = dogsData.filter(d => 
        d.name.toLowerCase().includes(term) || 
        d.temperament.toLowerCase().includes(term) ||
        d.origin.toLowerCase().includes(term)
      );
      renderCards(filtered);
    });
  }

  renderCards(dogsData);
});
];
document.addEventListener('DOMContentLoaded', () => {
  const dogGrid = document.getElementById('dogGrid');
  const searchInput = document.getElementById('searchInput');
  const dogModal = document.getElementById('dogModal');
  const modalContent = document.getElementById('modalContent');
  const closeModal = document.getElementById('closeModal');
  const breedCount = document.getElementById('breedCount');

  function renderCards(dogs) {
    if (!dogGrid) return;
    dogGrid.innerHTML = '';
    if (breedCount) breedCount.textContent = `Showing ${dogs.length} breeds`;

    dogs.forEach((dog) => {
      const card = document.createElement('div');
      card.className = 'breed-card';
      card.innerHTML = `
        <div class="img-wrapper">
          <img src="${dog.image}" alt="${dog.name}" loading="lazy">
        </div>
        <div class="card-body">
          <h3>${dog.name}</h3>
          <p>${dog.description}</p>
          <button type="button" class="profile-btn">View Details</button>
        </div>
      `;

      card.addEventListener('click', () => {
        if (!modalContent || !dogModal) return;
        modalContent.innerHTML = `
          <img src="${dog.image}" class="modal-img" alt="${dog.name}">
          <h2>${dog.name}</h2>
          <p style="margin: 8px 0; color: var(--text-muted);">${dog.description}</p>
          <ul class="modal-details-list">
            <li><span>Origin</span><span>${dog.origin}</span></li>
            <li><span>Lifespan</span><span>${dog.lifespan}</span></li>
            <li><span>Temperament</span><span>${dog.temperament}</span></li>
            <li><span>Weight</span><span>${dog.weight}</span></li>
          </ul>
        `;
        dogModal.classList.add('active');
      });

      dogGrid.appendChild(card);
    });
  }

  if (closeModal && dogModal) {
    closeModal.addEventListener('click', () => dogModal.classList.remove('active'));
    window.addEventListener('click', (e) => {
      if (e.target === dogModal) dogModal.classList.remove('active');
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      const filtered = dogsData.filter(d => 
        d.name.toLowerCase().includes(term) || 
        d.temperament.toLowerCase().includes(term) ||
        d.origin.toLowerCase().includes(term)
      );
      renderCards(filtered);
    });
  }

  renderCards(dogsData);
});