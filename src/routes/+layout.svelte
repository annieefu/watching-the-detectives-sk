<script>
  import Nav from '$lib/components/Nav.svelte';
  

  import '../styles.css';
</script>

<section class="layout">
	<div class="body-content">
		<div class="header">
			<h1 class="keania-one-regular">☾ Watching the Detectives Fan Club HQ ☽</h1>
		</div>
		<div class="main">

			<slot />
    </div>
    

    <aside class="aside-nav">

      <Nav />
    </aside>
    <footer>
      
    </footer>
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
      /* background-color: black; */
      /* opacity: .7; */
      border-radius: 15px;
      font-size: 1.5rem;
    }
  
    .header h1 {
      /* font-family: "Basalt Fond"; */
      color: var(--gold);
      text-align: center;
      z-index: 3;
      position: relative; /* Keep text above the gradient */
      z-index: 2; /* Ensure text is above the gradient */
      
      text-align: center;
      transition: letter-spacing 2s, text-shadow 1s;
      margin-bottom: 0rem;
      text-shadow: 0px 0px 7px var(--lucy-purple);
    }

    .header h1:hover {
    letter-spacing: 4px;
    text-shadow: 0px 0px 5px var(--lucy-purple), 0px 0px 10px var(--lucy-purple);
  }
  
    :root {
      --midnight-blue: #2c3e50;
      --crimson-red: #e74c3c;
      --gold: #f1c40f;
      --slate-gray: #7f8c8d;
      --mint-green: #1abc9c;
    }
   
  

    .header {
      grid-area: header;
    }
    .main {
      grid-area: main;
    }
    .aside-nav{
      grid-area: aside;
    }

    .body-content {
      margin-left: 8%;
      margin-right: 8%;
  
      position: relative; /* For proper layering */
      width: 84%; /* Full width */
      
      height: 100vh;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 3fr 1fr;
      grid-template-areas:
        "header header header header"
        "main main main aside"
        "footer footer footer footer";
      gap: 8px;
    }
  
    /* Main Content */
    .main {
      /* padding: 20px; */
      margin: 30px;
      background-color: black;
      opacity: 0.7;
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
      background:
        linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%),
        /* Black to transparent gradient */
          linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%),
        url("../imgs/backgroundfooter.jpg") no-repeat top center; /* Your background image */
      background-size: cover; /* Ensure the image covers the area */
      
    }
  
</style>
