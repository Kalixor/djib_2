import React, { useState } from "react";
import Select from "react-select";

const CustomSingleSelect = ({ selectedOption, setSelectedOption, placeHolder = "", fowardChange, options = [] }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const customStyles = {
        control: (base) => ({
            ...base,
            backgroundColor: 'rgba(8, 16, 40, 0.5)',
            backdropFilter: 'blur(12px)',
            borderColor: 'rgba(0, 194, 255, 0.5)',
            minHeight: '32px',
            boxShadow: 'none',
            '&:hover': { borderColor: '#00c2ff' }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: '#0b1739',
            border: '1px solid rgba(0, 194, 255, 0.5)',
            backdropFilter: 'blur(12px)',
            zIndex: 9999, // Ensure the dropdown is on top
            position: "absolute",
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#00c2ff" : "#081028",
            color: state.isFocused ? '#0b1739' : '#aeb9e1',
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            cursor: "pointer",
            gap: "8px",
            padding: "8px",
            margin: "5px 0",
            borderRadius: "5px",
        }),
        singleValue: (base) => ({
            ...base,
            color: '#aeb9e1'
        }),
        valueContainer: (base) => ({
            ...base,
            display: "flex",
            flexWrap: "nowrap",
            overflow: "hidden",
            color: "#aeb9e1",
        }),
        input: (provided) => ({
            ...provided,
            color: '#aeb9e1'
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#aeb9e1'
        }),
        indicatorSeparator: () => ({ display: 'none' }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#aeb9e1',
            padding: '4px',
            '&:hover': { color: '#00c2ff' }
        }),
        clearIndicator: (provided) => ({
            ...provided,
            color: '#aeb9e1',
            padding: '4px',
            '&:hover': { color: '#00c2ff' }
        })
    };

    const handleChange = (selected) => {
        // setSelectedOption(selected);
        setMenuIsOpen(false);
        fowardChange(selected);
    };

    return (
        <Select
            options={options}
            closeMenuOnSelect={true}
            value={selectedOption}  // Ensure the selected option is passed correctly
            onChange={handleChange}
            onMenuOpen={() => setMenuIsOpen(true)}
            onMenuClose={() => setMenuIsOpen(false)}
            menuIsOpen={menuIsOpen}
            placeholder={placeHolder}
            styles={customStyles}
            classNamePrefix="react-select"
            // isClearable  
            noOptionsMessage={() => "Aucune option disponible"}
        />
    );
};

export default CustomSingleSelect;
