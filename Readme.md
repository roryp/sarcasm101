# Showcasing Our AI Canvas Adventure

## Introduction

This blog post chronicles a remarkable journey through a **ChatGPT**-driven conversation, building projects in real time using a canvas-based collaboration tool (which ChatGPT calls **"canmore"**). We set out to:

- Create HTML pages for sentiment analysis
- Implement React-based code for a **sarcastic sentiment heatmap**
- Integrate libraries like **Framer Motion** and **Sentiment**
- Keep it all neatly organized in an ever-changing **canvas** environment

## Step 1: The Simple HTML Sentiment Analyzer

First, we asked ChatGPT for a simple HTML file that would analyze sentiment based on a small, custom dictionary. This initial prototype:

1. Prompts the user for text input
2. Splits text into words
3. Assigns a sentiment score with a **manually defined dictionary**
4. Displays a **heatmap emoji** in a neat table

The user tested the page by copying the generated HTML into a local file, opening it in a browser, and verifying that the sentiment results for each word matched expectations.

### Highlights

- The dictionary approach allowed us to see how *sarcasm words* (like **"proud"** and **"monumental"**) are rated as positive while the overall sarcasm might be negative.
- The page was coded to handle punctuation and spacing gracefully.

## Step 2: Exploring React Libraries for Sentiment Analysis

Next, we discussed leveraging existing **React**-compatible sentiment libraries. The top recommendation was the [**Sentiment**](https://www.npmjs.com/package/sentiment) library, which:

- Comes with a built-in AFINN-based wordlist
- Provides easy-to-use `.analyze()` function
- Delivers a `score`, `comparative`, and lists of positive/negative words

ChatGPT demonstrated a simple integration:

```jsx
import React, { useState } from 'react';
import Sentiment from 'sentiment';

function SentimentAnalyzer() {
  // ...
}

export default SentimentAnalyzer;
```

## Step 3: Bringing Sarcasm to React with Framer Motion

To add flair, we decided to animate the analysis results. ChatGPT created a **Framer Motion**-driven React component that:

1. Tokenizes the user text
2. Analyzes each word’s sentiment
3. Animates them onto the screen as **color-coded "chips"** (red for negative, green for positive, gray for neutral)
4. Staggers each word’s appearance for a **smooth visual effect**

We ended up with:

```jsx
import React, { useState } from 'react';
import Sentiment from 'sentiment';
import { motion } from 'framer-motion';

// The full code can be found in the canvas doc

export default function SentimentHeatmap() {
  // ...
}
```

In the canvas, ChatGPT updated the code multiple times until we arrived at a final version that merges both sentiment analysis and dynamic animations.

## Step 4: Testing and Iteration

As each iteration of the code was produced, we tested by:

1. **Copying** the snippet from the canvas
2. **Pasting** it into a local React project
3. **Installing** any required dependencies (`npm install sentiment framer-motion`)
4. **Serving** the development build (`npm start`)
5. **Verifying** that the animations appeared and that the sentiment scores were correct.

Through each test, ChatGPT refined the code or explained the usage until it worked seamlessly.

## Step 5: Reflections on Sarcasm, Sentiment, and AI Tools

We saw firsthand how sarcasm introduces complexity in natural language processing. While word-level sentiment analysis can show certain words as "positive," the overall meaning can still be mocking or negative. That’s why context-based or neural-based solutions often outperform dictionary-based ones. The **Framer Motion** and **TailwindCSS** integration gave us a fun, visual way to **highlight** each word’s sentiment.

**Lessons learned**:

- **Dictionary-based** approaches can be a good start but lack full context.
- **Existing libraries** like **Sentiment** provide a quick path without building our own dictionary.
- **Framer Motion** brings an elegant way to animate React components and present data.
- AI-based build processes (like ChatGPT + Canvas) can accelerate dev time, but testing and iteration remain crucial.

## Conclusion

The entire canvas conversation was a blast—**we built code**, **tested** it, **fixed** it, and **learned** a lot about sarcasm and sentiment along the way. From a simple HTML page to a dynamic React heatmap, each step showcased the **power of iterative development** with ChatGPT.

> **Try it yourself**: Clone the final code snippet from the conversation’s canvas, run it locally with `npm install`, and see how well it captures sentiment. You might be surprised how a single library plus a few lines of code can highlight positivity, negativity, and neutral text—albeit with questionable skill at sniffing out sarcasm’s deeper meaning!
