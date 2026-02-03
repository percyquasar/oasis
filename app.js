// ===================================
// PERCY QUASAR EN EL OASIS
// Music Streaming Platform - JavaScript
// ===================================

// === Utility Functions ===
// Detect if user is on mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        (navigator.maxTouchPoints && navigator.maxTouchPoints > 2);
}

// === Configuration ===
const CONFIG = {
    musicFolder: 'music/', // Asegúrate de que esta ruta sea correcta
    defaultVolume: 0.7,
    seekStep: 5, // seconds
    volumeStep: 0.1,
    storageKey: 'percy_quasar_data', // Consolidado
    debugMode: false, // Set to true for error notifications
    maxParticles: { mobile: 15, desktop: 30 }, // Reducido para mejor rendimiento
    maxHistoryItems: 50,
    // Audio Preloading
    enablePreload: true,
    preloadNextTrack: true,
    // Announcement Settings
    firstAnnouncementDelay: 120000, // 2 minutes after music starts (in ms)
    announcementInterval: 3600000 // 60 minutes between announcements (in ms)
};

// === Playlist Data ===
const playlist = [
    {
        title: "Oasis Mix - Parte 1",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte001.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 2",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte002.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 3",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte003.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 4",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte004.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 5",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte005.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 6",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte006.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 7",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte007.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 8",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte008.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 9",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte009.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 10",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte010.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 11",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte011.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 12",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte012.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 13",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte013.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 14",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte014.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 15",
        file: "https://archive.org/download/oasis_202601/oasismix_hq_parte015.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 16",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte016.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 17",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte017.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 18",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte018.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 19",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte019.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 20",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte020.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 21",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte021.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 22",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte022.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 23",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte023.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 24",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte024.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 25",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte025.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 26",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte026.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 27",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte027.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 28",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte028.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 29",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte029.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 30",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte030.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 31",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte031.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 32",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte032.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 33",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte033.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 34",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte034.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 35",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte035.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 36",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte036.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 37",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte037.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 38",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte038.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 39",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte039.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 40",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte040.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 41",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte041.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 42",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte042.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 43",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte043.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 44",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte044.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 45",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte045.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 46",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte046.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 47",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte047.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 48",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte048.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 49",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte049.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 50",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte050.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 51",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte051.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 52",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte052.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 53",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte053.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 54",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte054.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 55",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte055.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 56",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte056.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 57",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte057.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 58",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte058.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 59",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte059.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 60",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte060.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 61",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte061.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 62",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte062.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 63",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte063.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 64",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte064.mp3",
        size: "MP3"
    },
    {
        title: "Oasis Mix - Parte 65",
        file: "https://archive.org/download/oasismix/oasismix_hq_parte065.mp3",
        size: "MP3"
    }
];

// === State Management ===
const state = {
    currentTrackIndex: -1,
    isPlaying: false,
    isSeeking: false,
    volume: CONFIG.defaultVolume,
    isMuted: false,
    previousVolume: CONFIG.defaultVolume,
    savedTime: 0, // Para restaurar el tiempo
    announcerInterval: null,
    // New Apple Music-style features
    shuffleMode: false,
    repeatMode: 'off', // 'off' | 'all' | 'one'
    favorites: [], // Array of track indices
    playbackQueue: [], // Queue for shuffle mode
    originalQueue: [], // Original order for when shuffle is disabled
    searchQuery: '', // Search filter
    viewMode: 'all', // 'all' | 'favorites' | 'history'
    history: [], // Array of { title, file, timestamp }
    audioContext: null,
    analyser: null,
    dataArray: null,
    source: null,
    // Phase 3 Smart Features
    recognition: null,
    isListening: false,
    sleepTimer: null,
    sleepTimeRemaining: 0,
    originalVolume: 0,
    // Phase 4 Aesthetic Features
    visualizerMode: 'bars', // 'bars' | 'waves' | 'circle' | 'particles'
    // Location Preference
    locationPreference: localStorage.getItem('percy_location_pref') || 'unknown', // 'granted' | 'denied' | 'unknown'
    // Location Cache - para no pedir ubicación cada vez
    cachedLocation: null, // { latitude, longitude, timestamp }
    locationCacheTimeout: 3600000, // 1 hora en milisegundos
    lastAnnouncementTime: null, // Para evitar anuncios duplicados
    // Music playback tracking
    musicStartedAt: null, // Timestamp when music first started playing
    // Preloading
    preloadAudio: null, // Hidden audio element for preloading next track
    preloadedTrackIndex: -1, // Index of preloaded track
    // Cached Radio Data (For Instant Response)
    radioData: {
        weather: null,
        news: null,
        currency: null,
        lastUpdated: 0
    }
};

// === DOM Elements ===
const elements = {
    audio: document.getElementById('audioPlayer'),
    playBtn: document.getElementById('playBtn'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    volumeBtn: document.getElementById('volumeBtn'),
    volumeSlider: document.getElementById('volumeSlider'),
    progressBar: document.getElementById('progressBar'), // Input range
    loadingBar: document.getElementById('loadingBar'),
    currentTime: document.getElementById('currentTime'),
    totalTime: document.getElementById('totalTime'),
    trackTitle: document.getElementById('trackTitle'),
    trackArtist: document.getElementById('trackArtist'),
    trackDuration: document.getElementById('trackDuration'),
    trackSize: document.getElementById('trackSize'),
    playlistContainer: document.getElementById('playlist'),
    playlistCount: document.getElementById('playlistCount'),
    albumArt: document.getElementById('albumArt'),
    vinylRecord: document.querySelector('.vinyl-record'),
    // visualizer: document.getElementById('visualizer'), // Removed
    playIcon: document.querySelector('.play-icon'),
    pauseIcon: document.querySelector('.pause-icon'),
    nowPlaying: document.getElementById('nowPlaying'),
    themeToggle: document.getElementById('themeToggle'),
    shareBtn: document.getElementById('shareBtn'),
    timeBtn: document.getElementById('timeBtn'),
    // New Apple Music-style controls
    shuffleBtn: document.getElementById('shuffleBtn'),
    repeatBtn: document.getElementById('repeatBtn'),
    likeBtn: document.getElementById('likeBtn'),
    // Phase 2 Elements
    visualizerCanvas: document.getElementById('visualizerCanvas'),
    searchInput: document.getElementById('searchInput'),
    tabBtns: document.querySelectorAll('.tab-btn'),
    // Phase 3 Elements
    voiceBtn: document.getElementById('voiceBtn'),
    sleepBtn: document.getElementById('sleepBtn'),
    sleepModal: document.getElementById('sleepModal'),
    closeSleepModal: document.getElementById('closeSleepModal'),
    sleepOptions: document.querySelectorAll('.btn-sleep'),
    // Phase 4 Elements
    sleepCountdown: document.getElementById('sleepCountdown'),
    modeBtns: document.querySelectorAll('.btn-mode'),
    // Settings Elements
    settingsBtn: document.getElementById('settingsBtn'),
    settingsModal: document.getElementById('settingsModal'),
    closeSettingsModal: document.getElementById('closeSettingsModal'),
    locationStatus: document.getElementById('locationStatus'),
    resetLocationBtn: document.getElementById('resetLocationBtn')
};

// === Initialization ===
function init() {
    console.log('🎵 PERCY QUASAR EN EL OASIS - Initializing...');

    // Render playlist first
    renderPlaylist();

    // Load saved state from localStorage
    loadState();

    // Restore volume and update visuals
    elements.audio.volume = state.volume;
    elements.volumeSlider.value = state.volume * 100;
    updateRangeBackground(elements.volumeSlider, state.volume * 100);

    // Update UI based on loaded state (but don't auto-play to avoid browser blocking)
    if (state.currentTrackIndex !== -1 && playlist[state.currentTrackIndex]) {
        loadTrack(state.currentTrackIndex, false); // false = don't play yet

        // Restore time visually
        if (state.savedTime > 0) {
            elements.currentTime.textContent = formatTime(state.savedTime);
            // We can't set audio.currentTime until metadata is loaded, 
            // handled in 'loadedmetadata' event
        }
    }

    // Setup event listeners
    setupEventListeners();

    // Create background particles
    createParticles();

    // Setup Search
    setupSearch();

    // Setup Visualizer (will activate on user interaction due to AudioContext policy)
    document.addEventListener('click', setupAudioContext, { once: true });

    // Setup Tabs
    setupTabs();

    // Check for URL parameters (Shared link)
    // Check for URL parameters (Shared link)
    checkSharedLink();

    // Setup Smart Features
    setupVoiceControl();
    setupSleepTimer();
    setupSettingsModal();
    setupLocationModal(); // Ask for permission politely (only if unknown)

    // Auto-detect location if permission was previously granted
    autoDetectLocation();

    // Start Auto-Announcer (Every 10 minutes)
    startAutoAnnouncer();

    // Start Background Data Fetcher (Instant Radio)
    startBackgroundDataFetcher();

    // Preload voices (Chrome requires this to populate the list)
    if ('speechSynthesis' in window) {
        window.speechSynthesis.onvoiceschanged = () => {
            const voices = window.speechSynthesis.getVoices();
            console.log(`🎙️ Loaded ${voices.length} voices`);
        };
    }

    console.log('✅ Initialization complete!');
}

// === Persistence (Save/Load) ===
function saveState() {
    const data = {
        state: {
            currentTrackIndex: state.currentTrackIndex,
            currentTime: elements.audio.currentTime,
            volume: state.volume,
            timestamp: Date.now()
        },
        favorites: state.favorites,
        history: state.history.slice(0, CONFIG.maxHistoryItems),
        preferences: {
            location: state.locationPreference,
            theme: document.body.classList.contains('apollo-mode') ? 'apollo' : 'oasis'
        },
        cachedLocation: state.cachedLocation // Persist location cache
    };

    try {
        localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            console.warn('⚠️ localStorage full, cleaning old data...');
            // Reduce history and try again
            data.history = data.history.slice(0, 20);
            try {
                localStorage.setItem(CONFIG.storageKey, JSON.stringify(data));
            } catch (e2) {
                console.error('❌ Could not save state even after cleanup:', e2);
            }
        } else {
            console.error('❌ Error saving state:', e);
        }
    }
}

