const initialState = [
    {
        id: 1,
        todo: 'Quehaceres de una ama de casa',
        done: false,
    },
];

const todoReducer = (state = initialState, action = {}) => {
    if (action.type === '[TODO] add todo') {
        return [...state, action.payload];
    }
    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Barrer toda la casa, incluyendo la parte de afuera',
    done: false,
};

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
