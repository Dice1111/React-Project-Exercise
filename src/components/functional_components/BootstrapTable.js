import React,{useState, useEffect }from 'react';
import {Col, Container, Row, Table} from 'react-bootstrap';
import { UserService } from '../../services/UserService';


function BootstrapTable() {

  let [state, setState] = useState({
    users:[]
  });
  useEffect(()=>{
    UserService.getallUsers().then((response)=>{
      setState({
        ...state,
        users: response.data
      })
    }).catch((error)=>{
      console.log(error);
    })
  })
  return (
    <Container className='mt-3'>
      <Row>
        <Col>
        <Table striped bordered  hover className='shadow-lg text-center'>
          <thead>
            <tr>
              <th>SN0</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th>Company</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {
              state.users.length > 0 &&
              state.users.map((user,index)=>{
                return(
                  <tr key={index}>
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.email}</th>
                    <th>{user.website}</th>
                    <th>{user.company.name}</th>
                    <th>{user.address.city}</th>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
        </Col>
      </Row>

    </Container>

  );
}

export default BootstrapTable;