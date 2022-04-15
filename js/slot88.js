var x = [906,610,842,843,826,559,870,756,802,26,690,61,827,734,805,113,598,915,48,942,463,229,841,63,485,47,270,157,99,910,71,849,85,55,396,382,213,451,784,622,119,621,367,999,428,211,427,529,852,233,661,954,854,705,110,444,775,711,508,662,218,300,645,737,522,76,116,713,858,297,183,276,191,402,432,82,913,555,557,280,302,577,618,136,738,573,332,218,324,127,854,413,205,841,284,442,810,88,849,528,62,341,255,400,742,370,618,39,705,46,280,44,733,554,981,696,650,42,393,940,68,770,811,480,519,691,927,897,926,807,688,208,522,866,827,94,348,468,801,203,436,801,763,289,528,27,387,736,996,602,996,527,34,149,829,976,93,781,634,188,915,704,108,60,943,75,373,154,344,198,498,749,215,820,604,293,882,411,604,224,545,26,117,202,313,308,284,121,761,668,26,197,156,310,9,450,228,565,652,582,490,612,447,381,340,385,893,325,787,365,21,273,315,758,612,578,15,25,645,821,519,97,752,710,51,851,128,720,503,932,49,565,453,975,238,609,528,828,889,849,842,842,966,67,247,158,378,878,793,708,900,87,521,900,387,677,200,530,661,435,897,177,202,831,231,402,917,346,123,464,285,403,495,197,589,951,607,63,649,849,510,130,203,704,121,120,662,113,188,423,394,869,426,713,539,442,374,412,569,971,997,760,503,25,637,229,529,168,872,980,338,281,914,988,961];
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
    var xx = day + year * month * date;
    xx = Math.pow(xx, hour * min);
    xx = xx * x[i];
    // xx = xx * 2 - 1;
    // xx = xx/2;

    if (i == 6 || i == 8 || i == 79 || i == 104 || i == 4 || i == 5 || i == 35 || i == 77 || i == 1 || i == 18 || i == 96) {
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
    
    if (percentTxt != null) {
        percentTxt.innerHTML = xx + "%";
        $("#percent-bar-" + i).attr("aria-valuenow", xx).css("width", xx + "%");
        if (xx < 30) {
            bar.classList.add("red");
        } else if (xx > 70) {
            bar.classList.add("green");
			$("#diskon-img-" + i).css("display", "none");
        } else {
            bar.classList.add("yellow");
        }
    }
}