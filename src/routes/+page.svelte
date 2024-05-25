<script>
  import getNotes from "$lib/generator"
  export let chords = []
  export let bars = 4

  function generate() {
    chords = [...getNotes(bars)]
    chords = chords
  }

  function regenerateChord(index) {
    chords[index] = getNotes(index + 1, index)[0]
  }

  function updateBars(event) {
    bars = event.target.value
  }
</script>

<main
  class="flex flex-col items-center gap-6 bg-slate-800 text-white text-2xl font-mono p-6 h-screen radio-canada-big-400"
>
  <form
    on:submit|preventDefault={generate}
    class="m-4 flex justify-center flex-col items-center gap-6"
  >
    <button
      class="w-70 text-center bg-slate-900 text-white p-3 rounded-md hover:bg-slate-700 border hover:border-slate-500"
      type="submit"
      on:click={generate}>GENERATE CHORDS</button
    >
    <input
      class="w-20 text-center bg-slate-900 hover:bg-slate-700 text-white p-2 rounded-md"
      type="number"
      id="bars"
      name="bars"
      min={1}
      max={32}
      bind:value={bars}
      on:change={updateBars}
    />
  </form>
  <section class="grid grid-cols-4 gap-6">
    {#each chords as c (c.code)}
      <button
        class="w-40 text-center bg-slate-300 text-black p-1 rounded-md border border-white hover:bg-red-400 hover:border-slate-600"
        on:click={() => regenerateChord(c.index)}
      >
        <span class="text-2xl">{c.note}</span><b class="text-xl text-red-900"
          >{c.type}</b
        >
      </button>
    {/each}
  </section>
</main>
