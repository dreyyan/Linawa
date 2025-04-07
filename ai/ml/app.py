import gradio as gr
from transformers import pipeline

# Load the model from Hugging Face
summarizer = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")

# Define the summarization function
def summarize_text(text):
    summary = summarizer(text, max_length=150, min_length=50, do_sample=False)
    return summary[0]['summary_text']

# Create a Gradio interface
interface = gr.Interface(
    fn=summarize_text,
    inputs="text", 
    outputs="text",  
    live=True  
)

# Launch the app
interface.launch()
