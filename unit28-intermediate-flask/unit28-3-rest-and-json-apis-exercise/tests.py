from unittest import TestCase
from app import app
from models import db, Cupcake


CUPCAKE_DATA = {
    "flavor": "TestFlavor",
    "size": "TestSize",
    "rating": 5,
    "image": "http://test.com/cupcake.jpg"
}

CUPCAKE_DATA_2 = {
    "flavor": "TestFlavor2",
    "size": "TestSize2",
    "rating": 10,
    "image": "http://test.com/cupcake2.jpg"
}

class CupcakeViewsTestCase(TestCase):
    """Tests for views of API."""
    def setUp(self):
        """Make demo data."""
        with app.app_context():
            app.config["TESTING"] = True
            app.config['SQLALCHEMY_ECHO'] = False
            db.drop_all()
            db.create_all()
            Cupcake.query.delete()

            cupcake = Cupcake(**CUPCAKE_DATA)
            db.session.add(cupcake)
            db.session.commit()
            # line 42 didn't work, kept producing an InstanceError
            # self.cupcake = cupcake
            self.cupcake_id = cupcake.id

    def tearDown(self):
        """Clean up fouled transactions."""
        with app.app_context():
            db.session.rollback()
            Cupcake.query.delete()
            db.session.commit()

    def test_list_cupcakes(self):
        with app.test_client() as client:
            with app.app_context():
                resp = client.get("/api/cupcakes")

                self.assertEqual(resp.status_code, 200)

                data = resp.json
                self.assertEqual(data, {
                    "cupcakes": [
                        {
                            "id": self.cupcake_id,
                            "flavor": "TestFlavor",
                            "size": "TestSize",
                            "rating": 5,
                            "image": "http://test.com/cupcake.jpg"
                        }
                    ]
                })

    def test_get_cupcake(self):
        with app.app_context():
            with app.test_client() as client:
                url = f"/api/cupcakes/{self.cupcake_id}"
                resp = client.get(url)

                self.assertEqual(resp.status_code, 200)
                data = resp.json
                self.assertEqual(data, {
                    "cupcake": {
                        "id": self.cupcake_id,
                        "flavor": "TestFlavor",
                        "size": "TestSize",
                        "rating": 5,
                        "image": "http://test.com/cupcake.jpg"
                    }
                })

    def test_create_cupcake(self):
        with app.app_context():
            with app.test_client() as client:
                url = "/api/cupcakes"
                resp = client.post(url, json=CUPCAKE_DATA_2)

                self.assertEqual(resp.status_code, 201)

                data = resp.json

                # don't know what ID we'll get, make sure it's an int & normalize
                self.assertIsInstance(data['cupcake']['id'], int)
                del data['cupcake']['id']

                self.assertEqual(data, {
                    "cupcake": {
                        "flavor": "TestFlavor2",
                        "size": "TestSize2",
                        "rating": 10,
                        "image": "http://test.com/cupcake2.jpg"
                    }
                })

            self.assertEqual(Cupcake.query.count(), 2)