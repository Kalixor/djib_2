const SelectionDisplay = ({ label, selectedOptions, removeSelection }) => {
return (
    <div className="w-1/2 bg-gray-900 p-4 rounded-lg">
    <h3 className="text-[#aeb9e1] text-lg mb-2">{label}</h3>
    <ul>
        {selectedOptions.map(option => (
        <li key={option.value} className="flex justify-between items-center bg-gray-800 p-2 rounded-lg mb-2">
            <span className="text-[#aeb9e1]">{option.label}</span>
            <button 
            className="text-red-500 hover:text-red-700"
            onClick={() => removeSelection(option)}
            >
            ✖
            </button>
        </li>
        ))}
    </ul>
    </div>
);
};

export default SelectionDisplay;

