# 🎬 Jellyflix Quick Reference

## ⚡ Quick Install (3 Steps)

1. **Copy CSS**
   ```bash
   cat "/Users/Haydn/Documents/Jellyfin Custom/Jellyflix/jellyflix.css" | pbcopy
   ```
   Then paste into: Jellyfin → Dashboard → General → Custom CSS

2. **Copy JavaScript**
   ```bash
   cat "/Users/Haydn/Documents/Jellyfin Custom/Jellyflix/jellyflix.js" | pbcopy
   ```
   Then paste into: Jellyfin → Dashboard → General → Custom JavaScript

3. **Refresh Browser**
   - Press `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)

## 🔗 GitHub Setup (3 Steps)

1. **Add SSH Key**
   ```bash
   cat ~/.ssh/id_ed25519.pub | pbcopy
   ```
   Go to: https://github.com/settings/keys → New SSH key → Paste

2. **Create Repo**: https://github.com/new
   - Name: `Jellyflix`
   - Private: ✓
   - Don't initialize

3. **Push Code**
   ```bash
   cd "/Users/Haydn/Documents/Jellyfin Custom/Jellyflix"
   git push -u origin main
   ```

## 📁 Files Created

| File | Size | Purpose |
|------|------|---------|
| jellyflix.css | 16K | Main Netflix-style theme |
| jellyflix.js | 20K | Interactive features |
| README.md | 8.2K | Complete documentation |
| INSTALL.md | 5.4K | Installation guide |
| PROJECT_SUMMARY.md | 5.8K | This project overview |
| GITHUB_SETUP.md | 3.4K | GitHub instructions |
| LICENSE | 1K | MIT License |
| package.json | 546B | Package info |

## 🎨 Key Features

✅ Netflix black (#141414) theme
✅ Red (#e50914) accents
✅ Card hover effects (1.5x scale)
✅ Skip intro button
✅ Auto-play next episode
✅ 10-second skip (← →)
✅ Keyboard navigation
✅ Fully responsive

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `←` | Back 10s |
| `→` | Forward 10s |
| `Space` | Play/Pause |
| `F` | Fullscreen |
| `Arrows` | Navigate cards |

## 🛠️ Customize

**Colors** (in jellyflix.css):
```css
--netflix-red: #e50914;
--netflix-black: #141414;
```

**Behavior** (in jellyflix.js):
```javascript
HOVER_DELAY: 800,    // ms before preview
CARD_SCALE: 1.5,     // zoom level
AUTO_PLAY_NEXT: true // auto-play on/off
```

## 📊 Project Stats

- **Total Code**: ~1,000 lines
- **Documentation**: ~600 lines
- **Files**: 9 core files
- **Browsers**: Chrome, Firefox, Safari, Edge
- **Version**: 1.0.0
- **License**: MIT

## 🔍 File Locations

**Theme Files**:
```
/Users/Haydn/Documents/Jellyfin Custom/Jellyflix/
```

**Git Repo**:
```
git@github.com:Unrefundable/Jellyflix.git
```

## 📖 Documentation

- Start here: [README.md](README.md)
- Install guide: [INSTALL.md](INSTALL.md)
- GitHub setup: [GITHUB_SETUP.md](GITHUB_SETUP.md)
- Full summary: [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)

## 🆘 Troubleshooting

**Theme not working?**
- Clear browser cache (Cmd+Shift+R)
- Check Custom CSS field isn't empty
- Verify no CSS errors in browser console (F12)

**GitHub push failing?**
- Add SSH key: https://github.com/settings/keys
- Create repository first on GitHub
- Try HTTPS instead of SSH

**JavaScript not working?**
- Enable Custom JavaScript in Jellyfin
- Check browser console for errors
- Try CSS-only first

## 🎯 What's Next?

1. ✅ Install in Jellyfin (5 min)
2. ✅ Setup GitHub (5 min)
3. 🎬 Enjoy Netflix-style Jellyfin!
4. ⭐ Star the repo
5. 🔄 Track changes with Git

## 💾 Update Commands

**Save changes**:
```bash
cd "/Users/Haydn/Documents/Jellyfin Custom/Jellyflix"
git add .
git commit -m "Your update message"
git push
```

**Pull latest**:
```bash
git pull origin main
```

---

**Quick Links**:
- 📁 Local: `/Users/Haydn/Documents/Jellyfin Custom/Jellyflix/`
- 🌐 GitHub: `https://github.com/Unrefundable/Jellyflix`
- 📧 Issues: `https://github.com/Unrefundable/Jellyflix/issues`

**Version**: 1.0.0 | **Date**: 2026-01-19 | **License**: MIT
