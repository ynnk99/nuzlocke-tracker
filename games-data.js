// ============================================================
//  GAMES DATA (Arenen / Städte, deutsche Namen)
//  Wird sowohl vom Tracker (index.html) als auch vom
//  OBS-Overlay (obs.html) genutzt.
// ============================================================

// Orden-Bilder werden von den Bulbapedia-Archiven verlinkt (echte
// Grafiken aus den Spielen). Top4/Champion (und in Alola die
// Kahunas) vergeben in den Spielen keinen echten Orden - dort
// bleibt `badge` auf null und es wird ein Pokal-Icon angezeigt.
const B = name => `https://archives.bulbagarden.net/wiki/Special:FilePath/${encodeURIComponent(name)}.png?width=96`;

const GAMES = [
  { id: 'rb',  name: 'Rot / Blau',     gen: 1, gyms: [
    {name:'Marmoria City',badge:B('Boulder Badge'),level:12},{name:'Azuria City',badge:B('Cascade Badge'),level:21},{name:'Orania City',badge:B('Thunder Badge'),level:24},{name:'Prismania City',badge:B('Rainbow Badge'),level:29},
    {name:'Fuchsania City',badge:B('Soul Badge'),level:43},{name:'Saffronia City',badge:B('Marsh Badge'),level:43},{name:'Zinnoberinsel',badge:B('Volcano Badge'),level:47},{name:'Vertania City',badge:B('Earth Badge'),level:50},
    {name:'Top4 - Lorelei',badge:null,level:54},{name:'Top4 - Bruno',badge:null,level:58},{name:'Top4 - Agathe',badge:null,level:60},{name:'Top4 - Siegfried',badge:null,level:62},{name:'Champion Blau',badge:null,level:65}
  ]},
  { id: 'gs',  name: 'Gold / Silber',  gen: 2, gyms: [
    {name:'Viola City',badge:B('Zephyr Badge'),level:18},{name:'Azalea City',badge:B('Hive Badge'),level:21},{name:'Dukatia City',badge:B('Plain Badge'),level:26},{name:'Teak City',badge:B('Fog Badge'),level:30},
    {name:'Anemonia City',badge:B('Storm Badge'),level:35},{name:'Oliviana City',badge:B('Mineral Badge'),level:38},{name:'Mahagonia City',badge:B('Glacier Badge'),level:42},{name:'Ebenholz City',badge:B('Rising Badge'),level:44},
    {name:'Top4 - Willi',badge:null,level:50},{name:'Top4 - Koga',badge:null,level:52},{name:'Top4 - Bruno',badge:null,level:52},{name:'Top4 - Melanie',badge:null,level:55},{name:'Champion Siegfried',badge:null,level:58},
    {name:'Marmoria City (Rocko)',badge:B('Boulder Badge'),level:60},{name:'Azuria City (Misty)',badge:B('Cascade Badge'),level:60},{name:'Orania City (Major Bob)',badge:B('Thunder Badge'),level:60},{name:'Prismania City (Erika)',badge:B('Rainbow Badge'),level:60},{name:'Fuchsania City (Janina)',badge:B('Soul Badge'),level:60},{name:'Saffronia City (Sabrina)',badge:B('Marsh Badge'),level:60},{name:'Seeschauminseln (Pyro)',badge:B('Volcano Badge'),level:60},{name:'Vertania City (Blau)',badge:B('Earth Badge'),level:60}
  ]},
  { id: 'rs',  name: 'Rubin / Saphir', gen: 3, gyms: [
    {name:'Metarost City',badge:B('Stone Badge'),level:14},{name:'Fätzstadt',badge:B('Knuckle Badge'),level:19},{name:'Malvenfroh City',badge:B('Dynamo Badge'),level:24},{name:'Bad Lavastadt',badge:B('Heat Badge'),level:29},
    {name:'Blütenburg City',badge:B('Balance Badge'),level:32},{name:'Baumhausen City',badge:B('Feather Badge'),level:36},{name:'Moosbach City',badge:B('Mind Badge'),level:42},{name:'Xeneroville',badge:B('Rain Badge'),level:46},
    {name:'Top4 - Ulrich',badge:null,level:48},{name:'Top4 - Antonia',badge:null,level:51},{name:'Top4 - Frosina',badge:null,level:53},{name:'Top4 - Dragan',badge:null,level:55},{name:'Champion Troy Trumm',badge:null,level:58}
  ]},
  { id: 'dp',  name: 'Diamant / Perle', gen: 4, gyms: [
    {name:'Erzelingen',badge:B('Coal Badge'),level:14},{name:'Ewigenau',badge:B('Forest Badge'),level:22},{name:'Schleiede',badge:B('Cobble Badge'),level:28},{name:'Weideburg',badge:B('Fen Badge'),level:34},
    {name:'Herzhofen',badge:B('Relic Badge'),level:36},{name:'Fleetburg',badge:B('Mine Badge'),level:41},{name:'Blizzach',badge:B('Icicle Badge'),level:44},{name:'Sonnewik',badge:B('Beacon Badge'),level:47},
    {name:'Top4 - Herbaro',badge:null,level:53},{name:'Top4 - Teresa',badge:null,level:55},{name:'Top4 - Ignaz',badge:null,level:57},{name:'Top4 - Lucian',badge:null,level:59},{name:'Champion Cynthia',badge:null,level:62}
  ]},
  { id: 'bw',  name: 'Schwarz / Weiß',  gen: 5, gyms: [
    {name:'Orion City',badge:B('Trio Badge'),level:15},{name:'Septerna City',badge:B('Basic Badge'),level:18},{name:'Stratos City',badge:B('Insect Badge'),level:21},{name:'Rayono City',badge:B('Bolt Badge'),level:25},
    {name:'Marea City',badge:B('Quake Badge'),level:29},{name:'Panaero City',badge:B('Jet Badge'),level:33},{name:'Nevaio City',badge:B('Freeze Badge'),level:37},{name:'Twindrake City',badge:B('Legend Badge'),level:41},
    {name:'Top4 - Anissa',badge:null,level:48},{name:'Top4 - Eugen',badge:null,level:48},{name:'Top4 - Astor',badge:null,level:48},{name:'Top4 - Kattlea',badge:null,level:48},{name:'Champion N / Lauro',badge:null,level:52}
  ]},
  { id: 'xy',  name: 'X / Y',           gen: 6, gyms: [
    {name:'Nouvaria City',badge:B('Bug Badge'),level:14},{name:'Relievera City',badge:B('Cliff Badge'),level:25},{name:'Yantara City',badge:B('Rumble Badge'),level:29},{name:'Tempera City',badge:B('Plant Badge'),level:31},
    {name:'Illumina City',badge:B('Voltage Badge'),level:35},{name:'Romantia City',badge:B('Fairy Badge'),level:40},{name:'Fluxia City',badge:B('Psychic Badge'),level:42},{name:'Fractalia City',badge:B('Iceberg Badge'),level:46},
    {name:'Top4 - Pachira',badge:null,level:50},{name:'Top4 - Narcisse',badge:null,level:52},{name:'Top4 - Thymelot',badge:null,level:52},{name:'Top4 - Dracena',badge:null,level:53},{name:'Champion Diantha',badge:null,level:55}
  ]},
  { id: 'sm',  name: 'Sonne / Mond',    gen: 7, gyms: [
    {name:'Mele-Mele: Elima-Prüfung',badge:B('Bag Normalium Z Sprite'),level:12},{name:'Akala: Tracy-Prüfung',badge:B('Bag Waterium Z Sprite'),level:22},{name:'Akala: Kiawe-Prüfung',badge:B('Bag Firium Z Sprite'),level:26},{name:'Akala: Maho-Prüfung',badge:B('Bag Grassium Z Sprite'),level:29},
    {name:'Ula-Ula: Chrys-Prüfung',badge:B('Bag Electrium Z Sprite'),level:33},{name:'Ula-Ula: Lola-Prüfung',badge:B('Bag Ghostium Z Sprite'),level:37},{name:'Poni: Matsurika-Prüfung',badge:B('Bag Fairium Z Sprite'),level:49},
    {name:'Kahuna Hala (Mele-Mele)',badge:null,level:19},{name:'Kahuna Mayla (Akala)',badge:null,level:31},{name:'Kahuna Yasu (Ula-Ula)',badge:null,level:41},{name:'Kahuna Hapu\'u (Poni)',badge:null,level:53},
    {name:'Top4 Hala',badge:null,level:54},{name:'Top4 Mayla',badge:null,level:55},{name:'Top4 Lola',badge:null,level:55},{name:'Top4 Kahili',badge:null,level:56},{name:'Champion (Kukui)',badge:null,level:58}
  ]},
  { id: 'swsh', name: 'Schwert / Schild', gen: 8, gyms: [
    {name:'Turffield',badge:B('Grass Badge'),level:19},{name:'Keelton',badge:B('Water Badge'),level:24},{name:'Engine City',badge:B('Fire Badge'),level:25},{name:'Passbeck (Kampf)',badge:B('Fighting Badge'),level:34},
    {name:'Passbeck (Geist)',badge:B('Ghost Badge'),level:34},{name:'Fairballey',badge:B('GalarFairy Badge'),level:36},{name:'Circhester (Gestein)',badge:B('Rock Badge'),level:40},{name:'Circhester (Eis)',badge:B('Ice Badge'),level:40},
    {name:'Spikeford',badge:B('Dark Badge'),level:44},{name:'Claw City',badge:B('Dragon Badge'),level:48},
    {name:'Top4 - Bede',badge:null,level:52},{name:'Top4 - Marnie',badge:null,level:52},{name:'Top4 - Nessa',badge:null,level:52},{name:'Top4 - Bea/Allister',badge:null,level:52},{name:'Champion Delion',badge:null,level:62}
  ]},
  { id: 'sv',  name: 'Karmesin / Purpur', gen: 9, gyms: [
    {name:'Moldrid',badge:B('SVbadge VictoryRoad Bug'),level:14},{name:'Bolardin',badge:B('SVbadge VictoryRoad Grass'),level:17},{name:'Fermanca City',badge:B('SVbadge VictoryRoad Electric'),level:23},{name:'Garrafosa City',badge:B('SVbadge VictoryRoad Water'),level:29},
    {name:'Mesclarra',badge:B('SVbadge VictoryRoad Normal'),level:35},{name:'Frigomonta',badge:B('SVbadge VictoryRoad Ghost'),level:41},{name:'Asarilla',badge:B('SVbadge VictoryRoad Psychic'),level:44},{name:'Montanata',badge:B('SVbadge VictoryRoad Ice'),level:48},
    {name:'Top4 - Cay',badge:null,level:57},{name:'Top4 - Poppy',badge:null,level:58},{name:'Top4 - Aoki',badge:null,level:59},{name:'Top4 - Sinius',badge:null,level:60},{name:'Champion Sagaria',badge:null,level:62}
  ]},
];
