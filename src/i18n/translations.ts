export type Lang = 'en' | 'fr' | 'ar';

export interface ActivityItem {
  title: string;
  description: string;
}

export interface Translations {
  'nav.about': string;
  'nav.activities': string;
  'nav.products': string;
  'nav.markets': string;
  'nav.contact': string;
  'hero.title': string;
  'hero.subtitle': string;
  'hero.cta': string;
  'hero.cta2': string;
  'hero.label': string;
  'hero.badge1': string;
  'hero.badge2': string;
  'hero.badge3': string;
  'about.title': string;
  'about.label': string;
  'about.description': string;
  'about.stat1.number': string;
  'about.stat1.label': string;
  'about.stat2.number': string;
  'about.stat2.label': string;
  'about.stat3.number': string;
  'about.stat3.label': string;
  'mission.title': string;
  'mission.text': string;
  'vision.title': string;
  'vision.text': string;
  'strengths.title': string;
  'strengths.label': string;
  'strengths.items': string[];
  'activities.title': string;
  'activities.label': string;
  'activities.items': ActivityItem[];
  'products.title': string;
  'products.label': string;
  'products.cement.tab': string;
  'products.clinker.tab': string;
  'products.cement.title': string;
  'products.cement.types': string[];
  'products.cement.features': string[];
  'products.clinker.title': string;
  'products.clinker.features': string[];
  'markets.title': string;
  'markets.label': string;
  'markets.expanding': string;
  'markets.list': string[];
  'markets.europe.desc': string;
  'markets.africa.desc': string;
  'markets.middleeast.desc': string;
  'whyus.title': string;
  'whyus.label': string;
  'whyus.reasons': string[];
  'contact.title': string;
  'contact.label': string;
  'contact.name': string;
  'contact.email': string;
  'contact.phone': string;
  'contact.message': string;
  'contact.send': string;
  'contact.whatsapp': string;
  'contact.hours.title': string;
  'contact.hours.weekdays': string;
  'contact.hours.weekend': string;
  'contact.success': string;
  'footer.tagline': string;
  'footer.rights': string;
  'footer.quicklinks': string;
  'footer.contactinfo': string;
  'documents.title': string;
  'documents.label': string;
  'documents.certs.tab': string;
  'documents.specs.tab': string;
  'documents.certs.subtitle': string;
  'documents.specs.subtitle': string;
  'documents.cert.item': string;
  'documents.spec.item': string;
  'documents.specs.front': string;
  'documents.specs.back': string;
  'documents.eurocerts.tab': string;
  'documents.eurocerts.subtitle': string;
  'documents.eurocert.item': string;
  'documents.eurocerts.notice': string;
  'documents.eurocerts.tagline': string;
}

