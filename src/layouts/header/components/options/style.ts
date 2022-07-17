import { styled } from '@config/theme';

export const OptionsS = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
});

export const OptionBtnS = styled('span', {
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  tt: true,
  backgroundColor: '$bg_box',
  size: '$box',
  padding: '$1',
  boxShadow: '$light',
  br: '$1',
  svg: {
    stroke: '$txt',
  },
});
