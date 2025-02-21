// Create a validation class similar to ‘yup’ and add validations for required, min and max
// for strings. Expose an isValid method that returns true or false based on the argument
// passed


class Validator {
    constructor() {
        this.rules = [];
    }

    required() {
        this.rules.push((value) => !!value);
        return this;
    }

    min(length) {
        this.rules.push((value) => value.length >= length);
        return this;
    }

    max(length) {
        this.rules.push((value) => value.length <= length);
        return this;
    }

    isValid(value) {
        return this.rules.every((rule) => rule(value));
    }
}

const v1 = new Validator().required().min(3).max(6);

console.log(v1.isValid("test")); // true

