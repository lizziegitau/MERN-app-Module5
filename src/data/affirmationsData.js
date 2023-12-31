const affirmationsData = [
    { id: 1, text: "I am now in control" },
    { id: 2, text: "My body is calm" },
    { id: 3, text: "I am feeling better" },
    { id: 4, text: "All is well in my world" },
    { id: 5, text: "I will get through today" },
    { id: 6, text: "I welcome a sense of calm into my life" },
    { id: 7, text: "I give myself permission to feel this way without judgment" },
    { id: 8, text: "It is okay. Everything will be fine" },
    { id: 9, text: "I am brave" },
    { id: 10, text: "I trust the world will help me live my best life" },
    { id: 11, text: "I release tension whenever I exhale" },
    { id: 12, text: "I am strong and ready for change" },
    { id: 13, text: "I am freeing myself from stress" },
    { id: 14, text: "I am feeling freer and healthier" },
    { id: 15, text: "I feel calm and peaceful inside" },
    { id: 16, text: "I am more than my thoughts" },
    { id: 17, text: "I choose peace" },
    { id: 18, text: "Letting go of worry is becoming easy" },
    { id: 19, text: "I release all tension in my body" },
    { id: 20, text: "Only good things await me" },
    { id: 21, text: "I am balanced."},
    { id: 22, text: "I see the good in myself."},
    { id: 23, text: "I appreciate the goodness in my life."},
    { id: 24, text: "I find more and more to be grateful for."},
    { id: 25, text: "I am proud of myself for making it so far."},
    { id: 26, text: "I am resilient."},
    { id: 27, text: "I value myself."},
    { id: 28, text: "Every day is a gift."},
    { id: 29, text: "I am blessed."},
    { id: 30, text: "I am loved and appreciated even when it seems like I am not." },
    { id: 31, text: "My mind is a friend to my body." },
    { id: 32, text: "I let go of negative self-talk." },
    { id: 33, text: "I love the body I was born with." },
    { id: 34, text: "I am a special person." },
    { id: 35, text: "I have a loving relationship with my body." },
    { id: 36, text: "I embrace every bit of my body." },
    { id: 37, text: "I love myself unconditionally." },
    { id: 38, text: "I have the power to create the life I want." },
    { id: 39, text: "I can overcome any obstacle." },
    { id: 40, text: "I am worthy of true love." },
    { id: 41, text: "I feel happy." },
    { id: 42, text: "I feel peaceful." },
    { id: 43, text: "I treat my body with care and love." },
    { id: 44, text: "I treat myself with kindness." },
    { id: 45, text: "I am strong and healthy." },
    { id: 46, text: "I can overcome my fears." },
    { id: 47, text: "I can persevere and stay strong." },
    { id: 48, text: "I am free from anxiety." },
    { id: 49, text: "I can overcome any stressful situation." },
    { id: 50, text: "I can make it happen." },
    { id: 51, text: "I am loved. I am important. I am unique." },
    { id: 52, text: "I am supported." },
    { id: 53, text: "I can feel the shift towards peace." },
    { id: 54, text: "I know I am worthy of peace." },
    { id: 55, text: "The peace that I need is inside me." },
    { id: 56, text: "Nobody can help me achieve peace but me." },
    { id: 57, text: "The power is in my hands." },
    { id: 58, text: "I know that problems are temporary." },
    { id: 59, text: "All problems have solutions." },
    { id: 60, text: "I am capable of handling anything." },
    { id: 61, text: "I accept myself for who I am." },
    { id: 62, text: "I am building my future." },
    { id: 63, text: "I choose to think positively." },
    { id: 64, text: "My happiness is up to me." },
    { id: 65, text: "I start with a positive mindset." },
    { id: 66, text: "Anything is possible." },
    { id: 67, text: "I radiate positive energy." },
    { id: 68, text: "Wonderful things are going to happen to me." },
    { id: 69, text: "I can take deep breaths." },
    { id: 70, text: "With every breath, I feel stronger." },
    { id: 71, text: "I only compare myself to myself." },
    { id: 72, text: "I can do anything." },
    { id: 73, text: "It is enough to do my best." },
    { id: 74, text: "My body is a vessel of wellness." },
    { id: 75, text: "Today I will focus on what makes me feel good." },
    { id: 76, text: "I am worthy just as I am." },
    { id: 77, text: "I am enough just as I am." },
    { id: 78, text: "I wholeheartedly believe in myself." },
    { id: 79, text: "I confidently welcome new experiences." },
    { id: 80, text: "I can achieve anything I set my mind to." },
    { id: 81, text: "I know my value and will not lessen or shrink myself for anything or anyone." },
    { id: 82, text: "I am fearless in the pursuit of what sets my soul on fire." },
    { id: 83, text: "I am worthy of respect from myself and others." },
    { id: 84, text: "I am motivated, persistent, and successful." },
    { id: 85, text: "I am pure, positive energy." },
    { id: 86, text: "I hold the key to my own happiness." },
    { id: 87, text: "I love the person I am, both inside and out." },
    { id: 88, text: "I am perfect, whole, and complete." },
    { id: 89, text: "I am important." },
    { id: 90, text: "I am worthy of love." },
    { id: 91, text: "My body feels good and I radiate good feelings." },
    { id: 92, text: "Every day is a new day full of hope, happiness, and health." },
    { id: 93, text: "I am always happy, hale, and hearty." },
    { id: 94, text: "I am vigorous, energetic, and full of vitality." },
    { id: 95, text: "Every passing day my body is becoming more energetic, more healthy." },
    { id: 96, text: "I am treating my body as a temple." },
    { id: 97, text: "I love my body for everything amazing it can do!" },
    { id: 98, text: "I am at peace with my body, heart, mind, and soul." },
    { id: 99, text: "I lovingly do everything I can to assist my body in maintaining perfect health." },
    { id: 100, text: "I am my greatest well-wisher." },
    { id: 101, text: "I am thriving in my healing journey." },
    { id: 102, text: "Every day is a new day full of hope, happiness, and health." },
    { id: 103, text: "I am always happy, hale, and hearty." },
    { id: 104, text: "I am vigorous, energetic, and full of vitality." },
    { id: 105, text: "Every passing day my body is becoming more energetic, more healthy." }
  ];
  
export default affirmationsData