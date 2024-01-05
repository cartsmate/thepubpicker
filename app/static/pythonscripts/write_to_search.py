import csv
from config import Configurations

directory_path = Configurations().get_config2()['directory_path']


class WriteSearch:

    def write_to_search(self, filters_list):
        outfile = open(directory_path + '/search.csv', 'w')
        writer = csv.writer(outfile)
        for filters in filters_list:
            writer.writerows(filters)
