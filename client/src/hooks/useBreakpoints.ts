import useMediaQuery from './useMediaQuery';
import Breakpoints from 'constants/breakpoints';

interface IUseBreakpoints {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const useBreakpoints = (): IUseBreakpoints => {
  return {
    isMobile: useMediaQuery(Breakpoints.MOBILE),
    isTablet: useMediaQuery(Breakpoints.TABLET),
    isDesktop: useMediaQuery(Breakpoints.DESKTOP),
  };
};

export default useBreakpoints;
