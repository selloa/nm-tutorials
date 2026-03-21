# Music production workflow summary

This file is a working source document for the tutorial site. It summarizes the current music pipeline, the tools people can use, and what each stage must be able to produce for the next one.

It is not written as final article prose yet. The goal is to capture the real workflow first, then shape that into public-facing tutorial pages later.

## Purpose

The project does not depend on one single piece of software. What matters is that each stage produces material that the next stage can use without confusion or technical cleanup.

The current production order is:

1. Writing
2. Preorchestration / orchestration prototype
3. Sound design
4. Mixing
5. Mastering

## Stage overview

| Stage | Main goal | Acceptable tools | Must produce |
|------|-----------|------------------|--------------|
| Writing | Create the musical idea | MuseScore, Sibelius, any DAW, GarageBand, trackers, other MIDI-capable tools | Importable MIDI with clear structure |
| Preorchestration | Turn the idea into a clear arranged demo | Notation software or any DAW | MIDI with max 16 channels, clear roles, scene-ready prototype |
| Sound design | Build the actual sonic identity of the track | DAW plus emulation / synthesis tools | Finished track with defined sound and near-final internal balance |
| Mixing | Unify the soundtrack across cues | DAW such as Cubase, Ableton, REAPER | Balanced project-wide mixes |
| Mastering | Final playback translation across devices | Human mastering chain or AI mastering | Final polished release masters |

## I. Writing

### Goal

The writing stage is about composition first: themes, motifs, melodies, harmonies, rhythm, dramatic beats, and the overall musical idea for a scene.

### Who can contribute here

Because this is a community-made game, the writing stage is intentionally open. This is the most accessible entry point into the music pipeline, and in principle anyone can contribute ideas here.

The project leads are heavily involved in writing as well, but they can also take community-written material and:

- Help flesh it out further
- Develop it themselves
- Move it into the production pipeline in a more formal way

This is important for readers to understand: people do not need to be finished composers or arrangers to contribute meaningfully. A strong musical idea can already be valuable at the writing stage.

### Current recommended tool

The current preferred writing tool is **MuseScore** because it is free and open-source. It produces `.mscz` files and, most importantly, MIDI files.

MuseScore is especially suitable for people who are comfortable with sheet music and like writing in a notation environment.

### What actually matters

For the workflow, the only essential requirement at this stage is that the music can eventually be exported as an **importable MIDI file**.

That means contributors are not locked to MuseScore. Music can also be written in:

- Any DAW
- GarageBand
- Older MIDI tracker workflows
- Sibelius
- Other notation software

If someone wants to work directly with the current lead workflow, MuseScore is the easiest common ground. Sibelius is also workable. MuseScore was chosen for the project because its free and open-source nature fits the spirit of a community-made fan game.

### Writing-stage conventions

The MIDI coming out of the writing stage should follow a few practical rules:

- Use proper time signatures where possible.
- Use clear tempo indications.
- Keep the music aligned to the grid to a reasonable degree.
- Treat free keyboard recordings without click or metronome as sketches unless they are cleaned up afterward.

Freely played ideas are absolutely allowed and can still be inspiring. These notes do not exist to restrict creativity. They only describe the current workflow and what makes later production easier.

If someone wants to contribute in a way that fits the present pipeline cleanly, writing should already be prepared with later production in mind.

### Writing-stage result

The output of this stage should be:

- A musical idea that is structurally clear
- An editable source file if possible (`.mscz`, `.sib`, DAW project, etc.)
- An importable MIDI export that can move into preorchestration

## II. Preorchestration / orchestration prototype

### Goal

This stage takes the initial writing and turns it into a strong pre-demo for the scene. The purpose is not final sound quality yet. The purpose is clarity.

If writing still contains ideas in a more sketch-like form, preorchestration should make those ideas very clear and very obvious.

Through the orchestration, the music should clearly communicate:

