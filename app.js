// ===================================================
// OLTIN KUN TARTIBI - BUDILNIK, SOVG'ALAR VA TANGALAR LOGIKASI
// ===================================================

// Standart mukammal ertalabdan kechgacha kun tartibi
const DEFAULT_ROUTINES = [
  // 🌅 TONG (06:00 - 08:30)
  {
    id: '1',
    time: '06:00 - 06:45',
    title: "Tonggi uyg'onish, tetiklashtiruvchi badantarbiya va yugurish",
    dayPhase: 'morning_early',
    category: 'workout',
    priority: 'high',
    completed: false
  },
  {
    id: '2',
    time: '06:45 - 07:30',
    title: "Dush, ma'naviyat va quvvatlantiruvchi foydali nonushta",
    dayPhase: 'morning_early',
    category: 'meal',
    priority: 'medium',
    completed: false
  },
  {
    id: '3',
    time: '07:30 - 08:30',
    title: "Kun niyatlari, kitob mutolaasi va kuningizni sozlash",
    dayPhase: 'morning_early',
    category: 'study',
    priority: 'high',
    completed: false
  },

  // ☀️ ERTALAB (08:30 - 12:30)
  {
    id: '4',
    time: '08:30 - 10:30',
    title: "Aqliy mashg'ulot: Eng muhim vazifalar (Deep Work / Darslar)",
    dayPhase: 'morning',
    category: 'work',
    priority: 'high',
    completed: false
  },
  {
    id: '5',
    time: '10:30 - 10:45',
    title: "Ko'z va gavda uchun qisqa oraliq mashqlari (Mini-mashg'ulot)",
    dayPhase: 'morning',
    category: 'workout',
    priority: 'low',
    completed: false
  },
  {
    id: '6',
    time: '10:45 - 12:30',
    title: "Asosiy o'quv yoki professional loyihalar ustida ishlash",
    dayPhase: 'morning',
    category: 'study',
    priority: 'medium',
    completed: false
  },

  // 🍽️ PESHIN (12:30 - 14:30)
  {
    id: '7',
    time: '12:30 - 13:30',
    title: "Tushlik taomi va toza havoda qisqa sayr",
    dayPhase: 'noon',
    category: 'meal',
    priority: 'medium',
    completed: false
  },
  {
    id: '8',
    time: '13:30 - 14:30',
    title: "Peshin oromi (quvvatni qayta tiklash va hordiq)",
    dayPhase: 'noon',
    category: 'rest',
    priority: 'low',
    completed: false
  },

  // 🏋️‍♂️ TUSHDAN KEYIN (14:30 - 18:00)
  {
    id: '9',
    time: '14:30 - 16:30',
    title: "Amaliy mashg'ulotlar, uchrashuvlar va yangi topshiriqlar",
    dayPhase: 'afternoon',
    category: 'work',
    priority: 'medium',
    completed: false
  },
  {
    id: '10',
    time: '16:30 - 18:00',
    title: "Asosiy Sport Mashg'uloti: Fitnes zali, trenirovka yoki suzish",
    dayPhase: 'afternoon',
    category: 'workout',
    priority: 'high',
    completed: false
  },

  // 🌇 OQSHOM (18:00 - 21:00)
  {
    id: '11',
    time: '18:00 - 19:30',
    title: "Kechki taom, oila bilan suhbat va hordiq",
    dayPhase: 'evening',
    category: 'meal',
    priority: 'medium',
    completed: false
  },
  {
    id: '12',
    time: '19:30 - 21:00',
    title: "Shaxsiy rivojlanish, chet tili o'rganish va mutolaa",
    dayPhase: 'evening',
    category: 'study',
    priority: 'high',
    completed: false
  },

  // 🌙 KECHQURUN (21:00 - 23:00)
  {
    id: '13',
    time: '21:00 - 22:00',
    title: "Kun sarhisobi: mashg'ulot va natijalarni tahlil qilish",
    dayPhase: 'night',
    category: 'personal',
    priority: 'medium',
    completed: false
  },
  {
    id: '14',
    time: '22:00 - 23:00',
    title: "Ertangi kun rejasini tasdiqlash va to'laqonli sokin uyqu",
    dayPhase: 'night',
    category: 'rest',
    priority: 'low',
    completed: false
  }
];

// Sovg'alar ro'yxati (Gifts Catalog)
const GIFTS_CATALOG = [
  {
    id: 'gift_hero',
    title: "🎖️ 'Intizom Qahramoni' Nishoni",
    desc: "Har kungi rejalarni to'liq bajaruvchi intizomli yetakchi nishoni.",
    price: 100,
    icon: "🎖️"
  },
  {
    id: 'gift_vip_theme',
    title: "🎨 Maxsus VIP Qirolicha Oltini",
    desc: "Yangi yaltiroq oltin dizayn mavzusini butun dastur uchun ochadi.",
    price: 200,
    icon: "🎨"
  },
  {
    id: 'gift_mystery_chest',
    title: "🎁 Sirli Oltin Quti",
    desc: "Tasodifiy kutilmagan sovg'a yoki 50 dan 150 tagacha bonus tangalar!",
    price: 75,
    icon: "🎁"
  },
  {
    id: 'gift_crown',
    title: "👑 'Kun Chempioni' Oltin Toji",
    desc: "Bosh sahifangizga qirollik oltin tojini qo'shuvchi maxsus unvon.",
    price: 350,
    icon: "👑"
  },
  {
    id: 'gift_certificate',
    title: "📜 Muvaffaqiyat Faxriy Sertifikati",
    desc: "Shaxsiy ismingiz bilan chop etsa bo'ladigan rasmiy Oltin Faxriy Yorliq.",
    price: 500,
    icon: "📜"
  }
];

