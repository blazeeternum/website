# Superpower Website Clone

A modern, responsive website clone inspired by https://superpower.com/ with a cool video background effect.

## 🎬 Video Background Feature

The website features an **autoplaying, looping video background** that creates a stunning visual effect similar to the original superpower.com website.

### How the Video Works:

1. **HTML5 Video Element**: Uses the `<video>` tag with these important attributes:
   - `autoplay` - Automatically starts playing
   - `muted` - Required for autoplay in most browsers
   - `loop` - Continuously repeats the video
   - `playsinline` - Prevents fullscreen on mobile devices

2. **CSS Styling**:
   - Fixed positioning to cover the entire viewport
   - `object-fit: cover` to maintain aspect ratio
   - Overlay gradient for better text readability
   - Reduced opacity for subtle effect

3. **Video Source**: Currently uses a free stock video from Mixkit. You can replace it with your own video.

## 🚀 How to Use

### Option 1: Open Directly in Browser
Simply open `index.html` in any modern web browser.

### Option 2: Use a Local Server (Recommended)
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Then visit http://localhost:8000
```

## 📁 File Structure

```
/workspace/
├── index.html      # Main HTML file
├── styles.css      # All styling and animations
├── script.js       # Interactive JavaScript features
└── README.md       # This file
```

## 🎨 Customization Guide

### Change the Background Video

To use your own video:

1. **In `index.html`**, find this section:
```html
<video autoplay muted loop playsinline class="background-video">
    <source src="YOUR_VIDEO_URL.mp4" type="video/mp4">
</video>
```

2. **Replace the `src`** with:
   - A local file: `src="./videos/my-video.mp4"`
   - A URL: `src="https://example.com/video.mp4"`

### Recommended Video Specifications:
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 or higher
- **File Size**: Under 10MB for fast loading
- **Duration**: 10-30 seconds (looping)
- **Content**: Abstract, slow-moving visuals work best

### Free Video Resources:
- [Mixkit](https://mixkit.co/free-stock-video/)
- [Pexels Videos](https://www.pexels.com/videos/)
- [Pixabay](https://pixabay.com/videos/)
- [Coverr](https://coverr.co/)

## ✨ Features Included

- 🎬 Full-screen video background
- 🌈 Gradient text effects
- 💫 Smooth scroll animations
- 🎯 Hover effects on cards and buttons
- 📱 Fully responsive design
- ⚡ Fast loading performance
- 🎨 Modern glassmorphism UI
- 🔘 Ripple button effects

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, gradients, animations
- **JavaScript** - Intersection Observer, smooth scrolling
- **Google Fonts** - Inter font family

## 🎯 Key CSS Techniques

1. **Video Container**: Fixed position with z-index -1
2. **Overlay Gradient**: Improves text readability
3. **Backdrop Filter**: Creates glass effect on navbar
4. **CSS Grid**: Responsive feature cards layout
5. **Custom Properties**: Easy theme customization

Enjoy building your superpowered website! 🚀
