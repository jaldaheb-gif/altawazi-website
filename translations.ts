import { Page } from './types';

export const translations = {
  ar: {
    navbar: {
      links: {
        [Page.HOME]: 'الرئيسية',
        [Page.ABOUT]: 'من نحن',
        [Page.SERVICES]: 'خدماتنا',
        [Page.GALLERY]: 'معرض الأعمال',
        [Page.CONTACT]: 'تواصل معنا',
      },
      brandSubtitle: 'للمقاولات',
      menuTitle: 'القائمة الرئيسية'
    },
    hero: {
      subtitle: 'نبني الثقة.. نبني المستقبل',
      titlePrefix: 'مؤسسة التوازي الحديثة',
      titleSuffix: 'للمقاولات',
      description: 'نقدم حلول بناء متكاملة بمعايير هندسية عالمية. من التخطيط الأولي وحتى التسليم النهائي، نحن شركاؤك في النجاح والتميز العمراني.',
      ctaPrimary: 'اطلب عرض سعر',
      ctaSecondary: 'شاهد أعمالنا'
    },
    about: {
      badge: 'عن المؤسسة',
      titlePrefix: 'نحن مؤسسة التوازي الحديثة',
      titleSuffix: 'شريكك الاستراتيجي في البناء',
      description1: 'تأسست مؤسسة التوازي الحديثة للمقاولات برؤية واضحة تهدف إلى إحداث نقلة نوعية في قطاع المقاولات. نجمع بين الخبرة الهندسية العريقة وأحدث تقنيات البناء لنقدم مشاريع تليق بتطلعات عملائنا.',
      description2: 'نفخر بفريقنا المكون من مهندسين وفنيين ذوي كفاءة عالية، يحرصون على أدق التفاصيل لضمان الجودة والسلامة في كل مرحلة من مراحل المشروع. سواء كان مشروعك سكنياً أو تجارياً، نحن هنا لتحويله إلى واقع.',
      imageOverlay: 'التزام بالجودة والمعايير',
      experienceBadge: 'سنوات خبرة',
      stats: {
        projects: 'مشاريع منجزة',
        clients: 'عملاء سعداء',
        experience: 'سنوات خبرة',
        awards: 'جوائز تميز'
      }
    },
    services: {
      subtitle: 'خدماتنا المتميزة',
      title: 'ماذا نقدم لعملائنا؟',
      description: 'نقدم باقة متكاملة من الخدمات الهندسية والإنشائية لتلبية كافة احتياجاتكم تحت سقف واحد.',
      items: {
        general: { title: 'المقاولات العامة', desc: 'تنفيذ مشاريع البناء السكنية والتجارية من الحفر وحتى تسليم المفتاح بأعلى معايير الجودة.' },
        restoration: { title: 'أعمال الترميم', desc: 'تجديد المباني القديمة وإصلاح الهياكل الخرسانية ومعالجة التشققات وتحديث الواجهات.' },
        finishing: { title: 'التشطيبات والديكور', desc: 'أعمال الدهانات، الجبس، الأرضيات، واللمسات الجمالية التي تضفي طابعاً عصرياً للمكان.' },
        design: { title: 'التصميم الهندسي', desc: 'تصميمات معمارية وإنشائية وداخلية مبتكرة تراعي الاستخدام الأمثل للمساحات.' },
        mep: { title: 'الكهرباء والسباكة', desc: 'تأسيس وصيانة شاملة لشبكات الكهرباء والسباكة باستخدام أجود المواد المطابقة للمواصفات.' },
        management: { title: 'إدارة المشاريع', desc: 'إشراف هندسي متكامل ومتابعة دقيقة لسير العمل لضمان الالتزام بالجدول الزمني والميزانية.' }
      }
    },
    gallery: {
      title: 'معرض أعمالنا',
      description: 'نفخر بسجل حافل من المشاريع الناجحة. تصفح بعضاً من أعمالنا التي تعكس التزامنا بالجودة والإتقان.',
      categories: {
        all: 'الكل',
        residential: 'سكني',
        commercial: 'تجاري',
        restoration: 'ترميم',
        decor: 'ديكور'
      }
    },
    contact: {
      title: 'تواصل معنا',
      description: 'جاهزون للبدء في مشروعك القادم؟ تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر.',
      info: {
        phone: 'اتصل بنا',
        email: 'البريد الإلكتروني',
        location: { title: 'موقعنا', address: 'مبنى 7637 | طريق زين العابدين', city: 'الجش | الرمز البريدي 32467' },
        hours: { title: 'ساعات العمل', weekdays: 'الأحد - الخميس: 8:00 ص - 5:00 م', weekend: 'السبت: 9:00 ص - 1:00 م' }
      },
      form: {
        title: 'أرسل لنا رسالة',
        name: 'الاسم الكامل',
        phone: 'رقم الجوال',
        emailLabel: 'البريد الإلكتروني',
        message: 'الرسالة',
        submit: 'إرسال الطلب',
        success: 'شكراً لتواصلك معنا! تم استلام رسالتك وسيتم الرد عليك في أقرب وقت.',
        placeholders: {
          name: 'محمد عبدالله',
          phone: '05xxxxxxxx',
          email: 'example@email.com',
          message: 'كيف يمكننا مساعدتك؟'
        }
      }
    },
    footer: {
      description: 'مؤسسة رائدة في مجال المقاولات العامة، نسعى لتحقيق رؤية عملائنا وبناء مستقبل أفضل بمعايير جودة عالمية.',
      quickLinks: 'روابط سريعة',
      servicesTitle: 'خدماتنا',
      newsletter: {
        title: 'القائمة البريدية',
        description: 'اشترك معنا ليصلك كل جديد عن عروضنا ومشاريعنا.',
        placeholder: 'البريد الإلكتروني',
        button: 'اشترك الآن'
      },
      copyright: 'جميع الحقوق محفوظة ©',
      serviceList: [
        'المقاولات العامة',
        'التشطيبات والديكور',
        'الترميم والصيانة',
        'أعمال العظم',
        'الكهرباء والسباكة'
      ]
    },
    ai: {
      title: 'مستشار البناء الذكي',
      online: 'متصل الآن',
      welcome: 'مرحباً بك في مؤسسة التوازي الحديثة للمقاولات. أنا المساعد الذكي، كيف يمكنني مساعدتك اليوم في مشاريعك القادمة؟',
      placeholder: 'اكتب استفسارك هنا...',
      toggle: 'تحدث مع المستشار',
      error: 'حدث خطأ أثناء الاتصال بالمساعد الذكي.'
    },
    common: {
      tawazi: 'مؤسسة التوازي الحديثة للمقاولات',
      ctaSection: {
        title: 'هل لديك مشروع في ذهنك؟',
        desc: 'دعنا نساعدك في تحويل أفكارك إلى واقع ملموس بأفضل المعايير.',
        btn: 'تواصل معنا الآن'
      }
    }
  },
  en: {
    navbar: {
      links: {
        [Page.HOME]: 'Home',
        [Page.ABOUT]: 'About Us',
        [Page.SERVICES]: 'Services',
        [Page.GALLERY]: 'Gallery',
        [Page.CONTACT]: 'Contact Us',
      },
      brandSubtitle: 'Contracting',
      menuTitle: 'Main Menu'
    },
    hero: {
      subtitle: 'Building Trust.. Building the Future',
      titlePrefix: 'Modern Tawazi',
      titleSuffix: 'Contracting',
      description: 'We provide integrated construction solutions with world-class engineering standards. From initial planning to final delivery, we are your partners in success and urban excellence.',
      ctaPrimary: 'Get a Quote',
      ctaSecondary: 'View Our Work'
    },
    about: {
      badge: 'About Us',
      titlePrefix: 'We are Modern Tawazi',
      titleSuffix: 'Your Strategic Construction Partner',
      description1: 'Modern Tawazi Contracting was established with a clear vision to make a qualitative leap in the contracting sector. We combine deep engineering expertise with the latest construction technologies to deliver projects that meet our clients aspirations.',
      description2: 'We pride ourselves on our team of highly qualified engineers and technicians who pay attention to the finest details to ensure quality and safety at every stage of the project. Whether your project is residential or commercial, we are here to turn it into reality.',
      imageOverlay: 'Commitment to Quality',
      experienceBadge: 'Years Exp.',
      stats: {
        projects: 'Projects Done',
        clients: 'Happy Clients',
        experience: 'Years Experience',
        awards: 'Awards Won'
      }
    },
    services: {
      subtitle: 'Our Premium Services',
      title: 'What We Offer',
      description: 'We offer a comprehensive package of engineering and construction services to meet all your needs under one roof.',
      items: {
        general: { title: 'General Contracting', desc: 'Execution of residential and commercial construction projects from excavation to turnkey with the highest quality standards.' },
        restoration: { title: 'Restoration', desc: 'Renovating old buildings, repairing concrete structures, treating cracks, and updating facades.' },
        finishing: { title: 'Finishing & Decor', desc: 'Paint, gypsum, flooring, and aesthetic touches that add a modern character to the place.' },
        design: { title: 'Engineering Design', desc: 'Innovative architectural, structural, and interior designs that ensure optimal use of spaces.' },
        mep: { title: 'MEP Services', desc: 'Comprehensive installation and maintenance of electrical and plumbing networks using the best materials.' },
        management: { title: 'Project Management', desc: 'Integrated engineering supervision and precise workflow monitoring to ensure adherence to schedule and budget.' }
      }
    },
    gallery: {
      title: 'Our Projects',
      description: 'We are proud of a track record of successful projects. Browse some of our work that reflects our commitment to quality and excellence.',
      categories: {
        all: 'All',
        residential: 'Residential',
        commercial: 'Commercial',
        restoration: 'Restoration',
        decor: 'Decor'
      }
    },
    contact: {
      title: 'Contact Us',
      description: 'Ready to start your next project? Contact us today for a free consultation and quote.',
      info: {
        phone: 'Call Us',
        email: 'Email Us',
        location: { title: 'Our Location', address: 'Building 7637 | Zain Al Abidin Road', city: 'Al Jish | Zip Code 32467' },
        hours: { title: 'Working Hours', weekdays: 'Sun - Thu: 8:00 AM - 5:00 PM', weekend: 'Sat: 9:00 AM - 1:00 PM' }
      },
      form: {
        title: 'Send us a message',
        name: 'Full Name',
        phone: 'Phone Number',
        emailLabel: 'Email Address',
        message: 'Message',
        submit: 'Send Request',
        success: 'Thank you for contacting us! We have received your message and will respond shortly.',
        placeholders: {
          name: 'John Doe',
          phone: '05xxxxxxxx',
          email: 'example@email.com',
          message: 'How can we help you?'
        }
      }
    },
    footer: {
      description: 'A leading establishment in general contracting, striving to achieve our clients vision and build a better future with global quality standards.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Our Services',
      newsletter: {
        title: 'Newsletter',
        description: 'Subscribe to receive updates about our offers and projects.',
        placeholder: 'Email Address',
        button: 'Subscribe'
      },
      copyright: 'All Rights Reserved ©',
      serviceList: [
        'General Contracting',
        'Finishing & Decor',
        'Restoration & Maintenance',
        'Bone Structure',
        'MEP Works'
      ]
    },
    ai: {
      title: 'Smart Construction Consultant',
      online: 'Online Now',
      welcome: 'Welcome to Modern Tawazi Contracting. I am your smart assistant, how can I help you with your upcoming projects today?',
      placeholder: 'Type your inquiry here...',
      toggle: 'Chat with Consultant',
      error: 'An error occurred while connecting to the smart assistant.'
    },
    common: {
      tawazi: 'Modern Tawazi Contracting',
      ctaSection: {
        title: 'Have a project in mind?',
        desc: 'Let us help you turn your ideas into reality with the best standards.',
        btn: 'Contact Us Now'
      }
    }
  }
};