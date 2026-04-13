// Synthetic audio engine - generates sounds using Web Audio API
let audioCtx: AudioContext | null = null;
let ambientGain: GainNode | null = null;
let ambientOsc: OscillatorNode | null = null;
let ambientLfo: OscillatorNode | null = null;
let isAmbientPlaying = false;

function getCtx() {
  if (!audioCtx) audioCtx = new AudioContext();
  return audioCtx;
}

// Ambient background hum
export function startAmbient() {
  if (isAmbientPlaying) return;
  const ctx = getCtx();
  
  ambientGain = ctx.createGain();
  ambientGain.gain.value = 0;
  ambientGain.connect(ctx.destination);

  // Deep drone
  ambientOsc = ctx.createOscillator();
  ambientOsc.type = "sine";
  ambientOsc.frequency.value = 55;
  
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 200;
  
  ambientOsc.connect(filter);
  filter.connect(ambientGain);
  ambientOsc.start();

  // Subtle LFO modulation
  ambientLfo = ctx.createOscillator();
  ambientLfo.frequency.value = 0.1;
  const lfoGain = ctx.createGain();
  lfoGain.gain.value = 10;
  ambientLfo.connect(lfoGain);
  lfoGain.connect(ambientOsc.frequency);
  ambientLfo.start();

  // Fade in
  ambientGain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 2);
  isAmbientPlaying = true;
}

export function stopAmbient() {
  if (!isAmbientPlaying || !ambientGain || !audioCtx) return;
  ambientGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 1);
  setTimeout(() => {
    ambientOsc?.stop();
    ambientLfo?.stop();
    ambientOsc = null;
    ambientLfo = null;
    ambientGain = null;
    isAmbientPlaying = false;
  }, 1200);
}

export function isPlaying() {
  return isAmbientPlaying;
}

// Character-specific power sound effects
export function playPowerSFX(effect: string) {
  const ctx = getCtx();
  
  switch (effect) {
    case "repulsor":
      playRepulsor(ctx);
      break;
    case "shield":
      playShield(ctx);
      break;
    case "lightning":
      playLightning(ctx);
      break;
    case "smash":
      playSmash(ctx);
      break;
    case "strike":
      playStrike(ctx);
      break;
    case "web":
      playWeb(ctx);
      break;
  }
}

function playRepulsor(ctx: AudioContext) {
  // High-energy blast
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(800, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.5);
  gain.gain.setValueAtTime(0.3, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.6);
  
  // Add noise burst
  playNoiseBurst(ctx, 0.15, 0.3);
}

function playShield(ctx: AudioContext) {
  // Metallic ring
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(1200, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.8);
  gain.gain.setValueAtTime(0.25, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.8);

  // Whoosh
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = "sine";
  osc2.frequency.setValueAtTime(300, ctx.currentTime);
  osc2.frequency.exponentialRampToValueAtTime(1500, ctx.currentTime + 0.2);
  osc2.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.5);
  gain2.gain.setValueAtTime(0.15, ctx.currentTime);
  gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
  osc2.connect(gain2);
  gain2.connect(ctx.destination);
  osc2.start();
  osc2.stop(ctx.currentTime + 0.5);
}

function playLightning(ctx: AudioContext) {
  // Crackling thunder
  playNoiseBurst(ctx, 0.4, 0.8);
  
  // Electric zap
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "square";
  osc.frequency.setValueAtTime(2000, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.6);
  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.7);
}

function playSmash(ctx: AudioContext) {
  // Deep impact
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(80, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(20, ctx.currentTime + 0.8);
  gain.gain.setValueAtTime(0.5, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 1);
  
  // Rumble noise
  playNoiseBurst(ctx, 0.3, 0.6);
}

function playStrike(ctx: AudioContext) {
  // Quick sharp hit
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(1500, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.15);
  gain.gain.setValueAtTime(0.25, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.2);
  
  // Electric crackle
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = "square";
  osc2.frequency.setValueAtTime(3000, ctx.currentTime + 0.05);
  osc2.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.15);
  gain2.gain.setValueAtTime(0.1, ctx.currentTime + 0.05);
  gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
  osc2.connect(gain2);
  gain2.connect(ctx.destination);
  osc2.start(ctx.currentTime + 0.05);
  osc2.stop(ctx.currentTime + 0.2);
}

function playWeb(ctx: AudioContext) {
  // Thwip sound - rising pitch
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(200, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(2000, ctx.currentTime + 0.1);
  osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.3);
  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.35);
}

function playNoiseBurst(ctx: AudioContext, volume: number, duration: number) {
  const bufferSize = ctx.sampleRate * duration;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
  }
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  const gain = ctx.createGain();
  gain.gain.value = volume;
  source.connect(gain);
  gain.connect(ctx.destination);
  source.start();
}
