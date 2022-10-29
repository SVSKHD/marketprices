import Clock from "react-live-clock";
import TradeNav from "./Nav";
const Layout = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="text-center">
        <Clock 
        format={"HH:mm:ss"} 
        ticking={true} 
        className="clock"
        timezone={"IST"} 
        />
        <br/>
        <TradeNav/>
        </div>
        {props.children}
      </div>
    </>
  );
};
export default Layout;
