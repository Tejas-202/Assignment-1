import React from 'react'
import "./filters.css";

const filters = [
    {
        id:1,
        title: "Select Career"
    },
    {
        id:2,
        title: "College Year"
    },
    {
        id:1,
        title: "Location"
    },
]; 

function FilterOptions() {
  return (
    <div className='filter-option'>
        <div className='max-width filters'>
            {filters.map((optons) => {
                return (
                    <div className='options absolute-center'>
                        <div className='absolute-center'>{optons.title}
                            <i className="fi fi-rr-caret-down down-arrow-symbol absolute-center"></i>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default FilterOptions