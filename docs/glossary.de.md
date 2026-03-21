# Glossar
<!-- translation-sync: {"source": "glossary.md", "source_hash": "sha256:9fc271974f82cacc04bc616ad9969d0aead28fc9c3df6ec10ef3a481b980d98e"} -->

Kurze Definitionen für Begriffe, die in Diskussionen über **Adventure-Game-Audio** und **Community-Remakes** häufig auftauchen.

**Cue**  
Ein einzelnes Musikstück oder Ambient-Bett, das an einen Ort, eine Cutscene oder einen Zustand gebunden ist (z. B. "Tag vs. Nacht").

**Stem**  
Ein Submix-Export, z. B. nur Drums oder nur Harmonie. Damit kann das Team Layer anpassen oder muten, ohne die originale DAW-Session zu öffnen.

**Loop / nahtloser Loop**  
Audio, dessen **Ende** ohne Klick oder Lautheitssprung an den **Anfang** anschließt, damit es in einer Szene beliebig lang laufen kann.

**One-shot**  
Wird einmal von vorne bis hinten abgespielt (kann trotzdem lange ausklingen), ist aber nicht für Endlosschleifen gedacht.

**SCUMM**  
Klassische LucasArts-Adventure-Engine-Familie. Moderne Remakes zeigen SCUMM-Interna nicht unbedingt offen, aber **raumbezogenes** Design und **iMUSE-artige** Ideen prägen die Musiksprache weiterhin.

**iMUSE**  
LucasArts-System für **dynamische** Musikübergänge. Ein Remake nutzt ggf. einfachere **Crossfades** oder **Trigger** - mit dem Team abstimmen.

**Voice-led mix**  
Mix-Ansatz, bei dem **Dialog** klar verständlich bleibt; Musik wird unter Sprachzeilen leiser oder ausgedünnt.

**Sample-Rate**  
Anzahl der Audio-Samples pro Sekunde (z. B. 44.100 Hz). Muss mit den Erwartungen der Engine **konsistent** sein.

**Bit-Tiefe**  
Auflösung jedes einzelnen Samples (z. B. 16-Bit vs. 24-Bit). Beeinflusst Rauschabstand und Dateikompatibilität.

**OGG / Vorbis**  
Häufiges **verlustbehaftetes** Game-Audio-Format; kleiner als WAV. Oft zusammen mit Loop-Metadaten oder engine-seitigen Loop-Punkten genutzt.

**MIDI**  
Notendaten statt Audioaufnahme. Nur relevant, wenn der Wiedergabepfad des Spiels mit **Synths** oder **Soundfonts** arbeitet.

**BPM / Tempo-Map**  
Beats per Minute; eine **Tempo-Map** erlaubt Tempowechsel. Diese Infos helfen, wenn Animationen oder geskriptete Ereignisse auf Musik synchronisiert werden.

**LUFS**  
Loudness Units Full Scale; dient zum Vergleich des **wahrgenommenen** Pegels zwischen Cues. Nicht der einzige wichtige Messwert, aber hilfreich für Konsistenz.

**Asset-Pipeline**  
Die Kette von **Authoring** -> **Export** -> **Import/Build** -> **Runtime**. Formate und Benennung müssen exakt zu dieser Pipeline passen.

---

Zurück zur [Einführung](index.md).
