import os
import config
import openai
from flask import Flask, redirect, render_template, request, url_for

app = Flask(__name__)
openai.api_key = config.OPENAI_API_KEY


@app.route("/", methods=("GET", "POST"))
def index():
    if request.method == "POST":
        name = request.form["name"]
        job_position = request.form["job_position"]
        company = request.form["company"]
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=generate_prompt(name,job_position,company),
            temperature=0.6,
        )
        return redirect(url_for("index", result=response.choices[0].text))

    result = request.args.get("result")
    return render_template("index.html", result=result)


def generate_prompt(name,job_position,company):
    prompt_gen = """
     Complete the following introduction for a cover letter: 
     Hi my name is {}, I'd like a position as a {} in {}, I'm prepared to do so... """.format(
        name, job_position, company.capitalize()
    )
    print(prompt_gen)
    return prompt_gen

if __name__ == "__main__":
    app.run(debug=True)