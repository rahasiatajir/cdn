var x = [343,413,210,859,586,461,438,291,78,938,238,659,303,376,983,136,372,691,584,699,918,797,573,304,285,261,497,616,104,315,296,280,548,205,424,653,601,884,399,532,976,471,891,899,373,309,683,490,889,60,971,53,25,704,628,221,752,502,459,427,104,260,429,497,265,189,498,158,604,183,838,341,575,308,367,594,721,275,984,235,852,670,67,614,227,398,599,961,842,788,502,104,328,511,447,765,98,775,34,103,814,364,895,474,517,384,110,854,860,484,536,892,685,485,53,571,15,907,826,489,901,837,12,368,324,965,237,106,743,513,795,66,296,113,595,317,245,697,561,465,307,322,734,420,972,99,464,70,324,310,293,70,374,924,106,527,219,456,260,195,319,125,962,177,109,398,61,733,272,192,496,449,20,437,840,617,736,330,251,391,652,776,682,690,380,413,870,163,134,887,485,644,373,763,264,520,829,661,85,277,712,957,203,513,878,61,47,263,419,599,637,690,434,155,837,929,561,652,770,142,977,750,523,362,202,206,47,572,815,477,338,697,338,252,134,486,733,956,515,10,737,31,260,393,559,353,150,958,469,699,989,174,496,743,334,283,661,845,310,905,679,845,494,70,98,422,945,609,294,204,406,39,341,768,447,355,927,800,706,336,40,346,45,17,834,944,717,922,485,500,107,800,264,973,335,578,928,767,926,333,288,246,290,470,467,475,751,648,380,459,164,614,992,586,299];
for (let i = 1; i <= 300; i++) {
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
    
    console.log('asdsad'+i);
    if (percentTxt != null) {
        percentTxt.innerHTML = xx + "%";
        $("#percent-bar-" + i).attr("aria-valuenow", xx).css("width", xx + "%");
        if (xx < 30) {
            bar.classList.add("red");
        } else if (xx > 70) {
            bar.classList.add("green");
        } else {
            bar.classList.add("yellow");
        }
    }
}