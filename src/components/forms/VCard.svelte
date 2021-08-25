<script>
    import { generate } from "../../common";
    import TypeInfo from "../TypeInfo.svelte";

    let firstName = '';
    let lastName = '';
    let birthMonth = '';
    let birthDay = '';
    let birthYear = '';
    let cell = '';
    let home = '';
    let work = '';
    let fax = '';
    let street = '';
    let ext = '';
    let locality = '';
    let region = '';
    let zip = '';
    let country = '';
    let email = '';
    let company = '';
    let job = '';
    let url = '';

    async function qr() {
        // start and set name
        let vString = `BEGIN:VCARD\nN:${lastName};${firstName}\nFN:${firstName} ${lastName}\n`;
        // handle birthday
        if (birthMonth && birthDay && birthYear) {
            vString += `BDAY:${birthYear}-${birthMonth}-${birthYear}\n`
        }
        // handle address
        if (street) {
            vString += `ADR:;${ext};${street};${locality};${region};${zip};${country}\n`
        }
        // phone numbers
        if (cell) {
            vString += buildPhoneNumber("cell,voice,msg,perf", cell);
        }
        if (home) {
            vString += buildPhoneNumber("home,voice", home);
        }
        if (work) {
            vString += buildPhoneNumber("work,voice", work);
        }
        if (fax) {
            vString += buildPhoneNumber("fax", fax);
        }
        // Email
        if (email) {
            vString += `EMAIL;TYPE=internet,perf:${email}\n`
        }
        // Website
        if (url) {
            vString += `URL:${url}\n`
        }
        // Company
        if (company) {
            vString += `ORG:${company}\n`
        }
        // Role
        if (job) {
            vString += `TITLE:${job}\n`
        }
        vString += 'VERSION:3.0\nEND:VCARD'

        console.log(vString);

        generate(vString);
    }

    function buildPhoneNumber(type, value) {
        return `TEL;TYPE=${type}:${value}\n`
    }

    function valid(firstName) {
        return firstName === '';
    }

</script>

<TypeInfo title="Generate a VCard QR Code!" description="Generate a QR code to share your contact info!" />

<div class="field">
    <label class="label" for="">Name</label>
    <div class="control">
        <div class="field is-grouped">
            <div class="control is-expanded">
                <input
                    bind:value={firstName}
                    class="input"
                    type="text"
                    placeholder="First Name"
                    maxlength="120"
                />
            </div>
            <div class="control is-expanded">
                <input
                    bind:value={lastName}
                    class="input"
                    type="text"
                    placeholder="Last Name"
                    maxlength="120"
                />
            </div>
        </div>
    </div>
</div>

<div class="field">
    <label class="label" for="">Email</label>
    <div class="control">
        <input
            bind:value={email}
            class="input"
            type="email"
            placeholder="Email address"
            maxlength="120"
        />
    </div>
</div>

<div class="field">
    <label class="label" for="">Phone Numbers</label>
    <div class="control">
        <div class="field is-grouped">
            <div class="control is-expanded">
                <input
                    bind:value={cell}
                    class="input"
                    type="tel"
                    placeholder="Cell Phone"
                    maxlength="20"
                />
            </div>
            <div class="control is-expanded">
                <input
                    bind:value={home}
                    class="input"
                    type="tel"
                    placeholder="Home Phone"
                    maxlength="20"
                />
            </div>
        </div>
    </div>
</div>

<div class="field is-grouped">
    <div class="control is-expanded">
        <input
            bind:value={work}
            class="input"
            type="tel"
            placeholder="Work Phone"
            maxlength="20"
        />
    </div>
    <div class="control is-expanded">
        <input
            bind:value={fax}
            class="input"
            type="tel"
            placeholder="Fax Number"
            maxlength="20"
        />
    </div>
</div>

<div class="field">
    <label class="label" for="">Address</label>
    <div class="control">
        <input
            bind:value={street}
            class="input"
            type="string"
            placeholder="Street address or P.O. Box"
            maxlength="200"
        />
    </div>
    <div class="control pt-1">
        <input
            bind:value={ext}
            class="input"
            type="string"
            placeholder="Apt, suite, unit, building, floor, etc."
            maxlength="200"
        />
    </div>
    <div class="control pt-1">
        <div class="field is-grouped">
            <div class="control is-expanded">
                <input
                    bind:value={locality}
                    class="input"
                    type="text"
                    placeholder="City / Locality"
                    maxlength="120"
                />
            </div>
            <div class="control is-expanded">
                <input
                    bind:value={region}
                    class="input"
                    type="text"
                    placeholder="State / Providence"
                    maxlength="120"
                />
            </div>
        </div>
    </div>
    <div class="control pt-1">
        <div class="field is-grouped">
            <div class="control">
                <input
                    bind:value={zip}
                    class="input"
                    type="text"
                    placeholder="Postal Code"
                    maxlength="20"
                />
            </div>
            <div class="control is-expanded">
                <input
                    bind:value={country}
                    class="input"
                    type="text"
                    placeholder="Country"
                    maxlength="60"
                />
            </div>
        </div>
    </div>
</div>

<div class="field">
    <label class="label" for="">Work</label>
    <div class="control">
        <div class="field is-grouped">
            <div class="control is-expanded">
                <input
                    bind:value={company}
                    class="input"
                    type="text"
                    placeholder="Company"
                    maxlength="120"
                />
            </div>
            <div class="control is-expanded">
                <input
                    bind:value={job}
                    class="input"
                    type="text"
                    placeholder="Job Title"
                    maxlength="120"
                />
            </div>
        </div>
    </div>
</div>

<div class="field">
    <label class="label" for="">Birthday</label>
    <div class="control">
        <div class="field is-grouped">
            <div class="control">
                <input
                    bind:value={birthMonth}
                    class="input"
                    type="text"
                    placeholder="MM"
                    maxlength="2"
                    size="4"
                />
            </div>
            <div class="control">
                <input
                    bind:value={birthDay}
                    class="input"
                    type="text"
                    placeholder="DD"
                    maxlength="2"
                    size="4"
                />
            </div>
            <div class="control">
                <input
                    bind:value={birthYear}
                    class="input"
                    type="text"
                    placeholder="YYYY"
                    maxlength="4"
                    size="6"
                />
            </div>
        </div>
    </div>
</div>

<div class="field">
    <label class="label" for="">Website</label>
    <div class="control">
        <input
            bind:value={url}
            class="input"
            type="text"
            placeholder="Website"
            maxlength="120"
        />
    </div>
</div>

<button class="button is-link" on:click={qr} disabled={valid(firstName)}> Generate </button>
