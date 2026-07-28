# VAPP — trvalé pokyny

## 0. Jak pracovat s design systémem

- **Nikdy nepiš vlastní hodnoty.** Barvy, velikosti písma, mezery, rádiusy a stíny ber výhradně z tokenů níže. Když token neexistuje, řekni to a navrhni jeho doplnění — nevymýšlej hodnotu ad hoc.
- **Zdroje pravdy:**
  - `DesignSystemVAPP.dc.html` — základy (barvy, typografie, spacing, rádiusy, elevace, layout, stavy).
  - `KomponentyVAPP.dc.html` — katalog UI prvků. Jediné místo, kde se komponenty ladí.
  - `ProduktovaKarta.dc.html` — jediný zdroj vzhledu produktové karty (ASCII název kvůli exportu na GitHub). Upravovat POUZE tam.
  - `BarevnaPaletaVAPP.dc.html` — **archiv, nepoužívat.** Obsahuje starý styl (Hanken Grotesk, borders, rádiusy 11–14).
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

> **Chevrony (a11y).** `#84AEDF` má na bílé jen 2,1:1. Chevron je netextový prvek nesoucí význam, potřebuje 3:1 — proto `icon.chevron` `#5189CC` (blue.400, 3,3:1 na bílé). `#84AEDF` zůstává jen pro dekorativní plochy a ukázky, ne pro ikony.

> **Kontrastní přemapování (a11y audit).** `text.muted`, `text.tertiary`, `status.onRequest` a `commerce.priceGross` byly `#7A828C` / `#9AA1AB` / `#8A919C` — tyto hodnoty nedosahovaly 4,5:1 na bílé (3,89 / 2,61 / 3,18). Mezi `#5A626C` a bílou škála neunese tři rozlišitelné úrovně, které by všechny prošly, proto se **muted a tertiary slučují** do kroku 650 `#666E78` (5,16:1 na bílé, 4,89:1 na `#F7F9FB`, 4,69:1 na `#F2F4F7` — projde i na `surface.subtle`) a hierarchii nese velikost a řez písma, ne barva. `border.control` `#C4CAD2` (1,65:1) → `#91959B` (3,01:1) kvůli 3:1 pro hranice ovládacích prvků. Kroky škály 300/400/500/600 zůstávají beze změny — jen se na ně už nemapují textové tokeny.

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
| `icon.chevron` | `#5189CC` | chevrony a navigační šipky (blue.400) |
| `rating.star` | `#F5A623` / prázdná `#D5DAE0` | hvězdičky |
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

### Mobil (< 900 px)
`h1` 26/700/1.2 · `h2` 22/700/1.25 · `h3` 18/700/1.3 · `h4` 16/700/1.35 · `body.large` 16/400/1.6 · `body.medium` beze změny.

Přepínat skokem na breakpointu, **ne** přes `clamp()`.

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
- **Elevace:** karty jsou **bez borderů** a v klidu **bez stínu**. Hover `0 6px 20px rgba(20,47,86,.10)`. Overlay (dropdown, našeptávač, drawer) `0 10px 30px rgba(20,30,45,.14)`. Focus ring `inset 0 0 0 2px #1E5AA8`.
- **Motion:** 60 ms stisk · 120 ms barvy a pozadí · 150 ms stíny · `motion.panel` **400 ms** posun panelů (drill-down menu, drawer filtrů) · 1800 ms pulz LED · easing `ease`.
- **Rozměry:** `size.control` 44 px — input, Kvantifikátor Standard, ikonové tlačítko, Tlačítko Medium. `size.row` 48 px — řádek seznamu a navigace.
- **Z-index (zápis dnešního stavu, nic se nepřečísluje):** `z.stickyBar` 60 · `z.header` 70 · `z.drawerOverlay` 80 · `z.drawerPanel` 90 · `z.toast` 95 · `z.debug` 99. Panel mobilního menu má z-index 60 uvnitř stohovacího kontextu hlavičky — není to globální hodnota.
- **Jen světlý režim.** Dark mode se nedělá.

---

## 5. Layout

