// Contact Section Data
const contactData = {
    title: "Contact & Connect",
    terminalPrompt: "root@raman:~$ cat /home/raman/contact_info.txt",
    
    // Contact information
    contact: {
        email: "raman@example.com",
        phone: "+91 9876543210",
        location: "Greater Noida, Uttar Pradesh, India",
        timezone: "Asia/Kolkata (UTC+5:30)",
        availability: "Available for freelance projects and collaborations"
    },
    
    // Social media links
    socialLinks: [
        {
            platform: "GitHub",
            icon: "fab fa-github",
            url: "https://github.com/rmndubey25",
            username: "@rmndubey25",
            description: "Check out my security tools and projects"
        },
        {
            platform: "LinkedIn",
            icon: "fab fa-linkedin",
            url: "https://linkedin.com/in/raman-dubey",
            username: "raman-dubey",
            description: "Connect with me professionally"
        },
        {
            platform: "Twitter",
            icon: "fab fa-twitter",
            url: "https://twitter.com/rmndubey25",
            username: "@rmndubey25",
            description: "Follow my cybersecurity journey"
        },
        {
            platform: "Discord",
            icon: "fab fa-discord",
            url: "#",
            username: "rmndubey25#1337",
            description: "Join cybersecurity discussions"
        },
        {
            platform: "Telegram",
            icon: "fab fa-telegram",
            url: "https://t.me/rmndubey25",
            username: "@rmndubey25",
            description: "Quick messages and updates"
        }
    ],
    
    // Contact form configuration
    contactForm: {
        action: "mailto:raman@example.com", // Can be changed to form handler
        method: "POST",
        fields: [
            {
                name: "name",
                type: "text",
                placeholder: "Your Name",
                required: true,
                icon: "fas fa-user"
            },
            {
                name: "email",
                type: "email", 
                placeholder: "your.email@example.com",
                required: true,
                icon: "fas fa-envelope"
            },
            {
                name: "subject",
                type: "text",
                placeholder: "Subject",
                required: true,
                icon: "fas fa-tag"
            },
            {
                name: "message",
                type: "textarea",
                placeholder: "Your message...",
                required: true,
                icon: "fas fa-comment",
                rows: 5
            }
        ],
        submitButton: {
            text: "Send Message",
            icon: "fas fa-paper-plane"
        }
    },
    
    // Services offered
    services: [
        {
            name: "Penetration Testing",
            description: "Web application and network security assessments",
            icon: "fas fa-shield-alt",
            availability: "Available"
        },
        {
            name: "Security Consulting",
            description: "Cybersecurity advice and strategy consulting",
            icon: "fas fa-users",
            availability: "Available"
        },
        {
            name: "Training & Workshops",
            description: "Cybersecurity awareness and technical training",
            icon: "fas fa-chalkboard-teacher",
            availability: "Available"
        },
        {
            name: "Tool Development",
            description: "Custom security tools and automation scripts",
            icon: "fas fa-code",
            availability: "Available"
        }
    ],
    
    // Collaboration interests
    collaborationInterests: [
        "Open Source Security Projects",
        "Bug Bounty Collaborations", 
        "Capture The Flag (CTF) Teams",
        "Security Research Partnerships",
        "Community Building Initiatives",
        "Educational Content Creation"
    ],
    
    // Response times
    responseTime: {
        email: "24-48 hours",
        socialMedia: "6-12 hours",
        urgentMatters: "Same day",
        projects: "Within 1 week"
    },
    
    // Professional status
    status: {
        currentRole: "Cybersecurity Student",
        lookingFor: [
            "Internship Opportunities",
            "Entry-level Security Positions", 
            "Freelance Security Projects",
            "Mentorship Opportunities",
            "Collaborative Research"
        ],
        interests: [
            "Penetration Testing",
            "Incident Response",
            "Threat Intelligence",
            "Security Operations",
            "Red Team Operations"
        ]
    },
    
    // Terminal commands for contact section
    terminalCommands: [
        "ping rmndubey25@cybersecurity.local",
        "PING rmndubey25@cybersecurity.local (192.168.1.100)",
        "64 bytes from rmndubey25: icmp_seq=1 ttl=64 time=1.337ms",
        "Connection established - Ready for collaboration!",
        "ssh rmndubey25@github.com",
        "Welcome to Raman's Digital Workspace!",
        "Type 'help' for available commands"
    ]
};