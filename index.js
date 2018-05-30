/** working data **/
const tesData = [ {
            title: 'Model S',
            img: 'https://www.tesla.com/tesla_theme/assets/img/models/v1.0/section-hero-background.jpg?20180111',
            copy: 'Model S sets an industry standard for performance and safety. Tesla’s all-electric powertrain delivers unparalleled performance in all weather conditions—with dual motor all-wheel drive, ludicrous acceleration and the highest safety rating of any car ever tested.'
        },
        {
            title: 'Model X',
            img: 'https://electrek.files.wordpress.com/2016/06/tesla-model-x-promo-shot-3-2.jpg?quality=82&strip=all&w=1600',
            copy: 'Autopilot advanced safety and convenience features are designed to assist you with the most burdensome parts of driving. Model X comes standard with advanced hardware capable of providing Enhanced Autopilot features today, and full self-driving capabilities in the future.'
        },
        {
            title: 'Model 3',
            img: 'https://cnet1.cbsistatic.com/img/O5SGE9JUnQbLm9tRX51hhQA0ycQ=/724x407/2018/01/26/43b10af3-12d3-432a-b611-31615692b416/2018-tesla-model-3-56-of-161.jpg',
            copy: 'Model S is our flagship, premium sedan with more range, acceleration, displays and customization options. It’s the safest car in its class with unlimited Supercharging for the duration of ownership when referred by an owner.'
        },
        {
            title: 'Roadster',
            img: 'https://amp.businessinsider.com/images/5a0e6fe5f914c353018b4838-750-375.jpg',
            copy: 'As an all-electric supercar, Roadster maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency.'
        }
    ];

/** working data **/
const jagData = [ {
            title: 'E-PACE',
            img: 'https://jaguar.ssl.cdn.sdlmedia.com/636426230161341546JU.jpg?v=10#desktop_640x318',
            copy: 'Agile handling, head-turning good looks and outstanding practicality – this is the very essence of the E-PACE. Features include all‑round exterior LED lighting, state-of-the-art Driver Assistance systems and a 10” touchscreen that delivers rich audiovisual infotainment.'
        },
        {
            title: 'E-PACE S',
            img: 'https://jaguar.ssl.cdn.sdlmedia.com/636426230178770761FG.jpg?v=10#desktop_910x600',
            copy: 'The E-PACE S adds a beautifully crafted grained leather trimmed interior. Enhanced technology includes Connect Pro, featuring a 4G Wi-Fi Hotspot and Navigation Pro, allowing you to save your favorite places and use pinch and zoom gestures for simple map exploration. The Park Pack helps you park and maneuver securely.'
        },
        {
            title: 'E-PACE SE',
            img: 'https://jaguar.ssl.cdn.sdlmedia.com/636347631573024203WW.jpg?v=14#desktop_1366x769',
            copy: 'An innovative combination of refinement, functionality and advanced technology. The E‑PACE SE comes with 14-way memory front seats, powered tailgate and the superb Meridian™ Sound System. To make every journey more relaxing and more enjoyable, the E‑PACE SE also includes the Drive Pack.'
        }
    ];

const button1 = document.getElementsByClassName("myButton1")[0];
const paragraphArea = document.getElementsByClassName("paragraph")[0];
const move1 = () => move(tesData);
const move2 = () => move(jagData);

function move(carData){
  paragraphArea.innerHTML = "";
  for(let i = 0; i < carData.length; i++){
    var tesTitle = document.createElement("h1");
    tesTitle.innerHTML = carData[i].title;
    var tesImage = document.createElement("img");
    tesImage.setAttribute('src', carData[i].img);
    tesImage.setAttribute('width', '300px');
    tesImage.setAttribute('height', 'auto');
    var tesCopy = document.createElement("p");
    tesCopy.innerHTML = carData[i].copy;
    var tesDiv = document.createElement("div");

    tesDiv.appendChild(tesTitle);
    tesDiv.appendChild(tesImage);
    tesDiv.appendChild(tesCopy);
    tesDiv.class = "hello";
    paragraphArea.appendChild(tesDiv);
    }
}
