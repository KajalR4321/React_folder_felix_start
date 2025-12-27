import "./Access.css";

const Access = () => {

  const data1 = [
    {
      id: "card_1",
      title: "Improving end distrusts instantly",
      p: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
    {
      id: "card_2",
      title: "Become the tended active",
      p: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
    },
    {
      id: "card_3",
      title: "Message or am nothing",
      p: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
    },
    {
      id: "card_4",
      title: "Really boy law county",
      p: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
    },
  ];

  return (
    <section className="Access_section">
          <div className="Access_section_center">
                    <h1>
                        The Future is Now and You Just Need To Realize It. Step into Future Today<br></br> & Make it Happen.
                        </h1>
                        <a href="#">Request Early Access to Get Started</a>
                        </div>
    

    <div className="Access_section_cards">
        {data1.map((items) => (
          <div key={items.id} className="left_side">
            <h4 className="gradient_line">
              <span />
              {items.title}
            </h4>
            <p>{items.p}</p>
          </div>
        ))}
      </div> 
    
    
    </section>
  );
};

export default Access;
