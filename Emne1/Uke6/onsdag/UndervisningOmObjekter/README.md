# Lett innføring i objekter (JavaScript)

## Opptak

Videoopptak ligger [her](https://photos.app.goo.gl/B9Rc8mY5Bv4hLrUQ9) 

## Struktur

1. **`1barevariable.js`** — Vanlige variabler kommer noen ganger til kort
2. **`2objekter.js`** — Hva er et objekt? (properties, metoder, nøstede objekter, constructor)
3. **`2deresobjekter.js`** — Objekter fra dagliglivet, noen eksempler fra dere
4. **`3kjenteobjekter.js`** — Array og Date som objekter dere allerede kjenner
   - Se `Array Visualization.pdf` og `Date Object Examples.pdf`
5. **`4referanseproblematikk.js`** — Referansetyper vs. verdityper
   - Se `Verdityper og referansetyper.pdf`

`app.html` / `styles.css` — enkelt oppsett for å kjøre eksemplene i nettleser.

## Oppgave å prøve seg på: Lag noen objekter
- Tegn objektet visuelt for å planlegge det
- Kod objektet (ene) du har tegnet med vanlig ``let obj = {property....}``
- Omgjør objektet til constructor versjon slik at dere får en uniform mal hvor objektene kan opprettes med ``new`` nøkkelordet

## Oppgave å prøve: `alder` som funksjon

Nåværende `person.alder` er et fast tall — blir feil om et år. Forbedring: lagre `født` (Date), regn ut alder som funksjon.

**Forslag til start :**

```js
let person = {
  navn: "Ola",
  født: new Date(1995, 4, 12), // måneder er 0-indeksert, mai = 4

  alder: function() {
    // din kode her...
  }
};

console.log(person.alder());
```