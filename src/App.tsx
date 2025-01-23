import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { PagesPaths } from "./components/Layout/types"
import Home from "./pages/Home/Home"
import History from "./pages/History/History"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={PagesPaths.HOME} element={<Home />}></Route>
          <Route path={PagesPaths.HISTORY} element={<History />}></Route>
          <Route path='*' element='Page not found'/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
