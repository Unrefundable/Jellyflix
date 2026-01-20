# 🎬 Jellyflix - Netflix Theme for Jellyfin

Transform your Jellyfin media server into a Netflix-like experience with this comprehensive theme package.

![Version](https://img.shields.io/badge/version-1.0.0-red)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

### 🎨 Visual Design
- **Netflix Color Scheme**: Authentic Netflix black (#141414) background with signature red (#e50914) accents
- **Card Layouts**: Responsive cards with Netflix-style hover effects and scaling animations
- **Typography**: Clean, modern fonts matching Netflix's design language
- **Smooth Animations**: Polished transitions and hover effects throughout the interface

### 🎯 Functionality
- **Enhanced Card Hovers**: Delayed preview cards with play and info buttons
- **Skip Intro Button**: Automatically appears during typical intro sequences (15-90 seconds)
- **Next Episode Countdown**: Auto-play next episode with countdown timer
- **Quick Skip Controls**: Jump forward/backward 10 seconds with arrow keys
- **Improved Scrolling**: Smooth horizontal scrolling with mouse wheel support
- **Keyboard Navigation**: Netflix-style arrow key navigation through content

### 📱 Responsive Design
- Fully responsive across desktop, tablet, and mobile devices
- Optimized card scaling for different screen sizes
- Adaptive typography and spacing

## 📦 Installation

### Method 1: Custom CSS (Recommended)

1. **Access Jellyfin Dashboard**
   - Navigate to `Settings` → `Dashboard`
   - Click on `General` in the left sidebar

2. **Add Custom CSS**
   - Scroll down to the `Custom CSS` section
   - Copy the entire contents of `jellyflix.css`
   - Paste it into the Custom CSS field
   - Click `Save`

3. **Add Custom JavaScript (Optional but Recommended)**
   - Go to `Settings` → `Dashboard` → `General`
   - Scroll to `Custom JavaScript` section
   - Copy the entire contents of `jellyflix.js`
   - Paste it into the Custom JavaScript field
   - Click `Save`

4. **Refresh Your Browser**
   - Clear your browser cache (Ctrl/Cmd + Shift + R)
   - Reload Jellyfin to see the Netflix-style theme

### Method 2: Direct File Hosting

If your Jellyfin instance supports custom file hosting:

1. Upload `jellyflix.css` and `jellyflix.js` to your web server
2. In Jellyfin Dashboard → General → Custom CSS, add:
   ```css
   @import url('https://your-server.com/path/to/jellyflix.css');
   ```
3. In Custom JavaScript field, add:
   ```html
   <script src="https://your-server.com/path/to/jellyflix.js"></script>
   ```

### Method 3: GitHub Pages (Using This Repo)

1. Fork this repository
2. Enable GitHub Pages in repository settings
3. In Jellyfin Dashboard, add:
   ```css
   @import url('https://yourusername.github.io/Jellyflix/jellyflix.css');
   ```
4. For JavaScript:
   ```html
   <script src="https://yourusername.github.io/Jellyflix/jellyflix.js"></script>
   ```

## 🎮 Usage

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` | Skip backward 10 seconds (in video player) |
| `→` | Skip forward 10 seconds (in video player) |
| `Arrow Keys` | Navigate through cards on home screen |
| `Space` | Play/Pause |
| `F` | Toggle fullscreen |
| `M` | Toggle mute |

### Features in Action

#### Card Hover Preview
- Hover over any content card for 800ms
- A preview overlay appears with title, year, and quick actions
- Click "Play" to start immediately or "ℹ" for more details

#### Skip Intro
- During video playback, a "Skip Intro" button automatically appears between 15-90 seconds
- Click to jump past the intro sequence

#### Auto-Play Next Episode
- In the last 30 seconds of an episode, a countdown card appears
- Automatically plays the next episode unless canceled

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `jellyflix.css`:

```css
:root {
    --netflix-red: #e50914;        /* Primary accent color */
    --netflix-black: #141414;       /* Background color */
    --netflix-dark-gray: #181818;   /* Card backgrounds */
    --netflix-medium-gray: #2f2f2f; /* Secondary elements */
}
```

### Adjusting Hover Behavior

In `jellyflix.js`, modify the CONFIG object:

```javascript
const CONFIG = {
    HOVER_DELAY: 800,      // Delay before preview (ms)
    CARD_SCALE: 1.5,       // Card scale on hover
    PREVIEW_ENABLED: true,  // Enable/disable previews
    AUTO_PLAY_NEXT: true   // Enable/disable auto-play
};
```

## 🔧 Troubleshooting

### Theme Not Applying
1. Clear your browser cache completely
2. Ensure Custom CSS is enabled in Jellyfin settings
3. Check browser console (F12) for any errors
4. Verify the CSS was pasted correctly without truncation

### JavaScript Features Not Working
1. Check that Custom JavaScript is enabled
2. Look for console errors (F12 → Console)
3. Ensure you're using a modern browser (Chrome, Firefox, Edge, Safari)
4. Try disabling browser extensions that might interfere

### Cards Not Hovering Correctly
1. The hover delay is intentional (800ms) - wait a moment
2. Ensure hardware acceleration is enabled in your browser
3. Try reducing the `CARD_SCALE` value if performance is poor

### Video Player Issues
1. The skip intro feature looks for time ranges 15-90 seconds
2. Auto-play next episode requires episode metadata
3. Check console for any playback errors

## 📋 Compatibility

### Tested With
- ✅ Jellyfin 10.8.x
- ✅ Jellyfin 10.9.x
- ✅ Latest web client versions

### Browsers
- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Devices
- ✅ Desktop (Windows, macOS, Linux)
- ✅ Tablets (iPad, Android tablets)
- ✅ Mobile (responsive design)
- ⚠️ Smart TVs (limited support)

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Maintain Netflix's design language
- Test across multiple browsers
- Document any new features
- Keep CSS organized by sections
- Comment complex JavaScript logic

## 📝 Changelog

### Version 1.0.0 (2026-01-19)
- Initial release
- Netflix-style UI theme
- Card hover previews
- Skip intro functionality
- Auto-play next episode
- Enhanced keyboard navigation
- Responsive design
- Complete documentation

## 📄 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 Unrefundable

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## ⚠️ Disclaimer

This theme is not affiliated with, endorsed by, or connected to Netflix, Inc. in any way. Netflix is a registered trademark of Netflix, Inc. This is an independent fan project created to provide a familiar viewing experience for Jellyfin users.

## 🙏 Acknowledgments

- Jellyfin team for creating an amazing open-source media server
- Netflix for design inspiration
- The open-source community for continuous support

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Unrefundable/Jellyflix/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Unrefundable/Jellyflix/discussions)

## 🌟 Star This Repo

If you find Jellyflix useful, please consider giving it a star on GitHub!

---

**Made with ❤️ for the Jellyfin community**