function loadState() {
    try {
        const saved = localStorage.getItem(CONFIG.storageKey);
        if (saved) {
            const data = JSON.parse(saved);

            // New consolidated format
            if (data.state) {
                // Validate index
                if (data.state.currentTrackIndex >= 0 && data.state.currentTrackIndex < playlist.length) {
                    state.currentTrackIndex = data.state.currentTrackIndex;
                }

                // Restore volume
                if (typeof data.state.volume === 'number') {
                    state.volume = data.state.volume;
                }

                // Save time to state to be restored when track loads
                if (typeof data.state.currentTime === 'number') {
                    state.savedTime = data.state.currentTime;
                }

                // Load favorites
                if (Array.isArray(data.favorites)) {
                    state.favorites = data.favorites;
                }

                // Load history
                if (Array.isArray(data.history)) {
                    state.history = data.history;
                }

                // Load preferences
                if (data.preferences) {
                    if (data.preferences.location) {
                        state.locationPreference = data.preferences.location;
                    }
                    if (data.preferences.theme === 'apollo') {
                        document.body.classList.add('apollo-mode');
                    }
                }

                // Load cached location
                if (data.cachedLocation) {
                    state.cachedLocation = data.cachedLocation;
                }

                console.log('💾 State restored (consolidated format)');
            } else {
                // Legacy format compatibility
                if (data.currentTrackIndex >= 0 && data.currentTrackIndex < playlist.length) {
                    state.currentTrackIndex = data.currentTrackIndex;
                }
                if (typeof data.volume === 'number') {
                    state.volume = data.volume;
                }
                if (typeof data.currentTime === 'number') {
                    state.savedTime = data.currentTime;
                }
                console.log('💾 State restored (legacy format)');
            }
        }

        // Legacy fallback: Load from old separate keys if new format not found
        if (!saved || !JSON.parse(saved).state) {
            const savedFavorites = localStorage.getItem('percy_favorites');
            if (savedFavorites) {
                state.favorites = JSON.parse(savedFavorites);
            }

            const savedHistory = localStorage.getItem('percy_history');
            if (savedHistory) {
                state.history = JSON.parse(savedHistory);
            }

            const savedTheme = localStorage.getItem('percy_theme');
            if (savedTheme === 'apollo') {
                document.body.classList.add('apollo-mode');
            }
        }

        console.log(`✅ Loaded: ${state.favorites.length} favorites, ${state.history.length} history items`);
    } catch (e) {
        console.error('Error loading state:', e);
    }
}

// === Playlist Rendering ===
function renderPlaylist(items = null) {
    // If no items passed, determine based on view mode and search
    if (items === null) {
        items = getFilteredPlaylist();
    }

    if (items.length === 0) {
        let msg = 'No se encontró música';
        if (state.searchQuery) msg = `No se encontraron resultados para "<strong>${state.searchQuery}</strong>"`;
        else if (state.viewMode === 'favorites') msg = 'Aún no tienes favoritos ❤️';
        else if (state.viewMode === 'history') msg = 'El historial está vacío 🕒';

        elements.playlistContainer.innerHTML = `
            <div class="no-results">
                <p>${msg}</p>
            </div>
        `;
        elements.playlistCount.textContent = '0 items';
        return;
    }

    elements.playlistCount.textContent = `${items.length} ${items.length === 1 ? 'item' : 'items'}`;

    elements.playlistContainer.innerHTML = items.map((track) => {
        // Find original index in main playlist if it exists there
        // For history items, we might not have a direct index map if using objects, 
        // but for now we'll match by title or store index in history
        let originalIndex = -1;

        if (state.viewMode === 'history') {
            // For history, track is an object with { ...trackData, originalIndex }
            originalIndex = track.originalIndex;
        } else {
            originalIndex = playlist.indexOf(track);
        }

        // Only active if it's the current track from the MAIN playlist
        const addedClass = (originalIndex !== -1 && originalIndex === state.currentTrackIndex) ? 'active' : '';

        return `
        <div class="playlist-item ${addedClass}" data-index="${originalIndex}">
            <div class="playlist-item-number">
                ${state.viewMode === 'history' ? '🕒' : String(originalIndex + 1).padStart(2, '0')}
            </div>
            <div class="playlist-item-icon">🎧</div>
            <div class="playlist-item-info">
                <div class="playlist-item-title">${track.title}</div>
                <div class="playlist-item-meta">
                    <span>${track.size || 'MP3'}</span>
                    ${state.viewMode === 'history' && track.playedAt ? `<span> • ${new Date(track.playedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>` : ''}
                </div>
            </div>
            <div class="playing-indicator ${addedClass ? '' : 'hidden'}">
                <span></span><span></span><span></span>
            </div>
        </div>
    `}).join('');

    // Add click listeners to playlist items
    document.querySelectorAll('.playlist-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.dataset.index);
            if (isNaN(index)) return;

            // If clicking the same track, toggle play
            if (state.currentTrackIndex === index) {
                togglePlay();
            } else {
                state.savedTime = 0; // Reset saved time for new track
                loadTrack(index, true);
            }
        });
    });
}

function getFilteredPlaylist() {
    let sourceList = playlist;

    // First filter by View Mode
    if (state.viewMode === 'favorites') {
        sourceList = playlist.filter((_, index) => state.favorites.includes(index));
    } else if (state.viewMode === 'history') {
        sourceList = state.history; // History is an array of track objects
    }

    // Then filter by Search Query
    if (state.searchQuery) {
        sourceList = sourceList.filter(track =>
            track.title.toLowerCase().includes(state.searchQuery)
        );
    }

    return sourceList;
}

function setupTabs() {
    elements.tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            elements.tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Set view mode
            state.viewMode = btn.dataset.view;
            console.log('👀 View Mode:', state.viewMode);

            // Re-render
            renderPlaylist(null);
        });
    });
}

function setupSearch() {
    if (!elements.searchInput) return;

    elements.searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        state.searchQuery = query;

        if (query === '') {
            renderPlaylist(playlist);
        } else {
            const filtered = playlist.filter(track =>
                track.title.toLowerCase().includes(query)
            );
            renderPlaylist(filtered);
        }

        // Re-apply active class if current track is in filtered list
        if (state.currentTrackIndex !== -1) {
            const activeItem = document.querySelector(`.playlist-item[data-index="${state.currentTrackIndex}"]`);
            if (activeItem) {
                activeItem.classList.add('active');
                activeItem.querySelector('.playing-indicator').classList.remove('hidden');
            }
        }
    });
}

function addToHistory(trackIndex) {
    if (trackIndex < 0 || trackIndex >= playlist.length) return;

    const track = playlist[trackIndex];
    const historyItem = {
        ...track,
        originalIndex: trackIndex,
        playedAt: Date.now()
    };

    // Remove duplicates (move to top)
    state.history = state.history.filter(item => item.title !== track.title);

    // Add to beginning
    state.history.unshift(historyItem);

    // Limit to max
    if (state.history.length > CONFIG.maxHistoryItems) {
        state.history.pop();
    }

    // Save using consolidated function
    saveState();

    // Refresh view if in history mode
    if (state.viewMode === 'history') {
        renderPlaylist(null);
    }
}

