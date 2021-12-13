-- -- create vendors table 
-- CREATE TABLE vendors (
--     vendor_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL ,
--     name VARCHAR NOT NULL
--     );

-- -- add value to vendor table 
-- INSERT INTO
-- vendors (name)
-- VALUES("Boakai Dorbor Kamara");

-- -- create store table 
-- CREATE TABLE stores (
--     id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
--     name VARCHAR NOT NULL,
--     address VARCHAR NOT NULL,
--     county VARCHAR NOT NULL,
--     phone_number VARCHAR NOT NULL,
--     email VARCHAR 
--     social_media_link VARCHAR,
--     store_description VARCHAR NOT NULL,
--     vendor_id INTEGER NOT NULL,

--     FOREIGN KEY (vendor_id)
--         REFERENCES vendors (vendor)
--     );

--     -- insert value into store 
--     INSERT INTO stores (
--         name,
--         address,
--         county,
--         phone_number,
--         email,
--         store_description,
--         vendor_id
--         )

--     VALUES (
--         'Bkay Fashion House',
--         'GSA Road',
--         'Montserrado',
--         '0770322706',
--         'bkayfashion@gmail.com',
--         'We love to create things that make our customers happy. We are the best African designer',
--         1
--         );


-- -- create products table 
-- CREATE TABLE products (
--     id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
--     store_id INTEGER NOT NULL,
--     name VARCHAR NOT NULL,
--     description VARCHAR,
--     image VARCHAR,
--     price VARCHAR,
--     category VARCHAR,

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