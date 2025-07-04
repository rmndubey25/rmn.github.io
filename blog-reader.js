// Blog Reader System - Handles blog post display and navigation

class BlogManager {
    constructor() {
        this.currentPage = 1;
        this.currentPost = null;
        this.isReaderMode = false;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadBlogPage(1);
    }

    setupEventListeners() {
        // Handle "Read More" clicks
        document.addEventListener('click', (e) => {
            if (e.target.closest('.blog-link') && !e.target.closest('.blog-link').href.includes('#')) {
                e.preventDefault();
                const blogCard = e.target.closest('.blog-card');
                const postId = this.getPostIdFromCard(blogCard);
                this.openBlogPost(postId);
            }

            // Handle pagination
            if (e.target.closest('.pagination-next')) {
                e.preventDefault();
                this.nextPage();
            }

            if (e.target.closest('.pagination-prev')) {
                e.preventDefault();
                this.prevPage();
            }

            // Handle back to blog button
            if (e.target.closest('.back-to-blog')) {
                e.preventDefault();
                this.closeBlogPost();
            }
        });

        // Handle escape key to close blog post
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isReaderMode) {
                this.closeBlogPost();
            }
        });
    }

    getPostIdFromCard(blogCard) {
        // Get post ID from the card's position in the grid
        const allCards = document.querySelectorAll('.blog-card');
        const cardIndex = Array.from(allCards).indexOf(blogCard);
        const pageData = getBlogPage(this.currentPage);
        return pageData.posts[cardIndex]?.id || 1;
    }

    loadBlogPage(page) {
        const pageData = getBlogPage(page);
        this.currentPage = page;
        this.renderBlogGrid(pageData);
        this.updatePagination(pageData);
    }

    renderBlogGrid(pageData) {
        const blogGrid = document.querySelector('.blog-grid');
        if (!blogGrid) return;

        blogGrid.innerHTML = pageData.posts.map(post => this.createBlogCard(post)).join('');
        
        // Re-initialize animations for new cards
        if (window.portfolio && window.portfolio.observer) {
            const newCards = blogGrid.querySelectorAll('.blog-card');
            newCards.forEach(card => window.portfolio.observer.observe(card));
        }
    }

    createBlogCard(post) {
        const statusColors = {
            'NEW': 'active',
            'SERIES': 'development', 
            'TUTORIAL': 'planned',
            'POPULAR': 'active',
            'REVIEW': 'development',
            'FUN': 'planned'
        };

        return `
            <article class="blog-card" data-post-id="${post.id}">
                <div class="blog-header">
                    <div class="blog-meta">
                        <span class="blog-date">[${post.date}]</span>
                        <span class="blog-category">${post.category}</span>
                    </div>
                    <div class="blog-status">
                        <span class="status-badge ${statusColors[post.status]}">${post.status}</span>
                    </div>
                </div>
                <h3 class="blog-title">${post.title}</h3>
                <div class="blog-preview">
                    <p>${post.preview}</p>
                </div>
                <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                </div>
                <div class="blog-terminal">
                    <div class="terminal-line">
                        <span class="terminal-prompt">$</span> ${post.terminalCommand}
                    </div>
                    <div class="terminal-line">
                        <span class="output-text">${post.terminalOutput}</span>
                    </div>
                </div>
                <div class="blog-actions">
                    <a href="#" class="blog-link" data-post-id="${post.id}">
                        <i class="fas fa-terminal"></i> Read More
                    </a>
                    <span class="blog-stats">
                        <i class="fas fa-eye"></i> ${post.views.toLocaleString()} views
                    </span>
                </div>
            </article>
        `;
    }

    updatePagination(pageData) {
        const paginationContainer = document.querySelector('.pagination-buttons');
        if (!paginationContainer) return;

        paginationContainer.innerHTML = `
            <button class="btn btn-secondary pagination-prev" ${!pageData.hasPrev ? 'disabled' : ''}>
                <i class="fas fa-chevron-left"></i> ./prev
            </button>
            <span class="page-info">Page ${pageData.currentPage} of ${pageData.totalPages}</span>
            <button class="btn btn-primary pagination-next" ${!pageData.hasNext ? 'disabled' : ''}>
                ./next <i class="fas fa-chevron-right"></i>
            </button>
        `;
    }

    openBlogPost(postId) {
        const post = getBlogPost(postId);
        if (!post) return;

        this.currentPost = post;
        this.isReaderMode = true;
        this.renderBlogPost(post);
        
        // Hide blog grid and show reader
        document.querySelector('.blog-grid').style.display = 'none';
        document.querySelector('.blog-navigation').style.display = 'none';
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    renderBlogPost(post) {
        const blogContainer = document.querySelector('#blog .container');
        
        // Create blog reader
        const blogReader = document.createElement('div');
        blogReader.className = 'blog-reader';
        blogReader.innerHTML = `
            <div class="blog-reader-header">
                <button class="back-to-blog btn btn-secondary">
                    <i class="fas fa-arrow-left"></i> Back to Blog
                </button>
                <div class="blog-reader-meta">
                    <span class="blog-date">[${post.date}]</span>
                    <span class="blog-category">${post.category}</span>
                </div>
            </div>
            
            <div class="blog-reader-content">
                <div class="terminal-window">
                    <div class="terminal-header">
                        <div class="terminal-buttons">
                            <span class="btn-close"></span>
                            <span class="btn-minimize"></span>
                            <span class="btn-maximize"></span>
                        </div>
                        <div class="terminal-title">blog-post-${post.id}.md</div>
                    </div>
                    <div class="terminal-body">
                        <div class="blog-content">
                            ${this.parseMarkdownContent(post.content)}
                        </div>
                        
                        <div class="blog-footer">
                            <div class="blog-tags">
                                ${post.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                            </div>
                            <div class="blog-stats">
                                <span><i class="fas fa-eye"></i> ${post.views.toLocaleString()} views</span>
                                <span><i class="fas fa-calendar"></i> ${post.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        blogContainer.appendChild(blogReader);
    }

    parseMarkdownContent(content) {
        // Simple markdown parser for basic formatting
        return content
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/`(.*?)`/g, '<code>$1</code>')
            .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
            .replace(/^\- (.*$)/gim, '<li>$1</li>')
            .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
            .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/^(?!<[h|u|p|l])(.*)$/gim, '<p>$1</p>')
            .replace(/<p><\/p>/g, '')
            .replace(/<p>(<h[1-6]>)/g, '$1')
            .replace(/(<\/h[1-6]>)<\/p>/g, '$1')
            .replace(/<p>(<ul>)/g, '$1')
            .replace(/(<\/ul>)<\/p>/g, '$1')
            .replace(/<p>(<pre>)/g, '$1')
            .replace(/(<\/pre>)<\/p>/g, '$1');
    }

    closeBlogPost() {
        const blogReader = document.querySelector('.blog-reader');
        if (blogReader) {
            blogReader.remove();
        }
        
        // Show blog grid and navigation
        document.querySelector('.blog-grid').style.display = 'grid';
        document.querySelector('.blog-navigation').style.display = 'block';
        
        this.isReaderMode = false;
        this.currentPost = null;
        
        // Scroll to blog section
        document.querySelector('#blog').scrollIntoView({ behavior: 'smooth' });
    }

    nextPage() {
        const pageData = getBlogPage(this.currentPage);
        if (pageData.hasNext) {
            this.loadBlogPage(this.currentPage + 1);
        }
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.loadBlogPage(this.currentPage - 1);
        }
    }
}

// Initialize blog manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.blogManager = new BlogManager();
});