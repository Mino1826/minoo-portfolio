import "./services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import services_Data from "../../assets/services_Data";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-title">
        <h1>What I Do</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="services-container">
        {services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;