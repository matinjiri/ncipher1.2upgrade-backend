

# **NodeJS NYX Cipher Backend App**

This is the backend API for currency conversion using the `currencylayer` API to convert between various cryptocurrencies and fiat currencies.

## **Technologies Used**
- **Axios**: Promise-based HTTP client for making API requests.

## **Features**

- Fetch live exchange rates for currency conversion.
- Supports converting cryptocurrencies (e.g., BTC) to fiat currencies (e.g., USD).
- Flexible API for any valid `from` and `to` currency pairs.

## **Installation**

### **1. Clone the Repository**
Clone this repository to your local machine.

```bash
git clone <repository_url>
```

### **2. Install Dependencies**

Navigate into the project directory and install all dependencies using npm:

```bash
cd nyx-cipher-backend
npm install
```

### **3. Start the Application**

Run the app using the following command:

```bash
npm start
```

The server will run on `http://localhost:5000`.

## **API Usage**

### **Currency Conversion**

To convert from one currency to another, use the following endpoint:

#### **GET** `/api/currency-conversion`

**Query Parameters**:

- `from`: The base currency (e.g., `BTC`).
- `to`: The target currency (e.g., `USD`).

Example:

```bash
GET http://localhost:5000/api/currency-conversion?from=BTC&to=USD
```

#### **Response**:

```json
{
  "rate": 97376.5265
}
```

This will return the conversion rate of 1 `from` currency to the `to` currency.

## **Error Handling**

- **400 Bad Request**: Missing required query parameters (`from`, `to`).
- **500 Internal Server Error**: Issues with fetching exchange rates from the external API or unexpected server issues.

### Example Error Response:

```json
{
  "error": "Missing required parameters: from, to"
}
```