// === Track Management ===
function loadTrack(index, autoPlay = true) {
    if (index < 0 || index >= playlist.length) return;

    const track = playlist[index];
    state.currentTrackIndex = index;

    // Error reset
    elements.trackTitle.classList.remove('error-text');

    // Determine source URL
    let src = track.file;
    if (src.startsWith('http://') || src.startsWith('https://')) {
        src = getDirectUrl(src);
    } else {
        src = CONFIG.musicFolder + track.file;
    }

    // Update audio source
    elements.audio.crossOrigin = "anonymous"; // Enable CORS for Visualizer
    elements.audio.src = src;

    // Update UI
    elements.trackTitle.textContent = track.title;
    elements.trackArtist.textContent = 'PERCY QUASAR';
    elements.trackSize.textContent = track.size || 'Unknown';

    // Update playlist active state
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
        const isCurrent = i === index;
        item.classList.toggle('active', isCurrent);
        const indicator = item.querySelector('.playing-indicator');
        if (indicator) indicator.classList.toggle('hidden', !isCurrent);
    });

    // Reset progress visuals if starting fresh
    if (state.savedTime === 0) {
        elements.progressBar.value = 0;
        updateRangeBackground(elements.progressBar, 0);
        elements.currentTime.textContent = '0:00';
    }

    if (autoPlay) {
        play();
    } else {
        // Just load metadata to show duration
        elements.audio.load();
    }

    saveState();
    updateLikeButton(); // Update like button state
    addToHistory(index); // Add to history
    console.log(`🎵 Loaded: ${track.title}`);
}

function nextTrack() {
    if (playlist.length === 0) return;
    state.savedTime = 0;

    // Handle repeat one
    if (state.repeatMode === 'one') {
        elements.audio.currentTime = 0;
        play();
        return;
    }

    let nextIndex;

    if (state.shuffleMode && state.playbackQueue.length > 0) {
        // In shuffle mode, use the queue
        const currentQueueIndex = state.playbackQueue.indexOf(state.currentTrackIndex);
        const nextQueueIndex = currentQueueIndex + 1;

        if (nextQueueIndex < state.playbackQueue.length) {
            nextIndex = state.playbackQueue[nextQueueIndex];
        } else if (state.repeatMode === 'all') {
            // Loop back to start of shuffled queue
            nextIndex = state.playbackQueue[0];
        } else {
            // End of queue, no repeat
            pause();
            return;
        }
    } else {
        // Normal sequential playback
        nextIndex = (state.currentTrackIndex + 1) % playlist.length;

        // If we looped back to 0 and repeat is off, stop
        if (nextIndex === 0 && state.currentTrackIndex === playlist.length - 1 && state.repeatMode === 'off') {
            pause();
            return;
        }
    }

    loadTrack(nextIndex, true);
}

function prevTrack() {
    if (playlist.length === 0) return;

    // Direct previous track logic (No restart threshold)
    state.savedTime = 0;

    if (state.shuffleMode && state.playbackQueue.length > 0) {
        // In shuffle mode, go to previous in queue
        const currentQueueIndex = state.playbackQueue.indexOf(state.currentTrackIndex);
        if (currentQueueIndex > 0) {
            loadTrack(state.playbackQueue[currentQueueIndex - 1], true);
            return;
        }
    }

    const prevIndex = state.currentTrackIndex - 1 < 0
        ? playlist.length - 1
        : state.currentTrackIndex - 1;

    loadTrack(prevIndex, true);
}

// === Audio Preloading ===
function preloadNextTrack() {
    if (!CONFIG.enablePreload || playlist.length === 0) return;

    // Determine next track index
    let nextIndex;

    if (state.shuffleMode && state.playbackQueue.length > 0) {
        const currentQueueIndex = state.playbackQueue.indexOf(state.currentTrackIndex);
        const nextQueueIndex = currentQueueIndex + 1;

        if (nextQueueIndex < state.playbackQueue.length) {
            nextIndex = state.playbackQueue[nextQueueIndex];
        } else if (state.repeatMode === 'all') {
            nextIndex = state.playbackQueue[0];
        } else {
            return; // No next track to preload
        }
    } else {
        nextIndex = (state.currentTrackIndex + 1) % playlist.length;

        // Don't preload if we're at the end and repeat is off
        if (nextIndex === 0 && state.currentTrackIndex === playlist.length - 1 && state.repeatMode === 'off') {
            return;
        }
    }

    // Don't preload if already preloaded
    if (state.preloadedTrackIndex === nextIndex) {
        console.log('🔄 Track already preloaded:', playlist[nextIndex].title);
        return;
    }

    const nextTrack = playlist[nextIndex];

    // Create preload audio element if it doesn't exist
    if (!state.preloadAudio) {
        state.preloadAudio = new Audio();
        state.preloadAudio.preload = 'auto';
        console.log('🎵 Created preload audio element');
    }

    // Determine source URL
    let src = nextTrack.file;
    if (src.startsWith('http://') || src.startsWith('https://')) {
        src = getDirectUrl(src);
    } else {
        src = CONFIG.musicFolder + nextTrack.file;
    }

    // Start preloading
    state.preloadAudio.src = src;
    state.preloadedTrackIndex = nextIndex;

    console.log('🔄 Preloading next track:', nextTrack.title);

    // Optional: Monitor preload progress
    state.preloadAudio.addEventListener('progress', function onProgress() {
        if (state.preloadAudio.buffered.length > 0) {
            const bufferedEnd = state.preloadAudio.buffered.end(0);
            const duration = state.preloadAudio.duration;
            if (duration > 0) {
                const percentBuffered = (bufferedEnd / duration) * 100;
                if (percentBuffered > 50) {
                    console.log(`✅ Next track buffered: ${Math.round(percentBuffered)}%`);
                    state.preloadAudio.removeEventListener('progress', onProgress);
                }
            }
        }
    });
}

// ... (skipping other functions)

function startAutoAnnouncer() {
    console.log('🎙️ Auto-announcer initialized (will start after music plays)');

    // Clear any existing interval
    if (state.announcerInterval) {
        clearInterval(state.announcerInterval);
        state.announcerInterval = null;
    }

    // Don't start the interval yet - wait for music to start playing
    // The interval will be started from the play() function
}

// Function to actually start the announcement interval (called from play())
function activateAutoAnnouncer() {
    // Only activate if music has started and we haven't activated yet
    if (!state.musicStartedAt) {
        state.musicStartedAt = Date.now();
        console.log('🎵 Music started, scheduling first announcement in 2 minutes');
    }

    // If interval already running, don't restart
    if (state.announcerInterval) return;

    // Schedule first announcement after delay
    const timeSinceMusicStarted = Date.now() - state.musicStartedAt;
    const timeUntilFirstAnnouncement = Math.max(0, CONFIG.firstAnnouncementDelay - timeSinceMusicStarted);

    setTimeout(() => {
        // Make first announcement
        if (state.isPlaying) {
            console.log('⏱️ First auto-announcement (2 min after music started)');
            announceRadioContent();
        }

        // Then start regular interval
        state.announcerInterval = setInterval(() => {
            if (state.isPlaying) {
                console.log('⏱️ Auto-announcing radio content...');
                announceRadioContent();
            }
        }, CONFIG.announcementInterval);

        console.log('🎙️ Auto-announcer interval started (every 10 min)');
    }, timeUntilFirstAnnouncement);
}

