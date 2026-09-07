import React, { useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

/* =========================================================
   Z.ÉDUCATION - CM2
   GRAMMAIRE FRANÇAISE
   ========================================================= */

/* =========================
   PROGRAMME DES 72 LEÇONS
   ========================= */

const GRAMMAIRE_CM2 = [
  {
    chapitre: "CHAPITRE 1 — LA PHRASE",
    lecons: [
      "Les types de phrases",
      "Les formes de phrases",
      "La phrase simple",
      "La phrase complexe",
      "Les constituants de la phrase",
      "Le groupe nominal",
      "Le groupe verbal",
    ],
  },
  {
    chapitre: "CHAPITRE 2 — LE GROUPE NOMINAL",
    lecons: [
      "Le nom",
      "Les différents types de déterminants",
      "Les pronoms",
      "L'adjectif qualificatif",
      "Les fonctions de l'adjectif qualificatif",
      "Le complément du nom",
      "L'expansion du nom",
    ],
  },
  {
    chapitre: "CHAPITRE 3 — LE GROUPE VERBAL ET LES COMPLÉMENTS",
    lecons: [
      "Le verbe et le groupe verbal",
      "Le complément d'objet direct (COD)",
      "Le complément d'objet indirect (COI)",
      "Le complément d'objet second (COS)",
      "Les compléments circonstanciels",
      "Identifier et analyser les compléments dans la phrase",
    ],
  },
  {
    chapitre: "CHAPITRE 4 — LES PRONOMS",
    lecons: [
      "Les différents types de pronoms",
      "Les pronoms personnels",
      "Les pronoms relatifs",
      "Le rôle et la fonction des pronoms",
      "Remplacer un groupe nominal par un pronom",
    ],
  },
  {
    chapitre: "CHAPITRE 5 — LES PROPOSITIONS",
    lecons: [
      "La proposition",
      "La proposition indépendante",
      "L'analyse de la proposition indépendante",
      "Les propositions coordonnées",
      "Les propositions juxtaposées",
      "Les propositions subordonnées",
      "Les conjonctions de subordination",
    ],
  },
  {
    chapitre: "CHAPITRE 6 — LES PROPOSITIONS SUBORDONNÉES RELATIVES",
    lecons: [
      "La proposition subordonnée relative",
      "Les pronoms relatifs",
      "Identifier une proposition subordonnée relative",
      "Le rôle de la proposition subordonnée relative",
      "L'analyse d'une proposition subordonnée relative",
      "Exercices d'analyse de propositions relatives",
    ],
  },
  {
    chapitre: "CHAPITRE 7 — LES PROPOSITIONS SUBORDONNÉES COMPLÉTIVES",
    lecons: [
      "La proposition subordonnée complétive",
      "Identifier une proposition subordonnée complétive",
      "Les conjonctions de subordination utilisées dans les complétives",
      "La fonction de la proposition subordonnée complétive",
      "L'analyse d'une proposition subordonnée complétive",
      "Exercices d'analyse de propositions complétives",
    ],
  },
  {
    chapitre: "CHAPITRE 8 — LES PROPOSITIONS SUBORDONNÉES CIRCONSTANCIELLES",
    lecons: [
      "Les propositions subordonnées circonstancielles",
      "Les différentes circonstances exprimées",
      "Les conjonctions et locutions conjonctives de subordination",
      "Identifier une proposition subordonnée circonstancielle",
      "Analyser une proposition subordonnée circonstancielle",
    ],
  },
  {
    chapitre: "CHAPITRE 9 — LE DISCOURS",
    lecons: [
      "Le discours direct",
      "Le discours indirect",
      "Les caractéristiques du discours direct",
      "Les caractéristiques du discours indirect",
      "Transformer le discours direct en discours indirect",
      "Transformer le discours indirect en discours direct",
      "Les changements de pronoms, de temps et de repères",
    ],
  },
  {
    chapitre: "CHAPITRE 10 — LA VOIX DU VERBE",
    lecons: [
      "La voix active",
      "La voix passive",
      "Reconnaître la voix active et la voix passive",
      "Transformer une phrase active en phrase passive",
      "Transformer une phrase passive en phrase active",
      "Identifier le complément d'agent",
    ],
  },
  {
    chapitre: "CHAPITRE 11 — ANALYSE GRAMMATICALE ET LOGIQUE",
    lecons: [
      "Analyse grammaticale des mots",
      "Nature et fonction des mots",
      "Analyse du groupe nominal",
      "Analyse du groupe verbal",
      "Analyse des compléments",
      "Analyse de la proposition indépendante",
      "Analyse de la proposition subordonnée relative",
      "Analyse de la proposition subordonnée complétive",
      "Analyse des propositions subordonnées circonstancielles",
      "Analyse complète d'une phrase complexe",
    ],
  },
];

/* =========================================================
   CONTENU DES LEÇONS DU CHAPITRE 1
   ========================================================= */

const CONTENU_LECONS = {
  "Les types de phrases": {
    objectif:
      "Reconnaître les quatre types de phrases et savoir les utiliser correctement.",

    explication:
      "Une phrase permet d'exprimer une idée. Selon ce que veut dire celui qui parle ou écrit, la phrase peut être déclarative, interrogative, impérative ou exclamative.",

    regle:
      "Il existe quatre principaux types de phrases : la phrase déclarative donne une information ; la phrase interrogative pose une question ; la phrase impérative donne un ordre, un conseil ou une interdiction ; la phrase exclamative exprime un sentiment ou une émotion.",

    exemples: [
      "Le soleil brille. → phrase déclarative",
      "Le soleil brille-t-il ? → phrase interrogative",
      "Regarde le soleil ! → phrase impérative",
      "Quel beau soleil ! → phrase exclamative",
    ],

    exemplesCorriges: [
      {
        question: "« Les enfants jouent dans la cour. »",
        réponse: "Phrase déclarative.",
        explication: "Cette phrase donne simplement une information.",
      },
      {
        question: "« Où vas-tu ? »",
        réponse: "Phrase interrogative.",
        explication: "Cette phrase pose une question.",
      },
      {
        question: "« Ferme la porte ! »",
        réponse: "Phrase impérative.",
        explication: "La personne donne un ordre.",
      },
      {
        question: "« Quelle magnifique journée ! »",
        réponse: "Phrase exclamative.",
        explication: "La phrase exprime une émotion.",
      },
    ],

    retenir: [
      "Déclarative = elle donne une information.",
      "Interrogative = elle pose une question.",
      "Impérative = elle donne un ordre, un conseil ou une interdiction.",
      "Exclamative = elle exprime une émotion ou un sentiment.",
    ],

    exercices: {
      facile: [
        {
          question: "Indique le type : « Maman prépare le repas. »",
          réponse: "Déclarative",
          correction:
            "La phrase donne une information. C'est donc une phrase déclarative.",
        },
        {
          question: "Indique le type : « As-tu terminé ton travail ? »",
          réponse: "Interrogative",
          correction:
            "La phrase pose une question. C'est donc une phrase interrogative.",
        },
        {
          question: "Indique le type : « Range tes affaires ! »",
          réponse: "Impérative",
          correction:
            "La phrase donne un ordre. C'est donc une phrase impérative.",
        },
        {
          question: "Indique le type : « Comme ce paysage est magnifique ! »",
          réponse: "Exclamative",
          correction:
            "La phrase exprime une émotion et se termine par un point d'exclamation.",
        },
        {
          question: "Indique le type : « Les élèves travaillent sérieusement. »",
          réponse: "Déclarative",
          correction: "La phrase donne une information.",
        },
      ],

      moyen: [
        {
          question:
            "Transforme cette phrase déclarative en phrase interrogative : « Tu viens demain. »",
          réponse: "Viens-tu demain ?",
          correction:
            "Pour poser une question, on peut inverser le sujet et le verbe : « Viens-tu demain ? »",
        },
        {
          question:
            "Transforme en phrase impérative : « Tu dois fermer la porte. »",
          réponse: "Ferme la porte !",
          correction:
            "La phrase impérative permet de donner directement un ordre.",
        },
        {
          question:
            "Transforme en phrase exclamative : « Cette maison est très belle. »",
          réponse: "Comme cette maison est belle !",
          correction:
            "La tournure exclamative permet d'exprimer l'admiration.",
        },
        {
          question:
            "Classe : « Pourquoi pleures-tu ? »",
          réponse: "Interrogative",
          correction: "La phrase demande une information.",
        },
      ],

      difficile: [
        {
          question:
            "Identifie le type de chaque phrase : « Écoute-moi ! Où étais-tu ? Quelle peur ! Je rentre à la maison. »",
          réponse:
            "Impérative / Interrogative / Exclamative / Déclarative",
          correction:
            "« Écoute-moi ! » donne un ordre ; « Où étais-tu ? » pose une question ; « Quelle peur ! » exprime une émotion ; « Je rentre à la maison. » donne une information.",
        },
        {
          question:
            "Écris une phrase déclarative, une interrogative, une impérative et une exclamative sur le thème de l'école.",
          réponse:
            "Réponses personnelles.",
          correction:
            "Les quatre phrases doivent respecter leur type : information, question, ordre/conseil et émotion.",
        },
        {
          question:
            "Corrige : « Pourquoi tu cries ! » si tu veux poser une question.",
          réponse: "Pourquoi cries-tu ?",
          correction:
            "Une question doit être construite avec une ponctuation et une formulation interrogative adaptées.",
        },
      ],
    },

    quiz: [
      {
        niveau: "FACILE",
        question: "Quel type de phrase donne une information ?",
        options: ["Interrogative", "Déclarative", "Exclamative", "Impérative"],
        bonne: 1,
        explication: "La phrase déclarative donne une information.",
      },
      {
        niveau: "FACILE",
        question: "Quel type de phrase pose une question ?",
        options: ["Déclarative", "Exclamative", "Interrogative", "Impérative"],
        bonne: 2,
        explication: "La phrase interrogative sert à poser une question.",
      },
      {
        niveau: "MOYEN",
        question: "« Attention au chien ! » est une phrase...",
        options: ["déclarative", "interrogative", "impérative", "exclamative"],
        bonne: 2,
        explication:
          "Elle avertit et donne une consigne : on peut la classer comme impérative.",
      },
      {
        niveau: "MOYEN",
        question: "« Quelle belle histoire ! » est...",
        options: [
          "déclarative",
          "interrogative",
          "exclamative",
          "impérative",
        ],
        bonne: 2,
        explication: "Elle exprime une émotion.",
      },
      {
        niveau: "DIFFICILE",
        question: "« Peux-tu fermer la fenêtre ? » est...",
        options: [
          "déclarative",
          "interrogative",
          "exclamative",
          "impérative",
        ],
        bonne: 1,
        explication:
          "Même si la phrase contient une demande, sa construction est interrogative.",
      },
    ],
  },

  "Les formes de phrases": {
    objectif:
      "Reconnaître les principales formes de phrases et transformer une phrase affirmative en phrase négative.",

    explication:
      "Une phrase peut être affirmative ou négative. La forme affirmative présente généralement une information comme vraie. La forme négative utilise des mots comme ne... pas, ne... jamais, ne... plus ou ne... rien.",

    regle:
      "À la forme négative, on encadre généralement le verbe avec deux mots de négation : ne... pas, ne... jamais, ne... plus, ne... rien.",

    exemples: [
      "Je mange. → Je ne mange pas.",
      "Il vient toujours. → Il ne vient jamais.",
      "Elle travaille encore. → Elle ne travaille plus.",
      "J'ai quelque chose. → Je n'ai rien.",
    ],

    exemplesCorriges: [
      {
        question: "« Paul joue au football. »",
        réponse: "Paul ne joue pas au football.",
        explication: "On encadre le verbe « joue » avec « ne... pas ».",
      },
      {
        question: "« Il vient toujours. »",
        réponse: "Il ne vient jamais.",
        explication:
          "La négation « jamais » permet de remplacer « toujours ».",
      },
      {
        question: "« Nous avons encore du temps. »",
        réponse: "Nous n'avons plus de temps.",
        explication:
          "La négation « ne... plus » indique que quelque chose cesse.",
      },
    ],

    retenir: [
      "Une phrase affirmative affirme quelque chose.",
      "Une phrase négative nie quelque chose.",
      "La négation utilise souvent deux mots.",
      "Exemples : ne... pas, ne... jamais, ne... plus, ne... rien.",
    ],

    exercices: {
      facile: [
        {
          question: "Mets à la forme négative : « Je comprends. »",
          réponse: "Je ne comprends pas.",
          correction: "On place « ne » avant le verbe et « pas » après.",
        },
        {
          question: "Mets à la forme négative : « Il travaille encore. »",
          réponse: "Il ne travaille plus.",
          correction: "« Encore » devient « ne... plus » dans cette transformation.",
        },
        {
          question: "Mets à la forme négative : « Elle chante toujours. »",
          réponse: "Elle ne chante jamais.",
          correction: "« Toujours » est remplacé par « jamais ».",
        },
        {
          question: "Mets à la forme négative : « J'ai quelque chose. »",
          réponse: "Je n'ai rien.",
          correction: "« Quelque chose » devient « rien » dans la négation.",
        },
      ],

      moyen: [
        {
          question: "Transforme : « Nous regardons la télévision. »",
          réponse: "Nous ne regardons pas la télévision.",
          correction: "Utilise la négation « ne... pas ».",
        },
        {
          question: "Transforme : « Il mange encore. »",
          réponse: "Il ne mange plus.",
          correction: "« Encore » devient « ne... plus ».",
        },
        {
          question: "Transforme : « Elle voit quelqu'un. »",
          réponse: "Elle ne voit personne.",
          correction: "« Quelqu'un » devient « personne ».",
        },
        {
          question: "Transforme : « Il fait toujours ses devoirs. »",
          réponse: "Il ne fait jamais ses devoirs.",
          correction: "« Toujours » devient « jamais ».",
        },
      ],

      difficile: [
        {
          question:
            "Transforme à la forme négative : « Tous les élèves ont quelque chose à dire. »",
          réponse: "Tous les élèves n'ont rien à dire.",
          correction:
            "Le groupe « quelque chose » est remplacé par « rien ».",
        },
        {
          question:
            "Corrige cette phrase : « Je pas comprends la leçon. »",
          réponse: "Je ne comprends pas la leçon.",
          correction:
            "La négation doit encadrer le verbe : « ne comprends pas ».",
        },
        {
          question:
            "Écris trois phrases négatives utilisant respectivement « jamais », « plus » et « rien ».",
          réponse: "Réponses personnelles.",
          correction:
            "Chaque phrase doit utiliser correctement la négation demandée.",
        },
      ],
    },

    quiz: [
      {
        niveau: "FACILE",
        question: "Quelle phrase est négative ?",
        options: [
          "Je joue.",
          "Je ne joue pas.",
          "Je joue au ballon.",
          "Je joue demain.",
        ],
        bonne: 1,
        explication: "« Ne... pas » marque la négation.",
      },
      {
        niveau: "FACILE",
        question: "Quelle négation signifie l'arrêt d'une action ?",
        options: ["ne... jamais", "ne... rien", "ne... plus", "ne... personne"],
        bonne: 2,
        explication: "« Ne... plus » indique que l'action cesse.",
      },
      {
        niveau: "MOYEN",
        question: "« Je ne vois personne. » signifie...",
        options: [
          "Je vois quelqu'un.",
          "Je vois tout le monde.",
          "Je ne vois aucun individu.",
          "Je vois quelque chose.",
        ],
        bonne: 2,
        explication: "« Personne » indique l'absence d'individu.",
      },
      {
        niveau: "DIFFICILE",
        question: "Quelle transformation est correcte ?",
        options: [
          "Il vient toujours → Il ne vient pas jamais.",
          "Il vient toujours → Il ne vient jamais.",
          "Il vient toujours → Il jamais vient.",
          "Il vient toujours → Il ne jamais vient.",
        ],
        bonne: 1,
        explication:
          "La forme correcte est : « Il ne vient jamais. »",
      },
    ],
  },

  "La phrase simple": {
    objectif:
      "Reconnaître une phrase simple et identifier son verbe conjugué.",

    explication:
      "Une phrase simple contient un seul verbe conjugué. Elle peut être courte ou longue, mais elle ne contient qu'un seul verbe conjugué.",

    regle:
      "Pour reconnaître une phrase simple, cherche les verbes conjugués. S'il n'y en a qu'un, la phrase est simple.",

    exemples: [
      "Le chat dort.",
      "Les enfants jouent dans la cour.",
      "Chaque matin, Amadou prend son petit-déjeuner.",
      "Le professeur explique la leçon aux élèves.",
    ],

    exemplesCorriges: [
      {
        question: "« Le chien aboie. »",
        réponse: "Phrase simple.",
        explication: "Il n'y a qu'un seul verbe conjugué : « aboie ».",
      },
      {
        question: "« Les élèves travaillent sérieusement. »",
        réponse: "Phrase simple.",
        explication: "Le seul verbe conjugué est « travaillent ».",
      },
      {
        question: "« La fille lit un livre et écrit une lettre. »",
        réponse: "Phrase complexe.",
        explication:
          "Il y a deux verbes conjugués : « lit » et « écrit ».",
      },
    ],

    retenir: [
      "Une phrase simple contient un seul verbe conjugué.",
      "Pour la reconnaître, il faut chercher les verbes conjugués.",
      "La longueur de la phrase ne suffit pas pour décider si elle est simple.",
    ],

    exercices: {
      facile: [
        {
          question: "Phrase simple ou complexe ? « Le soleil brille. »",
          réponse: "Simple",
          correction: "Il y a un seul verbe conjugué : « brille ».",
        },
        {
          question:
            "Trouve le verbe conjugué : « Les oiseaux chantent. »",
          réponse: "chantent",
          correction: "« Chantent » est le seul verbe conjugué.",
        },
        {
          question:
            "Phrase simple ou complexe ? « Maman prépare le repas. »",
          réponse: "Simple",
          correction: "Le seul verbe conjugué est « prépare ».",
        },
        {
          question:
            "Trouve le verbe : « Les enfants jouent dans la cour. »",
          réponse: "jouent",
          correction: "« Jouent » est le verbe conjugué.",
        },
      ],

      moyen: [
        {
          question:
            "Phrase simple ou complexe ? « Le garçon mange et sa sœur lit. »",
          réponse: "Complexe",
          correction:
            "Il y a deux verbes conjugués : « mange » et « lit ».",
        },
        {
          question:
            "Phrase simple ou complexe ? « Le professeur explique la règle aux élèves. »",
          réponse: "Simple",
          correction: "Il n'y a qu'un seul verbe conjugué : « explique ».",
        },
        {
          question:
            "Souligne mentalement le verbe conjugué : « Nous visiterons le musée demain. »",
          réponse: "visiterons",
          correction: "« Visiterons » est le seul verbe conjugué.",
        },
      ],

      difficile: [
        {
          question:
            "Analyse : « Chaque matin, avant l'école, Koffi prépare soigneusement son sac. »",
          réponse: "Phrase simple.",
          correction:
            "Même si la phrase contient plusieurs groupes de mots, elle possède un seul verbe conjugué : « prépare ».",
        },
        {
          question:
            "Explique pourquoi « Les enfants jouent dans la cour et rient beaucoup » est complexe.",
          réponse:
            "Parce qu'elle contient deux verbes conjugués : jouent et rient.",
          correction:
            "Le nombre de verbes conjugués permet de distinguer ici la phrase complexe.",
        },
      ],
    },

    quiz: [
      {
        niveau: "FACILE",
        question: "Combien de verbes conjugués contient une phrase simple ?",
        options: ["Aucun", "Un", "Deux", "Trois"],
        bonne: 1,
        explication:
          "Une phrase simple contient un seul verbe conjugué.",
      },
      {
        niveau: "MOYEN",
        question: "« Les élèves travaillent. » est une phrase...",
        options: ["complexe", "simple", "sans verbe", "nominale"],
        bonne: 1,
        explication: "Le seul verbe conjugué est « travaillent ».",
      },
      {
        niveau: "DIFFICILE",
        question:
          "« Paul lit un livre et Marie écrit une lettre. » est...",
        options: [
          "une phrase simple",
          "une phrase sans verbe",
          "une phrase complexe",
          "un groupe nominal",
        ],
        bonne: 2,
        explication:
          "Elle possède deux verbes conjugués : « lit » et « écrit ».",
      },
    ],
  },

  "La phrase complexe": {
    objectif:
      "Reconnaître une phrase complexe et compter ses propositions.",

    explication:
      "Une phrase complexe contient au moins deux verbes conjugués. Elle est donc généralement constituée de plusieurs propositions.",

    regle:
      "Pour reconnaître une phrase complexe, repère les verbes conjugués. S'il y en a au moins deux, la phrase est complexe.",

    exemples: [
      "Le soleil brille et les oiseaux chantent.",
      "Quand il pleut, les enfants restent à la maison.",
      "Je sais que tu as raison.",
    ],

    exemplesCorriges: [
      {
        question: "« Le chat dort et le chien joue. »",
        réponse: "Phrase complexe.",
        explication:
          "Deux verbes conjugués : « dort » et « joue ».",
      },
      {
        question: "« Nous partirons quand maman arrivera. »",
        réponse: "Phrase complexe.",
        explication:
          "Deux verbes conjugués : « partirons » et « arrivera ».",
      },
    ],

    retenir: [
      "Une phrase complexe contient au moins deux verbes conjugués.",
      "Chaque verbe conjugué correspond généralement à une proposition.",
      "Il faut repérer les verbes avant de compter les propositions.",
    ],

    exercices: {
      facile: [
        {
          question:
            "Phrase simple ou complexe ? « Le garçon court et son frère marche. »",
          réponse: "Complexe",
          correction:
            "Il y a deux verbes conjugués : « court » et « marche ».",
        },
        {
          question:
            "Combien de verbes conjugués dans « Je mange quand j'ai faim » ?",
          réponse: "Deux",
          correction: "Les verbes sont « mange » et « ai ».",
        },
        {
          question:
            "Phrase simple ou complexe ? « Nous irons demain. »",
          réponse: "Simple",
          correction: "Il n'y a qu'un verbe conjugué : « irons ».",
        },
      ],

      moyen: [
        {
          question:
            "Compte les verbes : « Lorsque le professeur arrive, les élèves se lèvent et saluent. »",
          réponse: "Trois",
          correction:
            "Les verbes sont « arrive », « se lèvent » et « saluent ».",
        },
        {
          question:
            "Phrase simple ou complexe ? « J'aime les mangues mûres. »",
          réponse: "Simple",
          correction: "Le seul verbe conjugué est « aime ».",
        },
        {
          question:
            "Phrase simple ou complexe ? « Il travaille parce qu'il veut réussir. »",
          réponse: "Complexe",
          correction:
            "Il y a deux verbes conjugués : « travaille » et « veut ».",
        },
      ],

      difficile: [
        {
          question:
            "Analyse : « Quand la pluie cessera, nous sortirons parce que nous voulons jouer. »",
          réponse:
            "Trois verbes conjugués : cessera, sortirons, voulons.",
          correction:
            "La phrase est complexe car elle contient trois verbes conjugués.",
        },
        {
          question:
            "Écris une phrase complexe contenant trois verbes conjugués.",
          réponse: "Réponse personnelle.",
          correction:
            "La phrase doit comporter au moins trois verbes conjugués.",
        },
      ],
    },

    quiz: [
      {
        niveau: "FACILE",
        question: "Une phrase complexe contient...",
        options: [
          "un seul verbe conjugué",
          "au moins deux verbes conjugués",
          "aucun verbe",
          "uniquement des noms",
        ],
        bonne: 1,
        explication:
          "Une phrase complexe contient au moins deux verbes conjugués.",
      },
      {
        niveau: "MOYEN",
        question:
          "Combien de verbes conjugués dans « Je viens quand tu m'appelles » ?",
        options: ["Un", "Deux", "Trois", "Quatre"],
        bonne: 1,
        explication: "Les verbes sont « viens » et « appelles ».",
      },
      {
        niveau: "DIFFICILE",
        question:
          "« Quand il pleut, les enfants restent à la maison. » est...",
        options: [
          "une phrase simple",
          "une phrase complexe",
          "une phrase nominale",
          "un groupe nominal",
        ],
        bonne: 1,
        explication:
          "Les verbes « pleut » et « restent » montrent qu'il s'agit d'une phrase complexe.",
      },
    ],
  },

  "Les constituants de la phrase": {
    objectif:
      "Identifier les principaux groupes qui constituent une phrase.",

    explication:
      "Une phrase peut être composée de plusieurs groupes de mots. On trouve notamment le groupe sujet et le groupe verbal. Des compléments peuvent également préciser le sens de la phrase.",

    regle:
      "Le groupe sujet indique qui fait l'action ou de qui on parle. Le groupe verbal contient le verbe et les éléments qui l'accompagnent.",

    exemples: [
      "Les enfants / jouent dans la cour.",
      "Mon frère / lit un livre.",
      "La petite fille / mange une pomme.",
    ],

    exemplesCorriges: [
      {
        question: "« Les élèves travaillent en classe. »",
        réponse:
          "Groupe sujet : « Les élèves » ; groupe verbal : « travaillent en classe ».",
        explication:
          "« Les élèves » est le groupe qui réalise l'action.",
      },
      {
        question: "« Le chat mange une souris. »",
        réponse:
          "Groupe sujet : « Le chat » ; groupe verbal : « mange une souris ».",
        explication:
          "Le groupe verbal contient le verbe « mange » et son complément.",
      },
    ],

    retenir: [
      "Le groupe sujet indique de qui ou de quoi on parle.",
      "Le groupe verbal contient le verbe.",
      "Des compléments peuvent préciser la phrase.",
    ],

    exercices: {
      facile: [
        {
          question:
            "Trouve le groupe sujet : « Les enfants jouent dans la cour. »",
          réponse: "Les enfants",
          correction: "Ce sont les enfants qui jouent.",
        },
        {
          question:
            "Trouve le groupe verbal : « Le chien aboie dans la rue. »",
          réponse: "aboie dans la rue",
          correction:
            "Le groupe verbal contient le verbe « aboie » et le complément.",
        },
        {
          question:
            "Trouve le sujet : « Mon frère regarde la télévision. »",
          réponse: "Mon frère",
          correction: "C'est lui qui regarde.",
        },
      ],

      moyen: [
        {
          question:
            "Sépare les deux grands groupes : « Les élèves de CM2 préparent un spectacle. »",
          réponse:
            "Sujet : « Les élèves de CM2 » / Verbal : « préparent un spectacle ».",
          correction:
            "Le groupe sujet est celui qui réalise l'action.",
        },
        {
          question:
            "Dans « La petite fille mange une mangue », donne le groupe sujet.",
          réponse: "La petite fille",
          correction: "C'est elle qui mange.",
        },
      ],

      difficile: [
        {
          question:
            "Analyse les groupes de la phrase : « Les jeunes sportifs de l'école préparent sérieusement la compétition. »",
          réponse:
            "Sujet : « Les jeunes sportifs de l'école » ; groupe verbal : « préparent sérieusement la compétition ».",
          correction:
            "Le groupe sujet contient le noyau « sportifs » ; le groupe verbal est organisé autour du verbe « préparent ».",
        },
        {
          question:
            "Produis une phrase avec un groupe sujet long et un groupe verbal long.",
          réponse: "Réponse personnelle.",
          correction:
            "Les deux groupes doivent être correctement construits autour d'un verbe conjugué.",
        },
      ],
    },

    quiz: [
      {
        niveau: "FACILE",
        question: "Le groupe sujet indique principalement...",
        options: [
          "où se passe l'action",
          "qui fait l'action ou de qui on parle",
          "quand se passe l'action",
          "la ponctuation",
        ],
        bonne: 1,
        explication:
          "Le groupe sujet indique de qui ou de quoi on parle.",
      },
      {
        niveau: "MOYEN",
        question:
          "Dans « Les enfants jouent », quel est le groupe sujet ?",
        options: ["jouent", "Les enfants", "enfants jouent", "Les"],
        bonne: 1,
        explication: "« Les enfants » est le groupe sujet.",
      },
      {
        niveau: "DIFFICILE",
        question:
          "Dans « Le petit garçon joue au football », le groupe verbal est...",
        options: [
          "Le petit garçon",
          "garçon joue",
          "joue au football",
          "Le football",
        ],
        bonne: 2,
        explication:
          "Le groupe verbal est construit autour du verbe « joue ».",
      },
    ],
  },

  "Le groupe nominal": {
    objectif:
      "Identifier et construire un groupe nominal simple.",

    explication:
      "Le groupe nominal (GN) est un groupe de mots organisé autour d'un nom. Il peut contenir un déterminant, un nom et parfois un adjectif ou un complément du nom.",

    regle:
      "Le groupe nominal contient généralement un déterminant et un nom. Exemple : « le grand arbre » : « le » est le déterminant, « arbre » est le nom et « grand » est l'adjectif.",

    exemples: [
      "un enfant",
      "la maison",
      "les grands arbres",
      "une jolie robe",
      "le cahier de Paul",
    ],

    exemplesCorriges: [
      {
        question: "« Le petit garçon »",
        réponse:
          "Déterminant : « Le » ; adjectif : « petit » ; nom : « garçon ».",
        explication:
          "Tous ces mots forment ensemble un groupe nominal.",
      },
      {
        question: "« Une belle maison »",
        réponse:
          "Déterminant : « Une » ; adjectif : « belle » ; nom : « maison ».",
        explication:
          "Le nom « maison » est le noyau du groupe nominal.",
      },
    ],

    retenir: [
      "Le groupe nominal est organisé autour d'un nom.",
      "Il contient souvent un déterminant + un nom.",
      "Il peut être enrichi par un adjectif ou un complément du nom.",
    ],

    exercices: {
      facile: [
        {
          question: "Trouve le groupe nominal : « Le chat dort. »",
          réponse: "Le chat",
          correction: "« Le chat » est organisé autour du nom « chat ».",
        },
        {
          question:
            "Dans « une grande maison », quel est le nom ?",
          réponse: "maison",
          correction: "« Maison » est le nom principal du groupe nominal.",
        },
        {
          question:
            "Dans « les petits enfants », quel est le déterminant ?",
          réponse: "les",
          correction: "« Les » accompagne le nom « enfants ».",
        },
      ],

      moyen: [
        {
          question:
            "Décompose « Le grand arbre vert ».",
          réponse:
            "Déterminant : le / adjectifs : grand, vert / nom : arbre.",
          correction:
            "Le noyau du groupe nominal est le nom « arbre ».",
        },
        {
          question:
            "Enrichis « une voiture » avec un adjectif.",
          réponse: "une belle voiture",
          correction:
            "L'adjectif « belle » enrichit le nom « voiture ».",
        },
      ],

      difficile: [
        {
          question:
            "Analyse « les magnifiques fleurs du jardin ».",
          réponse:
            "Déterminant : les ; adjectif : magnifiques ; nom : fleurs ; complément du nom : du jardin.",
          correction:
            "Le noyau est « fleurs ». Le groupe « du jardin » précise le nom.",
        },
        {
          question:
            "Écris un groupe nominal contenant un déterminant, un nom, un adjectif et un complément du nom.",
          réponse: "Réponse personnelle.",
          correction:
            "Exemple : « une grande maison de campagne ».",
        },
      ],
    },

    quiz: [
      {
        niveau: "FACILE",
        question: "Autour de quel mot le groupe nominal est-il organisé ?",
        options: ["Le verbe", "Le nom", "La préposition", "La ponctuation"],
        bonne: 1,
        explication: "Le groupe nominal est organisé autour d'un nom.",
      },
      {
        niveau: "MOYEN",
        question:
          "Dans « les grands arbres », quel est le noyau du GN ?",
        options: ["les", "grands", "arbres", "les grands"],
        bonne: 2,
        explication: "Le nom « arbres » est le noyau du groupe nominal.",
      },
      {
        niveau: "DIFFICILE",
        question:
          "Quel groupe est un groupe nominal complet ?",
        options: [
          "court rapidement",
          "très vite",
          "la grande maison de Pierre",
          "dans la cour",
        ],
        bonne: 2,
        explication:
          "« La grande maison de Pierre » est organisé autour du nom « maison ».",
      },
    ],
  },

  "Le groupe verbal": {
    objectif:
      "Identifier le groupe verbal et comprendre son organisation autour du verbe.",

    explication:
      "Le groupe verbal est la partie de la phrase qui indique ce que fait le sujet ou ce qui lui arrive. Il contient toujours un verbe conjugué.",

    regle:
      "Pour trouver le groupe verbal, cherche le verbe conjugué puis les mots qui dépendent de lui.",

    exemples: [
      "Les enfants jouent.",
      "Les élèves lisent un livre.",
      "Mon frère prépare son sac.",
      "La maîtresse explique la leçon aux élèves.",
    ],

    exemplesCorriges: [
      {
        question: "« Paul mange une pomme. »",
        réponse: "Groupe verbal : « mange une pomme ».",
        explication:
          "Le groupe verbal est construit autour du verbe « mange ».",
      },
      {
        question: "« Les élèves travaillent sérieusement. »",
        réponse: "Groupe verbal : « travaillent sérieusement ».",
        explication:
          "Le verbe « travaillent » constitue le noyau du groupe verbal.",
      },
    ],

    retenir: [
      "Le groupe verbal contient le verbe conjugué.",
      "Il indique généralement ce que fait le sujet ou ce qui lui arrive.",
      "Il peut être accompagné de compléments.",
    ],

    exercices: {
      facile: [
        {
          question:
            "Trouve le groupe verbal : « Le garçon joue au football. »",
          réponse: "joue au football",
          correction:
            "Le verbe « joue » et son complément forment le groupe verbal.",
        },
        {
          question:
            "Trouve le verbe dans « Les élèves écrivent une dictée. »",
          réponse: "écrivent",
          correction: "« Écrivent » est le verbe conjugué.",
        },
        {
          question:
            "Trouve le groupe verbal : « Maman prépare le dîner. »",
          réponse: "prépare le dîner",
          correction:
            "Le groupe verbal est construit autour du verbe « prépare ».",
        },
      ],

      moyen: [
        {
          question:
            "Sépare les groupes : « Les enfants de CM2 révisent leur leçon. »",
          réponse:
            "Sujet : « Les enfants de CM2 » / Groupe verbal : « révisent leur leçon ».",
          correction:
            "Le groupe verbal commence au verbe « révisent ».",
        },
        {
          question:
            "Dans « Le professeur explique clairement la règle », trouve le groupe verbal.",
          réponse: "explique clairement la règle",
          correction:
            "Tous les éléments dépendent du verbe « explique ».",
        },
      ],

      difficile: [
        {
          question:
            "Analyse : « Les élèves attentifs de CM2 préparent sérieusement leur examen. »",
          réponse:
            "Sujet : « Les élèves attentifs de CM2 » ; groupe verbal : « préparent sérieusement leur examen ».",
          correction:
            "Le groupe verbal est organisé autour du verbe « préparent ».",
        },
        {
          question:
            "Écris une phrase avec un groupe verbal contenant un verbe et deux compléments.",
          réponse: "Réponse personnelle.",
          correction:
            "Exemple : « Paul donne un livre à son frère. »",
        },
      ],
    },

    quiz: [
      {
        niveau: "FACILE",
        question: "Le groupe verbal contient toujours...",
        options: ["un déterminant", "un verbe conjugué", "un nom propre", "une virgule"],
        bonne: 1,
        explication:
          "Le verbe conjugué est le noyau du groupe verbal.",
      },
      {
        niveau: "MOYEN",
        question:
          "Dans « Les enfants mangent une mangue », quel est le groupe verbal ?",
        options: [
          "Les enfants",
          "mangent",
          "mangent une mangue",
          "une mangue",
        ],
        bonne: 2,
        explication:
          "Le groupe verbal est « mangent une mangue ».",
      },
      {
        niveau: "DIFFICILE",
        question:
          "Dans « La maîtresse explique la leçon aux élèves », le groupe verbal est...",
        options: [
          "La maîtresse",
          "explique la leçon aux élèves",
          "la leçon",
          "aux élèves",
        ],
        bonne: 1,
        explication:
          "Le groupe verbal est organisé autour du verbe « explique ».",
      },
    ],
  },  "Le nom": {
    objectif:
      "Reconnaître un nom, distinguer un nom commun d'un nom propre et identifier son genre et son nombre.",

    explication:
      "Le nom est un mot qui sert à désigner une personne, un animal, une chose, un lieu ou une idée. Il peut être commun ou propre. Il varie généralement en genre et en nombre.",

    regle:
      "Le nom commun désigne une personne, un animal, une chose ou une idée de manière générale. Le nom propre désigne une personne, un lieu ou un élément particulier et prend généralement une majuscule.",

    exemples: [
      "Le garçon joue dans la cour.",
      "Le chat dort sur le canapé.",
      "Abidjan est une grande ville.",
      "La liberté est importante.",
      "Les élèves travaillent sérieusement.",
    ],

    exemplesCorriges: [
      {
        question: "Dans « Le chien aboie », quel est le nom ?",
        réponse: "chien",
        explication: "« Chien » désigne un animal : c'est un nom commun.",
      },
      {
        question: "Dans « Mariam habite à Abidjan », quels sont les noms propres ?",
        réponse: "Mariam et Abidjan",
        explication:
          "« Mariam » désigne une personne précise et « Abidjan » désigne une ville précise. Ce sont des noms propres.",
      },
      {
        question: "Dans « Les enfants jouent », quel est le nom et quel est son nombre ?",
        réponse: "enfants, nom commun au pluriel",
        explication:
          "« Enfants » désigne des personnes de manière générale et la terminaison indique le pluriel.",
      },
    ],

    retenir:
      "Le nom désigne une personne, un animal, une chose, un lieu ou une idée. Il peut être commun ou propre et peut varier en genre et en nombre.",

    exercices: {
      facile: [
        {
          niveau: "FACILE",
          question: "Dans « Le chat dort », quel est le nom ?",
          options: ["Le", "chat", "dort", "aucun"],
          bonne: 1,
          explication: "« Chat » désigne un animal : c'est le nom.",
        },
        {
          niveau: "FACILE",
          question: "Lequel est un nom propre ?",
          options: ["ville", "garçon", "Abidjan", "maison"],
          bonne: 2,
          explication:
            "« Abidjan » désigne une ville précise et prend une majuscule.",
        },
      ],

      moyen: [
        {
          niveau: "MOYEN",
          question: "Dans « La maîtresse corrige les cahiers », quels sont les noms ?",
          options: [
            "maîtresse et cahiers",
            "la et les",
            "corrige",
            "la maîtresse",
          ],
          bonne: 0,
          explication:
            "« Maîtresse » et « cahiers » sont des noms communs.",
        },
        {
          niveau: "MOYEN",
          question: "Quel nom est au pluriel ?",
          options: ["table", "enfant", "livres", "maison"],
          bonne: 2,
          explication:
            "« Livres » désigne plusieurs objets : le nom est au pluriel.",
        },
      ],

      difficile: [
        {
          niveau: "DIFFICILE",
          question:
            "Dans « La solidarité entre les élèves est une grande richesse », quel mot est un nom abstrait ?",
          options: ["solidarité", "entre", "grande", "est"],
          bonne: 0,
          explication:
            "« Solidarité » désigne une idée ou une valeur : c'est un nom abstrait.",
        },
        {
          niveau: "DIFFICILE",
          question:
            "Dans « Kouassi visite la ville de Yamoussoukro », quels sont les noms propres ?",
          options: [
            "Kouassi et Yamoussoukro",
            "visite et ville",
            "la et de",
            "ville et Yamoussoukro",
          ],
          bonne: 0,
          explication:
            "« Kouassi » désigne une personne précise et « Yamoussoukro » une ville précise : ce sont des noms propres.",
        },
      ],
    },

    quiz: [
      {
        question: "Qu'est-ce qu'un nom ?",
        options: [
          "Un mot qui désigne une personne, un animal, une chose ou une idée",
          "Un mot qui indique une action",
          "Un mot qui relie deux phrases",
          "Un mot qui remplace toujours un verbe",
        ],
        bonne: 0,
        explication:
          "Le nom sert à désigner une personne, un animal, une chose, un lieu ou une idée.",
      },
      {
        question: "Lequel est un nom propre ?",
        options: ["école", "Abidjan", "enfant", "livre"],
        bonne: 1,
        explication:
          "« Abidjan » est le nom propre d'une ville et prend une majuscule.",
      },
    ],
  },  "Les différents types de déterminants": {
    objectif:
      "Identifier les différents types de déterminants et savoir les utiliser devant un nom.",

    explication:
      "Le déterminant accompagne généralement le nom dans le groupe nominal. Il permet notamment d'indiquer le genre et le nombre du nom.",

    regle:
      "On distingue notamment les articles définis, les articles indéfinis, les déterminants possessifs et les déterminants démonstratifs.",

    exemples: [
      "Le garçon joue.",
      "Une fille chante.",
      "Mon cahier est neuf.",
      "Cette maison est grande.",
      "Les enfants travaillent.",
      "Des oiseaux volent dans le ciel.",
    ],

    exemplesCorriges: [
      {
        question: "Dans « Le chat dort », quel est le déterminant ?",
        réponse: "Le",
        explication:
          "« Le » accompagne le nom « chat ». C'est un article défini.",
      },
      {
        question: "Dans « Une fille lit un livre », quels sont les déterminants ?",
        réponse: "Une et un",
        explication:
          "« Une » accompagne « fille » et « un » accompagne « livre ». Ce sont des articles indéfinis.",
      },
      {
        question: "Dans « Mon frère prend cette voiture », quels sont les déterminants ?",
        réponse: "Mon et cette",
        explication:
          "« Mon » est un déterminant possessif et « cette » est un déterminant démonstratif.",
      },
    ],

    retenir:
      "Le déterminant accompagne le nom. Les principaux déterminants étudiés sont les articles définis, les articles indéfinis, les possessifs et les démonstratifs.",

    exercices: {
      facile: [
        {
          niveau: "FACILE",
          question: "Dans « La maison est grande », quel est le déterminant ?",
          options: ["maison", "est", "La", "grande"],
          bonne: 2,
          explication:
            "« La » accompagne le nom « maison » : c'est le déterminant.",
        },
        {
          niveau: "FACILE",
          question: "Quel mot est un déterminant ?",
          options: ["courir", "une", "rapidement", "beau"],
          bonne: 1,
          explication: "« Une » est un déterminant indéfini.",
        },
      ],

      moyen: [
        {
          niveau: "MOYEN",
          question: "Dans « Mon ami possède une voiture », quels sont les déterminants ?",
          options: [
            "ami et voiture",
            "Mon et une",
            "possède et une",
            "Mon et voiture",
          ],
          bonne: 1,
          explication:
            "« Mon » est possessif et « une » est un article indéfini.",
        },
        {
          niveau: "MOYEN",
          question: "Quel est le déterminant démonstratif ?",
          options: ["mon", "les", "cette", "des"],
          bonne: 2,
          explication:
            "« Cette » est un déterminant démonstratif.",
        },
      ],

      difficile: [
        {
          niveau: "DIFFICILE",
          question:
            "Dans « Ces élèves présentent leurs travaux », quels sont les déterminants ?",
          options: [
            "Ces et leurs",
            "élèves et travaux",
            "présentent et leurs",
            "Ces et travaux",
          ],
          bonne: 0,
          explication:
            "« Ces » est un déterminant démonstratif et « leurs » est un déterminant possessif.",
        },
        {
          niveau: "DIFFICILE",
          question:
            "Dans « Les enfants ont apporté leurs cahiers », quel est le déterminant possessif ?",
          options: ["Les", "enfants", "leurs", "cahiers"],
          bonne: 2,
          explication:
            "« Leurs » indique que les cahiers appartiennent aux enfants : c'est un déterminant possessif.",
        },
      ],
    },

    quiz: [
      {
        question: "Quel est le rôle principal du déterminant ?",
        options: [
          "Accompagner le nom",
          "Remplacer le nom",
          "Indiquer une action",
          "Relier deux propositions",
        ],
        bonne: 0,
        explication:
          "Le déterminant accompagne généralement le nom dans le groupe nominal.",
      },
      {
        question: "Lequel est un déterminant possessif ?",
        options: ["cette", "les", "mon", "une"],
        bonne: 2,
        explication:
          "« Mon » indique une relation de possession : c'est un déterminant possessif.",
      },
    ],
  },  "Les pronoms": {
    objectif:
      "Reconnaître les pronoms et comprendre leur rôle dans la phrase.",

    explication:
      "Le pronom est un mot qui peut remplacer un nom ou un groupe nominal. Il permet notamment d'éviter les répétitions.",

    regle:
      "Un pronom peut remplacer un nom ou un groupe nominal. Il existe plusieurs types de pronoms, notamment les pronoms personnels, possessifs, démonstratifs et relatifs.",

    exemples: [
      "Awa arrive. Elle sourit.",
      "J'ai acheté un livre. Je le lis.",
      "Cette maison est grande. Celle-ci est encore plus grande.",
      "Le garçon que tu vois est mon frère.",
      "Ce stylo est à moi.",
    ],

    exemplesCorriges: [
      {
        question: "Dans « Awa arrive. Elle sourit. », quel mot remplace Awa ?",
        réponse: "Elle",
        explication:
          "« Elle » est un pronom personnel qui remplace le nom propre « Awa ».",
      },
      {
        question: "Dans « Je regarde le film. Je le regarde avec plaisir. », quel mot remplace « le film » ?",
        réponse: "le",
        explication:
          "« Le » est un pronom personnel qui remplace le groupe nominal « le film ».",
      },
      {
        question: "Dans « Le garçon que tu connais arrive », quel est le pronom relatif ?",
        réponse: "que",
        explication:
          "« Que » est un pronom relatif qui introduit la proposition subordonnée relative.",
      },
    ],

    retenir:
      "Le pronom peut remplacer un nom ou un groupe nominal. Il existe plusieurs catégories de pronoms, dont les pronoms personnels, possessifs, démonstratifs et relatifs.",

    exercices: {
      facile: [
        {
          niveau: "FACILE",
          question: "Dans « Fatou arrive. Elle sourit. », quel est le pronom ?",
          options: ["Fatou", "arrive", "Elle", "sourit"],
          bonne: 2,
          explication:
            "« Elle » remplace le nom « Fatou » : c'est un pronom personnel.",
        },
        {
          niveau: "FACILE",
          question: "Lequel est un pronom personnel ?",
          options: ["maison", "il", "grand", "rapidement"],
          bonne: 1,
          explication:
            "« Il » est un pronom personnel.",
        },
      ],

      moyen: [
        {
          niveau: "MOYEN",
          question:
            "Dans « Les élèves travaillent. Ils sont sérieux. », quel mot remplace « les élèves » ?",
          options: ["travaillent", "sont", "Ils", "sérieux"],
          bonne: 2,
          explication:
            "« Ils » remplace le groupe nominal « les élèves ».",
        },
        {
          niveau: "MOYEN",
          question: "Dans « Je prends mon cahier et je le range », que remplace « le » ?",
          options: ["Je", "mon", "cahier", "range"],
          bonne: 2,
          explication:
            "« Le » remplace le nom « cahier ».",
        },
      ],

      difficile: [
        {
          niveau: "DIFFICILE",
          question:
            "Dans « La fille que tu regardes est ma sœur », quel est le pronom relatif ?",
          options: ["La", "fille", "que", "ma"],
          bonne: 2,
          explication:
            "« Que » est un pronom relatif qui introduit la proposition « que tu regardes ».",
        },
        {
          niveau: "DIFFICILE",
          question:
            "Dans « Ces livres sont les miens », quel mot est un pronom possessif ?",
          options: ["Ces", "livres", "sont", "miens"],
          bonne: 3,
          explication:
            "« Miens » indique la possession et remplace un groupe nominal : c'est un pronom possessif.",
        },
      ],
    },

    quiz: [
      {
        question: "À quoi sert principalement un pronom ?",
        options: [
          "À remplacer un nom ou un groupe nominal",
          "À décrire un nom",
          "À indiquer une action",
          "À accompagner toujours un verbe",
        ],
        bonne: 0,
        explication:
          "Le pronom sert notamment à remplacer un nom ou un groupe nominal.",
      },
      {
        question: "Lequel est un pronom personnel ?",
        options: ["ma", "ce", "nous", "une"],
        bonne: 2,
        explication:
          "« Nous » est un pronom personnel.",
      },
    ],
  },  "L'adjectif qualificatif": {
    objectif:
      "Reconnaître l'adjectif qualificatif et comprendre comment il caractérise un nom.",

    explication:
      "L'adjectif qualificatif est un mot qui donne une précision sur un nom ou un groupe nominal. Il peut exprimer une qualité, un défaut, une caractéristique ou un état.",

    regle:
      "L'adjectif qualificatif s'accorde en genre et en nombre avec le nom qu'il qualifie.",

    exemples: [
      "Un grand arbre.",
      "Une belle maison.",
      "Des enfants courageux.",
      "Une fille intelligente.",
      "Des fleurs magnifiques.",
    ],

    exemplesCorriges: [
      {
        question: "Dans « Un grand arbre », quel est l'adjectif qualificatif ?",
        réponse: "grand",
        explication:
          "« Grand » donne une précision sur le nom « arbre » : c'est un adjectif qualificatif.",
      },
      {
        question: "Dans « Une maison blanche », quel est l'adjectif qualificatif ?",
        réponse: "blanche",
        explication:
          "« Blanche » indique une caractéristique de la maison.",
      },
      {
        question: "Dans « Des élèves courageux », avec quel mot « courageux » s'accorde-t-il ?",
        réponse: "élèves",
        explication:
          "« Courageux » qualifie le nom « élèves » et s'accorde avec lui au masculin pluriel.",
      },
    ],

    retenir:
      "L'adjectif qualificatif donne une précision sur un nom. Il s'accorde en genre et en nombre avec le nom qu'il qualifie.",

    exercices: {
      facile: [
        {
          niveau: "FACILE",
          question: "Dans « Une petite fille joue », quel est l'adjectif ?",
          options: ["Une", "petite", "fille", "joue"],
          bonne: 1,
          explication:
            "« Petite » donne une précision sur le nom « fille ».",
        },
        {
          niveau: "FACILE",
          question: "Lequel est un adjectif qualificatif ?",
          options: ["maison", "courir", "joli", "rapidement"],
          bonne: 2,
          explication:
            "« Joli » exprime une caractéristique : c'est un adjectif qualificatif.",
        },
      ],

      moyen: [
        {
          niveau: "MOYEN",
          question:
            "Dans « Les grands arbres sont magnifiques », quels sont les adjectifs ?",
          options: [
            "arbres et magnifiques",
            "grands et magnifiques",
            "Les et grands",
            "sont et magnifiques",
          ],
          bonne: 1,
          explication:
            "« Grands » qualifie « arbres » et « magnifiques » donne une caractéristique aux arbres.",
        },
        {
          niveau: "MOYEN",
          question:
            "Dans « Une jolie fleur rouge pousse dans le jardin », quels sont les adjectifs ?",
          options: [
            "jolie et rouge",
            "fleur et jardin",
            "Une et fleur",
            "pousse et jardin",
          ],
          bonne: 0,
          explication:
            "« Jolie » et « rouge » donnent des précisions sur le nom « fleur ».",
        },
      ],

      difficile: [
        {
          niveau: "DIFFICILE",
          question:
            "Dans « Les petites filles courageuses ont gagné », quels adjectifs qualifient « filles » ?",
          options: [
            "petites et courageuses",
            "filles et gagné",
            "Les et petites",
            "ont et courageuses",
          ],
          bonne: 0,
          explication:
            "« Petites » et « courageuses » qualifient toutes les deux le nom « filles ».",
        },
        {
          niveau: "DIFFICILE",
          question:
            "Quelle phrase respecte correctement l'accord de l'adjectif ?",
          options: [
            "Une garçon courageuse",
            "Des fille intelligent",
            "Une fille intelligente",
            "Des garçons courageuse",
          ],
          bonne: 2,
          explication:
            "« Intelligente » s'accorde avec « fille » au féminin singulier.",
        },
      ],
    },

    quiz: [
      {
        question: "À quoi sert un adjectif qualificatif ?",
        options: [
          "À donner une précision sur un nom",
          "À remplacer un nom",
          "À exprimer uniquement une action",
          "À relier deux phrases",
        ],
        bonne: 0,
        explication:
          "L'adjectif qualificatif donne une précision ou une caractéristique au nom.",
      },
      {
        question:
          "Dans « Une belle maison », quel est l'adjectif qualificatif ?",
        options: ["Une", "belle", "maison", "aucun"],
        bonne: 1,
        explication:
          "« Belle » caractérise le nom « maison ».",
      },
    ],
  },  "Les fonctions de l'adjectif qualificatif": {
    objectif:
      "Identifier les principales fonctions de l'adjectif qualificatif dans une phrase.",

    explication:
      "L'adjectif qualificatif peut principalement être épithète ou attribut. Il apporte une information sur un nom ou un pronom.",

    regle:
      "L'adjectif est épithète lorsqu'il est directement lié au nom. Il est attribut lorsqu'il est relié au sujet par un verbe d'état comme être, sembler, paraître, devenir ou rester.",

    exemples: [
      "Une grande maison.",
      "Un petit garçon.",
      "La maison est grande.",
      "Le garçon semble fatigué.",
      "Les élèves restent attentifs.",
    ],

    exemplesCorriges: [
      {
        question: "Dans « Une grande maison », quelle est la fonction de « grande » ?",
        réponse: "Épithète",
        explication:
          "« Grande » est directement lié au nom « maison » : il est épithète.",
      },
      {
        question: "Dans « La maison est grande », quelle est la fonction de « grande » ?",
        réponse: "Attribut du sujet",
        explication:
          "« Grande » est relié au sujet « maison » par le verbe d'état « est ».",
      },
      {
        question: "Dans « Les enfants semblent fatigués », quelle est la fonction de « fatigués » ?",
        réponse: "Attribut du sujet",
        explication:
          "« Fatigués » est relié au sujet « enfants » par le verbe d'état « semblent ».",
      },
    ],

    retenir:
      "L'adjectif qualificatif peut être épithète lorsqu'il accompagne directement le nom, ou attribut lorsqu'il est relié au sujet par un verbe d'état.",

    exercices: {
      facile: [
        {
          niveau: "FACILE",
          question:
            "Dans « Une belle fleur », quelle est la fonction de « belle » ?",
          options: ["Sujet", "Épithète", "Attribut", "COD"],
          bonne: 1,
          explication:
            "« Belle » est directement placé auprès du nom « fleur » : il est épithète.",
        },
        {
          niveau: "FACILE",
          question:
            "Dans « La fleur est belle », quelle est la fonction de « belle » ?",
          options: ["Épithète", "COD", "Attribut du sujet", "Sujet"],
          bonne: 2,
          explication:
            "« Belle » est relié au sujet « fleur » par le verbe « est ».",
        },
      ],

      moyen: [
        {
          niveau: "MOYEN",
          question:
            "Dans « Un garçon courageux aide son ami », quelle est la fonction de « courageux » ?",
          options: ["Attribut", "Épithète", "COD", "Sujet"],
          bonne: 1,
          explication:
            "« Courageux » accompagne directement le nom « garçon » : il est épithète.",
        },
        {
          niveau: "MOYEN",
          question:
            "Dans « Le garçon devient courageux », quelle est la fonction de « courageux » ?",
          options: ["Épithète", "Sujet", "Attribut du sujet", "COI"],
          bonne: 2,
          explication:
            "« Courageux » est relié au sujet « garçon » par le verbe d'état « devient ».",
        },
      ],

      difficile: [
        {
          niveau: "DIFFICILE",
          question:
            "Dans « Les élèves attentifs semblent prêts », quelles sont les fonctions des adjectifs « attentifs » et « prêts » ?",
          options: [
            "Attribut et épithète",
            "Épithète et attribut",
            "Deux COD",
            "Deux sujets",
          ],
          bonne: 1,
          explication:
            "« Attentifs » est directement lié à « élèves » : épithète. « Prêts » est relié au sujet par « semblent » : attribut.",
        },
        {
          niveau: "DIFFICILE",
          question:
            "Dans « Cette grande maison paraît abandonnée », quelle est la fonction de « grande » et « abandonnée » ?",
          options: [
            "Épithète et attribut",
            "Attribut et épithète",
            "Deux attributs",
            "Deux épithètes",
          ],
          bonne: 0,
          explication:
            "« Grande » accompagne directement « maison » : épithète. « Abandonnée » est relié au sujet par « paraît » : attribut.",
        },
      ],
    },

    quiz: [
      {
        question:
          "Quand l'adjectif est-il épithète ?",
        options: [
          "Lorsqu'il est directement lié au nom",
          "Lorsqu'il remplace le nom",
          "Lorsqu'il est toujours après le verbe",
          "Lorsqu'il est sujet",
        ],
        bonne: 0,
        explication:
          "L'adjectif est épithète lorsqu'il est directement lié au nom qu'il qualifie.",
      },
      {
        question:
          "Dans « La voiture est rapide », quelle est la fonction de « rapide » ?",
        options: ["Épithète", "Attribut du sujet", "COD", "COI"],
        bonne: 1,
        explication:
          "« Rapide » est relié au sujet « voiture » par le verbe d'état « est » : c'est un attribut du sujet.",
      },
    ],
  },  "Le complément du nom": {
    objectif:
      "Identifier le complément du nom et comprendre comment il précise le sens d'un nom.",

    explication:
      "Le complément du nom est un groupe de mots qui complète un nom en apportant une précision sur celui-ci. Il est souvent introduit par une préposition comme « de », « à », « en », « avec » ou « pour ».",

    regle:
      "Le complément du nom dépend d'un nom et permet de préciser son sens. Il est généralement introduit par une préposition.",

    exemples: [
      "Le cahier de Paul.",
      "Une tasse à café.",
      "Une maison en bois.",
      "Un sac de voyage.",
      "Une table avec des fleurs.",
    ],

    exemplesCorriges: [
      {
        question: "Dans « Le cahier de Paul », quel est le complément du nom ?",
        réponse: "de Paul",
        explication:
          "« De Paul » complète le nom « cahier » en précisant à qui il appartient.",
      },
      {
        question: "Dans « Une maison en bois », quel est le complément du nom ?",
        réponse: "en bois",
        explication:
          "« En bois » complète le nom « maison » en précisant sa matière.",
      },
      {
        question: "Dans « Un sac de voyage », quel est le complément du nom ?",
        réponse: "de voyage",
        explication:
          "« De voyage » complète le nom « sac » et précise son usage.",
      },
    ],

    retenir:
      "Le complément du nom complète un nom et apporte une précision sur celui-ci. Il est généralement introduit par une préposition.",

    exercices: {
      facile: [
        {
          niveau: "FACILE",
          question:
            "Dans « Le livre de Marie », quel est le complément du nom ?",
          options: ["Le", "livre", "de Marie", "aucun"],
          bonne: 2,
          explication:
            "« De Marie » complète le nom « livre ».",
        },
        {
          niveau: "FACILE",
          question:
            "Dans « Une maison en pierre », quel groupe complète le nom « maison » ?",
          options: ["Une", "maison", "en pierre", "aucun"],
          bonne: 2,
          explication:
            "« En pierre » précise la matière de la maison.",
        },
      ],

      moyen: [
        {
          niveau: "MOYEN",
          question:
            "Dans « La voiture de mon père est rouge », quel est le complément du nom ?",
          options: [
            "La voiture",
            "de mon père",
            "est rouge",
            "rouge",
          ],
          bonne: 1,
          explication:
            "« De mon père » complète le nom « voiture ».",
        },
        {
          niveau: "MOYEN",
          question:
            "Dans « Une bouteille d'eau est sur la table », quel est le complément du nom ?",
          options: ["Une", "bouteille", "d'eau", "sur la table"],
          bonne: 2,
          explication:
            "« D'eau » complète le nom « bouteille ».",
        },
      ],

      difficile: [
        {
          niveau: "DIFFICILE",
          question:
            "Dans « Le professeur de français prépare une leçon de grammaire », quels sont les compléments du nom ?",
          options: [
            "de français et de grammaire",
            "Le professeur et une leçon",
            "prépare et grammaire",
            "français et leçon",
          ],
          bonne: 0,
          explication:
            "« De français » complète « professeur » et « de grammaire » complète « leçon ».",
        },
        {
          niveau: "DIFFICILE",
          question:
            "Dans « La maison de mon voisin possède une porte en bois », quels groupes sont des compléments du nom ?",
          options: [
            "de mon voisin et en bois",
            "La maison et une porte",
            "possède et une",
            "mon voisin et bois",
          ],
          bonne: 0,
          explication:
            "« De mon voisin » complète « maison » et « en bois » complète « porte ».",
        },
      ],
    },

    quiz: [
      {
        question: "Quel est le rôle du complément du nom ?",
        options: [
          "Préciser le sens d'un nom",
          "Remplacer un nom",
          "Conjuguer un verbe",
          "Relier deux verbes",
        ],
        bonne: 0,
        explication:
          "Le complément du nom apporte une précision sur le nom qu'il complète.",
      },
      {
        question:
          "Dans « Le vélo de Karim », quel est le complément du nom ?",
        options: ["Le", "vélo", "de Karim", "aucun"],
        bonne: 2,
        explication:
          "« De Karim » complète le nom « vélo ».",
      },
    ],
  },  "L'expansion du nom": {
    objectif:
      "Identifier les différents éléments qui peuvent enrichir et préciser un nom.",

    explication:
      "L'expansion du nom est un élément qui apporte des informations supplémentaires sur un nom. Elle peut être un adjectif qualificatif, un complément du nom ou une proposition subordonnée relative.",

    regle:
      "Les principales expansions du nom sont l'adjectif qualificatif, le complément du nom et la proposition subordonnée relative.",

    exemples: [
      "Une belle maison.",
      "Une maison en pierre.",
      "Une maison qui se trouve au village.",
      "Un grand arbre.",
      "Le livre de mon professeur.",
      "L'élève qui travaille réussira.",
    ],

    exemplesCorriges: [
      {
        question:
          "Dans « Une belle maison », quelle est l'expansion du nom ?",
        réponse: "belle",
        explication:
          "« Belle » est un adjectif qualificatif qui précise le nom « maison ».",
      },
      {
        question:
          "Dans « Une maison en pierre », quelle est l'expansion du nom ?",
        réponse: "en pierre",
        explication:
          "« En pierre » est un complément du nom qui précise la matière de la maison.",
      },
      {
        question:
          "Dans « L'élève qui travaille réussira », quelle est l'expansion du nom « élève » ?",
        réponse: "qui travaille",
        explication:
          "« Qui travaille » est une proposition subordonnée relative qui précise le nom « élève ».",
      },
    ],

    retenir: [
         "L'expansion du nom sert à enrichir et préciser un nom.",
         "Elle apporte des informations supplémentaires sur le nom.",
         "Elle peut être un adjectif qualificatif.",
         "Elle peut être un complément du nom.",
         "Elle peut être une proposition subordonnée relative.",
],

    exercices: {
      facile: [
        {
          niveau: "FACILE",
          question:
            "Dans « Une jolie fleur », quelle est l'expansion du nom ?",
          options: ["Une", "jolie", "fleur", "aucune"],
          bonne: 1,
          explication:
            "« Jolie » est un adjectif qualificatif qui précise le nom « fleur ».",
        },
        {
          niveau: "FACILE",
          question:
            "Dans « Le sac de Paul », quelle est l'expansion du nom ?",
          options: ["Le", "sac", "de Paul", "aucune"],
          bonne: 2,
          explication:
            "« De Paul » est un complément du nom.",
        },
      ],

      moyen: [
        {
          niveau: "MOYEN",
          question:
            "Dans « Une grande maison en pierre », quelles sont les expansions du nom « maison » ?",
          options: [
            "grande et en pierre",
            "Une et grande",
            "maison et pierre",
            "Une et en",
          ],
          bonne: 0,
          explication:
            "« Grande » est un adjectif qualificatif et « en pierre » est un complément du nom.",
        },
        {
          niveau: "MOYEN",
          question:
            "Dans « Le garçon qui court est rapide », quelle est l'expansion du nom « garçon » ?",
          options: [
            "Le",
            "garçon",
            "qui court",
            "est rapide",
          ],
          bonne: 2,
          explication:
            "« Qui court » est une proposition subordonnée relative qui précise le nom « garçon ».",
        },
      ],

      difficile: [
        {
          niveau: "DIFFICILE",
          question:
            "Dans « La magnifique maison de mon oncle qui se trouve à Abidjan est ancienne », quelles sont les expansions du nom « maison » ?",
          options: [
            "magnifique, de mon oncle et qui se trouve à Abidjan",
            "La, maison et ancienne",
            "de mon oncle et ancienne",
            "magnifique et ancienne",
          ],
          bonne: 0,
          explication:
            "« Magnifique » est un adjectif, « de mon oncle » est un complément du nom et « qui se trouve à Abidjan » est une proposition subordonnée relative.",
        },
        {
          niveau: "DIFFICILE",
          question:
            "Quelle phrase contient les trois principales formes d'expansion du nom ?",
          options: [
            "Le petit garçon de mon quartier qui joue au football est talentueux.",
            "Le garçon joue au football.",
            "Le garçon est talentueux.",
            "Mon garçon joue.",
          ],
          bonne: 0,
          explication:
            "« Petit » est un adjectif, « de mon quartier » est un complément du nom et « qui joue au football » est une proposition subordonnée relative.",
        },
      ],
    },

    quiz: [
      {
        question: "À quoi sert une expansion du nom ?",
        options: [
          "À enrichir et préciser un nom",
          "À remplacer le nom",
          "À conjuguer le verbe",
          "À supprimer le nom",
        ],
        bonne: 0,
        explication:
          "L'expansion du nom apporte des informations supplémentaires sur le nom.",
      },
      {
        question:
          "Laquelle de ces propositions est une expansion du nom ?",
        options: [
          "Un adjectif qualificatif",
          "Un verbe conjugué seul",
          "Une ponctuation",
          "Un déterminant seul",
        ],
        bonne: 0,
        explication:
          "L'adjectif qualificatif peut être une expansion du nom.",
      },
    ],
    },
    };


/* =========================================================
   COMPOSANT : ACCUEIL
   ========================================================= */


function Accueil({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.home}>
        <Text style={styles.logo}>Z.ÉDUCATION</Text>
        <Text style={styles.slogan}>Apprendre • Comprendre • Réussir</Text>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>GRAMMAIRE CM2</Text>
          <Text style={styles.heroText}>
            Un parcours complet pour apprendre la grammaire française
            progressivement.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => navigation("Chapitres")}
        >
          <Text style={styles.mainButtonText}>COMMENCER LE COURS</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>📚 Programme</Text>
          <Text style={styles.infoText}>11 chapitres</Text>
          <Text style={styles.infoText}>72 leçons</Text>
          <Text style={styles.infoText}>Cours + Exercices + Quiz</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* =========================================================
   COMPOSANT : CHAPITRES
   ========================================================= */

function Chapitres({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.screen}>
        <Text style={styles.pageTitle}>GRAMMAIRE CM2</Text>
        <Text style={styles.pageSubtitle}>Choisis un chapitre</Text>

        {GRAMMAIRE_CM2.map((chapitre, index) => (
          <TouchableOpacity
            key={chapitre.chapitre}
            style={styles.chapterCard}
            onPress={() => navigation("Lecons", chapitre, index)}
          >
            <View style={styles.chapterNumber}>
              <Text style={styles.chapterNumberText}>{index + 1}</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.chapterTitle}>
                {chapitre.chapitre.replace("CHAPITRE " + (index + 1) + " — ", "")}
              </Text>

              <Text style={styles.chapterCount}>
                {chapitre.lecons.length} leçon
                {chapitre.lecons.length > 1 ? "s" : ""}
              </Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

/* =========================================================
   COMPOSANT : LEÇONS
   ========================================================= */

function Lecons({ chapitre, chapitreIndex, navigation }) {
  let numeroDepart = 0;

  for (let i = 0; i < chapitreIndex; i++) {
    numeroDepart += GRAMMAIRE_CM2[i].lecons.length;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.screen}>
        <Text style={styles.pageTitle}>
          CHAPITRE {chapitreIndex + 1}
        </Text>

        <Text style={styles.chapterHeader}>
          {chapitre.chapitre.replace(
            "CHAPITRE " + (chapitreIndex + 1) + " — ",
            ""
          )}
        </Text>

        {chapitre.lecons.map((lecon, index) => {
          const disponible = Boolean(CONTENU_LECONS[lecon]);

          return (
            <TouchableOpacity
              key={lecon}
              style={[
                styles.lessonCard,
                !disponible && styles.lessonDisabled,
              ]}
              onPress={() => {
                if (disponible) {
                  navigation("Lecon", lecon, numeroDepart + index + 1);
                } else {
                  Alert.alert(
                    "Contenu à venir",
                    "Cette leçon sera bientôt disponible."
                  );
                }
              }}
            >
              <View
                style={[
                  styles.lessonNumber,
                  !disponible && styles.lessonNumberDisabled,
                ]}
              >
                <Text style={styles.lessonNumberText}>
                  {numeroDepart + index + 1}
                </Text>
              </View>

              <View style={{ flex: 1 }}>
                <Text style={styles.lessonTitle}>{lecon}</Text>

                <Text
                  style={[
                    styles.lessonStatus,
                    disponible
                      ? styles.available
                      : styles.unavailable,
                  ]}
                >
                  {disponible
                    ? "✓ Disponible"
                    : "🔒 Contenu à venir"}
                </Text>
              </View>

              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

/* =========================================================
   COMPOSANT : COURS
   ========================================================= */

function CoursView({ contenu }) {
  return (
    <ScrollView style={styles.tabScroll}>
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>🎯 Objectif</Text>
        <Text style={styles.bodyText}>{contenu.objectif}</Text>
      </View>

      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>📖 Explication</Text>
        <Text style={styles.bodyText}>{contenu.explication}</Text>
      </View>

      <View style={styles.ruleBox}>
        <Text style={styles.ruleTitle}>📌 RÈGLE</Text>
        <Text style={styles.ruleText}>{contenu.regle}</Text>
      </View>

      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>✏️ Exemples</Text>

        {contenu.exemples.map((exemple, index) => (
          <View key={index} style={styles.exampleRow}>
            <Text style={styles.exampleNumber}>{index + 1}</Text>
            <Text style={styles.exampleText}>{exemple}</Text>
          </View>
        ))}
      </View>

      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>✅ Exemples corrigés</Text>

        {contenu.exemplesCorriges.map((item, index) => (
          <View key={index} style={styles.correctedExample}>
            <Text style={styles.questionText}>
              {index + 1}. {item.question}
            </Text>

            <Text style={styles.answerText}>
              Réponse : {item.réponse}
            </Text>

            <Text style={styles.correctionText}>
              💡 {item.explication}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.retainBox}>
        <Text style={styles.retainTitle}>🧠 À RETENIR</Text>

        {contenu.retenir.map((item, index) => (
          <Text key={index} style={styles.retainText}>
            • {item}
          </Text>
        ))}
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

/* =========================================================
   COMPOSANT : EXERCICES
   ========================================================= */

function ExerciseView({ exercices }) {
  const [niveau, setNiveau] = useState("facile");
  const [index, setIndex] = useState(0);
  const [afficherCorrection, setAfficherCorrection] = useState(false);

  const liste = exercices[niveau];
  const exercice = liste[index];

  const changerNiveau = (nouveauNiveau) => {
    setNiveau(nouveauNiveau);
    setIndex(0);
    setAfficherCorrection(false);
  };

  const suivant = () => {
    if (index < liste.length - 1) {
      setIndex(index + 1);
      setAfficherCorrection(false);
    } else {
      Alert.alert(
        "Bravo ! 🎉",
        `Tu as terminé le niveau ${niveau.toUpperCase()}.`
      );
      setIndex(0);
      setAfficherCorrection(false);
    }
  };

  return (
    <ScrollView style={styles.tabScroll}>
      <View style={styles.levelButtons}>
        {["facile", "moyen", "difficile"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.levelButton,
              niveau === item && styles.levelButtonActive,
            ]}
            onPress={() => changerNiveau(item)}
          >
            <Text
              style={[
                styles.levelButtonText,
                niveau === item && styles.levelButtonTextActive,
              ]}
            >
              {item.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.exerciseCard}>
        <Text style={styles.exerciseCounter}>
          Exercice {index + 1} / {liste.length}
        </Text>

        <Text style={styles.exerciseQuestion}>
          {exercice.question}
        </Text>

        {afficherCorrection && (
          <View style={styles.correctionBox}>
            <Text style={styles.answerTitle}>Réponse :</Text>
            <Text style={styles.answerText}>
              {exercice.réponse}
            </Text>

            <Text style={styles.answerTitle}>Correction :</Text>
            <Text style={styles.correctionText}>
              {exercice.correction}
            </Text>
          </View>
        )}

        {!afficherCorrection ? (
          <TouchableOpacity
            style={styles.correctionButton}
            onPress={() => setAfficherCorrection(true)}
          >
            <Text style={styles.correctionButtonText}>
              VOIR LA CORRECTION
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={suivant}
          >
            <Text style={styles.nextButtonText}>
              EXERCICE SUIVANT →
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.tipBox}>
        <Text style={styles.tipTitle}>💡 Conseil</Text>
        <Text style={styles.tipText}>
          Essaie toujours de répondre avant de regarder la correction.
        </Text>
      </View>
    </ScrollView>
  );
}

/* =========================================================
   COMPOSANT : QUIZ
   ========================================================= */

function QuizView({ quiz }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [repondu, setRepondu] = useState(false);
  const [termine, setTermine] = useState(false);

  const question = quiz[index];

  const repondre = (choix) => {
    if (repondu) return;

    if (choix === question.bonne) {
      setScore((ancien) => ancien + 1);
    }

    setRepondu(true);
  };

  const suivant = () => {
    if (index < quiz.length - 1) {
      setIndex(index + 1);
      setRepondu(false);
    } else {
      setTermine(true);
    }
  };

  const recommencer = () => {
    setIndex(0);
    setScore(0);
    setRepondu(false);
    setTermine(false);
  };

  if (termine) {
    return (
      <ScrollView style={styles.tabScroll}>
        <View style={styles.resultCard}>
          <Text style={styles.resultEmoji}>🏆</Text>

          <Text style={styles.resultTitle}>
            Quiz terminé !
          </Text>

          <Text style={styles.resultScore}>
            {score} / {quiz.length}
          </Text>

          <Text style={styles.resultMessage}>
            {score === quiz.length
              ? "Excellent ! Tu maîtrises cette leçon. 🎉"
              : score >= quiz.length / 2
              ? "Bien joué ! Continue tes révisions. 👍"
              : "Continue à t'entraîner. Tu vas progresser ! 💪"}
          </Text>

          <TouchableOpacity
            style={styles.mainButton}
            onPress={recommencer}
          >
            <Text style={styles.mainButtonText}>
              RECOMMENCER LE QUIZ
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.tabScroll}>
      <View style={styles.quizHeader}>
        <Text style={styles.quizCounter}>
          Question {index + 1} / {quiz.length}
        </Text>

        <Text style={styles.quizScore}>
          Score : {score}
        </Text>
      </View>

      <View style={styles.quizCard}>
        <Text style={styles.quizLevel}>
          {question.niveau}
        </Text>

        <Text style={styles.quizQuestion}>
          {question.question}
        </Text>

        {question.options.map((option, i) => {
          let optionStyle = styles.optionButton;

          if (repondu && i === question.bonne) {
            optionStyle = styles.optionCorrect;
          }

          if (repondu && i !== question.bonne) {
            optionStyle = styles.optionWrong;
          }

          return (
            <TouchableOpacity
              key={i}
              style={optionStyle}
              onPress={() => repondre(i)}
              disabled={repondu}
            >
              <Text style={styles.optionText}>
                {String.fromCharCode(65 + i)}. {option}
              </Text>
            </TouchableOpacity>
          );
        })}

        {repondu && (
          <View style={styles.quizCorrection}>
            <Text style={styles.quizCorrectionTitle}>
              {score === score ? "💡 Explication" : "💡 Explication"}
            </Text>

            <Text style={styles.correctionText}>
              {question.explication}
            </Text>

            <TouchableOpacity
              style={styles.nextButton}
              onPress={suivant}
            >
              <Text style={styles.nextButtonText}>
                {index === quiz.length - 1
                  ? "VOIR MON SCORE"
                  : "QUESTION SUIVANTE →"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

/* =========================================================
   COMPOSANT : LEÇON
   ========================================================= */

function Lecon({ lecon, numero }) {
  const [tab, setTab] = useState("cours");

  const contenu = CONTENU_LECONS[lecon];

  if (!contenu) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>Contenu à venir</Text>
          <Text style={styles.emptyText}>
            Cette leçon sera bientôt disponible.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.lessonHeader}>
        <Text style={styles.lessonHeaderNumber}>
          LEÇON {numero}
        </Text>

        <Text style={styles.lessonHeaderTitle}>
          {lecon}
        </Text>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tab,
            tab === "cours" && styles.tabActive,
          ]}
          onPress={() => setTab("cours")}
        >
          <Text
            style={[
              styles.tabText,
              tab === "cours" && styles.tabTextActive,
            ]}
          >
            📚 COURS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            tab === "exercices" && styles.tabActive,
          ]}
          onPress={() => setTab("exercices")}
        >
          <Text
            style={[
              styles.tabText,
              tab === "exercices" && styles.tabTextActive,
            ]}
          >
            📝 EXERCICES
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            tab === "quiz" && styles.tabActive,
          ]}
          onPress={() => setTab("quiz")}
        >
          <Text
            style={[
              styles.tabText,
              tab === "quiz" && styles.tabTextActive,
            ]}
          >
            🧠 QUIZ
          </Text>
        </TouchableOpacity>
      </View>

      {tab === "cours" && <CoursView contenu={contenu} />}

      {tab === "exercices" && (
        <ExerciseView exercices={contenu.exercices} />
      )}

      {tab === "quiz" && <QuizView quiz={contenu.quiz} />}
    </SafeAreaView>
  );
}

/* =========================================================
   NAVIGATION PRINCIPALE
   ========================================================= */

export default function App() {
  const [page, setPage] = useState("Accueil");
  const [chapitre, setChapitre] = useState(null);
  const [chapitreIndex, setChapitreIndex] = useState(0);
  const [lecon, setLecon] = useState(null);
  const [numeroLecon, setNumeroLecon] = useState(1);

  const navigation = (destination, data, index) => {
    if (destination === "Chapitres") {
      setPage("Chapitres");
    }

    if (destination === "Lecons") {
      setChapitre(data);
      setChapitreIndex(index);
      setPage("Lecons");
    }

    if (destination === "Lecon") {
      setLecon(data);
      setNumeroLecon(index);
      setPage("Lecon");
    }
  };

  if (page === "Accueil") {
    return <Accueil navigation={navigation} />;
  }

  if (page === "Chapitres") {
    return <Chapitres navigation={navigation} />;
  }

  if (page === "Lecons") {
    return (
      <Lecons
        chapitre={chapitre}
        chapitreIndex={chapitreIndex}
        navigation={navigation}
      />
    );
  }

  if (page === "Lecon") {
    return (
      <Lecon
        lecon={lecon}
        numero={numeroLecon}
      />
    );
  }

  return null;
}

/* =========================================================
   STYLES
   ========================================================= */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  home: {
    padding: 22,
    alignItems: "center",
  },

  logo: {
    fontSize: 32,
    fontWeight: "900",
    marginTop: 35,
    color: "#172554",
  },

  slogan: {
    fontSize: 15,
    marginTop: 8,
    color: "#64748B",
  },

  hero: {
    width: "100%",
    marginTop: 35,
    padding: 25,
    borderRadius: 20,
    backgroundColor: "#E0E7FF",
  },

  heroTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#1E3A8A",
    marginBottom: 10,
  },

  heroText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#334155",
  },

  mainButton: {
    marginTop: 25,
    backgroundColor: "#1D4ED8",
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 14,
    alignItems: "center",
  },

  mainButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  infoBox: {
    width: "100%",
    marginTop: 25,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },

  infoTitle: {
    fontSize: 19,
    fontWeight: "800",
    marginBottom: 10,
  },

  infoText: {
    fontSize: 15,
    color: "#475569",
    marginVertical: 4,
  },

  screen: {
    padding: 18,
    paddingBottom: 40,
  },

  pageTitle: {
    fontSize: 25,
    fontWeight: "900",
    color: "#172554",
    marginBottom: 5,
  },

  pageSubtitle: {
    color: "#64748B",
    marginBottom: 20,
    fontSize: 15,
  },

  chapterHeader: {
    fontSize: 18,
    fontWeight: "800",
    color: "#1D4ED8",
    marginBottom: 18,
  },

  chapterCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  chapterNumber: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#1D4ED8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  chapterNumberText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "900",
  },

  chapterTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#1E293B",
  },

  chapterCount: {
    marginTop: 5,
    color: "#64748B",
  },

  arrow: {
    fontSize: 28,
    color: "#94A3B8",
    marginLeft: 10,
  },

  lessonCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 14,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  lessonDisabled: {
    opacity: 0.6,
  },

  lessonNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#DBEAFE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  lessonNumberDisabled: {
    backgroundColor: "#E2E8F0",
  },

  lessonNumberText: {
    color: "#1D4ED8",
    fontWeight: "900",
  },

  lessonTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1E293B",
    lineHeight: 20,
  },

  lessonStatus: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "700",
  },

  available: {
    color: "#16A34A",
  },

  unavailable: {
    color: "#94A3B8",
  },

  lessonHeader: {
    padding: 18,
    backgroundColor: "#FFFFFF",
  },

  lessonHeaderNumber: {
    color: "#1D4ED8",
    fontSize: 12,
    fontWeight: "900",
  },

  lessonHeaderTitle: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: "900",
    color: "#172554",
  },

  tabs: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E8F0",
  },

  tab: {
    flex: 1,
    paddingVertical: 14,
    alignItems: "center",
  },

  tabActive: {
    borderBottomWidth: 3,
    borderBottomColor: "#1D4ED8",
  },

  tabText: {
    fontSize: 11,
    fontWeight: "800",
    color: "#64748B",
  },

  tabTextActive: {
    color: "#1D4ED8",
  },

  tabScroll: {
    flex: 1,
    padding: 16,
  },

  sectionBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 17,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#172554",
    marginBottom: 10,
  },

  bodyText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#334155",
  },

  ruleBox: {
    backgroundColor: "#FEF3C7",
    borderRadius: 15,
    padding: 17,
    marginBottom: 14,
    borderLeftWidth: 5,
    borderLeftColor: "#F59E0B",
  },

  ruleTitle: {
    fontSize: 16,
    fontWeight: "900",
    color: "#92400E",
    marginBottom: 8,
  },

  ruleText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#78350F",
  },

  exampleRow: {
    flexDirection: "row",
    marginBottom: 10,
  },

  exampleNumber: {
    width: 25,
    fontWeight: "900",
    color: "#1D4ED8",
  },

  exampleText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: "#334155",
  },

  correctedExample: {
    borderTopWidth: 1,
    borderTopColor: "#E2E8F0",
    paddingTop: 12,
    marginTop: 10,
  },

  questionText: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "700",
    color: "#1E293B",
  },

  answerText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#15803D",
    fontWeight: "700",
    marginTop: 8,
  },

  correctionText: {
    fontSize: 14,
    lineHeight: 21,
    color: "#475569",
    marginTop: 7,
  },

  retainBox: {
    backgroundColor: "#DCFCE7",
    borderRadius: 15,
    padding: 17,
    marginBottom: 15,
  },

  retainTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#166534",
    marginBottom: 10,
  },

  retainText: {
    fontSize: 15,
    lineHeight: 23,
    color: "#166534",
    marginBottom: 5,
  },

  levelButtons: {
    flexDirection: "row",
    marginBottom: 15,
  },

  levelButton: {
    flex: 1,
    paddingVertical: 11,
    marginHorizontal: 3,
    borderRadius: 10,
    backgroundColor: "#E2E8F0",
    alignItems: "center",
  },

  levelButtonActive: {
    backgroundColor: "#1D4ED8",
  },

  levelButtonText: {
    fontSize: 11,
    fontWeight: "900",
    color: "#475569",
  },

  levelButtonTextActive: {
    color: "#FFFFFF",
  },

  exerciseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 20,
    marginBottom: 15,
  },

  exerciseCounter: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "800",
    marginBottom: 15,
  },

  exerciseQuestion: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "800",
    color: "#172554",
    marginBottom: 20,
  },

  correctionBox: {
    backgroundColor: "#F0FDF4",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },

  answerTitle: {
    fontSize: 14,
    fontWeight: "900",
    color: "#166534",
    marginTop: 5,
  },

  correctionButton: {
    backgroundColor: "#1D4ED8",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  correctionButtonText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },

  nextButton: {
    backgroundColor: "#16A34A",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  nextButtonText: {
    color: "#FFFFFF",
    fontWeight: "900",
  },

  tipBox: {
    backgroundColor: "#E0E7FF",
    padding: 16,
    borderRadius: 14,
    marginBottom: 30,
  },

  tipTitle: {
    fontWeight: "900",
    color: "#3730A3",
    marginBottom: 5,
  },

  tipText: {
    color: "#4338CA",
    lineHeight: 21,
  },

  quizHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  quizCounter: {
    color: "#64748B",
    fontWeight: "800",
  },

  quizScore: {
    color: "#1D4ED8",
    fontWeight: "900",
  },

  quizCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 18,
  },

  quizLevel: {
    alignSelf: "flex-start",
    backgroundColor: "#DBEAFE",
    color: "#1D4ED8",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    fontSize: 11,
    fontWeight: "900",
    marginBottom: 14,
  },

  quizQuestion: {
    fontSize: 19,
    lineHeight: 27,
    fontWeight: "900",
    color: "#172554",
    marginBottom: 18,
  },

  optionButton: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },

  optionCorrect: {
    borderWidth: 2,
    borderColor: "#16A34A",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: "#DCFCE7",
  },

  optionWrong: {
    borderWidth: 1,
    borderColor: "#CBD5E1",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    backgroundColor: "#F8FAFC",
  },

  optionText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#334155",
  },

  quizCorrection: {
    marginTop: 10,
    backgroundColor: "#EFF6FF",
    padding: 15,
    borderRadius: 12,
  },

  quizCorrectionTitle: {
    fontWeight: "900",
    color: "#1D4ED8",
    marginBottom: 5,
  },

  resultCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    marginTop: 20,
  },

  resultEmoji: {
    fontSize: 55,
    marginBottom: 10,
  },

  resultTitle: {
    fontSize: 25,
    fontWeight: "900",
    color: "#172554",
  },

  resultScore: {
    fontSize: 45,
    fontWeight: "900",
    color: "#1D4ED8",
    marginVertical: 15,
  },

  resultMessage: {
    textAlign: "center",
    fontSize: 16,
    lineHeight: 24,
    color: "#475569",
  },

  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },

  emptyTitle: {
    fontSize: 25,
    fontWeight: "900",
    color: "#172554",
    marginBottom: 10,
  },

  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#64748B",
  },
});