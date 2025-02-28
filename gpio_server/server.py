from flask import Flask, request, jsonify
from flask_cors import CORS
# import RPi.GPIO as GPIO

app = Flask(__name__)
CORS(app)  # Allow Angular to communicate with Flask

LED_PIN = 17  # GPIO17

# GPIO setup
# GPIO.setmode(GPIO.BCM)
# GPIO.setup(LED_PIN, GPIO.OUT)

@app.route('/toggle', methods=['GET'])
def toggle_led():
    # GPIO.output(LED_PIN, GPIO.HIGH if state else GPIO.LOW)
    print('Request')
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
