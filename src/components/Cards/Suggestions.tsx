import { useSelector } from "react-redux";
import { RootReducer } from "../../redux/store";

export const Suggestions = () => {
  const { suggestions } = useSelector((state: RootReducer) => state);

  return (
    <div>
      <h2>Suggestions</h2>
      {suggestions &&
        suggestions.map((a, i) => {
          return (
            <div key={i} className="suggestion">
              <h2>{a.word}</h2>
              <h4>{a.phonetic}</h4>
              {a.meanings &&
                a.meanings.map((m) => {
                  return (
                    <section key={Math.random()} className="meaning">
                      <h5>Part of Speech: "{m.partOfSpeech}"</h5>
                      <div>
                        {m.definitions &&
                          m.definitions.map((d) => {
                            return (
                              <div key={Math.random()}>
                                {d.definition && (
                                  <div className="definition">
                                    <p>Definition</p>
                                    <h6>{d.definition}</h6>
                                  </div>
                                )}
                                {d.example && (
                                  <div className="example">
                                    <p>Example</p>
                                    <h6>{d.example}</h6>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                      </div>
                    </section>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};
