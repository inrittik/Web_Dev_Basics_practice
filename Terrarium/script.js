dragElement(document.getElementById("image1"));
dragElement(document.getElementById("image2"));
dragElement(document.getElementById("image3"));
dragElement(document.getElementById("image4"));
dragElement(document.getElementById("image5"));
dragElement(document.getElementById("image6"));
dragElement(document.getElementById("image7"));
dragElement(document.getElementById("image8"));
dragElement(document.getElementById("image9"));
dragElement(document.getElementById("image10"));
dragElement(document.getElementById("image11"));
dragElement(document.getElementById("image12"));
dragElement(document.getElementById("image13"));
dragElement(document.getElementById("image14"));

function dragElement(terrariumElement) {
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	terrariumElement.onpointerdown = pointerDrag;
    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;

    }function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
    
}
