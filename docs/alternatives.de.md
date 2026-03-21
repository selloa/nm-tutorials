# Alternativen zum "Standard"-DAW-Workflow
<!-- translation-sync: {"source": "alternatives.md", "source_hash": "sha256:51a429898cf9dbe57742c1807ad1a7d2915b2b729aba425d66212b655a16a8e3"} -->

Fuer das Projekt zaehlen **Outputs und Prozess**, nicht welches Logo in deiner Toolbar steht. Wenn du die Dateien aus [Dateiformate & Spezifikationen](formats.md) erzeugen und dem [Produktionsablauf](pipeline.md) folgen kannst, kannst du jede der folgenden Herangehensweisen nutzen - mit den jeweiligen Abwaegungen.

## Tracker (OpenMPT, Renoise usw.)

**Gut geeignet fuer:** Chiptune- oder samplelastige Cues, praezise Loop-Kontrolle, eine Arbeitsweise mit geringem Speicherbedarf.

**Worauf du achten solltest:** **Saubere Stems** zu exportieren kann fummelig sein; dokumentiere deine Render-Schritte. Manche Tracker-Workflows setzen standardmaessig auf **IT/XM**-Projektdateien - gib diese nur ab, wenn das Team sie ausdruecklich akzeptiert; meist werden **WAV/FLAC/OGG**-Stems oder Mischungen erwartet.

## Notationsbasiert (MuseScore, Dorico, Sibelius)

**Gut geeignet fuer:** Starke melodische/harmonische Arbeit, Live-Instrumentalparts, Notenmaterial fuer reale Musikerinnen und Musiker.

**Worauf du achten solltest:** Fuer das Spiel werden am Ende trotzdem **Audio-Dateien** oder **MIDI** gemaess Engine-Regeln benoetigt. Fast immer wirst du **Stems oder einen Mix** aus einer DAW oder aus der Audio-Engine der Notationssoftware bouncen. MIDI-Semantik wie Program-Changes und CCs muss dem entsprechen, was der Importer erwartet - pruefe das auf der Format-Seite oder mit der technischen Leitung.

## Hardware + Recorder

**Gut geeignet fuer:** Synth-Jams, Gitarren-Layer, organische Texturen.

**Worauf du achten solltest:** **Rauschboden**, **Stimmung** und **Timing** - vor der Abgabe in einer DAW nachbearbeiten. Gib **nicht geclippte** Aufnahmen ab; der vereinbarte Mastering-/Lautheits-Schritt sollte nur mit Wissen des Teams stattfinden.

## iPad- / mobile Tools

**Gut geeignet fuer:** Ideen unterwegs skizzieren.

**Worauf du achten solltest:** Exportiere **WAV** (oder das vereinbarte Format) in der richtigen Sample-Rate; vermeide verlustbehaftetes **MP3** als einzigen Master, ausser die Pipeline erlaubt das explizit. Uebertrage Dateien in voller Qualitaet, bevor irgendeine Forumskompression dazwischenfunkt.

## Freie und Open-Source-Stacks

**Ardour, LMMS, Audacity (zum Editieren)** koennen alle funktionieren, wenn du:

1. **Organisierte Projekte** und **Stem-Exporte** pflegst.
2. Keine destruktiven Bearbeitungen auf der **einzigen Kopie** einer Aufnahme machst.
3. **Loop-Uebergaenge** nach dem Export testest (siehe Format-Seite).

## Wofuer sollte man sich entscheiden?

| Wenn du... | Dann erwäge... |
|--------|-----------|
| moeglichst schnell Stems erzeugen willst | REAPER, Cubase, Logic |
| Chip-/Retro-Loops schreibst | Tracker + dokumentiertes Render-Rezept |
| fuer Live-Spieler schreibst | Notationssoftware -> DAW-Mixdown |
| nur Audacity hast | Fuer **einfache** Cues machbar; frueh mit der musikalischen Leitung abklaeren |

Wenn du unsicher bist, **frag lieber vor mehreren Wochen Arbeit nach**, statt in eine Toolchain zu investieren, die von den Build-Skripten nicht verarbeitet werden kann.

## Naechste Schritte

- [Dateiformate & Spezifikationen](formats.md)
- [Produktionsablauf](pipeline.md)
