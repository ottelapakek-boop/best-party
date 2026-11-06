// 71 kaarti: sinu 46 algset ja 25 valitud lisakaarti. Muuda tekste ja pilditeid siin; hoia id-d unikaalsed.
const cards = [
  {
    "id": 101,
    "title": "Kolm korda",
    "description": "Joo 3 korda.",
    "type": "individual",
    "image": "assets/cards/color-1.svg"
  },
  {
    "id": 102,
    "title": "Kõik koos",
    "description": "Kõik joovad.",
    "type": "everyone",
    "image": "assets/cards/color-2.svg"
  },
  {
    "id": 103,
    "title": "Sinu nimi",
    "description": "Joo iga tähe eest oma nimes.",
    "type": "individual",
    "image": "assets/cards/color-3.svg"
  },
  {
    "id": 104,
    "title": "Käed eemale",
    "description": "Joo ilma käteta.",
    "type": "individual",
    "image": "assets/cards/color-4.svg"
  },
  {
    "id": 105,
    "title": "Käesurumine",
    "description": "Suru kätt iga inimesega. Kaotaja joob.",
    "type": "minigame",
    "image": "assets/cards/color-5.svg"
  },
  {
    "id": 106,
    "title": "Öökull",
    "description": "Inimene, kes läks eile kõige hiljem magama, joob.",
    "type": "everyone",
    "image": "assets/cards/color-6.svg"
  },
  {
    "id": 107,
    "title": "Huulepulk",
    "description": "Kõik, kellel on huulepulk suul, joovad.",
    "type": "everyone",
    "image": "assets/cards/color-1.svg"
  },
  {
    "id": 108,
    "title": "Ühel jalal",
    "description": "Kõik seisavad ühel jalal. Esimene, kes tasakaalu kaotab, joob.",
    "type": "minigame",
    "image": "assets/cards/color-2.svg"
  },
  {
    "id": 109,
    "title": "Naljanina",
    "description": "Inimene sinust paremal ütleb nalja. Rahvas otsustab, kas ta joob või ei.",
    "type": "minigame",
    "image": "assets/cards/color-3.svg"
  },
  {
    "id": 110,
    "title": "Mehed",
    "description": "Mehed joovad.",
    "type": "everyone",
    "image": "assets/cards/color-4.svg"
  },
  {
    "id": 111,
    "title": "Naised",
    "description": "Naised joovad.",
    "type": "everyone",
    "image": "assets/cards/color-5.svg"
  },
  {
    "id": 112,
    "title": "Pikad juuksed",
    "description": "Kõige pikemate juustega inimene joob.",
    "type": "everyone",
    "image": "assets/cards/color-6.svg"
  },
  {
    "id": 113,
    "title": "Vaikusevoor",
    "description": "Ole üks voor vait või joo.",
    "type": "rule",
    "image": "assets/cards/color-1.svg"
  },
  {
    "id": 114,
    "title": "Komplimendiring",
    "description": "Minge ringis ja öelge järgmisele inimesele kompliment.",
    "type": "everyone",
    "image": "assets/cards/color-2.svg"
  },
  {
    "id": 115,
    "title": "Sirge naeratus",
    "description": "Kõige sirgemate hammastega inimene joob.",
    "type": "everyone",
    "image": "assets/cards/color-3.svg"
  },
  {
    "id": 116,
    "title": "Lõhnatest",
    "description": "Nuusuta kõiki inimesi. Kõige parema lõhnaga inimene joob.",
    "type": "individual",
    "image": "assets/cards/color-4.svg"
  },
  {
    "id": 117,
    "title": "Valuutaring",
    "description": "Nimetage päripäeva eri valuutasid. Esimene, kes ei tea, joob.",
    "type": "minigame",
    "image": "assets/cards/color-5.svg"
  },
  {
    "id": 118,
    "title": "Ammu pole võtnud",
    "description": "Inimene, kes jõi kõige kauem aega tagasi, joob.",
    "type": "everyone",
    "image": "assets/cards/color-6.svg"
  },
  {
    "id": 119,
    "title": "Otsaesimusi",
    "description": "Tee lähedal olevale inimesele otsaette musi.",
    "type": "individual",
    "image": "assets/cards/color-1.svg"
  },
  {
    "id": 120,
    "title": "Lihtsalt joo",
    "description": "Lihtsalt joo.",
    "type": "individual",
    "image": "assets/cards/color-2.svg"
  },
  {
    "id": 121,
    "title": "Kolm omadust",
    "description": "Ütle kolm omadussõna sinust paremal oleva inimese kohta.",
    "type": "individual",
    "image": "assets/cards/color-3.svg"
  },
  {
    "id": 122,
    "title": "Pudel otsustab",
    "description": "Keeruta pudelit. Võitja joob.",
    "type": "minigame",
    "image": "assets/cards/color-4.svg"
  },
  {
    "id": 123,
    "title": "Põrand!",
    "description": "Kõik puudutavad põrandat. Viimane joob.",
    "type": "minigame",
    "image": "assets/cards/color-5.svg"
  },
  {
    "id": 124,
    "title": "Enamus joob",
    "description": "Kui naisi on rohkem, joovad naised. Kui mehi on rohkem, joovad mehed.",
    "type": "everyone",
    "image": "assets/cards/color-6.svg"
  },
  {
    "id": 125,
    "title": "Pitsa või burger",
    "description": "Kõik valivad: pitsa või burger. Väiksem grupp joob.",
    "type": "everyone",
    "image": "assets/cards/color-1.svg"
  },
  {
    "id": 126,
    "title": "Loll nägu",
    "description": "Kõik teevad oma kõige lollima näo. Kõige vähem veidra näoga inimene joob.",
    "type": "everyone",
    "image": "assets/cards/color-2.svg"
  },
  {
    "id": 127,
    "title": "Põhjani",
    "description": "Kõik joovad oma joogi lõpuni.",
    "type": "everyone",
    "image": "assets/cards/color-3.svg"
  },
  {
    "id": 128,
    "title": "Topeltvoor",
    "description": "Järgmisel voorul joovad kõik topelt.",
    "type": "rule",
    "image": "assets/cards/color-4.svg"
  },
  {
    "id": 129,
    "title": "Pilgupüüdja",
    "description": "Esimene, kes sinuga silmkontakti loob, joob.",
    "type": "minigame",
    "image": "assets/cards/color-5.svg"
  },
  {
    "id": 130,
    "title": "Poosiring",
    "description": "Öelge ringis seksipoose. Kes ei tea, joob.",
    "type": "minigame",
    "image": "assets/cards/color-6.svg"
  },
  {
    "id": 131,
    "title": "Kallistus",
    "description": "Kallista ühte mängijat.",
    "type": "individual",
    "image": "assets/cards/color-1.svg"
  },
  {
    "id": 132,
    "title": "Varvasteni",
    "description": "Puuduta oma varbaid sirgete jalgadega või joo.",
    "type": "individual",
    "image": "assets/cards/color-2.svg"
  },
  {
    "id": 133,
    "title": "Jääd vahele",
    "description": "Oled jobi. Jääd vahele.",
    "type": "individual",
    "image": "assets/cards/color-3.svg"
  },
  {
    "id": 134,
    "title": "Pealinnaring",
    "description": "Nimetage päripäeva pealinnu. Esimene, kes ei tea, joob.",
    "type": "minigame",
    "image": "assets/cards/color-4.svg"
  },
  {
    "id": 135,
    "title": "Silmapilgutus",
    "description": "Pilguta enda vastas olevale inimesele seksikalt silma. Kui kumbki naerab, joote mõlemad.",
    "type": "minigame",
    "image": "assets/cards/color-5.svg"
  },
  {
    "id": 136,
    "title": "Ilus keel",
    "description": "Kes esimesena ropendab, joob.",
    "type": "rule",
    "image": "assets/cards/color-6.svg"
  },
  {
    "id": 137,
    "title": "Parim sõber",
    "description": "Kui su parim sõber mängib praegu kaasa, jood.",
    "type": "individual",
    "image": "assets/cards/color-1.svg"
  },
  {
    "id": 138,
    "title": "Parim naeratus",
    "description": "Vali kõige ilusama naeratusega inimene. Tema joob.",
    "type": "individual",
    "image": "assets/cards/color-2.svg"
  },
  {
    "id": 139,
    "title": "Ilusad silmad",
    "description": "Kõige ilusamate silmadega inimene joob.",
    "type": "everyone",
    "image": "assets/cards/color-3.svg"
  },
  {
    "id": 140,
    "title": "Põrandakoht",
    "description": "Kõige lühem inimene istub ühe vooru põrandal.",
    "type": "rule",
    "image": "assets/cards/color-4.svg"
  },
  {
    "id": 141,
    "title": "Valitud kolmik",
    "description": "Vali kolm inimest, kes joovad.",
    "type": "individual",
    "image": "assets/cards/color-5.svg"
  },
  {
    "id": 142,
    "title": "Pilgud üles",
    "description": "Kõik vaatavad maha. Kolme peal vaatavad kõik üles. Kellega esimesena pilgud kohtuvad, temaga jood.",
    "type": "minigame",
    "image": "assets/cards/color-6.svg"
  },
  {
    "id": 143,
    "title": "Sein!",
    "description": "Puuduta seina. Esimene joob.",
    "type": "minigame",
    "image": "assets/cards/color-1.svg"
  },
  {
    "id": 144,
    "title": "Vasak käsi",
    "description": "Kasuta ühe vooru jooksul ainult vasakut kätt.",
    "type": "rule",
    "image": "assets/cards/color-2.svg"
  },
  {
    "id": 145,
    "title": "Lemmikvärv",
    "description": "Kolme peal ütleb igaüks oma lemmikvärvi. Sama värvi öelnud joovad edasi.",
    "type": "everyone",
    "image": "assets/cards/color-3.svg"
  },
  {
    "id": 146,
    "title": "Koos on parem",
    "description": "Vali, kellega koos jood.",
    "type": "individual",
    "image": "assets/cards/color-4.svg"
  },
  {
    "id": 147,
    "title": "Täishäälik",
    "description": "Kõik, kelle nimi algab täishäälikuga, joovad.",
    "type": "everyone",
    "image": "assets/cards/color-5.svg"
  },
  {
    "id": 148,
    "title": "Mustad sokid",
    "description": "Kõik, kellel on mustad sokid, joovad.",
    "type": "everyone",
    "image": "assets/cards/color-6.svg"
  },
  {
    "id": 149,
    "title": "Viimane saabuja",
    "description": "Kõige viimasena kohale jõudnud inimene joob.",
    "type": "individual",
    "image": "assets/cards/color-1.svg"
  },
  {
    "id": 150,
    "title": "Aku tühi",
    "description": "Kõik, kelle telefonil on alla 20% akut, joovad.",
    "type": "everyone",
    "image": "assets/cards/color-2.svg"
  },
  {
    "id": 151,
    "title": "Katkine ekraan",
    "description": "Kõik, kelle telefoniekraan on katki, joovad.",
    "type": "everyone",
    "image": "assets/cards/color-3.svg"
  },
  {
    "id": 152,
    "title": "Prillid",
    "description": "Kõik, kellel on prillid ees, joovad.",
    "type": "everyone",
    "image": "assets/cards/color-4.svg"
  },
  {
    "id": 153,
    "title": "Käekell",
    "description": "Kõik, kellel on käekell, joovad.",
    "type": "everyone",
    "image": "assets/cards/color-5.svg"
  },
  {
    "id": 154,
    "title": "Tätoveering",
    "description": "Kõik, kellel on nähtav tätoveering, joovad.",
    "type": "everyone",
    "image": "assets/cards/color-6.svg"
  },
  {
    "id": 155,
    "title": "Hilinemine",
    "description": "Kõik, kes täna hilinesid, joovad.",
    "type": "everyone",
    "image": "assets/cards/color-1.svg"
  },
  {
    "id": 156,
    "title": "Toidukuller",
    "description": "Kõik, kes täna süüa tellisid, joovad.",
    "type": "everyone",
    "image": "assets/cards/color-2.svg"
  },
  {
    "id": 157,
    "title": "Järgmine sünnipäev",
    "description": "Inimene, kelle sünnipäev on järgmisena, valib kellegi, kes joob.",
    "type": "individual",
    "image": "assets/cards/color-3.svg"
  },
  {
    "id": 158,
    "title": "Sama värv",
    "description": "Kõik, kellel on sinuga sama värvi riideese, joovad.",
    "type": "everyone",
    "image": "assets/cards/color-4.svg"
  },
  {
    "id": 159,
    "title": "Automargid",
    "description": "Nimetage ringis automarke. Esimene, kes kordab või ei tea, joob.",
    "type": "minigame",
    "image": "assets/cards/color-5.svg"
  },
  {
    "id": 160,
    "title": "Eesti linnad",
    "description": "Nimetage ringis Eesti linnu. Esimene, kes kordab või ei tea, joob.",
    "type": "minigame",
    "image": "assets/cards/color-6.svg"
  },
  {
    "id": 161,
    "title": "Halvad vabandused",
    "description": "Nimetage ringis halbu vabandusi loengust puudumiseks. Kes mõtlema jääb, joob.",
    "type": "minigame",
    "image": "assets/cards/color-1.svg"
  },
  {
    "id": 162,
    "title": "Riimiring",
    "description": "Nimetage ringis sõnu, mis riimuvad sõnaga „maja”. Esimene, kes hätta jääb, joob.",
    "type": "minigame",
    "image": "assets/cards/color-2.svg"
  },
  {
    "id": 163,
    "title": "Kivi-paber-käärid",
    "description": "Sina ja sinust vasakul istuja mängite kivi-paber-kääre. Kaotaja joob.",
    "type": "minigame",
    "image": "assets/cards/color-3.svg"
  },
  {
    "id": 164,
    "title": "Ümise laulu",
    "description": "Ümise ühte laulu. Kui keegi kümne sekundiga ära ei arva, jood.",
    "type": "minigame",
    "image": "assets/cards/color-4.svg"
  },
  {
    "id": 165,
    "title": "Otsinguajalugu",
    "description": "Kõik osutavad inimesele, kellel oleks kõige veidram otsinguajalugu. Enim hääli saanu joob.",
    "type": "everyone",
    "image": "assets/cards/color-5.svg"
  },
  {
    "id": 166,
    "title": "Telefonita",
    "description": "Kõik osutavad inimesele, kes suudaks kõige kauem ilma telefonita olla. Enim hääli saanu valib kellegi, kes joob.",
    "type": "everyone",
    "image": "assets/cards/color-6.svg"
  },
  {
    "id": 167,
    "title": "Uudisteankur",
    "description": "Räägi järgmise kaardini nagu uudisteankur. Kui unustad, jood.",
    "type": "rule",
    "image": "assets/cards/color-1.svg"
  },
  {
    "id": 168,
    "title": "Keelatud sõna",
    "description": "Mõtle välja üks sõna. Kes seda järgmise kolme kaardi jooksul ütleb, joob.",
    "type": "rule",
    "image": "assets/cards/color-2.svg"
  },
  {
    "id": 169,
    "title": "Flirdi esemega",
    "description": "Ütle laual olevale esemele oma kõige halvem flirtimislause.",
    "type": "individual",
    "image": "assets/cards/color-3.svg"
  },
  {
    "id": 170,
    "title": "Hilinenud flirt",
    "description": "Kõik, kes on kunagi flirtimisest alles hiljem aru saanud, joovad.",
    "type": "everyone",
    "image": "assets/cards/color-4.svg"
  },
  {
    "id": 171,
    "title": "Kohe kohal",
    "description": "Kõik, kes on öelnud „olen kohe kohal”, kuigi olid veel kodus, joovad.",
    "type": "everyone",
    "image": "assets/cards/color-5.svg"
  }
];

