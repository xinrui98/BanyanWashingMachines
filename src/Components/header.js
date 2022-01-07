import React from 'react'
import { connect } from 'react-redux'
import { Link , useHistory } from 'react-router-dom'
import classes from "./header.module.css"
import BuildingsCropped from "../Assets/BuildingsCropped.png"

export const Header = (props) => {

    const history = useHistory()

    const gotohome = ()=>{

        history.push('/')

    }
    return (
        <div style={{backgroundImage:`url(${BuildingsCropped})`,height:"175px",width:"100%"}}>
            <br/>
            <div style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                <h1 className={classes.banyan} onClick={gotohome}>Banyan <br/>Dryer Availabilty</h1>
                {/* <Link to='addwashingmachine' className="btn btn-primary">Add Washing Machines</Link> */}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
