// Données de transaction (exemple)
const transactions = 
[
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "AIB",
        "MONTH": "2022-01",
        "TotalAmountPaid": 308277.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "ATB",
        "MONTH": "2022-01",
        "TotalAmountPaid": 140467.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "CUA",
        "MONTH": "2022-01",
        "TotalAmountPaid": 864691.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAA",
        "MONTH": "2022-01",
        "TotalAmountPaid": 4790298.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAL",
        "MONTH": "2022-01",
        "TotalAmountPaid": 794256.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAP",
        "MONTH": "2022-01",
        "TotalAmountPaid": 399000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAT",
        "MONTH": "2022-01",
        "TotalAmountPaid": 8818250.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DEM",
        "MONTH": "2022-01",
        "TotalAmountPaid": 14112.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DLLP",
        "MONTH": "2022-01",
        "TotalAmountPaid": 3572800.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FDT",
        "MONTH": "2022-01",
        "TotalAmountPaid": 964000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FJT",
        "MONTH": "2022-01",
        "TotalAmountPaid": 2057967.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "PAL",
        "MONTH": "2022-01",
        "TotalAmountPaid": 3360.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC10",
        "MONTH": "2022-01",
        "TotalAmountPaid": 6613497.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC13",
        "MONTH": "2022-01",
        "TotalAmountPaid": 2725792.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC20",
        "MONTH": "2022-01",
        "TotalAmountPaid": 28120.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC23",
        "MONTH": "2022-01",
        "TotalAmountPaid": 47422609.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC8",
        "MONTH": "2022-01",
        "TotalAmountPaid": 2914991.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TTT",
        "MONTH": "2022-01",
        "TotalAmountPaid": 2876250.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TVA",
        "MONTH": "2022-01",
        "TotalAmountPaid": 34917704.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "AIB",
        "MONTH": "2022-02",
        "TotalAmountPaid": 1071377.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "ATB",
        "MONTH": "2022-02",
        "TotalAmountPaid": 793454.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "CUA",
        "MONTH": "2022-02",
        "TotalAmountPaid": 1012633.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAA",
        "MONTH": "2022-02",
        "TotalAmountPaid": 6432597.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAL",
        "MONTH": "2022-02",
        "TotalAmountPaid": 4440200.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAT",
        "MONTH": "2022-02",
        "TotalAmountPaid": 84412.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FDT",
        "MONTH": "2022-02",
        "TotalAmountPaid": 984000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FJT",
        "MONTH": "2022-02",
        "TotalAmountPaid": 1752204.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC10",
        "MONTH": "2022-02",
        "TotalAmountPaid": 7599340.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC20",
        "MONTH": "2022-02",
        "TotalAmountPaid": 61614.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC23",
        "MONTH": "2022-02",
        "TotalAmountPaid": 62830966.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC8",
        "MONTH": "2022-02",
        "TotalAmountPaid": 7965599.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TTT",
        "MONTH": "2022-02",
        "TotalAmountPaid": 1438125.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TVA",
        "MONTH": "2022-02",
        "TotalAmountPaid": 47187808.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "ATB",
        "MONTH": "2022-03",
        "TotalAmountPaid": 755303.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "CUA",
        "MONTH": "2022-03",
        "TotalAmountPaid": 1234613.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAA",
        "MONTH": "2022-03",
        "TotalAmountPaid": 23742315.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAL",
        "MONTH": "2022-03",
        "TotalAmountPaid": 0.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAT",
        "MONTH": "2022-03",
        "TotalAmountPaid": 0.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DLLP",
        "MONTH": "2022-03",
        "TotalAmountPaid": 1815000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FDT",
        "MONTH": "2022-03",
        "TotalAmountPaid": 1182000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FJT",
        "MONTH": "2022-03",
        "TotalAmountPaid": 755303.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "PAL",
        "MONTH": "2022-03",
        "TotalAmountPaid": 1084080.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC10",
        "MONTH": "2022-03",
        "TotalAmountPaid": 10032546.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC20",
        "MONTH": "2022-03",
        "TotalAmountPaid": 1096160.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC23",
        "MONTH": "2022-03",
        "TotalAmountPaid": 61625602.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC8",
        "MONTH": "2022-03",
        "TotalAmountPaid": 12187545.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TTT",
        "MONTH": "2022-03",
        "TotalAmountPaid": 0.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TVA",
        "MONTH": "2022-03",
        "TotalAmountPaid": 48432002.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "AIB",
        "MONTH": "2022-04",
        "TotalAmountPaid": 52904.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "CUA",
        "MONTH": "2022-04",
        "TotalAmountPaid": 842529.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAA",
        "MONTH": "2022-04",
        "TotalAmountPaid": 7239874.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAE",
        "MONTH": "2022-04",
        "TotalAmountPaid": 467250.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAL",
        "MONTH": "2022-04",
        "TotalAmountPaid": 1614297.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DLLP",
        "MONTH": "2022-04",
        "TotalAmountPaid": 3457830.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DPI",
        "MONTH": "2022-04",
        "TotalAmountPaid": 190000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FDT",
        "MONTH": "2022-04",
        "TotalAmountPaid": 926000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FJT",
        "MONTH": "2022-04",
        "TotalAmountPaid": 0.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "RFE",
        "MONTH": "2022-04",
        "TotalAmountPaid": 1330.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC10",
        "MONTH": "2022-04",
        "TotalAmountPaid": 5073162.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC23",
        "MONTH": "2022-04",
        "TotalAmountPaid": 51040168.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC8",
        "MONTH": "2022-04",
        "TotalAmountPaid": 5399214.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TTT",
        "MONTH": "2022-04",
        "TotalAmountPaid": 0.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TVA",
        "MONTH": "2022-04",
        "TotalAmountPaid": 39668392.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "AIB",
        "MONTH": "2022-05",
        "TotalAmountPaid": 83775.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "ATB",
        "MONTH": "2022-05",
        "TotalAmountPaid": 494561.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "CUA",
        "MONTH": "2022-05",
        "TotalAmountPaid": 570354.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAA",
        "MONTH": "2022-05",
        "TotalAmountPaid": 10182340.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAL",
        "MONTH": "2022-05",
        "TotalAmountPaid": 399360.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DLLP",
        "MONTH": "2022-05",
        "TotalAmountPaid": 1815000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FDT",
        "MONTH": "2022-05",
        "TotalAmountPaid": 906000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FJT",
        "MONTH": "2022-05",
        "TotalAmountPaid": 3079091.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC10",
        "MONTH": "2022-05",
        "TotalAmountPaid": 5422939.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC20",
        "MONTH": "2022-05",
        "TotalAmountPaid": 651735.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC23",
        "MONTH": "2022-05",
        "TotalAmountPaid": 35324554.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC8",
        "MONTH": "2022-05",
        "TotalAmountPaid": 5407292.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TTT",
        "MONTH": "2022-05",
        "TotalAmountPaid": 3876795.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TVA",
        "MONTH": "2022-05",
        "TotalAmountPaid": 27141291.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "AIB",
        "MONTH": "2022-06",
        "TotalAmountPaid": 628809.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "ATB",
        "MONTH": "2022-06",
        "TotalAmountPaid": 696759.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "CUA",
        "MONTH": "2022-06",
        "TotalAmountPaid": 1342650.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAA",
        "MONTH": "2022-06",
        "TotalAmountPaid": 10454961.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAL",
        "MONTH": "2022-06",
        "TotalAmountPaid": 1005900.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAP",
        "MONTH": "2022-06",
        "TotalAmountPaid": 26500.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DLLP",
        "MONTH": "2022-06",
        "TotalAmountPaid": 952560.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FDT",
        "MONTH": "2022-06",
        "TotalAmountPaid": 1212000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FJT",
        "MONTH": "2022-06",
        "TotalAmountPaid": 3281288.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "PAL",
        "MONTH": "2022-06",
        "TotalAmountPaid": 1080000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC10",
        "MONTH": "2022-06",
        "TotalAmountPaid": 6544226.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC20",
        "MONTH": "2022-06",
        "TotalAmountPaid": 992500.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC23",
        "MONTH": "2022-06",
        "TotalAmountPaid": 44690551.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC8",
        "MONTH": "2022-06",
        "TotalAmountPaid": 18422618.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TTT",
        "MONTH": "2022-06",
        "TotalAmountPaid": 3876794.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TVA",
        "MONTH": "2022-06",
        "TotalAmountPaid": 35096160.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "AIB",
        "MONTH": "2022-07",
        "TotalAmountPaid": 333487.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "CUA",
        "MONTH": "2022-07",
        "TotalAmountPaid": 711319.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAA",
        "MONTH": "2022-07",
        "TotalAmountPaid": 13965094.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAE",
        "MONTH": "2022-07",
        "TotalAmountPaid": 187950.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAL",
        "MONTH": "2022-07",
        "TotalAmountPaid": 591700.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAT",
        "MONTH": "2022-07",
        "TotalAmountPaid": 3018120.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DEG",
        "MONTH": "2022-07",
        "TotalAmountPaid": 4200.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DLLP",
        "MONTH": "2022-07",
        "TotalAmountPaid": 2679000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FDT",
        "MONTH": "2022-07",
        "TotalAmountPaid": 1150000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FJT",
        "MONTH": "2022-07",
        "TotalAmountPaid": 0.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "PAL",
        "MONTH": "2022-07",
        "TotalAmountPaid": 40000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC10",
        "MONTH": "2022-07",
        "TotalAmountPaid": 3081573.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC20",
        "MONTH": "2022-07",
        "TotalAmountPaid": 22256.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC23",
        "MONTH": "2022-07",
        "TotalAmountPaid": 37895118.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC8",
        "MONTH": "2022-07",
        "TotalAmountPaid": 8153452.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TTT",
        "MONTH": "2022-07",
        "TotalAmountPaid": 0.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TVA",
        "MONTH": "2022-07",
        "TotalAmountPaid": 26470024.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "AIB",
        "MONTH": "2022-08",
        "TotalAmountPaid": 159453.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "AMT",
        "MONTH": "2022-08",
        "TotalAmountPaid": 1500000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "ATB",
        "MONTH": "2022-08",
        "TotalAmountPaid": 963111.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "CUA",
        "MONTH": "2022-08",
        "TotalAmountPaid": 1143673.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAA",
        "MONTH": "2022-08",
        "TotalAmountPaid": 8958044.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAL",
        "MONTH": "2022-08",
        "TotalAmountPaid": 2153112.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAP",
        "MONTH": "2022-08",
        "TotalAmountPaid": 15000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAT",
        "MONTH": "2022-08",
        "TotalAmountPaid": 3536750.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FDT",
        "MONTH": "2022-08",
        "TotalAmountPaid": 1335000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FJT",
        "MONTH": "2022-08",
        "TotalAmountPaid": 3547641.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC10",
        "MONTH": "2022-08",
        "TotalAmountPaid": 3966002.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC23",
        "MONTH": "2022-08",
        "TotalAmountPaid": 65751529.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC8",
        "MONTH": "2022-08",
        "TotalAmountPaid": 9378710.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TTT",
        "MONTH": "2022-08",
        "TotalAmountPaid": 3876795.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TVA",
        "MONTH": "2022-08",
        "TotalAmountPaid": 52584928.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "AIB",
        "MONTH": "2022-09",
        "TotalAmountPaid": 1640082.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "ATB",
        "MONTH": "2022-09",
        "TotalAmountPaid": 654092.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "CUA",
        "MONTH": "2022-09",
        "TotalAmountPaid": 1121604.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAA",
        "MONTH": "2022-09",
        "TotalAmountPaid": 14152497.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAL",
        "MONTH": "2022-09",
        "TotalAmountPaid": 307200.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAP",
        "MONTH": "2022-09",
        "TotalAmountPaid": 259350.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAT",
        "MONTH": "2022-09",
        "TotalAmountPaid": 3882305.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DLLP",
        "MONTH": "2022-09",
        "TotalAmountPaid": 2767560.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FDT",
        "MONTH": "2022-09",
        "TotalAmountPaid": 1089000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FJT",
        "MONTH": "2022-09",
        "TotalAmountPaid": 654092.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "PAL",
        "MONTH": "2022-09",
        "TotalAmountPaid": 1080000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC10",
        "MONTH": "2022-09",
        "TotalAmountPaid": 8119092.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC20",
        "MONTH": "2022-09",
        "TotalAmountPaid": 992500.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC23",
        "MONTH": "2022-09",
        "TotalAmountPaid": 61735586.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC8",
        "MONTH": "2022-09",
        "TotalAmountPaid": 5796424.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TTT",
        "MONTH": "2022-09",
        "TotalAmountPaid": 0.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TVA",
        "MONTH": "2022-09",
        "TotalAmountPaid": 49426945.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "AMT",
        "MONTH": "2022-10",
        "TotalAmountPaid": 182133.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "ATB",
        "MONTH": "2022-10",
        "TotalAmountPaid": 1093469.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "CUA",
        "MONTH": "2022-10",
        "TotalAmountPaid": 632376.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAA",
        "MONTH": "2022-10",
        "TotalAmountPaid": 6940675.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAL",
        "MONTH": "2022-10",
        "TotalAmountPaid": 100200.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DAT",
        "MONTH": "2022-10",
        "TotalAmountPaid": 3885787.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DEG",
        "MONTH": "2022-10",
        "TotalAmountPaid": 0.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "DEM",
        "MONTH": "2022-10",
        "TotalAmountPaid": 14112.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FDT",
        "MONTH": "2022-10",
        "TotalAmountPaid": 1140000.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "FJT",
        "MONTH": "2022-10",
        "TotalAmountPaid": 1093469.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "PAL",
        "MONTH": "2022-10",
        "TotalAmountPaid": 3371200.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC10",
        "MONTH": "2022-10",
        "TotalAmountPaid": 3175643.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC20",
        "MONTH": "2022-10",
        "TotalAmountPaid": 3097272.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC23",
        "MONTH": "2022-10",
        "TotalAmountPaid": 39196746.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TIC8",
        "MONTH": "2022-10",
        "TotalAmountPaid": 4642495.0
    },
    {
        "CodeOffice": "DIFTZ",
        "CodeTaxe": "TTT",
        "MONTH": "2022-10",
        "TotalAmountPaid": 0.0
    },

];

