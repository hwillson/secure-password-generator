Template.password.events({

	'click .js-generate': function (event, template) {
		var password = SecurePassword.generatePassword();
		$('#generated-password').val(password).select();
	}

});
