// const canvas = document.getElementById('matrix');
// const ctx = canvas.getContext('2d');

// const chars = '001010101010011010101000111010101101'; 

// Draw animationfunction draw() {ctx.fillStyle = '#0F0';for(let i = 0; i < 100; i++) {ctx.fillText(chars.charAt(Math.floor(Math.random() * chars.length)), Math.random() * canvas.width, Math.random() * canvas.height);}}
  
// Animate  function animate() {ctx.clearRect(0, 0, canvas.width, canvas.height);draw();

// Delay the next frame by 85%setTimeout(function() {requestAnimationFrame(animate);}, 85);}animate();/* Canvas */