import "./style.css";


export default function fall(golfball, plane) {
    golfball.position.y = golfball.position.y - 0.005;
    hitground(golfball,plane);
}
    
export function hitground(golfball, plane) {
    const roundedY = golfball.position.y.toFixed(3);
    if (roundedY == plane.position.y + 0.3) {
        golfball.position.y = golfball.position.y + 0.005;
    }
}