// === Location Permission Modal ===
function setupLocationModal() {
    // Only show modal if preference is unknown (first time)
    if (state.locationPreference !== 'unknown') {
        console.log('🌍 Location preference already set:', state.locationPreference);
        return;
    }

    // Create Modal
    const modal = document.createElement('div');
    modal.className = 'location-modal';
    modal.innerHTML = `
        <div class="location-modal-content">
            <span class="location-icon-large">🌍</span>
            <h3>¿Activar Clima Local?</h3>
            <p>Percy puede anunciarte el clima en tu zona. <br> Solo necesitamos acceso a tu ubicación.</p>
            <div class="location-buttons">
                <button class="btn-location-allow" id="btnAllowLoc">Sí, Activar</button>
                <button class="btn-location-deny" id="btnDenyLoc">No, gracias</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Animate In after a short delay (Google-style: appears after page is loaded)
    setTimeout(() => {
        modal.classList.add('show');
        console.log('🌍 Mostrando modal de ubicación (primera vez)');
    }, 1500); // 1.5 seconds after page load

    // Handlers
    document.getElementById('btnAllowLoc').addEventListener('click', async () => {
        state.locationPreference = 'granted';
        saveState(); // Usar saveState consolidado

        console.log('✅ Usuario permitió ubicación. Solicitando al navegador...');

        // Immediately request browser location to trigger the browser's permission dialog
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    // Cache the location immediately
                    state.cachedLocation = {
                        latitude,
                        longitude,
                        timestamp: Date.now()
                    };

                    console.log('✅ Ubicación obtenida y guardada:', { latitude, longitude });
                    showToast('✅ Clima activado - Ubicación obtenida');

                    // Don't announce immediately - wait for music to start
                    // Announcement will happen automatically when music plays
                },
                (error) => {
                    console.warn('⚠️ El navegador bloqueó la ubicación:', error.message);

                    // User denied at browser level
                    state.locationPreference = 'denied';
                    saveState();

                    showToast('⚠️ Permiso de ubicación denegado en el navegador');
                },
                {
                    enableHighAccuracy: false,
                    timeout: 10000,
                    maximumAge: 3600000
                }
            );
        } else {
            showToast('⚠️ Tu navegador no soporta geolocalización');
        }

        closeModal();
    });

    document.getElementById('btnDenyLoc').addEventListener('click', () => {
        state.locationPreference = 'denied';
        saveState(); // Usar saveState consolidado

        console.log('❌ Usuario rechazó ubicación');
        showToast('ℹ️ No se mostrará el clima');

        closeModal();
    });

    function closeModal() {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// === Auto-Detect Location (Smart Google-like behavior) ===
function autoDetectLocation() {
    // Only auto-detect if user previously granted permission
    if (state.locationPreference !== 'granted') {
        console.log('🌍 Location auto-detection skipped (permission not granted)');
        return;
    }

    // Check if we have a fresh cached location (< 1 hour old)
    if (state.cachedLocation && state.cachedLocation.timestamp) {
        const age = Date.now() - state.cachedLocation.timestamp;
        if (age < state.locationCacheTimeout) {
            console.log('🌍 Using cached location (age: ' + Math.round(age / 60000) + ' min)');
            return; // Use cached location, no need to fetch again
        }
    }

    // Fetch new location silently
    console.log('🌍 Auto-detecting location...');

    if (!navigator.geolocation) {
        console.warn('⚠️ Geolocation not supported');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            // Cache the location
            state.cachedLocation = {
                latitude,
                longitude,
                timestamp: Date.now()
            };

            console.log('✅ Location auto-detected:', { latitude, longitude });

            // Optionally fetch weather immediately
            // fetchWeatherData(latitude, longitude);
        },
        (error) => {
            console.warn('⚠️ Could not auto-detect location:', error.message);

            // If permission was revoked, update preference
            if (error.code === error.PERMISSION_DENIED) {
                state.locationPreference = 'denied';
                saveState();
            }
        },
        {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: state.locationCacheTimeout // Use cached position if available
        }
    );
}

// === Apple Music-Style Features ===

function toggleShuffle() {
    state.shuffleMode = !state.shuffleMode;

    if (state.shuffleMode) {
        // Create shuffled queue
        createShuffledQueue();
        elements.shuffleBtn.classList.add('active');
        showToast('🔀 Modo aleatorio activado');
    } else {
        // Restore normal order
        state.playbackQueue = [];
        elements.shuffleBtn.classList.remove('active');
        showToast('🔀 Modo aleatorio desactivado');
    }

    console.log('🔀 Shuffle:', state.shuffleMode);
}

function createShuffledQueue() {
    // Create array of all track indices
    const indices = Array.from({ length: playlist.length }, (_, i) => i);

    // Remove current track
    const currentIndex = indices.indexOf(state.currentTrackIndex);
    if (currentIndex > -1) {
        indices.splice(currentIndex, 1);
    }

    // Shuffle using Fisher-Yates algorithm
    for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    // Put current track at the beginning
    if (state.currentTrackIndex >= 0) {
        indices.unshift(state.currentTrackIndex);
    }

    state.playbackQueue = indices;
}

function toggleRepeat() {
    // Cycle through: off → all → one → off
    if (state.repeatMode === 'off') {
        state.repeatMode = 'all';
        elements.repeatBtn.classList.add('active');
        elements.repeatBtn.querySelector('.repeat-one')?.classList.add('hidden');
        showToast('🔁 Repetir todo');
    } else if (state.repeatMode === 'all') {
        state.repeatMode = 'one';
        elements.repeatBtn.querySelector('.repeat-one')?.classList.remove('hidden');
        showToast('🔂 Repetir canción');
    } else {
        state.repeatMode = 'off';
        elements.repeatBtn.classList.remove('active');
        elements.repeatBtn.querySelector('.repeat-one')?.classList.add('hidden');
        showToast('🔁 Repetir desactivado');
    }

    console.log('🔁 Repeat mode:', state.repeatMode);
}

function toggleFavorite() {
    if (state.currentTrackIndex === -1) {
        showToast('⚠️ No hay canción reproduciéndose');
        return;
    }

    const index = state.currentTrackIndex;
    const isFavorite = state.favorites.includes(index);

    if (isFavorite) {
        // Remove from favorites
        state.favorites = state.favorites.filter(i => i !== index);
        elements.likeBtn.classList.remove('active');
        elements.likeBtn.querySelector('svg').setAttribute('fill', 'none');
        showToast('💔 Eliminado de favoritos');
    } else {
        // Add to favorites
        state.favorites.push(index);
        elements.likeBtn.classList.add('active');
        elements.likeBtn.querySelector('svg').setAttribute('fill', 'currentColor');
        showToast('❤️ Agregado a favoritos');
    }

    // Save using consolidated function
    saveState();
    console.log('❤️ Favorites:', state.favorites);
}

function updateLikeButton() {
    if (state.currentTrackIndex === -1) return;

    const isFavorite = state.favorites.includes(state.currentTrackIndex);

    if (isFavorite) {
        elements.likeBtn.classList.add('active');
        elements.likeBtn.querySelector('svg').setAttribute('fill', 'currentColor');
    } else {
        elements.likeBtn.classList.remove('active');
        elements.likeBtn.querySelector('svg').setAttribute('fill', 'none');
    }
}

function showToast(message) {
    // Create toast element if it doesn't exist
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');

    // Hide after 2 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// === Playback Controls ===
function play() {
    if (state.currentTrackIndex === -1 && playlist.length > 0) {
        loadTrack(0, true);
        return;
    }

    if (state.currentTrackIndex === -1) {
        alert('⚠️ La playlist está vacía. Agrega canciones en app.js');
        return;
    }

    const playPromise = elements.audio.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            state.isPlaying = true;
            updatePlayButton();
            elements.vinylRecord.classList.add('playing');
            // elements.visualizer.classList.add('playing'); // Removed legacy visualizer

            // Restore time if needed (only once)
            if (state.savedTime > 0) {
                elements.audio.currentTime = state.savedTime;
                state.savedTime = 0; // Clear it so we don't jump back on loop
            }

            // Activate auto-announcer when music starts playing
            activateAutoAnnouncer();

            // Preload next track for smooth playback
            if (CONFIG.preloadNextTrack) {
                preloadNextTrack();
            }

            console.log('▶️ Playing');
        })
            .catch(err => {
                console.error('❌ Playback error:', err);
                handlePlaybackError(err);
            });
    }
}

function handlePlaybackError(err) {
    state.isPlaying = false;
    updatePlayButton();

    let msg = 'Error desconocido';
    if (err.name === 'NotAllowedError') {
        msg = '⚠️ Interactúa con la página primero (haz clic) para reproducir audio.';
    } else if (err.name === 'NotSupportedError') {
        msg = '⚠️ Formato de audio no soportado o archivo corrupto.';
    } else {
        // Most common: File not found (404) or Network Error
        // Check standard MediaError codes if available via audio element
        const errorCode = elements.audio.error ? elements.audio.error.code : 'unknown';
        let detail = '';
        if (errorCode === 1) detail = '(Abortado)';
        if (errorCode === 2) detail = '(Error de Red)';
        if (errorCode === 3) detail = '(Error de Decodificación)';
        if (errorCode === 4) detail = '(No soportado / 404)';

        msg = `❌ No se puede reproducir el archivo: ${playlist[state.currentTrackIndex].title}\nError Code: ${errorCode} ${detail}\n\nVerifica tu conexión a internet o intenta recargar.`;
        elements.trackTitle.textContent = `Error: ${detail}`;
        elements.trackTitle.classList.add('error-text');
    }
    alert(msg);
}

function pause() {
    elements.audio.pause();
    state.isPlaying = false;
    updatePlayButton();
    elements.vinylRecord.classList.remove('playing');
    // elements.visualizer.classList.remove('playing'); // Removed legacy visualizer
    saveState(); // Save on pause
    console.log('⏸️ Paused');
}

function togglePlay() {
    if (state.isPlaying) {
        pause();
    } else {
        play();
    }
}

function updatePlayButton() {
    elements.playIcon.classList.toggle('hidden', state.isPlaying);
    elements.pauseIcon.classList.toggle('hidden', !state.isPlaying);
}

// === Volume Controls ===
function setVolume(value) {
    state.volume = Math.max(0, Math.min(1, value));
    elements.audio.volume = state.volume;
    elements.volumeSlider.value = state.volume * 100;
    updateRangeBackground(elements.volumeSlider, state.volume * 100);

    if (state.volume === 0) {
        state.isMuted = true;
    } else {
        state.isMuted = false;
    }
    saveState(); // Save volume preference
}

function toggleMute() {
    if (state.isMuted) {
        setVolume(state.previousVolume || 0.5);
        state.isMuted = false;
    } else {
        state.previousVolume = state.volume;
        setVolume(0);
        state.isMuted = true;
    }
}

// === Progress Bar (Seek) ===
function updateProgress() {
    if (state.isSeeking) return;

    const { currentTime, duration } = elements.audio;

    if (duration) {
        const percentage = (currentTime / duration) * 100;
        elements.progressBar.value = percentage;

        // Update visual background
        updateRangeBackground(elements.progressBar, percentage);

        // Save state periodically (every ~5 seconds approx based on timeupdate freq)
        if (Math.floor(currentTime) % 5 === 0) {
            saveState();
        }
    }

    elements.currentTime.textContent = formatTime(currentTime);
    elements.totalTime.textContent = formatTime(duration || 0);
}

function handleSeekInput(e) {
    state.isSeeking = true;
    const percentage = e.target.value;
    const { duration } = elements.audio;

    if (duration) {
        elements.currentTime.textContent = formatTime((percentage / 100) * duration);
        updateRangeBackground(e.target, percentage);
    }
}

function handleSeekChange(e) {
    state.isSeeking = false;
    const percentage = e.target.value;
    const { duration } = elements.audio;

    if (duration) {
        elements.audio.currentTime = (percentage / 100) * duration;
        saveState();
    }
}

function updateRangeBackground(input, percentage) {
    input.style.background = `linear-gradient(to right, var(--color-primary) 0%, var(--color-accent) ${percentage}%, var(--color-surface-light) ${percentage}%, var(--color-surface-light) 100%)`;
}

// === Time Formatting ===
function formatTime(seconds) {
    if (isNaN(seconds)) return '--:--';

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hrs > 0) {
        return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    return `${mins}:${String(secs).padStart(2, '0')}`;
}

// === Background Particles ===
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    // Optimized particle count for better performance
    const particleCount = window.innerWidth < 768
        ? CONFIG.maxParticles.mobile
        : CONFIG.maxParticles.desktop;

    // Clear existing
    particlesContainer.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'white';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.opacity = Math.random() * 0.5;
        particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        // Performance: Use will-change sparingly
        if (i < 5) particle.style.willChange = 'transform';

        particlesContainer.appendChild(particle);
    }
}

// === Buffer Progress ===
function updateBuffer() {
    const { buffered, duration } = elements.audio;

    if (buffered.length > 0 && duration) {
        const bufferedEnd = buffered.end(buffered.length - 1);
        const percentage = (bufferedEnd / duration) * 100;
        elements.loadingBar.style.width = `${percentage}%`;
    }
}

// === Audio Visualizer ===
function setupAudioContext() {
    if (state.audioContext) return;

    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        state.audioContext = new AudioContext();

        state.analyser = state.audioContext.createAnalyser();
        state.analyser.fftSize = 256;

        // Connect audio element to analyser
        state.source = state.audioContext.createMediaElementSource(elements.audio);
        state.source.connect(state.analyser);
        state.analyser.connect(state.audioContext.destination);

        state.dataArray = new Uint8Array(state.analyser.frequencyBinCount);

        drawVisualizer();
        console.log('🌊 Visualizer connected');
    } catch (e) {
        console.warn('Visualizer setup failed (likely CORS or browser policy):', e);
        if (CONFIG.debugMode) {
            showToast('⚠️ Visualizador no disponible');
        }
    }
}

function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);

    if (!state.analyser || !elements.visualizerCanvas) return;

    // Only animate if playing
    if (!state.isPlaying) return;

    state.analyser.getByteFrequencyData(state.dataArray);

    const canvas = elements.visualizerCanvas;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    ctx.clearRect(0, 0, width, height);

    // Refactored: Use pattern map instead of if-else chain
    const patterns = {
        bars: drawBarPattern,
        waves: drawWavePattern,
        circle: drawCirclePattern,
        particles: drawParticlePattern
    };

    const drawPattern = patterns[state.visualizerMode];
    if (drawPattern) {
        drawPattern(ctx, width, height, centerX, centerY);
    }
}

function drawBarPattern(ctx, width, height, centerX, centerY) {
    const radius = 80;
    const barCount = 100;
    const step = Math.floor(state.dataArray.length / barCount);

    for (let i = 0; i < barCount; i++) {
        const value = state.dataArray[i * step];
        const barHeight = (value / 255) * 60;
        const rads = (Math.PI * 2) / barCount;
        const angle = i * rads - Math.PI / 2;

        const x_start = centerX + Math.cos(angle) * radius;
        const y_start = centerY + Math.sin(angle) * radius;
        const x_end = centerX + Math.cos(angle) * (radius + barHeight);
        const y_end = centerY + Math.sin(angle) * (radius + barHeight);

        ctx.beginPath();
        ctx.moveTo(x_start, y_start);
        ctx.lineTo(x_end, y_end);

        const hue = 350 + (value / 255) * 20; // Red theme: 350-370 range
        ctx.strokeStyle = `hsl(${hue}, 80%, 60%)`;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.stroke();
    }
}

function drawWavePattern(ctx, width, height, centerX, centerY) {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#e74c5c'; // Red theme color

    const sliceWidth = width / state.dataArray.length;
    let x = 0;

    for (let i = 0; i < state.dataArray.length; i++) {
        const v = state.dataArray[i] / 128.0;
        const y = v * (height / 2);

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }

        x += sliceWidth;
    }

    ctx.lineTo(width, height / 2);
    ctx.stroke();
}

function drawCirclePattern(ctx, width, height, centerX, centerY) {
    const barCount = 60;
    const step = Math.floor(state.dataArray.length / barCount);

    for (let i = 0; i < barCount; i++) {
        const value = state.dataArray[i * step];
        const radius = (value / 255) * (width / 2);

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${350 + i * 1}, 70%, 50%, 0.1)`; // Red theme
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

let particles = [];
function drawParticlePattern(ctx, width, height, centerX, centerY) {
    if (particles.length === 0) {
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                speed: Math.random() * 2 + 1,
                radius: Math.random() * 3 + 1
            });
        }
    }

    const intensity = state.dataArray.reduce((acc, val) => acc + val, 0) / state.dataArray.length;

    particles.forEach((p, i) => {
        p.y -= p.speed * (intensity / 50);
        if (p.y < 0) p.y = height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(355, 80%, 70%, ${intensity / 255})`; // Red theme
        ctx.fill();
    });
}

// === Smart Features (Phase 3) ===

// 1. Voice Command System "Oasis"
function setupVoiceControl() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        console.warn('Speech recognition not supported');
        elements.voiceBtn.style.display = 'none';
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    state.recognition = new SpeechRecognition();
    state.recognition.continuous = false; // Stop after one command (simpler for now)
    state.recognition.lang = 'es-ES';
    state.recognition.interimResults = false;
    state.recognition.maxAlternatives = 1;

    state.recognition.onstart = () => {
        state.isListening = true;
        elements.voiceBtn.classList.add('listening');
        console.log('🎤 Oasis listening...');
    };

    state.recognition.onend = () => {
        state.isListening = false;
        elements.voiceBtn.classList.remove('listening');
        console.log('🎤 Oasis stopped listening');
    };

    state.recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        console.log(`🎤 Command: "${command}"`);
        processVoiceCommand(command);
    };

    // Button trigger
    elements.voiceBtn.addEventListener('click', () => {
        if (state.isListening) {
            state.recognition.stop();
        } else {
            state.recognition.start();
        }
    });
}

function processVoiceCommand(command) {
    if (command.includes('reproducir') || command.includes('play') || command.includes('música')) {
        play();
        showToast('🎤 Reproduciendo');
    } else if (command.includes('pausa') || command.includes('parar') || command.includes('detener')) {
        pause();
        showToast('🎤 Pausa');
    } else if (command.includes('siguiente') || command.includes('próxima')) {
        nextTrack();
        showToast('🎤 Siguiente canción');
    } else if (command.includes('anterior') || command.includes('atrás')) {
        prevTrack();
        showToast('🎤 Canción anterior');
    } else if (command.includes('aleatorio') || command.includes('mezclar')) {
        toggleShuffle();
    } else if (command.includes('me gusta') || command.includes('favoritos')) {
        toggleFavorite();
    } else {
        showToast(`🤷‍♂️ No entendí: "${command}"`);
    }
}

// 2. Sleep Timer
function setupSleepTimer() {
    // Open Modal
    elements.sleepBtn.addEventListener('click', () => {
        elements.sleepModal.classList.remove('hidden');
    });

    // Close Modal
    elements.closeSleepModal.addEventListener('click', () => {
        elements.sleepModal.classList.add('hidden');
    });

    // Select Time
    elements.sleepOptions.forEach(btn => {
        btn.addEventListener('click', () => {
            const minutes = parseInt(btn.dataset.time);
            startSleepTimer(minutes);
            elements.sleepModal.classList.add('hidden');
        });
    });
}

function startSleepTimer(minutes) {
    // Clear existing
    if (state.sleepTimer) {
        clearInterval(state.sleepTimer);
        state.sleepTimer = null;
    }

    state.sleepTimeRemaining = minutes * 60;
    state.originalVolume = state.volume;

    elements.sleepBtn.classList.add('active');
    showToast(`🌙 Timer: ${minutes} min`);

    state.sleepTimer = setInterval(() => {
        state.sleepTimeRemaining--;

        // Update UI Countdown
        if (elements.sleepCountdown) {
            elements.sleepCountdown.classList.remove('hidden');
            elements.sleepCountdown.textContent = formatTime(state.sleepTimeRemaining);
        }

        // Fade out in last 60 seconds
        if (state.sleepTimeRemaining <= 60 && state.sleepTimeRemaining > 0) {
            const fadeFactor = state.sleepTimeRemaining / 60;
            elements.audio.volume = state.originalVolume * fadeFactor;
        }

        if (state.sleepTimeRemaining <= 0) {
            clearInterval(state.sleepTimer);
            state.sleepTimer = null;
            elements.sleepBtn.classList.remove('active');
            if (elements.sleepCountdown) elements.sleepCountdown.classList.add('hidden');

            pause();
            elements.audio.volume = state.originalVolume; // Restore volume for next time
            showToast('🌙 Buenas noches');
        }
    }, 1000);
}

// 3. Settings Modal
function setupSettingsModal() {
    // Open Modal
    if (elements.settingsBtn) {
        elements.settingsBtn.addEventListener('click', () => {
            elements.settingsModal.classList.remove('hidden');
            updateLocationStatus();
        });
    }

    // Close Modal
    if (elements.closeSettingsModal) {
        elements.closeSettingsModal.addEventListener('click', () => {
            elements.settingsModal.classList.add('hidden');
        });
    }

    // Reset Location Button
    if (elements.resetLocationBtn) {
        elements.resetLocationBtn.addEventListener('click', () => {
            // Reset location preference to unknown
            state.locationPreference = 'unknown';
            state.cachedLocation = null;
            saveState();

            console.log('🔄 Preferencias de ubicación reseteadas');
            showToast('✅ Preferencias reseteadas. Recarga la página.');

            // Update status
            updateLocationStatus();

            // Close modal and reload page after a short delay
            setTimeout(() => {
                elements.settingsModal.classList.add('hidden');
                location.reload();
            }, 1500);
        });
    }
}

function updateLocationStatus() {
    if (!elements.locationStatus) return;

    let statusText = '';
    let statusIcon = '';

    switch (state.locationPreference) {
        case 'granted':
            statusIcon = '✅';
            statusText = 'Ubicación activada - El clima está habilitado';
            if (state.cachedLocation) {
                const age = Math.round((Date.now() - state.cachedLocation.timestamp) / 60000);
                statusText += ` (última actualización: hace ${age} min)`;
            }
            break;
        case 'denied':
            statusIcon = '❌';
            statusText = 'Ubicación desactivada - El clima no se mostrará';
            break;
        case 'unknown':
        default:
            statusIcon = '❓';
            statusText = 'No se ha configurado la ubicación';
            break;
    }

    elements.locationStatus.textContent = `${statusIcon} ${statusText}`;
}

// === Event Listeners ===
function setupEventListeners() {
    // Playback controls
    elements.playBtn.addEventListener('click', togglePlay);
    elements.prevBtn.addEventListener('click', prevTrack);
    elements.nextBtn.addEventListener('click', nextTrack);

    // Theme Toggle
    if (elements.themeToggle) {
        elements.themeToggle.addEventListener('click', toggleTheme);
    }

    // Share Button
    if (elements.shareBtn) {
        elements.shareBtn.addEventListener('click', shareCurrentTrack);
    }

    // Time Announcement (Manual Trigger)
    if (elements.timeBtn) {
        elements.timeBtn.addEventListener('click', () => {
            // Manual click triggers full radio report
            announceRadioContent();
        });
    }

    // Apple Music-style controls
    if (elements.shuffleBtn) {
        elements.shuffleBtn.addEventListener('click', toggleShuffle);
    }

    if (elements.repeatBtn) {
        elements.repeatBtn.addEventListener('click', toggleRepeat);
    }

    if (elements.likeBtn) {
        elements.likeBtn.addEventListener('click', toggleFavorite);
    }

    // Visualizer Mode Selectors
    elements.modeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            state.visualizerMode = btn.dataset.mode;
            elements.modeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            showToast(`🎨 Visualizador: ${btn.title}`);
        });
    });

    // Volume controls
    elements.volumeBtn.addEventListener('click', toggleMute);
    elements.volumeSlider.addEventListener('input', (e) => {
        setVolume(e.target.value / 100);
        updateRangeBackground(e.target, e.target.value);
    });

    // Progress bar (Range Input)
    elements.progressBar.addEventListener('input', handleSeekInput);
    elements.progressBar.addEventListener('change', handleSeekChange);

    // Audio events
    elements.audio.addEventListener('timeupdate', updateProgress);
    elements.audio.addEventListener('progress', updateBuffer);
    elements.audio.addEventListener('ended', nextTrack);

    elements.audio.addEventListener('loadedmetadata', () => {
        elements.trackDuration.textContent = formatTime(elements.audio.duration);
        // If we have a saved time and we haven't played yet (initial load)
        if (state.savedTime > 0 && !state.isPlaying) {
            elements.currentTime.textContent = formatTime(state.savedTime);
            // Note: Setting currentTime here might not render if not playing in some browsers
            elements.audio.currentTime = state.savedTime;
        }
    });

    elements.audio.addEventListener('error', (e) => {
        console.error('❌ Audio error:', e);
        // Don't auto-alert here to avoid spamming if just loading metadata
        // handlePlaybackError called on play attempt
    });

    // Save state on close
    window.addEventListener('beforeunload', saveState);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT') return; // Ignore if typing

        switch (e.code) {
            case 'Space':
                e.preventDefault();
                togglePlay();
                break;
            case 'ArrowRight':
                e.preventDefault();
                elements.audio.currentTime += CONFIG.seekStep;
                saveState();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                elements.audio.currentTime -= CONFIG.seekStep;
                saveState();
                break;
            case 'ArrowUp':
                e.preventDefault();
                setVolume(state.volume + CONFIG.volumeStep);
                updateRangeBackground(elements.volumeSlider, state.volume * 100);
                break;
            case 'ArrowDown':
                e.preventDefault();
                setVolume(state.volume - CONFIG.volumeStep);
                updateRangeBackground(elements.volumeSlider, state.volume * 100);
                break;
            case 'KeyM':
                e.preventDefault();
                toggleMute();
                break;
            case 'KeyN':
                e.preventDefault();
                nextTrack();
                break;
            case 'KeyP':
                e.preventDefault();
                prevTrack();
                break;
        }
    });
}

// === Helper Functions ===
function getDirectUrl(url) {
    // Convert Google Drive Share Links to Direct Download Links
    if (url.includes('drive.google.com') && url.includes('/file/d/')) {
        try {
            const id = url.split('/file/d/')[1].split('/')[0];
            return `https://drive.google.com/uc?export=download&id=${id}`;
        } catch (e) {
            console.error('Error parsing Drive URL:', e);
            return url;
        }
    }
    // Convert Dropbox Links
    if (url.includes('dropbox.com')) {
        return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '');
    }
    return url;
}

