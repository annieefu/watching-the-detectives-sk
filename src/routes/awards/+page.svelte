


  <script>
    import '../../styles.css';
    import Nav from '$lib/components/Nav.svelte';
  </script>

  
      <div class = "rankings">
        <h2> ⭐ The Numerous Accolades of Watching the Detectives ⭐</h2>
      <ul > 
        <li>Ranked 17/17 on <a href="https://whatculture.com/film/every-cillian-murphy-movie-ranked-worst-to-best?page=18">WhatCulture's</a> 
          "Every Cillian Murphy Movie Ranked Worst To Best" ⭐</li>
        <li>Unmentioned in <a href="https://whatculture.com/film/every-cillian-murphy-movie-ranked-worst-to-best?page=18">Rotten Tomato's</a>
          "Cillian Murphy Movies and Shows Ranked" ⭐</li>
        <li>A Criminal Lack of Mention in <a href="https://ew.com/best-cillian-murphy-movies-and-tv-shows-8605519">Entertainment Weekly's</a>
            "The 15 best Cillian Murphy movies and TV shows, ranked" ⭐</li>
        <li> ❤️ <strong>#1 in Our Hearts </strong>❤️ ⭐</li>
        </ul>
        <img id = "gif" src="../../../../src/imgs/cryingalltooreal.gif" alt="background"> <br/>
      </div>




<style>
 .gradient {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px; /* Height of the gradient */
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)); /* Black to transparent */
    z-index: 1; /* Behind other content */
  }
  
  @font-face {
    font-family: 'Abordage Regular'; /* Name you want to use in CSS */
    src: url('assets/fonts/abordage-regular.woff2') format('woff2');
    font-weight: normal; /* or bold, etc. */
    font-style: normal; /* or italic, etc. */
  }
  
  
  @font-face {
    font-family: 'Basalt Fond'; /* Name you want to use in CSS */
    src: url('assets/fonts/basalte-fond.woff2') format('woff2');
    font-weight: bold; /* or bold, etc. */
    font-style: normal; /* or italic, etc. */
  }
  
  
  .header{
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
  
  .header h1{
    font-family: 'Basalt Fond';
    color: var(--gold);
    text-align:  center;
    z-index: 3;
    position: relative; /* Keep text above the gradient */
    z-index: 2; /* Ensure text is above the gradient */
  }
  
  
  
  :root {
    --midnight-blue: #2C3E50;
    --crimson-red: #E74C3C;
    --gold: #F1C40F;
    --slate-gray: #7F8C8D;
    --mint-green: #1ABC9C;
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
   margin: 0;
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
  
  
  .body-content{
    width: 100%;
  
    position: relative; /* For proper layering */
    margin: 0 auto;
    width: 100%; /* Full width */
    background: 
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%), /* Black to transparent gradient */
    linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 100%),
    url('imgs/detectives_bg.jpg') no-repeat top center; /* Your background image */
    background-size: cover; /* Ensure the image covers the area */
    padding-bottom: 20px;
  }
  
   /* Main Content */
   .main {
    /* padding: 20px; */
    margin: 30px;
    margin-top: 250px;
    background-color: black;
    opacity: .7;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
  }
  
  .main p {
    color: white;
    opacity: 1;
    font-family: 'Abordage Regular';
  }
  
  /* Main Page */
  .summary {
    width: 90%;
    margin: auto;
    opacity: 1;
    padding: 20px;
  }
  
  .summary p{
    opacity: 1;
  }
  
  .quote {
    padding-left: 50px;
  }
  
  /* Awards Page */
  .rankings {
    font-family: 'Abordage Regular';
    color: white;
    text-align: center;
    align-content: center;
    list-style-position: inside;
    list-style-type: "⭐ ";
  }
  
  .rankings a{
  
    /* padding: 20px; */
    text-decoration: none;
    color: var(--mint-green);
    font-size: 18px;
    /* background-color: #FEC9C7; */
    filter: drop-shadow(10px 5px 4px black);
  }
  
  .rankings a:hover {
    color: #CD88CC;
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
  
  .header { grid-area: header; }
  .main { grid-area: main; }
  .footer { grid-area: footer; }
  
</style>
