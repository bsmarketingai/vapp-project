# Předávací balíček pro centrální Design System — VAPP.cz

> Účel: podklad pro vytvoření samostatného centrálního Design Systemu v odděleném chatu.
> Vše níže je **vytěženo ze stávajícího projektu**. Nálezy jsou klasifikovány stavem (EXPLICIT / OBSERVED / INFERRED / CONFLICT / ONE-OFF / MISSING / PROPOSED).
> PROPOSED a INFERRED hodnoty NEjsou součástí projektu — jsou to doporučení.

---

## 0. Přehled zdrojů

| Soubor | Role | Poznámka |
|---|---|---|
| `Design systém VAPP.dc.html` | Základy — barvy + typografie (interaktivní, kopírovatelné tokeny) | Aktuální styl (Exo 2) |
| `Barevná paleta VAPP.dc.html` | Plné barevné škály 3×10 (50–900) | **Starý styl** (Hanken Grotesk, borders, radius 11–14) — viz CONFLICT |
| `Komponenty VAPP.dc.html` | Centrální katalog UI komponent | Jediné místo ladění komponent |
| `Produktová karta VAPP.dc.html` | Sdílená komponenta karty (dc-import) | Jediný zdroj vzhledu karty |
| `Prototyp Náhradní díly VAPP.dc.html` | Návrhová stránka (výpis náhradních dílů) | Importuje produktovou kartu |
| `Wireframe Homepage VAPP.dc.html`, `Wireframe Výpis produktů VAPP.dc.html` | Wireframy | Kompoziční reference |
| `UX Backlog VAPP.dc.html` | UX backlog | — |
| `CLAUDE.md` | Trvalá projektová pravidla | Závazné konvence |
| `vapp-logo.svg` | Oficiální logo (křivky) | Červená #E41D32 |
| `Strom kategorii Nahradni dily VAPP.xls` | Strom kategorií | — |

**Klíčová pravidla z `CLAUDE.md` (EXPLICIT):**
- Font webu: **Exo 2** (Google Fonts). Základní text 16 px, minimum 13 px, **max font-weight 700**.
- Rádiusy: 6 px (inputy, badge), 8 px (karty, tlačítka), 999 pill. **Karty bez borderů**, jemný stín jen při hoveru. Jen světlý režim.
- Logo: `vapp-logo.svg`, červená `#E41D32`.
- Ikony standard **24×24** (viewBox 0 0 24 24). Výjimka: skladovost **18×18**. Hlavní menu desktop 18 px.
- Hlavní menu: záložky s underline (aktivní podtržená), ne tlačítka.
- Produktový grid: **4 sloupce desktop, 2 mobil**.
- Výchozí šířka webu: **1560 px** (max-width kontejneru).
- Karta náhradního dílu NEobsahuje výpis parametrů (ty jen u přívěsů).

---

## 1. Foundations — Barvy

### 1.1 Primární — Modrá (EXPLICIT, `Barevná paleta VAPP`)
Kotva 600 = `#1E5AA8`.

| Step | HEX | Použití (OBSERVED) |
|---|---|---|
| 50 | `#EFF4FB` | sekundární tlačítka, pozadí sekcí, světlá výplň |
| 100 | `#D8E6F6` | hover sekundárních tlačítek, chip hover |
| 200 | `#B4CEEC` | breadcrumb oddělovače, jemné okraje |
| 300 | `#84AEDF` | okraje/hover chipů |
| 400 | `#5189CC` | ikony, sekundární prvky |
| 500 | `#2C6BB8` | plochy (brand) |
| 600 | `#1E5AA8` | **primární akce, odkazy, aktivní menu, cena/nadpis** |
| 700 | `#1A4A8A` | hover primárních prvků |
| 800 | `#173C70` | text / vysoký kontrast |
| 900 | `#142F56` | **patička, topbar, brand tmavá** |

### 1.2 Sekundární — Červená (EXPLICIT)
Kotva 600 = `#C5232B`.

| Step | HEX | Použití (OBSERVED) |
|---|---|---|
| 50 | `#FDF1F1` | jemné výplně |
| 100 | `#FAD9DA` | — |
| 200 | `#F3B4B6` | — |
| 300 | `#EB8488` | — |
| 400 | `#E0545A` | — |
| 500 | `#D52F36` | — |
| 600 | `#C5232B` | **slevový badge, „Akce a slevy" CTA** |
| 700 | `#A21B22` | hover · také použito jako `#80181D`? ne — hover = 700 |
| 800 | `#80181D` | — |
| 900 | `#681619` | — |
| — | `#A21B22` | hover červeného CTA (OBSERVED v `Komponenty`) |

