# VAPP — trvalé pokyny

## 0. Jak pracovat s design systémem

- **Nikdy nepiš vlastní hodnoty.** Barvy, velikosti písma, mezery, rádiusy a stíny ber výhradně z tokenů níže. Když token neexistuje, řekni to a navrhni jeho doplnění — nevymýšlej hodnotu ad hoc.
- **Zdroje pravdy:**
  - `DesignSystemVAPP.dc.html` — základy (barvy, typografie, spacing, rádiusy, elevace, layout, stavy).
  - `KomponentyVAPP.dc.html` — katalog UI prvků. Jediné místo, kde se komponenty ladí.
  - `ProduktovaKarta.dc.html` — jediný zdroj vzhledu produktové karty (ASCII název kvůli exportu na GitHub). Upravovat POUZE tam.
  - `FiltrDrawer.dc.html` — jediný zdroj panelu filtrů. Komponenta drží pozicování, overlay, animaci (`motion.panel` 400 ms), Escape, focus trap i zámek scrollu; facety přicházejí jako čistá data v propu `groups`, přepnutí volby jde přes skalární `onToggleOption(indexSkupiny, indexVolby)`.
  - `Paginace.dc.html` — jediný zdroj stránkování pod výpisem. Bezstavová: `page`, `pageCount`, `shownCount`, `totalCount`, `nextBatch` jsou data, callbacky skalárně (`onPage(cislo)`, `onLoadMore()`). Souhrn se skryje `totalCount=0`, tlačítko „Načíst další" `nextBatch=0`. Struktura je na všech šířkách stejná — čísla i navigace zůstávají. Na `max-width:549px` mizí textové labely Předchozí/Další a prvky se zmenší o krok (44 → 36 px, gap 4), kompaktní ukazatel se nezavádí. Okno čísel se zužuje podle šířky (`matchMedia`): nad 550 px ±2, `XS` ±1, `XXS` jen aktivní stránka mezi první a poslední — navigace se vejde i na 320 px. Hover a stisk se chovají jako `ghost` tlačítko (hover `#EFF4FB`, `:active` posun 1 px), aktivní číslo zůstává `#1E5AA8`/bílá. Progress bar ani scroll na začátek výpisu do komponenty nepatří.
  - `VyberVariant.dc.html` — **jediný zdroj výběru variant v detailu produktu** (dílu i přívěsu). Jedna osa výběru = jedna instance. Bezstavová: `options` jsou čistá data (`{label, note, noteTone:'stock'|'muted', meta, disabled}`), aktivní volba přichází v `activeIndex`, změna se hlásí skalárně `onPick(index)`. `layout` `karty` / `radky` přepíná zobrazení, `kind="select"` udělá dropdown (modrý chevron blok 52 px). Zaškrtávací kolečko je **vždy 22 × 22 px s ikonou `check` 18 px, offset −8 px** — velikost se nikde nepřepisuje. Nové vzhledy variant se nezavádějí mimo tuto komponentu.
  - `Select.dc.html` — **jediný zdroj rozbalovacího pole (select)**. Nativní `<select>` s naším vzhledem: výška `size.control` 44 px (`size="compact"` 36 px), rádius 6, fs 15 (compact 14), na `max-width:549px` fs 16 kvůli iOS zoomu. Varianty: `subtle` (výchozí — plocha `surface.subtle` `#F2F4F7`, text `text.primary`, chevron `icon.chevron`) a `outline` (bílé pole, linka `#1E5AA8`, text `#1E5AA8`, plný modrý blok chevronu 52 px — zvýrazněné pole v konfigurátoru). Focus = ring `inset 0 0 0 2px #1E5AA8` na celém poli. Bezstavová: `options` čistá data, `value` + `onChange(value)`. Vlastní dropdown ze `<span>`/`<div>` se nekreslí.
  - `CenovyFiltr.dc.html` — jediný zdroj rozsahu ceny (dva inputy 44 px + dvojitý slider). Bezstavová vůči stránce: hodnoty přicházejí v `valueFrom` / `valueTo`, změna se hlásí přes `onChange(od, do)`.
  - `Hlavicka.dc.html` — jediný zdroj hlavičky. **Platná je jedna verze: V3** = tmavý pás USP nad hlavičkou (`Usp` `variant="pas" tone="tmavy"`) + hlavička bez tmavého topbaru, prop `variant="V4"` (interní název kódu, v UI se jí říká V3). Varianty V1–V3 jsou **smazané** (markup, CSS i tweak `variant`) — komponenta umí jednu hlavičku a stránky jí variantu nepředávají. Přepínač hlavičky na stránkách i v prezentační liště je zrušený.
  - `Kosik.dc.html` — box košíku v hlavičce a **jediné místo výběru měny**. Box drží cenu (tlačítko do košíku), za vertikálním oddělovačem `#D5DAE0` je přepínač měny ve formě `CZK` + chevron 18 px, který otevírá seznam `CZK / EUR`. Ikona měny (`coin`) v akční skupině hlavičky je zrušená. Bezstavový vůči stránce: `currency`, `currencies` jsou data, změna se hlásí `onCurrencyChange(code)`; otevřeno/zavřeno drží komponenta (Escape a klik mimo zavírají).
  - `MegaMenu.dc.html` — jediný zdroj rozbaleného desktopového megamenu. **Jedna finální verze (rozhodnuto 18. 9. 2026):** mřížka sdružovacích kategorií s fotkami a pravým railem. Varianta M2 (sloupcová) je smazaná — markup, CSS, data i přepínač; prop `variant` neexistuje a nezavádí se. Bezstavová: `groups` jsou čistá data (`{name, href, items:[{name, href}]}`), navigace jde přes `href` (odkazy, ne callbacky). Komponenta drží pravidlo **max `maxItems` (default 6) podkategorií na skupinu + odkaz „Zobrazit vše (N)"** na hub, mřížku sloupců (`columns` v XL/XXL, pod 1150 px tři, pod 820 dva, pod 550 jeden) a šířku obsahu webu (`max-width:1560`, padding 32/16). Vpravo je volitelný **rail** (`railItems`, `railLabel` — default „Nejhledanější") — vlastní sloupec 260 px přes celou výšku panelu, oddělený svislou linkou `border.subtle`; položka s `tone:'sale'` je červená (`red.50` plocha, `red.600` text) a stojí na konci sloupce. Akce a slevy patří sem, ne do mřížky skupin. Otevírání, zavírání a pozicování drží `Hlavicka` — hover nebo fokus tabu otevře, Escape, odjezd myší (160 ms) a klik mimo zavřou; otevřený je vždy nejvýš jeden tab. **Data pro všechny stránky leží v `vapp-menu.js`** (`window.VAPP_MEGA` klíčovaný labelem tabu, dnes „Náhradní díly" a „Přívěsy"), který si Hlavicka načítá v helmetu — díky tomu megamenu funguje na každé stránce. Zdroj pravdy struktury Náhradních dílů je `HUBS` + `SALES` v `nahradnidily.dc.html`; při změně tam se `vapp-menu.js` přegeneruje. Stránka, která strukturu drží živě (nahradnidily s přepínačem V1/V2), pošle `megaTab` + `megaGroups` a default pro svůj tab přebije. Panel má z-index 60 uvnitř stohovacího kontextu hlavičky, stejně jako mobilní menu. Počty produktů se v megamenu nezobrazují.
  - `MobilniMenu.dc.html` — jediný zdroj obsahu rozbaleného mobilního menu. Pozicování, `z-index`, `max-height`, `overflow`, `box-shadow`, Escape, focus trap a zámek scrollu drží `Hlavicka`, ne komponenta.
  - `VypisKategorii.dc.html` — mřížka kategorií složená z `KategorickaDlazdice`. Bezstavová; která kategorie je otevřená drží stránka. Prop `layout` (`dlazdice` / `kompaktni`) přepíná vzhled dlaždic; prázdná hodnota = vlastní default komponenty (`DEFAULT_LAYOUT`, dnes `kompaktni` — drž ho shodný s defaultem v `data-props`). Stránka Náhradních dílů má vlastní tweak `categoryLayout` s volbou „podle komponenty“.
  - `ArchivBarevnaPaletaVAPP.dc.html` — **archiv, nepoužívat.** Obsahuje starý styl (Hanken Grotesk, borders, rádiusy 11–14).
