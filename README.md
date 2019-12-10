# 🛍 Ecommerce Store Built with React, Redux, Firebase, Paystack and hosted on Heroku

Demo site is here: [LawnMower-Clothings](https://lawnmower-clothings.herokuapp.com/)

![Screenshot](public/images/Screenshot1.png)

## Features
| Feature  |  Coded?       | Description  |
|----------|:-------------:|:-------------|
| Authenticate User using firebase | &#10004; | Ability of Authenticate and store user in firebase |
| Employ Redux to manage cart state, user state and shop state | &#10004; | Use redux to store states and dispatch states |
| Add item to cart, reduce and increase cart items| &#10004; | Add items to cart, reduce the item number and update the total amount at the same time|
| Delete Cart Items | &#10004; | Delete a product from cart |
| Pay using paystack | &#10004; | Implement paystack payment using the paystack react component |
| Local storage using redux-persist | &#10004; | Store cart items in the local storage |

![Screenshot](public/images/Screenshot2.png)

## Key Implementations
1. React Router to manage routing
2. reselect to create a memoized selector functions e.g
    ```javascript
    export const selectCollection = collectionUrlParam =>
         createSelector(
            [selectCollections],
            collections => collections[collectionUrlParam]
          );
    ```
3. Higher Order Components
4. Redyx Logger

## Usuage
 * Fork the Repo

     ```javascript 
      https://github.com/Nnaji-Victor/ecommerce.git
     ```
 * Clone the repo on your local machine

    ```bash
        git clone https://github.com/Nnaji-Victor/ecommerce.github
    ```
 * Run the App with

    ```bash
      yarn start
    ```

## Contributing
Pull requests are welcome