### 1.3 Konverzní — Zelená (EXPLICIT)
Kotva 600 = `#0E7F43`. **Vyhrazena pouze pro konverzi (Koupit) a stav skladem.**

| Step | HEX | Použití (OBSERVED) |
|---|---|---|
| 50 | `#E9F8EF` | badge „Doprava zdarma" pozadí |
| 100 | `#C9EDD8` | štítek skladem |
| 200 | `#97DBB4` | „právě otevřeno" text na tmavém |
| 300 | `#5FC58D` | — |
| 400 | `#2EAA6A` | LED tečka / status dot |
| 500 | `#159150` | — |
| 600 | `#0E7F43` | **tlačítko Koupit** |
| 700 | `#0B6937` | **hover Koupit + text „Skladem"** |
| 800 | `#0A542D` | — |
| 900 | `#084324` | — |

> **CONFLICT — zelená „skladem":** text skladovosti používá `#0B6937` (zelená 700) v kartě i katalogu — sjednoceno. Dřívější výskyt `#0E7F43` pro text byl nahrazen. Doporučení: semantic `color.status.inStock = green.700`.

### 1.4 Neutrální / text (OBSERVED — nikde centrálně jako škála)
| HEX | Význam | Výskyt |
|---|---|---|
| `#15181C` | text hlavní | karta, nadpisy, body |
| `#3A424C` | text tmavý sekundární | menu neaktivní, popisky |
| `#5A626C` | text sekundární | perex, popisky |
| `#7A828C` | text ztlumený | cena s DPH, recenze count |
| `#8A919C` | text terciální / popisky | meta, počty |
| `#9AA1AB` | text terciální (Obj. č.) | Obj. č. na kartě |
| `#9099A3` | placeholder popisky | (starý styl) |
| `#FFFFFF` | plocha / karta | karty, plochy |
| `#F7F9FB` | **pozadí stránky** | body všech aktuálních stran |
| `#F2F4F7` | jemná výplň | inputy, kvantifikátor, chips, řazení |
| `#C4CAD2` | okraj checkboxu (nezaškrtnuto) | karta Porovnat |

> **CONFLICT — neutrální odstíny:** existuje ~6 blízkých šedých (`#5A626C`, `#7A828C`, `#8A919C`, `#9AA1AB`, `#9099A3`, `#6B727C`, `#6E88AE`). Nejsou centrálně pojmenované. PROPOSED: sloučit do neutral škály 400–700, ale **zachovat skutečné hodnoty** — nevymýšlet nové.

### 1.5 Doplňkové / stavové (OBSERVED / ONE-OFF)
| HEX | Význam | Stav |
|---|---|---|
| `#F5A623` | hvězdičky hodnocení | OBSERVED (karta) |
| `#D5DAE0` | prázdné hvězdičky | OBSERVED |
| `#22C55E` | LED „otevřeno" (světlé pozadí / patička) | OBSERVED |
| `#2EAA6A` | LED „otevřeno" (topbar) | CONFLICT s `#22C55E` — dva zelené statusy |
| `#E41D32` | **logo červená — jen logo** | EXPLICIT (CLAUDE.md) |
| `rgba(255,255,255,.06)` | zvýrazněná Kontakt karta v patičce | OBSERVED |
| `rgba(255,255,255,.12/.2)` | sekundární tlačítko na tmavém | OBSERVED |
| `rgba(180,206,236,.45)` | okraj sociál/placeholder v patičce | OBSERVED |
| `rgba(20,47,86,.10)` | **hover stín karet** | OBSERVED (opakovaně) |
| `rgba(20,30,45,.14)` | stín dropdownu / našeptávače | OBSERVED |

### 1.6 CONFLICT — starý vs. nový barevný podklad
`Barevná paleta VAPP` používá pozadí `#F4F6F8` a okraje `#E4E7EC`/`#E7EAEE`/`#EEF0F3`; aktuální stránky používají pozadí `#F7F9FB` a **žádné okraje**. → V DS sjednotit na `#F7F9FB` + bezokrajové karty, `#F2F4F7` jako jemná výplň.

