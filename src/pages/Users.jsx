
import React, { useEffect, useState } from 'react'

import TableUser from './TableUser'

import { Card, Grid } from '@mui/material';
export default function FormCRUD_1() {

  const [users, setUser] = useState([])
  const isStatus = false;
  // const [userID, setUserID] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [roleID, setRoleID] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [fullname, setfullname] = useState("");
  const [resultID, setResultID] = useState("");
  const [status, setStatus] = useState("");
  // const[testID,setTestID]=useState("");
  const [email, setEmail] = useState("");
  // const [token, setToken] = useState("");
  const [userID, setID] = useState('null')
  const [isUpdate, setIsUpDate] = useState(false)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("http://localhost:3001/user", {
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json; charset=utf-8 ',


      },
    }).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setUserName(resp[0].userName)
        setPassword(resp[0].password)
        setEmail(resp[0].email)
        setRoleID(resp[0].roleID)
        setPhoneNumber(resp[0].phoneNumber)
        setAddress(resp[0].address)
        setfullname(resp[0].fullname)
        setResultID(resp[0].resultID)
        setStatus(resp[0].status)
        // setToken(resp[0].token)
        setID(resp[0].userID)
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
        <TableUser users={users} selectUser={selectUser} openForm={openForm} />
      </div>

      {isUpdate &&
        (
          <div>

            <Grid style={{ marginTop: "95px",  }} container spacing={1}>
              <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto", float: 'left' }}>
                <button onClick={closeForm}>close form</button>
                <br/>
             
                <Grid xs={12} sm={8}  item >
                 <a>user:</a>
                <input  type="text" placeholder='UserName' style={{border: '1px solid #e6e3e3'}} value={userName} onChange={(e) => { setUserName(e.target.value) }} /> <br /><br />
                  
                </Grid>
                <a>email</a>
                <Grid xs={12} sm={8} item>
                  
                  <input type="text" placeholder='email' style={{border: '1px solid #e6e3e3'}} value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br /><br />
                </Grid>
                <a>password</a>
                <Grid xs={12} sm={8}  item>
                  
                  <input type="text" placeholder='password' style={{border: '1px solid #e6e3e3'}} value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br /><br />
                </Grid>
                <a>roleID</a>
                <Grid xs={12} sm={8} s item>
                  
                  <input type="text" placeholder='roleID' style={{border: '1px solid #e6e3e3'}} value={roleID} onChange={(e) => { setRoleID(e.target.value) }} /> <br /><br />
                </Grid>
                <a>phoneNumber</a>
                <Grid xs={12} sm={8}  item>
                 
                  <input type="text" placeholder='phoneNumber' style={{border: '1px solid #e6e3e3'}} value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} /> <br /><br />
                </Grid>
                <a>address</a>
                <Grid xs={12} sm={8}  item>

                  
                  <input type="text" placeholder='address' style={{border: '1px solid #e6e3e3'}} value={address} onChange={(e) => { setAddress(e.target.value) }} /> <br /><br />
                </Grid>
                <a>fullname</a>
                <Grid xs={12} sm={8}  item>
                  
                  <input type="text" placeholder='fullname' style={{border: '1px solid #e6e3e3'}} value={fullname} onChange={(e) => { setfullname(e.target.value) }} /> <br /><br />
                </Grid>
                <Grid xs={12} sm={8} item>
                  <a>resultID</a>
                  <input type="text" placeholder='resultID' style={{border: '1px solid #e6e3e3'}} value={resultID} onChange={(e) => { setResultID(e.target.value) }} /> <br /><br />
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