const labels = {everyone:'KÕIK KOOS',individual:'SINU KORD',rule:'UUS REEGEL',minigame:'MINIMÄNG'};
const $ = id => document.getElementById(id);
let excluded = new Set();
try { excluded = new Set(JSON.parse(localStorage.getItem('best-excluded-user-deck-v2') || '[]')); } catch {}
let deck = [], drawn = 0, round = 1, lastId = null, busy = false;
function eligible(){ return cards.filter(c => !excluded.has(c.id)); }
function shuffle(items, previousId){
  const result = [...items];
  for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
  if(result.length>1 && result[0].id===previousId){[result[0],result[1]]=[result[1],result[0]];}
  return result;
}
function update(){
  $('count').textContent = `${drawn} / ${deck.length}`;
  $('round').textContent = `RING ${String(round).padStart(2,'0')}`;
  $('progress').style.width = `${deck.length ? drawn/deck.length*100 : 0}%`;
  $('next').disabled = busy || !deck.length;
}
function reset(){
  deck=shuffle(eligible(),lastId);drawn=0;round=1;
  $('title').textContent=deck.length ? 'Võta esimene kaart.' : 'Pakk on tühi.';
  $('description').textContent=deck.length ? 'Kutsu sõbrad kokku ja lase juhusel õhtut juhtida.' : 'Luba nimekirjas mõni kaart.';
  $('cardImage').src='assets/cards/color-1.svg';$('category').textContent='ÕHTU VÕIB ALATA';$('cardNumber').textContent='BEST ÕHTU';$('status').textContent='';update();
}
const pause = ms => new Promise(resolve=>setTimeout(resolve,ms));
async function next(){
  if(busy || !deck.length || $('library').open)return;
  busy=true;update();
  const delay=matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 350;
  $('card').classList.add('flipped');await pause(delay);
  if(drawn===deck.length){round++;deck=shuffle(eligible(),lastId);drawn=0;$('status').textContent='Uus ring — pakk on uuesti segatud.';}else{$('status').textContent='';}
  const item=deck[drawn++];lastId=item.id;
  $('title').textContent=item.title;$('description').textContent=item.description;
  $('category').textContent=labels[item.type];
  $('cardNumber').textContent=`KAART ${String(cards.indexOf(item)+1).padStart(2,'0')}`;
  $('cardImage').src=item.image;await pause(delay ? 180 : 0);
  $('card').classList.remove('flipped');await pause(delay);
  busy=false;update();
}
$('cardImage').addEventListener('error',()=>{$('cardImage').removeAttribute('src');});
$('next').addEventListener('click',next);
document.addEventListener('keydown',e=>{if(e.code==='Space'&&!e.repeat&&!$('library').open&&!/INPUT|BUTTON|A|TEXTAREA|SELECT/.test(e.target.tagName)){e.preventDefault();next();}});
function buildList(){
  $('cardList').replaceChildren();
  cards.forEach(c=>{
    const label=document.createElement('label');label.className='list-card';
    const input=document.createElement('input');input.type='checkbox';input.checked=!excluded.has(c.id);input.setAttribute('aria-label',`Luba kaart: ${c.title}`);
    input.addEventListener('change',()=>{if(input.checked)excluded.delete(c.id);else excluded.add(c.id);try{localStorage.setItem('best-excluded-user-deck-v2',JSON.stringify([...excluded]));}catch{}reset();});
    const body=document.createElement('div');const title=document.createElement('strong');title.textContent=`${cards.indexOf(c)+1}. ${c.title}`;
    const p=document.createElement('p');p.textContent=c.description;const small=document.createElement('small');small.textContent=labels[c.type];
    body.append(title,p,small);label.append(input,body);$('cardList').append(label);
  });
}
$('libraryButton').addEventListener('click',()=>{if(!busy){buildList();$('library').showModal();}});
$('closeLibrary').addEventListener('click',()=>$('library').close());
$('print').addEventListener('click',()=>window.print());
$('export').addEventListener('click',()=>{
  const text=cards.map(c=>`${excluded.has(c.id)?'[VÄLJAS]':'[SEES]'} ${cards.indexOf(c)+1}. ${c.title}\n${c.description}`).join('\n\n');
  const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='BEST-ohtu-koik-kusimused.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
reset();