// === Theme Toggle (Apollo Mode) ===
function toggleTheme() {
    document.body.classList.toggle('apollo-mode');
    const isApollo = document.body.classList.contains('apollo-mode');

    // Animation
    const iconSpan = elements.themeToggle.querySelector('.icon');
    iconSpan.style.animation = 'none';
    iconSpan.offsetHeight; /* trigger reflow */

    if (isApollo) {
        iconSpan.textContent = '🚀'; // Rocket for Apollo mode
        iconSpan.style.animation = 'land-softly 0.5s ease forwards';
    } else {
        iconSpan.textContent = '🌙'; // Moon for Dark mode
        iconSpan.style.animation = 'land-softly 0.5s ease forwards';
    }

    // Save preference using consolidated function
    saveState();
}

// === Social & Tools Features ===

// Security: Sanitize HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function shareCurrentTrack() {
    if (state.currentTrackIndex === -1) {
        showToast('⚠️ Reproduce una canción primero para compartirla');
        return;
    }

    const trackIndex = state.currentTrackIndex;
    const currentTime = Math.floor(elements.audio.currentTime);

    // Construct URL
    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?track=${trackIndex}&t=${currentTime}`;

    // Create beautiful modal
    const modal = document.createElement('div');
    modal.className = 'share-modal';
    modal.innerHTML = `
        <div class="share-modal-content">
            <button class="share-modal-close" onclick="this.closest('.share-modal').remove()">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
            </button>
            
            <div class="share-modal-header">
                <div class="share-icon-circle">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                    </svg>
                </div>
                <h2>Compartir Mix</h2>
                <p class="share-track-name">${escapeHtml(playlist[trackIndex].title)}</p>
            </div>
            
            <div class="share-url-container">
                <input type="text" class="share-url-input" value="${shareUrl}" readonly>
                <button class="share-copy-btn" onclick="copyShareUrl('${shareUrl}')">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                    Copiar
                </button>
            </div>

            <div class="social-share-buttons">
                <a href="https://wa.me/?text=${encodeURIComponent('Escucha este mix en el Oasis: ' + shareUrl)}" target="_blank" class="social-btn whatsapp" title="Compartir en WhatsApp">
                    <span>📱 WhatsApp</span>
                </a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}" target="_blank" class="social-btn facebook" title="Compartir en Facebook">
                    <span>📘 Facebook</span>
                </a>
                <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent('Escucha este mix en el Oasis: ' + shareUrl)}" target="_blank" class="social-btn twitter" title="Compartir en X">
                    <span>✖️</span>
                </a>
                <a href="https://www.instagram.com/" target="_blank" class="social-btn instagram" title="Compartir en Instagram (Copiar Link)" onclick="copyShareUrl('${shareUrl}'); showToast('🔗 Enlace copiado para Instagram');">
                    <span>📸 Instagram</span>
                </a>
            </div>
            
            <div class="share-info">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
                <span>El enlace incluye la posición actual (${formatTime(currentTime)})</span>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Animate in
    setTimeout(() => modal.classList.add('show'), 10);

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

