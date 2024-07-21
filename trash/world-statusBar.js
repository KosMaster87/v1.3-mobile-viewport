class WorldStatusBars {
  statusBars = [];

  /**
   * Initialises the statusBars
   */
  initBars() {
    console.log("auf initbars zugegriffen");
    this.statusBars.push(
      new CharacterStatusBar(),
      new CoinStatusBar(),
      new BottleStatusBar()
    );
  }
}

// --------------

// statusBars = [];
// worldStatusBars = new WorldStatusBars(); // Erweiterung für die Welt.

// --------------
