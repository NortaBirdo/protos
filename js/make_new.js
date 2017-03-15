"use strict"

var fs = require('fs');
var path = "./src/" + process.argv[2] + ".html";
var template =`
//= ./components/header.html
<div class="mockup">

</div>

//= ./components/footer.html

<script type="text/javascript">
  var data = {
    name_of_mockup: \'\',  //Change the name of mockups
    comment: \`\` //Change the comment or stay empty
  }

  setdata(data);

</script>
`;

if (!fs.existsSync(path)) {
  fs.writeFile(path, template, function(err) {
      if(err) {
        return console.log(err);
      } else {
        console.log("The file was created.");
      }
  });
} else {
  console.log("The file with this name already exists.");
}
