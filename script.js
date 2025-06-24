function openTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  const buttons = document.querySelectorAll(".tab-button");
  contents.forEach((c) => c.classList.add("hidden"));
  buttons.forEach((b) => b.classList.remove("active"));
  document.getElementById(tabId).classList.remove("hidden");
  const index = ["jual-tab", "joki-tab", "mmr-tab"].indexOf(tabId);
  buttons[index].classList.add("active");
}

// Akun Data
const akunList = [
  {
    title: "Mythic Glory 75★",
    winrate: "82%",
    hero: 98,
    skin: 156,
    price: "Rp 2.500.000",
  },
  {
    title: "Akun Collector Series",
    winrate: "75%",
    hero: 87,
    skin: 97,
    price: "Rp 3.750.000",
  },
  {
    title: "MMR Top 100",
    winrate: "88%",
    hero: 73,
    skin: 73,
    price: "Rp 2.300.000",
  },
  {
    title: "Legend I",
    winrate: "68%",
    hero: 65,
    skin: 42,
    price: "Rp 850.000",
  },
  {
    title: "Starlight Premium",
    winrate: "71%",
    hero: 82,
    skin: 78,
    price: "Rp 1.200.000",
  },
  {
    title: "MMR Spesialis",
    winrate: "Top 100 Lokal",
    hero: 58,
    skin: 63,
    price: "Rp 2.100.000",
  },
  {
    title: "Akun Event Collab",
    winrate: "77%",
    hero: 91,
    skin: 100,
    price: "Rp 2.800.000",
  },
  {
    title: "Akun Epic Tier",
    winrate: "65%",
    hero: 49,
    skin: 28,
    price: "Rp 600.000",
  },
  {
    title: "Ex-Pro Player",
    winrate: "89%",
    hero: 110,
    skin: 204,
    price: "Rp 5.500.000",
  },
  {
    title: "Akun Sultan",
    winrate: "90%",
    hero: 120,
    skin: 230,
    price: "Rp 7.000.000",
  },
  {
    title: "Akun Rare Skin",
    winrate: "70%",
    hero: 74,
    skin: 61,
    price: "Rp 1.650.000",
  },
  {
    title: "Akun Budget Pro",
    winrate: "66%",
    hero: 55,
    skin: 38,
    price: "Rp 950.000",
  },
];

const jokiList = [
  {
    title: "Warrior",
    price: "Rp 3.000",
    durasi: "Fleksibel tergantung jumlah bintang",
    bonus: "1 bintang gratis",
  },
  {
    title: "Elite",
    price: "Rp 4.000",
    durasi: "Fleksibel tergantung jumlah bintang",
    bonus: "2 bintang gratis",
  },
  {
    title: "Master",
    price: "Rp 5.000",
    durasi: "Fleksibel tergantung jumlah bintang",
    bonus: "3 bintang gratis",
  },
  {
    title: "Grandmaster",
    price: "Rp 6.000",
    durasi: "Fleksibel tergantung jumlah bintang",
    bonus: "3 bintang gratis",
  },
  {
    title: "Epic",
    price: "Rp 7.000",
    durasi: "Fleksibel tergantung jumlah bintang",
    bonus: "3 bintang gratis",
  },
  {
    title: "Legend",
    price: "Rp 8.000",
    durasi: "Fleksibel tergantung jumlah bintang",
    bonus: "4 bintang gratis",
  },
  {
    title: "Mythic",
    price: "Rp 9.000",
    durasi: "Fleksibel tergantung jumlah bintang",
    bonus: "1 WDP gratis setiap kalo joki di atas sepuluh bintang",
  },
  {
    title: "Mythic Honor",
    price: "Rp 10.000",
    durasi: "Fleksibel tergantung jumlah bintang",
    bonus: "1 WDP gratis setiap kalo joki di atas sepuluh bintang",
  },
  {
    title: "Mythic Glory",
    price: "Rp 12.000",
    durasi: "Fleksibel tergantung jumlah bintang",
    bonus: "1 skin colector gratis setiap kalo joki di atas dua puluh bintang",
  },
  {
    title: "Mythic Immortal",
    price: "Rp 15.000",
    durasi: "Fleksibel tergantung jumlah bintang",
    bonus: "1 skin legend gratis setiap kalo joki di atas lima puluh bintang",
  },
];

