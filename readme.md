# Contact Search Application

## Overview

The **Contact Search Application** is a simple web-based tool designed to allow users to search through a list of contacts using multiple filters such as **First Name**, **Last Name**, **Date of Birth**, **Email Address**, **Phone Number**, and more. The application displays the search results in a structured table format, allowing users to view and select contacts easily.

This project is developed using **HTML**, **CSS**, **JavaScript**, and **Bootstrap** for UI design, which makes it visually appealing and responsive across different devices.

## Features

- **Multiple Search Filters**: Users can search using various fields like **First Name**, **Last Name**, **Date of Birth**, **Email Address**, **Phone Number**, **Address**, **City**, **State**, and **Zip Code**.
- **Search Results Table**: Search results are displayed in a structured, paginated table format.
- **Pagination**: Large datasets are handled with pagination for easy navigation.
- **Contact Selection**: Allows for single contact selection, displaying details below the table.
- **Accessibility**: Integrated ARIA attributes and proper labels to enhance accessibility.
- **Error Handling**: User-friendly error messages and validation for various inputs.

## Prerequisites

To deploy and run the **Contact Search Application**, you need:

- A web browser (e.g., Chrome, Firefox, Edge)
- A simple HTTP server to host the files locally (e.g., Python HTTP server, Node.js HTTP server)
- The `contacts_data.json` file with sample contact data

## Getting Started

Follow these steps to set up and run the application:

### 1. Clone the Repository

Clone the GitHub repository to your local machine.

```sh
$ git clone https://github.com/your-username/contact-search-application.git
```

### 2. Directory Structure

The directory structure should look like this:

```
contact-search-application/
|-- index.html
|-- style.css
|-- script.js
|-- contacts_data.json
|-- README.md
```

- **index.html**: The main HTML file for the Contact Search Application.
- **style.css**: Custom styles to enhance the visual presentation.
- **script.js**: JavaScript file for core functionality (searching, pagination, contact selection).
- **contacts_data.json**: Sample contact data in JSON format.

### 3. Running the Application

To run the application, use a local HTTP server. Here are a few options:

#### Option 1: Using Python HTTP Server

If you have Python installed, you can use the following command to start an HTTP server:

For Python 3:

```sh
$ python -m http.server 8000
```

Open your web browser and go to `http://localhost:8000/index.html` to view the application.

#### Option 2: Using Node.js HTTP Server

Install `http-server` globally using npm:

```sh
$ npm install -g http-server
```

Run the server:

```sh
$ http-server
```

Open your web browser and go to the specified localhost address (e.g., `http://localhost:8080`).

### 4. Configuring the Application

- **contacts_data.json**: Update the contact information by modifying the `contacts_data.json` file to add, update, or remove contacts.

## Usage Instructions

1. **Open the Contact Search Application** in your browser.
2. **Search for Contacts**: Use the various input fields to search for contacts. Enter values in any field and click on **Search**.
3. **View Results**: The results are displayed in a table below the form. If there are more results, use the pagination buttons to navigate.
4. **Select a Contact**: Click on the radio button next to a contact to see the detailed information displayed below the table.

## Input Validation

The following validations are included in the application:

- **Email Address**: Valid email format is required.
- **Phone Number**: Must be 10 to 15 digits.
- **Date of Birth**: Should be a valid date.
- **Required Fields**: Fields like **Last Name** are marked with a red asterisk (`*`).

## Accessibility

- **ARIA Attributes**: Added `aria-labelledby` and `aria-required` to input elements for improved accessibility.
- **Focus Styles**: Custom styles for focused inputs to provide clear visual feedback.

## Technologies Used

- **HTML5**: Structure of the application
- **CSS3**: Custom styles and Bootstrap for responsive design
- **JavaScript (ES6)**: Core logic for search, filtering, and pagination
- **Bootstrap 4**: UI components for styling and responsive design

## Deployment

To deploy this application, you can:

- **Host it on GitHub Pages**: Upload the repository to GitHub and enable GitHub Pages for easy hosting.
- **Use a Cloud Platform**: Deploy the application to platforms like Netlify, Vercel, or AWS S3 for public access.

## Customization

- **Styling**: Modify the `style.css` file to change the appearance of the application.
- **JavaScript Logic**: You can add new functionalities or modify the existing logic in `script.js` to meet custom requirements.

## Contributing

If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. Feel free to use it and make any modifications.

## Contact

For any questions or suggestions, please contact [Your Name] at [vipinkaniyanthara@gmail.com].
