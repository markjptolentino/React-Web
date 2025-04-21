import { useEffect, useRef } from 'react';

const CyberBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 200;  // Increased particle count
        const digitalRain = [];
        const rainCount = 100;  // Increased rain count

        const colors = ['#00ff99', '#00ccff', '#ff00cc', '#ff6666', '#ffcc00'];

        // Particles
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.hue = Math.random() * 360;
                this.tailLength = Math.random() * 5 + 5;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.05;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = `hsla(${this.hue}, 70%, 50%, 0.5)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Create tail effect for particles
                ctx.strokeStyle = `hsla(${this.hue}, 70%, 50%, 0.1)`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x - this.speedX * this.tailLength, this.y - this.speedY * this.tailLength);
                ctx.stroke();
            }
        }

        // Digital Rain
        class RainDrop {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * -canvas.height;
                this.speed = Math.random() * 5 + 5;
                this.char = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
                this.size = Math.random() * 15 + 15;
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.y += this.speed;
                if (this.y > canvas.height) {
                    this.y = -50;
                    this.x = Math.random() * canvas.width;
                    this.char = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
                }
            }

            draw() {
                ctx.font = `${this.size}px monospace`;
                ctx.fillStyle = this.color;
                ctx.fillText(this.char, this.x, this.y);
            }
        }

        // Add particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Add rain drops
        for (let i = 0; i < rainCount; i++) {
            digitalRain.push(new RainDrop());
        }

        const connect = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const distance = ((particles[a].x - particles[b].x) ** 2) + ((particles[a].y - particles[b].y) ** 2);
                    if (distance < 4000) {
                        ctx.strokeStyle = `hsla(${particles[a].hue}, 70%, 50%, ${1 - distance / 4000})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(17, 24, 39, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            digitalRain.forEach((drop) => {
                drop.update();
                drop.draw();
            });
            connect();
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default CyberBackground;
