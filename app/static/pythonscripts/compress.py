from flask import make_response, json
import gzip


class Compress:

    def compress(self, very_long_content):
        # very_long_content = [{'a': 1, 'b': 2}, {'c': 3, 'd': 4}]
        content = gzip.compress(json.dumps(very_long_content).encode('utf8'), 5)

        # response = make_response(content)
        # response.headers['Content-length'] = len(content)
        # response.headers['Content-Encoding'] = 'gzip'
        return content


    # # dictionary
    # # very_long_content = [{'a': 1, 'b': 2}, {'c': 3, 'd': 4}]
    # content = gzip.compress(json.dumps(_dict).encode('utf8'), compresslevel=9, mtime=None)
    # print('json.dumps(_dict)')
    # print(json.dumps(_dict))
    #
    # print("json.dumps(_dict).encode('utf8')")
    # print(json.dumps(_dict).encode('utf8'))
    # response = make_response(content)
    # response.headers['Content-length'] = len(content)
    # response.headers['Content-Encoding'] = 'gzip'
    # print('response.headers')
    # print(response.headers)
    # print('response.data')
    # print(response.data)
    #
    # # base 64
    # _csv = df_all_data.to_csv(index=False)
    # print('_csv')
    # print(_csv)
    #
    # # _b64 = base64.b64encode(_csv.encode()).decode()
    # _b64 = base64.b64encode(str(_dict).encode()).decode()
    # # _b64 = _dict.encode('base64', 'strict')
    # # _b64 = base64.b64encode(_csv)
    # print('_b64')
    # print(_b64)
    #
    # _ascii = _b64.encode('ascii')
    # print('_ascii')
    # print(_ascii)
    #
    # _bin = bin(int(binascii.hexlify(_ascii), 16))
    # print('_bin')
    # print(_bin)
    #
    # # , compresslevel=9, *, mtime=None)
    # _gzip = gzip.compress(_ascii)
    # print('_gzip')
    # print(_gzip)
    #

    # bytes object
    # compressed_csv = df_all_data.to_csv(None, compression='gzip', index=False).encode('utf-8')
    # all_data_json = compressed_csv

    # json object
    # all_data_json = Dataframes().df_to_dict(df_all_data)

    # all_data_json_from_csv = Dataframes().df_to_dict(df_all_data)
    # all_data_json = Compress().compress(all_data_json_from_csv)
