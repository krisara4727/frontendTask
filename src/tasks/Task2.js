import { Button, Container, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { userAction } from '../actions';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';

function Task2() {
    const [input, setinput] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(userAction(input));
        history.push('/child');
    }
    return (
        <div>
            <Container maxWidth='sm' style={{display:'flex',flexDirection:'column',marginTop:'1rem'}} >
                <Typography variant='h4' color='secondary' margin='normal'>
                    This is the parent component 
                </Typography>
                <TextField
                    type='string'
                    value={input}
                    onChange={(e) => {setinput(e.target.value)}}
                    variant='outlined'
                    margin='normal'
                    label='enter input'
                    >

                </TextField>
                <Button 
                    color='primary' 
                    variant='contained' 
                    onClick={handleClick} 
                    margin='normal'
                    disabled={input?false:true}
                    
                >
                    Go to child
                </Button>
            </Container>
        </div>
    )
}

export default Task2
