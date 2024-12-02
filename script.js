let contactsData = [];
let currentPage = 1;
const recordsPerPage = 5;
let filteredContacts = [];

// Asynchronously fetch data using async/await
async function fetchContactsData() {
    try {
        const response = await fetch('contacts_data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        contactsData = await response.json();
        document.getElementById('searchButton').disabled = false;
    } catch (error) {
        console.error('Error fetching contacts data:', error);
        alert('Failed to load contacts data. Please try again later.');
    }
}

// Call the fetch function when the script loads
fetchContactsData();

// Add event listener to validate fields when user inputs data
document.getElementById('firstName').addEventListener('input', validateFields);
document.getElementById('lastName').addEventListener('input', validateFields);
document.getElementById('email').addEventListener('input', validateFields);
document.getElementById('phone').addEventListener('input', validateFields);
document.getElementById('dob').addEventListener('input', validateFields);

// Add event listener to the Search button
document.getElementById('searchButton').addEventListener('click', () => searchContacts(true));

// Validate form fields
function validateFields() {
    let isValid = true;
    let errorMessages = [];
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value.trim();

    // Email validation (simple regex for demo purposes)
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        isValid = false;
        errorMessages.push('Please enter a valid email address.');
    }

    // Phone number validation (10-15 digits)
    if (phone && !/^\d{10,15}$/.test(phone)) {
        isValid = false;
        errorMessages.push('Please enter a valid phone number with 10 to 15 digits.');
    }

    // Date validation to ensure the user entered a date correctly
    if (dob && isNaN(Date.parse(dob))) {
        isValid = false;
        errorMessages.push('Please enter a valid date of birth.');
    }

    // Show or hide the error message
    const errorMessageDiv = document.getElementById('errorMessage');
    if (!isValid) {
        errorMessageDiv.innerHTML = errorMessages.join('<br>');
        errorMessageDiv.style.display = 'block';
    } else {
        errorMessageDiv.style.display = 'none';
    }

    // Enable or disable the Search button
    document.getElementById('searchButton').disabled = !isValid;
}

// Search contacts based on input values
function searchContacts(resetPage = true) {
    if (resetPage) {
        currentPage = 1;
    }

    // Clear selected contact details and existing row highlights
    document.getElementById('selectedContact').innerHTML = '';
    document.querySelectorAll('#contactsTable tbody tr').forEach(row => row.classList.remove('selected-row'));

    // Clear any selected radio buttons
    const radioButtons = document.querySelectorAll('input[name="selectContact"]');
    radioButtons.forEach(radio => radio.checked = false);

    // Collect input values and trim whitespace
    const firstName = document.getElementById('firstName').value.trim().toLowerCase();
    const lastName = document.getElementById('lastName').value.trim().toLowerCase();
    const dob = document.getElementById('dob').value.trim();
    const email = document.getElementById('email').value.trim().toLowerCase();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim().toLowerCase();
    const city = document.getElementById('city').value.trim().toLowerCase();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();

    // Check if all fields are empty
    if ([firstName, lastName, dob, email, phone, address, city, state, zip].every(field => field === '')) {
        alert('Please enter at least one search criterion.');
        return;
    }

    // Filter contacts based on search criteria
    filteredContacts = contactsData.filter(contact => {
        return (
            (firstName === '' || contact.firstName.toLowerCase().includes(firstName)) &&
            (lastName === '' || contact.lastName.toLowerCase().includes(lastName)) &&
            (dob === '' || contact.dob.includes(dob)) &&
            (email === '' || contact.email.toLowerCase().includes(email)) &&
            (phone === '' || contact.phone.includes(phone)) &&
            (address === '' || contact.address.toLowerCase().includes(address)) &&
            (city === '' || contact.city.toLowerCase().includes(city)) &&
            (state === '' || contact.state === state) &&
            (zip === '' || contact.zip.includes(zip))
        );
    });

    displayContacts();
}

// Display filtered contacts in the table
function displayContacts() {
    const table = document.getElementById('contactsTable');
    const tableBody = table.getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    const start = (currentPage - 1) * recordsPerPage;
    const end = start + recordsPerPage;
    const paginatedContacts = filteredContacts.slice(start, end);

    if (filteredContacts.length > 0) {
        table.style.display = 'table'; // Show the table when there are results
        paginatedContacts.forEach(contact => {
            const row = tableBody.insertRow();
            row.innerHTML = `
                <td><input type="radio" name="selectContact" data-id="${contact.id}"></td>
                <td>${contact.firstName} ${contact.lastName}</td>
                <td>${contact.dob}</td>
                <td>${contact.address}</td>
                <td>${contact.city}</td>
                <td>${contact.state}</td>
                <td>${contact.zip}</td>
                <td>${contact.email}</td>
                <td>${contact.phone}</td>
            `;

            // Attach event listeners to the row and radio button
            const radioButton = row.querySelector('input[type="radio"]');
            radioButton.addEventListener('click', (event) => {
                event.stopPropagation();
                selectContact(contact, row);
            });
            row.addEventListener('click', () => {
                radioButton.checked = true;
                selectContact(contact, row);
            });
        });
        setupPagination();
    } else {
        table.style.display = 'none'; // Hide the table if no results
        document.getElementById('pagination').innerHTML = '';
        document.getElementById('selectedContact').innerHTML = '';
        alert('No contacts found matching your search criteria.');
    }
}

// Set up pagination buttons
function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const totalPages = Math.ceil(filteredContacts.length / recordsPerPage);

    if (totalPages <= 1) return;

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.disabled = (i === currentPage);
        button.addEventListener('click', () => {
            currentPage = i;
            displayContacts();
        });
        pagination.appendChild(button);
    }
}

// Display selected contact details
function selectContact(contact, rowElement) {
    // Remove existing highlights
    document.querySelectorAll('#contactsTable tbody tr').forEach(row => row.classList.remove('selected-row'));
    // Highlight the selected row
    rowElement.classList.add('selected-row');

    const selectedContactDiv = document.getElementById('selectedContact');
    selectedContactDiv.innerHTML = `
    <h3>Selected Contact Details</h3>
    <p><b>Name:</b> ${contact.firstName} ${contact.lastName}</p>
    <p><b>DOB:</b> ${contact.dob}</p>
    <p><b>Email:</b> ${contact.email}</p>
    <p><b>Phone:</b> ${contact.phone}</p>
    <p><b>Address:</b> ${contact.address}, ${contact.city}, ${contact.state}, ${contact.zip}</p>
    `;
}
