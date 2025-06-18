// types/framer-motion.d.ts
declare module 'framer-motion' {
  import * as React from 'react';

  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    whileFocus?: any;
    whileDrag?: any;
    drag?: any;
    dragConstraints?: any;
    dragElastic?: any;
    dragMomentum?: any;
    dragTransition?: any;
    layout?: any;
    layoutId?: any;
    onAnimationStart?: any;
    onAnimationComplete?: any;
    onUpdate?: any;
    onDrag?: any;
    onDragStart?: any;
    onDragEnd?: any;
    onDirectionLock?: any;
    onDragTransitionEnd?: any;
    style?: any;
    className?: string;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export interface MotionComponent<T = any> extends React.ForwardRefExoticComponent<T & MotionProps & React.RefAttributes<any>> {}

  export const motion: {
    div: MotionComponent<React.HTMLAttributes<HTMLDivElement>>;
    span: MotionComponent<React.HTMLAttributes<HTMLSpanElement>>;
    p: MotionComponent<React.HTMLAttributes<HTMLParagraphElement>>;
    h1: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>>;
    h2: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>>;
    h3: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>>;
    h4: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>>;
    h5: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>>;
    h6: MotionComponent<React.HTMLAttributes<HTMLHeadingElement>>;
    a: MotionComponent<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
    button: MotionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>>;
    img: MotionComponent<React.ImgHTMLAttributes<HTMLImageElement>>;
    input: MotionComponent<React.InputHTMLAttributes<HTMLInputElement>>;
    form: MotionComponent<React.FormHTMLAttributes<HTMLFormElement>>;
    section: MotionComponent<React.HTMLAttributes<HTMLElement>>;
    article: MotionComponent<React.HTMLAttributes<HTMLElement>>;
    header: MotionComponent<React.HTMLAttributes<HTMLElement>>;
    footer: MotionComponent<React.HTMLAttributes<HTMLElement>>;
    nav: MotionComponent<React.HTMLAttributes<HTMLElement>>;
    main: MotionComponent<React.HTMLAttributes<HTMLElement>>;
    aside: MotionComponent<React.HTMLAttributes<HTMLElement>>;
    ul: MotionComponent<React.HTMLAttributes<HTMLUListElement>>;
    ol: MotionComponent<React.HTMLAttributes<HTMLOListElement>>;
    li: MotionComponent<React.LiHTMLAttributes<HTMLLIElement>>;
    [key: string]: MotionComponent<any>;
  };

  export interface AnimatePresenceProps {
    children?: React.ReactNode;
    initial?: boolean;
    onExitComplete?: () => void;
    exitBeforeEnter?: boolean;
    mode?: 'wait' | 'sync' | 'popLayout';
  }

  export const AnimatePresence: React.FC<AnimatePresenceProps>;
}
