import "./Status.css";

const Status = ({ lastUpdated }) => {
    return (
            <button className="status" onClick={()=>{}}><p className="scan">Scan</p>
            <div><p>Last Updated: </p><p>{lastUpdated}</p></div>
            </button>
    );
};

export default Status;