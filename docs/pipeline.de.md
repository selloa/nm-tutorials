# Produktionsablauf
<!-- translation-sync: {"source": "pipeline.md", "source_hash": "sha256:3378ef25977f67e21f6b0652070041313f42fba34b2e161d27b73255c4948cbe"} -->

Diese Seite beschreibt den **menschlichen Prozess** rund um die Musik: wie aus einer Idee ein veröffentlichbares Asset wird.

## Überblick

```text
Briefing/Pitch -> WIP teilen -> Review/Notes -> Finale Deliverables -> QA im Build -> Integriert
```

## 1. Briefing oder Pitch

Vor größerem Aufwand klären:

- **Szene-/Raum-ID** oder Referenz auf ein Design-Dokument.
- **Geplanter Ingame-Anker** (Szene, Übergang, Animations-/Event-Moment oder Spielzustand).
- **Stimmung**, **Tempo-Charakter**, **ungefähre Länge**, **Loop vs. One-shot**.
- **Referenzen** (Links oder Timecodes) als Stilhinweis, nicht als Kopiervorlage.
- **Deadline**, falls an Milestones gekoppelt gearbeitet wird.

Die musikalische Leitung (oder Regie) **gibt das Briefing frei** oder schlägt Anpassungen vor. Ungefragte komplette Soundtracks lassen sich ohne diesen Schritt meist schwer integrieren.

Wenn ein Cue noch keine konkrete Spielanbindung hat, kann er trotz guter Musik zunächst zurückgestellt werden. Arrangement-/Orchestrierungsaufwand wird für Ideen priorisiert, die bereits mit konkreten Game-Elementen verknüpft sind.

## 2. Work in Progress teilen

Teile früh **kurze** Vorschauen:

- **MP3 oder OGG** mit moderater Bitrate reicht für Feedback.
- Nenne **BPM**, **Tonart** und ob der Ausschnitt bereits **loopbar** ist.

Ziel: **falsche Stimmung** oder **technische Fehlrichtung** früh finden, bevor zu viel Zeit in einen falschen Ansatz fließt.

## 3. Review und Überarbeitung

Feedback sollte **konkret** sein ("unter Dialog zu dicht", "Loop-Naht in Takt 17 klickt"). Beitragende reagieren mit **versionierten** Dateien (`_v03` usw.).

**Freigabe** heißt: Musikalische Leitung (und bei Formatdetails ggf. Code-Verantwortliche) bestätigen sowohl **kreative** als auch **technische** Eignung.

## 4. Finale Deliverables

Liefere exakt das, was [Dateiformate & Spezifikationen](formats.md) verlangen, typischerweise:

- **Stems** (falls gefordert) plus **Stereo-Referenzmix**.
- **Loop-Dokumentation** (Takte oder Samples).
- **Textnotiz** mit Dateinamen und Zweck jeder Datei.

Nutze den vom Team vorgesehenen **Upload-Ort** - privates Laufwerk, moderierte Forenübergabe oder Issue-Anhang - statt zufälliger Filehoster mit Ablaufdatum.

!!! warning "Entwurf - technische Verifikation ausstehend"

    Diesen Abschnitt später mit **konkreten Schritten** füllen: Repository-Pfad, interner Tool-Name, Build-Befehl für Audio-Import und **wer** in den Game-Branch merged.

## 5. QA im Test-Build

Jemand prüft in einem **aktuellen Build**:

- Pegel im Verhältnis zu **SFX** und **Voice**.
- **Loop-Verhalten** im Zielraum (Hallfahnen, Raumwechsel).
- **Dateigröße** und mögliche **Decode-Hänger** auf Zielhardware.

Bugs gehen mit **klaren Repro-Schritten** zurück ("Raum X betreten, auf Loop 3 warten").

## 6. Integration und Credits

Nach dem Merge:

- Nennung in den **Credits** nach Teamrichtlinie.
- Archivierung der Sessions gemäß Vereinbarung zwischen **Komponist/in und Team** (nicht zwingend öffentlich).

## Rollen (typisch)

| Rolle | Verantwortung |
|------|----------------|
| Beitragende | Spezifikation treffen, Notes umsetzen, versionierte Finals liefern. |
| Musikalische Leitung | Kreative Richtung, finale Freigabe, Konsistenz über den gesamten Score. |
| Programmierung / Tools | Importer-Grenzen, Loop-Metadaten, Codec-Support. |
| QA / Playtest | Ingame-Verifikation. |

## Checkliste für den Forenpost

Wenn du die Tutorial-Seite bei **Maniac Mansion Mania** (oder ähnlichen Foren) vorstellst:

1. Kurzer Absatz: **Musik-Zusammenarbeit ist neu** im Vergleich zu Art/Animation.
2. **Link** auf die kanonische Site-URL (aus der README).
3. Stichpunktliste: Setup, Formate, Pipeline.
4. **Wie man mitmacht** (auf die offiziellen Kontakt- und Mitmachkanäle verweisen).

## Nächste Schritte

- [Dateiformate & Spezifikationen](formats.md)
- [Glossar](glossary.md)
