# 🚀 Superpower Clone - Multi-Video Edition

A stunning clone of superpower.com featuring **dynamic video backgrounds** that change as you scroll through different sections!

## ✨ Key Features

### 🎬 Dynamic Video Switching
- **4 Different Videos** - Each section has its own unique background video
- **Seamless Transitions** - Smooth fade effects when switching videos
- **Scroll-Based Detection** - Videos automatically change based on which section is in view

### 📹 Video Sections Included:
1. **Hero Section** - Abstract technology network lines
2. **Features Section** - Digital blue data stream animation  
3. **Vision Section** - Futuristic city skyline at night
4. **Contact Section** - Abstract floating particles

### 🎨 Design Features:
- Full-screen fixed video background
- Gradient overlays for text readability
- Glassmorphism UI elements
- Parallax scrolling effect
- Animated buttons with ripple effects
- Responsive design for all devices
- Smooth scroll navigation

## 🛠️ How It Works

### HTML Structure
Each section has a `data-video` attribute containing the video URL:
```html
<section id="home" class="hero-section" data-video="video-url.mp4">
```

### JavaScript Magic
The script uses **Intersection Observer API** to detect which section is visible:
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Change video with fade transition
            videoElement.src = newVideoSrc;
        }
    });
});
```

### CSS Styling
- Fixed positioning keeps video in place while content scrolls
- Opacity transitions create smooth fade effects
- Backdrop filters add modern glass effect

## 🚀 How to Run

### Option 1: Direct Browser
Simply open `index.html` in your browser

### Option 2: Local Server (Recommended)
```bash
cd /workspace
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

## 🎨 Customizing Videos

To use your own videos, edit the `data-video` attributes in `index.html`:

```html
<section id="home" data-video="YOUR_VIDEO_URL.mp4">
```

### Free Video Resources:
- **Mixkit** (used in this project): https://mixkit.co/free-stock-video/
- **Pexels Videos**: https://www.pexels.com/videos/
- **Pixabay**: https://pixabay.com/videos/
- **Coverr**: https://coverr.co/

### Tips for Best Results:
1. Use videos with similar color schemes for smoother transitions
2. Keep file sizes reasonable (< 10MB) for fast loading
3. Use abstract/ambient videos that don't distract from content
4. Ensure videos are loopable

## 📁 File Structure
```
/workspace/
├── index.html      # Main HTML with 4 video sections
├── styles.css      # Enhanced CSS with transitions
├── script.js       # Dynamic video switching logic
└── README.md       # This documentation
```

## 🎯 Next Steps

Want to make it even cooler? Try:
- Adding more sections with different videos
- Implementing video preloading for faster switches
- Adding sound effects on scroll (optional)
- Creating custom video overlays with CSS animations
- Adding particle effects using Canvas or Three.js

Enjoy your ultra-cool multi-video website! 🎉
