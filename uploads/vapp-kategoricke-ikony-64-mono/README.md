# Kategoricke piktogramy VAPP — 64x64

20 piktogramu pro kategorie vypisu nahradnich dilu, styl Tabler.

## Kontrakt

- `viewBox 0 0 64 64`, zobrazovaci velikost **64x64 px** (1:1)
- `stroke-width 2`, `stroke-linecap/linejoin round`, `fill none`, **`currentColor`**
- kresba v poli 5-59, minimalni odstup os dvou rovnobeznych tahu 5 jednotek
- jednobarevne, dedi barvu z kontextu — stejne jako registr `Ikony`

## Vztah k registru `Ikony.dc.html`

Registr ma kontrakt 24x24 / stroke 2. Tyto piktogramy jsou 64x64 / stroke 2,
tedy jina hustota kresby — pri zmenseni na 24 px se detail slije. Bud je vloz
do registru jako **samostatnou sekci s vlastni velikosti**, nebo je nech mimo nej
jako assety pro `KategorickaDlazdice`. Nemichej je s ikonami 24x24 v jedne sekci.

## Obsah

- `svg/` — 20 SVG na `currentColor`
- `registr-fragment.txt` — path data ve formatu `ICONS` z `Ikony.dc.html`
- `nahled.png` — kontaktni list, 140 px a 64 px

## Mapovani

| kategorie | soubor | motiv |
|---|---|---|
| Elektro, svitilny, odrazky | `elektro-svitilny-odrazky` | reflektor s paprsky |
| Pneu, kola, disky | `pneu-kola-disky` | disk se sesti dirami v pneumatice |
| Spojovaci zarizeni a zamky | `spojovaci-zarizeni-a-zamky` | kulova spojka s prirubou |
| Plynove vzpery a prislusenstvi | `plynove-vzpery-a-prislusenstvi` | pist s oky na obou koncich |
| Najezdove brzdy a dily | `najezdove-brzdy-a-dily` | najezdove zarizeni s pakou rucni brzdy |
| Napravy kompletni | `napravy-kompletni` | trubka napravy se dvema koly |
| Dily naprav | `dily-naprav` | bubnova brzda s celistmi |
| Najezdy | `najezdy` | rampa s protiskluzovymi prickami |
| Operna kolecka, nohy, drzaky | `operna-kolecka-nohy-drzaky` | opern kolecko s klikou a objimkou |
| Blatniky a zasterky | `blatniky-a-zasterky` | profil blatniku nad kolem |
| Bocnice, uzavery, panty | `bocnice-uzavery-panty` | pant se dvema platy a cepem |
| Zabezpeceni nakladu | `zabezpeceni-nakladu` | racna s pasem a haky |
| Navijaky a prislusenstvi | `navijaky-a-prislusenstvi` | civka s klikou, lano s hakem |
| Konstrukcni dily | `konstrukcni-dily` | L profil s otvory |
| Plachty a prislusenstvi | `plachty-a-prislusenstvi` | plachta pres hrebenovou konstrukci |
| Boxy na naradi a drzaky boxu | `boxy-na-naradi-a-drzaky-boxu` | bedna s vikem, uchytem a zamkem |
| Kliny a drzaky | `kliny-a-drzaky` | klin zachycujici kolo najizdejici zleva |
| Hydraulika privesu | `hydraulika-privesu` | tlakova hadice s koncovkami |
| Doplnky k privesum | `doplnky-k-privesum` | znacka omezeni rychlosti |
| Pomucky pro udrzbu | `pomucky-pro-udrzbu` | sprej s rozptylenym rozstrikem |

Kategorie **Akce a slevy %** neni v sade — pouziva Tabler ikonu `discount` z registru.