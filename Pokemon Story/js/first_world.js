var map = {
    cols: 30,
    rows: 30,
    tsize: 31,
    layers : [
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
],
        [
            363,364,365,366, 364,365,366, 364,365,366, 364,365,366,970,970,970,  970,970,970, 364,365,366, 364,365,366, 364,365,366, 364,365,
            371,372,373,374, 372,373,374, 372,373,374, 372,373,374,970,970,970,   970,970,970,  372,373,374, 372,373,374, 372,373,374, 372,373,
            379,380,381,382, 380,381,382, 380,381,382, 380,381,382,970,970,970,   970,970,970, 380,381,382, 380,381,382, 380,381,382, 380,381,
            387,388,389,390, 388,389,387, 388,389,387, 388,389,390,1034,1034,1034, 1034,1034,855.9, 388,389,387,388,389, 387,388,389,387,388,389,

            363,364,365,366, -1,-1,-1, -1,-1,-1, -1,-1,-1,-1,-1,-1,-1,-1, -1,-1,-1, -1,-1,-1,-1,       396,397,398,-1,397,
            371,372,373,374, 4,4521,4522,4523,4524,4525,4526,-1,-1,-1,-1,-1,-1,-1,-1,4192,12,4194,4195,4196,4197,12,     -1,364,365,366,
            379,380,381,382, 4528,4529,4530,4531,4532,4533,4534,4,-1,-1,-1,-1,4,-1,-1,4200,4201,4202,4203,4204,4205,4206, 4207, 372,373,374,
            387,388,389,390, 4536,4537,4538,4539,4540,4541,4542,-1,-1,-1,-1,-1,-1,-1,-1,4208,4209,4210,4211,4212,4213,4214,4215,380,381,382,
            363,364,365,366, 4544,4545,4546,4547,4548,4549,4550,-1,-1,-1,-1,-1,-1,-1,-1,4216,4217,4218,4219,4220,4221,4222, 4223,388,389,390,
            371,372,373,374, 4552,4553,4554,4555,4556,4557,4558,-1,-1,-1,-1,-1,-1,-1,-1,4224,4225,4226,4227,4228,4229,4230, 4231,364,365,366,
            379,380,381,382, 4560,4561,4562,4563,4564,4565,4566,-1,-1,-1,-1,-1,-1,-1,-1,4232,4233,4234,4235,4236,4237,4238, 4239,372,373,374,
            387,388,389,390, -1,-1,-1,-1,-1,-1,-1,-1,4,4,4,4,4,4,-1,-1,4241,4242,4243,4244,4245,4246,4247,                   380,381,382,
            363,364,365,366, -1,-1,-1,-1,-1,-1,-1,-1,1392,1393,1394,1395,1396,1397,1398,-1,-1,-1,-1,-1,-1,-1,-1,388,389,390,
            371,372,373,374, 12,-1,-1,-1,-1,-1,-1,-1,1400,1401,1402,1403,1404,1405,1406,1407,-1,-1,-1,-1,-1,12,-1,364,365,366,
            379,380,381,382, -1,-1,-1,-1,-1,-1,-1,-1,1408,1409,1410,1411,1412,1413,1414,-1,-1,-1,-1,-1,-1,-1,-1,372,373,374,
            387,388,389,390, -1,-1,-1,-1,-1,-1,4,-1,1416,1417,1418,1419,1420,1421,4,-1,-1,-1,-1,-1,-1,-1,-1,380,381,382,
            363,364,365,366, -1,-1,-1,-1,-1,-1,-1,-1,1424,1425,1426,1427,1428,1429,-1,4,-1,-1,4,-1,-1,-1,-1,388,389,390,
            371,372,373,374, -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,364,365,366,
            379,380,381,382, 4192,4193,4194,4195,4196,4197,4198,4199,-1,-1,12,-1,-1,-1,-1,-1,4520,4521,4522,4523,4524,4525,4526,372,373,374,
            387,388,389,390, 4200,4201,4202,4203,4204,4205,4206,4207,-1,-1,-1,-1,-1,-1,-1,-1,4528,4529,4530,4531,4532,4533,4534,380,381,382,
            363,364,365,366, 4208,4209,4210,4211,4212,4213,4214,4215,-1,-1,-1,-1,-1,-1,-1,-1,4536,4537,4538,4539,4540,4541,4542,388,389,390,
            371,372,373,374, 4216,4217,4218,4219,4220,4221,4222,4223,-1,-1,-1,-1,-1,-1,-1,-1,4544,4545,4546,4547,4548,4549,4550,364,365,366,
            379,380,381,382, 4224,4225,4226,4227,4228,4229,4230,4231,-1,-1,-1,-1,-1,-1,-1,-1,4552,4553,4554,4555,4556,4557,4558,372,373,374,
            387,388,389,390, 4232,4233,4234,4235,4236,4237,4238,4239,4,-1,-1,-1,-1,-1,-1,-1,4560,4561,4562,4563,4564,4565,4566,380,381,382,
            363,396,397,398, 4240,4241,4242,4243,4244,4245,4246,4247,-1,-1,-1,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,12,-1,388,389,390,
            363,364,365,366, -1,-1,-1,-1,-1,-1,-1,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,364,365,366,
            371,372,373,374,-1,-1,-1,-1,-1,-1,-1,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,373,374,
            379,380,381,382, 364,365,366, 364,365,366, 364,365,366, 364,365,366,  364,365,366, 364,365,366, 364,365,366, 364,365,380, 381,382,
            387,388,389,390, 372,373,374, 372,373,374, 372,373,374, 372,373,374,   372,373,374,  372,373,374, 372,373,374, 372,373,388, 389,390,
            379,380,381,382, 380,381,382, 380,381,382, 380,381,382, 380,381,382,   380,381,382, 380,381,382, 380,381,382, 380,381,382, 380,381,
            
            

        ],
        

    ],

    getTile: function (layer, col, row) {
        return this.layers[layer][row * map.cols + col];
    },
    removeTile:function(layer,col,row){
        this.layers[layer][row * map.cols + col]=-1;
    }
};
