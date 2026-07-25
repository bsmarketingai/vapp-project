# STAV PRÁCE — VAPP (noční běh I–Q)

Aktualizováno po bloku Q. Platí SOUBORY, ne tento zápis, když se rozcházejí.
GitHub není v sezení připojen — „commity" jsou zaznamenané zprávy, ne skutečný push.

## Hotové bloky

### I — Full-bleed
- Prototyp root: width:100%, margin:0, padding:0, jen background surface.page.
- Hlavicka root: width:100% (topbar i hlavní pruh už full-bleed přes .vp-in).
- Paticka: full-bleed pruh #142F56, .vp-in obal.
- CLAUDE.md §5 věta o full-bleed už přítomná (nezdvojeno).

### J — Porovnání jen čítač
- compare-bar (fixed dole) v prototypu ODSTRANĚN i s vals (cmpCount/cmpLabel/clearCompare).
- Počet zaškrtnutých „Porovnat" jde do Hlavicka compareCount (pill u ikony). ~14 řádků ubylo.

### K — Kvantifikator
- Příčina placatosti: karta kreslila kvantifikátor LOKÁLNĚ (tenké 30px ovládání), po Koupit→Tlacitko se výšky řádku rozešly.
- Kvantifikator dostal props value/onChange/min(1)/max(99); minus/plus se na hranicích zablokují (disabled, not-allowed); <button> + hover + focus-visible; střední pole min-width 34→28.
- Napojen v ProduktovaKarta (value=qty, onChange=onQty), množství drží karta.

### L — Sticky filtr
- Toolbar .p-sticky: sticky top:0 (hlavička není sticky, takže 0 je správně), z-index 40 pod overlay.
- <900 px sticky vypnut (position:static).

### M — Mobil (25. 7. 2026, ODMĚŘENO KAPTUROU)
Metoda: prototyp renderován v jednom dokumentu, šířka vynucena na html/body + všechny
@media pravidla (i v dětských komponentách) přepnuta na all / not all podle měřené šířky,
body scale kvůli vejití do panelu. Kaptury v screens/.

| šířka | sloupce gridu | hlavička | poznámka |
|---|---|---|---|
| 360 | 1 | mobilní (hamburger + Košík, hledání na celý řádek) | topbar se láme na 2 řádky |
| 390 | 1 | mobilní | OK |
| 480 | 2 | mobilní | „Skladem 12 ks" a „Obj. č." se lámou na 2 řádky |
| 600 | 2 | mobilní | OK, řádky karet se rozcházejí |
| 768 | 2 | mobilní | OK |
| 899 | 2 | mobilní | OK (potvrzeno po opravě zlomu) |
| 900 | 4 | DESKTOPOVÁ | potvrzeno po opravě zlomu |
| 1024 | 4 | desktopová | „Obj. č." se láme u dlouhých názvů |
| 1280 | 4 | desktopová | OK |
| 1440 | 4 | desktopová | OK |

Opraveno při měření: zlom byl nekonzistentní — grid přepínal na 899/900, ale hlavička,
patička, karta i matchMedia na 900/901, takže při 900 px byl 4sloupcový grid s mobilní
hlavičkou. Sjednoceno na max-width:899 / min-width:900 (CLAUDE §5: ≥900 = desktop)
v Hlavicka, Paticka, ProduktovaKarta, PrototypNahradniDilyVAPP, AuditKomponentVAPP.

Nálezy k dořešení (NEOPRAVENO):
- 480–1024: „Skladem X ks" se láme na 2 řádky → řádky karet (kvantifikátor, Koupit,
  Porovnat) se napříč gridem nezarovnají. Chce pevné řádky v ProduktovaKarta.
- „Obj. č.: 907527" se láme na 2 řádky, když je vedle delšího „Porovnat".
- Sticky toolbar NELZE ověřit kapturou: kapturovací engine překresluje DOM a
  sticky/fixed prvek vykreslí ve statické pozici, ne v přišpendlené. Blok L zůstává DOM.

