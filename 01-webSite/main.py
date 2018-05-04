from flask import Flask, render_template, url_for, session, redirect,request, flash
import os
import MySQLdb


app = Flask(__name__)

db = MySQLdb.connect(host="localhost", user="root", passwd="3328", db="chocobytes")
cur = db.cursor()

@app.route('/')
@app.route('/home')
def home():
    if 'logged_in' in session and session['logged_in'] is True:
        return lang('')
    else:
        return redirect(url_for('login'))


@app.route('/login', methods=['GET', 'POST'])
def login():
    if 'logged_in' in session and session['logged_in'] is True:
        return home()
    if request.method == 'POST':
        username = request.form['UserName']
        password = request.form['Password']
        cur.execute("SELECT * from user where username='" + username + "' and password='" + password + "'")
        data = cur.fetchone()
        if data is None:
            return render_template('01-loginPage.html', reg='login', msg='invalid username or password')
        else:
            session['logged_in'] = True
            session['username'] = username
            return redirect(url_for('home'))
    else:
        return render_template('01-loginPage.html', reg='login', msg='')


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = str(request.form['UserName'])
        email = str(request.form['email'])
        pass1 = str(request.form['Password'])
        pass2 = str(request.form['Password2'])
        if pass1 != pass2:
            return render_template('01-loginPage.html', reg='signup', msg='password must match')
        cur.execute("insert into user (username,email,password)values (%s,%s,%s)", (username, email, pass1))
        db.commit()
        return render_template('01-loginPage.html', reg='login', msg='almost ready, login to continue')
    else:
        return render_template('01-loginPage.html', reg='signup')


@app.route('/<language>')
def lang(language):
    if 'logged_in' in session and session['logged_in'] is True:
        cur.execute('select * from cpp')
        cpp_data = cur.fetchall()
        cur.execute('select * from java')
        java_data = cur.fetchall()
        cur.execute('select * from web')
        web_data = cur.fetchall()
        return render_template('02-languagesPage.html', lang=language, cpp=cpp_data, java=java_data, web=web_data)
    else:
        return render_template('01-loginPage.html', reg='login', msg='You must login to continue')


@app.route('/C++')
def cpp():
    return lang('C++')


@app.route('/Java')
def java():
    return lang('Java')


@app.route('/Web')
def web():
    return lang('Web')


@app.route('/cSharp')
def c_sharp():
    if 'logged_in' in session and session['logged_in'] is True:
        cur.execute('select * from csharp')
        data = cur.fetchall()
        return render_template('03-cSharpPage.html', csharp=data)
    else:
        return render_template('01-loginPage.html', reg='login', msg='You must login to continue')


@app.route('/Puzzles')
def puzzles():
    if 'logged_in' in session and session['logged_in'] is True:
        return render_template('04-puzzlesPage.html')
    else:
        return render_template('01-loginPage.html', reg='login', msg='You must login to continue')

@app.route('/profile')
def profile():
    if 'logged_in' in session and session['logged_in'] is True:
        return render_template('profile.html')
    else:
        return render_template('01-loginPage.html', reg='login', msg='You must login to continue')


@app.route('/hafez')
def hafez():
        return render_template('mainPage.html')


@app.route('/Algorithms')
def algorithms():
    if 'logged_in' in session and session['logged_in'] is True:
        cur.execute('select * from algorithms')
        data = cur.fetchall()
        return render_template('05-algorthimsPage.html', algo=data)
    else:
        return render_template('01-loginPage.html', reg='login', msg='You must login to continue')


""" TODO
@app.route('/Button1')
def Button1():
    return render_template('')
@app.route('/Button2')
def Button2():
    return render_template('')
@app.route('/Button3')
def Button3():
    return render_template('')
"""


@app.route("/logout")
def logout():
    session['logged_in'] = False
    return home()


if __name__ == "__main__":
    app.secret_key = os.urandom(12)
    app.run(debug=True)