// O'zbek tilidagi toifalar nomlari
const CATEGORY_NAMES = {
  workout: '🏋️‍♂️ Sport Mashg\'uloti',
  study: "📚 Dars / Aqliy Mashg'ulot",
  work: '💼 Ish va Loyihalar',
  meal: '🍽️ Taomlanish',
  ibodat: "🤲 Ma'naviyat",
  rest: '☕ Dam olish',
  personal: '🌟 Shaxsiy Rivojlanish'
};

// Kun davrlari nomlari
const PHASE_NAMES = {
  morning_early: '🌅 Tong (06:00 - 08:30)',
  morning: '☀️ Ertalab (08:30 - 12:30)',
  noon: '🍽️ Peshin (12:30 - 14:30)',
  afternoon: '🏋️‍♂️ Tushdan Keyin (14:30 - 18:00)',
  evening: '🌇 Oqshom (18:00 - 21:00)',
  night: '🌙 Kechqurun (21:00 - 23:00)'
};

// Dastur holati (State)
let routines = [];
let currentFilter = 'all';
let currentPhaseFilter = 'all';
let currentTypeFilter = 'all';
let searchQuery = '';
let editingTaskId = null;
let currentTheme = localStorage.getItem('gold_routine_theme') || 'classic-gold';
let soundEnabled = localStorage.getItem('gold_routine_sound') !== 'false';
let dailyMotto = localStorage.getItem('gold_routine_motto') || '"Har bir bajarilgan vazifa — yangi oltin tanga va muvaffaqiyat garovidir!"';

// TANGALAR VA SOVG'ALAR HOLATI
let userCoins = parseInt(localStorage.getItem('gold_user_coins') || '50', 10);
let unlockedGifts = JSON.parse(localStorage.getItem('gold_unlocked_gifts') || '[]');

// BUDILNIK HOLATI
let alarmConfig = JSON.parse(localStorage.getItem('gold_routine_alarm') || JSON.stringify({
  enabled: true,
  time: '07:00',
  label: 'Ertalabki badantarbiya va mashg\'ulot vaqti bo\'ldi!',
  lastRungMinute: ''
}));
let alarmAudioInterval = null;
let isAlarmRinging = false;

// TAYMER HOLATI
let timerDuration = 25 * 60;
let timerRemaining = 25 * 60;
let timerInterval = null;
let isTimerRunning = false;

// DOM Elementlari
const routineForm = document.getElementById('routineForm');
const taskTimeInput = document.getElementById('taskTime');
const taskDayPhaseInput = document.getElementById('taskDayPhase');
const taskCategoryInput = document.getElementById('taskCategory');
const taskPriorityInput = document.getElementById('taskPriority');
const taskTitleInput = document.getElementById('taskTitle');
const submitBtn = document.getElementById('submitBtn');
const resetDefaultsBtn = document.getElementById('resetDefaultsBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const searchInput = document.getElementById('searchInput');
const routineList = document.getElementById('routineList');
const emptyState = document.getElementById('emptyState');
const totalTasksEl = document.getElementById('totalTasks');
const completedTasksEl = document.getElementById('completedTasks');
const workoutTasksCountEl = document.getElementById('workoutTasksCount');
const progressBarEl = document.getElementById('progressBar');
const progressPercentageEl = document.getElementById('progressPercentage');
const listCounterEl = document.getElementById('listCounter');
const filterTabs = document.querySelectorAll('.tab-btn');
const typeFilterTabs = document.querySelectorAll('.type-btn');
const phaseNavButtons = document.querySelectorAll('.phase-btn');
const liveClockEl = document.getElementById('liveClock');
const liveDateEl = document.getElementById('liveDate');
const toastEl = document.getElementById('toastNotification');
const currentPhaseTextEl = document.getElementById('currentPhaseText');

// Tangalar va Hamyon DOM
const userCoinsDisplay = document.getElementById('userCoinsDisplay');
const statCoinsTotal = document.getElementById('statCoinsTotal');
const shopCoinsDisplay = document.getElementById('shopCoinsDisplay');
const openGiftShopBtn = document.getElementById('openGiftShopBtn');
const tabBtnGifts = document.getElementById('tabBtnGifts');
const giftChestsContainer = document.getElementById('giftChestsContainer');
const addBonusCoinsBtn = document.getElementById('addBonusCoinsBtn');
const resetCoinsBtn = document.getElementById('resetCoinsBtn');

// Budilnik DOM
const alarmTimeInput = document.getElementById('alarmTimeInput');
const alarmLabelInput = document.getElementById('alarmLabelInput');
const alarmEnabledToggle = document.getElementById('alarmEnabledToggle');
const saveAlarmBtn = document.getElementById('saveAlarmBtn');
const testAlarmBtn = document.getElementById('testAlarmBtn');
const alarmNextAlertBanner = document.getElementById('alarmNextAlertBanner');
const quickAlarmPill = document.getElementById('quickAlarmPill');
const alarmPillStatus = document.getElementById('alarmPillStatus');
const alarmModal = document.getElementById('alarmModal');
const alarmModalTime = document.getElementById('alarmModalTime');
const alarmModalLabel = document.getElementById('alarmModalLabel');
const stopAlarmBtn = document.getElementById('stopAlarmBtn');
const snoozeAlarmBtn = document.getElementById('snoozeAlarmBtn');

// Sovg'a Modali DOM
const giftModal = document.getElementById('giftModal');
const giftModalIcon = document.getElementById('giftModalIcon');
const giftModalTitle = document.getElementById('giftModalTitle');
const giftModalDesc = document.getElementById('giftModalDesc');
const closeGiftModalBtn = document.getElementById('closeGiftModalBtn');

// Boshqaruv Paneli Elementlari
const hubTabs = document.querySelectorAll('.hub-tab-btn');
const panelContents = document.querySelectorAll('.panel-content');
const markAllDoneBtn = document.getElementById('markAllDoneBtn');
const resetAllTasksBtn = document.getElementById('resetAllTasksBtn');
const sortByTimeBtn = document.getElementById('sortByTimeBtn');
const sortByPriorityBtn = document.getElementById('sortByPriorityBtn');
const exportJsonBtn = document.getElementById('exportJsonBtn');
const importJsonTriggerBtn = document.getElementById('importJsonTriggerBtn');
const importJsonInput = document.getElementById('importJsonInput');
const printScheduleBtn = document.getElementById('printScheduleBtn');
const clearAllHubBtn = document.getElementById('clearAllHubBtn');
const categoryAnalyticsContainer = document.getElementById('categoryAnalyticsContainer');
const themeButtons = document.querySelectorAll('.theme-btn');
const soundToggle = document.getElementById('soundToggle');
const editMottoBtn = document.getElementById('editMottoBtn');
const dailyMottoText = document.getElementById('dailyMottoText');

// Taymer DOM elementlari
const timerDisplayEl = document.getElementById('timerDisplay');
const timerStatusLabelEl = document.getElementById('timerStatusLabel');
const startTimerBtn = document.getElementById('startTimerBtn');
const pauseTimerBtn = document.getElementById('pauseTimerBtn');
const resetTimerBtn = document.getElementById('resetTimerBtn');
const timerPresetButtons = document.querySelectorAll('.timer-preset-btn');

// ===================================================
// AUDIO EFFAKTLARI (WEB AUDIO API)
// ===================================================

// 1. Oltin kristall jarang (Tanga yoki bajarilganda)
function playGoldChime() {
  if (!soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(987.77, ctx.currentTime); // B5
    osc.frequency.exponentialRampToValueAtTime(1318.51, ctx.currentTime + 0.12); // E6

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {}
}

// 2. Tantana / Fanfare ovozi (Sovg'a ochilganda)
function playFanfareSound() {
  if (!soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + index * 0.12);

      gain.gain.setValueAtTime(0.3, ctx.currentTime + index * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.12 + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + index * 0.12);
      osc.stop(ctx.currentTime + index * 0.12 + 0.45);
    });
  } catch (e) {}
}

