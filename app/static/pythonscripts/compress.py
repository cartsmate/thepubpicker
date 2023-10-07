from flask import make_response, json
import gzip

@app.route('/data.json')
def compress():
    very_long_content = [{'a': 1, 'b': 2}, {'c': 3, 'd': 4}]
    content = gzip.compress(json.dumps(very_long_content).encode('utf8'), 5)
    response = make_response(content)
    response.headers['Content-length'] = len(content)
    response.headers['Content-Encoding'] = 'gzip'
    return response
