# Technisches Setup (Referenz-Workflow)
<!-- translation-sync: {"source": "setup.md", "source_hash": "sha256:d3d46a491155ce8f403e9d86f0ead476040ce3260b861e98ff1857823156eed9"} -->

Dieser Abschnitt beschreibt eine **solide professionelle Basis**, wie sie in vielen Game-Audio-Workflows üblich ist. Welche DAW du nutzt, ist weniger wichtig als **reproduzierbare Exporte**, **saubere Stems** und **vorhersehbare Lautheit**. Wenn du ein anderes Setup verwendest, lies [Alternativen](alternatives.md) und erfülle trotzdem die Anforderungen aus [Dateiformate & Spezifikationen](formats.md).

## Digital Audio Workstation (DAW)

Wähle eine primäre DAW und bleibe im Projekt dabei, damit Session-Recall und Stem-Layout konsistent bleiben. Häufige Optionen:

- **REAPER** - Schlank, starkes Routing, gut für Stem-Bounces und Game Audio.
- **Cubase / Nuendo** - Weit verbreitet in europäischen Game-Audio-Pipelines.
- **Logic Pro** - Sinnvoll, wenn du unter macOS bereits produktiv bist.
- **FL Studio / Ableton Live** - Völlig okay, wenn du bei Stem-Exporten und Benennung diszipliniert bleibst.

Aktuell arbeitet die musikalische Leitung vor allem mit **Ableton Live**, bei Bedarf auch mit **Cubase**. Entscheidend ist, dass **deine Finals** der vereinbarten Spezifikation entsprechen.

## Audio-Interface und Monitoring

- Nutze ein Interface mit **stabilen Treibern** und **reproduzierbarem Monitoring-Pegel**, damit du Lautheit nicht in jeder Session neu raten musst.
- Prüfe Mischungen auf **Kopfhörern** und möglichst auch auf **kleinen Lautsprechern** - Adventure-Musik läuft oft auf Laptop-Speakern oder günstigen Earbuds.
- Halte **Master-Bus-Processing** zurück, bis Lautheitsziele abgestimmt sind; aggressives Limiting erschwert spätere Anpassungen.

## Sample-Rate und Projekteinstellungen

!!! tip "An die Liefer-Spezifikation anpassen"

    Stelle die Projekt-Sample-Rate auf den Wert aus [Dateiformate & Spezifikationen](formats.md) (typisch **44.1 kHz** oder **48 kHz**). Falsche Arbeitsrate plus spätere Konvertierung kann bei manchen Quellen subtile Pitch- oder Timing-Probleme erzeugen.

Wenn möglich, nutze **24-Bit** bei der Aufnahme; die finalen Dateien können trotzdem 16-Bit-PCM oder komprimierte Formate sein (siehe Format-Seite).

## Stems vs. einzelner Master

![Beispielhafter Stem-Bounce-Aufbau](assets/stem-layout.svg)

Für die Spielintegration braucht das Team oft **Flexibilität**:

- **Stems** (z. B. Melodie, Harmonie, Bass, Percussion, Atmosphäre) erlauben Mute von Layern, Loop-Rebuilds oder Balance-Anpassungen ohne Öffnen deines DAW-Projekts.
- Ein **einzelner Stereo-Master** ist einfacher, aber unter Zeitdruck später schwieriger zu bearbeiten.

Wenn das Briefing nicht ausdrücklich "nur Master" sagt, plane mit **beschrifteten Stems plus Referenzmix** (Stereo-Bounce, der im Spiel "richtig" klingen soll).

## Benennung und Projekthygiene

- **Projektordner pro Cue**: `SC01_ExtMansion_Day_v01` usw., passend zur Pipeline-Namenskonvention.
- **Konsistente Bounce-Namen**: `cueId_stemName.wav` (genaues Schema siehe Format-Seite).
- **Textnotizen**: Halte in `README.txt` oder DAW-Markern **Loop-Punkte**, **Intro-Takte** und die **Tempo-Map** fest, falls der Cue nicht schlichtes 4/4 ist.

## Versionskontrolle für Sessions

DAW-Projekte sind **binär und groß** - sie gehören normalerweise **nicht** in dieses Doku-Repository.

- Nutze einen **privaten Cloud-Ordner** oder einen vom Team freigegebenen Austausch für `.rpp`, `.cpr`, `.logicx` usw.
- Für Zusammenarbeit: auf **"nur Finals"** in Git/Forenanhängen einigen oder ein vorhandenes Asset-/Ticket-System nutzen.

## Referenz: Vergleich mit dem Original

Wenn eine Szene stark an *Maniac Mansion* angelehnt ist, nutze **offizielle Soundtrack-Referenzen** und den Team-Styleguide - kopiere keine Aufnahmen. Diese Tutorials ersetzen nicht die **kreative Leitung**.

## Nächste Schritte

- [Alternativen](alternatives.md) - Falls du keine klassische DAW nutzt.
- [Dateiformate & Spezifikationen](formats.md) - Exakte Deliverables.
- [Produktionsablauf](pipeline.md) - Wann und wie Dateien ans Team gehen.
