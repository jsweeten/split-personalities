/*What you want to display on the web page is a series of <div> elements that contain the disorder names.
That means you will first need to split() the string on the correct delimiter to generate an array of strings. 
Then you must .join() the array back into a single string, making sure each disorder name is surrounded by a <div> HTML tag. */

const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

const split = originalDisorderFormat.split("|$|");

const newList = split.join("</div><div>");

console.log(`<div>${newList}</div>`);