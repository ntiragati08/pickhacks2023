import pandas as pd
import numpy as np
import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin




#load model



with open('modelnew.pkl', 'rb') as f:
    model = pickle.load(f)

# create a Flask app
app = Flask(__name__)

CORS(app)


# define a route for the predict endpoint
@app.route('/api/v1/predict', methods=['POST'])

def predict():

    try:
        N = int(request.json['N'])
        P = int(request.json['P'])
        K = int(request.json['K'])
        temprature = int(request.json['temp'])
        humidity = int(request.json['humidity'])
        rainfall = int(request.json['rainfall'])
      
        moisture = float(request.json['moisture'])
        soil_type = float(request.json['soil_type'])
        crop_type = float(request.json['crop_type'])
       
    except:
        return jsonify({"crop": 'failed to get info2', "data": request.json})

    







   # data = request.get_json(force=True)

    df = pd.DataFrame(columns=['Temparature', 'Humidity ',	'Moisture',	'Soil Type',	'Crop Type',	'Nitrogen',	'Potassium',	'Phosphorous'])

    # Add the array [1, 2] to the first row
    data = np.array([N,P,K,temperature,humidity,rainfall,moisture,soil_type,crop_type])
    df.loc[0] = data
    #print(df.head(1))
    prediction = model.predict(df.head(1))[0]

    p = int(prediction)

    my_dict = {"Urea" : 6, "DAP" : 5, "14-35-14" : 1, "28-28" : 4, "17-17-17" : 2, "20-20" : 3,
       "10-26-26" : 0}
    for key, value in my_dict.items():
        if value == p:
            answer = key

    response = jsonify({'result': answer})
    response.headers.add('Access-Control-Allow-Origibn', '*')
    return response


if __name__ == "__main__":
    app.run(debug=True)
