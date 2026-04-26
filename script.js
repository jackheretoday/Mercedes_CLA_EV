const canvas = document.getElementById("car-canvas");
const context = canvas.getContext("2d");
const progress = document.getElementById("progress");
const loader = document.getElementById("loader");
const steps = document.querySelectorAll(".step");

const frameCount = 300;
const currentFrame = index => (
  `car_scroll_frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
);

const images = [];
const car = {
  frame: 0
};

// Preload images
let imagesLoaded = 0;

const preloadImages = () => {
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    img.onload = () => {
      imagesLoaded++;
      const percent = Math.round((imagesLoaded / frameCount) * 100);
      progress.style.width = `${percent}%`;
      
      if (imagesLoaded === frameCount) {
        setTimeout(() => {
            loader.classList.add("hidden");
            render(); // Initial render
        }, 500);
      }
    };
    images.push(img);
  }
};

// Set canvas size
const setCanvasSize = () => {
    // We want the image to maintain aspect ratio and cover the screen or fit nicely
    // Assuming the frames are roughly 16:9 or similar
    canvas.width = 1920; 
    canvas.height = 1080;
    render();
};

const render = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  const img = images[car.frame];
  if (img) {
    // Draw image centered and scaled
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;
    context.drawImage(img, x, y, img.width * scale, img.height * scale);
  }
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  
  // Calculate frame index (0 to 299)
  // We want to use most of the scroll for the frames
  // The hero section is 500vh, so maxScrollTop is roughly 4 * window.innerHeight
  // But we have other sections too. Let's adjust.
  
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount * 1.2) // Speed up/stretch the animation
  );
  
  if (frameIndex >= 0 && frameIndex < frameCount) {
    car.frame = frameIndex;
    requestAnimationFrame(render);
  }

  // Handle Text Steps
  handleTextAnimation(scrollFraction);
});

const handleTextAnimation = (fraction) => {
    // fraction goes from 0 to 1
    // We have 4 steps. Let's trigger them at specific intervals
    const stepPoints = [0.05, 0.25, 0.45, 0.65];
    steps.forEach((step, index) => {
        const start = stepPoints[index];
        const end = start + 0.15;
        
        if (fraction >= start && fraction <= end) {
            step.classList.add("active");
        } else {
            step.classList.remove("active");
        }
    });
};

const html = document.documentElement;

// Initialize
window.addEventListener('resize', setCanvasSize);
setCanvasSize();
preloadImages();
