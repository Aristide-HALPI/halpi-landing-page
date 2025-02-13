interface Translations {
  [key: string]: {
    hero: {
      subtitle: string;
      cta: string;
    };
    benefits: {
      title: string;
      items: {
        title: string;
        content: string;
        icon: string;
      }[];
    };
    steps: {
      title: string;
      items: {
        title: string;
        content: string;
      }[];
    };
    allie: {
      title: string;
      content: string;
      cta: string;
    };
    choisir: {
      title: string;
      cta: string;
    };
    faq: {
      title: string;
      items: {
        question: string;
        answer: string;
      }[];
    };
    cta: {
      title: string;
      content: string;
      cta: string;
    };
  };
}

export const translations: Translations = {
  fr: {
    hero: {
      subtitle: "BOOSTE TES ÉTUDES ET TA RÉUSSITE",
      cta: "Découvre comment",
    },
    benefits: {
      title: "Pourquoi choisir HALPI",
      items: [
        {
          title: "PERSONNALISÉ",
          content: "Un parcours entièrement conçu pour toi, adapté à tes cours, ton rythme et tes objectifs.",
          icon: "UserCircle2"
        },
        {
          title: "EFFICACE",
          content: "Apprends mieux en moins de temps : HALPI optimise tes révisions grâce aux neurosciences pour maximiser tes résultats.",
          icon: "Lightbulb"
        },
        {
          title: "ADAPTATIF",
          content: "Ton planning et tes exercices se réajustent automatiquement en fonction de tes progrès ou de tes retards.",
          icon: "ArrowUpCircle"
        }
      ]
    },
    steps: {
      title: "Le chemin vers la réussite",
      items: [
        {
          title: "Parle-nous de tes études",
          content: "Dépose tes cours (PDF, Word, etc.), partage ton emploi du temps et tes dates d'examens. HALPI apprend à te connaître pour te proposer les meilleurs parcours."
        },
        {
          title: "Découvre ton plan de révision sur-mesure",
          content: "HALPI élabore automatiquement un parcours d'apprentissage comprenant un planning d'étude et des activités spécialement adaptées à ton niveau et à tes objectifs."
        },
        {
          title: "Atteins tes objectifs sans stress",
          content: "Grâce au suivi en temps réel de ta progression, tu gagnes en confiance pas à pas. Corrige tes lacunes immédiatement avec l'IA et arrive parfaitement prêt(e) le jour de l'examen."
        }
      ]
    },
    allie: {
      title: "Un allié fiable pour tous les étudiants",
      content: "HALPI est comme un professeur particulier, pensé sur mesure pour t'accompagner toi et des milliers d'autres étudiants du supérieur (licence, master, grandes écoles...).",
      cta: "Utiliser HALPI"
    },
    choisir: {
      title: "Pourquoi choisir HALPI ?",
      cta: "Commence maintenant"
    },
    faq: {
      title: "Questions fréquentes",
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
          answer: "Pas de souci : tu peux indiquer tes créneaux disponibles et tes dates d'examen, et HALPI planifie automatiquement des séances de révision. Si tes horaires changent, la plateforme s'adapte immédiatement."
        },
        {
          question: "Ai-je besoin d'acheter du matériel spécifique ?",
          answer: "Aucunement. Un ordinateur, une tablette ou même un smartphone suffisent pour accéder à HALPI, où que tu sois et quand tu veux."
        },
        {
          question: "Comment l'IA sait-elle ce que je dois travailler en priorité ?",
          answer: "Dès que tu importes tes cours et renseignes tes objectifs, l'IA analyse le contenu et calcule les chapitres, notions ou matières les plus importants. Elle prend également en compte tes performances lors des exercices pour affiner ton parcours."
        }
      ]
    },
    cta: {
      title: "Prêt(e) à passer au niveau supérieur ?",
      content: "Rejoins HALPI dès aujourd'hui et découvre comment étudier moins pour réussir plus.",
      cta: "Je m'inscris gratuitement"
    }
  },
  en: {
    hero: {
      subtitle: "BOOST YOUR STUDIES AND SUCCESS",
      cta: "Discover how",
    },
    benefits: {
      title: "Why choose HALPI",
      items: [
        {
          title: "PERSONALIZED",
          content: "A journey entirely designed for you, adapted to your courses, your pace, and your goals.",
          icon: "UserCircle2"
        },
        {
          title: "EFFICIENT",
          content: "Learn better in less time: HALPI optimizes your revisions using neuroscience to maximize your results.",
          icon: "Lightbulb"
        },
        {
          title: "ADAPTIVE",
          content: "Your schedule and exercises automatically readjust based on your progress or delays.",
          icon: "ArrowUpCircle"
        }
      ]
    },
    steps: {
      title: "The path to success",
      items: [
        {
          title: "Tell us about your studies",
          content: "Upload your courses (PDF, Word, etc.), share your schedule and exam dates. HALPI gets to know you to offer the best learning paths."
        },
        {
          title: "Discover your tailored revision plan",
          content: "HALPI automatically develops a learning journey including a study schedule and activities specially adapted to your level and goals."
        },
        {
          title: "Achieve your goals stress-free",
          content: "Thanks to real-time tracking of your progress, you gain confidence step by step. Correct your gaps immediately with AI and arrive perfectly prepared on exam day."
        }
      ]
    },
    allie: {
      title: "A reliable ally for all students",
      content: "HALPI is like a private tutor, custom-designed to support you and thousands of other higher education students (bachelor's, master's, graduate schools...).",
      cta: "Use HALPI"
    },
    choisir: {
      title: "Why choose HALPI?",
      cta: "Start now"
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          question: "What type of courses does HALPI work with?",
          answer: "HALPI is designed to adapt to a wide range of disciplines: Law, Psychology, Sciences, Economics, etc. As long as you can upload your materials (PDF, Word, slides...), the AI can analyze your content and suggest adapted revision activities."
        },
        {
          question: "Is it really different from a classic course platform?",
          answer: "Yes. HALPI doesn't just list documents or videos: it builds a customized revision plan and targeted exercises, then tracks your progress in real-time to help you fill your knowledge gaps."
        },
        {
          question: "What if I have a busy schedule or a student job?",
          answer: "No problem: you can indicate your available time slots and exam dates, and HALPI automatically schedules revision sessions. If your schedule changes, the platform adapts immediately."
        },
        {
          question: "Do I need to buy specific equipment?",
          answer: "Not at all. A computer, tablet, or even a smartphone is enough to access HALPI, wherever you are and whenever you want."
        },
        {
          question: "How does the AI know what I should work on first?",
          answer: "As soon as you import your courses and set your goals, the AI analyzes the content and calculates the most important chapters, concepts, or subjects. It also takes into account your performance during exercises to refine your journey."
        }
      ]
    },
    cta: {
      title: "Ready to level up?",
      content: "Join HALPI today and discover how to study less to achieve more.",
      cta: "I'm signing up for free"
    }
  },
  nl: {
    hero: {
      subtitle: "BOOST JE STUDIE EN SUCCES",
      cta: "Ontdek hoe",
    },
    benefits: {
      title: "Waarom HALPI kiezen",
      items: [
        {
          title: "GEPERSONALISEERD",
          content: "Een traject volledig op maat voor jou, aangepast aan je cursussen, je tempo en je doelen.",
          icon: "UserCircle2"
        },
        {
          title: "EFFICIËNT",
          content: "Leer beter in minder tijd: HALPI optimaliseert je revisies met behulp van neurowetenschap om je resultaten te maximaliseren.",
          icon: "Lightbulb"
        },
        {
          title: "ADAPTIEF",
          content: "Je schema en oefeningen passen zich automatisch aan op basis van je voortgang of vertragingen.",
          icon: "ArrowUpCircle"
        }
      ]
    },
    steps: {
      title: "De weg naar succes",
      items: [
        {
          title: "Vertel ons over je studie",
          content: "Upload je cursussen (PDF, Word, etc.), deel je rooster en examendatums. HALPI leert je kennen om de beste leerpaden aan te bieden."
        },
        {
          title: "Ontdek je op maat gemaakte revisieplan",
          content: "HALPI ontwikkelt automatisch een leertraject met een studieschema en activiteiten die speciaal zijn aangepast aan jouw niveau en doelen."
        },
        {
          title: "Bereik je doelen zonder stress",
          content: "Dankzij realtime tracking van je voortgang, groeit je zelfvertrouwen stap voor stap. Corrigeer je hiaten onmiddellijk met AI en kom perfect voorbereid aan op de examendag."
        }
      ]
    },
    allie: {
      title: "Een betrouwbare bondgenoot voor alle studenten",
      content: "HALPI is als een privé-tutor, op maat ontworpen om jou en duizenden andere studenten in het hoger onderwijs (bachelor, master, hogescholen...) te ondersteunen.",
      cta: "Gebruik HALPI"
    },
    choisir: {
      title: "Waarom HALPI kiezen?",
      cta: "Begin nu"
    },
    faq: {
      title: "Veelgestelde vragen",
      items: [
        {
          question: "Voor welk type cursussen werkt HALPI?",
          answer: "HALPI is ontworpen om zich aan te passen aan een breed scala aan disciplines: Rechten, Psychologie, Wetenschappen, Economie, etc. Zolang je je materiaal kunt uploaden (PDF, Word, slides...), kan de AI je inhoud analyseren en aangepaste revisie-activiteiten voorstellen."
        },
        {
          question: "Is het echt anders dan een klassiek cursusplatform?",
          answer: "Ja. HALPI geeft niet alleen documenten of video's weer: het bouwt een aangepast revisieplan en gerichte oefeningen, en volgt vervolgens je voortgang in realtime om je te helpen je kennishiaten op te vullen."
        },
        {
          question: "Wat als ik een druk schema of een studentenbaan heb?",
          answer: "Geen probleem: je kunt je beschikbare tijdslots en examendatums aangeven, en HALPI plant automatisch revisiesessies. Als je schema verandert, past het platform zich onmiddellijk aan."
        },
        {
          question: "Moet ik specifieke apparatuur kopen?",
          answer: "Helemaal niet. Een computer, tablet of zelfs een smartphone is voldoende om toegang te krijgen tot HALPI, waar je ook bent en wanneer je maar wilt."
        },
        {
          question: "Hoe weet de AI waaraan ik eerst moet werken?",
          answer: "Zodra je je cursussen importeert en je doelen stelt, analyseert de AI de inhoud en berekent de belangrijkste hoofdstukken, concepten of onderwerpen. Het houdt ook rekening met je prestaties tijdens oefeningen om je traject te verfijnen."
        }
      ]
    },
    cta: {
      title: "Klaar om een niveau hoger te gaan?",
      content: "Word nu lid van HALPI en ontdek hoe je minder kunt studeren om meer te bereiken.",
      cta: "Ik schrijf me gratis in"
    }
  },
};
