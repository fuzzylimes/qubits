<script>
    import { generate } from "../../common";
    import TypeInfo from "../TypeInfo.svelte";

    let number = "";
    let message = "";
    let characters;

    async function qr() {
        const text = `SMSTO:${number}:${message}`;
        generate(text);
    }

    function getCharacters() {
        characters = `${message.length}/160`;
    }

    $: message, getCharacters();
</script>

<TypeInfo
    title="Generate a SMS QR Code"
    description="Generate a QR code that creates a pre-populated text message!"
/>

<div class="field">
    <label class="label" for="">To Number</label>
    <div class="control">
        <input
            bind:value={number}
            class="input"
            type="tel"
            placeholder="Prepopulate the To number"
        />
    </div>
</div>

<div class="field">
    <label class="label" for="">Message</label>
    <div class="control">
        <div class="field">
            <p class="control is-expanded">
                <textarea
                    bind:value={message}
                    class="textarea"
                    type="text"
                    placeholder="Prepopulate message body"
                    maxlength="160"
                    rows="2"
                />
            </p>
            <p class="help">{characters}</p>
        </div>
    </div>
</div>

<button class="button is-link" on:click={qr}> Generate </button>
