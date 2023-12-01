import uuid
from config import Configurations

config = Configurations().get_config()


class UuidGenerator:

    def get_new_uuid(self):
        new_id = str(uuid.uuid4())
        return new_id
