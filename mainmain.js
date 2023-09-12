

const firebaseConfig = {
    apiKey: "AIzaSyDOZSgG2dSlNXufrlBjn3RWXMzwWW0mmrs",
    authDomain: "whatsapp-2474e.firebaseapp.com",
    databaseURL: "https://whatsapp-2474e-default-rtdb.firebaseio.com",
    projectId: "whatsapp-2474e",
    storageBucket: "whatsapp-2474e.appspot.com",
    messagingSenderId: "503162150320",
    appId: "1:503162150320:web:438ac7169985d167634a75",
    measurementId: "G-SRYCRP6RQZ"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


   
  document.addEventListener('keypress', (event)=>{

    // event.keyCode or event.which  property will have the code of the pressed key
    let keyCode = event.keyCode ? event.keyCode : event.which;

    // 13 points the enter key
    if(keyCode === 13) {
   

      console.log('Pass');
    if(localStorage.getItem(document.getElementById('my-3').value) != document.getElementById('my-3').value)
    {
      if(document.getElementById('my-3').value != ''){
        var dd =  firebase.database().ref('Whatsapp_User/').child(localStorage.getItem('information'));
     dd.once('value', function(sd){
     var data = sd.val();
     var name = data.NAME;
     localStorage.setItem('Verify',name);
     console.log(name + 'Add');
     }); 
     console.log(document.getElementById('my-3').value);
     console.log(localStorage.getItem('Verify'));
     setTimeout(function(){
      if(localStorage.getItem('Verify') == document.getElementById('my-3').value){
        alert('I am Sorry But We can not add yourself');
       }else{
  
        alert('Processing We are checking if user exsists');
        var red = firebase.database().ref('Searched Box/').child(document.getElementById('my-3').value);
        red.once('value',function(get_info){
        var data = get_info.val();
        var NAME = data.NAME;
        var EMAIL = data.EMAIL;
        localStorage.setItem('person',NAME);
  
        });
        setTimeout(function(){
        var xyz = firebase.database().ref('Whatsapp_User/').child(localStorage.getItem('information'));
        xyz.once('value',function(d){
         var data = d.val();
         var NAME = data.NAME;
         localStorage.setItem('Name',NAME);
         console.log(NAME);
        });
        setTimeout(function(){
         alert('Please Wait A While');
         if(localStorage.getItem('person') != null || localStorage.getItem('person') != undefined)
         {
           alert('User Found Wait For Some Min.');
           var lsname   = localStorage.getItem('person');
   ;
            firebase.database().ref('FOR/').child(lsname).update({
   
            });
            firebase.database().ref('FOR/').child(localStorage.getItem('Name')).update({
   
            });
            firebase.database().ref('FOR/').child(lsname).push({
            SEACHED_FOR : localStorage.getItem('Name'),
            });
            firebase.database().ref('FOR/').child(localStorage.getItem('Name')).push({
             SEACHED_FOR : document.getElementById('my-3').value,
           
             });
             alert('We added The Following user;')
           localStorage.removeItem('person');
           localStorage.removeItem('Name');
           localStorage.removeItem('Verify');
           window.location('main.html');
   
         }
         else
         {
           alert('USER DOSE NOT EXSIST');
           localStorage.removeItem('person');
           localStorage.removeItem('Name');
           localStorage.removeItem('Verify');
         }
        },3000)
  
       
        },2000);
  
  
       }
  
     },5000)


        
      }else{
        return false;
      }
    }else{
      alert('User Is Already Added');
    }
    
    }
  
  });



  function getData() { 
    var ref = firebase.database().ref('Whatsapp_User/').child(localStorage.getItem('information'));
    ref.once('value',function(hf){
    var data = hf.val();
    var NAME = data.NAME;
    localStorage.setItem('dbv',NAME);
    console.log(NAME);
    });
    

    
  setTimeout(function(){
    firebase.database().ref("FOR/").child(localStorage.getItem('dbv')).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      console.log('Started');
        var firebase_message_id = childKey;
      var message_data = childData;
  //Start code
  console.log(firebase_message_id);
  console.log(message_data);
  var NAME = message_data['SEACHED_FOR'];
  var a_part = "<a class='list-group-item list-group-item-action border-0 bocx nhhh'>";
  var div_start = "<div class='d-flex align-items-start'>";
  var img_tag = '<img id='+NAME+"Hello"+'  src="f.png" class="fa fa-circle mr-1" alt="Vanessa Tucker" width="40" height="40">';
  var div_1_start = '<div id='+NAME+' onclick="display(this.id)" onmousemove="pic(this.id)" style="color: black;" class="flex-grow-1 ml-3">';
  var name2 = NAME;
  var mem_start1 = '<div color: "black;" class="small"><span class="fa fa-circle fa fa-link dfdf"></span> USER OF MWORLD</div>'
  var div_1_end = '</div>';
  var div_end = '</div>';
  var a_end = '</a>';
  var hr = '<hr>';
  
  document.getElementById('output').innerHTML += a_part + div_start + img_tag + div_1_start + name2 + mem_start1 + div_1_end + div_end + a_end + hr;
  
  
  
  //End code
   } });  });
  },3000);
  };

  getData();



 function pic(name){
  localStorage.setItem(name,name);
  console.log(name);
  var abc = firebase.database().ref('Image/').child(name);
  abc.once('value',function(info){
  var datak = info.val();
  var PhotoLink = datak.LINK  ;
  document.getElementById(name+'Hello').src = PhotoLink;
});
 }
 
 function removed()
 {


 }






