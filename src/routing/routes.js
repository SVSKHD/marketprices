import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Home from "../pages/Home"

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const TradingRoutingVariables = [
    {
        path:"/",
        name:"Home",
        component:<Home/>
    }
]

const TradingRoutes = () =>{
return(
    <>
    <Router>
    <Routes>
    {TradingRoutingVariables.map((r)=>(
      <Route key={r} path={r.path} element={r.component} />
    ))}
    </Routes>
    </Router>
    </>
)
}
export default TradingRoutes