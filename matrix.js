// Matrix Rain Effect for the background canvas
class MatrixRain {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        this.matrixArray = this.matrix.split("");
        
        this.fontSize = 14;
        this.columns = 0;
        this.drops = [];
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        this.resizeCanvas();
        this.initializeDrops();
        this.startAnimation();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.initializeDrops();
        });
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / this.fontSize);
    }
    
    initializeDrops() {
        this.drops = [];
        for (let x = 0; x < this.columns; x++) {
            this.drops[x] = Math.random() * this.canvas.height;
        }
    }
    
    draw() {
        // Black BG for the canvas with slight transparency for trail effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Set the text color and font
        this.ctx.fillStyle = '#00ff41';
        this.ctx.font = `${this.fontSize}px 'Fira Code', monospace`;
        
        // Loop through the drops
        for (let i = 0; i < this.drops.length; i++) {
            // Random character from matrix string
            const text = this.matrixArray[Math.floor(Math.random() * this.matrixArray.length)];
            
            // Draw the character
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            
            // Randomly reset to top, create the rain effect
            if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                this.drops[i] = 0;
            }
            
            // Increment Y coordinate
            this.drops[i]++;
        }
    }
    
    startAnimation() {
        const animate = () => {
            this.draw();
            this.animationId = requestAnimationFrame(animate);
        };
        animate();
    }
    
    stopAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
    
    // Method to change the intensity of the matrix rain
    setIntensity(intensity) {
        this.fontSize = intensity === 'high' ? 10 : intensity === 'medium' ? 14 : 18;
        this.resizeCanvas();
        this.initializeDrops();
    }
    
    // Method to change the color scheme
    setColorScheme(scheme) {
        switch(scheme) {
            case 'green':
                this.ctx.fillStyle = '#00ff41';
                break;
            case 'cyan':
                this.ctx.fillStyle = '#00ffff';
                break;
            case 'red':
                this.ctx.fillStyle = '#ff0040';
                break;
            case 'stealth':
                this.ctx.fillStyle = '#00cc33';
                break;
            default:
                this.ctx.fillStyle = '#00ff41';
        }
    }
}

// Enhanced Matrix Effect with multiple layers
class EnhancedMatrixRain extends MatrixRain {
    constructor(canvasId) {
        super(canvasId);
        this.layers = 3;
        this.layerData = [];
        this.initializeLayers();
    }
    
    initializeLayers() {
        this.layerData = [];
        for (let layer = 0; layer < this.layers; layer++) {
            this.layerData[layer] = {
                drops: [],
                speed: 0.5 + (layer * 0.3),
                opacity: 0.3 + (layer * 0.2),
                fontSize: this.fontSize + (layer * 2)
            };
            
            // Initialize drops for each layer
            for (let x = 0; x < this.columns; x++) {
                this.layerData[layer].drops[x] = Math.random() * this.canvas.height;
            }
        }
    }
    
    draw() {
        // Clear with black background
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw each layer
        for (let layer = 0; layer < this.layers; layer++) {
            const layerInfo = this.layerData[layer];
            
            // Set opacity and color for this layer
            this.ctx.globalAlpha = layerInfo.opacity;
            this.ctx.fillStyle = layer === 0 ? '#00ff41' : 
                               layer === 1 ? '#00cc33' : '#008822';
            this.ctx.font = `${layerInfo.fontSize}px 'Fira Code', monospace`;
            
            // Draw characters for this layer
            for (let i = 0; i < layerInfo.drops.length; i++) {
                const text = this.matrixArray[Math.floor(Math.random() * this.matrixArray.length)];
                
                this.ctx.fillText(
                    text, 
                    i * this.fontSize, 
                    layerInfo.drops[i] * this.fontSize
                );
                
                // Reset drops with different probabilities for each layer
                const resetProbability = 0.975 + (layer * 0.005);
                if (layerInfo.drops[i] * this.fontSize > this.canvas.height && 
                    Math.random() > resetProbability) {
                    layerInfo.drops[i] = 0;
                }
                
                // Move drops at different speeds
                layerInfo.drops[i] += layerInfo.speed;
            }
        }
        
        // Reset global alpha
        this.ctx.globalAlpha = 1;
    }
    