- **Full-bleed vzorec (závazné):** stránka nikdy nemá vnější padding ani `max-width` na kořenovém prvku — kořen je `width:100%`, `margin:0`, `padding:0`, bez `border-radius`, nese jen `background: surface.page #F7F9FB`. Sekce jdou přes celou šířku viewportu (topbar a patička `#142F56`, zbytek `surface.page`); omezený je až vnitřní obal každé sekce: `max-width:1560px; margin:0 auto; padding:0 32px` na desktopu a `0 16px` pod 900 px. `html` a `body` mají `margin:0; padding:0`. Platí i pro hlavičku a patičku.
- Container max-width **1560 px**. Page padding 32 px desktop / 16 px mobil.
- Produktový grid má tři stupně: **≥ 900 px 4 sloupce · 480–899 px 2 sloupce · < 480 px 1 sloupec**, gap 12 px, formule `auto-fill, minmax(min(46%,270px),1fr)`. Zlomy 480 a 900 patří do staré sady a čekají na migraci na škálu XXS–XXL.
- Karta 280–300 px. Grid kategorií `auto-fit, minmax(280px,1fr)`, gap 12.
- Rozměry karty 280–300 px platí jen pro samostatný náhled; v produktovém gridu je karta tekutá (`width:100%`, `min-width:0`, `max-width:none`).
- **Sticky filtrační lišta** v prototypu platí na všech šířkách, včetně pásem M, S, XS a XXS. Vypínání sticky pod 900 px je zrušené — rozhodnuto, nevracet se k tomu.
- **Breakpointy:** `< 600` mobil · `600–899` tablet · **`≥ 900` hlavní zlom** (desktopová navigace a layout) · `≥ 1280` plný 4sloupcový grid · `≥ 1560` container se přestává roztahovat.

---

## 6. Ikony a obrazovost

- Inline SVG, **24 × 24 px** (`viewBox 0 0 24 24`), `stroke-width 2`, barva přes `currentColor`, bez výplní.
- **Zdroj ikon:** všechny ikony pocházejí z `Ikony.dc.html` (sada **Tabler**) — jediný registr. Komponenty ikony **nekreslí inline**, vkládají je přes `dc-import name="Ikony"` (prop `iconName` + `size`; v tlačítkách přes props `icon` / `iconTrailing` / `iconOnly`). Kontrakt 24×24 / stroke 2 / `currentColor` platí beze změny.
- Výjimka: ikony skladovosti **18 × 18**. Hlavní menu na desktopu 18 px.
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
| hover chip značky | `border-color: blue.300` |
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
- **Anatomie karty náhradního dílu:** fotka 4:3 → název (`product.title`) → hvězdičky + počet → řádek: skladovost vlevo / ceny vpravo pod sebou (bez DPH primárně a bez popisku, pod ní menší „X Kč s DPH") → kvantifikátor + tlačítko Koupit → řádek: checkbox Porovnat + Obj. č. (6místné, terciální). Badge (sleva / Doprava zdarma) vlevo nahoře na fotce. Celá karta je klikací na detail.
- **Hlavní menu:** záložky s underline (aktivní podtržená), **ne** tlačítka.
- **Tlačítka:** jediný zdroj je `Tlacitko.dc.html`. Varianty: `primary`, `secondary`, `buy`, `danger`, `ghost`, `text`. Velikosti Standard `min-height 36` / fs 14 · Medium `44` / fs 15 · Large `52` / fs 16, horizontální padding `16 / 20 / 24`. Rádius 8, weight 700. Interaktivní tlačítko je vždy `<button>`, nikdy `<span>` (jinak se nespustí `:focus-visible`). Icon-only tlačítko musí mít `ariaLabel`. Na podbarvené ploše (`surface.subtle` `#F2F4F7`) se `secondary` nepoužívá — jeho pozadí `#EFF4FB` s podkladem splývá; místo něj `ontint` (bílé pozadí, text `#1E5AA8`, hover `#EFF4FB`). Hlavní akci v takovém bloku nese `primary`.
- **Kvantifikátor:** Standard 44 px, Compact 36 px. Bg `surface.subtle`, rádius 6, střední pole bílé, min-width 28 + padding (pojme 3 číslice).
- **Inputy:** výška 44, bg `surface.subtle`, rádius 6, fs 15.
- **Skladovost:** ikony 18 × 18, text bez podbarvení.
