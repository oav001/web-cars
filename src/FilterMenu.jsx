import React, { useState } from "react";

const initialFilters = {
  category: ["Electronics", "Clothing", "Books", "Home & Garden"],
  price: ["Under $50", "$50 - $100", "$100 - $200", "Over $200"],
  brand: ["Apple", "Samsung", "Nike", "Adidas"],
  rating: ["5 Stars", "4 Stars & Up", "3 Stars & Up", "2 Stars & Up"],
};

export default function FilterMenu() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    price: [],
    brand: [],
    rating: [],
  });

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleFilter = (category, filter) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(filter)
        ? prev[category].filter((f) => f !== filter)
        : [...prev[category], filter],
    }));
  };

  const addCustomFilter = () => {
    const category = prompt(
      "Select a category (category, price, brand, or rating):"
    );
    if (
      category &&
      Object.keys(initialFilters).includes(category.toLowerCase())
    ) {
      const customFilter = prompt(`Enter a custom ${category} filter:`);
      if (customFilter) {
        setSelectedFilters((prev) => ({
          ...prev,
          [category.toLowerCase()]: [
            ...prev[category.toLowerCase()],
            customFilter,
          ],
        }));
      }
    } else {
      alert(
        "Invalid category. Please choose from category, price, brand, or rating."
      );
    }
  };

  return (
    <div className="filter-menu-container">
      <div className="filter-menu-wrapper">
        <nav className="filter-menu">
          {Object.keys(initialFilters).map((category) => (
            <div key={category} className="filter-dropdown">
              <button
                onClick={() => toggleDropdown(category)}
                className="dropdown-toggle"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
                <span className="arrow">
                  {openDropdown === category ? "▲" : "▼"}
                </span>
              </button>
              {openDropdown === category && (
                <div className="dropdown-content">
                  {initialFilters[category]
                    .concat(selectedFilters[category])
                    .map((filter) => (
                      <label key={filter} className="filter-option">
                        <input
                          type="checkbox"
                          checked={selectedFilters[category].includes(filter)}
                          onChange={() => toggleFilter(category, filter)}
                        />
                        {filter}
                      </label>
                    ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <button onClick={addCustomFilter} className="add-filter-btn">
          + Agregar Otro Filtro
        </button>
      </div>

      <style jsx>{`
        .filter-menu-container {
          background-color: #f0f0f0;
          padding: 20px;
          border-radius: 5px;
          display: flex;
          justify-content: center;
        }

        .filter-menu-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
          width: 100%;
        }

        .filter-menu {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin-right: 20px;
        }

        .filter-dropdown {
          position: relative;
        }

        .dropdown-toggle {
          background-color: #ffffff;
          border: 1px solid #ddd;
          padding: 10px 15px;
          cursor: pointer;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-width: 150px;
        }

        .arrow {
          margin-left: 10px;
        }

        .dropdown-content {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #ffffff;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
          z-index: 1;
          min-width: 200px;
          max-height: 300px;
          overflow-y: auto;
        }

        .filter-option {
          display: block;
          margin-bottom: 5px;
        }

        .add-filter-btn {
          background-color: #4caf50;
          color: white;
          border: none;
          padding: 10px 15px;
          cursor: pointer;
          border-radius: 5px;
          font-size: 16px;
          white-space: nowrap;
          height: fit-content;
        }

        .add-filter-btn:hover {
          background-color: #45a049;
        }

        @media (max-width: 768px) {
          .filter-menu-wrapper {
            flex-direction: column;
          }

          .filter-menu {
            flex-direction: column;
            align-items: center;
            margin-right: 0;
            margin-bottom: 20px;
          }

          .filter-dropdown {
            width: 100%;
            max-width: 300px;
          }

          .dropdown-toggle {
            width: 100%;
          }

          .add-filter-btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
}
