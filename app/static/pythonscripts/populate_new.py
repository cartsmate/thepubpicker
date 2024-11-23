from app.models.detail.detail import Detail

from app.static.pythonscripts.external_requests import ExternalRequests
from app.static.pythonscripts.pub_get import GetPub

from config import *


class PopulateNew():

    def __init__(self):
        # # # GET ENVIRONMENTAL VARIABLES
        self.env_vars = Configurations.get_config()

    def populate_form(self, df_new_pub, place_id):

        if place_id is not None:
            # # # populate pub data from GOOGLE PLACES API # # #
            print('call places api to get details from place_id')
            places_response = ExternalRequests().go_get_places(place_id, self.env_vars)

            for key, value in Detail().__dict__.items():
                if value.places_field is not None:
                    try:
                        df_new_pub[value.name] = places_response[value.places_field]
                    except:
                        df_new_pub[value.name] = ""
            try:
                df_new_pub['extra'] = places_response['editorial_summary']['overview']
            except:
                df_new_pub['extra'] = " "
            df_new_pub['detail_latitude'] = places_response['geometry']['location']['lat']
            df_new_pub['detail_longitude'] = places_response['geometry']['location']['lng']
        else:
            # # # populate with lat/lng averages and empty pub template # # #
            df_detail_all = GetPub().get_all(Detail())
            avg_latitude = df_detail_all.loc[:, 'detail_latitude'].mean()
            avg_longitude = df_detail_all.loc[:, 'detail_longitude'].mean()
            df_new_pub['detail_latitude'] = avg_latitude
            df_new_pub['detail_longitude'] = avg_longitude

        return df_new_pub.to_dict(orient='records')
