import BigPage from './BigScreen/BigPage';
import SmallPage from './SmallScreen/SmallPage';
import { useState, useEffect } from 'react';

const ChatApp = () => {
    useEffect(() => {
        document.title = 'Instant Chat App';
        document.body.setAttribute(
            'style',
            'background: #BADECB;' +
                '  -webkit-background-size: cover;' +
                '-moz-background-size: cover;' +
                '-o-background-size: cover;' +
                'background-size: cover'
        );
    });

    const [currentPage, setCurrentPage] = useState();
    const [wasSmallened, setWasSmalled] = useState(false);
    const [isFirst, setIsFirst] = useState(true);

    const windowSize = UpdateHomeFromSize();

    if (
        !wasSmallened &&
        (windowSize.width < 802 || windowSize.height < 520 || windowSize.widthToHeight < 1.2)
    ) {
        setWasSmalled(true);
        setCurrentPage(<SmallPage />);
    }
    if (
        (isFirst || wasSmallened) &&
        windowSize.width >= 802 &&
        windowSize.height >= 520 &&
        windowSize.widthToHeight >= 1.2
    ) {
        setCurrentPage(<BigPage />);
        setWasSmalled(false);
        setIsFirst(false);
    }

    return <div>{currentPage}</div>;
};

function UpdateHomeFromSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        widthToHeight: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
                widthToHeight: parseInt(window.innerWidth) / parseInt(window.innerHeight),
            });
        }
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export default ChatApp;
