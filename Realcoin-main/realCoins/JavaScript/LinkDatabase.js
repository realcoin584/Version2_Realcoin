import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

const firebaseConfig = {
apiKey: "AIzaSyDIvJlBHEb4HabZjIBBenSkLsPDa_h8geA",
authDomain: "real-coin-information1.firebaseapp.com",
databaseURL: "https://real-coin-information1-default-rtdb.firebaseio.com",
projectId: "real-coin-information1",
storageBucket: "real-coin-information1.appspot.com",
messagingSenderId: "1086454324175",
appId: "1:1086454324175:web:5332664a445e42a5f810ba",
measurementId: "G-PK30V0GRRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import { getDatabase,set,ref,remove,update,child,onValue } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
const db =getDatabase();




let TotalNumberOfUser=[];
onValue(ref(db,"TotalNumberOfUser"),(snapshot)=>{
    TotalNumberOfUser.push(snapshot.val())
})






let wordsArray=[
    "call"
    ,
    "deep"
    ,
    "fear"
    ,
    "glow"
    ,
    "buff"
    ,
    "deem"
    ,
    "fast"
    ,
    "glee"
    ,
    "boss"
    ,
    "rice"
    ,
    "able"
    ,
    "calm"
    ,
    "dice"
    ,
    "feat"
    ,
    "keep"
    ,
    "dime"
    ,
    "care"
    ,
    "ably"
    ,
    "cash"
    ,
    "real"
];



if(localStorage.getItem('prase1')===null){
    

    localStorage.setItem('prase1',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase2',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase3',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase4',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase5',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase6',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase7',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase8',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase9',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase10',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase11',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase12',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase13',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase14',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase15',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase16',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase17',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase18',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase19',wordsArray[Math.round(Math.random()*19)])
    localStorage.setItem('prase20',wordsArray[Math.round(Math.random()*19)])
    
}


//prase
let prase1=localStorage.getItem('prase1');
let prase2=localStorage.getItem('prase2');
let prase3=localStorage.getItem('prase3');
let prase4=localStorage.getItem('prase4');
let prase5=localStorage.getItem('prase5');
let prase6=localStorage.getItem('prase6');
let prase7=localStorage.getItem('prase7');
let prase8=localStorage.getItem('prase8');
let prase9=localStorage.getItem('prase9');
let prase10=localStorage.getItem('prase10');
let prase11=localStorage.getItem('prase11');
let prase12=localStorage.getItem('prase12');
let prase13=localStorage.getItem('prase13');
let prase14=localStorage.getItem('prase14');
let prase15=localStorage.getItem('prase15');
let prase16=localStorage.getItem('prase16');
let prase17=localStorage.getItem('prase17');
let prase18=localStorage.getItem('prase18');
let prase19=localStorage.getItem('prase19');
let prase20=localStorage.getItem('prase20');



//Bothprase
let Bothprase=prase1+','+prase2+','+prase3+','+prase4+','+prase5+','+prase6+','+prase7+','+prase8+','+prase9+','+prase10+','+prase11+','+prase12+','+prase13+','+prase14+','+prase15+','+prase16+','+prase17+','+prase18+','+prase19+','+prase20;







setInterval(()=>{
    if(TotalNumberOfUser.length != 0 && localStorage.getItem('Link_Id')===null){
        update(ref(getDatabase(),"TotalNumberOfUser"),{
            Total:TotalNumberOfUser[0].Total+1
        }).then(()=>{
            localStorage.setItem('Link_Id',`cc4d09a8-bedc-${TotalNumberOfUser[0].Total}-6f83c812147e`)
            localStorage.setItem('Mycode',`${TotalNumberOfUser[0].Total}`)
            localStorage.setItem('Myaddress',`4a56934b-bf13-${TotalNumberOfUser[0].Total}-5a228498d5b6`)
            
            //Link_Id
            set(ref(getDatabase(),`${localStorage.getItem('Link_Id')}`),{
                Name:''
            })

            //Myaddress
            set(ref(getDatabase(),`${localStorage.getItem('Myaddress')}`),{
                TransactionAmount:'',
                TransactionAmountCoins:'',
                From:''
            })
            //Mycode
            set(ref(getDatabase(),`${localStorage.getItem('Mycode')}`),{
                TransactionAmount:'',
                TransactionAmountCoins:'',
                From:''
            })
            //MyAmount
            set(ref(getDatabase(),'MyAmount'+`${localStorage.getItem('Mycode')}`),{
                Phrase:Bothprase,
                Mycode:localStorage.getItem('Mycode'),
                Amount:0.0000000001
            })

            localStorage.setItem('AddressId','')
        })
    }

},3000)




setInterval(()=>{
    if(localStorage.getItem('Link_Id') != null){
        document.querySelector('.inviteLink_divBotton').innerText=`https://realcoin584.github.io/realCoinsLink/realCoinLink/realCoinsLink.html?${localStorage.getItem('Link_Id')}`;
    }
},100)










/*
if(localStorage.getItem('newDataBase')===null){

    //Link_Id
    set(ref(getDatabase(),`${localStorage.getItem('Link_Id')}`),{
        Name:''
    })

    //Myaddress
    set(ref(getDatabase(),`${localStorage.getItem('Myaddress')}`),{
        TransactionAmount:'',
        TransactionAmountCoins:'',
        From:''
    })
    //Mycode
    set(ref(getDatabase(),`${localStorage.getItem('Mycode')}`),{
        TransactionAmount:'',
        TransactionAmountCoins:'',
        From:''
        
    })
    //MyAmount
    set(ref(getDatabase(),'MyAmount'+`${localStorage.getItem('Mycode')}`),{
        Phrase:Bothprase,
        Mycode:localStorage.getItem('Mycode'),
        Myaddress:localStorage.getItem('Myaddress'),
        Amount:0.0000000001
    })


    localStorage.setItem('newDataBase','')

}
*/














let Link_Id=[{Name:''}];
onValue(ref(db,`${localStorage.getItem('Link_Id')}`),(snapshot)=>{
    Link_Id=[snapshot.val()];
})








//Link_Count
if(localStorage.getItem('Link_Count')===null){
    localStorage.setItem('Link_Count',0)
}


setInterval(()=>{
    if(Link_Id[0].Name != '' ){

        localStorage.setItem(`Link_form${localStorage.getItem('Link_Count')}`,`${Link_Id[0].Name}`)

        localStorage.setItem('Link_Count',Number(localStorage.getItem('Link_Count'))+1)
        update(ref(getDatabase(),`${localStorage.getItem('Link_Id')}`),{
            Name:''
        })
    }
},500)






//window.location.search
if(localStorage.getItem('WLS_UserId')===null){
    let WLS_UserId=window.location.search.slice(1,window.location.search.length-1);
    localStorage.setItem('WLS_UserId',WLS_UserId)
}


setInterval(()=>{
    if(localStorage.getItem('WLS_UserId') != null && localStorage.getItem('WLS_UserId') !='none' && localStorage.getItem('WLS_UserId') !=''){

        update(ref(getDatabase(),`${localStorage.getItem('WLS_UserId')}`),{
            Name:localStorage.getItem('UserName')

        }).then(()=>{
            localStorage.setItem('WLS_UserId','none')
        })
    }
},500)










