Template.password.events({

	'click .js-generate': function (event, template) {
		var password = SecurePassword.generate();
		$('#generated-password').val(password).select();
	}

});
