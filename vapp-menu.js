/* VAPP — data desktopového megamenu (MegaMenu.dc.html).
   Načítá se klasickým <script> v helmetu Hlavicky, aby megamenu fungovalo na KAŽDÉ stránce.
   Struktura Náhradních dílů je přepis klientského excelu a pořadí odpovídá prodejům —
   ZDROJ PRAVDY je HUBS + SALES v nahradnidily.dc.html; při změně tam přegenerovat i tady.
   Stránka, která má strukturu živě (nahradnidily s přepínačem V1/V2), posílá Hlavicce
   vlastní megaGroups a tento default pro svůj tab přebije. */
window.VAPP_MEGA = {
  "Náhradní díly": {
    "groups": [
      {
        "name": "Elektro, svítilny, odrazky",
        "href": "nahradnidily.dc.html#/nahradni-dily/h5-elektro-svitilny-odrazky/",
        "image": "uploads/elektro-a-osvetleni.jpg",
        "items": [
          {
            "name": "Baterie, nabíječky a příslušenství",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/baterie-nabijecky-a-prislusenstvi/"
          },
          {
            "name": "Blinkry",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/blinkry/"
          },
          {
            "name": "Brzdové svítilny",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/brzdove-svitilny/"
          },
          {
            "name": "Couvačky a mlhovky",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/couvacky-a-mlhovky/"
          },
          {
            "name": "Držáky svítilen a odrazek",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/drzaky-svitilen-a-odrazek/"
          },
          {
            "name": "Kabely a kabeláže",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/kabely-a-kabelaze/"
          },
          {
            "name": "Majáky a výstražné svítilny",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/majaky-a-vystrazne-svitilny/"
          },
          {
            "name": "Montážní materiál",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/montazni-material/"
          },
          {
            "name": "Obrysové svítilny",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/obrysove-svitilny/"
          },
          {
            "name": "Odrazky a odrazové desky",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/odrazky-a-odrazove-desky/"
          },
          {
            "name": "Osvětlení registrační značky",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/osvetleni-registracni-znacky/"
          },
          {
            "name": "Pracovní světlomety",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/pracovni-svetlomety/"
          },
          {
            "name": "Sdružené zadní svítilny",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/sdruzene-zadni-svitilny/"
          },
          {
            "name": "Skla svítilen náhradní",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/skla-svitilen-nahradni/"
          },
          {
            "name": "Vnitřní osvětlení",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/vnitrni-osvetleni/"
          },
          {
            "name": "Zásuvky, zástrčky, konektory",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/zasuvky-zastrcky-konektory/"
          },
          {
            "name": "Žárovky, náhradní LED moduly",
            "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/zarovky-nahradni-led-moduly/"
          }
        ]
      },
      {
        "name": "Doplňky a údržba",
        "href": "nahradnidily.dc.html#/nahradni-dily/h8-doplnky-a-udrzba/",
        "image": "uploads/plachty.jpg",
        "items": [
          {
            "name": "Plachty a příslušenství",
            "href": "nahradnidily.dc.html#/nahradni-dily/plachty-a-prislusenstvi/"
          },
          {
            "name": "Doplňky k přívěsům",
            "href": "nahradnidily.dc.html#/nahradni-dily/doplnky-k-privesum/"
          },
          {
            "name": "Pomůcky pro údržbu",
            "href": "nahradnidily.dc.html#/nahradni-dily/pomucky-pro-udrzbu/"
          },
          {
            "name": "Boxy na nářadí a držáky boxů",
            "href": "nahradnidily.dc.html#/nahradni-dily/boxy-na-naradi-a-drzaky-boxu/"
          }
        ]
      },
      {
        "name": "Nakládání a zajištění nákladu",
        "href": "nahradnidily.dc.html#/nahradni-dily/h7-nakladani-a-zajisteni-nakladu/",
        "image": "uploads/zabezpeceni_nakladu.jpg",
        "items": [
          {
            "name": "Upínací soupravy a popruhy",
            "href": "nahradnidily.dc.html#/nahradni-dily/zabezpeceni-nakladu/upinaci-soupravy-a-popruhy/"
          },
          {
            "name": "Ochrany popruhů a háky",
            "href": "nahradnidily.dc.html#/nahradni-dily/zabezpeceni-nakladu/ochrany-popruhu-a-haky/"
          },
          {
            "name": "Zakrývací sítě",
            "href": "nahradnidily.dc.html#/nahradni-dily/zabezpeceni-nakladu/zakryvaci-site/"
          },
          {
            "name": "Upínací oka a misky",
            "href": "nahradnidily.dc.html#/nahradni-dily/zabezpeceni-nakladu/upinaci-oka-a-misky/"
          },
          {
            "name": "Klíny na ložnou plochu",
            "href": "nahradnidily.dc.html#/nahradni-dily/zabezpeceni-nakladu/kliny-na-loznou-plochu/"
          },
          {
            "name": "Doplňky k zabezpečení nákladu",
            "href": "nahradnidily.dc.html#/nahradni-dily/zabezpeceni-nakladu/doplnky-k-zabezpeceni-nakladu/"
          },
          {
            "name": "Obalové materiály",
            "href": "nahradnidily.dc.html#/nahradni-dily/zabezpeceni-nakladu/obalove-materialy/"
          },
          {
            "name": "Klíny a držáky",
            "href": "nahradnidily.dc.html#/nahradni-dily/kliny-a-drzaky/"
          },
          {
            "name": "Nájezdy",
            "href": "nahradnidily.dc.html#/nahradni-dily/najezdy/"
          },
          {
            "name": "Navijáky a příslušenství",
            "href": "nahradnidily.dc.html#/nahradni-dily/navijaky-a-prislusenstvi/"
          }
        ]
      },
      {
        "name": "Nápravy a díly náprav",
        "href": "nahradnidily.dc.html#/nahradni-dily/h1-napravy-a-dily-naprav/",
        "image": "uploads/celisti.jpg",
        "items": [
          {
            "name": "Díly náprav",
            "href": "nahradnidily.dc.html#/nahradni-dily/dily-naprav/"
          },
          {
            "name": "Nápravy kompletní",
            "href": "nahradnidily.dc.html#/nahradni-dily/napravy-kompletni/"
          }
        ]
      },
      {
        "name": "Nájezdové brzdy, tažné spojky",
        "href": "nahradnidily.dc.html#/nahradni-dily/h2-najezdove-brzdy-tazne-spojky/",
        "image": "uploads/kulove-tazne-spojky.jpg",
        "items": [
          {
            "name": "Spojovací zařízení a zámky",
            "href": "nahradnidily.dc.html#/nahradni-dily/spojovaci-zarizeni-a-zamky/"
          },
          {
            "name": "Nájezdové brzdy a díly",
            "href": "nahradnidily.dc.html#/nahradni-dily/najezdove-brzdy-a-dily/"
          }
        ]
      },
      {
        "name": "Konstrukční díly",
        "href": "nahradnidily.dc.html#/nahradni-dily/h6-konstrukcni-dily/",
        "image": "uploads/konstrukcni_dily.jpg",
        "items": [
          {
            "name": "Držáky motocyklů",
            "href": "nahradnidily.dc.html#/nahradni-dily/konstrukcni-dily/drzaky-motocyklu/"
          },
          {
            "name": "Držáky rezervního kola",
            "href": "nahradnidily.dc.html#/nahradni-dily/konstrukcni-dily/drzaky-rezervniho-kola/"
          },
          {
            "name": "Oje a příslušenství",
            "href": "nahradnidily.dc.html#/nahradni-dily/konstrukcni-dily/oje-a-prislusenstvi/"
          },
          {
            "name": "Oje výškově stavitelné a díly",
            "href": "nahradnidily.dc.html#/nahradni-dily/konstrukcni-dily/oje-vyskove-stavitelne-a-dily/"
          },
          {
            "name": "Pojezdové plechy",
            "href": "nahradnidily.dc.html#/nahradni-dily/konstrukcni-dily/pojezdove-plechy/"
          },
          {
            "name": "Překližky",
            "href": "nahradnidily.dc.html#/nahradni-dily/konstrukcni-dily/preklizky/"
          },
          {
            "name": "Rolny a opěry pro lodě",
            "href": "nahradnidily.dc.html#/nahradni-dily/konstrukcni-dily/rolny-a-opery-pro-lode/"
          },
          {
            "name": "Spojovací materiál",
            "href": "nahradnidily.dc.html#/nahradni-dily/konstrukcni-dily/spojovaci-material/"
          },
          {
            "name": "Doplňky",
            "href": "nahradnidily.dc.html#/nahradni-dily/konstrukcni-dily/doplnky/"
          },
          {
            "name": "Díly rámů přívěsů VAPP",
            "href": "nahradnidily.dc.html#/nahradni-dily/konstrukcni-dily/dily-ramu-privesu-vapp/"
          }
        ]
      },
      {
        "name": "Pneu, kola, disky",
        "href": "nahradnidily.dc.html#/nahradni-dily/h3-pneu-kola-disky/",
        "image": "uploads/kola-a-pneumatiky.jpg",
        "items": [
          {
            "name": "Disky kol",
            "href": "nahradnidily.dc.html#/nahradni-dily/pneu-kola-disky/disky-kol/"
          },
          {
            "name": "Kompletní kola",
            "href": "nahradnidily.dc.html#/nahradni-dily/pneu-kola-disky/kompletni-kola/"
          },
          {
            "name": "Pneu",
            "href": "nahradnidily.dc.html#/nahradni-dily/pneu-kola-disky/pneu/"
          },
          {
            "name": "Pneu, kola, disky 8\"",
            "href": "nahradnidily.dc.html#/nahradni-dily/pneu-kola-disky/pneu-kola-disky-8/"
          },
          {
            "name": "Pneu, kola, disky 10\"",
            "href": "nahradnidily.dc.html#/nahradni-dily/pneu-kola-disky/pneu-kola-disky-10/"
          },
          {
            "name": "Pneu, kola, disky 13\"",
            "href": "nahradnidily.dc.html#/nahradni-dily/pneu-kola-disky/pneu-kola-disky-13/"
          },
          {
            "name": "Pneu, kola, disky 14\"",
            "href": "nahradnidily.dc.html#/nahradni-dily/pneu-kola-disky/pneu-kola-disky-14/"
          },
          {
            "name": "Pneu, kola, disky 15\" a více",
            "href": "nahradnidily.dc.html#/nahradni-dily/pneu-kola-disky/pneu-kola-disky-15-a-vice/"
          },
          {
            "name": "Příslušenství kol a pneumatik",
            "href": "nahradnidily.dc.html#/nahradni-dily/pneu-kola-disky/prislusenstvi-kol-a-pneumatik/"
          }
        ]
      },
      {
        "name": "Opěrná kolečka, nohy, držáky",
        "href": "nahradnidily.dc.html#/nahradni-dily/h4-operna-kolecka-nohy-drzaky/",
        "image": "uploads/kolecka-1.jpg",
        "items": [
          {
            "name": "Opěrná kolečka",
            "href": "nahradnidily.dc.html#/nahradni-dily/operna-kolecka-nohy-drzaky/operna-kolecka/"
          },
          {
            "name": "Opěrné nohy",
            "href": "nahradnidily.dc.html#/nahradni-dily/operna-kolecka-nohy-drzaky/operne-nohy/"
          },
          {
            "name": "Držáky a klemy",
            "href": "nahradnidily.dc.html#/nahradni-dily/operna-kolecka-nohy-drzaky/drzaky-a-klemy/"
          },
          {
            "name": "Díly a doplňky koleček a nohou",
            "href": "nahradnidily.dc.html#/nahradni-dily/operna-kolecka-nohy-drzaky/dily-a-doplnky-kolecek-a-nohou/"
          }
        ]
      }
    ],
    "m2": [
      {
        "sections": [
          {
            "kicker": "Elektro a osvětlení",
            "image": "uploads/elektro-a-osvetleni.jpg",
            "items": [
              { "name": "Elektro, svítilny, odrazky", "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/" }
            ]
          },
          {
            "kicker": "Podvozek",
            "image": "uploads/napravy-a-brzdy.jpg",
            "items": [
              { "name": "Díly náprav", "href": "nahradnidily.dc.html#/nahradni-dily/dily-naprav/" },
              { "name": "Nápravy kompletní", "href": "nahradnidily.dc.html#/nahradni-dily/napravy-kompletni/" },
              { "name": "Pneu, kola, disky", "href": "nahradnidily.dc.html#/nahradni-dily/pneu-kola-disky/" },
              { "name": "Nájezdové brzdy a díly", "href": "nahradnidily.dc.html#/nahradni-dily/najezdove-brzdy-a-dily/" },
              { "name": "Hydraulika přívěsů", "href": "nahradnidily.dc.html#/nahradni-dily/hydraulika-privesu/" }
            ]
          }
        ]
      },
      {
        "sections": [
          {
            "kicker": "Karoserie a nástavba",
            "image": "uploads/plachty.jpg",
            "items": [
              { "name": "Plachty a příslušenství", "href": "nahradnidily.dc.html#/nahradni-dily/plachty-a-prislusenstvi/" },
              { "name": "Bočnice, uzávěry, panty", "href": "nahradnidily.dc.html#/nahradni-dily/bocnice-uzavery-panty/" },
              { "name": "Konstrukční díly", "href": "nahradnidily.dc.html#/nahradni-dily/konstrukcni-dily/" },
              { "name": "Blatníky a zástěrky", "href": "nahradnidily.dc.html#/nahradni-dily/blatniky-a-zasterky/" },
              { "name": "Plynové vzpěry a příslušenství", "href": "nahradnidily.dc.html#/nahradni-dily/plynove-vzpery-a-prislusenstvi/" }
            ]
          },
          {
            "kicker": "Spojení s vozidlem",
            "image": "uploads/spojovaci-zarizeni.jpg",
            "items": [
              { "name": "Spojovací zařízení a zámky", "href": "nahradnidily.dc.html#/nahradni-dily/spojovaci-zarizeni-a-zamky/" },
              { "name": "Opěrná kolečka, nohy, držáky", "href": "nahradnidily.dc.html#/nahradni-dily/operna-kolecka-nohy-drzaky/" }
            ]
          }
        ]
      },
      {
        "sections": [
          {
            "kicker": "Manipulace a nakládání",
            "image": "uploads/zabezpeceni_nakladu.jpg",
            "items": [
              { "name": "Zabezpečení nákladu", "href": "nahradnidily.dc.html#/nahradni-dily/zabezpeceni-nakladu/" },
              { "name": "Klíny a držáky", "href": "nahradnidily.dc.html#/nahradni-dily/kliny-a-drzaky/" },
              { "name": "Nájezdy", "href": "nahradnidily.dc.html#/nahradni-dily/najezdy/" },
              { "name": "Navijáky a příslušenství", "href": "nahradnidily.dc.html#/nahradni-dily/navijaky-a-prislusenstvi/" },
              { "name": "Boxy na nářadí a držáky boxů", "href": "nahradnidily.dc.html#/nahradni-dily/boxy-na-naradi-a-drzaky-boxu/" }
            ]
          },
          {
            "kicker": "Doplňky a údržba",
            "image": "uploads/doplnky.jpg",
            "items": [
              { "name": "Doplňky k přívěsům", "href": "nahradnidily.dc.html#/nahradni-dily/doplnky-k-privesum/" },
              { "name": "Pomůcky pro údržbu", "href": "nahradnidily.dc.html#/nahradni-dily/pomucky-pro-udrzbu/" }
            ]
          }
        ]
      },
      {
        "sections": [
          {
            "kicker": "Díly podle výrobce",
            "items": [
              { "name": "KNOTT", "href": "nahradnidily.dc.html#/nahradni-dily/vyrobce/knott/" },
              { "name": "AL-KO", "href": "nahradnidily.dc.html#/nahradni-dily/vyrobce/al-ko/" },
              { "name": "BPW", "href": "nahradnidily.dc.html#/nahradni-dily/vyrobce/bpw/" },
              { "name": "Jokon", "href": "nahradnidily.dc.html#/nahradni-dily/vyrobce/jokon/" },
              { "name": "VAPP", "href": "nahradnidily.dc.html#/nahradni-dily/vyrobce/vapp/" }
            ]
          },
          {
            "kicker": "Akce",
            "items": [
              { "name": "Akce a slevy %", "href": "nahradnidily.dc.html#/nahradni-dily/akce/", "tone": "sale" }
            ]
          }
        ]
      }
    ],
    "m2Foot": {
      "allLabel": "Všechny náhradní díly",
      "allHref": "nahradnidily.dc.html#/nahradni-dily/",
      "catsLabel": "Všechny kategorie",
      "catsHref": "nahradnidily.dc.html#/nahradni-dily/"
    },
    "rail": [
      {
        "name": "Plynové vzpěry",
        "href": "nahradnidily.dc.html#/nahradni-dily/plynove-vzpery-a-prislusenstvi/"
      },
      {
        "name": "Nájezdové brzdy",
        "href": "nahradnidily.dc.html#/nahradni-dily/najezdove-brzdy-a-dily/"
      },
      {
        "name": "Kabeláž a zásuvky",
        "href": "nahradnidily.dc.html#/nahradni-dily/elektro-svitilny-odrazky/kabely-a-kabelaze/"
      },
      {
        "name": "Pneumatiky s diskem",
        "href": "nahradnidily.dc.html#/nahradni-dily/pneu-kola-disky/kompletni-kola/"
      },
      {
        "name": "Akce a slevy",
        "href": "nahradnidily.dc.html#/nahradni-dily/akce/",
        "tone": "sale",
        "iconName": "discount"
      }
    ]
  },
  "Přívěsy": {
    "groups": [
      {
        "name": "Jednoosé valníky",
        "href": "privesy-V1.dc.html#/privesy/jednoose-valniky/",
        "image": "privesy-kat-01.png",
        "items": [
          {
            "name": "Nebrzděné do 750 kg",
            "href": "privesy-V1.dc.html#/privesy/jednoose-valniky/nebrzdene-do-750-kg/"
          },
          {
            "name": "Brzděné do 1300 kg",
            "href": "privesy-V1.dc.html#/privesy/jednoose-valniky/brzdene-do-1300-kg/"
          },
          {
            "name": "Sklopné jednoosé",
            "href": "privesy-V1.dc.html#/privesy/jednoose-valniky/sklopne-jednoose/"
          }
        ]
      },
      {
        "name": "Dvouosé valníky",
        "href": "privesy-V1.dc.html#/privesy/dvouose-valniky/",
        "image": "privesy-kat-02.png",
        "items": [
          {
            "name": "Do 2000 kg",
            "href": "privesy-V1.dc.html#/privesy/dvouose-valniky/do-2000-kg/"
          },
          {
            "name": "Do 2700 kg",
            "href": "privesy-V1.dc.html#/privesy/dvouose-valniky/do-2700-kg/"
          },
          {
            "name": "Do 3500 kg",
            "href": "privesy-V1.dc.html#/privesy/dvouose-valniky/do-3500-kg/"
          }
        ]
      },
      {
        "name": "Tříosé valníky",
        "href": "privesy-V1.dc.html#/privesy/triose-valniky/",
        "image": "privesy-kat-03.png",
        "items": [
          {
            "name": "Do 3500 kg",
            "href": "privesy-V1.dc.html#/privesy/triose-valniky/do-3500-kg/"
          }
        ]
      },
      {
        "name": "Přepravníky motocyklů",
        "href": "privesy-V1.dc.html#/privesy/prepravniky-motocyklu/",
        "image": "privesy-kat-04.png",
        "items": [
          {
            "name": "Pro 1 motocykl",
            "href": "privesy-V1.dc.html#/privesy/prepravniky-motocyklu/pro-1-motocykl/"
          },
          {
            "name": "Pro 2 motocykly",
            "href": "privesy-V1.dc.html#/privesy/prepravniky-motocyklu/pro-2-motocykly/"
          },
          {
            "name": "Pro 3 motocykly",
            "href": "privesy-V1.dc.html#/privesy/prepravniky-motocyklu/pro-3-motocykly/"
          }
        ]
      },
      {
        "name": "Přepravníky strojů",
        "href": "privesy-V1.dc.html#/privesy/prepravniky-stroju/",
        "image": "privesy-kat-05.png",
        "items": [
          {
            "name": "Se sklopnou rampou",
            "href": "privesy-V1.dc.html#/privesy/prepravniky-stroju/se-sklopnou-rampou/"
          },
          {
            "name": "S hydraulikou",
            "href": "privesy-V1.dc.html#/privesy/prepravniky-stroju/s-hydraulikou/"
          }
        ]
      },
      {
        "name": "Přepravníky automobilů",
        "href": "privesy-V1.dc.html#/privesy/prepravniky-automobilu/",
        "image": "privesy-kat-06.png",
        "items": [
          {
            "name": "Nebrzděné plato",
            "href": "privesy-V1.dc.html#/privesy/prepravniky-automobilu/nebrzdene-plato/"
          },
          {
            "name": "Brzděné 2700 kg",
            "href": "privesy-V1.dc.html#/privesy/prepravniky-automobilu/brzdene-2700-kg/"
          },
          {
            "name": "Brzděné 3500 kg",
            "href": "privesy-V1.dc.html#/privesy/prepravniky-automobilu/brzdene-3500-kg/"
          }
        ]
      },
      {
        "name": "Sklopné přívěsy",
        "href": "privesy-V1.dc.html#/privesy/sklopne-privesy/",
        "image": "privesy-kat-07.png",
        "items": [
          {
            "name": "Zadní sklápění",
            "href": "privesy-V1.dc.html#/privesy/sklopne-privesy/zadni-sklapeni/"
          },
          {
            "name": "Třístranné sklápění",
            "href": "privesy-V1.dc.html#/privesy/sklopne-privesy/tristranne-sklapeni/"
          },
          {
            "name": "Hydraulické sklápění",
            "href": "privesy-V1.dc.html#/privesy/sklopne-privesy/hydraulicke-sklapeni/"
          }
        ]
      },
      {
        "name": "Přepravníky lodí a vodních skútrů",
        "href": "privesy-V1.dc.html#/privesy/prepravniky-lodi-a-vodnich-skutru/",
        "image": "privesy-kat-08.png",
        "items": [
          {
            "name": "Pro vodní skútry",
            "href": "privesy-V1.dc.html#/privesy/prepravniky-lodi-a-vodnich-skutru/pro-vodni-skutry/"
          },
          {
            "name": "Pro lodě do 6 m",
            "href": "privesy-V1.dc.html#/privesy/prepravniky-lodi-a-vodnich-skutru/pro-lode-do-6-m/"
          },
          {
            "name": "Pro lodě nad 6 m",
            "href": "privesy-V1.dc.html#/privesy/prepravniky-lodi-a-vodnich-skutru/pro-lode-nad-6-m/"
          }
        ]
      },
      {
        "name": "Přepravníky zvířat",
        "href": "privesy-V1.dc.html#/privesy/prepravniky-zvirat/",
        "image": "privesy-kat-09.png",
        "items": [
          {
            "name": "Pro koně",
            "href": "privesy-V1.dc.html#/privesy/prepravniky-zvirat/pro-kone/"
          },
          {
            "name": "Pro hospodářská zvířata",
            "href": "privesy-V1.dc.html#/privesy/prepravniky-zvirat/pro-hospodarska-zvirata/"
          }
        ]
      },
      {
        "name": "Skříňové přívěsy",
        "href": "privesy-V1.dc.html#/privesy/skrinove-privesy/",
        "image": "privesy-kat-10.png",
        "items": [
          {
            "name": "Jednoosé skříňové",
            "href": "privesy-V1.dc.html#/privesy/skrinove-privesy/jednoose-skrinove/"
          },
          {
            "name": "Dvouosé skříňové",
            "href": "privesy-V1.dc.html#/privesy/skrinove-privesy/dvouose-skrinove/"
          },
          {
            "name": "S nájezdovou rampou",
            "href": "privesy-V1.dc.html#/privesy/skrinove-privesy/s-najezdovou-rampou/"
          }
        ]
      },
      {
        "name": "Chladírenské přívěsy",
        "href": "privesy-V1.dc.html#/privesy/chladirenske-privesy/",
        "image": "privesy-kat-10.png",
        "items": []
      }
    ],
    "rail": [
      {
        "name": "Nebrzděné do 750 kg",
        "href": "privesy-V1.dc.html#/privesy/jednoose-valniky/nebrzdene-do-750-kg/"
      },
      {
        "name": "Brzděné do 1300 kg",
        "href": "privesy-V1.dc.html#/privesy/jednoose-valniky/brzdene-do-1300-kg/"
      },
      {
        "name": "Sklopné přívěsy",
        "href": "privesy-V1.dc.html#/privesy/sklopne-privesy/"
      },
      {
        "name": "Přepravníky automobilů",
        "href": "privesy-V1.dc.html#/privesy/prepravniky-automobilu/"
      },
      {
        "name": "Výprodej přívěsů",
        "href": "privesy-V1.dc.html#/privesy/vyprodej-privesu/",
        "tone": "sale",
        "iconName": "discount"
      }
    ]
  }
};
try { window.dispatchEvent(new Event('vapp-mega-ready')); } catch(e) {}
