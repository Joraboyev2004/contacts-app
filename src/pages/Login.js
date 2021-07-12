
import React from "react";

import{
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    CardHeader 
} from 'reactstrap';
import http from "../services/Axios"

const Login = ({ setIsAuth })=> {
    const usernameRef = React.useRef();
    const emailRef = React.useRef();
    const[ users, setUsers] = React.useState([])
   






React.useEffect(()=>{
   http.get('/users')
       .then(res => setUsers(res.data))
       .catch(err => alert(err));
}, [])
    
const GetValues = () => {
    let user = {
        username: usernameRef.current.value,
        email: emailRef.current.value
    }
 
//   let  isAvailable = false
console.log(users);
    users.map((userAxois)=>{
        if(userAxois.username === user.username && userAxois.email === user.email){
        window.localStorage.setItem('username', user.username);
        window.localStorage.setItem('email', user.email);
        setIsAuth(true);
        // isAvailable = true
    }

        return true;
    })
 
    //  !isAvailable ? alert('bunday user topilmadi'):console.log();
}

    return(
        <>
        <Container>
            <Row>
                <Col className='pt-5' sm='12' md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
                    <Card className='bg-secondary text-white mt-5 ' >
                        <CardHeader>Login</CardHeader>
                        <CardBody>
                             <div className='mb-3'>
                                 <label htmlFor='username' className='form-label'>Username</label>
                                 <input type='text' id='username' className='form-control' ref={usernameRef} ></input>
                             </div>
                             <div className='mb-3'>
                                 <label htmlFor='email' className='form-label'>Email</label>
                                 <input type='email' id='email' className='form-control' ref={emailRef} ></input>
                             </div>
                        </CardBody>
                        <CardFooter className='text-end'>

                            <button className='btn btn-primary'  onClick={GetValues}>Login</button> 
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}


export default Login;