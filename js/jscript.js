(function() {
  

	jQuery(document).ready(function(){
		
		
		/* Carousel Display */ 
		$('.carousel').carousel({
		  interval: 9000
		})
		
		/* ToolTip */ 
		$('[data-toggle="tooltip"]').tooltip();
		
		/* Nivo Slider */ 
		$('#slider').nivoSlider();
		
		/* Blink */ 
		setInterval(function(){

			setTimeout(function(){
				$(".blink").css("visibility","hidden"); 
			},600);
			
			$(".blink").css("visibility","visible");  

        },1000);
		
		/* Open Curtain */
		function open_curtain(e){
		 $("#imgFlipCurtainLeft-"+e+"").animate({width:5},1000);
		 $("#imgFlipCurtainRight-"+e+"").animate({width:5},1000);
		}
		
		/* Close Curtain */
		function close_curtain(e){
		 $("#imgFlipCurtainLeft-"+e+"").animate({width:384},1000);
		 $("#imgFlipCurtainRight-"+e+"").animate({width:384},1000);
		}
		
		$("#btnBefore-1").click(function() {
			close_curtain(1);
		});
		
		$("#btnAfter-1").click(function() {
			open_curtain(1);
		});
		
		$("#btnBefore-2").click(function() {
			close_curtain(2);
		});
		
		$("#btnAfter-2").click(function() {
			open_curtain(2);
		});
		
		$("#btnBefore-3").click(function() {
			close_curtain(3);
		});
		
		$("#btnAfter-3").click(function() {
			open_curtain(3);
		});
		
		$("#btnBefore-4").click(function() {
			close_curtain(4);
		});
		
		$("#btnAfter-4").click(function() {
			open_curtain(4);
		});
		
		$("#btnBefore-5").click(function() {
			close_curtain(5);
		});
		
		$("#btnAfter-5").click(function() {
			open_curtain(5);
		});

		/* Slide Up & Down - Menu Navigation */
		function slideUpDown(yourElement, yOffset) {

			 var yCoordinate = yourElement.getBoundingClientRect().top + window.pageYOffset;

			window.scrollTo({
				top: yCoordinate + yOffset,
				behavior: 'smooth'
			});
			clear();
		}
		
		function clear(){
			slideUpDown("0", "0");
		}
		
		/* Navigation ScrollTo */ 
		$("#navHouseFlip").click(function() {
			slideUpDown(document.getElementById('projectHouseFlip'), -85);
		});
		
		$("#navRental").click(function() {
			slideUpDown(document.getElementById('projectRent'), -85);
		});
		
		$("#navCommercial").click(function() {
			slideUpDown(document.getElementById('projectCommercial'), -85);
		});
		
		$("#navRTO").click(function() {
			slideUpDown(document.getElementById('projectRTO'), -85);
		});
		
		$("#navLuxury").click(function() {
			slideUpDown(document.getElementById('projectLuxury'), -85);
		});
		
		
		
		/* Navigation ScrollTo */ 
		$(".fa-arrow-up").click(function() {
			slideUpDown(document.getElementById('sectionBanner'), -1000);
		});
		
		/* Contact Us */ 
		$("#navEmail").click(function() {
			$('#email, #name, #phone, #message').val('');
			$('.badge-warning').hide();
		});
		
		
		/* Footer */ 
		var dt = new Date();
		$("#footerYear").text(dt.getFullYear());
		
		
		
		
		
		/* Home > Kitchen Animation */
		var kitchenIndex = 0;

		function carouselKitchen() {
			var i;
			var x = document.getElementsByClassName("kitchenSlides");
			for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
			}
			kitchenIndex++;
			if (kitchenIndex > x.length) {kitchenIndex = 1}    
			x[kitchenIndex-1].style.display = "block";  
			setTimeout(carouselKitchen, 9000);    
		}
		
		carouselKitchen();
		
		/* Home > Bedroom Animation */
		var bedroomIndex = 0;

		function carouselBedroom() {
			var i;
			var x = document.getElementsByClassName("bedroomSlides");
			for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
			}
			bedroomIndex++;
			if (bedroomIndex > x.length) {bedroomIndex = 1}    
			x[bedroomIndex-1].style.display = "block";  
			setTimeout(carouselBedroom, 9000);    
		}
		
		carouselBedroom();
		
		/* Home > Bathroom Animation */
		var bathroomIndex = 0;

		function carouselBathroom() {
			var i;
			var x = document.getElementsByClassName("bathroomSlides");
			for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
			}
			bathroomIndex++;
			if (bathroomIndex > x.length) {bathroomIndex = 1}    
			x[bathroomIndex-1].style.display = "block";  
			setTimeout(carouselBathroom, 9000);    
		}
		
		carouselBathroom();
		
		/* Home > Dining Animation */
		var diningIndex = 0;

		function carouselDining() {
			var i;
			var x = document.getElementsByClassName("diningSlides");
			for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
			}
			diningIndex++;
			if (diningIndex > x.length) {diningIndex = 1}    
			x[diningIndex-1].style.display = "block";  
			setTimeout(carouselDining, 9000);    
		}
		
		carouselDining();
		
		
		
		
	});

	
})();
