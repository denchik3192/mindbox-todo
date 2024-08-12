import { IToDoItem } from '../../interfaces/IToDoItem';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
    todos: IToDoItem[],
    status: 'loading' | 'sucsess' | 'rejected';
}

const initialState: IInitialState = {
    todos: [{
        id: 1,
        title: 'Refactor tasks',
        checked: false,
    },
    {
        id: 2,
        title: 'Fix bugs ',
        checked: true,
    },
    {
        id: 3,
        title: 'Cover tests',
        checked: false,
    },
    {
        id: 4,
        title: 'Code review ',
        checked: false,
    }],
    status: 'loading',
};

export const toDoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<IToDoItem>) {
            const newId = Math.random();
            state.todos.push({
                id: newId,
                title: String(action.payload),
                checked: false
            });
        },
        deleteTodo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter((el) => el.id !== action.payload);
        },
        clearCompleted(state) {
            const newNotes = state.todos.filter((item) => {
                return item.checked === false
            });
            state.todos = newNotes;
        },
        changeToDoStatus(state, action: PayloadAction<number>) {
            const newToDos = [...state.todos].filter(item => {
                if (item.id === action.payload) {
                    item.checked = !item.checked
                }
                return item;
            })
            state.todos = newToDos;

        },
    },
});

export default toDoSlice.reducer;
export const { addTodo, deleteTodo, clearCompleted, changeToDoStatus } = toDoSlice.actions;
