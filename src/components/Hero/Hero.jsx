import "./style.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <h1 className=" font-semibold text-main-title-color text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
          Deine Unterstützung in schwirigen Zeiten
        </h1>
      </section>
      <div className="text-center">
        <h2 className="py-14 text-secondary-title-color text-5xl">
          Du bist nicht alleil. Wir sind hier, um zu helfen
        </h2>
      </div>
      <section className="place">
        <h3 className="text-3xl">Dein Ort für dein wahres Ich</h3>
      </section>
      <section className="about_us p-10 relative">
        <div className="container">
          <h3 className="text-left font-medium text-4xl mb-10">Über uns</h3>
          <h4 className="text-center text-5xl text-secondary-title-color mb-10">
            Ein sicherer Ort für Frauen
          </h4>
          <p className="text-xl text-center leading-10">
            Die Anora-Oase ist ein für Frauen geschaffener Ort, ein Ort, an dem
            Sie sich ausruhen, meditieren und einen angenehmen Moment verbringen
            können. Wir möchten, dass Sie sich wie zu Hause fühlen und das
            Gefühl haben, nicht allein zu sein.
          </p>
          <img
            src="/src/assets/images/about-us-plant.png"
            alt="plant-about"
            width={180}
            height={385}
            className="absolute top-0 left-0 right-1/4"
          />
        </div>
      </section>
      <section className="offer py-10 relative">
        <div className="container">
          <h4 className="text-center text-4xl mb-20">
            Was wir zu bieten haben
          </h4>
          <p className="text-3xl mb-4">Praktische Hilfe</p>
          <ul className="mb-14">
            <li className="text-xl">
              • Kostenlose Kleidung und Kosmetikartikel
            </li>
          </ul>
          <p className="text-3xl mb-4">Persönliche Entwicklung</p>
          <ul>
            <li className="text-xl">
              • Deutschkurse (Konversation und Grammatik)
            </li>
            <li className="text-xl">
              • Workshops und kreative Veranstaltungen zur Stressbewältigung
            </li>
          </ul>
          <img
            src="/src/assets/images/offer-plant.png"
            alt="plant-about"
            width={180}
            height={385}
            className="absolute bottom-0 right-0"
          />
        </div>
      </section>
      <section></section>
    </>
  );
};

export default Hero;
