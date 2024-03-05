import sys
import os
import uuid
import unittest
from app.static.pythonscripts.files_counter import FilesCounter
from app.static.pythonscripts.uuid_generater import UuidGenerator


class TestPythonscripts(unittest.TestCase):

    def test_counter(self):
        self.assertIsNotNone(FilesCounter.go_get_counter())
        self.assertTrue(type(FilesCounter.go_get_counter() is int))
        # self.assertRaises(FileNotFoundError, FilesCounter.go_get_counter(), )

    def test_uuid(self):
        self.assertIsNotNone(UuidGenerator.get_new_uuid())
        self.assertEqual(36, len(UuidGenerator.get_new_uuid()))
        self.assertTrue(uuid.UUID(str(UuidGenerator.get_new_uuid())))


if __name__ == '__main__':

    unittest.main()

