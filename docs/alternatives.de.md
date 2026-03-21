# Alternativen zum "Standard"-DAW-Workflow
<!-- translation-sync: {"source": "alternatives.md", "source_hash": "sha256:ca74edbf909db5432fbf1e3ab294d39b445957dd9575dc599a707352990f5467"} -->

Für das Projekt zählen **Output und Prozess**, nicht das Logo deiner DAW. Wenn du die Anforderungen aus [Dateiformate & Spezifikationen](formats.md) erfüllst und dem [Produktionsablauf](pipeline.md) folgst, sind auch alternative Setups möglich - mit den jeweiligen Trade-offs. Für Tool-Installer siehe [Downloads & Links](downloads.md).

## Tracker (OpenMPT, Renoise usw.)

**Gut geeignet für:** Chiptune- oder samplelastige Cues, präzise Loop-Kontrolle, ressourcenschonende Arbeitsweise.

**Worauf du achten solltest:** Saubere Stem-Exporte können aufwendig sein; dokumentiere deinen Render-Prozess. Manche Tracker-Workflows nutzen primär **IT/XM**-Projektdateien - gib diese nur ab, wenn das Team sie explizit akzeptiert. Üblicherweise werden **WAV/FLAC/OGG**-Stems oder Mixe erwartet.

## Notationsorientiert (MuseScore, Dorico, Sibelius)

**Gut geeignet für:** Starke melodische/harmonische Arbeit, Live-Instrumente, Notensatz für Musikerinnen und Musiker.

**Worauf du achten solltest:** Die Spielabgabe bleibt in der Regel **Audio-Datei** oder **MIDI** gemäß Engine-Regeln. Meist brauchst du am Ende **Stems oder einen Mixdown** aus DAW oder Notations-Engine. MIDI-Semantik (Program-Changes, CCs) muss zum Importer passen - auf der Format-Seite bzw. mit der technischen Leitung prüfen.

## Hardware + Recorder

**Gut geeignet für:** Synth-Jams, Gitarren-Layer, organische Texturen.

**Worauf du achten solltest:** **Rauschboden**, **Stimmung** und **Timing** - vor Abgabe in einer DAW nachbearbeiten. Liefere **unclipped** Aufnahmen; Mastering-/Lautheitsschritte nur in Abstimmung mit dem Team.

## iPad- / mobile Tools

**Gut geeignet für:** Unterwegs Ideen skizzieren.

**Worauf du achten solltest:** In **WAV** (oder vereinbartem Format) mit korrekter Sample-Rate exportieren; kein verlustbehaftetes **MP3** als einziges Master, außer die Pipeline erlaubt es explizit. Dateien in voller Qualität übertragen, bevor Forum-Kompression eingreift.

## Freie und Open-Source-Stacks

**Ardour, LMMS, Audacity (zum Editieren)** funktionieren, wenn du:

1. Projekte sauber organisierst und zuverlässig Stems exportierst.
2. Keine destruktiven Edits auf der **einzigen** Aufnahme-Kopie machst.
3. Loop-Nähte nach dem Export prüfst (siehe Format-Seite).

## Entscheidungshilfe

| Wenn du... | Dann erwäge... |
|--------|-----------|
| schnell Stems produzieren willst | REAPER, Cubase, Logic |
| Chip-/Retro-Loops schreibst | Tracker + dokumentiertes Render-Rezept |
| für Live-Spieler schreibst | Notationssoftware -> DAW-Mixdown |
| nur Audacity hast | Für **einfache** Cues machbar; früh mit der musikalischen Leitung abstimmen |

Wenn du unsicher bist, lieber **früh nachfragen**, statt Wochen in eine Toolchain zu investieren, die von den Build-Skripten nicht verarbeitet werden kann.

## Nächste Schritte

- [Dateiformate & Spezifikationen](formats.md)
- [Produktionsablauf](pipeline.md)
- [Downloads & Links](downloads.md)