const en: Translations = {
  'nav.about': 'About',
  'nav.activities': 'Activities',
  'nav.products': 'Products',
  'nav.markets': 'Markets',
  'nav.contact': 'Contact',

  'hero.title': 'AFIA EXPORT',
  'hero.subtitle': 'Specialists in exporting cement and clinker — quality for global markets',
  'hero.cta': 'Discover Our Products',
  'hero.cta2': 'Contact Us',
  'hero.label': 'Algeria · Cement & Clinker Exports',
  'hero.badge1': 'Algerian Origin',
  'hero.badge2': 'FOB Maritime Export',
  'hero.badge3': 'EN 197-1 Certified',

  'about.title': 'About AFIA EXPORT',
  'about.label': 'Who We Are',
  'about.description':
    'AFIA EXPORT is a dynamic company specializing in the export of high-quality cement and clinker, providing reliable supply solutions that meet the needs of international markets. We rely on a blend of quality, expertise, and export efficiency to support construction and infrastructure projects around the world, in accordance with the highest international standards.',

  'about.stat1.number': '3',
  'about.stat1.label': 'Continents Served',
  'about.stat2.number': '10+',
  'about.stat2.label': 'Years of Experience',
  'about.stat3.number': '100%',
  'about.stat3.label': 'Quality Certified',

  'mission.title': 'Our Mission',
  'mission.text':
    'To provide high-quality cement and clinker compliant with international standards, ensuring stability in performance and reliability to meet our clients\' requirements across different markets.',

  'vision.title': 'Our Vision',
  'vision.text':
    'To become a globally leading company in cement and clinker exports, by building long-term partnerships and delivering products that contribute to the development of modern construction projects.',

  'strengths.title': 'Our Strengths',
  'strengths.label': 'Why We Excel',
  'strengths.items': [
    'Continuous product quality improvement',
    'Cement with stable properties and specifications',
    'Effective and reliable export solutions',
    'Meeting large-scale project requirements',
  ],

  'activities.title': 'Our Activities',
  'activities.label': 'What We Do',
  'activities.items': [
    {
      title: 'Cement Export',
      description: 'Export of all types of cement to meet diverse construction needs worldwide.',
    },
    {
      title: 'Clinker Supply',
      description: 'High-quality clinker supply for cement manufacturers and industrial producers.',
    },
    {
      title: 'Bulk & Big Bag Orders',
      description: 'Handling large-volume orders in bulk and big bag formats for major projects.',
    },
    {
      title: 'Flexible Logistics (FOB)',
      description: 'Flexible logistics solutions on FOB basis, adapting to client requirements.',
    },
  ],

  'products.title': 'Our Products',
  'products.label': 'What We Offer',
  'products.cement.tab': 'Cement',
  'products.clinker.tab': 'Clinker',
  'products.cement.title': 'Portland Cement',
  'products.cement.types': ['CEM I 42.5', 'CEM I 52.5', 'Other types on client request'],
  'products.cement.features': [
    'High compressive strength',
    'Consistent quality & specifications',
    'Suitable for all structural uses',
    'Compliant with EN 197-1 standards',
  ],
  'products.clinker.title': 'Clinker',
  'products.clinker.features': [
    'Stable chemical composition',
    'Excellent manufacturing performance',
    'Suitable for large industrial production',
    'Rigorous quality control',
  ],

  'markets.title': 'Our Markets',
  'markets.label': 'Global Reach',
  'markets.expanding': 'Always expanding to new global markets',
  'markets.list': ['Europe', 'Africa', 'Middle East'],
  'markets.europe.desc': 'Supplying premium cement and clinker to European construction markets with strict quality standards.',
  'markets.africa.desc': 'Supporting infrastructure development across the African continent with reliable bulk supply.',
  'markets.middleeast.desc': 'Partnering with major construction groups in the Middle East to fuel rapid urban growth.',

  'whyus.title': 'Why Choose AFIA EXPORT?',
  'whyus.label': 'Our Advantages',
  'whyus.reasons': [
    'Guaranteed high quality',
    'On-time delivery commitment',
    'Competitive pricing',
    'International export expertise',
    'Long-term partnerships',
  ],

  'contact.title': 'Get In Touch',
  'contact.label': 'Contact Us',
  'contact.name': 'Full Name',
  'contact.email': 'Email Address',
  'contact.phone': 'Phone (optional)',
  'contact.message': 'Your Message',
  'contact.send': 'Send Message',
  'contact.whatsapp': 'Chat on WhatsApp',
  'contact.hours.title': 'Business Hours',
  'contact.hours.weekdays': 'Mon – Fri: 8:00 AM – 6:00 PM',
  'contact.hours.weekend': 'Sat: 9:00 AM – 1:00 PM',
  'contact.success': 'Message sent! We will get back to you shortly.',

  'footer.tagline': 'Quality Cement & Clinker — Exported Worldwide from Algeria.',
  'footer.rights': '© 2026 AFIA EXPORT. All rights reserved.',
  'footer.quicklinks': 'Quick Links',
  'footer.contactinfo': 'Contact Info',

  'documents.title': 'Documents',
  'documents.label': 'AFIA EXPORT',
  'documents.certs.tab': 'Certifications',
  'documents.specs.tab': 'Technical Specifications',
  'documents.certs.subtitle': 'Quality & Compliance Certificates',
  'documents.specs.subtitle': 'Technical Specification Sheets',
  'documents.cert.item': 'Certificate',
  'documents.spec.item': 'Technical Specification',
  'documents.specs.front': 'Front',
  'documents.specs.back': 'Back',

  'documents.eurocerts.tab': 'European Certifications',
  'documents.eurocerts.subtitle': 'European Conformity & Quality Certificates',
  'documents.eurocert.item': 'European Certificate',
  'documents.eurocerts.notice': 'All CE certifications displayed apply to the respective cement products and are issued by the manufacturing plants in compliance with EN 197-1 European standards.',
  'documents.eurocerts.tagline': 'Our cement is sourced from certified manufacturers compliant with European standards (EN 197-1) and CE marking.',
};

