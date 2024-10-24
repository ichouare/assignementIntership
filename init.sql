CREATE TABLE IF NOT EXISTS Articles (
  id SERIAL PRIMARY KEY,
  img TEXT DEFAULT  '/uploads/article1.png',
  title VARCHAR(500)  NOT NULL,
  content TEXT  NOT NULL,
  create_At DATE DEFAULT NOW()
);


INSERT INTO Articles (img, title, content) 
VALUES 
('/uploads/article1.png', 'Here are some things you should know regarding how we work', 'This article explains our approach to delivering top-notch services while maintaining transparency and customer satisfaction.');

-- Insert 2
INSERT INTO Articles (img, title, content) 
VALUES 
('/uploads/article2.png', 'The ultimate guide to project management', 'In this article, we will walk you through the key aspects of project management and how to ensure success in every step of your projects.');

-- Insert 3
INSERT INTO Articles (img, title, content) 
VALUES 
('/uploads/article3.png', '5 tips for effective teamwork', 'Discover how to build a strong and cohesive team that works effectively towards achieving your business goals with these 5 essential tips.');

-- Insert 4
INSERT INTO Articles (img, title, content) 
VALUES 
('/uploads/article4.png', 'How to balance work and life effectively', 'Striking the perfect balance between work and life can be challenging. In this article, we share insights and strategies to help you maintain that balance.');
