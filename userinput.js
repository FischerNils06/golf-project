
export default function userinput(golfball) {

document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        golfball.position.y = golfball.position.y + 1
        
    }
});

}