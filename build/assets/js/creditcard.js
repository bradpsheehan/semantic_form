var cards = {
	"amex": {
		"pattern" : /^3[47]/,
		"cvv"     : "front"
	},
	"visa": {
		"pattern" : /^4/,
		"cvv"     : "back"
	},
	"master": {
		"pattern" : /^5[1-5]/,
		"cvv"     : "back"
	},
	"discover": {
		"pattern" : /^6(?:011|5[0-9]{2})[0-9]{12}$/,
		"cvv"     : "back"
	}
}

function updateCvvView(type) {
	// update view . . . change cvv icon
	console.log(type);

	if(cards[type].cvv === "front") {
		$('#cvv-back').hide();
	}
	else if (cards[type].cvv === "back") {
		$('#cvv-back').show();
		$('#cvv-front').hide();
	}
};

function updateCardView(type) {
	console.log('#'+type);

	if(type) {
		$('#card-'+type).prop("checked", true);
		updateCvvView(type);
	}
	else {
		$('input[type="radio"]').prop("checked", false);
		$('#cvv-back').show();
		$('#cvv-front').show();
	}
	
};

function matchCreditCardType(cardNumber) {
	var matchedCard = false

	$.each(cards, function(cardName, cardAttrs) {
		if(cardAttrs.pattern.test(cardNumber)) {
			matchedCard = cardName;
			console.log(cardName);
			return false;
		}
	})
	return matchedCard;
};

function selectCard(event) {
	console.log(event);
	var cardNumber = event.target.value,    
	    type = matchCreditCardType(cardNumber);

	updateCardView(type);
}

var textbox = $("#credit-card-number");
textbox.on("keyup blur paste change",  selectCard);

