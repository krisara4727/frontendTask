import {  Container, Typography } from '@material-ui/core';
import React     from 'react'
import { useSelector } from 'react-redux'

function ChildOfTask2() {
    const {userString} = useSelector((state) => state.userInput);
    console.log('the suser input from redux ',userString)

    return (
        <div style={{minHeight:'100vh'}}>
            <Container component='div' maxWidth='sm' style={{height:'100%',display:'flex',flexDirection:'column', justifyContent:'center',marginTop:'2rem'}} >
               
                   <Typography gutterBottom='true' variant='subTitle' margin='normal'>
                       This is the child component.Below is the data fetched from the redux store.
                   </Typography>
                   <Typography variant='h3' color='secondary' gutterBottom='true'>
                        {userString}
                   </Typography>
            </Container>
        </div>
    )
}

export default ChildOfTask2
