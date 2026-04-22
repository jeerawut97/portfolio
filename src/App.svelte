<script>
  import ActivityCalendar from './lib/ActivityCalendar.svelte';
  let name = "RETRO PORTFOLIO";
  let subtitle = "SYSTEM OPERATOR: JEERAWUT";
</script>

<main class="min-h-screen bg-retro-bg flex flex-col items-center p-4 md:p-8 relative overflow-hidden text-white">
  <!-- Scanline Overlay -->
  <div class="scanlines pointer-events-none fixed inset-0 z-50"></div>
  
  <!-- CRT Flicker Effect -->
  <div class="crt-flicker pointer-events-none fixed inset-0 z-40 bg-white/5 opacity-20"></div>

  <!-- Main Container -->
  <div class="z-10 w-full max-w-6xl flex flex-col gap-8 md:gap-12">
    
    <!-- Header Section -->
    <header class="text-center space-y-6 py-8">
      <div class="relative inline-block">
        <h1 class="text-5xl md:text-8xl font-bold glitch tracking-tighter" data-text={name}>
          {name}
        </h1>
        <div class="mt-4 text-retro-green text-xs md:text-sm tracking-[0.3em] uppercase font-bold">
          {subtitle}
        </div>
      </div>
    </header>

    <!-- Top Row: Hero Box -->
    <div class="w-full">
      <div class="pixel-border bg-black/70 p-8 md:p-12 space-y-8 shadow-2xl">
        <div class="space-y-6">
          <div class="flex items-center gap-3 border-b-2 border-white/10 pb-4">
            <div class="w-3 h-3 bg-retro-pink animate-pulse"></div>
            <span class="text-sm md:text-base text-retro-pink font-bold uppercase tracking-[0.2em]">System_Status</span>
          </div>
          <p class="text-left text-sm md:text-lg leading-relaxed text-gray-200 font-mono tracking-wide">
            > AUTHENTICATING... [DONE]<br>
            > KERNEL_LOADED: v8.bit.0<br>
            > MAPPING_NEURAL_PROJECTS...<br>
            > READY_FOR_INPUT_
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <button class="pixel-button text-xs md:text-sm py-4">VIEW_PROJECTS</button>
          <button class="pixel-button hover:bg-retro-pink text-xs md:text-sm py-4">CONTACT_ME</button>
        </div>
      </div>
    </div>

    <!-- Bottom Section: Wide Activity Calendar -->
    <div class="w-full">
      <ActivityCalendar />
    </div>

    <!-- Footer: Social Links -->
    <footer class="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 py-12 border-t-2 border-white/5">
      <a href="https://github.com/jeerawut97" class="text-retro-blue hover:text-white transition-colors text-xs md:text-sm tracking-[0.2em] font-bold hover:scale-110">GITHUB</a>
      <a href="https://www.linkedin.com/in/jeerawut-jaidee-7a0519208/" class="text-retro-blue hover:text-white transition-colors text-xs md:text-sm tracking-[0.2em] font-bold hover:scale-110">LINKEDIN</a>
      <p class="text-white/30 text-[10px] md:text-xs tracking-widest ml-auto hidden md:block">EST. 199X</p>
    </footer>
  </div>

  <!-- Background Decorative Elements -->
  <div class="fixed bottom-0 left-0 w-full h-96 bg-gradient-to-t from-retro-blue/10 to-transparent pointer-events-none"></div>
</main>

<style>
  :global(body) {
    overflow-x: hidden;
    background-color: #0d0d0d;
  }

  .scanlines {
    background: linear-gradient(
      to bottom,
      rgba(18, 16, 16, 0) 50%,
      rgba(0, 0, 0, 0.2) 50%
    );
    background-size: 100% 4px;
  }

  .crt-flicker {
    animation: flicker 0.2s infinite;
  }

  @keyframes flicker {
    0% { opacity: 0.05; }
    50% { opacity: 0.08; }
    100% { opacity: 0.05; }
  }

  .glitch {
    position: relative;
    color: white;
  }

  .glitch::before,
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch::before {
    left: 2px;
    text-shadow: -3px 0 #ff00ff;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }

  .glitch::after {
    left: -2px;
    text-shadow: -3px 0 #00ffff;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }

  @keyframes glitch-anim {
    0% { clip: rect(31px, 9999px, 94px, 0); }
    20% { clip: rect(62px, 9999px, 42px, 0); }
    40% { clip: rect(16px, 9999px, 78px, 0); }
    100% { clip: rect(81px, 9999px, 32px, 0); }
  }

  @keyframes glitch-anim2 {
    0% { clip: rect(65px, 9999px, 100px, 0); }
    40% { clip: rect(95px, 9999px, 33px, 0); }
    80% { clip: rect(48px, 9999px, 15px, 0); }
    100% { clip: rect(10px, 9999px, 85px, 0); }
  }
</style>
