# STAV PRÁCE — VAPP

Předávací stav k 25. 7. 2026. Platí SOUBORY, ne tento zápis, když se rozcházejí.
GitHub se neřeší — tento soubor je jediný předávací kanál.

Rozlišení ověření: **KAPTURA** = viděný vyrenderovaný výsledek · **DOM** = ověřeno
ve struktuře/kódu, ne vizuálně · **JEN-ZÁPIS** = napsáno, nespuštěno.

---

## Hotové a použitelné

Komponenty jsou samostatné `.dc.html` soubory, do návrhových stránek se vkládají
přes `dc-import` (nikdy nekopírovat obsah).

| komponenta | co umí | hlavní props |
|---|---|---|
| `Hlavicka` | topbar s otevírací dobou a LED, logo, hledání, ikony účet/porovnat/košík, hlavní menu se záložkami a underline; pod 900 px hamburger + hledání na celý řádek | `searchValue`, `onSearchChange`, `compareCount`, `onCompare` |
| `Breadcrumb` | drobečková navigace, poslední úroveň tučná bez odkazu; `bare` skryje DS poznámku i kartu | `items`, `bare` |
| `KategorickaDlazdice` | dlaždice kategorie — ikona v kruhu 44, název, počet, výpis podkategorií, tlačítko „Zobrazit vše" | `cat` (objekt: name, count, subs, onPick) |
| `ProduktovaKarta` | karta náhradního dílu: fotka 4:3, název, hvězdičky, skladovost + ceny na pevném 40px řádku, kvantifikátor + Koupit, Porovnat + obj. č.; řádky se zarovnají napříč gridem | `p` (data), `available` (false → „Není skladem" + Koupit disabled), `onDetail` |
| `Chip` | filtrační chip (aktivní pill blue.600 s ✕, neaktivní surface.subtle) a značkový chip s počtem | `kind`, `active`, `label`, `count`, `onClick`, `onRemove` |
| `Vyhledavani` | pole 44/48 s lupou, našeptávač s náhledy a rozdělením kategorie/produkt, mazání dotazu | `value`, `bare`, `height`, `placeholder` |
| `Kvantifikator` | −/hodnota/+ ve dvou velikostech, blokuje se na hranicích | `value`, `onChange`, `min`, `max`, `size` |
| `Skladovost` | skladem / není skladem / na dotaz, ikony 18×18, bez podbarvení | `state`, `text` |
| `Badge` | sleva, doprava zdarma, novinka | `type`, `text` |
| `Kosik` | ikona košíku s pill počtem a částkou; při 0 jen „Košík" | `count`, `total`, `onClick` |
| `Cena` | cena bez DPH primárně, pod ní s DPH; s `original` přeškrtnutá původní a dopočtená sleva | `priceNet`, `priceGross`, `original`, `size` |
| `Hodnoceni` | hvězdičky včetně půlhvězdy (klip) a počet recenzí | `value`, `count`, `size` |
| `Toast` | hlášení success / info / danger; do prototypu záměrně NEnapojen | `message`, `variant`, `visible` |
| `PoradenskyBlok` | poradenský pruh s telefonem a e-mailem (telefon zatím natvrdo) | `—` |
| `Paticka` | tmavá patička #142F56, sloupce odkazů, sociální kolečka, adresy (zatím natvrdo) | `—` |
| `LedIndikator` | pulzující LED otevřeno/zavřeno | `open` |
| `Tlacitko` | jediný zdroj tlačítek: primary / secondary / buy / danger / ghost / text, tři velikosti, ikony, disabled, icon-only | `variant`, `size`, `label`, `icon`, `iconTrailing`, `iconOnly`, `disabled`, `fullWidth`, `onClick`, `ariaLabel` |
| `Ikony` | jediný registr ikon (sada Tabler), 24×24, stroke 2, `currentColor` | `iconName`, `size` |

**Registr ikon:** 64 ikon v `Ikony.dc.html`. Nic nechybí (půlhvězda řešena klipem
v `Hodnoceni`). Zúžení podle reálného použití je otevřená otázka.

**Prototyp `PrototypNahradniDilyVAPP.dc.html`** — funkční výpis náhradních dílů:
full-bleed layout (container 1560, padding 32/16), drill-down kategorie → podkategorie,
filtry (značka, dostupnost) s čítačem, řazení, skeleton ~400 ms, prázdný stav,
donačítání, porovnání jako čítač v hlavičce. Grid ověřen kapturou na 10 šířkách
(360–1440): ≥900 čtyři sloupce, 480–899 dva, <480 jeden; zlom sjednocen na 899/900
napříč hlavičkou, patičkou, kartou i `matchMedia`. Karty mají Koupit ve stejné výšce
při 480 / 500 / 768 / 1024.

**Testovací stránky** (nejsou součástí návrhu): `KontrolaKomponentT.dc.html` (Cena,
Hodnoceni, Kosik, Toast, Chip, karta available/onDetail) a `KontrolaKomponentW.dc.html`
(skupina Q + hranice kvantifikátoru).

**Zdroje pravdy:** `CLAUDE.md` (tokeny, pravidla) · `DesignSystemVAPP.dc.html` (základy) ·
`KomponentyVAPP.dc.html` (katalog) · `AuditKomponentVAPP.dc.html` (audit) ·
`BarevnaPaletaVAPP.dc.html` = archiv, nepoužívat.

**Zbývá neviděné (DOM / JEN-ZÁPIS):** sticky toolbar v prototypu (kaptura sticky prvek
kreslí staticky) · našeptávač a focus ring `Vyhledavani` · klik `onDetail` a
stopPropagation v kartě · hover stavy obecně · `cursor:not-allowed` kvantifikátoru.

---

## Odloženo — neřešit bez vyžádání

- **Přístupnost `span` → `button`** napříč systémem (teprve pak reálně funguje
  `:focus-visible`, které je připravené v Kateg. dlaždici, Patičce a Poradenském bloku).
- **Obsah do props:** adresy a IČO v `Paticka`, telefon v `PoradenskyBlok`,
  katalog dotazů v `Vyhledavani` — zatím natvrdo v komponentách.
- **Wireframy** (`WireframeHomepageVAPP` a další) — povýšení na hi-fi neřešeno,
  nerozhodnuto archiv + nové stránky vs. přepis na full-bleed.
- **Off-token detaily:** `status.openOnDark` = #97DBB4 je už token (CLAUDE §1 +
  DesignSystem). Ostatní zmapováno: 14.5 → 14, 13.5 → 14, 1.5px → 1px.
  Otevřené: ikona kategorie natvrdo v `KategorickaDlazdice` (chce `icon` prop) a
  `Vyhledavani` ignoruje prop `value` bez `on-search-change` (řízená vs. neřízená).
- **Chybějící komponenty:** paginace, mobilní drawer, mini-košík, modal/drawer,
  řádková karta s přepínačem mřížka/seznam, filtr-panel jako komponenta.
- **Chybějící varianty:** `Skladovost` s dodací lhůtou, karta přívěsu s parametry.
- **`prefers-reduced-motion`** pro LED a přechody.

---

## Další téma (otevřené, nezačínat)

Sekce **„Výpis kategorií"**. Hlavní bolest je **mobilní zobrazení** — na malých
šířkách je drill-down i dlaždicový výpis nepřehledný. Řešení se teprve navrhuje
s uživatelem, zatím se nic nekreslí a nic se nemění.
