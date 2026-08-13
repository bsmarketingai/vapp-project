# 00 Master Design System

> **Verze:** <!-- SYSTEM_VERSION_START -->v0.19.7 Draft<!-- SYSTEM_VERSION_END --> · **Stav:** Draft · **Playground:** [`playground.html`](playground.html) (QA Lab) · rozcestník [`index.html`](index.html) · **Výchozí:** cs-CZ / CZK. Kompletní přehled viz [`docs/Overview.md`](docs/Overview.md); historie [`docs/Changelog.md`](docs/Changelog.md).torie [`docs/Changelog.md`](docs/Changelog.md).

**Neutrální, znovupoužitelný a tématizovatelný e-commerce design systém** — základní MASTER pro budoucí klientské e-shopy. Je záměrně bez značky: žádná fiktivní firma, logo, produktová kategorie ani marketingová identita. Výchozí motiv (zdrženlivá šedá škála + jeden přístupný akcent, systémový font, střední radius) slouží pouze jako ukázka a fallback.

Výchozí obchodní a jazykové prostředí MASTERu je **české**: `cs-CZ`, měna `CZK`, země `CZ`, `lang="cs"`, metrická soustava, desetinná čárka, nezalomitelná mezera jako oddělovač tisíců, časové pásmo Europe/Prague, první den v týdnu pondělí. Čeština a CZK jsou **výchozí**, nikoli jediná možná konfigurace (viz sekce Lokalizace).

> **Zdroje:** žádné. Vytvořeno od základu podle zadání „neutrální, znovupoužitelný, tématizovatelný e-commerce MASTER". Není přiložen žádný codebase, Figma soubor ani brand kit. Pokud existuje klientská identita nebo knihovna komponent, připojte ji a vrstvu Theme lze na ni přesměrovat.

## Tři koncepční vrstvy

Systém je uspořádán tak, aby klient mohl měnit **Foundations bez zásahu do UX architektury nebo anatomie komponent**:

1. **E-commerce Core** — stabilní UX principy, anatomie komponent, chování, responzivní logika, přístupnost, patterny a šablony stránek. Tato vrstva se pro klienty nemění.
2. **Client Theme** — *jediná* vrstva, kterou klient nahrazuje: barvy, typografie, hustota rozestupů, radius, borders, stíny, ikony, loga a vizuální assety. Realizováno jako přepis sémantických token aliasů (Theme Contract níže).
3. **Project Extensions** — volitelné funkce specifické pro projekt (B2B ceny, konfigurátory, rezervace, předplatné, marketplace) přidané nad Core a Theme, aniž by se do nich zasahovalo.

## Theme Contract

Komponenty **nikdy** neodkazují na surové škály (`--gray-500`, `--accent-600`) ani na konkrétní hodnoty. Odkazují na sémantické aliasy a klientský motiv přepisuje pouze tyto. Kontrakt:

- **Surfaces** — `--color-bg`, `--color-surface`, `--color-surface-sunken`, `--color-surface-raised`, `--color-overlay`
- **Text** — `--text-primary`, `--text-secondary`, `--text-muted`, `--text-disabled`, `--text-inverted`, `--text-link`, `--text-link-hover`
- **Borders** — `--color-border`, `--color-border-strong`, `--color-border-inverted`
- **Accent / action** — `--color-accent`, `--color-accent-hover`, `--color-accent-active`, `--color-accent-subtle`, `--color-accent-contrast`
- **Focus** — `--color-focus-ring`
- **Status** — `--color-success[-subtle]`, `--color-warning[-subtle]`, `--color-danger[-subtle]`
- **Commerce** — `--color-price`, `--color-price-sale`, `--color-price-strike`, `--color-instock`, `--color-lowstock`, `--color-outofstock`, `--color-rating`
- **Type** — `--font-sans`, `--font-display`, `--font-mono` + `--type-*` role composites
- **Density** — skupina `--density-*` (výšky ovládacích prvků, odsazení, padding karet, mezery sekcí)
- **Radius** — `--radius-control`, `--radius-card`, `--radius-chip`

