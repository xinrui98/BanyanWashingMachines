import React,{useState} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { Header } from '../Components/header';
import firebase from '../Config/firebase';

function AddWashingMachine(props){

    const history = useHistory();

    const [rowname,setRowname] = useState("");
    const [w1,setW1] = useState("");
    const [w2,setW2] = useState("");
    const [w3,setW3] = useState("");
    const [w4,setW4] = useState("");


// the below function will submit data into firebase
    const submit = ()=>{
        const key = firebase.database().ref('data').child(rowname+'/washer1').push().key;
        firebase.database().ref('data').child(rowname+'/washer1').set({
            key:key,
            rowname:rowname,
            name:w1,
            status:false
        

        })
        const key2 = firebase.database().ref('data').child(rowname+'/washer2').push().key;

        firebase.database().ref('data').child(rowname+'/washer2').set({
            key:key2,
            rowname:rowname,
            name:w2,
            status:false
        

        })
        const key3 = firebase.database().ref('data').child(rowname+'/washer3').push().key;

        firebase.database().ref('data').child(rowname+'/washer3').set({
            key:key3,
            rowname:rowname,
            name:w3,
            status:false
        

        })
        const key4 = firebase.database().ref('data').child(rowname+'/washer4').push().key;

        firebase.database().ref('data').child(rowname+'/washer4').set({
            key:key4,
            rowname:rowname,
            name:w4,
            status:false
        })

        
        
       

        history.push('/')
        window.location.reload();
    }
    return(
        <>

            <Header/>
            
            <br/><br/>
            <center>
            <h1>Add Washing Machines</h1>

            </center>
            <br/><br/>

            <div className="container">

                <input type="text" className="form-control" placeholder="Enter Floor Number" value={rowname} onChange={(e)=>setRowname(e.target.value)}/>
                <br/><br/>
                <input type="text" className="form-control" placeholder="Enter Name Of Washing Machine 1" value={w1} onChange={(e)=>setW1(e.target.value)}/>
                <br/>
                <input type="text" className="form-control" placeholder="Enter Name Of Washing Machine 2" value={w2} onChange={(e)=>setW2(e.target.value)}/>
                <br/>
                <input type="text" className="form-control" placeholder="Enter Name Of Washing Machine 3" value={w3} onChange={(e)=>setW3(e.target.value)}/>
                <br/>
                <input type="text" className="form-control" placeholder="Enter Name Of Dryer" value={w4} onChange={(e)=>setW4(e.target.value)}/>

                <br/><br/>

                <button className="btn btn-primary" onClick={submit}>Submit</button>
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    hasUser:state.hasUser,
    currentUser:state.currentUser
})
  
const mapDispatchToProps = (dispatch) => ({
})
  
  
export default connect(mapStateToProps,mapDispatchToProps)(AddWashingMachine);