function display(dd)
{

  alert('You Clicked ' + dd);
  document.getElementById("sssa").innerHTML = ""; 
  document.getElementById('ssd').style.display = 'none';
  document.getElementById('mainsss').style.display = 'block';
var ref = firebase.database().ref('Image/').child(dd);
ref.once('value',function(ddf){
var data = ddf.val();
document.getElementById('profile').src = data.LINK;
});
  document.getElementById('ssda').innerHTML = dd;
  localStorage.setItem('Chat',dd);


  function s() { 

    var ref = firebase.database().ref('Image/').child(localStorage.getItem('dbv'));
    ref.once('value',function(hf){
    var data = hf.val();
    var NAME = data.LINK;
    localStorage.setItem('SenderPhoto',NAME);


    });
    var ref = firebase.database().ref('Image/').child(dd);
    ref.once('value',function(hfj){
    var data1 = hfj.val();
    var NAMEy = data1.LINK;
    localStorage.setItem('ReciverPhoto',NAMEy);


    });

    firebase.database().ref("WhatsappChat/").child(localStorage.getItem('dbv')+dd).on('value', function(snapshot) { document.getElementById("sssa").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    console.log('Started');
      var firebase_message_id = childKey;
    var message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var SENDER = message_data['SENDER'];
var MESSAGE = message_data['MESSAGE'];
var IMG = message_data['IMG'];
var AUDIO = message_data['AUDIO']

if (SENDER == localStorage.getItem('dbv')){
  if(MESSAGE == undefined && IMG != undefined)
  {
    var mm = '<div class="chat-message-right mb-4"><div><img src="'+localStorage.getItem('SenderPhoto')+'" class="rounded-circle mr-1" alt="" width="40" height="40"></div><div style="height: 300px; width: 300px;" class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">You</div><img height="250px" width="250px" src="'+IMG+'"></div> </div>';
    document.getElementById("sssa").innerHTML += mm;
  }else if(MESSAGE == undefined && AUDIO != undefined){
   var mnh = '<div class="chat-message-right mb-4"><div><img src="'+localStorage.getItem('SenderPhoto')+'" class="rounded-circle mr-1" alt="YOU" width="40" height="40"></div><div class="bud flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">You</div><audio controls><source src="'+AUDIO+'" type="audio/ogg"> </audio></div></div>'
   document.getElementById("sssa").innerHTML += mnh;
  }else{
  var ss = '<div class="chat-message-right mb-4"><div><img src="'+localStorage.getItem('SenderPhoto')+'" class="rounded-circle mr-1" alt="YOU" width="40" height="40"></div><div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">You</div>'+MESSAGE+'</div></div>';
  document.getElementById("sssa").innerHTML += ss;
  }
}else if(SENDER != localStorage.getItem('dbv')){
  if(MESSAGE == undefined && IMG != undefined )
  {
    var mmn = '<div class="chat-message-left mb-4"><div><img src="'+localStorage.getItem('ReciverPhoto')+'" class="rounded-circle mr-1" alt="" width="40" height="40"></div><div style="height: 300px; width: 300px;" class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">'+dd+'</div><img height="250px" width="250px" src="'+IMG+'"></div> </div>';
    document.getElementById("sssa").innerHTML += mmn;


  }else if(MESSAGE == undefined && AUDIO != undefined){
    var mnhk = '<div class="chat-message-left mb-4"><div><img src="'+localStorage.getItem('ReciverPhoto')+'" class="rounded-circle mr-1" alt="'+dd+'" width="40" height="40"></div><div class="bud flex-shrink-1 bg-light rounded py-2 px-3 mr-3"><div class="font-weight-bold mb-1">'+dd+'</div><audio controls><source src="'+AUDIO+'" type="audio/ogg"> </audio></div></div>'
    document.getElementById("sssa").innerHTML += mnhk;


  }else{
  var ddfg = ' <div class="chat-message-left pb-4"><div>  <img src="'+localStorage.getItem('ReciverPhoto')+'" class="rounded-circle mr-1" alt="'+dd+'" width="40" height="40"></div><div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 bbc"><div class="font-weight-bold mb-1">'+dd+'</div>'+MESSAGE+'</div></div>';
  document.getElementById("sssa").innerHTML += ddfg;

  }
}




window.scrollTo( 0 ,document.getElementById('sssa').scrollHeight); 
//End code
 } });  }); };
  s();
}




