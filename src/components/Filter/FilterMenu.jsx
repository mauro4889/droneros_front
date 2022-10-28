import React from 'react'
import { FilterContainer } from './FilterStyle'

export const FilterMenu = () => {
    return (
        <FilterContainer>
            <form action="">
                <select name="DRONES" id="">
                    <option value="fotografia">Fotografia</option>
                    <option value="fpv">FPV</option>
                    <option value="principiantes">Principiantes</option>
                    <option value="agricultura">Agricultura</option>
                    <option value="Accesorios">Accesorios</option>
                </select>
            </form>
        </FilterContainer>
    )
}
