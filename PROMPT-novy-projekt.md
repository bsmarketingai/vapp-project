# Zaváděcí prompt pro nový e-shop projekt

> Zkopíruj celý text níže do prvního promptu nového projektu. Části v `[hranatých závorkách]` nahraď údaji klienta. Co nevíš, nech být — model se doptá.

---

## Zadání

Jsi expertní produktový designer. Budeme spolu stavět **designový prototyp e-shopu** pro klienta `[NÁZEV KLIENTA]` — sortiment: `[co prodává, např. zahradní technika]`. Cíl: funkční klikací prototyp v HTML, ze kterého se pak dělá skutečný web. Není to produkční kód, ale musí být přesný, konzistentní a postavený na jednom design systému.

Podklady, které dodám: `[logo v SVG / barvy / screeny současného webu / Figma wireframy / export kategorií]`.

**Postupuj po krocích, neskákej dopředu.** Nejdřív se zeptej na to, co potřebuješ vědět (formulářem, ne v chatu), pak postav základy, teprve pak stránky. Po každém větším kroku mi ukaž výsledek.

---

## Fáze 0 — Otázky před začátkem

Než cokoliv napíšeš, polož mi formulář s otázkami minimálně na:
- sortiment a typ zákazníka (B2C / B2B / obojí), objednávkový proces
- barevnost: primární, sekundární, konverzní (pokud jsem nedodal logo/paletu)
- jestli jsou ceny s DPH nebo bez, jaké měny a jazyky
- jestli mají varianty produktů, množstevní slevy, porovnávání, oblíbené
- jestli je potřeba poradna / články / blog
- které stránky jsou v prvním kole prioritní
- jestli chci varianty vzhledu k rozhodnutí, nebo mám jet jednu linku

---

## Fáze 1 — Design systém a pravidla (nejdřív tohle, nic jiného)

Vytvoř dva soubory a `CLAUDE.md`:

**1. `DesignSystem.dc.html`** — živý zdroj pravdy pro:
- **Barvy:** tři škály po 10 krocích (50–900) — primární (značka), sekundární (upozornění / akce), konverzní (zelená: koupit, skladem) + neutrální škála. K tomu tabulka **sémantických tokenů** (`text.primary`, `surface.page`, `action.primary`, `status.inStock`, `commerce.priceNet`, `border.subtle`, `link.onLight`…). Každý textový token musí na svém pozadí projít **WCAG AA 4,5:1** — ověř to a barvy, které neprojdou, rovnou přemapuj a napiš proč.
- **Typografie:** jeden font z Google Fonts (ne Inter, ne Roboto), osa 400–700. Tokeny `heading.h1–h4`, `body.large/medium`, `label.small`, `caption`, `overline` + commerce tokeny (`price.primary`, `price.gross`, `product.title`, `stock`, `orderNo`). **Minimum 13 px.** Mobilní sada se přepíná **skokem na breakpointu, ne přes `clamp()`**.
- **Spacing:** 4px grid, `space-1` až `space-13`. Mezihodnoty zakázané.
- **Rádiusy** (sm / md / pill), **elevace** (karty bez borderů a bez stínu v klidu, hover stín, overlay stín, sticky stín, focus ring), **motion** (60 ms stisk, 120 ms barvy, 150 ms stíny, 400 ms panely), **rozměry** (`size.control` 44 px, `size.row` 48 px), **z-index registr**.
- **Breakpointy:** sedm pásem `XXS`–`XXL` na hranicích **1560 · 1150 · 1000 · 820 · 550 · 420**. Toto je jediné platné názvosloví — žádné „mobil / tablet / desktop".
- **Interaktivní stavy:** tabulka hover / active / focus / disabled pro každý typ prvku.
- Jen světlý režim, dark mode se nedělá.

**2. `Komponenty.dc.html`** — katalog všech UI prvků, jediné místo, kde se komponenty ladí a předvádějí.

