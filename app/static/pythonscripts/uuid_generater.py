import uuid


class UuidGenerator:

    @staticmethod
    def get_new_uuid():
        new_id = str(uuid.uuid4())
        return new_id
