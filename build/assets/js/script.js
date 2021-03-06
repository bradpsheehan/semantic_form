$("#portfolio-form").validate({
  rules: {
    "portfolio-title":           "required",
    "portfolio-address":         "required",
    "name":                      "required",
    "email": {
      required: true,
      email: true
    },
    "password":                  "required",
    "credit-card-number":        "required",
    "credit-card-security-code": "required",
    "month":                     "required",
    "year":                      "required"

  },
  messages: {
    "portfolio-title":           "Please specify a portfolio title",
    "portfolio-address":         "Please specify a portfolio address",
    "name":                      "Please provide your name",
    "email": {
      required: "Please provide your email address",
      email: "Your email address must be in the format of name@example.com"
    },
    "password":                  "For your security, a password is required",
    "credit-card-number":        "Your credit card number is required",
    "credit-card-security-code": "Your card's security code is required",
    "month":                     "Select card expiration month",
    "year":                      "Select card expiration year"
  },
});