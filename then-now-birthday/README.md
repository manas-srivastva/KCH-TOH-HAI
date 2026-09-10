# 🎂 "Then vs Now" Interactive Birthday Website

A polished, modern, interactive **"Then vs Now" Birthday Website** built with React, Vite, Tailwind CSS, Framer Motion, and Canvas Confetti. Ready for 1-click Vercel deployment!

---

## ✨ Features

- **Full-Screen Hero Intro**: 3D title, floating balloons, confetti bursts, party lights, and smooth section transitions.
- **Childhood / "Then" Polaroids**: 3D photo frames with cute washi tape, stickers, funny captions, and click-to-expand lightbox view.
- **Side-by-Side "Then vs Now"**: 3D tilt comparison cards with `THEN 👶` and `NOW ✨` badges and hilarious captions.
- **Growing Up Timeline**: Animated timeline progressing through Childhood → Chaos Era → Teenage Era → Present Day.
- **3D Memory Vault Gallery**: Parallax floating photo grid with click-to-zoom modal viewer.
- **Grand Birthday Reveal**: "OKAY... ENOUGH ROASTING" -> "HAPPY BIRTHDAY!" reveal with fireworks & confetti.
- **Interactive Birthday Cake**: Animated flickering candles that can be blown out with a "Make a Wish ✨" button trigger.
- **Handwritten Personal Letter**: Beautiful parchment letter with wax seal, customized font, and multi-paragraph layout.
- **Ending & Journey Replay**: Final celebratory message and 1-click journey replay button.
- **Ambient Music Player**: Audio toggle supporting custom music tracks or built-in Web Audio synthesizer melody fallback.
- **Responsive & Accessible**: Works smoothly across mobile, tablet, and desktop devices, supporting `prefers-reduced-motion`.

---

## 📁 How to Customize Content & Add Your Photos

All content is managed through **one central file**: [`src/data/birthdayData.js`](src/data/birthdayData.js).

### 1. Adding Your Photos
Place your photos in the corresponding directories inside the `public/` folder:

```text
public/
  images/
    childhood/   <-- Put childhood & baby photos here (e.g. baby1.jpg)
    then-now/    <-- Put Then vs Now side-by-side photos here (e.g. then1.jpg, now1.jpg)
    gallery/     <-- Put general memories & fun photos here (e.g. memory1.jpg)
  audio/
    birthday-music.mp3 (Optional background music file)
```

### 2. Editing Text, Captions & Letter
Open [`src/data/birthdayData.js`](src/data/birthdayData.js) and update the fields:

- `birthdayPerson`: Change `name`, `turningAge`, and `birthdayDate`.
- `intro`: Edit main hero title and button label.
- `childhood`: Change polaroid photo paths, captions, and stickers.
- `thenVsNow`: Update comparison titles, `thenImage`, `nowImage`, and funny captions.
- `timeline`: Edit era names, descriptions, and timeline images.
- `gallery`: Customize photo gallery titles and captions.
- `letter`: Write your personal handwritten birthday message paragraphs and sign-off name!

---

## 🚀 Local Development

1. Open a terminal inside the project directory:
   ```bash
   cd then-now-birthday
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

---

## 🌐 Deploying to Vercel

This project is **Vercel-ready**!

### Option A: Using Vercel GitHub Integration (Recommended)
1. Push this repository to GitHub.
2. Go to [Vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository. Vercel will automatically detect **Vite** and configure the build settings (`npm run build`).
4. Click **Deploy**!

### Option B: Using Vercel CLI
```bash
npx vercel
```

---

## 🛠️ Built With

- **React 19** + **Vite**
- **Tailwind CSS v4**
- **Framer Motion**
- **Canvas Confetti**
- **Lucide React** (Icons)
