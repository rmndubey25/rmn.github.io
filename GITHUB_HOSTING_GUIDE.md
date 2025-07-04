# How to Host Your Portfolio on GitHub Pages (Free)

## Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up" and create your account
3. Verify your email address

## Step 2: Create a New Repository
1. Click the "+" icon in the top right corner
2. Select "New repository"
3. Name it exactly: `your-username.github.io` (replace with your actual username)
   - Example: If your username is "ramandubey", name it "ramandubey.github.io"
4. Make sure it's set to "Public"
5. Check "Add a README file"
6. Click "Create repository"

## Step 3: Upload Your Portfolio Files

### Method 1: Using GitHub Website (Easiest)
1. In your new repository, click "uploading an existing file"
2. Drag and drop ALL these files from your portfolio:
   - `index.html`
   - `style.css`
   - `script.js`
   - `matrix.js`
   - `blog-data.js`
   - `blog-reader.js`
   - `HOW_TO_ADD_BLOG_POSTS.md`

3. Add a commit message like "Add portfolio files"
4. Click "Commit changes"

### Method 2: Using Git Commands (If you know Git)
```bash
# Clone your repository
git clone https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
cd YOUR-USERNAME.github.io

# Copy all your portfolio files here
# Then:
git add .
git commit -m "Add cybersecurity portfolio"
git push origin main
```

## Step 4: Enable GitHub Pages
1. Go to your repository settings (Settings tab)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click "Save"

## Step 5: Access Your Live Website
Your website will be available at:
`https://YOUR-USERNAME.github.io`

Example: `https://ramandubey.github.io`

⚠️ **Note**: It may take 5-10 minutes for your site to go live initially.

## Step 6: Custom Domain (Optional)
If you want a custom domain like `ramandubey.com`:
1. Buy a domain from any provider (Namecheap, GoDaddy, etc.)
2. In repository settings > Pages, add your custom domain
3. Configure DNS records with your domain provider

## Adding New Blog Posts After Hosting

1. Go to your repository on GitHub
2. Click on `blog-data.js`
3. Click the pencil icon (Edit)
4. Add your new blog post using the template
5. Scroll down and click "Commit changes"
6. Your website updates automatically!

## File Structure
Make sure your repository looks like this:
```
your-username.github.io/
├── index.html
├── style.css
├── script.js
├── matrix.js
├── blog-data.js
├── blog-reader.js
├── HOW_TO_ADD_BLOG_POSTS.md
└── README.md
```

## Troubleshooting

### Website Not Loading?
- Wait 5-10 minutes after first upload
- Check that `index.html` is in the root folder
- Verify GitHub Pages is enabled in Settings

### Blog Posts Not Working?
- Make sure all JavaScript files are uploaded
- Check browser console for errors (F12)
- Verify `blog-data.js` syntax is correct

### Custom Domain Issues?
- DNS changes can take 24-48 hours
- Use GitHub's documentation for DNS setup

## Updating Your Portfolio

### To Update Content:
1. Edit files directly on GitHub (click pencil icon)
2. Or clone, edit locally, and push changes
3. Changes appear live within minutes

### To Add New Sections:
1. Edit `index.html` for new HTML
2. Edit `style.css` for new styles
3. Edit `script.js` for new functionality

## Benefits of GitHub Pages
- ✅ Completely free hosting
- ✅ Free HTTPS certificate
- ✅ Custom domain support
- ✅ Automatic deployments
- ✅ Version control built-in
- ✅ 1GB storage limit
- ✅ 100GB bandwidth per month

## Cost Breakdown
- GitHub account: **FREE**
- GitHub Pages hosting: **FREE**
- Custom domain (optional): **$10-15/year**
- Total cost: **$0** (or $10-15/year with custom domain)

## Pro Tips

1. **Backup Strategy**: Your code is automatically backed up on GitHub
2. **Collaboration**: Others can contribute via pull requests
3. **Professional URL**: Use your custom domain on business cards/resume
4. **Analytics**: Add Google Analytics to track visitors
5. **SEO**: GitHub Pages sites rank well in search engines

## Security Notes
- Don't put sensitive information in public repositories
- API keys should go in repository secrets (for advanced users)
- Your repository and code will be publicly visible

## Next Steps After Hosting
1. Share your portfolio URL on LinkedIn, resume, etc.
2. Add Google Analytics to track visitors
3. Submit to search engines for indexing
4. Keep adding new blog posts to showcase your learning

Your cybersecurity portfolio will look professional and be accessible worldwide! 🚀