    resizeCanvas() {
        super.resizeCanvas();
        this.initializeLayers();
    }
    
    // Add glitch effect
    addGlitchEffect(duration = 1000) {
        const originalDraw = this.draw.bind(this);
        const glitchStartTime = Date.now();
        
        this.draw = () => {
            if (Date.now() - glitchStartTime < duration) {
                // Glitch effect modifications
                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                
                // Random color shifts
                const colors = ['#ff0040', '#00ffff', '#ffff00', '#00ff41'];
                this.ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                this.ctx.font = `${this.fontSize}px 'Fira Code', monospace`;
                
                // Draw with random positions for glitch effect
                for (let i = 0; i < this.drops.length; i++) {
                    const text = this.matrixArray[Math.floor(Math.random() * this.matrixArray.length)];
                    const glitchX = i * this.fontSize + (Math.random() - 0.5) * 10;
                    const glitchY = this.drops[i] * this.fontSize + (Math.random() - 0.5) * 10;
                    
                    this.ctx.fillText(text, glitchX, glitchY);
                    this.drops[i]++;
                    
                    if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                        this.drops[i] = 0;
                    }
                }
            } else {
                // Return to normal
                this.draw = originalDraw;
                originalDraw();
            }
        };
    }
    
    // Pulse effect for special events
    pulseEffect(color = '#00ff41', duration = 2000) {
        const originalDraw = this.draw.bind(this);
        const pulseStartTime = Date.now();
        
        this.draw = () => {
            const elapsed = Date.now() - pulseStartTime;
            const progress = elapsed / duration;
            
            if (progress < 1) {
                // Calculate pulse intensity
                const pulseIntensity = Math.sin(progress * Math.PI * 4) * 0.5 + 0.5;
                
                // Clear canvas
                this.ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                
                // Draw with pulsing color
                this.ctx.globalAlpha = 0.3 + (pulseIntensity * 0.7);
                this.ctx.fillStyle = color;
                this.ctx.font = `${this.fontSize}px 'Fira Code', monospace`;
                
                for (let i = 0; i < this.drops.length; i++) {
                    const text = this.matrixArray[Math.floor(Math.random() * this.matrixArray.length)];
                    this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
                    
                    this.drops[i]++;
                    if (this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.975) {
                        this.drops[i] = 0;
                    }
                }
                
                this.ctx.globalAlpha = 1;
            } else {
                // Return to normal
                this.draw = originalDraw;
                originalDraw();
            }
        };
    }
}

// Initialize Matrix Rain Effect
document.addEventListener('DOMContentLoaded', () => {
    const matrixRain = new EnhancedMatrixRain('matrix-canvas');
    
    // Store reference globally for potential interactions
    window.matrixRain = matrixRain;
    
    // Listen for theme changes to adjust matrix colors
    document.addEventListener('themeChanged', (e) => {
        if (e.detail.theme === 'stealth') {
            matrixRain.setColorScheme('stealth');
        } else {
            matrixRain.setColorScheme('green');
        }
    });
    
    // Trigger pulse effect on certain interactions
    document.addEventListener('click', () => {
        if (Math.random() < 0.1) { // 10% chance
            matrixRain.pulseEffect('#00ffff', 1000);
        }
    });
    
    // Performance optimization: pause animation when page is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            matrixRain.stopAnimation();
        } else {
            matrixRain.startAnimation();
        }
    });
});

// Expose Matrix Rain functionality for external use
window.MatrixEffects = {
    glitch: (duration) => window.matrixRain?.addGlitchEffect(duration),
    pulse: (color, duration) => window.matrixRain?.pulseEffect(color, duration),
    setIntensity: (level) => window.matrixRain?.setIntensity(level),
    setColor: (scheme) => window.matrixRain?.setColorScheme(scheme)
};
