# Gruppeoppgave: Stempelkortet

Uke 2: Objekter og innkapsling. Asynkron oppgave i grupper på 3.

## Mål

Etter oppgaven skal du kunne:
- lage en klasse som beskytter sine egne regler
- forklare hvorfor noe er `private` og noe er `public`
- finne svakheter i en klasse ved å prøve å bryte reglene utenfra

## Situasjonen

En kafé vil ha et digitalt stempelkort. Kunden får ett stempel per kaffe. Med 10 stempler kan kunden løse inn en gratis kaffe.

## Reglene klassen skal beskytte

1. Hvert kjøp gir nøyaktig ett stempel.
2. En gratis kaffe kan bare løses inn når kortet har minst 10 stempler.
3. Når en gratis kaffe løses inn, trekkes 10 stempler.
4. Antall stempler kan ikke endres direkte utenfra, og det kan aldri bli negativt.
5. Kortet må ha et eiernavn som ikke er tomt. Er navnet tomt, kaster konstruktøren en `ArgumentException`.

## Slik jobber dere

Dere jobber når det passer for gruppa, men følg fristene. All kommunikasjon skjer i gruppas tråd på Discord.

| Del | Hva | Frist |
|---|---|---|
| 1 | Analyse uten kode | [dato] |
| 2 | Lag klassen | [dato] |
| 3 | Bryt reglene til en annen gruppe | [dato] |
| 4 | Refleksjon, hver for seg | [dato] |

## Del 1: Analyse uten kode

Svar sammen i gruppetråden før dere skriver kode:
1. Hvilke verdier må kortet huske?
2. Hva skal man kunne *gjøre* med kortet?
3. Hvilke av reglene over handler om verdiene, og hvilke handler om handlingene?
4. Hvem skal kunne *lese* antall stempler? Hvem skal kunne *endre* det?

## Del 2: Lag klassen

Startkoden ligger i denne mappen:
- `StampCard.cs` har konstruktøren og to metoder med `NotImplementedException`.
- `Program.cs` er der dere viser at reglene virker.

Gjør dette:
1. Legg til det kortet må huske: eiernavn og antall stempler. Velg selv om det skal være fields eller properties, og om de skal være `public` eller `private`.
2. Implementer konstruktøren. Den skal sjekke regel 5.
3. Implementer `AddStamp()`. Den gir kortet ett stempel.
4. Implementer `RedeemFreeCoffee()`. Den returnerer `true` og trekker 10 stempler hvis kortet har minst 10. Ellers returnerer den `false` og endrer ingenting.
5. Vis i `Program.cs` at alle reglene virker. Skriv ut hva som skjer med `Console.WriteLine`.

Ikke endre metodenavnene eller hva metodene returnerer. Den andre gruppa skal kunne bruke klassen deres uten å spørre.

Når dere er ferdige: Lim inn hele `StampCard.cs` i tråden til gruppa dere får tildelt.

## Del 3: Bryt reglene

Dere får `StampCard.cs` fra en annen gruppe. Legg den i prosjektet deres i stedet for deres egen.

Prøv å få kortet til å bryte en av reglene, **bare fra `Program.cs`**. Dere får ikke endre `StampCard.cs`.

Eksempler på ting å prøve:
- Kan dere gi kortet 100 stempler uten å kalle `AddStamp()` 100 ganger?
- Kan dere få antall stempler under 0?
- Kan dere løse inn gratis kaffe med 9 stempler?
- Kan dere lage et kort uten navn, eller endre navnet etterpå?

Skriv i tråden til den andre gruppa:
- hvilke regler dere klarte å bryte, og hvilken kodelinje som gjorde det
- hvilke regler som holdt, og hva i klassen som stoppet dere

## Del 4: Refleksjon (hver for seg)

Skriv 3–5 setninger i gruppetråden:
1. Hvilken regel var lettest å bryte i klassen dere fikk, og hva i koden gjorde det mulig?
2. Hva endret dere, eller hva ville dere endret, i deres egen klasse etter tilbakemeldingen?
3. Forklar med egne ord hva innkapsling er, med et eksempel fra stempelkortet.

## Ekstra

- Kortet kan sperres. Et sperret kort kan ikke få stempler og kan ikke løse inn kaffe. Hvem skal kunne sperre kortet, og hvordan hindrer dere at det låses opp igjen utenfra?
- Kafeen vil ha «dobbeltstempel-dag». Hvor i koden hører den regelen hjemme? Kan den legges til uten at regel 4 brytes?

## Hint

- Hvis noe utenfor klassen kan skrive `card.Stamps = 100;`, er regel 4 brutt.
- En property kan ha `public` get og `private` set.
- Sjekk regelen i metoden *før* dere endrer verdien.