### Navrhované mapování barev (PROPOSED)
```
Primitive:
  color.brand.blue.50..900     = výše 1.1
  color.brand.red.50..900      = výše 1.2
  color.brand.green.50..900    = výše 1.3
  color.brand.logoRed          = #E41D32   (jen logo)
  color.neutral.*              = #15181C..#F2F4F7 (zachovat reálné)
  color.amber.500              = #F5A623

Semantic:
  color.text.primary           = #15181C
  color.text.secondary         = #5A626C
  color.text.tertiary          = #9AA1AB
  color.surface.page           = #F7F9FB
  color.surface.card           = #FFFFFF
  color.surface.subtle         = #F2F4F7
  color.surface.brandDark      = #142F56
  color.border.subtle          = #F2F4F7  (linky/oddělovače)
  color.action.primary.bg      = #1E5AA8  / hover #1A4A8A
  color.action.secondary.bg    = #EFF4FB  / hover #D8E6F6
  color.action.buy.bg          = #0E7F43  / hover #0B6937   (konverze)
  color.action.danger.bg       = #C5232B  / hover #A21B22
  color.status.inStock         = #0B6937
  color.status.open (LED)      = #22C55E  [CONFLICT s #2EAA6A]
  color.commerce.priceNet      = #15181C
  color.commerce.priceGross    = #7A828C
  color.commerce.discountBadge = #C5232B
  color.commerce.freeShipping  = text #0B6937 / bg #E9F8EF
  color.rating.star            = #F5A623 / empty #D5DAE0
```

---

## 2. Foundations — Typografie

### 2.1 Rodina (CONFLICT → řešeno)
- **EXPLICIT (aktuální):** `Exo 2`, fallback `'Helvetica Neue', Arial, sans-serif`. Osa 400–700.
- Mono (jen v systémových náhledech tokenů): `JetBrains Mono` 500/600.
- **CONFLICT:** `Barevná paleta VAPP` stále používá `Hanken Grotesk` 400–800 → v DS nahradit Exo 2, weight cap 700.

### 2.2 Škála (EXPLICIT z `Design systém VAPP`, desktop)
| Token (PROPOSED) | Velikost / weight / LH | Ukázka / užití |
|---|---|---|
| `heading.h1` | 36 / 700 / 1.15, ls −0.02em | název stránky |
| `heading.h2` | 28 / 700 / 1.2, ls −0.01em | sekce |
| `heading.h3` | 22 / 700 / 1.25 | blok |
| `heading.h4` | 18 / 700 / 1.35 | podblok |
| `body.large` (lead) | 18 / 400 / 1.6 | perex |
| `body.medium` | 16 / 400 / 1.6 | základní text |
| `label.small` | 14 / 500 / 1.5 | popisky |
| `caption` | 13 / 500 | minimum, Obj. č. |

### 2.3 Commerce typografie (OBSERVED, karta)
| Token (PROPOSED) | Hodnota | Užití |
|---|---|---|
| `price.large` | 18 / 700 | cena bez DPH (design systém ukázka) |
| `price.medium` | 17 / 700 | cena bez DPH (karta) — **CONFLICT: 17 vs 18** |
| `price.gross` | 13–14 / 400, #7A828C | cena s DPH |
| `product.title` | 16 / 700 / 1.3, min-height 42px | název produktu |
| `rating` | 13, letter-spacing 1.5px | hvězdičky |
| `stock` | 13 / 700 | skladovost |
| `orderNo` | 13 / 400, #9AA1AB | Obj. č. |

### 2.4 Navigace (EXPLICIT/OBSERVED)
- Hlavní menu desktop: **18 / 700**, aktivní = barva 600 + underline 3px `#1E5AA8`.
- Utility tlačítka v menu: 15 / 700, výška 44px.
- Breadcrumb: 13, oddělovač ikona chevron `#B4CEEC`.
- Patička nadpisy sloupců: 13 / 700 uppercase, ls .06em, `#7FA6D6`.
- Patička odkazy: 15, `#B4CEEC`, hover `#fff`.

> **MISSING:** samostatná mobilní typografická škála není definovaná (fluidní změny řešeny lokálně, např. H1 `clamp(26px,4vw,36px)` v prototypu = ONE-OFF). Doporučit definovat mobilní kroky.

---

## 3. Foundations — Spacing

