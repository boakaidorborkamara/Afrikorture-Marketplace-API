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
--         store_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
--         first_name VARCHAR NOT NULL,
--         last_name VARCHAR NOT NULL,
--         user_name VARCHAR NOT NULL,
--         email VARCHAR NOT NULL,
--         store_name VARCHAR NOT NULL,
--         store_address VARCHAR NOT NULL,
--         county VARCHAR NOT NULL,
--         phone_number VARCHAR NOT NULL,
--         social_media_link VARCHAR NOT NULL
--     );

--     -- insert value into store 
--     INSERT INTO stores (
--         first_name,
--         last_name,
--         user_name,
--         email,
--         store_name,
--         store_address,
--         county,
--         phone_number,
--         social_media_link
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
