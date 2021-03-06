var utils = require('./utils');

describe('ExponentLib.power_e', () => {
	//                      .1234567890123456
	var data = [
		[ 1, 				27182818284590452 ],
		[ 2, 				73890560989306502 ],
		[ 1.1, 				30041660239464331 ],
		[ 1.2, 				33201169227365475 ],
		[ 1.48763547, 		44266162676706513 ],
		[ 0.000001, 		10000010000005000 ],
		[ 0.1, 				11051709180756476 ],
		[ 0.2, 				12214027581601698 ],
		[ 0.4, 				14918246976412703 ],
		[ 0.6, 				18221188003905090 ],
		[ 0.7, 				20137527074704765 ],
		[ 0.8, 				22255409284924676 ],
		[ 1.9, 				66858944422792694 ],
		[ 1.99, 			73155337623095665 ],
		[ 1.9999, 			73883172302648062 ],
		[ 10, 		    220264657948067165170 ],
		[ 21.785,  28913807698291736761599108 ]
	];
	utils.testArray('', data, 16, 16, (instance, t) => {
		return instance.power_e.call(t);
	});
});

describe('ExponentLib.power_any', () => {
	//                      			.123456789012
	var data = [
		[ [ 2, 3 ], 					8000000000000 ],
		[ [ 2, -3 ], 					 125000000000 ],
		[ [ 2.1, 3 ], 		    		9261000000000 ],
		[ [ 2.1, 3.789123456 ],   	   16631395358635 ]
	];
	utils.testArray('', data, 12, 10, (instance, t) => {
		return instance.power_any.call(t[0], t[1]);
	});
});

describe('ExponentLib.root_any', () => {
	//                      			.123456789012
	var data = [
		[ [ 2, 3 ],				1259921049895 ],
		[ [ 2, -3 ], 			 793700525984 ],
		[ [ 2.1, 3 ], 		    1280579164987 ],
		[ [ 2.1, 3.789123456 ], 1216292282161 ]
	];

	utils.testArray('', data, 12, 10, (instance, t) => {
		return instance.root_any.call(t[0], t[1]);
	});
});

