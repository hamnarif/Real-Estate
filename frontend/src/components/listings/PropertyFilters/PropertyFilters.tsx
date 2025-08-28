type PropertyFiltersProps = {
  onChange?: (filters: Record<string, string>) => void;
};

export default function PropertyFilters({ onChange }: PropertyFiltersProps) {
  const handleChange = (key: string, value: string) => {
    onChange?.({ [key]: value });
  };
  return (
    <form className={"propertyFilters"}>
      <select onChange={(e) => handleChange('type', e.target.value)}>
        <option value="">Type</option>
        <option value="house">House</option>
        <option value="condo">Condo</option>
      </select>
      <select onChange={(e) => handleChange('beds', e.target.value)}>
        <option value="">Beds</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
      </select>
    </form>
  );
}


