// Données de transaction (exemple)
const transactions = [
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
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 31237841.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVU",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-11",
      "TotalAmountPaid": 154000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-11",
      "TotalAmountPaid": 774283.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1283144.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 7691986.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAE",
      "MONTH": "2022-11",
      "TotalAmountPaid": 88200.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1451592.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1815000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1227000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 3397736.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-11",
      "TotalAmountPaid": 3796597.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-11",
      "TotalAmountPaid": 37643267.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-11",
      "TotalAmountPaid": 11717204.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 3935179.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 41899409.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-12",
      "TotalAmountPaid": 1482499.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-12",
      "TotalAmountPaid": 305456.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 1969289.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 15376366.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2022-12",
      "TotalAmountPaid": 1707269.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DEG",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 1274000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 305456.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2022-12",
      "TotalAmountPaid": 120000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-12",
      "TotalAmountPaid": 3521075.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-12",
      "TotalAmountPaid": 109712.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 64158937.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-12",
      "TotalAmountPaid": 4991036.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 92687037.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-01",
      "TotalAmountPaid": 131856.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-01",
      "TotalAmountPaid": 998851.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1346104.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 21939794.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1784226.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 9966791.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-01",
      "TotalAmountPaid": 2767560.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1541000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 6321205.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1107000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-01",
      "TotalAmountPaid": 10415825.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-01",
      "TotalAmountPaid": 2237696.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-01",
      "TotalAmountPaid": 56534741.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-01",
      "TotalAmountPaid": 6838760.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTB",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1352577.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 5954664.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 59213881.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-02",
      "TotalAmountPaid": 11360.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-02",
      "TotalAmountPaid": 954257.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 947598.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 14715846.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-02",
      "TotalAmountPaid": 96956.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 3789000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DEG",
      "MONTH": "2023-02",
      "TotalAmountPaid": 40110.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 1241000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 8778211.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-02",
      "TotalAmountPaid": 157132.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-02",
      "TotalAmountPaid": 5404968.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-02",
      "TotalAmountPaid": 28161230.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-02",
      "TotalAmountPaid": 10428129.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 11735931.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 31124294.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVU",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-03",
      "TotalAmountPaid": 130867.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-03",
      "TotalAmountPaid": 588361.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 2088702.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 8597089.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-03",
      "TotalAmountPaid": 738628.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-03",
      "TotalAmountPaid": 688000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-03",
      "TotalAmountPaid": 2767560.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1495000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 3253307.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ILC",
      "MONTH": "2023-03",
      "TotalAmountPaid": 2156.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1557771.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-03",
      "TotalAmountPaid": 114794.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-03",
      "TotalAmountPaid": 6822061.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1727347.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-03",
      "TotalAmountPaid": 65947841.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-03",
      "TotalAmountPaid": 8857730.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTB",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1352577.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1968554.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 78740073.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-04",
      "TotalAmountPaid": 237332.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 1092294.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 2622429.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-04",
      "TotalAmountPaid": 1554812.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-04",
      "TotalAmountPaid": 900000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 1558000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 2624738.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-04",
      "TotalAmountPaid": 35015.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-04",
      "TotalAmountPaid": 6077409.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-04",
      "TotalAmountPaid": 68910892.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-04",
      "TotalAmountPaid": 9137984.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 3937107.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 49124998.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-05",
      "TotalAmountPaid": 259600.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AMD",
      "MONTH": "2023-05",
      "TotalAmountPaid": -2000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-05",
      "TotalAmountPaid": 737947.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 957355.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 10924909.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-05",
      "TotalAmountPaid": 397100.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-05",
      "TotalAmountPaid": 121000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 3916912.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1815000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1635000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 4479327.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1107000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-05",
      "TotalAmountPaid": 145877.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-05",
      "TotalAmountPaid": 7353722.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-05",
      "TotalAmountPaid": 974150.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-05",
      "TotalAmountPaid": 42426247.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-05",
      "TotalAmountPaid": 11251577.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 5612070.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 38482805.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-06",
      "TotalAmountPaid": 45510.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 371622.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1307687.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 785188.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 14304855.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-06",
      "TotalAmountPaid": 2077565.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1500.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAW",
      "MONTH": "2023-06",
      "TotalAmountPaid": 20700.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DPI",
      "MONTH": "2023-06",
      "TotalAmountPaid": 17200.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1365000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 4127225.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-06",
      "TotalAmountPaid": 191009.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-06",
      "TotalAmountPaid": 6158506.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-06",
      "TotalAmountPaid": 49259510.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-06",
      "TotalAmountPaid": 6651340.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 4229308.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 36972933.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVU",
      "MONTH": "2023-06",
      "TotalAmountPaid": 262000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 100000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-07",
      "TotalAmountPaid": 684996.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 956354.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 9163927.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-07",
      "TotalAmountPaid": 1848000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-07",
      "TotalAmountPaid": 357000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 3457076.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-07",
      "TotalAmountPaid": 2856120.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 1368000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 4509347.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-07",
      "TotalAmountPaid": 122363.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-07",
      "TotalAmountPaid": 10549842.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-07",
      "TotalAmountPaid": 43111363.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-07",
      "TotalAmountPaid": 9119985.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 5736525.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 39843973.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVU",
      "MONTH": "2023-07",
      "TotalAmountPaid": 345000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-08",
      "TotalAmountPaid": 784653.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1795936.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1286850.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1306564.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 4818952.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-08",
      "TotalAmountPaid": 589000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-08",
      "TotalAmountPaid": 50400.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 8019023.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1428000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 5090800.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1200000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-08",
      "TotalAmountPaid": 64345.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-08",
      "TotalAmountPaid": 7633227.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1710342.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-08",
      "TotalAmountPaid": 45954327.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-08",
      "TotalAmountPaid": 11292921.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 5705926.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 48899565.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AMD",
      "MONTH": "2023-09",
      "TotalAmountPaid": -15000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 163340.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-09",
      "TotalAmountPaid": 568851.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1174589.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 11129490.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAE",
      "MONTH": "2023-09",
      "TotalAmountPaid": 825000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1389474.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1815000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1299000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 2470826.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1107000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-09",
      "TotalAmountPaid": 148611.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-09",
      "TotalAmountPaid": 4199178.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-09",
      "TotalAmountPaid": 992510.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-09",
      "TotalAmountPaid": 59871045.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-09",
      "TotalAmountPaid": 8010610.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 2852963.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 43772381.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-10",
      "TotalAmountPaid": 143042.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 109000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1228175.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1277406.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 17586023.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1009106.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-10",
      "TotalAmountPaid": 18970.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 4224101.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1838000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 8854469.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2023-10",
      "TotalAmountPaid": 4369000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-10",
      "TotalAmountPaid": 234823.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-10",
      "TotalAmountPaid": 7757456.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-10",
      "TotalAmountPaid": 3971294.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-10",
      "TotalAmountPaid": 49090504.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-10",
      "TotalAmountPaid": 12450806.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 11439442.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 48647034.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-11",
      "TotalAmountPaid": 316523.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1130652.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1354507.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1174958.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 25545950.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAE",
      "MONTH": "2023-11",
      "TotalAmountPaid": 750000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1551500.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-11",
      "TotalAmountPaid": 150015.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1813500.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1882000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1354507.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1118208.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-11",
      "TotalAmountPaid": 341099.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-11",
      "TotalAmountPaid": 4384783.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-11",
      "TotalAmountPaid": 899315.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-11",
      "TotalAmountPaid": 61325459.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-11",
      "TotalAmountPaid": 5604534.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 45764997.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-12",
      "TotalAmountPaid": 754841.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1260519.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 6689462.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1413300.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-12",
      "TotalAmountPaid": 16350.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 10600201.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1661000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1917394.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-12",
      "TotalAmountPaid": 89322.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-12",
      "TotalAmountPaid": 4808207.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-12",
      "TotalAmountPaid": 75898467.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-12",
      "TotalAmountPaid": 3210561.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1743830.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 63115578.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-01",
      "TotalAmountPaid": 160975.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 11787227.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 992072.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 6873651.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-01",
      "TotalAmountPaid": 195800.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1657043.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1454000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 928778.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-01",
      "TotalAmountPaid": 91784.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-01",
      "TotalAmountPaid": 5552725.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-01",
      "TotalAmountPaid": 144900.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-01",
      "TotalAmountPaid": 35047823.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1507140.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-01",
      "TotalAmountPaid": 10443886.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1393166.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 33937798.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-02",
      "TotalAmountPaid": 458763.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1071751.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 7207090.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1492300.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2024-02",
      "TotalAmountPaid": 2200.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-02",
      "TotalAmountPaid": 825000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1270000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 5206601.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2024-02",
      "TotalAmountPaid": 3272000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-02",
      "TotalAmountPaid": 96236.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-02",
      "TotalAmountPaid": 7491801.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-02",
      "TotalAmountPaid": 3053165.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-02",
      "TotalAmountPaid": 52383449.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-02",
      "TotalAmountPaid": 8034000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-02",
      "TotalAmountPaid": 3395264.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 7121757.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 51400680.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1049200.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 626501.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-03",
      "TotalAmountPaid": 193674.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1129471.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 4266622.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1735700.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2024-03",
      "TotalAmountPaid": 200550.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1500000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1375000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 4445574.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2024-03",
      "TotalAmountPaid": 4364000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-03",
      "TotalAmountPaid": 56973.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-03",
      "TotalAmountPaid": 7594146.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-03",
      "TotalAmountPaid": 4037886.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-03",
      "TotalAmountPaid": 60147750.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1514936.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-03",
      "TotalAmountPaid": 4921900.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 6377850.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 52959570.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-04",
      "TotalAmountPaid": 932493.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 643815.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 6664386.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAE",
      "MONTH": "2024-04",
      "TotalAmountPaid": 540000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-04",
      "TotalAmountPaid": 592060.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2024-04",
      "TotalAmountPaid": 220500.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 3446588.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-04",
      "TotalAmountPaid": 14112.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1482000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 13788582.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1092000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-04",
      "TotalAmountPaid": 88988.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-04",
      "TotalAmountPaid": 3928366.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1003270.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-04",
      "TotalAmountPaid": 36060309.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-04",
      "TotalAmountPaid": 3163698.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-04",
      "TotalAmountPaid": 4950951.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 19284132.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 31677447.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-05",
      "TotalAmountPaid": 302201.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-05",
      "TotalAmountPaid": 555961.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 976263.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 12278652.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1057600.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2024-05",
      "TotalAmountPaid": 325420.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1456000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 11134450.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 5410000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-05",
      "TotalAmountPaid": 163957.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-05",
      "TotalAmountPaid": 4687904.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-05",
      "TotalAmountPaid": 4971431.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-05",
      "TotalAmountPaid": 50532446.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1549119.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-05",
      "TotalAmountPaid": 5766220.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 15867733.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 47102023.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-06",
      "TotalAmountPaid": 850280.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-06",
      "TotalAmountPaid": 798665.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 937955.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 10965459.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1278600.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2024-06",
      "TotalAmountPaid": 33056.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 8098000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-06",
      "TotalAmountPaid": 14.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1370000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 798665.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2024-06",
      "TotalAmountPaid": 2239520.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PLA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 6000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-06",
      "TotalAmountPaid": 146421.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-06",
      "TotalAmountPaid": 8656118.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-06",
      "TotalAmountPaid": 2956034.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-06",
      "TotalAmountPaid": 36203316.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-06",
      "TotalAmountPaid": 6199184.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-06",
      "TotalAmountPaid": 4591416.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 49317430.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-07",
      "TotalAmountPaid": 67487.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-07",
      "TotalAmountPaid": 822508.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1404826.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 12169804.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAE",
      "MONTH": "2024-07",
      "TotalAmountPaid": 626100.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1694700.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2024-07",
      "TotalAmountPaid": 213000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 11399143.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1489000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 4627754.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1080000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-07",
      "TotalAmountPaid": 162502.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-07",
      "TotalAmountPaid": 12554773.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-07",
      "TotalAmountPaid": 992489.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-07",
      "TotalAmountPaid": 89085679.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-07",
      "TotalAmountPaid": 5022385.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-07",
      "TotalAmountPaid": 4884000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 5707868.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 77021116.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-08",
      "TotalAmountPaid": 118891.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 469774.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-08",
      "TotalAmountPaid": 775388.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 936786.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 10335626.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1950727.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 3424819.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1419000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 7467738.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1080000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-08",
      "TotalAmountPaid": 138006.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-08",
      "TotalAmountPaid": 5129513.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-08",
      "TotalAmountPaid": 992489.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-08",
      "TotalAmountPaid": 40433159.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-08",
      "TotalAmountPaid": 7336770.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 10038525.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 39208550.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1295685.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 576243.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-09",
      "TotalAmountPaid": 732475.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1139691.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 9344423.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAE",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-09",
      "TotalAmountPaid": 183200.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2024-09",
      "TotalAmountPaid": 401100.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 14854875.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1775000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 7389195.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2024-09",
      "TotalAmountPaid": 5459000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-09",
      "TotalAmountPaid": 124772.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-09",
      "TotalAmountPaid": 7560535.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-09",
      "TotalAmountPaid": 5037576.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-09",
      "TotalAmountPaid": 45620344.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-09",
      "TotalAmountPaid": 8125323.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 9985082.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 41890900.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-10",
      "TotalAmountPaid": 530278.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-10",
      "TotalAmountPaid": 531388.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1459076.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 14935420.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAE",
      "MONTH": "2024-10",
      "TotalAmountPaid": 609600.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 2219600.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 3869178.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-10",
      "TotalAmountPaid": 15120.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-10",
      "TotalAmountPaid": 432000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1643000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 10831591.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 5459000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFE",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-10",
      "TotalAmountPaid": 199432.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-10",
      "TotalAmountPaid": 8403044.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-10",
      "TotalAmountPaid": 5026828.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-10",
      "TotalAmountPaid": 57480165.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-10",
      "TotalAmountPaid": 6001819.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-10",
      "TotalAmountPaid": 7252236.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 15450303.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 60965400.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVU",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-11",
      "TotalAmountPaid": 88143.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 834669.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 10593891.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-11",
      "TotalAmountPaid": 348400.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAP",
      "MONTH": "2024-11",
      "TotalAmountPaid": 57000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 6718019.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1332000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 8608001.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2024-11",
      "TotalAmountPaid": 2130000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-11",
      "TotalAmountPaid": 141452.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-11",
      "TotalAmountPaid": 3901402.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-11",
      "TotalAmountPaid": 3609736.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-11",
      "TotalAmountPaid": 43291628.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-11",
      "TotalAmountPaid": 2584573.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 12912001.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 43123352.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-12",
      "TotalAmountPaid": 388798.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 198859.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 2118428.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1489000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 2287464.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "PAL",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1080000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-12",
      "TotalAmountPaid": 28285.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-12",
      "TotalAmountPaid": 279037.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-12",
      "TotalAmountPaid": 992500.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-12",
      "TotalAmountPaid": 6728293.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-12",
      "TotalAmountPaid": 995320.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 2847999.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 5761188.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "ATB",
      "MONTH": "2025-01",
      "TotalAmountPaid": 7839.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 1284000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 1566308.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2337705.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "AMT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 768150.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1225000.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FJT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 4213944.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "TTT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 6320916.0
    },
    {
      "CodeOffice": "DIFTZ",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 167000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2022-01",
      "TotalAmountPaid": 112300.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 931289.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 72276.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2022-01",
      "TotalAmountPaid": 95000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 907200.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 664000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-01",
      "TotalAmountPaid": 12000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-01",
      "TotalAmountPaid": 8191784.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-01",
      "TotalAmountPaid": 93684.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-01",
      "TotalAmountPaid": 16488940.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-01",
      "TotalAmountPaid": 3134591.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-01",
      "TotalAmountPaid": 16483274.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 24001692.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2022-02",
      "TotalAmountPaid": 1250921.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 629267.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2022-02",
      "TotalAmountPaid": 77500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 1084153.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 467600.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 622000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-02",
      "TotalAmountPaid": 6000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-02",
      "TotalAmountPaid": 9677606.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-02",
      "TotalAmountPaid": 45490.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-02",
      "TotalAmountPaid": 27806139.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-02",
      "TotalAmountPaid": 263241.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-02",
      "TotalAmountPaid": 5345936.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 28830455.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2022-03",
      "TotalAmountPaid": 553369.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 859842.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2022-03",
      "TotalAmountPaid": 30575.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 555800.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 721000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-03",
      "TotalAmountPaid": 6200.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-03",
      "TotalAmountPaid": 14011937.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-03",
      "TotalAmountPaid": 49888.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-03",
      "TotalAmountPaid": 17035171.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-03",
      "TotalAmountPaid": 135139.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-03",
      "TotalAmountPaid": 12495078.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 30971460.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2022-04",
      "TotalAmountPaid": 167750.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 714167.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2022-04",
      "TotalAmountPaid": 7390.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 1071000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 741000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-04",
      "TotalAmountPaid": 16160.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-04",
      "TotalAmountPaid": 17230151.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-04",
      "TotalAmountPaid": 118922.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-04",
      "TotalAmountPaid": 23145364.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-04",
      "TotalAmountPaid": 18470.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-04",
      "TotalAmountPaid": 4322317.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 34439720.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2022-05",
      "TotalAmountPaid": 405150.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 909869.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2022-05",
      "TotalAmountPaid": 25840.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 731000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 641000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-05",
      "TotalAmountPaid": 9320.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-05",
      "TotalAmountPaid": 10961269.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-05",
      "TotalAmountPaid": 65908.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-05",
      "TotalAmountPaid": 25139656.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-05",
      "TotalAmountPaid": 15685712.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 29788359.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2022-06",
      "TotalAmountPaid": 558018.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 606190.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAE",
      "MONTH": "2022-06",
      "TotalAmountPaid": 23010.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2022-06",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 122906.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 361700.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 702000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-06",
      "TotalAmountPaid": 2240.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-06",
      "TotalAmountPaid": 9653704.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-06",
      "TotalAmountPaid": 15498.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-06",
      "TotalAmountPaid": 14776772.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-06",
      "TotalAmountPaid": 9315591.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 21234537.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2022-07",
      "TotalAmountPaid": 369786.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 670888.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2022-07",
      "TotalAmountPaid": 23750.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 30800.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 747100.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 651000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-07",
      "TotalAmountPaid": 14960.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-07",
      "TotalAmountPaid": 10697285.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-07",
      "TotalAmountPaid": 110318.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-07",
      "TotalAmountPaid": 18754550.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-07",
      "TotalAmountPaid": 8617030.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 25859482.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2022-08",
      "TotalAmountPaid": 635680.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 802086.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2022-08",
      "TotalAmountPaid": 45000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 310450.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DJU",
      "MONTH": "2022-08",
      "TotalAmountPaid": 720.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 840600.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 614000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-08",
      "TotalAmountPaid": 7480.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-08",
      "TotalAmountPaid": 13726935.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-08",
      "TotalAmountPaid": 52205.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-08",
      "TotalAmountPaid": 26786447.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-08",
      "TotalAmountPaid": 5086655.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 39299827.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2022-09",
      "TotalAmountPaid": 120716.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 658420.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 56543.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 537000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 567000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 229068.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-09",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-09",
      "TotalAmountPaid": 8632196.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-09",
      "TotalAmountPaid": 34119.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-09",
      "TotalAmountPaid": 21451673.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-09",
      "TotalAmountPaid": 114534.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-09",
      "TotalAmountPaid": 9404621.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 24443615.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2022-10",
      "TotalAmountPaid": 334432.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 486333.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAG",
      "MONTH": "2022-10",
      "TotalAmountPaid": 6.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2022-10",
      "TotalAmountPaid": 9330.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 118300.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEG",
      "MONTH": "2022-10",
      "TotalAmountPaid": 252.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DJU",
      "MONTH": "2022-10",
      "TotalAmountPaid": 360.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 977300.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 686000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 100604.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-10",
      "TotalAmountPaid": 7680.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "RLG",
      "MONTH": "2022-10",
      "TotalAmountPaid": 18.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-10",
      "TotalAmountPaid": 10773920.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-10",
      "TotalAmountPaid": 52268.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-10",
      "TotalAmountPaid": 13367357.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-10",
      "TotalAmountPaid": 50302.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-10",
      "TotalAmountPaid": 3642182.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 22420813.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2022-11",
      "TotalAmountPaid": 166227.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 787835.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 202880.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-11",
      "TotalAmountPaid": 4000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2022-11",
      "TotalAmountPaid": 4500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 276500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 279300.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 665000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1640.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-11",
      "TotalAmountPaid": 9516292.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-11",
      "TotalAmountPaid": 13669.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-11",
      "TotalAmountPaid": 17172790.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-11",
      "TotalAmountPaid": 16288033.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 21842442.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2022-12",
      "TotalAmountPaid": 600365.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 755685.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 190760.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2022-12",
      "TotalAmountPaid": 56000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 318948.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 1257200.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 675000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-12",
      "TotalAmountPaid": 10480.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-12",
      "TotalAmountPaid": 15787654.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-12",
      "TotalAmountPaid": 98786.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 19984479.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-12",
      "TotalAmountPaid": 6428647.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 33882318.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2023-01",
      "TotalAmountPaid": 631763.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 615779.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1800.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2023-01",
      "TotalAmountPaid": 35500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 497413.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DLL",
      "MONTH": "2023-01",
      "TotalAmountPaid": 2500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 792100.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 652000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2023-01",
      "TotalAmountPaid": 8040.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-01",
      "TotalAmountPaid": 13088191.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-01",
      "TotalAmountPaid": 75697.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-01",
      "TotalAmountPaid": 18429775.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-01",
      "TotalAmountPaid": 5717885.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 27010672.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2023-02",
      "TotalAmountPaid": 206565.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 641845.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2023-02",
      "TotalAmountPaid": 81527.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 328485.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 330200.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 646000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2023-02",
      "TotalAmountPaid": 3280.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-02",
      "TotalAmountPaid": 9771470.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-02",
      "TotalAmountPaid": 32749.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-02",
      "TotalAmountPaid": 22870663.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-02",
      "TotalAmountPaid": 6716160.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 27211750.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2023-03",
      "TotalAmountPaid": 242547.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 673602.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 46824.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2023-03",
      "TotalAmountPaid": 28500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 596663.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1756770.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 675000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "ILC",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1731.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2023-03",
      "TotalAmountPaid": 9200.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-03",
      "TotalAmountPaid": 623.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-03",
      "TotalAmountPaid": 16941481.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-03",
      "TotalAmountPaid": 97091.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-03",
      "TotalAmountPaid": 20404622.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-03",
      "TotalAmountPaid": 8783461.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 25976745.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2023-04",
      "TotalAmountPaid": 437204.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 702189.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2023-04",
      "TotalAmountPaid": 21530.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 312375.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DJU",
      "MONTH": "2023-04",
      "TotalAmountPaid": 480.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 627200.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 780000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2023-04",
      "TotalAmountPaid": 5120.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-04",
      "TotalAmountPaid": 9645672.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-04",
      "TotalAmountPaid": 55657.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-04",
      "TotalAmountPaid": 19208615.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-04",
      "TotalAmountPaid": 10239618.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 25702611.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2023-05",
      "TotalAmountPaid": 229307.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 770991.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2023-05",
      "TotalAmountPaid": 29500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 146925.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 618200.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 706000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2023-05",
      "TotalAmountPaid": 7720.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-05",
      "TotalAmountPaid": 15784643.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-05",
      "TotalAmountPaid": 83110.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-05",
      "TotalAmountPaid": 25260272.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-05",
      "TotalAmountPaid": 7095718.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 33987252.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2023-06",
      "TotalAmountPaid": 146957.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 697329.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1900.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 741621.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 355500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 679000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2023-06",
      "TotalAmountPaid": 5160.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-06",
      "TotalAmountPaid": 10928953.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-06",
      "TotalAmountPaid": 57987.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-06",
      "TotalAmountPaid": 28498816.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-06",
      "TotalAmountPaid": 6344783.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 31456233.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2023-07",
      "TotalAmountPaid": 56687.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 800448.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2023-07",
      "TotalAmountPaid": 65920.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 138749.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 552100.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 646000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2023-07",
      "TotalAmountPaid": 28760.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-07",
      "TotalAmountPaid": 12129540.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-07",
      "TotalAmountPaid": 55506.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-07",
      "TotalAmountPaid": 29518533.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-07",
      "TotalAmountPaid": 9037660.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 33246614.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1617697.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 823852.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2023-08",
      "TotalAmountPaid": 500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 218392.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 718700.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 737000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2023-08",
      "TotalAmountPaid": 4600.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-08",
      "TotalAmountPaid": 12875187.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-08",
      "TotalAmountPaid": 56611.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-08",
      "TotalAmountPaid": 33550490.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-08",
      "TotalAmountPaid": 8478786.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 35485362.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1091413.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 571640.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2023-09",
      "TotalAmountPaid": 32500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 71157.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DBL",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1700.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 412000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 686000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2023-09",
      "TotalAmountPaid": 3560.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-09",
      "TotalAmountPaid": 9769437.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-09",
      "TotalAmountPaid": 36306.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-09",
      "TotalAmountPaid": 21420324.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-09",
      "TotalAmountPaid": 4414211.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 26495057.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2023-10",
      "TotalAmountPaid": 361429.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 909333.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAE",
      "MONTH": "2023-10",
      "TotalAmountPaid": 14880.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-10",
      "TotalAmountPaid": 2800.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2023-10",
      "TotalAmountPaid": 2500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 18000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 658420.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 822000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 138463.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2023-10",
      "TotalAmountPaid": 6760.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-10",
      "TotalAmountPaid": 9999365.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-10",
      "TotalAmountPaid": 68249.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-10",
      "TotalAmountPaid": 34325927.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-10",
      "TotalAmountPaid": 12143081.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TTT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 138463.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 35267485.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2023-11",
      "TotalAmountPaid": 767802.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AMT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1740000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 853509.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 192405.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 477183.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 567600.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 820000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 2763277.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2023-11",
      "TotalAmountPaid": 9840.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-11",
      "TotalAmountPaid": 2569.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-11",
      "TotalAmountPaid": 10466975.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-11",
      "TotalAmountPaid": 100627.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-11",
      "TotalAmountPaid": 40142177.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-11",
      "TotalAmountPaid": 423926.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-11",
      "TotalAmountPaid": 9574298.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TTT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 2412213.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 36118331.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2023-12",
      "TotalAmountPaid": 189368.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 691258.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 36342.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAE",
      "MONTH": "2023-12",
      "TotalAmountPaid": 16875.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-12",
      "TotalAmountPaid": 5500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2023-12",
      "TotalAmountPaid": 102000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 190936.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 755600.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 744000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2023-12",
      "TotalAmountPaid": 9160.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-12",
      "TotalAmountPaid": 485.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-12",
      "TotalAmountPaid": 10248461.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-12",
      "TotalAmountPaid": 108357.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-12",
      "TotalAmountPaid": 31454545.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-12",
      "TotalAmountPaid": 5756195.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 31750242.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-01",
      "TotalAmountPaid": 123797.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 796560.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAE",
      "MONTH": "2024-01",
      "TotalAmountPaid": 500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-01",
      "TotalAmountPaid": 63530.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 441231.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DPI",
      "MONTH": "2024-01",
      "TotalAmountPaid": 5700.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 988700.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 644000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 204199.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-01",
      "TotalAmountPaid": 14480.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-01",
      "TotalAmountPaid": 13189329.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-01",
      "TotalAmountPaid": 129728.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-01",
      "TotalAmountPaid": 26123149.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-01",
      "TotalAmountPaid": 6320454.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TTT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 204199.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 37103696.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-02",
      "TotalAmountPaid": 41242.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1146923.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 182669.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 327000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 661000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 282134.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-02",
      "TotalAmountPaid": 2360.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-02",
      "TotalAmountPaid": 15862725.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-02",
      "TotalAmountPaid": 34202.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-02",
      "TotalAmountPaid": 18295228.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-02",
      "TotalAmountPaid": 23710045.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TTT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 282134.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 31473268.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-03",
      "TotalAmountPaid": 457405.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 873712.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-03",
      "TotalAmountPaid": 52000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 288917.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DBL",
      "MONTH": "2024-03",
      "TotalAmountPaid": 350.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-03",
      "TotalAmountPaid": 14.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 983600.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 758000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 864863.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-03",
      "TotalAmountPaid": 16920.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-03",
      "TotalAmountPaid": 15315848.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-03",
      "TotalAmountPaid": 225720.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-03",
      "TotalAmountPaid": 22147870.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-03",
      "TotalAmountPaid": 11449673.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TTT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 864863.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 33662184.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-04",
      "TotalAmountPaid": 79898.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1146374.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-04",
      "TotalAmountPaid": 27000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 331686.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DJU",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 518800.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 783000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1010464.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-04",
      "TotalAmountPaid": 2840.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-04",
      "TotalAmountPaid": 10761020.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-04",
      "TotalAmountPaid": 38448.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-04",
      "TotalAmountPaid": 33654388.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-04",
      "TotalAmountPaid": 23397696.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TTT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1010464.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 32716699.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-05",
      "TotalAmountPaid": 281886.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1127588.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAE",
      "MONTH": "2024-05",
      "TotalAmountPaid": 500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 57188.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-05",
      "TotalAmountPaid": 168.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DJU",
      "MONTH": "2024-05",
      "TotalAmountPaid": 960.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 660200.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 756000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 377468.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-05",
      "TotalAmountPaid": 11966833.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-05",
      "TotalAmountPaid": 66594.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-05",
      "TotalAmountPaid": 52032277.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-05",
      "TotalAmountPaid": 14491472.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TTT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 558098.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 44859945.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-06",
      "TotalAmountPaid": 692301.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 914203.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAE",
      "MONTH": "2024-06",
      "TotalAmountPaid": 500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-06",
      "TotalAmountPaid": 45000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 97533.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1008.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 487800.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 823000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1415546.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-06",
      "TotalAmountPaid": 3800.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-06",
      "TotalAmountPaid": 464.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-06",
      "TotalAmountPaid": 12280257.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-06",
      "TotalAmountPaid": 47870.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-06",
      "TotalAmountPaid": 23108905.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-06",
      "TotalAmountPaid": 14129430.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TTT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1415546.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 32300457.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1564174.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 757541.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 30815.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAE",
      "MONTH": "2024-07",
      "TotalAmountPaid": 500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-07",
      "TotalAmountPaid": 44500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 274148.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DBL",
      "MONTH": "2024-07",
      "TotalAmountPaid": 600.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DPI",
      "MONTH": "2024-07",
      "TotalAmountPaid": 800.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 642100.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 841000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-07",
      "TotalAmountPaid": 7200.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-07",
      "TotalAmountPaid": 411.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-07",
      "TotalAmountPaid": 10663655.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-07",
      "TotalAmountPaid": 93937.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-07",
      "TotalAmountPaid": 21488576.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-07",
      "TotalAmountPaid": 8613273.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 31218642.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-08",
      "TotalAmountPaid": 326269.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 708210.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-08",
      "TotalAmountPaid": 11380.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 56340.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-08",
      "TotalAmountPaid": 70.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 538000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 762000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 162772.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-08",
      "TotalAmountPaid": 3560.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-08",
      "TotalAmountPaid": 205.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-08",
      "TotalAmountPaid": 9579413.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-08",
      "TotalAmountPaid": 50599.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-08",
      "TotalAmountPaid": 13319579.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-08",
      "TotalAmountPaid": 12993108.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TTT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 162772.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 21787392.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-09",
      "TotalAmountPaid": 196383.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 901192.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAE",
      "MONTH": "2024-09",
      "TotalAmountPaid": 14500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-09",
      "TotalAmountPaid": 4500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 113576.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DPI",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 311300.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 782000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-09",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-09",
      "TotalAmountPaid": 7062672.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-09",
      "TotalAmountPaid": 27582.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-09",
      "TotalAmountPaid": 11626836.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-09",
      "TotalAmountPaid": 18347627.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 25718346.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-10",
      "TotalAmountPaid": 420047.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 797304.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAE",
      "MONTH": "2024-10",
      "TotalAmountPaid": 500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-10",
      "TotalAmountPaid": 17000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 88701.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-10",
      "TotalAmountPaid": 224.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DPI",
      "MONTH": "2024-10",
      "TotalAmountPaid": 28000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 490100.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 891000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 170465.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 4000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-10",
      "TotalAmountPaid": 102.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-10",
      "TotalAmountPaid": 10135229.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-10",
      "TotalAmountPaid": 48244.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-10",
      "TotalAmountPaid": 22338138.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-10",
      "TotalAmountPaid": 12451550.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TTT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 170465.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 27742918.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-11",
      "TotalAmountPaid": 19829.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 644739.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAE",
      "MONTH": "2024-11",
      "TotalAmountPaid": 500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-11",
      "TotalAmountPaid": 41072.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 268125.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-11",
      "TotalAmountPaid": 42.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-11",
      "TotalAmountPaid": 392.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DJU",
      "MONTH": "2024-11",
      "TotalAmountPaid": 800.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 338800.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 687000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-11",
      "TotalAmountPaid": 5960.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-11",
      "TotalAmountPaid": 24.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-11",
      "TotalAmountPaid": 7932785.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-11",
      "TotalAmountPaid": 80048.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-11",
      "TotalAmountPaid": 18485755.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-11",
      "TotalAmountPaid": 9450484.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 23538139.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-12",
      "TotalAmountPaid": 41440.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 951853.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 274971.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-12",
      "TotalAmountPaid": 3000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 433725.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-12",
      "TotalAmountPaid": 938.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DJU",
      "MONTH": "2024-12",
      "TotalAmountPaid": 2120.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DPI",
      "MONTH": "2024-12",
      "TotalAmountPaid": 600.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 771300.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 867000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FJT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 60955.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-12",
      "TotalAmountPaid": 11320.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-12",
      "TotalAmountPaid": 4181.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-12",
      "TotalAmountPaid": 12386059.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-12",
      "TotalAmountPaid": 141592.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-12",
      "TotalAmountPaid": 21945056.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-12",
      "TotalAmountPaid": 14224806.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TTT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 60955.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 33935895.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2025-01",
      "TotalAmountPaid": 75386.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 879191.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2025-01",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 224477.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAV",
      "MONTH": "2025-01",
      "TotalAmountPaid": 200.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEG",
      "MONTH": "2025-01",
      "TotalAmountPaid": 98.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEM",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DJU",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 721500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 737000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2025-01",
      "TotalAmountPaid": 4080.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2025-01",
      "TotalAmountPaid": 48.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-01",
      "TotalAmountPaid": 8831564.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2025-01",
      "TotalAmountPaid": 58443.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-01",
      "TotalAmountPaid": 25454250.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-01",
      "TotalAmountPaid": 16323601.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 27332633.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "AIB",
      "MONTH": "2025-02",
      "TotalAmountPaid": 57797.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 878421.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAE",
      "MONTH": "2025-02",
      "TotalAmountPaid": 500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAP",
      "MONTH": "2025-02",
      "TotalAmountPaid": 5500.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DAT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 206137.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEG",
      "MONTH": "2025-02",
      "TotalAmountPaid": 84.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DEM",
      "MONTH": "2025-02",
      "TotalAmountPaid": 336.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DJU",
      "MONTH": "2025-02",
      "TotalAmountPaid": 240.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "DYA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 403400.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 727000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "PAL",
      "MONTH": "2025-02",
      "TotalAmountPaid": 4160.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2025-02",
      "TotalAmountPaid": 48.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-02",
      "TotalAmountPaid": 10702270.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2025-02",
      "TotalAmountPaid": 52080.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-02",
      "TotalAmountPaid": 31997001.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-02",
      "TotalAmountPaid": 13154533.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 31924391.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "CUA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 33721.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 61000.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-03",
      "TotalAmountPaid": 709435.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-03",
      "TotalAmountPaid": 899895.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-03",
      "TotalAmountPaid": 417953.0
    },
    {
      "CodeOffice": "DJAFR",
      "CodeTaxe": "TVA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 1324029.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2022-01",
      "TotalAmountPaid": 991331.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 1519746.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2022-01",
      "TotalAmountPaid": 403567550.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 3904000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2022-01",
      "TotalAmountPaid": 37997550.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2022-01",
      "TotalAmountPaid": 90731505.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2022-01",
      "TotalAmountPaid": 10788998.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 32623162.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-01",
      "TotalAmountPaid": 169681120.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 90488005.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2022-02",
      "TotalAmountPaid": 921218.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 1350076.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2022-02",
      "TotalAmountPaid": 369198120.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 3432000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2022-02",
      "TotalAmountPaid": 33749300.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2022-02",
      "TotalAmountPaid": 82534059.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2022-02",
      "TotalAmountPaid": 9870216.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 82284347.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-02",
      "TotalAmountPaid": 155258740.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 83029674.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1063171.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1660542.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2022-03",
      "TotalAmountPaid": 435606075.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 4326000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2022-03",
      "TotalAmountPaid": 41520700.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2022-03",
      "TotalAmountPaid": 98375124.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2022-03",
      "TotalAmountPaid": 11645429.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 78830056.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-03",
      "TotalAmountPaid": 183138352.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 97547957.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2022-04",
      "TotalAmountPaid": 830305.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 1216510.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2022-04",
      "TotalAmountPaid": 332722748.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 3615000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2022-04",
      "TotalAmountPaid": 30415000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2022-04",
      "TotalAmountPaid": 75803339.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2022-04",
      "TotalAmountPaid": 8894831.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 30701660.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-04",
      "TotalAmountPaid": 139898650.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 74815365.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2022-05",
      "TotalAmountPaid": 1096058.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 1693028.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2022-05",
      "TotalAmountPaid": 447270162.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 4273000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2022-05",
      "TotalAmountPaid": 42322450.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2022-05",
      "TotalAmountPaid": 100058883.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2022-05",
      "TotalAmountPaid": 11957307.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 40934249.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-05",
      "TotalAmountPaid": 188090780.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 100257260.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "AIB",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1292326.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2022-06",
      "TotalAmountPaid": 694158.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1066500.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2022-06",
      "TotalAmountPaid": 282737819.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 3299000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2022-06",
      "TotalAmountPaid": 26662580.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2022-06",
      "TotalAmountPaid": 66456248.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2022-06",
      "TotalAmountPaid": 7558504.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 26257530.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-06",
      "TotalAmountPaid": 118890588.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 63392728.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "AIB",
      "MONTH": "2022-07",
      "TotalAmountPaid": 2017117.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2022-07",
      "TotalAmountPaid": 893465.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 1338123.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2022-07",
      "TotalAmountPaid": 360717779.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 3297000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2022-07",
      "TotalAmountPaid": 33453220.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2022-07",
      "TotalAmountPaid": 80706115.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2022-07",
      "TotalAmountPaid": 9643486.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 32987120.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-07",
      "TotalAmountPaid": 151680722.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 81005985.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1073915.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1617786.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2022-08",
      "TotalAmountPaid": 434460646.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 4133000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2022-08",
      "TotalAmountPaid": 40419250.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2022-08",
      "TotalAmountPaid": 96856711.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2022-08",
      "TotalAmountPaid": 11607449.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 39725550.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-08",
      "TotalAmountPaid": 182689460.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 97531330.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "AIB",
      "MONTH": "2022-09",
      "TotalAmountPaid": 26832.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2022-09",
      "TotalAmountPaid": 987104.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 1507994.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2022-09",
      "TotalAmountPaid": 401264884.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 4103000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2022-09",
      "TotalAmountPaid": 37691550.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2022-09",
      "TotalAmountPaid": 90466867.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2022-09",
      "TotalAmountPaid": 10727301.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 37681239.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-09",
      "TotalAmountPaid": 168769055.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 90022221.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "AIB",
      "MONTH": "2022-10",
      "TotalAmountPaid": 3782123.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "AMT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 11700000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2022-10",
      "TotalAmountPaid": 883569.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 1352668.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2022-10",
      "TotalAmountPaid": 359439461.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 3502000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2022-10",
      "TotalAmountPaid": 33810710.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2022-10",
      "TotalAmountPaid": 81306327.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2022-10",
      "TotalAmountPaid": 9609240.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 32795115.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-10",
      "TotalAmountPaid": 151171065.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 80624335.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "AIB",
      "MONTH": "2022-11",
      "TotalAmountPaid": -1776.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "AMT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 300000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2022-11",
      "TotalAmountPaid": 909566.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1376796.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2022-11",
      "TotalAmountPaid": 368584315.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 4030000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2022-11",
      "TotalAmountPaid": 34419900.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2022-11",
      "TotalAmountPaid": 84900575.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2022-11",
      "TotalAmountPaid": 9853579.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 33774491.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-11",
      "TotalAmountPaid": 154988835.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 82718182.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2022-12",
      "TotalAmountPaid": 900315.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 1372888.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2022-12",
      "TotalAmountPaid": 365786066.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 3888000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2022-12",
      "TotalAmountPaid": 34307750.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2022-12",
      "TotalAmountPaid": 83821414.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2022-12",
      "TotalAmountPaid": 9774186.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 33401756.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 153806405.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 82049181.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1024777.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1551858.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2023-01",
      "TotalAmountPaid": 415317082.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 4404000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2023-01",
      "TotalAmountPaid": 38792450.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2023-01",
      "TotalAmountPaid": 95529443.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2023-01",
      "TotalAmountPaid": 11102888.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 38130438.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-01",
      "TotalAmountPaid": 174658205.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 93213872.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2023-02",
      "TotalAmountPaid": 949850.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 1435570.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2023-02",
      "TotalAmountPaid": 384706881.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 3716000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2023-02",
      "TotalAmountPaid": 35889250.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2023-02",
      "TotalAmountPaid": 86581182.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2023-02",
      "TotalAmountPaid": 10284717.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 35161906.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-02",
      "TotalAmountPaid": 161768200.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 86344676.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "AMT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 100000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2023-03",
      "TotalAmountPaid": 940933.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1421370.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2023-03",
      "TotalAmountPaid": 381019625.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 3969000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2023-03",
      "TotalAmountPaid": 35534250.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2023-03",
      "TotalAmountPaid": 86867071.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2023-03",
      "TotalAmountPaid": 10186037.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 34914947.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-03",
      "TotalAmountPaid": 160217770.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 85519664.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2023-04",
      "TotalAmountPaid": 973792.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 1465252.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2023-04",
      "TotalAmountPaid": 393781436.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 4051000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2023-04",
      "TotalAmountPaid": 36631300.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2023-04",
      "TotalAmountPaid": 89545319.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2023-04",
      "TotalAmountPaid": 10527230.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 36026675.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-04",
      "TotalAmountPaid": 165584015.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 88405430.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1021050.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1533014.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2023-05",
      "TotalAmountPaid": 412600078.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 4247000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2023-05",
      "TotalAmountPaid": 38325350.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2023-05",
      "TotalAmountPaid": 94520765.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2023-05",
      "TotalAmountPaid": 11030280.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 37745750.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-05",
      "TotalAmountPaid": 173497280.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 92643339.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2023-06",
      "TotalAmountPaid": 808406.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1226612.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2023-06",
      "TotalAmountPaid": 327844090.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 3501000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2023-06",
      "TotalAmountPaid": 30661500.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2023-06",
      "TotalAmountPaid": 75893832.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2023-06",
      "TotalAmountPaid": 8764416.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 29969050.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-06",
      "TotalAmountPaid": 137866370.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 73568814.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2023-07",
      "TotalAmountPaid": 1191364.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 1787482.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2023-07",
      "TotalAmountPaid": 481284994.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 4542000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2023-07",
      "TotalAmountPaid": 44687050.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2023-07",
      "TotalAmountPaid": 108671478.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2023-07",
      "TotalAmountPaid": 12866679.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 43995425.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-07",
      "TotalAmountPaid": 202378955.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 108069651.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1014544.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1529370.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2023-08",
      "TotalAmountPaid": 410513487.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 4141000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2023-08",
      "TotalAmountPaid": 38234250.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2023-08",
      "TotalAmountPaid": 94296204.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2023-08",
      "TotalAmountPaid": 10974527.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 37582765.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-08",
      "TotalAmountPaid": 172619830.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 92151179.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2023-09",
      "TotalAmountPaid": 860341.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1300342.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2023-09",
      "TotalAmountPaid": 348443546.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 3762000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2023-09",
      "TotalAmountPaid": 32508800.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2023-09",
      "TotalAmountPaid": 81539548.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2023-09",
      "TotalAmountPaid": 9315061.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 31899050.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-09",
      "TotalAmountPaid": 146518510.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 78204489.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "AMT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 869500.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1108725.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1664514.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2023-10",
      "TotalAmountPaid": 447990481.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 4376000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2023-10",
      "TotalAmountPaid": 41612850.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2023-10",
      "TotalAmountPaid": 102335870.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2023-10",
      "TotalAmountPaid": 11976553.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 41023240.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-10",
      "TotalAmountPaid": 188378740.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 100589631.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2023-11",
      "TotalAmountPaid": 976490.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1472394.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2023-11",
      "TotalAmountPaid": 375132609.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 3850000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2023-11",
      "TotalAmountPaid": 36809850.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2023-11",
      "TotalAmountPaid": 90710598.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2023-11",
      "TotalAmountPaid": 10564625.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 36138325.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-11",
      "TotalAmountPaid": 166169710.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 88706866.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1024299.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1554016.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2023-12",
      "TotalAmountPaid": 361784929.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 4064000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2023-12",
      "TotalAmountPaid": 38850400.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2023-12",
      "TotalAmountPaid": 95112538.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2023-12",
      "TotalAmountPaid": 11106285.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 37982152.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-12",
      "TotalAmountPaid": 174688910.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 93219418.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1004843.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1539952.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2024-01",
      "TotalAmountPaid": 363980956.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 4162000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2024-01",
      "TotalAmountPaid": 38498800.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2024-01",
      "TotalAmountPaid": 95568189.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2024-01",
      "TotalAmountPaid": 10932132.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 37380900.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-01",
      "TotalAmountPaid": 171952140.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 91699873.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2024-02",
      "TotalAmountPaid": 993088.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1515226.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2024-02",
      "TotalAmountPaid": 350551610.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 3868000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2024-02",
      "TotalAmountPaid": 37880650.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2024-02",
      "TotalAmountPaid": 91996529.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2024-02",
      "TotalAmountPaid": 10787903.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 36887400.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-02",
      "TotalAmountPaid": 169682040.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 90514534.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2024-03",
      "TotalAmountPaid": 885540.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1353054.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2024-03",
      "TotalAmountPaid": 318571792.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 3881000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2024-03",
      "TotalAmountPaid": 33830850.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2024-03",
      "TotalAmountPaid": 83676066.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2024-03",
      "TotalAmountPaid": 9624615.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 32910325.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-03",
      "TotalAmountPaid": 151366815.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 80736597.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1002995.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1510300.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2024-04",
      "TotalAmountPaid": 358826258.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 4104000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2024-04",
      "TotalAmountPaid": 37757500.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2024-04",
      "TotalAmountPaid": 94619257.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2024-04",
      "TotalAmountPaid": 10845340.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 37084225.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-04",
      "TotalAmountPaid": 170587435.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 91072315.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "AIB",
      "MONTH": "2024-05",
      "TotalAmountPaid": 4138419.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2024-05",
      "TotalAmountPaid": 631504.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 924539.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2024-05",
      "TotalAmountPaid": 239706444.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 3436000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2024-05",
      "TotalAmountPaid": 23132590.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2024-05",
      "TotalAmountPaid": 63911446.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2024-05",
      "TotalAmountPaid": 6764805.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 23132590.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-05",
      "TotalAmountPaid": 106322830.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 56859594.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "AIB",
      "MONTH": "2024-06",
      "TotalAmountPaid": 79075.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1096216.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1690020.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2024-06",
      "TotalAmountPaid": 390262371.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 4084000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2024-06",
      "TotalAmountPaid": 42250500.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2024-06",
      "TotalAmountPaid": 102160791.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2024-06",
      "TotalAmountPaid": 11951089.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 40864300.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-06",
      "TotalAmountPaid": 187975780.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 100207315.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1086781.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1640455.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2024-07",
      "TotalAmountPaid": 379652906.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 4030000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2024-07",
      "TotalAmountPaid": 41027603.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2024-07",
      "TotalAmountPaid": 99869962.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2024-07",
      "TotalAmountPaid": 11763233.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 40221978.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-07",
      "TotalAmountPaid": 184946650.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 98720934.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2024-08",
      "TotalAmountPaid": 964404.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1455882.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2024-08",
      "TotalAmountPaid": 341520548.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 3887000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2024-08",
      "TotalAmountPaid": 36556450.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2024-08",
      "TotalAmountPaid": 89818561.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2024-08",
      "TotalAmountPaid": 10455099.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 35749250.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-08",
      "TotalAmountPaid": 163714032.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 87365732.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1043533.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1528062.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2024-09",
      "TotalAmountPaid": 367038315.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 4214000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2024-09",
      "TotalAmountPaid": 38227150.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2024-09",
      "TotalAmountPaid": 97446291.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2024-09",
      "TotalAmountPaid": 11179617.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 38227150.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-09",
      "TotalAmountPaid": 175727245.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 93975874.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1058897.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1639940.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2024-10",
      "TotalAmountPaid": 381937402.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 4266000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2024-10",
      "TotalAmountPaid": 40998500.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2024-10",
      "TotalAmountPaid": 99941331.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2024-10",
      "TotalAmountPaid": 11562691.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 39536875.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-10",
      "TotalAmountPaid": 181869625.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 96924494.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "AMT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 249096.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1012923.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1529010.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2024-11",
      "TotalAmountPaid": 354822770.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 3822000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2024-11",
      "TotalAmountPaid": 38225250.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2024-11",
      "TotalAmountPaid": 93368179.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2024-11",
      "TotalAmountPaid": 10963187.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 37486375.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-11",
      "TotalAmountPaid": 172437325.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 92046518.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1118680.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1681294.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2024-12",
      "TotalAmountPaid": 398310353.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 4524000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2024-12",
      "TotalAmountPaid": 42032350.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2024-12",
      "TotalAmountPaid": 105058230.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2024-12",
      "TotalAmountPaid": 12088971.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 41336475.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-12",
      "TotalAmountPaid": 190147785.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 101527658.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "AMT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 3013200.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2025-01",
      "TotalAmountPaid": 1040177.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 1568910.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2025-01",
      "TotalAmountPaid": 366781593.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 3953000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2025-01",
      "TotalAmountPaid": 39222750.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2025-01",
      "TotalAmountPaid": 96579247.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2025-01",
      "TotalAmountPaid": 11254652.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 38483225.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-01",
      "TotalAmountPaid": 177022835.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 94498622.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2025-02",
      "TotalAmountPaid": 978447.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1481020.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2025-02",
      "TotalAmountPaid": 343318489.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 3683000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2025-02",
      "TotalAmountPaid": 37025500.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2025-02",
      "TotalAmountPaid": 90274626.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2025-02",
      "TotalAmountPaid": 10599115.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 36241600.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-02",
      "TotalAmountPaid": 166711360.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 88974018.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CCD",
      "MONTH": "2025-03",
      "TotalAmountPaid": 67271.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "CUA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 98572.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "DAK",
      "MONTH": "2025-03",
      "TotalAmountPaid": 26957941.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 418000.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "FJS",
      "MONTH": "2025-03",
      "TotalAmountPaid": 2464300.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "IGS",
      "MONTH": "2025-03",
      "TotalAmountPaid": 7207918.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "ISS",
      "MONTH": "2025-03",
      "TotalAmountPaid": 720625.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "PAT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 2464300.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-03",
      "TotalAmountPaid": 11335780.0
    },
    {
      "CodeOffice": "DJAKH",
      "CodeTaxe": "TVA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 6062178.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 8199.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 30100.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 20000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-01",
      "TotalAmountPaid": 348230.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-01",
      "TotalAmountPaid": 46345.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-01",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-01",
      "TotalAmountPaid": 17312.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 431847.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 11694.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 49000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 29000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-02",
      "TotalAmountPaid": 444950.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-02",
      "TotalAmountPaid": 321577.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 666317.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 18228.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 35640.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 19250.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 43000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-03",
      "TotalAmountPaid": 408878.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-03",
      "TotalAmountPaid": 743334.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-03",
      "TotalAmountPaid": 30589.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 994159.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 14490.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 46000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-04",
      "TotalAmountPaid": 537361.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-04",
      "TotalAmountPaid": 330185.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-04",
      "TotalAmountPaid": 35053.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 767672.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 20792.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 44000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-05",
      "TotalAmountPaid": 585100.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-05",
      "TotalAmountPaid": 958434.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-05",
      "TotalAmountPaid": 16800.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 1173164.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 13254.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 23100.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 43000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-06",
      "TotalAmountPaid": 427648.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-06",
      "TotalAmountPaid": 455475.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-06",
      "TotalAmountPaid": 29764.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 716300.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 14704.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 47370.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 21000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 34000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-07",
      "TotalAmountPaid": 326850.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-07",
      "TotalAmountPaid": 888892.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-07",
      "TotalAmountPaid": 17600.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 841735.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 11704.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 21600.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 117460.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 32000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-08",
      "TotalAmountPaid": 473580.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-08",
      "TotalAmountPaid": 200387.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-08",
      "TotalAmountPaid": 19690.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 642007.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 11680.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 14400.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 70074.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 43000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "RFE",
      "MONTH": "2022-09",
      "TotalAmountPaid": 50.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-09",
      "TotalAmountPaid": 276200.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-09",
      "TotalAmountPaid": 708291.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 691048.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 9368.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 10500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 26000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-10",
      "TotalAmountPaid": 230740.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-10",
      "TotalAmountPaid": 455308.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-10",
      "TotalAmountPaid": 31860.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 498353.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 9488.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 19950.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 31000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-11",
      "TotalAmountPaid": 332000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-11",
      "TotalAmountPaid": 192597.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-11",
      "TotalAmountPaid": 7160.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 519990.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 11330.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 31000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-12",
      "TotalAmountPaid": 428287.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 218011.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-12",
      "TotalAmountPaid": 34800.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 587703.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 11933.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 96500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 33000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-01",
      "TotalAmountPaid": 432818.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-01",
      "TotalAmountPaid": 377021.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 687373.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 9460.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 365250.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 28000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-02",
      "TotalAmountPaid": 354616.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-02",
      "TotalAmountPaid": 272501.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 572331.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 14315.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 66000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 41000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-03",
      "TotalAmountPaid": 367415.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-03",
      "TotalAmountPaid": 736701.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-03",
      "TotalAmountPaid": 12080.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 817831.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 13924.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 210000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 36000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-04",
      "TotalAmountPaid": 379900.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-04",
      "TotalAmountPaid": 727536.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 827963.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 10693.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 173625.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 29000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-05",
      "TotalAmountPaid": 76300.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1054405.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 665168.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 16267.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 43000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-06",
      "TotalAmountPaid": 635795.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-06",
      "TotalAmountPaid": 408559.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 917865.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 12580.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAP",
      "MONTH": "2023-07",
      "TotalAmountPaid": 10.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 26655.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 51000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-07",
      "TotalAmountPaid": 379086.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-07",
      "TotalAmountPaid": 455613.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 715311.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2023-08",
      "TotalAmountPaid": 3690.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 11310.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 37500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 71250.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 50000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-08",
      "TotalAmountPaid": 500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-08",
      "TotalAmountPaid": 196750.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-08",
      "TotalAmountPaid": 761194.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 672280.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 14861.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 38250.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 42000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-09",
      "TotalAmountPaid": 296000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-09",
      "TotalAmountPaid": 768576.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-09",
      "TotalAmountPaid": 63372.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 774146.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2023-10",
      "TotalAmountPaid": 17820.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 16047.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 42000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 64000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-10",
      "TotalAmountPaid": 538600.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-10",
      "TotalAmountPaid": 515041.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 911994.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2023-11",
      "TotalAmountPaid": 169721.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 14579.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAE",
      "MONTH": "2023-11",
      "TotalAmountPaid": 500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 12375.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 47000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-11",
      "TotalAmountPaid": 471500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-11",
      "TotalAmountPaid": 592397.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 836742.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2023-12",
      "TotalAmountPaid": 191836.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 17786.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 103500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 57000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-12",
      "TotalAmountPaid": 470014.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-12",
      "TotalAmountPaid": 893136.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-12",
      "TotalAmountPaid": 24800.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1004998.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2024-01",
      "TotalAmountPaid": 295915.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 18325.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 30900.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 60000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-01",
      "TotalAmountPaid": 412.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-01",
      "TotalAmountPaid": 390886.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-01",
      "TotalAmountPaid": 908246.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-01",
      "TotalAmountPaid": 12800.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1033476.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2024-02",
      "TotalAmountPaid": 96121.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 20004.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 80250.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 50000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-02",
      "TotalAmountPaid": 539800.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-02",
      "TotalAmountPaid": 903677.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1152576.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2024-03",
      "TotalAmountPaid": 94825.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 21001.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 43500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 25500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 54000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-03",
      "TotalAmountPaid": 580.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-03",
      "TotalAmountPaid": 588600.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-03",
      "TotalAmountPaid": 609028.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-03",
      "TotalAmountPaid": 63360.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1124594.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2024-04",
      "TotalAmountPaid": 21060.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 22665.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAP",
      "MONTH": "2024-04",
      "TotalAmountPaid": 500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 24000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 57000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-04",
      "TotalAmountPaid": 513000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-04",
      "TotalAmountPaid": 876981.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-04",
      "TotalAmountPaid": 50400.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1211744.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2024-05",
      "TotalAmountPaid": 18700.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 22697.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 5250.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 42000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 66000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-05",
      "TotalAmountPaid": 70.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-05",
      "TotalAmountPaid": 509850.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1324763.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-05",
      "TotalAmountPaid": 24360.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1292717.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2024-06",
      "TotalAmountPaid": 83273.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 19382.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 12000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 58125.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 63000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-06",
      "TotalAmountPaid": 160.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-06",
      "TotalAmountPaid": 339500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1103195.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-06",
      "TotalAmountPaid": 64771.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1039432.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2024-07",
      "TotalAmountPaid": 237700.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 21271.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 123000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 68000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-07",
      "TotalAmountPaid": 571531.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-07",
      "TotalAmountPaid": 959754.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-07",
      "TotalAmountPaid": 13800.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1211842.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2024-08",
      "TotalAmountPaid": 77000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 15672.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 122250.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 54000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-08",
      "TotalAmountPaid": 324200.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-08",
      "TotalAmountPaid": 888934.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-08",
      "TotalAmountPaid": 58400.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 844231.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2024-09",
      "TotalAmountPaid": 61500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 21466.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 33000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 164250.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 58000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-09",
      "TotalAmountPaid": 440.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-09",
      "TotalAmountPaid": 306800.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-09",
      "TotalAmountPaid": 901416.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-09",
      "TotalAmountPaid": 259440.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 889566.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 26443.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 28500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 37125.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 65000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-10",
      "TotalAmountPaid": 380.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-10",
      "TotalAmountPaid": 566300.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1079689.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-10",
      "TotalAmountPaid": 151552.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1303949.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 18734.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 13500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 30000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 49000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-11",
      "TotalAmountPaid": 180.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-11",
      "TotalAmountPaid": 409200.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-11",
      "TotalAmountPaid": 785475.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-11",
      "TotalAmountPaid": 96000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 940528.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2024-12",
      "TotalAmountPaid": 159830.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 18143.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 21600.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 55000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-12",
      "TotalAmountPaid": 288.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-12",
      "TotalAmountPaid": 383730.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1081135.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-12",
      "TotalAmountPaid": 42800.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1002434.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2025-01",
      "TotalAmountPaid": 366300.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 19641.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 13125.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 66300.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 54000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "RFSH",
      "MONTH": "2025-01",
      "TotalAmountPaid": 170.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-01",
      "TotalAmountPaid": 521260.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-01",
      "TotalAmountPaid": 863005.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-01",
      "TotalAmountPaid": 68600.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 1042848.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "AIB",
      "MONTH": "2025-02",
      "TotalAmountPaid": 256315.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 16858.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAP",
      "MONTH": "2025-02",
      "TotalAmountPaid": 500.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "DAT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 114750.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 45000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-02",
      "TotalAmountPaid": 388550.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1045266.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 997919.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "CUA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 1067.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 7000.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-03",
      "TotalAmountPaid": 39700.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-03",
      "TotalAmountPaid": 31395.0
    },
    {
      "CodeOffice": "DJBAP",
      "CodeTaxe": "TVA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 60459.0
    },
    {
      "CodeOffice": "DJCAE",
      "CodeTaxe": "PAT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCAE",
      "CodeTaxe": "AMD",
      "MONTH": "2022-09",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCAE",
      "CodeTaxe": "AMD",
      "MONTH": "2022-12",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCAE",
      "CodeTaxe": "PAT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJCAE",
      "CodeTaxe": "TIC",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCAE",
      "CodeTaxe": "TIC",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCAE",
      "CodeTaxe": "PAT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCAE",
      "CodeTaxe": "PAT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCAE",
      "CodeTaxe": "RBS",
      "MONTH": "2025-02",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "ALS",
      "MONTH": "2022-01",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "ALS",
      "MONTH": "2022-02",
      "TotalAmountPaid": 15000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 15000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "ALS",
      "MONTH": "2022-04",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2022-04",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "ALS",
      "MONTH": "2022-06",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2022-06",
      "TotalAmountPaid": -35000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 30000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2022-07",
      "TotalAmountPaid": -65000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2022-08",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "ALS",
      "MONTH": "2022-09",
      "TotalAmountPaid": 25000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2022-09",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2022-10",
      "TotalAmountPaid": -15000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2022-12",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2023-01",
      "TotalAmountPaid": -15000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2023-04",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2023-05",
      "TotalAmountPaid": -2000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2023-06",
      "TotalAmountPaid": -40000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "ALS",
      "MONTH": "2023-07",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2023-07",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2023-08",
      "TotalAmountPaid": -20000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2023-09",
      "TotalAmountPaid": -65000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2023-10",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2023-11",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2023-12",
      "TotalAmountPaid": -60000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2024-01",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2024-06",
      "TotalAmountPaid": -15000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2024-07",
      "TotalAmountPaid": -35000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2024-08",
      "TotalAmountPaid": -15000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2024-09",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2024-11",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2024-12",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2025-01",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "DAA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCDF",
      "CodeTaxe": "AMD",
      "MONTH": "2025-02",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2022-01",
      "TotalAmountPaid": -25000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2022-03",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2022-04",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-04",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2022-06",
      "TotalAmountPaid": -30000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2022-07",
      "TotalAmountPaid": -40000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2022-08",
      "TotalAmountPaid": -80000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2022-09",
      "TotalAmountPaid": -45000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2022-10",
      "TotalAmountPaid": -80000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2022-11",
      "TotalAmountPaid": -25000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2022-12",
      "TotalAmountPaid": -35000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2023-01",
      "TotalAmountPaid": -30000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2023-02",
      "TotalAmountPaid": -110000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2023-03",
      "TotalAmountPaid": -12000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2023-05",
      "TotalAmountPaid": -25000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2023-06",
      "TotalAmountPaid": -15000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2023-07",
      "TotalAmountPaid": -55000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2023-08",
      "TotalAmountPaid": -55000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2023-09",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2023-10",
      "TotalAmountPaid": -45000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2023-11",
      "TotalAmountPaid": -65000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2023-12",
      "TotalAmountPaid": -35000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2024-01",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2024-02",
      "TotalAmountPaid": -25000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2024-03",
      "TotalAmountPaid": -25000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2024-05",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2024-06",
      "TotalAmountPaid": -35000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2024-07",
      "TotalAmountPaid": -30000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2024-08",
      "TotalAmountPaid": -35000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-09",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2024-09",
      "TotalAmountPaid": -50000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2024-10",
      "TotalAmountPaid": -116000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2024-11",
      "TotalAmountPaid": -15000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2024-12",
      "TotalAmountPaid": -55000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2025-01",
      "TotalAmountPaid": -65000.0
    },
    {
      "CodeOffice": "DJCFZ",
      "CodeTaxe": "AMD",
      "MONTH": "2025-02",
      "TotalAmountPaid": -30000.0
    },
    {
      "CodeOffice": "DJCGA",
      "CodeTaxe": "AMD",
      "MONTH": "2022-03",
      "TotalAmountPaid": -20000.0
    },
    {
      "CodeOffice": "DJCPS",
      "CodeTaxe": "AMD",
      "MONTH": "2022-07",
      "TotalAmountPaid": -60000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2022-01",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "CBU",
      "MONTH": "2022-01",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2022-03",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2022-04",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "DAP",
      "MONTH": "2022-04",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2022-05",
      "TotalAmountPaid": -15000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2022-06",
      "TotalAmountPaid": -25000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "DAA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 25000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2022-09",
      "TotalAmountPaid": -35000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2022-11",
      "TotalAmountPaid": -15000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "CBU",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2022-12",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2023-01",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2023-02",
      "TotalAmountPaid": -320000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2023-02",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "CBU",
      "MONTH": "2023-03",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2023-03",
      "TotalAmountPaid": 3000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2023-04",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 17000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2023-06",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2023-08",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 26000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 100000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 32000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2023-10",
      "TotalAmountPaid": 6000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 157000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2023-11",
      "TotalAmountPaid": 4000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 70000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 15000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2024-01",
      "TotalAmountPaid": 3000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2024-02",
      "TotalAmountPaid": 4000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 15000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 20000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2024-04",
      "TotalAmountPaid": 3000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2024-05",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "DAA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 75000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 87000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "AMD",
      "MONTH": "2024-06",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 34000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 15000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2024-06",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2024-07",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 7000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2024-08",
      "TotalAmountPaid": 4000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 25000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-11",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2024-11",
      "TotalAmountPaid": 3000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 17000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-12",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 36000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAL",
      "MONTH": "2025-01",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 22000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "PAL",
      "MONTH": "2025-02",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "TIC",
      "MONTH": "2025-02",
      "TotalAmountPaid": 3000.0
    },
    {
      "CodeOffice": "DJCPT",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJCQB",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2022-01",
      "TotalAmountPaid": -20000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2022-03",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2022-07",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2022-09",
      "TotalAmountPaid": -20000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2022-10",
      "TotalAmountPaid": -45000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "PAT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2023-01",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2023-02",
      "TotalAmountPaid": -70000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2023-03",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 25000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2023-04",
      "TotalAmountPaid": -15000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2023-05",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2023-06",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2023-07",
      "TotalAmountPaid": -15000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2023-09",
      "TotalAmountPaid": -80000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2023-10",
      "TotalAmountPaid": -50000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2023-11",
      "TotalAmountPaid": -45000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 20000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2023-12",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2024-01",
      "TotalAmountPaid": -45000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2024-04",
      "TotalAmountPaid": -25000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2024-05",
      "TotalAmountPaid": -65000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 15000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2024-06",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2024-07",
      "TotalAmountPaid": -55000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2024-08",
      "TotalAmountPaid": -35000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2024-09",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 20000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2024-10",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "PAT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2024-11",
      "TotalAmountPaid": -80000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2024-12",
      "TotalAmountPaid": -24000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2025-01",
      "TotalAmountPaid": -15000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2025-02",
      "TotalAmountPaid": -50000.0
    },
    {
      "CodeOffice": "DJCTR",
      "CodeTaxe": "AMD",
      "MONTH": "2025-03",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2022-01",
      "TotalAmountPaid": 18745812.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 4686651.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DBL",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 525000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 56368657.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2022-02",
      "TotalAmountPaid": 13118722.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 9317509.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 491000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 28596816.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2022-03",
      "TotalAmountPaid": 11663273.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 5033503.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 738000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "PLA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 123462909.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2022-04",
      "TotalAmountPaid": 5017650.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 3347508.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAG",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2022-04",
      "TotalAmountPaid": 33664575.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 531000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RLG",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 35069516.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2022-05",
      "TotalAmountPaid": 15250109.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 7029657.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAP",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2022-05",
      "TotalAmountPaid": 4463909.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 545000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 24964271.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 2179064.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2022-06",
      "TotalAmountPaid": 8689138.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 5936451.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2022-06",
      "TotalAmountPaid": 20161180.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 587000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 17277137.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2022-07",
      "TotalAmountPaid": 4344963.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 5512804.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAP",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2022-07",
      "TotalAmountPaid": 6865799.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 642000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 16401327.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 3578810.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2022-08",
      "TotalAmountPaid": 7622953.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 5997006.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 728000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "PLA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 25133746.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2022-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2022-09",
      "TotalAmountPaid": 7297774.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 5054400.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAG",
      "MONTH": "2022-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2022-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2022-09",
      "TotalAmountPaid": 9517882.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 516000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RLG",
      "MONTH": "2022-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2022-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 22353611.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 6602679.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2022-10",
      "TotalAmountPaid": 5176271.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 4583473.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2022-10",
      "TotalAmountPaid": 3556920.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 587000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 40252040.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 668820.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2022-11",
      "TotalAmountPaid": 6514593.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 4978186.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 582000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "PLA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 30996386.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2022-12",
      "TotalAmountPaid": 4016024.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 4550087.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2022-12",
      "TotalAmountPaid": 19520.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 530000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "PLA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 47256088.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2023-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2023-01",
      "TotalAmountPaid": 13646479.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 4144659.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2023-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2023-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2023-01",
      "TotalAmountPaid": -19520.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 565000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2023-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 86712909.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 700000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2023-02",
      "TotalAmountPaid": 13861152.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 3310125.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 494000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "PLA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 19423466.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2023-03",
      "TotalAmountPaid": 10006319.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 2754045.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 593000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 24471171.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 200000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2023-04",
      "TotalAmountPaid": 3201965.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 3949066.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 526000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 61453423.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1846040.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1915351.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 3189770.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2023-05",
      "TotalAmountPaid": 793194.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 537000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 23196937.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2023-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1106739.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2023-06",
      "TotalAmountPaid": 9590853.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 2800448.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2023-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2023-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2023-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2023-06",
      "TotalAmountPaid": 778311.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 470000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 25821792.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 78810.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2023-07",
      "TotalAmountPaid": 219999517.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 12414319.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2023-07",
      "TotalAmountPaid": 6560.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 657000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 33779434.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 2488150.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2023-08",
      "TotalAmountPaid": 11422748.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 2931864.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 708000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "PLA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 53835463.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 100000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2023-09",
      "TotalAmountPaid": 28134992.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 4421719.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2023-09",
      "TotalAmountPaid": 3960.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 571000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "PLA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 45469431.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2023-10",
      "TotalAmountPaid": 230942159.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 12275782.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 689000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 45925686.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2023-11",
      "TotalAmountPaid": 7857758.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 5126613.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAP",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAV",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2023-11",
      "TotalAmountPaid": 13144934.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 617000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 80326044.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2023-12",
      "TotalAmountPaid": 14491119.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 2797264.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2023-12",
      "TotalAmountPaid": 721582.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 508000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 37707083.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 250000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2024-01",
      "TotalAmountPaid": 4127554.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 4173018.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 546000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 35968346.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2024-02",
      "TotalAmountPaid": 6351899.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1949191.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 467000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 18597794.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2024-03",
      "TotalAmountPaid": 21437904.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 2444671.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAS",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DPI",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 479000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RLS",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 37247735.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2024-04",
      "TotalAmountPaid": 10844896.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 3071063.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 545000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 95948115.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2024-05",
      "TotalAmountPaid": 13739348.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 4637348.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2024-05",
      "TotalAmountPaid": 2797142.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 599000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 84236244.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2024-06",
      "TotalAmountPaid": 15887110.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 2561351.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 493000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 37049465.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2024-07",
      "TotalAmountPaid": 23722753.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 3836711.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 548000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "PLA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 63318561.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 3717915.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2024-08",
      "TotalAmountPaid": 11544714.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 2196037.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 661000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 32227070.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 92300.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2024-09",
      "TotalAmountPaid": 5536008.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 2344293.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAG",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAP",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FBE",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 650000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RLG",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 42291914.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 100000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2024-10",
      "TotalAmountPaid": 8236688.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 2669417.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 643000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "PLA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 64791044.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 25000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2024-11",
      "TotalAmountPaid": 7285318.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 3283819.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 557000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 35989225.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 3000000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2024-12",
      "TotalAmountPaid": 5121977.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 2082367.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 714000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 27891190.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2025-01",
      "TotalAmountPaid": 19936016.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2694025.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAS",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 538000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RLS",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 37439965.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1762289.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2025-02",
      "TotalAmountPaid": 189956472.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CSE",
      "MONTH": "2025-02",
      "TotalAmountPaid": 5260.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 9299207.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAG",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEG",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DEM",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DJU",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DLL",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DYA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 564000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "PLA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RFSH",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "RLG",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC2",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC20",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC30",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC5",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 21259083.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AIB",
      "MONTH": "2025-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "AMT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 467289.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CBU",
      "MONTH": "2025-03",
      "TotalAmountPaid": 190000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "CUA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 151493.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAL",
      "MONTH": "2025-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "DAT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 41000.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJEXO",
      "CodeTaxe": "TVA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 903020.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-01",
      "TotalAmountPaid": 103636.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-01",
      "TotalAmountPaid": 148578.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 1660259.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 26132647.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2022-01",
      "TotalAmountPaid": 4000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2022-01",
      "TotalAmountPaid": 98270.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 5051662.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DBL",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2022-01",
      "TotalAmountPaid": 503274.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2022-01",
      "TotalAmountPaid": 345744.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2022-01",
      "TotalAmountPaid": 1374104.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLL",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-01",
      "TotalAmountPaid": 12135000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 1855000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 148578.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-01",
      "TotalAmountPaid": 24528562.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-01",
      "TotalAmountPaid": 75353823.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-01",
      "TotalAmountPaid": 107269.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-01",
      "TotalAmountPaid": 174000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 85155686.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-02",
      "TotalAmountPaid": 760622.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMD",
      "MONTH": "2022-02",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 890340.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-02",
      "TotalAmountPaid": 407407.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 780544.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 29116734.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2022-02",
      "TotalAmountPaid": 500.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 17456139.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DBL",
      "MONTH": "2022-02",
      "TotalAmountPaid": 20000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2022-02",
      "TotalAmountPaid": 513217.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2022-02",
      "TotalAmountPaid": 763080.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-02",
      "TotalAmountPaid": 3537000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 1499000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 10642744.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-02",
      "TotalAmountPaid": 13943579.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-02",
      "TotalAmountPaid": 39939530.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-02",
      "TotalAmountPaid": 1431040.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 15353006.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 45829321.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-03",
      "TotalAmountPaid": 551201.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-03",
      "TotalAmountPaid": 537575.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1857576.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 32828467.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAE",
      "MONTH": "2022-03",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2022-03",
      "TotalAmountPaid": 20800.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2022-03",
      "TotalAmountPaid": 27800.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 24598802.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2022-03",
      "TotalAmountPaid": 526020.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2022-03",
      "TotalAmountPaid": 316071.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1958916.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-03",
      "TotalAmountPaid": 6809400.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1862000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 12066150.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-03",
      "TotalAmountPaid": 32433308.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-03",
      "TotalAmountPaid": 68819688.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1815187.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 17292861.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 89419893.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-04",
      "TotalAmountPaid": 51706.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 1312008.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 16488619.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAE",
      "MONTH": "2022-04",
      "TotalAmountPaid": 210000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2022-04",
      "TotalAmountPaid": 78000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 25722683.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2022-04",
      "TotalAmountPaid": 450683.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2022-04",
      "TotalAmountPaid": 497019.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2022-04",
      "TotalAmountPaid": 656160.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-04",
      "TotalAmountPaid": 3139500.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 1808000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 4091758.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PLA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 118800.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-04",
      "TotalAmountPaid": 24608997.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-04",
      "TotalAmountPaid": 6230.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-04",
      "TotalAmountPaid": 52957863.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-04",
      "TotalAmountPaid": 37184.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 6137636.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 66379926.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-05",
      "TotalAmountPaid": 566181.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-05",
      "TotalAmountPaid": 630126.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 1090060.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 27708779.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2022-05",
      "TotalAmountPaid": 242800.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 32279356.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-05",
      "TotalAmountPaid": 2928400.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 2004000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 4067146.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PLA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 204000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-05",
      "TotalAmountPaid": 24710147.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-05",
      "TotalAmountPaid": 48627424.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-05",
      "TotalAmountPaid": 737396.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 5155528.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 65275879.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-06",
      "TotalAmountPaid": 855487.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-06",
      "TotalAmountPaid": 374776.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1481802.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 26492869.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAE",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1020000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1089.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 15630825.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2022-06",
      "TotalAmountPaid": 430995.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2022-06",
      "TotalAmountPaid": 345744.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2022-06",
      "TotalAmountPaid": 2016846.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-06",
      "TotalAmountPaid": 6441908.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 2196000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 2288732.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PAL",
      "MONTH": "2022-06",
      "TotalAmountPaid": 228.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PLA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 600.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-06",
      "TotalAmountPaid": 25527892.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-06",
      "TotalAmountPaid": 2478.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-06",
      "TotalAmountPaid": 44338214.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 2870933.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 77282932.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-07",
      "TotalAmountPaid": 182240.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-07",
      "TotalAmountPaid": 353841.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 1361160.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 15113805.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2022-07",
      "TotalAmountPaid": 96095.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 12163620.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DBL",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2022-07",
      "TotalAmountPaid": 221625.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2022-07",
      "TotalAmountPaid": 103840.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-07",
      "TotalAmountPaid": 3894000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 2244000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 3300156.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PLA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 24300.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-07",
      "TotalAmountPaid": 22933194.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-07",
      "TotalAmountPaid": 48983701.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 4419473.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 63610809.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-08",
      "TotalAmountPaid": 282859.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-08",
      "TotalAmountPaid": 295713.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1400405.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 31066999.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2022-08",
      "TotalAmountPaid": 100800.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 13296080.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2022-08",
      "TotalAmountPaid": 134386.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1139656.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1915592.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1695500.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 2454000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 4391442.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-08",
      "TotalAmountPaid": 27024818.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-08",
      "TotalAmountPaid": 41536641.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-08",
      "TotalAmountPaid": 206006.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 6143594.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 72210522.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-09",
      "TotalAmountPaid": 660084.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 6112890.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-09",
      "TotalAmountPaid": 171838.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 1954792.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 21851213.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2022-09",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 13449373.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2022-09",
      "TotalAmountPaid": 326575.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2022-09",
      "TotalAmountPaid": 131040.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2022-09",
      "TotalAmountPaid": 782256.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-09",
      "TotalAmountPaid": 3237100.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 2176000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 3200144.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PAL",
      "MONTH": "2022-09",
      "TotalAmountPaid": 136720.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PLA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 15000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-09",
      "TotalAmountPaid": 22285898.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-09",
      "TotalAmountPaid": 57001.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-09",
      "TotalAmountPaid": 39814974.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-09",
      "TotalAmountPaid": 1135122.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 4542457.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 62495683.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-10",
      "TotalAmountPaid": 1047493.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-10",
      "TotalAmountPaid": 244173.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 1880641.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 12887353.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2022-10",
      "TotalAmountPaid": 106700.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2022-10",
      "TotalAmountPaid": 25554.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 31441042.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2022-10",
      "TotalAmountPaid": 386083.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2022-10",
      "TotalAmountPaid": 2044116.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-10",
      "TotalAmountPaid": 4092000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 2449000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 5412476.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PAL",
      "MONTH": "2022-10",
      "TotalAmountPaid": 200600.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-10",
      "TotalAmountPaid": 33858928.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-10",
      "TotalAmountPaid": 188700.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-10",
      "TotalAmountPaid": 67596598.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-10",
      "TotalAmountPaid": 3403927.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 7752455.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 89465062.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVU",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-11",
      "TotalAmountPaid": 116994.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 24776114.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-11",
      "TotalAmountPaid": 507516.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1189097.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 28381578.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAE",
      "MONTH": "2022-11",
      "TotalAmountPaid": 551000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2022-11",
      "TotalAmountPaid": 74600.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2022-11",
      "TotalAmountPaid": 9505.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 13528420.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2022-11",
      "TotalAmountPaid": 14784.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2022-11",
      "TotalAmountPaid": 584332.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2022-11",
      "TotalAmountPaid": 687052.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 2372000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 5090470.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-11",
      "TotalAmountPaid": 21325964.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-11",
      "TotalAmountPaid": 38543232.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-11",
      "TotalAmountPaid": 345319.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 6874432.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 56781259.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2022-12",
      "TotalAmountPaid": 755343.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 234246.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2022-12",
      "TotalAmountPaid": 284674.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 1640858.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 24409502.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAE",
      "MONTH": "2022-12",
      "TotalAmountPaid": 210000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2022-12",
      "TotalAmountPaid": 800.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2022-12",
      "TotalAmountPaid": 100500.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 17961730.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2022-12",
      "TotalAmountPaid": 502623.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2022-12",
      "TotalAmountPaid": 119952.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2022-12",
      "TotalAmountPaid": 2629396.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DPI",
      "MONTH": "2022-12",
      "TotalAmountPaid": 44400.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 2152000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 5374694.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PLA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 60000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-12",
      "TotalAmountPaid": 22705684.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 42662929.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-12",
      "TotalAmountPaid": 957275.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 7635029.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 66232488.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-01",
      "TotalAmountPaid": 119335.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1005878.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-01",
      "TotalAmountPaid": 313609.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1827765.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 16211706.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 19386359.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2023-01",
      "TotalAmountPaid": 375984.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2023-01",
      "TotalAmountPaid": 301588.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2023-01",
      "TotalAmountPaid": 23333.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-01",
      "TotalAmountPaid": 7263000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DPI",
      "MONTH": "2023-01",
      "TotalAmountPaid": 25000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 2189000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 7148625.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-01",
      "TotalAmountPaid": 31256534.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-01",
      "TotalAmountPaid": 52353639.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-01",
      "TotalAmountPaid": 3034779.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 10252524.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 88547658.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-02",
      "TotalAmountPaid": 481983.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 45085.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-02",
      "TotalAmountPaid": 365205.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 1029231.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 30340620.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAE",
      "MONTH": "2023-02",
      "TotalAmountPaid": 54240.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-02",
      "TotalAmountPaid": 3900.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-02",
      "TotalAmountPaid": 38700.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 19847491.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2023-02",
      "TotalAmountPaid": 184275.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2023-02",
      "TotalAmountPaid": 560196.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-02",
      "TotalAmountPaid": 11469000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DPI",
      "MONTH": "2023-02",
      "TotalAmountPaid": 16800.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 1850000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 4822788.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-02",
      "TotalAmountPaid": 300279.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-02",
      "TotalAmountPaid": 17913696.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-02",
      "TotalAmountPaid": 47235374.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-02",
      "TotalAmountPaid": 370525.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 6686375.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 63401280.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-03",
      "TotalAmountPaid": 69700.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 936940.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-03",
      "TotalAmountPaid": 381416.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1327545.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 16347005.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-03",
      "TotalAmountPaid": 65410.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 20425011.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2023-03",
      "TotalAmountPaid": 14635.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2023-03",
      "TotalAmountPaid": 281736.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1402732.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1815000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1788000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 6909423.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PLA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 14400.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-03",
      "TotalAmountPaid": 219025.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-03",
      "TotalAmountPaid": 24026001.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-03",
      "TotalAmountPaid": 2384.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-03",
      "TotalAmountPaid": 48995883.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-03",
      "TotalAmountPaid": 3707473.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 9792012.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 68821525.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVU",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-04",
      "TotalAmountPaid": 610336.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 1485343.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 20162691.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-04",
      "TotalAmountPaid": 2380.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 26646940.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2023-04",
      "TotalAmountPaid": 81018.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2023-04",
      "TotalAmountPaid": 88116.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-04",
      "TotalAmountPaid": 1250800.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DPI",
      "MONTH": "2023-04",
      "TotalAmountPaid": 48000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 1866000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 3232950.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-04",
      "TotalAmountPaid": 275970.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-04",
      "TotalAmountPaid": 25385581.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-04",
      "TotalAmountPaid": 39565501.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-04",
      "TotalAmountPaid": 2002112.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 4849425.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 82096502.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-05",
      "TotalAmountPaid": 538724.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 497865.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-05",
      "TotalAmountPaid": 313200.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1165991.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 20817046.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 57698025.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2023-05",
      "TotalAmountPaid": 590940.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2023-05",
      "TotalAmountPaid": 680240.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 2148000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 5558805.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-05",
      "TotalAmountPaid": 277948.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-05",
      "TotalAmountPaid": 19569376.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-05",
      "TotalAmountPaid": 38654317.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-05",
      "TotalAmountPaid": 6327584.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 7868409.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 65374015.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-06",
      "TotalAmountPaid": 201908.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 100000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-06",
      "TotalAmountPaid": 364189.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1569375.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 23910027.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 18100543.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2023-06",
      "TotalAmountPaid": 207622.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2023-06",
      "TotalAmountPaid": 411096.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1347940.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-06",
      "TotalAmountPaid": 2510500.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1820000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 9387435.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PLA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 9000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-06",
      "TotalAmountPaid": 330919.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-06",
      "TotalAmountPaid": 19568434.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-06",
      "TotalAmountPaid": 46599642.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-06",
      "TotalAmountPaid": 5018895.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTB",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1484584.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 11307994.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 82071905.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-07",
      "TotalAmountPaid": 1292335.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-07",
      "TotalAmountPaid": 445060.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 1502591.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 17773589.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2023-07",
      "TotalAmountPaid": 61700.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 21543735.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2023-07",
      "TotalAmountPaid": 227856.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2023-07",
      "TotalAmountPaid": 538888.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2023-07",
      "TotalAmountPaid": 687052.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-07",
      "TotalAmountPaid": 295700.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 2081000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 10802340.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-07",
      "TotalAmountPaid": 248920.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-07",
      "TotalAmountPaid": 26263804.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC2",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-07",
      "TotalAmountPaid": 274600.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-07",
      "TotalAmountPaid": 35951549.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-07",
      "TotalAmountPaid": 2500768.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTB",
      "MONTH": "2023-07",
      "TotalAmountPaid": 409875.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 14921106.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 73445065.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-08",
      "TotalAmountPaid": 201326.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 723940.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1359268.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 23180700.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-08",
      "TotalAmountPaid": 17578.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 30213175.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2023-08",
      "TotalAmountPaid": 109267.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2023-08",
      "TotalAmountPaid": 137592.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1227812.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-08",
      "TotalAmountPaid": 7131000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1911000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 5653110.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-08",
      "TotalAmountPaid": 317664.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-08",
      "TotalAmountPaid": 23127373.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-08",
      "TotalAmountPaid": 770144.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-08",
      "TotalAmountPaid": 71074724.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-08",
      "TotalAmountPaid": 356204.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTB",
      "MONTH": "2023-08",
      "TotalAmountPaid": 409828.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 7864923.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 81995201.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1169581.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-09",
      "TotalAmountPaid": 169125.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1240191.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 15047664.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 11701639.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2023-09",
      "TotalAmountPaid": 217070.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2023-09",
      "TotalAmountPaid": 465192.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1726000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 6663170.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-09",
      "TotalAmountPaid": 218761.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-09",
      "TotalAmountPaid": 18692290.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-09",
      "TotalAmountPaid": 33207631.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-09",
      "TotalAmountPaid": 3298987.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTB",
      "MONTH": "2023-09",
      "TotalAmountPaid": 409828.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 9126326.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 61836174.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-10",
      "TotalAmountPaid": 172280.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 683832.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-10",
      "TotalAmountPaid": 153029.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1382651.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 38472441.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-10",
      "TotalAmountPaid": 35700.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 33444304.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2023-10",
      "TotalAmountPaid": 249060.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2023-10",
      "TotalAmountPaid": 557037.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1376032.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-10",
      "TotalAmountPaid": 2987520.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1894000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 5478043.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PAL",
      "MONTH": "2023-10",
      "TotalAmountPaid": 43520.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PLA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 9600.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-10",
      "TotalAmountPaid": 526601.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-10",
      "TotalAmountPaid": 24975548.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-10",
      "TotalAmountPaid": 28012.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-10",
      "TotalAmountPaid": 57992276.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-10",
      "TotalAmountPaid": 4288940.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 7987521.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 75187599.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVU",
      "MONTH": "2023-10",
      "TotalAmountPaid": 342000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-11",
      "TotalAmountPaid": 40414.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 2300000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-11",
      "TotalAmountPaid": 406014.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1473304.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 25776949.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 24528767.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2023-11",
      "TotalAmountPaid": 21953.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2023-11",
      "TotalAmountPaid": 345744.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1367756.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1513800.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 2024000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 13383546.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-11",
      "TotalAmountPaid": 345518.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-11",
      "TotalAmountPaid": 27049613.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-11",
      "TotalAmountPaid": 56735110.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-11",
      "TotalAmountPaid": 3817640.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTB",
      "MONTH": "2023-11",
      "TotalAmountPaid": 432403.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 18817693.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 76887921.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2023-12",
      "TotalAmountPaid": 348583.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 100000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2023-12",
      "TotalAmountPaid": 490327.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1862217.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 34567258.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2023-12",
      "TotalAmountPaid": 7000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 21737921.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2023-12",
      "TotalAmountPaid": 2058.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-12",
      "TotalAmountPaid": 5445000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 2040000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 5586875.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-12",
      "TotalAmountPaid": 461974.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-12",
      "TotalAmountPaid": 26618701.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC2",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-12",
      "TotalAmountPaid": 73614739.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-12",
      "TotalAmountPaid": 2216454.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 7644822.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 89441209.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 16794136.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-01",
      "TotalAmountPaid": 136568.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1996163.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 25990773.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 17018884.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2024-01",
      "TotalAmountPaid": 604217.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-01",
      "TotalAmountPaid": 657244.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2024-01",
      "TotalAmountPaid": 539520.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-01",
      "TotalAmountPaid": 8820000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1709000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1111282.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-01",
      "TotalAmountPaid": 381918.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-01",
      "TotalAmountPaid": 26695096.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-01",
      "TotalAmountPaid": 67755559.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-01",
      "TotalAmountPaid": 3016480.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1462071.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 92167829.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 756695.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-02",
      "TotalAmountPaid": 158578.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1626959.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 20366738.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 14243918.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2024-02",
      "TotalAmountPaid": 57204.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-02",
      "TotalAmountPaid": 98784.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-02",
      "TotalAmountPaid": 18181500.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1423000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 6039108.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-02",
      "TotalAmountPaid": 276132.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-02",
      "TotalAmountPaid": 23017485.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-02",
      "TotalAmountPaid": 65788908.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-02",
      "TotalAmountPaid": 3477872.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 8820796.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 81359325.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 987686.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1920742.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 13451667.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-03",
      "TotalAmountPaid": 6600.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2024-03",
      "TotalAmountPaid": 680.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 19712353.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2024-03",
      "TotalAmountPaid": 126000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-03",
      "TotalAmountPaid": 301392.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2024-03",
      "TotalAmountPaid": 40.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-03",
      "TotalAmountPaid": 7260000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1600000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 6954903.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PLA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 9000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-03",
      "TotalAmountPaid": 182825.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-03",
      "TotalAmountPaid": 23917024.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-03",
      "TotalAmountPaid": 49614536.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-03",
      "TotalAmountPaid": 8115588.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTB",
      "MONTH": "2024-03",
      "TotalAmountPaid": 131744.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 10234737.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 79550432.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-04",
      "TotalAmountPaid": 12779.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-04",
      "TotalAmountPaid": 414814.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1433941.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 19108993.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2024-04",
      "TotalAmountPaid": 10500.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 13130160.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2024-04",
      "TotalAmountPaid": 203441.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-04",
      "TotalAmountPaid": 410256.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1378424.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-04",
      "TotalAmountPaid": 6195360.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1674000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 8151636.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-04",
      "TotalAmountPaid": 270153.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-04",
      "TotalAmountPaid": 24046801.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-04",
      "TotalAmountPaid": 58352205.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 11605233.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 72740947.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1496498.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 614724.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-05",
      "TotalAmountPaid": 521704.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1401054.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 31566013.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 301300.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 19587053.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2024-05",
      "TotalAmountPaid": 23950.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-05",
      "TotalAmountPaid": 123480.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2024-05",
      "TotalAmountPaid": 20160.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-05",
      "TotalAmountPaid": 3719040.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1883000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 2183074.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PAL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 400.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-05",
      "TotalAmountPaid": 423006.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-05",
      "TotalAmountPaid": 21980950.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-05",
      "TotalAmountPaid": 918.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-05",
      "TotalAmountPaid": 54367698.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-05",
      "TotalAmountPaid": 520.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 2492055.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 74570400.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 161120.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1524525.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 32684503.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-06",
      "TotalAmountPaid": 83200.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2024-06",
      "TotalAmountPaid": 12495.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 24655545.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2024-06",
      "TotalAmountPaid": 26706.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-06",
      "TotalAmountPaid": 669345.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1964026.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-06",
      "TotalAmountPaid": 8941500.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1640000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 7910177.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-06",
      "TotalAmountPaid": 437792.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-06",
      "TotalAmountPaid": 20256229.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-06",
      "TotalAmountPaid": 66945927.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1616478.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 11865265.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 82937384.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVU",
      "MONTH": "2024-06",
      "TotalAmountPaid": 150000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-07",
      "TotalAmountPaid": 400950.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1251548.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-07",
      "TotalAmountPaid": 27722.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1686918.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 16800646.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-07",
      "TotalAmountPaid": 3300.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAP",
      "MONTH": "2024-07",
      "TotalAmountPaid": 150.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 14458646.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2024-07",
      "TotalAmountPaid": 845392.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-07",
      "TotalAmountPaid": 461664.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2024-07",
      "TotalAmountPaid": 674782.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-07",
      "TotalAmountPaid": 7296000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1850000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 2131884.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-07",
      "TotalAmountPaid": 289645.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-07",
      "TotalAmountPaid": 17449944.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-07",
      "TotalAmountPaid": 446743.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-07",
      "TotalAmountPaid": 55715728.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-07",
      "TotalAmountPaid": 20571152.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 2928704.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 77576968.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-08",
      "TotalAmountPaid": 52307.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 100000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-08",
      "TotalAmountPaid": 583906.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1659846.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 32157841.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 9476476.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2024-08",
      "TotalAmountPaid": 70560.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-08",
      "TotalAmountPaid": 271264.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2024-08",
      "TotalAmountPaid": 650880.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-08",
      "TotalAmountPaid": 3956820.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1697000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 7630288.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-08",
      "TotalAmountPaid": 433949.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-08",
      "TotalAmountPaid": 22819753.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-08",
      "TotalAmountPaid": 47691801.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1967250.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 10331348.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 73635181.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVU",
      "MONTH": "2024-08",
      "TotalAmountPaid": 654000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 200000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1943929.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 20047523.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 7104402.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2024-09",
      "TotalAmountPaid": 151368.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-09",
      "TotalAmountPaid": 7840.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2024-09",
      "TotalAmountPaid": 686678.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-09",
      "TotalAmountPaid": 6831000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1826000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 6540407.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PLA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 30000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-09",
      "TotalAmountPaid": 273581.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-09",
      "TotalAmountPaid": 30956832.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-09",
      "TotalAmountPaid": 20000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-09",
      "TotalAmountPaid": 57308502.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-09",
      "TotalAmountPaid": 286150.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTB",
      "MONTH": "2024-09",
      "TotalAmountPaid": 482795.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 9086417.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 96258351.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-10",
      "TotalAmountPaid": 24873.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 915068.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 2234820.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 37153508.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 683074.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 15340254.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2024-10",
      "TotalAmountPaid": 553775.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-10",
      "TotalAmountPaid": 74074.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2024-10",
      "TotalAmountPaid": 2748208.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-10",
      "TotalAmountPaid": 15415500.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1704000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 2859238.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-10",
      "TotalAmountPaid": 531745.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-10",
      "TotalAmountPaid": 39546390.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-10",
      "TotalAmountPaid": 84452180.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-10",
      "TotalAmountPaid": 589310.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 4048138.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 117362594.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AIB",
      "MONTH": "2024-11",
      "TotalAmountPaid": 26583.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 147980.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2024-11",
      "TotalAmountPaid": 566071.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1091008.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 23199763.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 14955948.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2024-11",
      "TotalAmountPaid": 302924.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEM",
      "MONTH": "2024-11",
      "TotalAmountPaid": 133560.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1361000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 7653611.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "PLA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 6810.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-11",
      "TotalAmountPaid": 334948.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-11",
      "TotalAmountPaid": 14992323.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-11",
      "TotalAmountPaid": 24505451.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-11",
      "TotalAmountPaid": 52000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 10631308.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 45401617.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "AMT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 100000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 446180.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 11620133.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 4741107.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DEG",
      "MONTH": "2024-12",
      "TotalAmountPaid": 231840.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2024-12",
      "TotalAmountPaid": 668649.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-12",
      "TotalAmountPaid": 3630000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1326000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 3659130.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-12",
      "TotalAmountPaid": 172401.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-12",
      "TotalAmountPaid": 3475157.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-12",
      "TotalAmountPaid": 11242721.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 5488694.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 20043429.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "CUA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 73623.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DAA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 275245.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "DJU",
      "MONTH": "2025-01",
      "TotalAmountPaid": 656380.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 1282000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "RFSH",
      "MONTH": "2025-01",
      "TotalAmountPaid": 3668.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2173138.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-01",
      "TotalAmountPaid": 1015392.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 4093824.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "ATB",
      "MONTH": "2025-02",
      "TotalAmountPaid": 560189.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1252000.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FJT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 560189.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TTT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "TVU",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJFRZ",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 136000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 975241.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 258000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-01",
      "TotalAmountPaid": 126500.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-01",
      "TotalAmountPaid": 38672500.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 417650.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 898611.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 243000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-02",
      "TotalAmountPaid": 115000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-02",
      "TotalAmountPaid": 35349770.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 711500.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1022007.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 264000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-03",
      "TotalAmountPaid": 126500.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-03",
      "TotalAmountPaid": 40157385.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 892650.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 700081.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 191000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-04",
      "TotalAmountPaid": 27694780.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 400000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 876566.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 232000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-05",
      "TotalAmountPaid": 34449885.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 775000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 70406.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 36000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-06",
      "TotalAmountPaid": 253000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-06",
      "TotalAmountPaid": 2192602.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 710300.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "AIB",
      "MONTH": "2022-07",
      "TotalAmountPaid": 100000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 504424.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 127000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-07",
      "TotalAmountPaid": 19856815.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 375000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 851935.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 181000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-08",
      "TotalAmountPaid": 34093825.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 881588.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 194000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-09",
      "TotalAmountPaid": 271766.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-09",
      "TotalAmountPaid": 35097880.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 245336.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 1068892.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 242000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-10",
      "TotalAmountPaid": 42618635.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 150000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1025248.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 244000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-11",
      "TotalAmountPaid": 586681.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-11",
      "TotalAmountPaid": 338005.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-11",
      "TotalAmountPaid": 40009770.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1351108.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 1030295.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 240000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 115000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-12",
      "TotalAmountPaid": 40731670.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 628850.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1078965.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 266000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1048268.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-01",
      "TotalAmountPaid": 41899795.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1721094.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 894918.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 227000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-02",
      "TotalAmountPaid": 35309375.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 600000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1016457.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 258000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-03",
      "TotalAmountPaid": 40185545.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 600000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 947509.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 256000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-04",
      "TotalAmountPaid": 36732810.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 675000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 822239.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 241000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-05",
      "TotalAmountPaid": 31895355.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1250000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 765288.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 226000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-06",
      "TotalAmountPaid": 29598255.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1275000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 976468.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 247000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-07",
      "TotalAmountPaid": 38483690.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 725000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 893732.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 219000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-08",
      "TotalAmountPaid": 35287345.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 575000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 759692.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 168000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-09",
      "TotalAmountPaid": 30455455.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 75000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1095098.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 288000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-10",
      "TotalAmountPaid": 42967100.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1058222.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 947594.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 248000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-11",
      "TotalAmountPaid": 37228155.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 850000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1018869.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 272000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-12",
      "TotalAmountPaid": 39998200.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 951100.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1013613.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 284000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-01",
      "TotalAmountPaid": 39288845.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1575000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 969398.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 276000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-02",
      "TotalAmountPaid": 37336890.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1800000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1247432.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 330000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-03",
      "TotalAmountPaid": 49065930.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1050000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1041467.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 284000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-04",
      "TotalAmountPaid": 40687465.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1225000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1058554.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 271000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-05",
      "TotalAmountPaid": 41528430.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1025000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-06",
      "TotalAmountPaid": 81800.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1009539.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 241000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-06",
      "TotalAmountPaid": 14500.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-06",
      "TotalAmountPaid": 40128055.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 265950.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-07",
      "TotalAmountPaid": 63874.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 953287.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 223000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-07",
      "TotalAmountPaid": 37826035.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 375000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 965110.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 240000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-08",
      "TotalAmountPaid": 37926705.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 851663.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 958696.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 248000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-09",
      "TotalAmountPaid": 2800.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-09",
      "TotalAmountPaid": 37644930.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 883669.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1101721.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 328000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-10",
      "TotalAmountPaid": 540252.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-10",
      "TotalAmountPaid": 41588800.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 3160060.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1158335.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 348000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-11",
      "TotalAmountPaid": 422734.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-11",
      "TotalAmountPaid": 43702710.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 3330928.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1222419.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 389000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-12",
      "TotalAmountPaid": 46943360.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 2450557.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 1116267.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 372000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-01",
      "TotalAmountPaid": 6300.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-01",
      "TotalAmountPaid": 6476.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-01",
      "TotalAmountPaid": 42761440.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2363122.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1113517.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 360000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-02",
      "TotalAmountPaid": 3600.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-02",
      "TotalAmountPaid": 42835755.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 2144784.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "CUA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 215123.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 82000.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-03",
      "TotalAmountPaid": 7950735.0
    },
    {
      "CodeOffice": "DJGAR",
      "CodeTaxe": "TVA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 818870.0
    },
    {
      "CodeOffice": "DJPKV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPKV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJPKV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJPKV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPKV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPKV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPKV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2022-01",
      "TotalAmountPaid": 17730185.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 15270669.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 6458769.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 18331811.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2022-01",
      "TotalAmountPaid": 400190.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2022-01",
      "TotalAmountPaid": 225000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2022-01",
      "TotalAmountPaid": 204780.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DBL",
      "MONTH": "2022-01",
      "TotalAmountPaid": 1568.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2022-01",
      "TotalAmountPaid": 1509242.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2022-01",
      "TotalAmountPaid": 897288.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2022-01",
      "TotalAmountPaid": 443360.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-01",
      "TotalAmountPaid": 28711500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2022-01",
      "TotalAmountPaid": 3710100.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 781000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2022-01",
      "TotalAmountPaid": 130880.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 1209300.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2022-01",
      "TotalAmountPaid": 75965779.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2022-01",
      "TotalAmountPaid": 275000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-01",
      "TotalAmountPaid": 107976366.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC2",
      "MONTH": "2022-01",
      "TotalAmountPaid": 152000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-01",
      "TotalAmountPaid": 824501.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-01",
      "TotalAmountPaid": 197236289.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-01",
      "TotalAmountPaid": 4211945.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-01",
      "TotalAmountPaid": 11673774.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 332415864.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2022-02",
      "TotalAmountPaid": 1859654.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMD",
      "MONTH": "2022-02",
      "TotalAmountPaid": -5000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 4969746.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 16868537.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2022-02",
      "TotalAmountPaid": 747600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2022-02",
      "TotalAmountPaid": 3000000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2022-02",
      "TotalAmountPaid": 941760.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 7026583.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2022-02",
      "TotalAmountPaid": 1197378.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2022-02",
      "TotalAmountPaid": 1484028.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2022-02",
      "TotalAmountPaid": 200080.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-02",
      "TotalAmountPaid": 26981500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2022-02",
      "TotalAmountPaid": 900000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 187200.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 569000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FJT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 386656.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2022-02",
      "TotalAmountPaid": 350120.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 684102.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2022-02",
      "TotalAmountPaid": 230250.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC",
      "MONTH": "2022-02",
      "TotalAmountPaid": 28250.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-02",
      "TotalAmountPaid": 87128830.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-02",
      "TotalAmountPaid": 3982978.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-02",
      "TotalAmountPaid": 201216456.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-02",
      "TotalAmountPaid": 10810069.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TTB",
      "MONTH": "2022-02",
      "TotalAmountPaid": 386656.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 265044780.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2022-03",
      "TotalAmountPaid": 6330372.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 6228260.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 39420881.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2022-03",
      "TotalAmountPaid": 814500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2022-03",
      "TotalAmountPaid": 2754300.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1275080.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 22500087.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1718164.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2022-03",
      "TotalAmountPaid": 2680818.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2022-03",
      "TotalAmountPaid": 988000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-03",
      "TotalAmountPaid": 2089450.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2022-03",
      "TotalAmountPaid": 325000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 89100.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 840000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2022-03",
      "TotalAmountPaid": 620536.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1406700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-03",
      "TotalAmountPaid": 134603489.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-03",
      "TotalAmountPaid": 2605290.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-03",
      "TotalAmountPaid": 185107616.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-03",
      "TotalAmountPaid": 26340509.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 314776244.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2022-04",
      "TotalAmountPaid": 5268992.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 7511526.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 4091348.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2022-04",
      "TotalAmountPaid": 648900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2022-04",
      "TotalAmountPaid": 5815900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2022-04",
      "TotalAmountPaid": 1504334.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2022-04",
      "TotalAmountPaid": 601958.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2022-04",
      "TotalAmountPaid": 426608.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2022-04",
      "TotalAmountPaid": 119480.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-04",
      "TotalAmountPaid": 35674500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2022-04",
      "TotalAmountPaid": 25000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 28400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 875000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2022-04",
      "TotalAmountPaid": 4182760.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2022-04",
      "TotalAmountPaid": 107381085.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2022-04",
      "TotalAmountPaid": 237750.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-04",
      "TotalAmountPaid": 152060290.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-04",
      "TotalAmountPaid": 10728835.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-04",
      "TotalAmountPaid": 185858819.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-04",
      "TotalAmountPaid": 27816283.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 376690569.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2022-05",
      "TotalAmountPaid": 3039228.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 6963415.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 12937168.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2022-05",
      "TotalAmountPaid": 205500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2022-05",
      "TotalAmountPaid": 1505885.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2022-05",
      "TotalAmountPaid": 335800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2022-05",
      "TotalAmountPaid": 1551522.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2022-05",
      "TotalAmountPaid": 2408588.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2022-05",
      "TotalAmountPaid": 1156520.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-05",
      "TotalAmountPaid": 18868500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 74100.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 788000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2022-05",
      "TotalAmountPaid": 9101640.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 354000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2022-05",
      "TotalAmountPaid": 227000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-05",
      "TotalAmountPaid": 129772810.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-05",
      "TotalAmountPaid": 10079326.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-05",
      "TotalAmountPaid": 214547881.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-05",
      "TotalAmountPaid": 22168811.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 356810116.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2022-06",
      "TotalAmountPaid": 7839002.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 6324195.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 24474156.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1209600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2022-06",
      "TotalAmountPaid": 443640.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2022-06",
      "TotalAmountPaid": 88746.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2022-06",
      "TotalAmountPaid": 771596.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2022-06",
      "TotalAmountPaid": 348960.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-06",
      "TotalAmountPaid": 47956500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1482500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 23400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 789000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2022-06",
      "TotalAmountPaid": 182520.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2022-06",
      "TotalAmountPaid": 219450.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-06",
      "TotalAmountPaid": 127813120.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-06",
      "TotalAmountPaid": 3122284.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-06",
      "TotalAmountPaid": 169913157.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-06",
      "TotalAmountPaid": 25737772.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 305846650.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2022-07",
      "TotalAmountPaid": 6057263.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 2254611.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 7326822.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 23194855.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2022-07",
      "TotalAmountPaid": 518500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2022-07",
      "TotalAmountPaid": 2847500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2022-07",
      "TotalAmountPaid": 723000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAW",
      "MONTH": "2022-07",
      "TotalAmountPaid": 10800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2022-07",
      "TotalAmountPaid": 1400672.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2022-07",
      "TotalAmountPaid": 2796388.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2022-07",
      "TotalAmountPaid": 406640.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2022-07",
      "TotalAmountPaid": 1000000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 174600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 833000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2022-07",
      "TotalAmountPaid": 717120.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 1208700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2022-07",
      "TotalAmountPaid": 76622309.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2022-07",
      "TotalAmountPaid": 225000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-07",
      "TotalAmountPaid": 158477305.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-07",
      "TotalAmountPaid": 6273028.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-07",
      "TotalAmountPaid": 183353222.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-07",
      "TotalAmountPaid": 22185592.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 377577100.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1255029.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 2514831.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 6840779.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 6595567.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1043000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2022-08",
      "TotalAmountPaid": 4416801.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2022-08",
      "TotalAmountPaid": 796260.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1026228.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2022-08",
      "TotalAmountPaid": 2639644.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1281760.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-08",
      "TotalAmountPaid": 35397000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2022-08",
      "TotalAmountPaid": 2337500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 63000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 774000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2022-08",
      "TotalAmountPaid": 791275.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1225200.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-08",
      "TotalAmountPaid": 114125451.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-08",
      "TotalAmountPaid": 9231956.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-08",
      "TotalAmountPaid": 197360876.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-08",
      "TotalAmountPaid": 52500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-08",
      "TotalAmountPaid": 20757514.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 347960417.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2022-09",
      "TotalAmountPaid": 4746292.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 3688000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 5571788.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 25994789.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2022-09",
      "TotalAmountPaid": 550500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2022-09",
      "TotalAmountPaid": 362020.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2022-09",
      "TotalAmountPaid": 546700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAW",
      "MONTH": "2022-09",
      "TotalAmountPaid": 1080.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2022-09",
      "TotalAmountPaid": 1642130.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2022-09",
      "TotalAmountPaid": 658896.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2022-09",
      "TotalAmountPaid": 446760.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-09",
      "TotalAmountPaid": 8493000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2022-09",
      "TotalAmountPaid": 1800000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 149700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 668000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2022-09",
      "TotalAmountPaid": 502120.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 1150500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2022-09",
      "TotalAmountPaid": 130312857.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2022-09",
      "TotalAmountPaid": 589250.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-09",
      "TotalAmountPaid": 98835637.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-09",
      "TotalAmountPaid": 1892909.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-09",
      "TotalAmountPaid": 210044286.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-09",
      "TotalAmountPaid": 15044762.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 287898741.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2022-10",
      "TotalAmountPaid": 1151979.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 229201.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 6283872.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 11563811.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2022-10",
      "TotalAmountPaid": 32100.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2022-10",
      "TotalAmountPaid": 1418850.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2022-10",
      "TotalAmountPaid": 209300.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2022-10",
      "TotalAmountPaid": 1612114.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2022-10",
      "TotalAmountPaid": 1031590.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2022-10",
      "TotalAmountPaid": 831200.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-10",
      "TotalAmountPaid": 52664500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2022-10",
      "TotalAmountPaid": 5725000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 74100.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 745000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2022-10",
      "TotalAmountPaid": 769336.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 740700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2022-10",
      "TotalAmountPaid": 224750.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-10",
      "TotalAmountPaid": 110710486.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-10",
      "TotalAmountPaid": 3046447.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-10",
      "TotalAmountPaid": 237580426.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-10",
      "TotalAmountPaid": 14395053.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 342587772.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2022-11",
      "TotalAmountPaid": 917553.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 5772024.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 19209958.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2022-11",
      "TotalAmountPaid": 2055500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2022-11",
      "TotalAmountPaid": 2354000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2022-11",
      "TotalAmountPaid": 262800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAW",
      "MONTH": "2022-11",
      "TotalAmountPaid": 43560.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1687308.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2022-11",
      "TotalAmountPaid": 344316.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2022-11",
      "TotalAmountPaid": 985000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-11",
      "TotalAmountPaid": 11165400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2022-11",
      "TotalAmountPaid": 2413000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 81900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 699000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2022-11",
      "TotalAmountPaid": 127672.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 684900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2022-11",
      "TotalAmountPaid": 85959799.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2022-11",
      "TotalAmountPaid": 226650.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-11",
      "TotalAmountPaid": 102197671.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-11",
      "TotalAmountPaid": 592634.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-11",
      "TotalAmountPaid": 176889601.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-11",
      "TotalAmountPaid": 19584739.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 297376232.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2022-12",
      "TotalAmountPaid": 127346.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 286072.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 7998034.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 24689658.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2022-12",
      "TotalAmountPaid": 4306230.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2022-12",
      "TotalAmountPaid": 283160.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 14892499.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2022-12",
      "TotalAmountPaid": 1029042.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2022-12",
      "TotalAmountPaid": 175378.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2022-12",
      "TotalAmountPaid": 483320.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-12",
      "TotalAmountPaid": 25027500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2022-12",
      "TotalAmountPaid": 375000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 120900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 773000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FJT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 137249.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2022-12",
      "TotalAmountPaid": 142800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 234300.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2022-12",
      "TotalAmountPaid": 55887601.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2022-12",
      "TotalAmountPaid": 219050.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-12",
      "TotalAmountPaid": 109126325.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-12",
      "TotalAmountPaid": 2256965.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 260586779.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-12",
      "TotalAmountPaid": 17990744.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TTT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 205873.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 401198893.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2023-01",
      "TotalAmountPaid": 4255070.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1500000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 7423119.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 6008079.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1004844.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2023-01",
      "TotalAmountPaid": 108600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2023-01",
      "TotalAmountPaid": 555620.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 16446031.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1867117.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2023-01",
      "TotalAmountPaid": 2635780.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2023-01",
      "TotalAmountPaid": 956440.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-01",
      "TotalAmountPaid": 14578500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2023-01",
      "TotalAmountPaid": 450000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 78000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 933000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FJT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1312836.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2023-01",
      "TotalAmountPaid": 378282.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1742100.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2023-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-01",
      "TotalAmountPaid": 148779742.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC2",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1774.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-01",
      "TotalAmountPaid": 4429209.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-01",
      "TotalAmountPaid": 238898939.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-01",
      "TotalAmountPaid": 16653672.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TTT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1969253.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 390058022.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2023-02",
      "TotalAmountPaid": 3467037.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 1434249.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 5977010.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 11000730.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2023-02",
      "TotalAmountPaid": 533500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2023-02",
      "TotalAmountPaid": 3697610.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2023-02",
      "TotalAmountPaid": 137160.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 72000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAW",
      "MONTH": "2023-02",
      "TotalAmountPaid": 2250.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2023-02",
      "TotalAmountPaid": 268814.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2023-02",
      "TotalAmountPaid": 431620.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2023-02",
      "TotalAmountPaid": 1311760.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-02",
      "TotalAmountPaid": 31325900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2023-02",
      "TotalAmountPaid": 1050600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 113100.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 736000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2023-02",
      "TotalAmountPaid": 162780.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 352800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2023-02",
      "TotalAmountPaid": 219400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-02",
      "TotalAmountPaid": 88926.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-02",
      "TotalAmountPaid": 117253480.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-02",
      "TotalAmountPaid": 4502488.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-02",
      "TotalAmountPaid": 170766900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-02",
      "TotalAmountPaid": 36678814.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 280889176.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1118544.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 3281271.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 6404402.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 42045887.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2023-03",
      "TotalAmountPaid": 155000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2023-03",
      "TotalAmountPaid": 4410280.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2023-03",
      "TotalAmountPaid": 2277060.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAW",
      "MONTH": "2023-03",
      "TotalAmountPaid": 332640.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2023-03",
      "TotalAmountPaid": 19756836.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2023-03",
      "TotalAmountPaid": 3183733.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1474280.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLL",
      "MONTH": "2023-03",
      "TotalAmountPaid": 761400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-03",
      "TotalAmountPaid": 19031500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2023-03",
      "TotalAmountPaid": 4422500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 74700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 858000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "ILC",
      "MONTH": "2023-03",
      "TotalAmountPaid": 60850.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2023-03",
      "TotalAmountPaid": 3945248.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 3259500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2023-03",
      "TotalAmountPaid": 85822483.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-03",
      "TotalAmountPaid": 573940.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-03",
      "TotalAmountPaid": 213961818.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-03",
      "TotalAmountPaid": 11611830.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-03",
      "TotalAmountPaid": 406039201.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-03",
      "TotalAmountPaid": 50636.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-03",
      "TotalAmountPaid": 34842721.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 316868483.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2023-04",
      "TotalAmountPaid": 1862553.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 977200.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 6356623.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 6131426.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2023-04",
      "TotalAmountPaid": 102500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2023-04",
      "TotalAmountPaid": 3387670.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2023-04",
      "TotalAmountPaid": 154825.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 2226540.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2023-04",
      "TotalAmountPaid": 2113076.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2023-04",
      "TotalAmountPaid": 1948429.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2023-04",
      "TotalAmountPaid": 448400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-04",
      "TotalAmountPaid": 31546000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2023-04",
      "TotalAmountPaid": 1262800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 56600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 788000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2023-04",
      "TotalAmountPaid": 5417320.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 124200.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-04",
      "TotalAmountPaid": 204103.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-04",
      "TotalAmountPaid": 129939382.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-04",
      "TotalAmountPaid": 9034583.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-04",
      "TotalAmountPaid": 200692447.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-04",
      "TotalAmountPaid": 23162291.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 327687309.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1663078.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 24046663.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 7351913.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 14719090.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2023-05",
      "TotalAmountPaid": 2451400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1750900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2023-05",
      "TotalAmountPaid": 174810.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 4634321.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DBL",
      "MONTH": "2023-05",
      "TotalAmountPaid": 520800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1437870.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1490552.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1580560.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-05",
      "TotalAmountPaid": 22932800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2023-05",
      "TotalAmountPaid": 22800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 102700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1394000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2023-05",
      "TotalAmountPaid": 3871480.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 2170500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2023-05",
      "TotalAmountPaid": 275000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-05",
      "TotalAmountPaid": 291838.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-05",
      "TotalAmountPaid": 127887716.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC2",
      "MONTH": "2023-05",
      "TotalAmountPaid": 11009.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-05",
      "TotalAmountPaid": 4600329.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-05",
      "TotalAmountPaid": 244388832.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-05",
      "TotalAmountPaid": 35529719.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 370400118.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2023-06",
      "TotalAmountPaid": 9996330.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 800928.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 6618002.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 2580565.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2023-06",
      "TotalAmountPaid": 363500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2023-06",
      "TotalAmountPaid": 2930500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2023-06",
      "TotalAmountPaid": 862160.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1119258.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2023-06",
      "TotalAmountPaid": 156730.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2023-06",
      "TotalAmountPaid": 397680.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-06",
      "TotalAmountPaid": 50209500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2023-06",
      "TotalAmountPaid": 815000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 120900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1390000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FJT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 853071.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1388400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1027800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2023-06",
      "TotalAmountPaid": 127566538.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2023-06",
      "TotalAmountPaid": 219150.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-06",
      "TotalAmountPaid": 104708.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-06",
      "TotalAmountPaid": 144703203.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-06",
      "TotalAmountPaid": 5136911.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-06",
      "TotalAmountPaid": 211768854.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-06",
      "TotalAmountPaid": 19306654.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TTT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1279607.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 345963230.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2023-07",
      "TotalAmountPaid": 4527829.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 450000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 6779872.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 9308096.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2023-07",
      "TotalAmountPaid": 12500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2023-07",
      "TotalAmountPaid": 12075800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2023-07",
      "TotalAmountPaid": 794500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 2683758.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAW",
      "MONTH": "2023-07",
      "TotalAmountPaid": 390.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2023-07",
      "TotalAmountPaid": 2069606.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2023-07",
      "TotalAmountPaid": 783958.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2023-07",
      "TotalAmountPaid": 502400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-07",
      "TotalAmountPaid": 5750500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2023-07",
      "TotalAmountPaid": 510000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 132200.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 1293000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2023-07",
      "TotalAmountPaid": 2433640.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 898800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2023-07",
      "TotalAmountPaid": 218400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-07",
      "TotalAmountPaid": 250661.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-07",
      "TotalAmountPaid": 129234170.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-07",
      "TotalAmountPaid": 3394717.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-07",
      "TotalAmountPaid": 191513058.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-07",
      "TotalAmountPaid": 27855415.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 339234243.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1552436.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 13031994.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 5574639.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 18405428.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2023-08",
      "TotalAmountPaid": 56000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1805800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2023-08",
      "TotalAmountPaid": 97340.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAW",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2023-08",
      "TotalAmountPaid": 442358.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2023-08",
      "TotalAmountPaid": 2328242.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1012280.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-08",
      "TotalAmountPaid": 23017900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2023-08",
      "TotalAmountPaid": 12400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 127900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1225000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2023-08",
      "TotalAmountPaid": 872860.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 693900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2023-08",
      "TotalAmountPaid": 67696773.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2023-08",
      "TotalAmountPaid": 209250.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-08",
      "TotalAmountPaid": 283148.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-08",
      "TotalAmountPaid": 103724769.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC2",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1421.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-08",
      "TotalAmountPaid": 6597934.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-08",
      "TotalAmountPaid": 171017111.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-08",
      "TotalAmountPaid": 25770348.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 275005132.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1081476.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 605903.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 6348994.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 6742638.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2023-09",
      "TotalAmountPaid": 394900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2023-09",
      "TotalAmountPaid": 13572500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2023-09",
      "TotalAmountPaid": 705380.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 2548759.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2023-09",
      "TotalAmountPaid": 2193188.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1057336.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2023-09",
      "TotalAmountPaid": 916920.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-09",
      "TotalAmountPaid": 39003600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1030800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 40500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1093000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2023-09",
      "TotalAmountPaid": 615268.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 889800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2023-09",
      "TotalAmountPaid": 99691397.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-09",
      "TotalAmountPaid": 231603.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-09",
      "TotalAmountPaid": 114577710.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-09",
      "TotalAmountPaid": 4913874.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-09",
      "TotalAmountPaid": 255160299.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-09",
      "TotalAmountPaid": 14888997.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 343459095.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1022523.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 8036607.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 7016594.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 18845089.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2023-10",
      "TotalAmountPaid": 956000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2023-10",
      "TotalAmountPaid": 3054000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2023-10",
      "TotalAmountPaid": 3066530.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 5591068.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1231636.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1076418.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2023-10",
      "TotalAmountPaid": 644360.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-10",
      "TotalAmountPaid": 14691600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1000000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 73100.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1016000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2023-10",
      "TotalAmountPaid": 10010520.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 276900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2023-10",
      "TotalAmountPaid": 211000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-10",
      "TotalAmountPaid": 319431.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-10",
      "TotalAmountPaid": 127513159.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-10",
      "TotalAmountPaid": 15223973.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-10",
      "TotalAmountPaid": 210039731.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-10",
      "TotalAmountPaid": 24442873.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 367560604.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1852405.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 6189502.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 7083324.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 15735620.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2023-11",
      "TotalAmountPaid": 144000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2023-11",
      "TotalAmountPaid": 21600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2023-11",
      "TotalAmountPaid": 2488800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 75000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAW",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DBL",
      "MONTH": "2023-11",
      "TotalAmountPaid": 85000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2023-11",
      "TotalAmountPaid": 2345112.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1923488.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2023-11",
      "TotalAmountPaid": 514400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-11",
      "TotalAmountPaid": 34798500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2023-11",
      "TotalAmountPaid": 375000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 212700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1090000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2023-11",
      "TotalAmountPaid": 5602960.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 519900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2023-11",
      "TotalAmountPaid": 210000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-11",
      "TotalAmountPaid": 357867.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-11",
      "TotalAmountPaid": 115177112.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-11",
      "TotalAmountPaid": 11587396.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-11",
      "TotalAmountPaid": 297686094.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-11",
      "TotalAmountPaid": 22290355.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 373869778.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2023-12",
      "TotalAmountPaid": 2717621.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 5819457.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 6071542.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 15165491.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1358000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2023-12",
      "TotalAmountPaid": 12000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1572660.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 2661259.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2023-12",
      "TotalAmountPaid": 2724708.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2023-12",
      "TotalAmountPaid": 732046.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2023-12",
      "TotalAmountPaid": 391360.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-12",
      "TotalAmountPaid": 700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2023-12",
      "TotalAmountPaid": 557000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 76800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1099000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2023-12",
      "TotalAmountPaid": 9010920.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 2018400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2023-12",
      "TotalAmountPaid": 129626269.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-12",
      "TotalAmountPaid": 363638.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-12",
      "TotalAmountPaid": 107368348.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC2",
      "MONTH": "2023-12",
      "TotalAmountPaid": 8421.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-12",
      "TotalAmountPaid": 9607485.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-12",
      "TotalAmountPaid": 226407274.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC5",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-12",
      "TotalAmountPaid": 16184458.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 323775468.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1253755.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 250000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 5708150.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 9734741.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2024-01",
      "TotalAmountPaid": 297375.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2024-01",
      "TotalAmountPaid": 410000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1053970.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 31875.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1313813.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2024-01",
      "TotalAmountPaid": 341859.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2024-01",
      "TotalAmountPaid": 200000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-01",
      "TotalAmountPaid": 32260500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1450000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 14000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1017000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-01",
      "TotalAmountPaid": 17892.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 294000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2024-01",
      "TotalAmountPaid": 414000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-01",
      "TotalAmountPaid": 204060.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-01",
      "TotalAmountPaid": 87061311.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-01",
      "TotalAmountPaid": 3088959.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-01",
      "TotalAmountPaid": 246540611.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-01",
      "TotalAmountPaid": 2256750.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-01",
      "TotalAmountPaid": 10090439.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 307883751.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2024-02",
      "TotalAmountPaid": 6940911.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 6980800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 6408487.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 10954768.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2024-02",
      "TotalAmountPaid": 934700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2024-02",
      "TotalAmountPaid": 6480.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2024-02",
      "TotalAmountPaid": 909840.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 2548763.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DBL",
      "MONTH": "2024-02",
      "TotalAmountPaid": 11088.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2024-02",
      "TotalAmountPaid": 677727.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2024-02",
      "TotalAmountPaid": 76972.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2024-02",
      "TotalAmountPaid": 104400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-02",
      "TotalAmountPaid": 57340500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2024-02",
      "TotalAmountPaid": 2100000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 18400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1183000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-02",
      "TotalAmountPaid": 6747440.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 254700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2024-02",
      "TotalAmountPaid": 30346830.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-02",
      "TotalAmountPaid": 198523.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-02",
      "TotalAmountPaid": 130635159.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-02",
      "TotalAmountPaid": 11595589.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-02",
      "TotalAmountPaid": 224488135.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-02",
      "TotalAmountPaid": 7504102.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC5",
      "MONTH": "2024-02",
      "TotalAmountPaid": 513087.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-02",
      "TotalAmountPaid": 7759886.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 359444001.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1366138.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 23213440.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 6511686.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 6116367.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2024-03",
      "TotalAmountPaid": 254200.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2024-03",
      "TotalAmountPaid": 3507484.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 2548759.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2024-03",
      "TotalAmountPaid": 539896.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1798104.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2024-03",
      "TotalAmountPaid": 302800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-03",
      "TotalAmountPaid": 18579000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2024-03",
      "TotalAmountPaid": 151560.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 178400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 917000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-03",
      "TotalAmountPaid": 7043320.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 861996.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2024-03",
      "TotalAmountPaid": 206500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-03",
      "TotalAmountPaid": 104511.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-03",
      "TotalAmountPaid": 130708471.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-03",
      "TotalAmountPaid": 11972595.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-03",
      "TotalAmountPaid": 196354512.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-03",
      "TotalAmountPaid": 3120531.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-03",
      "TotalAmountPaid": 19751148.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 332573934.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2024-04",
      "TotalAmountPaid": 5520684.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 4066338.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 7308837.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 9811722.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2024-04",
      "TotalAmountPaid": 63000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2024-04",
      "TotalAmountPaid": 10150680.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2024-04",
      "TotalAmountPaid": 2759866.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 123604.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1090530.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2024-04",
      "TotalAmountPaid": 939162.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2024-04",
      "TotalAmountPaid": 847600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-04",
      "TotalAmountPaid": 29097000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2024-04",
      "TotalAmountPaid": 3874600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 32200.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1119000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-04",
      "TotalAmountPaid": 921960.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 580200.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2024-04",
      "TotalAmountPaid": 25678084.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-04",
      "TotalAmountPaid": 205760.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-04",
      "TotalAmountPaid": 149516061.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC2",
      "MONTH": "2024-04",
      "TotalAmountPaid": 224.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-04",
      "TotalAmountPaid": 9063471.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-04",
      "TotalAmountPaid": 221535841.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-04",
      "TotalAmountPaid": 21444931.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 377917255.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2024-05",
      "TotalAmountPaid": 2528542.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 13577916.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 7056891.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 11183309.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 300000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2024-05",
      "TotalAmountPaid": 3074840.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1468656.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2024-05",
      "TotalAmountPaid": 283612.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2024-05",
      "TotalAmountPaid": 784952.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2024-05",
      "TotalAmountPaid": 196520.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-05",
      "TotalAmountPaid": 26709000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2024-05",
      "TotalAmountPaid": 455000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 111900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1160000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FJT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1889589.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 159120.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 30000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2024-05",
      "TotalAmountPaid": 206500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-05",
      "TotalAmountPaid": 164065.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-05",
      "TotalAmountPaid": 144259972.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC2",
      "MONTH": "2024-05",
      "TotalAmountPaid": 6237.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-05",
      "TotalAmountPaid": 2897762.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-05",
      "TotalAmountPaid": 209232662.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-05",
      "TotalAmountPaid": 15705904.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TTT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 2834384.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 372034224.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2024-06",
      "TotalAmountPaid": 2328076.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 6715903.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 2425986.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2024-06",
      "TotalAmountPaid": 80300.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2024-06",
      "TotalAmountPaid": 34400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2024-06",
      "TotalAmountPaid": 4023950.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2024-06",
      "TotalAmountPaid": 654248.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2024-06",
      "TotalAmountPaid": 552370.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2024-06",
      "TotalAmountPaid": 235920.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-06",
      "TotalAmountPaid": 892320.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1595700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 176700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1464015.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-06",
      "TotalAmountPaid": 3541000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 739800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2024-06",
      "TotalAmountPaid": 42842581.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-06",
      "TotalAmountPaid": 55674.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-06",
      "TotalAmountPaid": 156259195.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-06",
      "TotalAmountPaid": 12987750.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-06",
      "TotalAmountPaid": 181905778.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-06",
      "TotalAmountPaid": 12829785.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 359265234.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2024-07",
      "TotalAmountPaid": 2348808.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 688747.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 6493502.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1274156.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2024-07",
      "TotalAmountPaid": 109880.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2024-07",
      "TotalAmountPaid": 4703160.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1754133.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAW",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DBL",
      "MONTH": "2024-07",
      "TotalAmountPaid": 31700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2024-07",
      "TotalAmountPaid": 2557464.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2024-07",
      "TotalAmountPaid": 2215906.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2024-07",
      "TotalAmountPaid": 572440.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-07",
      "TotalAmountPaid": 60408500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2024-07",
      "TotalAmountPaid": 2290000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 18000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1369000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1266340.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 917400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2024-07",
      "TotalAmountPaid": 411000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-07",
      "TotalAmountPaid": 114174.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-07",
      "TotalAmountPaid": 135431327.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC2",
      "MONTH": "2024-07",
      "TotalAmountPaid": 3302.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-07",
      "TotalAmountPaid": 3284211.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-07",
      "TotalAmountPaid": 211334611.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-07",
      "TotalAmountPaid": 16641955.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 338692264.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2024-08",
      "TotalAmountPaid": 7709660.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 2100000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 6912112.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 9980012.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2024-08",
      "TotalAmountPaid": 285000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2024-08",
      "TotalAmountPaid": 27600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2024-08",
      "TotalAmountPaid": 3186996.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 5775162.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DBL",
      "MONTH": "2024-08",
      "TotalAmountPaid": 9800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2024-08",
      "TotalAmountPaid": 2307340.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2024-08",
      "TotalAmountPaid": 666792.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2024-08",
      "TotalAmountPaid": 552080.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLL",
      "MONTH": "2024-08",
      "TotalAmountPaid": 25200.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-08",
      "TotalAmountPaid": 32101800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2024-08",
      "TotalAmountPaid": 837500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 15400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1263000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-08",
      "TotalAmountPaid": 523200.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1071000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2024-08",
      "TotalAmountPaid": 207000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-08",
      "TotalAmountPaid": 220660.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-08",
      "TotalAmountPaid": 111029145.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC2",
      "MONTH": "2024-08",
      "TotalAmountPaid": 10171.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-08",
      "TotalAmountPaid": 10824038.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-08",
      "TotalAmountPaid": 234922545.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-08",
      "TotalAmountPaid": 13923958.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 366156758.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2024-09",
      "TotalAmountPaid": 2860627.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 200000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 7070518.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 12060709.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2024-09",
      "TotalAmountPaid": 480.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2024-09",
      "TotalAmountPaid": 3698244.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 5210017.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAW",
      "MONTH": "2024-09",
      "TotalAmountPaid": 24720.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DBL",
      "MONTH": "2024-09",
      "TotalAmountPaid": 18800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2024-09",
      "TotalAmountPaid": 2447583.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1827595.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2024-09",
      "TotalAmountPaid": 181480.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-09",
      "TotalAmountPaid": 54257400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2024-09",
      "TotalAmountPaid": 790000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 18300.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1150000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FJT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 882995.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1415424.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 846000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2024-09",
      "TotalAmountPaid": 207000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-09",
      "TotalAmountPaid": 254171.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-09",
      "TotalAmountPaid": 138822745.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-09",
      "TotalAmountPaid": 5376093.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-09",
      "TotalAmountPaid": 229563782.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-09",
      "TotalAmountPaid": 24581192.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TTT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 882995.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 367560347.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2024-10",
      "TotalAmountPaid": 4947522.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 14168492.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 7436007.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 9176760.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2024-10",
      "TotalAmountPaid": 3497070.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DBL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 20800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2024-10",
      "TotalAmountPaid": 3004792.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2024-10",
      "TotalAmountPaid": 383726.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2024-10",
      "TotalAmountPaid": 632600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-10",
      "TotalAmountPaid": 862500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2024-10",
      "TotalAmountPaid": 3275000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 12700.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1132000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 2529673.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 600000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2024-10",
      "TotalAmountPaid": 13456965.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2024-10",
      "TotalAmountPaid": 414000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-10",
      "TotalAmountPaid": 230052.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-10",
      "TotalAmountPaid": 128313043.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-10",
      "TotalAmountPaid": 3696625.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-10",
      "TotalAmountPaid": 200564949.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-10",
      "TotalAmountPaid": 32716052.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 372541176.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1580008.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 20471048.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 6399965.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 2047046.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2024-11",
      "TotalAmountPaid": 64000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2024-11",
      "TotalAmountPaid": 7816876.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 2548758.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAW",
      "MONTH": "2024-11",
      "TotalAmountPaid": 50.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DBL",
      "MONTH": "2024-11",
      "TotalAmountPaid": 6900.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2024-11",
      "TotalAmountPaid": 757230.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2024-11",
      "TotalAmountPaid": 50904.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2024-11",
      "TotalAmountPaid": 68040.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-11",
      "TotalAmountPaid": 41871800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2024-11",
      "TotalAmountPaid": 3175000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 6000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1029000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FJT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 462381.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-11",
      "TotalAmountPaid": 112807.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 714300.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2024-11",
      "TotalAmountPaid": 207000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-11",
      "TotalAmountPaid": 67327.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-11",
      "TotalAmountPaid": 120242384.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-11",
      "TotalAmountPaid": 8279550.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-11",
      "TotalAmountPaid": 223155846.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-11",
      "TotalAmountPaid": 12816450.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TTB",
      "MONTH": "2024-11",
      "TotalAmountPaid": 9086.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TTT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 679943.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 336987294.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2024-12",
      "TotalAmountPaid": 3441456.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1440000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "ATB",
      "MONTH": "2024-12",
      "TotalAmountPaid": 365795.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 10611550.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 116213727.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2024-12",
      "TotalAmountPaid": 2005013.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2024-12",
      "TotalAmountPaid": 9088331.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 23776129.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAW",
      "MONTH": "2024-12",
      "TotalAmountPaid": 40140.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DBL",
      "MONTH": "2024-12",
      "TotalAmountPaid": 64136.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1581174.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2024-12",
      "TotalAmountPaid": 609014.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2024-12",
      "TotalAmountPaid": 215800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-12",
      "TotalAmountPaid": 6008500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2024-12",
      "TotalAmountPaid": 2774400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 19500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FBD",
      "MONTH": "2024-12",
      "TotalAmountPaid": 2055927.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1718000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FJT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 14818307.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2024-12",
      "TotalAmountPaid": 23084640.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 792549.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2024-12",
      "TotalAmountPaid": 21695922.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2024-12",
      "TotalAmountPaid": 418000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1641243.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-12",
      "TotalAmountPaid": 180832191.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-12",
      "TotalAmountPaid": 21588693.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-12",
      "TotalAmountPaid": 330277293.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-12",
      "TotalAmountPaid": 6001339.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-12",
      "TotalAmountPaid": 19309181.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TTT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 21678768.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 534871925.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2674525.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 1875938.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "ATB",
      "MONTH": "2025-01",
      "TotalAmountPaid": 411920.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 12752772.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 23542592.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2025-01",
      "TotalAmountPaid": 504000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2025-01",
      "TotalAmountPaid": 1498632.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2025-01",
      "TotalAmountPaid": 9453629.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAS",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2574.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 34877742.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAV",
      "MONTH": "2025-01",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAW",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2250.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DBL",
      "MONTH": "2025-01",
      "TotalAmountPaid": 6200.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2025-01",
      "TotalAmountPaid": 3709832.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2025-01",
      "TotalAmountPaid": 625021.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2025-01",
      "TotalAmountPaid": 911680.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2025-01",
      "TotalAmountPaid": 35744500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2751100.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 10200.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FBD",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2608619.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 1658000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FJT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 13901105.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2025-01",
      "TotalAmountPaid": 29571488.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2143689.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2025-01",
      "TotalAmountPaid": 207000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2025-01",
      "TotalAmountPaid": 439369.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RLS",
      "MONTH": "2025-01",
      "TotalAmountPaid": 1670.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-01",
      "TotalAmountPaid": 190384792.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC2",
      "MONTH": "2025-01",
      "TotalAmountPaid": 4625.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2025-01",
      "TotalAmountPaid": 28780885.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-01",
      "TotalAmountPaid": 456596364.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC30",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2985336.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC5",
      "MONTH": "2025-01",
      "TotalAmountPaid": 542.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-01",
      "TotalAmountPaid": 24081959.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TTT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 20182775.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 619621446.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2025-02",
      "TotalAmountPaid": 2634014.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AMT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 580000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "ATB",
      "MONTH": "2025-02",
      "TotalAmountPaid": 292326.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CSE",
      "MONTH": "2025-02",
      "TotalAmountPaid": 80580.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 11837872.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 38711620.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAE",
      "MONTH": "2025-02",
      "TotalAmountPaid": 489600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAL",
      "MONTH": "2025-02",
      "TotalAmountPaid": 641300.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2025-02",
      "TotalAmountPaid": 5753580.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 34841087.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DBL",
      "MONTH": "2025-02",
      "TotalAmountPaid": 486000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1070974.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2025-02",
      "TotalAmountPaid": 756112.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2025-02",
      "TotalAmountPaid": 372760.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLL",
      "MONTH": "2025-02",
      "TotalAmountPaid": 4500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2025-02",
      "TotalAmountPaid": 35244500.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1356800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 5400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FBD",
      "MONTH": "2025-02",
      "TotalAmountPaid": 379258.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1649000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FJT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 12571787.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2025-02",
      "TotalAmountPaid": 12077552.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1678800.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFE",
      "MONTH": "2025-02",
      "TotalAmountPaid": 207000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2025-02",
      "TotalAmountPaid": 582945.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-02",
      "TotalAmountPaid": 178074551.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2025-02",
      "TotalAmountPaid": 17455420.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-02",
      "TotalAmountPaid": 324338708.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC30",
      "MONTH": "2025-02",
      "TotalAmountPaid": 7321146.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-02",
      "TotalAmountPaid": 21318068.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TTT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 18419190.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 526936203.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "AIB",
      "MONTH": "2025-03",
      "TotalAmountPaid": 235224.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CSE",
      "MONTH": "2025-03",
      "TotalAmountPaid": 780.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "CUA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 1745978.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 345764.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAP",
      "MONTH": "2025-03",
      "TotalAmountPaid": 390000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DAT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 11305273.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DBL",
      "MONTH": "2025-03",
      "TotalAmountPaid": 10100.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEG",
      "MONTH": "2025-03",
      "TotalAmountPaid": 164570.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DEM",
      "MONTH": "2025-03",
      "TotalAmountPaid": 12054.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DJU",
      "MONTH": "2025-03",
      "TotalAmountPaid": 198020.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DLLP",
      "MONTH": "2025-03",
      "TotalAmountPaid": 20985000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DPI",
      "MONTH": "2025-03",
      "TotalAmountPaid": 250000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "DYA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 9600.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 145000.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PAL",
      "MONTH": "2025-03",
      "TotalAmountPaid": 7560.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "PLA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 137400.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RBS",
      "MONTH": "2025-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "RFSH",
      "MONTH": "2025-03",
      "TotalAmountPaid": 19901.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-03",
      "TotalAmountPaid": 31419280.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC20",
      "MONTH": "2025-03",
      "TotalAmountPaid": 20342.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-03",
      "TotalAmountPaid": 42397291.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-03",
      "TotalAmountPaid": 4068714.0
    },
    {
      "CodeOffice": "DJPRT",
      "CodeTaxe": "TVA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 85173326.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 3243.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-01",
      "TotalAmountPaid": 373044.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 199497.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1520.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-03",
      "TotalAmountPaid": 11270.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-03",
      "TotalAmountPaid": 148931.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 92043.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1893.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-06",
      "TotalAmountPaid": 217713.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 116429.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 1439.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-09",
      "TotalAmountPaid": 5660.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-09",
      "TotalAmountPaid": 152490.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 87775.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2022-12",
      "TotalAmountPaid": 21402.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 2971.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 3000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 341765.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 182769.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2023-02",
      "TotalAmountPaid": 54075.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 969.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-02",
      "TotalAmountPaid": 42450.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-02",
      "TotalAmountPaid": 13800.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 54075.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2023-03",
      "TotalAmountPaid": 79059.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1388.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 3000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-03",
      "TotalAmountPaid": 48700.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-03",
      "TotalAmountPaid": 47662.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 79059.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2023-04",
      "TotalAmountPaid": 559678.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 9927.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 8000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-04",
      "TotalAmountPaid": 365930.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-04",
      "TotalAmountPaid": 249435.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-04",
      "TotalAmountPaid": 17600.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 535915.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2023-05",
      "TotalAmountPaid": 293197.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 5245.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 3000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-05",
      "TotalAmountPaid": 226120.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-05",
      "TotalAmountPaid": 83145.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 293196.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2023-06",
      "TotalAmountPaid": 348019.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 6230.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 3000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-06",
      "TotalAmountPaid": 270530.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-06",
      "TotalAmountPaid": 94311.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 348019.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2023-07",
      "TotalAmountPaid": 399746.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 7182.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-07",
      "TotalAmountPaid": 322983.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-07",
      "TotalAmountPaid": 83145.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 399745.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2023-08",
      "TotalAmountPaid": 481186.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 8480.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 3000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-08",
      "TotalAmountPaid": 310559.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-08",
      "TotalAmountPaid": 260984.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 481184.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2023-09",
      "TotalAmountPaid": 348448.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 6335.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-09",
      "TotalAmountPaid": 316771.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 348448.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2023-10",
      "TotalAmountPaid": 173199.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 3149.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 3000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-10",
      "TotalAmountPaid": 157453.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 173199.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2023-11",
      "TotalAmountPaid": 355623.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 6465.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-11",
      "TotalAmountPaid": 323293.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 355622.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2023-12",
      "TotalAmountPaid": 174921.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 3174.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-12",
      "TotalAmountPaid": 156211.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-12",
      "TotalAmountPaid": 5774.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 174920.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2024-01",
      "TotalAmountPaid": 245280.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 4459.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-01",
      "TotalAmountPaid": 222981.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 245280.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2024-02",
      "TotalAmountPaid": 266123.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 4838.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-02",
      "TotalAmountPaid": 241930.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 266123.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2024-03",
      "TotalAmountPaid": 282345.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 5133.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-03",
      "TotalAmountPaid": 256677.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 282345.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2024-04",
      "TotalAmountPaid": 308137.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 5602.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-04",
      "TotalAmountPaid": 280124.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 308137.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2024-05",
      "TotalAmountPaid": 170466.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 3099.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-05",
      "TotalAmountPaid": 154969.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 170466.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2024-06",
      "TotalAmountPaid": 170466.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 3099.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-06",
      "TotalAmountPaid": 154969.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 170466.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2024-07",
      "TotalAmountPaid": 136305.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 2478.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-07",
      "TotalAmountPaid": 123913.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 136304.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2024-08",
      "TotalAmountPaid": 91895.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1670.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-08",
      "TotalAmountPaid": 83541.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 91895.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2024-09",
      "TotalAmountPaid": 102143.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1857.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-09",
      "TotalAmountPaid": 92857.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 102143.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2024-10",
      "TotalAmountPaid": 88479.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1608.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-10",
      "TotalAmountPaid": 80435.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 88478.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2024-11",
      "TotalAmountPaid": 67982.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1236.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-11",
      "TotalAmountPaid": 61801.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 67981.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2024-12",
      "TotalAmountPaid": 71398.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1298.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-12",
      "TotalAmountPaid": 64907.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 71397.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2025-01",
      "TotalAmountPaid": 116833.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2124.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-01",
      "TotalAmountPaid": 106211.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 116832.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "AIB",
      "MONTH": "2025-02",
      "TotalAmountPaid": 67982.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "CUA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1236.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-02",
      "TotalAmountPaid": 61801.0
    },
    {
      "CodeOffice": "DJPST",
      "CodeTaxe": "TVA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 67981.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2022-01",
      "TotalAmountPaid": 5469000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2022-01",
      "TotalAmountPaid": 3544071.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2022-01",
      "TotalAmountPaid": -14391359.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2022-01",
      "TotalAmountPaid": 27259457.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 3745592.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2022-01",
      "TotalAmountPaid": 36647253.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-01",
      "TotalAmountPaid": 7437977.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2022-01",
      "TotalAmountPaid": 46205352.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 188000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 24787997.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2022-01",
      "TotalAmountPaid": 113332858.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2022-01",
      "TotalAmountPaid": 2077103.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2022-01",
      "TotalAmountPaid": 31665007.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-01",
      "TotalAmountPaid": 209890755.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 132600250.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2022-02",
      "TotalAmountPaid": 55382610.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2022-02",
      "TotalAmountPaid": -11273688.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2022-02",
      "TotalAmountPaid": 37204419.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 3535460.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2022-02",
      "TotalAmountPaid": 37696770.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-02",
      "TotalAmountPaid": 6870710.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2022-02",
      "TotalAmountPaid": 48485347.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 168000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 26356235.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2022-02",
      "TotalAmountPaid": 116220236.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2022-02",
      "TotalAmountPaid": 1949983.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2022-02",
      "TotalAmountPaid": 33031593.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-02",
      "TotalAmountPaid": 199631118.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 127782210.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2022-03",
      "TotalAmountPaid": 5469000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2022-03",
      "TotalAmountPaid": -67524891.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2022-03",
      "TotalAmountPaid": -14498049.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2022-03",
      "TotalAmountPaid": 20216100.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 3480055.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2022-03",
      "TotalAmountPaid": 34592937.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-03",
      "TotalAmountPaid": 3211414.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2022-03",
      "TotalAmountPaid": 42269783.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 134000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 25090586.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2022-03",
      "TotalAmountPaid": 107324011.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1757035.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2022-03",
      "TotalAmountPaid": 28965315.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-03",
      "TotalAmountPaid": 200975757.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 129900328.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2022-04",
      "TotalAmountPaid": 10938000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2022-04",
      "TotalAmountPaid": -150278174.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2022-04",
      "TotalAmountPaid": -19744175.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2022-04",
      "TotalAmountPaid": 5687106.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 4571935.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2022-04",
      "TotalAmountPaid": 36443109.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-04",
      "TotalAmountPaid": 4192544.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2022-04",
      "TotalAmountPaid": 47709657.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 137000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 24303082.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2022-04",
      "TotalAmountPaid": 113069323.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2022-04",
      "TotalAmountPaid": 1911343.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2022-04",
      "TotalAmountPaid": 32812591.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-04",
      "TotalAmountPaid": 237120163.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 154031212.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2022-05",
      "TotalAmountPaid": -385403304.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2022-05",
      "TotalAmountPaid": -23380295.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2022-05",
      "TotalAmountPaid": -20890967.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 5497235.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2022-05",
      "TotalAmountPaid": 37754931.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-05",
      "TotalAmountPaid": 4895322.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2022-05",
      "TotalAmountPaid": 45746661.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 126000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 21960789.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2022-05",
      "TotalAmountPaid": 117030723.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2022-05",
      "TotalAmountPaid": 1514408.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2022-05",
      "TotalAmountPaid": 31562478.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-05",
      "TotalAmountPaid": 295789016.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 202574693.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2022-06",
      "TotalAmountPaid": -523253191.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2022-06",
      "TotalAmountPaid": -24725819.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2022-06",
      "TotalAmountPaid": -18354296.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 6514660.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2022-06",
      "TotalAmountPaid": 41860518.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-06",
      "TotalAmountPaid": 3586430.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2022-06",
      "TotalAmountPaid": 53488783.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 122000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 23152805.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2022-06",
      "TotalAmountPaid": 129008944.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1584408.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2022-06",
      "TotalAmountPaid": 36563932.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-06",
      "TotalAmountPaid": 338665439.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 246110654.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2022-07",
      "TotalAmountPaid": -570450459.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2022-07",
      "TotalAmountPaid": -25391826.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2022-07",
      "TotalAmountPaid": -41866841.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 6650477.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2022-07",
      "TotalAmountPaid": 41252469.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-07",
      "TotalAmountPaid": 3647784.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2022-07",
      "TotalAmountPaid": 48635135.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 118000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 15278346.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2022-07",
      "TotalAmountPaid": 127440907.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2022-07",
      "TotalAmountPaid": 1499939.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2022-07",
      "TotalAmountPaid": 33249884.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-07",
      "TotalAmountPaid": 340163072.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 254754443.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2022-08",
      "TotalAmountPaid": -2455571.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2022-08",
      "TotalAmountPaid": -1250709.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 3567217.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2022-08",
      "TotalAmountPaid": 176010.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-08",
      "TotalAmountPaid": 5363933.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2022-08",
      "TotalAmountPaid": 442704.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 114000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 24793045.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1069553.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2022-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1481287.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-08",
      "TotalAmountPaid": 9543356.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 55561053.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2022-09",
      "TotalAmountPaid": 5469000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2022-09",
      "TotalAmountPaid": -500264136.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2022-09",
      "TotalAmountPaid": -23197072.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2022-09",
      "TotalAmountPaid": -6269709.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 6217432.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2022-09",
      "TotalAmountPaid": 41148120.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-09",
      "TotalAmountPaid": 2585235.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2022-09",
      "TotalAmountPaid": 44474090.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2022-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 118000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 22651605.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2022-09",
      "TotalAmountPaid": 126671296.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2022-09",
      "TotalAmountPaid": 1507982.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2022-09",
      "TotalAmountPaid": 30119456.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-09",
      "TotalAmountPaid": 314444615.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 240614588.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2022-10",
      "TotalAmountPaid": 5469000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2022-10",
      "TotalAmountPaid": -457635367.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2022-10",
      "TotalAmountPaid": -26353507.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2022-10",
      "TotalAmountPaid": 7984870.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "AMT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 1620400.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 6568111.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2022-10",
      "TotalAmountPaid": 41834517.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-10",
      "TotalAmountPaid": 6391842.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2022-10",
      "TotalAmountPaid": 50354840.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 143000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 17291915.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2022-10",
      "TotalAmountPaid": 131949425.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2022-10",
      "TotalAmountPaid": 1770559.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2022-10",
      "TotalAmountPaid": 34931213.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-10",
      "TotalAmountPaid": 328275031.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 260289154.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2022-11",
      "TotalAmountPaid": -347270724.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2022-11",
      "TotalAmountPaid": -23381369.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2022-11",
      "TotalAmountPaid": 30192189.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 5185739.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2022-11",
      "TotalAmountPaid": 42009744.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-11",
      "TotalAmountPaid": 6019281.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2022-11",
      "TotalAmountPaid": 54621913.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2022-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 128000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 15099523.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2022-11",
      "TotalAmountPaid": 129371521.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1864968.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2022-11",
      "TotalAmountPaid": 37733784.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-11",
      "TotalAmountPaid": 299019291.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 191832378.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2022-12",
      "TotalAmountPaid": 6562800.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2022-12",
      "TotalAmountPaid": -405825624.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2022-12",
      "TotalAmountPaid": -22340531.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2022-12",
      "TotalAmountPaid": 30148269.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 4863310.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2022-12",
      "TotalAmountPaid": 39016578.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-12",
      "TotalAmountPaid": 4104147.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2022-12",
      "TotalAmountPaid": 47142883.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 132000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 16042945.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2022-12",
      "TotalAmountPaid": 120564573.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2022-12",
      "TotalAmountPaid": 1665783.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2022-12",
      "TotalAmountPaid": 32843177.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 287793902.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 181571478.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2023-01",
      "TotalAmountPaid": -351305667.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2023-01",
      "TotalAmountPaid": -28073098.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2023-01",
      "TotalAmountPaid": 28614343.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 4614608.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2023-01",
      "TotalAmountPaid": 42642498.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-01",
      "TotalAmountPaid": 3841367.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2023-01",
      "TotalAmountPaid": 50250492.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2023-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 120000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 26623280.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2023-01",
      "TotalAmountPaid": 131415067.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2023-01",
      "TotalAmountPaid": 2192232.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2023-01",
      "TotalAmountPaid": 34730144.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-01",
      "TotalAmountPaid": 296096525.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 180156994.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2023-02",
      "TotalAmountPaid": 27345000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2023-02",
      "TotalAmountPaid": -175219880.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2023-02",
      "TotalAmountPaid": -18691136.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2023-02",
      "TotalAmountPaid": 40446636.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 4372152.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2023-02",
      "TotalAmountPaid": 41833053.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-02",
      "TotalAmountPaid": 3956038.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2023-02",
      "TotalAmountPaid": 51647385.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2023-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 132000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 26199580.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2023-02",
      "TotalAmountPaid": 128560614.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2023-02",
      "TotalAmountPaid": 1815177.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2023-02",
      "TotalAmountPaid": 35184331.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-02",
      "TotalAmountPaid": 258540888.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 155669750.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2023-03",
      "TotalAmountPaid": 5469000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2023-03",
      "TotalAmountPaid": -182092147.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2023-03",
      "TotalAmountPaid": -21900707.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2023-03",
      "TotalAmountPaid": 23587559.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 4558788.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2023-03",
      "TotalAmountPaid": 37884096.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-03",
      "TotalAmountPaid": 3952082.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2023-03",
      "TotalAmountPaid": 48736311.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2023-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 137000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 17178410.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2023-03",
      "TotalAmountPaid": 117546448.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1898043.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2023-03",
      "TotalAmountPaid": 33225653.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-03",
      "TotalAmountPaid": 246339606.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 160939720.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2023-04",
      "TotalAmountPaid": 10938000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2023-04",
      "TotalAmountPaid": -130704995.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2023-04",
      "TotalAmountPaid": -21284228.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2023-04",
      "TotalAmountPaid": 24193952.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 4628477.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2023-04",
      "TotalAmountPaid": 40701324.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-04",
      "TotalAmountPaid": 3110827.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2023-04",
      "TotalAmountPaid": 51071327.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 127000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 18551560.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2023-04",
      "TotalAmountPaid": 125977204.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2023-04",
      "TotalAmountPaid": 2119943.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2023-04",
      "TotalAmountPaid": 34799289.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-04",
      "TotalAmountPaid": 249200498.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 163026119.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2023-05",
      "TotalAmountPaid": 18230000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2023-05",
      "TotalAmountPaid": -83943760.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2023-05",
      "TotalAmountPaid": -14120800.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2023-05",
      "TotalAmountPaid": 28980595.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 5527195.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2023-05",
      "TotalAmountPaid": 41170107.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-05",
      "TotalAmountPaid": 5255295.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2023-05",
      "TotalAmountPaid": 53954008.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2023-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 147000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 20842435.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2023-05",
      "TotalAmountPaid": 126939930.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1680476.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2023-05",
      "TotalAmountPaid": 37101369.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-05",
      "TotalAmountPaid": 243920909.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 201822140.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2023-06",
      "TotalAmountPaid": -38783995.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2023-06",
      "TotalAmountPaid": -14290677.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2023-06",
      "TotalAmountPaid": 25340776.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 5222112.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2023-06",
      "TotalAmountPaid": 42280245.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-06",
      "TotalAmountPaid": 3720845.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2023-06",
      "TotalAmountPaid": 55297610.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2023-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 128000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 16879635.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2023-06",
      "TotalAmountPaid": 130340536.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1794345.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2023-06",
      "TotalAmountPaid": 37927048.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-06",
      "TotalAmountPaid": 241255204.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 195339607.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2023-07",
      "TotalAmountPaid": 5469000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2023-07",
      "TotalAmountPaid": 28476239.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2023-07",
      "TotalAmountPaid": -10326942.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2023-07",
      "TotalAmountPaid": 40236267.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 5197926.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2023-07",
      "TotalAmountPaid": 39051375.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-07",
      "TotalAmountPaid": 4321264.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2023-07",
      "TotalAmountPaid": 52262842.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 145000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 23126035.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2023-07",
      "TotalAmountPaid": 120747199.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2023-07",
      "TotalAmountPaid": 1602496.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2023-07",
      "TotalAmountPaid": 35460682.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-07",
      "TotalAmountPaid": 205904970.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 172006704.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2023-08",
      "TotalAmountPaid": 10938000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2023-08",
      "TotalAmountPaid": 50084132.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2023-08",
      "TotalAmountPaid": -11165941.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2023-08",
      "TotalAmountPaid": 39570567.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 5263583.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2023-08",
      "TotalAmountPaid": 41142846.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-08",
      "TotalAmountPaid": 7086493.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2023-08",
      "TotalAmountPaid": 48913869.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 171000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 22396080.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2023-08",
      "TotalAmountPaid": 126828472.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1625995.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2023-08",
      "TotalAmountPaid": 33158054.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-08",
      "TotalAmountPaid": 222684663.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 177461473.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2023-09",
      "TotalAmountPaid": 40106000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2023-09",
      "TotalAmountPaid": -50271937.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2023-09",
      "TotalAmountPaid": -15067710.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2023-09",
      "TotalAmountPaid": 29948827.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 5499470.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2023-09",
      "TotalAmountPaid": 39017214.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-09",
      "TotalAmountPaid": 4349962.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2023-09",
      "TotalAmountPaid": 47392313.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 151000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 16815966.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2023-09",
      "TotalAmountPaid": 120509957.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1731352.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2023-09",
      "TotalAmountPaid": 31831921.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-09",
      "TotalAmountPaid": 228426138.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 183163634.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2023-10",
      "TotalAmountPaid": -207501586.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2023-10",
      "TotalAmountPaid": -20711484.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2023-10",
      "TotalAmountPaid": 20725194.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 5447693.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2023-10",
      "TotalAmountPaid": 41380242.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-10",
      "TotalAmountPaid": 5792022.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2023-10",
      "TotalAmountPaid": 53619414.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2023-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 144000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 17198757.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2023-10",
      "TotalAmountPaid": 127500340.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1712704.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2023-10",
      "TotalAmountPaid": 36567110.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-10",
      "TotalAmountPaid": 279386608.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 197993822.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2023-11",
      "TotalAmountPaid": 60159000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2023-11",
      "TotalAmountPaid": -262182364.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2023-11",
      "TotalAmountPaid": -27242891.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2023-11",
      "TotalAmountPaid": 14392281.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 5822341.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2023-11",
      "TotalAmountPaid": 41534211.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-11",
      "TotalAmountPaid": 13254644.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2023-11",
      "TotalAmountPaid": 53935990.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2023-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 165000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 15655395.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2023-11",
      "TotalAmountPaid": 127986171.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2023-11",
      "TotalAmountPaid": 2045701.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2023-11",
      "TotalAmountPaid": 36648434.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-11",
      "TotalAmountPaid": 300181133.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 183370695.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2023-12",
      "TotalAmountPaid": -239676235.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2023-12",
      "TotalAmountPaid": -24693263.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2023-12",
      "TotalAmountPaid": 26385692.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 4835805.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2023-12",
      "TotalAmountPaid": 42606108.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2023-12",
      "TotalAmountPaid": 5948700.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2023-12",
      "TotalAmountPaid": 52384761.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2023-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 137000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 38856211.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2023-12",
      "TotalAmountPaid": 131732104.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2023-12",
      "TotalAmountPaid": 2159311.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2023-12",
      "TotalAmountPaid": 36038284.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-12",
      "TotalAmountPaid": 290795961.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 177751068.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2024-01",
      "TotalAmountPaid": -120740277.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2024-01",
      "TotalAmountPaid": -20797044.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2024-01",
      "TotalAmountPaid": 29640498.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 4002170.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2024-01",
      "TotalAmountPaid": 42388227.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2024-01",
      "TotalAmountPaid": 7271922.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2024-01",
      "TotalAmountPaid": 53824145.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2024-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 148000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 39880090.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2024-01",
      "TotalAmountPaid": 131027351.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2024-01",
      "TotalAmountPaid": 2047241.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2024-01",
      "TotalAmountPaid": 37105451.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-01",
      "TotalAmountPaid": 272047674.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 166605811.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2024-02",
      "TotalAmountPaid": -27816463.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2024-02",
      "TotalAmountPaid": -19438391.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2024-02",
      "TotalAmountPaid": 37288032.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 3848725.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2024-02",
      "TotalAmountPaid": 42423261.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2024-02",
      "TotalAmountPaid": 5865309.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2024-02",
      "TotalAmountPaid": 53742246.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2024-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 155000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 39574969.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2024-02",
      "TotalAmountPaid": 133626021.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2024-02",
      "TotalAmountPaid": 2142140.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2024-02",
      "TotalAmountPaid": 36628480.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-02",
      "TotalAmountPaid": 255178991.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 160236982.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2024-03",
      "TotalAmountPaid": -64991170.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2024-03",
      "TotalAmountPaid": -17309551.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2024-03",
      "TotalAmountPaid": 30414248.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 3987520.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2024-03",
      "TotalAmountPaid": 39917412.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2024-03",
      "TotalAmountPaid": 6460578.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2024-03",
      "TotalAmountPaid": 52459826.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2024-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 158000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 18193001.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2024-03",
      "TotalAmountPaid": 125103166.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1966356.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2024-03",
      "TotalAmountPaid": 35932256.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-03",
      "TotalAmountPaid": 246045053.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 153088194.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2024-04",
      "TotalAmountPaid": -98222322.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2024-04",
      "TotalAmountPaid": -17600894.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2024-04",
      "TotalAmountPaid": 23908560.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 4469845.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2024-04",
      "TotalAmountPaid": 40637352.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2024-04",
      "TotalAmountPaid": 6518767.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2024-04",
      "TotalAmountPaid": 53204332.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 144000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 17287231.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2024-04",
      "TotalAmountPaid": 125806153.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1924797.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2024-04",
      "TotalAmountPaid": 36122144.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-04",
      "TotalAmountPaid": 257668500.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 166749369.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2024-05",
      "TotalAmountPaid": 13672500.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2024-05",
      "TotalAmountPaid": -60685877.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2024-05",
      "TotalAmountPaid": -17080831.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2024-05",
      "TotalAmountPaid": 22730930.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 4777345.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2024-05",
      "TotalAmountPaid": 40867812.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 6225729.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2024-05",
      "TotalAmountPaid": 55025066.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 149000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 43360860.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2024-05",
      "TotalAmountPaid": 126804190.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1893962.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2024-05",
      "TotalAmountPaid": 37813627.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-05",
      "TotalAmountPaid": 255586619.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 173744573.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2024-06",
      "TotalAmountPaid": -60466155.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2024-06",
      "TotalAmountPaid": -17326763.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2024-06",
      "TotalAmountPaid": 15526667.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 6277817.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2024-06",
      "TotalAmountPaid": 45528885.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2024-06",
      "TotalAmountPaid": 11368838.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2024-06",
      "TotalAmountPaid": 62162841.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 151000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 27876831.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2024-06",
      "TotalAmountPaid": 140695322.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1896300.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2024-06",
      "TotalAmountPaid": 42084154.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-06",
      "TotalAmountPaid": 291497879.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 236843529.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2024-07",
      "TotalAmountPaid": 5018532.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2024-07",
      "TotalAmountPaid": -11975301.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2024-07",
      "TotalAmountPaid": 30783568.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 6072624.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2024-07",
      "TotalAmountPaid": 41979198.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2024-07",
      "TotalAmountPaid": 5933845.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2024-07",
      "TotalAmountPaid": 52418073.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 182000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 24054031.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2024-07",
      "TotalAmountPaid": 130679287.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1576883.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2024-07",
      "TotalAmountPaid": 35852636.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-07",
      "TotalAmountPaid": 249292955.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 233945656.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2024-08",
      "TotalAmountPaid": -44792720.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2024-08",
      "TotalAmountPaid": -13282758.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2024-08",
      "TotalAmountPaid": 33897199.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 5815389.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2024-08",
      "TotalAmountPaid": 43060188.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2024-08",
      "TotalAmountPaid": 21396594.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2024-08",
      "TotalAmountPaid": 50356000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 151000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 39375325.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2024-08",
      "TotalAmountPaid": 135355246.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1654436.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2024-08",
      "TotalAmountPaid": 34071605.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-08",
      "TotalAmountPaid": 267297487.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 213040267.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2024-09",
      "TotalAmountPaid": 13672500.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2024-09",
      "TotalAmountPaid": -38739095.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2024-09",
      "TotalAmountPaid": -16017197.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2024-09",
      "TotalAmountPaid": 29019437.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 5995125.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2024-09",
      "TotalAmountPaid": 42985251.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2024-09",
      "TotalAmountPaid": 7909206.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2024-09",
      "TotalAmountPaid": 52709057.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 158000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 19146890.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2024-09",
      "TotalAmountPaid": 132581679.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1907458.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2024-09",
      "TotalAmountPaid": 35784070.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-09",
      "TotalAmountPaid": 263785950.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 208562881.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "AED",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2024-10",
      "TotalAmountPaid": -10610338.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2024-10",
      "TotalAmountPaid": -13299416.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2024-10",
      "TotalAmountPaid": 45760696.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 5928255.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2024-10",
      "TotalAmountPaid": 44080092.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 7241125.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2024-10",
      "TotalAmountPaid": 59942518.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 189000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 29834845.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2024-10",
      "TotalAmountPaid": 135722324.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1837661.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2024-10",
      "TotalAmountPaid": 40669535.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-10",
      "TotalAmountPaid": 258823058.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 237242905.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "AED",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2024-11",
      "TotalAmountPaid": 85497651.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2024-11",
      "TotalAmountPaid": -10464723.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2024-11",
      "TotalAmountPaid": 45225864.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 4079281.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2024-11",
      "TotalAmountPaid": 38910747.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2024-11",
      "TotalAmountPaid": 3302252.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2024-11",
      "TotalAmountPaid": 46878999.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2024-11",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 158000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 13350855.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2024-11",
      "TotalAmountPaid": 120674100.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1806042.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2024-11",
      "TotalAmountPaid": 32398340.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-11",
      "TotalAmountPaid": 202175909.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 150233312.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "AED",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2024-12",
      "TotalAmountPaid": 24676772.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2024-12",
      "TotalAmountPaid": -14180989.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2024-12",
      "TotalAmountPaid": 52360039.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 4197197.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2024-12",
      "TotalAmountPaid": 44545017.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2024-12",
      "TotalAmountPaid": 9403129.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2024-12",
      "TotalAmountPaid": 56398097.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2024-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 181000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 17444857.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2024-12",
      "TotalAmountPaid": 137164480.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2024-12",
      "TotalAmountPaid": 2162678.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2024-12",
      "TotalAmountPaid": 38729910.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-12",
      "TotalAmountPaid": 253489251.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 163819055.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "AED",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2025-01",
      "TotalAmountPaid": 639549.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2025-01",
      "TotalAmountPaid": -15079621.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2025-01",
      "TotalAmountPaid": 53087937.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 3612873.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2025-01",
      "TotalAmountPaid": 43062600.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2025-01",
      "TotalAmountPaid": 6267741.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2025-01",
      "TotalAmountPaid": 56210393.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 153000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 27220135.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2025-01",
      "TotalAmountPaid": 132818703.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2172856.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2025-01",
      "TotalAmountPaid": 38663979.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-01",
      "TotalAmountPaid": 254514694.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 157729662.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "AED",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALF",
      "MONTH": "2025-02",
      "TotalAmountPaid": 8167040.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2025-02",
      "TotalAmountPaid": 13393569.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2025-02",
      "TotalAmountPaid": -16193883.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2025-02",
      "TotalAmountPaid": 51980515.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "AMT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 3805166.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2025-02",
      "TotalAmountPaid": 45216762.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2025-02",
      "TotalAmountPaid": 7354878.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2025-02",
      "TotalAmountPaid": 58909181.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2025-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 158000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 26449585.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2025-02",
      "TotalAmountPaid": 139610548.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2025-02",
      "TotalAmountPaid": 2446206.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2025-02",
      "TotalAmountPaid": 40564985.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-02",
      "TotalAmountPaid": 260224993.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 162920949.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALG",
      "MONTH": "2025-03",
      "TotalAmountPaid": -11053448.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALP",
      "MONTH": "2025-03",
      "TotalAmountPaid": -2238151.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "ALS",
      "MONTH": "2025-03",
      "TotalAmountPaid": 4058626.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "CUA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 270319.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAG",
      "MONTH": "2025-03",
      "TotalAmountPaid": 5301414.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAL",
      "MONTH": "2025-03",
      "TotalAmountPaid": 719571.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DAS",
      "MONTH": "2025-03",
      "TotalAmountPaid": 5756503.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "DPL",
      "MONTH": "2025-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 7000.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RJT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 5012150.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLG",
      "MONTH": "2025-03",
      "TotalAmountPaid": 16107462.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLP",
      "MONTH": "2025-03",
      "TotalAmountPaid": 294217.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "RLS",
      "MONTH": "2025-03",
      "TotalAmountPaid": 3736494.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-03",
      "TotalAmountPaid": 30783382.0
    },
    {
      "CodeOffice": "DJPTR",
      "CodeTaxe": "TVA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 17640162.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1700.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-03",
      "TotalAmountPaid": 195500.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 104550.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 120.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-04",
      "TotalAmountPaid": 13800.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 7380.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 38318.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 6000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-01",
      "TotalAmountPaid": 41510.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-01",
      "TotalAmountPaid": 2940925.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-01",
      "TotalAmountPaid": 462400.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1636408.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-02",
      "TotalAmountPaid": 776727.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 56937.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-02",
      "TotalAmountPaid": 11040.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-02",
      "TotalAmountPaid": 28.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 7000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "PLA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 12000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-02",
      "TotalAmountPaid": 42.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-02",
      "TotalAmountPaid": 384110.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-02",
      "TotalAmountPaid": 2563925.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-02",
      "TotalAmountPaid": 727640.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 2234954.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-03",
      "TotalAmountPaid": 53554.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 66089.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 8000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-03",
      "TotalAmountPaid": 71480.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-03",
      "TotalAmountPaid": 812452.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-03",
      "TotalAmountPaid": 484000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 947911.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-04",
      "TotalAmountPaid": 509421.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 138238.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-04",
      "TotalAmountPaid": 120780.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-04",
      "TotalAmountPaid": 112728.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 18000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1412.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1930494.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-04",
      "TotalAmountPaid": 7358361.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-04",
      "TotalAmountPaid": 547200.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 7180853.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 38047.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 9000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-05",
      "TotalAmountPaid": 82900.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1055286.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-05",
      "TotalAmountPaid": 365336.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 655538.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-06",
      "TotalAmountPaid": 461252.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 102180.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-06",
      "TotalAmountPaid": 30700.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-06",
      "TotalAmountPaid": 840.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DPI",
      "MONTH": "2024-06",
      "TotalAmountPaid": 43600.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 12000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "PLA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 48000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-06",
      "TotalAmountPaid": 30.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-06",
      "TotalAmountPaid": 731764.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-06",
      "TotalAmountPaid": 4013704.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-06",
      "TotalAmountPaid": 178448.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 4023100.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 49020.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 6000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-07",
      "TotalAmountPaid": 122400.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-07",
      "TotalAmountPaid": 2184185.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-07",
      "TotalAmountPaid": 270560.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1302702.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-08",
      "TotalAmountPaid": 441360.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 57041.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-08",
      "TotalAmountPaid": 16800.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DPI",
      "MONTH": "2024-08",
      "TotalAmountPaid": 43600.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 8000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-08",
      "TotalAmountPaid": 390590.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-08",
      "TotalAmountPaid": 2523238.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-08",
      "TotalAmountPaid": 192720.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1817877.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 81856.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-09",
      "TotalAmountPaid": 40320.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1118.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DPI",
      "MONTH": "2024-09",
      "TotalAmountPaid": 6976.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 10000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "PLA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 37500.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-09",
      "TotalAmountPaid": 142.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-09",
      "TotalAmountPaid": 359690.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-09",
      "TotalAmountPaid": 2139313.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-09",
      "TotalAmountPaid": 270781.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1744799.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 85528.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-10",
      "TotalAmountPaid": 19200.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DPI",
      "MONTH": "2024-10",
      "TotalAmountPaid": 16800.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 8000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-10",
      "TotalAmountPaid": 691720.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-10",
      "TotalAmountPaid": 2171177.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-10",
      "TotalAmountPaid": 119424.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 2254096.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 40685.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-11",
      "TotalAmountPaid": 31680.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-11",
      "TotalAmountPaid": 4538.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "DPI",
      "MONTH": "2024-11",
      "TotalAmountPaid": 6976.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 5000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "PLA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 72000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-11",
      "TotalAmountPaid": 318.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-11",
      "TotalAmountPaid": 473350.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1072145.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-11",
      "TotalAmountPaid": 37300.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 2154131.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "AIB",
      "MONTH": "2024-12",
      "TotalAmountPaid": 305732.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 31182.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 4000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-12",
      "TotalAmountPaid": 92800.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-12",
      "TotalAmountPaid": 2952751.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-12",
      "TotalAmountPaid": 146000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1681159.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "CUA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 6670.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 1000.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-01",
      "TotalAmountPaid": 67900.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-01",
      "TotalAmountPaid": 604900.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TIC8",
      "MONTH": "2025-01",
      "TotalAmountPaid": 2080.0
    },
    {
      "CodeOffice": "DJQBR",
      "CodeTaxe": "TVA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 398179.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 129939.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 46000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-01",
      "TotalAmountPaid": 345618.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-01",
      "TotalAmountPaid": 6268123.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 7158805.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 74010.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 39000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-02",
      "TotalAmountPaid": 262403.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-02",
      "TotalAmountPaid": 7908275.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 4517850.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 178085.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 74000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-03",
      "TotalAmountPaid": 526353.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-03",
      "TotalAmountPaid": 12846152.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 10241967.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 61339.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 37000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-04",
      "TotalAmountPaid": 5575131.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 3624600.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "AMT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 9189672.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 159087.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 54000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-05",
      "TotalAmountPaid": 816294.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-05",
      "TotalAmountPaid": 4048429.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 8441284.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1041095.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 150000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1661955.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-06",
      "TotalAmountPaid": 17379636.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 53961924.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 4980760.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 160000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-07",
      "TotalAmountPaid": 2054533.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-07",
      "TotalAmountPaid": 358106195.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 285063391.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 47256.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 50000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-08",
      "TotalAmountPaid": 3874347.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 2750529.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "AMT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 10000000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 1611387.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 75000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-09",
      "TotalAmountPaid": 2715224.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-09",
      "TotalAmountPaid": 124228661.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 93265375.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 307128.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 44000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-10",
      "TotalAmountPaid": 220182.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-10",
      "TotalAmountPaid": 9293728.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 16308583.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 35379.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 46000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-11",
      "TotalAmountPaid": 220000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-11",
      "TotalAmountPaid": 2463050.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 2037491.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "AMT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 4400000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 764354.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 45000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-12",
      "TotalAmountPaid": 95659.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 20173295.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 40245514.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 133919.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 40000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-01",
      "TotalAmountPaid": 3171262.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 7013751.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 69660.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 25000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-02",
      "TotalAmountPaid": 42220.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-02",
      "TotalAmountPaid": 5970134.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 4132680.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 79187.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 33000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-03",
      "TotalAmountPaid": 446247.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-03",
      "TotalAmountPaid": 3913228.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-03",
      "TotalAmountPaid": 273367.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 4053908.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 190311.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 36000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-04",
      "TotalAmountPaid": 214629.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-04",
      "TotalAmountPaid": 3446320.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 9881931.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "AMT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 8092911.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 218774.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 55000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-05",
      "TotalAmountPaid": 270253.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-05",
      "TotalAmountPaid": 17851789.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 13231832.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "AMT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 33253223.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 113208.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 37000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-06",
      "TotalAmountPaid": 11495366.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 7102833.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 311707.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 43000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-07",
      "TotalAmountPaid": 163404.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-07",
      "TotalAmountPaid": 5912564.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 16193350.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 58761.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "DAL",
      "MONTH": "2023-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 34000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-08",
      "TotalAmountPaid": 235804.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-08",
      "TotalAmountPaid": 4117837.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 3373599.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 53789.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 32000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-09",
      "TotalAmountPaid": 3346218.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 3024291.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 97202.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 39000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-10",
      "TotalAmountPaid": 558012.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-10",
      "TotalAmountPaid": 4694635.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 5385860.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "AMT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 500000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 196011.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 61000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-11",
      "TotalAmountPaid": 758539.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-11",
      "TotalAmountPaid": 18620956.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 11739001.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 288096.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "DAL",
      "MONTH": "2023-12",
      "TotalAmountPaid": 242500.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 72000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-12",
      "TotalAmountPaid": 360000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-12",
      "TotalAmountPaid": 16986045.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 16164142.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "AMT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 125000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 120575.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 48000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-01",
      "TotalAmountPaid": 104603.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-01",
      "TotalAmountPaid": 7768991.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1211813.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 6937722.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 844130.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 38000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-02",
      "TotalAmountPaid": 570355.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1895477.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 42453639.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 137734.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 33000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-03",
      "TotalAmountPaid": 3407858.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 7227706.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 76301.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "DAL",
      "MONTH": "2024-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 36000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-04",
      "TotalAmountPaid": 185771.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-04",
      "TotalAmountPaid": 4706379.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1610271.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 4479359.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 33593.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "DAL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 15000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 45000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-05",
      "TotalAmountPaid": 562516.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1370510.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1126500.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1987396.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "AIB",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 189543.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 64000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-06",
      "TotalAmountPaid": 206671.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-06",
      "TotalAmountPaid": 3087012.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1570440.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 9963745.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "AIB",
      "MONTH": "2024-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 385226.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 59000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1081384.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-07",
      "TotalAmountPaid": 6159159.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1565828.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 19422795.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 19989.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 26000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-08",
      "TotalAmountPaid": 40000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-08",
      "TotalAmountPaid": 2207094.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1224312.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "AIB",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "AMT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 625000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 229918.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 40000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-09",
      "TotalAmountPaid": 598453.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-09",
      "TotalAmountPaid": 4195771.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-09",
      "TotalAmountPaid": 255000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 11869354.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 127836.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 42000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-10",
      "TotalAmountPaid": 280828.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-10",
      "TotalAmountPaid": 6396801.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 7219489.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "AMT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 10439966.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 421703.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 77000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-11",
      "TotalAmountPaid": 798324.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-11",
      "TotalAmountPaid": 9973211.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-11",
      "TotalAmountPaid": 5753640.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 22739049.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "AMT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1700000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 349258.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 98000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-12",
      "TotalAmountPaid": 452422.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-12",
      "TotalAmountPaid": 5818952.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC30",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1802850.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 18271665.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 255813.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 79000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-01",
      "TotalAmountPaid": 377531.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-01",
      "TotalAmountPaid": 16947540.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC30",
      "MONTH": "2025-01",
      "TotalAmountPaid": 456351.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 14570225.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 181119.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FBD",
      "MONTH": "2025-02",
      "TotalAmountPaid": 562546.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 69000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1420484.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-02",
      "TotalAmountPaid": 12138161.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC30",
      "MONTH": "2025-02",
      "TotalAmountPaid": 2203837.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC5",
      "MONTH": "2025-02",
      "TotalAmountPaid": 172286.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2025-02",
      "TotalAmountPaid": 10325278.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "CUA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 164358.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 23000.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC10",
      "MONTH": "2025-03",
      "TotalAmountPaid": 343151.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TIC23",
      "MONTH": "2025-03",
      "TotalAmountPaid": 5666851.0
    },
    {
      "CodeOffice": "DJREV",
      "CodeTaxe": "TVA",
      "MONTH": "2025-03",
      "TotalAmountPaid": 8819425.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 5309000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 4584000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 5819000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 4753000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 4802000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 5225000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 6237000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 5320000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 4427000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 5569000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 4823000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 4713000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 5118000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 5276000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 4906000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 5222000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 5608000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 5575000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 6019000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 6752000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 5309000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 5751000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "AMD",
      "MONTH": "2023-11",
      "TotalAmountPaid": -15000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 5209000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 5043000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 4202000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 3684000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 5322000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 4866000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 5721000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 5598000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 5073000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "AMD",
      "MONTH": "2024-08",
      "TotalAmountPaid": -35000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "AMT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 35000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 4920000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 4851000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "AMT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 500000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 6716000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 5708000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 5108000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 4882000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "AMT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 80000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 4723000.0
    },
    {
      "CodeOffice": "DJTRS",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 574000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "AMD",
      "MONTH": "2022-01",
      "TotalAmountPaid": -10000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 8334.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 304000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 740268.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-01",
      "TotalAmountPaid": 416733.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 1110402.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 458406.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 81845.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 409000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 2676928.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-02",
      "TotalAmountPaid": 137281.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 4015392.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 151009.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 25572.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 450000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1268900.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1903350.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 58636.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 397000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-04",
      "TotalAmountPaid": 28324.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-04",
      "TotalAmountPaid": 118680.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 1317821.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 72046.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 481000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 317655.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-05",
      "TotalAmountPaid": 26792.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-05",
      "TotalAmountPaid": 947684.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 476483.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 1594476.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "AIB",
      "MONTH": "2022-06",
      "TotalAmountPaid": 68216.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 91509.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 457000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1481376.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-06",
      "TotalAmountPaid": 137281.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-06",
      "TotalAmountPaid": 127558.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 2222064.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 4602024.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "AIB",
      "MONTH": "2022-07",
      "TotalAmountPaid": 386760.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 60378.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 432000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 2696627.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-07",
      "TotalAmountPaid": 780200.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-07",
      "TotalAmountPaid": 442152.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 4044942.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 3141195.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 123542.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 522000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 593465.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-08",
      "TotalAmountPaid": 184919.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 890198.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 3323426.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 76036.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 512000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 613200.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-09",
      "TotalAmountPaid": 187877.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-09",
      "TotalAmountPaid": 1984095.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 919800.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 3001024.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 23088.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 497000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 613063.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 919595.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 1154441.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 11776.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 525000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 972143.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 1458214.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 588800.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 54383.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 595000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 974087.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 14490.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 1461130.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 1000749.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 110993.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 640000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 593366.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-01",
      "TotalAmountPaid": 2045505.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 890048.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 2726200.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 20230.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 478000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 358868.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-02",
      "TotalAmountPaid": 2326450.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 538302.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 1244144.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 27335.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 646000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 2326304.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1098135.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 3489456.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1476596.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 546000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 593366.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 890048.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 55100.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 678000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 3994552.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-05",
      "TotalAmountPaid": 693200.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 5991828.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 2824340.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 35532.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 638000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1764610.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1989500.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 2646914.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 2062050.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "AIB",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 12034.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 676000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 2726342.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 4089513.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 601717.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 131432.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 684000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 4023346.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 6035020.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 4791680.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 186184.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 512000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 2825983.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 4238975.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 4202268.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 119884.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 628000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 665253.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-10",
      "TotalAmountPaid": 831440.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 997880.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 914584.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 114192.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 803000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 4154990.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-11",
      "TotalAmountPaid": 618050.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1265.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 6232484.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1729731.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 139179.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 682000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1924084.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-12",
      "TotalAmountPaid": 297350.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 2886126.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 327085.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 622000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 4061116.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 6091675.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 54136.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 519000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 3096446.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 4644669.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 125575.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 543000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 3858768.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-03",
      "TotalAmountPaid": 538250.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-03",
      "TotalAmountPaid": 2246353.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 5788152.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 592075.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 119586.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 506000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 6646737.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-04",
      "TotalAmountPaid": 566970.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 9970105.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 761189.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "AIB",
      "MONTH": "2024-05",
      "TotalAmountPaid": 136500.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 356932.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 599000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 3098489.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1282318.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-05",
      "TotalAmountPaid": 5497952.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 4647733.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 9859643.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 144603.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 544000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 4259429.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-06",
      "TotalAmountPaid": 241946.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-06",
      "TotalAmountPaid": 2800296.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 6389143.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 2777471.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 328287.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 680000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 4060050.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-07",
      "TotalAmountPaid": 946401.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 6090075.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 3667491.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 141271.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 652000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 5022375.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-08",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-08",
      "TotalAmountPaid": 629250.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 7533563.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1622248.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 88520.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 690000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 4060000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 6090000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 2397013.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "AMT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 4243200.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 42148.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 590000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 5983896.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 8975844.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1796100.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVU",
      "MONTH": "2024-10",
      "TotalAmountPaid": 18000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 3975.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 536000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1927121.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-11",
      "TotalAmountPaid": 198750.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 2890682.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 218625.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 523000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 536000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 538000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 4817497.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 7226244.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 70000.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "FJT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 973652.0
    },
    {
      "CodeOffice": "DJUKB",
      "CodeTaxe": "TTT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 1460479.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 544571.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 1468800.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 22402298.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 594000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2022-01",
      "TotalAmountPaid": 5535000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-01",
      "TotalAmountPaid": 349730.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-01",
      "TotalAmountPaid": 4962500.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-01",
      "TotalAmountPaid": 9521108.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC5",
      "MONTH": "2022-01",
      "TotalAmountPaid": 301510.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 15196245.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 88193.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 502000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 1310777.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-02",
      "TotalAmountPaid": 1366176.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-02",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 1966166.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 2893193.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 803536.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 22402298.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 652000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2022-03",
      "TotalAmountPaid": 5400000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-03",
      "TotalAmountPaid": 1884017.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-03",
      "TotalAmountPaid": 4962446.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-03",
      "TotalAmountPaid": 9705372.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-03",
      "TotalAmountPaid": 134528.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 13786352.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 215584.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 571000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 1337520.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-04",
      "TotalAmountPaid": 3607109.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-04",
      "TotalAmountPaid": 3368032.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 2006280.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 5768984.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 228474.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 7446699.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-05",
      "TotalAmountPaid": 150000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 654000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-05",
      "TotalAmountPaid": 3187916.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 3076110.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 339176.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 14893399.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 597000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2022-06",
      "TotalAmountPaid": 10935000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-06",
      "TotalAmountPaid": 1590899.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-06",
      "TotalAmountPaid": 9925000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-06",
      "TotalAmountPaid": 6024813.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 13872309.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 500063.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 22041009.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-07",
      "TotalAmountPaid": 900000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 726000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2022-07",
      "TotalAmountPaid": 10900000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-07",
      "TotalAmountPaid": 1231437.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-07",
      "TotalAmountPaid": 10130750.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-07",
      "TotalAmountPaid": 11826393.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 17141678.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "AMT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1000000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 292219.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-08",
      "TotalAmountPaid": 732000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 715000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2022-08",
      "TotalAmountPaid": 5350000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1163249.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-08",
      "TotalAmountPaid": 5047000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-08",
      "TotalAmountPaid": 5928741.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 9177037.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 93174.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 14891923.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-09",
      "TotalAmountPaid": 900000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 697000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 1548944.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-09",
      "TotalAmountPaid": 835612.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-09",
      "TotalAmountPaid": 7208334.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 2323416.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 6353256.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 192927.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 14891923.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 710000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2022-10",
      "TotalAmountPaid": 10850000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-10",
      "TotalAmountPaid": 1618744.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-10",
      "TotalAmountPaid": 10073720.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-10",
      "TotalAmountPaid": 5855831.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-10",
      "TotalAmountPaid": 228128.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 13530637.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 282591.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 14898834.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-11",
      "TotalAmountPaid": 900000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 756000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2022-11",
      "TotalAmountPaid": 5400000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-11",
      "TotalAmountPaid": 847278.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-11",
      "TotalAmountPaid": 4962500.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-11",
      "TotalAmountPaid": 7725143.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 10160664.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "AIB",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 280766.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2022-12",
      "TotalAmountPaid": 2052000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 798000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2022-12",
      "TotalAmountPaid": 5400000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-12",
      "TotalAmountPaid": 130864.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-12",
      "TotalAmountPaid": 4962500.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 8737302.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-12",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 8904475.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 450102.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-01",
      "TotalAmountPaid": 1562900.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 781000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2023-01",
      "TotalAmountPaid": 8730000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-01",
      "TotalAmountPaid": 518048.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-01",
      "TotalAmountPaid": 8090375.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-01",
      "TotalAmountPaid": 6765773.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 10694411.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 549483.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-02",
      "TotalAmountPaid": 900000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 681000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 1144220.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2023-02",
      "TotalAmountPaid": 3240000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-02",
      "TotalAmountPaid": 2255091.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-02",
      "TotalAmountPaid": 2977467.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-02",
      "TotalAmountPaid": 5852607.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 1716330.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 11495180.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "AMT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 655103.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 416233.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 749000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2023-03",
      "TotalAmountPaid": 8640000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-03",
      "TotalAmountPaid": 686980.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-03",
      "TotalAmountPaid": 7940000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-03",
      "TotalAmountPaid": 1447103.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 9458982.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 229948.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLL",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-04",
      "TotalAmountPaid": 576000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 676000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-04",
      "TotalAmountPaid": 1947669.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-04",
      "TotalAmountPaid": 3882442.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-04",
      "TotalAmountPaid": 270101.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 4636341.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 164459.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 853000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2023-05",
      "TotalAmountPaid": 5400000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1151520.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-05",
      "TotalAmountPaid": 4962500.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-05",
      "TotalAmountPaid": 4619165.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-05",
      "TotalAmountPaid": 1993600.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 7344874.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "AIB",
      "MONTH": "2023-06",
      "TotalAmountPaid": 470600.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 132487.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1110000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 788000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1635494.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-06",
      "TotalAmountPaid": 4748297.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 7374149.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 191703.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-07",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 770000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2023-07",
      "TotalAmountPaid": 2180000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-07",
      "TotalAmountPaid": 1546084.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-07",
      "TotalAmountPaid": 2049350.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-07",
      "TotalAmountPaid": 841225.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-07",
      "TotalAmountPaid": 101795.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 4693348.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 347139.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-08",
      "TotalAmountPaid": 900000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 858000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2023-08",
      "TotalAmountPaid": 10910000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-08",
      "TotalAmountPaid": 753256.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-08",
      "TotalAmountPaid": 10010430.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-08",
      "TotalAmountPaid": 2112263.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 11556850.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 101300.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 228188.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 647000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 3918406.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-09",
      "TotalAmountPaid": 700816.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-09",
      "TotalAmountPaid": 162639.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 5877609.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1606971.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "AIB",
      "MONTH": "2023-10",
      "TotalAmountPaid": 243070.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 357967.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1005000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 731000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 4301600.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2023-10",
      "TotalAmountPaid": 8730000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-10",
      "TotalAmountPaid": 846786.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-10",
      "TotalAmountPaid": 8020111.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-10",
      "TotalAmountPaid": 5706291.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-10",
      "TotalAmountPaid": 1663708.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 6452398.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 10076531.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 654994.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 17021857.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-11",
      "TotalAmountPaid": 5865300.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 807000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2023-11",
      "TotalAmountPaid": 11880000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1739979.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-11",
      "TotalAmountPaid": 11033500.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-11",
      "TotalAmountPaid": 13535240.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1122512.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 20433771.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "AMT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 871948.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 427115.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-12",
      "TotalAmountPaid": 900000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 663000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 3322355.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2023-12",
      "TotalAmountPaid": 18316000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1615380.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-12",
      "TotalAmountPaid": 16905278.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-12",
      "TotalAmountPaid": 3156702.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1482809.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 4983533.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 15529831.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "AIB",
      "MONTH": "2024-01",
      "TotalAmountPaid": 427306.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 480370.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 14537476.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-01",
      "TotalAmountPaid": 450000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 613000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1918230.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2024-01",
      "TotalAmountPaid": 10800000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1410459.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-01",
      "TotalAmountPaid": 9925000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-01",
      "TotalAmountPaid": 9351564.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-01",
      "TotalAmountPaid": 4073443.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 2877345.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 17092926.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 915387.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 14537476.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1950000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 518000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1926398.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2024-02",
      "TotalAmountPaid": 13094000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1906253.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-02",
      "TotalAmountPaid": 12146265.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-02",
      "TotalAmountPaid": 25010962.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-02",
      "TotalAmountPaid": 4206880.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 2889597.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 33967996.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "AMT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 100000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 913369.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAP",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1250.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 14537475.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-03",
      "TotalAmountPaid": 2224500.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 619000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1381495.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2024-03",
      "TotalAmountPaid": 8640000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1642450.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-03",
      "TotalAmountPaid": 7940000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-03",
      "TotalAmountPaid": 11543513.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-03",
      "TotalAmountPaid": 5315776.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 2072243.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 20666458.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 836111.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1294500.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DPI",
      "MONTH": "2024-04",
      "TotalAmountPaid": 4800.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 629000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1321865.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2024-04",
      "TotalAmountPaid": 15262000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1290017.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-04",
      "TotalAmountPaid": 13836845.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-04",
      "TotalAmountPaid": 4547065.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-04",
      "TotalAmountPaid": 533875.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1982798.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 15700151.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 708484.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 14537318.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-05",
      "TotalAmountPaid": 2073000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 737000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 2964808.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 5430000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1386144.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-05",
      "TotalAmountPaid": 5058992.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-05",
      "TotalAmountPaid": 11986528.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-05",
      "TotalAmountPaid": 824238.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 4447214.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 15190074.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 442176.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 7193424.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-06",
      "TotalAmountPaid": 2625100.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 541000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 4835752.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2024-06",
      "TotalAmountPaid": 6540000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-06",
      "TotalAmountPaid": 1246005.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-06",
      "TotalAmountPaid": 6147984.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-06",
      "TotalAmountPaid": 11315647.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 7253628.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 14941663.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "AIB",
      "MONTH": "2024-07",
      "TotalAmountPaid": 35497.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "AMT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 50000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 771768.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 7192908.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1950000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 561000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 959054.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2024-07",
      "TotalAmountPaid": 18444000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1388338.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-07",
      "TotalAmountPaid": 16947825.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-07",
      "TotalAmountPaid": 8916269.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-07",
      "TotalAmountPaid": 2778840.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1438582.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 20230642.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "AIB",
      "MONTH": "2024-08",
      "TotalAmountPaid": 162414.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 296838.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-08",
      "TotalAmountPaid": 683200.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 685000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-08",
      "TotalAmountPaid": 845493.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-08",
      "TotalAmountPaid": 5544138.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-08",
      "TotalAmountPaid": 1798228.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 5577657.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 631843.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 14368640.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 662000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1914921.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2024-09",
      "TotalAmountPaid": 5400000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-09",
      "TotalAmountPaid": 700844.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-09",
      "TotalAmountPaid": 4962500.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-09",
      "TotalAmountPaid": 9640461.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1149220.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 2872382.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 11736588.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 1273545.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 14386256.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-10",
      "TotalAmountPaid": 675000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 574000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 8670000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-10",
      "TotalAmountPaid": 841292.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-10",
      "TotalAmountPaid": 8036525.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-10",
      "TotalAmountPaid": 13774828.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-10",
      "TotalAmountPaid": 2484689.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 27860217.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 706417.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DAT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 7268660.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-11",
      "TotalAmountPaid": 755900.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 494000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 959134.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "PAL",
      "MONTH": "2024-11",
      "TotalAmountPaid": 10916000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-11",
      "TotalAmountPaid": 407600.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-11",
      "TotalAmountPaid": 10121822.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-11",
      "TotalAmountPaid": 6743583.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-11",
      "TotalAmountPaid": 369132.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1438701.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 16416346.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 64829.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "DLLP",
      "MONTH": "2024-12",
      "TotalAmountPaid": 288000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 535000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 959123.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-12",
      "TotalAmountPaid": 213809.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-12",
      "TotalAmountPaid": 827425.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-12",
      "TotalAmountPaid": 63120.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1438685.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 706482.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "CUA",
      "MONTH": "2025-01",
      "TotalAmountPaid": 126480.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 491000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 497000.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FJT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 1918146.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "TTT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 2877220.0
    },
    {
      "CodeOffice": "DJZEA",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 62000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 147988.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2022-01",
      "TotalAmountPaid": 5544.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-01",
      "TotalAmountPaid": 252000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-01",
      "TotalAmountPaid": 6520196.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-01",
      "TotalAmountPaid": 2024645.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-01",
      "TotalAmountPaid": 8255514.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 273647.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 12939487.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2022-02",
      "TotalAmountPaid": 3444.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEM",
      "MONTH": "2022-02",
      "TotalAmountPaid": 10640.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DJU",
      "MONTH": "2022-02",
      "TotalAmountPaid": 26920.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-02",
      "TotalAmountPaid": 172000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-02",
      "TotalAmountPaid": 24880.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-02",
      "TotalAmountPaid": 10732100.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-02",
      "TotalAmountPaid": 59258.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-02",
      "TotalAmountPaid": 6627237.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2022-02",
      "TotalAmountPaid": 541.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-02",
      "TotalAmountPaid": 16724367.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 576544.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 4031919.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DBL",
      "MONTH": "2022-03",
      "TotalAmountPaid": 15200.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2022-03",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEM",
      "MONTH": "2022-03",
      "TotalAmountPaid": 124950.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DJU",
      "MONTH": "2022-03",
      "TotalAmountPaid": 4800.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-03",
      "TotalAmountPaid": 206000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-03",
      "TotalAmountPaid": 12543407.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-03",
      "TotalAmountPaid": 2806782.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-03",
      "TotalAmountPaid": 15726154.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 270160.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 9898376.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2022-04",
      "TotalAmountPaid": 259336.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-04",
      "TotalAmountPaid": 195000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-04",
      "TotalAmountPaid": 9994828.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-04",
      "TotalAmountPaid": 5292844.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-04",
      "TotalAmountPaid": 14852759.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 342997.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2022-05",
      "TotalAmountPaid": 144144.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-05",
      "TotalAmountPaid": 134000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-05",
      "TotalAmountPaid": 12275983.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-05",
      "TotalAmountPaid": 2399315.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-05",
      "TotalAmountPaid": 14801102.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 245667.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 10089561.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAL",
      "MONTH": "2022-06",
      "TotalAmountPaid": 28000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2022-06",
      "TotalAmountPaid": 120232.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEM",
      "MONTH": "2022-06",
      "TotalAmountPaid": 167328.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-06",
      "TotalAmountPaid": 129000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-06",
      "TotalAmountPaid": 3928119.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-06",
      "TotalAmountPaid": 10207264.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-06",
      "TotalAmountPaid": 10820101.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 201611.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 9562134.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2022-07",
      "TotalAmountPaid": 168882.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-07",
      "TotalAmountPaid": 84000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-07",
      "TotalAmountPaid": 9116780.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-07",
      "TotalAmountPaid": 2217752.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-07",
      "TotalAmountPaid": 12187574.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 414794.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 4431814.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2022-08",
      "TotalAmountPaid": 107016.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-08",
      "TotalAmountPaid": 128000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-08",
      "TotalAmountPaid": 20253453.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-08",
      "TotalAmountPaid": 1122674.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-08",
      "TotalAmountPaid": 23333068.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 245767.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 5858726.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DJU",
      "MONTH": "2022-09",
      "TotalAmountPaid": 240.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 70800.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-09",
      "TotalAmountPaid": 134000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-09",
      "TotalAmountPaid": 10019697.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-09",
      "TotalAmountPaid": 3753812.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-09",
      "TotalAmountPaid": 13622107.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 340505.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 5961734.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-10",
      "TotalAmountPaid": 121000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-10",
      "TotalAmountPaid": 13341765.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-10",
      "TotalAmountPaid": 2744373.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-10",
      "TotalAmountPaid": 16739759.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 332144.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2022-11",
      "TotalAmountPaid": 268660.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-11",
      "TotalAmountPaid": 152000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-11",
      "TotalAmountPaid": 13282014.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-11",
      "TotalAmountPaid": 4966227.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-11",
      "TotalAmountPaid": 17918757.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 157479.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DJU",
      "MONTH": "2022-12",
      "TotalAmountPaid": 480.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DYA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 23400.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2022-12",
      "TotalAmountPaid": 129000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PAL",
      "MONTH": "2022-12",
      "TotalAmountPaid": 5200.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2022-12",
      "TotalAmountPaid": 6850711.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2022-12",
      "TotalAmountPaid": 31402.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2022-12",
      "TotalAmountPaid": 2319133.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2022-12",
      "TotalAmountPaid": 8797770.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 661851.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 5890506.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DYA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 78000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-01",
      "TotalAmountPaid": 146000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-01",
      "TotalAmountPaid": 24674442.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-01",
      "TotalAmountPaid": 5453323.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-01",
      "TotalAmountPaid": 30655077.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 174804.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 13675573.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-02",
      "TotalAmountPaid": 174000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-02",
      "TotalAmountPaid": 30674.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-02",
      "TotalAmountPaid": 6299150.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-02",
      "TotalAmountPaid": 5618883.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-02",
      "TotalAmountPaid": 11301514.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 635559.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 4845174.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-03",
      "TotalAmountPaid": 257000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-03",
      "TotalAmountPaid": 64694.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-03",
      "TotalAmountPaid": 23982108.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-03",
      "TotalAmountPaid": 742919.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-03",
      "TotalAmountPaid": 5731511.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-03",
      "TotalAmountPaid": 27572242.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 207105.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 12826656.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-04",
      "TotalAmountPaid": 139000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-04",
      "TotalAmountPaid": 171274.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-04",
      "TotalAmountPaid": 8404968.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-04",
      "TotalAmountPaid": 4489036.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-04",
      "TotalAmountPaid": 12928775.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 440256.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 7093613.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-05",
      "TotalAmountPaid": 103000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-05",
      "TotalAmountPaid": 94719.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-05",
      "TotalAmountPaid": 13723629.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-05",
      "TotalAmountPaid": 4159450.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-05",
      "TotalAmountPaid": 18730747.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 354296.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1995416.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-06",
      "TotalAmountPaid": 130000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-06",
      "TotalAmountPaid": 26644.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-06",
      "TotalAmountPaid": 11933995.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-06",
      "TotalAmountPaid": 1140554.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-06",
      "TotalAmountPaid": 13936883.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 600045.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2023-07",
      "TotalAmountPaid": 30884.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-07",
      "TotalAmountPaid": 200000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-07",
      "TotalAmountPaid": 1857.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-07",
      "TotalAmountPaid": 17547825.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-07",
      "TotalAmountPaid": 7042406.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-07",
      "TotalAmountPaid": 23071843.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 490844.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 1728404.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-08",
      "TotalAmountPaid": 174000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-08",
      "TotalAmountPaid": 23079.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-08",
      "TotalAmountPaid": 22460649.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-08",
      "TotalAmountPaid": 2835003.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-08",
      "TotalAmountPaid": 427097.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-08",
      "TotalAmountPaid": 26712761.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 427639.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 6168857.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-09",
      "TotalAmountPaid": 139000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-09",
      "TotalAmountPaid": 82369.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-09",
      "TotalAmountPaid": 19523369.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-09",
      "TotalAmountPaid": 1970545.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-09",
      "TotalAmountPaid": 803366.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-09",
      "TotalAmountPaid": 23146403.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 305552.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 10087224.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-10",
      "TotalAmountPaid": 178000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-10",
      "TotalAmountPaid": 134687.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-10",
      "TotalAmountPaid": 9678020.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-10",
      "TotalAmountPaid": 5099718.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-10",
      "TotalAmountPaid": 181098.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-10",
      "TotalAmountPaid": 14903144.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 196094.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1483761.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2023-11",
      "TotalAmountPaid": 4256.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEM",
      "MONTH": "2023-11",
      "TotalAmountPaid": 119798.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DJU",
      "MONTH": "2023-11",
      "TotalAmountPaid": 28200.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DLLP",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1800.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-11",
      "TotalAmountPaid": 138000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PAL",
      "MONTH": "2023-11",
      "TotalAmountPaid": 36160.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-11",
      "TotalAmountPaid": 20236.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-11",
      "TotalAmountPaid": 6677462.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2023-11",
      "TotalAmountPaid": 113831.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-11",
      "TotalAmountPaid": 2300231.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-11",
      "TotalAmountPaid": 1084203.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-11",
      "TotalAmountPaid": 8916709.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 497122.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 6000389.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2023-12",
      "TotalAmountPaid": 162000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2023-12",
      "TotalAmountPaid": 80121.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2023-12",
      "TotalAmountPaid": 16873486.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2023-12",
      "TotalAmountPaid": 1779837.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2023-12",
      "TotalAmountPaid": 5768139.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2023-12",
      "TotalAmountPaid": 20112691.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 639320.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 6151959.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-01",
      "TotalAmountPaid": 179000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-01",
      "TotalAmountPaid": 82142.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-01",
      "TotalAmountPaid": 8258987.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-01",
      "TotalAmountPaid": 2081367.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-01",
      "TotalAmountPaid": 1951409.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-01",
      "TotalAmountPaid": 10813148.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 493543.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 5665799.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-02",
      "TotalAmountPaid": 195000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-02",
      "TotalAmountPaid": 75653.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-02",
      "TotalAmountPaid": 14921627.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1899789.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-02",
      "TotalAmountPaid": 1067083.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-02",
      "TotalAmountPaid": 17996322.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 156373.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1955643.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-03",
      "TotalAmountPaid": 146000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-03",
      "TotalAmountPaid": 26112.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-03",
      "TotalAmountPaid": 5703761.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1643321.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-03",
      "TotalAmountPaid": 1120938.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-03",
      "TotalAmountPaid": 7348520.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 414640.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 3582843.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-04",
      "TotalAmountPaid": 19180.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-04",
      "TotalAmountPaid": 16268.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DJU",
      "MONTH": "2024-04",
      "TotalAmountPaid": 25680.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 86600.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-04",
      "TotalAmountPaid": 149000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-04",
      "TotalAmountPaid": 23920.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PLA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 26700.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-04",
      "TotalAmountPaid": 50163.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-04",
      "TotalAmountPaid": 14388743.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-04",
      "TotalAmountPaid": 74540.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-04",
      "TotalAmountPaid": 1517563.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-04",
      "TotalAmountPaid": 4450784.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-04",
      "TotalAmountPaid": 17146167.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "AMT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 100000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 598738.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 5299980.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-05",
      "TotalAmountPaid": 32508.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-05",
      "TotalAmountPaid": 74172.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-05",
      "TotalAmountPaid": 176000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-05",
      "TotalAmountPaid": 3400.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-05",
      "TotalAmountPaid": 74710.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-05",
      "TotalAmountPaid": 14557081.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-05",
      "TotalAmountPaid": 20174.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-05",
      "TotalAmountPaid": 7953521.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-05",
      "TotalAmountPaid": 1322539.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-05",
      "TotalAmountPaid": 20891060.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 406607.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 3485229.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-06",
      "TotalAmountPaid": 15666.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-06",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DJU",
      "MONTH": "2024-06",
      "TotalAmountPaid": 42840.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-06",
      "TotalAmountPaid": 160000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-06",
      "TotalAmountPaid": 8400.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PLA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 62400.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-06",
      "TotalAmountPaid": 47996.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-06",
      "TotalAmountPaid": 13900354.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-06",
      "TotalAmountPaid": 17419.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-06",
      "TotalAmountPaid": 2252330.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-06",
      "TotalAmountPaid": 17216338.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 295397.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1853484.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-07",
      "TotalAmountPaid": 5502.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-07",
      "TotalAmountPaid": 31402.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DJU",
      "MONTH": "2024-07",
      "TotalAmountPaid": 20800.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-07",
      "TotalAmountPaid": 167000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-07",
      "TotalAmountPaid": 25140.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-07",
      "TotalAmountPaid": 7540629.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-07",
      "TotalAmountPaid": 4471.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-07",
      "TotalAmountPaid": 1227453.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-07",
      "TotalAmountPaid": 3200426.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-07",
      "TotalAmountPaid": 9225213.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 801621.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 4455002.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-08",
      "TotalAmountPaid": 56672.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-08",
      "TotalAmountPaid": 278768.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DJU",
      "MONTH": "2024-08",
      "TotalAmountPaid": 75560.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-08",
      "TotalAmountPaid": 210000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-08",
      "TotalAmountPaid": 68400.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PLA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 156600.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-08",
      "TotalAmountPaid": 63317.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-08",
      "TotalAmountPaid": 30904189.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-08",
      "TotalAmountPaid": 219868.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-08",
      "TotalAmountPaid": 15391218.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-08",
      "TotalAmountPaid": 395561.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-08",
      "TotalAmountPaid": 43289090.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 690783.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 7864502.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-09",
      "TotalAmountPaid": 28896.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-09",
      "TotalAmountPaid": 349118.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DJU",
      "MONTH": "2024-09",
      "TotalAmountPaid": 121640.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DLL",
      "MONTH": "2024-09",
      "TotalAmountPaid": 5200.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DYA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 0.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-09",
      "TotalAmountPaid": 241000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-09",
      "TotalAmountPaid": 47240.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-09",
      "TotalAmountPaid": 106684.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-09",
      "TotalAmountPaid": 28321924.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-09",
      "TotalAmountPaid": 138715.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-09",
      "TotalAmountPaid": 6594572.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-09",
      "TotalAmountPaid": 1146932.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-09",
      "TotalAmountPaid": 35998125.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 627592.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 5180933.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-10",
      "TotalAmountPaid": 135730.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DJU",
      "MONTH": "2024-10",
      "TotalAmountPaid": 120400.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-10",
      "TotalAmountPaid": 172000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-10",
      "TotalAmountPaid": 6440.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-10",
      "TotalAmountPaid": 69181.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-10",
      "TotalAmountPaid": 23604050.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-10",
      "TotalAmountPaid": 47708.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-10",
      "TotalAmountPaid": 13960209.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-10",
      "TotalAmountPaid": 34240450.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 501513.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 5989094.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-11",
      "TotalAmountPaid": 2500.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-11",
      "TotalAmountPaid": 25522.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-11",
      "TotalAmountPaid": 275898.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DJU",
      "MONTH": "2024-11",
      "TotalAmountPaid": 216520.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-11",
      "TotalAmountPaid": 164000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-11",
      "TotalAmountPaid": 81680.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PLA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 38700.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-11",
      "TotalAmountPaid": 82627.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-11",
      "TotalAmountPaid": 19479075.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-11",
      "TotalAmountPaid": 209217.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-11",
      "TotalAmountPaid": 6044696.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-11",
      "TotalAmountPaid": 1926523.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-11",
      "TotalAmountPaid": 25901943.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "CUA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 128116.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1984359.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAE",
      "MONTH": "2024-12",
      "TotalAmountPaid": 360000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DAP",
      "MONTH": "2024-12",
      "TotalAmountPaid": 3000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEG",
      "MONTH": "2024-12",
      "TotalAmountPaid": 6258.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DEM",
      "MONTH": "2024-12",
      "TotalAmountPaid": 157234.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "DJU",
      "MONTH": "2024-12",
      "TotalAmountPaid": 109800.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2024-12",
      "TotalAmountPaid": 153000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "PAL",
      "MONTH": "2024-12",
      "TotalAmountPaid": 87800.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "RFSH",
      "MONTH": "2024-12",
      "TotalAmountPaid": 27156.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC10",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1427576.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC20",
      "MONTH": "2024-12",
      "TotalAmountPaid": 255106.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC23",
      "MONTH": "2024-12",
      "TotalAmountPaid": 3250730.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TIC8",
      "MONTH": "2024-12",
      "TotalAmountPaid": 1776683.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "TVA",
      "MONTH": "2024-12",
      "TotalAmountPaid": 3732671.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2025-01",
      "TotalAmountPaid": 85000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2025-02",
      "TotalAmountPaid": 79000.0
    },
    {
      "CodeOffice": "DJZFR",
      "CodeTaxe": "FDT",
      "MONTH": "2025-03",
      "TotalAmountPaid": 7000.0
    }
  ];

