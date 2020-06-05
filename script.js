// 1
const amzius = 23;
const vardas = 'Miglė';
const hobis = 'skaityti';

console.log(`Mano vardas ${vardas}, man ${amzius}. Mano hobis yra ${hobis}.`);

//2
const gimimoMetai = 1996;
const metai = 2025;
const amzius1 = metai - gimimoMetai;
const amzius2 = metai - gimimoMetai - 1;

console.log(`${metai} metais man bus ${amzius1} arba ${amzius2} metai/metų.`);

//3
const skersmuo = 14;
const spindulys = skersmuo / 2;
const plotas = Math.PI * Math.pow(spindulys, 2);
const perimetras = 2 * Math.PI * spindulys;

console.log(`Apskritimo, kurio skersmuo yra ${skersmuo}, plotas yra ${plotas}.`);

//4
const tempC = 23;
const tempF = (tempC * 9 / 5) + 32;

console.log(`${tempC} °C yra ${tempF} °F.`);

//5
const sakinys = 'Mes kalbame mažai, jeigu nekalbame apie save.';
const ilgis = sakinys.length;
console.log(ilgis);
console.log(sakinys.toUpperCase());
console.log(sakinys.substr(0, 34) + sakinys.substr(44));
const zodziai = sakinys.split(' ');
console.log(zodziai);
console.log(sakinys.search('mažai'));
console.log(sakinys.replace('kalbame', 'šnekame'));

//6
const skaiciai = [1, 5, 255, 42, 57, 334, 12, 4775, 44, 79];
console.log(skaiciai);
console.log(skaiciai.pop());
console.log(skaiciai.shift());
skaiciai[4] = 'balzamas';
console.log(skaiciai);
const darSkaiciu = [5, 7, 3, 89, 65];
console.log(darSkaiciu);
const naujas = skaiciai.concat(darSkaiciu);
console.log(naujas);
const str = naujas.join(', ');
console.log(str);

//7
const mokinys = [
    {
        vardas: 'Martynas',
        pavarde: 'Lubys',
        amzius: 17,
        pazymiuVidurkis: 4.5,
        stipendija: false
    },
    {
        vardas: 'Alina',
        pavarde: 'Alijeva',
        amzius: 16,
        pazymiuVidurkis: 9,
        stipendija: true  
    },
    {
        vardas: 'Kazimieras',
        pavarde: 'Bakštys',
        amzius: 17,
        pazymiuVidurkis: 9.3,
        stipendija: true
    },
    {
        vardas: 'Algimantas',
        pavarde: 'Peraitis',
        amzius: 16,
        pazymiuVidurkis: 6.5,
        stipendija: false
    },
    {
        vardas: 'Kotryna',
        pavarde: 'Petraitytė',
        amzius: 16,
        pazymiuVidurkis: 4,
        stipendija: false
    }
];
console.log(mokinys);

//8
console.log(mokinys[1].amzius);
console.log(mokinys[3].pazymiuVidurkis);
console.log(mokinys[0]);