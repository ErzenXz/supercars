import * as RS from '@radix-ui/react-select';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  ariaLabel: string;
  className?: string;
}

/**
 * Modern, accessible select built on Radix (shadcn-style): a pill trigger with a
 * chevron and a portalled, animated popover with check indicators.
 */
export function Select({ value, onValueChange, options, ariaLabel, className }: SelectProps) {
  return (
    <RS.Root value={value} onValueChange={onValueChange}>
      <RS.Trigger className={`ui-select ${className ?? ''}`} aria-label={ariaLabel}>
        <RS.Value />
        <RS.Icon className="ui-select-chevron">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </RS.Icon>
      </RS.Trigger>
      <RS.Portal>
        <RS.Content className="ui-select-content" position="popper" sideOffset={6} align="start">
          <RS.ScrollUpButton className="ui-select-scroll">↑</RS.ScrollUpButton>
          <RS.Viewport className="ui-select-viewport">
            {options.map((opt) => (
              <RS.Item key={opt.value} value={opt.value} className="ui-select-item">
                <RS.ItemText>{opt.label}</RS.ItemText>
                <RS.ItemIndicator className="ui-select-indicator">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </RS.ItemIndicator>
              </RS.Item>
            ))}
          </RS.Viewport>
          <RS.ScrollDownButton className="ui-select-scroll">↓</RS.ScrollDownButton>
        </RS.Content>
      </RS.Portal>
    </RS.Root>
  );
}