### Nalezené hodnoty (EXPLICIT z `Design systém VAPP` spacing sekce)
| Token | px | Užití |
|---|---|---|
| space-1 | 4 | uvnitř chipů, ikona–text |
| space-2 | 8 | mezery v řádku, gap tlačítek |
| space-3 | 12 | gap karet v gridu |
| space-4 | 16 | padding karty, okraje mobilu |
| space-5 | 24 | mezi bloky uvnitř sekce |
| space-6 | 32 | padding větších ploch |
| space-7 | 48 | mezi podsekcemi |
| space-8 | 64 | mezi sekcemi stránky |

Odpovídá **4px gridu** (EXPLICIT deklarace). OBSERVED odchylky (ONE-OFF): `gap:7px` (chips), `gap:26px` (menu), `padding:18px` (dlaždice), `56px`/`36px` (patička). → PROPOSED: přidat kroky 6, 20, 28, 36, 40, 56 nebo tolerovat jako výjimky; **nesjednocovat bez záznamu**.

---

## 4. Foundations — Layout, grid, breakpointy

| Prvek | Hodnota | Stav | Zdroj |
|---|---|---|---|
| Container max-width | **1560 px** | EXPLICIT | CLAUDE.md, prototyp, katalog |
| Page padding (obsah) | 16 px (mobil i desktop okraj) | OBSERVED | prototyp `padding:… 16px` |
| Page padding (katalog) | 32 px | OBSERVED | Komponenty |
| Produktový grid | `repeat(auto-fill,minmax(min(46%,270px),1fr))` → 4 sl. desktop, 2 mobil | OBSERVED/EXPLICIT | prototyp + CLAUDE.md |
| Grid gap produktů | 12 px | OBSERVED | prototyp |
| Kategorické dlaždice | `repeat(auto-fit,minmax(280px,1fr))`, gap 12 | OBSERVED | prototyp/katalog |
| Karta šířka | min 280 / max 300 px | EXPLICIT | Produktová karta |
| Breakpoint mobil | **900 px** (`@media max-width:900px` přepíná `.dt`/`.mb`) | EXPLICIT | karta, prototyp |
| Sticky prvky | filtr/řazení lišta při scrollu | OBSERVED | prototyp |
| Fixed prvky | lišta „Porovnání", toast | OBSERVED | prototyp |

> **CONFLICT breakpointů:** jediný konzistentní BP je **900 px**. Jiné tablet/desktop breakpointy nejsou definované (MISSING). Fluidní chování řešeno přes `flex-wrap` a `auto-fit/auto-fill`.

---

## 5. Foundations — Radius

| Token (PROPOSED) | Hodnota | Užití | Stav |
|---|---|---|---|
| radius.small | **6 px** | inputy, badge, kvantifikátor, checkbox | EXPLICIT |
| radius.medium | **8 px** | karty, tlačítka, bloky, dropdown | EXPLICIT |
| radius.pill | **999 px** | chips, čítače, sociální kolečka | EXPLICIT |
| checkbox | 5 px | box Porovnat | ONE-OFF |

> **CONFLICT:** `Barevná paleta VAPP` (starý styl) používá radius 8/11/14 px na kartách/swatchech → v DS sjednotit na 6/8/999.

---

## 6. Stíny / elevace

| Token (PROPOSED) | Hodnota | Užití | Stav |
|---|---|---|---|
| shadow.none | none | klidový stav (karty bez borderu) | EXPLICIT (pravidlo) |
| shadow.cardHover | `0 6px 20px rgba(20,47,86,.10)` | hover karet, dlaždic, tokenů | OBSERVED (opakovaně) |
| shadow.overlay | `0 10px 30px rgba(20,30,45,.14)` | dropdown, našeptávač | OBSERVED |
| focus.ring | `inset 0 0 0 2px #1E5AA8` (nebo `0 0 0 2px`) | input focus | OBSERVED |

---

## 7. Komponenty (inventura z `Komponenty VAPP` + `Produktová karta VAPP`)

