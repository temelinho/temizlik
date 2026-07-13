/* Alanya Temizlik - Airbnb & Tatil Evi Sayfası (TR / EN / DE / RU) */
(function () {
  'use strict';

  var SUPPORTED = ['tr', 'en', 'de', 'ru'];
  var STORAGE_KEY = 'ct_lang';

  var META = {
    tr: {
      title: 'Alanya Airbnb & Tatil Evi Temizliği | Günlük Kiralık Daire Temizlik',
      description: "Alanya'da Airbnb, günlük kiralık daire ve tatil evi temizliği. Misafir giriş-çıkışına özel check-out temizliği, nevresim & havlu değişimi, aynı gün turnover ve abonelik. ☎ 0534 350 36 30"
    },
    en: {
      title: 'Alanya Airbnb & Holiday Home Cleaning | Short-Term Rental Turnover',
      description: 'Airbnb, short-term rental and holiday home cleaning in Alanya. Guest check-out cleaning, linen & towel changes, same-day turnover and subscription management. ☎ +90 534 350 36 30'
    },
    de: {
      title: 'Airbnb & Ferienwohnungsreinigung Alanya | Kurzzeitvermietung',
      description: 'Airbnb-, Kurzzeitmiet- und Ferienwohnungsreinigung in Alanya. Check-out-Reinigung, Bettwäsche- & Handtuchwechsel, taggleiche Wechselreinigung und Abonnement. ☎ +90 534 350 36 30'
    },
    ru: {
      title: 'Уборка Airbnb и апартаментов посуточно в Алании | Клининг',
      description: 'Уборка Airbnb, посуточной аренды и домов для отдыха в Алании. Уборка после выезда, смена белья и полотенец, уборка между заездами в тот же день и подписка. ☎ +90 534 350 36 30'
    }
  };

  var TR = {
    'nav.home': 'Anasayfa',
    'nav.services': 'Hizmetlerimiz',
    'nav.airbnb': 'Airbnb Temizliği',
    'nav.regions': 'Hizmet Bölgeleri',
    'nav.contact': 'İletişim',
    'btn.call': 'Hemen Ara',
    'btn.whatsapp': "WhatsApp'tan Yaz",
    'hero.badge': 'Airbnb & Tatil Evi Temizliği',
    'hero.title': 'Alanya Airbnb & Tatil Evi Temizliği',
    'hero.subtitle': 'Günlük kiralık daire ve tatil evleriniz için misafir giriş-çıkışına özel check-out temizliği. Nevresim & havlu değişimi, aynı gün turnover ve fotoğraflı teslim ile eviniz her rezervasyona hazır. Yurt dışındaki ev sahipleri için abonelikli yönetim.',
    'incl.tag': 'Turnover Temizliği',
    'incl.title': 'Her Misafir İçin Otel Standardında Hazırlık',
    'incl.desc': "Alanya'da Airbnb ve günlük kiralık dairelerin puanı temizliğe bağlıdır. Ekibimiz her misafir çıkışında daireyi baştan sona hazırlar; siz sadece rezervasyonlarınıza odaklanırsınız.",
    'incl.c1.title': 'Nevresim & Havlu Değişimi',
    'incl.c1.text': 'Kirli nevresim, çarşaf ve havluların toplanması, temiz set ile yatakların otel düzeninde hazırlanması ve çamaşırların yıkanması.',
    'incl.c2.title': 'Mutfak & Bulaşık',
    'incl.c2.text': 'Bulaşıkların yıkanması, tezgâh ve ocak temizliği, buzdolabının boşaltılıp silinmesi ve mutfak gereçlerinin düzenlenmesi.',
    'incl.c3.title': 'Banyo Dezenfeksiyonu',
    'incl.c3.text': 'Duşakabin, klozet ve lavabonun dezenfekte edilmesi, kireç ve saç kalıntılarının temizlenmesi, aynaların parlatılması.',
    'incl.c4.title': 'Zemin, Toz & Cam',
    'incl.c4.text': 'Tüm yüzeylerin tozunun alınması, zeminlerin süpürülüp paspaslanması, iç camların silinmesi ve balkonun düzenlenmesi.',
    'incl.c5.title': 'Çöp & Sarf Malzeme Kontrolü',
    'incl.c5.text': 'Çöplerin çıkarılması; tuvalet kağıdı, sabun, şampuan, çay-kahve gibi sarf malzemelerinin kontrolü ve eksiklerin bildirilmesi.',
    'incl.c6.title': 'Fotoğraflı Teslim Raporu',
    'incl.c6.text': 'Temizlik sonrası dairenin fotoğraflarını paylaşıyoruz. Uzaktaki ev sahipleri dairenin misafire hazır olduğunu anında görebilir.',
    'why.tag': 'Ev Sahipleri Neden Bizi Seçiyor?',
    'why.title': 'Airbnb İşinizin Sessiz Ortağı',
    'why.desc': "Yoğun sezonda ardışık rezervasyonlar, geç check-out'lar ve son dakika değişiklikleri stres yaratır. Biz bu yükü üstleniyoruz.",
    'why.c1.title': 'Aynı Gün Turnover',
    'why.c1.text': 'Check-out ve check-in aralığına göre planlama yapıp daireyi yeni misafire aynı gün yetiştiriyoruz.',
    'why.c2.title': 'Kilit Kutusu ile Erişim',
    'why.c2.text': 'Lockbox veya akıllı kilit kodu ile daireye giriyoruz. Fiziksel anahtar teslimine veya orada olmanıza gerek yok.',
    'why.c3.title': 'Takvimle Uyumlu Çalışma',
    'why.c3.text': 'Airbnb takviminizi paylaşın; her rezervasyon arasını takip edip temizliği otomatik planlayalım.',
    'why.c4.title': 'Sabit Turnover Ücreti',
    'why.c4.text': 'Her temizlik için net, sabit ücret. Düzenli çalışan ev sahiplerine abonelik indirimi ve öncelikli randevu.',
    'faq.tag': 'Sıkça Sorulanlar',
    'faq.title': 'Airbnb & Tatil Evi Temizliği Hakkında',
    'faq.desc': 'Turnover süresi, nevresim, anahtar erişimi ve fiyatlandırma hakkında ev sahiplerinin en çok sorduğu sorular.',
    'faq.q1.q': 'Airbnb turnover (giriş-çıkış) temizliği ne kadar sürer?',
    'faq.q1.a': 'Dairenin büyüklüğüne göre standart bir turnover temizliği genellikle 1,5–3 saat sürer. Yoğun sezonda ardışık rezervasyonlarınız için ekip sayısını artırarak aynı gün içinde birden fazla daireyi hazır hale getiriyoruz.',
    'faq.q2.q': 'Nevresim, havlu ve sarf malzemelerini siz mi sağlıyorsunuz?',
    'faq.q2.a': 'İki seçenek sunuyoruz: Sizin temin ettiğiniz nevresim ve havluları yıkayıp değiştirebiliriz ya da anlaşmalı olarak temiz set getirip kirlileri yıkanmak üzere alabiliriz. Sabun, şampuan, tuvalet kağıdı gibi sarf malzemelerinin kontrolünü ve yerleştirilmesini de yapıyoruz.',
    'faq.q3.q': 'Misafir çıkışı ile yeni giriş arasında aynı gün temizlik yapabilir misiniz?',
    'faq.q3.a': 'Evet. Check-out ve check-in saatlerinizi bildirmeniz yeterli; ekibimizi bu aralığa göre planlayıp daireyi yeni misafire yetiştiriyoruz. Airbnb takviminizle uyumlu düzenli çalışma sağlıyoruz.',
    'faq.q4.q': 'Anahtar teslimi olmadan, kilit kutusu ile giriş yapabilir misiniz?',
    'faq.q4.a': 'Evet. Kilit kutusu (lockbox) kodu veya akıllı kilit ile daireye erişip temizliği tamamlayabiliyoruz. Ev sahibinin fiziksel olarak orada olması gerekmez; işlem sonunda dilerseniz fotoğraflı teslim raporu paylaşıyoruz.',
    'faq.q5.q': 'Uzaktaki ev sahipleri için düzenli hizmet veriyor musunuz?',
    'faq.q5.a': 'Kesinlikle. Yurt dışında veya başka şehirde yaşayan ev sahipleri için sabit ekiple abonelik bazlı yönetim sunuyoruz. Her temizlik sonrası durum bildirimi ve gerektiğinde eksik malzeme uyarısı yapıyoruz.',
    'faq.q6.q': 'Airbnb temizlik fiyatları nasıl belirleniyor?',
    'faq.q6.a': 'Fiyat; dairenin oda sayısına, m² büyüklüğüne, nevresim/çamaşır dahil olup olmadığına ve aylık rezervasyon sıklığına göre belirlenir. Düzenli çalışan ev sahiplerine sabit turnover ücreti ve abonelik indirimi sunuyoruz. Net fiyat için hemen arayın.',
    'cta.tag': 'Hemen Başlayın',
    'cta.title': 'Dairenizi Bize Bırakın, Puanınız Yükselsin',
    'cta.desc': "Alanya'da Airbnb, günlük kiralık daire ve tatil evi temizliği için 7/24 telefon veya WhatsApp'tan ulaşın. Dakikalar içinde fiyat ve uygun gün planlaması yapalım.",
    'cta.btn': '7/24 Tıkla & Ara',
    'footer.desc': "Alanya'da 7/24 güvenilir ev temizliği, ofis temizliği, derin temizlik, halı & koltuk yıkama, dış cephe cam temizliği ve inşaat sonrası temizlik hizmetleri sunan profesyonel temizlik şirketi. Hijyenik konfor sunuyoruz.",
    'footer.linksTitle': 'Hızlı Linkler',
    'footer.waLink': 'WhatsApp Destek Hattı',
    'footer.copyright': '© 2026 Alanya Temizlik Hizmetleri. Tüm hakları saklıdır.',
    'footer.tagline': 'Designed with care for local business SEO.'
  };

  var EN = {
    'nav.home': 'Home',
    'nav.services': 'Our Services',
    'nav.airbnb': 'Airbnb Cleaning',
    'nav.regions': 'Service Areas',
    'nav.contact': 'Contact',
    'btn.call': 'Call Now',
    'btn.whatsapp': 'Message on WhatsApp',
    'hero.badge': 'Airbnb & Holiday Home Cleaning',
    'hero.title': 'Alanya Airbnb & Holiday Home Cleaning',
    'hero.subtitle': 'Guest turnover cleaning for your short-term rentals and holiday homes. With linen & towel changes, same-day turnover and photo reports, your place is ready for every booking. Subscription management for overseas hosts.',
    'incl.tag': 'Turnover Cleaning',
    'incl.title': 'Hotel-Standard Prep for Every Guest',
    'incl.desc': 'In Alanya, the rating of Airbnb and short-term rentals depends on cleanliness. Our team prepares the flat from top to bottom after every checkout, so you can focus only on your bookings.',
    'incl.c1.title': 'Linen & Towel Change',
    'incl.c1.text': 'Collecting dirty linen, sheets and towels, making the beds hotel-style with a fresh set, and washing the laundry.',
    'incl.c2.title': 'Kitchen & Dishes',
    'incl.c2.text': 'Washing dishes, cleaning countertops and the stove, emptying and wiping the fridge, and organizing kitchenware.',
    'incl.c3.title': 'Bathroom Disinfection',
    'incl.c3.text': 'Disinfecting the shower, toilet and sink, removing limescale and hair residue, and polishing mirrors.',
    'incl.c4.title': 'Floors, Dust & Windows',
    'incl.c4.text': 'Dusting all surfaces, sweeping and mopping floors, wiping interior windows and tidying the balcony.',
    'incl.c5.title': 'Trash & Supplies Check',
    'incl.c5.text': 'Taking out the trash; checking supplies like toilet paper, soap, shampoo, tea & coffee, and reporting what runs low.',
    'incl.c6.title': 'Photo Handover Report',
    'incl.c6.text': 'We share photos of the flat after cleaning. Remote hosts can instantly see that the place is guest-ready.',
    'why.tag': 'Why Hosts Choose Us',
    'why.title': 'The Silent Partner of Your Airbnb Business',
    'why.desc': 'Back-to-back bookings, late check-outs and last-minute changes cause stress in high season. We take that burden off you.',
    'why.c1.title': 'Same-Day Turnover',
    'why.c1.text': 'We plan around your check-out and check-in window and get the flat ready for the next guest the same day.',
    'why.c2.title': 'Lockbox Access',
    'why.c2.text': 'We enter with a lockbox or smart-lock code. No physical key handover and no need for you to be there.',
    'why.c3.title': 'Calendar-Synced Work',
    'why.c3.text': 'Share your Airbnb calendar; we track every gap between bookings and schedule the cleaning automatically.',
    'why.c4.title': 'Fixed Turnover Fee',
    'why.c4.text': 'A clear, fixed fee per clean. Subscription discounts and priority slots for regular hosts.',
    'faq.tag': 'Frequently Asked Questions',
    'faq.title': 'About Airbnb & Holiday Home Cleaning',
    'faq.desc': 'The questions hosts ask most about turnover time, linen, key access and pricing.',
    'faq.q1.q': 'How long does an Airbnb turnover clean take?',
    'faq.q1.a': 'A standard turnover clean usually takes 1.5–3 hours depending on the size of the flat. In high season we increase the team size for your back-to-back bookings and get several flats ready the same day.',
    'faq.q2.q': 'Do you provide the linen, towels and supplies?',
    'faq.q2.a': 'We offer two options: we can wash and change the linen and towels you provide, or by arrangement bring a clean set and take the dirty ones for washing. We also check and restock supplies like soap, shampoo and toilet paper.',
    'faq.q3.q': 'Can you clean same-day between checkout and the next check-in?',
    'faq.q3.a': 'Yes. Just tell us your check-out and check-in times; we plan the team around that window and get the flat ready for the next guest. We work regularly in sync with your Airbnb calendar.',
    'faq.q4.q': 'Can you enter with a lockbox instead of a key handover?',
    'faq.q4.a': 'Yes. We can access the flat with a lockbox code or smart lock and complete the cleaning. The host does not need to be physically present; on request we share a photo handover report afterwards.',
    'faq.q5.q': 'Do you offer regular service for overseas hosts?',
    'faq.q5.a': 'Absolutely. For hosts living abroad or in another city we offer subscription-based management with a fixed team. We send a status update after every clean and flag low supplies when needed.',
    'faq.q6.q': 'How are Airbnb cleaning prices determined?',
    'faq.q6.a': 'The price is based on the number of rooms, m² size, whether linen/laundry is included and your monthly booking frequency. We offer a fixed turnover fee and subscription discounts for regular hosts. Call now for an exact price.',
    'cta.tag': 'Get Started Now',
    'cta.title': 'Leave the Flat to Us, Watch Your Rating Rise',
    'cta.desc': 'Reach us 24/7 by phone or WhatsApp for Airbnb, short-term rental and holiday home cleaning in Alanya. We will quote a price and plan a suitable day within minutes.',
    'cta.btn': 'Tap to Call 24/7',
    'footer.desc': 'Your professional cleaning company in Alanya, offering reliable 24/7 home cleaning, office cleaning, deep cleaning, carpet & sofa washing, facade window cleaning and post-construction cleaning. We offer hygienic comfort.',
    'footer.linksTitle': 'Quick Links',
    'footer.waLink': 'WhatsApp Support Line',
    'footer.copyright': '© 2026 Alanya Cleaning Services. All rights reserved.',
    'footer.tagline': 'Designed with care for local business SEO.'
  };

  var DE = {
    'nav.home': 'Startseite',
    'nav.services': 'Unsere Leistungen',
    'nav.airbnb': 'Airbnb-Reinigung',
    'nav.regions': 'Servicegebiete',
    'nav.contact': 'Kontakt',
    'btn.call': 'Jetzt anrufen',
    'btn.whatsapp': 'Auf WhatsApp schreiben',
    'hero.badge': 'Airbnb & Ferienwohnungsreinigung',
    'hero.title': 'Airbnb & Ferienwohnungsreinigung in Alanya',
    'hero.subtitle': 'Wechselreinigung für Ihre Kurzzeitvermietungen und Ferienwohnungen. Mit Bettwäsche- & Handtuchwechsel, taggleicher Wechselreinigung und Fotobericht ist Ihre Unterkunft für jede Buchung bereit. Abonnementverwaltung für Gastgeber aus dem Ausland.',
    'incl.tag': 'Wechselreinigung',
    'incl.title': 'Vorbereitung im Hotelstandard für jeden Gast',
    'incl.desc': 'In Alanya hängt die Bewertung von Airbnb- und Kurzzeitvermietungen von der Sauberkeit ab. Unser Team bereitet die Wohnung nach jedem Check-out komplett vor, damit Sie sich nur um Ihre Buchungen kümmern.',
    'incl.c1.title': 'Bettwäsche- & Handtuchwechsel',
    'incl.c1.text': 'Einsammeln von schmutziger Bettwäsche und Handtüchern, Betten im Hotelstil mit frischem Set beziehen und Wäsche waschen.',
    'incl.c2.title': 'Küche & Geschirr',
    'incl.c2.text': 'Geschirr spülen, Arbeitsplatten und Herd reinigen, Kühlschrank leeren und auswischen sowie Küchenutensilien ordnen.',
    'incl.c3.title': 'Badezimmer-Desinfektion',
    'incl.c3.text': 'Desinfektion von Dusche, WC und Waschbecken, Entfernen von Kalk und Haarresten sowie Polieren der Spiegel.',
    'incl.c4.title': 'Böden, Staub & Fenster',
    'incl.c4.text': 'Staubwischen aller Flächen, Böden fegen und wischen, Innenfenster reinigen und den Balkon aufräumen.',
    'incl.c5.title': 'Müll & Verbrauchsmaterial',
    'incl.c5.text': 'Müll entsorgen; Verbrauchsmaterial wie Toilettenpapier, Seife, Shampoo, Tee & Kaffee prüfen und Fehlbestände melden.',
    'incl.c6.title': 'Foto-Übergabebericht',
    'incl.c6.text': 'Wir senden nach der Reinigung Fotos der Wohnung. Gastgeber aus der Ferne sehen sofort, dass die Unterkunft gästebereit ist.',
    'why.tag': 'Warum Gastgeber uns wählen',
    'why.title': 'Der stille Partner Ihres Airbnb-Geschäfts',
    'why.desc': 'Aufeinanderfolgende Buchungen, späte Check-outs und kurzfristige Änderungen sorgen in der Hochsaison für Stress. Wir nehmen Ihnen diese Last ab.',
    'why.c1.title': 'Taggleiche Wechselreinigung',
    'why.c1.text': 'Wir planen rund um Ihr Check-out- und Check-in-Fenster und machen die Wohnung am selben Tag für den nächsten Gast bereit.',
    'why.c2.title': 'Zugang per Schlüsselsafe',
    'why.c2.text': 'Wir betreten die Wohnung mit einem Schlüsselsafe- oder Smart-Lock-Code. Keine Schlüsselübergabe und keine Anwesenheit nötig.',
    'why.c3.title': 'Kalendersynchron',
    'why.c3.text': 'Teilen Sie Ihren Airbnb-Kalender; wir verfolgen jede Lücke zwischen Buchungen und planen die Reinigung automatisch.',
    'why.c4.title': 'Feste Reinigungsgebühr',
    'why.c4.text': 'Ein klarer Festpreis pro Reinigung. Abo-Rabatte und bevorzugte Termine für regelmäßige Gastgeber.',
    'faq.tag': 'Häufig gestellte Fragen',
    'faq.title': 'Über Airbnb- & Ferienwohnungsreinigung',
    'faq.desc': 'Die häufigsten Fragen von Gastgebern zu Wechselzeit, Wäsche, Schlüsselzugang und Preisen.',
    'faq.q1.q': 'Wie lange dauert eine Airbnb-Wechselreinigung?',
    'faq.q1.a': 'Eine Standard-Wechselreinigung dauert je nach Wohnungsgröße meist 1,5–3 Stunden. In der Hochsaison vergrößern wir das Team für Ihre aufeinanderfolgenden Buchungen und machen mehrere Wohnungen am selben Tag bereit.',
    'faq.q2.q': 'Stellen Sie Bettwäsche, Handtücher und Verbrauchsmaterial?',
    'faq.q2.a': 'Wir bieten zwei Optionen: Wir waschen und wechseln die von Ihnen bereitgestellte Wäsche, oder wir bringen nach Absprache ein frisches Set und nehmen die schmutzige Wäsche mit. Wir prüfen und ergänzen auch Verbrauchsmaterial wie Seife, Shampoo und Toilettenpapier.',
    'faq.q3.q': 'Können Sie am selben Tag zwischen Check-out und Check-in reinigen?',
    'faq.q3.a': 'Ja. Teilen Sie uns nur Ihre Check-out- und Check-in-Zeiten mit; wir planen das Team um dieses Fenster und machen die Wohnung für den nächsten Gast bereit. Wir arbeiten regelmäßig synchron mit Ihrem Airbnb-Kalender.',
    'faq.q4.q': 'Können Sie mit einem Schlüsselsafe statt Schlüsselübergabe hinein?',
    'faq.q4.a': 'Ja. Wir können die Wohnung mit einem Schlüsselsafe-Code oder Smart Lock betreten und die Reinigung erledigen. Der Gastgeber muss nicht anwesend sein; auf Wunsch senden wir anschließend einen Foto-Übergabebericht.',
    'faq.q5.q': 'Bieten Sie regelmäßigen Service für Gastgeber aus dem Ausland?',
    'faq.q5.a': 'Auf jeden Fall. Für Gastgeber im Ausland oder in einer anderen Stadt bieten wir eine abonnementbasierte Verwaltung mit festem Team. Nach jeder Reinigung senden wir ein Status-Update und melden bei Bedarf fehlendes Material.',
    'faq.q6.q': 'Wie werden die Airbnb-Reinigungspreise festgelegt?',
    'faq.q6.a': 'Der Preis richtet sich nach Zimmeranzahl, m²-Größe, ob Wäsche inklusive ist, und Ihrer monatlichen Buchungshäufigkeit. Für regelmäßige Gastgeber bieten wir eine feste Reinigungsgebühr und Abo-Rabatte. Rufen Sie für einen genauen Preis an.',
    'cta.tag': 'Jetzt starten',
    'cta.title': 'Überlassen Sie uns die Wohnung, Ihre Bewertung steigt',
    'cta.desc': 'Erreichen Sie uns rund um die Uhr per Telefon oder WhatsApp für Airbnb-, Kurzzeitmiet- und Ferienwohnungsreinigung in Alanya. Wir nennen innerhalb von Minuten einen Preis und planen einen passenden Tag.',
    'cta.btn': 'Rund um die Uhr anrufen',
    'footer.desc': 'Ihre professionelle Reinigungsfirma in Alanya für zuverlässige 24/7-Hausreinigung, Büroreinigung, Tiefenreinigung, Teppich- & Polsterwäsche, Fassadenfensterreinigung und Baureinigung. Wir sorgen für hygienischen Komfort.',
    'footer.linksTitle': 'Schnelllinks',
    'footer.waLink': 'WhatsApp-Support',
    'footer.copyright': '© 2026 Alanya Reinigungsdienste. Alle Rechte vorbehalten.',
    'footer.tagline': 'Mit Sorgfalt für lokales Business-SEO gestaltet.'
  };

  var RU = {
    'nav.home': 'Главная',
    'nav.services': 'Наши услуги',
    'nav.airbnb': 'Уборка Airbnb',
    'nav.regions': 'Зоны обслуживания',
    'nav.contact': 'Контакты',
    'btn.call': 'Позвонить сейчас',
    'btn.whatsapp': 'Написать в WhatsApp',
    'hero.badge': 'Уборка Airbnb и домов для отдыха',
    'hero.title': 'Уборка Airbnb и апартаментов посуточно в Алании',
    'hero.subtitle': 'Уборка между заездами для вашей посуточной аренды и домов для отдыха. Смена белья и полотенец, уборка в тот же день и фотоотчет — жилье готово к каждому бронированию. Управление по подписке для владельцев из-за рубежа.',
    'incl.tag': 'Уборка между заездами',
    'incl.title': 'Подготовка гостиничного уровня для каждого гостя',
    'incl.desc': 'В Алании рейтинг Airbnb и посуточной аренды зависит от чистоты. Наша команда полностью готовит квартиру после каждого выезда, а вы сосредотачиваетесь только на бронированиях.',
    'incl.c1.title': 'Смена белья и полотенец',
    'incl.c1.text': 'Сбор грязного белья, простыней и полотенец, застилание кроватей по-гостиничному свежим комплектом и стирка.',
    'incl.c2.title': 'Кухня и посуда',
    'incl.c2.text': 'Мытье посуды, чистка столешниц и плиты, разморозка и протирка холодильника, наведение порядка на кухне.',
    'incl.c3.title': 'Дезинфекция ванной',
    'incl.c3.text': 'Дезинфекция душа, унитаза и раковины, удаление известкового налета и волос, полировка зеркал.',
    'incl.c4.title': 'Полы, пыль и окна',
    'incl.c4.text': 'Удаление пыли со всех поверхностей, подметание и мытье полов, мытье окон изнутри и уборка балкона.',
    'incl.c5.title': 'Мусор и контроль расходников',
    'incl.c5.text': 'Вынос мусора; проверка расходников — туалетной бумаги, мыла, шампуня, чая и кофе — и уведомление о нехватке.',
    'incl.c6.title': 'Фотоотчет о сдаче',
    'incl.c6.text': 'После уборки мы отправляем фотографии квартиры. Удаленные владельцы сразу видят, что жилье готово к приему гостей.',
    'why.tag': 'Почему хозяева выбирают нас',
    'why.title': 'Тихий партнер вашего бизнеса на Airbnb',
    'why.desc': 'Плотные брони подряд, поздние выезды и изменения в последнюю минуту создают стресс в высокий сезон. Мы берем эту нагрузку на себя.',
    'why.c1.title': 'Уборка в тот же день',
    'why.c1.text': 'Планируем работу под ваш интервал выезда и заезда и готовим квартиру к следующему гостю в тот же день.',
    'why.c2.title': 'Доступ через сейф-бокс',
    'why.c2.text': 'Заходим по коду сейф-бокса или умного замка. Передача ключей и ваше присутствие не требуются.',
    'why.c3.title': 'Синхронизация с календарем',
    'why.c3.text': 'Поделитесь календарем Airbnb; мы отслеживаем каждый промежуток между бронями и планируем уборку автоматически.',
    'why.c4.title': 'Фиксированная цена уборки',
    'why.c4.text': 'Четкая фиксированная цена за уборку. Скидки по подписке и приоритетная запись для постоянных хозяев.',
    'faq.tag': 'Часто задаваемые вопросы',
    'faq.title': 'Об уборке Airbnb и домов для отдыха',
    'faq.desc': 'Вопросы, которые хозяева задают чаще всего: время уборки, белье, доступ по ключу и цены.',
    'faq.q1.q': 'Сколько длится уборка Airbnb между заездами?',
    'faq.q1.a': 'Стандартная уборка между заездами обычно занимает 1,5–3 часа в зависимости от площади. В высокий сезон мы увеличиваем бригаду для ваших последовательных броней и готовим несколько квартир в один день.',
    'faq.q2.q': 'Вы предоставляете белье, полотенца и расходники?',
    'faq.q2.a': 'Есть два варианта: мы стираем и меняем предоставленное вами белье и полотенца, либо по договоренности привозим чистый комплект и забираем грязный в стирку. Также проверяем и пополняем расходники — мыло, шампунь, туалетную бумагу.',
    'faq.q3.q': 'Можете убрать в тот же день между выездом и заездом?',
    'faq.q3.a': 'Да. Сообщите время выезда и заезда; мы планируем бригаду под этот интервал и готовим квартиру к следующему гостю. Работаем регулярно в синхронизации с вашим календарем Airbnb.',
    'faq.q4.q': 'Можете войти по сейф-боксу без передачи ключей?',
    'faq.q4.a': 'Да. Мы можем зайти по коду сейф-бокса или умного замка и выполнить уборку. Присутствие хозяина не требуется; по запросу отправляем фотоотчет о сдаче.',
    'faq.q5.q': 'Предлагаете ли регулярный сервис для владельцев из-за рубежа?',
    'faq.q5.a': 'Безусловно. Для владельцев за рубежом или в другом городе мы предлагаем управление по подписке с постоянной бригадой. После каждой уборки отправляем отчет о статусе и при необходимости предупреждаем о нехватке расходников.',
    'faq.q6.q': 'Как определяется цена уборки Airbnb?',
    'faq.q6.a': 'Цена зависит от числа комнат, площади в м², включено ли белье/стирка, и частоты бронирований в месяц. Постоянным хозяевам предлагаем фиксированную цену уборки и скидки по подписке. Позвоните, чтобы узнать точную цену.',
    'cta.tag': 'Начните прямо сейчас',
    'cta.title': 'Доверьте квартиру нам — и рейтинг вырастет',
    'cta.desc': 'Свяжитесь с нами круглосуточно по телефону или в WhatsApp для уборки Airbnb, посуточной аренды и домов для отдыха в Алании. За считанные минуты назовем цену и подберем удобный день.',
    'cta.btn': 'Нажмите и позвоните 24/7',
    'footer.desc': 'Ваша профессиональная клининговая компания в Алании: надежная уборка квартир и офисов, генеральная уборка, химчистка ковров и диванов, мытье фасадных окон и послестроительный клининг 24/7. Обеспечиваем гигиенический комфорт.',
    'footer.linksTitle': 'Быстрые ссылки',
    'footer.waLink': 'Линия поддержки WhatsApp',
    'footer.copyright': '© 2026 Клининговые услуги в Алании. Все права защищены.',
    'footer.tagline': 'Разработано с заботой о локальном SEO для бизнеса.'
  };

  var TRANSLATIONS = { tr: TR, en: EN, de: DE, ru: RU };

  function detectLanguage() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (e) { /* localStorage unavailable, ignore */ }

    var nav = (navigator.language || navigator.userLanguage || 'tr').toLowerCase().slice(0, 2);
    if (SUPPORTED.indexOf(nav) !== -1) return nav;
    return 'tr';
  }

  function applyLanguage(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'tr';
    var dict = TRANSLATIONS[lang];

    var textNodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < textNodes.length; i++) {
      var el = textNodes[i];
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    }

    var htmlNodes = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlNodes.length; j++) {
      var elH = htmlNodes[j];
      var keyH = elH.getAttribute('data-i18n-html');
      if (dict[keyH]) elH.innerHTML = dict[keyH];
    }

    document.documentElement.setAttribute('lang', lang);

    var meta = META[lang];
    if (meta) {
      if (document.title !== undefined) document.title = meta.title;
      var metaDesc = document.getElementById('metaDescription');
      if (metaDesc) metaDesc.setAttribute('content', meta.description);
    }

    var buttons = document.querySelectorAll('.lang-btn');
    for (var k = 0; k < buttons.length; k++) {
      var btn = buttons[k];
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', isActive);
      if (isActive) btn.setAttribute('aria-current', 'true');
      else btn.removeAttribute('aria-current');
    }

    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  function setupSwitchers() {
    var buttons = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        applyLanguage(lang);
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupSwitchers();
    applyLanguage(detectLanguage());
  });
})();
