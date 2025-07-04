// Content Manager - Dynamic Content Loading System
class ContentManager {
    constructor() {
        this.sections = {
            hero: null,
            about: null,
            skills: null,
            projects: null,
            contact: null,
            blog: null
        };
        this.initialized = false;
    }

    // Initialize all content sections
    async init() {
        if (this.initialized) return;
        
        try {
            // Load all data files
            await this.loadAllData();
            
            // Render only sections that need dynamic content
            this.renderHeroSection();
            // Keep original About and Skills design
            // this.renderAboutSection();
            // this.renderSkillsSection();
            this.renderProjectsSection();
            this.renderContactSection();
            
            this.initialized = true;
            console.log('✅ Content Manager initialized successfully');
        } catch (error) {
            console.error('❌ Error initializing Content Manager:', error);
        }
    }

    // Load all data files
    async loadAllData() {
        this.sections.hero = heroData;
        this.sections.about = aboutData;
        this.sections.skills = skillsData;
        this.sections.projects = projectsData;
        this.sections.contact = contactData;
        this.sections.blog = blogPosts;
    }

    // Render Hero Section
    renderHeroSection() {
        const hero = this.sections.hero;
        
        // Update hero text content
        const heroName = document.querySelector('.hero-name');
        const heroTitle = document.querySelector('.hero-title');
        const heroLocation = document.querySelector('.hero-location');
        const heroTagline = document.querySelector('.hero-tagline');
        
        if (heroName) heroName.textContent = hero.name;
        if (heroTitle) heroTitle.textContent = hero.title;
        if (heroLocation) heroLocation.textContent = hero.location;
        if (heroTagline) heroTagline.textContent = hero.tagline;

        // Update stats
        const statsContainer = document.querySelector('.stats-grid');
        if (statsContainer) {
            statsContainer.innerHTML = Object.entries(hero.stats).map(([key, value]) => `
                <div class="stat-item">
                    <div class="stat-number">${value}</div>
                    <div class="stat-label">${key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
            `).join('');
        }
    }

    // Render About Section - DISABLED to keep original design
    renderAboutSection() {
        // Original design preserved - no dynamic rendering
        return;
    }

    // Render Skills Section - DISABLED to keep original design
    renderSkillsSection() {
        // Original design preserved - no dynamic rendering
        return;
    }

    // Render Projects Section
    renderProjectsSection() {
        const projects = this.sections.projects;
        
        const projectsContainer = document.querySelector('.projects-grid');
        if (projectsContainer) {
            projectsContainer.innerHTML = projects.projects.map(project => `
                <div class="project-card">
                    <div class="project-header">
                        <div class="project-meta">
                            <span class="project-category">${project.category}</span>
                            <span class="project-year">${project.year}</span>
                        </div>
                        <div class="project-status">
                            <span class="status-badge ${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span>
                        </div>
                    </div>
                    <h3 class="project-title">${project.name}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-terminal">
                        <div class="terminal-line">
                            <span class="terminal-prompt">$</span> ${project.terminalCommand}
                        </div>
                        <div class="terminal-line">
                            <span class="output-text">${project.terminalOutput}</span>
                        </div>
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="project-link">
                            <i class="fab fa-github"></i> Code
                        </a>
                        ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link">
                            <i class="fas fa-external-link-alt"></i> Demo
                        </a>` : ''}
                    </div>
                </div>
            `).join('');
        }
    }

    // Render Contact Section
    renderContactSection() {
        const contact = this.sections.contact;
        
        // Update contact form
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.action = contact.contactForm.action;
            contactForm.method = contact.contactForm.method;
        }

        // Update social links
        const socialLinksContainer = document.querySelector('.social-links');
        if (socialLinksContainer) {
            socialLinksContainer.innerHTML = contact.socialLinks.map(social => `
                <a href="${social.url}" target="_blank" class="social-link" title="${social.description}">
                    <i class="${social.icon}"></i>
                    <span>${social.platform}</span>
                </a>
            `).join('');
        }
    }

    // Update specific section data
    updateSection(sectionName, newData) {
        this.sections[sectionName] = newData;
        
        // Re-render the specific section
        switch(sectionName) {
            case 'hero':
                this.renderHeroSection();
                break;
            case 'about':
                // Keep original design - no re-rendering
                break;
            case 'skills':
                // Keep original design - no re-rendering
                break;
            case 'projects':
                this.renderProjectsSection();
                break;
            case 'contact':
                this.renderContactSection();
                break;
        }
    }

    // Get section data
    getSection(sectionName) {
        return this.sections[sectionName];
    }

    // Add new project
    addProject(projectData) {
        this.sections.projects.projects.push(projectData);
        this.renderProjectsSection();
    }

    // Update project
    updateProject(projectId, projectData) {
        const index = this.sections.projects.projects.findIndex(p => p.id === projectId);
        if (index !== -1) {
            this.sections.projects.projects[index] = { ...this.sections.projects.projects[index], ...projectData };
            this.renderProjectsSection();
        }
    }

    // Remove project
    removeProject(projectId) {
        this.sections.projects.projects = this.sections.projects.projects.filter(p => p.id !== projectId);
        this.renderProjectsSection();
    }
}

// Initialize content manager
const contentManager = new ContentManager();

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    contentManager.init();
});