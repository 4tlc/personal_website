import TwentyOneTitle from "./Title/TwentyOneTitle";
import { Parallax } from "react-scroll-parallax";
import IconOutline from "../IconOutline";

//import icons
import MetFinBG from '../ProjectIcons/MetFinBackground.jpg';
import FishFeedBG from '../ProjectIcons/FishyFeederBackground.jpg';

const TwentyOne = () => {
    return (
        <div>
            <TwentyOneTitle />
            <Parallax scale={[1, 1.2]} style={{
                marginTop: '3%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <IconOutline img={FishFeedBG} linkTo="/FishyFeeder" altImg="Fishy Feeder" firstwords="Fishy" secondWords="Feeder" />
                <IconOutline img={MetFinBG} linkTo="/MeteorFingers" altImg="Meteor Fingers" firstwords="Meteor" secondWords="Fingers" />
            </Parallax>
        </div>
    );
}

export default TwentyOne;