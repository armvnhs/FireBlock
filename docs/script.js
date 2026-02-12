const translations = {
    en: {
        features: "Features",
        howTo: "How to Use",
        github: "GitHub",
        heroTitle: "Total Control<br>Minimal Design",
        heroSubtitle: "The easiest way to block internet access for any application on Windows. Fast, secure, and privacy-focused.",
        downloadBtn: "Download v1.0",
        sourceBtn: "View Source Code",
        
        f1Title: "Instant Block",
        f1Desc: "Block both inbound and outbound connections for any .exe file instantly using native Windows Firewall API.",
        
        f2Title: "iOS-Inspired UI",
        f2Desc: "Designed with a modern, dark aesthetic that feels premium and clean. No clutter, just functionality.",
        
        f3Title: "Local & Secure",
        f3Desc: "Your data stays on your machine. All rules are managed locally via Windows Defender Firewall. Zero telemetry.",

        f4Title: "Zero Background Usage",
        f4Desc: "FireBlock sets the rules and exits. No hidden background services consuming your RAM or CPU resources.",
        
        howToTitle: "How it works",
        step1: "Run FireBlock as Administrator.",
        step2: "Click \"Add App\" to select any .exe file.",
        step3: "Done. Internet access is blocked."
    },
    fa: {
        features: "قابلیت‌ها",
        howTo: "راهنما",
        github: "گیت‌هاب",
        heroTitle: "کنترل کامل<br>طراحی مینیمال",
        heroSubtitle: "ساده‌ترین راه برای قطع دسترسی اینترنت برنامه‌ها در ویندوز. سریع، امن و متمرکز بر حریم خصوصی.",
        downloadBtn: "دانلود نسخه ۱.۰",
        sourceBtn: "مشاهده سورس کد",
        
        f1Title: "مسدودسازی آنی",
        f1Desc: "قطع تمام اتصالات ورودی و خروجی هر فایل exe با استفاده از API فایروال ویندوز به صورت لحظه‌ای.",
        
        f2Title: "رابط کاربری مدرن",
        f2Desc: "طراحی شده با تم تیره و مدرن شبیه به iOS. بدون شلوغی، فقط عملکرد خالص.",
        
        f3Title: "امن و محلی",
        f3Desc: "داده‌های شما روی سیستم خودتان می‌ماند. تمام قوانین مستقیماً در فایروال ویندوز مدیریت می‌شوند.",

        f4Title: "بدون پردازش پس‌زمینه",
        f4Desc: "فایربلاک قوانین را تنظیم کرده و بسته می‌شود. هیچ سرویس مخفی در پس‌زمینه، رم یا پردازنده را اشغال نمی‌کند.",
        
        howToTitle: "چگونه کار می‌کند؟",
        step1: "برنامه را به صورت Run as Admin اجرا کنید.",
        step2: "دکمه افزودن (Add App) را بزنید و فایل را انتخاب کنید.",
        step3: "تمام. دسترسی اینترنت قطع شد."
    },
    ar: {
        features: "الميزات",
        howTo: "كيف يعمل",
        github: "غيت هاب",
        heroTitle: "تحكم كامل<br>تصميم بسيط",
        heroSubtitle: "أسهل طريقة لمنع وصول التطبيقات إلى الإنترنت على ويندوز. سريع، آمن، ويركز على الخصوصية.",
        downloadBtn: "تحميل الإصدار 1.0",
        sourceBtn: "عرض الكود المصدري",
        
        f1Title: "حظر فوري",
        f1Desc: "حظر الاتصالات الواردة والصادرة لأي ملف exe فوراً باستخدام جدار حماية ويندوز.",
        
        f2Title: "واجهة حديثة",
        f2Desc: "مصمم بواجهة داكنة وحديثة مستوحاة من iOS. نظيفة وعملية.",
        
        f3Title: "آمن ومحلي",
        f3Desc: "بياناتك تبقى على جهازك. يتم إدارة القواعد محلياً عبر جدار حماية ويندوز.",

        f4Title: "بدون استهلاك للموارد",
        f4Desc: "يقوم البرنامج بضبط القواعد ويغلق. لا توجد خدمات خلفية تستهلك الذاكرة أو المعالج.",
        
        howToTitle: "كيف يعمل؟",
        step1: "شغل البرنامج كمسؤول (Admin).",
        step2: "اضغط إضافة (Add App) واختر الملف.",
        step3: "تم. تم قطع الاتصال بالإنترنت."
    }
};

const langSelect = document.getElementById('languageSelect');

function updateLanguage(lang) {
    if (lang === 'fa' || lang === 'ar') {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }

    const content = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (content[key]) {
            element.innerHTML = content[key];
        }
    });
}

langSelect.addEventListener('change', (e) => {
    updateLanguage(e.target.value);
});

// لینک فوتر
document.getElementById('dev-link').addEventListener('click', function(e) {
    e.preventDefault();
    window.open('https://armvnhs.ir', '_blank');
});

updateLanguage('en');
