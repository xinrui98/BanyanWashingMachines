const set_user = (name,email,photoURL,uid)=>{
    return (dispatch) =>{
        dispatch({
            type:"SetUser",
            currentUsername:name,
            currentUseremail:email,
            photoURL:photoURL,
            uid:uid,
            hasUser:true
        })
    }
}

const signout = ()=>{
    return (dispatch) =>{
        dispatch({
            type:"SignOut",
            currentUsername:null,
            currentUseremail:null,
            photoURL:null,
            uid:null,
            hasUser:false
        })
    }
}



export {
    set_user,
    signout
}