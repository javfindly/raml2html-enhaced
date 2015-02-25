/*
    Example of using raml2html as a script.
 */

var raml2html = require('../lib/raml2html');
var fs = require('fs');

// raml2html.render() needs a config object with at least a `template` property (a string or handlebars template object).
// Instead of creating this config object ourselves, we can just ask for raml2html.getDefaultConfig():
var config1 = raml2html.getDefaultConfig();

raml2html.render('batch-api.raml', config1, function(result) {
	fs.writeFile("sample.html", result,function(err) {
	    if(err) {
	        console.log(err);
	    } else {
	        console.log("#############\nThe file was saved!\n#############");
	    }
	}); 
}, function(error) {
    console.log('error! ', error);
});

/*
// If you want to use your own templates that follow the same structure, helpers and partials,
// you could do something like this:
var config2 = raml2html.getDefaultConfig(false, require('../lib/template.handlebars'));

raml2html.render('example.raml', config2, function(result) {
    console.log('2: ', result.length);
}, function(error) {
    console.log('error! ', error);
});
*/
