import { useSelector } from "react-redux";

export const Suggestions = () => {
    const { suggestions } = useSelector(state => state);
  return (
    <div>
        <h1>Suggestions</h1>
      {console.log("suggestions", suggestions)}
      {suggestions &&
        suggestions.map((a, i) => {
          return (
            <div key={i}>
              <h2>{a.word}</h2>
              <h4>{a.phonetic}</h4>
              {a.meanings &&
                a.meanings.map((m) => {
                  return (
                    <section key={Math.random()}>
                      <h5>Part of Speech: "{m.partOfSpeech}"</h5>
                      <div>
                        {m.definitions &&
                          m.definitions.map((d) => {
                            return (
                              <div key={Math.random()}>
                                <div>
                                  {d.definition && (
                                    <div>
                                      <h6>Definition</h6>
                                      <p>{d.definition}</p>
                                    </div>
                                  )}
                                </div>
                                {d.example && (
                                  <div>
                                    <h6>Definition</h6>
                                    <p>{d.example}</p>
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