### N — Drobný dluh
- Hamburger v Hlavičce už bez rámečku (plocha 44, hover surface.subtle) — bylo hotové z bloku A.
- Checkbox „Porovnat" v kartě: radius 5→6 (standalone i prototyp mají 6).
- #97DBB4 a 14.5px NECHÁNY → H4.

### O — Nové komponenty
- Cena.dc.html (priceNet/priceGross/original/size; sleva dopočet; formát mezerou). Napojena v kartě.
- Hodnoceni.dc.html (value 0–5 vč. půlhvězd přes klip, count; star/star-filled z registru). Napojena v kartě.
- Toast.dc.html (message/variant/visible) — jen komponenta + galerie, do prototypu NEnapojena.

### P — Prázdný + načítací stav
- Prázdný: package-off + text + Tlacitko „Zrušit filtry" (showEmpty).
- Skeleton: 4 karty (sk plochy), ~400 ms přes reload() na filtr/sort/značky/dostupnost.

### Q — Audit skupina 2 (bezpečné)
- Chip: aktivní filtr hover (.c-active), onClick/onRemove props (bez nich beze změny), padding 9/16→8/16, značková linka #D5DAE0→#C4CAD2.
- Vyhledavani: thumbProd #EEF1F4/#E6EAEE→#F2F4F7; overline ls .05→.06; radius pole 8→6.
- KategorickaDlazdice: padding 18→16, gap subs 6→8.
- Breadcrumb: prop bare (skryje DS poznámku i kartu), default poznámky zap; poslední úroveň #173C70 = blue.800 (token, beze změny).
- Skladovost: gap 7→8. Badge: padding 5/10→4/8.
- focus-visible (Kateg/Paticka/PoradenskyBlok) PŘESUNUTO do skupiny 3 (span→button).

## Report 25. 7. 2026 (blok M)
- GitHub se dál neřeší (rozhodnutí uživatele). Předávací kanál = tento soubor.
- HOTOVO/KAPTURA: I, J, K, O (Cena, Hodnoceni), M.
- ROZDĚLANÉ: L (sticky jen DOM), N, O-Toast, P, Q — vše JEN-ZÁPIS nebo DOM.
- NESAHÁNO: G (čeká rozhodnutí a/b), audit skupina 3 (čeká go/no-go).

## Otevřené otázky / dluh (skupina 3 + ostatní)
- Přístupnost: span→button napříč systémem (pak focus-visible reálně funguje).
- Obsah v props: Paticka adresy/IČO, PoradenskyBlok telefon, Vyhledavani katalog — natvrdo.
- Lupa ve Vyhledavani: iconOnly Tlacitka neumí výšku pole (48/42) → lokální <button>.
- Chybějící varianty: Skladovost dodací lhůta, karta „není skladem", karta přívěsu s parametry.
- Chybějící komponenty: paginace, filtr-panel jako komponenta, mobilní drawer, modal/drawer, mini-košík, řádková karta + přepínač mřížka/seznam.
- Varianty nad rámec pravidel: ghost/text tlačítko, badge „Novinka" — doplnit do CLAUDE nebo zrušit.
- Registr 64 ikon — zvážit další zúžení dle reálného použití.
- prefers-reduced-motion pro LED a přechody.
- Wireframy — povýšení na hi-fi (blok G) odloženo, storyboard vs full-bleed (a/b).

## H4 — Off-token NEOPRAVENO
- Hlavicka: #97DBB4 (text „právě otevřeno" na tmavém). Návrh token: status.openOnDark ~ green.200 #97DBB4.
- Hlavicka: 14.5px mobilní nav. Návrh: label.small 14 nebo body.medium 16 (skok na breakpointu).
- Ikona kategorie v KategorickaDlazdice natvrdo (terč) — chce icon prop.

## Ikony k doexportu
- star-half (půlhvězda) — obejito klipem, není nutné; jinak nic nechybí.
