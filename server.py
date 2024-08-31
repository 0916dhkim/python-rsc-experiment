from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route("/rsc")
def hello_world():
    def generate():
        yield '0: ["$", "p", null, {"children":["Haha I\'m from the server!"]}]\n'
    return app.response_class(generate())

@app.route('/public/<path:path>')
def send_js(path):
    return send_from_directory('public', path)
