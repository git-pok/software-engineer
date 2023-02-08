from app import app
# import datetime
from app_blogly_methods import create_db_row, delete_db_row, create_post_db_row, delete_post_db_row
from models import db, User, Post 
from unittest import TestCase

with app.app_context():
    db.drop_all()
    db.create_all()

app.config['SQLALCHEMY_ECHO'] = False

app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

class BloglyAppPythonMethods(TestCase):
    def setUp(self):
        """drop and create tables"""
        with app.app_context():
            db.drop_all()
            db.create_all()

    def tearDown(self):
        """drop tables"""
        with app.app_context():
            db.drop_all()

    def test_create_db_row(self):
        """create_db_row returns the id of the created row; this tests that"""
        with app.app_context():
            self.assertEqual(create_db_row('VINCENT', 'BRINXZ', 'www.test-vincent.com'), 1)
            self.assertEqual(create_db_row('BOWSER', 'WARIO', 'www.test-bowser.com'), 2)

    def test_delete_db_row(self):
        """delete a row, verify its id, and verify 1 row is in table"""
        with app.app_context():
            create_db_row('VINCENT', 'BRINXZ', 'www.test-vincent.com')
            create_db_row('BOWSER', 'WARIO', 'www.test-bowser.com')
            delete_db_row(User.query.get(1))
            self.assertEqual(len(User.query.all()), 1)
            self.assertEqual(len(User.query.filter_by(id=2).all()), 1)

    def test_delete_post_db_row(self):
        """create_post_db_row returns the id of the created row; this tests that"""
        with app.app_context():
            create_db_row('Bowser', 'Wario', 'www.test-bowser.com')
            create_db_row('Mario', 'Fwuuhh', 'www.test-mario.com')
            create_post_db_row('TestTitle', 'TestContent', 1)
            create_post_db_row('TestTitleII', 'TestContentII', 2)
            post_id = Post.query.get_or_404(2)
            delete_db_row(post_id)
            self.assertEqual(len(Post.query.all()), 1)
            self.assertEqual(len(Post.query.filter_by(id=1).all()), 1)

class BloglyAppFlaskIntegrationTests(TestCase):
    def setUp(self):
        """clean the query and create a User instance"""
        with app.app_context():
            User.query.delete()
            user = User(first_name='Bowser', last_name='Wario', image_url='www.test-bowser.com')
            # post = Post(title='TestTile', content='TestContent', user_id=1)
            db.session.add(user)
            db.session.commit()

            self.user_id = user.id
            self.user = user

    def tearDown(self):
        """clean the session"""
        with app.app_context():
            db.session.rollback()

    def test_home_redirect(self):
        """tests the home page redirect"""
        with app.app_context():
            with app.test_client() as client:
                resp = client.get('/')
                html = resp.get_data(as_text=True)
                self.assertEqual(resp.status_code, 302)

    def test_list_users(self):
        """tests if /users lists users"""
        with app.app_context():
            with app.test_client() as client:
                resp = client.get('/users')
                html = resp.get_data(as_text=True)
                self.assertEqual(resp.status_code, 200)
                self.assertIn('Bowser', html)
    
    def test_add_user(self):
        """tests if /user/submitted creates a user"""
        with app.app_context():
            with app.test_client() as client:
                add_user = {"fname": 'Bowser II', "lname": 'Wario', "img-url": 'www.test-bowser.com'}
                resp = client.post('/user/submitted', data=add_user, follow_redirects=True)
                html = resp.get_data(as_text=True)
                self.assertEqual(resp.status_code, 200)
                self.assertIn('<li><a href="/users/2">Bowser II Wario</a></li>', html)

    # def test_add_post(self):
    #     """tests if /user/submitted creates a user"""
    #     with app.app_context():
    #         with app.test_client() as client:
    #             add_post = {"post-title": 'TestTitle', "post-content": 'TestContent'}
    #             resp = client.post('/users/1/posts/new', data=add_post, follow_redirects=True)
    #             html = resp.get_data(as_text=True)
    #             self.assertEqual(resp.status_code, 200)
    #             self.assertIn('<li><a href="/posts/1">TestTitle</a></li>', html)