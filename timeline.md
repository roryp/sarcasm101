# Timeline of Sarcasm Detection and Related Advances

## **2015: Introduction of the Twitter Sarcasm Corpus**
- Released as a benchmark for sarcasm detection in NLP.
- Used hashtags like `#sarcasm` or `#not` to weakly supervise sarcastic tweets.
- Example:
  - Sarcastic: "Wow, I love waiting in traffic for hours. #sarcasm"
  - Non-sarcastic: "I love spending time with my family."

## **2017: Introduction of DeepMoji**
- DeepMoji was a deep learning model trained on 1.2 billion tweets containing emojis.
- Leveraged emojis as emotional context for training.
- Achieved state-of-the-art results in sarcasm and emotion detection tasks.
- Example:
  - Sarcastic text: "So thrilled to be stuck in a meeting... 😒"

## **2018–2020: Rise of Transformer-Based Models**
- Introduction of **BERT**, **RoBERTa**, and other Transformer models.
- Fine-tuned on datasets like:
  - **Twitter Sarcasm Corpus**
  - **SARC (Self-Annotated Reddit Corpus)**
- These models achieved improved sarcasm detection by capturing broader context and tone.

## **2020: Introduction of T5 (Text-to-Text Transfer Transformer)**
- T5 treated sarcasm detection as a text-to-text problem:
  - Input: "Sarcasm Detection: Wow, I LOVE being ignored."
  - Output: "Sarcastic."
- Pretrained on the **C4 dataset** and fine-tuned on sarcasm-specific datasets.
- Significantly improved sarcasm detection by leveraging text generation and context understanding.

## **2021–Present: Large Language Models (LLMs)**
- Models like **GPT-3**, **GPT-4**, and fine-tuned T5 further advanced sarcasm detection.
- Use of multi-modal datasets combining text with images for better context.
- Modern models excel at handling nuanced tasks like sarcasm by integrating extensive pretraining with fine-tuning.

## **Key Challenges Highlighted**
- **Short Texts:** Tweets and similar short-form content lack sufficient context.
- **Noisy Labels:** Hashtag-based datasets (e.g., #sarcasm) introduce inaccuracies.
- **Reliance on World Knowledge:** Sarcasm often requires external knowledge or tonal cues.

## **Legacy and Contributions**
- The Twitter Sarcasm Corpus and DeepMoji laid the foundation for sarcasm detection research.
- Modern Transformer models like T5 and GPT expanded on these foundations, pushing the boundaries of understanding nuanced language.