- **Struktura složek je daná: všechny soubory leží v kořeni projektu.** Podadresáře (např. `Components/`) se nezavádějí — rozhodnuto, nevracet se k tomu.
- **Znovupoužitelné komponenty** = samostatné `.dc.html` soubory importované přes `dc-import`. Návrhové stránky komponenty nikdy nekopírují, vždy importují.
- Při změně tokenu aktualizuj tento soubor i `DesignSystemVAPP.dc.html`.
- **`dc-import` a prop `name`:** `dc-import` obsazuje atribut `name` pro výběr souboru a předává ho dítěti i jako prop — komponenta, která potřebuje vlastní prop `name`, musí použít alias. U `Ikony.dc.html` je proto kanonický prop `iconName`; `name` funguje jen ve standalone náhledu.
- **Funkce přes `dc-import`:** funkce se předávají jen jako přímý prop. Funkce vložená dovnitř objektu nebo pole se při druhém předání ztratí — runtime hodnotu klonuje. Kontejnerová komponenta proto dostává data bez funkcí a skalární callbacky zvlášť, a per-položkové handlery si vyrábí sama.
- **`flex:1` na `dc-import`:** nepropíše se při mountu — komponenta, která má sdílet šířku v řádku, se obaluje vlastním divem (`flex:1; min-width:0; display:flex`).

---

## 1. Barvy

### Modrá — primární (`blue`)
`50 #EFF4FB` · `100 #D8E6F6` · `200 #B4CEEC` · `300 #84AEDF` · `400 #5189CC` · `500 #2C6BB8` · **`600 #1E5AA8`** · `700 #1A4A8A` · `800 #173C70` · `900 #142F56`

### Červená — sekundární (`red`)
`50 #FDF1F1` · `100 #FAD9DA` · `200 #F3B4B6` · `300 #EB8488` · `400 #E0545A` · `500 #D52F36` · **`600 #C5232B`** · `700 #A21B22` · `800 #80181D` · `900 #681619`

### Zelená — konverzní (`green`)
`50 #E9F8EF` · `100 #C9EDD8` · `200 #97DBB4` · `300 #5FC58D` · `400 #2EAA6A` · `500 #159150` · **`600 #0E7F43`** · `700 #0B6937` · `800 #0A542D` · `900 #084324`

> Zelená je vyhrazená **pouze** pro konverzi (Koupit) a dostupnost (skladem, LED). Nikdy dekorativně.

### Neutrální (`neutral`)
`0 #FFFFFF` · `50 #F7F9FB` · `100 #F2F4F7` · `200 #D5DAE0` · `300 #C4CAD2` · `400 #9AA1AB` · `500 #8A919C` · `600 #7A828C` · **`650 #666E78`** · `700 #5A626C` · `800 #3A424C` · `900 #15181C`

> Šířka okraje není token — všude 1 px. Odstíny `#9099A3`, `#6B727C`, `#6E88AE` a `#22C55E` jsou **zrušené** — mapuj na nejbližší krok škály. Zrušený `#6B727C` nemá s krokem 650 `#666E78` nic společného — na nejbližší platný krok mapuj podle účelu.

> **Kontrastní přemapování (a11y audit).** `text.muted`, `text.tertiary`, `status.onRequest` a `commerce.priceGross` byly `#7A828C` / `#9AA1AB` / `#8A919C` — tyto hodnoty nedosahovaly 4,5:1 na bílé (3,89 / 2,61 / 3,18). Mezi `#5A626C` a bílou škála neunese tři rozlišitelné úrovně, které by všechny prošly, proto se **muted a tertiary slučují** do kroku 650 `#666E78` (5,16:1 na bílé, 4,89:1 na `#F7F9FB`, 4,69:1 na `#F2F4F7` — projde i na `surface.subtle`) a hierarchii nese velikost a řez písma, ne barva. `border.control` `#C4CAD2` (1,65:1) → `#91959B` (3,01:1) kvůli 3:1 pro hranice ovládacích prvků. Kroky škály 300/400/500/600 zůstávají beze změny — jen se na ně už nemapují textové tokeny.

