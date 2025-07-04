// Skills Section Data
const skillsData = {
    title: "Skills & Arsenal",
    terminalPrompt: "root@raman:~$ ls -la /home/raman/skills/",
    
    // Skills categories
    categories: [
        {
            name: "Penetration Testing",
            icon: "fas fa-user-ninja",
            skills: [
                { name: "Web Application Testing", level: 85, color: "#00ff41" },
                { name: "Network Penetration", level: 75, color: "#00ff41" },
                { name: "Vulnerability Assessment", level: 90, color: "#00ff41" },
                { name: "Social Engineering", level: 70, color: "#00ff41" },
                { name: "Wireless Security", level: 65, color: "#00ff41" }
            ]
        },
        {
            name: "Security Tools",
            icon: "fas fa-tools",
            skills: [
                { name: "Burp Suite", level: 95, color: "#ff6b6b" },
                { name: "Metasploit", level: 80, color: "#ff6b6b" },
                { name: "Nmap", level: 90, color: "#ff6b6b" },
                { name: "Wireshark", level: 85, color: "#ff6b6b" },
                { name: "SQLMap", level: 75, color: "#ff6b6b" }
            ]
        },
        {
            name: "Programming",
            icon: "fas fa-code",
            skills: [
                { name: "Python", level: 90, color: "#4ecdc4" },
                { name: "JavaScript", level: 85, color: "#4ecdc4" },
                { name: "Bash/Shell", level: 80, color: "#4ecdc4" },
                { name: "PowerShell", level: 70, color: "#4ecdc4" },
                { name: "SQL", level: 75, color: "#4ecdc4" }
            ]
        },
        {
            name: "Operating Systems",
            icon: "fas fa-desktop",
            skills: [
                { name: "Kali Linux", level: 95, color: "#feca57" },
                { name: "Ubuntu/Debian", level: 85, color: "#feca57" },
                { name: "Windows", level: 80, color: "#feca57" },
                { name: "macOS", level: 70, color: "#feca57" },
                { name: "ParrotOS", level: 75, color: "#feca57" }
            ]
        }
    ],
    
    // Certifications
    certifications: [
        {
            name: "Certified Ethical Hacker (CEH)",
            issuer: "EC-Council",
            year: "2024",
            status: "In Progress",
            badge: "🎯"
        },
        {
            name: "CompTIA Security+",
            issuer: "CompTIA",
            year: "2024",
            status: "Planned",
            badge: "🔒"
        },
        {
            name: "OSCP",
            issuer: "Offensive Security",
            year: "2025",
            status: "Goal",
            badge: "⚔️"
        }
    ],
    
    // Learning resources
    platforms: [
        {
            name: "TryHackMe",
            progress: "200+ Rooms Completed",
            rank: "Top 5%",
            link: "https://tryhackme.com/p/rmndubey25"
        },
        {
            name: "HackTheBox",
            progress: "50+ Machines Owned",
            rank: "Hacker Rank",
            link: "https://hackthebox.com/profile/rmndubey25"
        },
        {
            name: "PentesterLab",
            progress: "Advanced Badges",
            rank: "Pro Member",
            link: "https://pentesterlab.com/profile/rmndubey25"
        },
        {
            name: "Cybrary",
            progress: "Multiple Courses",
            rank: "Active Learner",
            link: "https://cybrary.it/profile/rmndubey25"
        }
    ],
    
    // Current focus areas
    currentFocus: [
        {
            area: "Advanced Web Application Security",
            description: "Deep diving into OWASP Top 10 and beyond",
            progress: 75
        },
        {
            area: "Cloud Security (AWS/Azure)",
            description: "Learning cloud penetration testing techniques",
            progress: 45
        },
        {
            area: "Mobile Application Security",
            description: "Android and iOS security testing",
            progress: 35
        },
        {
            area: "Red Team Operations",
            description: "Advanced persistent threat simulation",
            progress: 55
        }
    ]
};