// Global function for copy button
window.copyShareUrl = function (url) {
    navigator.clipboard.writeText(url).then(() => {
        const btn = document.querySelector('.share-copy-btn');
        const originalText = btn.innerHTML;

        btn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            ¡Copiado!
        `;
        btn.classList.add('copied');

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
        }, 2000);

        showToast('🔗 Enlace copiado al portapapeles');
    }).catch(err => {
        console.error('Error copying to clipboard:', err);
        showToast('❌ Error al copiar');
    });
};

function checkSharedLink() {
    const urlParams = new URLSearchParams(window.location.search);
    const trackParam = urlParams.get('track');
    const timeParam = urlParams.get('t');

    if (trackParam !== null) {
        const index = parseInt(trackParam);
        if (!isNaN(index) && index >= 0 && index < playlist.length) {
            console.log(`🔗 Detected shared link: Track ${index}, Time ${timeParam}`);

            // Wait for user interaction usually, but we can setup the state
            state.currentTrackIndex = index;
            if (timeParam !== null) {
                state.savedTime = parseFloat(timeParam);
            }

            // Load the track but don't autoplay immediately if browser blocks it
            // However, most users expect it to play. We'll try.
            loadTrack(index, true);
        }
    }
}

// === Weather & News Logic ===

async function fetchWeather() {
    // Check permission preference first
    if (state.locationPreference !== 'granted') {
        console.log('📍 Location permission not granted by user preference. Skipping weather.');
        return null;
    }

    // Check if we have cached location that's still valid
    if (state.cachedLocation) {
        const now = Date.now();
        const cacheAge = now - state.cachedLocation.timestamp;

        if (cacheAge < state.locationCacheTimeout) {
            console.log('📍 Using cached location (age: ' + Math.round(cacheAge / 60000) + ' min)');
            return fetchWeatherForCoords(state.cachedLocation.latitude, state.cachedLocation.longitude);
        } else {
            console.log('📍 Location cache expired, requesting new location');
        }
    }

    return new Promise((resolve) => {
        if (!navigator.geolocation) {
            resolve(null);
            return;
        }

        // Only request location if we don't have cached coords
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            // Cache the location
            state.cachedLocation = {
                latitude,
                longitude,
                timestamp: Date.now()
            };
            console.log('📍 Location cached for 1 hour');

            const weather = await fetchWeatherForCoords(latitude, longitude);
            resolve(weather);
        }, (error) => {
            console.warn('📍 Geolocation denied by browser:', error.message);
            // If user denies in browser, update preference
            state.locationPreference = 'denied';
            saveState();
            resolve(null);
        }, {
            // Options to avoid repeated prompts
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 3600000 // Accept cached position up to 1 hour old
        });
    });
}

// Separate function to fetch weather for given coordinates
async function fetchWeatherForCoords(latitude, longitude) {
    try {
        // Get weather data
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weatherData = await weatherResponse.json();

        // Get city name using reverse geocoding (Nominatim)
        let cityName = '';
        try {
            const geoResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
            const geoData = await geoResponse.json();
            cityName = geoData.address.city || geoData.address.town || geoData.address.village || geoData.address.state || 'tu ubicación';
        } catch (geoErr) {
            cityName = 'tu ubicación';
        }

        if (weatherData.current_weather) {
            const temp = weatherData.current_weather.temperature;
            const code = weatherData.current_weather.weathercode;

            let conditions = 'el cielo está parcialmente nublado';
            if (code === 0) conditions = 'el cielo está despejado';
            if (code > 0 && code < 4) conditions = 'hay algunas nubes';
            if (code >= 45 && code < 50) conditions = 'hay niebla';
            if (code >= 51 && code < 70) conditions = 'está lloviendo ligeramente';
            if (code >= 70) conditions = 'hay lluvia intensa';

            return `En ${cityName}, la temperatura es de ${temp} grados Celsius y ${conditions}.`;
        } else {
            return null;
        }
    } catch (e) {
        console.error('Weather error:', e);
        if (CONFIG.debugMode) {
            showToast('⚠️ No se pudo obtener el clima');
        }
        return null;
    }
}

async function fetchNews() {
    try {
        const topics = [
            'Ciencia',
            'Matemática',
            'Tecnología',
            'Inteligencia Artificial',
            'Economía',
            'Física',
            'Medicina',
            'Biología'
        ];

        // Pick random topic
        const topic = topics[Math.floor(Math.random() * topics.length)];
        // Google News RSS URL (Spanish/Latin America)
        const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(topic)}&hl=es-419&gl=CO&ceid=CO:es-419`;
        // Convert RSS to JSON using rss2json.com (Free tier: 1 hour cache)
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'ok' && data.items && data.items.length > 0) {
            // Pick a random article from the top 3 to keep it fresh
            const articleIndex = Math.floor(Math.random() * Math.min(3, data.items.length));
            const article = data.items[articleIndex];

            // Cleanup title (Remove source if usually at end like " - El Tiempo")
            let cleanTitle = article.title.split(' - ')[0];

            console.log('📰 Fuente de Noticias:', {
                tema: topic,
                titulo: cleanTitle,
                fuente: 'Google News RSS'
            });

            return `En noticias de ${topic}: ${cleanTitle}.`;
        }

        // Fallback to Spaceflight API if RSS fails
        return null;
    } catch (e) {
        console.error('News error:', e);
        if (CONFIG.debugMode) {
            showToast('⚠️ No se pudieron cargar las noticias');
        }
        return null;
    }
}


