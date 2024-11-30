<script>
	import Nav from '$lib/components/Nav.svelte';
</script>

<section class="layout">
	<div class="body-content">
		<div class="header">
			<h1>✨Watching the Detectives Fan Club HQ✨</h1>
		</div>
		<div class="main">
			<slot />
		</div>
		<aside>
			<Nav />
		</aside>
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
      font-family: "Abordage Regular"; /* Name you want to use in CSS */
      src: url("../../../src/assets/fonts/abordage-regular.woff2") format("woff2");
      font-weight: normal; /* or bold, etc. */
      font-style: normal; /* or italic, etc. */
    }
  
    @font-face {
      font-family: "Basalt Fond"; /* Name you want to use in CSS */
      src: url("../../../src/assets/fonts/basalte-fond.woff2") format("woff2");
      font-weight: bold; /* or bold, etc. */
      font-style: normal; /* or italic, etc. */
    }
  
    .header {
      padding: 0px;
      margin: 0px;
      /* background-color: black; */
      /* opacity: .7; */
      width: 65%;
      margin: auto;
      margin-top: 35px;
      border-radius: 15px;
      font-size: 1.5rem;
    }
  
    .header h1 {
      font-family: "Basalt Fond";
      color: var(--gold);
      text-align: center;
      z-index: 3;
      position: relative; /* Keep text above the gradient */
      z-index: 2; /* Ensure text is above the gradient */
    }
  
    :root {
      --midnight-blue: #2c3e50;
      --crimson-red: #e74c3c;
      --gold: #f1c40f;
      --slate-gray: #7f8c8d;
      --mint-green: #1abc9c;
    }
    .tooltip {
      text-decoration: underline;
      position: relative;
      filter: none;
      cursor: pointer;
    }
  
    .tooltip.a {
      cursor: pointer;
    }
  
    .tooltip span {
      display: none;
      cursor: pointer;
    }
  
    .tooltip:hover span {
      display: block;
      position: fixed;
      overflow: hidden;
      z-index: 99;
      margin-left: 20%;
      cursor: pointer;
    }
  
    .tooltip img {
      z-index: 99;
    }
  
    .site-title {
      color: var(--gold);
      font-family: "Keania One", sans-serif;
      font-weight: 400;
      font-style: normal;
      /* margin: 30px; */
    }
  
    body {
      background-color: black;
    }
  
    /* nav */
  
    nav {
      width: 100%;
      margin: auto;
      display: inline-flex;
      flex-direction: row;
    }
  
    nav ul {
      width: 70%;
      list-style-type: none;
      padding: 0;
  
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
      font-family: "Palanquin", sans-serif;
      font-weight: 400;
      font-style: normal;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      justify-items: space-between;
    }
  
    nav ul li {
      /* display: block; */
    }
  
    nav ul li a {
      width: auto;
      display: block;
      /* padding: 20px; */
      text-decoration: none;
      color: var(--mint-green);
      font-size: 18px;
      /* background-color: #FEC9C7; */
      filter: drop-shadow(10px 5px 4px black);
    }
  
    nav ul li a:hover {
      color: #cd88cc;
    }
  
    /* tooltips */
  
    img.tooltip {
      float: right;
    }
  
    /* .blurred {
      background-image: url('imgs/backgroundfooter.jpg');
      float: left;
      height: 450px;
      box-shadow: 0 0 8px 8px #8cBBD3 inset;
      width: 100%;
      position: absolute;
      bottom: 0;
    } */
  
    .body-content {
      width: 100%;
  
      position: relative; /* For proper layering */
      margin: 0 auto;
      width: 100%; /* Full width */
      background:
        linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%),
        /* Black to transparent gradient */
          linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%),
        url("../imgs/detectives_bg.jpg") no-repeat top center; /* Your background image */
      background-size: cover; /* Ensure the image covers the area */
      height: 100vh;
    }
  
    /* Main Content */
    .main {
      /* padding: 20px; */
      margin: 30px;
      margin-top: 250px;
      background-color: black;
      opacity: 0.7;
      width: 65%;
      margin-left: auto;
      margin-right: auto;
      border-radius: 15px;
    }
  
    .main p {
      color: white;
      opacity: 1;
      font-family: "Abordage Regular";
    }
  
    /* Main Page */
    .summary {
      width: 90%;
      margin: auto;
      opacity: 1;
      padding: 20px;
    }
  
    .summary p {
      opacity: 1;
    }
  
    .quote {
      padding-left: 50px;
    }
  
    /* Awards Page */
    .rankings {
      text-align: center;
      align-content: center;
      list-style-position: inside;
      list-style-type: "⭐ ";
    }
  
    .layout {
      width: 100%;
      height: 100vh;
      display: grid;
      grid:
        "header" auto
        "main" 1fr
        "footer" auto
        / 1fr;
      gap: 8px;
    }
  
    .header {
      grid-area: header;
    }
    .main {
      grid-area: main;
    }
    .footer {
      grid-area: footer;
    }
</style>
