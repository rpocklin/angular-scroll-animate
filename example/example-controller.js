'use strict';

var ExampleCtrl = function($rootScope, $document, $scope) {

	$scope.animation = {};
	$scope.animation.current = 'fadeInLeft';


	// only required for dynamic animations
	$scope.changeAnimation = function() {
		var elements = document.getElementsByClassName('car');
		var $els = angular.element(elements);

		$els.removeClass('animated ' + $scope.animation.current);
		$document[0].dispatchEvent(new CustomEvent('scroll'));
	};

	$scope.cars = [
		{
			name: '2013 Toyota RAV4 GX Sports Automatic AWD',
			description: "Massive Post Budget Main Event Sale now on! This car has been drastically reduced! Hurry, ends this Saturday! This RAV4 GX all wheel drive automatic SUV is in excellent condition. It includes: - Balance of new car warranty until 2016 - Full service history - Major service just completed - Original log books - Registration until June 2015 - Yokohama tyres in excellent condition - Rear parking sensors - Bluetooth handsfree phone connectivity - Bluetooth audio streaming - Cruise Control - USB connection - Flat floor in boot - 2 keys - 5 year mechanical protection plan - Documented safety check Safety features include: - 5 star ANCAP safety rating - Anti-lock braking system (ABS) - Driver's front airbag - Driver's knee airbag - Front passenger airbag - Side curtain airbags - Traction control system - ISOFIX child seat anchor points Plus: - Discount National Delivery is available - Overnight accommodation for interstate buyers is available. We happily: - Provide competitive finance through Toyota Financial Services with competitive consumer and commercial Finance, Insurance & Leasing packages. - Trade all vehicles new or old, any shape or size. - Provide fixed price servicing on all used vehicles. - Run a complimentary comprehensive customer loyalty program for all our customers. Enjoy the peace of mind of dealing with a major franchised dealer that has been serving the local community since 1961. Please check and confirm all vehicle details with us prior to purchase."
		},
		{
			name: '2015 Nissan X-Trail T32 ST-L X-tronic 2WD',
			description: '*** PLUS Up To 3 YEARS FREE SERVICING***. We are a family owned and operated franchise which has been looking after clients since 1982. We are located 30 mins southeast of Brisbane CBD. If you require finance and insurance at a more competitive rate for your next vehicle, our fully accredited Business Managers can take the hassle out of your purchase experience for private and business customers. We trade all cars, 4WDs, motorbikes and even boats. Our dealership is equipped with a state of the art mechanical workshop and spare parts facility. You are always welcome to come into the dealership for a test drive or for more information on the vehicle you are interested in, our friendly staff are always available.'
		},
		{
			name: '2010 Suzuki Kizashi XLS',
			description: 'END OF FINACIAL YEAR CLEARANCE SALE !!!!!      LOVELY 2010 SUZUKI KIZASHI XLS.2.4LT PETROL AUTOMATIC SEDAN,ONE OWNER WITH EXCEPTIONAL SERVICE HISTORY,COMFY LEATHER SEATS,ELECTRIC SUNROOF,KEYLESS ENTRY,ALLOY WHEELS,FRONT AND REAR PARK ASSIST,CRUISE CONTROL AND MUCH MORE EXCEPTIONAL CAR TEST DRIVE TODAY.!one of the largest multi-franchise dealerships in the North Eastern suburbs of Melbourne, our aim is to make your purchase experience easy, affordable and hassle-free. Successfully helping people find the right vehicle for the past 30 years, we are situated in the North Eastern suburbs of Melbourne, only 5 min from the Western Ring Road, Greensborough. Stocking a large range of pre- loved Nissan, Chrysler, Jeep, Dodge and Kia vehicles complemented with executive and factory driven low kms to choose from, we also cover most other makes and models, we come to you. "Test Drive "available, Competitive finance (Bank of Melbourne), balance of factory warranty where applicable, with 3 year extension options available. We welcome trade-ins and guarantee a competitive price for your current vehicle. Our after sales team provides a one stop shop convenience, Capped price servicing, and Express service in around 1 hour, free loan car available, waiting lounge with all the modern customer requirements. Saturday servicing is also available. We offer interstate delivery options and have a number of fast and inexpensive transport arrangements to get your next vehicle to you, wherever that may be. Call our Finance Department for Specialist Salary Packaging or Fleet Pricing advice you may be eligible'
		},
		{
			name: '2007 MINI Hatch Cooper Chilli Sports Automatic',
			description: "Supplied with the vehicle is a current Victorian Roadworthy and the price includes all Victorian Government Stamp duties and transfer fees in the drive away price. We put our \"Best Price First\" and buyers love it, we sell over 50 cars a month. Such high turnover means we can operate with lower margins resulting in a far better price for you! This vehicle is supplied with all owners' manuals and service books, also supplied with the vehicle are 2 factory remote locking keys. We are a RACV green light approved dealership. This vehicle has been tested with an RACV report available to view. Our dealership is located only minutes from the CBD, all our vehicles are displayed in our undercover warehouse. Competitive Finance available T.A.P. We also sell a large number of vehicles interstate and have a number of fast and inexpensive transport arrangements available to make purchasing with us an easy and pleasurable experience. Please contact Chris, Sam or Mark with any questions regarding this vehicle or to arrange an appointment to view this great car."
		},
		{
			name: '2014 Ford Territory SZ Titanium Sequential Sports Shift',
			description: "WIN a trip to Hawaii. End of Financial Year Clearance sale is on this Thursday to Sunday! Take advantage of red hot prices across our extensive range and go into the draw to WIN a trip to Hawaii. 2014 FORD MOTOR CO. EXECUTIVE DRIVEN.. BALANCE OF NEW CAR WARRANTY UNTIL 2017!! Silky SMOOTH 6 Speed Automatic 7 SEATER with ALL The RIGHT FEATURES Including Leather Interior, 8\" Touch COLOUR Display with Satellite Navigation, LED Daytime Running Lamps, DVD Player, Seat Memory, Front & Side Curtain Airbags, ESP Stability Control, 18\" Alloys, Bluetooth, Reverse Camera/Sensors, Dual Zone Climate Control, Cruise Control, CD Player with AUX & USB Input & Bluetooth AUDIO Streaming, Keyless Entry & Much More.. Why Buy A Captiva or CX-9?? Test Drive This SZ TITANIUM TERRITORY Today!! We are a family owned & operated Ford dealer & have served Victorian motorists since 1917 making us one of the oldest, most experienced & most awarded dealers in the country. We ship our vehicles anywhere in Australia at great rates. So ENQUIRE NOW because You'll Buy Better with us."
		},
		{
			name: "2015 Ford Ranger PX XLT",
			description: "WIN a trip to Hawaii. End of Financial Year Clearance sale is on this Thursday to Sunday! Take advantage of red hot prices across our extensive range and go into the draw to WIN a trip to Hawaii. Brand New in stock!!! Buy from Australia's Longest Established Ford Dealership!!! PX XLT Ranger 4X4 3.2L Crew Cab Auto in Cool White featuring: Bluetooth and USB/iPod integration, Voice control system that allows you to control: Bluetooth radio, CD player, external device (USB/iPod), Cruise control, Steering wheel mounted audio / cruise control buttons, Dynamic Stability Control (DSC), Overhead console, Anti-lock Braking System (ABS) with Electronic Brake force Distribution (EBD) and Traction Control, Emergency Brake Assist (EBA), Driver and front passenger airbags, cooled centre console, 12V auxiliary power socket, Rear parking sensors, Privacy glass, Chrome radiator grille, sports bar, side steps and door handles, Tow bar and much more! We are a family owned and operated Ford dealer serving Victorian motorists since 1917 making us one of the oldest, most experienced and awarded dealers in the country.  We offer competitive finance rates and options. Nothing is more important than our customers and therefore no one is ever too busy to help or spend time with a customer. All Dealership personnel will professionally treat every customer as a potential lifetime purchaser."
		}
	];

	$scope.animateElementIn = function($el) {
		$el.removeClass('hidden');
		$el.addClass('animated ' + $scope.animation.current);
	};

	$scope.animateElementOut = function($el) {
		$el.addClass('hidden');
		$el.removeClass('animated ' + $scope.animation.current);
	};
};

angular.module('example').controller('ExampleCtrl', ExampleCtrl);
