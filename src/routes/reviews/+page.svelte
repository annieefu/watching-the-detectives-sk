<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
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
</script>

<div class="reviews">
	<h2 class="keania-one-regular">Reviews!</h2>

	<div class="review-elements">
		<p>
			No fan page is complete without hearing from the members themselves. Here, you can read the
			wise words of others or submit your own. Or, you can drop a message to Dana.
		</p>
		<br /><br />
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
</div>

<style>
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

	.rating-submit {
		border-radius: 8px;
		color: #fff;
		height: auto;
	}

	.rating-submit:hover {
		color: #fff;
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
