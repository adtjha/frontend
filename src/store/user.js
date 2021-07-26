const initialState = {
    color: 'red',
    id: '3b94f841-6825-41dd-9f74-355e682dd26e',
    name: 'aditya',
    chance: true,
}

export function usersReducer(state = initialState, action) {
    switch (action) {
        default:
            return state
    }
}

// selectors
export const getColor = (state) => state.user.color
export const getChance = (state) => state.user.chance
