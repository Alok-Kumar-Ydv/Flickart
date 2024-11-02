## Flickart

Flickart is a full-stack e-commerce app built with the MERN stack, designed for seamless shopping.
It allows users to browse and filter products, add items to their cart, manage addresses, and securely check out using PayPal.
A super admin can upload product images, manage inventory, and track orders. 
The app features secure user authentication, search functionality, and responsive design, ensuring a smooth experience for both shoppers and admins.

[Use Case Diagram](https://drive.google.com/file/d/1qzdXZ-bUpZJcF3ldACuNB73Ug0RCkGmt/view?usp=sharing)  

[API documentation](https://docs.google.com/document/d/11d8aqaFaMAhX_COlaSzIGKbaF1X3XnkwZlg8B7LgyyA/edit?usp=sharing)

[Database Schema](https://docs.google.com/document/d/1gHAfAIM4N5FENDadi6pTQGJpp640bWICJEqhihPVnV4/edit?usp=sharing)


## Features

- ***Actor 1*** :- ****USER****
    
    - **Browse Products** - View a list of available products, including details such as title, description, price, and images.
    - **Product Review** - Register complaints and track resolution status
    - **View Cart** - Access and manage items in the shopping cart, including updating quantities and removing products.
    - **Place Order** - Finalize the purchase of items in the cart by entering shipping information and selecting a payment method.
    - **Manage Adresses** - Add, edit, or delete shipping addresses for orders, allowing for multiple delivery locations.
    - **View Order History** - Access past orders to view order details, status and details.
    - **Product Review** - Register complaints and track resolution status
    -     

- ***Actor 2*** :- ****ADMIN****
    
    - **Product Management** - Add new products to the catalog, update existing product information, and remove discontinued items.
    - **Order Management** - Oversee order processing, including updating order status, resolving issues.
    - **Inventory Management** -Track stock levels, receive alerts for low inventory, and manage product availability.
      

## Installation

Clone the repository:

```bash
 git clone https://github.com/Alok-Kumar-Ydv/Flickart
  
```

Go to the project directory

```bash
  cd Flickart
```

Install dependencies

```bash
  npm install
```

Start the server

```bash

backened:  cd backend
           npm run dev
frontened: cd frontend
           npm run dev
```

Before running npm run dev, you will need the following environment variables:

```bash

just make a config.env file in config folder with these environment variables:-

MONGODB_URL= <This is your MongoDb URI>
JWT_KEY =<This is your access token secret>

```


### Login Credentials

To log in as a user, use the following credentials:
- **Username**: `user`
- **Password**: `pass`


Please note that login credentials for other roles  admin are not provided. You can create these users by own for your database.
Screenshots for respective users are provided for reference



## Screenshots
Some screenshots are provided for reference

#### Home Page

![Description of Image](https://drive.google.com/uc?export=view&id=15uGSccKxkMY52i1CwxdPdgh02lyAWg52)


### Login Page
![Description of Image](https://drive.google.com/uc?export=view&id=1Am9O8s-SQjxCZty-2fH3oRPslQy4gZVA)
#### Product Page
![Description of Image](https://drive.google.com/uc?export=view&id=1PNjqFH9GNoY3nGtYiC1afIedqFzKnuR4)

![Description of Image](https://drive.google.com/uc?export=view&id=1OGFZ0iEgekybOtYsJrUrWI4YheRlhbLv)
![Description of Image](https://drive.google.com/uc?export=view&id=1UGSXup4hJxu7bOMCo_46Lcnksujcvai_)
![Description of Image](https://drive.google.com/uc?export=view&id=1eJRi8WN0nKSC2fz02rHyKnODk9sOCeuz)
![Description of Image](https://drive.google.com/uc?export=view&id=1HlkCS8Zq8Pzicw1E_zERMu4sRbRjwIUo)




#### Admin
![Description of Image](https://drive.google.com/uc?export=view&id=1MofbNu_pnlkF2x8Hbkly9i9orGVI3B4G)

#### Add/Update/Delete Products
![Description of Image](https://drive.google.com/uc?export=view&id=1Xg0oq2iJTMf30m0DHM-iL0Nspqx6Ta9Z)

#### Update Order Status
![Description of Image](https://drive.google.com/uc?export=view&id=12ocGzlWa63ZD1QIE6PV55L_a1I7aJKZ1)
![Description of Image](https://drive.google.com/uc?export=view&id=1w2Gqnx0ceOUjMQeDUJppy3kOKuXdIAlt)