async function fetchCurrency() {
    try {
        // Free API for exchange rates
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();

        // Default to Peru (PEN)
        if (data && data.rates && data.rates.PEN) {
            const rate = data.rates.PEN;
            // Format number (e.g., 3.85) - 2 decimal places for Soles
            const rateStr = rate.toFixed(2).replace('.', ',');
            return `El dólar cotiza hoy a ${rateStr} soles peruanos.`;
        }
        return null;
    } catch (e) {
        console.error('Currency error:', e);
        if (CONFIG.debugMode) {
            showToast('⚠️ No se pudo obtener el tipo de cambio');
        }
        return null;
    }
}

async function announceRadioContent() {
    // Debounce: Prevent multiple announcements in quick succession
    const now = Date.now();
    if (state.lastAnnouncementTime && (now - state.lastAnnouncementTime) < 5000) {
        console.log('📻 Anuncio omitido (demasiado pronto desde el último)');
        return;
    }
    state.lastAnnouncementTime = now;

    console.log('📻 Preparing radio report...');

    // 1. Time string
    const nowDate = new Date();
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    let timeText = `Son las ${hours} horas con ${minutes} minutos.`;
    if (minutes === 0) timeText = `Son las ${hours} en punto.`;
    if (minutes === 30) timeText = `Son las ${hours} y media.`;

    // 2. GetData (Use Cache if available)
    // If cache is empty or old (> 30 min), trigger update but use what we have or generic message
    // Ideally, the background fetcher keeps this fresh.

    let weatherText = state.radioData.weather;
    let newsText = state.radioData.news;
    let currencyText = state.radioData.currency;

    // Fallback if data is missing (first run)
    if (!weatherText && !newsText && !currencyText) {
        console.log('⚠️ No cached data, fetching live (might be slow)...');
        // If really urgent, we could await here, but user asked for SPEED.
        // Better strategy: triggering background update now and speaking just time or generic info?
        // Let's try to fetch live if missing, but hopefully background fetcher did its job.
        [weatherText, newsText, currencyText] = await Promise.all([
            fetchWeather(),
            fetchNews(),
            fetchCurrency()
        ]);

        // Cache it for next time
        state.radioData = { weather: weatherText, news: newsText, currency: currencyText, lastUpdated: Date.now() };
    }

    // 3. Construct Full Script
    let fullScript = `Oasis te da la hora. ${timeText}`;

    if (weatherText) {
        fullScript += ` ${weatherText}`;
    }

    if (currencyText) {
        fullScript += ` ${currencyText}`;
    }

    if (newsText) {
        fullScript += ` ${newsText}`;
    }

    fullScript += ` Estás escuchando Percy Quasar en el oasis.`;

    // 4. Speak
    speakText(fullScript);
    showVisualRadio(fullScript);
}

