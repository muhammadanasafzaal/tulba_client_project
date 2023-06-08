export function validateEmail(email) {
	// Regular expression to match a valid email address
	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	// Return true if the email address matches the regular expression
	return regex.test(email);
}

export function validatePassword(password) {
	// Check if the password is at least 8 characters long.
	if (password.length < 8) {
		return false;
	}

	// Check if the password has at least one uppercase letter.
	if (!/[A-Z]/.test(password)) {
		return false;
	}

	// Check if the password has at least one lowercase letter.
	if (!/[a-z]/.test(password)) {
		return false;
	}

	// Check if the password has at least one number.
	if (!/\d/.test(password)) {
		return false;
	}

	// Check if the password has at least one symbol.
	if (!/[!@#$%^&*()_+]/.test(password)) {
		return false;
	}

	// If all of the checks pass, the password is valid.
	return true;
}