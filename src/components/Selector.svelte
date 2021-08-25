<script>
    import { onMount } from "svelte";
    import { pickerValue, qrCode } from "../stores.js";

    const options = [
        {
            text: "Links/Text",
            value: 0,
        },
        {
            text: "WiFi",
            value: 1,
        },
        {
            text: "VCard / Business",
            value: 2,
        },
        {
            text: "Email",
            value: 3,
        },
        {
            text: "SMS",
            value: 4,
        },
    ];
    
    function setOption() {
        $pickerValue = document.getElementById("picker").value;
        $qrCode = "";
    }

    onMount(async () => {
        document.getElementById("picker").selectedIndex = $pickerValue;
    });
</script>

<div class="select is-medium is-rounded">
    <!-- svelte-ignore a11y-no-onchange -->
    <select id="picker" on:change={setOption}>
        {#each options as option}
            <option value={option.value}>{option.text}</option>
        {/each}
    </select>
</div>
