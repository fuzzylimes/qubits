<script>
    import { generate } from "../../common";
    import TypeInfo from "../TypeInfo.svelte";

    let email = "";
    let subject = "";
    let body = "";
    let characters;

    async function qr() {
        const text = `mailto: ${email}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
        generate(text);
    }

    function getCharacters() {
        characters = `${body.length}/1024`;
    }

    $: body, getCharacters();
</script>

<TypeInfo
    title="Generate an Email QR Code!"
    description="Generate a QR code that creates a pre-populated Email!"
/>

<div class="field">
    <label class="label" for="">To Address</label>
    <div class="control">
        <input
            bind:value={email}
            class="input"
            type="email"
            placeholder="To Address"
            maxlength="120"
        />
    </div>
</div>

<div class="field">
    <label class="label" for="">Subject</label>
    <div class="control">
        <input
            bind:value={subject}
            class="input"
            type="email"
            placeholder="Prepopulate the Subject"
            maxlength="120"
        />
    </div>
</div>

<div class="field">
    <label class="label" for="">Body</label>
    <div class="control">
        <textarea
            bind:value={body}
            class="textarea"
            type="email"
            placeholder="Prepopulate the message body"
            rows="3"
            maxlength="1024"
        />
    </div>
    <p class="help">{characters}</p>
</div>

<button class="button is-link" on:click={qr}> Generate </button>
