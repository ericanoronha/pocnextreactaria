import { useRef } from 'react';
import { useSelect, HiddenSelect } from '@react-aria/select';
import { useButton } from '@react-aria/button';
import { useSelectState } from '@react-stately/select';
import { ReactAriaPopover } from './ReactAriaPopover';
import { ReactAriaListBox } from './ReactAriaListBox';

function ReactAriaSelect(props: any) {
  let state = useSelectState(props);

  let ref = useRef(null);
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref,
  );
  let { buttonProps } = useButton(triggerProps, ref);

  return (
    <div aria-label={props.label}>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <button {...buttonProps} ref={ref} style={{ height: 30, fontSize: 14 }}>
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : 'Select an option'}
        </span>
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>
          ⋁
        </span>
      </button>
      {state.isOpen && (
        <ReactAriaPopover isOpen={state.isOpen} onClose={state.close}>
          <ReactAriaListBox {...menuProps} state={state} />
        </ReactAriaPopover>
      )}
    </div>
  );
}

export { ReactAriaSelect };
