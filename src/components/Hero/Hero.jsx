import "./style.css";
import leftPlant from "../../assets/images/about-us-plant.png";
import rightPlant from "../../assets/images/offer-plant.png";
import courseWall from "../../assets/images/course-wall.png";
import courseBottom from "../../assets/images/course-bottom.png";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <h1 className=" font-semibold text-main-title-color text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
          Deine Unterstützung in schwirigen Zeiten
        </h1>
      </section>
      <div className="text-center">
        <h2 className="py-14 text-secondary-title-color text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
          Du bist nicht alleil. Wir sind hier, um zu helfen
        </h2>
      </div>
      <section className="place">
        <h3 className="text-3xl max-lg:text-2xl max-sm:text-xl">
          Dein Ort für dein wahres Ich
        </h3>
      </section>
      <section className="about_us p-10 relative">
        <div className="container">
          <h3 className="text-left font-medium text-4xl mb-10 max-lg:text-2xl">
            Über uns
          </h3>
          <h4 className="text-center text-5xl text-secondary-title-color mb-10 max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            Ein sicherer Ort für Frauen
          </h4>
          <p className="text-xl text-center leading-10">
            Die Anora-Oase ist ein für Frauen geschaffener Ort, ein Ort, an dem
            Sie sich ausruhen, meditieren und einen angenehmen Moment verbringen
            können. Wir möchten, dass Sie sich wie zu Hause fühlen und das
            Gefühl haben, nicht allein zu sein.
          </p>
          <img
            src={leftPlant}
            alt="plant-about"
            width={180}
            height={385}
            className="absolute top-0 left-0 right-1/4"
          />
        </div>
      </section>
      <section className="offer py-10 relative">
        <div className="container">
          <h4 className="text-center text-4xl mb-20 max-lg:text-2xl">
            Was wir zu bieten haben
          </h4>
          <p className="text-3xl mb-4 max-lg:text-2xl">Praktische Hilfe</p>
          <ul className="mb-14">
            <li className="text-xl ">
              • Kostenlose Kleidung und Kosmetikartikel
            </li>
          </ul>
          <p className="text-3xl mb-4 max-lg:text-2xl">
            Persönliche Entwicklung
          </p>
          <ul>
            <li className="text-xl">
              • Deutschkurse (Konversation und Grammatik)
            </li>
            <li className="text-xl">
              • Workshops und kreative Veranstaltungen zur Stressbewältigung
            </li>
          </ul>
          <img
            src={rightPlant}
            alt="plant-about"
            width={180}
            height={385}
            className="absolute bottom-0 right-0"
          />
        </div>
      </section>
      <section className="course py-32 relative">
        <div className="container">
          <div className="max-w-5xl max-lg:max-w-4xl max-md:max-w-3xl max-sm:max-w-2xl">
            <h4 className="text-center text-4xl mb-20 max-lg:text-2xl">
              Deutschkurse für Frauen
            </h4>
            <p className="text-3xl max-lg:text-2xl max-md:text-xl mb-6">
              Wir bieten Deutschunterricht für Frauen, die ihre Sprachkenntnisse
              verbessern möchten
            </p>
            <p className="mb-3 text-secondary-title-color">
              Kostenlose Konversationsgruppen
            </p>
            <p>Jeden Montag von 16:45 bis 17:45 </p>
            <p className="mb-6">
              bieten wir Konversationsstunden mit einfachen und alltagsnahen
              Themen an. Diese Gruppen sind völlig kostenlos und unverbindlich.
            </p>
            <p className="mb-3 text-secondary-title-color">
              Individueller Deutschunterricht
            </p>
            <p>
              Für intensiveres Lernen bieten wir persönliche Deutschstunden an,
              bei denen auch Grammatik und schriftliche Übungen im Fokus stehen.
              Preis: 30 CHF für ein Paket von 5 Lektionen. Zeiten: Dienstags von
              17:00 bis 19:00, Freitags von 17:00 bis 18:00 uhr
            </p>
            <a
              className="text-center text-secondary-title-color"
              href="tel:4100765027389"
            >
              Tel. +4 176 502 73 89 Claudia
            </a>
          </div>
        </div>
        <img
          className="absolute top-0 right-30% max-md:hidden"
          src={courseWall}
          alt="course"
        />
        <img
          className="absolute -bottom-1/3 -left-48 max-md:hidden"
          src={courseBottom}
          alt="course-bottom"
        />
      </section>
    </>
  );
};

export default Hero;
