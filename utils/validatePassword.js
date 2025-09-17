function validatePassword(password) {
    let criteriaPassed = 0;
    if (/\p{Uppercase_Letter}/u.test(password)) criteriaPassed++;
    if (/\p{Lowercase_Letter}/u.test(password)) criteriaPassed++;
    if (/\p{Number}/u.test(password)) criteriaPassed++;
    if (/[^\p{L}\p{N}]/u.test(password)) criteriaPassed++;

    return criteriaPassed >= 3;
}

module.exports = validatePassword;