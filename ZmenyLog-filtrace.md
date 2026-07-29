# Report — filtrace, tokeny a migrace breakpointů

Navazuje na `ZmenyLog-drilldown.md`. Dotčené soubory: nově `FiltrDrawer.dc.html`,
`CenovyFiltr.dc.html`; upraveno `FiltracniLista.dc.html`, `MobilniMenu.dc.html`,
`Tlacitko.dc.html`, `PrototypNahradniDilyVAPP.dc.html`, `VypisKategorii.dc.html`,
`DesignSystemVAPP.dc.html`, `CLAUDE.md`.

---

## 1. Nové komponenty

### FiltrDrawer.dc.html
Fasetový panel filtrů, vytažený z prototypu (dřív inline `#pf-panel`).

Komponenta drží: pozicování, overlay, přílet/odlet **400 ms** (`motion.panel`),
Escape, focus trap oběma směry, zámek scrollu, návrat focusu na spouštěč,
stav rozbalených skupin, stav ceny a příznaků ve standalone náhledu.

Stránka posílá čistá data a skalární callbacky: `open`, `groups`, `resultCount`,
`onlyStock`, `priceFrom` / `priceTo` / `priceMin` / `priceMax` / `priceStep`,
`flags`, `onToggleOption(gi, oi)`, `onToggleStock`, `onToggleFlag(i)`,
`onPriceChange(od, do)`, `onClear`, `onClose`.

Struktura panelu shora dolů:
1. **Hlavička** — nadpis s ikonou `filter` (24 px, `#1E5AA8`) + zavírací tlačítko.
2. **Aktivní filtry** — chips 28 px, pill, `#1E5AA8`, mezera **4 px**, ikona `x`;
   klik odebere jeden filtr. Poslední chip „Zrušit vše" je červený `#C5232B`
   a volá stejné `onClear` jako tlačítko dole. Sekce se skryje, když nic není aktivní.
3. **Skladem** — pevná sekce (ne rozbalovací), protože přepínač na XXS/XS z lišty
   mizel. Zaškrtnutý je **zelený** (`#0E7F43` plocha, text `#0B6937`), hover
   zelenou drží.
4. **Ceny a štítky** — `CenovyFiltr` + Příznaky.
5. **Facety** — Výrobce, Průměr brzdy, Rozteč kol… rozbalovací akordeon.
6. **Podval** — Zrušit vše + Zobrazit produkty.

### CenovyFiltr.dc.html
Rozsah ceny: dva inputy (44 px, `surface.subtle`, radius 6, fs 15) nad dvojitým
sliderem s modrým vybraným úsekem a hranicemi rozsahu pod ním. Bezstavová vůči
stránce — hodnoty přicházejí v `valueFrom` / `valueTo`, změna se hlásí přes
`onChange(od, do)`. Formát tisíců nezlomitelnou mezerou.

---

## 2. Úpravy komponent

**FiltracniLista.dc.html**
- Přepínač Skladem se **už neskrývá** (dřív pod 600 px) — regrese bez náhrady.
- Dropdown řazení se zavírá klikem mimo i Escapem; listener jen po dobu otevření,
  jediný `componentWillUnmount`.
- Položky dropdownu: `width:100%` (podbarvení aktivní volby sahá k okraji)
  a hover `surface.subtle` `#F2F4F7` i pro neaktivní položky.
- Znak `✓` nahrazen ikonou `check` z registru `Ikony`; inline SVG filtru nahrazeno
  ikonou `filter`.
- **XXS (≤ 419 px):** tlačítko Filtry na celou šířku, pod ním Skladem vlevo
  a řazení vpravo.

**MobilniMenu.dc.html**
- Řádky 46 → **48 px** (`size.row`), animace 500 → **400 ms**, chevrony
  `#84AEDF` → **`#5189CC`** (`icon.chevron`).
- Nový prop `panelOpen` — překlopení `false → true` resetuje `path` na kořen.
- „Zpět domů" → **„Zpět na hlavní menu"**; název aktuální úrovně je `<h2>`
  v `text.primary` `#15181C` (dřív odkaz — dva odkazy na týž cíl byly duplicita),
  jediný odkaz v řádku je „Zobrazit kategorii".
- Řádek Zpět: textové tlačítko bez plochy.

**Tlacitko.dc.html**
- Nová varianta **`textDanger`** — textové tlačítko bez plochy s **červeným
  textem** (`#C5232B` / hover `#A21B22`, hover pozadí `#FDF1F1`), zvýrazněná
  obdoba `text`. Ikona dědí barvu textu.
- Doplněny ukázkové řady ikonových konfigurací pro `ghost` i `textDanger`
  (ikona vlevo, jen text, ikona vpravo, icon-only s `ariaLabel`).

**VypisKategorii.dc.html**
- Mřížka kategorií: pod 820 px pevně **2 sloupce**, pod 550 px **1 sloupec**;
  nad 820 px zůstává `auto-fit minmax(280px,1fr)`.

