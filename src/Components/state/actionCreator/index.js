
export const depositMoney=(amount)=>{

    return (dispatch)=>{
        dispatch({
            type:'deposite',
            payload:amount
        })
    }

}

export const withdrawMoney=(amount)=>{

    return (dispatch)=>{
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }

}


export const addItem=(qty)=>{
    return(dispatch)=>{
    dispatch({
        type:'add',
        payload:qty
    })
}
}


export const removeItem=(qty)=>{
    return (dispatch)=>{
    dispatch({
        type:'remove',
        payload:qty
    })
}
}