- Leitmotifs and motivic work
- Melody
- Harmonic progression
- Rhythmic structure
- What is lead material
- What is bass material
- What is harmonic support
- What is rhythmic support
- What kind of character or patch style a line suggests

The sound can still be basic at this point. What matters is that the arrangement is strong and understandable enough for sound design to take over without having to rewrite the piece.

This is also the stage where the project's actual composers and arrangers need to come in more directly. Community writing can feed this phase, but preorchestration is where those ideas are shaped into something the production pipeline can reliably build on.

### Where this can happen

Preorchestration can happen either:

- In proper notation software
- In any DAW

### Core rule: clarity over polish

This stage does not need overproduced tracks. It needs a clear prototype of what the piece is meant to become after sound design.

To support later work:

- Every track should be clearly labeled.
- Every part should have an obvious role.
- Tracks should be sorted in a sensible way.

The current personal workflow still sorts material somewhat like a classical orchestra, but this may later change to a strict 16-channel structure to match MIDI limits more directly.

### Important technical limitation

Preorchestration must happen within **no more than 16 tracks / channels**.

This is an important current rule. A more detailed fixed channel assignment will be defined later, once the first sound design prototype is finished.

### What should be clear by the end of this stage

The preorchestration should make the following clear:

- Main motives
- Harmonic flow
- Melodic lines
- Drum or groove patterns
- Story beats and dramatic timing
- The general intended function of the cue in the scene

The exact final sound is not yet important. It is good if the mockup is already close to the intended vision, but the main requirement is that the arrangement communicates what the music needs to do.

It is better to give the sound designer too many useful options than too few. In other words, it is usually better if sound design can remove material rather than being forced to compose missing material.

### Preorchestration result

The output of this stage should be:

- A MIDI file with a maximum of 16 channels
- Clearly labeled parts with sensible sorting
- A convincing and scene-appropriate pre-demo
- Timing and musical structure that could already function in-game in principle

## III. Sound design

### Goal

This stage defines the actual sonic identity of the soundtrack.

The aim is not only to make the tracks sound better, but to shape a distinct aesthetic that fits both the source material and the modern audience.

### Aesthetic direction

The project is trying to build its sound with the sound world of the era in mind.

Two major references define the direction:

1. **Yamaha OPL2**
2. **Roland MT-32**

#### OPL2 side

The OPL2 chip became iconic through many keyboards of the time, but above all through home computer sound cards such as Sound Blaster and AdLib. That sound world is deeply tied to how many people remember classic adventure games.

Using that palette helps trigger nostalgia and gives the soundtrack a period-authentic game-audio flavor.

#### MT-32 side

The Roland MT-32 is equally important because many LucasArts titles were originally written for it, and other playback versions were often derived from that musical base.

Its sound quality is far beyond OPL2 in terms of richness and production value, and it was already part of the original *Day of the Tentacle* experience.

Using the MT-32 palette keeps the project strongly connected to the original sound design heritage of that game.

### Why combine both

The project does not want to copy only one historical playback system.

Instead, the goal is to combine:

- The cartoony charm and nostalgia of OPL2
- The depth, fidelity, and historical relevance of the MT-32

This hybrid approach should make the soundtrack feel both nostalgic and new: respectful of the past, but not trapped by it.

That is especially fitting for *Night of the Meteor*, which grows out of *Maniac Mansion* and *Day of the Tentacle* while still needing its own musical identity.

### Current practical setup

The current working setup is software-based and uses:

- **Ableton Live** (paid DAW)
- **Munt VST** (free MT-32 emulation)
- **portaFM** (paid, used to shape OPL-style sound tables)

There is also real Roland hardware available and there may later be ways to route music through real hardware modules for capture. That is not part of the active workflow right now.

At the moment, the project is working with emulation and software only.

### How outside contributors can join this stage

Two paths are currently possible:

#### A. Extend the existing setup

Use any DAW and build on the current approach. For example:

- REAPER as a lower-cost or accessible DAW option
- Munt or similar MT-32 tools
- portaFM
- Free OPL alternatives
- Sforzando with an OPL2 soundfont

