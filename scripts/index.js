$('#validate-bsn').on('click', function() {
	if (validateIBAN($('#bsn-to-validate').val())) {
		$('#bsn-validation-result').html("BSN is valid");
		$('#bsn-validation-result').addClass("label-success").removeClass("label-danger");
	} else {
		$('#bsn-validation-result').html("BSN is invalid");
		$('#bsn-validation-result').addClass("label-danger").removeClass("label-success");
	}
})

function validateIBAN(val) {
	var iban = val;
	
	var left4chars = iban.substring(0, 4);
	iban = iban.substring(4, iban.length);
	iban += left4chars;
	
	console.debug("left chars to right: %s", iban)
	var ibanNumbersOnly = "";
	for (var i = 0, len = iban.length; i < len; i++) {
	
	  var ibanPiece = iban[i];
	  if (iban[i].match(/[a-z]/i)) {
		number = iban[i].charCodeAt(0) - 55;
		ibanPiece = number;
	  }
	  ibanNumbersOnly += ibanPiece;
	}
	
	console.debug("ibanNumbersOnly: %s", ibanNumbersOnly);
	
	
	iban = ibanNumbersOnly;
	//iban += "00";
	
	console.debug("iban: %s", iban);
	
	var divmod = bigInt(iban).divmod(97);

	console.debug("mod97: %s", divmod.remainder.toString());
	
	if (divmod.remainder.toString() == "1") {
		return true;
	} else {
		return false;
	}
}

$('#generate-bsn').on('click', function() {
	
    var rnd;
	
	do {
		rnd = Math.floor(Math.random() * 1000000000);
		var rndString = ("000000000" + rnd).slice(-10);
		
		iban = "";
		
	} while ()
	
  $('#generated-bsn').val(iban);
  $('#generated-bsn').select();
})