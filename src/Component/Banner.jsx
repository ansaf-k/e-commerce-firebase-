import '../style/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-title">
          <span>LUSTRE</span>
          <span>THE</span>
          <span>FASHION/</span>
          <span>WEBSHOP</span>
        </h1>
        <nav className="banner-nav">
          <a href="#japan80">→ JAPAN 80</a>
          <a href="#christmas">→ CHRISTMAS</a>
          <a href="#dancing-queen">→ DANCING QUEEN</a>
          <a href="#cats">→ CATS</a>
        </nav>
      </div>
    </div>
  );
};

export default Banner;