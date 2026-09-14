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
  },
  {
    name: "Boston Terrier",
    description: "The Boston Terrier has a highly affectionate, lively, and intelligent temperament...",
     image: "https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2F4f3e155a1fba0441792217ab17a6ac679bd3a7d0-800x600.jpg&w=640&q=80",
    origin: "Boston, Massachusetts",
    lifespan: "11 - 13 years",
    temperament: "Deeply loyal, and exceptional family companions",
    weight: "4.5 - 11.3 kg"
  },
  {
    name: "Bullmastiff",
    description: "A large, powerful, and affectionate guard dog known for its courage, loyalty, and calm demeanor.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz00c7BUlEBMg63LUS6TRZEDkxgNTL9BDmvE8Lf5ONhPEhT3JnGINCC9MYpNDf16bhvG64GT2_8JihN1fVS2-jD7Py3SP62vkbutotQA&s=10",
    origin: "United Kingdom",
    lifespan: "8 - 10 years",
    temperament: "Loyal, Affectionate, Protective, Calm, Alert",
    weight: "50 - 59 kg"
},
{
    name: "Australian Shepherd",
    description: "An intelligent, active herding dog with an irresistible impulse to work.",
    image: "https://cdn.britannica.com/22/234622-050-4D6BD081/Australian-shepherd-dog-red-merle.jpg",
    origin: "United States",
    lifespan: "12 - 15 years",
    temperament: "Smart, Work-oriented, Exuberant, Playful, Attentive",
    weight: "18 - 29 kg"
},
{
    name: "Cavalier King Charles Spaniel",
    description: "An affectionate, gentle, and graceful toy spaniel that loves human companionship.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQFZnG_jeKLN7EEPzMymv7qTfOktO0fhfpBKRtLaVrIoFi4k_TZnqnH3n0YlqXNCqG8zADaSvbXELmkipHlCgrSS7UjUxF2JIBYsUxWI&s=10",
    origin: "United Kingdom",
    lifespan: "12 - 15 years",
    temperament: "Affectionate, Gentle, Fearless, Sporting, Adaptable",
    weight: "5.9 - 8.2 kg"
},
{
    name: "Beagle",
    description: "A compact, friendly, and curious hound with an exceptional sense of smell and cheerful attitude.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rf_LRA5T9siJStXuLvAtpHwU77SyEzOZWNmrDtcduCm5NZV010GWrGmcYlTfHi76mtIxiZNsAfBXOksUVDL166KEPGzZqMVXTe7Q2jM_&s=10",
    origin: "United Kingdom",
    lifespan: "12 - 15 years",
    temperament: "Gentle, Even Tempered, Excitable, Determined, Friendly",
    weight: "9 - 11 kg"
},
{
    name: "Pembroke Welsh Corgi",
    description: "A sturdy, low-set, and exceptionally smart herding dog famous for its association with British royalty.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYNFeWqSiUqvJPCn6erk1dcMlD74am4nGG9bv8sF2mnSSXvycf7dzZCd5zZFvuewuEG5zVCFWKUwR2cPI0l73mnKGjL0y_DzjWGjvUomr&s=10",
    origin: "United Kingdom",
    lifespan: "12 - 15 years",
    temperament: "Tenacious, Outgoing, Friendly, Bold, Protective",
    weight: "10 - 14 kg"
},
{
    name: "Australian Cattle Dog",
    description: "A tough, energetic, and fiercely loyal herding dog built for handling livestock over vast distances.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHARdiEfXSmhzuZP_k4mmoXEiV3re7oVmsm2nl4_oFA-rEgS5S2wpumyeCR9lK6O9j0lJo0jjrCvypHnEHVk5Qpv-OUxfwuxLTWSAX70Zl&s=10",
    origin: "Australia",
    lifespan: "12 - 16 years",
    temperament: "Cautious, Energetic, Obedient, Loyal, Protective",
    weight: "15 - 22 kg"
},
{
    name: "Yorkshire Terrier",
    description: "A small terrier with a big personality, known for its long, silky coat and adventurous spirit.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsXmK-cW9izRanPbUvsWpAWXI6FLGFICT-buHaVq3Gcw&s=10",
    origin: "United Kingdom",
    lifespan: "13 - 16 years",
    temperament: "Independent, Intelligent, Courageous, Confident, Energetic",
    weight: "2 - 3.2 kg"
},
{
    name: "Alaskan Malamute",
    description: "A heavy-duty arctic sled dog combining immense strength, endurance, and a deeply affectionate nature.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8utckRB7oISoU1xukFYFTAyjxlGxqnxh-IJ5f7MwsyRCkhuFnbOjcOAlV9-5-gEfW41r48A2WSJGVY2s3vEfbpExS8jvPDjRcdB4QicV4Ag&s=10",
    origin: "United States",
    lifespan: "10 - 14 years",
    temperament: "Friendly, Affectionate, Devoted, Loyal, Playful",
    weight: "34 - 38 kg"
},
{
    name: "Bloodhound",
    description: "A large, docile scent hound renowned for its unmatched tracking abilities and gentle, wrinkly face.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIyGaXs3Ia72SSAu1He_0QiHC2cx5zOfmkGvIkqotfw&s=10",
    origin: "Belgium / France",
    lifespan: "10 - 12 years",
    temperament: "Stubborn, Affectionate, Even Tempered, Gentle",
    weight: "36 - 50 kg"
},
{
    name: "Chesapeake Bay Retriever",
    description: "A strong, waterproof-coated gundog bred to brave icy waters for retrieving waterfowl.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Chesapeake_Bay_Retriever_standing.jpg",
    origin: "United States",
    lifespan: "10 - 13 years",
    temperament: "Affectionate, Intelligent, Quiet, Protective, Happy",
    weight: "25 - 36 kg"
},
{
    name: "Dalmatian",
    description: "An athletic, striking carriage dog famously recognized by its distinct black or liver spots.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTqoC3078NeUiQLvKhzexG-P3cOUBvHL9M-thhjmGTA&s=10",
    origin: "Croatia",
    lifespan: "11 - 13 years",
    temperament: "Outgoing, Friendly, Active, Intelligent, Sensitive",
    weight: "15 - 32 kg"
},
{
    name: "Newfoundland",
    description: "A giant, sweet-tempered working dog famous for its heavy water-resistant coat and rescue skills.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesAg2-ipH5SP25ACKHl6CQGSRaCp6gC-gkM84ee9htw&s=10",
    origin: "Canada",
    lifespan: "9 - 10 years",
    temperament: "Docile, Gentle, Trainable, Patient, Loving",
    weight: "45 - 68 kg"
},
{
    name: "Papillon",
    description: "A dainty, graceful toy spaniel distinguished by its characteristic butterfly-like fringed ears.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9LzJbvkYxQVclz6_VjsRf8WwSk8hBS9If7uAd-wqbY980sNGJsH9hiJ89qWaBOczUuU_HL9CcQYFCVC_x97y4pneJ4IJXJ8xX17S1Fp6t&s=10",
    origin: "France / Belgium",
    lifespan: "14 - 16 years",
    temperament: "Friendly, Alert, Obedient, Intelligent, Happy",
    weight: "3.2 - 4.5 kg"
},
{
    name: "Miniature Schnauzer",
    description: "A small, spirited terrier-like dog with a distinct wiry coat, bushy beard, and affectionate personality.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLg5QMHhqfSfeO6FOKC89XFwwjKrAXEgpEF4sHq_lWQQ&s=10",
    origin: "Germany",
    lifespan: "12 - 15 years",
    temperament: "Obedient, Intelligent, Friendly, Alert, Spirited",
    weight: "5.4 - 9 kg"
},
{
    name: "Shetland Sheepdog",
    description: "A bright, docile, and intensely loyal herding dog known for its beautiful long coat and keen intelligence.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFxq0Xa9mwUkpfc90e1SxZRKkKt7akSfwlNejPYG31w&s=10",
    origin: "United Kingdom",
    lifespan: "12 - 14 years",
    temperament: "Energetic, Loyal, Intelligent, Playful, Trainable",
    weight: "6.8 - 12 kg"
},
{
    name: "Brittany",
    description: "A bright, upbeat, and energetic gundog prized by hunters for its agility and sweet disposition at home.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_kgLOtyRwFJEXv7Rb9tifHbyuVDu2bR0zG9ytDgCbg&s=10",
    origin: "France",
    lifespan: "12 - 14 years",
    temperament: "Bright, Fun-loving, Attentive, Agile, Quick",
    weight: "14 - 18 kg"
},
{
    name: "English Springer Spaniel",
    description: "An affectionate, equal-tempered gundog built for distance, famous for its enthusiastic tail wags.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8s-UcGpEuOIVP3Qt__2Rih_uEnavy6P0hJ38ShfcRtg&s=10",
    origin: "United Kingdom",
    lifespan: "12 - 14 years",
    temperament: "Affectionate, Cheerful, Intelligent, Alert, Active",
    weight: "18 - 23 kg"
},
{
    name: "Cane Corso",
    description: "A magnificent, muscular Italian mastiff bred as a versatile guardian, tracker, and big-game hunter.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEbiYCsLbhWqaqjbIbDuidqidHuXzmKjV4jyOJTSHy5Q&s=10",
    origin: "Italy",
    lifespan: "9 - 12 years",
    temperament: "Reserved, Trainable, Calm, Stable, Quiet",
    weight: "40 - 50 kg"
},
{
    name: "Vizsla",
    description: "An affectionate, high-energy pointer with a sleek russet coat and a strong desire to work closely with humans.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiIzMkN7i0kv7L4-jFtiaMKcj7R656XMlHvrtid2jdtg&s=10",
    origin: "Hungary",
    lifespan: "12 - 14 years",
    temperament: "Affectionate, Energetic, Gentle, Quiet, Intelligent",
    weight: "18 - 30 kg"
},
{
    name: "Weimaraner",
    description: "A large, silver-grey hunting dog of striking appearance, renowned for speed, stamina, and boldness.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbmi6-53IFtd6KRm9B7WjoBTNLFBy78k6RFgjBJUJu4g&s=10",
    origin: "Germany",
    lifespan: "10 - 13 years",
    temperament: "Friendly, Fearless, Alert, Energetic, Powerful",
    weight: "25 - 40 kg"
},
{
    name: "Bernedoodle",
    description: "A friendly, intelligent, and affectionate crossbreed between a Bernese Mountain Dog and a Poodle.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClT9nxATHDj6jsUVLyUyjeTtPVVu5bupyfAKFiPXLKZ-cIIpFDAk-CzA&s=10",
    origin: "Canada / United States",
    lifespan: "12 - 18 years",
    temperament: "Affectionate, Intelligent, Loyal, Playful, Gentle",
    weight: "10 - 40 kg"
},
{
    name: "Bull Terrier",
    description: "A distinctively egg-headed, robust, and mischievous terrier known for its playful and clownish antics.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKZu9XhNBqaY3Lq8XcNQz3nRP3LR2nQL6lm2qfOuUKg&s=10",
    origin: "United Kingdom",
    lifespan: "10 - 14 years",
    temperament: "Playful, Keen, Sweet-Tempered, Active, Loving",
    weight: "22 - 38 kg"
},
{
    name: "Portuguese Water Dog",
    description: "An adventurous, athletic, and intelligent swimmer historically bred to herd fish into nets.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GGUCcDE5MLbRY_EWjan7YCcJV4BtLJg2o_QSYsmlbA&s=10",
    origin: "Portugal",
    lifespan: "11 - 13 years",
    temperament: "Docile, Intelligent, Independent, Brave, Impressive",
    weight: "16 - 27 kg"
},
{
    name: "Saint Bernard",
    description: "A giant, benevolent alpine rescue dog famous for its immense strength, patience, and gentle soul.",
    image: "https://www.akc.org/wp-content/uploads/2017/11/Saint-Bernard-standing-in-profile-outdoors.jpg",
    origin: "Switzerland / Italy",
    lifespan: "8 - 10 years",
    temperament: "Friendly, Lively, Calm, Gentle, Patient",
    weight: "64 - 82 kg"
},
{
    name: "Staffordshire Bull Terrier",
    description: "A muscular, tenacious, and affectionate medium-sized dog known for its profound love of family and children.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHdkEPMRuJuz3dNq05Dglg3U-0PZ9c6ZhpXdegD8cxg&s=10",
    origin: "United Kingdom",
    lifespan: "12 - 14 years",
    temperament: "Reliable, Courageous, Intelligent, Bold, Affectionate",
    weight: "11 - 17 kg"
},
{
    name: "Bichon Frise",
    description: "A cheerful, powder-puff small companion dog featuring a dense white coat and a bouncy, joyful disposition.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOkbttuycf45WbZtDLdNspPaHiGsu2x6azADiduY9mg&s=10",
    origin: "Spain / Belgium",
    lifespan: "12 - 15 years",
    temperament: "Playful, Gentle, Affectionate, Cheerful, Sensitive",
    weight: "3 - 5 kg"
},
{
    name: "Rhodesian Ridgeback",
    description: "A handsome, dignified African hound characterized by the distinctive ridge of hair running along its back.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNv3xKUZOtUuolyFvBzfq67-HSyd7N9h5ZW0KXv9hsg&s=10",
    origin: "Zimbabwe / South Africa",
    lifespan: "10 - 12 years",
    temperament: "Dignified, Intelligent, Stubborn, Affectionate, Even Tempered",
    weight: "30 - 39 kg"
},
{
    name: "Airedale Terrier",
    description: "The largest of all terriers, known as the 'King of Terriers,' recognized by its tan-and-black coat and bold character.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrnwAfdg5Ixz12eib7izMbvyyAuhxFXrh46vGfgdftw&s=10",
    origin: "United Kingdom",
    lifespan: "11 - 14 years",
    temperament: "Clever, Friendly, Courageous, Confident, Intelligent",
    weight: "18 - 29 kg"
},
{
    name: "Bouvier des Flandres",
    description: "A powerful, compact, and rough-coated farm dog bred in Flanders for heavy herding and drafting work.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUy9mIz6ZPC_9wjYZp4tXL4ZOHViAodMmLt4Xc7mEANQ&s=10",
    origin: "Belgium / France",
    lifespan: "10 - 12 years",
    temperament: "Fawny, Protective, Rational, Gentle, Loyal",
    weight: "27 - 40 kg"
},
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
},
);
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