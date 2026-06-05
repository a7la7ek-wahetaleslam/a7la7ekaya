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