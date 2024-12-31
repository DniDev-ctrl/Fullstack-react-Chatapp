from flask import *
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY'] = '!94LaozThfHfSEk@zugwH%zKVu@ZerW1kZynG0tUdJnV^lTPBtJPHH!EwQUZh^Cvrf#WXz9%kOvN32RjpTBwqh2epkCR9yJK4iDOk67AnR%f10f&Ec7q9^QqehzL%mrY'

socketio = SocketIO(app, cors_allowed_origins='*')

@socketio.on('connect')
def connect():
    print('connected')

@socketio.on('message')
def on_message(msg):
    print(msg)
    send(msg, broadcast=True)
    return None


if '__main__' == __name__:
    socketio.run(app, host='0.0.0.0', port=5005, debug=True)