#### B. Bring your own sound-design pipeline

If someone is already an experienced sound designer, they do not need to copy the current setup exactly.

Instead, they should:

- Study how preorchestration MIDI files are prepared
- Take the 16-channel MIDI layout that preorchestration is trying to adhere to seriously
- Make sure their own pipeline can ingest that material cleanly
- Build a setup that can reliably accept those kinds of MIDI files as input
- Help define how preorchestration should be organized so sound design can work more effectively

The larger goal is to build a sound-design pipeline that becomes somewhat independent from where the writing currently stands. Once a cue has been finished at the preorchestration stage in the agreed 16-channel structure, it should be possible to run it through the existing sound-design pipeline, adjust it as needed, and export it as WAV audio.

In that sense, outside sound designers can contribute not only by designing sounds, but also by helping define a reusable system that later orchestrated cues can pass through more efficiently.

### Sound-design result

The output of this stage should be:

- Finished tracks with defined sonic identity
- Music that is close to the sound designer's intended internal mix
- Assets that can be integrated into the game, either by replacing earlier prototype material or through collaboration with programming on improved integration

Sound design should leave the track close enough to final that mixing mainly needs to unify the soundtrack across the whole game rather than solve unresolved arrangement or sound problems.

## IV. Mixing

### Goal

Mixing is the stage where the soundtrack is balanced as a whole.

This will happen only once cues are far enough along that they are unlikely to change heavily. It makes little sense to do final mixing while the score is still being actively rewritten or re-sound-designed.

### Current status

This stage is not yet active in a final project-wide sense.

Right now, mixing and mastering are only happening in a temporary, non-final way. The expectation is that proper mixing will become relevant later, especially once more important cues such as cutscenes approach completion.

### Likely tools

Possible DAWs for mixing include:

- Cubase
- Ableton Live
- REAPER

### Mixing result

The output of this stage should be:

- Balanced music across the entire project
- Better consistency from cue to cue
- A soundtrack that behaves as one body of work instead of many separate demos

## V. Mastering

### Goal

Mastering is the final polish stage. It should ensure that the soundtrack translates well across different playback systems and feels complete as a finished release product.

### Current expectation

If the project reaches this stage, it may be handled by AI-assisted mastering unless a dedicated mastering engineer joins the community.

For the project's practical needs, that is considered acceptable. By the time the game is ready for release, AI mastering is expected to be more than capable of giving the soundtrack consistent and strong playback quality.

### Mastering result

The output of this stage should be:

- Final masters that translate well on full stereo systems
- Good playback on headphones, laptops, and other everyday devices
- A final quality lift that makes the soundtrack feel release-ready

## Current production status

At the moment:

- Around 200 demos have been produced in the initial writing stage.
- The workflow is slowly shifting from writing into preorchestration.
- Sound design preparation is underway.
- Final project-wide mixing and mastering decisions are intentionally deferred until the game is much closer to release.

## Cross-stage principles

These principles apply across the whole workflow:

- The next stage should not have to guess what the previous stage meant.
- Clear labeling is essential.
- Timing, structure, and dramatic purpose should be clear as early as possible.
- Contributors may use different tools, but must still produce handoff-friendly outputs.
- The workflow is descriptive, not dogmatic: people are free to work differently, but this is the current process for meaningful integration into the project's active music pipeline.

## Open points to define later

Some parts of the workflow are intentionally still open:

- Exact channel assignment for the 16-channel preorchestration layout
- More precise naming conventions
- Exact integration steps into the game code
- Final mixing standards across the soundtrack
- Final mastering approach once release gets closer

## Why this file should come before the article

This summary should exist before writing the public tutorial article because it separates:

- The real workflow
- The current technical limitations
- The aspirational future workflow
- The contributor-facing explanation

That makes it much easier to later write cleaner articles about setup, formats, production stages, and contributor onboarding without losing the actual intent of the process.
