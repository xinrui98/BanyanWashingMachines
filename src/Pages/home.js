import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { set_user } from "../Store/action";
import Header from "../Components/header";
import firebase from "../Config/firebase";

function Home(props) {
  const [data, setData] = useState([]);

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
            w3: dataVal.washer3.name,
            w3status: dataVal.washer3.status,
            w4: dataVal.washer4.name,
            w4status: dataVal.washer4.status,
          });
        });
        console.log(newUserState);
        setData(newUserState);
        setTimeout(() => {
          console.log("This function will run after 60 seconds");
          window.location.reload();
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
      window.location.reload();
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

      window.location.reload();
    } else if (status === true && washer === "w3status") {
      firebase
        .database()
        .ref("data")
        .child(key)
        .child("washer3")
        .on("value", (snapshot) => {
          const dataVal = snapshot.val();

          firebase.database().ref("data").child(key).child("washer3").set({
            key: key,

            rowname: dataVal.rowname,
            name: dataVal.name,

            status: false,
          });
        });
      window.location.reload();
    } else if (status === true && washer === "w4status") {
      firebase
        .database()
        .ref("data")
        .child(key)
        .child("washer4")
        .on("value", (snapshot) => {
          const dataVal = snapshot.val();

          firebase.database().ref("data").child(key).child("washer4").set({
            key: key,

            rowname: dataVal.rowname,
            name: dataVal.name,

            status: false,
          });
        });
      window.location.reload();
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
      window.location.reload();
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
      window.location.reload();
    } else if (status === false && washer === "w3status") {
      firebase
        .database()
        .ref("data")
        .child(key)
        .child("washer3")
        .on("value", (snapshot) => {
          const dataVal = snapshot.val();

          firebase.database().ref("data").child(key).child("washer3").set({
            key: key,
            rowname: dataVal.rowname,
            name: dataVal.name,

            status: true,
          });
        });
      window.location.reload();
    } else if (status === false && washer === "w4status") {
      firebase
        .database()
        .ref("data")
        .child(key)
        .child("washer4")
        .on("value", (snapshot) => {
          const dataVal = snapshot.val();

          firebase.database().ref("data").child(key).child("washer4").set({
            key: key,
            rowname: dataVal.rowname,
            name: dataVal.name,

            status: true,
          });
        });
      window.location.reload();
    }
  };

  return (
    <>
      <Header />

      <br />
      <br />
      <center>
        <img
          src="data:image/png;base64,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"
          alt="Not Found"
          height="200px"
          width="200px"
        />

        <br />
        <br />

        <div
          style={{ width: "90%", border: "2px solid black", padding: "10px" }}
        >
          {/* the below code will render data from firebase into table */}
          <table className="table table-responsive">
            <tbody>
              {data.map((v, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td>{"Level " + v.rowname}</td>
                      <td>{v.w1}</td>
                      <td>
                        {v.w1status === true ? (
                          <>
                            <input
                              type="checkbox"
                              onChange={() =>
                                changestatus(v.key, true, "w1status")
                              }
                              checked
                            />
                          </>
                        ) : (
                          <>
                            <input
                              type="checkbox"
                              onChange={() =>
                                changestatus(v.key, false, "w1status")
                              }
                            />
                          </>
                        )}
                      </td>
                      <td>{v.w2}</td>
                      <td>
                        {v.w2status === true ? (
                          <>
                            <input
                              type="checkbox"
                              onChange={() =>
                                changestatus(v.key, true, "w2status")
                              }
                              checked
                            />
                          </>
                        ) : (
                          <>
                            <input
                              type="checkbox"
                              onChange={() =>
                                changestatus(v.key, false, "w2status")
                              }
                            />
                          </>
                        )}
                      </td>
                      <td>{v.w3}</td>
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
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </center>
    </>
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
