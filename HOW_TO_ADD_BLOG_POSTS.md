# How to Add New Blog Posts

## Quick Guide for Adding Blog Posts

### Step 1: Open `blog-data.js`
This file contains all your blog posts. It's the ONLY file you need to edit to add new posts.

### Step 2: Add Your New Post
Copy this template and add it to the `blogPosts` array:

```javascript
{
    id: 7, // Increment this number
    date: "2025-01-20", // Use YYYY-MM-DD format
    category: "YOUR-CATEGORY", // Examples: BUG-BOUNTY, RECON, TOOLS, MEMES
    status: "NEW", // Options: NEW, SERIES, TUTORIAL, POPULAR, REVIEW, FUN
    title: "Your Amazing Blog Post Title",
    preview: "A short preview of your post that will show on the blog grid...",
    content: `
# Your Blog Post Title

## Introduction
Write your full blog post content here using markdown.

### You can use:
- **Bold text**
- *Italic text*
- \`inline code\`
- Lists like this one

### Code blocks:
\`\`\`javascript
console.log("Hello, world!");
\`\`\`

### More sections:
Add as much content as you want!
    `,
    tags: ["Tag1", "Tag2", "Tag3"], // Tech tags for your post
    terminalCommand: "echo 'Your terminal command here'",
    terminalOutput: "[+] Your terminal output here",
    views: 42 // Any number you want
}
```

### Step 3: Save and Refresh
That's it! Your new blog post will automatically appear on your website.

## Real Example

Here's a real example of adding a new post about Docker security:

```javascript
{
    id: 7,
    date: "2025-01-20",
    category: "DOCKER",
    status: "NEW",
    title: "Docker Security: Escaping Containers Like a Pro",
    preview: "My journey into Docker container escape techniques and security hardening. From privilege escalation to breakout methods...",
    content: `
# Docker Security: Escaping Containers Like a Pro

## Why Docker Security Matters

Containers aren't VMs, and the security implications are huge. Here's what I learned about container escape techniques.

## Common Escape Methods

### 1. Privileged Containers
\`\`\`bash
docker run --privileged -it ubuntu /bin/bash
# Now you have access to host devices
\`\`\`

### 2. Host Path Mounts
\`\`\`bash
docker run -v /:/host -it ubuntu
# Mount entire host filesystem
\`\`\`

### 3. Docker Socket Exposure
\`\`\`bash
docker run -v /var/run/docker.sock:/var/run/docker.sock -it docker
# Control Docker daemon from inside container
\`\`\`

## Defense Strategies

1. **Never use --privileged in production**
2. **Limit capabilities with --cap-drop**
3. **Use user namespaces**
4. **Implement AppArmor/SELinux profiles**
5. **Regular security scanning**

## Tools for Container Security

- **Docker Bench** - Security audit script
- **Clair** - Vulnerability scanner
- **Falco** - Runtime security monitoring
- **Trivy** - Container image scanner

Remember: Containers share the kernel, so think about the attack surface!
    `,
    tags: ["Docker", "Containers", "Security"],
    terminalCommand: "docker run --rm -it --cap-drop=all ubuntu",
    terminalOutput: "[+] Container started with limited capabilities",
    views: 256
}
```

## Tips for Great Blog Posts

### Content Structure
1. **Clear title** - Make it catchy and descriptive
2. **Good preview** - Hook readers in 1-2 sentences
3. **Well-organized content** - Use headers and sections
4. **Code examples** - Show, don't just tell
5. **Practical tips** - Give actionable advice

### Categories to Use
- `BUG-BOUNTY` - For vulnerability discoveries
- `RECON` - For reconnaissance techniques
- `TOOLS` - For tool reviews and comparisons
- `WAF-BYPASS` - For firewall evasion techniques
- `MINDSET` - For career and learning advice
- `MEMES` - For fun and humor posts
- `DOCKER` - For containerization security
- `API` - For API security testing
- `MOBILE` - For mobile app security

### Status Badges
- `NEW` - Fresh content (green badge)
- `SERIES` - Part of a series (yellow badge)
- `TUTORIAL` - Step-by-step guide (blue badge)
- `POPULAR` - High-traffic post (green badge)
- `REVIEW` - Tool or technique review (yellow badge)
- `FUN` - Entertainment content (blue badge)

### Terminal Commands
Make your terminal commands relevant to the post topic. Examples:
- `nmap -sV target.com` for recon posts
- `sqlmap -u "http://target.com/login"` for SQL injection posts
- `burpsuite --target=example.com` for tool posts

## Markdown Formatting

The blog system supports these markdown features:

- `# Headers` (H1, H2, H3)
- `**Bold text**`
- `*Italic text*`
- `Inline code`
- Code blocks with ```
- Lists (- and 1.)
- Tables (basic support)

## Adding Multiple Posts

Just add multiple objects to the array, separated by commas:

```javascript
const blogPosts = [
    {
        id: 1,
        // first post...
    },
    {
        id: 2,
        // second post...
    },
    {
        id: 3,
        // third post...
    }
    // Add more here!
];
```

## Publishing Workflow

1. **Write your post** in the template above
2. **Add it to blog-data.js**
3. **Save the file**
4. **Commit to GitHub** - `git add . && git commit -m "Add new blog post" && git push`
5. **GitHub Pages will automatically update** your live site!

That's it! No complex build systems, no multiple files to edit. Just update one file and you're done! 🚀