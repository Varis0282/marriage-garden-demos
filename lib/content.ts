// Shared bilingual content consumed by all 5 wedding-venue themes.
// Same content, different design — that's the pitch.

export type Lang = "en" | "hi";

export const venues = [
  { icon: "Flower2", img: 0, capacity: "Up to 1,500 guests", capacityHi: "1,500 मेहमानों तक", en: { name: "Grand Lawn", desc: "Our signature open-air lawn with lush green carpet grass, a 60-ft lit stage backdrop and space for 100+ food counters — made for big-fat Indian weddings under the stars.", features: ["1,00,000 sq.ft. landscaped lawn", "Grand entry for baraat with fireworks zone", "100+ food counter capacity", "Full ground lighting & sound setup"] }, hi: { name: "ग्रैंड लॉन", desc: "हरी-भरी कारपेट घास, 60 फीट का जगमगाता स्टेज बैकड्रॉप और 100+ फूड काउंटर की जगह — सितारों के नीचे बड़ी शादी के लिए हमारा सिग्नेचर ओपन-एयर लॉन।", features: ["1,00,000 वर्ग फीट लैंडस्केप्ड लॉन", "आतिशबाज़ी ज़ोन के साथ भव्य बारात एंट्री", "100+ फूड काउंटर क्षमता", "पूरे ग्राउंड की लाइटिंग व साउंड व्यवस्था"] } },
  { icon: "Building2", img: 1, capacity: "400 guests · Fully AC", capacityHi: "400 मेहमान · पूर्ण AC", en: { name: "Crystal Banquet Hall", desc: "A pillar-less, fully air-conditioned banquet with crystal chandeliers, Italian flooring and an attached royal dining hall — perfect for receptions and winter weddings.", features: ["Pillar-less 12,000 sq.ft. hall", "Fully air-conditioned with silent gensets", "Crystal chandeliers & Italian marble", "Attached dining for 250 at a time"] }, hi: { name: "क्रिस्टल बैंक्वेट हॉल", desc: "बिना पिलर का, पूर्ण वातानुकूलित बैंक्वेट — क्रिस्टल झूमर, इटैलियन फ्लोरिंग और शाही डाइनिंग हॉल के साथ — रिसेप्शन और सर्दियों की शादियों के लिए परफेक्ट।", features: ["बिना पिलर का 12,000 वर्ग फीट हॉल", "साइलेंट जनरेटर के साथ पूर्ण AC", "क्रिस्टल झूमर व इटैलियन मार्बल", "एक साथ 250 की अटैच्ड डाइनिंग"] } },
  { icon: "Sparkles", img: 2, capacity: "150 guests · Open sky", capacityHi: "150 मेहमान · खुला आसमान", en: { name: "Rooftop Terrace", desc: "An intimate rooftop under fairy lights with a city view — ideal for engagements, haldi-mehndi, birthdays and cocktail evenings.", features: ["City-view open terrace", "Fairy-light & canopy decor ready", "Private bar & live counters space", "Lift access & separate entry"] }, hi: { name: "रूफटॉप टैरेस", desc: "फेयरी लाइट्स के नीचे सिटी व्यू वाला इंटिमेट रूफटॉप — सगाई, हल्दी-मेहंदी, बर्थडे और कॉकटेल शाम के लिए आदर्श।", features: ["सिटी-व्यू खुली छत", "फेयरी-लाइट व कैनोपी डेकोर तैयार", "प्राइवेट बार व लाइव काउंटर स्पेस", "लिफ्ट एक्सेस व अलग एंट्री"] } },
];

