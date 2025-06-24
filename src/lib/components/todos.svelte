<script lang="ts">
	import { getTodoState } from './todoState.svelte';

	interface Props {
		key?: string;
	}

	let { key = '$_todo_state' }: Props = $props();

	const todoState = getTodoState(key);
</script>

<div class="flex gap-5">
	<div>
		<p>all</p>
		<ul>
			{#each todoState.todos as todo (todo.id)}
				<li class="flex gap-2">
					<input type="checkbox" name="done" id="done" bind:checked={todo.compelete} />
					<p>{todo.name}</p>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<p>progress</p>
		<ul>
			{#each todoState.progressTodos as todo (todo.id)}
				<li class="flex gap-2">
					<input type="checkbox" name="done" id="done" bind:checked={todo.compelete} />
					<p>{todo.name}</p>
				</li>
			{/each}
		</ul>
	</div>
	<div>
		<p>completed</p>
		<ul>
			{#each todoState.completedTodos as todo (todo.id)}
				<li class="flex gap-2">
					<input type="checkbox" name="done" id="done" bind:checked={todo.compelete} />
					<p>{todo.name}</p>
				</li>
			{/each}
		</ul>
	</div>
</div>
