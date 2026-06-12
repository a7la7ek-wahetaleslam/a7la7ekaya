$(document).ready(function() {
    var stopWords = ['في', 'من', 'على', 'الى', 'إلى', 'عن', 'مع', 'هذا', 'هذه', 'تم', 'كان', 'كيف', 'ماذا', 'متى', 'أين', 'هل', 'لا', 'لم', 'لن', 'إن', 'أن', 'أو', 'ثم', 'الذي', 'التي', 'كل', 'بعض', 'غير', 'هو', 'هي', 'هم', 'نحن', 'أنا', 'أنت', 'يا', 'لقد', 'قد', 'بين', 'كما', 'ذلك', 'تلك', 'هنا', 'هناك', 'فقط', 'إلا', 'بها', 'به', 'عليه', 'إليه', 'فيه', 'منه', 'وما', 'بما', 'والذي', 'والتي', 'ليس', 'تكون', 'يكون', 'كانت', 'عليهم', 'إليكم', 'ولكن', 'أنه', 'الذين', 'وهو', 'وهي', 'وهم', 'وقال', 'قال', 'يقول', 'وتم', 'أنها', 'لأن', 'وفي', 'ومن', 'وإذا', 'أيضا', 'الكثير', 'العديد', 'بينما', 'بسبب', 'حيث', 'نحو', 'خلال', 'دون', 'كلها', 'كلهم', 'جميع', 'عند', 'عندما', 'بعد', 'قبل', 'حتى', 'جدا', 'مما', 'عنها', 'عنه', 'لها', 'له', 'تمت', 'اليوم', 'أمس', 'غدا', 'شكرا', 'لكم', 'جزاك', 'الله', 'خيرا', 'موضوع', 'طريقة', 'كيفية', 'السلام', 'عليكم', 'ورحمة', 'وبركاته', 'بسم', 'الرحمن', 'الرحيم', 'يمكن', 'يعتبر', 'تقوم', 'يقوم', 'يتم', 'بأن', 'إنها', 'فإن', 'أكثر', 'أقل', 'اللاتي', 'هؤلاء', 'أجل', 'سوف', 'صار', 'أصبح', 'مباشرة', 'جعل', 'عليك', 'دائما', 'أحيانا', 'فعلا', 'أبدا', 'وبعد', 'اللائي', 'اللواتي', 'التالي', 'التالية', 'السابق', 'السابقة', 'صور', 'صورة', 'تحميل', 'تنزيل', 'برنامج', 'تطبيق', 'حصريا', 'مجانا', 'برابط', 'مباشر', 'ميديا', 'فاير', 'رد', 'مشاهدة', 'مشاركة', 'أهلا', 'سهلا', 'مرحبا', 'شرح', 'مفصل', 'حصري', 'منتديات', 'المنتدى', 'منتدى', 'عضو', 'أعضاء', 'مدير', 'مشرف', 'تحديث', 'جديد', 'قديم', 'الآن', 'الان', 'جاري', 'افضل', 'أفضل', 'احسن', 'أحسن', 'اكبر', 'أكبر', 'اصغر', 'أصغر', 'اول', 'أول', 'اخر', 'آخر', 'ثاني', 'ثالث', 'رابع', 'خامس', 'سادس', 'سابع', 'ثامن', 'تاسع', 'عاشر', 'فإننا', 'بأننا', 'لأننا', 'وإنما', 'بيننا', 'علينا', 'إلينا', 'منكم', 'منهم', 'عنكم', 'عنهم', 'فيهم', 'فيكم', 'بكم', 'بهم', 'إياك', 'إياكم', 'إياه', 'إياهم', 'أي', 'أية', 'أيها', 'أيتها', 'بلى', 'نعم', 'كلا', 'ربما', 'عسى', 'ليت', 'لعل', 'كأن', 'كأنما', 'حسب', 'بئس', 'إذ', 'إذا', 'مهما', 'حيثما', 'كيفما', 'كلما', 'ريثما', 'طالما', 'بدل', 'عوض', 'أمام', 'خلف', 'وراء', 'فوق', 'تحت', 'يمين', 'يسار', 'شمال', 'جنوب', 'شرق', 'غرب', 'داخل', 'خارج', 'وسط', 'جانب', 'إزاء', 'حذاء', 'تجاه', 'تلقاء', 'شطر', 'لدى', 'لدي', 'لديه', 'لديها', 'لديهم', 'لدينا', 'إياي', 'إيانا', 'هاتي', 'هات', 'تعال', 'إلي', 'إليكما', 'إليكن', 'رويدك', 'دونك', 'بله', 'حي', 'هيا', 'هلم', 'صه', 'مه', 'أف', 'وي', 'واها', 'آه', 'آمين', 'آخ', 'إي', 'ألا', 'أما', 'إما', 'لولا', 'لوما', 'هلا', 'والله', 'تالله', 'بالله'];

    var firstPostTitle = $(".postdetails").first();
    var firstPostBody = $(".postbody").first();
    
    var titleText = firstPostTitle.text().replace("موضوع:", "");
    var bodyText = firstPostBody.text();

    function cleanWord(word) {
        if (word.length > 4 && (word.startsWith('وال') || word.startsWith('فال') || word.startsWith('بال') || word.startsWith('كال') || word.startsWith('لل'))) {
            return word.startsWith('لل') ? 'ال' + word.substring(2) : word.substring(1);
        }
        if (word.length > 3 && (word.startsWith('و') || word.startsWith('ف') || word.startsWith('ب') || word.startsWith('ك') || word.startsWith('ل'))) {
            return word.substring(1);
        }
        return word;
    }

    function getKeywords(text, baseWeight) {
        var wordCounts = {};
        var words = text.match(/[\u0621-\u064A]+/g);
        
        if (words) {
            words.forEach(function(rawWord) {
                var word = cleanWord(rawWord);
                
                if (word.length >= 3 && stopWords.indexOf(word) === -1) {
                    var score = baseWeight;
                    
                    if (word.startsWith('ال')) score += 3;
                    if (word.endsWith('ة') || word.endsWith('ات') || word.endsWith('ون') || word.endsWith('ين')) score += 2;
                    if (word.length > 7) score += 1;

                    wordCounts[word] = (wordCounts[word] || 0) + score;
                }
            });
        }
        return wordCounts;
    }

    var titleKeywords = getKeywords(titleText, 15);
    var bodyKeywords = getKeywords(bodyText, 1);
    var finalKeywords = {};

    for(var w in titleKeywords) finalKeywords[w] = titleKeywords[w];
    
    for(var w in bodyKeywords) {
        if(finalKeywords[w]) {
            finalKeywords[w] += bodyKeywords[w];
        } else if (bodyKeywords[w] > 2) {
            finalKeywords[w] = bodyKeywords[w];
        }
    }

    var sortedWords = Object.keys(finalKeywords).sort(function(a, b) {
        return finalKeywords[b] - finalKeywords[a];
    });

    var maxTags = 12;
    var minTags = 5;
    var selectedTags = sortedWords.slice(0, maxTags);

    if(selectedTags.length >= minTags) {
        var tagsHtml = '';
        var postHtml = firstPostBody.html();
        
        var tagsForLinking = selectedTags.slice().sort(function(a, b) {
            return b.length - a.length;
        });

        $.each(tagsForLinking, function(index, tag) {
            tagsHtml += '<a href="/search?mode=searchbox&search_keywords=' + encodeURIComponent(tag) + '" class="a7la-auto-tag-item" title="البحث عن: ' + tag + '">' + tag + '</a>';
            
            var regex = new RegExp("(?![^<]*>)(^|[^\\u0621-\\u064A])(" + tag + ")(?=[^\\u0621-\\u064A]|$)", "g");
            var replaced = false;
            postHtml = postHtml.replace(regex, function(match, p1, p2) {
                if (!replaced) {
                    replaced = true;
                    return p1 + '<a href="/search?mode=searchbox&search_keywords=' + encodeURIComponent(p2) + '" style="color: #3793ff; font-weight: bold; text-decoration: underline;" title="البحث في المنتدى عن: ' + p2 + '">' + p2 + '</a>';
                }
                return match;
            });
        });
        
        firstPostBody.html(postHtml);
        
        $("#a7la7ekaya-auto-tags").html(tagsHtml);
        $("#tags-a7la7ekaya-table").show();
    }
});



