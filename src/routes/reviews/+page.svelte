<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	/**
	 * @type {d3.DSVRowArray<string>}
	 */
	let data;
	onMount(async () => {
		data = await d3.csv('/data.csv');
	});
	$: console.log(data);

	// function validateForm() {
	//     console.log("hello");
	//     let x = document.forms["reviewForm"]["rating"].value
	//     console.log(x);
	//     if(x != '5') {
	//         alert("You can't rate such an amazing movie less than 5 stars :)")
	//     }
	// }
	let email = "";
  let message = "";
  let name= "";
  let rating = 0;
  let submitting = false;
  let status = "";

  function setRating(value) {
    rating = value;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    status = "";

    if (rating < 5) {
      status = "Error! You can't rate such an amazing movie less than 5 stars :)";
      return;
    }

    submitting = true;

    const data = {
      email,
      message,
      rating
    };

    try {
      const response = await fetch("https://formspree.io/f/xovdjrga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        status = "Thanks for your submission!";
        email = "";
        message = "";
        rating = 0;
      } else {
        const result = await response.json();
        status = result?.errors?.map(e => e.message).join(", ") || "Oops! Something went wrong.";
      }
    } catch (err) {
      status = "Oops! There was a problem submitting your form.";
    } finally {
      submitting = false;
    }
  }
</script>

<div class="reviews">
	<h2 class="keania-one-regular">Reviews!</h2>

	<div class="review-elements">
		<p>
			No fan page is complete without hearing from the members themselves. Because this is the best movie of all time,
			there are infinite voices to hear from testifying to its greatness.  Read them all here, or <a href="#submit-review">submit your own review
			at the bottom of this page.</a>
		</p>
		<br />

<br/>
	</div>
	<div class="masonry-with-columns">
		{#if data}
			{#each data as review}
				<div class="review">
					⭐⭐⭐⭐⭐<br />
					<p>{review.Message}</p>
					<span class="review-name">— {review.Name}</span>
				</div>
			{/each}
		{/if}
	</div>

	<br/>
			
	<h2 class="keania-one-regular">Submit a review or a message for Dana</h2>
<form id="submit-review" on:submit={handleSubmit}>
	<label>
	  Rating:
	  <div class="stars">
		{#each [1, 2, 3, 4, 5] as num}
		  <span
			class="star {num <= rating ? 'selected' : ''}"
			on:click={() => setRating(num)}
		  >★</span>
		{/each}
	  </div>
	</label>
	<br/>
	<label>
		Your name:<br/>
		<input type="text" bind:value={name} />
	  </label><br/><br/>
  
	<label>
	  Email:<br/>
	  <input type="email" bind:value={email} required />
	</label><br/><br/>
  
	<label>
	  Message:
	  <br/>

	  <textarea class="message" bind:value={message} required></textarea>

	</label><br/>
  <br/>
	<button type="submit" disabled={submitting}>
	  {submitting ? "Sending..." : "Submit"}
	</button>
  
	{#if status}
	  <p>{status}</p>
	{/if}
  </form>
</div>

<style>
	button{
		
    /* display: block; */
    margin-bottom: 1px;
    background-color: var(--bg);
    /* opacity: 0.7; */
    border-radius: 30px;
    border: solid 1px var(--mint-green);
	font-family: "Palanquin";
	font-size: 1rem;
    padding: 4px 16px;
    width: auto;
    text-shadow: 0px 0px 2px var(--gold);
    box-shadow: 0px 0px 1px var(--mint-green), 0px 0px 1px var(--mint-green) inset;
    text-align: center;
	color: var(--gold);
	}
	.masonry-with-columns {
		columns: 3;
		column-gap: 1rem;
	}
	.review-elements {
		margin: auto;
	}

	.review-name {
		text-align: right;
		margin-left: auto;
	}

	.review {
		display: inline-flex;
		flex-direction: column;
		margin: 15px 0px;
		border: gray solid 1px;
		border-radius: 15px;
		padding: 12px;

		/* display: ; */
	}

	#submit-review p{
		color: var(--gold);
	}

	.reviews {
		height: auto;

		width: 90%;
		margin: auto;
		opacity: 1;
		padding: 20px;
		color: white;
		opacity: 1;
		font-family: 'Abordage Regular';
	}
	a{
		
    /* padding: 20px; */
    text-decoration: none;
    color: var(--mint-green);
    font-size: 18px;
    /* background-color: #FEC9C7; */
    filter: drop-shadow(10px 5px 4px black);
	}

	/* Review stuff */

	.rate {
		border-bottom-right-radius: 12px;
		border-bottom-left-radius: 12px;
	}

	.rating {
		display: inline-flex;
		flex-direction: row-reverse;
		justify-content: center;
		vertical-align: middle;
	}

	.rating > input {
		display: none;
	}

	.rating > label {
		position: relative;
		width: 1em;
		font-size: 30px;
		font-weight: 300;
		color: #ffd600;
		cursor: pointer;
	}

	.rating > label::before {
		content: '\2605';
		position: absolute;
		opacity: 0;
	}

	.rating > label:hover:before,
	.rating > label:hover ~ label:before {
		opacity: 1 !important;
	}

	.rating > input:checked ~ label:before {
		opacity: 1;
	}

	.rating:hover > input:checked ~ label:before {
		opacity: 0.4;
	}

	.buttons {
		top: 36px;
		position: relative;
	}
	.message{
		height:100px;
		width: 300px;
		resize: vertical;
  	overflow-y: auto;
	vertical-align: top;
	box-sizing: border-box;
	white-space: pre-wrap;
	}

	.rating-submit {
		border-radius: 8px;
		color: #fff;
		height: auto;
	}

	.rating-submit:hover {
		color: #fff;
	}

	form{
		margin: auto;
	}
	form label{
		width: 100%;
		
	}

	form strong {
		font-family: 'Abordage Regular';
		color: white;
		text-align: center;
	}

	.heading {
		font-family: 'Abordage Regular';
		color: white;
		text-align: center;
	}

	.form-group {
		text-align: center;
	}

	.name-box {
		vertical-align: middle;
		width: 100px;
		height: 20px;
		margin: auto;
	}

	.status-box {
		width: 100%;
		height: 140px;
		margin: auto;
		margin-bottom: 15px;
	}

	.button-group {
		/* margin: 30px; */
		height: auto;
		text-align: right;
	}

	.counter {
		display: inline;
		margin-right: 10px;
	}

	.posts {
		clear: both;
		list-style: none;
		padding-left: 0;
		width: 100%;
		text-align: left;
	}

	.posts li {
		background-color: #fff;
		border: 1.5px solid #d8d8d8;
		border-radius: 10px;
		padding-top: 10px;
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 10px;
		margin-bottom: 10px;
		word-wrap: break-word;
		min-height: 42px;
		/* box-shadow:8px 8px 5px ; */
	}

	.btn-primary {
		color: #fff;
		font-family: 'Abordage Regular';
		text-decoration: none;
		background-color: #1abc9c;
		padding: 8px;
		border-radius: 10px;
	}

	.gradient {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 50px;
		/* Height of the gradient */
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
		/* Black to transparent */
		z-index: 1;
		/* Behind other content */
	}
	.stars {
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;
  }
  .star {
    color: lightgray;
  }
  .selected {
    color: gold;
  }
	@media (max-width: 900px) {
	.masonry-with-columns {
		columns: 2;
	}
}

@media (max-width: 600px) {
	.masonry-with-columns {
		columns: 1;
	}
}
</style>
