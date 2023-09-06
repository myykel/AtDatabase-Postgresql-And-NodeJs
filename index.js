const pool = require('./db');
const {sql} = require('@databases/pg')

const main = async () => {
  try {
    // INSERT data into a table
    await pool.query(
        sql`
        INSERT INTO students (id, first_name, last_name) 
        VALUES (${1},${'Michael'}, ${'Eboji'})`
        );

    // SELECT data from a table
    const student = await pool.query(
        sql`
        SELECT * FROM students`);
    console.log('students:', student);

    // UPDATE data in a table
    await pool.query(
        sql`
        UPDATE students 
        SET first_name = ${'Michael'} 
        WHERE last_name = ${'Eboji'}`);

    // DELETE data from a table
    await pool.query(
        sql`
        DELETE FROM students 
        WHERE id = ${1}`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the database connection
    await pool.dispose();
  }
};

main();
