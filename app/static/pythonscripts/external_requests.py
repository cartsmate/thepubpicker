import json
import requests


class ExternalRequests:

    @staticmethod
    def go_get_places(place_id, env_vars):
        print('go_get_places')
        base_url = 'https://maps.googleapis.com/maps/api/place/details/json?'
        keyword = env_vars['places_key']

        fields = ['name', 'photos', 'website', 'url', 'formatted_address', 'editorial_summary', 'geometry', 'rating',
                  'types', 'address_components']
        field_list = 'name'
        for field in fields[1:]:
            field_list += '%2C' + field

        full_url = f"{base_url}fields={field_list}&place_id={place_id}&key={keyword}"
            # .format(base_url=base_url, field_list=field_list, place_id=place_id, keyword=keyword)
        print(full_url)

        response = requests.get(full_url)
        print('response')
        print(response.json())
        response_dict = response.json()['result']
        print(json.dumps(response_dict, indent=4, sort_keys=True))
        return response_dict
