from flask import Flask, request, jsonify
from flask_cors import CORS

from transformers import pipeline

app = Flask(__name__)
CORS(app)


summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

@app.route("/summarize", methods=['POST'])
def summarize_text():
    """
        Recieves a policy text from the frontend and returns a summarized version.
    """
    try:
        data = request.json
        text = data.get("text", "")

        if not text:
            return jsonify({"error": "No text provided"}), 400
        
        summary = summarizer(text, max_length=150, min_length=50, do_sample=False)

        return jsonify({"summary": summary[0]['summary_text']})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == "__main__":
    app.run(debug=True)