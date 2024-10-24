import { Pool, QueryResultRow, QueryResult } from 'pg'

// Creates a global connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

// export const query = <Result extends QueryResultRow>(
//   text: string,
//   params?: any[],
//   callback?: (err: Error, result: QueryResult<Result>) => void
// ) : Promise<QueryResult<Result>> | void  => {
//   if (callback) {
//     return pool.query(text, params?? [], callback)
//   }
//   return pool.query<Result>(text, params ?? [])

// }


export const query = <Result extends QueryResultRow>(
  text: string,
  params: any[] = []
) => {
  return pool.query<Result>(text, params)
}


// const queries = [
//  [ '/uploads/article1.png', 'Here are some things you should know regarding how we work', 'This article explains our approach to delivering top-notch services while maintaining transparency and customer satisfaction.'],
//   ['/uploads/article2.png', 'The ultimate guide to project management', 'In this article, we will walk you through the key aspects of project management and how to ensure success in every step of your projects.'],
//   ['/uploads/article3.png', '5 tips for effective teamwork', 'Discover how to build a strong and cohesive team that works effectively towards achieving your business goals with these 5 essential tips.'],
// [ '/uploads/article4.png', 'How to balance work and life effectively', 'Striking the perfect balance between work and life can be challenging. In this article, we share insights and strategies to help you maintain that balance.']
// ];

// const insertArticles = async () => {
//   try {
//     for (const items of queries) {

//       console.log("--------->", items);
//        await query('INSERT INTO Articles (img, title, content) VALUES ($1, $2, $3)', [items[0], items[1], items[2]])
//       console.log('Article inserted successfully.');
//     }
//   } catch (err) {
//     console.error('Error inserting articles:', err);
//   } 
// };


// insertArticles();




 



