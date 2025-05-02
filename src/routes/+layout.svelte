<script>
	import Nav from '$lib/components/Nav.svelte';
	import { fade, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { page } from '$app/stores';

	import '$lib/styles.css';

	import { onMount } from 'svelte';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';

  injectAnalytics();

	let isOpen = false;
	let isDesktop = false;

	onMount(() => {
		// Ensure that window is only accessed on the client
		const checkWidth = () => {
			isDesktop = window.innerWidth > 940; // Update based on window width
		};

		checkWidth(); // run once on mount

		window.addEventListener('resize', checkWidth); // Attach resize event listener

		// Clean up the listener when the component is destroyed
		return () => window.removeEventListener('resize', checkWidth);
	});

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<section class="layout">
	<div class="body-content">
		<div class="header">
			<h1 class="keania-one-regular">☾ The Watching the Detectives Fan Club ☽</h1>
		</div>

		<!-- Nav component -->
		<Nav />

		{#key $page.url.pathname}
			<div class="main">
				<div in:fade={{ duration: 800 }}>
					<slot />
				</div>
			</div>
		{/key}
	</div>
</section>

<style>
	.gradient {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 50px; /* Height of the gradient */
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.8),
			rgba(0, 0, 0, 0)
		); /* Black to transparent */
		z-index: 1; /* Behind other content */
	}

	@font-face {
		font-family: 'Abordage Regular';
		src: url('/fonts/abordage-regular.woff2') format('woff2');
		font-weight: normal;
		font-style: normal;
	}

	@font-face {
		font-family: 'Basalt Fond';
		src: url('/fonts/basalte-fond.woff2') format('woff2');
		font-weight: bold;
		font-style: normal;
	}

	.header {
		grid-area: header;
		border-radius: 15px;
		font-size: 1.5rem;
	}

	.header h1 {
		color: var(--gold);
		text-align: center;
		position: relative;
		z-index: 2;
		text-shadow: 0px 0px 7px var(--lucy-purple);
		margin-bottom: 0rem;
		transition:
			letter-spacing 2s,
			text-shadow 1s;
	}

	.header h1:hover {
		letter-spacing: 4px;
		text-shadow:
			0px 0px 5px var(--lucy-purple),
			0px 0px 10px var(--lucy-purple);
	}

	:root {
		--midnight-blue: #2c3e50;
		--crimson-red: #e74c3c;
		--gold: #f1c40f;
		--slate-gray: #7f8c8d;
		--mint-green: #1abc9c;
	}

	.body-content {
		margin-left: 8%;
		margin-right: 8%;
		position: relative;
		width: 84%; /* Full width */
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 160px 4fr auto;
		grid-template-areas:
			'header header header header'
			'aside aside aside aside'
			'main main main main';
		gap: 8px;
	}


	.layout {
		width: 100%;
		height: 100%;
		background:
			linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%),
			linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%),
			url('/imgs/backgroundfooter.jpg') no-repeat top center;
		background-size: cover;
		transition:
			background-image 1s ease-in-out,
			background-position 1s ease-in-out,
			background-size 1s ease-in-out;
	}

	/* Add responsive layout for screens under 1200px */
	@media (max-width: 1100px) {
    
  .aside-nav ul {
    margin: 0;
    padding-inline-start: 0 !important;
  }

  

		.body-content {
			grid-template-columns: 1fr 1fr 1fr; /* Adjust grid layout */
      grid-template-rows: auto auto auto;
			grid-template-areas:
				'header header header'
        'aside aside aside'
				'main main main'
				'main main main';
		}

		.header {
			display: flex;
			width: 100%;
			margin-right: 10px;
			font-size: 1.2rem;
			justify-self: flex-start;
      text-align: center;
		}

		nav {
			display: inline-block;
			width: 30%;
			vertical-align: top;
			margin-top: 20px; /* Add some spacing */
		}

		/* Ensure the nav is inline with the header */
		.header h1 {
			text-align: center;
		}
		.main {
			margin: 0;
		}

    

	}




  
	@media (max-width: 700px) {
	.body-content {
		margin-left: 3%;
		margin-right: 3%;
		position: relative;
		width: 94%; /* Full width */
		height: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 160px 4fr auto;
		grid-template-areas:
			'header header header header'
			'aside aside aside aside'
			'main main main main';
		gap: 8px;
	}

  
	.header h1:hover {
		letter-spacing: 2.5px;
		text-shadow:
			0px 0px 5px var(--lucy-purple),
			0px 0px 10px var(--lucy-purple);
	}
}
</style>