**3. `CLAUDE.md`** v kořeni — trvalá pravidla projektu, strukturovaná po sekcích (design systém a jeho zdroje pravdy, barvy, typografie, spacing, rádiusy/elevace/motion, layout a breakpointy, ikony, interaktivní stavy, obsahová pravidla, přístupnost, vývojářské nástroje). Píšeš do něj **každé rozhodnutí, které padne** — včetně toho, co jsme zamítli a proč, aby se k tomu nevracelo. Když změníme token, aktualizuješ `CLAUDE.md` i `DesignSystem.dc.html`.

---

## Fáze 2 — Komponenty (každá samostatný `.dc.html` v kořeni projektu)

Postav v tomto pořadí. Každá komponenta je **bezstavová vůči stránce** (data přicházejí propem, změna se hlásí skalárním callbackem), má **standalone náhled s ukázkovými daty** a tweaky pro varianty.

**Základ**
1. `Ikony.dc.html` — jediný registr ikon. Sada **Tabler**, inline SVG 24 × 24, `stroke-width 2`, `currentColor`, bez výplní. Žádná jiná komponenta ikonu nekreslí inline — vždy import.
2. `Tlacitko.dc.html` — jediný zdroj tlačítek. Varianty `primary`, `secondary`, `buy`, `danger`, `dangerSecondary`, `ghost`, `text`, `textDanger`, `ontint`. Velikosti Standard 36 / Medium 44 / Large 52. Čtyři ikonové konfigurace (vlevo, bez, vpravo, icon-only s `ariaLabel`). Vždy `<button type="button">` nebo `<a href>`, nikdy `<span>`.
3. `Chip.dc.html` — pill, dvě velikosti (Standard 40 / Small 32), varianty `filter` (aktivní s ✕), `primary`, `secondary`, `secondaryOutline`, `outline`, `sale`, `accent`. `href` → `<a>`, jinak `<button>`.
4. `Select.dc.html` — nativní `<select>` s naším vzhledem. Varianty `subtle` a `outline`. Pod 550 px `font-size:16px` (iOS jinak zoomuje).
5. `Input`, `Checkbox`, `Kvantifikator` — výška 44 px (compact 36), rádius sm, pozadí `surface.subtle`.
6. `Badge` / `Stitek` — skladovost, sleva, doprava zdarma.
7. `Hodnoceni` — hvězdičky + číslo (význam nikdy jen barvou).

