# Alternatives to the “default” DAW workflow

The project cares about **outputs and process**, not about which logo is on your toolbar. If you can produce the files in [File formats & specs](formats.md) and follow [Production pipeline](pipeline.md), you can use any of the approaches below—keeping tradeoffs in mind. For tool installers, see [Downloads & links](downloads.md).

## Trackers (OpenMPT, Renoise, etc.)

**Good for:** Chiptune or sample-heavy cues, tight loop control, small memory footprint mindset.

**Watch out for:** Exporting **clean stems** can be fiddly; document your render steps. Some tracker workflows default to **IT/XM** project files—hand those only if the team explicitly accepts them; usually they want **WAV/FLAC/OGG** stems or mixes.

## Notation-first (MuseScore, Dorico, Sibelius)

**Good for:** Strong melodic/harmonic writing, live instrumental parts, sheet music for live players.

**Watch out for:** Game delivery is still **audio files** or **MIDI** per engine rules. You will almost always bounce **stems or a mix** from a DAW or the notation app’s audio engine. MIDI semantics (program changes, CCs) must match what the importer expects—confirm on the formats page / with the tech lead.

## Hardware + recorder

**Good for:** Synth jams, guitar layers, organic texture.

**Watch out for:** **Noise floor**, **tuning**, and **timing**—edit in a DAW before delivery. Hand **unclipped** recordings; let the agreed mastering/loudness step happen with team knowledge.

## iPad / mobile tools

**Good for:** Sketching ideas on the go.

**Watch out for:** Export **WAV** (or agreed format) at the correct sample rate; avoid lossy **MP3** as an only master unless the pipeline explicitly allows it. Transfer files in full quality before any forum compression.

## Free and open-source stacks

**Ardour, LMMS, Audacity (for editing)** can all work if you:

1. Maintain **organized projects** and **stem exports**.
2. Avoid destructive edits on the **only copy** of a recording.
3. Test **loop seams** after export (see formats page).

## Choosing what to use

| If you… | Consider… |
|--------|-----------|
| Want fastest stem workflow | REAPER, Cubase, Logic |
| Write chip/retro loops | Tracker + documented render recipe |
| Write for live players | Notation app → DAW mixdown |
| Only have Audacity | Feasible for **simple** cues; check with music lead early |

When in doubt, **ask before investing weeks** in a toolchain the build scripts cannot ingest.

## Next steps

- [File formats & specs](formats.md)
- [Production pipeline](pipeline.md)
- [Downloads & links](downloads.md)
