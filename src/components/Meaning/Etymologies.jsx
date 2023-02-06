export function Etymologies({ data }) {
  return data.map((value, index) => {
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
                  {meaning.synonyms.length == 0 ? (
                    <p className="synonyms--none">
                      Oops! We have no synonyms for this one.
                    </p>
                  ) : (
                    meaning.synonyms.map((synonym) => {
                      return <p className="synonyms--found">{synonym}</p>;
                    })
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  });
}