$(document).ready(function() {

    // --- نظام التعرف التلقائي المضمون على اسم المنتدى من الـ head ---
    var autoForumName = "مشغل الفيديو";
    try {
        var searchLinkTitle = $('head link[rel="search"][href="/improvedsearch.xml"]').attr('title');
        if (searchLinkTitle && searchLinkTitle.trim() !== "") {
            autoForumName = searchLinkTitle.trim(); // سحب الاسم من وسم البحث
        } else {
            // خطة بديلة في حال عدم وجود الوسم
            var siteName = $('h1#site-title, #logo-desc h1, a#logo, .headerbar h1, .maintitle').first().text().trim();
            if(siteName) {
                autoForumName = siteName;
            } else {
                var titleArr = document.title.split('-');
                if(titleArr.length > 1) {
                    autoForumName = titleArr[titleArr.length - 1].trim();
                }
            }
        }
    } catch(e) {}

    // --- الاستايل السينمائي المتطور (يدعم ملء الشاشة بشكل كامل) ---
    var a7laVidCSS = '<style>' +
    '.a7la7ekaya-vid-box { background-color: #000; border-radius: 12px; display: flex; flex-direction: column; width: 100%; max-width: 800px; box-sizing: border-box; box-shadow: 0 15px 40px rgba(0,0,0,0.7); font-family: "Segoe UI", Tahoma, sans-serif; margin: 25px auto; position: relative; overflow: hidden; border: 1px solid #222; clear: both; direction: ltr; }' +
    
    /* إصلاح مشكلة ملء الشاشة (Fullscreen Fix) */
    '.a7la7ekaya-vid-box:fullscreen { max-width: 100% !important; width: 100vw !important; height: 100vh !important; border-radius: 0 !important; border: none !important; margin: 0 !important; background: #000; }' +
    '.a7la7ekaya-vid-box:fullscreen .a7la7ekaya-vid-screen { max-height: 100vh !important; height: 100vh !important; }' +
    '.a7la7ekaya-vid-box:-webkit-full-screen { max-width: 100% !important; width: 100vw !important; height: 100vh !important; border-radius: 0 !important; border: none !important; margin: 0 !important; background: #000; }' +
    '.a7la7ekaya-vid-box:-webkit-full-screen .a7la7ekaya-vid-screen { max-height: 100vh !important; height: 100vh !important; }' +
    
    /* الشريط العلوي */
    '.a7la7ekaya-vid-topbar { background: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%); padding: 15px 20px; display: flex; align-items: center; direction: rtl; position: absolute; top: 0; left: 0; right: 0; z-index: 10; opacity: 1; transition: opacity 0.4s ease; user-select: none; pointer-events: none; }' +
    '.a7la7ekaya-vid-title { color: #fff; font-size: 16px; font-weight: 700; text-shadow: 0 2px 5px rgba(0,0,0,0.9); margin-right: 10px; }' +
    '.a7la7ekaya-vid-topbar svg { fill: #4285f4; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5)); }' +
    
    /* شاشة الفيديو */
    '.a7la7ekaya-vid-screen-wrap { flex-grow: 1; position: relative; width: 100%; display: flex; align-items: center; justify-content: center; background: #000; overflow: hidden; }' +
    '.a7la7ekaya-vid-screen { width: 100%; max-height: 500px; cursor: pointer; object-fit: contain; display: block; }' +
    
    /* أيقونة التشغيل المركزية والدوران للتحميل */
    '.a7la7ekaya-vid-center-play { position: absolute; width: 75px; height: 75px; background: rgba(66, 133, 244, 0.85); border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.5); transition: transform 0.2s, opacity 0.3s; z-index: 5; pointer-events: none; backdrop-filter: blur(5px); }' +
    '.a7la7ekaya-vid-center-play svg { width: 38px; height: 38px; margin-left: 5px; fill: currentColor; }' +
    '.a7la7ekaya-vid-spinner { position: absolute; width: 60px; height: 60px; border: 5px solid rgba(255,255,255,0.2); border-top-color: #4285f4; border-radius: 50%; animation: a7laSpinner 1s linear infinite; display: none; z-index: 6; pointer-events: none; }' +
    '@keyframes a7laSpinner { to { transform: rotate(360deg); } }' +
    '.a7la7ekaya-vid-box.is-buffering .a7la7ekaya-vid-spinner { display: block; }' +
    '.a7la7ekaya-vid-box.is-buffering .a7la7ekaya-vid-center-play { display: none !important; }' +
    '.a7la7ekaya-vid-box.is-playing .a7la7ekaya-vid-center-play { opacity: 0; transform: scale(1.5); }' +
    
    /* شريط التحكم السفلي السينمائي */
    '.a7la7ekaya-vid-controls { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 100%); display: flex; flex-direction: column; padding: 0 15px 10px; z-index: 15; transition: opacity 0.4s ease, transform 0.4s ease; }' +
    '.a7la7ekaya-vid-controls-main { display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 5px; }' +
    '.a7la7ekaya-vid-controls-left, .a7la7ekaya-vid-controls-right { display: flex; align-items: center; gap: 5px; }' +
    
    /* التخفي الذكي (إخفاء الأدوات والماوس) */
    '.a7la7ekaya-vid-box.is-playing.is-idle { cursor: none; }' +
    '.a7la7ekaya-vid-box.is-playing.is-idle .a7la7ekaya-vid-controls { opacity: 0; transform: translateY(15px); }' +
    '.a7la7ekaya-vid-box.is-playing.is-idle .a7la7ekaya-vid-topbar { opacity: 0; }' +
    
    /* الأزرار والوقت */
    '.a7la7ekaya-vid-btn { background: transparent; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 8px; outline: none; border-radius: 50%; transition: all 0.2s; color: #eee; position: relative; }' +
    '.a7la7ekaya-vid-btn:hover { color: #fff; transform: scale(1.1); }' +
    '.a7la7ekaya-vid-time { font-size: 13px; color: #ddd; margin: 0 10px; text-align: center; user-select: none; font-weight: 500; font-family: "Courier New", monospace; letter-spacing: 0.5px; }' +
    
    /* شريط التمرير (التقدم) */
    '.a7la7ekaya-vid-slider-wrap { width: 100%; padding: 10px 0; cursor: pointer; display: flex; align-items: center; }' +
    '.a7la7ekaya-vid-slider { -webkit-appearance: none; width: 100%; height: 4px; border-radius: 2px; outline: none; background: rgba(255,255,255,0.2); padding: 0; border: none; transition: height 0.2s; position: relative; }' +
    '.a7la7ekaya-vid-slider-wrap:hover .a7la7ekaya-vid-slider { height: 6px; }' +
    '.a7la7ekaya-vid-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 14px; height: 14px; border-radius: 50%; background: #4285f4; cursor: pointer; box-shadow: 0 0 5px rgba(0,0,0,0.8); transition: transform 0.2s; }' +
    '.a7la7ekaya-vid-slider::-webkit-slider-thumb:hover { transform: scale(1.3); }' +
    '.a7la7ekaya-vid-slider::-moz-range-thumb { width: 14px; height: 14px; border: none; border-radius: 50%; background: #4285f4; cursor: pointer; box-shadow: 0 0 5px rgba(0,0,0,0.8); }' +
    
    /* التحكم بالصوت */
    '.a7la7ekaya-vid-vol-wrap { display: flex; align-items: center; overflow: hidden; transition: width 0.3s ease; width: 36px; }' +
    '.a7la7ekaya-vid-vol-wrap:hover { width: 110px; }' +
    '.a7la7ekaya-vid-vol-slider { -webkit-appearance: none; width: 60px; height: 4px; background: #fff; border-radius: 2px; outline: none; cursor: pointer; margin-left: 5px; opacity: 0; transition: opacity 0.3s; }' +
    '.a7la7ekaya-vid-vol-wrap:hover .a7la7ekaya-vid-vol-slider { opacity: 1; }' +
    '.a7la7ekaya-vid-vol-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 12px; height: 12px; border-radius: 50%; background: #4285f4; }' +

    /* القوائم المنسدلة (السرعة) */
    '.a7la7ekaya-vid-menu-wrap { position: relative; display: flex; align-items: center; }' +
    '.a7la7ekaya-vid-dropdown { display: none; position: absolute; bottom: 130%; right: -20px; background-color: rgba(20,20,20,0.95); border-radius: 10px; border: 1px solid #333; box-shadow: 0 10px 30px rgba(0,0,0,0.8); min-width: 150px; z-index: 999; direction: rtl; overflow: hidden; padding: 8px 0; backdrop-filter: blur(10px); }' +
    '.a7la7ekaya-vid-dropdown.show { display: block; }' +
    '.a7la7ekaya-vid-dropdown-title { color: #999; font-size: 11px; padding: 5px 15px; border-bottom: 1px solid #333; margin-bottom: 5px; text-align: center; }' +
    '.a7la7ekaya-vid-dropdown a, .a7la7ekaya-vid-dropdown div.a7la7ekaya-vid-speed-opt { cursor: pointer; color: #e8eaed; padding: 10px 15px; font-size: 13px; transition: background-color 0.2s; display: block; text-align: right; }' +
    '.a7la7ekaya-vid-dropdown a:hover, .a7la7ekaya-vid-dropdown div.a7la7ekaya-vid-speed-opt:hover { background-color: rgba(66, 133, 244, 0.25); color: #fff; }' +
    '.a7la7ekaya-vid-dropdown div.a7la7ekaya-vid-speed-opt.active { background-color: #4285f4; color: #fff; font-weight: bold; }' +

    /* نافذة المشاركة */
    '.a7la7ekaya-vid-share-modal { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 25; display: none; align-items: center; justify-content: center; backdrop-filter: blur(8px); direction: rtl; }' +
    '.a7la7ekaya-vid-share-content { background: #1a1a1a; padding: 25px; border-radius: 12px; width: 85%; max-width: 450px; box-shadow: 0 10px 40px rgba(0,0,0,0.9); border: 1px solid #444; }' +
    '.a7la7ekaya-vid-share-header { display: flex; justify-content: space-between; align-items: center; color: #fff; font-size: 18px; font-weight: bold; margin-bottom: 20px; border-bottom: 1px solid #333; padding-bottom: 10px; }' +
    '.a7la7ekaya-vid-close-share { cursor: pointer; color: #aaa; font-size: 24px; transition: color 0.2s; line-height: 1; }' +
    '.a7la7ekaya-vid-close-share:hover { color: #ff4a4a; }' +
    '.a7la7ekaya-vid-share-row { margin-bottom: 15px; }' +
    '.a7la7ekaya-vid-share-row label { display: block; color: #bbb; font-size: 13px; margin-bottom: 8px; }' +
    '.a7la7ekaya-vid-share-input-wrap { display: flex; align-items: center; background: #090909; border: 1px solid #444; border-radius: 6px; overflow: hidden; }' +
    '.a7la7ekaya-vid-share-input-wrap input { flex-grow: 1; background: transparent; border: none; color: #4285f4; padding: 10px 12px; font-size: 13px; outline: none; direction: ltr; font-family: monospace; }' +
    '.a7la7ekaya-vid-copy-btn { background: #4285f4; color: #fff; border: none; padding: 10px 20px; font-size: 13px; cursor: pointer; transition: background 0.2s; font-weight: bold; }' +
    '.a7la7ekaya-vid-copy-btn:hover { background: #3367d6; }' +
    '.a7la7ekaya-vid-copy-btn.copied { background: #34a853; }' +
    
    /* تأثير القفز بالزمن (دبل كليك) */
    '.a7la7ekaya-vid-skip-anim { position: absolute; top: 50%; transform: translateY(-50%); color: rgba(255,255,255,0.9); font-size: 26px; font-weight: bold; font-family: sans-serif; pointer-events: none; opacity: 0; z-index: 8; background: rgba(0,0,0,0.6); padding: 15px 30px; border-radius: 50px; text-shadow: 0 2px 5px rgba(0,0,0,0.8); }' +
    '.a7la7ekaya-vid-skip-right { right: 15%; animation: a7laSkipAnim 0.5s ease-out; }' +
    '.a7la7ekaya-vid-skip-left { left: 15%; animation: a7laSkipAnim 0.5s ease-out; }' +
    '@keyframes a7laSkipAnim { 0% { opacity: 1; transform: translateY(-50%) scale(0.8); } 100% { opacity: 0; transform: translateY(-50%) scale(1.5); } }' +
    '</style>';
    
    $('head').append(a7laVidCSS);

    const svgPlay = '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
    const svgPause = '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
    const svgVol = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
    const svgMute = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';
    const svgFullscreen = '<svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>';
    const svgShare = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>';
    const svgSettings = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>';
    const svgPiP = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"/></svg>';
    const videoIconBtn = '<svg viewBox="0 0 24 24" width="18" height="18" fill="#555"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>';
    const windowHeaderIcon = '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>';

    // إضافة زر المحرر
    var editorInterval = setInterval(function() {
        if ($('.sceditor-toolbar').length > 0 && $('.sceditor-button-a7la7ekaya-video').length === 0) {
            var btnHtml = '<a class="sceditor-button sceditor-button-a7la7ekaya-video" unselectable="on" title="إدراج مقطع فيديو احترافي"><div unselectable="on" style="display:flex; align-items:center; justify-content:center; height:100%; background: none !important;">' + videoIconBtn + '</div></a>';
            $('.sceditor-toolbar .sceditor-group:last').append(btnHtml);
            clearInterval(editorInterval);
        }
    }, 500);

    // نافذة إدخال الرابط
    $('body').append(
        '<div id="a7la7ekaya-vid-popup" style="display: none; position: absolute; z-index: 999999; background: #fff; border: 1px solid #ccc; border-radius: 6px; box-shadow: 0 5px 20px rgba(0,0,0,0.2); padding: 15px; width: 280px; direction: rtl; text-align: right; font-family: Tahoma, sans-serif;">' +
            '<div style="margin-bottom: 10px; font-size: 14px; color: #111; font-weight: bold;">رابط الفيديو (mp4):</div>' +
            '<input type="text" id="a7la7ekaya-vid-url" value="https://" style="width: 100%; box-sizing: border-box; padding: 8px; border: 1px solid #ddd; border-radius: 4px; direction: ltr; font-family: Tahoma; font-size: 13px; margin-bottom: 15px; outline: none; transition: border 0.3s;">' +
            '<div style="text-align: center;">' +
                '<button id="a7la7ekaya-vid-insert-btn" style="background: #4285f4; color: #fff; border: none; padding: 8px 25px; border-radius: 5px; cursor: pointer; font-family: Tahoma; font-size: 13px; font-weight: bold; transition: background 0.3s;">إدراج المشغل</button>' +
            '</div>' +
        '</div>'
    );

    $(document).on('click', '.sceditor-button-a7la7ekaya-video', function(e) {
        e.preventDefault(); e.stopPropagation();
        var btn = $(this); var offset = btn.offset();
        $('#a7la7ekaya-vid-popup').css({ top: (offset.top + btn.outerHeight() + 5) + 'px', left: (offset.left - 100) + 'px' }).fadeToggle(150);
    });

    $(document).on('mousedown', function(e) {
        if (!$(e.target).closest('#a7la7ekaya-vid-popup, .sceditor-button-a7la7ekaya-video').length) {
            $('#a7la7ekaya-vid-popup').fadeOut(150);
        }
    });

    $(document).on('click', '#a7la7ekaya-vid-insert-btn', function(e) {
        e.preventDefault();
        var videoUrl = $('#a7la7ekaya-vid-url').val();
        var editorInstance = $('#text_editor_textarea').sceditor('instance');
        if (editorInstance && videoUrl && videoUrl !== "https://") {
            var htmlCode = '<div class="a7la7ekaya-video-code" data-video="' + videoUrl.trim() + '"></div>';
            if(typeof editorInstance.insertHtml === 'function' && !editorInstance.inSourceMode()) {
                editorInstance.insertHtml(htmlCode);
            } else {
                editorInstance.insert(htmlCode);
            }
        }
        $('#a7la7ekaya-vid-popup').fadeOut(150);
    });

    // بناء المشغل الاحترافي
    function buildPlayerHtml(url) {
        var bbCodeFormat = '[video]' + url + '[/video]';
        var htmlFormat = '<div class="a7la7ekaya-video-code" data-video="' + url + '"></div>';

        return '<div class="a7la7ekaya-vid-box">' +
                    '<div class="a7la7ekaya-vid-topbar">' +
                        windowHeaderIcon +
                        '<span class="a7la7ekaya-vid-title">' + autoForumName + '</span>' +
                    '</div>' +
                    '<div class="a7la7ekaya-vid-screen-wrap">' +
                        '<video class="a7la7ekaya-vid-screen" src="' + url + '" playsinline preload="metadata"></video>' +
                        '<div class="a7la7ekaya-vid-center-play">' + svgPlay + '</div>' +
                        '<div class="a7la7ekaya-vid-spinner"></div>' +
                    '</div>' +
                    '<div class="a7la7ekaya-vid-controls">' +
                        '<div class="a7la7ekaya-vid-slider-wrap">' +
                            '<input type="range" class="a7la7ekaya-vid-slider a7la7ekaya-vid-progress" value="0" max="100" step="0.1"/>' +
                        '</div>' +
                        '<div class="a7la7ekaya-vid-controls-main">' +
                            '<div class="a7la7ekaya-vid-controls-left">' +
                                '<button class="a7la7ekaya-vid-btn a7la7ekaya-vid-play-btn" title="تشغيل / إيقاف">' + svgPlay + '</button>' +
                                '<div class="a7la7ekaya-vid-vol-wrap">' +
                                    '<button class="a7la7ekaya-vid-btn a7la7ekaya-vid-mute-btn" title="الصوت">' + svgVol + '</button>' +
                                    '<input type="range" class="a7la7ekaya-vid-vol-slider" min="0" max="1" step="0.05" value="1"/>' +
                                '</div>' +
                                '<div class="a7la7ekaya-vid-time">' +
                                    '<span class="a7la7ekaya-vid-current">0:00</span> / <span class="a7la7ekaya-vid-total">0:00</span>' +
                                '</div>' +
                            '</div>' +
                            '<div class="a7la7ekaya-vid-controls-right">' +
                                '<div class="a7la7ekaya-vid-menu-wrap">' +
                                    '<button class="a7la7ekaya-vid-btn a7la7ekaya-vid-opts-btn" title="الإعدادات والسرعة">' + svgSettings + '</button>' +
                                    '<div class="a7la7ekaya-vid-dropdown a7la7ekaya-vid-settings-menu">' +
                                        '<div class="a7la7ekaya-vid-dropdown-title">سرعة التشغيل</div>' +
                                        '<div class="a7la7ekaya-vid-speed-opt" data-speed="0.5">0.5x بطيء</div>' +
                                        '<div class="a7la7ekaya-vid-speed-opt active" data-speed="1">1x طبيعي</div>' +
                                        '<div class="a7la7ekaya-vid-speed-opt" data-speed="1.5">1.5x سريع</div>' +
                                        '<div class="a7la7ekaya-vid-speed-opt" data-speed="2">2x سريع جداً</div>' +
                                        '<div class="a7la7ekaya-vid-dropdown-title" style="margin-top:5px; border-top:1px solid #333; padding-top:5px;">إضافيات</div>' +
                                        '<a href="' + url + '" download target="_blank">تحميل المقطع</a>' +
                                    '</div>' +
                                '</div>' +
                                '<button class="a7la7ekaya-vid-btn a7la7ekaya-vid-pip-btn" title="صورة داخل صورة (PiP)">' + svgPiP + '</button>' +
                                '<button class="a7la7ekaya-vid-btn a7la7ekaya-vid-share-trigger" title="مشاركة ونسخ الروابط">' + svgShare + '</button>' +
                                '<button class="a7la7ekaya-vid-btn a7la7ekaya-vid-full-btn" title="تكبير الشاشة">' + svgFullscreen + '</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    
                    /* نافذة المشاركة المخفية */
                    '<div class="a7la7ekaya-vid-share-modal">' +
                        '<div class="a7la7ekaya-vid-share-content">' +
                            '<div class="a7la7ekaya-vid-share-header">مشاركة الفيديو <span class="a7la7ekaya-vid-close-share">×</span></div>' +
                            '<div class="a7la7ekaya-vid-share-row"><label>الرابط المباشر للمقطع:</label><div class="a7la7ekaya-vid-share-input-wrap"><input type="text" readonly value="' + url + '"><button class="a7la7ekaya-vid-copy-btn">نسخ</button></div></div>' +
                            '<div class="a7la7ekaya-vid-share-row"><label>كود المنتديات (BBCode):</label><div class="a7la7ekaya-vid-share-input-wrap"><input type="text" readonly value="' + bbCodeFormat + '"><button class="a7la7ekaya-vid-copy-btn">نسخ</button></div></div>' +
                            '<div class="a7la7ekaya-vid-share-row"><label>كود HTML للمواقع:</label><div class="a7la7ekaya-vid-share-input-wrap"><input type="text" readonly value=\'' + htmlFormat + '\'><button class="a7la7ekaya-vid-copy-btn">نسخ</button></div></div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
    }

    // الفحص وبناء المشغل
    function forceBuildVideoPlayers() {
        $('.a7la7ekaya-video-code').each(function() {
            var url = $(this).attr('data-video');
            if (url) $(this).replaceWith(buildPlayerHtml(url));
        });

        var targetAreas = '.postbody .content, .postbody, .content, .entry-content, .post-entry, .message, .message-text';
        $(targetAreas).each(function() {
            var html = $(this).html();
            if (!html || html.indexOf('a7la7ekaya-video-code') === -1) return;
            var regex = /(?:&lt;|<)div\s+class=(?:&quot;|"|'|)a7la7ekaya-video-code(?:&quot;|"|'|)\s+data-video=(?:&quot;|"|'|)(https?:\/\/[^\s<>&"']+)(?:&quot;|"|'|)\s*(?:&gt;|>)\s*(?:&lt;|<)\/div\s*(?:&gt;|>)/gi;
            var replaced = false;
            var newHtml = html.replace(regex, function(m, url) { replaced = true; return buildPlayerHtml(url); });
            if (replaced) $(this).html(newHtml);
        });
    }

    forceBuildVideoPlayers();
    setInterval(forceBuildVideoPlayers, 500);

    // --- الوظائف المتطورة ---
    function formatVidTime(time) {
        if (isNaN(time) || !isFinite(time)) return "0:00";
        const m = Math.floor(time / 60); const s = Math.floor(time % 60);
        return m + ':' + (s < 10 ? '0' : '') + s;
    }

    $(document).on('loadedmetadata', '.a7la7ekaya-vid-screen', function() {
        $(this).closest('.a7la7ekaya-vid-box').find('.a7la7ekaya-vid-total').text(formatVidTime(this.duration));
    });

    // التخفي الذكي (Idle Timer)
    var idleTimers = {};
    $(document).on('mousemove', '.a7la7ekaya-vid-box', function() {
        var box = $(this);
        box.removeClass('is-idle');
        clearTimeout(idleTimers[box.index()]);
        if(box.hasClass('is-playing')) {
            idleTimers[box.index()] = setTimeout(function() { box.addClass('is-idle'); }, 2500);
        }
    });
    $(document).on('mouseleave', '.a7la7ekaya-vid-box', function() {
        if($(this).hasClass('is-playing')) $(this).addClass('is-idle');
    });

    function togglePlay(box) {
        var video = box.find('.a7la7ekaya-vid-screen')[0];
        var btn = box.find('.a7la7ekaya-vid-play-btn');
        if (video.paused) {
            $('.a7la7ekaya-vid-screen').each(function() {
                if (this !== video && !this.paused) {
                    this.pause();
                    $(this).closest('.a7la7ekaya-vid-box').removeClass('is-playing is-idle').find('.a7la7ekaya-vid-play-btn').html(svgPlay);
                }
            });
            video.play();
            btn.html(svgPause);
            box.addClass('is-playing');
            box.trigger('mousemove'); 
        } else {
            video.pause();
            btn.html(svgPlay);
            box.removeClass('is-playing is-idle');
            clearTimeout(idleTimers[box.index()]);
        }
    }

    $(document).on('click', '.a7la7ekaya-vid-play-btn, .a7la7ekaya-vid-center-play', function() {
        togglePlay($(this).closest('.a7la7ekaya-vid-box'));
    });

    // التقديم والرجوع بالنقر المزدوج 10 ثواني (Double Click)
    $(document).on('dblclick', '.a7la7ekaya-vid-screen', function(e) {
        var video = this;
        var box = $(this).closest('.a7la7ekaya-vid-box');
        var rect = video.getBoundingClientRect();
        var x = e.clientX - rect.left;
        
        if (x > rect.width / 2) {
            video.currentTime += 10;
            var anim = $('<div class="a7la7ekaya-vid-skip-anim a7la7ekaya-vid-skip-right">+10s</div>');
            box.find('.a7la7ekaya-vid-screen-wrap').append(anim);
            setTimeout(function(){ anim.remove(); }, 500);
        } else {
            video.currentTime -= 10;
            var anim = $('<div class="a7la7ekaya-vid-skip-anim a7la7ekaya-vid-skip-left">-10s</div>');
            box.find('.a7la7ekaya-vid-screen-wrap').append(anim);
            setTimeout(function(){ anim.remove(); }, 500);
        }
    });

    $(document).on('click', '.a7la7ekaya-vid-screen', function(e) {
        var box = $(this).closest('.a7la7ekaya-vid-box');
        if (box.data('dblclick-timer')) {
            clearTimeout(box.data('dblclick-timer'));
            box.data('dblclick-timer', null);
        } else {
            box.data('dblclick-timer', setTimeout(function() {
                togglePlay(box);
                box.data('dblclick-timer', null);
            }, 250));
        }
    });

    // دائرة التحميل 
    $(document).on('waiting', '.a7la7ekaya-vid-screen', function() {
        $(this).closest('.a7la7ekaya-vid-box').addClass('is-buffering');
    });
    $(document).on('playing canplay', '.a7la7ekaya-vid-screen', function() {
        $(this).closest('.a7la7ekaya-vid-box').removeClass('is-buffering');
    });

    // شريط التقدم والوقت
    $(document).on('timeupdate', '.a7la7ekaya-vid-screen', function() {
        var box = $(this).closest('.a7la7ekaya-vid-box');
        box.find('.a7la7ekaya-vid-current').text(formatVidTime(this.currentTime));
        var percent = (this.currentTime / this.duration) * 100 || 0;
        var slider = box.find('.a7la7ekaya-vid-progress');
        slider.val(percent);
        slider.css('background', 'linear-gradient(to right, #4285f4 ' + percent + '%, rgba(255,255,255,0.2) ' + percent + '%)');
    });

    $(document).on('ended', '.a7la7ekaya-vid-screen', function() {
        var box = $(this).closest('.a7la7ekaya-vid-box');
        box.removeClass('is-playing is-idle');
        box.find('.a7la7ekaya-vid-play-btn').html(svgPlay);
        box.find('.a7la7ekaya-vid-progress').val(0).css('background', 'linear-gradient(to right, #4285f4 0%, rgba(255,255,255,0.2) 0%)');
    });

    $(document).on('input', '.a7la7ekaya-vid-progress', function() {
        var video = $(this).closest('.a7la7ekaya-vid-box').find('.a7la7ekaya-vid-screen')[0];
        if (video.duration) video.currentTime = ($(this).val() / 100) * video.duration;
    });

    // الصوت
    $(document).on('click', '.a7la7ekaya-vid-mute-btn', function() {
        var video = $(this).closest('.a7la7ekaya-vid-box').find('.a7la7ekaya-vid-screen')[0];
        var slider = $(this).siblings('.a7la7ekaya-vid-vol-slider');
        video.muted = !video.muted;
        $(this).html(video.muted ? svgMute : svgVol);
        slider.val(video.muted ? 0 : video.volume);
    });
    $(document).on('input', '.a7la7ekaya-vid-vol-slider', function() {
        var video = $(this).closest('.a7la7ekaya-vid-box').find('.a7la7ekaya-vid-screen')[0];
        var btn = $(this).siblings('.a7la7ekaya-vid-mute-btn');
        video.volume = $(this).val();
        video.muted = (video.volume === 0);
        btn.html(video.muted ? svgMute : svgVol);
    });

    // صورة داخل صورة PiP
    $(document).on('click', '.a7la7ekaya-vid-pip-btn', async function() {
        var video = $(this).closest('.a7la7ekaya-vid-box').find('.a7la7ekaya-vid-screen')[0];
        try {
            if (video !== document.pictureInPictureElement) { await video.requestPictureInPicture(); }
            else { await document.exitPictureInPicture(); }
        } catch (e) { }
    });

    // إعدادات السرعة
    $(document).on('click', '.a7la7ekaya-vid-opts-btn', function(e) {
        e.stopPropagation();
        var menu = $(this).siblings('.a7la7ekaya-vid-settings-menu');
        $('.a7la7ekaya-vid-settings-menu').not(menu).removeClass('show');
        menu.toggleClass('show');
    });
    $(document).on('click', '.a7la7ekaya-vid-speed-opt', function() {
        var box = $(this).closest('.a7la7ekaya-vid-box');
        var video = box.find('.a7la7ekaya-vid-screen')[0];
        video.playbackRate = parseFloat($(this).attr('data-speed'));
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    // تكبير الشاشة Fullscreen Fix
    $(document).on('click', '.a7la7ekaya-vid-full-btn', function() {
        var box = $(this).closest('.a7la7ekaya-vid-box')[0];
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
            if (box.requestFullscreen) { box.requestFullscreen(); }
            else if (box.webkitRequestFullscreen) { box.webkitRequestFullscreen(); }
            else if (box.mozRequestFullScreen) { box.mozRequestFullScreen(); }
        } else {
            if (document.exitFullscreen) { document.exitFullscreen(); }
            else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
            else if (document.mozCancelFullScreen) { document.mozCancelFullScreen(); }
        }
    });

    // المشاركة والنسخ
    $(document).on('click', '.a7la7ekaya-vid-share-trigger', function() {
        var box = $(this).closest('.a7la7ekaya-vid-box');
        var video = box.find('.a7la7ekaya-vid-screen')[0];
        if(!video.paused) { togglePlay(box); }
        box.find('.a7la7ekaya-vid-share-modal').fadeIn(200).css('display', 'flex');
    });
    $(document).on('click', '.a7la7ekaya-vid-close-share', function() {
        $(this).closest('.a7la7ekaya-vid-share-modal').fadeOut(200);
    });
    $(document).on('click', '.a7la7ekaya-vid-copy-btn', function() {
        var btn = $(this); var input = btn.siblings('input');
        input.select(); document.execCommand("copy");
        var text = btn.text(); btn.text('تم النسخ ✓').addClass('copied');
        setTimeout(function() { btn.text(text).removeClass('copied'); }, 2000);
    });
    $(document).on('click', function(e) {
        if(!$(e.target).closest('.a7la7ekaya-vid-opts-btn').length) { $('.a7la7ekaya-vid-settings-menu').removeClass('show'); }
    });

});