// 3. Budilnik jiringlashi (Uzluksiz ritmik signal)
function startAlarmSiren() {
  if (alarmAudioInterval) clearInterval(alarmAudioInterval);
  
  const playPulse = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.setValueAtTime(1050, ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.38);
    } catch (e) {}
  };

  playPulse();
  alarmAudioInterval = setInterval(playPulse, 500);
}

function stopAlarmSiren() {
  if (alarmAudioInterval) {
    clearInterval(alarmAudioInterval);
    alarmAudioInterval = null;
  }
}

// ===================================================
// TOAST BILDIRISHNOMA
// ===================================================
let toastTimeout = null;
function showToast(message, icon = '✨') {
  if (!toastEl) return;
  toastEl.innerHTML = `<span>${icon}</span> <span>${escapeHtml(message)}</span>`;
  toastEl.classList.remove('hidden');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.add('hidden');
  }, 3200);
}

// ===================================================
// TANGALAR BALANSINI YANGILASH
// ===================================================
function updateCoinsDisplay(animated = false) {
  localStorage.setItem('gold_user_coins', userCoins);
  
  if (userCoinsDisplay) userCoinsDisplay.textContent = `${userCoins} 🪙`;
  if (statCoinsTotal) statCoinsTotal.textContent = `${userCoins} 🪙`;
  if (shopCoinsDisplay) shopCoinsDisplay.textContent = userCoins;

  renderGiftChests();
}

// Bonus tanga qo'shish
function addCoins(amount, reason = "Vazifa bajarildi") {
  userCoins += amount;
  updateCoinsDisplay(true);
  playGoldChime();
  showToast(`+${amount} Oltin tanga berildi! (${reason})`, "🪙");
}

// ===================================================
// SOVG'ALAR DO'KONI VA SANDIQCHALARNI CHIZISH
// ===================================================
function renderGiftChests() {
  if (!giftChestsContainer) return;
  giftChestsContainer.innerHTML = '';

  GIFTS_CATALOG.forEach(gift => {
    const isUnlocked = unlockedGifts.includes(gift.id);
    const canAfford = userCoins >= gift.price;

    const card = document.createElement('div');
    card.className = `gift-card ${isUnlocked ? 'unlocked' : ''}`;

    let buttonHtml = '';
    if (isUnlocked) {
      buttonHtml = `<button class="btn btn-secondary gift-card-btn" disabled>✅ Olingan</button>`;
    } else if (canAfford) {
      buttonHtml = `<button class="btn btn-gold gift-card-btn" onclick="buyGift('${gift.id}')">🎁 Sovg'ani Ochish</button>`;
    } else {
      buttonHtml = `<button class="btn btn-outline gift-card-btn" onclick="showToast('Tangalaringiz yetarli emas! Vazifalarni bajaring.', '⚠️')">🔒 ${gift.price} 🪙 Kerak</button>`;
    }

    card.innerHTML = `
      <div class="gift-card-icon">${gift.icon}</div>
      <div class="gift-card-title">${escapeHtml(gift.title)}</div>
      <div class="gift-card-desc">${escapeHtml(gift.desc)}</div>
      <div class="gift-card-price">${isUnlocked ? 'Ochilgan' : `${gift.price} 🪙`}</div>
      ${buttonHtml}
    `;

    giftChestsContainer.appendChild(card);
  });
}

