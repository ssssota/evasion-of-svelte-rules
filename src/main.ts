import { mount } from 'svelte';
import App from './App.svelte';
import "./index.css";

const app = mount(App, {
	target: document.getElementById('app')!,
	props: {
		listView: location.hash === '#list'
	}
});

export default app;
