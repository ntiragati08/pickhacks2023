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

    # try:
    #     N = int(request.json['N'])
    #     P = int(request.json['P'])
    #     K = int(request.json['K'])
      
    #     moisture = float(request.json['moisture'])
    #     soil_type = 22
    #     crop_type = 23
       
    # except:
    #     return jsonify({"crop": 'failed to get info2', "data": request.json})

    # temprature = 20
    # humidity = 30
    # rainfall = 100







   # data = request.get_json(force=True)

    df = pd.DataFrame(columns=['Temparature', 'Humidity ',	'Moisture',	'Soil Type',	'Crop Type',	'Nitrogen',	'Potassium',	'Phosphorous'])

    # Add the array [1, 2] to the first row
    data = np.array([28,54,25,4,3,9,10,30])
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