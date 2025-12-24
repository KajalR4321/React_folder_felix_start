// I have to create the new  part after banner section 
import "./Client.css";

import client1 from "../../assets/Hero/google.svg";
import client2 from "../../assets/Hero/slack.svg";
import client3 from "../../assets/Hero/atlassian.svg";
import client4 from "../../assets/Hero/dropbox.svg";
import client5 from "../../assets/Hero/shopify.svg";



const Client = () => {
  return (
    <section>
      <div className="all_img">
        <img src={client1} alt="Google" />
        <img src={client2} alt="Slack" />
        <img src={client3} alt="Atlassian" />
        <img src={client4} alt="Dropbox" />
        <img src={client5} alt="Shopify" />
      </div>
    </section>
  );
};

export default Client;
