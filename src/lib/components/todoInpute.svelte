<script lang="ts">
	import { getTodoState } from './todoState.svelte';

	interface Props {
		key?: string;
	}

	let { key = '$_todo_state' }: Props = $props();

	const todoState = getTodoState(key);
</script>

<input type="input" class="border" placeholder="Todo..." bind:value={todoState.newTodo} />
