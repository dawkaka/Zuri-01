export const isName = (name) => {
    name = name.trim()
    const errors = []
    if (name === "") return errors
    if (name.length < 2) {
        errors.push("Name can't be less than 2 characters")
    } else if (name.length > 20) {
        errors.push("Name can't be more than 20 characters")
    }

    for (let val of name) {
        if (val.toUpperCase() === val.toLowerCase() && val !== '\'') {
            errors.push("Only alphabets allowed")
            break
        }
    }
    if (name[0] !== name[0].toUpperCase()) {
        errors.push("Name should start with an uppercase letter")
    }
    if (name.substring(1) !== name.substring(1).toLowerCase()) {
        errors.push("Only first letter should be uppercase")
    }
    return errors
}


export const isEmail = (email) => {
    const errors = []
    const isE = email.toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    if (!isE) {
        errors.push("Enter a valid email")
    }
    return errors
}

export const isMessage = (message) => {
    const errors = []
    if (message.length > 500) {
        errors.push("Message can not be longer than 500 characters")
    }
    message = message.trim()
    if (message === "") {
        errors.push("Please enter a message")
    }
    return errors
}