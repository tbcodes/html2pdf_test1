

// function generatePDF() {
//   var doc = new jsPDF();

//   var source = document.getElementById("content").innerHTML;

//   doc.fromHTML(source, 15, 15, {
//     'width': 370,
//   });

//   doc.save('sample.pdf');
// }


function generatePDF() {
  var doc = new jsPDF();

  // get the HTML content of the page
  var source = document.getElementById("content").innerHTML;

  // get the CSS styles of the page
  var styles = "";
  var styleTags = document.getElementsByTagName("style");
  for (var i = 0; i < styleTags.length; i++) {
    styles += styleTags[i].innerHTML;
  }

  // wrap the HTML content and CSS styles in a single string
  var html = "<html><head><style>" + styles + "</style></head><body>" + source + "</body></html>";

  // use the jspdf function fromHTML to add the content of the page to the PDF document
  doc.fromHTML(html, 15, 15, {
    'width': 170,
  });

  // save the PDF document
  doc.save('sample.pdf');
}



