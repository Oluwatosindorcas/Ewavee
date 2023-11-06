import "./style.css";
import PaginatedStory from "./components/PaginatedStory";
import Recent from "./components/recent-post/recent";

function Blog() {
  const recentPosts = Array(4).fill(null);
  return (
    <>
      <div className="hero">
        <div className="slide-hero">
          {/* <img
            src="/assets/pagebanner.png"
            alt="pagebanner"
            className="pageBanner"
          /> */}
          <iframe
            src="https://www.youtube.com/embed/9FJOdsznTSQ?si=o_CCu52uz2WoGE7f"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ borderRadius: "10px" }}
          ></iframe>
        </div>
        <div className="recent-map">
          <span className="">Recent post</span>
          <hr />
          {recentPosts.map((_, index) => (
            <Recent key={index} />
          ))}
        </div>
      </div>

      <div className="hero22">
        <div className="hero2text">
          <p className="hero2maintext">What’s New on Moneywize?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Leo imperdiet lacus id sit
            id pretium. Duis tincidunt ultricies aliquet amet arcu sit quis
            iaculis suspendissEtiam facilisis elementum elit curabitur
            vestibulum. Pulvinar enim enim dolor ac in. Eu nulla a semper nulla
            iaculis fermentum nunc tempus in. Vestibulum lectus lectus facilisis
            pellentesque leo proin
          </p>
          <button className="button">Read More</button>
        </div>
      </div>
      <p className="insights">Insights</p>

      <PaginatedStory />
    </>
  );
}

export default Blog;
