import "./Features.css";
import FeatureIMg from "../../assets/Hero/Feature_Image.png";
const Features=() =>{
    return (
       <>
       <section className="feature_section">
      <div className="feature_section__left">
        <img
          src={FeatureIMg}
          alt="Feature "
          loading="lazy"
          width={300}
          height={500}
        />
      </div>
      <div className="feature_section__right">
        <p>Request Early Access to Get Started</p>
        <h2>
          The possibilities are<br></br> beyond your imagination
        </h2>
        <p>
          Yet bed any for travelling assistance indulgence
          unpleasing. Not thoughts all exercise blessing.
          Indulgence way everything joy alteration
          boisterous the attachment. Party we years to order
          allow asked of.
        </p>
        <a href="#">Request Early Access to Get Started</a>
      </div>
    </section>
       </>
       
           
       
    )
}
export default Features;