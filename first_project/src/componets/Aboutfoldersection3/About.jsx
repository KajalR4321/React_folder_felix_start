import "./About.css";
const About=()=>{
    //# listing and key to make card because in react do not use multiple time
    let data=[
        {
            id:"card_1",
            title:"Chatbots",
            p:"We so opinion friends me message as delight. Whole front do of plate heard oh ought. "

        },
        
        {
            id:"card_2",
            title:"Knowledgebase",
            p:" At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"

        },
    
        {
            id:"card_3",
            title:"Education",
            p:"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b "

        },
    ]
    return(
        <>
        <section>
        
           
            <header>
                <h2 className="gradient_line">
                    <span/>
                    What is Gpt?
                </h2>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
                </header>  
                <div>
                    <h3 className="gradient_line">
                        The possibilities are beyond your imagination
                        </h3>
                        <a href=""> Explore The Library</a>
                        </div>
                         {/*we are taking this card with the helf of js  be call */}
                         <div>
                            {
                                data.map((items) =>(
                                    <div>
                                        <h4 className="gradient_line">
                                            <span/>
                                            {items.title}

                                        </h4>
                                        <p>
                                               {items.p}
                                        </p>
                                        

                                    </div>


                                ))
                            }

                        </div>

        </section>
        </>
    )
}
export default About;