// Table de liaison CodeTaxe -> TaxeDescription
const taxeDescriptions =[
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
  ];

// Fonction pour filtrer les données par mois donné et liste de bureaux
const filterByMonthAndOffices = (month, selectedOffices) => {
    return transactions.filter(entry => entry.MONTH === month && selectedOffices.includes(entry.CodeOffice));
};

// Sélection du mois et des bureaux (peut être changé dynamiquement)
const selectedMonth = "2022-01";
const selectedOffices = ["DIFTZ"];
const filteredTransactions = filterByMonthAndOffices(selectedMonth, selectedOffices);

// Création du dictionnaire des descriptions des taxes
const taxeMap = {};
taxeDescriptions.forEach(taxe => {
    taxeMap[taxe.CodeTaxe] = taxe.TaxeDescription;
});

// Transformation des données pour générer la matrice pivotée
const transformedData = {};

// Regroupement par CodeTaxe
filteredTransactions.forEach(({ CodeOffice, CodeTaxe, TotalAmountPaid }) => {
    if (!transformedData[CodeTaxe]) {
        transformedData[CodeTaxe] = { CodeTaxe, TaxeDescription: taxeMap[CodeTaxe] || CodeTaxe };
    }
    transformedData[CodeTaxe][CodeOffice] = TotalAmountPaid;
});

// Convertir en tableau utilisable par PrimeReact DataTable
const tableData = Object.values(transformedData);

// Génération dynamique des colonnes pour PrimeReact
const uniqueOffices = new Set(selectedOffices);

const primeColumns = [
    { field: "CodeTaxe", header: "Code Taxe" },
    { field: "TaxeDescription", header: "Description" },
    ...Array.from(uniqueOffices).map(office => ({ field: office, header: office }))
];

// Affichage des résultats
console.log("📌 Table Data:", tableData);
console.log("📌 PrimeReact Columns:", primeColumns);
