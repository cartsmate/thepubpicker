import csv
from config import *

directory_path = Configurations.get_config()['directory_path']


class WriteSearch:

    @staticmethod
    def write_to_search(filters_list):
        outfile = open(f"{directory_path}/search.csv", 'w')
        writer = csv.writer(outfile)
        for filters in filters_list:
            writer.writerows(filters)
