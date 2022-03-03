var Dropbox = require('dropbox');
var dbx = new Dropbox({accessToken: 'sl.BDFmXn2QZ8RDvrTvRKoOXyMyeEV7XSkCJH8W6YPGh3HAdP-GI-eVAvssgBLWwDuTG4TCjqdKMBMK6YeUC315ms2svoHPNp46hVqy6vyu0Is1p8gV-VL2GNpkVJ1llEDKxQCAzOE'});

dbx.filesDownload({path: '/test.txt'})
    .then(function (response) {
        var blob = response.fileBlob;
        var reader = new FileReader();
        reader.addEventListener("loadend", function() {
            console.log(reader.result); // will print out file content
        });
        reader.readAsText(blob);
    })
    .catch(function (error) {
        //something
    })

let data = readTextFile("https://www.dropbox.com/s/nzrwxhj7qkrsimb/data.csv?dl=0");
console.log(data);