export const state = () => ({
    user: []
})


export const mutation = {
    setUser(state, user){
        state.user = user
    }
}