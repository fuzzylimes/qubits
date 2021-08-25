import { writable } from 'svelte/store';

export const pickerValue = writable(0);

export const qrCode = writable('');