export const services = [
  { icon: "UtensilsCrossed", en: { title: "In-house Pure-Veg Catering", desc: "200+ dish menu — Malwa, North Indian, Chinese, Italian & live chaat counters. Tasting session before booking." }, hi: { title: "इन-हाउस शुद्ध शाकाहारी कैटरिंग", desc: "200+ व्यंजनों का मेन्यू — मालवा, नॉर्थ इंडियन, चाइनीज़, इटैलियन व लाइव चाट काउंटर। बुकिंग से पहले टेस्टिंग।" } },
  { icon: "Flower2", en: { title: "Mandap, Stage & Floral Decor", desc: "In-house decor team — theme mandaps, fresh-flower stages, entry arches and haldi-mehndi setups at honest package rates." }, hi: { title: "मंडप, स्टेज व फूलों की सजावट", desc: "इन-हाउस डेकोर टीम — थीम मंडप, ताज़े फूलों का स्टेज, एंट्री आर्च और हल्दी-मेहंदी सेटअप, ईमानदार पैकेज रेट पर।" } },
  { icon: "Music", en: { title: "DJ, Sound & Lighting", desc: "Licensed DJ setup, dhol & shehnai artists, dance floor and full-ground ambient lighting till permitted hours." }, hi: { title: "DJ, साउंड व लाइटिंग", desc: "लाइसेंस्ड DJ सेटअप, ढोल व शहनाई कलाकार, डांस फ्लोर और पूरे ग्राउंड की एम्बिएंट लाइटिंग।" } },
  { icon: "Car", en: { title: "Valet Parking (300+ cars)", desc: "Trained valet team, 300+ car capacity inside campus and dedicated two-wheeler zone — no road-side chaos." }, hi: { title: "वैले पार्किंग (300+ कारें)", desc: "प्रशिक्षित वैले टीम, कैंपस के अंदर 300+ कारों की क्षमता और अलग टू-व्हीलर ज़ोन — सड़क पर कोई अफरा-तफरी नहीं।" } },
  { icon: "Building2", en: { title: "Baraat & Family Rooms", desc: "6 AC guest rooms for bride, groom and outstation family, with attached washrooms and mirror stations." }, hi: { title: "बारात व फैमिली रूम्स", desc: "दुल्हन, दूल्हे और बाहर से आए परिवार के लिए 6 AC गेस्ट रूम — अटैच्ड वॉशरूम व मिरर स्टेशन के साथ।" } },
  { icon: "Camera", en: { title: "Photography & Event Partners", desc: "Trusted panel of photographers, choreographers, anchors and pandit ji — one call arranges everything." }, hi: { title: "फोटोग्राफी व इवेंट पार्टनर्स", desc: "भरोसेमंद फोटोग्राफर, कोरियोग्राफर, एंकर और पंडित जी का पैनल — एक कॉल में सब व्यवस्था।" } },
];

export const eventTypes = [
  { icon: "Heart", img: 0, count: "280+", en: { title: "Weddings", desc: "Pheras on the Grand Lawn, vidaai at sunrise — we have hosted 280+ full wedding functions." }, hi: { title: "शादियाँ", desc: "ग्रैंड लॉन पर फेरे, सुबह की विदाई — हमने 280+ पूर्ण विवाह समारोह कराए हैं।" } },
  { icon: "PartyPopper", img: 1, count: "120+", en: { title: "Receptions", desc: "Crystal Hall receptions with grand couple entries, LED walls and midnight dinner service." }, hi: { title: "रिसेप्शन", desc: "क्रिस्टल हॉल में भव्य कपल एंट्री, LED वॉल और मिडनाइट डिनर सर्विस के साथ रिसेप्शन।" } },
  { icon: "Gem", img: 2, count: "60+", en: { title: "Engagements & Sagai", desc: "Intimate ring ceremonies on the Rooftop Terrace under fairy lights." }, hi: { title: "सगाई समारोह", desc: "फेयरी लाइट्स के नीचे रूफटॉप टैरेस पर इंटिमेट रिंग सेरेमनी।" } },
  { icon: "Sparkles", img: 3, count: "45+", en: { title: "Birthdays & Anniversaries", desc: "Theme birthdays, 25th & 50th anniversaries with decor, cake table and live counters." }, hi: { title: "बर्थडे व एनिवर्सरी", desc: "थीम बर्थडे, 25वीं व 50वीं सालगिरह — डेकोर, केक टेबल और लाइव काउंटर के साथ।" } },
  { icon: "Users", img: 4, count: "30+", en: { title: "Corporate & Community Events", desc: "Dealer meets, kitty groups, community bhoj and annual functions with projector & stage support." }, hi: { title: "कॉर्पोरेट व सामुदायिक आयोजन", desc: "डीलर मीट, किटी ग्रुप, सामुदायिक भोज और वार्षिकोत्सव — प्रोजेक्टर व स्टेज सपोर्ट के साथ।" } },
];

