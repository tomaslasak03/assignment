import { styled } from '@config/theme';

export const SettingsTitleS = styled('h2', {
  fontSize: '$md',
  color: '$txt',
  tt: true,
  fontWeight: 700,
  textTransform: 'uppercase',
  textAlign: 'center',
});

export const SettingsSubtitleS = styled('h2', {
  fontSize: '$xsm',
  color: '$txt_secondary',
  tt: true,
  fontWeight: 400,
  textAlign: 'center',
  my: '$1',
});

export const SetttingsItemS = styled('div', {
  width: '100%',
  py: '$1',
  px: '$2',
  backgroundColor: '$bg_buttons',
  boxShadow: '$light',
  color: '$txt',
  br: '$1',
  mb: '$1',
  fontSize: '$sm',
  fontWeight: 500,
});

export const SettingsItemContainerS = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const SettingsBoxS = styled('div', {
  width: '$popup',
  height: 'auto',
  backgroundColor: '$bg_box',
  tt: true,
  boxShadow: '$light',
  br: '$2',
  px: '$2',
  pt: '$2',
  pb: '$1',
  position: 'absolute',
  top: 0,
  right: 0,
});
