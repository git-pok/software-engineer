# Blogly App Exercise Part 2: Adding Posts
In this part, we’ll add functionality for blog posts using the one-to-many features of SQLAlchemy.

## Post Model
Next, add another model, for blog posts (call it Post).

Post should have an:
- id, like for User
- title
- content
- created_at a date+time that should automatically default to the when the post is created
a foreign key to the User table

## Add Post Routes
GET /users/[user-id]/posts/new:
- Show form to add a post for that user.

POST /users/[user-id]/posts/new:
- Handle add form; add post and redirect to the user detail page.

GET /posts/[post-id]:
- Show a post.
- Show buttons to edit and delete the post.

GET /posts/[post-id]/edit:
- Show form to edit a post, and to cancel (back to user page).

POST /posts/[post-id]/edit:
- Handle editing of a post. Redirect back to the post view.

POST /posts/[post-id]/delete:
- Delete the post.

## Change the User Page
Change the user page to show the posts for that user.

## Testing
Update any broken tests and add more testing