// Table de liaison CodeTaxe -> TaxeDescription
const taxeDescriptions = [[
    {
      "CodeTaxe": "TIC8",
      "TaxeDescription": "Taxe Int\u00e9rieur de Consommation \u00e0 8%"
    },
    {
      "CodeTaxe": "DEG",
      "TaxeDescription": "Droit d'assise eau gazeuse"
    },
    {
      "CodeTaxe": "DJU",
      "TaxeDescription": "Droit D'assises Jus des Fruits"
    },
    {
      "CodeTaxe": "FDT",
      "TaxeDescription": "Depense FDT"
    },
    {
      "CodeTaxe": "TVU",
      "TaxeDescription": "Transit V\u00eatements Usagers"
    },
    {
      "CodeTaxe": "AMT",
      "TaxeDescription": "Amendes Tr\u00e9sor"
    },
    {
      "CodeTaxe": "DAG",
      "TaxeDescription": "Droit d'accise sur le gasoil"
    },
    {
      "CodeTaxe": "TIC",
      "TaxeDescription": "Recette TIC"
    },
    {
      "CodeTaxe": "AMT",
      "TaxeDescription": "Depense"
    },
    {
      "CodeTaxe": "ATB",
      "TaxeDescription": "Recette ATB"
    },
    {
      "CodeTaxe": "DLLP",
      "TaxeDescription": "Droits d'assises sur le lait en "
    },
    {
      "CodeTaxe": "PAL",
      "TaxeDescription": "Droit d'Assises sur les Pattes"
    },
    {
      "CodeTaxe": "RLG",
      "TaxeDescription": "Redevance L\u00e9gale su Gasoil"
    },
    {
      "CodeTaxe": "ALF",
      "TaxeDescription": "Adjustement L\u00e9gal FUEL"
    },
    {
      "CodeTaxe": "RBS",
      "TaxeDescription": "Recette RBS"
    },
    {
      "CodeTaxe": "CUA",
      "TaxeDescription": "D\u00e9pense CUA"
    },
    {
      "CodeTaxe": "ATB",
      "TaxeDescription": "Alcool Transit Boutre"
    },
    {
      "CodeTaxe": "FBE",
      "TaxeDescription": "Redevence Fer \u00e0 Beton EXO"
    },
    {
      "CodeTaxe": "FBD",
      "TaxeDescription": "Redevence Fer \u00e0 Beton Hors EXO 10%"
    },
    {
      "CodeTaxe": "FDT",
      "TaxeDescription": "Frais de Timbre"
    },
    {
      "CodeTaxe": "TIC10",
      "TaxeDescription": "Taxe Int\u00e9rieur Consommation \u00e0 10%"
    },
    {
      "CodeTaxe": "ALG",
      "TaxeDescription": "Ajustement L\u00e9gale du Gasoil"
    },
    {
      "CodeTaxe": "ALP",
      "TaxeDescription": "Ajustement L\u00e9gal du P\u00e9trol"
    },
    {
      "CodeTaxe": "DAA",
      "TaxeDescription": "Recette DAA"
    },
    {
      "CodeTaxe": "ALS",
      "TaxeDescription": "Recette ALS"
    },
    {
      "CodeTaxe": "DAK",
      "TaxeDescription": "Droit d'Accisse Khat"
    },
    {
      "CodeTaxe": "PAT",
      "TaxeDescription": "Patente Khat"
    },
    {
      "CodeTaxe": "DYA",
      "TaxeDescription": "Droit d'assises sur les yaourts"
    },
    {
      "CodeTaxe": "ALS",
      "TaxeDescription": "Ajustement L\u00e9gal du Super"
    },
    {
      "CodeTaxe": "DLL",
      "TaxeDescription": "Droit d'assises Lait Liquide"
    },
    {
      "CodeTaxe": "AIB",
      "TaxeDescription": "Recette AIB"
    },
    {
      "CodeTaxe": "DAP",
      "TaxeDescription": "Recette DAP"
    },
    {
      "CodeTaxe": "ISS",
      "TaxeDescription": "Imp\u00f4t Sp\u00e9cial de Solidarit\u00e9"
    },
    {
      "CodeTaxe": "PLA",
      "TaxeDescription": "Droits d'assises sur les sachets en"
    },
    {
      "CodeTaxe": "PAL",
      "TaxeDescription": "Recette PAL"
    },
    {
      "CodeTaxe": "ILC",
      "TaxeDescription": "Inter\u00eat l\u00e9gal cr\u00e9dit"
    },
    {
      "CodeTaxe": "CUA",
      "TaxeDescription": "Taxe de Contribution de l'UA"
    },
    {
      "CodeTaxe": "FDT",
      "TaxeDescription": "Recette FDT"
    },
    {
      "CodeTaxe": "DAA",
      "TaxeDescription": "Droit d'Accisse Alcool"
    },
    {
      "CodeTaxe": "DPI",
      "TaxeDescription": "Droit d'assises sur les papiers "
    },
    {
      "CodeTaxe": "DBL",
      "TaxeDescription": "Droit D'Assises Boisons Lact\u00e9es"
    },
    {
      "CodeTaxe": "TVA",
      "TaxeDescription": "Recette TVA"
    },
    {
      "CodeTaxe": "CSE",
      "TaxeDescription": "Contribution Pour La Sauvegarde"
    },
    {
      "CodeTaxe": "AMD",
      "TaxeDescription": "Depense"
    },
    {
      "CodeTaxe": "TIC30",
      "TaxeDescription": "Taxe Int\u00e9rieur Consommation \u00e0 30%"
    },
    {
      "CodeTaxe": "TIC2",
      "TaxeDescription": "Taxe Int\u00e9rieur de Consommation \u00e0 2%"
    },
    {
      "CodeTaxe": "TIC23",
      "TaxeDescription": "Taxe Int\u00e9rieur Consommation \u00e0 23%"
    },
    {
      "CodeTaxe": "PAT",
      "TaxeDescription": "Recette PAT"
    },
    {
      "CodeTaxe": "RLP",
      "TaxeDescription": "Redevance L\u00e9gale du P\u00e9trol"
    },
    {
      "CodeTaxe": "IGS",
      "TaxeDescription": "IGS / KHAT"
    },
    {
      "CodeTaxe": "FJT",
      "TaxeDescription": "FJSL TRANSIT ALCOOL ET TABAC"
    },
    {
      "CodeTaxe": "DAP",
      "TaxeDescription": "Droit d'Accisse Parfums"
    },
    {
      "CodeTaxe": "RLS",
      "TaxeDescription": "Redevance L\u00e9gale du Super"
    },
    {
      "CodeTaxe": "CCD",
      "TaxeDescription": "Frais Chambre de Commerce"
    },
    {
      "CodeTaxe": "TIC20",
      "TaxeDescription": "Taxe Int\u00e9rieur Consommation \u00e0 20%"
    },
    {
      "CodeTaxe": "DPL",
      "TaxeDescription": "Droit d'accise du Petrol Lampant"
    },
    {
      "CodeTaxe": "CUA",
      "TaxeDescription": "Recette CUA"
    },
    {
      "CodeTaxe": "DAV",
      "TaxeDescription": "Droit d'Accisse Vasilines"
    },
    {
      "CodeTaxe": "CBU",
      "TaxeDescription": "Taxe de Contribution Budg\u00e9taire"
    },
    {
      "CodeTaxe": "DEM",
      "TaxeDescription": "Droit d'accises Eau Min\u00e9ral"
    },
    {
      "CodeTaxe": "RFSH",
      "TaxeDescription": "Redevance Fonds Soutien Handicaps"
    },
    {
      "CodeTaxe": "DAE",
      "TaxeDescription": "Droit d'Accisse Eau de toilettes"
    },
    {
      "CodeTaxe": "CBU",
      "TaxeDescription": "Recette CBU"
    },
    {
      "CodeTaxe": "FJS",
      "TaxeDescription": "FJSL"
    },
    {
      "CodeTaxe": "AIB",
      "TaxeDescription": "Accompte imp\u00f4t B\u00e9n\u00e9fice"
    },
    {
      "CodeTaxe": "TTT",
      "TaxeDescription": "Transit Tabacs Terrestre"
    },
    {
      "CodeTaxe": "DAL",
      "TaxeDescription": "Droit d'Accisse Huiles lubrifiants"
    },
    {
      "CodeTaxe": "RJT",
      "TaxeDescription": "Redevance jet"
    },
    {
      "CodeTaxe": "RBS",
      "TaxeDescription": "Redevence Bitume Sodium"
    },
    {
      "CodeTaxe": "TTB",
      "TaxeDescription": "Transit Tabacs Boutre"
    },
    {
      "CodeTaxe": "TVA",
      "TaxeDescription": "D\u00e9pense TVA"
    },
    {
      "CodeTaxe": "CBU",
      "TaxeDescription": "D\u00e9penses CBU"
    },
    {
      "CodeTaxe": "TIC",
      "TaxeDescription": "D\u00e9pense TIC"
    },
    {
      "CodeTaxe": "TVA",
      "TaxeDescription": "Taxe sur la Valeur Ajout\u00e9e"
    },
    {
      "CodeTaxe": "DAS",
      "TaxeDescription": "Droit d'accises sur le Super"
    },
    {
      "CodeTaxe": "DAW",
      "TaxeDescription": "Droit d'Accisse White spirit"
    },
    {
      "CodeTaxe": "AED",
      "TaxeDescription": "Ajustement Sur l'energie EDD"
    },
    {
      "CodeTaxe": "TIC13",
      "TaxeDescription": "Taxe Int\u00e9rieur Consommation \u00e0 13%"
    },
    {
      "CodeTaxe": "RFE",
      "TaxeDescription": "Redevance Ferraille Export"
    },
    {
      "CodeTaxe": "DAT",
      "TaxeDescription": "Droit d'Accisse Tabacs"
    },
    {
      "CodeTaxe": "TIC5",
      "TaxeDescription": "Taxe Int\u00e9rieur de Consommation \u00e0 5%"
    }
  ]
];

