// Initial parameters
let parameters = {
    primaryColor: '#a67c52',
    secondaryColor: '#f5f1eb',
    lineWidth: 2,
    amplitude: 20,
    frequency: 10,
    speed: 5,
    density: 20,
    animation: true,
    invertColors: false
};

// Presets
const presets = {
    classic: {
        primaryColor: '#a67c52',
        secondaryColor: '#f5f1eb',
        lineWidth: 2,
        amplitude: 20,
        frequency: 10,
        speed: 5,
        density: 20,
        invertColors: false
    },
    psychedelic: {
        primaryColor: '#ff6b6b',
        secondaryColor: '#4ecdc4',
        lineWidth: 3,
        amplitude: 35,
        frequency: 25,
        speed: 8,
        density: 30,
        invertColors: true
    },
    minimal: {
        primaryColor: '#2c2c2c',
        secondaryColor: '#ffffff',
        lineWidth: 1,
        amplitude: 15,
        frequency: 8,
        speed: 3,
        density: 15,
        invertColors: false
    },
    vibrant: {
        primaryColor: '#845ec2',
        secondaryColor: '#ff9671',
        lineWidth: 2,
        amplitude: 30,
        frequency: 20,
        speed: 10,
        density: 25,
        invertColors: true
    }
};

// Canvas setup
const canvas = document.getElementById('op-art-canvas');
const ctx = canvas.getContext('2d');

// Event listeners for controls
document.getElementById('line-width').addEventListener('input', updateLineWidth);

document.getElementById('amplitude').addEventListener('input', (e) => {
    parameters.amplitude = e.target.value;
    draw();
});

document.getElementById('frequency').addEventListener('input', (e) => {
    parameters.frequency = e.target.value;
    draw();
});

document.getElementById('speed').addEventListener('input', (e) => {
    parameters.speed = e.target.value;
    draw();
});

document.getElementById('density').addEventListener('input', (e) => {
    parameters.density = e.target.value;
    draw();
});

document.getElementById('invert-colors').addEventListener('change', (e) => {
    parameters.invertColors = e.target.checked;
    draw();
});

document.getElementById('animation-toggle').addEventListener('change', (e) => {
    parameters.animation = e.target.checked;
});

// Update line width based on user input
function updateLineWidth() {
    const lineWidthInput = document.getElementById('line-width');
    parameters.lineWidth = parseInt(lineWidthInput.value);
    lineWidthInput.nextElementSibling.innerText = parameters.lineWidth; // Update display
    draw(); // Redraw with new line width
}

// Drawing function
function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set line width before drawing
    ctx.lineWidth = parameters.lineWidth;

    // Draw based on current scene
    switch (currentScene) {
        case 'waves':
            drawWaves();
            break;
        case 'curves':
            drawCurves();
            break;
        case 'circles':
            drawCircles();
            break;
        case 'triangles':
            drawTriangles();
            break;
    }
}

// Resize canvas on window resize
window.addEventListener('resize', resizeCanvas);
resizeCanvas();