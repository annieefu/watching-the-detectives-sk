
<nav>
    <ul>
      <li><a href="/">🔎 home</a></li>
      <li><a href="/about">🌃 about this project</a></li>
      <li><a href="/awards">🏆 awards/honors</a></li>
      <li><a href="/reviews">⭐ leave a review</a></li>
    </ul>
  </nav>


  <style>

    
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

     /* nav */
  
  
  nav {
    /* width: 100%; */
    margin: auto;
    display: inline-flex;
    flex-direction: column;
    width: 100%;
  }
  
  nav ul {
    width: 70%;
    list-style-type: none;
  
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    font-family: "Palanquin", sans-serif;
    font-weight: 400;
    font-style: normal;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-items: space-between;
  }
  
  nav ul li {
    /* display: block; */
    margin-bottom: 15px;
    background-color: var(--bg);
    opacity: 0.7;
    border-radius: 30px;
    border: solid 1px var(--mint-green);
    padding:4px;
    width: auto;
    
    text-shadow: 0px 0px 2px var(--gold);
    box-shadow: 0px 0px 1px var(--mint-green), 0px 0px 1px var(--mint-green) inset;
    text-align:center;
  }

  nav ul li:hover {
    
    text-shadow: 0px 0px 4px var(--gold);
    box-shadow: 0px 0px 5px var(--mint-green), 0px 0px 5px var(--mint-green) inset;
  }
  
  nav ul li a {
    width: auto;
    display: block;
    /* padding: 20px; */
    text-decoration: none;
    color: var(--gold);
    font-size: 18px;
    /* background-color: #FEC9C7; */
    filter: drop-shadow(10px 5px 4px black);
  }
  
  nav ul li a:hover {
    color: var(--gold);
  }
  
  </style>