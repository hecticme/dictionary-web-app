import { BsFillPlayFill } from "react-icons/bs";

export function Meaning() {
  return (
    <div className="meaning">
      <div className="meaning__word-container">
        <div>
          <h1 className="meaning__word">keyboard</h1>
          <p className="meaning__phonetic">/ˈkiːbɔːd/</p>
        </div>
        <div className="meaning__play-sound">
          <BsFillPlayFill className="meaning__play-sound__icon" />
        </div>
      </div>
      <div className="meaning__meanings">
        <div className="part-of-speech">
          <div className="part-of-speech__divider">
            <h3 className="part-of-speech__title">Noun</h3>
          </div>
          <div className="part-of-speech__definition">
            <h4 className="part-of-speech__definition__sub-title">Meaning</h4>
            <ul className="part-of-speech__definition__list">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                cumque tenetur laudantium molestiae assumenda quam repudiandae
                alias inventore, asperiores nobis!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                cumque tenetur
              </li>
            </ul>
            <h4 className="part-of-speech__definition__sub-title">synonyms</h4>
          </div>
        </div>

        <div className="part-of-speech">
          <div className="part-of-speech__divider">
            <h3 className="part-of-speech__title">Verb</h3>
          </div>
          <div className="part-of-speech__definition">
            <h4 className="part-of-speech__definition__sub-title">Meaning</h4>
            <ul className="part-of-speech__definition__list">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                cumque tenetur laudantium molestiae assumenda quam repudiandae
                alias inventore, asperiores nobis!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                cumque tenetur
              </li>
            </ul>
            <h4 className="part-of-speech__definition__sub-title">synonyms</h4>
            <div className="synonyms">
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
              <p>Lorem.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="meaning__source">
        <div className="meaning__source__divider"></div>
        <p className="meaning__source__title">
          Source <a href=""></a>
        </p>
      </div>
    </div>
  );
}
