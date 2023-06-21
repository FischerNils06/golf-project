import "./style.css";
const fallspeed = 0.1;

export default function fall(golfball, plane) {
    golfball.position.y = golfball.position.y - fallspeed;
    hitground(golfball,plane);
}
    
export function hitground(golfball, plane) {
    const roundedY = golfball.position.y.toFixed(40);
    if (roundedY <= plane.position.y + 0.3) {
        golfball.position.y = golfball.position.y + fallspeed;
}
}