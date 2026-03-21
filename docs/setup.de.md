# Technisches Setup (MIDI-First)
<!-- translation-sync: {"source": "setup.md", "source_hash": "sha256:75c8d69b93e956a0366604254acbcb0e872586c8dadf5e2e8e21dbded9460a70"} -->

Dieser Abschnitt orientiert sich am **aktuellen Community-Workflow** und unterstuetzt vor allem den **Schreib- und Orchestrationsprozess**: zuerst Ideen in einem Tool schreiben, das **MIDI exportieren** kann. Eine DAW ist dafür **nicht** zwingend erforderlich. Wenn du ein anderes Setup verwendest, lies [Alternativen](alternatives.md) und erfülle trotzdem die Anforderungen aus [Dateiformate & Spezifikationen](formats.md). Wenn dir noch Software fehlt, starte mit [Downloads & Links](downloads.md).

## Wichtigste Anforderung: MIDI-Export

Für den Einstieg brauchst du vor allem ein Programm, mit dem du Cues schreiben und als **.mid** exportieren kannst. Das Tool ist frei wählbar.

- **Notationstools** (z. B. MuseScore)
- **Einfache DAWs** (z. B. GarageBand auf macOS)
- **Klassische DAWs** (wenn du dort ohnehin arbeitest)

Entscheidend ist nicht das konkrete Programm, sondern ein **sauberer gemeinsamer Mindeststandard**:

- **MIDI-Export funktioniert** (Standard `.mid`)
- **Klare Taktarten** pro Cue (z. B. 4/4, 3/4)
- **Klare Tempo-Indikationen** (Tempowechsel sind okay, wichtig ist Nachvollziehbarkeit)
- **Ueberschaubare Kanalstruktur** (im Zweifel unter 16 MIDI-Kanaelen halten)
- **Nachvollziehbare Spurnamen** fuer einfache Team-Uebergabe

## Benennung und Projekthygiene

- **Projektordner pro Cue**: `SC01_ExtMansion_Day_v01` usw., passend zur Pipeline-Namenskonvention.
- **Konsistente Bounce-Namen**: `cueId_stemName.wav` (genaues Schema siehe Format-Seite).
- **Textnotizen**: Halte in `README.txt` oder DAW-Markern **Loop-Punkte**, **Intro-Takte** und die **Tempo-Map** fest, falls der Cue nicht schlichtes 4/4 ist.

## Nächste Schritte

- [Alternativen](alternatives.md) - Falls du keine klassische DAW nutzt.
- [Downloads & Links](downloads.md) - Offizielle Download-Links fuer kostenlose, Test- und kostenpflichtige Tool-Optionen.
- [Dateiformate & Spezifikationen](formats.md) - Exakte Deliverables.
- [Produktionsablauf](pipeline.md) - Wann und wie Dateien ans Team gehen.
