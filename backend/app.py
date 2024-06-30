from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/api/portfolio', methods=['GET'])
def get_portfolio():
    # Mock data for now
    portfolio_items = [
        {"id": 1, "title": "Project 1", "description": "Description 1", "date": "2024-01-01"},
        {"id": 2, "title": "Project 2", "description": "Description 2", "date": "2023-12-01"},
    ]
    return jsonify(portfolio_items)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
