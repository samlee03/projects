import React from 'react'
import "../styles/Filter.css"
function Filter() {
  return (
    <div className='Filter'>
        <div>
            <h3 className='filter-title'>Filters</h3>
            <div className='subcategory'>
                <h3>Brands</h3>
                <div>
                    <input id='Brand#1' type='checkbox' name='test'/>
                    <label for='Brand#1'>Brand #1</label>
                </div>
                <div>
                    <input id='Brand2' type='checkbox' name='test'/>
                    <label for='Brand2'>Brand #2</label>
                </div>
                <div>
                    <input id='Brand3' type='checkbox' name='test'/>
                    <label for='Brand3'>Brand #3</label>
                </div>
            </div>
            <div className='subcategory'>
                <h3>Condition</h3>
                <div>
                    <input id='new#1' type='checkbox' name='test'/>
                    <label for='new#1'>New</label>
                </div>
                <div>
                    <input id='renew' type='checkbox' name='test'/>
                    <label for='renew'>Used</label>
                </div>
                <div>
                    <input id='used' type='checkbox' name='test'/>
                    <label for='used'>Renewed</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter