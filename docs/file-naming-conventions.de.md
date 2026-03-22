# Dateinamen für Cutscenes und Cues
<!-- translation-sync: {"source": "file-naming-conventions.md", "source_hash": "sha256:b9dbb3ce8487ba4d223a9e6b6930ffe7f109d36af8a84c0af45d9f9d20f10273"} -->

Durchgängige Dateinamen sagen dir **welches Projekt**, **welche Szene**, **welcher Cue**, **in welcher Pipeline-Phase** du bist und **welche Revision** du gerade siehst - ohne die Datei zu öffnen. Die folgende Konvention ist für *Night of the Meteor* Cutscene- und Szenenmusik gedacht (MuseScore-Grids/Skizzen, ggf. MIDI und WAV-Exporte). Wenn die musikalische oder technische Leitung für ein bestimmtes Deliverable ein anderes Schema vorgibt, gilt das für **Finale**; diese Seite bleibt der Arbeitsalltag-Standard.

*Erstellt: 2026-03-22. Zuletzt aktualisiert: 2026-03-23.*

## Dateinamen-Vorlage

```text
[GAME]_[SCENE]_[CUE]_[STAGE]_B[##]_v[##](_EXP[##])(_TAG).ext
```

Nutze in Namen nur **ASCII**: Buchstaben, Ziffern, `_` und bei Bedarf `-`. Keine Leerzeichen. Optionale Teile stehen in Klammern: weglassen, wenn sie nicht zutreffen.

### Unbekannte Parameter {#unknown-parameters}

Wenn du für ein Segment **noch keinen** Wert hast - oft am Anfang, wenn es **keine finale Szenenliste**, **keine Cue-Nummerierung** oder **keine verbindlichen Szenen-/Cue-IDs** gibt - **lass dieses Segment weg**. Keine Platzhalter wie `TBD`, `UNKNOWN`, `XX` oder vorläufige Nummern, die du später wieder umbenennen müsstest.

Zwischen den Segmenten, die du **wirklich** nutzt, bleibt **je ein** Unterstrich (keine doppelten `__` durch „leere“ Felder). Sobald offizielle IDs feststehen, ergänze sie und benenne in einem Rutsch um, damit der Ordner konsistent bleibt.

**Beispiel** (Spiel und Pipeline-Stufe klar; Szenen-/Cue-Liste noch nicht fix):

```text
NOTM_02_GRID_B01_v01.mscz
```

**Beispiel** (Arbeitstitel für den Cue, noch ohne `SC##` / `CUE##`):

```text
NOTM_SandyLetMeOut_02_GRID_B01_v01.mscz
```

Welche Segmente für eine konkrete Übergabe **Pflicht** sind, kann die musikalische Leitung festlegen (z. B. dass **Finale** immer `SCENE` und `CUE` enthalten). Bis dahin: Unbekanntes weglassen.

## Bedeutung der Teile

| Teil | Rolle | Beispiele |
|------|-------|-----------|
| **GAME** | Kurzer Projektcode | `NOTM` |
| **SCENE** | Szenen-ID | `SC06` |
| **CUE** | Cue innerhalb der Szene (Name oder ID) | `SandyLetMeOut`, `CUE01` |
| **STAGE** | Fester Pipeline-Schritt (siehe unten) | `02_GRID`, `07_MIX` |
| **B##** | Branch / Basis-Timeline | `B01`, `B02` |
| **v##** | Iteration auf demselben Branch | `v01`, `v02` |
| **_EXP##** | Export-Nummer (optional, meist Audio) | `_EXP01`, `_EXP02` |
| **_TAG** | Kurzes, lesbares Label (optional) | `_syncFix`, `_altEnding`, `_IMPL` |
| **ext** | Dateityp | `.mscz`, `.mscx`, `.mid`, `.wav`, … |

### Pipeline-Stufen (fester Satz)

Diese **numerischen Präfixe** sorgen dafür, dass Ordner in Prozess-Reihenfolge sortieren:

| Stage-Token | Typische Verwendung |
|-------------|---------------------|
| `01_TIMING` | Timing / Struktur |
| `02_GRID` | Grid / Gerüst in MuseScore |
| `03_SKETCH` | Skizze / Entwurfs-Arrangement |
| `04_DEMO` | Demo-Qualität für Review |
| `05_COMPOSE` | Kompositions-fokussierte Überarbeitung |
| `06_SOUND` | Sounddesign / produktive Elemente |
| `07_MIX` | Mix |
| `08_MASTER` | Master / final-tauglicher Export |

### Branch `B##` vs. Version `v##`

- **Neues `B##`**, wenn sich die **Grundlage** ändert: Timing, Struktur oder Layout so stark, dass ältere Dateien nicht mehr dieselbe „Timeline“ sind. Beispiel: nach neuem Grid von `B01` auf `B02` wechseln und Iteration bei `v01` neu starten.
- **Neues `v##`**, wenn du auf **derselben Grundlage verfeinerst**: Edits, Fixes, Polish - gleiche strukturelle Absicht, bessere Umsetzung.

### Optionales `_EXP##`

Nutzen, wenn du **mehrere Renders** aus derselben logischen Version exportierst (verschiedene Bounces, schnelle A/B-Exporte, Stem-Varianten). Für genau einen klaren Export pro `v##` nicht nötig.

### Optionales `_TAG`

Kurzes **ASCII**-Suffix für die Absicht: `_IMPL` für implementierungsreif, `_syncFix` nach Bildsync, `_altEnding` für Alternativen. Tags **kurz** und innerhalb einer Szene **einheitlich** halten, damit Namen scannbar bleiben.

### Dateiendungen

| Endung | Typische Stufe |
|--------|----------------|
| `.mscz` | `02_GRID`, `03_SKETCH` (MuseScore komprimiert; oft Standard-Speicherformat) |
| `.mscx` | `02_GRID`, `03_SKETCH` (MuseScore unkomprimiert) |
| `.mid` | `05_COMPOSE` (falls MIDI im Scope ist) |
| `.mp3` | Schnelle Hörproben / WIP-Shares (für vereinbarte Pipeline-**Finale** lieber **WAV** — siehe [formats](formats.md)) |
| `.wav` | `04_DEMO` bis `08_MASTER` (und sonstiges Audio) |

## Beispiele

Die Namen beziehen sich auf **Cutscene 6** (Labor / Sandy — *let me out of here*). In der Praxis tauchen oft Leerzeichen, `Cutscene_6`, `v1` statt `v01` oder gemischte Endungen auf; unten ist **dieselbe Arbeit**, aber an diese Konvention angeglichen (`SC06`, `SandyLetMeOut`, zweistellige `B`/`v`, nur Unterstriche).

**Timing-Notizen** (Text oder Tabellenexport — bei Iteration trotzdem `B`/`v` nutzen):

```text
NOTM_SC06_SandyLetMeOut_01_TIMING_B02_v01.txt
```

**Grid in MuseScore plus schneller MP3-Hörprobe** (gleiche logische Version für Partitur und Bounce):

```text
NOTM_SC06_SandyLetMeOut_02_GRID_B01_v01.mscz
NOTM_SC06_SandyLetMeOut_02_GRID_B01_v01.mp3
```

**Grid neu aufgesetzt** (neue Grundlage nach Timing-/Strukturwechsel — `B` erhöhen, `v` bei `01` neu):

```text
NOTM_SC06_SandyLetMeOut_02_GRID_B02_v01.mscz
```

**Skizzen-Stufe** (MP3-Iterationen, Partitur an eine Version angeglichen):

```text
NOTM_SC06_SandyLetMeOut_03_SKETCH_B01_v01.mp3
NOTM_SC06_SandyLetMeOut_03_SKETCH_B01_v02.mp3
NOTM_SC06_SandyLetMeOut_03_SKETCH_B01_v02.mscz
NOTM_SC06_SandyLetMeOut_03_SKETCH_B01_v03.mp3
```

**Mehrere WAV-Render derselben Version** (optional `_EXP##`):

```text
NOTM_SC06_SandyLetMeOut_03_SKETCH_B01_v02_EXP01.wav
NOTM_SC06_SandyLetMeOut_03_SKETCH_B01_v02_EXP02.wav
```

**Spätere Pipeline** (Beispiel — Branch `B02` wird weitergenommen):

```text
NOTM_SC06_SandyLetMeOut_04_DEMO_B02_v03_IMPL.wav
NOTM_SC06_SandyLetMeOut_06_SOUND_B02_v02.wav
NOTM_SC06_SandyLetMeOut_07_MIX_B02_v01.wav
NOTM_SC06_SandyLetMeOut_08_MASTER_B02_v01.wav
```

(Bei Tags den Unterstrich beibehalten: im Muster ist `_IMPL` das `_TAG`, z. B. `..._v03_IMPL.wav`.)

## Kurzregeln

1. **Stufen sind fix** — immer eine von `01_TIMING` … `08_MASTER`; keine neuen Stage-Tokens ohne Team-Abstimmung.
2. **`B##` = neue Grundlage** — erhöhen, wenn Timing oder Struktur ältere Branches vergleichsweise obsolet machen.
3. **`v##` = Iteration** — erhöhen bei Verfeinerungen auf demselben Branch.
4. **Unbekanntes Segment → weglassen** — fehlen Szene, Cue oder ein anderes Stück noch, entfällt es im Namen (siehe [Unbekannte Parameter](#unknown-parameters) oben); keine erfundenen IDs oder Platzhalter.

**Mentales Modell:** *Stage* = wo du in der Pipeline bist; *B* = welche Timeline; *v* = wie weit auf dieser Timeline; *EXP* = welcher Export dieser Version.

## Verwandte Seiten

- [Dateiformate & Spezifikationen](formats.md) — WAV/OGG, Loops, Lautheit.
- [Produktionsablauf](pipeline.md) — WIP-Übergabe und Review.
- [Technisches Setup](setup.md) — DAW und Versionsgewohnheiten.
