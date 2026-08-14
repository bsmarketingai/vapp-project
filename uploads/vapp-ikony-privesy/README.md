# Kategoricke piktogramy VAPP — privesy

11 piktogramu pro kategorie vypisu privesu, styl Tabler, pohled z boku bez perspektivy.

## Kontrakt

- `viewBox 0 0 64 64`, `stroke-width 2`, `linecap/linejoin round`, `fill none`, `currentColor`
- kresba v poli 5-59, minimalni odstup os dvou rovnobeznych tahu 5 jednotek
- **mrizka je 64, ne 60** — zobrazovat v 60 px je v poradku, SVG se skaluje linearne

## Uroven detailu

Kazdy dil je nakresleny, ne naznaceny: ram ma vyztuzene rohy a odlehcovaci otvory,
bocnice podelne listy a svisle sloupky, kola obruc i naboj, boxy panely, okna a
dvere s klikou. Naklad (vuz, motocykl, lod) je samostatne vozidlo s vlastnimi
koly a prosklenim.

## Spolecny konstrukcni jazyk

Vsechny privesy sdileji tytez dily na tychz souradnicich, takze sada drzi pohromadu
a lisi se jen tim, cim se privesy lisi i ve skutecnosti:
- **kulova spojka** — kruh r3 na konci oje
- **ram** — pruzny profil o vysce 5 od oje az po zad (`y` 35-40 u valniku, 38-43 u nizkych plosin)
- **operne kolecko** — noha z oje dolu, kolecko r2.5
- **kola** — r6 s nabojem r2.5, horni hrana dosedа na spodek ramu
- **bocnice** — vyska 15 s podelnou listou a svislym sloupkem

Kategorie **Vyprodej privesu** neni v sade — pouziva Tabler ikonu `discount`.

## Obsah

- `svg/` — 11 SVG na `currentColor`
- `registr-fragment.txt` — path data
- `nahled.png` — kontaktni list

## Mapovani

| kategorie | soubor | motiv |
|---|---|---|
| Jednoose valniky | `jednoose-valniky` | clenena bocnice se sloupkem, jedna naprava |
| Dvouose valniky | `dvouose-valniky` | tataz korba, dve napravy |
| Triose valniky | `triose-valniky` | tataz korba, tri mensi napravy tesne u sebe |
| Prepravniky motocyklu | `prepravniky-motocyklu` | motocykl s motorem, nadrzi a ridítky na nizkem ramu |
| Prepravniky stroju | `prepravniky-stroju` | nizke bocnice, sklopena najezdova rampa vzadu |
| Prepravniky automobilu | `prepravniky-automobilu` | vuz s okny a koly na dlouhe nizke plosine |
| Sklopne privesy | `sklopne-privesy` | korba naklopena o 22 stupnu, viditelny pist |
| Prepravniky lodi a vodnich skutru | `prepravniky-lodi-a-vodnich-skutru` | trup lodi s kabinou a sikmym celnim sklem, navijak na oji |
| Prepravniky zvirat | `prepravniky-zvirat` | box se zaoblenou strechou, vetraci okno, bocni dvere |
| Skrinove privesy | `skrinove-privesy` | hranaty box, zadni dvere s klikou |
| Chladirenske privesy | `chladirenske-privesy` | box s chladici jednotkou na celni stene, stabilizacni nohy |