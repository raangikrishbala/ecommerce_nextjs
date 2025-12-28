'use client';

interface FilterDropdownProps {
  options: Array<{ value: string; label: string }>;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function FilterDropdown({ 
  options, 
  defaultValue = '', 
  onChange 
}: FilterDropdownProps) {
  return (
    <div className="d-flex justify-content-end gap-2">
      <div className="one" style={{ width: '100%', maxWidth: '15rem' }}>
        <div className="form-group form-group-sm">
          <div className="select-custom">
            <select 
              className="form-control form-control-sm"
              defaultValue={defaultValue}
              onChange={(e) => onChange?.(e.target.value)}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
