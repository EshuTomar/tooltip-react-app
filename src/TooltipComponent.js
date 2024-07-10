import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

function TooltipComponent({position}) {
    return(
        <>
        <OverlayTrigger 
            className ="tooltip" 
            placement={position} 
            overlay={
                <Tooltip id={`tooltip-${position}`}>
                    Thanks for Hovering, I am a Tooltip !
                </Tooltip>
            }
        >
            <Button variant="info">Hover me !!</Button>
        </OverlayTrigger>    
         </>
    )
}
export default TooltipComponent;