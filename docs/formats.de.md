# Dateiformate & Spezifikationen
<!-- translation-sync: {"source": "formats.md", "source_hash": "sha256:04916bb35456d3f8e38b107cdb75e0b209b34de4879c18b82bcf1eaaba044ca5"} -->

Diese Seite beschreibt, was Beitragende **idealerweise liefern sollten**. Die genauen Anforderungen haengen vom **aktuellen** Audio-Importpfad von *Night of the Meteor* ab (ScummVM-Fork, interne Tools usw.). Alles, was noch nicht mit der Programmier- oder Audio-Leitung bestaetigt wurde, ist unten entsprechend markiert.

## Zusammenfassung als Checkliste

| Punkt | Typische Erwartung | Pruefen? |
|------|---------------------|--------|
| Finale Container | **WAV** (PCM) und/oder **OGG Vorbis** | **Ja** - Engine-Branch |
| Sample-Rate | **44.1 kHz** oder **48 kHz** (eine projektweite Wahl) | **Ja** |
| Bit-Tiefe | **16-Bit** Integer fuer WAV-Master oder **24-Bit**, falls das Team es verlangt | **Ja** |
| Kanaele | **Mono** fuer SFX; **Stereo** fuer Musik, sofern nicht anders vorgegeben | **Ja** |
| Looping | **Nahtlose** Loops mit dokumentierten **Takt-/Beat-** oder **Sample-Punkten** | **Ja** |
| Benennung | `sceneId_cueType_v##.ext` oder Team-Schema | **Ja** |

## PCM (WAV)

**Verwenden, wenn:** Das Team **verlustfreie** Quellen fuer spaeteres Mastering moechte oder der Importer WAV verlangt.

- Exportiere **non-interleaved** statt **interleaved** nur dann, wenn dies verlangt wird (meist ist interleaved Stereo richtig).
- Vermeide **Float-WAV**, sofern die Pipeline es nicht ausdruecklich unterstuetzt; **16-Bit-PCM** ist fuer Kompatibilitaet die sicherste Standardeinstellung.
- Lasse **1-2 Sekunden** **Stille am Ende** nur dann stehen, wenn der Cue **kein** Loop ist; Loops sollten auf den **exakten** Zyklus zugeschnitten sein.

!!! warning "Entwurf - technische Verifikation ausstehend"

    Mit der **Audio- oder Engine-Verantwortung** des Projekts klaeren: akzeptierte Erweiterungen (`.wav` allein oder auch `.flac`), feste **Sample-Rate** und ob **Metadaten-Chunks** (BWF bext, iXML) vom Importer erhalten oder entfernt werden.

## Komprimiert (OGG / etc.)

**Verwenden, wenn:** Das fertige Spiel klein bleiben soll und Streaming von der Engine uebernommen wird.

- Nutze eine **konsistente Qualitaetsstufe** (z. B. Vorbis q5-q7) erst dann, wenn das Team einen Standard festgelegt hat.
- Behalte immer eine **verlustfreie** Archivkopie (WAV/FLAC) fuer spaetere Remixe, ausser das Briefing sagt etwas anderes.

!!! warning "Entwurf - technische Verifikation ausstehend"

    Klaeren, ob die Runtime **OGG**, **MP3** oder etwas anderes nutzt und ob **Loop-Metadaten** (z. B. `LOOPSTART` / `LOOPLENGTH` in samplebasierten Formaten oder Engine-spezifische Loop-Tags) erforderlich sind.

## MIDI (falls relevant)

**Verwenden, wenn:** Das Spiel Musik ueber einen **Synthesizer**- oder **Soundfont**-Pfad abspielt.

- **Program-** und **Bank**-Zuweisungen in der Dokumentation fixieren.
- **Editorisches SysEx** vermeiden, sofern der Wiedergabe-Stack es nicht unterstuetzt.
- Je nach Importer-Anforderung als **Type 0** oder **Type 1** exportieren.

!!! warning "Entwurf - technische Verifikation ausstehend"

    Viele moderne Remakes nutzen nur **gestreamtes Audio**. Vor der Abgabe von `.mid`-Dateien bestaetigen, ob **MIDI** ueberhaupt im Umfang des Projekts liegt.

## Loop-Punkte

Loopende Adventure-Cues sollten:

1. **Sauber loopen** - kein Klick, kein Lautstaerkesprung, kein unschoen abgeschnittener Hall, ausser dies ist als harter Loop beabsichtigt.
2. Dokumentieren, **wie** geloopt wurde: "Beats 5-36", "Samples 88200-396900" oder ein Screenshot der DAW-Auswahl.
3. Eine **One-shot**-Version mitliefern, falls die Szene den Cue auch vom Anfang an ohne Loop abspielen kann.

## Lautheit

Game-Mixe sind keine Streaming-Plattform-Master. Sinnvoll ist:

- **Konsistente** wahrgenommene Lautheit zwischen Cues in **derselben** Szene oder demselben Raum.
- Genug **Headroom**, damit nachgelagerte **SFX** und **Sprachausgabe** nicht mit der Musik konkurrieren.

Einigt euch mit der musikalischen Leitung auf eine **Referenz** (z. B. ein Short-Term-LUFS-Bereich oder "an diesem bereits verwendeten Cue orientieren").

## Dateibenennung

Verwende moeglichst **ASCII**-Dateinamen: `A-Z`, `0-9`, `_`, `-`. Vermeide Leerzeichen.

Beispielmuster (nur illustrativ - **durch offizielles Schema ersetzen**):

```text
RM01_Day_AmbLoop_v02_stem_melody.wav
RM01_Day_AmbLoop_v02_mix.ogg
```

Nutze Revisionsmarker im Stil **`v02`**, damit Engineers nicht raten muessen, welche Datei die neueste ist.

## Was du nicht schicken solltest

- **MP3** als einzige Quelle, sofern dies nicht ausdruecklich erlaubt wurde.
- **Proprietaere Projektdateien** als *einzige* Lieferung (`.cpr`, `.logicx` usw.) - immer mit Audio-Exporten kombinieren.
- **Sehr grosse** unkomprimierte Multitracks, sofern das Team nicht explizit darum gebeten hat; verwende lieber die im Briefing vereinbarten **Stems**.

## Naechste Schritte

- [Produktionsablauf](pipeline.md) - Wohin diese Dateien gehen und wer sie freigibt.
- [Technisches Setup](setup.md) - Projekteinstellungen, die all das einfacher machen.
