import { Navigate } from "react-router-dom";
import {useSelector} from 'react-redux'

const Protected = ({admin,children}) => {

  const {isAuthenticated,user}=useSelector(state=>state.user)

 if (!isAuthenticated) {
 return <Navigate to="/admin-login"  />;
 }

 if(admin){
  if(user?.role!=='admin')
  return <Navigate to="/admin-login"  />;


 }
 return children;
};
export default Protected;