### 7.1 Tlačítka (EXPLICIT)
- **Typy:** Koupit (zelená #0E7F43), Primární akce (modrá #1E5AA8), Sekundární (bg #EFF4FB, text #1E5AA8), Akce a slevy (#C5232B), Disabled (bg #F2F4F7, text #9AA1AB), Ghost, Text (underline).
- **Varianty:** leading icon / trailing icon / icon-only / ghost / text.
- **Velikosti:** Standard `min-height:36`, fs 14, pad 14 · Medium `44`, fs 15, pad 20 · Large `52`, fs 16, pad 26.
- Ikony 24×24, radius 8, weight 700.

### 7.2 Kvantifikátor (EXPLICIT)
- Standard výška 44 px, Compact 36 px. Bg `#F2F4F7`, radius 6, střední pole bílé s horní/spodní linkou `#F2F4F7` **1px**, min-width 28 + padding (pojme 3 číslice).

### 7.3 Formulářové prvky (OBSERVED)
- Input: výška 44, bg `#F2F4F7`, radius 6, fs 15, focus ring 2px `#1E5AA8`.
- Checkbox: 20–21 px, radius 5–6, zaškrtnuto bg `#0E7F43`/`#1E5AA8` + bílá fajfka; nezaškrtnuto okraj `#C4CAD2`.
- Select (pseudo): výška 44, bg `#F2F4F7`, chevron `#5189CC`.

### 7.4 Badge & chips (OBSERVED)
- Sleva `−20%`: bg #C5232B, bílá, radius 6, 13/700.
- Novinka: bg #1E5AA8.
- Doprava zdarma: text #0B6937 / bg #E9F8EF.
- Filter chip (aktivní): pill #1E5AA8 bílý text + ✕.
- Značka chip: bílá + inset border `#E0E4E9`, hover `#84AEDF`, počet v závorce `#8A919C`.

### 7.5 Skladovost (EXPLICIT) — ikony **18×18**, text bez podbarvení
- Skladem `> 15 ks`: #0B6937 + check ikona.
- Není skladem: #C5232B + křížek v kroužku.
- Na dotaz: #8A919C + otazník v kroužku.

### 7.6 Produktová karta (EXPLICIT — jediný zdroj `Produktová karta VAPP.dc.html`)
Anatomie: fotka 4:3 (contain, bez ořezu, padding 18/12) → název 16/700 (min-height 42) → hvězdičky + počet → řádek: skladovost vlevo / cena vpravo pod sebou (bez DPH 17/700, s DPH 13/#7A828C) → kvantifikátor + Koupit → řádek: checkbox Porovnat + Obj. č. (#9AA1AB). Badge (sleva / doprava zdarma) vlevo nahoře. Celá karta klikací, hover stín. Šířka 280–300. **Bez výpisu parametrů.**

### 7.7 Vyhledávání s našeptáváním (OBSERVED, v katalogu i prototypu)
- Pole výška 48 (katalog) / 44 (desktop header) / 42 (mobil), bg #F2F4F7, radius 8/6, lupa 24×24, tlačítko odeslat modré, křížek clear.
- Dropdown: heading uppercase 13/700 #8A919C, položky min-height 52 (hit-area), thumbnail 40×40, chevron #B4CEEC, stav „nic nenalezeno".
- Diakriticky necitlivé hledání (normalize NFD). Data: kategorie + produkty.

### 7.8 Kategorická dlaždice (OBSERVED)
Ikona 44×44 (#EFF4FB), název 16/700 (nezkracovat), počet produktů, **4 podkategorie jako chips (pill #F2F4F7)**, CTA „Zobrazit vše →". Grid min 280.

### 7.9 Navigace (EXPLICIT)
- Topbar tmavý #142F56 se statusem otevírací doby (LED).
- Hlavní menu: levé záložky underline (18/700, aktivní #1E5AA8 + 3px underline), vpravo utility (Podpora sekundární, Akce a slevy #C5232B).
- Breadcrumb 13, chevron ikony.

### 7.10 Patička (OBSERVED)
Bg #142F56. 1. sloupec = zvýrazněná Kontakt karta (`rgba(255,255,255,.06)`, radius 8) s telefonem, e-mailem, LED statusem, „Všechny kontakty" jako sekundární tlačítko + „Sledujte nás" (Facebook, Instagram, YouTube — kolečka 40px). Dále sloupce Sortiment / Služby / O firmě / Zákazník, oddělovač, Platba + Doprava (placeholdery 44px dashed), copyright.

### 7.11 LED indikátor (EXPLICIT keyframes)
`@keyframes vapp-led` — pulzující box-shadow 1.8s. Zelená #22C55E = otevřeno, červená #C5232B = zavřeno. Velikost tečky 8–11 px.

### 7.12 Poradenský blok (OBSERVED)
Bg #EFF4FB radius 8, ikona telefonu 44×44, nadpis 16/700 #142F56, LED status, CTA telefon (primární) + e-mail (bílé).

---

## 8. Ikony, logo, obrázky

- **Ikony:** inline SVG, **standard 24×24** (viewBox 0 0 24 24), stroke-width 2, currentColor. Výjimka skladovost 18×18. Sada (OBSERVED): košík, telefon, obálka, lupa, filtr (hamburger), chevron (down/right), šipka vpravo, křížek, porovnání (obousměrné šipky), uživatelé, Facebook/Instagram/YouTube, check, otazník/kroužek, target (kategorie).
- **Logo:** `vapp-logo.svg` (křivky). Brand červená `#E41D32` (jen logo). Na tmavém `filter:brightness(0) invert(1)`.
- **Produktové fotky:** poměr kontejneru 4:3, `object-fit: contain` (bez ořezu), padding, centrované. Uloženy v `uploads/`.
- **Placeholder fotky:** šrafovaný `repeating-linear-gradient` (světlý 45°, hover verze −45° modrá).

---

## 9. Interaktivní stavy (OBSERVED)

| Stav | Řešení |
|---|---|
| hover karta/dlaždice | `box-shadow:0 6px 20px rgba(20,47,86,.10)` |
| hover primární tl. | bg → 700 (#1A4A8A) |
| hover sekundární | bg #EFF4FB → #D8E6F6 |
| hover Koupit | #0E7F43 → #0B6937 |
| hover Akce/slevy | #C5232B → #A21B22 |
| hover menu záložka | text → #1E5AA8 |
| focus input | ring 2px #1E5AA8 |
| aktivní menu | text 600 + underline 3px |
| aktivní filter chip | pill #1E5AA8 |
| disabled | bg #F2F4F7, text #9AA1AB, cursor not-allowed |
| hover chip značky | border → #84AEDF |

> **MISSING:** není definován `:active` (stisk), stav `:visited` odkazů, ani stavy klávesnicové navigace nad rámec focus ringu inputů.

---

## 10. Souhrn konfliktů a mezer (k rozhodnutí v DS)

**CONFLICT**
1. Font: `Hanken Grotesk` (Barevná paleta) vs. `Exo 2` (vše ostatní) → Exo 2.
2. Pozadí: `#F4F6F8` (paleta) vs. `#F7F9FB` (stránky) → #F7F9FB.
3. Karty: s okrajem `#E4E7EC` (paleta/starý) vs. bez okraje + hover stín → bez okraje.
4. Cena bez DPH: 17px (karta) vs. 18px (design systém ukázka) → sjednotit.
5. Zelený status LED: `#22C55E` vs. `#2EAA6A` → jeden odstín.
6. Skladem text: dřívější #0E7F43 vs. #0B6937 → #0B6937.
7. Radius: 6/8/999 (aktuální) vs. 8/11/14 (paleta) → 6/8/999.
8. ~6 blízkých neutrálních šedých bez centrálního pojmenování.

**MISSING**
- Mobilní typografická škála (jen fluidní ONE-OFF `clamp`).
- Tablet/desktop breakpointy nad rámec 900 px.
- Stavy `:active`, `:visited`, klávesnicová navigace.
- Dark mode (záměrně jen světlý — EXPLICIT).
- Tokeny pro z-index, animace/timing (kromě LED 1.8s), motion.
- Definice ikon jako fontu/spritu (nyní inline SVG).

**ONE-OFF (nesystémové)**
- `clamp(26px,4vw,36px)` H1 v prototypu.
- checkbox radius 5px, gap 7px u chipů, `#6E88AE`/`#6B727C` texty.

---

## 11. Doporučená struktura tokenů pro centrální DS (PROPOSED)
```
tokens/
  primitive/  color, typography(font,size,weight,lh,ls), space, radius, shadow, size(icon)
  semantic/   color.text|surface|border|action|status|commerce|rating,
              elevation, focus
  component/  button, input, checkbox, chip, badge, quantifier,
              productCard, search, categoryTile, nav, footer, statusLed
```
Zásada: **primitivy = přesné hodnoty projektu** (viz sekce 1–6). Semantic vrstva mapuje význam. Component vrstva odkazuje na semantic.

---

*Konec předávacího balíčku. Do centrálního DS vlož celý tento dokument. Neobsahuje žádné dohadované hodnoty vydávané za existující — vše je označeno stavem.*
