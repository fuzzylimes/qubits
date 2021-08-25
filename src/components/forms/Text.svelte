<script>
    import { generate } from "../../common";
    import TypeInfo from "../TypeInfo.svelte";

    let text = "";

    async function qr() {
        generate(text);
    }

    function validate(item) {
        return item === "";
    }
</script>

<TypeInfo
    title="Generate a Link or Text QR Code!"
    description="Generate a QR code that points to a URL, or just shares some text!"
/>

<div class="field">
    <label class="label" for="">Link / Text</label>
    <div class="control">
        <input
            bind:value={text}
            class="input"
            type="text"
            placeholder="Enter a link or text"
            maxlength="1024"
        />
    </div>
</div>

<button class="button is-link" on:click={qr} disabled={validate(text)}>
    Generate
</button>
