import { useNavigate } from "react-router-dom";

const useNavigation = () => {
    const navigate = useNavigate()

    const navigateToGenre = (genre) => {
        navigate(`/games/${genre.toLowerCase()}`);
    };

    const navigateToPlatform = (platform) => {
        navigate(`/games/platform/${platform.toLowerCase().replace(/\s+/g, '-')}`);
    };

    return {
        navigateToGenre,
        navigateToPlatform
    };
};

export default useNavigation;
