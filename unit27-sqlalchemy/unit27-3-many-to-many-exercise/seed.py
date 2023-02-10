from models import User, Post, Tag, PostTag, db
from app import app

# Create all tables
# drop_all drops all tables in the database
# create_all creates any of those tables from he models
with app.app_context():
    db.drop_all()
    db.create_all()

# If table isn't empty, empty it
# User.query.delete() empties everything 
    User.query.delete()
    Post.query.delete()
    Tag.query.delete()
    PostTag.query.delete()

# Add users and objects to session, so they'll persist
# #Commit - - otherwise, this never gets saved!
    bowser_image_url = "https://images.unsplash.com/photo-1612404475557-369522ece36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1320&q=80"
    fvin_image_url = "https://plus.unsplash.com/premium_photo-1675039871139-06cc792da9a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3432&q=80"
    
    bowser = User(first_name='Bowser', last_name="Wario", image_url=bowser_image_url)
    fvin = User(first_name='Fvin', last_name="Vector", image_url=fvin_image_url)

    db.session.add(bowser)
    db.session.add(fvin)
    db.session.commit()

# Add posts and objects to session, so they'll persist
# #Commit - - otherwise, this never gets saved!
    bw1 = Post(title='Super Mario Land I', content="Come join the fun!!!", user_id=1)
    fv1 = Post(title='Fly the World', content="Visit the most luxurious places for villains!", user_id=2)

    db.session.add(bw1)
    db.session.add(fv1)
    db.session.commit()

# Add tags and objects to session, so they'll persist
# #Commit - - otherwise, this never gets saved!
    fun = Tag(name="fun")
    radical = Tag(name="radical")
    scary = Tag(name="scary")
    smart = Tag(name="smart")

    db.session.add(fun)
    db.session.add(radical)
    db.session.add(scary)
    db.session.add(smart)
    db.session.commit()

# these use the through relationship to add to posts_tags table 
    funtag = Tag.query.get(1)
    bw1.tags.append(funtag)
    db.session.add(funtag)
    db.session.commit()

    radtag = Tag.query.get(2)
    bw1.tags.append(radtag)
    db.session.add(radtag)
    db.session.commit()

# To test through relationships:
# with app.app_context():
#     tag2 = Tag.query.get(2)
#     tag2_data = tag2.posts
#         for data in tag2_data:
#             print(data.title)