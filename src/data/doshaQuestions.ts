export type Option = {
  label: string;
  value: "Vata" | "Pitta" | "Kapha";
};

type Question = {
  id: number;
  category: string;
  text: string;
  options: Option[];
};

interface DoshaQuestions {
  physicalCharacteristicsSection: Question[];
  digestionAndAppetiteSection: Question[];
  sleepPaternsSection: Question[];
  mentalAndEmotionalTraitsSection: Question[];
  activityAndBehaviorSection: Question[];
  environmentalSection: Question[];
  healthTendenciesSection: Question[];
}

export const doshaQuestions: DoshaQuestions = {
  physicalCharacteristicsSection: [
    {
      id: 1,
      category: "Physical Characteristics",
      text: "How would you describe your body frame?",
      options: [
        {
          value: "Vata",
          label: "Light and thin, possibly with prominent joints or veins",
        },
        {
          value: "Pitta",
          label: "Medium build with moderate muscle development",
        },
        { value: "Kapha", label: "Solid and strong, or heavy-set" },
      ],
    },
    {
      id: 2,
      category: "Physical Characteristics",
      text: "How would you describe your skin?",
      options: [
        { value: "Vata", label: "Dry, rough, or thin" },
        { value: "Pitta", label: "Warm, reddish, prone to rashes or acne" },
        { value: "Kapha", label: "Smooth, thick, and oily" },
      ],
    },
    {
      id: 3,
      category: "Physical Characteristics",
      text: "What's your typical experience with body temperature?",
      options: [
        {
          value: "Vata",
          label: "I often feel cold, especially in my hands and feet",
        },
        { value: "Pitta", label: "I run warm and may get overheated easily" },
        {
          value: "Kapha",
          label: "My temperature is steady and I rarely feel too hot or cold",
        },
      ],
    },
    {
      id: 4,
      category: "Physical Characteristics",
      text: "How would you describe your hair?",
      options: [
        { value: "Vata", label: "Dry, frizzy, or brittle" },
        {
          value: "Pitta",
          label: "Fine, straight, early graying, or tendency toward thinning",
        },
        { value: "Kapha", label: "Thick, wavy, and oily" },
      ],
    },
    {
      id: 5,
      category: "Physical Characteristics",
      text: "How would you describe your weight management?",
      options: [
        { value: "Vata", label: "I struggle to gain weight or maintain it" },
        {
          value: "Pitta",
          label: "I maintain a fairly steady weight with moderate effort",
        },
        {
          value: "Kapha",
          label: "I gain weight easily and have difficulty losing it",
        },
      ],
    },
  ],

  digestionAndAppetiteSection: [
    {
      id: 6,
      category: "Digestion & Appetite",
      text: "How would you describe your appetite?",
      options: [
        {
          value: "Vata",
          label: "Variable and unpredictable; I sometimes forget to eat",
        },
        {
          value: "Pitta",
          label: "Strong and regular; I get irritable if I miss a meal",
        },
        {
          value: "Kapha",
          label: "Steady but can skip meals without much discomfort",
        },
      ],
    },
    {
      id: 7,
      category: "Digestion & Appetite",
      text: "How is your digestion typically?",
      options: [
        {
          value: "Vata",
          label: "Irregular, with tendency toward gas and bloating",
        },
        {
          value: "Pitta",
          label:
            "Quick and efficient, but sometimes with heartburn or acid reflux",
        },
        {
          value: "Kapha",
          label: "Slow and steady, sometimes feeling heavy after eating",
        },
      ],
    },
    {
      id: 8,
      category: "Digestion & Appetite",
      text: "How are your bowel movements typically?",
      options: [
        { value: "Vata", label: "Tend toward constipation or irregularity" },
        { value: "Pitta", label: "Regular, sometimes loose or urgent" },
        { value: "Kapha", label: "Regular and solid, sometimes sluggish" },
      ],
    },
    {
      id: 9,
      category: "Digestion & Appetite",
      text: "What types of food do you typically crave?",
      options: [
        {
          value: "Vata",
          label: "Warm, comforting foods with sweet, salty, or sour tastes",
        },
        {
          value: "Pitta",
          label: "Cooling foods, bitter flavors, or spicy foods",
        },
        { value: "Kapha", label: "Rich, sweet foods or comfort foods" },
      ],
    },
  ],

  sleepPaternsSection: [
    {
      id: 10,
      category: "Sleep Patterns",
      text: "How would you describe your typical sleep?",
      options: [
        {
          value: "Vata",
          label: "Light and easily disrupted, may wake up during the night",
        },
        {
          value: "Pitta",
          label: "Moderate in duration, generally sound but may wake up hot",
        },
        {
          value: "Kapha",
          label: "Deep and long, sometimes difficult to wake up",
        },
      ],
    },
    {
      id: 11,
      category: "Sleep Patterns",
      text: "What is your energy level like throughout the day?",
      options: [
        {
          value: "Vata",
          label: "Variable with bursts of energy followed by fatigue",
        },
        {
          value: "Pitta",
          label: "Strong and consistent but may burn out if pushed too hard",
        },
        {
          value: "Kapha",
          label: "Steady and enduring but takes time to get going",
        },
      ],
    },
  ],

  mentalAndEmotionalTraitsSection: [
    {
      id: 12,
      category: "Mental & Emotional Traits",
      text: "How quickly do you learn new information?",
      options: [
        {
          value: "Vata",
          label: "I learn quickly but may forget just as quickly",
        },
        {
          value: "Pitta",
          label: "I learn at a moderate pace with good retention",
        },
        {
          value: "Kapha",
          label: "I learn more slowly but remember for a long time",
        },
      ],
    },
    {
      id: 13,
      category: "Mental & Emotional Traits",
      text: "How do you typically respond to stress?",
      options: [
        { value: "Vata", label: "With anxiety, worry, or feeling overwhelmed" },
        { value: "Pitta", label: "With frustration, irritability, or anger" },
        {
          value: "Kapha",
          label: "By withdrawing, becoming stubborn, or feeling unmotivated",
        },
      ],
    },
    {
      id: 14,
      category: "Mental & Emotional Traits",
      text: "How would you describe your speech patterns?",
      options: [
        {
          value: "Vata",
          label: "Fast-paced, sometimes jumping between topics",
        },
        { value: "Pitta", label: "Precise, clear, and direct" },
        { value: "Kapha", label: "Slow, methodical, and thoughtful" },
      ],
    },
    {
      id: 15,
      category: "Mental & Emotional Traits",
      text: "How would others describe your personality when you're at your best?",
      options: [
        { value: "Vata", label: "Creative, enthusiastic, and spontaneous" },
        { value: "Pitta", label: "Focused, intelligent, and determined" },
        { value: "Kapha", label: "Calm, loyal, and nurturing" },
      ],
    },
  ],

  activityAndBehaviorSection: [
    {
      id: 16,
      category: "Activity & Behavior",
      text: "How do you approach work or projects?",
      options: [
        {
          value: "Vata",
          label:
            "With enthusiasm and creativity, but may have trouble completing them",
        },
        {
          value: "Pitta",
          label:
            "With focus and intensity, often pushing to reach goals quickly",
        },
        {
          value: "Kapha",
          label:
            "With patience and thoroughness, working steadily until completion",
        },
      ],
    },
    {
      id: 17,
      category: "Activity & Behavior",
      text: "How do you typically manage money?",
      options: [
        {
          value: "Vata",
          label:
            "I spend impulsively and don't always track my finances closely",
        },
        {
          value: "Pitta",
          label:
            "I budget well but enjoy spending on quality items or experiences",
        },
        {
          value: "Kapha",
          label: "I save carefully and am cautious about spending",
        },
      ],
    },
    {
      id: 18,
      category: "Activity & Behavior",
      text: "How do you prefer to exercise?",
      options: [
        {
          value: "Vata",
          label: "Variable activities like dancing, walking, or gentle yoga",
        },
        {
          value: "Pitta",
          label:
            "Challenging, competitive sports or moderate intensity workouts",
        },
        {
          value: "Kapha",
          label: "Steady, endurance-based activities or strength training",
        },
      ],
    },
    {
      id: 19,
      category: "Activity & Behavior",
      text: "How do you respond to change?",
      options: [
        {
          value: "Vata",
          label: "I enjoy and often seek out change and new experiences",
        },
        {
          value: "Pitta",
          label:
            "I adapt to necessary changes but prefer to be in control of them",
        },
        {
          value: "Kapha",
          label: "I prefer stability and routine, finding change uncomfortable",
        },
      ],
    },
  ],

  environmentalSection: [
    {
      id: 20,
      category: "Environmental Responses",
      text: "Which weather conditions do you find most uncomfortable?",
      options: [
        { value: "Vata", label: "Cold, dry, or windy weather" },
        { value: "Pitta", label: "Hot, humid, or intense sunshine" },
        { value: "Kapha", label: "Cold, damp, or cloudy conditions" },
      ],
    },
    {
      id: 21,
      category: "Environmental Responses",
      text: "How do you typically feel at the end of the day?",
      options: [
        { value: "Vata", label: "Mentally tired but physically restless" },
        { value: "Pitta", label: "Physically exhausted but mentally alert" },
        { value: "Kapha", label: "Steady energy but ready for relaxation" },
      ],
    },
  ],

  healthTendenciesSection: [
    {
      id: 22,
      category: "Health Tendencies",
      text: "Which health issues do you tend to experience most often?",
      options: [
        {
          value: "Vata",
          label: "Anxiety, insomnia, constipation, or dry skin",
        },
        {
          value: "Pitta",
          label: "Inflammation, skin rashes, heartburn, or headaches",
        },
        {
          value: "Kapha",
          label:
            "Congestion, weight gain, water retention, or respiratory issues",
        },
      ],
    },
    {
      id: 23,
      category: "Health Tendencies",
      text: "How is your thirst level typically?",
      options: [
        {
          value: "Vata",
          label: "Variable, sometimes forgetting to drink enough water",
        },
        {
          value: "Pitta",
          label: "Consistently thirsty, drinking throughout the day",
        },
        { value: "Kapha", label: "Low to moderate, not feeling very thirsty" },
      ],
    },
    {
      id: 24,
      category: "Health Tendencies",
      text: "How would you describe your joints?",
      options: [
        { value: "Vata", label: "Crack easily or feel stiff" },
        {
          value: "Pitta",
          label: "Moderate flexibility with occasional inflammation",
        },
        { value: "Kapha", label: "Strong and stable but sometimes feel heavy" },
      ],
    },
  ],
};
