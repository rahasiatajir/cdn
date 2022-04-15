var x = [401,824,144,355,901,528,449,722,991,541,148,996,723,995,606,663,519,921,479,739,150,382,384,150,653,376,155,134,372,812,224,677,87,194,382,120,222,188,125,8,349,72,366,518,59,628,561,855,686,92,522,56,341,281,141,13,515,278,233,689,133,77,303,396,758,385,271,851,180,958,858,556,243,710,222,1000,252,944,370,320,454,724,537,931,455,147,504,550,233,807,541,926,375,763,524,589,300,312,409,348,822,541,443,966,394,723,475,784,970,684,222,782,885,652,705,690,898,710,152,285,130,183,792,387,88,24,552,334,45,411,271,742,932,368,830,130,126,515,537,405,249,173,761,549,863,548,48,437,458,999,691,762,476,539,760,809,197,353,297,674,881,726,281,831,846,183,913,674,287,198,28,968,156,367,819,260,426,472,262,310,884,848,249,453,364,224,947,389,903,669,424,142,140,147,623,827,837,729,478,715,442,588,757,930,35,243,573,550,546,779,653,971,814,396,623,337,113,463,107,129,217,988,733,197,743,193,395,107,995,328,777,775,967,336,753,616,19,667,895,53,121,199,517,613,338,440,326,51,491,122,815,332,31,330,997,39,378,854,50,635,280,759,118,971,670,903,672,169,760,103,955,161,188,268,116,293,183,872,716,483,664,766,847,270,813,780,48,163,604,263,294,727,120,951,793,686,413,166,159,452,391,625,834,442,437,910,819,182,266,826,487,211,766,348,543];
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