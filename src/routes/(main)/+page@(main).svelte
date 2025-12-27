<script lang="ts">
	import TodoAdd from '$lib/components/todoAdd.svelte';
	import TodoInpute from '$lib/components/todoInpute.svelte';
	import Todos from '$lib/components/todos.svelte';
	import { setTodotate } from '$lib/components/todoState.svelte';
	import { m } from '../../paraglide/messages';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	setTodotate();
	setTodotate('$_todo_state_2');
</script>

<p>main page route random {Math.random()}</p>
<p>main page route random data {data.random}</p>
<p>main page date {new Date()}</p>
<p>{m.greeting()}</p>

<!-- <TodoInpute />
<TodoAdd />
<Todos />

<TodoInpute key="$_todo_state_2" />
<TodoAdd key="$_todo_state_2" />
<Todos key="$_todo_state_2" /> -->