// Sovg'a sotib olish
window.buyGift = function(giftId) {
  const gift = GIFTS_CATALOG.find(g => g.id === giftId);
  if (!gift) return;

  if (userCoins < gift.price) {
    showToast("Tangalar yetarli emas! Vazifalarni bajarib tanga to'plang.", "⚠️");
    return;
  }

  // Tangani yechish
  userCoins -= gift.price;

  // Maxsus holat: Sirli Oltin Quti (Mystery Chest)
  if (giftId === 'gift_mystery_chest') {
    const randomBonus = Math.floor(Math.random() * 101) + 50; // 50..150 tanga
    userCoins += randomBonus;
    updateCoinsDisplay();

    giftModalIcon.textContent = "🎁";
    giftModalTitle.textContent = "SIRLI OLTIN QUTI OCHILDI!";
    giftModalDesc.textContent = `Tabriklaymiz! Sirli qutidan ${randomBonus} ta sof oltin tanga chiqdi! Balansingiz oshirildi! 🪙✨`;
  } else {
    unlockedGifts.push(giftId);
    localStorage.setItem('gold_unlocked_gifts', JSON.stringify(unlockedGifts));
    updateCoinsDisplay();

    // Maxsus mavzu bo'lsa darhol yoqish
    if (giftId === 'gift_vip_theme') {
      setTheme('obsidian-gold');
    }

    giftModalIcon.textContent = gift.icon;
    giftModalTitle.textContent = `${gift.title} OCHILDI!`;
    giftModalDesc.textContent = `Ajoyib g'alaba! ${gift.desc}. Siz intizom va mehnat bilan bu sovg'aga sazovor bo'ldingiz!`;
  }

  playFanfareSound();
  giftModal.classList.remove('hidden');
};

// ===================================================
// BUDILNIK TIZIMI (ALARM CLOCK)
// ===================================================
function updateAlarmUI() {
  if (alarmTimeInput) alarmTimeInput.value = alarmConfig.time;
  if (alarmLabelInput) alarmLabelInput.value = alarmConfig.label;
  if (alarmEnabledToggle) alarmEnabledToggle.checked = alarmConfig.enabled;

  if (alarmPillStatus) {
    if (alarmConfig.enabled) {
      alarmPillStatus.textContent = `Budilnik: ${alarmConfig.time} (Faol 🔔)`;
      quickAlarmPill.classList.add('alarm-active');
    } else {
      alarmPillStatus.textContent = `Budilnik: ${alarmConfig.time} (O'chiq)`;
      quickAlarmPill.classList.remove('alarm-active');
    }
  }

  if (alarmNextAlertBanner) {
    if (alarmConfig.enabled) {
      alarmNextAlertBanner.innerHTML = `✅ <strong>Budilnik yoqilgan:</strong> Soat <strong>${alarmConfig.time}</strong> da quyidagi eslatma bilan jiringlaydi: <em>"${escapeHtml(alarmConfig.label)}"</em>`;
      alarmNextAlertBanner.style.color = "#34d399";
    } else {
      alarmNextAlertBanner.innerHTML = `⚠️ <strong>Budilnik o'chirilgan:</strong> Vaqtni sozlab, "Budilnik Holati" tugmasini yoqing.`;
      alarmNextAlertBanner.style.color = "var(--gold-light)";
    }
  }
}

function saveAlarmSettings() {
  alarmConfig.time = alarmTimeInput.value || '07:00';
  alarmConfig.label = alarmLabelInput.value.trim() || "Ertalabki mashg'ulot vaqti!";
  alarmConfig.enabled = alarmEnabledToggle.checked;
  
  localStorage.setItem('gold_routine_alarm', JSON.stringify(alarmConfig));
  updateAlarmUI();
  showToast(alarmConfig.enabled ? `Budilnik ${alarmConfig.time} ga sozlandi va yoqildi!` : "Budilnik o'chirildi", "⏰");
}

function triggerAlarmRing(timeStr, labelStr) {
  isAlarmRinging = true;
  alarmModalTime.textContent = timeStr;
  alarmModalLabel.textContent = labelStr;
  alarmModal.classList.remove('hidden');
  startAlarmSiren();
}

function stopAlarm() {
  isAlarmRinging = false;
  stopAlarmSiren();
  alarmModal.classList.add('hidden');
  showToast("Budilnik o'chirildi. Kuningiz unumli o'tsin!", "⏰");
}

function snoozeAlarm() {
  stopAlarmSiren();
  alarmModal.classList.add('hidden');
  isAlarmRinging = false;

  // 5 daqiqaga kechiktirish
  const now = new Date();
  now.setMinutes(now.getMinutes() + 5);
  const snoozedHours = String(now.getHours()).padStart(2, '0');
  const snoozedMinutes = String(now.getMinutes()).padStart(2, '0');
  alarmConfig.time = `${snoozedHours}:${snoozedMinutes}`;
  alarmConfig.lastRungMinute = '';
  localStorage.setItem('gold_routine_alarm', JSON.stringify(alarmConfig));
  updateAlarmUI();

  showToast(`Budilnik 5 daqiqaga kechiktirildi (${alarmConfig.time})`, "💤");
}

// Budilnikni tekshirish
function checkAlarmTick(currentHourMinute) {
  if (!alarmConfig.enabled || isAlarmRinging) return;

  if (currentHourMinute === alarmConfig.time && alarmConfig.lastRungMinute !== currentHourMinute) {
    alarmConfig.lastRungMinute = currentHourMinute;
    localStorage.setItem('gold_routine_alarm', JSON.stringify(alarmConfig));
    triggerAlarmRing(alarmConfig.time, alarmConfig.label);
  }
}

// ===================================================
// SOAT VA SANA
// ===================================================
function getDayPhaseByHour(hour, minute) {
  const timeNum = hour + minute / 60;
  if (timeNum >= 6 && timeNum < 8.5) {
    return { key: 'morning_early', name: 'Tonggi Mashg\'ulotlar Davri (06:00 - 08:30)' };
  } else if (timeNum >= 8.5 && timeNum < 12.5) {
    return { key: 'morning', name: 'Ertalabki Asosiy Dars / Ish (08:30 - 12:30)' };
  } else if (timeNum >= 12.5 && timeNum < 14.5) {
    return { key: 'noon', name: 'Peshin & Tushlik Davri (12:30 - 14:30)' };
  } else if (timeNum >= 14.5 && timeNum < 18) {
    return { key: 'afternoon', name: 'Tushdan Keyingi Mashg\'ulotlar (14:30 - 18:00)' };
  } else if (timeNum >= 18 && timeNum < 21) {
    return { key: 'evening', name: 'Oqshomgi Mutolaa & Hordiq (18:00 - 21:00)' };
  } else {
    return { key: 'night', name: 'Kechki Sarhisob & Orom (21:00 - 06:00)' };
  }
}