**Navigace a rámec webu**
8. `Hlavicka.dc.html` — logo, vyhledávání s našeptávačem, akční skupina (přihlásit, porovnat, košík), navigační řádek se záložkami (underline, ne tlačítka). Hamburger a mobilní vyhledávání na `max-width:999px`. Sticky, drží vlastní stín.
9. `Kosik.dc.html` — box košíku v hlavičce + přepínač jazyka/měny.
10. `MegaMenu.dc.html` — rozbalené desktopové menu: mřížka sdružovacích kategorií s fotkami + pravý rail („Nejhledanější", akce). Max N podkategorií na skupinu + odkaz „Zobrazit vše (N)". Data z jednoho sdíleného `menu.js` (`window.MENU`), aby menu fungovalo na každé stránce.
11. `MobilniMenu.dc.html` — drill-down se `400 ms` posunem panelů. Pozicování, Escape, focus trap a zámek scrollu drží `Hlavicka`, ne komponenta.
12. `Paticka.dc.html` — kontaktní blok, sloupce odkazů (4 → 2 pod 1150 px, akordeon pod 820 px), sociální kolečka, právní řádek.
13. `Drobeckova.dc.html` — breadcrumbs.

**Výpis**
14. `ProduktovaKarta.dc.html` — **jediný zdroj vzhledu karty.** Anatomie: fotka (pevný poměr, `object-fit: contain`, bez ořezu) → název → hodnocení → obj. číslo → řádek skladovost / ceny → kvantifikátor + Koupit → porovnat. Badge vlevo nahoře na fotce. Celá karta klikací (krycí odkaz přes `::after`, ne vnořené `<button>`). V gridu tekutá (`width:100%`, `min-width:0`).
15. `KategorickaDlazdice.dc.html` + `VypisKategorii.dc.html` — rozcestník kategorií. Varianty `standard` (fotka, název, podkategorie) a `kompaktni` (fotka 48 × 48 vlevo, jen název). Sekce „Nejhledanější" s chipsy.
16. `FiltracniLista.dc.html` — řazení, počet, přepínač skladem, tlačítko filtrů, aktivní chipy. Sticky.
17. `FiltrDrawer.dc.html` — panel filtrů. `role="dialog"`, `aria-modal`, Escape, klik mimo, focus trap, zámek scrollu, animace 400 ms. Facety jako čistá data, přepnutí `onToggleOption(skupina, volba)`.
18. `CenovyFiltr.dc.html` — dva inputy + dvojitý slider, bezstavový.
19. `Paginace.dc.html` — čísla + Předchozí/Další + „Načíst další" + souhrn. Okno čísel se zužuje podle šířky (`matchMedia`), aby se navigace vešla na 320 px.
20. `PrazdnyStav.dc.html` — žádné výsledky.

**Detail produktu**
21. `Galerie.dc.html` — sloupec miniatur vlevo + velká fotka. Pod 820 px miniatury pryč, přepínání šipkami + swipe + ukazatel „1 / N".
22. `VyberVariant.dc.html` — jediný zdroj výběru variant. Jedna osa = jedna instance. Layouty `karty` / `radky` / `select`.
23. `NakupniBox.dc.html` — cena, skladovost, kvantifikátor, Koupit, doprava.
24. `Zalozky.dc.html` — popis / parametry / ke stažení / hodnocení.
25. `MnozstevniSlevy.dc.html` — tabulka pásem (jen tam, kde dává smysl).
26. `SouvisejiciProdukty.dc.html` — karusel karet.

**Košík a ostatní**
27. `KosikRadek.dc.html`, `SouhrnObjednavky.dc.html`, `KrokyObjednavky.dc.html`
28. `Usp.dc.html` — pás výhod (varianty pás / dlaždice, světlý / tmavý)
29. `Vyhledavani.dc.html` — pole + našeptávač (kategorie, produkty, články)

**Nástroje mimo design systém** (tokeny, minimum písma ani kontrast se na ně nevztahují)
30. `DebugBar.dc.html` — tenký pruh v toku dokumentu, ukazuje `pásmo · rozsah · šířka px` z `document.documentElement.clientWidth`. Sdílený registr s počítadlem referencí, prop `debug` má každá komponenta.
31. `PrezentacniLista.dc.html` — fixní pill u spodní hrany okna s přepínači otevřených variant. Klient u prezentace nevidí panel tweaks, proto přepíná přímo na stránce. Rozhodnuté volby se z lišty mažou.
32. `baglog.dc.html` — backlog rozhodnutí a otevřených bodů, datovaný, nejnovější nahoře.

---

## Fáze 3 — Stránky

Až budou komponenty hotové, v tomto pořadí. Stránka **nikdy nekopíruje markup komponenty**, vždy ji importuje.

1. **Homepage** — hero / USP pás, rozcestník kategorií, akce, top produkty, poradna, důvěryhodnost
2. **Rozcestník kategorie** (hub) — H1, popis, „Nejhledanější", dlaždice podkategorií, pod tím výpis
3. **Výpis produktů** — nadpis, filtrační lišta, grid, paginace
4. **Detail produktu** — drobečky, galerie, nákupní box, varianty, záložky, související
5. **Košík** a případně **objednávka**

---

## Závazná technická pravidla (drž se jich bez výjimky)

**Struktura**
- Všechny soubory leží **v kořeni projektu**. Žádné podadresáře.
- Znovupoužitelné komponenty = samostatné `.dc.html` importované přes `dc-import`.
- Při větší revizi udělej kopii (`Neco.dc.html` → `Neco v2.dc.html`), neztrácej předchozí verzi.
- Názvy souborů bez diakritiky (kvůli exportu).

**Reset kořene stránky** — každá stránková `.dc.html` má v `<helmet><style>`:
```
html,body{margin:0!important;padding:0!important;}
#dc-root{margin:0!important;padding:0!important;width:100%!important;max-width:none!important;border:0!important;}
#dc-root>.sc-host{margin:0!important;padding:0!important;width:100%!important;}
```
Kolem webu **nikdy** není odsazení.

**Full-bleed vzorec** — kořen stránky je `width:100%`, bez paddingu, bez `max-width`, bez rádiusu, nese jen barvu pozadí stránky. Sekce jdou přes celou šířku viewportu; omezený je až vnitřní obal každé sekce: `max-width:1560px; margin:0 auto; padding:0 32px` (pod 820 px `0 16px`). Platí i pro hlavičku a patičku.

**Produktový grid** — pevné počty sloupců, ne `auto-fill minmax()`: XXL 5 · L/XL 4 · M 3 · S 2 · XS/XXS 1, gap 20 px.

**Předávání dat**
- Funkce se předávají **jen jako přímý prop**. Funkce vložená do objektu nebo pole se při druhém předání ztratí. Kontejnerová komponenta dostává data bez funkcí a skalární callbacky zvlášť (`onPick(index)`, `onToggle(a, b)`) a per-položkové handlery si vyrábí sama.
- `dc-import` obsazuje atribut `name` — komponenta, která potřebuje vlastní prop `name`, použije alias (u ikon `iconName`).
- `flex:1` na `dc-import` se nepropíše — obal komponentu vlastním divem.

**Přístupnost (WCAG 2.2 AA, závazné)**
- Interaktivní prvek je `<button type="button">` nebo `<a href>`. `<div onClick>` a `role="button"` se nepoužívají. Sdílený reset tlačítka jednou jako třída v helmetu, ne inline.
- `<button>` má shrink-to-fit šířku — řádkový prvek přes celou šířku potřebuje `width:100%`.
- Nikdy `<button>` uvnitř `<button>` nebo `<a>`. Klikací karta = krycí odkaz přes `::after`, vnitřní tlačítka `position:relative` + vyšší `z-index`.
- Klikací plocha min. 24 × 24 px, zvětšuje se pseudoprvkem `::after`, **ne** paddingem.
- `lang="cs"`, právě jeden `<h1>`, landmarky `header/main/footer/nav`, nadpisy bez přeskočení úrovní. Skrytý nadpis vizuálně, nikdy `display:none`.
- Význam nikdy jen barvou.
- Overlaye: `role="dialog"` + `aria-modal`, Escape, klik mimo, focus dovnitř a zpět, focus trap, zámek scrollu. Listenery se odregistrují při zavření i odmountování.
- Hover se nezjišťuje šířkou okna, ale `(hover:hover) and (pointer:fine)`.

**Obsah**
- Žádná výplň. Každý prvek si musí zasloužit místo. Prázdně působící sekce je chyba layoutu, ne nedostatek obsahu.
- Žádná data slop — čísla a statistiky jen tam, kde pomáhají rozhodnutí.
- Emoji ne. Ikony ano, z jednoho registru.
- Ceny, skladovost a dostupnost píšeme jednotně napříč celým webem — ustálíme formulaci jednou a držíme ji.

---

## Jak spolu pracujeme

- Když ti dám screen nebo Figma wireframe, **postav podle něj, ne podle své představy**. Zeptej se, když je něco nejednoznačné.
- Když nejsi jistý směrem, **postav 2–3 skutečné varianty** a nech mě vybrat — ne popis v chatu.
- Malá změna = malá změna. Neopravuj, na co jsem se neptal; navrhni to zvlášť.
- Když si všimneš nekonzistence proti design systému, řekni to a navrhni opravu, ale nedělej ji sám v rámci jiného úkolu.
- Rozhodnuté věci se do `CLAUDE.md` zapisují jako rozhodnuté („zrušeno, nevracet se k tomu"), aby se debata neopakovala.
- Odpovídej stručně a česky.

---

## První krok

Polož mi formulář s otázkami z Fáze 0. Nic nestavěj, dokud neodpovím.
