<script>
  import { onMount } from 'svelte';
  import qrcode from 'qrcode-generator';
  import ActivityCalendar from './lib/ActivityCalendar.svelte';
  let name = "RETRO PORTFOLIO";
  const githubUrl = "https://github.com/jeerawut97";
  const linkedinUrl = "https://www.linkedin.com/in/jeerawut-jaidee-7a0519208/";
  let subtitle = "SYSTEM OPERATOR: JEERAWUT";
  // Bitcoin receive address, inlined at build time from VITE_BTC_ADDRESS (public by nature)
  const btcAddress = (import.meta.env.VITE_BTC_ADDRESS ?? "").trim();
  // Deployed open-source projects: loaded at runtime from /api/projects (OPEN_SOURCE variable on the
  // Worker), so adding one needs no rebuild.
  let openSource = [];
  onMount(async () => {
    try {
      const res = await fetch('/api/projects');
      const list = await res.json();
      if (res.ok && Array.isArray(list)) openSource = list;
    } catch {
      // Not available (e.g. vite dev server): modal shows the empty state
    }
  });
  let dialog;
  let coffeeDialog;
  let copied = false;
  // Close when the click lands on the backdrop (the dialog element itself), not its content
  const onDialogClick = (e) => { if (e.target === e.currentTarget) e.currentTarget.close(); };

  function makeQr(address) {
    const qr = qrcode(0, 'M');
    qr.addData(`bitcoin:${address}`);
    qr.make();
    return qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true });
  }
  $: qrSvg = btcAddress ? makeQr(btcAddress) : '';

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(btcAddress);
      copied = true;
      setTimeout(() => (copied = false), 2000);
    } catch {
      // Clipboard blocked: the address is selectable text, user can copy manually
    }
  }
</script>

<main class="min-h-screen bg-retro-bg flex flex-col items-center p-4 md:p-8 relative overflow-hidden text-white">
  <!-- Scanline Overlay -->
  <div aria-hidden="true" class="scanlines pointer-events-none fixed inset-0 z-50"></div>
  
  <!-- CRT Flicker Effect -->
  <div aria-hidden="true" class="crt-flicker pointer-events-none fixed inset-0 z-40 bg-white/5 opacity-20"></div>

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
          <button type="button" aria-haspopup="dialog" on:click={() => dialog.showModal()} class="pixel-button text-center text-xs md:text-sm py-4">VIEW_PROJECTS</button>
          <button type="button" aria-haspopup="dialog" on:click={() => coffeeDialog.showModal()} class="pixel-button text-center hover:bg-retro-pink text-xs md:text-sm py-4">COFFEE_ME</button>
        </div>

      </div>
    </div>

    <!-- Bottom Section: Wide Activity Calendar -->
    <div class="w-full">
      <ActivityCalendar />
    </div>

    <!-- Footer: Social Links -->
    <footer class="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 py-12 border-t-2 border-white/5">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" class="text-retro-blue hover:text-white transition-colors text-xs md:text-sm tracking-[0.2em] font-bold hover:scale-110">GITHUB</a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" class="text-retro-blue hover:text-white transition-colors text-xs md:text-sm tracking-[0.2em] font-bold hover:scale-110">LINKEDIN</a>
      <p class="text-white/30 text-[10px] md:text-xs tracking-widest ml-auto hidden md:block">EST. 199X</p>
    </footer>
  </div>

  <!-- Projects Terminal Modal -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <dialog bind:this={dialog} on:click={onDialogClick} aria-labelledby="terminal-title" class="terminal-modal pixel-border bg-black text-retro-green font-mono">
    <div class="flex items-center justify-between bg-retro-green text-black px-4 py-2 text-[10px] md:text-xs font-bold tracking-widest">
      <span id="terminal-title">TERMINAL://PROJECTS</span>
      <button type="button" on:click={() => dialog.close()} aria-label="Close" class="hover:bg-black hover:text-retro-green px-2">[X]</button>
    </div>

    <div class="p-5 md:p-8 space-y-6 text-xs md:text-sm leading-relaxed">
      <p><span class="text-retro-pink">user@portfolio</span>:~$ ls ./open-source</p>

      <ul class="space-y-3">
        {#each openSource as project, i}
          <li class="flex gap-3">
            <span class="text-gray-500">{String(i + 1).padStart(2, '0')}</span>
            <a href={project.url} target="_blank" rel="noopener noreferrer" class="text-retro-blue hover:bg-retro-blue hover:text-black break-all">{project.name} &rarr;</a>
          </li>
        {/each}
        {#if !openSource.length}
          <li class="text-gray-500">(empty)</li>
        {/if}
      </ul>

      <p><span class="text-retro-pink">user@portfolio</span>:~$ <span class="cursor">_</span></p>
      <p class="text-gray-500 text-[10px] tracking-widest">PRESS [ESC] TO EXIT</p>
    </div>
  </dialog>

  <!-- Coffee (Bitcoin donate) Terminal Modal -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <dialog bind:this={coffeeDialog} on:click={onDialogClick} aria-labelledby="coffee-title" class="terminal-modal pixel-border bg-black text-retro-green font-mono">
    <div class="flex items-center justify-between bg-retro-green text-black px-4 py-2 text-[10px] md:text-xs font-bold tracking-widest">
      <span id="coffee-title">TERMINAL://COFFEE</span>
      <button type="button" on:click={() => coffeeDialog.close()} aria-label="Close" class="hover:bg-black hover:text-retro-green px-2">[X]</button>
    </div>

    <div class="p-5 md:p-8 space-y-6 text-xs md:text-sm leading-relaxed">
      <p><span class="text-retro-pink">user@portfolio</span>:~$ donate --coin BTC</p>

      {#if btcAddress}
        <div class="mx-auto w-44 md:w-52 bg-white p-1" aria-label="Bitcoin address QR code" role="img">
          {@html qrSvg}
        </div>

        <p class="break-all text-retro-blue select-all">{btcAddress}</p>

        <button type="button" on:click={copyAddress} class="pixel-button text-xs w-full py-3" aria-live="polite">
          {copied ? 'COPIED!' : 'COPY_ADDRESS'}
        </button>

        <p class="text-gray-500 text-[10px] tracking-widest">BITCOIN ONLY // THANKS FOR THE COFFEE</p>
      {:else}
        <p class="text-retro-pink">ERROR: WALLET_ADDRESS_NOT_SET</p>
      {/if}

      <p class="text-gray-500 text-[10px] tracking-widest">PRESS [ESC] TO EXIT</p>
    </div>
  </dialog>

  <!-- Background Decorative Elements -->
  <div aria-hidden="true" class="fixed bottom-0 left-0 w-full h-96 bg-gradient-to-t from-retro-blue/10 to-transparent pointer-events-none"></div>
</main>

<style>
  :global(body) {
    overflow-x: hidden;
    background-color: #0d0d0d;
  }

  .terminal-modal {
    margin: auto;
    width: min(92vw, 40rem);
    padding: 0;
    box-shadow: 0 0 0 4px #000, 0 0 30px rgba(0, 255, 65, 0.25);
  }

  .terminal-modal::backdrop {
    background: rgba(0, 0, 0, 0.85);
  }

  .cursor {
    animation: blink 1s steps(1) infinite;
  }

  @keyframes blink {
    50% { opacity: 0; }
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
    animation: flicker 0.6s infinite;
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

  @media (prefers-reduced-motion: reduce) {
    .crt-flicker { animation: none; }
    .cursor { animation: none; }
    .glitch::before,
    .glitch::after { display: none; }
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
