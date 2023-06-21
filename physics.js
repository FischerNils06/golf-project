import "./style.css";


export default function fall(golfball) {
    golfball.position.y = golfball.position.y - 0.005;
    console.log(golfball.position.y);
}
    
