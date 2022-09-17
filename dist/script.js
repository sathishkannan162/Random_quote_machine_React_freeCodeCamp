//colors for background
const colorList = [
"#00000d",
"#FF6347",
"#D07F0C",
"#A9A9A9",
"#A83F2C",
"#8B0000",
"#800080",
"#62D382",
"#2E625E",
"#3Dfede"];


// 10 quotes in object
const quoteArr = [
{
  quote:
  "First forget inspiration. Habit is more dependable. Habit will sustain you whether you're inspired or not. Habit will help you finish and polish your stories. Inspiration won't. Habit is persistence in practice.",
  author: "Octavia Butler" },


{
  quote: "The best way out is always through.",
  author: "Robert Frost" },


{
  quote:
  "The battles that count aren't the ones for gold medals. The struggles within yourself—the invisible, inevitable battles inside all of us—that's where it's at.",
  author: "Jesse Owens" },


{
  quote: "If there is no struggle, there is no progress.",
  author: "Frederick Douglass" },


{
  quote:
  "Someone will declare, “I am the leader!” and expect everyone to get in line and follow him or her to the gates of heaven or hell. My experience is that it doesn’t happen that way. Others follow you based on the quality of your actions rather than the magnitude of your declarations.",
  author: "Bill Walsh" },


{
  quote: "Courage is like a muscle. We strengthen it by use.",
  author: "Ruth Gordo" },


{
  quote:
  "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
  author: "Dale Carnegie" },


{
  quote:
  "Relentlessly prune bullshit, don't wait to do things that matter, and savor the time you have. That's what you do when life is short.",
  author: "Paul Graham" },


{
  quote: "More is lost by indecision than wrong decision.",
  author: "Marcus Tullius Cice" },


{
  quote:
  "If the highest aim of a captain were to preserve his ship, he would keep it in port forever.",
  author: "Thomas Aquinas" },


{
  quote:
  "You can be the ripest, juiciest peach in the world, and there's still going to be somebody who hates peaches.",
  author: "Dita Von Tee" },


{
  quote: "Keep a little fire burning; however small, however hidden.",
  author: "Cormac McCarthy" }];




function CardContents(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/

  React.createElement("i", { className: "fa fa-solid fa-quote-left" }), /*#__PURE__*/React.createElement("span", null, " "), /*#__PURE__*/
  React.createElement("span", { id: "text" }, props.quote), /*#__PURE__*/

  React.createElement("p", { id: "author" }, props.writer));

}

function TwitterShare(props) {
  return /*#__PURE__*/React.createElement("form", { method: "get", action: "https://twitter.com/intent/tweet" }, /*#__PURE__*/
  React.createElement("input", { type: "hidden", name: "hashtags", value: "quotes" }), /*#__PURE__*/
  React.createElement("input", { type: "hidden", name: "related", value: "freecodecamp" }), /*#__PURE__*/
  React.createElement("input", { type: "hidden", id: "tweet-text", name: "text", value: '"' + props.quote + '"' + "\n--" + props.writer }), /*#__PURE__*/
  React.createElement("a", { href: "https://twitter.com/intent/tweet", id: "tweet-quote", target: "_blank" }), /*#__PURE__*/
  React.createElement("button", { type: "submit", id: "submit-button-twitter", className: "btn btn-primary", style: { backgroundColor: props.buttonColor } }, /*#__PURE__*/React.createElement("i", { className: "icons bi bi-twitter" })));

}

function TumblrShare(props) {
  return /*#__PURE__*/React.createElement("form", { method: "get", action: "https://www.tumblr.com/widgets/share/tool" }, /*#__PURE__*/
  React.createElement("input", { type: "hidden", name: "posttype", value: "quote" }), /*#__PURE__*/
  React.createElement("input", { type: "hidden", name: "tags", value: "quotes,freecodecamp" }), /*#__PURE__*/
  React.createElement("input", { type: "hidden", name: "related", value: "freecodecamp" }), /*#__PURE__*/
  React.createElement("input", { type: "hidden", id: "tumblr-author", name: "caption", value: props.writer }), /*#__PURE__*/
  React.createElement("input", { type: "hidden", id: "tumblr-text", name: "content", value: props.quote }), /*#__PURE__*/
  React.createElement("input", { type: "hidden", name: "canonicalUrl", value: "https://www.tumblr.com/buttons" }), /*#__PURE__*/
  React.createElement("input", { type: "hidden", name: "shareSource", value: "tumblr_share_button" }), /*#__PURE__*/
  React.createElement("a", { href: "https://www.tumblr.com/widgets/share/tool", id: "tumblr-quote", target: "_blank" }), /*#__PURE__*/
  React.createElement("button", { type: "submit", id: "submit-button-tumblr", className: "btn btn-primary", style: { backgroundColor: props.buttonColor } }, /*#__PURE__*/React.createElement("i", { className: "icons fab fa-tumblr" })));

}

function Developer() {
  return /*#__PURE__*/React.createElement("p", { id: "developer" }, "by sathish");
}

let random = Math.floor(Math.random() * 10);
console.log(random);



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ranQuoteNo: Math.floor(Math.random() * 10),
      ranColorNo: Math.floor(Math.random() * 10),
      quoteText: "When you have a dream, you've got to grab it and never let go.",
      authorText: "Carol Burnett",
      pageColor: "#000000" };


    this.setRandomText = this.setRandomText.bind(this);


  }

  setRandomText() {
    this.setState(state => {
      return {
        ranQuoteNo: state.ranQuoteNo,
        ranColorNo: state.ranColorNo,
        quoteText: quoteArr[state.ranQuoteNo].quote,
        authorText: quoteArr[state.ranQuoteNo].author,
        pageColor: colorList[state.ranColorNo] };

    });
    this.setState(state => {
      return {
        ranQuoteNo: Math.floor(Math.random() * 10),
        ranColorNo: Math.floor(Math.random() * 10),
        quoteText: state.quoteText,
        authorText: state.authorText,
        pageColor: state.pageColor };

    });

  }


  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "app-background", style: { backgroundColor: this.state.pageColor } }, /*#__PURE__*/
      React.createElement("h1", { className: "display-4" }, " Random Quote Generator "), /*#__PURE__*/
      React.createElement("p", { id: "attribution" }, " Attribution: This project is an exact replica of the project on ", /*#__PURE__*/React.createElement("a", { href: "https://codepen.io/freeCodeCamp/full/qRZeGZ" }, "FreeCodecamp"), " and was done as a part of course work of ", /*#__PURE__*/React.createElement("a", { href: "https://www.freecodecamp.org/learn/front-end-development-libraries" }, "Front End developement libraries course"), " on Freecodecamp. "), /*#__PURE__*/

      React.createElement("div", null, /*#__PURE__*/

      React.createElement("div", { id: "quote-box", className: "card", style: { color: this.state.pageColor } }, /*#__PURE__*/
      React.createElement("div", { className: "card-body" }, /*#__PURE__*/

      React.createElement(CardContents, { quote: this.state.quoteText, writer: this.state.authorText }), /*#__PURE__*/
      React.createElement(TwitterShare, { buttonColor: this.state.pageColor, quote: this.state.quoteText, writer: this.state.authorText }), /*#__PURE__*/
      React.createElement(TumblrShare, { buttonColor: this.state.pageColor, quote: this.state.quoteText, writer: this.state.authorText }), /*#__PURE__*/
      React.createElement("button", { onClick: this.setRandomText, id: "new-quote", class: "btn btn-primary", style: { backgroundColor: this.state.pageColor } }, "New quote"))), /*#__PURE__*/





      React.createElement(Developer, null))));



  }}




ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app-background'));