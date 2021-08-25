import { qrCode } from './stores.js';

export async function generate(val) {
    const code = await fetch('/api/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: val
        }),
    });
    const text = await code.blob();
    qrCode.set(URL.createObjectURL(text));
}