export const reviews = [
  { name: "Rajesh & Meena Agrawal", area: "Daughter's wedding, Feb 2026", stars: 5, en: "800 guests, not one complaint. Food counters never ran empty and the manager stayed on ground till vidaai at 6 AM. Utsav made our beti's wedding stress-free.", hi: "800 मेहमान, एक भी शिकायत नहीं। फूड काउंटर कभी खाली नहीं हुए और मैनेजर सुबह 6 बजे विदाई तक ग्राउंड पर रहे। उत्सव ने बेटी की शादी टेंशन-फ्री कर दी।" },
  { name: "Nikhil & Shreya Jain", area: "Reception, Crystal Hall", stars: 5, en: "The hall looks even better than photos. Our couple entry with cold pyros was straight out of a film. Worth every rupee.", hi: "हॉल फोटो से भी सुंदर है। कोल्ड पायरो के साथ हमारी कपल एंट्री किसी फिल्म जैसी थी। पैसा वसूल।" },
  { name: "Sunita Rathore", area: "Son's engagement, Rooftop", stars: 5, en: "Rooftop was decorated so beautifully that guests kept taking photos. Staff handled everything — we just enjoyed.", hi: "रूफटॉप इतना सुंदर सजा था कि मेहमान फोटो लेते रह गए। स्टाफ ने सब संभाला — हम बस एन्जॉय करते रहे।" },
  { name: "Prakash Malviya", area: "Community bhoj, 1,200 guests", stars: 4, en: "Big ground, easy parking for 300 cars, and food service for 1,200 people finished smoothly in 3 hours. Very professional team.", hi: "बड़ा ग्राउंड, 300 गाड़ियों की आसान पार्किंग, और 1,200 लोगों की भोजन व्यवस्था 3 घंटे में आराम से पूरी। बहुत प्रोफेशनल टीम।" },
  { name: "Farhan & Zoya Khan", area: "Walima, Grand Lawn", stars: 5, en: "They customised the menu and decor for our walima perfectly. Rooms for family were clean and AC. Highly recommended.", hi: "वलीमा के लिए मेन्यू और डेकोर बिल्कुल हमारे हिसाब से किया। परिवार के रूम साफ और AC थे। ज़रूर चुनें।" },
  { name: "Kavita Sharma", area: "Kitty & anniversary events", stars: 5, en: "We book Utsav every year for our society's annual function. Transparent rates, no hidden charges, same team every time.", hi: "हम हर साल सोसाइटी के वार्षिकोत्सव के लिए उत्सव बुक करते हैं। पारदर्शी रेट, कोई छिपा शुल्क नहीं, हर बार वही भरोसेमंद टीम।" },
];

