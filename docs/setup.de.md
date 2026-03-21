# Technisches Setup (Referenz-Workflow)
<!-- translation-sync: {"source": "setup.md", "source_hash": "sha256:d3d46a491155ce8f403e9d86f0ead476040ce3260b861e98ff1857823156eed9"} -->

Dieser Abschnitt beschreibt eine **sinnvolle professionelle Basis**, die sich daran orientiert, wie viele Game-Komponistinnen und -Komponisten arbeiten. Welche DAW du genau verwendest, ist weniger wichtig als **reproduzierbare Exporte**, **saubere Stems** und **vorhersehbare Lautheit**. Wenn du etwas anderes nutzt, lies trotzdem [Alternativen](alternatives.md) und erfuelle weiterhin die Anforderungen aus [Dateiformate & Spezifikationen](formats.md).

## Digital Audio Workstation (DAW)

Waehle eine primaere DAW und bleibe fuer dieses Projekt dabei, damit Session-Recall und Stem-Struktur konsistent bleiben. Hauefige Optionen unter Komponierenden:

- **REAPER** - Schlank, starkes Routing, gut fuer Stem-Bounces und Game-Audio.
- **Cubase / Nuendo** - Verbreitet in europaeischen Game-Audio-Pipelines.
- **Logic Pro** - Sinnvoll, wenn du auf macOS arbeitest und bereits effizient damit bist.
- **FL Studio / Ableton Live** - Absolut moeglich, wenn du diszipliniert bei Stem-Exporten und Dateibenennung bleibst.

Aktuell arbeitet die musikalische Leitung primaer mit **Ableton Live**, bei Bedarf steht auch **Cubase** zur Verfuegung. Entscheidend ist aber vor allem, dass **deine Final-Dateien** der vereinbarten Spezifikation entsprechen.

## Audio-Interface und Monitoring

- Nutze ein Audio-Interface mit **stabilen Treibern** und einem **bekannten Monitoring-Pegel**, damit du nicht in jeder Session Lautstaerken rein nach Gehoer neu einschaetzen musst.
- Pruefe Mischungen auf **Kopfhoerern** und wenn moeglich auf **kleineren Lautsprechern** - Adventure-Game-Musik wird oft ueber Laptop-Speaker und guenstige Earbuds gehoert.
- Halte **Master-Bus-Processing** zurueckhaltend, bis das Team Lautheitsziele festgelegt hat; starkes Limiting erschwert spaetere Anpassungen.

## Sample-Rate und Projekteinstellungen

!!! tip "An die Liefer-Spezifikation anpassen"

    Setze die Sample-Rate deines Projekts auf den Wert, den [Dateiformate & Spezifikationen](formats.md) fuer die finale Lieferung verlangen (haeufig **44.1 kHz** oder **48 kHz**). In der falschen Rate zu arbeiten und erst am Ende zu konvertieren, kann bei manchen Materialien subtile Pitch- oder Timing-Probleme verursachen.

Wenn deine DAW es erlaubt, nimm mit **24 Bit** auf; die finalen Dateien koennen trotzdem 16-Bit-PCM oder komprimierte Formate sein (siehe Format-Seite).

## Stems vs. einzelner Master

![Beispielhafter Stem-Bounce-Aufbau](assets/stem-layout.svg)

Die Integration ins Spiel braucht oft **Flexibilitaet**:

- **Stems** (z. B. Melodie, Harmonie, Bass, Percussion, Atmosphaere) erlauben es dem Team, Layer stummzuschalten, Loops neu aufzubauen oder die Balance anzupassen, ohne dein DAW-Projekt zu oeffnen.
- Ein **einzelner Stereo-Master** ist einfacher, aber unter Zeitdruck schwerer spaeter zu bearbeiten.

Wenn im Briefing nicht ausdruecklich "nur Master" steht, plane damit, **beschriftete Stems plus einen Referenzmix** zu liefern (Stereo-Bounce, der im Spiel "richtig" klingen soll).

## Benennung und Projekthygiene

- **Projektordner pro Cue**: `SC01_ExtMansion_Day_v01` usw., passend zum Benennungsschema aus der Pipeline-Doku.
- **Konsistente Bounce-Namen**: `cueId_stemName.wav` (genaues Muster siehe Format-Seite).
- **Notizen als Text**: Halte ein kurzes `README.txt` oder DAW-Marker fuer **Loop-Punkte**, **Intro-Takte** und die **Tempo-Map** fest, wenn der Cue nicht einfach gerades 4/4 ist.

## Versionskontrolle fuer Sessions

DAW-Projekte sind **binaer und gross** - sie gehoeren in der Regel **nicht** in dieses Doku-Repository.

- Nutze lieber einen **privaten Cloud-Ordner** oder einen vom Team freigegebenen Dateiaustausch fuer `.rpp`, `.cpr`, `.logicx` usw.
- Fuer Zusammenarbeit solltet ihr euch auf **"nur Finals"** in Git oder Foren-Anhaengen einigen, oder das Asset-/Ticket-System des Teams verwenden, falls es eines gibt.

## Referenz: Vergleich mit dem Original

Wenn eine Szene nach *Maniac Mansion* klingen soll oder daran angelehnt ist, nutze **offizielle Soundtrack-Referenzen** und den Style Guide des Teams - kopiere keine bestehenden Aufnahmen. Diese Tutorials ersetzen nicht die **kreative Leitung** durch die musikalische Leitung.

## Naechste Schritte

- [Alternativen](alternatives.md) - Falls du keine klassische DAW nutzt.
- [Dateiformate & Spezifikationen](formats.md) - Die genauen Deliverables.
- [Produktionsablauf](pipeline.md) - Wann und wie Dateien an das Team uebergeben werden.
