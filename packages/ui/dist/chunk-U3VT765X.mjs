import { jsxs, jsx } from 'react/jsx-runtime';

var u=({logo:i,title:r,description:a,variant:t="primary"})=>jsxs("div",{className:`ui-flex ui-flex-col ui-gap-4 ui-w-80 ${t==="secondary"?"ui-items-center ui-justify-center ui-content-center":"ui-items-center ui-justify-center ui-content-center sm:ui-items-start sm:ui-justify-start sm:ui-content-start"}`,children:[i,jsx("p",{className:t==="primary"?"ui-text-heading6 ui-text-label-light-primary":"ui-text-heading8 ui-text-brand-light-primary",children:r}),jsx("p",{className:t==="primary"?"ui-text-heading8 ui-text-label-light-tertiary ui-text-center sm:ui-text-start":"ui-text-body3 ui-text-default-systemGrey-light-1 ui-text-center",children:a})]});

export { u as a };