export const faqs = [
  { en: { q: "How far in advance should we book?", a: "Wedding season dates (Nov–Feb, May–June) fill 6–10 months ahead. A token amount blocks your date instantly; the booking amount is adjustable in the final bill." }, hi: { q: "कितने पहले बुकिंग करनी चाहिए?", a: "शादी सीज़न की तारीखें (नवं–फर, मई–जून) 6–10 महीने पहले भर जाती हैं। टोकन राशि से तारीख तुरंत ब्लॉक हो जाती है; बुकिंग राशि फाइनल बिल में एडजस्ट होती है।" } },
  { en: { q: "Is outside catering allowed?", a: "Our in-house pure-veg kitchen covers most needs, but yes — outside caterers are allowed for specific communities/cuisines with a nominal ground charge." }, hi: { q: "क्या बाहर की कैटरिंग ला सकते हैं?", a: "हमारी इन-हाउस शुद्ध शाकाहारी रसोई ज़्यादातर ज़रूरतें पूरी करती है, फिर भी — विशेष समुदाय/व्यंजनों के लिए बाहरी कैटरर मामूली ग्राउंड चार्ज पर मान्य हैं।" } },
  { en: { q: "What exactly is included in the package?", a: "Venue, basic stage + entry decor, tables-chairs with covers, crockery, drinking water, housekeeping, power backup and parking with valet. Food, premium decor and DJ are priced per plate/per item — full rate card is shared openly." }, hi: { q: "पैकेज में क्या-क्या शामिल है?", a: "वेन्यू, बेसिक स्टेज व एंट्री डेकोर, कवर सहित टेबल-कुर्सी, क्रॉकरी, पीने का पानी, हाउसकीपिंग, पावर बैकअप और वैले पार्किंग। भोजन, प्रीमियम डेकोर व DJ प्रति प्लेट/प्रति आइटम — पूरा रेट कार्ड खुलकर दिया जाता है।" } },
  { en: { q: "Till what time can events run?", a: "Ground events till 11:30 PM with DJ till 10 PM (as per city rules). Indoor Crystal Hall functions can continue later; dinner service can run past midnight." }, hi: { q: "इवेंट कितनी देर तक चल सकता है?", a: "ग्राउंड इवेंट रात 11:30 तक, DJ रात 10 बजे तक (शहर के नियमानुसार)। इनडोर क्रिस्टल हॉल के कार्यक्रम देर तक चल सकते हैं; डिनर सेवा मध्यरात्रि के बाद भी।" } },
  { en: { q: "Are rooms available for the family?", a: "Yes — 6 AC guest rooms (bride room, groom room + 4 family rooms) are included with wedding bookings. Nearby hotel tie-ups for larger staying groups." }, hi: { q: "परिवार के लिए रूम मिलते हैं क्या?", a: "हाँ — शादी की बुकिंग के साथ 6 AC गेस्ट रूम (दुल्हन रूम, दूल्हा रूम + 4 फैमिली रूम) शामिल हैं। बड़े ग्रुप के लिए पास के होटलों से टाई-अप।" } },
  { en: { q: "Can we visit before booking?", a: "Of course — site visits run 10 AM to 8 PM all days. Come see the lawn lit up in the evening; that's when it looks its best. Book a visit on WhatsApp." }, hi: { q: "क्या बुकिंग से पहले देख सकते हैं?", a: "बिल्कुल — साइट विज़िट रोज़ सुबह 10 से रात 8 बजे तक। शाम को जगमगाता लॉन देखने ज़रूर आएँ — तभी यह सबसे सुंदर दिखता है। WhatsApp पर विज़िट बुक करें।" } },
];

export const stats = [
  { value: "500+", en: "Events Hosted", hi: "आयोजन सम्पन्न" },
  { value: "15+", en: "Years of Celebrations", hi: "वर्षों का उत्सव" },
  { value: "3", en: "Venues, One Campus", hi: "वेन्यू, एक कैंपस" },
  { value: "4.7★", en: "Google Rating", hi: "गूगल रेटिंग" },
];

export const whyUs = [
  { icon: "Building2", en: { title: "3 Venues, One Address", desc: "Lawn for 1,500, AC banquet for 400, rooftop for 150 — every function of the shaadi under one campus." }, hi: { title: "3 वेन्यू, एक पता", desc: "1,500 का लॉन, 400 का AC बैंक्वेट, 150 का रूफटॉप — शादी का हर फंक्शन एक ही कैंपस में।" } },
  { icon: "UtensilsCrossed", en: { title: "In-house Kitchen You Can Taste", desc: "Pure-veg, 200+ dishes, free tasting before booking. No third-party caterer games." }, hi: { title: "इन-हाउस रसोई, पहले चखिए", desc: "शुद्ध शाकाहारी, 200+ व्यंजन, बुकिंग से पहले मुफ़्त टेस्टिंग। कोई थर्ड-पार्टी कैटरर झंझट नहीं।" } },
  { icon: "ShieldCheck", en: { title: "Transparent Rate Card", desc: "Printed rates, written contract, zero hidden charges. Token adjusts in the final bill." }, hi: { title: "पारदर्शी रेट कार्ड", desc: "प्रिंटेड रेट, लिखित कॉन्ट्रैक्ट, ज़ीरो छिपे शुल्क। टोकन फाइनल बिल में एडजस्ट।" } },
  { icon: "Car", en: { title: "300-Car Valet + Power Backup", desc: "Full campus parking with valet team and 100% silent-genset backup — the show never stops." }, hi: { title: "300-कार वैले + पावर बैकअप", desc: "वैले टीम के साथ पूरे कैंपस की पार्किंग और 100% साइलेंट-जेनसेट बैकअप — जश्न कभी नहीं रुकता।" } },
];

