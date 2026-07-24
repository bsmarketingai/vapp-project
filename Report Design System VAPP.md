# Report — Design systém VAPP (stav k 24. 7. 2026)

Shrnutí práce na komponentizaci a full-bleed layoutu pro pokračování s Claude.ai.

## 1. Pravidla a základy
- **CLAUDE.md** nahrazen kompletní tokenovou verzí (barvy blue/red/green/neutral se stupni 50–900, sémantické tokeny, typografie Exo 2 max 700, spacing 4px, radiusy 6/8/999, elevace, motion, layout, ikony, stavy). Do sekce 5 Layout přidané **full-bleed pravidlo**.
- **DesignSystemVAPP.dc.html** nahrazen vizuálním katalogem základů. Dvě rozhodnutí zapracována: LED „otevřeno“ = systémová zelená `#2EAA6A`; cena bez DPH = 17/700 (formát „365 Kč“ / menší „442 Kč s DPH“). V sekci 11 obě označeny „Vyřešeno“.

## 2. Komponentizace (13 samostatných .dc.html, importované přes dc-import)
`Tlacitko` · `Kvantifikator` · `FormularovePrvky` · `Badge` · `Skladovost` · `Chip` · `Vyhledavani` · `KategorickaDlazdice` · `Hlavicka` · `Breadcrumb` · `Paticka` · `PoradenskyBlok` · `LedIndikator`

Každá: galerie všech variant + poznámka „kdy použít / kdy ne“, výhradně tokeny. Kde to dává smysl i režim jedné instance přes props (pro reálné použití ve stránkách).

- **KomponentyVAPP.dc.html** je nyní čistý katalog — jen importuje, nedefinuje.
- **PlaygroundVAPP.dc.html** — přehled celého systému na jedné stránce (rozcestník, sekce v daném pořadí, přepínač desktop/mobil 900 px). Jen importuje.

## 3. Rozšíření komponent (zpětně kompatibilní — bez props vypadají jako dosud)
- **Vyhledavani** — řízené (`value`+`onChange`) i neřízené; `bare` režim + `height`/`placeholder` pro vložení do hlavičky.
- **Hlavicka** — plná kanonická verze: logo, inline vyhledávání (vkládá `Vyhledavani`), ikony Přihlásit/Porovnat/Košík, počty přes `cartCount`/`compareCount` (default 0), mobilní menu, topbar, záložky.
- **PoradenskyBlok** — varianta `compact` (40/42) vedle `standard` (44/44).
- **Paticka** — `bare` skryje DS-poznámku ve stránce.
- **KategorickaDlazdice** — handlery `cat.onOpen` + `sub.onPick` pro drill-down.

## 4. Nasazení do prototypu
`PrototypNahradniDilyVAPP.dc.html` importuje `Hlavicka` (hledání napojené na sdílený filtr, obě instance sdílí stav; počet porovnání teče do odznaku i lišty), `KategorickaDlazdice`, `PoradenskyBlok variant=compact`, `Paticka bare`, `ProduktovaKarta`. Ověřeno funkčně (hledání, drill-down, porovnání) i vizuálně.

**Off-token opraveno:** `#22C55E`→`#2EAA6A`, `#9099A3`→`#9AA1AB`, `#6E88AE`/`#7FA6D6`/`#8FA6C6`→`#84AEDF`, radius 5→6, `#E4E7EC`→`#F2F4F7`, `#F9FAFB`→`#F7F9FB`, `clamp()` H1 → skokový breakpoint 36/26.

**Tweaky (sekce Chování, přes `this.props`):** `freeShippingThreshold`, `defaultOnlyStock`, `defaultSort`, `showConsultancy`.

## 5. Full-bleed layout
Obrácený vzorec: kořen `width:100%` bez paddingu/max-width/radiusu (jen `surface.page`), sekce full-bleed (topbar/patička `#142F56`), obsah v `.vp-in` (max 1560 px, padding 32/16). Sticky toolbar přes `.vp-bleed`.
- `Hlavicka` a `Paticka` full-bleed jako komponenty; prototyp nasazen.
- **Vyřešený bug:** `body{padding:24px}` v helmetech importovaných komponent přebíjel reset stránky (helmet se vkládá do téhož dokumentu) → 24px inset. Odstraněno ze všech 12 importovaných komponent. Ověřeno: `body` padding 0, tmavé pruhy 0 → plná šířka.

## 6. Archiv
`BarevnaPaletaVAPP.dc.html` → `ArchivBarevnaPaletaVAPP.dc.html` s výrazným pruhem „ARCHIV — nepoužívat“ (starý styl Hanken Grotesk, borders, radiusy 11–14).

## Otevřené body
- **Wireframy** (`WireframeHomepageVAPP`, `WireframeVypisProduktuVAPP`) — záměrně lo-fi mockup-canvasy (device-rámy vedle sebe na ploše). Full-bleed vzorec je technicky rozbije. **K rozhodnutí:** nechat jako canvas, nebo překlopit každý rám na samostatnou full-bleed stránku. Zatím beze změny.
- Hodnoty bez přesného tokenu ve wireframech ponechány (blueprintový styl je záměr).
