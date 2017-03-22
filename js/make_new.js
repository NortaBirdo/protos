"use strict"

var fs = require('fs');
var path = "./src/" + process.argv[2] + ".html";
var template =`
//= ../components/header.html
<div class="mockup">

</div>

//= ../components/footer.html

<script type="text/javascript">
  set_mockup_name(\'\');//Change the name of mockups
  set_mockup_comment(\`

    \`)//Change the comment or stay empty

  // if your want to link fake data put call of load_data(object_name) here.
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
