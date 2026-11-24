# Mandag 23.11, 10:00–11:30 – Hvordan lærer vi best? + Hvorfor trenger vi klasser?

Uke 2: Objekter og innkapsling. Kollegaen har Clicker-objekter tirsdag (økt 3). Denne økten skal gi studentene *behovet* for klasser før de får løsningen.

Økten er selv bygget slik Lars foreslo: kort forklaring som starter med hvorfor, så en liten oppgave, så felles gjennomgang. Det skjer to ganger. Si det høyt i starten, og spør om det fungerte på slutten.

**Vil du slutte rundt 11:00?** Hopp over runde 2 (10:55–11:20) og gå rett til exit.

## 10:00–10:15 Hvordan lærer vi best?

1. **Ramme (2 min):** Takk Lars for innlegget. Si at dagens økt er et forsøk på formatet han foreslo, og at du vil høre hva de synes på slutten.
2. **Tenk selv (2 min):** Skriv svaret i chatten, ikke si det høyt ennå.
   *Hvilken økt eller aktivitet har du lært mest av så langt, og hvorfor tror du det var det?*
3. **Par eller grupper på 3 (5 min):** Finn én ting som går igjen hos dere. Én i gruppa noterer.
4. **Plenum (5 min):** Hver gruppe sier sin ene ting. Du skriver dem ned synlig, uten å forsvare eller forklare.
5. **Avslutt (1 min):** Si hva du tar videre til Ole og Terje, og at dere ser på listen igjen om noen uker.

Hvis det blir stille: start med deg selv. Hva har *du* lært mest av som student?

## Runde 1: Mange clickere uten klasser

### 10:15–10:25 Hvorfor (forklaring)

- Vis Clicker fra emne 1 i JavaScript: poeng, klikk, og poeng per klikk.
- Spør: *Hva om vi vil ha tre clickere? Eller hundre?*
- Ikke vis løsningen. Poenget er at de skal kjenne problemet selv.

### 10:25–10:45 Oppgave (individuelt eller i par)

Lag Clicker som konsollprogram i C#, **uten klasser**.

1. Én clicker: `c` gir ett poeng, `s` viser poengene, `q` avslutter.
2. Nå skal brukeren ha **tre** clickere og velge hvilken som skal klikkes.

Ekstra: Legg til «poeng per klikk» som kan oppgraderes for 10 poeng.

Det er helt greit å ikke bli ferdig. Målet er å se hvordan koden blir når det er flere.

### 10:45–10:55 Felles gjennomgang

- La 1–2 studenter dele skjerm frivillig og vise hvordan de lagret tre clickere. Dette er Lars sitt punkt 2, i liten skala.
- Spør:
  - Hvor mange variabler trengte du? Hva om det var hundre clickere?
  - Hvilke verdier hører sammen?
  - I JavaScript ville du skrevet `{ points: 0, pointsPerClick: 1 }`. Hva tror du er tilsvarende i C#?

## 10:55–11:00 Pause

## Runde 2: Fra JavaScript-objekt til C# (valgfri)

### 11:00–11:05 Hvorfor (forklaring)

- Vis JavaScript-objektet `{ points: 0, pointsPerClick: 1 }` og en liste med tre slike.
- Spør: *C# vil vite typen til alt. Hvilken type har dette objektet?*
- Ikke vis `class` ennå. Det er tirsdagens tema.

### 11:05–11:15 Oppgave (par)

Uten å skrive kode: Skriv i chatten eller på papir

1. Hvilke verdier har én clicker?
2. Hva kan man *gjøre* med én clicker?
3. Hvilken regel må alltid gjelde? (For eksempel: poengene kan ikke bli negative, og en oppgradering koster poeng.)

### 11:15–11:20 Felles

- Samle svarene. Pek på at spørsmål 1 blir fields, spørsmål 2 blir metoder, og spørsmål 3 blir det klassen skal beskytte.
- Bro til tirsdag: «I morgen gjør dere dette om til en klasse.»

## 11:20–11:30 Exit og spørsmål

- Én setning i chatten: *Fungerte formatet i dag? Hva bør jeg endre neste gang?*
- Åpent for spørsmål om ukens oppgaver på Inside (CharCounter og Match).

## Etter økten

- Noter hva studentene sa i del 1, og send det til Ole og Terje.
- Bruk exit-svarene til å justere onsdag og fredag.
