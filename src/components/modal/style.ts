import { styled } from '@config/theme';

export const ModalS = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 4,
});

export const ModalBackgroundS = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#00000080',
});

export const ModalBoxS = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 2,
  width: '100%',
  height: '100%',
  px: '$5',
  py: '$5',
  pointerEvents: 'none',
});

export const ModalContentS = styled('div', {
  position: 'relative',
  backgroundColor: '$bg_box',
  br: '$2',
  width: '$modal',
  pointerEvents: 'all',
  boxShadow: '$dark',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  py: '$4',
  px: '$4',
});

export const ModalPlayerS = styled('div', {
  ratio169: 1200,
  '.videoPlayer': {
    height: '100%',
    width: '100%',
  },
  '.videoPlayerFrame': {
    height: '100%',
    width: '100%',
    boxShadow: '$dark',
    br: '$2',
  },
});

export const ModalLoadingComponentS = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ModalTitleS = styled('h1', {
  fontSize: '$xlg',
  fontWeight: 900,
  mb: '$4',
});

export const ModalExitS = styled('span', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: 10,
  right: 10,
  size: 20,
  cursor: 'pointer',
});
