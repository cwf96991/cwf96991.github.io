/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect,useState } from "react";

import { Header } from "./widget";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["PNG"];
const PixelEffectWidget = () => {
    const [base64,setBase64] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAGcCAMAAABdp5phAAAC/VBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAcHBwaGhoXFxcVFRUUFBQSEhIREREQEBAPDw8ODg4NDQ0NDQ0MDAwMDAwWFhYVFRUUFBQUFBQTExMSEhISEhIREREQEBAQEBAPDw8PDw8PDw8ODg4ODg4UFBQUFBQTExMTExMSEhISEhIREREREREREREQEBAQEBAQEBAPDw8PDw8PDw8TExMTExMTExMSEhISEhISEhIREREREREREREQEBAQEBAQEBAQEBAPDw8PDw8TExMSEhISEhISEhISEhIREREREREREREREREREREQEBAQEBAQEBAQEBAQEBASEhISEhISEhISEhISEhIREREREREREREREREREREQEBAQEBAQEBAQEBAQEBASEhISEhISEhISEhISEhIREREREREREREREREREREREREQEBAQEBAQEBAQEBASEhISEhISEhISEhIREREREREREREREREREREREREREREQEBAQEBAQEBAQEBASEhISEhISEhISEhIREREREREREREREREREREREREREREREREQEBAQEBASEhISEhISEhIREREREREREREREREREREREREREREREREREREQEBAQEBASEhISEhISEhIREREREREREREREREREREREREREREREREREREREREQEBAQEBASEhISEhIREREREREREREREREREREREREREREREREREREREREREREQEBAQEBASEhISEhIREREREREREREREREREREREREREREREREREREREREREREQEBAQEBASEhISEhIREREREREREREREREREREREREREREREREREREREREREREREREQEBASEhIREREREREREREREREREREREREREREREREREREREREREREREREREREQEBASEhIRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERH///8OOr8YAAAA/XRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BR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")
    const draw = () => {
        const canvas = document.getElementById('canvas1')
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;


        class Particle {
            constructor(effect, x, y, color) {
                this.effect = effect;
                this.x = Math.random() * this.effect.width;
                this.y = Math.random() * this.effect.height;
                this.originX = Math.floor(x);
                this.originY = Math.floor(y);
                this.color = color;
                this.size = this.effect.gap;
                this.vx = 0;
                this.vy = 0;
                this.ease = 0.5;
                this.friction = 0.9
                this.dx = 0;
                this.dy = 0;
                this.distance = 0;
                this.force = 0;
                this.angle = 0;
            }
            draw(context) {
                let color = this.color
                context.fillStyle = color.toString();
                context.fillRect(this.x, this.y, this.size, this.size)

            }
            update() {
                this.dx = this.effect.mouse.x - this.x;
                this.dy = this.effect.mouse.y - this.y;
                this.distance = this.dx * this.dx + this.dy * this.dy
                this.force = -this.effect.mouse.radius / this.distance
                if (this.distance < this.effect.mouse.radius) {
                    this.angle = Math.atan2(this.dy, this.dx)
                    this.vx += this.force * Math.cos(this.angle)
                    this.vy += this.force * Math.sin(this.angle)
                }
                this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
                this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;

            }
            warp() {
                this.x = Math.random() * this.effect.width;
                this.y = Math.random() * this.effect.height;
                this.ease = 0.05
            }
        }
        class Effect {
            constructor(width, height) {
                this.width = width;
                this.height = height;
                this.particlesArray = [];
                this.image = document.getElementById('image1');
                this.centerX = this.width * 0.5;
                this.centerY = this.height * 0.5;
                this.x = this.centerX - this.image.width * 0.5;
                this.y = this.centerY - this.image.height * 0.5;
                this.gap = 3;
                this.mouse = {
                    radius: 3000,
                    x: undefined,
                    y: undefined
                }
                window.addEventListener('mousemove', event => {
                    this.mouse.x = event.x;
                    this.mouse.y = event.y - 120;
                })
            }
            init(context) {
                context.drawImage(this.image, this.x, this.y)
                const pixels = context.getImageData(0, 0, this.width, this.height).data;
                for (let y = 0; y < this.height; y += this.gap) {
                    for (let x = 0; x < this.width; x += this.gap) {
                        const index = (y * this.width + x) * 4;
                        const red = pixels[index];
                        const green = pixels[index + 1];
                        const blue = pixels[index + 2];
                        const alpha = pixels[index + 3];
                        const color = 'rgba(' + red + ',' + green + ',' + blue +',' + alpha +')';
                        
                        if (alpha > 0) {
                            
                            this.particlesArray.push(new Particle(this, x, y, color));
                        }
                    }
                }
            }
            draw(context) {
                this.particlesArray.forEach(particle => particle.draw(context));
            }
            update() {
                this.particlesArray.forEach(particle => particle.update());
            }
            warp() {
                this.particlesArray.forEach(particle => particle.warp());
            }
        }
        const effect = new Effect(canvas.width, canvas.height);
        effect.init(ctx);

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            effect.draw(ctx);
            effect.update();
            requestAnimationFrame(animate);
        }
        animate()
    }
    const Widget = () => {
        
        useEffect(() => {
            draw()

        }, [])
        return (
            <div className="">
                <canvas id="canvas1" className=" -translate-y-[50px]"></canvas>
                <img alt="demo Image" className="hidden" id="image1" src={base64}></img>
            </div>
        );
    };
    const handleChange = (file) => {
        
       
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            // Make a fileInfo Object
            let baseURL = reader.result;
            setBase64(baseURL)
            draw()
          };
          
      };
    return (
        <div className="">
            <Header
                title="Pixel Hover Effect | my work"
                header="Pixel Hover Effect"
                skill="PixelHoverEffect"
            />
            <div className="flex-col items-center justify-center w-full h-full">
            <FileUploader  label="Upload or drop a file on this page" classes="mx-auto translate-y-[50px]" handleChange={handleChange} name="file" types={fileTypes} >
            </FileUploader>
            <FileUploader  classes="mx-auto translate-y-[50px]" handleChange={handleChange} name="file" types={fileTypes} >
            <div className=""><Widget /></div>
            </FileUploader>
            
           
            
           </div>
        </div>
    );
};

export default PixelEffectWidget;
