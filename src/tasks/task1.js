import { Container, FormControl, FormControlLabel, FormLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react';
import MuiPhoneNumber from "material-ui-phone-number";
//import PhoneInput from 'react-phone-number-input'


function Task1() {
    const [formField, setformField] = useState({
        firstName:'',
        lastName:'',
        phoneNumber:null,
        age:null,
        gender:'male',
        email:'',
        state:'',
        city:'',
        pincode:null,
        occupation:'10',
        qualification:'20'
    })
    const handleChange = (event) => {
        console.log(`%c for ${event.target.name} , ${event.target.value} `,'color:green')
        setformField({...formField,[event.target.name]:event.target.value})
      };
      console.log('the full form ',formField)
    return (
        <div>
            <Container component='div' maxWidth='sm' style={{display:'flex', flexDirection:'column',marginBottom:'1rem'}}>
                <Typography 
                    variant='h4' 
                    color='primary' 
                    style={{margin:'1rem 0'}}
                >
                    Task-1
                </Typography>

                <TextField 
                    type='string' 
                    variant='outlined' 
                    label='First Name' 
                    color='primary'  
                    value={formField.firstName} 
                    onChange={handleChange}
                    name='firstName'   
                    margin='normal'>
                </TextField>

                <TextField 
                    type='string' 
                    variant='outlined' 
                    label='Last Name' 
                    value={formField.lastName} 
                    color='primary' 
                    name='lastName' 
                    margin='normal' 
                    onChange={handleChange}>

                </TextField>

                <MuiPhoneNumber
                    name="phoneNumber"
                    label="Phone Number"
                    data-cy="user-phone"
                    defaultCountry={"ind"}
                    variant='outlined'
                    margin='normal'
                    value={formField.phoneNumber}
                    onChange={(e) => {
                        setformField({ ...formField,'phoneNumber':e})
                    }}
                    
                  />
                {//<PhoneInput placeholder='Enter Phone Number'></PhoneInput>
}
                <TextField 
                    type='email' 
                    variant='outlined'
                    value={formField.email}
                    onChange={handleChange} 
                    label='E-mail' 
                    color='primary' 
                    margin='normal' 
                    name='email'>

                </TextField>
                <TextField 
                    type='string'
                    value={formField.state} 
                    onChange ={handleChange}    
                    variant='outlined' 
                    label='State' 
                    color='primary' 
                    margin='normal' 
                    name='state'>

                </TextField>
                <TextField 
                    type='string' 
                    value={formField.city}
                    onChange={handleChange} 
                    variant='outlined' 
                    label='City' 
                    color='primary' 
                    margin='normal' 
                    name='city'>

                    </TextField>
                <TextField 
                    type='number'
                    value={formField.pincode}
                    onChange={handleChange}     
                    variant='outlined' 
                    label='Pincode' 
                    color='primary' 
                    margin='normal' 
                    name='pincode'>

                    </TextField>
                <TextField 
                    type='number'
                    value={formField.age}
                    onChange={handleChange} 
                    variant='outlined' 
                    label='Age' 
                    color='primary' 
                    margin='normal' 
                    name='age'>

                    </TextField>
                <FormControl 
                component="fieldset" 
                style={{marginTop:'1rem'}}>
                    <FormLabel 
                    component="legend" 
                    align='left' 
                    style={{fontSize: '1.3rem',display:'flex'}}>Gender</FormLabel>
                    <RadioGroup 
                    row 
                    aria-label="gender" 
                    name="gender" 
                    value={formField.gender} 
                    onChange={handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <FormControl >
                    <FormLabel id="demo-simple-select-label" align='left' style={{marginTop:'1rem'}}>Occupation</FormLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant='outlined'
                    color='primary'
                    name='occupation'
                    value={formField.occupation}
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>occupation1</MenuItem>
                    <MenuItem value={20}>occupation2</MenuItem>
                    <MenuItem value={30}>occupation3</MenuItem>
                    </Select>
                </FormControl>
                <FormControl >
                    <FormLabel id="demo-simple-select-label" align='left' style={{marginTop:'1rem'}}>Qualification</FormLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant='outlined'
                    color='primary'
                    name='qualification'
                    value={formField.qualification}
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>occupation1</MenuItem>
                    <MenuItem value={20}>occupation2</MenuItem>
                    <MenuItem value={30}>occupation3</MenuItem>
                    </Select>
                </FormControl>
                <Paper>
                   
                </Paper>
            </Container>
        </div>
    )
}

export default Task1
