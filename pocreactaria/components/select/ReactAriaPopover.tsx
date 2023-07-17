import { useRef } from 'react';
import { DismissButton, useOverlay } from '@react-aria/overlays';
import { FocusScope } from '@react-aria/focus';

function ReactAriaPopover(props: any) {
  let ref = useRef(null);
  let { popoverRef = ref, isOpen, onClose, children } = props;

  let { overlayProps } = useOverlay(
    {
      isOpen,
      onClose,
      shouldCloseOnBlur: true,
      isDismissable: true,
    },
    popoverRef,
  );

  return (
    <FocusScope restoreFocus>
      <div
        {...overlayProps}
        ref={popoverRef}
        style={{
          position: 'absolute',
          width: '100%',
          border: '1px solid gray',
          background: 'lightgray',
          marginTop: 4,
        }}
      >
        {children}
        <DismissButton onDismiss={onClose} />
      </div>
    </FocusScope>
  );
}

export { ReactAriaPopover };
