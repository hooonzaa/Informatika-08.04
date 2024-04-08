function spocitejPrumer() {
    const cisla = document.getElementById("cisla1").value.split(',').map(Number);
    const prumer = cisla.reduce((acc, curr) => acc + curr, 0) / cisla.length;
    document.getElementById("vysledek1").value = prumer.toFixed(2);
    document.getElementById(vysledek1).innerHTML = prumer
}

function zjistiNejvyssiANejnizsi() {
    const cisla = document.getElementById("cisla2").value.split(',').map(Number);
    const nejvyssi = Math.max(...cisla);
    const nejnizsi = Math.min(...cisla);
    document.getElementById("vysledek2").value = `Nejvyšší: ${nejvyssi}, Nejnižší: ${nejnizsi}`;
}

function zmenPismena() {
    let retezec = document.getElementById("retezec").value;
    document.getElementById("vysledek3Velka").value = retezec.toUpperCase();
    document.getElementById("vysledek3Mala").value = retezec.toLowerCase();
}

function spojPole() {
    const pole1 = [1, 2, 3];
    const pole2 = [4, 5, 6];
    const spojenePole = pole1.concat(pole2);
    document.getElementById("vysledek4").value = spojenePole.toString();
}

function vytvorObjekt() {
    const zvirata = {
        pes: 2,
        kočka: 3,
        králík: 5
    };
    document.getElementById("vysledek5").value = JSON.stringify(zvirata);
}

function kontrolaPrvku() {
    const mojeMnozina = new Set([1, 2, 3, 4, 5]);
    const prvek = parseInt(document.getElementById("prvek").value);
    if (mojeMnozina.has(prvek)) {
        document.getElementById("vysledek6").value = `Prvek ${prvek} existuje v množině.`;
    } else {
        document.getElementById("vysledek6").value = `Prvek ${prvek} neexistuje v množině.`;
    }
}
function michallog(){
    window.location.href = "michal.html"
}
