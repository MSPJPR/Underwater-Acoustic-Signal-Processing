// Ambient Noise Simulation
document.getElementById("generateNoise").addEventListener("click", function () {
  const canvas = document.getElementById("noiseCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < canvas.width; i++) {
    const x = i;
    const y = Math.random() * canvas.height;
    ctx.fillRect(x, y, 1, 1);
  }
});

// Download Noise Data
document.getElementById("downloadNoise").addEventListener("click", function () {
  const canvas = document.getElementById("noiseCanvas");
  const link = document.createElement("a");
  link.download = "noise_simulation.png";
  link.href = canvas.toDataURL();
  link.click();
});

// SNR Calculation
document.getElementById("calculateSNR").addEventListener("click", function () {
  const signalPower = document.getElementById("signalPower").value;
  const noisePower = document.getElementById("noisePower").value;
  const snr = 10 * Math.log10(signalPower / noisePower);

  document.getElementById("snrResult").innerText = `Signal-to-Noise Ratio: ${snr.toFixed(2)} dB`;
});

// Beamforming Simulation
document.getElementById("simulateBeamforming").addEventListener("click", function () {
  const canvas = document.getElementById("beamCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height);
  ctx.lineTo(canvas.width / 2, 0);
  ctx.strokeStyle = "#0077cc";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.strokeStyle = "#ff0000";
  ctx.stroke();
});
