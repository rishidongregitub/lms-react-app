import { Route, Routes } from "react-router-dom"
import AuthPage from "./Pages/Auth"

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage/>}/>
      </Routes>
    </>
  )
}

export default App
