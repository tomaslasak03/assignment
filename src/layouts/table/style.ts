import { styled } from '@config/theme';

export const TableContainerS = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  px: '$6',
});

export const TableS = styled('div', {
  maxWidth: '$table',
  width: '100%',
});

export const TableHeadS = styled('div', {
  position: 'relative',
  width: '100%',
  backgroundColor: '$bg_invert',
  tt: true,
  px: '$4',
  py: '$3',
  br: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxShadow: '$dark',
  zIndex: 3,
  span: {
    color: '$txt_invert',
    tt: true,
    textAlign: 'center',
    flex: 1,
    px: '$3',
    fontSize: '$md',
    fontWeight: 500,
  },
});

export const TableBodyS = styled('div', {
  zIndex: 2,
  width: '100%',
  tt: true,
  br: '0 0 $2 $2',
  boxShadow: '$light',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  mb: '$6',
  '&::before': {
    tt: true,
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '$box',
    transform: `translateY(-40px)`,
    backgroundColor: '$bg_box',
  },
  'div:last-child': {
    borderBottom: 'none',
    br: '0 0 $2 $2',
  },
  '.infinite-scroll-component': {
    overflow: 'hidden !important',
  },
});

export const TableRowS = styled('div', {
  px: '$4',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  py: '$3',
  tt: true,
  borderBottom: '2px solid $bg_light',
  cursor: 'pointer',
  backgroundColor: '$bg_box',
  '&:hover': {
    opacity: 0.7,
  },
  span: {
    color: '$txt',
    tt: true,
    textAlign: 'center',
    flex: 1,
    px: '$3',
    fontSize: '$sm',
    fontWeight: 400,
  },
  '.tableBodyIcon': {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export const TableLoading = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  py: '$3',
  tt: true,
  backgroundColor: '$bg_box',
});
