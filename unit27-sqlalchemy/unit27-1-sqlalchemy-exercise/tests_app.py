from app import app
# from app_blogly_methods import create_db_user, delete_db_row
from models import db, User
from unittest import TestCase

app.config['SQLALCHEMY_ECHO'] = False
app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

class BloglyRoutes(TestCase):
    with app.app_context():
            db.drop_all()
            db.create_all()

    def setUp(self):
        """Set up test settings and data!"""
        with app.app_context():
            # db.drop_all()
            # db.create_all()
            User.query.delete()
            user1 = User(first_name='test', last_name='user', image_url="http://test.jpg")
            db.session.add(user1)
            db.session.commit()
            user = User.query.filter_by(first_name=user1.first_name).first()
            self.user1 = user

    def tearDown(self):
        """Clear possible transaction bugs!"""
        with app.app_context():
            db.session.rollback()

    def test_home(self):
        """
        /GET '/'
        """
        with app.app_context():
            with app.test_client() as client:
                req = client.get('/', follow_redirects=True)
                self.assertEqual(req.status_code, 200)
                html = req.get_data(as_text=True)
                self.assertIn("<h1>Users</h1>", html)

    def test_users(self):
        """
        /GET '/users'
        """
        with app.app_context():
            with app.test_client() as client:
                req = client.get('/users')
                self.assertEqual(req.status_code, 200)
                html = req.get_data(as_text=True)
                self.assertIn("test user", html)

    def test_users_new(self):
        """
        /GET '/users/new'
        """
        with app.app_context():
            with app.test_client() as client:
                req = client.get('/users/new')
                self.assertEqual(req.status_code, 200)
                html = req.get_data(as_text=True)
                self.assertIn("<button>SUBMIT!</button>", html)
    
    def test_users_new_post(self):
        """
        /POST '/users/new'
        """
        with app.app_context():
            with app.test_client() as client:
                data = { "fname": "test", "lname": "user2", "img": "usr2.jpg" }
                req = client.post('/users/new', follow_redirects=True, data=data)
                self.assertEqual(req.status_code, 200)
                html = req.get_data(as_text=True)
                self.assertIn("test user2", html)
    
    def test_get_user(self):
        """
        /GET '/users/<int:user_id>]'
        """
        with app.app_context():
            with app.test_client() as client:
                req = client.get(f"/users/{self.user1.id}")
                self.assertEqual(req.status_code, 200)
                html = req.get_data(as_text=True)
                self.assertIn("User Details", html)
                self.assertIn("test user", html)
    
    def test_edit_user(self):
        """
        /POST '/user/edit/<int:user_id>'
        """
        with app.app_context():
            with app.test_client() as client:
                data = { "fname-edit": "", "lname-edit": "user edit", "img-url-edit": "" }
                req = client.post(f"/user/edit/{self.user1.id}", follow_redirects=True, data=data)
                self.assertEqual(req.status_code, 200)
                html = req.get_data(as_text=True)
                self.assertIn("Users", html)
                self.assertIn("test user edit", html)
                # print("$#$#$#$#$#$#$#$#$#$#$#$# HTML")
                # print(html)
                # print("$#$#$#$#$#$#$#$#$#$#$#$# HTML")