> **Chevrony (a11y).** `#84AEDF` má na bílé jen 2,1:1. Chevron je netextový prvek nesoucí význam, potřebuje 3:1 — proto `icon.chevron` `#5189CC` (blue.400). `#84AEDF` zůstává jen pro dekorativní plochy a ukázky, ne pro ikony.

### Sémantické tokeny

| Token | Hodnota | Užití |
|---|---|---|
| `text.primary` | `#15181C` | nadpisy, názvy, cena bez DPH |
| `text.secondary` | `#5A626C` | perex, popisky, neaktivní menu |
| `text.muted` | `#666E78` | cena s DPH, počet recenzí |
| `text.tertiary` | `#666E78` | obj. č., meta, disabled text |
| `text.onDark` | `#FFFFFF` | text na tmavých plochách |
| `text.onDarkMuted` | `#B4CEEC` | odkazy v patičce |
| `surface.page` | `#F7F9FB` | pozadí stránky |
| `surface.card` | `#FFFFFF` | karty a bloky |
| `surface.subtle` | `#F2F4F7` | inputy, chipy, kvantifikátor |
| `surface.brandDark` | `#142F56` | topbar, patička |
| `border.subtle` | `#F2F4F7` | oddělovače a linky |
| `border.control` | `#91959B` | nezaškrtnutý checkbox |
| `border.controlHover` | `#5A626C` | hranice ovládacího prvku v hoveru — 1px okraj potřebuje velký rozdíl, aby byla změna vidět; nejbližší krok `#7A828C` je na hairline nerozeznatelný. `#5A626C` je zároveň `text.secondary`, okraj a popisek tak ztmavnou spolu |
| `action.primary` | `#1E5AA8` / hover `#1A4A8A` | primární tlačítko |
| `action.secondary` | `#EFF4FB` / hover `#D8E6F6` | sekundární tlačítko, text `#1E5AA8` |
| `action.buy` | `#0E7F43` / hover `#0B6937` | tlačítko Koupit |
| `action.danger` | `#C5232B` / hover `#A21B22` | Akce a slevy |
| `action.disabled` | bg `#F2F4F7`, text `#9AA1AB` | neaktivní stav |
| `status.inStock` | `#0B6937` | text „Skladem > 15 ks" |
| `status.outOfStock` | `#C5232B` | není skladem |
| `status.onRequest` | `#666E78` | na dotaz |
| `status.open` | `#2EAA6A` | LED otevřeno |
| `status.openOnDark` | `#97DBB4` | text „právě otevřeno" na tmavém pruhu (green.200) |
| `status.closed` | `#C5232B` | LED zavřeno |
| `commerce.priceNet` | `#15181C` | cena bez DPH |
| `commerce.priceGross` | `#666E78` | cena s DPH |
| `commerce.freeShipping` | text `#0B6937`, bg `#E9F8EF` | doprava zdarma |
| `link.onLight` | `#15181C` / hover `#1E5AA8` | textový odkaz na světlém pozadí (telefon, e-mail) |
| `link.onLightBlue` | `#1E5AA8` / hover `#1A4A8A` | modrý odkaz v textu |
| `link.onDark` | `#FFFFFF` / hover `#D8E6F6` | odkaz na tmavé ploše (topbar, patička) |
| `link.onDarkMuted` | `#B4CEEC` / hover `#FFFFFF` | servisní odkazy v topbaru a patičce |
| `guide.surface` | `#FCF1DC` / hover `#F7E4BC` | plocha chipu odkazu do poradny |
| `guide.text` | `#7A4E00` | text a ikona chipu poradny (6,4:1 na `#FCF1DC`) |
| `rating.star` | `#F5A623` / prázdná `#D5DAE0` | hvězdičky |
| `icon.chevron` | `#5189CC` | chevrony a navigační šipky (blue.400) |
| `brand.logoRed` | `#E41D32` | **výhradně logo**, nikdy v UI |

---

## 2. Typografie

Font: **Exo 2** (Google Fonts), fallback `'Helvetica Neue', Arial, sans-serif`. Osa 400–700, **maximální tučnost 700**. Základní text 16 px, **minimum 13 px**.

Povolené výjimky z minima 13 px:
- číselné čítače v Hlavicce a Kosiku (16 × 16 px, font 10/700) — nejde o čtený text, ale o kompaktní číselný indikátor; význam nese `aria-label`,
- textové labely u ikon v Hlavicce (Přihlásit, Porovnat).

Jiné výjimky se nezavádějí bez rozhodnutí.

