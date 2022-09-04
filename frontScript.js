
const addWidgetCTA = () => {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://1274-106-51-64-99.ngrok.io/bikai-d5ee5/asia-south1/shopifyApiFunctions-createWidgetStyle';
    document.head.appendChild(link);
    let widgetCTAdiv = document.createElement('div');
    widgetCTAdiv.id = 'widgetCTA';
    widgetCTAdiv.innerHTML = `<svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M68.3444 63.3259L58.6581 60.1076C58.1125 59.9302 57.5182 59.9795 57.0097 60.2443C52.127 62.7212 46.5659 63.5402 41.1726 62.5777C35.7802 61.6145 30.8505 58.922 27.1336 54.9093C28.6949 54.8773 30.2518 54.7264 31.7901 54.4591C37.6429 53.3968 43.0371 50.5959 47.2644 46.4236C51.4916 42.2513 54.3546 36.9028 55.4779 31.0795C56.5578 25.3639 55.9431 19.4587 53.7089 14.086C60.6472 16.4275 66.2176 21.6663 68.965 28.4338C71.7132 35.2018 71.366 42.8277 68.0142 49.3197C67.7442 49.8284 67.6929 50.4245 67.8721 50.9719L71.0892 60.5907H71.0886C71.3487 61.3679 71.1454 62.2245 70.5646 62.8034C69.9833 63.3829 69.1239 63.5849 68.3442 63.3262L68.3444 63.3259ZM31.0017 50.0749C25.5561 51.0806 19.9301 50.272 14.9907 47.7735C14.4822 47.5087 13.8878 47.4594 13.3423 47.6368L3.65593 50.8551C2.87622 51.1144 2.01686 50.9118 1.43545 50.3329C0.854685 49.7534 0.651427 48.8968 0.911529 48.1196L4.1286 38.5008C4.30716 37.954 4.25588 37.3572 3.98589 36.8486C0.750307 30.5523 0.331959 23.187 2.833 16.5665C5.33454 9.94629 10.5238 4.68649 17.1223 2.08205C23.7214 -0.522391 31.1162 -0.229155 37.486 2.89002C43.8558 6.00857 48.6094 11.6631 50.5754 18.4602C52.5407 25.2578 51.5361 32.5666 47.8088 38.5863C44.0815 44.6061 37.9779 48.7778 31.0006 50.0741L31.0017 50.0749ZM13.2066 22.0725C13.2066 22.6631 13.442 23.2296 13.8608 23.6472C14.2797 24.0647 14.8481 24.2994 15.4406 24.2994H36.8878C38.1216 24.2994 39.1219 23.3023 39.1219 22.0725C39.1219 20.8427 38.1216 19.8456 36.8878 19.8456H15.4406C14.8481 19.8456 14.2797 20.0803 13.8608 20.4978C13.442 20.9153 13.2066 21.4819 13.2066 22.0725ZM30.1856 30.9799C30.1856 30.3893 29.9502 29.8234 29.5313 29.4052C29.1118 28.9877 28.544 28.7531 27.9515 28.7531H15.4403C14.2077 28.7555 13.2099 29.7519 13.2099 30.9799C13.2099 32.2085 14.2077 33.2049 15.4403 33.2068H27.9515C28.544 33.2074 29.1118 32.9728 29.5313 32.5552C29.9502 32.1371 30.1856 31.5711 30.1856 30.9799Z" fill="#99631B"/>
    </svg>`;

    let widgetDiv = document.createElement('div');
    widgetDiv.className = 'bikayi-widget-overlay';
    widgetDiv.innerHTML = `       <div class="main">
       <div class="widget-conatiner" style="background-color:#e0e0e0">
           <div class="header-container">
               <img src='https:&#x2F;&#x2F;firebasestorage.googleapis.com&#x2F;v0&#x2F;b&#x2F;bikayi-chat.appspot.com&#x2F;o&#x2F;image_TSKeGkldsuWbIV2QHOXc0CSngBx2_Critical-period-China-looks-to-secure-national-food-supply-by-focusing-on-technology-and-manpower-upgrades.jpeg.jpg?alt&#x3D;media&amp;token&#x3D;030f2664-84b9-488a-aa62-f57defe2a7c9'>
               <div class="title">
                   Blahh blahh shit
               </div>
           </div>
           <div class="content-container">
               <div class="redirects">
                   <div class="redirect-elems">
                    <img src='Whatsapp.png'>
                    <a href="//api.whatsapp.com/send?phone=8825173058&amp;text=HOLA">
                     Open Whatsapp
                    </a>
                   </div>
                   <div class="redirect-elems">
                    <img src='Messenger.png'>
                    <a href="//api.whatsapp.com/send?phone=8825173058&amp;text=HOLA">
                      Open Facebook Messenger
                    </a>
                   </div>


               </div>
               
           </div>
       </div> 
       <div id="close-widget">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z" fill="#616161"/>
            </svg>
       </div>
       </div>
       </div>


`;

    document.body.appendChild(widgetCTAdiv);
    document.body.appendChild(widgetDiv);
    
    widgetCTAdiv.addEventListener('click', () => {
        widgetDiv.style.display = 'block';
        widgetCTAdiv.style.display = 'none';
        // widgetDiv.classList.remove('bikayi-hidden-item');
        // widgetCTAdiv.classList.add('bikayi-hidden-item');
        document.body.classList.add('overflow-hidden');
    })
    const closeDiv = document.getElementById('close-widget');
    if(closeDiv) {
        closeDiv.addEventListener('click', () => {
            document.body.classList.remove('overflow-hidden');
            widgetDiv.classList.add('bikayi-hidden-item');
            widgetCTAdiv.classList.remove('bikayi-hidden-item');
        })
    }



}
addWidgetCTA();
