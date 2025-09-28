<<<<<<< HEAD
 
=======
# Data Models

## User

- **user_id**: INT
- **username**: VARCHAR(255)
- **email**: VARCHAR(255)
- **password_hash**: VARCHAR(255)
- **user_type**: STRING
- **created_at**: DATETIME

---

## Product

- **product_id**: INT
- **name**: VARCHAR(255)
- **brand**: VARCHAR(100)
- **description**: TEXT
- **base_price**: DECIMAL
- **category_id**: INT
- **images_urls**: STRING

---

## Cart Item

- **cart_item_id**: INT
- **user_id**: INT
- **product_id**: INT
- **quantity**: INT

---

## Order Item

- **order_item_id**: INT
- **order_id**: INT
- **product_id**: INT
- **quantity**: INT
- **unit_price_at_purchase**: DECIMAL

---

## Order

- **order_id**: INT
- **user_id**: INT
- **order_date**: DATE
- **total_amount**: DECIMAL
- **shipping_address_id**: INT
- **order_status**: VARCHAR(5)
- **payment_id**: INT

---

## Payments

- **payment_id**: INT
- **order_id**: INT
- **transaction_amount**: DECIMAL
- **payment_method**: VARCHAR(50)
- **gateway_transaction_id**: VARCHAR(255)
- **transaction_status**: VARCHAR(5)
- **transaction_date**: DATE
- **masked_card_details**: VARCHAR(50)


## ARCHITECTURE

flowchart TD
    A[Web Browser] --> B[Front-end]
    
    B --> C[Client]
    B --> D[Admin/Inventory]
    
    C --> E[REST APIs]
    D --> E
    
    E --> F[Back-end]
    
    F --> G[Authentication]
    F --> H[Payment Service]
    F --> I[Cloud Service]
    F --> J[Images Service]
    
    H --> K[Payment Gateway]
    
    I --> L[Database]
    J --> L
    F --> L
    
    L --> M[PostgreSQL]
>>>>>>> 06f4efc2f73b698defca745c2e4916bdf02608c9
