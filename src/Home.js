import React from 'react';
import {Button, Container, makeStyles, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    marginAbove:{
        marginTop:"1rem"
    },
    flexDown:{
        display:'flex',
        flexDirection:'column'
    },
    flexCenter: {
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    marginDown: {
        marginBottom : '1rem'
    },
    containerWidth:{
        flexGrow:1
    }
}))

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.flexDown}>
            <Typography align='center' variant='h3' color='textSecondary' gutterBottom='true' className={classes.marginAbove}> 
                Assignment-1
            </Typography>
            <Container className={` ${classes.flexDown}  `} maxWidth='sm'>
            <Link to='/' className={` ${classes.flexDown} ${classes.marginDown}`} >
                    <Button color="primary" variant='contained' size='large' disabled='true' >
                        Home
                    </Button>
                </Link>
                <Link to='/task1' className={`${classes.flexDown} ${classes.marginDown}`} >
                    <Button color="primary" variant='contained' size='large' >
                        Task-1(form)
                    </Button>
                </Link>
                <Link to='/task2' className={`${classes.flexDown} ${classes.marginDown}`} >
                    <Button color="primary" variant='contained' size='large' >
                        Task-2(redux)
                    </Button>
                </Link>
            </Container>


        </div>
    )
}

export default Home
