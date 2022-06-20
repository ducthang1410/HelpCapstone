
import React, { useEffect, useState } from 'react'

import TableTest from './TableTest'

import { Card, Grid, TextField} from '@mui/material';
import Button from '@mui/material/Button';
export default function FormCRUD_2() {
  const [tests, setTest] = useState([])
  const isStatus = false;
  const [testID, setID] = useState('null')
  const [question, setQuestion] = useState("");
  const [ans1, setAns1] = useState("");
  const [ans2, SetAns2] = useState("");
  const [testType, setTestType] = useState("");
  const [status, setStatus] = useState("");
  const [isUpdate, setIsUpDate] = useState(false)

  useEffect(() => {
    getTests();
  }, [])
  function getTests() {
    fetch("http://localhost:3001/test", {
      headers: {
        'Accept': 'text/plain',
        'Content-Type': 'application/json; charset=utf-8 ',

      },
    }).then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setTest(resp)
        setQuestion(resp[0].question)
        setAns1(resp[0].ans1)
        SetAns2(resp[0].ans2)
        setTestType(resp[0].testType)
        setStatus(resp[0].status)
        // setToken(resp[0].token)
        setID(resp[0].testID)
        console.log(test)
      })
    })

  }
  function selectTest(testID) {
    let item = tests[testID - 1];
    setQuestion(item.question);
    setAns1(item.ans1);
    SetAns2(item.ans2);
    setTestType(item.testType);
    setStatus(item.status);
    // setToken(item.token);
    // setTestID(item.testID);
    setID(item.testID)
  }
  function UpdateStatus() {
    const data = !Boolean(status);
    status = (data.toString());
  }
  function updateTest() {
    let item = { testID, question, ans1, ans2, testType, status}
    // console.warn("item",item)
    fetch(`http://localhost:3001/test/${testID}`, {
      method: 'PUT',
      headers: {
        'Accept': 'accept: */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item)
    }).then((result) => {
      // console.log(result);
      getTests();
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

        
        <TableTest tests={tests} selectTest={selectTest} openForm={openForm} />
      </div>

      {isUpdate &&
        (
          <div>

            <Grid style={{ marginTop: "95px" }} container spacing={1}>
              <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto", float: 'left' }}>
                <Button variant="outlined" onClick={closeForm}>close form</Button>
                <Grid xs={12} sm={11} item>
                  <a>testID:</a>
                  <br/>
                  <TextField type="text"  value={question} onChange={(e) => { setQuestion(e.target.value) }} /> <br /><br />
                </Grid>
                <Grid xs={12} sm={11} item>
                  <a>ans1:</a>
                  <br/>
                  <TextField type="text" p value={ans1} onChange={(e) => { setAns1(e.target.value) }} /> <br /><br />
                </Grid>
                <Grid xs={12} sm={11} item>
                  <a>ans2:</a>
                  <br/>
                  <TextField type="text"  value={ans2} onChange={(e) => { SetAns2(e.target.value) }} /> <br /><br />
                </Grid>
                <Grid xs={12} sm={11} item>
                  <a>testType</a>
                  <TextField type="text"  value={testType} onChange={(e) => { setTestType(e.target.value) }} /> <br /><br />
                </Grid>
                <a>status</a>
                <input
                  placeholder='status'
                  type="checkbox"
                  checked={status}
                  onChange={(e) => setStatus(e.target.checked)}
                />
                <br></br>
                <Button variant="outlined" onClick={updateTest} >Update test</Button>

              </Card>
            </Grid>


          </div>


        )}





    </div>
  )

}

