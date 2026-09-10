/**
 * ====================================================================
 * 🎂 BIRTHDAY DATA CONFIGURATION
 * ====================================================================
 * 
 * Edit this file to customize all photos, text, captions, and messages!
 * 
 * PHOTO INSTRUCTIONS:
 * 1. Place your photo files inside the `public/images/` subdirectories:
 *    - `public/images/childhood/`  -> Childhood photos
 *    - `public/images/then-now/`   -> Side-by-side comparison photos
 *    - `public/images/gallery/`    -> Memories & gallery photos
 * 2. Update the image paths below to match your filename extensions (e.g. '.jpg', '.png', '.jpeg', '.webp').
 * ====================================================================
 */

export const birthdayData = {
  // ------------------------------------------------------------------
  // 1. BASIC INFORMATION
  // ------------------------------------------------------------------
  birthdayPerson: {
    name: "Ada",
    turningAge: "20st",
    birthdayDate: "September 11",
    favoriteColor: "#ff007f",
  },

  // ------------------------------------------------------------------
  // 2. HERO INTRO SECTION
  // ------------------------------------------------------------------
  intro: {
    heading: "Wait… Someone's Birthday?! 🎂",
    subheading: "I have something very special to show you…",
    ctaButton: "Start the Birthday Journey 🎁",
  },

  // ------------------------------------------------------------------
  // 3. CHILDHOOD ("THEN") SECTION
  // ------------------------------------------------------------------
  childhood: {
    sectionTitle: "The Origin Story 👶",
    quote: "Before she became THIS… she was THIS tiny human 😂",
    description: "A trip back to where all the mischief originally began.",
    photos: [
      {
        id: "c1",
        image: "/images/childhood/1styearphoto.jpeg",
        caption: "Itna chota aur mota bacha 🍼",
        rotate: -3,
        sticker: "👶",
      },
      {
        id: "c2",
        image: "/images/childhood/2ndphoto.jpeg",
        caption: "Bhoog lagi hai!!!!!",
        rotate: 4,
        sticker: "🧸",
      },
      {
        id: "c3",
        image: "/images/childhood/3rd photo.jpeg",
        caption: "Kch bhi kha leti hu",
        rotate: -2,
        sticker: "⭐",
      },
      {
        id: "c4",
        image: "/images/childhood/4th photo.jpeg",
        caption: "Asli roop",
        rotate: 3,
        sticker: "🎀",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 4. MAIN "THEN VS NOW" COMPARISON SECTION
  // ------------------------------------------------------------------
  thenVsNow: {
    sectionTitle: "Then vs. Now ⚡",
    subtitle: "The glow up is real... but some things never change!",
    comparisons: [
      {
        id: "tn1",
        title: "Smiles & Attitude",
        tagThen: "THEN 👶",
        tagNow: "NOW ✨",
        thenImage: "/images/then-now/5thphoto.jpeg",
        nowImage: "/images/then-now/6thphoto.jpeg",
        caption: "Same smile. Much bigger nakhre.",
      },
      {
        id: "tn2",
        title: "The Nautanki Metric",
        tagThen: "THEN 👶",
        tagNow: "NOW ✨",
        thenImage: "/images/then-now/7thphoto.jpeg",
        nowImage: "/images/then-now/8thphoto.jpeg",
        caption: "The face changed. The nautanki didn't.",
      },
      {
        id: "tn3",
        title: "Nautanki_Level",
        tagThen: "THEN 👶",
        tagNow: "NOW ✨",
        thenImage: "/images/then-now/9thphoto.jpeg",
        nowImage: "/images/then-now/10thphoto.jpeg",
        caption: "Character development: 0% complete ",
      },
      {
        id: "tn4",
        title: "Status:single hi hai",
        tagThen: "THEN 👶",
        tagNow: "NOW ✨",
        thenImage: "/images/then-now/11thphoto.jpeg",
        nowImage: "/images/then-now/12thphoto.jpeg",
        caption: "Started Single, and still single",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 5. GROWING UP TIMELINE
  // ------------------------------------------------------------------
  timeline: {
    sectionTitle: "Growing Up Timeline ⏳",
    subtitle: "Tracing the journey from tiny toddler to absolute legend.",
    stages: [
      {
        id: "t1",
        era: "Childhood 👶",
        title: "The Cute Little Rascal",
        year: "Early Years",
        description: "Mastered crying for cookies, refusing afternoon naps, and wearing mis-matched socks with pride.",
        image: "/images/childhood/1styearphoto.jpeg",
        badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
      },
      {
        id: "t2",
        era: "Chaos Era 🌀",
        title: "Unstoppable Energy",
        year: "Middle School",
        description: "Discovered caffeine, dramatic eye rolls, and the power of endless phone scrolling.",
        image: "/images/then-now/9thphoto.jpeg",
        badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      },
      {
        id: "t3",
        era: "Teenage Era 💅",
        title: "Glow Up(woh toh aaya nhi)& Main Character Energy(pagal hai)",
        year: "High School",
        description: "Perfected eyeliner wings, curated aesthetic playlists, and became the group selfie queen.(sab GPT generated hai!!!!)",
        image: "/images/then-now/13thphoto.jpeg",
        badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      },
      {
        id: "t4",
        era: "Present Day ✨",
        title: "Certified Legend",
        year: "Now",
        description: "Thriving, shining, lighting up every room, and celebrating another fabulous year!",
        image: "/images/then-now/14THPHOTO.jpeg",
        badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      },
    ],
  },

  // ------------------------------------------------------------------
  // 6. 3D PHOTO GALLERY
  // ------------------------------------------------------------------
  gallery: {
    sectionTitle: "3D Memory Vault 📸",
    subtitle: "Click any photo to zoom into the memory!",
    photos: [
      {
        id: "g1",
        title: "Best Memories",
        caption: "First scooty ride",
        image: "/images/gallery/photo1.jpeg",
        aspect: "aspect-square",
        rotate: -4,
      },
      {
        id: "g2",
        title: "Pagal Ada",
        caption: "Who let her out in public like this?! 😂",
        image: "/images/gallery/photo2.jpeg",
        aspect: "aspect-[4/5]",
        rotate: 3,
      },
      {
        id: "g3",
        title: "Justice for dolphin",
        caption: "Dolphin ko chor do",
        image: "/images/gallery/photo3.jpeg",
        aspect: "aspect-square",
        rotate: -2,
      },
      {
        id: "g4",
        title: "Papad mangodi",
        caption: "Aukaad se uchi building",
        image: "/images/gallery/photo4.jpeg",
        aspect: "aspect-[4/3]",
        rotate: 5,
      },
      {
        id: "g5",
        title: "WE ARE BORING",
        caption: "Apni bhi toh photo dalunga",
        image: "/images/gallery/photo6.jpeg",
        aspect: "aspect-square",
        rotate: -3,
      },
      {
        id: "g6",
        title: "Forever Cheering(GPT)",
        caption: "ISKO LAGTA YEH SUNDAR HAI",
        image: "/images/gallery/photo5.jpeg",
        aspect: "aspect-[4/5]",
        rotate: 2,
      },
    ],
  },

  // ------------------------------------------------------------------
  // 7. COMPLIMENT MACHINE (EDITABLE!)
  // ------------------------------------------------------------------
  compliments: [
    { text: "Genuinely,ada just thank u for existing . ☀️", emoji: "🌟" },
    { text: "Ure a great friend. 📶", emoji: "✨" },
    { text: "Bas Kabhi kabhi bht zyada khaana khati tm. 💰", emoji: "💖" },
    { text: "Thoda kam soya karo 🏆", emoji: "👑" },
    { text: "Mere oreo shake me se hamesha pehla sip leleti. 🚀", emoji: "😄" },
    { text: "Bro is good at study (Bas wo third sem) 🦸‍♀️", emoji: "😂" },
    { text: "Ada, The bhains ", emoji: "⚡" },
    { text: "They should rename 'fun' to 'Ada' in the dictionary.(GPT LIKHA HAI) 📖", emoji: "🎉" },
  ],

  // ------------------------------------------------------------------
  // 8. BIRTHDAY CELEBRATION REVEAL
  // ------------------------------------------------------------------
  celebration: {
    roastText: "OKAY… ENOUGH ROASTING.",
    revealText: "HAPPY BIRTHDAY, ADA!!! 🎂🎉❤️",
    subtitle: "You make the world brighter, funnier, and 1000% more chaotic in the best way possible!(SAB JHOOT HAI)",
  },

  // ------------------------------------------------------------------
  // 9. INTERACTIVE CAKE & WISH
  // ------------------------------------------------------------------
  cake: {
    sectionTitle: "Time for the Cake! 🎂",
    subtitle: "Tap the button below to blow out the candles & make your secret wish!",
    buttonText: "Make a Wish ✨",
    wishGrantedTitle: "Wish Sent to the Stars! 🌟",
    wishGrantedMessage: "May your upcoming year be packed with joy, success, spontaneous road trips, and endless delicious treats!(MATLAB ITNA ACHA DOST TOH MIL HI GAYA HAI TMHE(OFC ME)",
  },

  // ------------------------------------------------------------------
  // 10. PERSONAL HANDWRITTEN LETTER
  // ------------------------------------------------------------------
  letter: {
    sectionTitle: "A Little Something From Me ❤️",
    greeting: "Dearest Ada,",
    paragraphs: [
      "I wanted to build something special for your birthday because a regular text message just couldn't capture how awesome you are.",
      "Looking back at all the old memories, one thing is crystal clear: you bring so much warmth, energy, and genuine happiness to everyone around you. Through every phase, every laugh, and every ridiculous adventure, you've remained true, kind, and hilariously iconic.",
      "Thank you for being such an incredible friend, for always being up for spontaneous chaos, and for making life so much brighter. I hope this birthday brings you everything you've been wishing for and more!",
    ],
    signOff: "With tons of love & high fives,",
    sender: "Your Favorite Troublemaker 💖",
  },

  // ------------------------------------------------------------------
  // 11. FINAL SURPRISE & REPLAY
  // ------------------------------------------------------------------
  finalSurprise: {
    line1: "And finally…",
    line2: "Here's to YOU. ❤️",
    line3: "Happy Birthday, Ada 🎂✨",
    replayButton: "Replay the Birthday Journey 🔄",
  },
};