function updateClock() {
  const now = new Date();
  
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  liveClockEl.textContent = `${hours}:${minutes}:${seconds}`;

  const currentHourMinute = `${hours}:${minutes}`;
  checkAlarmTick(currentHourMinute);

  const oylar = [
    'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
    'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
  ];
  const haftakunlari = [
    'Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'
  ];

  const day = now.getDate();
  const month = oylar[now.getMonth()];
  const year = now.getFullYear();
  const weekDay = haftakunlari[now.getDay()];

  liveDateEl.textContent = `${day}-${month}, ${year}-yil (${weekDay})`;

  const currentPhase = getDayPhaseByHour(now.getHours(), now.getMinutes());
  if (currentPhaseTextEl) {
    currentPhaseTextEl.textContent = `Ayni paytda: ${currentPhase.name}`;
  }

  phaseNavButtons.forEach(btn => {
    btn.classList.toggle('current-live', btn.dataset.phase === currentPhase.key);
  });
}

// ===================================================
// MA'LUMOTLARNI SAQLASH VA YUKLASH
// ===================================================
function saveToStorage() {
  localStorage.setItem('gold_daily_routines', JSON.stringify(routines));
}

function loadFromStorage() {
  const savedData = localStorage.getItem('gold_daily_routines');
  if (savedData) {
    try {
      routines = JSON.parse(savedData);
    } catch (e) {
      routines = JSON.parse(JSON.stringify(DEFAULT_ROUTINES));
    }
  } else {
    routines = JSON.parse(JSON.stringify(DEFAULT_ROUTINES));
    saveToStorage();
  }
}

// ===================================================
// REJALARNI CHIZISH (RENDER)
// ===================================================
function renderRoutines() {
  const filteredRoutines = routines.filter(item => {
    if (currentFilter === 'completed' && !item.completed) return false;
    if (currentFilter === 'pending' && item.completed) return false;

    if (currentPhaseFilter !== 'all' && item.dayPhase !== currentPhaseFilter) {
      return false;
    }

    if (currentTypeFilter === 'workout') {
      if (item.category !== 'workout' && item.category !== 'study') return false;
    } else if (currentTypeFilter === 'others') {
      if (item.category === 'workout') return false;
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(query);
      const matchTime = item.time.toLowerCase().includes(query);
      return matchTitle || matchTime;
    }
    return true;
  });

  routineList.innerHTML = '';

  if (filteredRoutines.length === 0) {
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
  }

  filteredRoutines.forEach(item => {
    const itemEl = document.createElement('div');
    itemEl.className = `routine-item priority-${item.priority || 'medium'} ${item.completed ? 'completed' : ''}`;
    itemEl.dataset.id = item.id;

    const categoryText = CATEGORY_NAMES[item.category] || item.category;
    const phaseText = PHASE_NAMES[item.dayPhase] ? PHASE_NAMES[item.dayPhase].split(' ')[0] : '☀️';

    // Vazifaga beriladigan tanga miqdori
    let coinReward = 10;
    if (item.category === 'workout' || item.category === 'study' || item.priority === 'high') {
      coinReward = 50;
    } else if (item.priority === 'medium') {
      coinReward = 25;
    }

    itemEl.innerHTML = `
      <label class="custom-checkbox" title="${item.completed ? 'Bajarilmagan deb belgilash' : `Bajarildi deb belgilash (+${coinReward} 🪙)`}">
        <input type="checkbox" ${item.completed ? 'checked' : ''} onchange="toggleTask('${item.id}')">
        <span class="checkbox-visual"></span>
      </label>

      <div class="item-content">
        <div class="item-meta">
          <span class="item-time">⏰ ${escapeHtml(item.time)}</span>
          <span class="item-badge badge-phase">${phaseText}</span>
          <span class="item-badge badge-${item.category}">${categoryText}</span>
          <span class="item-badge" style="background: rgba(255, 215, 0, 0.15); color: #ffd700; border: 1px solid rgba(255, 215, 0, 0.3);">+${coinReward} 🪙</span>
        </div>
        <div class="item-title">${escapeHtml(item.title)}</div>
      </div>

      <div class="item-actions">
        <button class="action-btn" title="Tahrirlash" onclick="editTask('${item.id}')">
          ✏️
        </button>
        <button class="action-btn delete-btn" title="O'chirish" onclick="deleteTask('${item.id}')">
          🗑️
        </button>
      </div>
    `;

    routineList.appendChild(itemEl);
  });

  updateStats();
  renderCategoryAnalytics();
}

// ===================================================
// STATISTIKANI YANGILASH
// ===================================================
function updateStats() {
  const total = routines.length;
  const completed = routines.filter(r => r.completed).length;
  const workouts = routines.filter(r => r.category === 'workout' || r.category === 'study').length;
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  totalTasksEl.textContent = total;
  completedTasksEl.textContent = completed;
  workoutTasksCountEl.textContent = workouts;
  progressPercentageEl.textContent = `${percent}%`;
  progressBarEl.style.width = `${percent}%`;
  listCounterEl.textContent = `${routines.length} ta vazifa`;
}