// === Background Data Fetcher (Instant Radio) ===
function startBackgroundDataFetcher() {
    console.log('🚀 Starting background data fetcher...');
    updateRadioData(); // Initial fetch

    // Update every 15 minutes
    setInterval(updateRadioData, 15 * 60 * 1000);
}

async function updateRadioData() {
    console.log('🔄 Updating radio data in background...');
    try {
        const [weather, news, currency] = await Promise.all([
            fetchWeather(),
            fetchNews(),
            fetchCurrency()
        ]);

        state.radioData = {
            weather,
            news,
            currency,
            lastUpdated: Date.now()
        };
        console.log('✅ Radio data updated successfully!');
    } catch (e) {
        console.error('❌ Error updating background data:', e);
    }
}

function speakText(text) {
    if (!('speechSynthesis' in window)) {
        console.warn('⚠️ speechSynthesis no está disponible en este navegador');
        showToast('⚠️ Voz no disponible en este dispositivo');
        return;
    }

    console.log('🎙️ Iniciando anuncio de voz:', text.substring(0, 50) + '...');

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    closeVisualRadio(); // Close any existing modal


    const isMobile = isMobileDevice();
    console.log('📱 Dispositivo móvil detectado:', isMobile);

    // Store original state
    const wasPlaying = state.isPlaying;
    const originalVolume = state.volume;

    // MOBILE: Pause music completely (better compatibility)
    // DESKTOP: Duck volume (traditional approach)
    if (isMobile) {
        if (wasPlaying) {
            console.log('📱 Pausando música para anuncio (móvil)');
            elements.audio.pause();
        }
    } else {
        // Desktop: Smooth fade down
        const duckVolume = Math.max(0.05, originalVolume * 0.2);
        const fadeDown = setInterval(() => {
            if (elements.audio.volume > duckVolume) {
                elements.audio.volume = Math.max(duckVolume, elements.audio.volume - 0.05);
            } else {
                elements.audio.volume = duckVolume;
                clearInterval(fadeDown);
            }
        }, 30);
    }

    const utterance = new SpeechSynthesisUtterance(text);

    // Voice Strategy - Get voices (may need to wait for voiceschanged event on some browsers)
    let voices = window.speechSynthesis.getVoices();

    // If voices not loaded yet, wait for them
    if (voices.length === 0) {
        console.log('🎙️ Esperando a que se carguen las voces...');
        window.speechSynthesis.addEventListener('voiceschanged', () => {
            voices = window.speechSynthesis.getVoices();
            selectVoice();
        }, { once: true });
    } else {
        selectVoice();
    }

    function selectVoice() {
        const esVoices = voices.filter(v => v.lang.includes('es') || v.lang.includes('sp'));
        console.log(`🎙️ Voces en español disponibles: ${esVoices.length}`, esVoices.map(v => v.name));

        // Prefer specific voices
        let selectedVoice = esVoices.find(v =>
            v.name.includes('Google') ||
            v.name.includes('Microsoft') ||
            v.name.includes('Paulina') ||
            v.name.includes('Monica') ||
            v.name.includes('Diego') ||
            v.name.includes('Luciana')
        );

        if (!selectedVoice && esVoices.length > 0) {
            selectedVoice = esVoices[0];
        }

        if (selectedVoice) {
            utterance.voice = selectedVoice;
            console.log('🎙️ Voz seleccionada:', selectedVoice.name);
        } else {
            console.warn('⚠️ No se encontró voz en español, usando voz por defecto');
        }
    }

    utterance.lang = 'es-ES';
    utterance.rate = 0.85;
    utterance.pitch = 0.9;
    utterance.volume = 1.0; // Max volume for speech

    utterance.onstart = () => {
        console.log('🎙️ Anuncio iniciado');
    };

    utterance.onend = () => {
        console.log('🎙️ Anuncio finalizado, restaurando música');
        closeVisualRadio();

        if (isMobile) {
            // Mobile: Resume playback if it was playing before
            if (wasPlaying) {
                console.log('📱 Reanudando música (móvil)');
                setTimeout(() => {
                    elements.audio.play().catch(err => {
                        console.warn('⚠️ No se pudo reanudar la música:', err);
                    });
                }, 300); // Small delay for better mobile compatibility
            }
        } else {
            // Desktop: Smooth fade up
            const fadeUp = setInterval(() => {
                if (elements.audio.volume < originalVolume) {
                    elements.audio.volume = Math.min(originalVolume, elements.audio.volume + 0.05);
                } else {
                    elements.audio.volume = originalVolume;
                    clearInterval(fadeUp);
                }
            }, 50);
        }
    };

    utterance.onerror = (event) => {
        console.error('❌ Error en speechSynthesis:', event.error, event);
        showToast('⚠️ Error al reproducir voz');

        // Restore music immediately on error
        if (isMobile) {
            if (wasPlaying) {
                elements.audio.play().catch(err => console.warn('Error resuming:', err));
            }
        } else {
            elements.audio.volume = originalVolume;
        }
    };

    // iOS/Mobile workaround: Sometimes speech needs a small delay
    setTimeout(() => {
        try {
            window.speechSynthesis.speak(utterance);
            console.log('🎙️ Comando speak() ejecutado');
        } catch (e) {
            console.error('❌ Error al ejecutar speak():', e);
            showToast('⚠️ Error al iniciar voz');

            // Restore music on error
            if (isMobile) {
                if (wasPlaying) {
                    elements.audio.play().catch(err => console.warn('Error resuming:', err));
                }
            } else {
                elements.audio.volume = originalVolume;
            }
        }
    }, 100);
}



// === Visual Radio (Mobile Fallback) ===
function showVisualRadio(text) {
    // Remove existing if any
    closeVisualRadio();

    const modal = document.createElement('div');
    modal.className = 'radio-modal';
    modal.id = 'radioModal'; // For easy selection
    modal.innerHTML = `
        <div class="radio-modal-content">
            <h3 class="radio-title">📻 OASIS RADIO</h3>
            <div class="radio-visualizer">
                <div class="radio-bar"></div>
                <div class="radio-bar"></div>
                <div class="radio-bar"></div>
                <div class="radio-bar"></div>
                <div class="radio-bar"></div>
            </div>
            <div class="radio-text">${escapeHtml(text)}</div>
            <button class="radio-close-btn" onclick="closeVisualRadio()">Cerrar</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Animate in
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });
}

window.closeVisualRadio = function () {
    const modal = document.getElementById('radioModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            if (modal.parentNode) modal.parentNode.removeChild(modal);
        }, 300);
    }
};

// === Start Application ===
document.addEventListener('DOMContentLoaded', init);

console.log(`
╔═══════════════════════════════════════╗
║  PERCY QUASAR EN EL OASIS            ║
║  Music Streaming Platform            ║
║                                       ║
║  Keyboard Shortcuts:                 ║
║  Space    - Play/Pause               ║
║  N        - Next Track               ║
║  P        - Previous Track           ║
║  M        - Mute/Unmute              ║
║  ←/→      - Seek -5s/+5s             ║
║  ↑/↓      - Volume Up/Down           ║
╚═══════════════════════════════════════╝
`);

