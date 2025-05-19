import sql from "../config/db.js";

const productSchema = async () => {
  try {
    await sql`
    CREATE TABLE IF NOT EXISTS product(
    product_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL ,
    price int NOT NULL,
    image_url VARCHAR(255) NOT NULL
    );
`;
    console.log("productSchema has been created✅");
  } catch (error) {
    console.log(`ERROR IN productSchema❌ ${error}`);
  }
};

export default productSchema;