// Création du dictionnaire des descriptions des taxes
const taxeMap = {};
taxeDescriptions.forEach(taxe => {
    taxeMap[taxe.CodeTaxe] = taxe.TaxeDescription;
});

// Transformation des données pour alimenter le DataTable
const transformedData = {};

// Regroupement par MONTH
transactions.forEach(entry => {
    const { MONTH, CodeOffice, CodeTaxe, TotalAmountPaid } = entry;

    if (!transformedData[MONTH]) {
        transformedData[MONTH] = { MONTH };
    }

    // Génération dynamique du champ "Bureau - Taxe"
    const columnKey = `${CodeOffice} - ${taxeMap[CodeTaxe] || CodeTaxe}`;
    transformedData[MONTH][columnKey] = TotalAmountPaid;
});

// Convertir en tableau utilisable par PrimeReact DataTable
const tableData = Object.values(transformedData);

// Génération dynamique des colonnes pour PrimeReact
const uniqueColumns = new Set();
transactions.forEach(({ CodeOffice, CodeTaxe }) => {
    const columnKey = `${CodeOffice} - ${taxeMap[CodeTaxe] || CodeTaxe}`;
    uniqueColumns.add(columnKey);
});

const primeColumns = [
    { field: "MONTH", header: "Mois" },
    ...Array.from(uniqueColumns).map(col => ({ field: col, header: col }))
];

// Affichage des résultats
console.log("📌 Table Data:", tableData);
console.log("📌 PrimeReact Columns:", primeColumns);
