/*
Using this API https://jsonplaceholder.typicode.com/
and ONLY vanilla js

Fetch the users with the following ids: 2, 5, 7

Display the fetched users in teh div#users-container with each user in a column
with their posts in the column under the user info.

You can use the given HTML and CSS for display purposes
*/

const apiBaseUrl = "https://jsonplaceholder.typicode.com"

async function fetchUser(userId) {
    const url = `${apiBaseUrl}/users/${userId}`;
    try {
        const res = await fetch(url);
        const user = await res.json();
        return user;
    } catch (error) {
        console.log(error);
    }
}

async function main() {
    const settledUsers = await fetchUsers([2, 5, 7]);
    const users = settledUsers
        .filter((outcome) => outcome.status === "fulfilled")
        .map((outcome) => outcome.value);
    renderUsers(users, document.getElementById("users-container"));
}

async function fetchUsers(userIds = []) {
    const userFetchPromises = userIds.map((id) => fetchUser(id));

    const settleUserPromises = await Promise.allSettled(userFetchPromises)
    console.log(settleUserPromises);
    return settleUserPromises;
}

const mockUsers = [
    {
        id: 1,
        name: "first User",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874"
        }
    },
    {
        id: 2,
        name: "second User",
        address: {
            street: "Spring Lake",
            suite: "Apt. 112",
            city: "Fort Worth",
            zipcode: "76989-3874"
        }
    }
]

function makeUserNode(user) {

    const { id, name, address } = user;
    const { suite, street, city, zipcode } = address;
    const userDiv = document.createElement('div');
    userDiv.id = `user-id-${id}`;
    userDiv.classList.add("mb-sm");

    const nameHeading = document.createElement('h2');
    nameHeading.classList.add("mb-sm");
    nameHeading.innerText = name;

    const addressParagraph = document.createElement('p');
    addressParagraph.innerText = `${suite} ${street} ${city} ${zipcode}`;

    userDiv.appendChild(nameHeading);
    userDiv.appendChild(addressParagraph);

    return userDiv;
}

const usersContainer = document.getElementById("users-container");
// const userNode = makeUserNode(mockUsers[0]);
// usersContainer.appendChild(userNode);

function renderUsers(users = [], parentNode) {
    const usersRow = document.createElement('div');
    usersRow.classList.add("row");

    for (const user of users) {
        const userNode = makeUserNode(user);
        usersRow.appendChild(userNode);
    }

    parentNode.appendChild(usersRow);
}

// renderUsers(mockUsers, parentNode);

main();