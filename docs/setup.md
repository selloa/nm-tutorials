# Technical setup (MIDI-first)

This section follows the **current community workflow** and supports the **writing and orchestration process** first: start by writing ideas in a tool that can **export MIDI**. A DAW is **not** required for that first step. If you use something else, read [Alternatives](alternatives.md) and still meet [File formats & specs](formats.md). If you still need software, start with [Downloads & links](downloads.md).

## Core requirement: MIDI export

For now, you mainly need software that lets you write cues and export clean **.mid** files. The specific tool is up to you.

- **Notation tools** (for example MuseScore)
- **Beginner-friendly DAWs** (for example GarageBand on macOS)
- **Full DAWs** (if you already compose there)

The exact tool matters less than keeping a **clear shared baseline**:

- **Reliable MIDI export** (standard `.mid`)
- **Clear time signatures** per cue (for example 4/4 or 3/4)
- **Clear tempo indications** (tempo changes are fine; clarity is what matters)
- **Manageable channel layout** (as a baseline, stay below 16 MIDI channels)
- **Readable track names** so handoff is straightforward

## Naming and project hygiene

- **Project folder per cue**: `SC01_ExtMansion_Day_v01`, etc., matching whatever naming convention the pipeline doc uses.
- **Consistent bounce names**: `cueId_stemName.wav` (exact pattern from formats page).
- **Notes in text**: Keep a short `README.txt` or DAW markers for **loop points**, **intro bars**, and **tempo map** if the cue is not straight 4/4.

## Next steps

- [Alternatives](alternatives.md) — If you do not use a traditional DAW.
- [Downloads & links](downloads.md) — Official download links for free, trial, and paid tool options.
- [File formats & specs](formats.md) — Exact deliverables.
- [Production pipeline](pipeline.md) — When and how to hand files to the team.
