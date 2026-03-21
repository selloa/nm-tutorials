# Dateiformate & Spezifikationen
<!-- translation-sync: {"source": "formats.md", "source_hash": "sha256:04916bb35456d3f8e38b107cdb75e0b209b34de4879c18b82bcf1eaaba044ca5"} -->

Diese Seite beschreibt, was Beitragende **idealerweise liefern**. Die exakten Anforderungen hängen vom **aktuellen** Audio-Importpfad von *Night of the Meteor* ab (ScummVM-Fork, interne Tools usw.). Alles, was noch nicht mit Programmierung oder Audio-Leitung abgestimmt ist, ist entsprechend markiert.

## Zusammenfassung als Checkliste

| Punkt | Typische Erwartung | Prüfen? |
|------|---------------------|--------|
| Ziel-Container | **WAV** (PCM) und/oder **OGG Vorbis** | **Ja** - Engine-Branch |
| Sample-Rate | **44.1 kHz** oder **48 kHz** (eine projectweite Wahl) | **Ja** |
| Bit-Tiefe | **16-Bit** Integer für WAV-Master, ggf. **24-Bit** nach Teamvorgabe | **Ja** |
| Kanäle | **Mono** für SFX; **Stereo** für Musik, wenn nicht anders vorgegeben | **Ja** |
| Looping | **Nahtlose** Loops mit dokumentierten **Takt-/Beat-** oder **Sample-Punkten** | **Ja** |
| Benennung | `sceneId_cueType_v##.ext` oder Team-Schema | **Ja** |

## PCM (WAV)

**Verwenden, wenn:** Das Team **verlustfreie** Quellen fürs spätere Mastering will oder der Importer WAV verlangt.

- **Non-interleaved** nur exportieren, wenn es ausdrücklich verlangt wird (meist ist interleaved Stereo korrekt).
- **Float-WAV** vermeiden, außer die Pipeline unterstützt es explizit; **16-Bit-PCM** ist der sichere Default.
- **1-2 Sekunden Endstille** nur bei **nicht loopenden** Cues; Loops sollten exakt auf den Zyklus geschnitten sein.

!!! warning "Entwurf - technische Verifikation ausstehend"

    Mit der Audio-/Engine-Verantwortung klären: erlaubte Extensions (`.wav` allein oder auch `.flac`), feste Sample-Rate und ob Metadaten-Chunks (BWF bext, iXML) erhalten bleiben oder verworfen werden.

## Komprimiert (OGG / etc.)

**Verwenden, wenn:** Das ausgelieferte Spiel klein bleiben soll und die Engine Streaming übernimmt.

- Eine **konsistente Qualitätsstufe** (z. B. Vorbis q5-q7) erst setzen, wenn das Team den Standard festlegt.
- Immer eine **verlustfreie Archivkopie** (WAV/FLAC) behalten, außer das Briefing sagt etwas anderes.

!!! warning "Entwurf - technische Verifikation ausstehend"

    Abstimmen, ob Runtime **OGG**, **MP3** oder etwas anderes nutzt und ob Loop-Metadaten (z. B. `LOOPSTART` / `LOOPLENGTH` oder engine-spezifische Tags) nötig sind.

## MIDI (falls relevant)

**Verwenden, wenn:** Das Spiel Musik über einen **Synthesizer**- oder **Soundfont**-Pfad abspielt.

- **Program-** und **Bank**-Zuweisungen in der Dokumentation fixieren.
- **Editorisches SysEx** vermeiden, sofern der Playback-Stack es nicht unterstützt.
- Je nach Importer als **Type 0** oder **Type 1** exportieren.

!!! warning "Entwurf - technische Verifikation ausstehend"

    Viele moderne Remakes setzen nur auf gestreamtes Audio. Vor Abgabe von `.mid`-Dateien klären, ob MIDI überhaupt im Scope ist.

## Loop-Punkte

Loopende Adventure-Cues sollten:

1. **Sauber loopen** - kein Klick, kein Lautheitssprung, kein unschöner Hall-Abschnitt (außer als bewusst harter Loop gestaltet).
2. Dokumentieren, **wie** geloopt wurde: "Beats 5-36", "Samples 88200-396900" oder Screenshot der DAW-Auswahl.
3. Zusätzlich eine **One-shot**-Version liefern, falls die Szene den Cue vom Start ohne Loop spielen soll.

## Lautheit

Game-Mixe sind keine Streaming-Master. Ziel:

- **Konsistente** wahrgenommene Lautheit zwischen Cues in derselben Szene.
- Genug **Headroom**, damit **SFX** und **Voice** nicht mit der Musik kollidieren.

Mit der musikalischen Leitung eine **Referenz** abstimmen (z. B. Short-Term-LUFS-Bereich oder vorhandener Referenz-Cue).

## Dateibenennung

Nutze möglichst **ASCII**-Dateinamen: `A-Z`, `0-9`, `_`, `-`. Leerzeichen vermeiden.

Beispiel (nur illustrativ - **durch offizielles Schema ersetzen**):

```text
RM01_Day_AmbLoop_v02_stem_melody.wav
RM01_Day_AmbLoop_v02_mix.ogg
```

Verwende Revisionsmarker wie **`v02`**, damit klar ist, welche Datei die aktuelle ist.

## Was du nicht schicken solltest

- **MP3** als einzige Quelle, wenn nicht ausdrücklich erlaubt.
- **Proprietäre Projektdateien** als einziges Deliverable (`.cpr`, `.logicx` usw.) - immer mit Audio-Exporten kombinieren.
- **Riesige** unkomprimierte Multitracks ohne Abstimmung; stattdessen im Briefing vereinbarte **Stems** liefern.

## Nächste Schritte

- [Produktionsablauf](pipeline.md) - Wo diese Dateien landen und wer freigibt.
- [Technisches Setup](setup.md) - Projekteinstellungen, die die Abgabe erleichtern.
