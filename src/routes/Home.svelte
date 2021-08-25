<script>
	import Generator from "../components/Generator.svelte";
</script>

<main>
	<div class="hero is-fullheight-with-navbar is-primary">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline">
					<div class="column is-full has-text-centered">
						<div class="section">
							<img src="./qubits_logo.svg" alt="Title" />
						</div>
					</div>
					<div class="column is-full">
						<Generator />
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
</style>
