from flask import Flask, render_template

# We don't have to settle on flask for this, I just know flask best and decided on it to quickly whip this up

app = Flask(__name__)

# This is only really flask notation, this text is kinda irrelevant
# For each "page" on the website, we can just have it render these html templates
# I'll probably have to figure out something else for this though, but again,
# this took me like 0 time to whip up, this mostly exists for the purpose of
# having _something_ in place for the webapp in the main architecture

@app.route("/")
def home():
    return render_template('source.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
