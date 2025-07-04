// Projects Section Data
const projectsData = {
    title: "Projects & Labs",
    terminalPrompt: "root@raman:~$ ls -la /home/raman/projects/",
    
    // Featured projects
    projects: [
        {
            id: 1,
            name: "VulnScanner Pro",
            category: "Security Tool",
            description: "Custom vulnerability scanner built with Python for automated web application testing. Features include SQL injection detection, XSS scanning, and comprehensive reporting.",
            technologies: ["Python", "Requests", "BeautifulSoup", "SQLite"],
            github: "https://github.com/rmndubey25/vulnscanner-pro",
            demo: "https://rmndubey25.github.io/vulnscanner-demo",
            status: "Completed",
            year: "2024",
            highlights: [
                "Automated vulnerability detection",
                "Multi-threaded scanning",
                "HTML report generation",
                "Custom payload injection"
            ],
            terminalCommand: "python3 vulnscanner.py --target https://example.com",
            terminalOutput: "[+] Found 5 vulnerabilities in 3.2 seconds"
        },
        {
            id: 2,
            name: "PhishGuard",
            category: "Machine Learning",
            description: "AI-powered phishing detection system using machine learning to identify suspicious emails and websites with 95% accuracy rate.",
            technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask"],
            github: "https://github.com/rmndubey25/phishguard",
            demo: "https://phishguard-demo.herokuapp.com",
            status: "In Progress",
            year: "2024",
            highlights: [
                "95% detection accuracy",
                "Real-time URL analysis",
                "Browser extension available",
                "Machine learning powered"
            ],
            terminalCommand: "python3 phishguard.py --url https://suspicious-site.com",
            terminalOutput: "[!] PHISHING DETECTED - Confidence: 97%"
        },
        {
            id: 3,
            name: "SecureAPI Framework",
            category: "Web Security",
            description: "Comprehensive API security testing framework with automated endpoint discovery, authentication bypass, and vulnerability assessment capabilities.",
            technologies: ["Python", "FastAPI", "JWT", "Docker"],
            github: "https://github.com/rmndubey25/secureapi-framework",
            demo: "https://rmndubey25.github.io/secureapi-docs",
            status: "Completed",
            year: "2024",
            highlights: [
                "Automated endpoint discovery",
                "JWT token manipulation",
                "Rate limiting bypass",
                "API documentation generator"
            ],
            terminalCommand: "python3 secureapi.py --endpoint /api/v1/users --auth bypass",
            terminalOutput: "[+] Authentication bypass successful"
        },
        {
            id: 4,
            name: "Network Recon Toolkit",
            category: "Network Security",
            description: "Advanced network reconnaissance toolkit combining multiple scanning techniques for comprehensive network mapping and vulnerability assessment.",
            technologies: ["Python", "Nmap", "Masscan", "Shodan API"],
            github: "https://github.com/rmndubey25/network-recon-toolkit",
            demo: null,
            status: "Completed",
            year: "2023",
            highlights: [
                "Multi-scanner integration",
                "Shodan API integration",
                "Network visualization",
                "Automated reporting"
            ],
            terminalCommand: "python3 recon.py --target 192.168.1.0/24 --deep",
            terminalOutput: "[+] Discovered 23 hosts, 156 open ports"
        },
        {
            id: 5,
            name: "Mobile App Security Scanner",
            category: "Mobile Security",
            description: "Automated mobile application security testing tool for Android APK analysis, including static and dynamic analysis capabilities.",
            technologies: ["Python", "Frida", "ADB", "XML Parser"],
            github: "https://github.com/rmndubey25/mobile-security-scanner",
            demo: "https://rmndubey25.github.io/mobile-scanner-demo",
            status: "In Progress",
            year: "2024",
            highlights: [
                "Static code analysis",
                "Dynamic runtime analysis",
                "Permission auditing",
                "Malware detection"
            ],
            terminalCommand: "python3 mobile_scanner.py --apk target.apk --analysis full",
            terminalOutput: "[+] Analysis complete - 12 security issues found"
        },
        {
            id: 6,
            name: "Cyber Threat Intelligence Platform",
            category: "Threat Intelligence",
            description: "Real-time threat intelligence platform aggregating data from multiple sources to provide comprehensive security insights and IOC tracking.",
            technologies: ["Python", "ElasticSearch", "Kibana", "Redis"],
            github: "https://github.com/rmndubey25/threat-intel-platform",
            demo: null,
            status: "Planned",
            year: "2025",
            highlights: [
                "Multi-source data aggregation",
                "Real-time threat monitoring",
                "IOC correlation engine",
                "Automated alerting system"
            ],
            terminalCommand: "python3 threat_intel.py --feed all --monitor active",
            terminalOutput: "[+] Monitoring 1,337 threat indicators"
        }
    ],
    
    // Project categories for filtering
    categories: [
        "All Projects",
        "Security Tool",
        "Machine Learning", 
        "Web Security",
        "Network Security",
        "Mobile Security",
        "Threat Intelligence"
    ],
    
    // Technologies used across projects
    allTechnologies: [
        "Python", "JavaScript", "Bash", "PowerShell",
        "TensorFlow", "Scikit-learn", "FastAPI", "Flask",
        "Docker", "Kubernetes", "AWS", "Azure",
        "Nmap", "Burp Suite", "Metasploit", "Wireshark",
        "SQLite", "PostgreSQL", "MongoDB", "Redis",
        "Git", "GitHub Actions", "Jenkins", "Linux"
    ],
    
    // Statistics
    stats: {
        totalProjects: 15,
        completedProjects: 8,
        inProgressProjects: 4,
        plannedProjects: 3,
        githubStars: 234,
        githubForks: 67,
        contributions: 1337
    }
};