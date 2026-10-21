<script>
  import { onMount } from 'svelte';

  let weeks = [];
  let loading = true;
  let error = null;
  let hoveredData = null;

  const colors = [
    'bg-gray-900/50',
    'bg-retro-green/30',
    'bg-retro-green/60',
    'bg-retro-green/80',
    'bg-retro-green shadow-[0_0_5px_#00ff41]'
  ];

  // Local-time YYYY-MM-DD (toISOString is UTC and shifts the day in UTC+7)
  const fmt = (d) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

  const dayLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  onMount(async () => {
    try {
      const now = new Date();
      const endDateStr = fmt(now);
      
      const startDate = new Date();
      startDate.setDate(now.getDate() - 364);
      const startDateStr = fmt(startDate);

      const response = await fetch(`/api/wakatime/users/current/summaries?start=${startDateStr}&end=${endDateStr}`);
      if (!response.ok) throw new Error("ACCESS_DENIED");
      const result = await response.json();

      if (result.data) {
        processWakatimeData(result.data, startDate);
      } else {
        throw new Error("ACCESS_DENIED");
      }
    } catch (e) {
      error = e.message;
      generateMockData();
    } finally {
      loading = false;
    }
  });

  function processWakatimeData(apiData, startDate) {
    const dataMap = new Map();
    apiData.forEach(d => {
      dataMap.set(d.range.date, {
        hours: d.grand_total.decimal,
        text: d.grand_total.text
      });
    });

    let allDays = [];
    let current = new Date(startDate);
    const todayStr = fmt(new Date());

    for (let i = 0; i < 365; i++) {
      const dateStr = fmt(current);
      const activity = dataMap.get(dateStr) || { hours: 0, text: '0 secs' };
      
      allDays.push({
        date: dateStr,
        hours: activity.hours,
        text: activity.text,
        level: getLevel(activity.hours),
        isToday: dateStr === todayStr
      });
      
      current.setDate(current.getDate() + 1);
    }

    const firstDayOfWeek = startDate.getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      allDays.unshift({ date: null, hours: 0, level: 0 });
    }

    const tempWeeks = [];
    for (let i = 0; i < allDays.length; i += 7) {
      tempWeeks.push(allDays.slice(i, i + 7));
    }
    weeks = tempWeeks;
  }

  function getLevel(hours) {
    if (hours === 0) return 0;
    if (hours < 0.5) return 1;
    if (hours < 2) return 2;
    if (hours < 5) return 3;
    return 4;
  }

  function generateMockData() {
    weeks = Array.from({ length: 52 }, () => 
      Array.from({ length: 7 }, () => ({
        date: "OFFLINE_MODE",
        hours: Math.random() * 8,
        level: Math.floor(Math.random() * 5)
      }))
    );
  }
</script>

<div class="pixel-border bg-black/95 p-6 md:p-10 w-full">
  <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
    <div>
      <p class="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-bold">ANNUAL_DEVELOPMENT_TIMELINE // 365_DAYS</p>
    </div>
    
    <div class="pixel-border bg-gray-900 px-4 py-3 min-w-[240px] h-14 flex items-center justify-center border-retro-blue/30 shadow-lg">
      {#if hoveredData && hoveredData.date}
        <div class="text-xs text-center leading-tight tracking-wider">
          <div class="text-retro-blue font-bold uppercase">{hoveredData.date} {hoveredData.isToday ? '[TODAY]' : ''}</div>
          <div class="text-white mt-1">{hoveredData.text || hoveredData.hours.toFixed(1) + ' hrs'}</div>
        </div>
      {:else}
        <div class="text-xs text-retro-green font-bold animate-pulse tracking-[0.3em]">
          &gt;&gt; SCANNING_PIXELS &lt;&lt;
        </div>
      {/if}
    </div>
  </div>

  <div class="flex gap-4 overflow-x-auto pb-6 custom-scrollbar">
    <div class="flex flex-col justify-between text-[10px] text-gray-500 py-1 font-bold uppercase tracking-tighter">
      {#each dayLabels as day}
        <div class="h-4 flex items-center">{day}</div>
      {/each}
    </div>

    <div class="flex gap-[4px] md:gap-[6px]">
      {#each weeks as week}
        <div class="flex flex-col gap-[4px] md:gap-[6px]">
          {#each week as day}
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div 
              role={day.date ? 'img' : undefined}
              aria-label={day.date ? `${day.date}: ${day.text || day.hours.toFixed(1) + ' hrs'}` : undefined}
              tabindex={day.date ? 0 : undefined}
              class="w-4 h-4 md:w-5 md:h-5 {colors[day.level]} transition-all duration-100 
                     {day.date ? 'cursor-crosshair hover:ring-2 hover:ring-white hover:z-10 shadow-sm' : 'opacity-0'}
                     {day.isToday ? 'ring-2 ring-retro-blue' : ''}"
              on:mouseover={() => hoveredData = day}
              on:mouseleave={() => hoveredData = null}
              on:focus={() => hoveredData = day}
              on:blur={() => hoveredData = null}
            ></div>
          {/each}
        </div>
      {/each}
    </div>
  </div>

  <div class="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-6">
    <div class="flex items-center gap-3">
      {#if error}
        <span class="text-xs text-retro-pink uppercase font-bold tracking-widest">● OFFLINE_MODE: SIMULATED_DATA</span>
      {:else if loading}
        <span class="text-xs text-retro-blue animate-pulse font-bold tracking-widest">● CONNECTING_SATELLITE...</span>
      {:else}
        <span class="text-xs text-retro-green uppercase font-bold tracking-widest">● SYSTEM_ONLINE: LIVE_DATA</span>
      {/if}
    </div>

    <div class="flex items-center gap-4 text-xs text-gray-500 font-bold uppercase tracking-widest">
      <span>MIN</span>
      <div class="flex gap-2">
        {#each colors as color}
          <div class="w-4 h-4 {color}"></div>
        {/each}
      </div>
      <span>MAX</span>
    </div>
  </div>
</div>

<style>
  .custom-scrollbar::-webkit-scrollbar { height: 6px; }
  .custom-scrollbar::-webkit-scrollbar-track { background: #000; }
  .custom-scrollbar::-webkit-scrollbar-thumb { background: #444; border-radius: 3px; }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #666; }
</style>
