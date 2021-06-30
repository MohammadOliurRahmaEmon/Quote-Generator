const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quotes");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Get Quote From API
async function getQuote() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl =
    'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';

  try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    if (data.quoteAuthor === "") {
      authorText.innerText = "Unknown";
    } else {
      authorText.innerText = data.authorText;
    }
    authorText.innerText = data.quoteAuthor;
    quoteText.innerText = data.quoteText;
  } catch (error) {
    console.log("Gotcha", error);
  }
}
// Tweet Function
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = "https://twitter.com/intent/tweet";
  window.open(twitterUrl, "_blank");
}

// Event listeners
newQuoteBtn.addEventListener("click", getQuote);
twitterBtn.addEventListener("click", tweetQuote);

//On load
getQuote();
