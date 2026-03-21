# Produktionsablauf
<!-- translation-sync: {"source": "pipeline.md", "source_hash": "sha256:1304332ab0befb11848d5b8b1a54c3a61724575700834001eef72fecc6014922"} -->

Diese Seite beschreibt den **menschlichen Prozess** rund um die Musik: wie aus einer Idee ein einsatzfaehiges Asset wird. Passe Namen wie Discord, Forum oder Ticketsystem an die Werkzeuge an, die das *Night of the Meteor*-Team tatsaechlich nutzt, wenn die Seite angekuendigt wird.

## Ueberblick

```text
Briefing/Pitch -> WIP teilen -> Review/Notizen -> Finale Deliverables -> QA im Build -> Integriert
```

## 1. Briefing oder Pitch

Vor groesserem Aufwand:

- **Szene / Raum**-ID oder Verweis auf das Design-Dokument.
- **Stimmung**, **Tempo-Gefuehl**, **ungefaehre Laenge**, **Loop oder One-shot**.
- **Referenzen** (Links oder Zeitstempel) - Stil, keine kopierte Musik.
- **Deadlines**, falls an Meilensteinen orientiert gearbeitet wird.

Die musikalische Leitung (oder Regie) **gibt das Briefing frei** oder schlaegt Aenderungen vor. Unaufgeforderte komplette Soundtracks lassen sich ohne diesen Schritt nur schwer integrieren.

## 2. Teilen von Work-in-Progress-Versionen

Teile frueh **kurze** Vorschauen:

- **MP3 oder OGG** mit moderater Bitrate reicht zum Anhoeren.
- Nenne **BPM**, **Tonart** und ob der Clip bereits **loopbar** ist.

Ziel: **falsche Stimmung** oder **technische Abweichungen** erkennen, bevor du zu viel Arbeit in eine Sackgasse investierst.

## 3. Review und Ueberarbeitung

Feedback sollte **konkret** sein ("unter Dialog zu dicht", "Loop-Uebergang in Takt 17 klickt"). Beitragende reagieren mit **versionierten** Dateien (`_v03` usw.).

**Freigabe** bedeutet, dass die musikalische Leitung (und gegebenenfalls zustaendige Code-Verantwortliche fuer Formatbesonderheiten) sowohl die **kreative** als auch die **technische** Passung bestaetigen.

## 4. Finale Deliverables

Paketiere genau das, was [Dateiformate & Spezifikationen](formats.md) verlangen, typischerweise:

- **Stems** (falls benoetigt) plus **Stereo-Referenzmix**.
- **Loop-Dokumentation** (Takte oder Samples).
- **Textnotiz** mit Dateinamen und Zweck der einzelnen Dateien.

Nutze den **Upload-Ort** des Teams - privates Laufwerk, Uebergabe ueber Forumsmoderation oder Issue-Anhang - und keine zufaelligen oeffentlichen Hoster mit ablaufenden Links.

!!! warning "Entwurf - technische Verifikation ausstehend"

    Diesen Abschnitt spaeter durch **konkrete** Schritte ersetzen: Repository-Pfad, interner Tool-Name, Build-Befehl fuer den Audio-Import und **wer** die Assets in den Game-Branch uebernimmt.

## 5. QA in einem Test-Build

Jemand testet einen **aktuellen Build** und prueft:

- Pegel im Verhaeltnis zu **SFX** und **Sprachausgabe**.
- **Loop-Verhalten** im eigentlichen Raum (Hallfahnen, Raumwechsel).
- **Dateigroesse** und **Decode-Ruckler** auf der Zielhardware, falls relevant.

Bugs gehen mit **Reproduktionsschritten** zurueck ("Raum X betreten, auf Loop 3 warten").

## 6. Integration und Credits

Nach dem Merge:

- Name erscheint gemaess Team-Richtlinie in den **Credits**.
- Quelldateien und Sessions bleiben gemaess Vereinbarung zwischen **Komponist/in und Team** archiviert (nicht zwingend oeffentlich).

## Rollen (typisch)

| Rolle | Verantwortung |
|------|----------------|
| Beitragende | Spezifikation treffen, auf Feedback reagieren, versionierte Finals liefern. |
| Musikalische Leitung | Kreative Richtung, finale Freigabe, Konsistenz ueber den gesamten Score. |
| Programmierung / Tools | Importer-Grenzen, Loop-Metadaten, Codec-Unterstuetzung. |
| QA / Playtest | Verifikation im Spiel. |

## Checkliste fuer den Forenpost

Wenn du die Tutorial-Seite bei **Maniac Mansion Mania** (oder verwandten Foren) postest:

1. Ein kurzer Absatz: **Musik-Zusammenarbeit ist neu** im Vergleich zu Art/Animation.
2. **Link** auf die kanonische Site-URL (aus der README).
3. Stichpunktliste: Setup, Formate, Produktionsablauf.
4. **Wie man mitmacht** (Antwort im Thread, DM, Discord usw.).

## Naechste Schritte

- [Dateiformate & Spezifikationen](formats.md)
- [Glossar](glossary.md)
