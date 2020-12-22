document.querySelector('#trans').onclick = function() {
    //document.querySelector('body').style.backgroundColor = 'red';
    //document.querySelector('#pig').innerHTML = document.querySelector('#english').value;
    var vowels = ["a","e","i","o","u"];

    let str = document.querySelector('#english').value.toLowerCase();

    var x = str.split(" ");
    var newstr = [];
    var stop = 0;

    var i;
    for (i = 0; i < x.length; i++) {
      if (vowels.includes(x[i][0])) {
          newstr.push(x[i]+"yay");
      } else {
          var q;
          for (q = 0; q < x[i].length; q++) {
              if (vowels.includes(x[i][q])) {
                stop=q;
                break;
              }
          }
          //newstr.push(x[i]);
          newstr.push(x[i].substr(stop,x[i].length)+x[i].substr(0,stop)+"ay");
      }
    }

    var j;
    for (j = 0; j < newstr.length; j++) {
        document.querySelector('#pig').innerHTML = newstr.join(" ")
        //I'm really confused as to how this works

    }
}

/*
document.querySelector('#trans').onclick = function() {
    //document.querySelector('body').style.backgroundColor = 'red';
    //document.querySelector('#pig').innerHTML = document.querySelector('#english').value;
    var vowels = ["a","e","i","o","u"];
    var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","y","x","z"];

    let str = document.querySelector('#english').value.toLowerCase();

    var x = str.split(" ");
    var newstr = [];
    var stop = 0;

    var i;
    for (i = 0; i < x.length; i++) {
      if (vowels.includes(x[i][0])) {
          newstr.push(x[i]+"yay");
      } else {
          var q;
          for (q = 0; q < x[i].length; q++) {
              if (consonants.includes(x[i][q])) {
                stop=q;
                break;
              }
          }
          //newstr.push(x[i]);
          newstr.push(x[i].substr(stop+1,x[i].length)+x[i].substr(0,stop+1)+"ay");
      }
    }

    var j;
    for (j = 0; j < newstr.length; j++) {
        document.querySelector('#pig').innerHTML = newstr.join(" ")
        //I'm really confused as to how this works

    }
}
*/
/*
from cs50 import get_string

vowels = ['a','e','i','o','u']
consonants = "bcdfghjklmnpqrstvwxyz"

string = get_string("Text: ").lower()

x = string.split()
new = []
stop=0

for w in x:
    if w[0] in vowels:
        new.append(w+"yay")
    else:
        for i in range(0,len(w)):
            if w[i] not in consonants:
                stop=i
                break
        new.append(w[stop:len(w)]+w[0:stop]+"ay")

print(x)
print(new)
*/