const heroNames = [
  "Aamon",
  "Akai",
  "Alice",
  "Alpha",
  "Alucard",
  "Angela",
  "Argus",
  "Arlott",
  "Atlas",
  "Aurora",
  "Aulus",
  "Badang",
  "Balmond",
  "Barats",
  "Baxia",
  "Beatrix",
  "Belerick",
  "Benedetta",
  "Brody",
  "Bruno",
  "Carmilla",
  "Cecilion",
  "Chang'e",
  "Chou",
  "Claude",
  "Clint",
  "Cyclops",
  "Diggie",
  "Dyrroth",
  "Edith",
  "Esmeralda",
  "Eudora",
  "Fanny",
  "Faramis",
  "Floryn",
  "Franco",
  "Fredrinn",
  "Freya",
  "Gatotkaca",
  "Gloo",
  "Gord",
  "Granger",
  "Grock",
  "Guinevere",
  "Gusion",
  "Hanabi",
  "Hanzo",
  "Harith",
  "Harley",
  "Hayabusa",
  "Helcurt",
  "Hilda",
  "Hylos",
  "Ixia",
  "Jawhead",
  "Johnson",
  "Joy",
  "Julian",
  "Kadita",
  "Kagura",
  "Karina",
  "Karrie",
  "Khaleed",
  "Khufra",
  "Kimmy",
  "Lancelot",
  "Lapu-Lapu",
  "Layla",
  "Leomord",
  "Lesley",
  "Ling",
  "Lolita",
  "Lunox",
  "Luo Yi",
  "Martis",
  "Mathilda",
  "Melissa",
  "Minsitthar",
  "Miya",
  "Moskov",
  "Nana",
  "Natalia",
  "Natan",
  "Novaria",
  "Odette",
  "Paquito",
  "Pharsa",
  "Phoveus",
  "Popol and Kupa",
  "Rafaela",
  "Roger",
  "Ruby",
  "Saber",
  "Selena",
  "Silvanna",
  "Sun",
  "Terizla",
  "Thamuz",
  "Tigreal",
  "Valentina",
  "Vale",
  "Valir",
  "Vexana",
  "Wanwan",
  "Xavier",
  "X.Borg",
  "Yin",
  "Yi Sun-shin",
  "Yve",
  "Yu Zhong",
  "Zhask",
  "Zilong",

  // Hero Tambahan Terbaru
  "Nolan",
  "Cici",
  "Chip",
  "Zhuxin",
  "Soyou",
  "Kale",
  "Zetian",
];
// Auto-generate list push MMR hero
const mmrList = heroNames.map((hero, i) => ({
  title: `Push MMR ${hero}`,
  price: `Rp ${(200 + (i % 10) * 10).toLocaleString("id-ID")}.000`,
  durasi: `${2 + (i % 3)} hari`,
  detail: `Top ${100 - (i % 30)} ${hero} Rank Lokal.`,
}));

