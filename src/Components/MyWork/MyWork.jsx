import "./myWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_Data from "../../assets/mywork_data";
// import arrow_icon from '../../assets/arrow_icon.svg';


const MyWork = () => {
  return (
    <div className="mywork" id="work">
      <div className="mywork-title">
        <h1>My Latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_Data.map((work, index) => {
          return (
            <a key={index} href={work.w_href}>
              <img src={work.w_img} alt="" /> 
            </a>
            
          ) 
          
        })}
        </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div> */}

    </div>
  )
}

export default MyWork;