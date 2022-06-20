
import React, { useEffect, useState } from 'react'

import TableTest from './TableTest'

import { Card, Grid } from '@mui/material';
export default function FormCRUD_2() {
  const [users, setUser] = useState([])
  const isStatus = false;
  const [testID, setID] = useState('null')
  const [question, setQuestion] = useState("");
  const [ans1, setAns1] = useState("");
  const [ans2, SetAns2] = useState("");
  const [testType, setTestType] = useState("");
  const [status, setStatus] = useState("");
  const [isUpdate, setIsUpDate] = useState(false)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("http://localhost:3001/test", {
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json; charset=utf-8 ',

      },
    }).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setQuestion(resp[0].question)
        setAns1(resp[0].ans1)
        SetAns2(resp[0].ans2)
        setTestType(resp[0].testType)
        setStatus(resp[0].status)
        // setToken(resp[0].token)
        setID(resp[0].userID)
        console.log(users)
      })
    })

  }
  function selectUser(userID) {
    let item = users[userID - 1];
    setUserName(item.userName);
    setPassword(item.password);
    setEmail(item.email);
    setRoleID(item.roleID);
    setPhoneNumber(item.phoneNumber);
    setAddress(item.address);
    setfullname(item.fullname);
    setStatus(item.status);
    // setToken(item.token);
    // setTestID(item.testID);
    setID(item.userID)
  }
  function UpdateStatus() {
    const data = !Boolean(status);
    status = (data.toString());
  }
  function updateUser() {
    let item = { userID, userName, password, email, roleID, phoneNumber, address, fullname, resultID, status}
    // console.warn("item",item)
    fetch(`http://localhost:3001/user/${userID}`, {
      method: 'PUT',
      headers: {
        'Accept': 'accept: */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item)
    }).then((result) => {
      // console.log(result);
      getUsers();
    });
  }
  //popup

  const openForm = () => {
    setIsUpDate(true)
  }
  const closeForm = () => {
    setIsUpDate(false)


  }

  return (
    <div>

      <div>

        <h1>load User Form </h1>
        <TableTest users={users} selectUser={selectUser} openForm={openForm} />
      </div>

      {isUpdate &&
        (
          <div>

            <Grid style={{ marginTop: "95px" }} container spacing={1}>
              <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto", float: 'left' }}>
                <button onClick={closeForm}>close form</button>
                <Grid xs={12} item>
                  <a>userName</a>
                  <input type="text" placeholder='UserName' value={userName} onChange={(e) => { setUserName(e.target.value) }} /> <br /><br />
                </Grid>
                <Grid xs={12} sm={8} item>
                  <a>email</a>
                  <input type="text" placeholder='email' value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br /><br />
                </Grid>
                <Grid xs={12} sm={8} item>
                  <a>password</a>
                  <input type="text" placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br /><br />
                </Grid>
                <Grid xs={12} sm={8} item>
                  <a>roleID</a>
                  <input type="text" placeholder='roleID' value={roleID} onChange={(e) => { setRoleID(e.target.value) }} /> <br /><br />
                </Grid>
                <Grid xs={12} sm={8} item>
                  <a>phoneNumber</a>
                  <input type="text" placeholder='phoneNumber' value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} /> <br /><br />
                </Grid>
                <Grid xs={12} sm={8} item>

                  <a>address</a>
                  <input type="text" placeholder='address' value={address} onChange={(e) => { setAddress(e.target.value) }} /> <br /><br />
                </Grid>
                <Grid xs={12} sm={8} item>
                  <a>fullname</a>
                  <input type="text" placeholder='fullname' value={fullname} onChange={(e) => { setfullname(e.target.value) }} /> <br /><br />
                </Grid>
                <Grid xs={12} sm={8} item>
                  <a>resultID</a>
                  <input type="text" placeholder='resultID' value={resultID} onChange={(e) => { setResultID(e.target.value) }} /> <br /><br />
                </Grid>
              
                <a>status</a>
                <input
                  placeholder='status'
                  type="checkbox"
                  checked={status}
                  onChange={(e) => setStatus(e.target.checked)}
                />
                <br></br>
                <button onClick={updateUser} >Update User</button>

              </Card>
            </Grid>


          </div>


        )}





    </div>
  )

}

