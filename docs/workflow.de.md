# Produktions-Workflow

<!-- translation-sync: {"source": "workflow.md", "source_hash": "sha256:39683e1cd4171d0b3a2b8c1cb5f4d8d03b12db49393aabb1795fcf8eb83b6187"} -->

Diese Seite zeigt den aktuellen Musik-Produktionsworkflow für *Night of the Meteor* als Stufenmodell.

Sie ergänzt den [Produktionsablauf](pipeline.md): Der Ablauf erklärt Übergaben und Freigaben, diese Seite erklärt die eigentliche Musikproduktion von der ersten Idee bis zum finalen Master.

## Reihenfolge der Stufen

```text
Writing -> Preorchestration -> Sound design -> Mixing -> Mastering
```

## 1) Writing

**Ziel:** starke musikalische Ideen entwickeln (Themen, Motive, Harmonie, Rhythmus, dramaturgische Punkte).

**Typische Tools:** MuseScore, Sibelius, DAWs, Tracker und andere MIDI-fähige Tools.

**Workflow-Passung (wichtig):**
- Eine Writing-Idee sollte an einen konkreten Ingame-Einsatz gekoppelt sein (z. B. Szene, Übergang, Animations-/Event-Moment, Zustandswechsel oder anderer Gameplay-Moment).
- Sehr gute Standalone-Musik ohne klare Spielanbindung ist in der Produktion schwer priorisierbar und geht meist nicht direkt in die Orchestrierung.
- Das ist eine Workflow-Priorität, kein hartes kreatives Verbot.

**Freiheit für Arrangement/Orchestrierung:**
- Wenn Material angenommen wird, kann die Orchestrierung/Arrangement es so anpassen oder platzieren, wie es dem Spiel am besten dient.

**Erwartetes Ergebnis für die nächste Stufe:**
- Strukturell klare Cue-Idee.
- Möglichst editierbares Quellprojekt.
- Importierbare MIDI-Datei.

## 2) Preorchestration / Orchestrierungs-Prototyp

**Ziel:** Writing in einen klar arrangierten Szenen-Prototyp überführen.

**Grundregel:** Klarheit vor Hochglanz.

**Praktische Rahmenbedingungen:**
- Arrangement und Rollen klar beschriften.
- Die aktuelle **16-Kanal**-MIDI-Grenze einhalten.

**Erwartetes Ergebnis für die nächste Stufe:**
- Szenentauglicher Prototyp mit klaren Part-Rollen.
- MIDI (max. 16 Kanäle), vorbereitet für Sound-Design.

## 3) Sound Design

**Ziel:** die tatsächliche Klangidentität jedes Cues definieren.

**Aktuelle Richtung:**
- Periodennahe Referenzen kombinieren (OPL-artige Farbe + MT-32-artige Tiefe).
- Ergebnisse so ausarbeiten, dass sie ingame integrierbar sind.

**Erwartetes Ergebnis für die nächste Stufe:**
- Fertiger Cue-Klang mit annähernd finaler interner Balance.
- Exportierbare Assets (typisch WAV oder vereinbarte Zielformate).

## 4) Mixing

**Ziel:** Cues über den gesamten Soundtrack hinweg vereinheitlichen.

**Wann:** sobald Cues stabil genug sind und größere Umschreibungen unwahrscheinlich werden.

**Erwartetes Ergebnis für die nächste Stufe:**
- Projektweite Pegel- und Klangkonsistenz.
- Zusammenhängendes Soundtrack-Verhalten über Szenen hinweg.

## 5) Mastering

**Ziel:** finale Wiedergabe-Übersetzung und Release-Politur.

**Erwartetes Ergebnis:**
- Finale Master, die auf verschiedenen Wiedergabesystemen gut übersetzen.
- Konsistente Lautheit und Gesamtpräsentation für den Release.

## Stufenübergreifende Prinzipien

- Die nächste Stufe soll nicht raten müssen, was die vorherige gemeint hat.
- Klare Benennung und Beschriftung sind Pflicht.
- Timing, Struktur und dramaturgische Absicht sollen früh klar sein.
- Unterschiedliche Tools sind okay, solange die Übergabe kompatibel bleibt.

## Aktueller Stand (Snapshot)

- Es gibt bereits eine große Basis aus Writing-/Demo-Material.
- Der aktive Übergang läuft von Writing zu Preorchestration.
- Sound-Design-Vorbereitung läuft.
- Finale projektweite Mixing-/Mastering-Standards werden später definiert.

## Verwandte Seiten

- [Produktionsablauf](pipeline.md)
- [Technisches Setup](setup.md)
- [Dateiformate & Spezifikationen](formats.md)
