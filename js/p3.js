/*-------------------------------------------------------------------------------------------------
	Listeners
-------------------------------------------------------------------------------------------------*/
		//listen for change event on both input and select fileds
		$('input,select').change(calculate);

		// listen for keyup even on input field
		$('input').keyup(calculate);
 
/*-------------------------------------------------------------------------------------------------
	Calculate Function
-------------------------------------------------------------------------------------------------*/
function calculate() {

		//How many splits
		var splits = $('select[name=splits]').val();

		//What percent of service
		var service = $('select[name=service]').val();

		//What's the check amount
		var check_amount = $('input[name=check_amount]').val();

		//Total to pay value
		var total_to_pay = 0;

		//Total per person value
		var total_per_person = 0;

		//Total tip value
		var total_tip = 0;

		//Tip per person value
		var tip_per_person = 0;
		
		//Tip calculations
		if (+check_amount > 0) {
			//Calculation for total_tip: i,e. %of service of the check amount
			total_tip = ((service / 100) * check_amount).toFixed(2);

			//Calculation for total_tip: The total of check amount and total tip value
			total_to_pay = (+check_amount + total_tip / splits).toFixed(2);

			//Calculation for per person: The total amount to pay divide by number of splits
			total_per_person = (total_to_pay / splits).toFixed(2);

			//Calculation for per person tip: The total amount for tip divide by number of splits
			tip_per_person = (total_tip / splits).toFixed(2);
		}
		
		//results

		//Display the value of total to pay
		$('#total_to_pay').html(total_to_pay);

		//Display the value of total per person
		$('#total_per_person').html(total_per_person);

		//Display the value of total tip
		$('#total_tip').html(total_tip);

		//Display the value of total tip per person
		$('#tip_per_person').html(tip_per_person);
}

/*-------------------------------------------------------------------------------------------------
	Input Validate Function
-------------------------------------------------------------------------------------------------*/

function validateCheckAmount() {
		
		// store the check amount to a variable
		var chkamt = $('input[name=check_amount]').val();
		
		// check for characters and invalid amount, so inject an error message
		if (chkamt.length > 0 && !(/^\d*(?:\.\d{0,2})?$/.test(chkamt))) {
			$('#error_message').html("'"+chkamt + "' is not a valid dollar amount.");
		} 
		// If it was blank, that's no value, so inject an error message
		else if (chkamt.length == 0) {
			$('#error_message').html("Please specify the dollar amount to calculate...");
		} 
		// Otherwise, we're all good, clear the error message
		else {
			$('#error_message').html("");
		}
}