const fr: Translations = {
  'nav.about': 'À Propos',
  'nav.activities': 'Activités',
  'nav.products': 'Produits',
  'nav.markets': 'Marchés',
  'nav.contact': 'Contact',

  'hero.title': 'AFIA EXPORT',
  'hero.subtitle': 'Spécialistes de l\'exportation de ciment et de clinker — la qualité pour les marchés mondiaux',
  'hero.cta': 'Découvrir Nos Produits',
  'hero.cta2': 'Nous Contacter',
  'hero.label': 'Algérie · Export Ciment & Clinker',
  'hero.badge1': 'Origine Algérienne',
  'hero.badge2': 'Export Maritime FOB',
  'hero.badge3': 'Certifié EN 197-1',

  'about.title': 'À Propos d\'AFIA EXPORT',
  'about.label': 'Qui Sommes-Nous',
  'about.description':
    'AFIA EXPORT est une entreprise dynamique spécialisée dans l\'exportation de ciment et de clinker de haute qualité, offrant des solutions d\'approvisionnement fiables répondant aux besoins des marchés internationaux. Nous nous appuyons sur un mélange de qualité, d\'expertise et d\'efficacité d\'exportation pour soutenir des projets de construction et d\'infrastructure à travers le monde, conformément aux normes internationales les plus élevées.',

  'about.stat1.number': '3',
  'about.stat1.label': 'Continents Desservis',
  'about.stat2.number': '10+',
  'about.stat2.label': 'Années d\'Expérience',
  'about.stat3.number': '100%',
  'about.stat3.label': 'Certifié Qualité',

  'mission.title': 'Notre Mission',
  'mission.text':
    'Fournir du ciment et du clinker de haute qualité conformes aux normes internationales, en garantissant la stabilité des performances et la fiabilité pour répondre aux exigences de nos clients sur différents marchés.',

  'vision.title': 'Notre Vision',
  'vision.text':
    'Devenir une entreprise de premier plan mondial dans l\'exportation de ciment et de clinker, en construisant des partenariats à long terme et en livrant des produits qui contribuent au développement de projets de construction modernes.',

  'strengths.title': 'Nos Points Forts',
  'strengths.label': 'Pourquoi Nous Excellons',
  'strengths.items': [
    'Amélioration continue de la qualité des produits',
    'Ciment aux propriétés et spécifications stables',
    'Solutions d\'exportation efficaces et fiables',
    'Satisfaction des besoins des grands projets',
  ],

  'activities.title': 'Nos Activités',
  'activities.label': 'Ce Que Nous Faisons',
  'activities.items': [
    {
      title: 'Export de Ciment',
      description: 'Exportation de tous types de ciment pour répondre aux divers besoins de construction dans le monde.',
    },
    {
      title: 'Fourniture de Clinker',
      description: 'Fourniture de clinker de haute qualité pour les fabricants de ciment et les producteurs industriels.',
    },
    {
      title: 'Commandes Vrac & Big Bag',
      description: 'Traitement des commandes en grande quantité en vrac et en big bag pour les grands projets.',
    },
    {
      title: 'Logistique Flexible (FOB)',
      description: 'Solutions logistiques flexibles sur base FOB, adaptées aux exigences des clients.',
    },
  ],

  'products.title': 'Nos Produits',
  'products.label': 'Ce Que Nous Offrons',
  'products.cement.tab': 'Ciment',
  'products.clinker.tab': 'Clinker',
  'products.cement.title': 'Ciment Portland',
  'products.cement.types': ['CEM I 42.5', 'CEM I 52.5', 'Autres types sur demande'],
  'products.cement.features': [
    'Haute résistance à la compression',
    'Qualité et spécifications constantes',
    'Convient à tous les usages structuraux',
    'Conforme aux normes EN 197-1',
  ],
  'products.clinker.title': 'Clinker',
  'products.clinker.features': [
    'Composition chimique stable',
    'Excellentes performances de fabrication',
    'Adapté à la grande production industrielle',
    'Contrôle qualité rigoureux',
  ],

  'markets.title': 'Nos Marchés',
  'markets.label': 'Rayonnement Mondial',
  'markets.expanding': 'En expansion permanente vers de nouveaux marchés mondiaux',
  'markets.list': ['Europe', 'Afrique', 'Moyen-Orient'],
  'markets.europe.desc': 'Fourniture de ciment et clinker de qualité supérieure aux marchés de construction européens selon des normes strictes.',
  'markets.africa.desc': 'Soutien au développement des infrastructures sur le continent africain avec un approvisionnement en vrac fiable.',
  'markets.middleeast.desc': 'Partenariat avec de grands groupes de construction au Moyen-Orient pour soutenir une croissance urbaine rapide.',

  'whyus.title': 'Pourquoi Choisir AFIA EXPORT ?',
  'whyus.label': 'Nos Avantages',
  'whyus.reasons': [
    'Haute qualité garantie',
    'Engagement de livraison ponctuelle',
    'Prix compétitifs',
    'Expertise en exportation internationale',
    'Partenariats à long terme',
  ],

  'contact.title': 'Contactez-Nous',
  'contact.label': 'Nous Joindre',
  'contact.name': 'Nom Complet',
  'contact.email': 'Adresse Email',
  'contact.phone': 'Téléphone (optionnel)',
  'contact.message': 'Votre Message',
  'contact.send': 'Envoyer le Message',
  'contact.whatsapp': 'Discuter sur WhatsApp',
  'contact.hours.title': 'Horaires d\'Ouverture',
  'contact.hours.weekdays': 'Lun – Ven : 8h00 – 18h00',
  'contact.hours.weekend': 'Sam : 9h00 – 13h00',
  'contact.success': 'Message envoyé ! Nous vous répondrons dans les plus brefs délais.',

  'footer.tagline': 'Ciment & Clinker de Qualité — Exportés dans le Monde Entier depuis l\'Algérie.',
  'footer.rights': '© 2026 AFIA EXPORT. Tous droits réservés.',
  'footer.quicklinks': 'Liens Rapides',
  'footer.contactinfo': 'Coordonnées',

  'documents.title': 'Documents',
  'documents.label': 'AFIA EXPORT',
  'documents.certs.tab': 'Certifications',
  'documents.specs.tab': 'Spécifications Techniques',
  'documents.certs.subtitle': 'Certificats Qualité & Conformité',
  'documents.specs.subtitle': 'Fiches de Spécifications Techniques',
  'documents.cert.item': 'Certificat',
  'documents.spec.item': 'Spécification Technique',
  'documents.specs.front': 'Recto',
  'documents.specs.back': 'Verso',

  'documents.eurocerts.tab': 'Certifications Européennes',
  'documents.eurocerts.subtitle': 'Certificats Européens de Conformité & Qualité',
  'documents.eurocert.item': 'Certificat Européen',
  'documents.eurocerts.notice': 'Toutes les certifications CE présentées s\'appliquent aux produits cimentiers concernés et sont délivrées par les usines de fabrication en conformité avec les normes européennes EN 197-1.',
  'documents.eurocerts.tagline': 'Notre ciment est approvisionné auprès de fabricants certifiés conformes aux normes européennes (EN 197-1) et au marquage CE.',
};

