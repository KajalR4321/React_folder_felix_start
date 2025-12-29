import "./Blog.css";
import one from "../../assets/Hero/Rectangle1.png";
import two from "../../assets/Hero/Rectangle2.png";
import three from "../../assets/Hero/Rectangle4.png";
import four from "../../assets/Hero/Rectangle3.png";
import five from "../../assets/Hero/Rectangle5.png";

const Blog=()=>{
    const blogCards = [
  {
    id: "post-001",
    img: one,
    date: "Sep 26, 2021",
    title:
      "GPT-3 and Open AI is the future. Let us explore how it is?",
    button: "Read More",
  },
  {
    id: "post-002",
    img: two,
    date: "Sep 27, 2021",
    title:
      "GPT-3 and Open AI is the future. Let us explore how it is?",
    button: "Read More",
  },
  {
    id: "post-003",
    img: three,
    date: "Sep 28, 2021",
    title:
      "GPT-3 and Open AI is the future. Let us explore how it is?",
    button: "Read More",
  },
  {
    id: "post-004",
    img: four,
    date: "Sep 29, 2021",
    title:
      "GPT-3 and Open AI is the future. Let us explore how it is?",
    button: "Read More",
  },
  {
    id: "post-005",
    img: five,
    date: "Sep 30, 2021",
    title:
      "GPT-3 and Open AI is the future. Let us explore how it is?",
    button: "Read More",
  },
];
    return(
        <>
         <section className="blog_section">
      <header>
        <h2>
          A lot is happening, <br />
          We are blogging about it.
        </h2>
      </header>
      <div className="blog_section__grid">
        {blogCards.map((item) => (
          <div
            key={item.id}
            className={`blog__grid_card blog_${item.id}`}>
            <div className="triangle" />
            <div>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                width={200}
                height={300}
              />

              <p>{item.date}</p>
              <h4>{item.title}</h4>
            </div>
            <div>
              <a href="#">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
        </>
    )
}
export default Blog;
