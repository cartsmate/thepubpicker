import logging
import logging.config
from config import Configurations


class Logger:

    env_vars = Configurations().get_config2()

    def create_logger(self):
        print(self.env_vars['directory_path'])
        logging.config.fileConfig(self.env_vars['directory_path'] + "/logger/log.config")
        new_logger = logging.getLogger('simpleLogger')
        # new_logger.debug('this is a debug message - to CONSOLE')

        file_handler = logging.FileHandler(self.env_vars['directory_path'] + "/logger/logger_file.log")
        file_handler.setLevel(logging.INFO)
        file_formatter = logging.Formatter('%(name)s - %(levelname)s - %(message)s')
        file_handler.setFormatter(file_formatter)
        new_logger.addHandler(file_handler)
        # log_str = 'this is a test......'
        # print(log_str)
        return new_logger

# logger = logging.getLogger(__name__)
# logger.propagate = False
# logger.info('hello from logger.py')

# stream_handler = logging.StreamHandler()
# file_handler = logging.FileHandler('logger_file.log')
#
# stream_handler.setLevel(logging.WARNING)
# file_handler.setLevel(logging.ERROR)
#
# formatter = logging.Formatter('%(name)s - %(levelname)s - %(message)s')
# stream_handler.setFormatter(formatter)
# file_handler.setFormatter(formatter)
#
# logger.addHandler(stream_handler)
# logger.addHandler(file_handler)
#
# logger.warning('this is a WARNING')
# logger.error('this is an ERROR')
