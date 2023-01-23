const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");


mongoose
    .connect(`mongodb://127.0.0.1:27017/`)
    .then(() => {
        console.log(`Successfully connected to none`)
    })
    .catch((error) => {
        console.log(`mongoose connection to none failed: `, error)
    })


app.use(express.json());

app.listen(port);

const createUser = () => {
    const newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password()
    }
    return newUser;
}

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.stateAbbr(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}

app.post("/api/users/new", (req, res) => {
    return res.json({
        status: "success",
        user: createUser()
    })
});
app.post("/api/companies/new", (req, res) => {
    return res.json({
        status: "success",
        user: createCompany()
    })
});
app.post("/api/user/company", (req, res) => {
    return res.json({
        status: "success",
        user: createUser(),
        company: createCompany()
    })
});


console.log(createUser())
console.log(createCompany())