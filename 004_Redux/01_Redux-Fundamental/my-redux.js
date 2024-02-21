export function myCreateStore(reducer){
    let state
    const listeners = []
    const store = {
        getState(){
            return state
        },
        dispatch(action){
            state = reducer(state, action)
            listeners.forEach((Listener) => {
                Listener()
            })
        },
        subscribe(Listener){
            listeners.push(Listener)
            return function (){
                const listenerIndex = listeners.findIndex(
                    (regesterdListener) => regesterdListener === Listener
                )
                listeners.splice(listenerIndex, 1)
            }
        }
    }
    store.dispatch({type: '@@INIT'})
    return store
}