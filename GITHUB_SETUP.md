# GitHub Setup Instructions for Jellyflix

## Current Status

✅ Git repository initialized locally
✅ All files committed to local repository
❌ **Action Required**: SSH key needs to be added to GitHub

## Steps to Complete GitHub Setup

### 1. Add Your SSH Key to GitHub

Your public SSH key is:
```
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJdCteFc/axo3GSXrLFMWqGJjXKmqe8/nFrgPOg+ZLQa Haydn@Haydns-MacBook-Pro.local
```

**To add it to GitHub:**

1. **Copy your SSH key** (it's already displayed above)

2. **Go to GitHub**:
   - Visit https://github.com/settings/keys
   - Or: Click your profile picture → Settings → SSH and GPG keys

3. **Add New SSH Key**:
   - Click "New SSH key" button
   - Title: `Jellyflix MacBook Pro` (or any name you prefer)
   - Key type: Authentication Key
   - Paste the public key from above
   - Click "Add SSH key"

4. **Verify** by entering your GitHub password if prompted

### 2. Create the GitHub Repository

You need to create the private repository on GitHub:

1. Go to https://github.com/new
2. Repository name: `Jellyflix`
3. Description: `Netflix-style theme for Jellyfin media server`
4. **Make it Private** ✓ (as you requested)
5. **Do NOT initialize** with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 3. Push Your Code

After completing steps 1 & 2, run these commands in your terminal:

```bash
cd "/Users/Haydn/Documents/Jellyfin Custom/Jellyflix"
git push -u origin main
```

This will upload all your Jellyflix files to GitHub.

## Alternative: Use HTTPS Instead of SSH

If you prefer not to set up SSH keys, you can use HTTPS:

```bash
cd "/Users/Haydn/Documents/Jellyfin Custom/Jellyflix"
git remote remove origin
git remote add origin https://github.com/Unrefundable/Jellyflix.git
git push -u origin main
```

You'll be prompted for your GitHub username and password (or personal access token).

## Quick Copy Commands

### Copy SSH Public Key to Clipboard:
```bash
cat ~/.ssh/id_ed25519.pub | pbcopy
```

Then just paste (Cmd+V) when adding to GitHub.

## Verification

After pushing successfully, you should see:

```
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 8 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (10/10), X.XX KiB | X.XX MiB/s, done.
Total 10 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:Unrefundable/Jellyflix.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

## What's in the Repository

Once pushed, your private GitHub repository will contain:

- `jellyflix.css` - Main Netflix-style theme
- `jellyflix.js` - JavaScript enhancements
- `README.md` - Complete documentation
- `INSTALL.md` - Installation guide
- `LICENSE` - MIT License
- `package.json` - Package metadata
- `.gitignore` - Git ignore rules
- `SCREENSHOTS.md` - Placeholder for screenshots

## Future Updates

To track changes and push updates:

```bash
# Make your changes to files
cd "/Users/Haydn/Documents/Jellyfin Custom/Jellyflix"
git add .
git commit -m "Description of your changes"
git push
```

## Need Help?

If you encounter any issues:
1. Check that the repository exists on GitHub
2. Verify your SSH key is added correctly
3. Try the HTTPS method as an alternative
4. Check GitHub's SSH documentation: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

---

**Repository URL**: https://github.com/Unrefundable/Jellyflix (will be active after setup)
