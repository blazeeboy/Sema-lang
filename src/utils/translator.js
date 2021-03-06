/*
 *      translator.js
 *      
 *      Copyright 2012 Blaze Boy <blazeeboy@gmail.com>
 *      
 *      This program is free software; you can redistribute it and/or modify
 *      it under the terms of the GNU General Public License as published by
 *      the Free Software Foundation; either version 2 of the License, or
 *      (at your option) any later version.
 *      
 *      This program is distributed in the hope that it will be useful,
 *      but WITHOUT ANY WARRANTY; without even the implied warranty of
 *      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *      GNU General Public License for more details.
 *      
 *      You should have received a copy of the GNU General Public License
 *      along with this program; if not, write to the Free Software
 *      Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 *      MA 02110-1301, USA.
 *      
 *      @Description : tranlator in an object that contain tokens table
 * 		and able to translate these tokens into their css alternative.
 * 		@Package : Sema utilities
 */

sema.utils.translator = {

	/**
	 * this table contain arabic token as key and english alternative
	 * as value, you can use it to translate arabic into english and
	 * vice versa.
	 */
	table:{
		'نشط':'active',
		'بعد':'after',
		'اول':'first',
		'اول-ابن':'first-child',
		'اول-حرف':'first-letter',
		'اول-سطر':'first-line',
		'تركيز':'focus',
		'طفو':'hover',
		'لغة':'lang',
		'يسار':'left',
		'رابط':'link',
		'يمين':'right',
		'مزار':'visited',
		'فوق':'above',
		'حر':'absolute',
		'مسرع':'accelerator',
		'بعد':'after',
		'ضبط-المحاذاة':'alignment-adjust',
		'محاذاة-الخط-الاساس':'alignment-baseline',
		'دائما':'always',
		'حركة':'animation',
		'تاخير-الحركة':'animation-delay',
		'اتجاه-الحركة':'animation-direction',
		'مدة-الحركة':'animation-duration',
		'عدد-تكرار-الحركة':'animation-iteration-count',
		'اسم-الحركة':'animation-name',
		'حالة-تشغيل-الحركة':'animation-play-state',
		'دالة-توقيت-الحركة':'animation-timing-function',
		'المظهر':'appearance',
		'ماء':'aqua',
		'ارمينى':'armenian',
		'خاصية':'attr',
		'تلقائى':'auto',
		'تجنب':'avoid',
		'السمت':'azimuth',
		'رؤية-الوجه-الخلفى':'backface-visibility',
		'الخلفية':'background',
		'التعلق-بالخلفية':'background-attachment',
		'قطع-الخلفية':'background-clip',
		'لون-الخلفية':'background-color',
		'صورة-الخلفية':'background-image',
		'نقطة-اصل-الخلفية':'background-origin',
		'مكان-الخلفية':'background-position',
		'مكان-الخلفية-س':'background-position-x',
		'مكان-الخلفية-ص':'background-position-y',
		'تكرار-الخلفية':'background-repeat',
		'مقاس-الخلفية':'background-size',
		'توازن':'balance',
		'الخط-الاساسى':'baseline',
		'تحريك-خط-الاساس':'baseline-shift',
		'قبل':'before',
		'تصرف':'behavior',
		'خلف':'behind',
		'اسفل':'below',
		'تجاوز-ثنائية-اللغة':'bidi-override',
		'ربط':'binding',
		'اسود':'black',
		'نزيف':'bleed',
		'يومض':'blink',
		'كتلة':'block',
		'ازرق':'blue',
		'سميك':'bold',
		'اكثر-سماكة':'bolder',
		'اسم-المرجعية':'bookmark-label',
		'مستوى-المرجعية':'bookmark-level',
		'حالة-المرجعية':'bookmark-state',
		'هدف-المرجعية':'bookmark-target',
		'الحدود':'border',
		'الحد-السفلى':'border-bottom',
		'لون-الحد-السفلى':'border-bottom-color',
		'نصف-قطر-الحد-السفلى-الايسر':'border-bottom-left-radius',
		'نصف-قطر-الحد-السفلى-الايمن':'border-bottom-right-radius',
		'شكل-الحد-السفلى':'border-bottom-style',
		'عرض-الحد-السفلى':'border-bottom-width',
		'طى-الحدود':'border-collapse',
		'لون-الحدود':'border-color',
		'صورة-الحدود':'border-image',
		'بداية-صورة-الحد':'border-image-outset',
		'تكرار-صورة-الحد':'border-image-repeat',
		'قطع-صورة-الحد':'border-image-slice',
		'مصدر-صورة-الحد':'border-image-source',
		'عرض-صورة-الحد':'border-image-width',
		'الحد-الايسر':'border-left',
		'لون-الحد-الايسر':'border-left-color',
		'شكل-الحد-الايسر':'border-left-style',
		'عرض-الحد-الايسر':'border-left-width',
		'نصف-قطر-الحدود':'border-radius',
		'الحد-الايمن':'border-right',
		'لون-الحد-الايمن':'border-right-color',
		'شكل-الحد-الايمن':'border-right-style',
		'عرض الحد-الايمن':'border-right-width',
		'تباعد-الحدود':'border-spacing',
		'شكل-الحدود':'border-style',
		'الحد-العلوى':'border-top',
		'لون-الحد-العلوى':'border-top-color',
		'نصف-قطر-الحد-العلوى-الايسر':'border-top-left-radius',
		'نصف-قطر-الحد-العلوى-الايمن':'border-top-right-radius',
		'شكل-الحد-العلوى':'border-top-style',
		'عرض-الحد-العلوى':'border-top-width',
		'عرض-الحدود':'border-width',
		'كليهما':'both',
		'اسفل':'bottom',
		'فاصل-زخرفة-الصندوق':'box-decoration-break',
		'ظل-الصندوق':'box-shadow',
		'تحجيم-الصندوق':'box-sizing',
		'بعد-الفاصل':'break-after',
		'قبل-الفاصل':'break-before',
		'على-الفاصل':'break-inside',
		'كتب-بحروف-كبيرة':'capitalize',
		'ارتفاع-الحروف-الكبيرة':'caps-height',
		'جانب-العنونة':'caption-side',
		'منتصف':'center',
		'وسط-شمال':'center-left',
		'وسط-يمين':'center-right',
		'تدوير':'circle',
		'صينى-كورى-موحد':'cjk-ideographic',
		'مسح':'clear',
		'تقصيص':'clip',
		'علامات-تنصيص-مقربة':'close-quote',
		'سنتيمتر':'cm',
		'رمز':'code',
		'طي':'collapse',
		'لون':'color',
		'لون-تلميح':'color-profile',
		'عدد-الاعمدة':'column-count',
		'ملئ-الاعمدة':'column-fill',
		'المسافة-بين-الاعمدة':'column-gap',
		'قاعدة-الاعمدة':'column-rule',
		'قاعدة-لون-الاعمدة':'column-rule-color',
		'قاعدة-نمط-الاعمدة':'column-rule-style',
		'قاعدة-عرض-الاعمدة':'column-rule-width',
		'تجاوز-الاعمدة':'column-span',
		'عرض-الاعمدة':'column-width',
		'الاعمدة':'columns',
		'رص':'compact',
		'مكثف':'condensed',
		'الازاحة-مقدرة':'consider-shifts',
		'محتوى':'content',
		'محتوى-الصندوق':'content-box',
		'مستمر':'continuous',
		'عداد':'counter',
		'عداد-مقدر-الزيادة':'counter-increment',
		'اعادة-العداد-للوضع-الاصلي':'counter-reset',
		'العدادات':'counters',
		'قطع':'crop',
		'صليب':'cross',
		'تقاطع':'crosshair',
		'تلميح':'cue',
		'بعد-التلميح':'cue-after',
		'قبل-التلميح':'cue-before',
		'الحالي':'current',
		'سهم':'cursor',
		'متقطع':'dashed',
		'عشري':'decimal',
		'علامة-امام-الصفر':'decimal-leading-zero',
		'افتراضي':'default',
		'ارقام':'digits',
		'الاتجاه':'direction',
		'قرص':'disc',
		'اظهار':'display',
		'خط-اساس-سائد':'dominant-baseline',
		'منقط':'dotted',
		'مضاعف':'double',
		'اسقط-البداية-بعد-الضبط':'drop-initial-after-adjust',
		'اسقط-البداية-بعد-المحاذاة':'drop-initial-after-align',
		'اسقط-البداية-قبل-الضبط':'drop-initial-before-adjust',
		'اسقط-البداية-قبل-المحاذاة':'drop-initial-before-align',
		'مقاس-اسقاط-البداية':'drop-initial-size',
		'قيمة-اسقاط-البداية':'drop-initial-value',
		'تحجيم-شرق':'e-resize',
		'سهل':'ease',
		'رفع':'elevation',
		'حرف':'em',
		'ادراج':'embed',
		'الخلايا-الفارغة':'empty-cells',
		'اكس':'ex',
		'متمدد':'expanded',
		'كثيف-اضافى':'extra-condensed',
		'متمدد-اضافى':'extra-expanded',
		'اقصى-اليسار':'far-left',
		'اقصى-اليمين':'far-right',
		'سريع':'fast',
		'اسرع':'faster',
		'فلتر':'filter',
		'مناسب':'fit',
		'مكان-مناسب':'fit-position',
		'ثابت':'fixed',
		'مسطح':'flat',
		'محاذاة-المرن':'flex-align',
		'تدفق-المرن':'flex-flow',
		'حزمة-السطور-المرنة':'flex-line-pack',
		'ترتيب-المرن':'flex-order',
		'حزمة-مرنة':'flex-pack',
		'عائم':'float',
		'بعد-العوم':'float-offset',
		'الخط':'font',
		'عائلة-الخط':'font-family',
		'مقاس-الخط':'font-size',
		'ضبط-مقاس-الخط':'font-size-adjust',
		'مد-الخط':'font-stretch',
		'شكل-الخط':'font-style',
		'اختلاف-الخط':'font-variant',
		'ثقل-الخط':'font-weight',
		'للامام':'forward',
		'ارجوانى':'fuchsia',
		'جورجى':'georgian',
		'رمادى':'gray',
		'اخضر':'green',
		'اعمدة-الشبكة':'grid-columns',
		'صفوف-الشبكة':'grid-rows',
		'اخدود':'groove',
		'تعليق-علامات-التنقيط':'hanging-punctuation',
		'عبرى':'hebrew',
		'الارتفاع':'height',
		'مساعدة':'help',
		'مخفى':'hidden',
		'اخفى':'hide',
		'عالى':'high',
		'اعلى':'higher',
		'هيراجانا':'hiragana',
		'هيراجانا-ايروها':'hiragana-iroha',
		'وصلة-بعدها':'hyphenate-after',
		'وصلة-قبلها':'hyphenate-before',
		'حرف-الوصلة':'hyphenate-character',
		'سطور-موصلة':'hyphenate-lines',
		'مصدر-موصل':'hyphenate-resource',
		'وصلات':'hyphens',
		'ايقونة':'icon',
		'توجيه-الصورة':'image-orientation',
		'اظهار-الصورة':'image-rendering',
		'دقة-الصورة':'image-resolution',
		'نمط-محرر-الحروف':'ime-mode',
		'انش':'in',
		'تضمين-مصدر':'include-source',
		'ضمنى':'inline',
		'محاذاة-صندوق-ضمنى':'inline-box-align',
		'ارتفاع-صندوق-ضمنى':'inline-line-height',
		'جدول-ضمنى':'inline-table',
		'درج':'inset',
		'داخلى':'inside',
		'عكس':'invert',
		'مائل':'italic',
		'ضبط':'justify',
		'كاتاكانا':'katakana',
		'كاتاكانا-ايروها':'katakana-iroha',
		'مشهد-عرضى':'landscape',
		'كبير':'large',
		'اكبر':'larger',
		'الاخير':'last',
		'لون-خلفية-الطبقة':'layer-background-color',
		'صورة-خلفية-الطبقة':'layer-background-image',
		'تدفق-التصميم':'layout-flow',
		'تصميم-الشبكة':'layout-grid',
		'تصميم-حرف-الشبكة':'layout-grid-char',
		'تصميم-تباعد-حرف-الشبكة':'layout-grid-char-spacing',
		'تصميم-سطر-الشبكة':'layout-grid-line',
		'نمط-تصميم-الشبكة':'layout-grid-mode',
		'نوع-تصميم-الشبكة':'layout-grid-type',
		'يسار':'left',
		'الجانب-الايسر':'left-side',
		'اتجاه-اليسار':'leftwards',
		'تباعد-الحروف':'letter-spacing',
		'المستوى':'level',
		'اخف':'lighter',
		'ليمونى':'lime',
		'فاصل-السطر':'line-break',
		'ارتفاع-السطر':'line-height',
		'تراص-السطور':'line-stacking',
		'إزاحة-تراص-السطور':'line-stacking-shift',
		'استراتيجية-تراص-السطور':'line-stacking-strategy',
		'خط-وسط':'line-through',
		'عنصر-قائمة':'list-item',
		'شكل-القائمة':'list-style',
		'صورة-شكل-القائمة':'list-style-image',
		'مكان-شكل-القائمة':'list-style-position',
		'نوع-شكل-القائمة':'list-style-type',
		'صاخب':'loud',
		'منخفض':'low',
		'اكتر-انخفاض':'lower',
		'حروف-ارقام-صغيرة':'lower-alpha',
		'يونانى-صغير':'lower-greek',
		'لاتينى-صغير':'lower-latin',
		'رومانى-صغير':'lower-roman',
		'حروف-صغيرة':'lowercase',
		'من-اليسار-لليمين':'ltr',
		'الهامش':'margin',
		'الهامش-السفلى':'margin-bottom',
		'الهامش-الايسر':'margin-left',
		'الهامش-الايمن':'margin-right',
		'الهامش-العلوى':'margin-top',
		'علامة':'marker',
		'بعد-العلامة':'marker-offset',
		'علامات':'marks',
		'نبيتى':'maroon',
		'اتجاه-الشريط':'marquee-direction',
		'دورة-الشريط':'marquee-loop',
		'عدد-مرات-تشغيل-الشريط':'marquee-play-count',
		'شرعة-الشريط':'marquee-speed',
		'شكل-الشريط':'marquee-style',
		'اكبر-ارتفاع':'max-height',
		'اكبر-عرض':'max-width',
		'متوسط':'medium',
		'وسط':'middle',
		'اقل-ارتفاع':'min-height',
		'اقل-عرض':'min-width',
		'مزيج':'mix',
		'ملليمتر':'mm',
		'معتدل':'moderate',
		'تحريك':'move',
		'حرك-الى':'move-to',
		'تحجيم-شمال':'n-resize',
		'ضيق':'narrower',
		'انتقال-للاسفل':'nav-down',
		'انتقال-للفهرس':'nav-index',
		'انتقال-لليسار':'nav-left',
		'انتقال-لليمين':'nav-right',
		'انتقال-للاعلى':'nav-up',
		'كحلى':'navy',
		'تحجيم-شمال-الشرقى':'ne-resize',
		'بدون-اغلاق-علامة-تنصيص':'no-close-quote',
		'بدون-حدود':'no-limit',
		'بدون-فتح-علامة-تنصيص':'no-open-quote',
		'بدون-تكرار':'no-repeat',
		'بدون':'none',
		'عادى':'normal',
		'بدون-التفاف':'nowrap',
		'تحجيم-الشمال-الغربى':'nw-resize',
		'مائل':'oblique',
		'زيتونى':'olive',
		'مرة':'once',
		'الشفافية':'opacity',
		'فتح':'open',
		'فتح-علامة-تنصيص':'open-quote',
		'يتامى':'orphans',
		'الخط-الخارجى':'outline',
		'لون-الخط-الخارجى':'outline-color',
		'بعد-الخط-الخارجى':'outline-offset',
		'شكل-الخط-الخارجى':'outline-style',
		'سمك-الخط-الخارجى':'outline-width',
		'بداية':'outset',
		'خارج':'outside',
		'الزيادة':'overflow',
		'شكل-الزيادة':'overflow-style',
		'التفاف-الزيادة':'overflow-wrap',
		'زيادة-س':'overflow-x',
		'زيادة-ص':'overflow-y',
		'فوقه-خط':'overline',
		'التبطين':'padding',
		'التبطين-السفلى':'padding-bottom',
		'التبطين-الايسر':'padding-left',
		'التبطين-الايمن':'padding-right',
		'التبطين-العلوى':'padding-top',
		'صفحة':'page',
		'فاصل-الصفحة-بعد':'page-break-after',
		'فاصل-الصفحة-قبل':'page-break-before',
		'فاصل-الصفحة-للداخل':'page-break-inside',
		'سياسة-الصفحة':'page-policy',
		'توقف':'pause',
		'توقف-بعد':'pause-after',
		'توقف-قبل':'pause-before',
		'بيكا':'pc',
		'المنظور':'perspective',
		'نقطة-اصل-المنظور':'perspective-origin',
		'نبرات':'phonemes',
		'نغمة':'pitch',
		'مدى-النغمة':'pitch-range',
		'فترة-التشغيل':'play-during',
		'المؤشر':'pointer',
		'مكان':'position',
		'لوحة':'portrait',
		'سابقة':'pre',
		'مستوى-العرض':'presentation-level',
		'نقطة':'pt',
		'قطع-علامات-الترقيم':'punctuation-trim',
		'بنفسجى':'purple',
		'بيكسل':'px',
		'علامات-الاقتباس':'quotes',
		'مستطيل':'rect',
		'احمر':'red',
		'نسبى':'relative',
		'نية-الاظهار':'rendering-intent',
		'تكرار':'repeat',
		'تكرار-س':'repeat-x',
		'تكرار-ص':'repeat-y',
		'تحجيم':'resize',
		'استراحة':'rest',
		'استرح-بعد':'rest-after',
		'استرح-قبل':'rest-before',
		'ثراء':'richness',
		'ناتىء':'ridge',
		'يمين':'right',
		'الجانب-الايمن':'right-side',
		'اتجاه-اليمين':'rightwards',
		'تدوير':'rotation',
		'نقطة-التدوير':'rotation-point',
		'صف':'row',
		'من-اليمين-لليسار':'rtl',
		'تشغيل-داخلى':'run-in',
		'تشغيل':'running',
		'تحجيم-جنوب':'s-resize',
		'تمرير':'scroll',
		'لون-ضوء-3دى-لشريط-التمرير':'scrollbar-3d-light-color',
		'لون-السهم-لشريط-التمرير':'scrollbar-arrow-color',
		'لون-الاساس-لشريط-التمرير':'scrollbar-base-color',
		'لون-الظل-الغامق-لشريط-التمرير':'scrollbar-dark-shadow-color',
		'لون-وجه-شريط-التمرير':'scrollbar-face-color',
		'لون-شوء-شريط-التمرير':'scrollbar-highlight-color',
		'لون-ظل-شريط-التمرير':'scrollbar-shadow-color',
		'لون-مسار-شريط-التمرير':'scrollbar-track-color',
		'تحجيم-جنوب-شرقى':'se-resize',
		'شبه-كثيف':'semi-condensed',
		'شبه-متمدد':'semi-expanded',
		'فصل':'separate',
		'عرض':'show',
		'صامت':'silent',
		'فضى':'silver',
		'مقاس':'size',
		'قطع':'slice',
		'بطىء':'slow',
		'ابطا':'slower',
		'صغير':'small',
		'خط-صغير':'small-caps',
		'اصغر':'smaller',
		'ناعم':'soft',
		'مصمت':'solid',
		'تحدث':'speak',
		'تحدث-الراس':'speak-header',
		'تحدث-الارقام':'speak-numeral',
		'تحدث-علامات-الترقيم':'speak-punctuation',
		'معدل-الحديث':'speech-rate',
		'نطق-موضح':'spell-out',
		'مربع':'square',
		'ابدا':'start',
		'ساكن':'static',
		'ضغط':'stress',
		'تمديد':'stretch',
		'مجموعة-نص':'string-set',
		'منخفض':'sub',
		'مرتفع':'super',
		'تحجيم-الجنوب-الغربى':'sw-resize',
		'مقاس-مسافة-الجدولة':'tab-size',
		'جدول':'table',
		'عنوان-جدول':'table-caption',
		'خلية-جدول':'table-cell',
		'عمود-جدول':'table-column',
		'مجموعة-اعمدة-جدول':'table-column-group',
		'مجموعة-ذيل-جدول':'table-footer-group',
		'مجموعة-راس-جدول':'table-header-group',
		'تخطيط-جدول':'table-layout',
		'صف-جدول':'table-row',
		'مجموعة-صفوف-جدول':'table-row-group',
		'الهدف':'target',
		'اسم-الهدف':'target-name',
		'هدف-جديد':'target-new',
		'مكان-الهدف':'target-position',
		'بترولى':'teal',
		'النص':'text',
		'النص-بعد-الحافة':'text-after-edge',
		'محاذاة-النص':'text-align',
		'محاذاة-نهاية-النص':'text-align-last',
		'مسافة-النص-التلقائية':'text-autospace',
		'النص-قبل-الحافة':'text-before-edge',
		'اسفل-النص':'text-bottom',
		'زخرفة-النص':'text-decoration',
		'لون-زخرفة-النص':'text-decoration-color',
		'خط-زخرفة-النص':'text-decoration-line',
		'تخطى-زخرفة-النص':'text-decoration-skip',
		'شكل-شخرفة-النص':'text-decoration-style',
		'تشديد-النص':'text-emphasis',
		'لون-تشديد-النص':'text-emphasis-color',
		'مكان-تشديد-النص':'text-emphasis-position',
		'شكل-تشديد-النص':'text-emphasis-style',
		'ارتفاع-النص':'text-height',
		'بادئة-النص':'text-indent',
		'ضبط-النص':'text-justify',
		'مسافة-كاشيدة-النص':'text-kashida-space',
		'الخط-الخارجى-للنص':'text-outline',
		'زيادة-النص':'text-overflow',
		'ظل-النص':'text-shadow',
		'طى-مسافات-النص':'text-space-collapse',
		'اعلى-النص':'text-top',
		'تحول-النص':'text-transform',
		'مكان-الخط-تحت-النص':'text-underline-position',
		'التفاف-النص':'text-wrap',
		'تخين':'thick',
		'رفيع':'thin',
		'اعلى':'top',
		'التحول':'transform',
		'نقطة-اصل-التحول':'transform-origin',
		'شكل-التحول':'transform-style',
		'التحريك':'transition',
		'تاخير-التحريك':'transition-delay',
		'مدة-التحريك':'transition-duration',
		'خاصية-التحريك':'transition-property',
		'دالة-توقيت-التحريك':'transition-timing-function',
		'شفاف':'transparent',
		'كثيف-بشدة':'ultra-condensed',
		'متمدد-بشدة':'ultra-expanded',
		'تحته-سطر':'underline',
		'يونيكود-ثنائى-الاتجاه':'unicode-bidi',
		'حروف-ارقام-كبيرة':'upper-alpha',
		'لاتينية-كبيرة':'upper-latin',
		'رومانية-كبيرة':'upper-roman',
		'حروف-كبيرة':'uppercase',
		'عنوان':'url',
		'المحاذاة-الراسية':'vertical-align',
		'العرض':'visibility',
		'معروض':'visible',
		'توازن-الصوت':'voice-balance',
		'مدة-الصوت':'voice-duration',
		'عائلة-الصوت':'voice-family',
		'نغمة-الصوت':'voice-pitch',
		'نطاق-نغمة-الصوت':'voice-pitch-range',
		'معدل-الصوت':'voice-rate',
		'ضغط-الصوت':'voice-stress',
		'علو-الصوت':'voice-volume',
		'العلو':'volume',
		'تحجيم-للغرب':'w-resize',
		'انتظار':'wait',
		'ابيض':'white',
		'الفراغ':'white-space',
		'اعرض':'wider',
		'العرض':'width',
		'نوافذ':'window',
		'فاصل-الكلمات':'word-break',
		'تباعد-الكلمات':'word-spacing',
		'التفاف-الكلمة':'word-wrap',
		'نمط-الكتابة':'writing-mode',
		'سريع-جدى':'x-fast',
		'عالى-جدا':'x-high',
		'كبير-جدا':'x-large',
		'صاخب-جدا':'x-loud',
		'خافت-جدا':'x-low',
		'بطىء-جدا':'x-slow',
		'صغير-جدا':'x-small',
		'ناعم-جدا':'x-soft',
		'كبير-جدا-جدا':'xx-large',
		'ضغير-جدا-جدا':'xx-small',
		'اصفر':'yellow',
		'البعد-ع':'z-index',
		'تقريب':'zoom',
		'%':'%'
	},

	/**
	 * translate an identifier from arabic into english
	 * it will return the identifier untranslated as it is
	 * if not found in the table
	 */
	translate: function(identifier){
		
		if(this.table[identifier]!=undefined){
			return this.table[identifier];
		}else{
			// log a message to console of we couldn't find the identifier
			console.log( "couldn't find the token :"+identifier );
			return identifier;
		}
	}
	
};

