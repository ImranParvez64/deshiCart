"use client";

const CategoryFilter = ({ category }) => {
    return (
        <div className="flex flex-col gap-4">
                <label
                    key={category.id}
                    className="flex items-center gap-3 cursor-pointer select-none px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                    <input
                        type="checkbox"
                        name="category"
                        value={category.name}
                        className="hidden peer"
                    />
                    <span className="w-4 h-4 border-2 border-gray-400 rounded-full peer-checked:bg-teal-500 peer-checked:border-teal-500 transition"></span>
                    <h1 className="uppercase font-semibold text-gray-600 peer-checked:text-teal-600">
                        {category.name}
                    </h1>
                </label>
        </div>
    );
};

export default CategoryFilter;
