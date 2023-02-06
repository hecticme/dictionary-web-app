import { BsFillVolumeUpFill } from "react-icons/bs";

export function Word({ data }) {
  return (
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
                <div className="meaning__phonetic" key={index}>
                  <p className="meaning__phonetic__text">
                    {filteredPhonetic.text}
                  </p>
                  <div className="meaning__phonetic__audio">
                    <audio
                      id={"sound" + index}
                      src={filteredPhonetic.audio}
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
  );
}