// Toifalar tahlili
function renderCategoryAnalytics() {
  if (!categoryAnalyticsContainer) return;

  const total = routines.length;
  const counts = {};
  Object.keys(CATEGORY_NAMES).forEach(cat => counts[cat] = 0);

  routines.forEach(item => {
    if (counts[item.category] !== undefined) {
      counts[item.category]++;
    } else {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
  });

  categoryAnalyticsContainer.innerHTML = '';

  Object.entries(CATEGORY_NAMES).forEach(([catKey, catLabel]) => {
    const count = counts[catKey] || 0;
    const pct = total === 0 ? 0 : Math.round((count / total) * 100);

    const card = document.createElement('div');
    card.className = 'analytic-card';
    card.innerHTML = `
      <div class="analytic-card-top">
        <span>${catLabel}</span>
        <span class="analytic-count">${count} ta (${pct}%)</span>
      </div>
      <div class="analytic-bar-track">
        <div class="analytic-bar-fill" style="width: ${pct}%;"></div>
      </div>
    `;
    categoryAnalyticsContainer.appendChild(card);
  });
}

// ===================================================
// VAQT DAVRLARI BO'YICHA FILTRLASH
// ===================================================
window.filterByPhase = function(phase) {
  currentPhaseFilter = phase;
  phaseNavButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.phase === phase);
  });

  document.querySelector('.schedule-section').scrollIntoView({ behavior: 'smooth' });
  renderRoutines();
  showToast(`Kun davri: ${phase === 'all' ? 'Barcha kun' : PHASE_NAMES[phase]} tanlandi`, "🌅");
};

// ===================================================
// SOVG'ALAR PANELIGA O'TISH
// ===================================================
window.openGiftPanelTab = function() {
  hubTabs.forEach(t => t.classList.remove('active'));
  panelContents.forEach(p => p.classList.remove('active'));

  if (tabBtnGifts) tabBtnGifts.classList.add('active');
  const giftsPanel = document.getElementById('panel-gifts');
  if (giftsPanel) giftsPanel.classList.add('active');

  document.querySelector('.management-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
};

// ===================================================
// MASHG'ULOT VA FOKUS TAYMERI
// ===================================================
function updateTimerDisplay() {
  const mins = Math.floor(timerRemaining / 60);
  const secs = timerRemaining % 60;
  timerDisplayEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
  if (isTimerRunning) return;
  isTimerRunning = true;
  timerStatusLabelEl.textContent = "Mashg'ulot qizg'in davom etmoqda! 🔥";
  startTimerBtn.style.opacity = '0.5';

  timerInterval = setInterval(() => {
    if (timerRemaining > 0) {
      timerRemaining--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      isTimerRunning = false;
      startTimerBtn.style.opacity = '1';
      timerStatusLabelEl.textContent = "Mashg'ulot yakunlandi! Qoyilmaqom! 🏆";
      
      // Taymer yakunlanganda bonus tanga beriladi!
      addCoins(25, "Taymer mashg'uloti yakunlandi");
      playFanfareSound();
    }
  }, 1000);
}

function pauseTimer() {
  if (!isTimerRunning) return;
  clearInterval(timerInterval);
  isTimerRunning = false;
  startTimerBtn.style.opacity = '1';
  timerStatusLabelEl.textContent = "Taymer to'xtatildi ⏸️";
}

function resetTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  timerRemaining = timerDuration;
  startTimerBtn.style.opacity = '1';
  timerStatusLabelEl.textContent = "Mashg'ulotga tayyormisiz?";
  updateTimerDisplay();
}

function setTimerPreset(minutes) {
  clearInterval(timerInterval);
  isTimerRunning = false;
  timerDuration = minutes * 60;
  timerRemaining = timerDuration;
  startTimerBtn.style.opacity = '1';
  timerStatusLabelEl.textContent = `${minutes} daqiqalik mashg'ulot o'rnatildi`;
  updateTimerDisplay();

  timerPresetButtons.forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.minutes) === minutes);
  });
}

// ===================================================
// ASOSIY AMALLAR
// ===================================================

// Yangi reja qo'shish
function handleFormSubmit(e) {
  e.preventDefault();

  const timeVal = taskTimeInput.value.trim();
  const titleVal = taskTitleInput.value.trim();
  const dayPhaseVal = taskDayPhaseInput.value;
  const categoryVal = taskCategoryInput.value;
  const priorityVal = taskPriorityInput.value;

  if (!timeVal || !titleVal) return;

  if (editingTaskId) {
    const taskIndex = routines.findIndex(r => r.id === editingTaskId);
    if (taskIndex !== -1) {
      routines[taskIndex].time = timeVal;
      routines[taskIndex].title = titleVal;
      routines[taskIndex].dayPhase = dayPhaseVal;
      routines[taskIndex].category = categoryVal;
      routines[taskIndex].priority = priorityVal;
    }
    editingTaskId = null;
    submitBtn.innerHTML = '<span class="btn-icon">➕</span> Rejani Qo\'shish';
    showToast("Mashg'ulot o'zgartirildi!", "💾");
  } else {
    const newTask = {
      id: Date.now().toString(),
      time: timeVal,
      title: titleVal,
      dayPhase: dayPhaseVal,
      category: categoryVal,
      priority: priorityVal,
      completed: false
    };
    routines.push(newTask);
    showToast("Yangi mashg'ulot qo'shildi!", "✨");
  }

  saveToStorage();
  renderRoutines();
  routineForm.reset();
  taskTimeInput.focus();
}

// Bajarilgan deb belgilash va TANGA BERISH
window.toggleTask = function(id) {
  const task = routines.find(r => r.id === id);
  if (task) {
    task.completed = !task.completed;

    let coinReward = 10;
    if (task.category === 'workout' || task.category === 'study' || task.priority === 'high') {
      coinReward = 50;
    } else if (task.priority === 'medium') {
      coinReward = 25;
    }

    if (task.completed) {
      // Tanga qo'shish
      userCoins += coinReward;
      updateCoinsDisplay();
      playGoldChime();
      showToast(`Ajoyib! +${coinReward} Oltin tanga berildi! 🪙`, "🏆");

      // Agar barcha rejalar yakunlangan bo'lsa, maxsus sovg'a
      const allDone = routines.length > 0 && routines.every(r => r.completed);
      if (allDone) {
        setTimeout(() => {
          userCoins += 100;
          updateCoinsDisplay();
          playFanfareSound();
          giftModalIcon.textContent = "🏆";
          giftModalTitle.textContent = "KUN MUKAMMAL YAKUNLANDI!";
          giftModalDesc.textContent = "Bugungi barcha rejalaringizni muvaffaqiyatli yakunladingiz! Sizga +100 Oltin Tanga maxsus bonus berildi!";
          giftModal.classList.remove('hidden');
        }, 600);
      }
    } else {
      // Bekor qilinganda tangani qaytarib olish
      if (userCoins >= coinReward) {
        userCoins -= coinReward;
        updateCoinsDisplay();
      }
    }

    saveToStorage();
    renderRoutines();
  }
};

