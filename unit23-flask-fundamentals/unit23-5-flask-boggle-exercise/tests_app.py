from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle

app.config['TESTING'] = True
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar'] 


class FlaskTests(TestCase):
    # -- write tests for every view function / feature!
    def test_game_board_form(self):
        with app.test_client() as client:
            res = client.get('/')
            html = res.get_data(as_text=True)
            self.assertEqual(res.status_code, 200)
            self.assertIn('<form id="boggle-form" action="/check-word" method="POST">', html)
            self.assertIn('boggle_board', session)


