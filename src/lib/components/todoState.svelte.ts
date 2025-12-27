import { getContext, setContext } from 'svelte';

type Todo = {
	name: string;
	compelete: boolean;
	id: string;
};

interface ITodoState {
	todos: Todo[];
	newTodo: string;
	completedTodos: Todo[];
	progressTodos: Todo[];
	handleNewTodo: () => void;
}

class TodoState implements ITodoState {
	newTodo: string = $state('');

	todos: Todo[] = $state([]);
	
	handleNewTodo = () => {
		this.todos.push({
			name: this.newTodo,
			compelete: false,
			id: crypto.randomUUID()
		});
		this.newTodo = '';
	};

	completedTodos = $derived.by(() => {
		return this.todos.filter((todo) => todo.compelete);
	});

	progressTodos = $derived.by(() => {
		return this.todos.filter((todo) => !todo.compelete);
	});
}
export const todoState = new TodoState();

const DEFAULT_KEY = '$_todo_state';

export const getTodoState = (key = DEFAULT_KEY) => {
	return getContext<ITodoState>(key);
};

export const setTodotate = (key = DEFAULT_KEY) => {
	const todoState = new TodoState();
	return setContext(key, todoState);
};