// Rejani o'chirish
window.deleteTask = function(id) {
  if (confirm("Haqiqatan ham bu mashg'ulotni o'chirmoqchimisiz?")) {
    routines = routines.filter(r => r.id !== id);
    if (editingTaskId === id) {
      editingTaskId = null;
      submitBtn.innerHTML = '<span class="btn-icon">➕</span> Rejani Qo\'shish';
      routineForm.reset();
    }
    saveToStorage();
    renderRoutines();
    showToast("Reja o'chirildi", "🗑️");
  }
};

// Rejani tahrirlash
window.editTask = function(id) {
  const task = routines.find(r => r.id === id);
  if (task) {
    taskTimeInput.value = task.time;
    taskTitleInput.value = task.title;
    if (task.dayPhase) taskDayPhaseInput.value = task.dayPhase;
    taskCategoryInput.value = task.category;
    taskPriorityInput.value = task.priority;

    editingTaskId = id;
    submitBtn.innerHTML = '<span class="btn-icon">💾</span> O\'zgarishni Saqlash';
    taskTitleInput.focus();
    routineForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

// Barcha vazifalarni bajarildi qilish va tangalarni to'plash
function markAllTasksDone() {
  if (routines.length === 0) return;
  let earned = 0;
  routines.forEach(item => {
    if (!item.completed) {
      item.completed = true;
      earned += (item.category === 'workout' || item.category === 'study' ? 50 : 25);
    }
  });

  if (earned > 0) {
    userCoins += earned;
    updateCoinsDisplay();
  }

  saveToStorage();
  renderRoutines();
  playFanfareSound();
  showToast(`Barcha rejalar bajarildi! +${earned} 🪙 to'plandi!`, "🎉");
}

// Yangi kun boshlash
function resetAllTasksProgress() {
  if (routines.length === 0) return;
  routines.forEach(item => item.completed = false);
  saveToStorage();
  renderRoutines();
  showToast("Yangi tong boshlandi! Rejalar yangilandi.", "🌅");
}

// Saralash
function sortTasksByTime() {
  const phaseOrder = {
    morning_early: 1,
    morning: 2,
    noon: 3,
    afternoon: 4,
    evening: 5,
    night: 6
  };

  routines.sort((a, b) => {
    const orderA = phaseOrder[a.dayPhase] || 3;
    const orderB = phaseOrder[b.dayPhase] || 3;
    if (orderA !== orderB) return orderA - orderB;

    const timeA = a.time.match(/\d{1,2}:\d{2}/) ? a.time.match(/\d{1,2}:\d{2}/)[0] : a.time;
    const timeB = b.time.match(/\d{1,2}:\d{2}/) ? b.time.match(/\d{1,2}:\d{2}/)[0] : b.time;
    return timeA.localeCompare(timeB);
  });

  saveToStorage();
  renderRoutines();
  showToast("Ertalabdan kechgacha saralandi!", "⏰");
}

function sortTasksByPriority() {
  const rank = { high: 1, medium: 2, low: 3 };
  routines.sort((a, b) => (rank[a.priority] || 2) - (rank[b.priority] || 2));
  saveToStorage();
  renderRoutines();
  showToast("Muhimlik bo'yicha saralandi!", "💎");
}

// Standart namunani tiklash
function resetToDefaults() {
  if (confirm("Ertalabdan kechgacha bo'lgan to'liq namunaviy jadvalni qayta tiklashni xohlaysizmi?")) {
    routines = JSON.parse(JSON.stringify(DEFAULT_ROUTINES));
    saveToStorage();
    renderRoutines();
    showToast("Ertalabdan kechgacha jadval tiklandi!", "⚡");
  }
}

// JSON Eksport
function exportScheduleToJson() {
  const data = {
    routines: routines,
    userCoins: userCoins,
    unlockedGifts: unlockedGifts,
    alarmConfig: alarmConfig
  };
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
  const downloadAnchor = document.createElement('a');
  const dateStr = new Date().toISOString().slice(0, 10);
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `Oltin_Kun_Tartibi_${dateStr}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Kun tartibi faylga saqlandi!", "💾");
}

// JSON Import
function handleImportJson(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        routines = imported;
      } else if (imported.routines) {
        routines = imported.routines;
        if (imported.userCoins) userCoins = imported.userCoins;
        if (imported.unlockedGifts) unlockedGifts = imported.unlockedGifts;
        if (imported.alarmConfig) alarmConfig = imported.alarmConfig;
      }
      saveToStorage();
      updateCoinsDisplay();
      updateAlarmUI();
      renderRoutines();
      showToast("Jadval muvaffaqiyatli yuklandi!", "📥");
    } catch (err) {
      alert("JSON faylini o'qishda xatolik yuz berdi!");
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// Chop etish
function printSchedule() {
  showToast("Chop etish darchasi ochilmoqda...", "🖨️");
  setTimeout(() => window.print(), 400);
}

// Mavzu tanlash
function setTheme(themeName) {
  document.body.setAttribute('data-theme', themeName);
  localStorage.setItem('gold_routine_theme', themeName);
  currentTheme = themeName;

  themeButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.setTheme === themeName);
  });
  showToast(`Mavzu o'zgartirildi: ${themeName}`, "🎨");
}

// Shior tahrirlash
function editDailyMotto() {
  const newMotto = prompt("Bugungi maqsadingiz yoki shioringizni kiriting:", dailyMotto);
  if (newMotto !== null && newMotto.trim() !== '') {
    dailyMotto = newMotto.trim();
    localStorage.setItem('gold_routine_motto', dailyMotto);
    dailyMottoText.textContent = `"${dailyMotto}"`;
    showToast("Bugungi maqsad saqlandi!", "🎯");
  }
}

// Yordamchi HTML tozalash
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ===================================================
// EVENT LISTENERS
// ===================================================
function initEventListeners() {
  // Forma
  routineForm.addEventListener('submit', handleFormSubmit);
  resetDefaultsBtn.addEventListener('click', resetToDefaults);
  clearAllBtn.addEventListener('click', () => {
    if (confirm("Barcha mashg'ulotlarni tozalab tashlamoqchimisiz?")) {
      routines = [];
      saveToStorage();
      renderRoutines();
      showToast("Barcha rejalar tozalandi!", "🗑️");
    }
  });

  // Qidiruv
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderRoutines();
  });

  // Holat filtrlari
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      renderRoutines();
    });
  });

  // Faoliyat turlari
  typeFilterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      typeFilterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTypeFilter = tab.dataset.typeFilter;
      renderRoutines();
    });
  });

  // Kun davrlari lentasi
  phaseNavButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterByPhase(btn.dataset.phase);
    });
  });

  // Hub tablari
  hubTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      hubTabs.forEach(t => t.classList.remove('active'));
      panelContents.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(tab.dataset.panel);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Budilnik sozlamalari
  if (saveAlarmBtn) saveAlarmBtn.addEventListener('click', saveAlarmSettings);
  if (testAlarmBtn) testAlarmBtn.addEventListener('click', () => {
    triggerAlarmRing(alarmTimeInput.value || "07:00", "Budilnik ovozini sinash! ⏰");
  });
  if (stopAlarmBtn) stopAlarmBtn.addEventListener('click', stopAlarm);
  if (snoozeAlarmBtn) snoozeAlarmBtn.addEventListener('click', snoozeAlarm);

  if (quickAlarmPill) {
    quickAlarmPill.addEventListener('click', () => {
      hubTabs.forEach(t => t.classList.remove('active'));
      panelContents.forEach(p => p.classList.remove('active'));

      const alarmTab = document.querySelector('[data-panel="panel-alarm"]');
      if (alarmTab) alarmTab.classList.add('active');
      const alarmPanel = document.getElementById('panel-alarm');
      if (alarmPanel) alarmPanel.classList.add('active');

      document.querySelector('.management-section').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // Hamyon va Sovg'alar tugmasi
  if (openGiftShopBtn) openGiftShopBtn.addEventListener('click', openGiftPanelTab);
  if (closeGiftModalBtn) closeGiftModalBtn.addEventListener('click', () => giftModal.classList.add('hidden'));

  // Tangalar sinov tugmalari
  if (addBonusCoinsBtn) addBonusCoinsBtn.addEventListener('click', () => addCoins(50, "Bonus Tangalar"));
  if (resetCoinsBtn) resetCoinsBtn.addEventListener('click', () => {
    if (confirm("Tangalar balansini 0 ga tushirmoqchimisiz?")) {
      userCoins = 0;
      updateCoinsDisplay();
      showToast("Tangalar balansi 0 qilindi", "ℹ️");
    }
  });

  // Taymer boshqaruvi
  if (startTimerBtn) startTimerBtn.addEventListener('click', startTimer);
  if (pauseTimerBtn) pauseTimerBtn.addEventListener('click', pauseTimer);
  if (resetTimerBtn) resetTimerBtn.addEventListener('click', resetTimer);
  timerPresetButtons.forEach(btn => {
    btn.addEventListener('click', () => setTimerPreset(parseInt(btn.dataset.minutes)));
  });

  // Tezkor amallar
  if (markAllDoneBtn) markAllDoneBtn.addEventListener('click', markAllTasksDone);
  if (resetAllTasksBtn) resetAllTasksBtn.addEventListener('click', resetAllTasksProgress);
  if (sortByTimeBtn) sortByTimeBtn.addEventListener('click', sortTasksByTime);
  if (sortByPriorityBtn) sortByPriorityBtn.addEventListener('click', sortTasksByPriority);

  // Ma'lumot boshqaruvi
  if (exportJsonBtn) exportJsonBtn.addEventListener('click', exportScheduleToJson);
  if (importJsonTriggerBtn) importJsonTriggerBtn.addEventListener('click', () => importJsonInput.click());
  if (importJsonInput) importJsonInput.addEventListener('change', handleImportJson);
  if (printScheduleBtn) printScheduleBtn.addEventListener('click', printSchedule);
  if (clearAllHubBtn) clearAllHubBtn.addEventListener('click', () => {
    if (confirm("Barcha ma'lumotlarni tozalashni xohlaysizmi?")) {
      routines = [];
      saveToStorage();
      renderRoutines();
      showToast("Tozalandi", "🗑️");
    }
  });

  // Mavzu va tovush
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => setTheme(btn.dataset.setTheme));
  });

  if (soundToggle) {
    soundToggle.checked = soundEnabled;
    soundToggle.addEventListener('change', (e) => {
      soundEnabled = e.target.checked;
      localStorage.setItem('gold_routine_sound', soundEnabled);
      if (soundEnabled) playGoldChime();
      showToast(soundEnabled ? "Tovush yoqildi" : "Tovush o'chirildi", "🔔");
    });
  }

  if (editMottoBtn) editMottoBtn.addEventListener('click', editDailyMotto);
}

// ===================================================
// ILOVANI ISHGA TUSHIRISH (INIT)
// ===================================================
function initApp() {
  updateClock();
  setInterval(updateClock, 1000);

  if (dailyMottoText) dailyMottoText.textContent = dailyMotto.startsWith('"') ? dailyMotto : `"${dailyMotto}"`;

  setTheme(currentTheme);
  loadFromStorage();
  updateAlarmUI();
  updateCoinsDisplay();
  initEventListeners();
  renderRoutines();
  updateTimerDisplay();
}

document.addEventListener('DOMContentLoaded', initApp);
