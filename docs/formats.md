# File formats & specs

This page defines what contributors should **aim to deliver**. Exact requirements depend on the **current** *Night of the Meteor* audio import path (ScummVM fork, internal tools, etc.). Anything not yet confirmed with the programming / audio lead is marked below.

## Summary checklist

| Item | Typical expectation | Verify? |
|------|---------------------|--------|
| Final container | **WAV** (PCM) and/or **OGG Vorbis** | **Yes** — engine branch |
| Sample rate | **44.1 kHz** or **48 kHz** (one project-wide choice) | **Yes** |
| Bit depth | **16-bit** integer for WAV masters, or **24-bit** if team asks | **Yes** |
| Channels | **Mono** for SFX; **Stereo** for music unless told otherwise | **Yes** |
| Looping | **Seamless** loops with documented **bar/beat** or **sample** points | **Yes** |
| Naming | `sceneId_cueType_v##.ext` or team schema | **Yes** |

## PCM (WAV)

**Use when:** The team wants **lossless** sources for later mastering, or the importer requires WAV.

- Export **non-interleaved** vs **interleaved** only if specified (usually interleaved stereo).
- Avoid **float WAV** unless the pipeline explicitly supports it; **16-bit PCM** is the safest default for compatibility.
- Leave **1–2 seconds** of **silence tail** only if the cue is **not** a loop; loops should be trimmed to the **exact** cycle.

!!! warning "Draft — pending tech verification"

    Confirm with the project’s **audio or engine maintainer**: accepted extensions (`.wav` only vs also `.flac`), **sample rate lock**, and whether **metadata chunks** (BWF bext, iXML) are preserved or stripped by the importer.

## Compressed (OGG / etc.)

**Use when:** The shipped game should stay small and streaming is handled by the engine.

- Use a **consistent quality** setting (e.g. Vorbis q5–q7) only after the team standardizes it.
- Always keep a **lossless** archive copy (WAV/FLAC) for future remixes unless the brief says otherwise.

!!! warning "Draft — pending tech verification"

    Confirm whether the runtime uses **OGG**, **MP3**, or something else, and whether **loop metadata** (e.g. `LOOPSTART` / `LOOPLENGTH` in sample formats, or engine-specific loop tags) is required.

## MIDI (if applicable)

**Use when:** The game plays music through a **synthesizer** or **soundfont** path.

- Freeze **program** and **bank** assignments in documentation.
- Avoid **editorial sysex** unless the playback stack supports it.
- Export **Type 0** or **Type 1** per importer requirement.

!!! warning "Draft — pending tech verification"

    Many modern remakes use **streamed audio** only. Confirm whether **MIDI** is in scope at all before delivering `.mid` files.

## Loop points

Looping adventure cues should:

1. **Loop cleanly**—no click, no level jump, no reverb tail cut awkwardly unless designed as a hard loop.
2. Document **how** you looped: “beats 5–36,” “samples 88200–396900,” or a screenshot of the DAW selection.
3. Provide a **one-shot** version if the scene can also play the cue from the top without looping.

## Loudness

Game mixes are not streaming-platform masters. Prefer:

- **Consistent** perceived loudness across cues in the **same** scene or room.
- **Headroom** so downstream **SFX** and **voice** do not fight the music.

Agree a **reference** (e.g. short-term LUFS range or “match this shipped cue”) with the music lead.

## File naming

Use **ASCII** filenames where possible: `A-Z`, `0-9`, `_`, `-`. Avoid spaces.

For **cutscenes and scene cues**, follow [Cutscene and cue file naming](file-naming-conventions.md) (game, scene, pipeline stage, branch `B##`, version `v##`, optional export and tags).

For other assets, align with the brief. A simple illustrative pattern:

```text
RM01_Day_AmbLoop_v02_stem_melody.wav
RM01_Day_AmbLoop_v02_mix.ogg
```

Include **`v02`** style revision tokens so engineers do not guess which file is newest.

## What not to send

- **MP3** as the only source unless explicitly allowed.
- **Proprietary project files** as the *only* deliverable (`.cpr`, `.logicx`, etc.)—pair them with audio exports.
- **Huge** uncompressed multitracks unless the team asked for them; use **stems** agreed in the brief.

## Next steps

- [Production pipeline](pipeline.md) — Where these files go and who signs them off.
- [Technical setup](setup.md) — Project settings that make the above easy.
