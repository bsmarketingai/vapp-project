# Report změn — drill-down menu, filtrační lišta, prototyp

Rozsah: práce vedená přes inline komentáře v náhledu. Dotčené soubory:
`MobilniMenu.dc.html`, `Hlavicka.dc.html`, `PrototypNahradniDilyVAPP.dc.html`,
nově `FiltracniLista.dc.html`.

---

## 1. MobilniMenu.dc.html — panelová navigace (drill-down)

**Datový model**
- Nový volitelný prop `menuTree` (`any[]`, editor `null`). Tvar položky:
  `{ name, href, children? }` — pouze data, žádné funkce (funkce se přes
  `dc-import` uvnitř polí/objektů ztrácejí; handlery si komponenta vyrábí sama).
- Pořadí zdrojů dat: `menuTree` → jinak `labels` (pole stringů, převedené na
  `[{name, href:'#'}]`) → jinak vnitřní výchozí strom pro standalone náhled.
- Výchozí strom je testovací placeholder (Přívěsy / Náhradní díly s hloubkou až
  4 úrovní / Příslušenství / Servis / Půjčovna) — není rozhodnutí o struktuře webu.

**Stav a navigace**
- Vnitřní stav `path` = pole indexů libovolné délky (neomezená hloubka).
  Průchod stromu podle `path`, ne vnořené podmínky.
- Položka s `children` → `<button type="button">` + chevron-right, klik přidá
  index do `path`. Položka bez `children` → `<a href>`, volá `onSelect(name)`.
- Řádek Zpět odebere poslední index.
- Řádky mají `width:100%` (kvůli `justify-content:space-between` u `<button>`),
  text `min-width:0` a chevron `flex:none` — dlouhé názvy se zalamují,
  chevron se nemačká.

**Podval na všech úrovních**
- Dvojice tlačítek (Poradna / Akce a slevy), sekce Informace a kontaktní blok
  se renderují **jednou**, mimo přepínaný seznam → jsou na kořeni i ve všech
  zanořeních. Obsah beze změny.

**Hlavička zanořené úrovně**
- Řádek Zpět: chevron-left 24 px `#84AEDF`, text 14/700 `#15181C`,
  min-height 46 px, border-bottom 1 px `#F2F4F7`.
  Text: 1. úroveň „Zpět domů“, hlouběji „Zpět na {rodičovská kategorie}“.
  `aria-label` = stejný text.
- Pod ním řádek s názvem aktuální úrovně vlevo (odkaz 18/700 `#1E5AA8`,
  na hover podtržení) a vpravo odkaz **„Zobrazit kategorii“** 14/700 `#1E5AA8`
  s chevron-right 24 px `#84AEDF`. Oba míří na `href` aktuální úrovně.

**Motion**
- Přechod mezi úrovněmi: zanoření = přílet zprava, návrat = přílet zleva.
  translateX(±100 %) + opacity, **500 ms `ease`**. Animuje se jen přepínaný
  seznam, ne podval. `prefers-reduced-motion` animaci vypíná.
  Obal seznamu má `overflow-x:hidden`, aby při posunu nevznikal vodorovný scroll.

**Navigace na reálné odkazy**
- `<a>` s reálným `href` už neblokuje výchozí akci (`preventDefault` jen u `#`),
  takže hash routy prototypu skutečně navigují. `onSelect(name)` se volá vždy.

---

## 2. Hlavicka.dc.html

- Mobilnímu menu předává `menuTree` místo plochých `labels`
  (nový volitelný prop `menuTree` na Hlavicce, propaguje se ze stránky).
  Desktopové záložky dál jedou z `tabs` — beze změny.
- `onMenuSelect` po výběru **zavírá mobilní menu** (`closeMenu()`), pak volá
  `onTabClick`.
- Topbar: telefonní číslo přesunuto zleva k otevírací době
  (`margin-right:auto`), servisní odkazy zůstávají vpravo.

---

## 3. PrototypNahradniDilyVAPP.dc.html

- **Propojení menu na routy:** stránka staví `menuTree` ze svého `GROUPS`
  s `href` z `urlFor()` → klik v mobilním menu změní hash
  (`#/nahradni-dily/…`), `syncFromHash` přepne výpis, breadcrumb i titulek.
- **Tlačítko zpět v podkategoriích:** místo „Zpět“ vypisuje
  „Zpět na {rodičovská kategorie}“ (na první úrovni název skupiny, nad ní
  „Zpět na Náhradní díly“) — stejná logika jako v mobilním menu.
- **Popis kategorie (perex):** pod 1000 px 14 px (`label.small`),
  na desktopu zůstává 16 px (`body.medium`). Zlom `max-width:999px`.
- **Drawer filtrů:** přílet zprava a odlet doprava, **500 ms `ease`**,
  overlay plynule prostupuje. Panel zůstává ve DOM po dobu zavírací animace
  (stav `filterClosing`), `prefers-reduced-motion` animaci vypíná.
- **Extrakce lišty:** sticky obal a sentinel (logika vytlačování hlavičky)
  zůstaly na stránce; vnitřní řádek nahrazen
  `<dc-import name="FiltracniLista" …>`. Stránka posílá `filter-count`,
  `only-stock`, `sort`, `sort-options` (data `{key,label}`) a skalární callbacky
  `on-open-filter`, `on-toggle-stock`, `on-sort-change`.

---

## 4. FiltracniLista.dc.html — nová komponenta

- Obsah: tlačítko **Filtry** (`id="pf-open"`, badge s počtem aktivních filtrů),
  přepínač **Skladem**, dropdown **řazení**.
- Props: `filterCount` (int), `onlyStock` (bool), `sort` (enum),
  `sortOptions` (`any[]`, data bez funkcí), `onOpenFilter`, `onToggleStock`,
  `onSortChange`. Stav otevření dropdownu drží komponenta.
- Dropdown řazení: zarovnaný k pravému okraji kontejneru, šířka **hug**
  (podle obsahu, max 260 px); rozbalený seznam má `min-width:100%`
  a `white-space:nowrap`.
- Přepínač Skladem je skrytý pod 600 px (pásma XXS a XS); od S výš je vidět.

---

## Hodnoty bez tokenu / dluhy

- `min-height:46px` u řádků menu — mimo 4px grid (převzato z původního kódu).
- **500 ms** trvání animací (menu i drawer) — motion tokeny znají jen
  60 / 120 / 150 / 1800 ms. Chybí token pro posun panelu.
- Breakpointy: perex používá 999 px (shodně s mobilním menu v Hlavicce),
  ostatní pravidla v prototypu stále 899 px — sada zlomů čeká na sjednocení
  na škálu XXS–XXL.
- Skrytí Skladem řešeno zlomem 599 px; pásma XXS/XS nemají v CLAUDE.md
  explicitní hranice (mapováno na „< 600 mobil“).

## Zjednodušeno / nepropojeno

- Řádky menu nemají odsazení podle hloubky — hierarchii nese jen řádek Zpět.
- Zvýraznění `active` se aplikuje pouze na kořeni menu.
- Scroll panelu, reset scrollu a focus management při přepnutí úrovně
  se neřeší v MobilniMenu (patří do Hlavicky) — samostatný krok.
- Dropdown řazení se nezavírá klikem mimo (zachováno původní chování).
- Filtr `onlyStock` je pod 600 px nedostupný z lišty — přesun do draweru
  je samostatný krok.
- Dokumentační blok „Kdy / Kdy ne“ v MobilniMenu zůstal nezměněný (dle pokynu).
