import sys
import os
import uuid
import unittest
from app.static.pythonscripts.uuid_generater import UuidGenerator
from app.static.pythonscripts.files_counter import FilesCounter


class TestCounter(unittest.TestCase):

    def test_counter(self):
        self.assertIsNotNone(FilesCounter.go_get_counter())
        self.assertTrue(type(FilesCounter.go_get_counter() is int))
        # self.assertRaises(FileNotFoundError, FilesCounter.go_get_counter(), )


if __name__ == '__main__':

    unittest.main()

