
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || e.keyCode === 123 || 
           (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.keyCode === 73)) || 
           (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.keyCode === 74)) || 
           (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.keyCode === 67)) || 
           (e.ctrlKey && (e.key === 'U' || e.keyCode === 85))) {
            e.preventDefault();
            return false;
        }
    });

    function nukePage() {
        document.head.innerHTML = ''; document.body.innerHTML = '';
        document.body.style.backgroundColor = "#721c24";
        document.body.innerHTML = `
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; color: #fff; font-family: 'Cairo', sans-serif; font-size: 24px; font-weight: bold; text-align: center; direction: rtl; padding: 20px;">
                <h1 style="color: #ffcccc;">🚨 تم حظر المتصفح 🚨</h1>
                <p style="font-size: 18px; margin-top: 10px;">أدوات المطور وفحص الأكواد غير مصرح بها.</p>
                <p style="font-size: 16px; margin-top: 5px; color:#ff9999;">تم محو جميع الأكواد لحماية المحتوى " مع تحيات الطائر الحر". يرجى إغلاق النافذة.</p>
            </div>`;
    }

    window.addEventListener('resize', function() {
        if ((window.outerWidth - window.innerWidth) > 200 || (window.outerHeight - window.innerHeight) > 200) { nukePage(); }
    });

    const targetSurahs = [
        { id: '001', ar: 'الفاتحة', en: 'Al-Fatihah' }, { id: '002', ar: 'البقرة', en: 'Al-Baqarah' },
        { id: '003', ar: 'آل عمران', en: 'Aal-E-Imran' }, { id: '012', ar: 'يوسف', en: 'Yusuf' },
        { id: '018', ar: 'الكهف', en: 'Al-Kahf' }, { id: '019', ar: 'مريم', en: 'Maryam' },
        { id: '021', ar: 'الأنبياء', en: 'Al-Anbiya' }, { id: '025', ar: 'الفرقان', en: 'Al-Furqan' },
        { id: '036', ar: 'يس', en: 'Yaseen' }, { id: '055', ar: 'الرحمن', en: 'Ar-Rahman' },
        { id: '067', ar: 'الملك', en: 'Al-Mulk' }, { id: '072', ar: 'الجن', en: 'Al-Jinn' },
        { id: '112', ar: 'الإخلاص', en: 'Al-Ikhlas' }, { id: '113', ar: 'الفلق', en: 'Al-Falaq' },
        { id: '114', ar: 'الناس', en: 'An-Nas' }
    ];

    const reciters = [
        { id: 'abdulbasit', ar: 'عبدالباسط عبدالصمد', en: 'Abdulbasit Abdulsamad', prefix: 'https://server7.mp3quran.net/basit/' },
        { id: 'jaleel', ar: 'خالد الجليل', en: 'Khalid Al-Jaleel', prefix: 'https://server10.mp3quran.net/jleel/' },
        { id: 'ajmi', ar: 'أحمد العجمي', en: 'Ahmed Al-Ajmi', prefix: 'https://server10.mp3quran.net/ajm/' },
        { id: 'idris', ar: 'إدريس أبكر', en: 'Idris Abkar', prefix: 'https://server6.mp3quran.net/abkr/' },
        { id: 'maher', ar: 'ماهر المعيقلي', en: 'Maher Al-Muaiqly', prefix: 'https://server12.mp3quran.net/maher/' },
        { id: 'barrak', ar: 'محمد البراك', en: 'Muhammad Al-Barrak', prefix: 'https://server13.mp3quran.net/barrak/' },
        { id: 'minshawi', ar: 'محمد صديق المنشاوي', en: 'Muhammad Al-Minshawi', prefix: 'https://server10.mp3quran.net/minsh/' },
        { id: 'fares', ar: 'فارس عباد', en: 'Fares Abbad', prefix: 'https://server8.mp3quran.net/frs_a/' },
        { id: 'yasser', ar: 'ياسر الدوسري', en: 'Yasser Al-Dosari', prefix: 'https://server11.mp3quran.net/yasser/' },
        { id: 'mishary', ar: 'مشاري العفاسي', en: 'Mishary Alafasy', prefix: 'https://server8.mp3quran.net/afs/' }
    ];

    const adhkarAndDuas = [
        { id: 'm-adhkar', src: 'https://a7la7ek-wahetaleslam.github.io/a7la7ekaya/mp3/azkar-alsabah.mp3', ar: 'أذكار الصباح', en: 'Morning Adhkar' },
        { id: 'e-adhkar', src: 'https://a7la7ek-wahetaleslam.github.io/a7la7ekaya/mp3/azkar-almasa.mp3', ar: 'أذكار المساء', en: 'Evening Adhkar' },
        { id: 'ruqyah', src: 'https://a7la7ek-wahetaleslam.github.io/a7la7ekaya/mp3/Alroqyah_Al3gmy.mp3', ar: 'الرقية الشرعية (أحمد العجمي)', en: 'Ruqyah Shariyah - Al-Ajmi' },
        { id: 'ayat-alkursi', src: 'https://a7la7ek-wahetaleslam.github.io/a7la7ekaya/mp3/alkorsi-ajmi.mp3', ar: 'آية الكرسي (أحمد العجمي)', en: 'Ayat Al-Kursi - Al-Ajmi' },
        { id: 'dua-rizq', src: 'https://a7la7ek-wahetaleslam.github.io/a7la7ekaya/mp3/Prayerforsu.mp3', ar: 'دعاء الرزق', en: 'Dua for Rizq' },
        { id: 'dua-dead', src: 'https://a7la7ek-wahetaleslam.github.io/a7la7ekaya/mp3/Duaa-for-the-dead-Mishary-Alafasy.mp3', ar: 'دعاء للمتوفي (مشاري العفاسي)', en: 'Dua for the Dead - Alafasy' }
    ];

    let currentLang = 'ar';
    let currentActiveSurahTag = null;
    let allSearchTracks = [];
    let allSearchReciters = [];
    let forumName = "واحة الإسلام";

    let audio, recitersGrid, dynamicSurahsContainer, searchInput, playBtn, progressBar, volumeBar;

    const STORAGE_KEY = 'quran_player_data';

    function savePlayerData(src, surahAr, surahEn, reciterAr, reciterEn) {
        let data = { src: src, sAr: surahAr, sEn: surahEn, rAr: reciterAr, rEn: reciterEn };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    function restorePlayerState() {
        let savedData = localStorage.getItem(STORAGE_KEY);
        let savedTime = localStorage.getItem(STORAGE_KEY + '_time');
        let isPlaying = localStorage.getItem(STORAGE_KEY + '_playing') === 'true';

        if (savedData) {
            let data = JSON.parse(savedData);
            audio.src = data.src;
            if (savedTime) audio.currentTime = parseFloat(savedTime);
            
            let pSurah = document.getElementById('playerSurah'); let pReciter = document.getElementById('playerReciter');
            if(pSurah) pSurah.textContent = currentLang === 'ar' ? data.sAr : data.sEn;
            if(pReciter) pReciter.textContent = currentLang === 'ar' ? data.rAr : data.rEn;

            document.getElementById('quran-bottom-player').style.display = 'flex';

            if (isPlaying) {
                let playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        if(playBtn) playBtn.textContent = 'play_arrow';
                    });
                }
            }
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        const searchLink = document.querySelector('link[type="application/opensearchdescription+xml"]');
        if (searchLink && searchLink.getAttribute('title')) {
            forumName = searchLink.getAttribute('title').trim();
        }

        let logoSpan = document.querySelector('[data-i18n="logo"]');
        if(logoSpan) {
            logoSpan.textContent = forumName;
        }

        audio = document.getElementById('mainAudio');
        recitersGrid = document.getElementById('reciters-grid');
        dynamicSurahsContainer = document.getElementById('dynamic-surahs-container');
        searchInput = document.getElementById('searchInput');
        playBtn = document.getElementById('playBtn');
        progressBar = document.getElementById('progressBar');
        volumeBar = document.getElementById('volumeBar');

        initSearchData();
        if(recitersGrid) initReciters();

        if (!localStorage.getItem(STORAGE_KEY)) {
            let defaultReciter = document.getElementById('playerReciter');
            if(defaultReciter) defaultReciter.textContent = 'مكتبة ' + forumName;
        }

        if (audio) {
            restorePlayerState();
        }

        if(searchInput) {
            searchInput.addEventListener('input', function() {
                const query = this.value.toLowerCase().trim();
                const searchView = document.getElementById('search-view');
                const homeView = document.getElementById('home-view');
                const surahsView = document.getElementById('surahs-view');
                if (query === '') { searchView.style.display = 'none'; if (homeView.style.display !== 'block' && surahsView.style.display !== 'block') homeView.style.display = 'block'; return; }
                homeView.style.display = 'none'; surahsView.style.display = 'none'; searchView.style.display = 'block';
                const queryWords = query.split(' ').filter(w => w.length > 0);
                const matchedReciters = allSearchReciters.filter(r => queryWords.every(word => r.searchStr.includes(word)));
                const matchedTracks = allSearchTracks.filter(t => queryWords.every(word => t.searchStr.includes(word)));
                const rGrid = document.getElementById('search-reciters-grid'); rGrid.innerHTML = '';
                if(matchedReciters.length > 0) {
                    matchedReciters.forEach(item => {
                        let card = document.createElement('a'); card.className = "reciter-card reciter-link"; card.setAttribute('data-ar', item.ar); card.setAttribute('data-en', item.en);
                        if(item.type === 'adhkar') {
                            card.style.borderColor = "var(--primary)"; card.style.backgroundColor = "var(--primary-light)";
                            card.innerHTML = '<span class="material-symbols-outlined" style="margin-left:8px; color:var(--primary);">book</span> <span class="reciter-name">' + (currentLang === 'ar' ? item.ar : item.en) + '</span>';
                            card.onclick = () => { resetSearch(); openAdhkarView(); };
                        } else {
                            card.innerHTML = '<span class="material-symbols-outlined" style="margin-left:8px; color:#94a3b8;">mic</span> <span class="reciter-name">' + (currentLang === 'ar' ? item.ar : item.en) + '</span>';
                            card.onclick = () => { resetSearch(); openReciterView(item.rec); };
                        }
                        rGrid.appendChild(card);
                    });
                }
                const tGrid = document.getElementById('search-tracks-grid'); tGrid.innerHTML = '';
                if(matchedTracks.length > 0) {
                    matchedTracks.forEach(item => {
                        let sCard = document.createElement('a'); sCard.className = "surah-card surah-link"; sCard.setAttribute('data-src', item.src); sCard.setAttribute('data-ar', item.ar); sCard.setAttribute('data-en', item.en); sCard.setAttribute('data-reciter-ar', item.reciterAr); sCard.setAttribute('data-reciter-en', item.reciterEn);
                        let spacing = currentLang === 'ar' ? 'margin-right' : 'margin-left';
                        let titleAr = item.ar + ' <span style="font-size:12px; color:var(--text-muted); ' + spacing + ':10px;">(' + item.reciterAr + ')</span>';
                        let titleEn = item.en + ' <span style="font-size:12px; color:var(--text-muted); ' + spacing + ':10px;">(' + item.reciterEn + ')</span>';
                        sCard.innerHTML = '<span class="surah-title">' + (currentLang === 'ar' ? titleAr : titleEn) + '</span> <span class="material-symbols-outlined">play_circle</span>';
                        sCard.onclick = function() { playSurahFromTag(this); };
                        tGrid.appendChild(sCard);
                    });
                }
                if (matchedReciters.length === 0 && matchedTracks.length === 0) { tGrid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 30px; color: var(--text-muted); font-weight: bold; font-size: 18px;">لا توجد نتائج مطابقة</div>'; }
            });
        }

        if(audio) {
            audio.addEventListener('play', () => { 
                if(playBtn) playBtn.textContent = 'pause'; 
                localStorage.setItem(STORAGE_KEY + '_playing', 'true');
            });
            audio.addEventListener('pause', () => { 
                if(playBtn) playBtn.textContent = 'play_arrow'; 
                localStorage.setItem(STORAGE_KEY + '_playing', 'false');
            });
            audio.addEventListener('ended', playNextSurah);
            audio.addEventListener('timeupdate', () => {
                if(isNaN(audio.duration) || !isFinite(audio.duration)) return; 
                localStorage.setItem(STORAGE_KEY + '_time', audio.currentTime);
                if(progressBar) { progressBar.value = (audio.currentTime / audio.duration) * 100; updateRangeColor(progressBar); }
                let cTime = document.getElementById('currentTime'); if(cTime) cTime.textContent = formatTime(audio.currentTime);
            });
            audio.addEventListener('loadedmetadata', () => {
                let tTime = document.getElementById('totalTime'); if(tTime) tTime.textContent = isFinite(audio.duration) ? formatTime(audio.duration) : "Live";
            });
        }

        if(progressBar) { progressBar.addEventListener('input', () => { if(audio && isFinite(audio.duration)) { audio.currentTime = (progressBar.value / 100) * audio.duration; updateRangeColor(progressBar); } }); }
        if(volumeBar) { volumeBar.addEventListener('input', () => { if(audio) audio.volume = volumeBar.value / 100; updateRangeColor(volumeBar); let mBtn = document.getElementById('muteBtn'); if(mBtn) mBtn.textContent = audio.volume === 0 ? 'volume_off' : 'volume_up'; }); updateRangeColor(volumeBar); }

        let lToggle = document.getElementById('langToggle');
        if(lToggle) {
            lToggle.addEventListener('click', () => {
                currentLang = currentLang === 'ar' ? 'en' : 'ar';
                const qOverlay = document.getElementById('quran-library-overlay');
                const pPlayer = document.getElementById('quran-bottom-player');
                
                if(qOverlay) qOverlay.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
                if(pPlayer) pPlayer.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
                
                let lText = document.getElementById('langText'); if(lText) lText.textContent = currentLang === 'ar' ? 'English ????' : 'عربي ????';
                let bIcon = document.getElementById('backIcon'); if(bIcon) bIcon.textContent = currentLang === 'ar' ? 'arrow_forward' : 'arrow_back';
                
                const translations = { 
                    ar: { logo: forumName, home: "الرئيسية", forum: "العودة للمنتدى", radio_side: "البث المباشر", radio: "راديو مباشر", search_results: "نتائج البحث" }, 
                    en: { logo: forumName, home: "Home", forum: "Back to Forum", radio_side: "Live Broadcast", radio: "Live Radio", search_results: "Search Results" } 
                };
                
                if(qOverlay) {
                    qOverlay.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = translations[currentLang][el.getAttribute('data-i18n')]; });
                    qOverlay.querySelectorAll('.reciter-link .reciter-name').forEach(span => { span.textContent = span.parentElement.getAttribute('data-' + currentLang); });
                    qOverlay.querySelectorAll('.surah-link .surah-title').forEach(span => {
                        const parent = span.parentElement;
                        if (parent.parentElement.id === 'search-tracks-grid') {
                            const title = parent.getAttribute('data-' + currentLang); const reciter = parent.getAttribute('data-reciter-' + currentLang); const spacing = currentLang === 'ar' ? 'margin-right' : 'margin-left';
                            span.innerHTML = title + ' <span style="font-size:12px; color:var(--text-muted); ' + spacing + ':10px;">(' + reciter + ')</span>';
                        } else { span.textContent = parent.getAttribute('data-' + currentLang); }
                    });
                }
                const headerTitle = document.getElementById('currentReciterTitle'); if (headerTitle && headerTitle.getAttribute('data-reciter-ar')) { headerTitle.textContent = headerTitle.getAttribute('data-reciter-' + currentLang); }
                let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
                if (savedData) {
                    let pSurah = document.getElementById('playerSurah'); let pReciter = document.getElementById('playerReciter');
                    if(pSurah) pSurah.textContent = currentLang === 'ar' ? savedData.sAr : savedData.sEn;
                    if(pReciter) pReciter.textContent = currentLang === 'ar' ? savedData.rAr : savedData.rEn;
                } else {
                    let pReciter = document.getElementById('playerReciter');
                    if(pReciter) pReciter.textContent = (currentLang === 'ar' ? 'مكتبة ' : '') + forumName + (currentLang === 'en' ? ' Library' : '');
                }
                updateToggleButtonText();
            });
        }
    });

    function toggleQuranLibrary() {
        var libOverlay = document.getElementById('quran-library-overlay');
        var player = document.getElementById('quran-bottom-player');
        var isOpening = !document.body.classList.contains('quran-active');
        if (isOpening) { document.body.classList.add('quran-active'); libOverlay.style.display = 'block'; player.style.display = 'flex'; document.body.style.overflow = 'hidden'; } 
        else { document.body.classList.remove('quran-active'); libOverlay.style.display = 'none'; document.body.style.overflow = ''; if(!audio.src || audio.src === "" || (audio.paused && audio.currentTime === 0)) { player.style.display = 'none'; } }
        updateToggleButtonText();
    }

    function updateToggleButtonText() {
        var toggleBtn = document.getElementById('player-toggle-btn');
        if(!toggleBtn) return;
        if(document.body.classList.contains('quran-active')) { toggleBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;">forum</span> ' + (currentLang === 'ar' ? 'العودة للمنتدى' : 'Back to Forum'); } 
        else { toggleBtn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;">mosque</span> ' + (currentLang === 'ar' ? 'فتح المكتبة' : 'Open Library'); }
    }

    function initSearchData() {
        allSearchReciters.push({ type: 'adhkar', ar: 'الأذكار، الأدعية، والرقية', en: 'Adhkar, Duas & Ruqyah', searchStr: 'الأذكار الأدعية الرقية adhkar duas ruqyah' });
        reciters.forEach(rec => {
            allSearchReciters.push({ type: 'reciter', rec: rec, ar: rec.ar, en: rec.en, searchStr: (rec.ar + ' ' + rec.en).toLowerCase() });
            targetSurahs.forEach(surah => {
                let cleanSurahAr = surah.ar.replace(/^ال/, ''); 
                allSearchTracks.push({ src: rec.prefix + surah.id + '.mp3', ar: 'سورة ' + surah.ar, en: 'Surah ' + surah.en, reciterAr: rec.ar, reciterEn: rec.en, searchStr: ('سورة ' + surah.ar + ' ' + cleanSurahAr + ' ' + rec.ar + ' surah ' + surah.en + ' ' + rec.en).toLowerCase() });
            });
        });
        adhkarAndDuas.forEach(item => { allSearchTracks.push({ src: item.src, ar: item.ar, en: item.en, reciterAr: 'مكتبة ' + forumName, reciterEn: forumName + ' Library', searchStr: (item.ar + ' ' + item.en + ' مكتبة ' + forumName).toLowerCase() }); });
    }

    function resetSearch() { if(searchInput) searchInput.value = ''; let sView = document.getElementById('search-view'); if(sView) sView.style.display = 'none'; }

    function initReciters() {
        if(!recitersGrid) return;
        recitersGrid.innerHTML = '';
        let adhkarCard = document.createElement('a'); adhkarCard.className = "reciter-card reciter-link"; adhkarCard.style.borderColor = "var(--primary)"; adhkarCard.style.backgroundColor = "var(--primary-light)"; adhkarCard.setAttribute('data-ar', 'الأذكار، الأدعية، والرقية'); adhkarCard.setAttribute('data-en', 'Adhkar, Duas & Ruqyah'); adhkarCard.innerHTML = '<span class="material-symbols-outlined" style="margin-left:8px; color:var(--primary);">book</span> <span class="reciter-name">الأذكار، الأدعية، والرقية</span>'; adhkarCard.onclick = () => openAdhkarView(); recitersGrid.appendChild(adhkarCard);
        reciters.forEach(rec => { let card = document.createElement('a'); card.className = "reciter-card reciter-link"; card.setAttribute('data-ar', rec.ar); card.setAttribute('data-en', rec.en); card.innerHTML = '<span class="material-symbols-outlined" style="margin-left:8px; color:#94a3b8;">mic</span> <span class="reciter-name">' + (currentLang === 'ar' ? rec.ar : rec.en) + '</span>'; card.onclick = () => openReciterView(rec); recitersGrid.appendChild(card); });
    }

    function openReciterView(rec) {
        resetSearch(); document.getElementById('home-view').style.display = 'none'; document.getElementById('surahs-view').style.display = 'block';
        const titleEl = document.getElementById('currentReciterTitle'); if(titleEl) { titleEl.setAttribute('data-reciter-ar', rec.ar); titleEl.setAttribute('data-reciter-en', rec.en); titleEl.textContent = currentLang === 'ar' ? rec.ar : rec.en; }
        if(dynamicSurahsContainer) {
            dynamicSurahsContainer.innerHTML = '';
            targetSurahs.forEach(surah => {
                let sCard = document.createElement('a'); sCard.className = "surah-card surah-link"; sCard.setAttribute('data-src', rec.prefix + surah.id + '.mp3'); sCard.setAttribute('data-ar', 'سورة ' + surah.ar); sCard.setAttribute('data-en', 'Surah ' + surah.en); sCard.setAttribute('data-reciter-ar', rec.ar); sCard.setAttribute('data-reciter-en', rec.en);
                sCard.innerHTML = '<span class="surah-title">' + (currentLang === 'ar' ? 'سورة ' + surah.ar : 'Surah ' + surah.en) + '</span> <span class="material-symbols-outlined">play_circle</span>'; sCard.onclick = function() { playSurahFromTag(this); }; dynamicSurahsContainer.appendChild(sCard);
            });
        }
    }

    function openAdhkarView() {
        resetSearch(); document.getElementById('home-view').style.display = 'none'; document.getElementById('surahs-view').style.display = 'block';
        const titleEl = document.getElementById('currentReciterTitle'); if(titleEl) { titleEl.setAttribute('data-reciter-ar', 'الأذكار والأدعية والرقية'); titleEl.setAttribute('data-reciter-en', 'Adhkar, Duas & Ruqyah'); titleEl.textContent = currentLang === 'ar' ? 'الأذكار والأدعية والرقية' : 'Adhkar, Duas & Ruqyah'; }
        if(dynamicSurahsContainer) {
            dynamicSurahsContainer.innerHTML = '';
            adhkarAndDuas.forEach(item => {
                let sCard = document.createElement('a'); sCard.className = "surah-card surah-link"; sCard.setAttribute('data-src', item.src); sCard.setAttribute('data-ar', item.ar); sCard.setAttribute('data-en', item.en); sCard.setAttribute('data-reciter-ar', 'مكتبة ' + forumName); sCard.setAttribute('data-reciter-en', forumName + ' Library');
                sCard.innerHTML = '<span class="surah-title">' + (currentLang === 'ar' ? item.ar : item.en) + '</span> <span class="material-symbols-outlined">play_circle</span>'; sCard.onclick = function() { playSurahFromTag(this); }; dynamicSurahsContainer.appendChild(sCard);
            });
        }
    }

    function showHomeView() { resetSearch(); document.getElementById('home-view').style.display = 'block'; document.getElementById('surahs-view').style.display = 'none'; }

    function playSurahFromTag(tagElement) {
        if (currentActiveSurahTag) currentActiveSurahTag.classList.remove('active');
        currentActiveSurahTag = tagElement; currentActiveSurahTag.classList.add('active');
        if(audio) {
            let src = tagElement.getAttribute('data-src');
            let sAr = tagElement.getAttribute('data-ar'); let sEn = tagElement.getAttribute('data-en');
            let rAr = tagElement.getAttribute('data-reciter-ar'); let rEn = tagElement.getAttribute('data-reciter-en');
            savePlayerData(src, sAr, sEn, rAr, rEn);
            audio.src = src;
            let pSurah = document.getElementById('playerSurah'); let pReciter = document.getElementById('playerReciter');
            if(pSurah) pSurah.textContent = currentLang === 'ar' ? sAr : sEn;
            if(pReciter) pReciter.textContent = currentLang === 'ar' ? rAr : rEn;
            audio.play();
            var player = document.getElementById('quran-bottom-player');
            if(player) player.style.display = 'flex';
        }
    }

    function playNextSurah() { if (!currentActiveSurahTag) return; const nextTag = currentActiveSurahTag.nextElementSibling; if (nextTag && nextTag.classList.contains('surah-link')) playSurahFromTag(nextTag); }
    function playPrevSurah() { if (!currentActiveSurahTag) return; const prevTag = currentActiveSurahTag.previousElementSibling; if (prevTag && prevTag.classList.contains('surah-link')) playSurahFromTag(prevTag); }
    function togglePlay() { if (!audio || !audio.src) return; audio.paused ? audio.play() : audio.pause(); }

    function playLiveRadio() {
        if (currentActiveSurahTag) currentActiveSurahTag.classList.remove('active'); currentActiveSurahTag = null; 
        if(audio) {
            let src = "https://qurango.net/radio/tarateel";
            let rAr = "إذاعة القرآن الكريم"; let rEn = "Quran Radio";
            let sAr = "بث مباشر"; let sEn = "Live Stream";
            savePlayerData(src, sAr, sEn, rAr, rEn);
            audio.src = src;
            let pReciter = document.getElementById('playerReciter'); let pSurah = document.getElementById('playerSurah');
            if(pReciter) pReciter.textContent = currentLang === 'ar' ? rAr : rEn;
            if(pSurah) pSurah.textContent = currentLang === 'ar' ? sAr : sEn;
            audio.play();
            var player = document.getElementById('quran-bottom-player');
            if(player) player.style.display = 'flex';
        }
    }

    function toggleMute() {
        if(!audio) return; audio.muted = !audio.muted; let mBtn = document.getElementById('muteBtn');
        if(audio.muted) { if(mBtn) mBtn.textContent = 'volume_off'; if(volumeBar) volumeBar.value = 0; } else { if(mBtn) mBtn.textContent = 'volume_up'; if(volumeBar) volumeBar.value = audio.volume * 100; }
        if(volumeBar) updateRangeColor(volumeBar);
    }

    let isDarkMode = false;
    function toggleDarkMode() {
        isDarkMode = !isDarkMode; var qLib = document.getElementById('quran-library-overlay'); var pPlayer = document.getElementById('quran-bottom-player');
        if(qLib && pPlayer) {
            let bMain = isDarkMode ? '#0f172a' : '#f8fafc', bSurf = isDarkMode ? '#1e293b' : '#ffffff', tDark = isDarkMode ? '#f8fafc' : '#0f172a', bdr = isDarkMode ? '#334155' : '#e2e8f0', pBg = isDarkMode ? 'rgba(30, 41, 59, 0.9)' : 'rgba(255, 255, 255, 0.9)', hBg = isDarkMode ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.8)';
            [qLib, pPlayer].forEach(el => {
                el.style.setProperty('--bg-main', bMain); el.style.setProperty('--bg-surface', bSurf); el.style.setProperty('--text-dark', tDark); el.style.setProperty('--border', bdr); el.style.setProperty('--player-bg', pBg); el.style.setProperty('--header-bg', hBg); el.style.setProperty('--search-bg', isDarkMode ? '#1e293b' : '#f8fafc');
            });
        }
    }

    function formatTime(sec) { const min = Math.floor(sec / 60); const secs = Math.floor(sec % 60); return (min < 10 ? '0':'') + min + ':' + (secs < 10 ? '0':'') + secs; }
    function updateRangeColor(el) { if(el) el.style.background = 'linear-gradient(to right, var(--primary) ' + el.value + '%, var(--border) ' + el.value + '%)'; }
