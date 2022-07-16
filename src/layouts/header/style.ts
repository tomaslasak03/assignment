import { styled } from '@config/theme';

export const HeaderS = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  py: '$4',
  px: '$5',
});

export const LogoBoxS = styled('a', {
  display: 'block',
  width: 200,
  height: 'auto',
  svg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  'svg path': {
    tt: true,
    fill: '$txt',
  },
});
