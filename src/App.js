import Image1 from "./img/airbnb 1.png";
import Image2 from "./img/Group 77.png";
import Card from "./card";
import data from "./data";
export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <nav>
        <header className="header">
          <img src={Image1} className="header-logo" alt="" />
        </header>
      </nav>
      <section className="showcase">
        <img src={Image2} className="showcase-img" alt="" />
        <h1 className="h1">online experience</h1>
        <p className="p">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
      <section className="card-list">{cards}</section>
    </>
  );
}
