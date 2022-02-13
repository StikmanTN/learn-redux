export const increment = (nrpls) => {
    return {
        type: "INCREMENT",
        payload : nrpls
    }
}
export const decrement = (nrmin) => {
    return {
        type: "DECREMENT",
        payload : nrmin
    }
}