Dokumentační a katalogové bloky uvnitř souborů komponent (popisky „Kdy / Kdy ne", názvy souborů, ukázkové kódy) nejsou UI a minimum 13 px se na ně nevztahuje. Platí jen pro to, co se dostane na web.

### Desktop
| Token | Hodnota |
|---|---|
| `heading.h1` | 36 / 700 / 1.15, ls −0.02em |
| `heading.h2` | 28 / 700 / 1.2, ls −0.01em |
| `heading.h3` | 22 / 700 / 1.25 |
| `heading.h4` | 18 / 700 / 1.35 |
| `body.large` | 18 / 400 / 1.6 |
| `body.medium` | 16 / 400 / 1.6 |
| `label.small` | 14 / 500 / 1.5 |
| `caption` | 13 / 500 / 1.4 |
| `overline` | 13 / 700 uppercase, ls .06em |

### Mobil (pásmo S a níž, ≤ 819 px)
`h1` 26/700/1.2 · `h2` 22/700/1.25 · `h3` 18/700/1.3 · `h4` 16/700/1.35 · `body.large` 16/400/1.6 · `body.medium` beze změny.

Přepínat skokem na breakpointu, **ne** přes `clamp()`. Hranice je **819/820**. Nesouvisí se zlomem navigace 1000 — typografii řídí délka řádku, navigaci dostupná šířka pro záložky.

### Commerce
| Token | Hodnota |
|---|---|
| `price.primary` | 17 / 700, `text.primary` — cena bez DPH, bez popisku |
| `price.gross` | 13 / 400, `text.muted` — „X Kč s DPH" |
| `product.title` | 16 / 700 / 1.3, min-height 42 px |
| `stock` | 13 / 700 |
| `orderNo` | 13 / 400, `text.tertiary` |
| `rating` | 13, letter-spacing 1.5px |

---

## 3. Spacing — 4px grid

`space-1` 4 · `space-2` 8 · `space-3` 12 · `space-4` 16 · `space-5` 20 · `space-6` 24 · `space-7` 28 · `space-8` 32 · `space-9` 36 · `space-10` 40 · `space-11` 48 · `space-12` 56 · `space-13` 64

Mezihodnoty mimo tuto řadu nepoužívat.

---

## 4. Rádiusy, elevace, motion

- **Rádiusy:** `radius.sm` 6 px (inputy, badge, kvantifikátor, checkbox) · `radius.md` 8 px (karty, tlačítka, bloky, dropdown) · `radius.pill` 999 px (chipy, čítače, sociální kolečka). Rádiusy 5, 11 a 14 px jsou zrušené.
- **Elevace:** karty jsou **bez borderů** a v klidu **bez stínu**. Hover `0 6px 20px rgba(20,47,86,.10)`. Overlay (dropdown, našeptávač, drawer) `0 10px 30px rgba(20,30,45,.14)`. `shadow.sticky` `0 2px 8px rgba(20,47,86,.06)` — vlasové oddělení přilepené hlavičky a sticky filtrační lišty od obsahu; hlavička ho nese vždy, lišta jen ve stavu přilepeno. Focus ring `inset 0 0 0 2px #1E5AA8`.
- **Motion:** 60 ms stisk · 120 ms barvy a pozadí · 150 ms stíny · `motion.panel` **400 ms** posun panelů (drill-down menu, drawer filtrů) · easing `ease`.
- **Rozměry:** `size.control` 44 px — input, Kvantifikátor Standard, ikonové tlačítko, Tlačítko Medium. `size.row` 48 px — řádek seznamu a navigace.
- **Jen světlý režim.** Dark mode se nedělá.
- **Z-index (zápis dnešního stavu, nic se nepřečísluje):** `z.stickyBar` 60 · `z.header` 70 · `z.drawerOverlay` 80 · `z.drawerPanel` 90 · `z.toast` 95 · `z.presenter` 96 · `z.debug` 99. Panel mobilního menu má z-index 60 uvnitř stohovacího kontextu hlavičky — není to globální hodnota. **Každá nová hodnota se sem zapíše.**

---

## 5. Layout

- **Reset kořene stránky (závazné, chyba se opakovala):** každá stránková `.dc.html` má v `<helmet><style>` tento reset, jinak runtime kolem webu udělá odsazení/rámeček:
  `html,body{margin:0!important;padding:0!important;}`
  `#dc-root{margin:0!important;padding:0!important;width:100%!important;max-width:none!important;border:0!important;}`
  `#dc-root>.sc-host{margin:0!important;padding:0!important;width:100%!important;}`
  Kolem celého webu **nikdy** není odsazení — žádná výjimka.
- **Full-bleed vzorec (závazné):** stránka nikdy nemá vnější padding ani `max-width` na kořenovém prvku — kořen je `width:100%`, `margin:0`, `padding:0`, bez `border-radius`, nese jen `background: surface.page #F7F9FB`. Sekce jdou přes celou šířku viewportu (topbar a patička `#142F56`, zbytek `surface.page`); omezený je až vnitřní obal každé sekce: `max-width:1560px; margin:0 auto; padding:0 32px` na desktopu a `0 16px` pod 900 px. `html` a `body` mají `margin:0; padding:0`. Platí i pro hlavičku a patičku.
- Container max-width **1560 px**. Page padding 32 px desktop / 16 px mobil.
- **Produktový grid** je na škále XXS–XXL, pevné počty sloupců, gap 20 px: `XXL` **5** · `L / XL` **4** · `M` **3** (`max-width:999px`) · `S` **2** (`max-width:819px`) · `XS / XXS` **1** (`max-width:549px`). Formule `auto-fill minmax()` je zrušená — počty jsou explicitní, aby odpovídaly pásmům.
- Karta 280–300 px. Grid kategorií `auto-fit, minmax(280px,1fr)`, **gap 8** — mezera mezi dlaždicemi kategorií a podkategorií je záměrně menší než v produktovém gridu (20), aby byl rozcestník na notebooku nižší a bylo vidět i filtraci a začátek výpisu. Blok kategorií má nad sebou 12 px.
- Rozměry karty 280–300 px platí jen pro samostatný náhled; v produktovém gridu je karta tekutá (`width:100%`, `min-width:0`, `max-width:none`).
- **Nadpis výpisu — finální podoba (rozhodnuto 18. 9. 2026):** H1 a popis kategorie jdou přes celou šířku v jednom sloupci, řádek „Nejhledanější" stojí pod popisem (popisek a chipy v jednom řádku, zalomí se až když se nevejdou). Dvousloupcová varianta se svislou linkou a pravým sloupcem je zrušená (`showTopCol` odstraněn) a přepínač H1/H2 v prezentační liště je smazaný — platí na Náhradních dílech i výpisech přívěsů.
- **Sticky filtrační lišta** v prototypu platí na všech šířkách, včetně pásem M, S, XS a XXS (mimo variantu S1, která sticky nemá vůbec). Vypínání sticky pod 900 px je zrušené — rozhodnuto, nevracet se k tomu.
- **Chování sticky lišty vůči hlavičce — otevřené varianty S1 / S2 / S3** (přepínač v `PrezentacniLista`, stav `stickyMode` v `nahradnidily.dc.html`, default `S2`):
  - `S1` = bez sticky: filtrační lišta normálně odscrolluje pod hlavičku (`--vp-bar-pos:static`) — nejjednodušší varianta.
  - `S2` = lišta vytlačí celou hlavičku (`--vp-hdr-push` na `.hd-root`), lišta se lepí na `top:0`.
  - `S3` = zůstane horní řádek hlavičky s logem, vyhledáváním a košíkem; lišta nahradí jen navigační řádek a lepí se na `top = výška hlavičky − výška navigace`. Navigace se skrývá `visibility:hidden` (tok stránky se nemění, obsah neposkakuje) a při scrollu nahoru se hned vrátí. V pásmech M a níž, kde navigační řádek neexistuje, zůstává celá hlavička.
  - **Dynamiku sticky režimu nesou CSS proměnné na `:root`** (`--vp-stick-top`, `--vp-nav-op` / `--vp-nav-vis` / `--vp-nav-delay`, `--vp-nav-pe` / `--vp-hdr-pe`, `--vp-hdr-push`, `--vp-hdr-shadow` / `--vp-bar-shadow`, `--vp-bleed-w` / `--vp-bleed-ml`), které nastavuje scroll handler stránky; prvky je čtou v inline stylu (`top:var(--vp-stick-top,0px)`). Inline styly ani `classList` na prvcích se k tomu **nepoužívají** — React je při každém překreslení přepíše a přepínání se rozpadne.
  - Návrat navigace je animovaný: `opacity .3s ease` + `visibility` s prodlevou `.3s`, lišta jede přes `transition:top .3s ease`.
  - Odstup lišty od sentinelu se čte z jejího `margin-top`, **nikdy** z `getBoundingClientRect` nebo `offsetTop` — přilepená či právě animovaná sticky lišta vrací posunutou hodnotu a přepínání osciluje.
  - Kvůli S3 má `Hlavicka` bílé pozadí rozdělené na dva pruhy (`.hd-toprow` a `nav.hd-dt`), ne na společném obalu — jinak by bílá plocha překryla prosvítající lištu. Nevracet bílé pozadí na obal.
### Breakpointy — závazné názvosloví

Projekt používá sedm pásem `XXS`–`XXL`. Toto je jediné platné pojmenování; starší popisy typu „mobil / tablet / desktop" se dál nepoužívají.

| název | rozsah | poznámka |
|---|---|---|
| `XXL` | ≥ 1560 px | container se přestává roztahovat |
| `XL` | 1150–1559 px | |
| `L` | 1000–1149 px | |
| `M` | 820–999 px | |
| `S` | 550–819 px | |
| `XS` | 420–549 px | |
| `XXS` | ≤ 419 px | |

Hranice: **1560 · 1150 · 1000 · 820 · 550 · 420**.

**Zlomy, které už na nové škále běží:**
- **navigace v `Hlavicka`** — hamburger a mobilní vyhledávání na `max-width:999px`, desktopová navigace od `min-width:1000px`. Celé pásmo `M` je mobilní.
- **labely u ikon Přihlásit / Porovnat** — mizí na `max-width:549px` (pásma `XS` a `XXS`), zůstává jen ikona; mezera skupiny se zmenšuje na 4 px.
- **logo** — výška 24 px na `max-width:419px` (pásmo `XXS`).
- **drill-down podkategorií v prototypu** — dlaždice na `min-width:820px`, řádkový seznam na `max-width:819px`. Přepíná se CSS, ne `matchMedia`.
- **mobilní typografie** — `max-width:819px`, pásma `S`, `XS`, `XXS`.
- **page padding 16/32** — `max-width:819px`, jednotně ve všech souborech (`.vp-in`, `.vp-bleed`).
- **pomocníci viditelnosti** `.dt` (`max-width:819px`) a `.mb` (`min-width:820px`) — přepínají se v páru.
- **patička** — sloupce odkazů 4 → 2 na `max-width:1149px`, kontaktní blok na plnou šířku na `max-width:999px` (pásma M a níž), sloupce odkazů se pod 820 px zabalí do akordeonu (výchozí stav zabalený).

**Hover a jemný ukazatel se nezjišťují šířkou okna.** Používá se `(hover:hover) and (pointer:fine)`, nikdy breakpoint.

**Stav migrace: dokončeno.** Všechny media queries v projektu leží na hranicích 1560 · 1150 · 1000 · 820 · 550 · 420. Jediná výjimka je container query `max-width:380px` v `ProduktovaKarta` — měří šířku karty, ne viewportu, a na škálu nepatří.

Platí dál:
- nové media queries piš **výhradně** na hranicích nové škály,
- migrace probíhá po komponentách s ověřením kapturou, **nikdy dávkově**.

---

## 6. Ikony a obrazovost

- Inline SVG, **24 × 24 px** (`viewBox 0 0 24 24`), `stroke-width 2`, barva přes `currentColor`, bez výplní.
- **Zdroj ikon:** všechny ikony pocházejí z `Ikony.dc.html` (sada **Tabler**) — jediný registr. Komponenty ikony **nekreslí inline**, vkládají je přes `dc-import name="Ikony"` (prop `iconName` + `size`; v tlačítkách přes props `icon` / `iconTrailing` / `iconOnly`). Kontrakt 24×24 / stroke 2 / `currentColor` platí beze změny.
- Ikona `book` (Tabler) je vyhrazená pro poradnu a články — chip i tlačítko `guide` používají `book`.
- Výjimka: ikony skladovosti **18 × 18**, ikona v chipsu velikosti Small **18 × 18**. Hlavní menu na desktopu 18 px.
- Kategorická dlaždice má varianty `standard` (fotka/ikona, název, podkategorie, „Zobrazit vše") a `kompaktni` (bílá plocha, fotka 48 × 48 vlevo, jen název, min-height 64 — bez podkategorií). **Počet produktů se v dlaždicích kategorií ani podkategorií nezobrazuje** — informace nepomáhá rozhodnutí a bere výšku; data v `count` zůstávají.
- Kategorická dlaždice zobrazuje **náhledovou fotku 64 × 64**, `object-fit: contain`, bez pozadí, paddingu i rádiusu. Když fotka chybí, dlaždice se vrací k **ikoně 44 × 44 v kruhu**. Ikona v kruhu 44 × 44 dál platí pro poradenský blok. Sociální kolečko 40 × 40.
- **Otevřený bod:** fotky mají být buď u všech kategorií, nebo u žádné — smíšený stav, kdy část dlaždic má fotku a část kruhovou ikonu, vypadá rozpadle.
- Produktové fotky: poměr **4:3**, `object-fit: contain`, bez ořezu, centrované, s paddingem.
- Logo `vapp-logo.svg` (křivky, `#E41D32`). Na tmavém `filter: brightness(0) invert(1)`.

---

## 7. Interaktivní stavy

| Stav | Řešení |
|---|---|
| hover karta / dlaždice | `shadow.cardHover` |
| hover tlačítka | pozadí o krok tmavší (600 → 700) |
| hover záložka menu | `color: blue.600` |
| hover odkaz na světlém | `#15181C → #1E5AA8`, přechod 120 ms |
| hover modrý odkaz | `#1E5AA8 → #1A4A8A` |
| hover odkaz na tmavém | `#FFFFFF → #D8E6F6`, resp. `#B4CEEC → #FFFFFF` |
| hover chip značky | `border-color: blue.400 #5189CC` — `blue.300` má na bílé jen 2,1:1 |
| hover hranice ovládacího prvku | `border.controlHover` `#5A626C` |
| hover položky v overlayi | pozadí `surface.subtle` `#F2F4F7`, přechod 120 ms — platí i pro neaktivní položky dropdownu a řádky seznamu |
| `:active` tlačítka | `translateY(1px)` + tmavší pozadí |
| focus input | focus ring |
| `:focus-visible` ostatní | `outline: 2px solid #1E5AA8`, offset 2px |
| aktivní záložka menu | `blue.600` + underline 3px |
| aktivní filter chip | pill `blue.600`, bílý text, ✕ |
| disabled | bg `neutral.100`, text `neutral.400`, `cursor: not-allowed` |
| navštívený odkaz | beze změny |

---

## 8. Obsahová a produktová pravidla

- Produktové karty **náhradních dílů** NEobsahují výpis klíčových vlastností/parametrů. Ty se vypisují pouze na kartách **přívěsů**.
- **Varianta karty přívěsu** je v `ProduktovaKarta.dc.html`, ne v samostatném souboru. Zapíná ji přítomnost dat: `p.specs` = pole max **3** položek `{label, value}`, vykreslené pod hodnocením jako řádky label vlevo (13/400, `text.muted`) / hodnota vpravo (13/700, `text.primary`). Bez `specs` je karta shodná s dílovou verzí. Standalone náhled má tweak `variant` (`dil` / `prives`) jen pro ukázková data.
- **Anatomie karty náhradního dílu:** fotka 4:3 → název (`product.title`) → hvězdičky + počet → obj. číslo (13/400, `text.tertiary`, samostatný řádek pod hodnocením — nikdy jako overlay na fotce) → řádek: skladovost vlevo / ceny vpravo pod sebou (bez DPH primárně a bez popisku, pod ní menší „X Kč s DPH") → kvantifikátor + tlačítko Koupit → řádek: checkbox Porovnat. Badge (sleva / Doprava zdarma) vlevo nahoře na fotce. Celá karta je klikací na detail.
- **Galerie na detailu produktu — finální podoba (rozhodnuto 18. 9. 2026):** sloupec miniatur vlevo + velká fotka vpravo (dřívější varianta V2). Varianta s miniaturami pod fotkou i přepínač „Galerie" v controlbaru jsou smazané na detailu dílu i přívěsu; nezavádí se znovu. Na `max-width:819px` se miniatury skryjí a velká fotka se přepíná šipkami s ukazatelem „1 / N".
- **Množstevní slevy jsou jen u náhradních dílů.** Detail přívěsu je nemá — přívěs se množstevně neprodává. Sekce v detailu přívěsu neexistuje ani jako vypnutá volba v controlbaru.
- **Hlavní menu:** záložky s underline (aktivní podtržená), **ne** tlačítka.
- **Tlačítka:** jediný zdroj je `Tlacitko.dc.html`. Varianty: `primary`, `secondary`, `buy`, `danger`, `guide`, `ghost`, `text`, `textDanger`. `guide` = okrová rodina poradny (plocha `guide.surface` `#FCF1DC`, text a ikona `guide.text` `#7A4E00`, hover `#F7E4BC`) — vyhrazená pro vstup do poradny a článků, vždy s ikonou `book`; jinde se nepoužívá. `ghost` = akcentní text bez plochy (text `#1E5AA8`, hover pozadí `#EFF4FB`). `dangerSecondary` = sekundární tlačítko v červené rodině (plocha `#FDF1F1`, text `#C5232B`, hover `#FAD9DA`) — doplňkové tlačítko vedle `danger` v akčním/slevovém kontextu. `textDanger` = textové tlačítko bez plochy s **červeným textem** (`#C5232B` / hover `#A21B22`, hover pozadí `#FDF1F1`) — zvýrazněná obdoba varianty `text`. Používá se tam, kde má textová akce vyniknout nebo nese destruktivní či slevový význam. Oba jsou dostupné ve všech čtyřech ikonových konfiguracích (ikona vlevo, jen text, ikona vpravo, icon-only s `ariaLabel`). Velikosti Standard `min-height 36` / fs 14 · Medium `44` / fs 15 · Large `52` / fs 16, horizontální padding `16 / 20 / 24`. Rádius 8, weight 700. Interaktivní tlačítko je vždy `<button>`, nikdy `<span>` (jinak se nespustí `:focus-visible`). `<button>` má shrink-to-fit šířku — tlačítko použité jako řádek seznamu (položka dropdownu, řádek navigace) musí mít `width:100%`, jinak podbarvení aktivní položky nesahá k okraji a `justify-content:space-between` se nemá čeho chytit. Icon-only tlačítko musí mít `ariaLabel`. Na podbarvené ploše (`surface.subtle` `#F2F4F7`) se `secondary` nepoužívá — jeho pozadí `#EFF4FB` s podkladem splývá; místo něj `ontint` (bílé pozadí, text `#1E5AA8`, hover `#EFF4FB`). Hlavní akci v takovém bloku nese `primary`.
- **Chipsy:** jediný zdroj je `Chip.dc.html`. Pill 999, fs **14/700 u všech variant**, `line-height 24`. Dvě velikosti: **Standard 40 px** (padding 8/16) a **Small 32 px** (padding 4/12) — prop `size`. Ikona: Standard **24×24**, Small **18×18**, levý padding u obou 8 px; **výška je stejná s ikonou i bez ní**. Varianty: `filter` (aktivní `#1E5AA8`/bílá s ✕, neaktivní `#F2F4F7`), `primary` (`#1E5AA8`/bílá, hover `#1A4A8A`), `secondary` (`#EFF4FB`/`#1E5AA8`, hover `#D8E6F6`), `secondaryOutline` (totéž + linka `#1E5AA8` — zvýraznění jen okrajem), `guide` (`#FCF1DC`/`#7A4E00`, hover `#F7E4BC` — **vyhrazený pro odkaz na článek v poradně**, vždy s ikonou; okrová rodina ho odliší od modré navigace), `sale` (`#FDF1F1`/`#C5232B`, hover `#FAD9DA` — **vyhrazený pro akce a slevy**, vždy s ikonou `discount`; okrajová červená rodina shodná s dlaždicí Akce a slevy), `accent` (`#142F56`/bílá, hover `#1E5AA8`) a `outline` (bílá + linka `#91959B`, hover linka `#5189CC`; dřívější `brand` je alias). `accent` ani `guide` kategorie nepoužívají. Zelená plocha chipu se nezavádí, plná červená také ne — červená je jen v podobě varianty `sale`. `href` vykreslí `<a>` (navigace), bez něj `<button>` + `onClick`. `count` jen u `outline`. Dál se velikosti nerozšiřují; klikací plocha se na malých šířkách dorovnává `::after`, ne paddingem.
- **Sekce „Nejhledanější"** v `VypisKategorii`: overline label + řádek chipsů velikosti `small` (první `guide` odkaz do poradny s ikonou, dál `secondary` podkategorie). Gap 8 px řádkový i sloupcový. Desktop jeden řádek, pod 820 px label nad chipsy a chipsy se zalamují. Zapíná se propem `nejhledanejsi` (default `true`); obsah lze přebít propem `topSearched`. Stránka Náhradních dílů prop nepředává — jede podle defaultu komponenty.
- **Kvantifikátor:** Standard 44 px, Compact 36 px. Bg `surface.subtle`, rádius 6, střední pole bílé, min-width 28 + padding (pojme 3 číslice).
- **Inputy:** výška 44, bg `surface.subtle`, rádius 6, fs 15. **Výjimka:** pod 550 px (`XS`, `XXS`) má textový vstup `font-size:16px` — iOS Safari na menší písmo při fokusu zazoomuje stránku a po zavření klávesnice zoom nevrátí, web pak zůstane přeteklý do šířky. Platí pro `Vyhledavani`; každý nový input s klávesnicí to musí dodržet.
- **Skladovost:** ikony 18 × 18, text bez podbarvení.
- **Přepínač „Skladem":** zaškrtnutý je zelený (`#0E7F43` plocha, text `#0B6937`) — shodně v `FiltracniLista` i v `FiltrDrawer`. Ostatní checkboxy filtru jsou modré `#1E5AA8`.
- **Příznaky ve filtru:** checkbox + badge ve stejné barvě jako na kartě — Sleva `#C5232B`/bílá, Doprava zdarma a Skladem `#E9F8EF`/`#0B6937`, Skladem u dodavatele `#F2F4F7`/`#5A626C`.

---

## 9. Přístupnost (WCAG 2.2 AA)

Systém prošel auditem a splňuje AA. Nové komponenty i změny musí tuto úroveň držet.

- **Skutečné tagy.** Interaktivní prvek je `<button type="button">` (akce) nebo `<a href>` (navigace). `<span>`/`<div>` s `onClick` se nepoužívají a `role="button"` není náhrada. Aby převod nezměnil vzhled, prvek dostane sdílený reset: `appearance:none; background:none; border:0; padding:0; margin:0; font:inherit; color:inherit; text-align:inherit; line-height:inherit; cursor:pointer;` — jednou jako třída v helmetu souboru, ne inline u každého prvku.
- **Pozor na `<button>` a šířku.** Button má shrink-to-fit šířku i s `display:flex`. Řádkový prvek, který má jít přes celou šířku rodiče, potřebuje `width:100%` — jinak se `justify-content:space-between` nemá čeho chytit a `border-bottom` končí na konci textu.
- **Nevnořovat.** `<button>` nikdy uvnitř `<button>` ani `<a>`. Klikací karta se řeší odkazem v názvu, který přes `::after { position:absolute; inset:0 }` pokrývá plochu; vnitřní tlačítka mají `position:relative` a vyšší `z-index`. Klik na vnitřní tlačítko pak do krycího odkazu neprobublá, protože nejsou vnořené — `preventDefault` s tím nemá nic společného.
- **Klikací plocha minimálně 24 × 24 px.** Zvětšuje se pseudoprvkem `::after` se zápornými offsety, **ne** paddingem — layout se nesmí pohnout.
- **Landmarky a nadpisy.** Každá stránka: `lang="cs"`, právě jeden `<h1>`, `header` / `main` / `footer` / `nav`, nadpisy bez přeskočení úrovní. Nadpis, který se nemá zobrazit, se skrývá vizuálně (`position:absolute; width:1px; height:1px; overflow:hidden; clip-path:inset(50%)`), nikdy `display:none`.
- **Význam nesmí nést jen barva.** Hodnocení má vedle hvězdiček číslo, skladovost má text, čítače mají `aria-label`.
- **Overlay vrstvy** (mobilní menu, panel filtrů): `role="dialog"` + `aria-modal`, zavírání Escapem i klikem mimo, focus dovnitř při otevření a zpět na spouštěč při zavření, focus trap oběma směry, zámek scrollu stránky (`overflow:hidden` na `body`) po dobu otevření.
- **Úklid listenerů.** Handlery na `document` se odregistrují při zavření i při odmountování. Pozor na dvě definice `componentWillUnmount` v jedné třídě — pozdější přepíše dřívější a listener zůstane viset.
- Žádný `tabindex` větší než 0. Skryté prvky nesmí být dosažitelné tabulátorem.

**Otevřený bod:** vizuální nadpis sekce, který není `<h*>` ani `<nav aria-label>`, je porušení 1.3.1 — týká se nadpisu „INFORMACE" v `MobilniMenu`.

---

## 10. DebugBar — vývojářský nástroj

`DebugBar.dc.html` **stojí mimo design systém.** Tokeny, minimum písma ani kontrast se na něj nevztahují a neposuzuje se v auditech.

- Pruh **v toku dokumentu jako první prvek `body`** (netlačí se přes obsah webu, obsah se o jeho výšku posune dolů), výška 10 px (prop `height`), pozadí `#15181C`, bílý monospace text, `pointer-events:none`, sbalovací úchyt „▼" vpravo nahoře.
- Obsah: `pásmo · rozsah · šířka XXXpx`, měřeno z `document.documentElement.clientWidth` (na tu reagují media queries).
- Vykresluje se jako DOM uzel připojený přímo k `document.body` — kvůli `container-type` na kartě, který by fixní pozici zlomil. Uklízí osiřelé uzly po hot-reloadu.
- Sdílený registr `window.__vappDebugBar` s počítadlem referencí `count` a potlačením `suppress`. Bar je vidět, právě když `count > 0 && suppress === 0`. Jedno odškrtnutí kdekoli ho zhasne na celé stránce.
- **Prop `debug`** (boolean, default `true`) má každá komponenta i stránka a předává ho dolů. Výjimky bez baru: `Tlacitko` (kořen `<button>`) a `Ikony`.
- Bar má `aria-hidden="true"`.

---

## 11. PrezentacniLista — prezentační nástroj

`PrezentacniLista.dc.html` **stojí mimo design systém.** Tokeny, minimum písma ani kontrast se na ni nevztahují a neposuzuje se v auditech. Do produkčního návrhu e-shopu nepatří.

- Účel: klient u prezentace nevidí panel tweaks, proto si varianty zobrazení kategorií přepíná přímo na stránce. Součástí je i přepínač DebugBaru.
- Fixní pill u **spodní** hrany okna, vodorovně centrovaný, `z-index` `z.presenter` 96. Horní hranu obsazuje sticky hlavička a DebugBar. Nezaměňovat s **topbarem** — tak se říká tmavému pruhu s otevírací dobou uvnitř `Hlavicky`.
- Barvy jen `#142F56`, `#1E5AA8`, `#B4CEEC`, `#FFFFFF`. Jediná media query je `max-width:419px` (skryje popisek, zúží tlačítka), aby se lišta vešla na 320 px. Rádius bloku (`.pl-shell`) je 999 px, na `max-width:819px` 8 px — zalomený víceřádkový pill vypadá rozbitě.
- Lišta se dá sbalit tlačítkem `✕` na konci; ve sbaleném stavu zůstane jen tlačítko „Varianty“. Stav drží komponenta (`state.open`), stránky ho neřeší.
- Skupin přepínačů umí čtyři (`label`/`variants`/`active`/`onSelect` + číslované varianty 2–4); skupina se vykreslí, jen když dostane neprázdná data.
- Props: `label`, `variants` (data, prázdné = vlastní default), `active`, `onSelect(id)`, `debugOn`, `onToggleDebug()`. Pole `variants` nese **jen data** — per-položkové `onClick` si komponenta vyrábí sama.
- **Závazné mapování, nikdy se nepřečísluje:** `v1` = `kompaktni` (dnešní stav webu, výchozí volba), `v2` = `dlazdice` (návrh redukce). V UI lišty jsou vidět jen čísla, ne názvy variant. Druhá skupina na Náhradních dílech je `Sticky:` `S1` / `S2` / `S3` (chování sticky lišty vůči hlavičce, viz §5), třetí `Fotka:` (poměr stran produktové fotky, `--vp-photo-ar`: `V1` 16:10, `V2` 4:3, `V3` 1:1) a čtvrtá `XS sloupce:` (`--vp-xs-cols`, 1 nebo 2 sloupce výpisu jen v pásmu XS 420–549 px; XXS je vždy 1).
- Lišta drží jen přepínače, které jsou ještě otevřené. Rozhodnuté volby se z ní mažou (megamenu M1, nadpis H2).
- **Výjimka `nahradnidily.dc.html`:** tam lišta nepřepíná layout dlaždic, ale **strukturu sdružovacích kategorií** — `v1` = 8 kategorií, `v2` = 6 kategorií (viz §12). Layout dlaždic zůstává na tweaku `categoryLayout`.
- Na stránce je zdrojem pravdy stav (`catLayout`, `debugOverride`); prop `categoryLayout` zůstává výchozí hodnotou pro tweak, stav ho přebíjí. `DEFAULT_CATEGORY_LAYOUT` zůstává `kompaktni`.

---

## 12. Sdružovací kategorie Náhradních dílů (V1 / V2)

Zdroj: klientský excel `uploads/vapp-sdruzovaci-kategorie-nahradni-dily_edit VAPP.xlsx` (listy „8 kategorií" = V1, „6 kategorií" = V2). Přepis leží v `nahradnidily.dc.html` ve `HUBS` — **jediné místo**, kde se struktura mění.

- Nejvyšší úroveň Náhradních dílů = huby. `type:'sdruzovaci'` = nová nadřazená položka nad stávajícími kategoriemi; `type:'hub'` = velká stávající kategorie zůstává samostatně a nabízí svoje podkategorie (zachovává URL i SEO té větve).
- `items` je přesně sloupec C excelu. `resolveItem()` název rozřeší na dnešní kategorii nebo na její podkategorii (rozpady ID 610 / 574 / 603) — nové názvy se nevymýšlejí.
- `seo` = sloupec D; slouží jako **H1 hub stránky**. V drobečkové navigaci a dlaždici je `name`.
- **Akce a slevy ani Výprodej nejsou sdružovací kategorie** — nemají podkategorie, a proto nejsou v megamenu. V mobilním menu stojí jako poslední položka Náhradních dílů (bez potomků), v „Nejhledanější“ jako chip `sale` s ikonou `discount`. V rozcestníku ale stojí jako **poslední dlaždice** `sale:true` (plocha `red.50` #FDF1F1, linka #FAD9DA, text a ikona #C5232B, ikona slevy) jako běžná dlaždice — **nikdy se neroztahuje přes víc sloupců**. Lichý počet (V1 9, V2 7) se řeší počtem sloupců, aby na posledním řádku nezbyla jediná dlaždice: `.hub-9` XXL 5 (5+4), XL 3 (3+3+3); `.hub-7` od 1000 px 4 (4+3). Vede na `#/nahradni-dily/akce/`, což je výpis se zapnutým filtrem slev.
- Názvosloví: vždy „přívěs", nikdy „vozík" / „přívěsný vozík".
- **Otevřené body:** V1 nepokrývá stávající kategorie Hydraulika přívěsů, Blatníky a zástěrky, Bočnice/uzávěry/panty a Plynové vzpěry — v listu chybí. V1 řádek 5 (Spojovací zařízení a zámky) je zařazený pod hub 2, protože sloupec A je prázdný, ale nese vlastní cílový výraz.