const ar: Translations = {
  'nav.about': 'من نحن',
  'nav.activities': 'أنشطتنا',
  'nav.products': 'منتجاتنا',
  'nav.markets': 'الأسواق',
  'nav.contact': 'اتصل بنا',

  'hero.title': 'AFIA EXPORT',
  'hero.subtitle': 'متخصصون في تصدير الأسمنت والكلنكر — جودة للأسواق العالمية',
  'hero.cta': 'اكتشف منتجاتنا',
  'hero.cta2': 'تواصل معنا',
  'hero.label': 'الجزائر · صادرات الأسمنت والكلينكر',
  'hero.badge1': 'منشأ جزائري',
  'hero.badge2': 'تصدير بحري FOB',
  'hero.badge3': 'معتمد EN 197-1',

  'about.title': 'عن شركة AFIA EXPORT',
  'about.label': 'من نحن',
  'about.description':
    'شركة AFIA EXPORT هي شركة ديناميكية متخصصة في تصدير الأسمنت والكلينكر عالي الجودة، حيث نوفر حلول توريد موثوقة تلبي احتياجات الأسواق الدولية. نعتمد على مزيج من الجودة، الخبرة، والكفاءة في التصدير لدعم مشاريع البناء والبنية التحتية حول العالم، وفق أعلى المعايير العالمية.',

  'about.stat1.number': '٣',
  'about.stat1.label': 'قارات تخدمها',
  'about.stat2.number': '+١٠',
  'about.stat2.label': 'سنوات من الخبرة',
  'about.stat3.number': '١٠٠٪',
  'about.stat3.label': 'معتمد الجودة',

  'mission.title': 'مهمتنا',
  'mission.text':
    'توفير أسمنت وكلينكر عالي الجودة مطابق للمواصفات الدولية، مع ضمان الاستقرار في الأداء والموثوقية لتلبية متطلبات عملائنا في مختلف الأسواق.',

  'vision.title': 'رؤيتنا',
  'vision.text':
    'أن نصبح من الشركات الرائدة عالميًا في تصدير الأسمنت والكلينكر، من خلال بناء شراكات طويلة الأمد وتقديم منتجات تساهم في تطوير مشاريع البناء الحديثة.',

  'strengths.title': 'نقاط قوتنا',
  'strengths.label': 'لماذا نتميز',
  'strengths.items': [
    'تحسين مستمر في جودة المنتجات',
    'توفير أسمنت بثبات عالي في الخصائص والمواصفات',
    'تقديم حلول تصدير فعالة وموثوقة',
    'تلبية احتياجات المشاريع الكبرى',
  ],

  'activities.title': 'أنشطتنا',
  'activities.label': 'ماذا نقدم',
  'activities.items': [
    {
      title: 'تصدير الأسمنت',
      description: 'تصدير جميع أنواع الأسمنت لتلبية احتياجات البناء المتنوعة في جميع أنحاء العالم.',
    },
    {
      title: 'توريد الكلينكر',
      description: 'توريد الكلينكر عالي الجودة لمصنّعي الأسمنت والمنتجين الصناعيين.',
    },
    {
      title: 'الطلبات الكبيرة (Bulk & Big Bag)',
      description: 'تلبية الطلبات بالجملة وفي أكياس كبيرة للمشاريع الكبرى.',
    },
    {
      title: 'حلول لوجستية مرنة (FOB)',
      description: 'حلول لوجستية مرنة بنظام FOB فقط، وفق متطلبات العميل.',
    },
  ],

  'products.title': 'منتجاتنا',
  'products.label': 'ما نقدمه',
  'products.cement.tab': 'الأسمنت',
  'products.clinker.tab': 'الكلينكر',
  'products.cement.title': 'أسمنت بورتلاند',
  'products.cement.types': ['CEM I 42.5', 'CEM I 52.5', 'أنواع أخرى حسب طلب العميل'],
  'products.cement.features': [
    'مقاومة ضغط عالية',
    'جودة ومواصفات ثابتة',
    'مناسب لجميع الاستخدامات الإنشائية',
    'متوافق مع معايير EN 197-1',
  ],
  'products.clinker.title': 'الكلينكر',
  'products.clinker.features': [
    'تركيبة كيميائية مستقرة',
    'أداء تصنيعي ممتاز',
    'مناسب للإنتاج الصناعي الكبير',
    'رقابة جودة صارمة',
  ],

  'markets.title': 'أسواقنا',
  'markets.label': 'انتشار عالمي',
  'markets.expanding': 'نتوسع باستمرار نحو أسواق عالمية جديدة',
  'markets.list': ['أوروبا', 'إفريقيا', 'الشرق الأوسط'],
  'markets.europe.desc': 'توفير الأسمنت والكلينكر عالي الجودة لأسواق البناء الأوروبية وفق معايير صارمة.',
  'markets.africa.desc': 'دعم تطوير البنية التحتية في القارة الأفريقية بإمدادات موثوقة بالجملة.',
  'markets.middleeast.desc': 'الشراكة مع كبرى مجموعات البناء في الشرق الأوسط لدعم النمو العمراني السريع.',

  'whyus.title': 'لماذا تختار AFIA EXPORT؟',
  'whyus.label': 'مزاياها',
  'whyus.reasons': [
    'جودة عالية مضمونة',
    'التزام بالمواعيد',
    'أسعار تنافسية',
    'خبرة في التصدير الدولي',
    'شراكات طويلة الأمد',
  ],

  'contact.title': 'تواصل معنا',
  'contact.label': 'اتصل بنا',
  'contact.name': 'الاسم الكامل',
  'contact.email': 'البريد الإلكتروني',
  'contact.phone': 'الهاتف (اختياري)',
  'contact.message': 'رسالتك',
  'contact.send': 'إرسال الرسالة',
  'contact.whatsapp': 'تحدث عبر WhatsApp',
  'contact.hours.title': 'ساعات العمل',
  'contact.hours.weekdays': 'الإثنين – الجمعة: ٨:٠٠ ص – ٦:٠٠ م',
  'contact.hours.weekend': 'السبت: ٩:٠٠ ص – ١:٠٠ م',
  'contact.success': 'تم إرسال رسالتك! سنرد عليك في أقرب وقت ممكن.',

  'footer.tagline': 'أسمنت وكلينكر عالي الجودة — مُصدَّر إلى العالم من الجزائر.',
  'footer.rights': '© ٢٠٢٦ AFIA EXPORT. جميع الحقوق محفوظة.',
  'footer.quicklinks': 'روابط سريعة',
  'footer.contactinfo': 'معلومات الاتصال',

  'documents.title': 'الوثائق',
  'documents.label': 'AFIA EXPORT',
  'documents.certs.tab': 'شهادات الاعتماد',
  'documents.specs.tab': 'المواصفات التقنية',
  'documents.certs.subtitle': 'شهادات الجودة والامتثال',
  'documents.specs.subtitle': 'بيانات المواصفات التقنية',
  'documents.cert.item': 'شهادة',
  'documents.spec.item': 'مواصفة تقنية',
  'documents.specs.front': 'الوجه الأمامي',
  'documents.specs.back': 'الوجه الخلفي',

  'documents.eurocerts.tab': 'الشهادات الأوروبية',
  'documents.eurocerts.subtitle': 'شهادات المطابقة والجودة الأوروبية',
  'documents.eurocert.item': 'شهادة أوروبية',
  'documents.eurocerts.notice': 'جميع شهادات CE المعروضة تنطبق على منتجات الأسمنت المعنية، وتصدر عن مصانع التصنيع امتثالاً للمعايير الأوروبية EN 197-1.',
  'documents.eurocerts.tagline': 'يتم توريد أسمنتنا من مصنّعين حاصلين على شهادات مطابقة للمعايير الأوروبية (EN 197-1) وعلامة CE.',
};

export const translations: Record<Lang, Translations> = { en, fr, ar };

export function useTranslation(lang: Lang) {
  const t = translations[lang];
  return {
    t: (key: keyof Translations): string => {
      const val = t[key];
      return typeof val === 'string' ? val : '';
    },
    tArr: (key: keyof Translations): string[] => {
      const val = t[key];
      return Array.isArray(val) ? (val as string[]) : [];
    },
    tActivities: (): ActivityItem[] => {
      return t['activities.items'] as ActivityItem[];
    },
  };
}
