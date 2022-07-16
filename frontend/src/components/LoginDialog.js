import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import { useSelector,useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import { login } from '../actions/user';
import { CLEAR_ERRORS, SUCCESS_RESET } from '../constants/constant';

 const LoginDialog=()=> {

  const alert=useAlert()
  const dispatch=useDispatch()

  const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const [userData, setuserData] = useState({
        name:'',
        email:'',
        password:''
      })
  
  const {name,email,password}=userData
 
   

  const onChange=(e)=>{
    setuserData({...userData,[e.target.name]:e.target.value})
  }
 
  const Submit=(e)=>{
    e.preventDefault();

    console.log("jkjhoij")
    dispatch(login(userData))


  }

  const {error,success}=useSelector(state=>state.user)

  useEffect(()=>{

    if(error){
      handleClose()
      alert.error(error)
      dispatch({
        type:CLEAR_ERRORS
      })
    }

    if(success){
      console.log("jkhlk")
      handleClose()
      alert.success("Login successful")
      dispatch({
        type:SUCCESS_RESET
      })
    }

  },[error,dispatch,success])
  const inputcss=` rounded-md font-medium p-2  italic focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 shadow-lg`
  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Login
      </Button>
      <Dialog
        
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
            <p className='text-center text-2xl font-bold underline'>User Login</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
         
          <div className='flex justify-center items-center my-4 '>
            <form onSubmit={Submit}  className='flex flex-col justify-center items-center gap-6 bg-red-400  p-12 bg-red-300'>
                <input
                name='name'
                placeholder='Enter your name'
                className={inputcss}
                value={name}
                onChange={onChange}
                autoFocus
                required
                />
                <input
                name='email'
                type='email'
                placeholder='Enter your email'
                className={inputcss}
                value={email}
                onChange={onChange}
                autoFocus
                required
                />
                <input
                name='password'
                type='password'
                placeholder='Enter password'
                className={inputcss}
                value={password}
                onChange={onChange}
                autoFocus
                required
                />
                <button
                type='submit'
                className='bg-violet-400 rounded-md shadow-md text-[#f6f6f6] py-2 px-6 italic font-medium '
                >Submit</button>
            </form>
        </div>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
           
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginDialog