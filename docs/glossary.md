# Glossary

Short definitions for terms that appear often in **adventure game** and **community remake** audio discussion.

**Cue**  
A single piece of music or ambient bed tied to a location, cutscene, or state (e.g. “day vs night”).

**Stem**  
A submix bounce: e.g. drums only, harmony only. Lets the team rebalance or disable layers without the original DAW session.

**Loop / seamless loop**  
Audio crafted so the **end** joins the **start** without a click or level jump, for indefinite playback while the player stays in a scene.

**One-shot**  
Plays once from the beginning (may still have a long tail), not designed to cycle forever.

**SCUMM**  
Classic LucasArts adventure engine family. Modern remakes may not expose SCUMM internals, but **room-based** design and **iMUSE-style** ideas still influence how music is discussed.

**iMUSE**  
LucasArts system for **dynamic** music transitions. A remake might use simpler **crossfades** or **triggers**—confirm with the team.

**Voice-led mix**  
A mix philosophy where **dialogue** stays intelligible; music ducks or thins under lines.

**Sample rate**  
How many audio samples exist per second (e.g. 44100 Hz). Must stay **consistent** with the engine’s expectation.

**Bit depth**  
Resolution of each sample (e.g. 16-bit vs 24-bit). Affects noise floor and file compatibility.

**OGG / Vorbis**  
A common **lossy** game audio format; smaller than WAV. Often paired with loop metadata or engine-side loop points.

**MIDI**  
Note data rather than a recording. Only relevant if the game’s playback path uses **synths** or **soundfonts**.

**BPM / tempo map**  
Beats per minute; **tempo map** allows tempo changes. Share this if the team must align **animations** or **scripted** beats.

**LUFS**  
Loudness units for full scale; used to compare **perceived** level between cues. Not the only metric that matters for games, but useful for consistency.

**Asset pipeline**  
The chain from **authoring** → **export** → **import/build** → **runtime**. Formats and naming must match this pipeline.

---

Back to [introduction](index.md).
