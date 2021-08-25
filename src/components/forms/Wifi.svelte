<script>
  import { onMount } from "svelte";

  import { generate } from "../../common";
  import TypeInfo from "../TypeInfo.svelte";

  let network = "";
  let security = "";
  let password = "";

  async function qr() {
    if (!network || (security && !password)) {
      return;
    }
    const networkString = `WIFI:S:${network};${
      security ? "T:" + security.toUpperCase() : ""
    };${password ? "P:" + password : ""};H:${isHidden()};`;
    generate(networkString);
  }

  function onSecurityChange() {
    security = document.getElementById("security").value;
    if (!security) {
      password = "";
    }
  }

  function isHidden() {
    return document.querySelector("#hidden").checked;
  }

  function disabled(network, security, password) {
    return (!network || (security && !password));
  }

  onMount(async () => {
    security = document.getElementById("security").value;
    console.log(security);
  });
</script>

<TypeInfo
  title="Generate a WiFi QR Code!"
  description="Generate a QR code that can be scanned to instantly join a wireless network!"
/>

<div class="field">
  <label class="label" for="">Network Name (SSID)</label>
  <div class="control">
    <input
      bind:value={network}
      class="input"
      type="text"
      placeholder="Network SSID"
    />
  </div>
</div>

<div class="columns is-vcentered">
  <div class="column">
    <div class="field">
      <label class="label" for="">Authentication Type</label>
      <div class="control">
        <div class="select is-rounded">
          <!-- svelte-ignore a11y-no-onchange -->
          <select id="security" on:change={onSecurityChange}>
            <option value="wep">WEP</option>
            <option value="wpa">WPA</option>
            <option value="">None</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="field">
      <div class="control">
        <label class="checkbox is-size-5">
          <input type="checkbox" id="hidden" />
          Hidden network
        </label>
      </div>
    </div>
  </div>
</div>

{#if security}
  <div class="field">
    <label class="label" for="">Network Password</label>
    <div class="control">
      <input
        bind:value={password}
        class="input"
        type="password"
        placeholder="Network Password"
      />
    </div>
  </div>
{/if}

<button class="button is-link" on:click={qr} disabled={disabled(network, security, password)}> Generate </button>
