var x = [213,503,844,697,951,738,821,670,599,710,485,552,86,51,679,793,739,918,687,577,123,217,300,248,29,220,412,195,606,627,213,810,171,975,123,650,865,511,880,436,321,498,884,67,665,596,457,333,272,370,986,767,236,527,39,239,237,133,808,39,513,482,403,234,708,858,694,737,337,181,335,770,582,865,798,61,393,222,330,124,830,604,520,32,365,590,932,681,325,379,883,826,405,492,82,432,608,368,112,143,630,901,412,688,415,437,238,642,907,690,628,695,581,103,348,637,923,79,904,701,909,620,411,810,558,295,187,226,944,190,472,11,782,672,741,938,761,126,51,825,28,255,454,904,89,392,836,269,638,285,278,333,873,776,873,419,832,337,208,217,553,114,668,268,272,987,173,644,484,348,189,678,903,503,269,778,995,748,809,369,100,873,190,180,714,980,204,343,43,335,902,557,529,878,751,596,81,701,903,271,761,223,231,660,361,927,697,572,327,47,345,995,754,246,320,22,127,700,992,900,892,584,49,489,974,311,392,641,894,611,187,472,998,991,303,157,480,576,288,221,699,806,240,922,606,349,430,680,776,494,92,918,136,545,517,546,796,497,153,123,491,171,695,452,977,519,930,734,250,16,59,32,163,672,789,703,507,494,961,146,615,793,336,588,614,138,148,388,663,558,732,336,77,589,836,392,288,34,715,934,815,279,968,887,789,195,18,259,262,693,338,427,167,119,321,552,32,469,199,667];
for (let i = 1; i <= 315; i++) {
    const d = new Date();
    var date = d.getUTCDate();
    var day = d.getUTCDay() + 1;
    var year = d.getUTCFullYear();
    var month = d.getUTCMonth() + 1;
    var hour = d.getUTCHours();
    var min = d.getMinutes();
    if (min < 30) {
        min = 1;
    } else {
        min = 2;
    }
    var xx = day * year * month * date;
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];
    // xx = xx * 2 - 1;
    // xx = xx/2;

    if (i == 33 || i == 36 || i == 63 || i == 40 || i == 20 || i == 94 || i == 4 || i == 273 || i == 144 || i == 258 || i == 229 || i == 144 || i == 165 || i == 234 || i == 62) {
        xx = xx % 27;
        xx += 65;
    } else {
        xx = xx % 83;
        xx += 8;
    }
    const as = "percent-bar-" + i;
    const asd = "percent-txt-" + i;
    var percentTxt = document.getElementById("percent-txt-" + i);
    var bar = document.getElementById("percent-bar-" + i);
    const bartext = document.getElementById("card-title" + i);
    percentTxt.innerHTML = xx + "%";
    $("#percent-bar-" + i)
        .attr("aria-valuenow", xx)
        .css("width", xx + "%");
    if (xx < 30) {
        bar.classList.add("red");
    } else if (xx > 70) {
        bar.classList.add("green");
    } else {
        bar.classList.add("yellow");
    }
}