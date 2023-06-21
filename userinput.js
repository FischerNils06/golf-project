
export default function userinput(golfball) {

document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        console.log(golfball.position.x);
        
    }
});

}