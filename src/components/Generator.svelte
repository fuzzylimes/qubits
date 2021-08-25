<script>
    import Forms from "./Forms.svelte";
    import { qrCode } from "../stores";
    import Selector from "./Selector.svelte";
</script>

<div class="container">
    <div class="box">
        <div class="columns is-centered is-vcentered">
            <div class="column is-8">
                <div class="section">
                    <div class="block">
                        <Selector />
                    </div>
                    <div class="block">
                        <Forms />
                    </div>
                </div>
            </div>
            <div class="column is-4 has-text-centered">
                {#if $qrCode !== ""}
                    <div class="section">
                        <img src={$qrCode} alt="qr code" />
                    </div>
                    <a href={$qrCode} download="qrcode.png">
                        <button class="button is-link">Download</button>
                    </a>
                {:else}
                    <img width="200" src="./favicon.png" alt="QR code" />
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
</style>