export const ui = {
  en: {
    nav: { home: "Home", about: "About Us", venues: "Venues", services: "Services", gallery: "Gallery", contact: "Contact & Booking", book: "Check Availability" },
    hero: {
      badge: "Indore's celebration address since 2010",
      title: "Your Big Day,",
      titleAccent: "Celebrated Grandly",
      sub: "Grand lawn for 1,500, crystal AC banquet, rooftop terrace — with in-house catering, decor and valet parking on Ring Road, Indore. Check your date on WhatsApp in 30 seconds.",
      cta1: "Check Date Availability",
      cta2: "Call Now",
      open: "Site visits open daily · 10 AM – 8 PM",
    },
    sections: {
      venuesTitle: "Our Venues",
      venuesSub: "Three beautiful spaces, one campus — pick what fits your function and guest list.",
      servicesTitle: "Everything Included",
      servicesSub: "From catering to valet — one team handles your entire event.",
      eventsTitle: "500+ Celebrations Hosted",
      eventsSub: "Weddings, receptions, sagai, birthdays and corporate evenings — we have done them all.",
      whyTitle: "Why Families Choose Utsav",
      whySub: "15 years, 500+ events, one promise — a celebration without stress.",
      reviewsTitle: "What Families Say",
      reviewsSub: "Real words from hosts who celebrated with us.",
      faqTitle: "Frequently Asked Questions",
      faqSub: "Everything hosts ask before booking a date.",
      galleryTitle: "Moments From Our Campus",
      gallerySub: "Real events, real decor, real celebrations at Utsav.",
      visitTitle: "Visit the Campus",
      visitSub: "On Ring Road, near Bengali Square — come see the lawn lit up in the evening.",
      ctaTitle: "Wedding dates book out months ahead.",
      ctaSub: "Check availability for your date now — it takes 30 seconds on WhatsApp.",
    },
    booking: {
      title: "Check Date Availability",
      sub: "Fill this form — your enquiry goes directly to our WhatsApp. We confirm availability and share the rate card within 15 minutes.",
      name: "Your Name", namePh: "e.g. Rajesh Agrawal",
      phone: "Mobile Number", phonePh: "e.g. 92024 20455",
      date: "Event Date",
      eventType: "Event Type",
      eventTypes: ["Wedding", "Reception", "Engagement / Sagai", "Birthday / Anniversary", "Corporate / Community"],
      guests: "Expected Guests",
      guestOptions: ["Under 200", "200 – 500", "500 – 1,000", "1,000+"],
      venue: "Preferred Venue",
      anyVenue: "Suggest the best venue for me",
      note: "Anything else? (optional)", notePh: "e.g. need mehndi + wedding, 2 days",
      submit: "Check on WhatsApp",
      or: "or",
      call: "Call the venue",
      success: "Opening WhatsApp… your availability enquiry is ready to send!",
    },
    footer: { rights: "All rights reserved.", quick: "Quick Links", contact: "Contact", hours: "Timings", tagline: "Three venues, one campus — celebrations without stress." },
    misc: { viewAll: "View All Venues", experience: "Capacity", readMore: "Know More", getDirections: "Get Directions", emergency: "Booking Helpline (10 AM – 8 PM)" },
    about: {
      title: "About Utsav Garden",
      sub: "15 years of celebrations on Ring Road, Indore.",
      story1: "Utsav Garden & Banquets began in 2010 when the Agrawal family converted their ancestral farmland on Ring Road into a wedding lawn — with a simple idea: hosting a wedding in Indore should not mean running behind ten different vendors.",
      story2: "Today the campus has grown into three venues — the Grand Lawn, the pillar-less Crystal Banquet and the Rooftop Terrace — with an in-house pure-veg kitchen, decor team, 6 guest rooms and valet parking for 300 cars. Over 500 weddings, receptions and community events have been celebrated here.",
      story3: "Our promise is written into every contract: transparent printed rates, one manager responsible for your entire event, and a team that stays on the ground till your last guest leaves.",
      missionTitle: "Our Promise",
      mission: "One campus, one team, one written rate card — so your family celebrates while we run the event.",
      values: [
        { title: "No Hidden Charges", desc: "Printed rate card and written contract before any payment." },
        { title: "One Manager, Full Event", desc: "A single point of contact from booking to vidaai." },
        { title: "Food We're Proud Of", desc: "Free tasting session — decide after you eat." },
        { title: "On-Ground Till the End", desc: "Our team stays till the last guest, even at 6 AM." },
      ],
    },
  },
  hi: {
    nav: { home: "होम", about: "हमारे बारे में", venues: "वेन्यू", services: "सेवाएँ", gallery: "गैलरी", contact: "संपर्क व बुकिंग", book: "उपलब्धता देखें" },
    hero: {
      badge: "2010 से इंदौर का उत्सव-स्थल",
      title: "आपका शुभ दिन,",
      titleAccent: "शानदार जश्न",
      sub: "1,500 मेहमानों का ग्रैंड लॉन, क्रिस्टल AC बैंक्वेट, रूफटॉप टैरेस — इन-हाउस कैटरिंग, डेकोर व वैले पार्किंग के साथ, रिंग रोड इंदौर पर। WhatsApp पर 30 सेकंड में अपनी तारीख चेक करें।",
      cta1: "तारीख की उपलब्धता देखें",
      cta2: "अभी कॉल करें",
      open: "साइट विज़िट रोज़ · सुबह 10 – रात 8",
    },
    sections: {
      venuesTitle: "हमारे वेन्यू",
      venuesSub: "एक कैंपस में तीन सुंदर स्थान — अपने फंक्शन और मेहमानों के हिसाब से चुनें।",
      servicesTitle: "सब कुछ शामिल",
      servicesSub: "कैटरिंग से वैले तक — एक ही टीम आपका पूरा आयोजन संभालती है।",
      eventsTitle: "500+ आयोजन सम्पन्न",
      eventsSub: "शादियाँ, रिसेप्शन, सगाई, बर्थडे और कॉर्पोरेट शामें — हमने सब कराए हैं।",
      whyTitle: "परिवार उत्सव को क्यों चुनते हैं",
      whySub: "15 साल, 500+ आयोजन, एक वादा — बिना तनाव का जश्न।",
      reviewsTitle: "परिवार क्या कहते हैं",
      reviewsSub: "हमारे साथ जश्न मनाने वाले मेज़बानों के सच्चे शब्द।",
      faqTitle: "अक्सर पूछे जाने वाले सवाल",
      faqSub: "तारीख बुक करने से पहले मेज़बानों के हर सवाल का जवाब।",
      galleryTitle: "हमारे कैंपस की झलकियाँ",
      gallerySub: "असली आयोजन, असली सजावट, असली जश्न — उत्सव में।",
      visitTitle: "कैंपस देखने आइए",
      visitSub: "रिंग रोड पर, बंगाली चौराहे के पास — शाम का जगमगाता लॉन देखने ज़रूर आएँ।",
      ctaTitle: "शादी की तारीखें महीनों पहले बुक हो जाती हैं।",
      ctaSub: "अपनी तारीख की उपलब्धता अभी देखें — WhatsApp पर सिर्फ 30 सेकंड।",
    },
    booking: {
      title: "तारीख की उपलब्धता देखें",
      sub: "यह फॉर्म भरें — आपकी इन्क्वायरी सीधे हमारे WhatsApp पर पहुँचेगी। 15 मिनट में उपलब्धता और रेट कार्ड।",
      name: "आपका नाम", namePh: "जैसे: राजेश अग्रवाल",
      phone: "मोबाइल नंबर", phonePh: "जैसे: 92024 20455",
      date: "आयोजन की तारीख",
      eventType: "आयोजन का प्रकार",
      eventTypes: ["शादी", "रिसेप्शन", "सगाई", "बर्थडे / एनिवर्सरी", "कॉर्पोरेट / सामुदायिक"],
      guests: "अनुमानित मेहमान",
      guestOptions: ["200 से कम", "200 – 500", "500 – 1,000", "1,000+"],
      venue: "पसंदीदा वेन्यू",
      anyVenue: "मेरे लिए सही वेन्यू सुझाएँ",
      note: "कुछ और? (वैकल्पिक)", notePh: "जैसे: मेहंदी + शादी, 2 दिन चाहिए",
      submit: "WhatsApp पर चेक करें",
      or: "या",
      call: "वेन्यू को कॉल करें",
      success: "WhatsApp खुल रहा है… आपकी इन्क्वायरी भेजने के लिए तैयार है!",
    },
    footer: { rights: "सर्वाधिकार सुरक्षित।", quick: "क्विक लिंक्स", contact: "संपर्क", hours: "समय", tagline: "तीन वेन्यू, एक कैंपस — बिना तनाव का जश्न।" },
    misc: { viewAll: "सभी वेन्यू देखें", experience: "क्षमता", readMore: "और जानें", getDirections: "रास्ता देखें", emergency: "बुकिंग हेल्पलाइन (सुबह 10 – रात 8)" },
    about: {
      title: "उत्सव गार्डन के बारे में",
      sub: "रिंग रोड इंदौर पर 15 साल के जश्न।",
      story1: "उत्सव गार्डन एंड बैंक्वेट्स की शुरुआत 2010 में हुई, जब अग्रवाल परिवार ने रिंग रोड की अपनी पुश्तैनी ज़मीन को वेडिंग लॉन में बदला — एक सीधे विचार के साथ: इंदौर में शादी करने का मतलब दस वेंडरों के पीछे भागना नहीं होना चाहिए।",
      story2: "आज यह कैंपस तीन वेन्यू में बदल चुका है — ग्रैंड लॉन, बिना पिलर का क्रिस्टल बैंक्वेट और रूफटॉप टैरेस — इन-हाउस शुद्ध शाकाहारी रसोई, डेकोर टीम, 6 गेस्ट रूम और 300 कारों की वैले पार्किंग के साथ। यहाँ 500+ शादियाँ, रिसेप्शन और सामुदायिक आयोजन हो चुके हैं।",
      story3: "हमारा वादा हर कॉन्ट्रैक्ट में लिखा होता है: पारदर्शी प्रिंटेड रेट, आपके पूरे आयोजन के लिए एक ज़िम्मेदार मैनेजर, और एक टीम जो आखिरी मेहमान के जाने तक ग्राउंड पर रहती है।",
      missionTitle: "हमारा वादा",
      mission: "एक कैंपस, एक टीम, एक लिखित रेट कार्ड — परिवार जश्न मनाए, आयोजन हम चलाएँ।",
      values: [
        { title: "कोई छिपा शुल्क नहीं", desc: "किसी भी भुगतान से पहले प्रिंटेड रेट कार्ड और लिखित कॉन्ट्रैक्ट।" },
        { title: "एक मैनेजर, पूरा आयोजन", desc: "बुकिंग से विदाई तक एक ही संपर्क व्यक्ति।" },
        { title: "खाना जिस पर हमें गर्व है", desc: "मुफ़्त टेस्टिंग सेशन — खाकर ही फैसला करें।" },
        { title: "अंत तक ग्राउंड पर", desc: "आखिरी मेहमान तक हमारी टीम मौजूद — चाहे सुबह के 6 बजें।" },
      ],
    },
  },
};
