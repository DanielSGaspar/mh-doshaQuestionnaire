export const translationsData = {
  en: {
    landing: {
      title: "Discover Your Ayurvedic Dosha",
      description:
        "Take our comprehensive questionnaire to understand your unique constitution and receive soap recommendations.",
      startQuestionnaire: "Start Questionnaire",
    },
    questionnaire: {
      intro: {
        title: "Ayurvedic Dosha Questionnaire",
        subtitle: "Learn about your unique mind-body constitution",
        p1: "In Ayurveda, the doshas—Vata, Pitta, and Kapha—are energetic forces that make up every individual.",
        p2: "This questionnaire will help you discover your unique dosha profile, which can guide your dietary, exercise, and lifestyle choices for optimal health and well-being.",
        p3: "The assessment takes about 5-10 minutes to complete. Answer each question based on your natural tendencies throughout your life, not just your current state.",
        beginAssessment: "Begin Assessment",
      },
      nextButton: "Next",
      backButton: "Back",
      submitButton: "See Results",

      sectionTitles: {
        physicalCharacteristics: "Physical Characteristics",
        digestionAndAppetite: "Digestion & Appetite",
        sleepPatterns: "Sleep Patterns",
        mentalAndEmotionalTraits: "Mental & Emotional Traits",
        activityAndBehavior: "Activity & Behavior",
        environmentalResponses: "Environmental Responses",
        healthTendencies: "Health Tendencies",
      },
      questions: {
        // Physical characteristics questions
        1: {
          text: "How would you describe your body frame?",
          options: {
            Vata: "Light and thin, possibly with prominent joints or veins",
            Pitta: "Medium build with moderate muscle development",
            Kapha: "Solid and strong, or heavy-set",
          },
        },
        2: {
          text: "How would you describe your skin?",
          options: {
            Vata: "Dry, rough, or thin",
            Pitta: "Warm, reddish, prone to rashes or acne",
            Kapha: "Smooth, thick, and oily",
          },
        },
        3: {
          text: "What's your typical experience with body temperature?",
          options: {
            Vata: "I often feel cold, especially in my hands and feet",
            Pitta: "I run warm and may get overheated easily",
            Kapha: "My temperature is steady and I rarely feel too hot or cold",
          },
        },
        4: {
          text: "How would you describe your hair?",
          options: {
            Vata: "Dry, frizzy, or brittle",
            Pitta: "Fine, straight, early graying, or tendency toward thinning",
            Kapha: "Thick, wavy, and oily",
          },
        },
        5: {
          text: "How would you describe your weight management?",
          options: {
            Vata: "I struggle to gain weight or maintain it",
            Pitta: "I maintain a fairly steady weight with moderate effort",
            Kapha: "I gain weight easily and have difficulty losing it",
          },
        },
        // Digestion & Appetite
        6: {
          text: "How would you describe your appetite?",
          options: {
            Vata: "Variable and unpredictable; I sometimes forget to eat",
            Pitta: "Strong and regular; I get irritable if I miss a meal",
            Kapha: "Steady but can skip meals without much discomfort",
          },
        },
        7: {
          text: "How is your digestion typically?",
          options: {
            Vata: "Irregular, with tendency toward gas and bloating",
            Pitta:
              "Quick and efficient, but sometimes with heartburn or acid reflux",
            Kapha: "Slow and steady, sometimes feeling heavy after eating",
          },
        },
        8: {
          text: "How are your bowel movements typically?",
          options: {
            Vata: "Tend toward constipation or irregularity",
            Pitta: "Regular, sometimes loose or urgent",
            Kapha: "Regular and solid, sometimes sluggish",
          },
        },
        9: {
          text: "What types of food do you typically crave?",
          options: {
            Vata: "Warm, comforting foods with sweet, salty, or sour tastes",
            Pitta: "Cooling foods, bitter flavors, or spicy foods",
            Kapha: "Rich, sweet foods or comfort foods",
          },
        },
        // Sleep Patterns
        10: {
          text: "How would you describe your typical sleep?",
          options: {
            Vata: "Light and easily disrupted, may wake up during the night",
            Pitta: "Moderate in duration, generally sound but may wake up hot",
            Kapha: "Deep and long, sometimes difficult to wake up",
          },
        },
        11: {
          text: "What is your energy level like throughout the day?",
          options: {
            Vata: "Variable with bursts of energy followed by fatigue",
            Pitta: "Strong and consistent but may burn out if pushed too hard",
            Kapha: "Steady and enduring but takes time to get going",
          },
        },
        // Mental & Emotional Traits
        12: {
          text: "How quickly do you learn new information?",
          options: {
            Vata: "I learn quickly but may forget just as quickly",
            Pitta: "I learn at a moderate pace with good retention",
            Kapha: "I learn more slowly but remember for a long time",
          },
        },
        13: {
          text: "How do you typically respond to stress?",
          options: {
            Vata: "With anxiety, worry, or feeling overwhelmed",
            Pitta: "With frustration, irritability, or anger",
            Kapha: "By withdrawing, becoming stubborn, or feeling unmotivated",
          },
        },
        14: {
          text: "How would you describe your speech patterns?",
          options: {
            Vata: "Fast-paced, sometimes jumping between topics",
            Pitta: "Precise, clear, and direct",
            Kapha: "Slow, methodical, and thoughtful",
          },
        },
        15: {
          text: "How would others describe your personality when you're at your best?",
          options: {
            Vata: "Creative, enthusiastic, and spontaneous",
            Pitta: "Focused, intelligent, and determined",
            Kapha: "Calm, loyal, and nurturing",
          },
        },
        // Activity & Behavior
        16: {
          text: "How do you approach work or projects?",
          options: {
            Vata: "With enthusiasm and creativity, but may have trouble completing them",
            Pitta:
              "With focus and intensity, often pushing to reach goals quickly",
            Kapha:
              "With patience and thoroughness, working steadily until completion",
          },
        },
        17: {
          text: "How do you typically manage money?",
          options: {
            Vata: "I spend impulsively and don't always track my finances closely",
            Pitta:
              "I budget well but enjoy spending on quality items or experiences",
            Kapha: "I save carefully and am cautious about spending",
          },
        },
        18: {
          text: "How do you prefer to exercise?",
          options: {
            Vata: "Variable activities like dancing, walking, or gentle yoga",
            Pitta:
              "Challenging, competitive sports or moderate intensity workouts",
            Kapha: "Steady, endurance-based activities or strength training",
          },
        },
        19: {
          text: "How do you respond to change?",
          options: {
            Vata: "I enjoy and often seek out change and new experiences",
            Pitta:
              "I adapt to necessary changes but prefer to be in control of them",
            Kapha:
              "I prefer stability and routine, finding change uncomfortable",
          },
        },
        // Environmental Responses
        20: {
          text: "Which weather conditions do you find most uncomfortable?",
          options: {
            Vata: "Cold, dry, or windy weather",
            Pitta: "Hot, humid, or intense sunshine",
            Kapha: "Cold, damp, or cloudy conditions",
          },
        },
        21: {
          text: "How do you typically feel at the end of the day?",
          options: {
            Vata: "Mentally tired but physically restless",
            Pitta: "Physically exhausted but mentally alert",
            Kapha: "Steady energy but ready for relaxation",
          },
        },
        // Health Tendencies
        22: {
          text: "Which health issues do you tend to experience most often?",
          options: {
            Vata: "Anxiety, insomnia, constipation, or dry skin",
            Pitta: "Inflammation, skin rashes, heartburn, or headaches",
            Kapha:
              "Congestion, weight gain, water retention, or respiratory issues",
          },
        },
        23: {
          text: "How is your thirst level typically?",
          options: {
            Vata: "Variable, sometimes forgetting to drink enough water",
            Pitta: "Consistently thirsty, drinking throughout the day",
            Kapha: "Low to moderate, not feeling very thirsty",
          },
        },
        24: {
          text: "How would you describe your joints?",
          options: {
            Vata: "Crack easily or feel stiff",
            Pitta: "Moderate flexibility with occasional inflammation",
            Kapha: "Strong and stable but sometimes feel heavy",
          },
        },
      },

      results: {
        title: "Dosha Test Result: Interpretation & Guide",
        topSection: {
          intro:
            "We all have the three doshas within us, but one or two usually predominate.",
          checkPercentages: "Check your percentages:",
          explanation: `If one dosha is significantly higher (over 10% difference), that is
            your primary dosha. If two are close together, your constitution is
            dual. If all three are balanced (less than 7% difference), you have
            a tridoshic constitution. Knowing your predominant dosha helps you
            better care for your body, mind and emotions in daily life.`,
        },
        additionalCopy: {
          theyNeed: "They need: ",
          soapRecommendations: "Soap Recommendations",
          benefits: "Benefits:",
        },
        doshasDescriptions: {
          vata: {
            characteristics:
              "Creativity, quick thinking, enthusiasm. Light, expressive and active personalities, but prone to exhaustion, anxiety and dryness.",
            needs: "Warmth, rest, grounding and stability.",
            soapRecommendations: {
              soaps:
                "Jasmine, calendula & patchouli, lavender, ylang ylang, coconut",
              effects:
                "Nourishing and grounding scents that calm the nervous system and hydrate dry skin.",
            },
          },
          pitta: {
            characteristics:
              "Clarity, leadership, passion. Organised, intense and action-driven, but can lean towards anger, criticism and burnout.",
            needs: "Coolness, gentleness, and time to enjoy without pressure.",
            soapRecommendations: {
              soaps:
                "Peppermint, rosemary, lavender, lemongrass, ylang ylang, charcoal & eucalyptus, coconut",
              effects:
                "Cooling and soothing aromas to balance heat and calm intensity.",
            },
          },
          kapha: {
            characteristics:
              "Stability, tenderness, calm. Patient, loving and dependable, but may tend towards sluggishness, attachment and heaviness.",
            needs: "Movement, lightness, motivation and change.",
            soapRecommendations: {
              soaps:
                "Coffee & cinnamon, rose geranium, rosemary, charcoal & eucalyptus, lemongrass",
              effects:
                "Stimulating and invigorating blends that awaken and energise.",
            },
          },
        },
        bottomSection: {
          title: "Get to Know the Doshas",
          retakeTest: "Retake test",
        },
      },
    },
    followUs: "Follow us: ",
  },
  pt: {
    landing: {
      title: "Descobre o teu Dosha Ayurvédico",
      description:
        "Responde ao nosso questionário para compreender a tua constituição única e receber recomendações de sabonetes.",
      startQuestionnaire: "Iniciar questionário",
    },
    questionnaire: {
      intro: {
        title: "Questionário de Dosha Ayurvédico",
        subtitle: "Conhece a tua constituição única de mente-corpo",
        p1: "No Ayurveda, os doshas—Vata, Pitta e Kapha—são forças energéticas que compõem cada indivíduo.",
        p2: "Este questionário vai ajudar-te a descobrir o teu perfil de dosha único, que pode orientar as tuas escolhas alimentares, de exercício e de estilo de vida para uma saúde e bem-estar ideais.",
        p3: "A avaliação demora cerca de 5-10 minutos a completar. Responde a cada pergunta com base nas tuas tendências naturais ao longo da tua vida, não apenas no teu estado atual.",
        beginAssessment: "Começar Avaliação",
      },
      nextButton: "Próximo",
      backButton: "Voltar",
      submitButton: "Ver Resultados",

      // Section titles
      sectionTitles: {
        physicalCharacteristics: "Características Físicas",
        digestionAndAppetite: "Digestão e Apetite",
        sleepPatterns: "Padrões de Sono",
        mentalAndEmotionalTraits: "Características Mentais e Emocionais",
        activityAndBehavior: "Atividade e Comportamento",
        environmentalResponses: "Respostas Ambientais",
        healthTendencies: "Tendências de Saúde",
      },

      // Questions and options
      questions: {
        // Physical characteristics questions
        1: {
          text: "Como descreverias a tua estrutura corporal?",
          options: {
            Vata: "Leve e magra, possivelmente com articulações ou veias proeminentes",
            Pitta: "Estrutura média com desenvolvimento muscular moderado",
            Kapha: "Sólida e forte, ou corpulenta",
          },
        },
        2: {
          text: "Como descreverias a tua pele?",
          options: {
            Vata: "Seca, áspera ou fina",
            Pitta: "Quente, avermelhada, propensa a erupções ou acne",
            Kapha: "Suave, espessa e oleosa",
          },
        },
        3: {
          text: "Qual é a tua experiência típica com a temperatura corporal?",
          options: {
            Vata: "Sinto-me frequentemente com frio, especialmente nas mãos e pés",
            Pitta:
              "Tenho tendência para sentir calor e posso sobreaquecer facilmente",
            Kapha:
              "A minha temperatura é constante e raramente sinto demasiado calor ou frio",
          },
        },
        4: {
          text: "Como descreverias o teu cabelo?",
          options: {
            Vata: "Seco, frisado ou quebradiço",
            Pitta:
              "Fino, liso, com tendência a embranquecer cedo ou a ficar ralo",
            Kapha: "Espesso, ondulado e oleoso",
          },
        },
        5: {
          text: "Como descreverias a gestão do teu peso?",
          options: {
            Vata: "Tenho dificuldade em ganhar peso ou mantê-lo",
            Pitta:
              "Mantenho um peso relativamente estável com esforço moderado",
            Kapha: "Ganho peso facilmente e tenho dificuldade em perdê-lo",
          },
        },
        // Digestion & Appetite
        6: {
          text: "Como descreverias o teu apetite?",
          options: {
            Vata: "Variável e imprevisível; às vezes esqueço-me de comer",
            Pitta: "Forte e regular; fico irritado se falhar uma refeição",
            Kapha:
              "Constante, mas posso saltar refeições sem grande desconforto",
          },
        },
        7: {
          text: "Como é a tua digestão normalmente?",
          options: {
            Vata: "Irregular, com tendência para gases e inchaço",
            Pitta: "Rápida e eficiente, mas às vezes com azia ou refluxo ácido",
            Kapha:
              "Lenta e constante, às vezes com sensação de peso após comer",
          },
        },
        8: {
          text: "Como são os teus movimentos intestinais normalmente?",
          options: {
            Vata: "Tendem para a prisão de ventre ou irregularidade",
            Pitta: "Regulares, às vezes soltos ou urgentes",
            Kapha: "Regulares e sólidos, às vezes lentos",
          },
        },
        9: {
          text: "Que tipos de comida costumas desejar?",
          options: {
            Vata: "Alimentos quentes e reconfortantes com sabores doces, salgados ou azedos",
            Pitta:
              "Alimentos refrescantes, sabores amargos ou comidas picantes",
            Kapha: "Alimentos ricos, doces ou comidas reconfortantes",
          },
        },
        // Sleep Patterns
        10: {
          text: "Como descreverias o teu sono típico?",
          options: {
            Vata: "Leve e facilmente perturbado, posso acordar durante a noite",
            Pitta:
              "Moderado em duração, geralmente profundo mas posso acordar com calor",
            Kapha: "Profundo e longo, às vezes é difícil acordar",
          },
        },
        11: {
          text: "Como é o teu nível de energia ao longo do dia?",
          options: {
            Vata: "Variável com picos de energia seguidos de fadiga",
            Pitta: "Forte e consistente, mas posso esgotar se forçado demais",
            Kapha: "Constante e duradouro, mas demoro algum tempo a começar",
          },
        },
        // Mental & Emotional Traits
        12: {
          text: "Com que rapidez aprendes nova informação?",
          options: {
            Vata: "Aprendo rapidamente mas posso esquecer com a mesma rapidez",
            Pitta: "Aprendo a um ritmo moderado com boa retenção",
            Kapha: "Aprendo mais lentamente mas lembro-me por muito tempo",
          },
        },
        13: {
          text: "Como costumas responder ao stress?",
          options: {
            Vata: "Com ansiedade, preocupação ou sentindo-me sobrecarregado",
            Pitta: "Com frustração, irritabilidade ou raiva",
            Kapha:
              "Retraindo-me, tornando-me teimoso ou sentindo-me desmotivado",
          },
        },
        14: {
          text: "Como descreverias os teus padrões de fala?",
          options: {
            Vata: "Ritmo acelerado, às vezes saltando entre tópicos",
            Pitta: "Preciso, claro e direto",
            Kapha: "Lento, metódico e ponderado",
          },
        },
        15: {
          text: "Como os outros descreveriam a tua personalidade quando estás no teu melhor?",
          options: {
            Vata: "Criativo, entusiasta e espontâneo",
            Pitta: "Focado, inteligente e determinado",
            Kapha: "Calmo, leal e afetuoso",
          },
        },
        // Activity & Behavior
        16: {
          text: "Como abordas o trabalho ou projetos?",
          options: {
            Vata: "Com entusiasmo e criatividade, mas posso ter dificuldade em completá-los",
            Pitta:
              "Com foco e intensidade, frequentemente esforçando-me para atingir objetivos rapidamente",
            Kapha:
              "Com paciência e minuciosidade, trabalhando de forma constante até à conclusão",
          },
        },
        17: {
          text: "Como costumas gerir o dinheiro?",
          options: {
            Vata: "Gasto impulsivamente e nem sempre controlo as minhas finanças de perto",
            Pitta:
              "Faço um bom orçamento mas gosto de gastar em itens ou experiências de qualidade",
            Kapha: "Poupo cuidadosamente e sou cauteloso com os gastos",
          },
        },
        18: {
          text: "Como preferes fazer exercício?",
          options: {
            Vata: "Atividades variáveis como dança, caminhada ou yoga suave",
            Pitta:
              "Desportos desafiantes e competitivos ou treinos de intensidade moderada",
            Kapha:
              "Atividades constantes baseadas em resistência ou treino de força",
          },
        },
        19: {
          text: "Como respondes à mudança?",
          options: {
            Vata: "Gosto e muitas vezes procuro mudança e novas experiências",
            Pitta:
              "Adapto-me às mudanças necessárias mas prefiro ter controlo sobre elas",
            Kapha:
              "Prefiro estabilidade e rotina, achando a mudança desconfortável",
          },
        },
        // Environmental Responses
        20: {
          text: "Que condições meteorológicas achas mais desconfortáveis?",
          options: {
            Vata: "Tempo frio, seco ou ventoso",
            Pitta: "Tempo quente, húmido ou sol intenso",
            Kapha: "Condições frias, húmidas ou nubladas",
          },
        },
        21: {
          text: "Como te sentes normalmente no final do dia?",
          options: {
            Vata: "Mentalmente cansado mas fisicamente inquieto",
            Pitta: "Fisicamente exausto mas mentalmente alerta",
            Kapha: "Energia constante mas pronto para relaxar",
          },
        },
        // Health Tendencies
        22: {
          text: "Que problemas de saúde tens tendência a experienciar com mais frequência?",
          options: {
            Vata: "Ansiedade, insónia, prisão de ventre ou pele seca",
            Pitta: "Inflamação, erupções cutâneas, azia ou dores de cabeça",
            Kapha:
              "Congestão, ganho de peso, retenção de água ou problemas respiratórios",
          },
        },
        23: {
          text: "Como é o teu nível de sede normalmente?",
          options: {
            Vata: "Variável, às vezes esqueço-me de beber água suficiente",
            Pitta: "Consistentemente com sede, bebendo ao longo do dia",
            Kapha: "Baixo a moderado, não sentindo muita sede",
          },
        },
        24: {
          text: "Como descreverias as tuas articulações?",
          options: {
            Vata: "Estalam facilmente ou sentem-se rígidas",
            Pitta: "Flexibilidade moderada com inflamação ocasional",
            Kapha: "Fortes e estáveis, mas às vezes sentem-se pesadas",
          },
        },
      },

      results: {
        title: "Resultado do Teste de Dosha: Interpretação e Guia",
        topSection: {
          intro:
            "Todos nós temos os três doshas dentro de nós, mas um ou dois geralmente predominam.",
          checkPercentages: "Verifica as tuas percentagens:",
          explanation: `Se um dosha for significativamente mais alto (diferença superior a 10%), esse é o teu dosha primário. Se dois estiverem próximos, a tua constituição é dupla. Se os três estiverem equilibrados (diferença inferior a 7%), tens uma constituição tridóshica. Conhecer o teu dosha predominante ajuda-te a cuidar melhor do teu corpo, mente e emoções no dia-a-dia.`,
        },
        additionalCopy: {
          theyNeed: "Precisam de: ",
          soapRecommendations: "Recomendações de Sabonetes",
          benefits: "Benefícios:",
        },
        doshasDescriptions: {
          vata: {
            characteristics:
              "Criatividade, pensamento rápido, entusiasmo. Personalidades leves, expressivas e ativas, mas propensas a exaustão, ansiedade e secura.",
            needs: "Calor, descanso, enraizamento e estabilidade.",
            soapRecommendations: {
              soaps:
                "Jasmim, calêndula e patchouli, lavanda, ylang ylang, coco",
              effects:
                "Aromas nutritivos e estabilizadores que acalmam o sistema nervoso e hidratam a pele seca.",
            },
          },
          pitta: {
            characteristics:
              "Clareza, liderança, paixão. Organizados, intensos e orientados para a ação, mas podem tender para a raiva, crítica e esgotamento.",
            needs: "Frescura, suavidade e tempo para desfrutar sem pressão.",
            soapRecommendations: {
              soaps:
                "Hortelã-pimenta, alecrim, lavanda, erva-limão, ylang ylang, carvão e eucalipto, coco",
              effects:
                "Aromas refrescantes e calmantes para equilibrar o calor e acalmar a intensidade.",
            },
          },
          kapha: {
            characteristics:
              "Estabilidade, ternura, calma. Pacientes, amorosos e confiáveis, mas podem tender para a lentidão, apego e peso.",
            needs: "Movimento, leveza, motivação e mudança.",
            soapRecommendations: {
              soaps:
                "Café e canela, gerânio rosa, alecrim, carvão e eucalipto, erva-limão",
              effects:
                "Misturas estimulantes e revigorantes que despertam e energizam.",
            },
          },
        },
        bottomSection: {
          title: "Conhece os Doshas",
          retakeTest: "Repetir teste",
        },
      },
    },
    followUs: "Segue-nos: ",
  },
};
