import React, { type FC, memo, useEffect } from '../../lib/teact/teact';

import buildClassName from '../../util/buildClassName';
import buildStyle from '../../util/buildStyle';
import captureEscKeyListener from '../../util/captureEscKeyListener';
import freezeWhenClosed from '../../util/hoc/freezeWhenClosed';
import { IS_BACKDROP_BLUR_SUPPORTED } from '../../util/windowEnvironment';
import { preventMessageInputBlurWithBubbling } from '../middle/helpers/preventMessageInputBlur';

import useAppLayout from '../../hooks/useAppLayout';
import useEffectWithPrevDeps from '../../hooks/useEffectWithPrevDeps';
import { dispatchHeavyAnimationEvent } from '../../hooks/useHeavyAnimationCheck';
import useHistoryBack from '../../hooks/useHistoryBack';
import useKeyboardListNavigation from '../../hooks/useKeyboardListNavigation';
import useLastCallback from '../../hooks/useLastCallback';
import useShowTransition from '../../hooks/useShowTransition';
import useVirtualBackdrop from '../../hooks/useVirtualBackdrop';

import Portal from './Portal';

import './Menu.scss';

type OwnProps = {
  ref?: React.RefObject<HTMLDivElement>;
  containerRef?: React.RefObject<HTMLElement>;
  isOpen: boolean;
  shouldCloseFast?: boolean;
  id?: string;
  className?: string;
  bubbleClassName?: string;
  style?: string;
  bubbleStyle?: string;
  ariaLabelledBy?: string;
  transformOriginX?: number;
  transformOriginY?: number;
  positionX?: 'left' | 'right';
  positionY?: 'top' | 'bottom';
  autoClose?: boolean;
  footer?: string;
  noCloseOnBackdrop?: boolean;
  backdropExcludedSelector?: string;
  noCompact?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<any>) => void;
  onCloseAnimationEnd?: () => void;
  onClose: () => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseEnterBackdrop?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  withPortal?: boolean;
  children?: React.ReactNode;
};

const ANIMATION_DURATION = 200;

const Menu: FC<OwnProps> = ({
  ref: externalRef,
  containerRef,
  shouldCloseFast,
  isOpen,
  id,
  className,
  bubbleClassName,
  style,
  bubbleStyle,
  ariaLabelledBy,
  children,
  transformOriginX,
  transformOriginY,
  positionX = 'left',
  positionY = 'top',
  autoClose = false,
  footer,
  noCloseOnBackdrop = false,
  backdropExcludedSelector,
  noCompact,
  onCloseAnimationEnd,
  onClose,
  onMouseEnter,
  onMouseLeave,
  withPortal,
  onMouseEnterBackdrop,
}) => {
  const { isTouchScreen } = useAppLayout();

  const { ref: menuRef } = useShowTransition({
    isOpen,
    ref: externalRef,
    onCloseAnimationEnd,
  });

  const backdropContainerRef = containerRef || menuRef;

  useEffect(
    () => (isOpen ? captureEscKeyListener(onClose) : undefined),
    [isOpen, onClose],
  );

  useHistoryBack({
    isActive: isOpen,
    onBack: onClose,
    shouldBeReplaced: true,
  });

  useEffectWithPrevDeps(([prevIsOpen]) => {
    if (isOpen || (!isOpen && prevIsOpen === true)) {
      dispatchHeavyAnimationEvent(ANIMATION_DURATION);
    }
  }, [isOpen]);

  const handleKeyDown = useKeyboardListNavigation(menuRef, isOpen, autoClose ? onClose : undefined, undefined, true);

  useVirtualBackdrop(
    isOpen,
    backdropContainerRef,
    noCloseOnBackdrop ? undefined : onClose,
    undefined,
    backdropExcludedSelector,
  );

  const bubbleFullClassName = buildClassName(
    'bubble menu-container custom-scroll',
    positionY,
    positionX,
    footer && 'with-footer',
    bubbleClassName,
    shouldCloseFast && 'close-fast',
  );

  const transformOriginYStyle = transformOriginY !== undefined ? `${transformOriginY}px` : undefined;
  const transformOriginXStyle = transformOriginX !== undefined ? `${transformOriginX}px` : undefined;

  const handleClick = useLastCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (autoClose) {
      onClose();
    }
  });

  const menu = (
    <div
      id={id}
      className={buildClassName(
        'Menu',
        !noCompact && !isTouchScreen && 'compact',
        !IS_BACKDROP_BLUR_SUPPORTED && 'no-blur',
        withPortal && 'in-portal',
        className,
      )}
      style={style}
      aria-labelledby={ariaLabelledBy}
      role={ariaLabelledBy ? 'menu' : undefined}
      onKeyDown={isOpen ? handleKeyDown : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={isOpen ? onMouseLeave : undefined}
    >
      {isOpen && (
        // This only prevents click events triggering on underlying elements
        <div
          className="backdrop"
          onMouseDown={preventMessageInputBlurWithBubbling}
          onMouseEnter={onMouseEnterBackdrop}
        />
      )}
      <div
        role="presentation"
        ref={menuRef}
        className={bubbleFullClassName}
        style={buildStyle(
          `transform-origin: ${transformOriginXStyle || positionX} ${transformOriginYStyle || positionY}`,
          bubbleStyle,
        )}
        onClick={handleClick}
      >
        {children}
        {footer && <div className="footer">{footer}</div>}
      </div>
    </div>
  );

  if (withPortal) {
    return <Portal>{menu}</Portal>;
  }

  return menu;
};

export const UnfreezableMenu = memo(Menu);

export default memo(freezeWhenClosed(Menu));
