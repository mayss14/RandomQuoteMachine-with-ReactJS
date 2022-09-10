import React from 'react';
import './App.css';


class App extends React.Component {

   constructor(props)
   {
      super(props);
      this.state = {
         quotes : [],
         quoteText:'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
         author :'Maya Angelou'
      };
      this.changeColor=this.changeColor.bind(this);
   }

    componentDidMount()
   {
      var url='https://type.fit/api/quotes';
      fetch(url).then((response) => {
         return response.json();
      }
      ).then((data)=> {
         this.setState({ quotes : data });
      });
      
   }
  
  
   changeColor()
   {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var bgColor = "rgb(" + x + "," + y + "," + z + ")";

      document.getElementById("tweet-quote").style.background= bgColor;
      document.getElementById("tumb").style.background= bgColor;
      document.body.style.background= bgColor;
      document.getElementById("btn").style.background= bgColor;
      document.getElementById("qt").style.color= bgColor;
      document.getElementById("text").style.color= bgColor;
      document.getElementById("author").style.color= bgColor;
   
      const quotes= this.state.quotes.map((quote) =>  quote );
      this.setState({
       quoteText : quotes[Math.floor(Math.random() * 1000)].text,
       author: quotes[Math.floor(Math.random() * 1000)].author
      });
   }

   render()
   {
      return (
         <>
           <div id="quote-box" className="container">
            <div id="text" className="text">
            <i className="fa-solid fa-quote-left" id="qt">    </i>
            {this.state.quoteText}
            </div>
            
            <div id="author"> <span> - {this.state.author}</span>  </div>
           
              <div  className="buttons">
                   <a id="tweet-quote" href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Happiness%20is%20not%20something%20readymade.%20%20It%20comes%20from%20your%20own%20actions.%22%20Dalai%20Lama" target="_blank" title="post this on twitter"> <i class="fa-brands fa-twitter"></i> </a>
                   <a href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Dalai%20Lama&content=Happiness%20is%20not%20something%20readymade.%20%20It%20comes%20from%20your%20own%20actions.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" target="_blank" id="tumb" title='post this on tumbler'> <i class="fa-brands fa-tumblr"></i>  </a>

                  <button id="btn" onClick={this.changeColor}>New Quote </button>
             </div>
          </div>
         </>
      );
   }
}
export default App;
