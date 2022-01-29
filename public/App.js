"use strict";

var nameComponent = React.createElement("div", {
  id: "out"
}, React.createElement("h2", {
  id: "name_comp"
}, "Shweta Shete"));
var pictureComponent = React.createElement("div", {
  id: "picture_out"
}, React.createElement("img", {
  id: "picture_comp",
  src: "./image.jpg"
}));
var introComponent = React.createElement("div", {
  id: "intro_out"
}, React.createElement("p", {
  id: "intro_comp"
}, "Hello, My name is Shweta Shete.I am a Computer Science Graduate Student at San Diego State University. As of now i am in my second semester and planning to graduate in Spring 2023."));
var buttonComponent = React.createElement("div", {
  id: "button_out"
}, React.createElement("a", {
  href: "https://github.com/shwetavs2"
}, React.createElement("button", {
  id: "button_comp"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));
