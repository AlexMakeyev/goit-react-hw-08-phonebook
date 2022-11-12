const fields = {
    name: {
        label: "User name",
        name: "name",
        type: "text",
        placeholder: "Enter full user name",
        required: true,
    },
    email: {
        label: "User email",
        name: "email",
        type: "email",
        placeholder: "Enter user email",
        required: true,
    },
    password: {
        label: "User password",
        name: "password",
        type: "password",
        placeholder: "Enter user password (min 8 symbols)",
        required: true,
    }
}

export default fields;