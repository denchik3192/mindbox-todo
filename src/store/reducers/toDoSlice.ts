import { IToDoItem } from '../../interfaces/IToDoItem';
import { createSlice } from '@reduxjs/toolkit';
import { IToDoItem } from '../../interfaces/IToDoItem';

interface IInitialState {
    todos: IToDoItem[],
    status: 'loading' | 'sucsess' | 'rejected';
}

const initialState: IInitialState = {
    todos: [{
        id: 1,
        title: 'works',
        checked: true,
    },
    {
        id: 2,
        title: 'send mail',
        checked: false,
    },
    {
        id: 3,
        title: 'lool',
        checked: false,
    }],
    status: 'loading',
};

export const toDoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            const newId = Math.random();
            state.todos.push({
                id: newId,
                title: action.payload,
                checked: false
            });
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter((el) => el.id !== action.payload);
        },
        editToDo(state, action) {
            const newNotes = state.todos.filter((item) => {
                return item.id === action.payload.id ? (item.note = action.payload.editValue) : item;
            });
            state.todos = newNotes;
        },
        clearCompleted(state) {
            const newNotes = state.todos.filter((item) => {
                return item.checked === false
            });
            state.todos = newNotes;
        },
        changeToDoStatus(state, action) {
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
export const { addTodo, deleteTodo, editToDo, clearCompleted, changeToDoStatus } = toDoSlice.actions;
