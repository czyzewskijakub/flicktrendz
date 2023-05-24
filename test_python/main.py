import unittest
from predict_test import run_website_predict
from register_test import run_website_register

class RunTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.register_results = run_website_register()
        cls.results = run_website_predict()

    def test_register(self):
        self.assertTrue(len(self.register_results) > 0)

    def test_login_exists(self):
        self.assertEqual(self.results[0], 'Krafi604@gmail.com')

    def test_password_exists(self):
        self.assertEqual(self.results[1], '14km77So9x!')

    def test_input1_field_exists(self):
        self.assertEqual(self.results[2], '1')

    def test_input2_field_exists(self):
        self.assertEqual(self.results[3], '2')
    
    def test_input3_field_exists(self):
        self.assertEqual(self.results[4], '3')

    def test_input4_field_exists(self):
        self.assertEqual(self.results[5], '4')

    def test_input5_field_exists(self):
        self.assertEqual(self.results[6], '5')

    def test_input6_field_exists(self):
        self.assertEqual(self.results[7], '10')
    
    def test_input7_field_exists(self):
        self.assertEqual(self.results[8], '7')
    
    def test_input8_field_exists(self):
        self.assertEqual(self.results[9], '8')

    def test_input9_field_exists(self):
        self.assertEqual(self.results[10], '9')

    def test_input10_field_exists(self):
        self.assertEqual(self.results[11], '10')

    def test_input11_field_exists(self):
        self.assertEqual(self.results[12], '2022-05-11')

    def test_input12_field_exists(self):
        self.assertIsNotNone(self.results[13])

    def test_user_name_exists(self):
        self.assertEqual(self.results[14], 'Ryszawy')
    
    def test_user_email_exists(self):
        self.assertEqual(self.results[15], 'Krafi604@gmail.com')

    def test_user_email_exists(self):
        self.assertEqual(self.results[16], self.results[13])

if __name__ == '__main__':
    unittest.main()