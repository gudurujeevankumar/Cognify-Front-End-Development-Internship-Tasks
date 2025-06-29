// Task 5: Fetching data from JSONPlaceholder and updating DOM

document.getElementById("loadUsers").addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById("userList");
            userList.innerHTML = ''; // Clear previous content

            users.forEach(user => {
                const userCard = document.createElement("div");
                userCard.classList.add("user-card");

                userCard.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                `;

                userList.appendChild(userCard);
            });
        })
        .catch(error => {
            console.error("Error fetching users:", error);
            document.getElementById("userList").innerHTML = "<p>Failed to load user data.</p>";
        });
});