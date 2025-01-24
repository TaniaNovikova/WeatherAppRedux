import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { PAGES_PATHS } from "enums"
import Home from "./pages/Home/Home"
import History from "./pages/History/History"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={PAGES_PATHS.HOME} element={<Home />}></Route>
          <Route path={PAGES_PATHS.HISTORY} element={<History />}></Route>
          {/* <Route path='*' element='Page not found'/> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
