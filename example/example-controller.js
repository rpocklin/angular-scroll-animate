'use strict';

var ExampleCtrl = function($rootScope, $document, $scope) {

	$scope.animation = {};
	$scope.animation.current = 'fadeInLeft';
	$scope.animation.previous = $scope.animation.current;

	// only required for dynamic animations
	$scope.changeAnimation = function() {

		var elements = document.getElementsByClassName('car-container');
		var $elements = angular.element(elements);

		$elements.removeClass('animated ' + $scope.animation.previous);
		$elements.addClass('not-visible');

		$scope.animation.previous = $scope.animation.current;
		$document[0].dispatchEvent(new CustomEvent('scroll'));
	};

	$scope.cars = [
		{
			name: '2013 Toyota RAV4 GX Sports Automatic AWD',
			description: "Massive Post Budget Main Event Sale now on! This car has been drastically reduced! Hurry, ends this Saturday! This RAV4 GX all wheel drive automatic SUV is in excellent condition."
		},
		{
			name: '2015 Nissan X-Trail T32 ST-L X-tronic 2WD',
			description: '*** PLUS Up To 3 YEARS FREE SERVICING***. We are a family owned and operated franchise which has been looking after clients since 1982. We are located 30 mins southeast of Brisbane CBD.'
		},
		{
			name: '2010 Suzuki Kizashi XLS',
			description: 'END OF FINACIAL YEAR CLEARANCE SALE !!!!!      LOVELY 2010 SUZUKI KIZASHI XLS.2.4LT PETROL AUTOMATIC SEDAN,ONE OWNER WITH EXCEPTIONAL SERVICE HISTORY,COMFY LEATHER SEATS,ELECTRIC SUNROOF,'
		},
		{
			name: '2007 MINI Hatch Cooper Chilli Sports Automatic',
			description: "Supplied with the vehicle is a current Victorian Roadworthy and the price includes all Victorian Government Stamp duties and transfer fees in the drive away price."
		},
		{
			name: '2014 Ford Territory SZ Titanium Sequential Sports Shift',
			description: "WIN a trip to Hawaii. End of Financial Year Clearance sale is on this Thursday to Sunday! Take advantage of red hot prices across our extensive range and go into the draw to WIN a trip to Hawaii."
		},
		{
			name: "2015 Ford Ranger PX XLT",
			description: "WIN a trip to Hawaii. End of Financial Year Clearance sale is on this Thursday to Sunday! Take advantage of red hot prices across our extensive range and go into the draw to WIN a trip to Hawaii."
		}
	];

	$scope.animateElementIn = function($el) {
		$el.removeClass('not-visible');
		$el.addClass('animated ' + $scope.animation.current);
	};

	$scope.animateElementOut = function($el) {
		$el.addClass('not-visible');
		$el.removeClass('animated ' + $scope.animation.current);
	};
};

angular.module('example').controller('ExampleCtrl', ExampleCtrl);