**Hlavicka.dc.html**
- Chevrony na `#5189CC`, u `z-index` doplněny názvy tokenů (`z.header` 70,
  `z.stickyBar` 60), mobilnímu menu se předává `panel-open`.

---

## 3. Prototyp (PrototypNahradniDilyVAPP.dc.html)

- Inline panel filtrů odstraněn včetně keyframes, focus trapu a zámku scrollu →
  nahrazen `dc-import name="FiltrDrawer"`. Stránka drží jen data.
- Facety posílá jako data bez funkcí; přepínání jde přes `onFilterOption(gi, oi)`.
- Přidán stav ceny (`priceFrom` / `priceTo`) a příznaků (`flags`);
  „Zrušit filtry" resetuje i je.
- Duplicitní skupina „Dostupnost" ve facetách zrušená — Skladem je vlastní sekce.
- **Produktový grid migrován na škálu XXS–XXL:** `L / XL / XXL` **4** ·
  `M` **3** (`max-width:999px`) · `S` **2** (819) · `XS / XXS` **1** (549).
  Staré 899 / 479 zrušené.
- Mobilní typografie migrována na **819 px** (dřív smíšený blok 899 pro `pg-h1`
  a 999 pro `pg-lead`).

---

## 4. Tokeny doplněné do systému

| token | hodnota | důvod |
|---|---|---|
| `motion.panel` | 400 ms | posun panelů nebyl pokrytý škálou 60/120/150 |
| `size.control` | 44 px | input, kvantifikátor, ikonové tlačítko, Tlačítko Medium |
| `size.row` | 48 px | řádek seznamu a navigace |
| `icon.chevron` | `#5189CC` | `#84AEDF` má na bílé 2,1:1, netextový prvek potřebuje 3:1 |
| `z.stickyBar` … `z.debug` | 60 / 70 / 80 / 90 / 95 / 99 | zápis dnešního stavu, nic se nepřečíslovalo |

Nová pravidla v CLAUDE.md: `<button>` jako řádek seznamu potřebuje `width:100%`;
hover položky v overlayi = `surface.subtle`; přepínač Skladem je zelený i ve
filtrech; příznaky ve filtru mají badge v barvách z karty; varianty tlačítek
`ghost` a `textDanger`; komponenty `FiltrDrawer` a `CenovyFiltr` jako zdroje pravdy.

---

## 5. Breakpointy — stav migrace

Závazná škála: **XXL ≥ 1560 · XL 1150–1559 · L 1000–1149 · M 820–999 ·
S 550–819 · XS 420–549 · XXS ≤ 419**. Povolené hranice: 1560 · 1150 · 1000 ·
820 · 550 · 420.

Na nové škále už běží: navigace v Hlavicce (999/1000), labely ikon (549),
logo (419), drill-down podkategorií (819/820), mobilní typografie (819),
mřížka kategorií (819 / 549), produktový grid (999 / 819 / 549),
zalomení filtrační lišty (419).

Na staré sadě **899/900** zůstává jen: page padding `.vp-in` / `.vp-bleed`
a pomocníci viditelnosti `.dt` / `.mb` (migrují se v páru a společně s prototypem).

Zrušeno: názvosloví `bp.mobile`–`bp.max` v katalogu, tag „K potvrzení"
v sekci rozhodnutí (všechny body jsou zafixované).

---

## Hodnoty bez tokenu

- `min-height:28px` u chips v draweru a `32px` u kompaktních checkboxů —
  mimo řadu `size.control` / `size.row`.
- `min-height:48px` u řádků menu je token, `46px` už nikde není.
- `width:min(400px,92vw)` u panelu draweru, `top:-35px` u sticky hlavičky,
  `max-width:260px` u dropdownu řazení, box checkboxu 21 px, `gap:9px` v liště.
- Slider: thumb 20 px, dráha 4 px — nová geometrie bez tokenu.

## Zjednodušeno / otevřené

- Checkboxy v draweru mají hover jen na textu (`#1E5AA8`), ne podbarvení plochy —
  kvůli kompaktnosti.
- Chips ve draweru neukazují hodnoty ceny, jen zaškrtnuté volby.
- Příznaky jsou naše badge z karty (Sleva, Doprava zdarma, Skladem,
  Skladem u dodavatele), ne kódy z referenčního screenshotu.
- Odznak s počtem aktivních voleb u hlaviček skupin byl odstraněn na vyžádání;
  prop `activeN` zůstává v datech nevyužitý.
- `#84AEDF` dál žije v prototypu, Paticce, Chipu, Kosiku a v ukázkách katalogu —
  mimo dosud zadaný rozsah.
- Filtry v draweru mimo Skladem, příznaků a Výrobce (Průměr brzdy, Rozteč kol,
  Cena jako facet) jsou statická data — nefiltrují výpis.
