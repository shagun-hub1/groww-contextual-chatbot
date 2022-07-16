import  {
  FixedDepositsPage, 
  HomePage,
  MutualFundsPage,
  SingleProductPage,
  StockPage,
  DashboardFAQ,
  AdminLogin,
  DashboardCategory
}  from "./pages"
import {Routes,Route} from 'react-router-dom'
import USstocksPage from "./pages/USstocksPage"
import { ProtectedRoute } from "./components"
import ChatbotApp from './chatbot/ChatbotApp'
import { useState } from "react"
import { useSelector } from "react-redux"
 
 

 
const App=()=>{ 

  const {user}=useSelector(state=>state.user)

  const [showBot, setshowBot] = useState(false)
  return (
  <>
    
    { !window.location.pathname.includes("admin") &&
    <div className="fixed bottom-[40px] right-[25vw] ">
      {showBot && <ChatbotApp/>}
      <button
      className="bg-purple-500 text-red-900 p-4 rounded-full"
      onClick={()=>setshowBot((prev)=>!prev)}
      >Bot</button>
    </div>
  }
     <Routes>
       <Route path="/" element={<StockPage/>}/>
       <Route path="/stocks/user/explore" element={<StockPage/>}/>
       <Route path="/mutual-funds/user/explore" element={<MutualFundsPage/>}/>
       <Route path="/deposits/user/explore" element={<FixedDepositsPage/>}/>
       <Route path="/us-stocks/user/explore" element={<USstocksPage/>}/>
       <Route path="/stocks/:id" element={<SingleProductPage/>}/>
       <Route path="/us-stocks/:id" element={<SingleProductPage/>}/>
       <Route path="/stocks/user/investments" element={<HomePage/>}/>
       <Route path="/admin-login" element={<AdminLogin/>}/>
       <Route
          path="/admin/dashboard/faq"
          element={
          <ProtectedRoute admin>
            <DashboardFAQ />
          </ProtectedRoute>
 }
/>
       <Route
          path="/admin/dashboard/category"
          element={
          <ProtectedRoute admin>
            <DashboardCategory />
          </ProtectedRoute>
 }
/>
     </Routes>
  </>
  )
}

export default App