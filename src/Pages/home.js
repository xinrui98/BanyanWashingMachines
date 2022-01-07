import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { set_user } from "../Store/action";
import Header from "../Components/header";
import firebase from "../Config/firebase";
// import Background from "../Assets/Background.png"
import LoadingModal from "../Components/LoadingModal"
import classes from "./home.module.css"

function Home(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); 

  // The below code will take data from firebase

  useEffect(() => {
    firebase
      .database()
      .ref("data")
      .on("value", (snapshot) => {
        let newUserState = [];
        snapshot.forEach((data) => {
          const dataVal = data.val();

          newUserState.push({
            key: data.key,
            rowname: dataVal.washer1.rowname,
            w1: dataVal.washer1.name,
            w1status: dataVal.washer1.status,
            w2: dataVal.washer2.name,
            w2status: dataVal.washer2.status,
            // w3: dataVal.washer3.name,
            // w3status: dataVal.washer3.status,
            // w4: dataVal.washer4.name,
            // w4status: dataVal.washer4.status,
          });
        });
        console.log(newUserState);
        setData(newUserState);
        setTimeout(() => {
          console.log("This function will run after 60 seconds");
          setLoading(true);
          window.location.reload();
          // setLoading(false);
        }, 60000);
      });
  }, []);

  // the below function will make changes to status based on checkbox change

  const changestatus = (key, status, washer) => {
    if (status === true && washer === "w1status") {
      firebase
        .database()
        .ref("data")
        .child(key)
        .child("washer1")
        .on("value", (snapshot) => {
          const dataVal = snapshot.val();

          firebase.database().ref("data").child(key).child("washer1").set({
            key: key,
            rowname: dataVal.rowname,
            name: dataVal.name,

            status: false,
          });
        });
        setLoading(true);
        window.location.reload();
        // setLoading(false);
    } else if (status === true && washer === "w2status") {
      firebase
        .database()
        .ref("data")
        .child(key)
        .child("washer2")
        .on("value", (snapshot) => {
          const dataVal = snapshot.val();

          firebase.database().ref("data").child(key).child("washer2").set({
            key: key,

            rowname: dataVal.rowname,
            name: dataVal.name,

            status: false,
          });
        });
        setLoading(true);
        window.location.reload();
        // setLoading(false);
    // } else if (status === true && washer === "w3status") {
    //   firebase
    //     .database()
    //     .ref("data")
    //     .child(key)
    //     .child("washer3")
    //     .on("value", (snapshot) => {
    //       const dataVal = snapshot.val();

    //       firebase.database().ref("data").child(key).child("washer3").set({
    //         key: key,

    //         rowname: dataVal.rowname,
    //         name: dataVal.name,

    //         status: false,
    //       });
    //     });
    //   window.location.reload();
    // } else if (status === true && washer === "w4status") {
    //   firebase
    //     .database()
    //     .ref("data")
    //     .child(key)
    //     .child("washer4")
    //     .on("value", (snapshot) => {
    //       const dataVal = snapshot.val();

    //       firebase.database().ref("data").child(key).child("washer4").set({
    //         key: key,

    //         rowname: dataVal.rowname,
    //         name: dataVal.name,

    //         status: false,
    //       });
    //     });
    //   window.location.reload();
    } else if (status === false && washer === "w1status") {
      firebase
        .database()
        .ref("data")
        .child(key)
        .child("washer1")
        .on("value", (snapshot) => {
          const dataVal = snapshot.val();

          firebase.database().ref("data").child(key).child("washer1").set({
            key: key,

            rowname: dataVal.rowname,
            name: dataVal.name,

            status: true,
          });
        });
      setLoading(true);
      window.location.reload();
      // setLoading(false);
    } else if (status === false && washer === "w2status") {
      firebase
        .database()
        .ref("data")
        .child(key)
        .child("washer2")
        .on("value", (snapshot) => {
          const dataVal = snapshot.val();

          firebase.database().ref("data").child(key).child("washer2").set({
            key: key,

            rowname: dataVal.rowname,
            name: dataVal.name,

            status: true,
          });
        });
      setLoading(true);
      window.location.reload();
      // setLoading(false);
      }
    // } else if (status === false && washer === "w3status") {
    //   firebase
    //     .database()
    //     .ref("data")
    //     .child(key)
    //     .child("washer3")
    //     .on("value", (snapshot) => {
    //       const dataVal = snapshot.val();

    //       firebase.database().ref("data").child(key).child("washer3").set({
    //         key: key,
    //         rowname: dataVal.rowname,
    //         name: dataVal.name,

    //         status: true,
    //       });
    //     });
    //   window.location.reload();
    // } else if (status === false && washer === "w4status") {
    //   firebase
    //     .database()
    //     .ref("data")
    //     .child(key)
    //     .child("washer4")
    //     .on("value", (snapshot) => {
    //       const dataVal = snapshot.val();

    //       firebase.database().ref("data").child(key).child("washer4").set({
    //         key: key,
    //         rowname: dataVal.rowname,
    //         name: dataVal.name,

    //         status: true,
    //       });
    //     });
    //   window.location.reload();
    // }
  };

  return (
    <div className={classes.background}> 
      {/* style={{background: "rgba(255, 231, 175, 0.29)"}} */}
      {/* style={{backgroundImage:`url(${Background})`}} */}
      <Header />
      <LoadingModal isLoading={loading} />

      <br />
      <br />
      <br />
      <br />

      <center className={classes.table}>
        <div
          style={{ width: "90%", border: "2px solid black", padding: "10px" }} 
        >
          {/* the below code will render data from firebase into table */}
          <table className="table table-responsive">
            <tbody>
              <td className={classes.labelX}></td>
              <td className={classes.label}>Block A</td>
              <td className={classes.label}>Block B</td>
              {data.map((v, i) => {
                return (
                  <>
                    <tr classname={classes.row} key={i}>
                      {/* <button> */}
                      <td className={classes.level} >{"Level " + v.rowname}</td>
                      {/* <td>{v.w1}</td> */}
                      <td>
                        {v.w1status === true ? (
                          <>
                            <button className={classes.btnUSE} onClick={() =>changestatus(v.key, true, "w1status")}>
                              IN USE
                            </button>
                            {/* <input
                              type="checkbox"
                              onChange={() =>
                                changestatus(v.key, true, "w1status")
                              }
                              checked
                            /> */}
                          </>
                        ) : (
                          <>
                            <button className={classes.btnFREE} onClick={() =>changestatus(v.key, false, "w1status")}>
                              FREE
                            </button>
                            {/* <input
                              type="checkbox"
                              onChange={() =>
                                changestatus(v.key, false, "w1status")
                              }
                            /> */}
                          </>
                        )}
                      </td>
                      {/* <td>{v.w2}</td> */}
                      <td>
                        {v.w2status === true ? (
                          <>
                            <button className={classes.btnUSE} onClick={() =>changestatus(v.key, true, "w2status")}>
                              IN USE
                            </button>
                            {/* <input
                              type="checkbox"
                              onChange={() =>
                                changestatus(v.key, true, "w2status")
                              }
                              checked
                            /> */}
                          </>
                        ) : (
                          <>
                            <button className={classes.btnFREE} onClick={() =>changestatus(v.key, false, "w2status")}>
                              FREE
                            </button>
                            {/* <input
                              type="checkbox"
                              onChange={() =>
                                changestatus(v.key, false, "w2status")
                              }
                            /> */}
                          </>
                        )}
                      </td>
                      {/* </button> */}
                      {/* <td>{v.w3}</td>
                      <td>
                        {v.w3status === true ? (
                          <>
                            <input
                              type="checkbox"
                              onChange={() =>
                                changestatus(v.key, true, "w3status")
                              }
                              checked
                            />
                          </>
                        ) : (
                          <>
                            <input
                              type="checkbox"
                              onChange={() =>
                                changestatus(v.key, false, "w3status")
                              }
                            />
                          </>
                        )}
                      </td>
                      <td>{v.w4}</td>
                      <td>
                        {v.w4status === true ? (
                          <>
                            <input
                              type="checkbox"
                              onChange={() =>
                                changestatus(v.key, true, "w4status")
                              }
                              checked
                            />
                          </>
                        ) : (
                          <>
                            <input
                              type="checkbox"
                              onChange={() =>
                                changestatus(v.key, false, "w4status")
                              }
                            />
                          </>
                        )}
                      </td> */}
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
}

const mapStateToProps = (state) => ({
  hasUser: state.hasUser,
  currentUsername: state.currentUsername,
});

const mapDispatchToProps = (dispatch) => ({
  set_user: (name, email, photoURL, uid) =>
    dispatch(set_user(name, email, photoURL, uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
