(() => {
  const pauseOtherAudioPlayers = (event) => {
    const currentPlayer = event.target;
    if (!(currentPlayer instanceof HTMLAudioElement)) {
      return;
    }

    const allPlayers = document.querySelectorAll("audio");
    allPlayers.forEach((player) => {
      if (player !== currentPlayer && !player.paused) {
        player.pause();
      }
    });
  };

  // Use capture so this works even if the event does not bubble.
  document.addEventListener("play", pauseOtherAudioPlayers, true);
})();
