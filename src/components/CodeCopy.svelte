<script lang="ts">
    import { fade, blur } from "svelte/transition";
    import { onMount } from "svelte";
    const COPIED_TIMEOUT = 2000

    export let stayCopied = COPIED_TIMEOUT
    export let labelCopy = "Copiar";
    export let labelCopied = "¡Copiado!";

    let copied = false
    let selfElm: HTMLButtonElement;
    let isCodeBlock = true;

    const copy = async () => {
        if(selfElm) {
            const preElm = selfElm.parentElement?.parentElement
            const codeElm = preElm?.querySelector('code')
            if(preElm?.tagName === 'PRE' && codeElm) {
                await navigator.clipboard.writeText(codeElm.innerText);
                copied = true
        
                setTimeout(() => {
                    copied = false
                }, stayCopied);
            }
        }
    };

    onMount(() => {
        const preElm = selfElm.parentElement?.parentElement
        isCodeBlock = !!(preElm && preElm.tagName === 'PRE');
    })
</script>

<button 
    bind:this={selfElm} 
    on:click={copy} 
    class="absolute px-2 py-1 text-cyan-600 dark:text-cyan-300 bg-white/90 dark:bg-slate-900/80 border border-cyan-400 dark:border-cyan-700 rounded-lg shadow-md text-xs font-bold hover:bg-cyan-50 dark:hover:bg-cyan-950 transition select-none"
    style="top: 6px; right: 8px; z-index: 10;"
    style:display={isCodeBlock ? 'inline-block' : 'none'}
    aria-label={copied ? labelCopied : labelCopy}
    disabled={copied}
>
    {#if copied}
        <span transition:blur={{ amount: 50, opacity: 50 }} class="flex items-center gap-1">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
            {labelCopied}
        </span>
    {:else}
        <span transition:fade class="flex items-center gap-1">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><rect x="3" y="3" width="13" height="13" rx="2" /></svg>
            {labelCopy}
        </span>
    {/if}
</button>
