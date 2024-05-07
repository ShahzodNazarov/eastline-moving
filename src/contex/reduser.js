
export default function reducer(state,action) {
    switch (action.type) {
        case "increment":
               state.count++
            break;
    }
    return{...state}
}