import { Redirect, Route, Switch } from "wouter";
import Footer from "./layout/Footer"
import Header from "./layout/Header"
// import Dashboard from "./pages/Dashboard";
import Dashboard from "@pages/Dashboard";
import Login from "@pages/auth/Login";
import Register from "@pages/auth/Register";

function App() {

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />


          <Route path="/" component={Dashboard} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
