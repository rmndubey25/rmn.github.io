// Blog Data Management System
// Add new blog posts by adding entries to this array

const blogPosts = [
    {
        id: 1,
        date: "2025-01-15",
        category: "BUG-BOUNTY",
        status: "NEW",
        title: "My First XSS: Breaking JavaScript Like LEGO",
        preview: "Journey into my first successful XSS discovery during university lab testing. From confusion to clarity, here's how I learned to see JavaScript vulnerabilities everywhere...",
        content: `
# My First XSS: Breaking JavaScript Like LEGO

## The Beginning of My Bug Hunting Journey

It was a regular Tuesday in the computer lab when everything changed. I was working on a basic web form assignment when I accidentally typed some HTML in an input field. Instead of seeing my text, I saw... well, rendered HTML.

## The "Aha!" Moment

\`\`\`javascript
<script>alert('Hello World!')</script>
\`\`\`

That simple payload opened my eyes to the world of web vulnerabilities. Here's what I learned:

### Key Lessons:
- Always test input validation
- Understanding how browsers parse HTML/JS
- The importance of sanitization
- Context matters in XSS attacks

## My First Real Discovery

After weeks of practice, I found my first real XSS in a university portal:

\`\`\`html
<img src=x onerror="alert('XSS by Raman')">
\`\`\`

The feeling was incredible! But more importantly, I learned about responsible disclosure.

## Tools That Helped Me

1. **Burp Suite** - For intercepting requests
2. **Browser Dev Tools** - Understanding DOM manipulation
3. **XSS Hunter** - For blind XSS detection
4. **OWASP ZAP** - Free alternative scanner

## What's Next?

This was just the beginning. My journey into cybersecurity had officially started, one vulnerability at a time.

*Remember: Always hack ethically and with permission!*
        `,
        tags: ["XSS", "JavaScript", "Bug Bounty"],
        terminalCommand: 'echo "Learning never stops..."',
        terminalOutput: "[+] Vulnerability pattern recognized",
        views: 1337
    },
    {
        id: 2,
        date: "2025-01-08",
        category: "RECON",
        status: "SERIES",
        title: "Recon Like a Ninja: OSINT for Pentesters",
        preview: "From Google dorking to subdomain enumeration, here's my toolkit for reconnaissance. Part 1 of my ongoing series on information gathering techniques...",
        content: `
# Recon Like a Ninja: OSINT for Pentesters

## The Art of Digital Reconnaissance

Information gathering is 70% of successful penetration testing. Here's how I approach OSINT like a digital ninja.

## My Recon Methodology

### Phase 1: Passive Information Gathering
\`\`\`bash
# Subdomain enumeration
subfinder -d target.com -silent | httpx -silent
amass enum -passive -d target.com
\`\`\`

### Phase 2: Google Dorking
Some of my favorite dorks:
- \`site:target.com filetype:pdf\`
- \`inurl:admin site:target.com\`
- \`"database error" site:target.com\`

### Phase 3: Social Media Intelligence
- LinkedIn for employee information
- GitHub for leaked credentials
- Twitter for company announcements

## Essential Tools

1. **Subfinder** - Fast subdomain discovery
2. **Amass** - Comprehensive asset discovery
3. **theHarvester** - Email and subdomain gathering
4. **Shodan** - Internet-connected device search
5. **Wayback Machine** - Historical website data

## Pro Tips

- Always document everything
- Use multiple sources to verify information
- Respect rate limits and robots.txt
- Stay within legal boundaries

## Coming Up in Part 2

Next week I'll cover active reconnaissance techniques and how to chain tools for maximum efficiency.

*Stay tuned for more recon techniques!*
        `,
        tags: ["OSINT", "Recon", "Subdomain"],
        terminalCommand: "subfinder -d target.com -silent",
        terminalOutput: "[+] Found 42 subdomains",
        views: 2048
    },
    {
        id: 3,
        date: "2024-12-28",
        category: "WAF-BYPASS",
        status: "TUTORIAL",
        title: "WAF Evasion: Dancing Around Digital Firewalls",
        preview: "My experiments with bypassing Web Application Firewalls. From simple encoding tricks to advanced payload obfuscation techniques that actually work...",
        content: `
# WAF Evasion: Dancing Around Digital Firewalls

## Understanding Web Application Firewalls

WAFs are like digital bouncers - they check every request before letting it through. But like any bouncer, they have blind spots.

## Common WAF Bypass Techniques

### 1. Encoding Variations
\`\`\`javascript
// URL Encoding
%3Cscript%3Ealert(1)%3C/script%3E

// HTML Entity Encoding
&lt;script&gt;alert(1)&lt;/script&gt;

// Unicode Encoding
\u003cscript\u003ealert(1)\u003c/script\u003e
\`\`\`

### 2. Case Manipulation
\`\`\`html
<ScRiPt>alert(1)</ScRiPt>
<SCRIPT>alert(1)</SCRIPT>
\`\`\`

### 3. Comment Insertion
\`\`\`html
<script/*comment*/>alert(1)</script>
<script>/*comment*/alert(1)</script>
\`\`\`

## Advanced Techniques

### SQL Injection WAF Bypass
\`\`\`sql
# Using comments
SELECT/*comment*/password/*comment*/FROM/*comment*/users

# Using concatenation
SELECT CONCAT('pa','ss','word') FROM users

# Using alternative syntax
SELECT password FROM users WHERE id=1e0
\`\`\`

## Tools for WAF Testing

1. **WAFNinja** - Automated WAF bypass
2. **SQLMap** - With tamper scripts
3. **Burp Suite** - Manual testing
4. **Custom Python Scripts** - For specific cases

## Real-World Example

I once encountered a WAF that blocked "script" but not "Script":
\`\`\`html
<Script>alert('Bypassed!')</Script>
\`\`\`

Simple, but effective!

## Ethical Considerations

- Only test on systems you own or have permission to test
- Report findings responsibly
- Help improve security, don't exploit it

*Remember: With great power comes great responsibility!*
        `,
        tags: ["WAF", "Bypass", "Encoding"],
        terminalCommand: "python3 waf_bypass.py --payload encoded",
        terminalOutput: "[!] WAF detected... trying evasion",
        views: 3142
    },
    {
        id: 4,
        date: "2024-12-15",
        category: "MINDSET",
        status: "POPULAR",
        title: "From Noob to Elite: My Cybersecurity Journey",
        preview: "How I went from breaking my own computer to (ethically) breaking others. The mindset shifts, resources, and memes that shaped my path into cybersecurity...",
        content: `
# From Noob to Elite: My Cybersecurity Journey

## The Beginning: Breaking My Own Stuff

Like many in cybersecurity, my journey started with curiosity and a lot of broken computers. Here's how I transformed from a curious kid to a pentester-in-training.

## The Learning Path

### Phase 1: The Curious Noob (Age 12-16)
- Broke my first computer trying to "hack" it
- Learned basic HTML and thought I was elite
- Discovered Kali Linux and felt like Neo from The Matrix

### Phase 2: The Study Grind (Age 17-19)
- Started with OWASP Top 10
- Built home labs with VirtualBox
- Failed at my first CTF... badly

### Phase 3: The Reality Check (Age 20-21)
- Realized cybersecurity is more than cool hacking movies
- Learned about compliance, risk management, and documentation
- Started understanding the business side

### Phase 4: The Practitioner (Now)
- Active in bug bounty programs
- Building real-world skills
- Focusing on ethical hacking

## Key Resources That Changed Everything

### Books
1. **"The Web Application Hacker's Handbook"** - My bible
2. **"Metasploit: The Penetration Tester's Guide"** - Practical exploitation
3. **"The Hacker Playbook 3"** - Modern techniques

### Online Platforms
1. **HackTheBox** - Hands-on practice
2. **TryHackMe** - Beginner-friendly learning
3. **PortSwigger Web Security Academy** - Free and excellent
4. **Cybrary** - Structured courses

### YouTube Channels
- IppSec (HTB walkthroughs)
- LiveOverflow (Deep technical content)
- The Cyber Mentor (Practical tutorials)

## Mindset Shifts That Mattered

### 1. It's Not About Being Elite
Early on, I thought cybersecurity was about being the smartest person in the room. Reality: It's about being persistent, curious, and ethical.

### 2. Documentation is Key
Started documenting everything I learned. Your memory will fail you, but good notes won't.

### 3. Community Over Competition
The cybersecurity community is incredibly supportive. Don't be afraid to ask questions and share knowledge.

## Current Stats
- **Coffee Consumed**: ∞ cups
- **Sleep Hours**: 404 not found
- **GitHub Repos**: 23
- **CTF Flags**: 89
- **Bug Bounty Submissions**: 7

## What's Next?

- CEH certification
- More bug bounty hunting
- Contributing to open source security tools
- Maybe starting a YouTube channel?

## Advice for Fellow Noobs

1. **Start with the basics** - Don't jump to advanced exploitation
2. **Build labs** - Practice on your own systems first
3. **Join communities** - Discord, Reddit, local meetups
4. **Stay legal** - Always get permission
5. **Never stop learning** - Technology evolves fast

*Remember: Every expert was once a beginner. Keep grinding!*
        `,
        tags: ["Journey", "Learning", "Mindset"],
        terminalCommand: 'echo "Every expert was once a beginner"',
        terminalOutput: "[+] Motivation level: 100%",
        views: 5555
    },
    {
        id: 5,
        date: "2024-12-01",
        category: "TOOLS",
        status: "REVIEW",
        title: "Burp Suite vs The World: Tool Comparison",
        preview: "My honest take on web app security tools. Burp Suite, OWASP ZAP, and custom scripts - which ones actually make you more effective?",
        content: `
# Burp Suite vs The World: Tool Comparison

## The Ultimate Web App Security Tool Showdown

After using various tools for web application testing, here's my honest comparison of the most popular options.

## Burp Suite Professional

### Pros
- Industry standard
- Excellent proxy capabilities
- Great extension ecosystem
- Active scanner is solid
- Professional support

### Cons
- Expensive ($399/year)
- Can be resource hungry
- Learning curve for beginners

### Rating: 9/10

## OWASP ZAP

### Pros
- Completely free
- Active development
- Good automation features
- Docker support
- Community driven

### Cons
- Interface feels dated
- Less intuitive than Burp
- Fewer extensions

### Rating: 7/10

## Custom Python Scripts

### Pros
- Tailored to specific needs
- Lightweight
- Complete control
- Great for automation

### Cons
- Time consuming to develop
- Maintenance overhead
- Requires programming skills

### Rating: 8/10 (for developers)

## Other Notable Mentions

### Nuclei
- Excellent for vulnerability scanning
- Template-based approach
- Fast and efficient
- Great for CI/CD integration

### Postman
- Not security-focused but useful
- Great for API testing
- Easy to use
- Good for collaboration

## My Current Setup

\`\`\`bash
# Primary toolkit
burpsuite --professional
nuclei -t nuclei-templates/
python3 custom_scanner.py

# For automation
zap-cli --quick-scan http://target.com
\`\`\`

## Tool Selection Matrix

| Use Case | Best Tool | Alternative |
|----------|-----------|-------------|
| Manual Testing | Burp Suite Pro | OWASP ZAP |
| Automation | Nuclei | Custom Scripts |
| API Testing | Postman | Burp Suite |
| Learning | OWASP ZAP | Burp Community |
| Budget Friendly | OWASP ZAP | Nuclei |

## Real-World Workflow

1. **Reconnaissance**: Custom scripts + Nuclei
2. **Manual Testing**: Burp Suite Pro
3. **Automation**: OWASP ZAP + Nuclei
4. **Reporting**: Custom Python scripts

## Budget Recommendations

### Student/Beginner ($0 budget)
- OWASP ZAP
- Nuclei
- Custom Python scripts

### Professional ($500 budget)
- Burp Suite Professional
- Nuclei templates
- Cloud VPS for testing

### Enterprise ($2000+ budget)
- Burp Suite Enterprise
- Commercial scanners
- Dedicated infrastructure

## Final Thoughts

There's no "one tool to rule them all." The best approach is combining multiple tools based on your specific needs, budget, and skill level.

*What tools do you use? Let me know in the comments!*
        `,
        tags: ["Burp Suite", "Tools", "Review"],
        terminalCommand: "burpsuite --professional --target=example.com",
        terminalOutput: "[+] Proxy configured on 127.0.0.1:8080",
        views: 4096
    },
    {
        id: 6,
        date: "2024-11-20",
        category: "MEMES",
        status: "FUN",
        title: "Cybersecurity Memes That Hit Different",
        preview: "Because sometimes you need to laugh to keep your sanity. A collection of the funniest cybersecurity memes that perfectly capture the hacker life...",
        content: `
# Cybersecurity Memes That Hit Different

## The Therapy We Didn't Know We Needed

Let's be honest - cybersecurity can be stressful. Sometimes you need a good laugh to keep your sanity intact. Here are the memes that perfectly capture our daily struggles.

## The Password Struggle is Real

### "Your password must contain..."
- At least 8 characters
- One uppercase letter
- One number
- One special character
- The blood of your enemies
- A haiku about your childhood trauma

*We've all been there!*

## SQL Injection Classics

\`\`\`sql
-- Little Bobby Tables strikes again
'; DROP TABLE students; --
\`\`\`

The eternal XKCD reference that never gets old. If you don't know this one, you're not a real developer!

## The Bug Bounty Life

### Expectations vs Reality

**Expectation**: "I'll find a critical RCE and get $10,000!"

**Reality**: "Duplicate... duplicate... informational... not applicable..."

*The pain is real, fellow bug hunters.*

## IT Support Nightmares

**User**: "The internet is down!"
**IT**: "Have you tried turning it off and on again?"
**User**: "Yes, I restarted Internet Explorer."

*Based on a true story (probably)*

## Penetration Testing Humor

### Client Expectations
- "Can you hack into their mainframe?"
- "It should only take a few minutes, right?"
- "Just like in the movies!"

### Reality
- Spending 3 hours on subdomain enumeration
- Finding OWASP Top 10 vulnerabilities
- Writing a 50-page report

## The Home Lab Chronicles

**Stage 1**: "I'll just set up a simple lab"
**Stage 2**: *Buys 5 Raspberry Pis*
**Stage 3**: *Entire room becomes a data center*
**Stage 4**: *Electricity bill arrives*
**Stage 5**: "Maybe the cloud isn't so bad..."

## Conference Season

### DEF CON Bingo
- Someone mentions "social engineering"
- WiFi network named "FREE_MALWARE"
- Guy with 20 badges on his lanyard
- "This year's CTF was easier"
- Lock picking village is packed

## The Certification Journey

**Step 1**: "I'll get my CISSP"
**Step 2**: *Reads study guide*
**Step 3**: "What is risk management?"
**Step 4**: *Existential crisis*
**Step 5**: "Maybe I'll start with Security+"

## Incident Response Reality

**8 AM**: Minor security alert
**9 AM**: "It's probably nothing"
**10 AM**: "We might have a problem"
**11 AM**: "WHERE'S THE INCIDENT COMMANDER?"
**12 PM**: *CEO asks if we're still a company*

## The Vulnerability Disclosure Dilemma

**You**: "I found a critical vulnerability"
**Company**: "Thanks! Here's a $5 gift card"
**Black market**: "We'll give you $50,000"
**Your conscience**: "Choose wisely..."
**You**: *Takes the gift card like a boss*

## Finally, The Universal Truth

**Management**: "We need 100% security!"
**Security Team**: "We need 100% budget!"
**Reality**: *Uses free trial of antivirus*

## Bonus: Developer vs Security

**Developer**: "It works on my machine"
**Security**: "Your machine is compromised"
**Developer**: "..."
**Security**: "..."
**Both**: *Awkward silence*

---

*Remember: If you can't laugh at cybersecurity, you'll cry. And crying shorts out keyboards.*

**Share your favorite cybersecurity memes in the comments! Let's keep the laughter going!**
        `,
        tags: ["Memes", "Humor", "Community"],
        terminalCommand: "curl -s https://api.memes.com/cybersec | jq .",
        terminalOutput: "[😂] Meme compilation loading...",
        views: 9001
    }
];

// Pagination settings
const POSTS_PER_PAGE = 6;

// Get blog posts for a specific page
function getBlogPage(page = 1) {
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const posts = blogPosts.slice(startIndex, endIndex);
    
    return {
        posts: posts,
        currentPage: page,
        totalPages: Math.ceil(blogPosts.length / POSTS_PER_PAGE),
        totalPosts: blogPosts.length,
        hasNext: endIndex < blogPosts.length,
        hasPrev: page > 1
    };
}

// Get a single blog post by ID
function getBlogPost(id) {
    return blogPosts.find(post => post.id === parseInt(id));
}

// Search blog posts
function searchBlogPosts(query) {
    return blogPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { blogPosts, getBlogPage, getBlogPost, searchBlogPosts };
}