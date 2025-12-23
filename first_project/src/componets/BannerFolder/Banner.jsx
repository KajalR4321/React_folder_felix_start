import "./Banner.css";
// import bgimg from "../../assets/Hero/Illustration.png";
import ill from "../../assets/Hero/Illustration.png";
import fig from "../../assets/Hero/imgfig.png";

const Banner = () => {
  return (
    <>
      <section className="banner_section">
        <div className="banner_section_left">
          <h1 className="gradient_text">
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence
            unpleasing. Not thoughts all exercise blessing.
            Indulgence way everything joy alteration
            boisterous the attachment. Party we years to order
            allow asked of.
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
            />
            <button className="pry_btn active">
              Get Started
            </button>
          </div>
        </div>
        <div className="banner_section_right">
          <img src={ill} alt="bg_img" />
        </div>

      </section>
      <section>
        <div className="small_section_left">
          <div className="small-img">
            <img src={fig} alt="cicle_img" />
            <img src={fig} alt="cicle_img" />
            <img src={fig} alt="cicle_img" />
            <img src={fig} alt="cicle_img" />
          </div>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </section>

    </>

  );
};

export default Banner;