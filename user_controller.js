function populateUsers() {
    const userDisplay = document.getElementById("user-display");
    userDisplay.innerHTML = "";
    // changed code
    library.allMyUsers.forEach(user => {
        const li = document.createElement("li");
        li.innerHTML = user.toString();
        userDisplay.appendChild(li);
    });
};

populateUsers();

    const addUserForm = document.getElementById('add-user-form');
        addUserForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Stop form submission
            // Validate form data
            const userId = addUserForm.elements['userId'].value;
            const name = addUserForm.elements['name'].value;
            const email = addUserForm.elements['email'].value;
            const password = addUserForm.elements['password'].value;

        const isLibrarian = addUserForm.elements['librarian'].checked;
        library.addUser(userId, name, email, password, isLibrarian);
        populateUsers();
    });


    const updateUserForm = document.getElementById('update-user-form');
        updateUserForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const userId = updateUserForm.elements['user-id'].value;
        const name = updateUserForm.elements['name'].value;
        const email = updateUserForm.elements['email'].value;
        const password = updateUserForm.elements['password'].value;
            if (library.updateUser(userId, name, email, password)) {
            document.getElementById('update-user-result').innerHTML = "Update Successful.";
        } else {
            document.getElementById('update-user-result').innerHTML = "User not found.";
        }
        populateUsers();
    });

    const deleteUserForm = document.getElementById('delete-user-form');
    deleteUserForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userId = deleteUserForm.elements['user-id'].value;
        if (library.deleteUser(userId)) {
        document.getElementById('delete-user-result').innerHTML = "Delete Successful.";
    } else {
        document.getElementById('delete-user-result').innerHTML = "User not found.";
    }
        populateUsers();
    });

