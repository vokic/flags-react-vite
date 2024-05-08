import "./Card.css";
import { Country } from "./Country.interface";

const Card = ({
  country,
  onClose,
}: {
  country: Country;
  onClose: () => void;
}) => {
  console.log("Country object:", country);
  return (
    <div className="card-popup">
      <div className="card">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>

        <div className="container">
          <h2>{country.name.official}</h2>
          {country.coatOfArms && country.coatOfArms.svg ? (
            <img
              className="coat-of-arms"
              src={country.coatOfArms.svg}
              alt={`Coat of Arms of ${country.name.official}`}
            />
          ) : (
            <p>No coat of arms</p>
          )}
        </div>

        <br />
        <div className="country-info-scrollable">
          <div className="country-info">
            <div className="text-info">
              <p>
                <strong>{country.name.common}</strong>, officially known as{" "}
                <strong>{country.name.official}</strong>, is a country situated
                in <strong>{country.subregion}</strong>. Its common name {" - "}{" "}
                <strong>{country.name.common}</strong>, reflects its rich
                cultural and geographical heritage.{" "}
                <strong>{country.name.common}</strong> boasts a diverse
                landscape that spans across <strong>{country.region}</strong>.
              </p>
              <br />
              <p>
                <strong>Geography and Borders:</strong> <br />
                <br /> Covering an area of <strong>{country.area}</strong>{" "}
                square kilometers, <strong>{country.name.common}</strong> is a
                vibrant nation with a population of approximately{" "}
                <strong>{country.population}</strong> people. The country is
                characterized by its captivating natural beauty, attracting
                visitors from around the globe. Its capital city,{" "}
                <strong>{country.capital[0]}</strong>, serves as the political
                and economic hub, situated at a latitude of{" "}
                <strong>{country.capitalInfo.latlng[0]}</strong> and longitude
                of <strong>{country.capitalInfo.latlng[1]}</strong>.
              </p>
              <br />
              <p>
                <strong>Language and Culture:</strong> <br />
                <br />
                {Object.values(country.languages)[0]} is the official language
                of <strong>{country.name.common}</strong>, reflecting its
                colonial history. The <strong>{country.demonyms.eng.m}</strong>{" "}
                people, who are renowned for their warmth and hospitality. The
                nation celebrates a rich tapestry of cultures, with influences
                from <strong>{country.region}</strong>'s communities.
              </p>
              <br />
              <p>
                <strong>Economy and Currency:</strong> <br />
                <br />
                The{" "}
                <strong>
                  {country.currencies[Object.keys(country.currencies)[0]].name}
                </strong>{" "}
                serves as the official currency of{" "}
                <strong>{country.name.common}</strong>. The nation's economy is
                driven by industries such as <strong>{country.region}</strong>,
                with significant natural resource reserves contributing to its
                economic growth.
              </p>
              <br />
              <p>
                <strong>Government and International Relations:</strong> <br />
                <br />
                <strong>{country.name.common}</strong> is an independent
                republic, recognized as a member of the United Nations and other
                international organizations. Governed as a{" "}
                <strong>{country.status}</strong>,{" "}
                <strong>{country.name.common}</strong> has a proud tradition of
                democratic governance and participation in global affairs.
              </p>
              <br />
              <p>
                <strong>National Symbols:</strong> <br />
                <br />
                The flag of <strong>{country.name.common}</strong> is a striking
                representation of its identity. The coat of arms further
                embodies the nation's spirit, depicting symbols of its heritage
                and aspirations.
              </p>
              <br />
              <p>
                <strong>Transportation and Time Zone:</strong> <br />
                <br />
                <strong>{country.name.common}</strong> follows a{" "}
                <strong>{country.car.side}</strong> driving system, with vehicle
                registration signs displaying "
                <strong>{country.car.signs[0]}</strong>." The nation operates on
                the <strong>{country.timezones[0]}</strong> time zone, ensuring
                synchronization with international standards. Visitors can
                explore <strong>{country.name.common}</strong>'s diverse
                landscapes and vibrant culture through various transportation
                networks.
              </p>
              <br />
              <p>
                <strong>International Recognition and Sports:</strong> <br />
                <br />
                <strong>{country.name.common}</strong> participates in
                international events such as <strong>{country.fifa}</strong>,
                representing the nation's passion for sports and competition.
                Its rich sporting heritage contributes to its global recognition
                and fosters connections with other nations.
              </p>
              <br />
              <p>
                <strong>Exploration and Tourism:</strong> <br />
                <br />
                <strong>{country.name.common}</strong>
                's enchanting landscapes, diverse wildlife, and vibrant culture
                make it a destination worth exploring. Whether trekking through
                its pristine <strong>{country.region}</strong> or immersing in
                its rich history, visitors to{" "}
                <strong>{country.name.common}</strong> are sure to be captivated
                by its charm and allure.
              </p>
              <br />
              <p>
                For more information on <strong>{country.name.common}</strong>,
                including maps and historical context, please visit the
                following links:
                <br />
                <br />{" "}
                <a
                  href={country.maps.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore {country.name.common}
                </a>
                <br />{" "}
                <a
                  href={country.maps.openStreetMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discover {country.name.common}
                </a>
              </p>
            </div>
          </div>
          <br />
          <div className="images-info">
            <img
              className="flag"
              src={country.flags.svg}
              alt="Flag of Moldova"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