function dd(){
  alert('Welcome.');
  setTimeout(function(){
    getData();
  },5000)

} 
 






 function send(){
  var input = document.getElementById('input').value;
  document.getElementById('input').innerHTML = '';
  console.log(input);

if ( input != ''){
  if(document.getElementById('ssda').value != '')
  {
    var get = localStorage.getItem('Chat');
    console.log(get);
    console.log(document.getElementById('ssda').value);
    console.log(localStorage.getItem('dbv'));
   firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).update({

   });
   firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).update({

   });
   firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).push({
   SENDER:localStorage.getItem('dbv'),
   MESSAGE:input
   });
   firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).push({
    SENDER:localStorage.getItem('dbv'),
    MESSAGE:input
   });
 
   input = '';
  }
  else{
    alert('We ran out of a error');
    window.location = 'index.html';
  }
}
else 
{
  alert('Message Box Is Empty');
}

 }
 var ImgName , ImgUrl;
 var files = [];
 var reader = new FileReader();

function sendPhoto(e)
{
  var input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
 input.onchange = e => {
  console.log('working');
    files = e.target.files;
    reader = new FileReader();
    reader.onload = function(){
      console.log(reader.result);

    }
    reader.readAsDataURL(files[0]);
    console.log(files[0]);
     alert('Please Wait Procees Started');
    var UploadTask = firebase.storage().ref('ChatPhoto/'+localStorage.getItem('dbv')+'.png').put(files[0]);
    UploadTask.on('state_changed' , function(snapshot){
       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       alert(progress+'% '+"Upload Process" );
   
    },
    function(error){
   confirm(error);
   alert('Unsuccesfull To Save.')
   window.location = 'index.html';
   
    },
   
    function(){
     UploadTask.snapshot.ref.getDownloadURL().then(function(url){
      ImgUrl = url;
      localStorage.setItem('dd',url);
     });
   alert('Wait For Five Min.')
   setTimeout(function(){
    var get = localStorage.getItem('Chat');
    firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).update({

    });
    firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).update({
 
    });
    firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).push({
    SENDER:localStorage.getItem('dbv'),
    IMG:localStorage.getItem('dd')
    });
    firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).push({
     SENDER:localStorage.getItem('dbv'),
     IMG:localStorage.getItem('dd')
    });
        localStorage.removeItem('dd');
         
   

   
     },5000);
    }
    );

 }
input.click();

}
var ImgName , ImgUrl;
var files = [];
var reader = new FileReader();
function sendPhoto65(e)
{
  var input1 = document.createElement('input');
  input1.type = 'file';
  input1.accept = 'audio/*';
 input1.onchange = e => {

  if (input1.files.length > 100) {
    const fileSize = input1.files.item(0).size;
    const fileMb = fileSize / 1024 ** 100;
    alert('Only Mb Is Accepted You Added :- ',fileMb);
  }else{
    console.log('working');
    files = e.target.files;
    reader = new FileReader();
    reader.onload = function(){
      console.log(reader.result);

    }
    reader.readAsDataURL(files[0]);
    console.log(files[0]);


    var UploadTask = firebase.storage().ref('AudioChat/'+localStorage.getItem('dbv')+'.mp3').put(files[0]);
 UploadTask.on('state_changed' , function(snapshot){
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    alert(progress+'% '+"Upload Process" );

 },
 function(error){
confirm(error);
alert('Unsuccesfull To Save.')
window.location = 'index.html';

 },

 function(){
  UploadTask.snapshot.ref.getDownloadURL().then(function(url){
   ImgUrl = url;
   localStorage.setItem('ddg',url);
  });
alert('Wait For Five Min.')
setTimeout(function(){
  var get = localStorage.getItem('Chat');
  firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).update({

  });
  firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).update({

  });
  firebase.database().ref('WhatsappChat/').child(get+localStorage.getItem('dbv')).push({
  SENDER:localStorage.getItem('dbv'),
  AUDIO:localStorage.getItem('ddg')
  });
  firebase.database().ref('WhatsappChat/').child(localStorage.getItem('dbv')+get).push({
   SENDER:localStorage.getItem('dbv'),
   AUDIO:localStorage.getItem('ddg')
  });
     localStorage.removeItem('ddg');
 
     


  },5000);
 }
 );
  }
 
 }
 
input1.click();
}



