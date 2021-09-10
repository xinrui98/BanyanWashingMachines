import React from 'react'
import { connect } from 'react-redux'
import { Link , useHistory } from 'react-router-dom'

export const Header = (props) => {

    const history = useHistory()

    const gotohome = ()=>{

        history.push('/')

    }
    return (
        <div style={{backgroundColor:"black",height:"100px",width:"100%"}}>
            <br/>
            <div style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                <h1 style={{color:"white",cursor:"pointer"}} onClick={gotohome}>Banyan Hall Washing Machines</h1>
                <Link to='addwashingmachine' className="btn btn-primary">Add Washing Machines</Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
