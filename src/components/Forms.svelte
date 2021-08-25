<script>
    import Text from "./forms/Text.svelte";
    import { pickerValue } from "../stores";
    import Wifi from "./forms/Wifi.svelte";
    import Sms from "./forms/SMS.svelte";
    import Email from "./forms/Email.svelte";
    import VCard from "./forms/VCard.svelte";
</script>

{#if $pickerValue == 0}
    <Text />
{:else if $pickerValue == 1}
    <Wifi />
{:else if $pickerValue == 2}
    <VCard />
{:else if $pickerValue == 3}
    <Email />
{:else if $pickerValue == 4}
    <Sms />
{/if}
