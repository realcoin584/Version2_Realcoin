let NewDate=15;
let DailyPin='RC_3400674';
let urlYutube1="https://youtu.be/gYks_hv2k24?si=Tr8nGNenkSF7nhUJ";
let urlYutube2="https://youtu.be/gYks_hv2k24?si=Tr8nGNenkSF7nhUJ";
let dailyTaskLink="https://youtube.com/shorts/citNFzWyslI?si=ZJBT1QuEvjOK7YbX";

let youtube1_title="The Equalizer - Earn Cryptocurrency with Ease and Equality";
let youtube2_title="Introduction to Real coin";






document.querySelector('.youtube1_title').innerText=`${youtube1_title}`;
document.querySelector('.youtube2_title').innerText=`${youtube2_title}`;


if( `${new Date().getDate()}`===`${NewDate}` && localStorage.getItem("confirmDate") != NewDate){
    localStorage.setItem("yutube1","newDate")
    localStorage.setItem("yutube2","newDate")
    localStorage.setItem("dailyTasks","newDate")
    localStorage.setItem('dailyReward','newDate')
    

    
    localStorage.setItem("confirmDate",NewDate)


    document.querySelector('.yutube1clickSign').style.display='flex';
    document.querySelector('.yutube1clickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
    document.querySelector('.yutube2clickSign').style.display='flex';
    document.querySelector('.yutube2clickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
    document.querySelector('.dailyRewardclickSign').style.display='flex';
    document.querySelector('.dailyRewardclickSign_div').style.backgroundColor=' rgb(0, 0, 82)';
    
}

if(localStorage.getItem("telegram1")===null){
    localStorage.setItem("telegram1","newDate")
    localStorage.setItem("telegram2","newDate")
    localStorage.setItem("twiter","newDate")
    localStorage.setItem("instagram","newDate")
    localStorage.setItem("tiktok","newDate")
}
if(localStorage.getItem("telegram2")===null){
    localStorage.setItem("telegram2","newDate")
}
if(localStorage.getItem("twiter")===null){
    localStorage.setItem("twiter","newDate")
}
if(localStorage.getItem("instagram")===null){
    localStorage.setItem("instagram","newDate")
}
if(localStorage.getItem("tiktok")===null){
    localStorage.setItem("tiktok","newDate")
}

//JoinOurLinkContainer
const JoinOurLinkContainer=document.querySelectorAll('.JoinOurLinkContainer');
JoinOurLinkContainer.forEach((e)=>{
    e.addEventListener('click',()=>{

        let dataDashed_Id=e.dataset.id;
        let getItem=Number(localStorage.getItem('displayCoins'));

        if(dataDashed_Id==="yutube1" && localStorage.getItem("yutube1") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("yutube1","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+1000);

            
            window.open(urlYutube1,"_blank").focus();

        }else if(dataDashed_Id==="yutube2" && localStorage.getItem("yutube2") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("yutube2","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+1000);
            
            
            window.open(urlYutube2,"_blank").focus();

        }else if(dataDashed_Id==="dailyTasks" && localStorage.getItem("dailyTasks")=== "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("dailyTasks","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+500);

        }else if(dataDashed_Id==="telegram1" && localStorage.getItem("telegram1") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("telegram1","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+500);
            
            let url="https://t.me/+S1yOOvjloYdlNzE8";
            window.open(url,"_blank").focus();

        }else if(dataDashed_Id==="telegram2" && localStorage.getItem("telegram2") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("telegram2","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+500);
            
            let url="https://t.me/+_OFbXzfb5uVlMmY8";
            window.open(url,"_blank").focus();

        }else if(dataDashed_Id==="twiter" && localStorage.getItem("twiter") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("twiter","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+500);
            
            let url="https://x.com/Realcoin_bot?t=Y7ObBl6gfKo2ZX8hVJ-d9A&s=09";
            window.open(url,"_blank").focus();

        }else if(dataDashed_Id==="instagram" && localStorage.getItem("instagram") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("instagram","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+500);
            
            let url="https://www.instagram.com/realcoingame_bot?igsh=YWRzbjBqY3dyeHZq";
            window.open(url,"_blank").focus();

        }else if(dataDashed_Id==="tiktok" && localStorage.getItem("tiktok") === "newDate" && `${new Date().getDate()}`===`${NewDate}`){
            localStorage.setItem("tiktok","AlreadyClick")
            localStorage.setItem('displayCoins',getItem+500);
            
            
            

        }else{

            if(dataDashed_Id==="dailyTasks" && localStorage.getItem("dailyTasks")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}`){

                /*SET DATE TIME*/
                document.querySelector('.displayMessage').style.display='block';
                document.querySelector('.displayMessage').innerText='you are already get your daily reward';
                setTimeout(()=>{
                    document.querySelector('.displayMessage').style.display='none';
                },2000)
                //End sub
            }else if(dataDashed_Id==="yutube1" && localStorage.getItem("yutube1")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}` || dataDashed_Id==="yutube2" && localStorage.getItem("yutube2")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}` || dataDashed_Id==="telegram1" && localStorage.getItem("telegram1")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}` || dataDashed_Id==="telegram2" && localStorage.getItem("telegram2")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}` || dataDashed_Id==="twiter" && localStorage.getItem("twiter")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}` || dataDashed_Id==="instagram" && localStorage.getItem("instagram")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}` || dataDashed_Id==="tiktok" && localStorage.getItem("tiktok")=== "AlreadyClick" && `${new Date().getDate()}`===`${NewDate}`){

                /*SET DATE TIME*/
                document.querySelector('.displayMessage').style.display='block';
                document.querySelector('.displayMessage').innerText='you are already get your reward';
                setTimeout(()=>{
                    document.querySelector('.displayMessage').style.display='none';
                },2000)
                //End sub
            }else{

                /*SET DATE TIME*/
                document.querySelector('.displayMessage').style.display='block';
                document.querySelector('.displayMessage').innerText='set date and time!';
                setTimeout(()=>{
                    document.querySelector('.displayMessage').style.display='none';
                },2000)
                //End sub
            }
            
        }




    })
})










let arrowLeftOrclaimIcon=["data:image/png;base64,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"];

setInterval(() => {
    
    if(localStorage.getItem("yutube1")==="AlreadyClick"){
        document.querySelector('.yutube1clickSign').style.display='none';
        document.querySelector('.yutube1clickSign_div').style.backgroundColor='rgb(0, 0, 29)';
        document.querySelector('.arrowLeftOrclaimIcon_yutube1').style.backgroundImage=`url(${arrowLeftOrclaimIcon[0]})`;
    }
    if(localStorage.getItem("yutube2")==="AlreadyClick"){
        document.querySelector('.yutube2clickSign').style.display='none';
        document.querySelector('.yutube2clickSign_div').style.backgroundColor='rgb(0, 0, 29)';
        document.querySelector('.arrowLeftOrclaimIcon_yutube2').style.backgroundImage=`url(${arrowLeftOrclaimIcon[0]})`;
    }
    if(localStorage.getItem("dailyTasks")==="AlreadyClick"){
        document.querySelector('.dailyRewardclickSign').style.display='none';
        document.querySelector('.dailyRewardclickSign_div').style.backgroundColor='rgb(0, 0, 29)';
        document.querySelector('.arrowLeftOrclaimIcon_dailyTasks').style.backgroundImage=`url(${arrowLeftOrclaimIcon[0]})`;
    }
    if(localStorage.getItem("telegram1")==="AlreadyClick"){
        document.querySelector('.telegramChannelClickSign').style.display='none';
        document.querySelector('.telegramChannelClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
        document.querySelector('.arrowLeftOrclaimIcon_telegram1').style.backgroundImage=`url(${arrowLeftOrclaimIcon[0]})`;
    }
    if(localStorage.getItem("telegram2")==="AlreadyClick"){
        document.querySelector('.telegramGroupClickSign').style.display='none';
        document.querySelector('.telegramGroupClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
        document.querySelector('.arrowLeftOrclaimIcon_telegram2').style.backgroundImage=`url(${arrowLeftOrclaimIcon[0]})`;
    }
    if(localStorage.getItem("twiter")==="AlreadyClick"){
        document.querySelector('.XClickSign').style.display='none';
        document.querySelector('.XClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
        document.querySelector('.arrowLeftOrclaimIcon_twiter').style.backgroundImage=`url(${arrowLeftOrclaimIcon[0]})`;
    }
    if(localStorage.getItem("instagram")==="AlreadyClick"){
        document.querySelector('.instagramClickSign').style.display='none';
        document.querySelector('.instagramClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
        document.querySelector('.arrowLeftOrclaimIcon_instagram').style.backgroundImage=`url(${arrowLeftOrclaimIcon[0]})`;
    }
    if(localStorage.getItem("tiktok")==="AlreadyClick"){
        document.querySelector('.tiktokClickSign').style.display='none';
        document.querySelector('.tiktokClickSign_div').style.backgroundColor='rgb(0, 0, 29)';
        document.querySelector('.arrowLeftOrclaimIcon_tiktok').style.backgroundImage=`url(${arrowLeftOrclaimIcon[0]})`;
    }

    //////////
    if(localStorage.getItem("dailyReward") === "AlreadyClick"){
        
        document.querySelector('.dailyTasksubmitButton').style.opacity=0.5;
        document.querySelector('.dailyTaskFinishMissionButton').style.opacity=1;
        document.querySelector('.dailyTaskFinishMissionButton_p').style.display='block';
        document.querySelector('.dailyTaskinput').style.display='none';

    }else if(localStorage.getItem("dailyReward") === "confirmClick"){

        document.querySelector('.dailyTasksubmitButton').style.opacity=0.5;
        document.querySelector('.dailyTaskFinishMissionButton').style.opacity=0.5;
        document.querySelector('.dailyTaskFinishMissionButton_p').style.display='none';
        document.querySelector('.dailyTaskinput').style.display='none';
    }


},100);

















let dailyTaskinput=document.querySelector('.dailyTaskinput');

document.querySelector('.dailyTasksubmitButton').addEventListener('click',()=>{
    
    
    if(DailyPin.toLocaleLowerCase()===dailyTaskinput.value.toLocaleLowerCase() && localStorage.getItem("dailyReward") === "newDate"){
        
        document.querySelector('.dailyTaskinput').style.boxShadow='0px 0px 4px green';
        setTimeout(()=>{
            localStorage.setItem('dailyReward','AlreadyClick')
        },1000)
        
        
    }else{

        
        document.querySelector('.displayMessage').style.display='block';
        document.querySelector('.displayMessage').innerText='invalid answer';
        document.querySelector('.dailyTaskinput').style.boxShadow='0px 0px 4px red';
        setTimeout(()=>{
            document.querySelector('.displayMessage').style.display='none';
        },1000)

    }
})



document.querySelector('.dailyTaskFinishMissionButton').addEventListener('click',()=>{

    if(localStorage.getItem("dailyReward") === "AlreadyClick"){
        localStorage.setItem('dailyReward','confirmClick')

        localStorage.setItem('displayCoins',Number(localStorage.getItem('displayCoins'))+100000)



        document.querySelector('.dailyTaskFinishMissionButton').style.opacity=0.5;
        document.querySelector('.dailyTaskFinishMissionButton_p').style.display='none';
        document.querySelector('.dailyTaskinput').style.display='none';


        localStorage.setItem('coinsContainerBottomI',0)
        localStorage.setItem('coinsContainerBottomII',0)
                
        coinsContainer_coinsI.style.opacity=1;
        coinsContainer_coinsIII.style.opacity=1;
        coinsContainer_coinsV.style.opacity=1;
        coinsContainer_coinsVII.style.opacity=1;
        coinsContainer_coinsIX.style.opacity=1;
        coinsContainer_coinsII.style.opacity=1;
        coinsContainer_coinsIV.style.opacity=1;
        coinsContainer_coinsVI.style.opacity=1;
        coinsContainer_coinsVIII.style.opacity=1;
        coinsContainer_coinsX.style.opacity=1;
    }

})










//dailyTaskWatchDiv
document.querySelector('.dailyTaskWatchDiv').addEventListener('click',()=>{
    window.open(dailyTaskLink,"_blank").focus();
})


