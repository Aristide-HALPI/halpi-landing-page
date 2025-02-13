import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { 
  UserCircle2, 
  Lightbulb, 
  ArrowUpCircle, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Brain, 
  Clock, 
  Settings, 
  RefreshCw, 
  Timer, 
  TrendingUp, 
  Smile, 
  CheckCircle
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

function App() {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  const languages = {
    fr: { name: 'Français', flag: '🇫🇷' },
    en: { name: 'English', flag: '🇬🇧' },
    nl: { name: 'Nederlands', flag: '🇳🇱' }
  } as const;

  type LanguageKey = keyof typeof languages;
  const [currentLanguage, setCurrentLanguage] = useState<LanguageKey>('fr');

  const translations = {
    fr: {
      hero: {
        title: "BOOSTE TES ÉTUDES",
        subtitle: "ET TA RÉUSSITE",
        withHalpi: "Avec HALPI c'est",
        cta: "Découvrir HALPI"
      },
      coach: {
        title: "Ton coach personnel pour réussir tes études",
        description1: "HALPI est bien plus qu'un simple outil : c'est ton professeur particulier conçu pour t'accompagner vers la réussite.",
        description2: "Que tu sois en licence, master, à l'université, en prépa ou en grande école,",
        description3: "HALPI est pensé sur mesure pour t'aider à atteindre tes objectifs."
      },
      benefits: {
        title: "Pourquoi choisir HALPI ?",
        items: [
          {
            title: "Des meilleures notes, sans t'épuiser",
            content: "Des activités validées par les neurosciences t'aident à te focaliser sur l'essentiel et à apprendre efficacement, sans y passer des heures."
          },
          {
            title: "Moins de stress, plus de sérénité",
            content: "Halpi te guide pas à pas pour que tu n'aies plus à douter de la qualité de tes révisions, et que tu puisses arriver le jour de l'examen totalement serein."
          },
          {
            title: "Dites adieu à la procrastination",
            content: "Des étapes claires et des rappels intelligents t'aident à avancer un peu chaque jour, pour ne plus jamais tout apprendre à la dernière minute."
          }
        ],
        sectionTitle: "Les avantages de HALPI"
      },
      path: {
        title: "Le chemin vers la réussite",
        steps: [
          {
            title: "1. Importe tes cours",
            content: "Dépose tes cours (PDF, Word, etc.), partage ton emploi du temps et tes dates d'examens. HALPI apprend à te connaître pour te proposer un parcours adapté à tes besoins et à ton rythme."
          },
          {
            title: "2. Suis ton programme personnalisé",
            content: "HALPI génère automatiquement un programme d'apprentissage avec un planning détaillé et des activités ciblées. Tout est conçu pour t'aider à progresser efficacement et sans perte de temps."
          },
          {
            title: "3. Progresse et réussis",
            content: "Suis ta progression en temps réel et gagne en confiance pas à pas. Repère et corrige tes lacunes immédiatement avec l'IA, pour arriver parfaitement préparé(e) le jour de l'examen."
          }
        ]
      },
      carousel: {
        title: "Pourquoi choisir HALPI ?",
        items: [
          {
            title: "Moins de temps d'étude, plus de résultats",
            content: "En optimisant chaque minute passée à réviser, HALPI te libère du temps pour tes loisirs, ton job étudiant ou simplement du repos. Apprends mieux sans sacrifier ta vie sociale et sans culpabiliser durant tes temps libres.",
            keyword: "EFFICACE",
            icon: "Timer"
          },
          {
            title: "Une IA réellement sur-mesure",
            content: "Contrairement aux solutions standardisées, HALPI tient compte de TES cours, TES échéances et TON niveau. Tu as droit à un parcours personnalisé, qui s'ajuste automatiquement à tes progrès.",
            keyword: "PERSONNALISÉ",
            icon: "Settings"
          },
          {
            title: "Mise à jour continue de tes activités",
            content: "En fonction de ton avancée, de tes difficultés ou de tes réussites, ton planning et tes exercices se réajustent en temps réel. Ne perds plus de temps à planifier toi-même tes séances d'étude !",
            keyword: "ADAPTATIF",
            icon: "RefreshCw"
          },
          {
            title: "Basé sur les neurosciences",
            content: "Chaque activité est conçue selon des principes reconnus (mémorisation espacée, apprentissage actif…) pour booster ta rétention et ta compréhension.",
            keyword: "SCIENCE",
            icon: "Brain"
          },
          {
            title: 'Un "professeur particulier" disponible 24h/24',
            content: "Plus besoin de jongler avec des horaires fixes : HALPI t'accompagne quand tu en as besoin, même à minuit avant un examen. Tu gères ton planning d'étude sans aucune contrainte.",
            keyword: "DISPONIBLE",
            icon: "Clock"
          }
        ]
      },
      faq: {
        title: "Foire aux questions",
        items: [
          {
            question: "Pour quel type de cours HALPI fonctionne-t-il ?",
            answer: "HALPI est conçu pour s'adapter à un large éventail de disciplines : Droit, Psychologie, sciences, économie, etc. Tant que tu peux déposer tes supports (PDF, Word, diapositives…), l'IA peut analyser tes contenus et proposer des activités de révision adaptées."
          },
          {
            question: "Est-ce vraiment différent d'une plateforme de cours classique ?",
            answer: "Oui. HALPI ne se contente pas de lister des documents ou des vidéos : il construit un planning de révision sur mesure et des exercices ciblés, puis suit ta progression en temps réel pour t'aider à combler tes lacunes."
          },
          {
            question: "Et si j'ai un emploi du temps chargé ou un job étudiant ?",
            answer: "Pas de souci : tu peux indiquer tes créneaux disponibles et tes dates d'examen, et HALPI planifie automatiquement des séances de révision optimisées. Si tes horaires changent, la plateforme s'adapte immédiatement."
          },
          {
            question: "Ai-je besoin d'acheter du matériel spécifique ?",
            answer: "Aucunement. Un ordinateur ou une tablette suffisent pour accéder à HALPI, où que tu sois et quand tu veux."
          },
          {
            question: "Comment l'IA sait-elle ce que je dois travailler en priorité ?",
            answer: "Dès que tu importes tes cours et renseignes tes dates d'examens, l'IA analyse le contenu et calcule les chapitres, notions ou matières les plus importants. Elle prend également en compte tes performances lors des exercices pour affiner ton parcours."
          },
          {
            question: "Combien ça coûte ?",
            answer: "Durant la version bêta, l'application est entièrement gratuite ! Profites-en pour tester toutes les fonctionnalités sans aucun frais."
          },
          {
            question: "Est-ce que j'ai accès à une aide humaine ?",
            answer: "Oui. Pendant la bêta, chaque utilisateur est suivi par un coach pédagogique pour t'accompagner dans l'utilisation de la plateforme et pour suivre ton apprentissage."
          }
        ]
      },
      cta: {
        title: "Prêt(e) à passer au niveau supérieur ?",
        description: "Rejoins HALPI dès aujourd'hui et découvre comment étudier moins pour réussir plus.",
        button: "Je m'inscris gratuitement"
      }
    },
    en: {
      hero: {
        title: "BOOST YOUR STUDIES",
        subtitle: "AND YOUR SUCCESS",
        withHalpi: "With HALPI it's",
        cta: "Discover HALPI"
      },
      coach: {
        title: "Your personal coach to succeed in your studies",
        description1: "HALPI is much more than just a tool: it's your private tutor designed to guide you towards success.",
        description2: "Whether you're in college, university, or graduate school,",
        description3: "HALPI is tailored to help you achieve your goals."
      },
      benefits: {
        title: "Why choose HALPI?",
        items: [
          {
            title: "Better grades, without exhaustion",
            content: "Neuroscience-validated activities help you focus on what's essential and learn effectively, without spending endless hours."
          },
          {
            title: "Less stress, more serenity",
            content: "Halpi guides you step by step so you no longer have to doubt the quality of your revisions, and you can arrive on exam day feeling completely confident."
          },
          {
            title: "Say goodbye to procrastination",
            content: "Clear steps and smart reminders help you progress a little each day, so you never have to learn everything at the last minute again."
          }
        ],
        sectionTitle: "The benefits of HALPI"
      },
      path: {
        title: "The path to success",
        steps: [
          {
            title: "1. Import your courses",
            content: "Upload your courses (PDF, Word, etc.), share your schedule and exam dates. HALPI gets to know you to offer a path adapted to your needs and pace."
          },
          {
            title: "2. Follow your personalized program",
            content: "HALPI automatically generates a learning program with a detailed schedule and targeted activities. Everything is designed to help you progress efficiently and without wasting time."
          },
          {
            title: "3. Progress and succeed",
            content: "Track your progress in real-time and gain confidence step by step. Spot and correct your gaps immediately with AI to arrive perfectly prepared on exam day."
          }
        ]
      },
      carousel: {
        title: "Why choose HALPI?",
        items: [
          {
            title: "Less study time, better results",
            content: "By optimizing every minute spent studying, HALPI frees up time for your hobbies, student job, or simply rest. Learn better without sacrificing your social life or feeling guilty during your free time.",
            keyword: "EFFICIENT",
            icon: "Timer"
          },
          {
            title: "Truly customized AI",
            content: "Unlike standardized solutions, HALPI takes into account YOUR courses, YOUR deadlines, and YOUR level. You get a personalized journey that automatically adjusts to your progress.",
            keyword: "PERSONALIZED",
            icon: "Settings"
          },
          {
            title: "Continuous activity updates",
            content: "Based on your progress, difficulties, or successes, your schedule and exercises readjust in real-time. Stop wasting time planning your study sessions yourself!",
            keyword: "ADAPTIVE",
            icon: "RefreshCw"
          },
          {
            title: "Based on neuroscience",
            content: "Each activity is designed according to recognized principles (spaced repetition, active learning...) to boost your retention and understanding.",
            keyword: "SCIENCE",
            icon: "Brain"
          },
          {
            title: 'A 24/7 available "private tutor"',
            content: "No more juggling with fixed schedules: HALPI supports you when you need it, even at midnight before an exam. Manage your study schedule without any constraints.",
            keyword: "AVAILABLE",
            icon: "Clock"
          }
        ]
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "What type of courses does HALPI work for?",
            answer: "HALPI is designed to adapt to a wide range of disciplines: Law, Psychology, sciences, economics, etc. As long as you can upload your course materials (PDF, Word, slides...), the AI can analyze your content and propose adapted revision activities."
          },
          {
            question: "Is it really different from a classic course platform?",
            answer: "Yes. HALPI doesn't just list documents or videos: it builds a customized revision plan and targeted exercises, then follows your progress in real-time to help you fill your knowledge gaps."
          },
          {
            question: "What if I have a busy schedule or a student job?",
            answer: "No problem: you can indicate your available time slots and exam dates, and HALPI automatically plans optimized revision sessions. If your schedule changes, the platform adapts immediately."
          },
          {
            question: "Do I need to buy specific equipment?",
            answer: "Not at all. A computer or tablet is enough to access HALPI, wherever you are and whenever you want."
          },
          {
            question: "How does the AI know what I should work on first?",
            answer: "As soon as you upload your courses and enter your exam dates, the AI analyzes the content and calculates the most important chapters, notions, or subjects. It also takes into account your performance during exercises to refine your journey."
          },
          {
            question: "How much does it cost?",
            answer: "During the beta version, the application is entirely free! Take advantage of it to test all the features without any cost."
          },
          {
            question: "Do I have access to human support?",
            answer: "Yes. During the beta, each user is followed by a pedagogical coach to accompany you in using the platform and to follow your learning."
          }
        ]
      },
      cta: {
        title: "Ready to level up?",
        description: "Join HALPI today and discover how to study less to achieve more.",
        button: "Sign up for free"
      }
    },
    nl: {
      hero: {
        title: "BOOST JE STUDIE",
        subtitle: "EN JE SUCCES",
        withHalpi: "Met HALPI is het",
        cta: "Ontdek HALPI"
      },
      coach: {
        title: "Je persoonlijke coach voor studiesucces",
        description1: "HALPI is veel meer dan een hulpmiddel: het is je privédocent die je begeleidt naar succes.",
        description2: "Of je nu aan de universiteit, hogeschool of een andere opleiding studeert,",
        description3: "HALPI is op maat gemaakt om je te helpen je doelen te bereiken."
      },
      benefits: {
        title: "Waarom HALPI kiezen?",
        items: [
          {
            title: "Betere cijfers, zonder uitputting",
            content: "Neurowetenschappelijk gevalideerde activiteiten helpen je te focussen op wat essentieel is en effectief te leren, zonder eindeloze uren te besteden."
          },
          {
            title: "Minder stress, meer sereniteit",
            content: "Halpi begeleidt je stap voor stap zodat je niet meer hoeft te twijfelen aan de kwaliteit van je herhalingen, en je vol vertrouwen op de examendag kunt verschijnen."
          },
          {
            title: "Zeg vaarwel tegen uitstelgedrag",
            content: "Duidelijke stappen en slimme herinneringen helpen je elke dag een beetje vooruit te komen, zodat je nooit meer alles op het laatste moment hoeft te leren."
          }
        ],
        sectionTitle: "De voordelen van HALPI"
      },
      path: {
        title: "De weg naar succes",
        steps: [
          {
            title: "1. Importeer je cursussen",
            content: "Upload je cursussen (PDF, Word, etc.), deel je rooster en examendatums. HALPI leert je kennen om een traject aan te bieden dat is aangepast aan jouw behoeften en tempo."
          },
          {
            title: "2. Volg je gepersonaliseerde programma",
            content: "HALPI genereert automatisch een leerprogramma met een gedetailleerd schema en gerichte activiteiten. Alles is ontworpen om je efficiënt te helpen vooruitgaan zonder tijd te verspillen."
          },
          {
            title: "3. Vorder en slaag",
            content: "Volg je voortgang in realtime en win stap voor stap aan vertrouwen. Spoor lacunes onmiddellijk op en corrigeer ze met AI om perfect voorbereid op het examen te verschijnen."
          }
        ]
      },
      carousel: {
        title: "Waarom HALPI kiezen?",
        items: [
          {
            title: "Minder studietijd, betere resultaten",
            content: "Door elke studieminuut te optimaliseren, maakt HALPI tijd vrij voor je hobby's, bijbaan of gewoon rust. Leer beter zonder je sociale leven op te offeren of je schuldig te voelen tijdens je vrije tijd.",
            keyword: "EFFICIËNT",
            icon: "Timer"
          },
          {
            title: "Echt gepersonaliseerde AI",
            content: "In tegenstelling tot gestandaardiseerde oplossingen houdt HALPI rekening met JOUW vakken, JOUW deadlines en JOUW niveau. Je krijgt een gepersonaliseerd traject dat zich automatisch aanpast aan je voortgang.",
            keyword: "PERSOONLIJK",
            icon: "Settings"
          },
          {
            title: "Continue activiteiten updates",
            content: "Op basis van je voortgang, moeilijkheden of successen passen je schema en oefeningen zich in realtime aan. Stop met het zelf plannen van je studiesessies!",
            keyword: "ADAPTIEF",
            icon: "RefreshCw"
          },
          {
            title: "Gebaseerd op neurowetenschap",
            content: "Elke activiteit is ontworpen volgens erkende principes (gespreide herhaling, actief leren…) om je retentie en begrip te verbeteren.",
            keyword: "WETENSCHAP",
            icon: "Brain"
          },
          {
            title: 'Een 24/7 beschikbare "privéleraar"',
            content: "Geen gedoe meer met vaste tijden: HALPI ondersteunt je wanneer je het nodig hebt, zelfs om middernacht voor een tentamen. Tu geres je studieschema zonder beperkingen.",
            keyword: "BESCHIKBAAR",
            icon: "Clock"
          }
        ]
      },
      faq: {
        title: "Veelgestelde vragen",
        items: [
          {
            question: "Voor welk type cursussen werkt HALPI?",
            answer: "HALPI is ontworpen om zich aan te passen aan een breed scala aan disciplines: Recht, Psychologie, wetenschappen, economie, etc. Zolang je je cursusmateriaal kunt uploaden (PDF, Word, slides...), kan de AI je inhoud analyseren en aangepaste herhalingactiviteiten voorstellen."
          },
          {
            question: "Is het echt anders dan een klassieke cursusplatform?",
            answer: "Ja. HALPI beperkt zich niet tot het opsommen van documenten of video's: het bouwt een aangepast herhalingplan en gerichte oefeningen, en volgt vervolgens je voortgang in real-time om je kennislacunes te helpen opvullen."
          },
          {
            question: "En als ik een druk schema of een studentenbaan heb?",
            answer: "Geen probleem: je kunt je beschikbare tijdsblokken en examendata aangeven, en HALPI plant automatisch geoptimaliseerde herhalingssessies. Als je schema verandert, past de platform zich onmiddellijk aan."
          },
          {
            question: "Moet ik specifieke apparatuur kopen?",
            answer: "Nee. Een computer of tablet is voldoende om toegang te krijgen tot HALPI, waar je ook bent en wanneer je maar wilt."
          },
          {
            question: "Hoe weet de AI wat ik eerst moet doen?",
            answer: "Dès que je je cursussen uploadt en je examendata invoert, analyseert de AI de inhoud en berekent de belangrijkste hoofdstukken, noties of onderwerpen. Het houdt ook rekening met je prestaties tijdens oefeningen om je reis te verfijnen."
          },
          {
            question: "Hoeveel kost het?",
            answer: "Tijdens de bètaversie is de applicatie helemaal gratis! Maak gebruik van het om alle functies zonder enige kosten te testen."
          },
          {
            question: "Heb ik toegang tot menselijke ondersteuning?",
            answer: "Ja. Tijdens de bèta wordt elke gebruiker begeleid door een pedagogische coach om je te begeleiden bij het gebruik van de platform en om je leerproces te volgen."
          }
        ]
      },
      cta: {
        title: "Klaar om een niveau hoger te gaan?",
        description: "Word vandaag lid van HALPI en ontdek hoe je minder kunt studeren om meer te bereiken.",
        button: "Gratis aanmelden"
      }
    }
  } as const;

  const typeAnimationSequences = {
    fr: [
      "moins de stress",
      2000,
      "plus de résultats",
      2000,
      "plus de temps libre",
      2000,
      "une méthode infaillible",
      2000,
    ],
    en: [
      "time to destress",
      2000,
      "time for better results",
      2000,
      "time for more freedom",
      2000,
      "a proven method that works",
      2000,
    ],
    nl: [
      "tijd voor minder stress",
      2000,
      "tijd voor betere resultaten",
      2000,
      "tijd voor meer vrijheid",
      2000,
      "een bewezen methode die werkt",
      2000,
    ]
  };

  const carouselItems = translations[currentLanguage]?.carousel?.items || [];

  const iconComponents: Record<string, LucideIcon> = {
    UserCircle2,
    Lightbulb,
    ArrowUpCircle,
    Brain,
    Clock,
    Settings,
    RefreshCw,
    Timer,
    TrendingUp,
    Smile,
    CheckCircle,
    ChevronDown,
    ChevronLeft,
    ChevronRight
  };

  const nextSlide = useCallback(() => {
    if (autoplayEnabled) {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }
  }, [autoplayEnabled]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, currentSlide]);

  const prevSlide = () => {
    setAutoplayEnabled(false);
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoplayEnabled(true);
  };

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full bg-dark-900">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
            className="flex items-center space-x-2 px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
          >
            <span className="text-lg">{languages[currentLanguage].flag}</span>
            <span>{languages[currentLanguage].name}</span>
            <ChevronDown className={`w-4 h-4 transform transition-transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Language Menu */}
          {isLanguageMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
              {Object.entries(languages).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => {
                    setCurrentLanguage(key as LanguageKey);
                    setIsLanguageMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  <span className="text-lg">{value.flag}</span>
                  <span>{value.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#1A2225] to-[#2A3235]">
        {/* Cercles décoratifs */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-[#bd8c0f]/10 blur-3xl hidden md:block"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-[#bd8c0f]/5 blur-2xl hidden md:block"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-24 relative">
          <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
            <div className="flex-1 md:pr-8 text-center md:text-left">
              {/* Titre principal */}
              <div className="space-y-6 md:space-y-8">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-none tracking-tight">
                  H<span className="text-[#bd8c0f]">A</span>LP<span className="text-[#bd8c0f]">I</span>
                </h1>
                <div className="space-y-2 md:space-y-3">
                  <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight md:whitespace-nowrap">
                    {translations[currentLanguage].hero.title}
                  </h2>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-[#bd8c0f] leading-tight tracking-tight">
                    {translations[currentLanguage].hero.subtitle}
                  </h2>
                </div>
                
                {/* Animation des bénéfices */}
                <div className="mt-4">
                  <p className="text-lg md:text-xl text-white">
                    {translations[currentLanguage].hero.withHalpi}{" "}
                    <TypeAnimation
                      key={currentLanguage} 
                      sequence={typeAnimationSequences[currentLanguage]}
                      wrapper="span"
                      speed={50}
                      className="text-[#bd8c0f] font-semibold inline-block min-h-[40px]"
                      repeat={Infinity}
                    />
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 md:mt-10"
              >
                <button className="px-6 py-3 bg-[#bd8c0f] text-white text-base font-semibold rounded-lg hover:bg-[#bd8c0f]/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  {translations[currentLanguage].hero.cta}
                </button>
              </motion.div>
            </div>

            {/* Image à droite */}
            <div className="flex w-full md:w-[600px] items-center justify-center md:justify-end pl-0 md:pl-8 mt-8 md:mt-0">
              <div className="transform scale-90 sm:scale-75 md:scale-90">
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  src="/ttt-removebg-preview.png"
                  alt="Student studying with HALPI"
                  className="max-w-[400px] sm:max-w-[300px] md:max-w-[495px] w-auto h-auto object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Coach Personnel */}
      <section className="bg-[#bd8c0f] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white">
              {translations[currentLanguage].coach.title}
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed text-white">
                {translations[currentLanguage].coach.description1.split(':')[0]}:<br className="hidden md:block" />
                {translations[currentLanguage].coach.description1.split(':')[1].trim()}
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-white">
                {translations[currentLanguage].coach.description2}<br className="hidden md:block" />
                {translations[currentLanguage].coach.description3}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12">
            {translations[currentLanguage].benefits.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {translations[currentLanguage].benefits.items.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center h-full">
                <div className="w-16 h-16 bg-[#fdf6e6] rounded-full flex items-center justify-center mb-4">
                  {index === 0 && <TrendingUp className="w-8 h-8 text-[#bd8c0f]" />}
                  {index === 1 && <Smile className="w-8 h-8 text-[#bd8c0f]" />}
                  {index === 2 && <CheckCircle className="w-8 h-8 text-[#bd8c0f]" />}
                </div>
                <div className="text-center max-w-sm flex flex-col flex-grow">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1A2225] mb-3 min-h-[72px] flex items-center justify-center px-4">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-[#1A2225]/80 leading-relaxed flex-grow px-4">
                    {benefit.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le chemin vers la réussite */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1A2225] to-[#2A3235]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-8 md:mb-16">
            {translations[currentLanguage].path.title}
          </h2>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {translations[currentLanguage].path.steps.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-white rounded-lg p-6 md:p-8 h-full flex flex-col items-center text-center shadow-lg"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-[#1A2225] mb-4 md:mb-6 min-h-[48px] md:min-h-[64px] flex items-center justify-center">
                        {item.title}
                      </h3>
                      <p className="text-base text-[#1A2225]/80 leading-relaxed flex-grow">
                        {item.content}
                      </p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Carousel */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12">
            {translations[currentLanguage].benefits.sectionTitle}
          </h2>

          {/* Feature Navigation */}
          <div className="flex justify-center gap-8 mb-2">
            {carouselItems.map((item, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex flex-col items-center transition-all ${
                  currentSlide === index 
                    ? 'opacity-100 scale-105' 
                    : 'opacity-50 hover:opacity-75'
                }`}
              >
                {(() => {
                  const Icon = iconComponents[item.icon] || Brain;
                  return (
                    <Icon 
                      className={`w-5 h-5 ${
                        currentSlide === index ? 'text-[#bd8c0f]' : 'text-gray-400'
                      }`}
                    />
                  );
                })()}
                <span className={`text-xs font-medium ${
                  currentSlide === index ? 'text-[#bd8c0f]' : 'text-gray-500'
                }`}>
                  {item.keyword}
                </span>
              </button>
            ))}
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-[105%] mx-auto px-16 py-4">
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6 text-[#bd8c0f]" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6 text-[#bd8c0f]" />
            </button>

            {/* Carousel Cards */}
            <div className="overflow-hidden pt-2">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`w-full flex-shrink-0 p-4 transition-opacity duration-500 ${
                      currentSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-[#fdf6e6] rounded-2xl shadow-lg py-10 px-12 flex flex-col items-center text-center max-w-3xl mx-auto border border-gray-200/50 ring-1 ring-gray-100"
                    >
                      {(() => {
                        const Icon = iconComponents[item.icon] || Brain;
                        return <Icon className="w-14 h-14 text-[#bd8c0f]" />;
                      })()}
                      <h4 className="text-[#bd8c0f] font-bold text-lg mb-3">{item.keyword}</h4>
                      <h3 className="text-2xl font-bold text-[#1A2225] mb-6">
                        {item.title}
                      </h3>
                      <p className="text-base text-[#1A2225]/80 leading-relaxed max-w-2xl">
                        {item.content}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-[#1A2225] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-white mb-4">
            {translations[currentLanguage].cta.title}
          </h2>
          <p className="text-base text-white text-2xl mb-8">
            {translations[currentLanguage].cta.description}
          </p>
          <button className="px-8 py-4 bg-[#bd8c0f] text-white text-lg font-semibold rounded-lg hover:bg-[#bd8c0f]/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            {translations[currentLanguage].cta.button}
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 text-center">
            {translations[currentLanguage].faq.title}
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {translations[currentLanguage].faq.items.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-base text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;