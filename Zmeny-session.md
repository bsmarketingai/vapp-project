# VAPP.cz — souhrn změn v prototypu

Nejnovější den je vždy nahoře.

---

# 18. 9. 2026

## Homepage

- **Karusely Přívěsy a Náhradní díly přesunuty výše** — hned pod sekci s H1 a USP, před blok Servis a půjčovna.
- **Hero na mobilu:** obsah je kompaktnější a leží přímo na fotce (bílý box zmizel), čitelnost drží tmavý přechod odspodu; fotka je tak vidět i na S/XS/XXS. Popisky u akčních tlačítek na mobilu zmizely.
- **První slide hera** má stejnou dvojici tlačítek jako druhý (bez popisků): *Výprodej přívěsů* (červené) a *Náhradní díly v akci* (červené sekundární).
- **Nová varianta hera V2** — bez bílého boxu, text leží na fotce a čitelnost drží tmavý přechod zleva; výška odpovídá V1. Přepínač V1/V2 je v prezentační liště dole na stránce, volba se pamatuje.
- **H1 zkráceno** na „Přívěsy a náhradní díly".
- **Mobilní menu je na homepage stejné jako na Náhradních dílech** — 8 sdružovacích kategorií (V1) a na konci *Akce a slevy*. Dřív tam byl starý dlouhý seznam.

## Detail produktu

- **Objednací číslo pod hvězdičkami hodnocení** (karta i detail), s opticky stejným odsazením shora i zdola.
- **Přepnutí záložky už stránkou neposkočí** — web zůstane na místě; odkazy na hodnocení a parametry z horní části detailu na záložky dál odscrollují.
- **Galerie na mobilu má šipky vlevo/vpravo** přímo na velké fotce s ukazatelem „1 / 4"; miniatury se na mobilu skryjí. Platí pro náhradní díly i přívěsy.
- **Tlačítko „Domluvit prohlídku"** vede na stránku Servis.

## Ostatní

- **Náhledové fotky u podkategorií Elektro a osvětlení** (17 položek) — dlaždice hubů si drží ikonu kategorie.
- **Nová varianta tlačítka** „sekundární v červené rodině" pro akční kontexty.
- **Z patičky odstraněna položka Příslušenství.**

---

# 20. 8. 2026

## Výpis produktů a karta

- **Přepínání na druhou náhledovou fotku při hoveru.** Karta má nyní dvě fotky; při přejetí myší se plynule prolne na druhý pohled. Zákazník si produkt prohlédne bez nutnosti otevírat detail.
- **Podklad fotek je bílý.** Fotky s průhledným pozadím dřív splývaly s šedým podkladem stránky.
- **Mezery mezi kartami zvětšeny na 20 px.** Karty ve výpisu byly příliš nalepené na sebe, výpis teď lépe dýchá.
- **Přepínač počtu sloupců pro velké obrazovky (4 / 5).** Na verzi V1 i V2 lze přímo na stránce přepnout mřížku na 5 sloupců — karty jsou pak užší. Slouží k porovnání, který počet je pro velké monitory vhodnější.
- **Checkbox „Porovnat" na kartě skryt.** Funkce zůstává v kódu připravená, jde ji zapnout zpět; karta je bez ní klidnější.
- **Objednací číslo přesunuto do levého dolního rohu fotky.** Nad názvem produktu, mimo spodní obchodní část karty — spodek karty teď patří jen ceně a nákupu.
- **Karty přívěsů mají výpis klíčových parametrů** (max. 3 řádky), karty náhradních dílů zůstávají bez nich.

## Košík a přihlášení

- **Nový popup košíku (BasketPopup).** Otevře se hoverem nebo klikem na ikonu košíku v hlavičce a ukazuje položky s náhledem, počtem kusů, jednotkovou cenou a možností položku smazat; ve spodní části je součet a tlačítko *Přejít do košíku*.
- **Chování popupu opraveno.** Původně se panel po otevření okamžitě zavíral. Nyní: hover otevře a nechá doběh na přejezd myší, klik panel „připne" (zavře jej křížek, klik mimo nebo Escape).
- **Panel je zakotvený pod ikonou košíku**, ne u pravého okraje stránky; pozice se drží při scrollování i změně šířky okna.
- **Na malých displejích popup košíku i přihlášení zabírá celou obrazovku** a má tlačítko *Zpět do obchodu*. Na mobilu je práce s malým panelem nepohodlná.

## Hlavička a prolinkování

- **Logo vede na úvodní stranu**, položka *Přívěsy* na stránku výpisu přívěsů, dlaždice *Přívěsy* v rozcestníku na homepage také.
- **Aktivní položka v hlavičce se zvýrazňuje podle stránky**, na které se návštěvník právě nachází.

## Kategorie a popisy

- **V popisu kategorie jsou odkazy přímo v textu** — ukazuje to, jak se obsah bude prolinkovávat na související kategorie a poradnu.
- **Odkaz „Zobrazit celý popis" dostal ikonu a vlastní řádek**, aby nesplýval s odkazy v textu. Sjednoceno na všech stránkách výpisu.

## Ikony přívěsů

- **Ikony kategorií přívěsů zprovozněny a sjednoceny** s náhradními díly (tah 2 px, barva podle kontextu).
- **Ikony jsou červené s jemným červeným podbarvením**, aby v mřížce kategorií vynikly.

## Blok výhod (USP)

- **Nová třetí varianta „sloupce"** — ikona nahoře, pod ní nadpis a popis, vše na střed. Od pásma M dolů se automaticky vrací k horizontálnímu řešení, aby na mobilu nevznikaly vysoké bloky.
- **Blok je bez bílé podkladové plochy**, splývá s pozadím stránky.
- **Nové ikony výhod**: 35 let zkušeností, sklad dílů, rychlá expedice, autorizovaný servis.
- **V rotujícím pásu jsou na velkých obrazovkách dvě sdělení vedle sebe**, oddělená svislou linkou; pás se posouvá po dvou. Na menších šířkách zůstává jedno sdělení a na nejmenších telefonech (do 419 px) mizí ikona a tečky, aby se pruh vešel i na 320 px.
- **Pás USP je nově i nad hlavičkou na stránkách náhradních dílů (V1 i V2)** — nese provozní a sezónní sdělení hned nad topbarem.
- **USP je nyní na všech stránkách nad patičkou** (úvod, náhradní díly, přívěsy) — uzavírá stránku argumenty, proč nakoupit u VAPP.

## Sekce Servis a půjčovna

- **Na pozadí je fotka mechanika při opravě přívěsu**, ztmavená firemní modrou tak, aby text i karty zůstaly plně čitelné.
- **Ikony obou služeb v červeném provedení** pro zvýraznění.
- **Obsahové boxy mají 90% krytí**, fotka jimi lehce prosvítá.

## Patička

- **Odkazy v patičce mají na mobilu větší klikací plochu** (40 px místo ~28 px) při nezměněném vzhledu — prstem se dají trefit spolehlivě.

## Poznámky

- Všechny změny drží jednotný design systém (barvy, velikosti písma, mezery, rádiusy) a přístupnost na úrovni WCAG 2.2 AA.
- Verze V1 a V2 stránek výpisu zůstávají obě k dispozici pro porovnání.
