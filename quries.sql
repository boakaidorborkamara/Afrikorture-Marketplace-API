-- -- create vendors table 
-- CREATE TABLE vendors (
--     vendor_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ,
--     name VARCHAR NOT NULL UNIQUE
--     );

-- -- add value to vendor table 
-- INSERT INTO
-- vendors (name)
-- VALUES("Boakai Dorbor Kamara");

-- -- create store table 
-- CREATE TABLE stores (
--         storeId INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
--         firstName VARCHAR(50) NOT NULL,
--         lastName VARCHAR(50) NOT NULL,
--         userName VARCHAR NOT NULL,
--         email VARCHAR NOT NULL,
--         storeName VARCHAR(50) NOT NULL,
--         storeAddress VARCHAR(50) NOT NULL,
--         county VARCHAR(50) NOT NULL,
--         phoneNumber VARCHAR(50) NOT NULL,
--         socialMediaLink VARCHAR NOT NULL
--     );

--     -- insert value into store 
--     INSERT INTO stores (
--         firstName,
--         lastName,
--         userName,
--         email,
--         storeName,
--         storeAddress,
--         county,
--         phoneNumber,
--         socialMediaLink
--     )

--     VALUES (
--         'Boakai',
--         'Kamara',
--         'boakaikamara1',
--         'boakaidkamara@gmail.com',
--         'Bkay Fashion House',
--         'GSA Road',
--         'Montserrado',
--         '0770322706',
--         'www.facebook.com'
--         );


-- -- create products table 
-- CREATE TABLE products (
--     id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
--     store_id INTEGER NOT NULL,
--     name VARCHAR(100) NOT NULL,
--     description VARCHAR(250),
--     image VARCHAR(100),
--     price FLOAT,
--     -- usage_category VARCHAR,
--     -- product_category VARCHAR,
    

--     FOREIGN KEY (store_id)
--         REFERENCES stores (id)
-- );

-- -- add data to products TABLE
-- INSERT INTO products (
--     store_id,
--     name,
--     description,
--     price,
--     category
-- )

-- VALUES(
--     1,
--     'Kafa African Shoes',
--     'Made with leather',
--     '10',
--     'men'
-- );

-- -- create product category table 
-- CREATE TABLE product_category(
--     id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
--     name VARCHAR(20)
-- )