**Jak tématizovat:** přepište surové škály a/nebo tyto aliasy v jediném stylesheetu načteném po `styles.css`. Nic dalšího se nemění.

## Design Principles

1. **Neutrální ve výchozím stavu, brandovatelný přes kontrakt.** Základ je tichý, aby identitu nesly klientské barvy a typografie.
2. **Pouze sémantické tokeny.** Žádná komponenta natvrdo nekóduje barvu, velikost, radius ani font.
3. **Obsah nad chrome.** Nejhlasitější jsou produktové fotky a cena; UI ustupuje.
4. **Přístupnost jako základ, ne funkce navíc.** Viz Accessibility níže.
5. **Hustota je regulátor.** Výchozí „regular"; motiv může přepnout na compact/comfortable přes `--density-*`.
6. **Kompozice nad konfigurací.** Složité commerce UI (ProductCard, košík) se skládá z malých primitiv.

---

## Lokalizace (i18n)

Uživatelské texty **nejsou natvrdo v logice komponent**. Komponenty přijímají lokalizované texty a formátovací konfiguraci. Lokalizační vrstva žije v `components/commerce/Locale.jsx` a je dostupná na namespace jako `Locale`.

```
defaultLocale   = "cs-CZ"
defaultCurrency = "CZK"
defaultCountry  = "CZ"
```

- **Formátování měny** vychází z `Intl.NumberFormat(locale, { style:"currency", currency })` — nikdy z natvrdo vloženého symbolu. `formatMoney(1299)` → `1 299 Kč`; desetinná místa se zobrazí jen když jsou potřeba (`1 299,90 Kč`); částka `0` → `Zdarma`. Mezi číslem a `Kč` je nezalomitelná mezera (dodá ji `Intl`).
- **Typy cen** přes `PriceTag` / `formatPrice`: běžná, původní (`compareAt`), akční, cena od (`from`), cena za jednotku (`unit`), cena s/bez DPH (`vat`), doprava/položka zdarma.
- **Pluralizace** přes `plural(n, [one, few, many])` s `Intl.PluralRules("cs-CZ")`: `1 produkt`, `2 produkty`, `5 produktů`. Hotové pomůcky `counts.products / items / pieces / reviews`.
- **Datum a čas** přes `formatDate` v českém zobrazení: `21. 7. 2026`, `21. 7. 2026 v 14:30`. ISO zůstává interně v datech a API.

Systém zůstává připravený na další locale a měny (`sk-SK`/EUR, `de-DE`/EUR, `pl-PL`/PLN, `hu-HU`/HUF) — přepnutím konfigurace, bez zásahu do komponent. Tyto další lokalizace se nyní nevytvářejí.

---

## Content Guidelines (obsahová pravidla)

Jak je psaný text v celém systému (dle storefront kitu):

