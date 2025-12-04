import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="hero">
      <div className="card">
        <div className="top">
          <img src={props.logo} alt="logo" />
          <button>
            Save <Bookmark size={12} className="bookmark-icon"/>
          </button>
        </div>
        <div className="center">
          <h3>
            {props.company}<span>{props.posted}</span>
          </h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.p1}</h4>
            <h4>{props.p2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.salary}</h3>
            <p>{props.place}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card
