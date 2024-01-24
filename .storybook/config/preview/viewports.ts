enum StorybookViewports {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

export const viewports = {
  defaultViewport: StorybookViewports.TABLET,
  viewports: {
    mobile: {
      name: StorybookViewports.MOBILE,
      styles: {
        width: '375px',
        height: '667px',
      },
    },
    tablet: {
      name: StorybookViewports.TABLET,
      styles: {
        width: '1024px',
        height: '768px',
      },
    },
    desktop: {
      name: StorybookViewports.DESKTOP,
      styles: {
        width: '1920px',
        height: '1080px',
      },
    },
  },
};
