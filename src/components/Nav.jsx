import Status from "./Status";
import "./Nav.css";
function Nav(){


    return(
        <div className="nav">
            <ul>
                <li><h1>Photo Organizer</h1></li>
                <li><Status lastUpdated="2021-09-01"/></li>
            </ul>
        </div>
    )
}
export default Nav;