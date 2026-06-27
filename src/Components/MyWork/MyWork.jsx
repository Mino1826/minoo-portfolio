import "./myWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_Data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <section className="mywork" id="work">
      <div className="mywork-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="mywork-container">
        {mywork_Data.map((work) => (
          <div key={work.id} className="project-card">
            {work.image ? (
              <img src={work.image} alt={work.title} />
            ) : (
              <div className="project-placeholder">
                <span>{work.title.charAt(0)}</span>
              </div>
            )}

            <div className="project-content">
              <h2>{work.title}</h2>
              <h4>{work.type}</h4>
              <p>{work.desc}</p>
              <span>{work.tech}</span>

              <div className="project-links">
                {work.github && (
                  <a href={work.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}

                {work.live && (
                  <a href={work.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
