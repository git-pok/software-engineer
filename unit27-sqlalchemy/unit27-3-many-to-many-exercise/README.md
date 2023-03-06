# Blogly App Exercise Part 3: Add M2M Relationship
The site will have a table of tags — there should be an SQLAlchemy model for this:
- id
- name, (unique!)

There should also be a model for PostTag, which joins together a Post and a Tag. It will have foreign keys for the both the post_id and tag_id. Since we don’t want the same post to be tagged to the same tag more than once, we’ll want the combination of post + tag to be unique. It also makes sense that neither the post_id nor tag_id can be null. Therefore, we’ll use a “composite primary key” for this table— a primary key made of more than one field. You may have to do some research to learn how to do this in SQLAlchemy.

Add relationships so you can see the .tags for a post, and the .posts for a tag.

STOP and play around with this feature in IPython before continuing.

## Add Routes
GET /tags:
- Lists all tags, with links to the tag detail page.

GET /tags/[tag-id]:
- Show detail about a tag. Have links to edit form and to delete.

GET /tags/new:
- Shows a form to add a new tag.

POST /tags/new:
- Process add form, adds tag, and redirect to tag list.

GET /tags/[tag-id]/edit:
- Show edit form for a tag.

POST /tags/[tag-id]/edit:
- Process edit form, edit tag, and redirects to the tags list.

POST /tags/[tag-id]/delete:
- Delete a tag.

## Update Routes for Posts
Update the route that shows a post so that it shows all the tags for that post.

Update the routes for adding/editing posts so that it shows a listing of the tags and lets you pick which tag(s) apply to that post. (You can use whatever form element you want here: a multi-select, a list of checkboxes, or any other way you can solve this.