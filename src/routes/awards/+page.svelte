<script>
    import Nav from '$lib/components/Nav.svelte';
  </script>

  
      <div class = "rankings">
        <h2 class="keania-one-regular">⭐ The Numerous Accolades of Watching the Detectives ⭐</h2>
      <ul > 
        <li>Ranked dead last on <a href="https://whatculture.com/film/every-cillian-murphy-movie-ranked-worst-to-best?page=18">WhatCulture's</a> 
          "Every Cillian Murphy Movie Ranked Worst To Best" ⭐</li>
        <li>Unmentioned in <a href="https://whatculture.com/film/every-cillian-murphy-movie-ranked-worst-to-best?page=18">Rotten Tomato's</a>
          "Cillian Murphy Movies and Shows Ranked" ⭐</li>
        <li>A Criminal Lack of Mention in <a href="https://ew.com/best-cillian-murphy-movies-and-tv-shows-8605519">Entertainment Weekly's</a>
            "The 15 best Cillian Murphy movies and TV shows, ranked" ⭐</li>
        <li> ❤️ <strong>#1 in Our Hearts </strong>❤️ ⭐</li>
        </ul><br/><br/>
        <div class="crying-gif">
          
        <img id = "gif" src="/imgs/cryingalltooreal.gif" alt="background"> <br/>
      </div>
      </div>




<style>

.crying-gif{
  margin: auto;
  width: 100%;
  text-align: center;
}
.rankings{
  font-family: 'Abordage Regular';
  width: 90%;
    margin: auto;
    opacity: 1;
    padding: 20px;
}
  
.rankings h2 {
  opacity: 1;
  line-height: 1.4;
  color: var(--gold);
  border-bottom: 3px double var(--gold);
}

.rankings ul, .rankings img{
  text-align: center;
  margin: auto;
}
  
  /* Awards Page */
  .rankings ul {
    color: white;
    /* text-align: center; */
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
  
  
</style>
