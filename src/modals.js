export function initializeModals() {
    // Modal content
    const content = {
        about: `
            <p>Hello! I'm a passionate developer who loves creating innovative solutions.</p>
            <p>I enjoy working with modern technologies and building user-friendly applications.</p>
            <p>My journey in programming started with curiosity and has evolved into a career focused on continuous learning and growth.</p>
            <br>
            <p><strong>Languages:</strong> Japanese (Native), English (Fluent)</p>
            <p><strong>Interests:</strong> Web Development, 3D Graphics, UI/UX Design</p>
        `,
        skills: `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                <div>
                    <h3>Frontend</h3>
                    <ul>
                        <li>React / Next.js</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>Three.js</li>
                    </ul>
                </div>
                <div>
                    <h3>Backend</h3>
                    <ul>
                        <li>Node.js</li>
                        <li>Python</li>
                        <li>Database Design</li>
                        <li>API Development</li>
                    </ul>
                </div>
                <div>
                    <h3>Tools</h3>
                    <ul>
                        <li>Git / GitHub</li>
                        <li>VS Code</li>
                        <li>Docker</li>
                        <li>AWS</li>
                    </ul>
                </div>
            </div>
        `,
        works: `
            <div style="space-y: 2rem;">
                <div style="margin-bottom: 2rem;">
                    <h3>Portfolio Website v1</h3>
                    <p>A responsive portfolio website built with Gatsby and TypeScript</p>
                    <p><strong>Tech Stack:</strong> Gatsby, TypeScript, Tailwind CSS, Netlify</p>
                    <p><strong>Features:</strong> Responsive design, Multi-language support, Modern UI</p>
                    <a href="https://kzk4043-portfolio.netlify.app" target="_blank" style="color: #4ECDC4;">View Live →</a>
                </div>
                <div style="margin-bottom: 2rem;">
                    <h3>3D Interactive Portfolio</h3>
                    <p>An immersive 3D portfolio experience using Three.js</p>
                    <p><strong>Tech Stack:</strong> Three.js, Vite, JavaScript</p>
                    <p><strong>Features:</strong> 3D Room, Interactive Objects, Modal System</p>
                    <span style="color: #96CEB4;">Currently viewing this project!</span>
                </div>
                <div>
                    <h3>More Projects</h3>
                    <p>Check out my GitHub for more projects and contributions</p>
                    <a href="https://github.com/kzk4043" target="_blank" style="color: #4ECDC4;">GitHub Profile →</a>
                </div>
            </div>
        `,
        contact: `
            <div style="text-align: center;">
                <p style="margin-bottom: 2rem;">Let's connect and discuss opportunities!</p>
                <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center;">
                    <a href="https://github.com/kzk4043" target="_blank" style="color: #4ECDC4; text-decoration: none; padding: 0.5rem 1rem; border: 1px solid #4ECDC4; border-radius: 5px; display: inline-block;">
                        📚 GitHub
                    </a>
                    <a href="https://zenn.dev/kzk4043" target="_blank" style="color: #4ECDC4; text-decoration: none; padding: 0.5rem 1rem; border: 1px solid #4ECDC4; border-radius: 5px; display: inline-block;">
                        📝 Zenn (Tech Blog)
                    </a>
                    <a href="https://codepen.io/kzk4043" target="_blank" style="color: #4ECDC4; text-decoration: none; padding: 0.5rem 1rem; border: 1px solid #4ECDC4; border-radius: 5px; display: inline-block;">
                        💻 CodePen
                    </a>
                </div>
                <p style="margin-top: 2rem; color: #ccc; font-size: 0.9rem;">
                    Feel free to reach out through any of these platforms!
                </p>
            </div>
        `
    };
    
    // Populate modal content
    document.getElementById('aboutContent').innerHTML = content.about;
    document.getElementById('skillsContent').innerHTML = content.skills;
    document.getElementById('worksContent').innerHTML = content.works;
    document.getElementById('contactContent').innerHTML = content.contact;
    
    // Close modal functionality
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });
}