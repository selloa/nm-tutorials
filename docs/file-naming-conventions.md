# Cutscene and cue file naming

A consistent filename tells you **which project**, **which scene**, **which cue**, **where you are in the pipeline**, and **which revision** you are looking at—without opening the file. The convention below is tuned for *Night of the Meteor* cutscene and scene music work (MuseScore grids/sketches, MIDI where used, and WAV exports). If the music or engine lead publishes a different schema for a specific delivery, follow that for **finals**; this page remains the day-to-day working standard.

*Created: 2026-03-22. Last updated: 2026-03-23.*

## Filename template

```text
[GAME]_[SCENE]_[CUE]_[STAGE]_B[##]_v[##](_EXP[##])(_TAG).ext
```

Use **ASCII** only in names: letters, digits, `_`, and (if needed) `-`. Avoid spaces. Optional parts are in parentheses: omit them when they do not apply.

### Unknown parameters {#unknown-parameters}

If you **do not** yet have a value for a segment—common early on when there is **no final scene list**, **no cue numbering**, or **no agreed scene/cue IDs**—**leave that segment out** of the filename. Do **not** invent placeholders such as `TBD`, `UNKNOWN`, `XX`, or temporary numbers you may have to rename later.

Keep **one underscore between each segment you actually use** (no doubled `__` from “empty” fields). When official IDs exist, add them and rename files in one pass so the folder stays consistent.

**Example** (game and pipeline position known; scene/cue list not locked yet):

```text
NOTM_02_GRID_B01_v01.mscz
```

**Example** (working title for the cue, still no `SC##` / `CUE##`):

```text
NOTM_SandyLetMeOut_02_GRID_B01_v01.mscz
```

Required segments for a given handoff may still be defined by the music lead (for example finals might always need `SCENE` and `CUE`). Until then, omit what is unknown.

## What each part means

| Part | Role | Examples |
|------|------|----------|
| **GAME** | Short project code | `NOTM` |
| **SCENE** | Scene identifier | `SC06` |
| **CUE** | Cue within the scene (name or id) | `SandyLetMeOut`, `CUE01` |
| **STAGE** | Fixed pipeline step (see below) | `02_GRID`, `07_MIX` |
| **B##** | Branch / base timeline | `B01`, `B02` |
| **v##** | Iteration on the same branch | `v01`, `v02` |
| **_EXP##** | Export take (optional, usually audio) | `_EXP01`, `_EXP02` |
| **_TAG** | Short human-readable label (optional) | `_syncFix`, `_altEnding`, `_IMPL` |
| **ext** | File type | `.mscz`, `.mscx`, `.mid`, `.wav`, … |

### Pipeline stages (fixed set)

Use these **numeric prefixes** so folders sort in process order:

| Stage token | Typical use |
|-------------|-------------|
| `01_TIMING` | Timing / structure pass |
| `02_GRID` | Grid / framework in MuseScore |
| `03_SKETCH` | Sketch / draft arrangement |
| `04_DEMO` | Demo-quality render for review |
| `05_COMPOSE` | Composition-focused revision |
| `06_SOUND` | Sound design / production elements |
| `07_MIX` | Mix |
| `08_MASTER` | Master / final-ready export |

### Branch `B##` vs version `v##`

- **New `B##`** when the **foundation** changes: timing, structure, or layout shifts enough that older files are no longer the “same timeline.” Example: after a rebuilt grid, go from `B01` to `B02` and reset iteration at `v01`.
- **New `v##`** when you **refine** on the same foundation: edits, fixes, polish—same structural intent, better execution.

### Optional `_EXP##`

Use when you export **multiple renders** from the same logical version (different bounces, quick A/B exports, stem variants). Not required for a single obvious export per `v##`.

### Optional `_TAG`

Short, **ASCII** suffix for intent: `_IMPL` for implementation-ready, `_syncFix` after picture sync, `_altEnding` for alternates. Keep tags **short** and **consistent** within a scene so filenames stay scannable.

### Extensions

| Extension | Typical stage |
|-----------|----------------|
| `.mscz` | `02_GRID`, `03_SKETCH` (MuseScore compressed; common default save) |
| `.mscx` | `02_GRID`, `03_SKETCH` (MuseScore uncompressed) |
| `.mid` | `05_COMPOSE` (if MIDI is in scope) |
| `.mp3` | Quick listens / WIP shares (prefer **WAV** for agreed pipeline finals—see [formats](formats.md)) |
| `.wav` | `04_DEMO` through `08_MASTER` (and any staged audio) |

## Examples

These names follow **cutscene 6** (lab / Sandy — *let me out of here*). A messy real folder might use spaces, `Cutscene_6`, `v1` instead of `v01`, or mixed extensions; below is the **same work**, normalized to this convention (`SC06`, `SandyLetMeOut`, two-digit `B`/`v`, underscores only).

**Timing notes** (plain text or spreadsheet exports—still use `B`/`v` when you iterate):

```text
NOTM_SC06_SandyLetMeOut_01_TIMING_B02_v01.txt
```

**Grid in MuseScore, plus a quick MP3 listen** (same logical version for score and bounce):

```text
NOTM_SC06_SandyLetMeOut_02_GRID_B01_v01.mscz
NOTM_SC06_SandyLetMeOut_02_GRID_B01_v01.mp3
```

**Rebuilt grid** (new foundation after timing/structure change—`B` steps up, `v` resets):

```text
NOTM_SC06_SandyLetMeOut_02_GRID_B02_v01.mscz
```

**Sketch stage** (MP3 iterations, score caught up to one of them):

```text
NOTM_SC06_SandyLetMeOut_03_SKETCH_B01_v01.mp3
NOTM_SC06_SandyLetMeOut_03_SKETCH_B01_v02.mp3
NOTM_SC06_SandyLetMeOut_03_SKETCH_B01_v02.mscz
NOTM_SC06_SandyLetMeOut_03_SKETCH_B01_v03.mp3
```

**Multiple WAV renders of the same version** (optional `_EXP##`):

```text
NOTM_SC06_SandyLetMeOut_03_SKETCH_B01_v02_EXP01.wav
NOTM_SC06_SandyLetMeOut_03_SKETCH_B01_v02_EXP02.wav
```

**Later pipeline** (illustrative—branch `B02` carried forward):

```text
NOTM_SC06_SandyLetMeOut_04_DEMO_B02_v03_IMPL.wav
NOTM_SC06_SandyLetMeOut_06_SOUND_B02_v02.wav
NOTM_SC06_SandyLetMeOut_07_MIX_B02_v01.wav
NOTM_SC06_SandyLetMeOut_08_MASTER_B02_v01.wav
```

(If you use a tag, keep the underscore: the template uses `_IMPL` as `_TAG`, e.g. `..._v03_IMPL.wav`.)

## Rules in short

1. **Stages are fixed** — always one of `01_TIMING` … `08_MASTER`; do not invent new stage tokens without team agreement.
2. **`B##` = new foundation** — bump when timing or structure changes make the old branch obsolete for comparison.
3. **`v##` = iteration** — bump for refinements on the same branch.
4. **Unknown segment → omit** — if scene, cue, or any other piece is not defined yet, drop it from the name (see [Unknown parameters](#unknown-parameters) above); no fake IDs or placeholders.

**Mental model:** *Stage* = where you are in the pipeline; *B* = which timeline; *v* = how far along that timeline; *EXP* = which export from that version.

## Related pages

- [File formats & specs](formats.md) — WAV/OGG expectations, loops, loudness.
- [Production pipeline](pipeline.md) — WIP handoff and review.
- [Technical setup](setup.md) — DAW and version habits.
