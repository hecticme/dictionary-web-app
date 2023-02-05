import { BsFillVolumeUpFill, BsBoxArrowUpRight } from "react-icons/bs";

export function Meaning({ data }) {
  let result;

  if (Array.isArray(data) && !data.length == 0) {
    result = (
      <div className="meaning">
        <div className="meaning__word-container">
          <div>
            <h1 className="meaning__word">{data[0].word}</h1>
            {/* Loop through the phonetics and find the one which has both text and audio */}
            <div className="meaning__phonetics">
              {data[0].phonetics
                .filter((phonetic) => {
                  return phonetic.text && phonetic.audio;
                })
                // Return the phonetic text
                .map((filteredPhonetic, index) => {
                  return (
                    <div className="meaning__phonetic">
                      <p className="meaning__phonetic__text">
                        {filteredPhonetic.text}
                      </p>
                      <div className="meaning__phonetic__audio">
                        <audio
                          id={"sound" + index}
                          src="https://api.dictionaryapi.dev/media/pronunciations/en/plane-us.mp3"
                        ></audio>
                        <BsFillVolumeUpFill
                          className="meaning__phonetic__icon"
                          onClick={() => {
                            document.querySelector(`#sound${index}`).play();
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {data.map((value, index) => {
          return (
            <div className="meaning__etymologies">
              <div className="meaning__etymology">
                <h2 className="meaning__etymology__text">Etymology</h2>
                <div className="meaning__etymology__number">{index + 1}</div>
              </div>
              {value.meanings.map((meaning) => {
                return (
                  <div className="part-of-speech">
                    <div className="part-of-speech__divider">
                      <h3 className="part-of-speech__title">
                        {meaning.partOfSpeech}
                      </h3>
                    </div>
                    <div className="part-of-speech__definition">
                      <h4 className="part-of-speech__definition__sub-title">
                        Meaning
                      </h4>
                      <ul className="part-of-speech__definition__list">
                        {meaning.definitions.map((definition) => {
                          return <li>{definition.definition}</li>;
                        })}
                      </ul>
                      <h4 className="part-of-speech__definition__sub-title">
                        Synonyms
                      </h4>
                      <div className="synonyms">
                        {!meaning.synonyms ? (
                          <p>Oops! We have no synonyms for this word.</p>
                        ) : (
                          meaning.synonyms.map((synonym) => {
                            return <p>{synonym}</p>;
                          })
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="meaning__source">
          <div className="meaning__source__divider"></div>
          <p className="meaning__source__title">
            Source
            <a href={data[0].sourceUrls[0]} target="_blank">
              {data[0].sourceUrls[0]}
              <BsBoxArrowUpRight className="arrow-up-icon" />
            </a>
          </p>
        </div>
      </div>
    );
  }

  return result;
}
