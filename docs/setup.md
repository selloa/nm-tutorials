# Technical setup (reference workflow)

This section describes a **sensible professional baseline** aligned with how many game composers work. Your exact DAW is less important than **repeatable exports**, **clear stems**, and **predictable loudness**. If you use something else, read [Alternatives](alternatives.md) and still meet [File formats & specs](formats.md).

## Digital Audio Workstation (DAW)

Pick one primary DAW and stick with it for the project so session recall and stem layout stay consistent. Common choices among composers:

- **REAPER** — Lightweight, strong routing, good for stem bouncing and game work.
- **Cubase / Nuendo** — Common in European game audio pipelines.
- **Logic Pro** — If you are on macOS and already productive in it.
- **FL Studio / Ableton Live** — Fine if you commit to disciplined stem exports and naming.

At the moment, the music lead is primarily using **Ableton Live**, with **Cubase** also available when needed. What matters most, though, is that **your finals** match the agreed spec.

## Audio interface and monitoring

- Use an audio interface with **stable drivers** and a **known monitoring level** so you do not chase level by ear each session.
- Check mixes on **headphones** and, if possible, ** modest speakers**—adventure game music is often heard on laptop speakers and cheap earbuds.
- Keep **master bus processing** conservative until the team agrees on loudness targets; heavy limiting can make later edits harder.

## Sample rate and project settings

!!! tip "Match the delivery spec"

    Set your project sample rate to whatever [File formats & specs](formats.md) requires for final delivery (often **44.1 kHz** or **48 kHz**). Working at the wrong rate and converting at the end can cause subtle pitch/timing issues with some material.

Use **24-bit** recording where your DAW allows it; final file types may still be 16-bit PCM or compressed (see formats page).

## Stems vs single master

![Illustrative stem bounce layout](assets/stem-layout.svg)

Game integration often needs **flexibility**:

- **Stems** (e.g. melody, harmony, bass, percussion, ambience) let the team mute layers, rebuild loops, or adjust balance without reopening your DAW project.
- A **single stereo master** is simpler but harder to edit under time pressure.

Unless the brief says “master only,” plan to deliver **labeled stems plus a reference mix** (stereo bounce that should sound “right” in-game).

## Naming and project hygiene

- **Project folder per cue**: `SC01_ExtMansion_Day_v01`, etc., matching whatever naming convention the pipeline doc uses.
- **Consistent bounce names**: `cueId_stemName.wav` (exact pattern from formats page).
- **Notes in text**: Keep a short `README.txt` or DAW markers for **loop points**, **intro bars**, and **tempo map** if the cue is not straight 4/4.

## Version control for sessions

DAW projects are **binary and large**—they usually do **not** belong in this docs repo.

- Prefer **cloud folder** (private) or **team-approved** file share for `.rpp`, `.cpr`, `.logicx`, etc.
- For collaboration, agree on **“finals only”** in Git or forum attachments, or use the team’s asset ticket system if one exists.

## Reference: comparing to the original

When a scene calls for a *Maniac Mansion*-adjacent feel, use **official soundtrack references** and the team’s style guide—do not copy recordings. These tutorials do not replace **creative direction** from the music lead.

## Next steps

- [Alternatives](alternatives.md) — If you do not use a traditional DAW.
- [File formats & specs](formats.md) — Exact deliverables.
- [Production pipeline](pipeline.md) — When and how to hand files to the team.
