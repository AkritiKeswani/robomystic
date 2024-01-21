from flask import Flask, jsonify

app = Flask(__name__)

#Members API Route 
@app.route("/members")
def members():
    return {"members": ["Member 1", "Member 2", "Member 3"]}


if __name__ == '__main__':
    app.run(debug=True)

# def get_stock_price(symbol, token):
#     url = f'https://cloud.iexapis.com/stable/stock/{symbol}/quote?token={token}'
#     response = requests.get(url)
#     if response.status_code == 200:
#         data = response.json()
#         return data['latestPrice']
#     else:
#         return None

# @app.route('/get_stocks')
# def get_stocks():
#     token = '1WPOOFP5RRVKESBF'
#     stocks = ['AAPL', 'MSFT', 'AMZN', 'GOOGL', 'FB', 'TSLA', 'BRK.A', 'V', 'JNJ', 'WMT']
#     prices = {}

#     for stock in stocks:
#         price = get_stock_price(stock, token)
#         if price is not None:
#             prices[stock] = price

#     return jsonify(prices)





