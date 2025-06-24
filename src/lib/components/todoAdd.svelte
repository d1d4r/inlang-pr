<script lang="ts">
	import { getTodoState } from './todoState.svelte';

	interface Props {
		key?: string;
	}

	let { key = '$_todo_state' }: Props = $props();

	const todoState = getTodoState(key);
</script>

<button onclick={todoState.handleNewTodo} type="submit" class="bg-black px-2 text-white">Add</button
>
