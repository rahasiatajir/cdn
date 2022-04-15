var x = [731,158,700,876,762,907,963,848,131,651,879,175,358,296,966,972,150,914,93,458,542,404,535,129,372,963,214,63,264,917,189,139,546,250,931,274,418,607,959,78,342,32,493,291,725,382,656,504,947,778,892,689,655,665,789,306,600,195,814,37,272,911,634,656,705,352,111,816,567,498,347,525,268,587,205,18,670,140,366,266,78,650,946,92,178,558,529,626,586,33,426,337,966,705,693,826,653,711,971,700,440,82,373,311,466,299,586,969,464,465,462,138,102,698,548,391,308,855,125,840,964,509,335,409,691,870,62,367,525,276,487,537,809,798,466,750,52,51,401,961,598,532,136,927,211,400,70,168,604,842,713,37,384,216,604,727,935,579,813,422,432,265,294,474,484,344,189,45,303,101,15,459,381,813,139,67,174,654,368,809,42,831,161,423,155,29,319,726,138,130,193,423,267,376,811,859,751,118,909,431,693,45,513,497,186,894,266,816,33,944,672,83,271,475,650,939,706,904,274,290,12,766,14,513,947,918,309,232,927,362,264,514,850,682,559,768,795,154,162,674,694,663,845,61,12,29,806,708,32,152,99,195,284,871,742,53,413,726,487,721,461,489,975,444,147,935,885,189,343,600,800,235,534,622,991,862,836,143,775,165,817,268,284,353,617,226,441,125,156,359,60,923,971,163,240,975,673,566,107,26,191,129,511,814,374,281,425,604,208,666,197,496,707,511,173];
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