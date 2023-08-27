# SnapStore: E-commerce Web App

SnapStore is a powerful E-commerce web application designed to provide users with a seamless online shopping experience. With a large array of products ranging from furniture to electronics, we've got everything you need for your household.

## Technology Stack

### Front-End:

1. React.js: The UI of application is built with React.js
2. User Authentication: Firebase

### APIs:

Data is displayed from the `src/components/AllData.js` file which serves as a basic API. Each product has attributes such as `id`, `category`, `img`, `description`, `price`, `otherImgs`, `specs`, `texture`, `weight`, and `size`.

## Logic Used

The logic of the website is straightforward and aimed at providing a user-friendly experience.

- AllData.js: It contains a comprehensive list of products that are displayed on the website. Every item in the `AllData.js` file has all necessary details that are used in various components to display product information.

- Responsive Design: The responsiveness of the site is handled by media queries in our CSS files to ensure optimal viewing on a wide range of devices.

- Header & Footer Components: The header and footer components appear on all pages for easy navigation and access to important links.

- Product Display: Product information is dynamically displayed based on item details provided in the `AllData.js` file. By architecture design, any changes or additions to the products can be managed in the `AllData.js` files.

- Index.html: The main HTML file is set up to root the React application and provides some basic application-wide setup.

## User Authentication

- User Authentication is done by adding firebase to React Project.

## Deployment

- Deployed through Vercel

## To run the project locally:

- Fork Repo
- Install NPM Modules
- Start the server

- Happy Hacking!! 