const topupList = [
  {
    title: "Top Up 3 Diamond",
    price: "Rp 1.000",
    bonus: "Tanpa bonus",
    method: "ID + Server",
  },
  {
    title: "Top Up 5 Diamond",
    price: "Rp 2.000",
    bonus: "Tanpa bonus",
    method: "ID + Server",
  },
  {
    title: "Top Up 12 Diamond",
    price: "Rp 3.000",
    bonus: "Tanpa bonus",
    method: "ID + Server",
  },
  {
    title: "Top Up 19 Diamond",
    price: "Rp 5.000",
    bonus: "Bonus 1 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 36 Diamond",
    price: "Rp 10.000",
    bonus: "Bonus 3 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 86 Diamond",
    price: "Rp 20.000",
    bonus: "Bonus 5 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 172 Diamond",
    price: "Rp 39.000",
    bonus: "Bonus 10 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 257 Diamond",
    price: "Rp 58.000",
    bonus: "Bonus 15 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 344 Diamond",
    price: "Rp 78.000",
    bonus: "Bonus 20 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 429 Diamond",
    price: "Rp 95.000",
    bonus: "Bonus 30 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 514 Diamond",
    price: "Rp 115.000",
    bonus: "Bonus 40 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 706 Diamond",
    price: "Rp 160.000",
    bonus: "Bonus 60 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 1.000 Diamond",
    price: "Rp 210.000",
    bonus: "Bonus 75 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 1.500 Diamond",
    price: "Rp 310.000",
    bonus: "Bonus 120 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 3.000 Diamond",
    price: "Rp 600.000",
    bonus: "Bonus 300 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 5.000 Diamond",
    price: "Rp 950.000",
    bonus: "Bonus 500 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 10.000 Diamond",
    price: "Rp 1.850.000",
    bonus: "Bonus 1.000 DM",
    method: "ID + Server",
  },
  {
    title: "Top Up 15.000 Diamond",
    price: "Rp 2.750.000",
    bonus: "Bonus 1.800 DM",
    method: "ID + Server",
  },
  {
    title: "Weekly Diamond Pass (WDP)",
    price: "Rp 27.000",
    bonus: "210 diamond selama 7 hari",
    method: "ID + Server",
  },
];

// Render akun
const akunContainer = document.getElementById("daftar-akun");
akunList.forEach((a) => {
  akunContainer.innerHTML += `
    <div class="account-card">
      
      <div class="account-card-body">
        <h3 class="account-card-title">${a.title}</h3>
        <p class="text-sm text-yellow-400 mb-2">Win Rate: ${a.winrate}</p>
        <p class="account-card-stat"><i class="fas fa-gem mr-1 text-blue-400"></i> ${a.skin} Skin</p>
        <p class="account-card-stat"><i class="fas fa-user-ninja mr-1 text-red-400"></i> ${a.hero} Hero</p>
        <div class="flex justify-between items-center mt-3">
          <p class="font-bold text-lg">${a.price}</p>
          <button class="account-card-button"><i class="fas fa-shopping-cart mr-2"></i>Beli</button>
        </div>
      </div>
    </div>
  `;
});

// Render joki
const jokiContainer = document.getElementById("daftar-joki");
jokiList.forEach((j) => {
  jokiContainer.innerHTML += `
    <div class="account-card">
      <div class="account-card-body">
        <h3 class="account-card-title">${j.title}</h3>
        <p class="text-gray-300 mb-2">Durasi: ${j.durasi}</p>
        <p class="text-sm text-gray-400 mb-4">${j.bonus}</p>
        <div class="flex justify-between items-center">
          <p class="font-bold text-lg">${j.price}</p>
          <button class="account-card-button">Pesan</button>
        </div>
      </div>
    </div>
  `;
});

// Render mmr
const mmrContainer = document.getElementById("daftar-mmr");
mmrList.forEach((m) => {
  mmrContainer.innerHTML += `
    <div class="account-card">
      <div class="account-card-body">
        <h3 class="account-card-title">${m.title}</h3>
        <p class="text-gray-300 mb-2">${m.detail}</p>
        <p class="text-sm text-gray-400 mb-4">Durasi: ${m.durasi}</p>
        <div class="flex justify-between items-center">
          <p class="font-bold text-lg">${m.price}</p>
          <button class="account-card-button">Order</button>
        </div>
      </div>
    </div>
  `;
});

const topupContainer = document.getElementById("daftar-topup");
topupList.forEach((item) => {
  topupContainer.innerHTML += `
    <div class="account-card">
      <div class="account-card-body">
        <h3 class="account-card-title">${item.title}</h3>
        <p class="text-sm text-gray-400 mb-1">${item.bonus}</p>
        <p class="text-sm text-gray-400 mb-3">Metode: ${item.method}</p>
        <div class="flex justify-between items-center">
          <p class="font-bold text-lg">${item.price}</p>
          <button class="account-card-button">Top Up</button>
        </div>
      </div>
    </div>
  `;
});
