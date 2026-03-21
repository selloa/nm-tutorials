# Production pipeline

This is the **human process** around music: how an idea becomes a shippable asset. Adjust names (Discord, forum, ticket system) to match what the *Night of the Meteor* team actually uses when you announce the site.

## Overview

```text
Brief/pitch → WIP share → Review/notes → Final deliverables → QA in build → Integrated
```

## 1. Brief or pitch

Before large effort:

- **Scene / room** ID or design doc reference.
- **Mood**, **tempo feel**, **approx length**, **loop vs one-shot**.
- **References** (links or timestamps)—style, not copied audio.
- **Deadlines** if milestone-driven.

The music lead (or director) **approves the brief** or suggests changes. Unsolicited full soundtracks are hard to integrate without this step.

## 2. Work-in-progress sharing

Share **short** previews early:

- **MP3 or OGG** at modest bitrate is fine for listening.
- State **BPM**, **key**, and whether the clip is **loopable** yet.

Goal: catch **wrong mood** or **technical mismatch** before you polish a dead end.

## 3. Review and revision

Feedback should be **specific** (“too busy under dialog,” “loop seam at bar 17 clicks”). Contributors respond with **versioned** files (`_v03`, etc.).

**Approval** means the music lead (and any code owner for format quirks) sign off on **creative** and **technical** fit.

## 4. Final deliverables

Package exactly what [File formats & specs](formats.md) asks for, typically:

- **Stems** (if required) + **reference stereo mix**.
- **Loop documentation** (bars or samples).
- **Text note** listing filenames and what each is for.

Use the team’s **upload location**—private drive, forum moderator handoff, or issue attachment—not random public hosts with expiry links.

!!! warning "Draft — pending tech verification"

    Replace this section with **concrete** steps: repository path, internal tool name, build command that imports audio, and **who merges** assets into the game branch.

## 5. QA in a test build

Someone runs a **recent build** and checks:

- Levels vs **SFX** and **voice**.
- **Loop** behaviour in the actual room (reverb tails, room transitions).
- **File size** and **decode** hitches on target hardware if relevant.

Bugs go back as **repro steps** (“enter room X, wait for loop 3”).

## 6. Integration and credit

After merge:

- Name appears in **credits** per team policy.
- Source sessions stay archived per **composer + team** agreement (not necessarily public).

## Roles (typical)

| Role | Responsibility |
|------|----------------|
| Contributor | Hit spec, respond to notes, deliver versioned finals. |
| Music lead | Creative direction, final approval, consistency across score. |
| Programmer / tools | Importer limits, loop metadata, codec support. |
| QA / playtest | In-game verification. |

## Forum announcement checklist

When you post the tutorial site to **Maniac Mansion Mania** (or related forums):

1. One short paragraph: **music collaboration is new** compared to art/animation.
2. **Link** to the canonical site URL (from the README).
3. Bullet list: setup, formats, pipeline.
4. **How to volunteer** (reply in thread, DM, Discord, etc.).

## Next steps

- [File formats & specs](formats.md)
- [Glossary](glossary.md)
