# Jellyflix Installation Guide

## Quick Start (5 Minutes)

### Step 1: Access Jellyfin Dashboard
1. Open your Jellyfin instance in a web browser
2. Log in with your administrator account
3. Click on the hamburger menu (☰) in the top-left corner
4. Select **Dashboard**

### Step 2: Navigate to General Settings
1. In the Dashboard sidebar, click **General**
2. Scroll down to find the **Custom CSS** section

### Step 3: Install the CSS Theme
1. Open the file `jellyflix.css` from this repository
2. Copy the **entire contents** of the file (Ctrl+A, Ctrl+C)
3. Paste it into the **Custom CSS** text area in Jellyfin
4. Click **Save** at the bottom of the page

### Step 4: Install the JavaScript Enhancements (Optional)
1. In the same General settings page, scroll to **Custom JavaScript**
2. Open the file `jellyflix.js` from this repository
3. Copy the **entire contents** of the file
4. Paste it into the **Custom JavaScript** text area
5. Click **Save**

### Step 5: Apply Changes
1. **Clear your browser cache**:
   - Chrome/Edge: Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
   - Select "Cached images and files"
   - Click "Clear data"
   
2. **Hard refresh** the Jellyfin page:
   - Windows: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

3. You should now see the Netflix-style theme!

## Advanced Installation Methods

### Method A: Using GitHub Raw URLs

Instead of copying/pasting, you can link directly to the files:

1. In **Custom CSS**, add:
```css
@import url('https://raw.githubusercontent.com/Unrefundable/Jellyflix/main/jellyflix.css');
```

2. In **Custom JavaScript**, add:
```html
<script src="https://raw.githubusercontent.com/Unrefundable/Jellyflix/main/jellyflix.js"></script>
```

**Note**: This method auto-updates when you update the repo, but may have slight delays due to GitHub's CDN.

### Method B: Self-Hosted Files

If you have a web server:

1. Upload `jellyflix.css` and `jellyflix.js` to your server
2. Use the full URLs in the Custom CSS/JavaScript fields
3. This gives you full control and fastest load times

Example:
```css
@import url('https://yourdomain.com/themes/jellyflix.css');
```

### Method C: GitHub Pages

1. Fork this repository to your GitHub account
2. Go to repository Settings → Pages
3. Enable GitHub Pages (select main branch)
4. Use the provided URL in your Jellyfin settings:
```css
@import url('https://yourusername.github.io/Jellyflix/jellyflix.css');
```

## Verification

### How to Know It's Working

1. **Background Color**: Should be Netflix black (#141414)
2. **Logo**: "JELLYFLIX" should appear in red
3. **Cards**: Hover over a movie/show card - it should scale up smoothly
4. **Buttons**: Play buttons should be white, secondary buttons gray

### If It's Not Working

1. **Check Browser Console**:
   - Press F12 to open Developer Tools
   - Click the "Console" tab
   - Look for any red error messages
   - Take a screenshot and create an issue on GitHub

2. **Verify CSS is Loaded**:
   - In Developer Tools, go to "Network" tab
   - Refresh the page
   - Look for `jellyflix.css` in the list
   - If it's red or 404, the URL is incorrect

3. **Clear Everything**:
   - Clear browser cache completely
   - Clear Jellyfin's cache (Dashboard → Advanced → Clear Cache)
   - Restart your browser
   - Try again

## Common Issues

### Issue: Theme Looks Broken or Partial

**Solution**: 
- Make sure you copied the **entire** CSS file
- Check if there are any CSS syntax errors
- Try using the @import method instead

### Issue: JavaScript Features Not Working

**Solution**:
- Ensure Custom JavaScript is enabled in Jellyfin
- Check browser console for errors
- Verify you're using a modern browser (not IE11)

### Issue: Theme Disappeared After Update

**Solution**:
- Jellyfin updates sometimes reset custom CSS
- Simply re-paste the code or use the @import method
- Bookmark this page for quick access

### Issue: Performance is Slow

**Solution**:
- Disable the JavaScript enhancements (keep just CSS)
- Reduce the CARD_SCALE value in jellyflix.js
- Enable hardware acceleration in your browser settings

## Updating the Theme

### If You Used Copy/Paste Method:
1. Watch this repository for updates (click "Watch" on GitHub)
2. When notified of updates, re-copy and paste the new code
3. Clear cache and refresh

### If You Used @import Method:
1. The theme will auto-update when you pull latest changes
2. Just clear your browser cache to see updates
3. For immediate updates, add a version parameter:
```css
@import url('https://your-url/jellyflix.css?v=1.0.1');
```

## Customization After Installation

Once installed, you can customize:

1. **Colors**: Edit the CSS variables at the top of jellyflix.css
2. **Hover Delay**: Change `HOVER_DELAY` in jellyflix.js
3. **Auto-play**: Disable by setting `AUTO_PLAY_NEXT: false`

See [README.md](README.md#customization) for detailed customization options.

## Uninstalling

To remove Jellyflix:

1. Go to Dashboard → General
2. Delete all content from **Custom CSS** field
3. Delete all content from **Custom JavaScript** field
4. Click Save
5. Clear browser cache and refresh

Jellyfin will return to its default theme.

## Need Help?

- 📖 Read the [README.md](README.md) for full documentation
- 🐛 Report bugs on [GitHub Issues](https://github.com/Unrefundable/Jellyflix/issues)
- 💬 Ask questions in [Discussions](https://github.com/Unrefundable/Jellyflix/discussions)

---

**Enjoy your Netflix-style Jellyfin experience! 🎬🍿**
