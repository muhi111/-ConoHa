
const Game = () => {
  return (
    <section className="os-selection">
      <h2>イメージタイプ</h2>
      <div className="os-grid">
        <div className="radio-button">
          <input type="radio" id="7DaystoDie" name="os" value="7 Days to Die" />
          <label htmlFor="7DaystoDie">7 Days to Die</label>
        </div>
        <div className="radio-button">
          <input type="radio" id="Survival Evolved" name="os" value="ARK: Survival Evolved" />
          <label htmlFor="Survival Evolved">ARK: Survival Evolved</label>
        </div>
        <div className="radio-button">
          <input type="radio" id="Arma3" name="os" value="Arma3" />
          <label htmlFor="Arma3">Arma 3</label>
        </div>
        <div className="radio-button">
          <input type="radio" id="AssettoCorsa" name="os" value="AssettoCorsa" />
          <label htmlFor="AssettoCorsa">AssettoCorsa</label>
        </div>
        <div className="radio-button">
          <input type="radio" id="CoreKeeper" name="os" value="CoreKeeper" />
          <label htmlFor="CoreKeeper">Core Keeper</label>
        </div>
        <div className="radio-button">
          <input type="radio" id="CS2" name="os" value="CS2" />
          <label htmlFor="CS2">CS2</label>
        </div>
        <div className="radio-button">
          <input type="radio" id="DayZ" name="os" value="DayZ" />
          <label htmlFor="DayZ">DayZ</label>
        </div>
        <div className="radio-button">
          <input type="radio" id="Enshrouded" name="os" value="Enshrouded" />
          <label htmlFor="Enshrouded">Enshrouded</label>
        </div>
        <div className="radio-button">
          <input type="radio" id="Factorio" name="os" value="Factorio" />
          <label htmlFor="Factorio">Factorio</label>
        </div>
        <div className="radio-button">
          <input type="radio" id="FiveM" name="os" value="FiveM" />
          <label htmlFor="FiveM">FiveM</label>
        </div>
      </div>
    </section>
  );
};

export default Game;