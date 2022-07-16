import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { updateKYCStatus } from '../actions/user'
import { useDispatch,useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { CLEAR_ERRORS, SUCCESS_RESET } from '../constants/constant';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 const KYCDialog=()=> {

    const dispatch=useDispatch()
    const alert=useAlert()
  
     
    const {user} =useSelector(state=>state.user)
    const {error,success,updatedUser}=useSelector(state=>state.updateUser)
    const [open, setOpen] = React.useState(false)

    React.useEffect(()=>{
        if(error){
            alert.error(error)
            dispatch({
                type:CLEAR_ERRORS
            })
        }

        if(success){
            
            dispatch({
                type:SUCCESS_RESET
            })
             
         
        }
    },[error,dispatch,success])

  //console.log(open)

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button
                onClick={()=>{updatedUser?.KYCstatus ?   setOpen(true) : dispatch(updateKYCStatus(user?._id))}}
                variant='contained'
                size='small'
                >
                     {user?.KYCstatus ? 'KYC already updated' : 'Update KYC'}
        </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <p className='font-bold text-2xl italic'>KYC Already Updated</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
           
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default KYCDialog