- **Tón:** věcný, sebejistý, nápomocný. Retailově neutrální — žádná hravost, žádné luxusní fráze. Popisuje a uklidňuje.
- **Osoba:** vůči zákazníkovi vykání ve druhé osobě („Váš košík", „Máte nárok na dopravu zdarma"), bez značkového „my" mimo texty zásad a patičky.
- **Velikost písmen:** věty velkým jen na začátku — nadpisy, tlačítka, labely. VERZÁLKY pouze pro roli `--type-overline` (nadřazené popisky jako „PODZIMNÍ KOLEKCE"), a to střídmě.
- **Tlačítka / CTA:** rozkazovací slovesné fráze — „Přidat do košíku", „Pokračovat v nákupu", „Pokračovat k objednávce", „Zobrazit vše". Krátké, bez koncové interpunkce.
- **Ceny a čísla:** formátované přes `Intl.NumberFormat` (`formatMoney`). Akční cena vede, původní přeškrtnutá.
- **Uklidňující texty:** krátké fráze s benefitem — „Doprava zdarma nad 1 500 Kč", „Vrácení do 30 dnů", „Záruka 2 roky", „Bezpečná platba".
- **Naléhavost:** faktická, ne manipulativní — „Poslední kus", „Expedujeme do 2–3 pracovních dnů". Žádné falešné odpočty.
- **Emoji:** žádné. Jde o neutrální commerce systém.
- **Anglicismy v zákaznických textech:** nepoužívat (Add to cart, Checkout, Sale, Discount, In stock, Free shipping, Search, Sort by). Anglicky zůstávají jen technické názvy (viz Kód vs. obsah níže).

### Kód vs. obsah

Anglicky zůstávají: názvy komponent, tokenů, variant a stavů v kódu, CSS proměnné, props, názvy souborů, interní identifikátory.
Česky jsou: všechny texty viditelné zákazníkovi, demo obsah, náhledy komponent, storefront, formuláře, validace, accessibility texty a vysvětlující dokumentace.

---

## Formuláře a checkout

Výchozí česká pole: Jméno, Příjmení, E-mail, Telefon, Ulice a číslo popisné, Město, PSČ, Země (Česká republika), Firma, IČO, DIČ, Heslo, Poznámka. Ukázkové hodnoty: `Jan Novák`, `jan.novak@example.cz`, `Ulice 123`, `110 00 Praha`, `+420 123 456 789`. Nepoužívají se pole State/Province/ZIP code/Address line 1/Apartment.

Validační hlášky jsou konkrétní a české — např. „Toto pole je povinné", „Zadejte platnou e-mailovou adresu", „PSČ musí být ve formátu 123 45", „Vyberte způsob dopravy".

Výchozí kroky checkoutu: **1. Košík · 2. Doprava a platba · 3. Kontaktní údaje · 4. Dodací údaje · 5. Souhrn objednávky · 6. Dokončení.** Texty např. Způsob dopravy, Způsob platby, Nakupuji na firmu, Poznámka k objednávce, Celkem k úhradě, Objednat s povinností platby, Děkujeme za objednávku, Číslo objednávky.

---

## Accessibility (přístupnost)

- Kontrast: akcent `--accent-600` má ~4,9:1 na bílé; text primary/secondary splňuje AA.
- **Stav nikdy jen barvou** — `StockStatus` vždy nese text (+ barevnou tečku). Platí pro dostupnost i validaci.
- Focus: viditelný 3px prstenec (`--ring`) jen na `:focus-visible`, nikdy potlačený.
- Dotykové cíle: interaktivní ikony min. 44px (přes `IconButton`).
- Accessibility texty jsou české (hodnoty atributů, ne názvy atributů): „Otevřít košík, 3 položky", „Přidat do oblíbených", „Předchozí strana", „Zavřít dialog", „Hodnocení 4.5 z 5", „Drobečková navigace". Technické atributy `aria-label`, `aria-live`, `aria-describedby` se nepřejmenovávají.
- Respektuje `prefers-reduced-motion` (délky animací se srazí na ~0).

---

## VISUAL FOUNDATIONS (vizuální základy)

- **Barevná nálada:** zdrženlivá, téměř neutrální. Chladná šedá škála (`--gray-*`) pro povrchy/text/borders a jeden přístupný modrý akcent (`--accent-600`) pro akce a focus. Stavové barvy (zelená/oranžová/červená) výhradně pro význam. Maximálně jeden akcent.
- **Typografie:** ve výchozím stavu systémový font stack — žádný webfont ke stažení. Display i body sdílejí rodinu; hierarchii tvoří velikost/váha. Malá tercie (1,200) na základu 16px. Váhy 400/500/600/700. Mono pro SKU/kódy.
- **Rozestupy:** přísná 4px mřížka (`--space-*`). Hustota je tokenizovaná (`--density-*`).
- **Pozadí:** pouze plochá barva — `--color-bg` za obsahem, `--color-surface` pro karty, `--gray-900` pro hero/patičku. Žádné gradienty, textury, patterny ani full-bleed fotky napevno v systému.
- **Obrázky:** systém dodává jen neutrální placeholder dlaždice. Klientská fotografie se vkládá do neutrálních bloků; systém nevnucuje teplé/studené/ČB/zrno.
- **Karty:** bílý povrch, 1px hairline border, radius `--radius-lg` (12px), klidový `--shadow-sm`. Interaktivní karta se zvedne na `--shadow-md` a posune o −2px. Žádné barevné levé lišty.
- **Rádiusy:** střední — ovládací prvky `--radius-md` (8px), karty `--radius-lg` (12px), chips/switch pill.
- **Stíny:** neutrální, vrstvené (`--shadow-xs`…`--shadow-xl`), pouze pro elevaci.
- **Animace:** střídmé a funkční. `--duration-fast` (120ms) pro stavy prvků, `--duration-base` (180ms) pro přepínače, `--duration-slow` (280ms) pro zoom obrázku. Easing `--ease-standard` — bez odskoku.
- **Hover:** tlačítka ztmavnou; secondary/ghost se vyplní `--color-surface-sunken`; obrázek produktu se zvětší na 1,04; karty se zvednou.
- **Active:** primary ztmavne dál; žádné zmenšení.
- **Průhlednost a blur:** minimálně. Ztlumený overlay (`--color-overlay`) za modály/drawery. Žádné frosted glass.
- **Layout:** vycentrovaný kontejner `--size-container-max` (výchozí 1560px, themeable; `--container-max` je deprecated alias), 12sloupcová mřížka, sticky header na `--z-header`. Breakpointy 7 stupňů (XXS–XXL, mobile-first, Core). Mřížky produktů content-driven (min. šířka karty + Container).

---

## ICONOGRAPHY (ikonografie)

- **Ikonová knihovna:** **Tabler Icons** · styl **Outline** · zdroj *official GitHub repository* · licence **MIT**. Kurátorovaná sada (59 ikon) v `assets/icons/`; registry + sémantické mapování v `components/media/iconRegistry.jsx` (Internal).
- **Rozhraní:** jediné standardní rozhraní je komponenta **`Icon`** (`components/media/Icon.jsx`). Ikony se používají přes sémantický účel (`icon.action.search` → `<Icon name="action.search">`) nebo interní/Tabler název. Sémantické mapování lze změnit bez přestavby komponent.
- **Pravidla:** mřížka 24×24, tah **2**, `fill:none`, `stroke:currentColor`, round cap/join. Ikony dědí barvu (currentColor), žádné natvrdo zadané barvy. Velikosti dle size tokenů: xs 16 / sm 20 / md 24 / lg 32 / xl 40. Velikost ikony ≠ klikací plocha (min. 44px řeší IconButton).
- **Přístupnost:** dekorativní ikona `aria-hidden`; sémantická `role="img"` + `accessibleLabel`; význam nikdy jen ikonou ani jen barvou. Interaktivní ikona vždy uvnitř IconButton s českým aria-labelem. `Icon` sama není interaktivní.
- **Zákaz:** míchat s jiným ikonovým stylem (bez schválení), překreslovat připojené ikony, emoji, unicode dingbaty, PNG ikony.
- **MISSING — NEEDS REVIEW:** sémantické účely bez připojené Tabler ikony: `navigation.home`, `action.edit`, `commerce.store`, `account.login`, `account.logout` (nevytvářet vlastní náhradu). Loader/spinner (SearchInput) rovněž není v sadě.
- **Přidání ikon:** nahradit/doplnit soubory v `assets/icons/`, přegenerovat registry, ověřit geometrii/názvy + a11y, teprve pak přijmout.

---

## LOGO

Systém **nedodává žádné logo ani značku** (je záměrně bez identity). Kde by byla značka, je vysázeno slovo **STOREFRONT** v display fontu jako prostý text (viz header/patička storefrontu a `thumbnail.html`). Klientský motiv dodá vlastní logo a tento text nahradí.

---

## Index / manifest

Kořenové soubory:
- `styles.css` — globální vstupní bod (pouze `@import`). **Konzumenti linkují tento jeden soubor.**
- `components.css` — token-driven třídy komponent (importované ze `styles.css`).
- `thumbnail.html` — dlaždice na homepage.
- `readme.md` — tento průvodce + manifest.
- `SKILL.md` — front-matter pro Agent Skills (stažení a použití v Claude Code).

Tokeny (`tokens/`, každý `@import`ovaný ze `styles.css`): `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `layout.css`, `base.css`.

Foundation specimen karty (`guidelines/`): accent scale, neutral grayscale, status colors, surface & text roles, commerce semantics, headings, body/label/caption, type scale, weights & mono, spacing scale, control density, radius, shadows, borders & focus ring.

### Components (namespace `window.Ds00MasterDesignSystem_3e78da`)

**Forms & controls** (`components/forms/`): `Button`, `IconButton`, `TextField`, `Select`, `Checkbox`, `Radio`, `Switch`, `QuantityStepper`, `FormField`, `Textarea`, `SearchInput`, `PasswordInput`.

**Core UI** (`components/core/`): `Badge`, `Tag`, `Card` (+ `CardBody`), `Rating` (hvězdy + volitelně `showValue` cs-CZ „4,8“ a `emptyLabel` placeholder pro nehodnocené), `Breadcrumb`, `Pagination`, `Alert`, `Divider`.

**Feedback** (`components/feedback/`): `EmptyState`, `Skeleton` (+ `LoadingMessage`), `Tooltip`, `Modal`, `Drawer`, `Toast`, `ToastRegion`. Interní overlay infrastruktura (`overlay.jsx` — focus trap, scroll lock, presence, Escape) je *Internal infrastructure*, není veřejná komponenta.

**Feedback+** : `Progress` (determinate/indeterminate, status). **Process**: `Stepper` (+`StepperItem`) — checkout kroky; krokové descriptions jsou volitelné a defaultně vypnuté (`showDescriptions`, default false — bez prázdného wrapperu/mezery, data zůstávají ve steps contractu). **Data display** (`components/data/`): `TableContainer`, `Table`, `TableCaption`, `TableHead`, `TableBody`, `TableFoot`, `TableRow`, `TableHeaderCell`, `TableCell`, `TableSortButton`.

**Content organization** (`components/content/`): `Tabs` (+`TabsList`, `TabsTrigger`, `TabsContent`), `Accordion` (+`AccordionItem`, `AccordionTrigger`, `AccordionContent`). Interní `internals.jsx` (useControllableState, roving) je *Internal infrastructure*.

**Media** (`components/media/`): `Icon` (Tabler Icons, outline; registry + sémantické mapování v `iconRegistry.jsx` — Internal), `ProductGallery` (galerie produktových fotografií pro PDP: rail-left/rail-bottom/editorial, single-preview, mobilní carousel s indikátory, fullscreen lightbox; fullscreen staví na sdílené overlay infrastruktuře). **Anatomie:** interní `.cc-gal__mediashell` je skutečná oblast hlavního média a positioning context pro sdílený overlay (`.cc-gal__overlay`, `inset:0`, `pointer-events:none`); Badge je jediný render/DOM prvek ukotvený top-start k media shellu, není pozicován podle šířky thumbnail railu; rail-left se pod 550px sbalí na jeden full-width sloupec, desktop rail-left od 550px, rail je na mobilu skrytý, mobilní carousel vyplní celou šířku. **Pravidlo:** *Shared gallery overlays are anchored to the media shell, not offset from the gallery root by thumbnail rail dimensions.* **Stav (v0.19.6):** Ready pro layout, MediaShell, responsive geometry, Badge overlay a thumbnail navigation (runtime ověřeno); manuální interakce a rozšířené a11y (keyboard, focus-visible, swipe, fullscreen sekvence, zoom 200 %, forced-colors, kontrast Badge, plný AX-tree) = Needs review. `CarouselIndicators` (obecné dots/capsule indikátory carouselu).

**Overlays** (`components/overlays/`): `Popover`, `DropdownMenu`, `Combobox`. Interní **Anchored Layer Infrastructure** (`anchored.jsx` — positioning, flip, collision, outside-dismiss, normalizace) je *Internal infrastructure*.p, scroll lock, presence, Escape) je *Internal infrastructure*, není veřejná komponenta.

**Commerce** (`components/commerce/`): `PriceTag` (+ `formatMoney`; volitelně `secondary` cenový řádek B2B/B2C a `note` accent/success), `StockStatus`, `OptionSwatch`, `ProductCard`, `CartLineItem`, `FavoriteButton` (toggle oblíbených nad IconButtonem: `product.favorite`/`favoriteActive`, aria-pressed, měnící se accessible name), `AddToCart` (nákupní akce: volitelný QuantityStepper + primární CTA; layout auto inline→stacked, stavy default/loading/disabled/added, behavior static/switch — nevlastní cenu/dostupnost/favorite/cart API), `Locale` (lokalizační vrstva: `formatMoney`, `formatPrice`, `plural`, `counts`, `availability`, `formatDate`).

### UI kits
- `ui_kits/storefront/` — interaktivní storefront (domů, kategorie/výpis, detail produktu, košík) složený z výše uvedených komponent. Viz jeho `README.md`.

### Intentional additions
Systém vznikl od základu (bez zdrojového inventáře), proto byla vytvořena standardní e-commerce sada primitiv výše. `QuantityStepper`, `PriceTag`, `StockStatus`, `OptionSwatch`, `ProductCard`, `CartLineItem` a `Locale` jsou commerce doplňky vyžadované doménou.

## Jak změnit verzi systému (Version Single Source of Truth)

1. **Jediný zdroj pravdy:** `system-meta.json` — změň pole `version` (strojově, např. `0.11`) a případně `status` (`Draft` → `Release Candidate` → `Stable`). Label „v0.11 Draft" se všude odvozuje automaticky.
2. Přidej nový heading do `docs/Changelog.md` (historické headings nikdy neměň).
3. Synchronizuj README: aktualizuj obsah bloku `<!-- SYSTEM_VERSION_START --> … <!-- SYSTEM_VERSION_END -->` (jediné ručně synchronizované místo; hlídá ho check).
4. Otevři Playground → **Version Consistency Check** v Coverage musí být **Pass** (porovnává meta ↔ README ↔ Changelog; mismatch test: `window.__versionCheck({version:"…",status:"…"})`).
5. Sestav bundle a ověř ho z disku; fresh reload `index.html` i `playground.html`; zkontroluj konzoli a zobrazenou verzi.
6. **Nikdy neupravuj ručně:** verzi v navigaci Playgroundu, v `index.html`, v manifestu ani v bundle — čtou kanonická metadata / generují se.

## Component Playground / QA Lab

`playground.html` (odkaz z `index.html`) je **Internal QA and documentation tool** — renderuje skutečné komponenty z namespace pro vizuální, interakční, klávesovou, responsive a accessibility kontrolu + regression testy. Automaticky ověřitelné (role/aria) vs. manuálně ověřitelné (focus-visible, zoom) jsou v tabulkách rozlišeny; neprovedené testy jsou „Not verified", ne falešný Pass.

**Přidání nebo změna komponenty (Adding or changing a component — povinný postup, Definition of Done):**
1. Implementace komponenty. 2. Veřejný export v namespace (`Name.jsx`+`.d.ts`). 3. Component Inventory (README + Audit, status a kategorie). 4. Dokumentační karta (`@dsCard`). 5. **Playground registry** (`playground.html`, pole `R` — jediný zdroj navigace, coverage i fixtures). 6. Fixtures všech variant, velikostí a stavů. 7. Interaktivní příklad. 8. Responsive QA (320px preset). 9. Accessibility QA (semantics, aria-label, keyboard). 10. Coverage verification (sekce Coverage v Playgroundu — počítá se automaticky z namespace; „missing" = komponenta nesmí být Ready). 11. Build + kontrola čerstvého bundle.

**Závazné pravidlo:** žádná nová ani upravená veřejná komponenta (včetně nové varianty, velikosti či stavu) **nesmí být označena Ready**, dokud není současně v Playgroundu — aktualizace Playgroundu je součástí implementace, ne následný úkol. Neúplná komponenta má status Draft/Needs review. Fixtures (loading/error/async) patří do Playgroundu, ne do produkční logiky.

## Dokumentace (docs/)

- [`Overview.md`](docs/Overview.md) — účel, vrstvy, struktura, verzování, klientské varianty.
- [`DesignPrinciples.md`](docs/DesignPrinciples.md) — 14 principů s příklady a dopady.
- [`ThemeContract.md`](docs/ThemeContract.md) — Primitive / Semantic / Component / Structural / Accessibility tokeny.
- [`Accessibility.md`](docs/Accessibility.md) — kontrastní a a11y kontrola (Pass / Needs review / Fail).
- [`Audit.md`](docs/Audit.md) — inventura tokenů a komponent.
- [`GapAnalysis.md`](docs/GapAnalysis.md) — backlog do v1.0 (P0–P2 / Extension).
- [`Changelog.md`](docs/Changelog.md) — historie verzí.

## Pravidla přidávání tokenů a komponent

- **Nové tokeny:** primitivum přidej do příslušného `tokens/*.css`; sémantický alias tam, kde nese význam. Sémantické tokeny odkazují na primitiva/jiné sémantické tokeny, nikdy přímo na nesystémovou hodnotu. Dodrž pojmenování `--<kategorie>-<role>-<varianta>-<stav>`.
- **Zákaz raw hodnot v komponentách:** žádné přímé HEX/RGB/HSL, spacing, radius, font-size, font-family ani stíny v komponentách — vždy přes token (třídy `cc-*` v `components.css`).
- **Component tokeny:** vytvářej jen tam, kde přidávají hodnotu (řízená změna / odlišení od semantic), ne jako pouhou kopii semantic tokenu.
- **Nové komponenty:** `Name.jsx` (named PascalCase export) + `Name.d.ts` (props, JSDoc) + `Name.prompt.md` + jedna `@dsCard` karta ve složce. Konzumuj existující primitiva (kompozice před custom). Doplň smysluplné stavy a cs-CZ texty/ARIA.
- **Project Extensions:** projektově specifické funkce (B2B, konfigurátor, rezervace…) drž mimo Core; nezasahuj do anatomie Core komponent.
- **Lokalizace:** zákaznické texty česky, formáty přes `Locale` (cs-CZ / CZK); technické názvy anglicky. Systém zůstává připraven na další locale.
- **Verzování:** MAJOR (breaking kontraktu) / MINOR (aditivní) / PATCH (opravy). Každou fázi zapiš do Changelogu; MAJOR doplň migrací.


- **Fonty** jsou ve výchozím stavu systémový stack (žádné webfont soubory). Klientský motiv přidá `@font-face` a přesměruje `--font-sans`/`--font-display`.
- **Ikony:** kurátorovaná sada **Tabler Icons** (outline, MIT) v `assets/icons/`, přístupná přes komponentu `Icon` (viz Iconography).
- **Žádné brand assety** (logo, fotografie, ilustrace) systém nedodává — záměrně.
- **Komentáře v `.d.ts`** jsou u části komponent ještě anglicky (technická API anotace); `.prompt.md` popisy jsou česky.
