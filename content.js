var elements = document.getElementsByTagName('*');

// Loop through every element in the DOM (Document Object Model)
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    // Loop through every elements children
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        //If the element we find is a text element
        if (node.nodeType === 3) {
            var text = node.nodeValue;

            // Here's the magic, we see replace one string of text with another string of text.
            var replacedText = text.replace(/COMP110|COMP 110/gi, "The best class at UNC");

            // Uncomment the lines of code below for some more examples of text replacement

            // You can also do this with function literals!
            // var replacedText = text.replace(/COMP110|COMP 110/gi, (s) => "The best class at UNC");

            // What if we wanted to make sure COMP was always uppercase?
            // var replacedText = text.replace(/comp/gi, (s) => s.toUpperCase());
          
            // What if we wanted to reverse ALL strings?
            // var replacedText = text.replace(/\w+/gi, (s) => {
            //    let reversedString = "";
            //    for (let i = s.length - 1; i >= 0; i--) {
            //        reversedString += s[i];
            //    }
            //    return reversedString;
            // });
          
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
