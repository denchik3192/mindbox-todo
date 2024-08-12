import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectToDos = (state: RootState) => state.todos.todos;
export const selectFilter = (state: RootState) => state.filter.filter;

export const selectFilteredToDos = createSelector(
    [selectToDos, selectFilter], (allTodos, filter) => {
        if (filter === 'all') return allTodos
        if (filter === 'active') return allTodos.filter(item => !item.checked)
        if (filter === 'completed') return allTodos.filter(item => item.checked)
    }
)
