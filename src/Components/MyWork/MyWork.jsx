import "./myWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_Data from "../../assets/mywork_data";


const MyWork = () => {
  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>My Latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_Data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      
    </div>
  );
};

export default MyWork;
